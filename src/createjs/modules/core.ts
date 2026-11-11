import { BLEND_MODES, Container, DisplayObject, Point } from 'pixi.js';
import { CjsTransform, suspendPixiWriteLog, resumePixiWriteLog, takePixiWrites } from './transform';
import type { CreatejsMovieClip } from './MovieClip';
import type { CreatejsSprite } from './Sprite';
import type { CreatejsShape } from './Shape';
import type { CreatejsBitmap } from './Bitmap';
import type { CreatejsText } from './Text';

export interface ITickerData {
	delta: number;
}

export type TCreatejsMask = CreatejsShape | null;

/**
 * The wrapper display object classes - what addCreatejs and friends accept.
 * The contract is "wraps a real createjs.DisplayObject": Animate's library
 * can only publish symbols (MovieClip) and image assets (Bitmap / Sprite)
 * as lib classes, and Shape / Text exist as inline members of published
 * symbols, but all of them are display objects. CreatejsGraphics is
 * deliberately NOT part of this union: the real createjs.Graphics is a
 * drawing-command container, not a DisplayObject (it is reached through
 * `shape.graphics`, never placed on a display list).
 */
export type TCreatejsObject =
	| CreatejsMovieClip
	| CreatejsSprite
	| CreatejsShape
	| CreatejsBitmap
	| CreatejsText;

/**
 * Key of the wrapper data on a createjs object (a display object or a
 * Graphics). The wrapper data is held by the object itself, not by a WeakMap:
 * it is read on every node on every frame and on every display-list change,
 * and a property costs less to read and to set up. A symbol key keeps the
 * createjs object's surface as it is: for-in, Object.keys and
 * Object.getOwnPropertyNames do not show it.
 */
export const PIXI_DATA: unique symbol = Symbol('pixiData');

/**
 * Minimal surface of a createjs display object consumed by the sync walks.
 * All members are plain data properties on the createjs side.
 */
export interface ICreatejsSyncNode {
	[PIXI_DATA]?: IPixiData<Container>;
	x: number;
	y: number;
	scaleX: number;
	scaleY: number;
	regX: number;
	regY: number;
	skewX: number;
	skewY: number;
	rotation: number;
	visible: boolean;
	alpha: number;
	_off?: boolean;
	children?: ICreatejsSyncNode[];
}

/**
 * Contract of every wrapper display object class.
 * Implementations are supplied per class (no mixin); this interface makes the
 * compiler verify that nothing is missing.
 *
 * Only members createjs itself does not provide at all belong here. `pixi`
 * and `updateBlendModeForPixi` have no createjs counterpart. `mask` (and
 * addEventListener / removeEventListener / removeAllEventListeners) are real
 * createjs.Xxx members - guaranteed to exist by `extends`, once a wrapper
 * class extends the real class - so redeclaring them here would just be a
 * second, redundant constraint on top of the override check `extends`
 * already performs. (This interface only guarantees a member's *signature*
 * exists when the class is used, not that the override behind it does the
 * right thing - that part is left to each class's own implementation and its
 * `@ts-expect-error` justification comments.)
 */
export interface ICreatejsDisplayObject<T extends DisplayObject> {
	readonly pixi: T;
	updateBlendModeForPixi(mode: BLEND_MODES): void;
}

/**
 * What a child passed to the overridden structure operations (addChild etc.)
 * must provide - the same contract as ICreatejsDisplayObject, just widened to
 * DisplayObject since heterogeneous children each have a different concrete
 * Pixi type.
 */
export type ICreatejsBlendModeTarget = ICreatejsDisplayObject<DisplayObject>;

/**
 * Source of the ColorFilter scalar sync (plain data properties,
 * original-faithful) - the 8 color scalars of the real createjs.ColorFilter,
 * referenced instead of redeclared so there is a single source of truth.
 */
export type IColorFilterSyncSource = Pick<createjs.ColorFilter,
	| 'redMultiplier' | 'greenMultiplier' | 'blueMultiplier' | 'alphaMultiplier'
	| 'redOffset' | 'greenOffset' | 'blueOffset' | 'alphaOffset'
>;

export interface IColorFilterSyncPair {
	source: IColorFilterSyncSource;
	matrix: number[];
}

export interface IPixiData<T extends Container> {
	/**
	 * The createjs object the data belongs to. A property under a symbol key is
	 * inherited through the prototype chain, and published symbols use a
	 * createjs instance as their prototype (`p = new cjs.MovieClip()`), so the
	 * data found on an object is its own only when this is the object itself
	 */
	owner: object | null;
	regObj: Point;
	instance: T;
	/** The node's transform, which composes rotation and skew the createjs way */
	transform: CjsTransform;
	reservedBlendMode: BLEND_MODES;
	mask: TCreatejsMask;
	colorFilters: IColorFilterSyncPair[] | null;

	// The createjs values last written to the Pixi node, or last taken over
	// from it (see syncToPixi / pullFromPixi). They start at the Pixi node's
	// own defaults, so that a fresh node is neither written nor read until
	// something differs.
	syncedX: number;
	syncedY: number;
	syncedScaleX: number;
	syncedScaleY: number;
	syncedRotation: number;
	syncedSkewX: number;
	syncedSkewY: number;
	syncedRegX: number;
	syncedRegY: number;
	syncedVisible: boolean;
	syncedAlpha: number;
}

/**
 * Creates the wrapper data of a Pixi node and gives the node a
 * {@link CjsTransform}. `anchor` is where createjs's regX / regY go when it
 * is not the node's pivot (a Sprite's anchor); the pivot is read after the
 * transform is replaced, as it belongs to the transform.
 */
export function createPixiData<TPixiDisplayObject extends Container>(pixi: TPixiDisplayObject, anchor: Point | null): IPixiData<TPixiDisplayObject> {
	const transform = new CjsTransform();
	pixi.transform = transform;

	return {
		owner: null,
		regObj: anchor || pixi.pivot,
		instance: pixi,
		transform,
		reservedBlendMode: BLEND_MODES.NORMAL,
		mask: null,
		colorFilters: null,
		syncedX: 0,
		syncedY: 0,
		syncedScaleX: 1,
		syncedScaleY: 1,
		syncedRotation: 0,
		syncedSkewX: 0,
		syncedSkewY: 0,
		syncedRegX: 0,
		syncedRegY: 0,
		syncedVisible: true,
		syncedAlpha: 1
	};
}

/**
 * What holds wrapper data under PIXI_DATA (every wrapper class declares it
 * with its own data type).
 */
export interface IPixiDataHolder {
	[PIXI_DATA]?: IPixiData<Container>;
}

/**
 * Links new wrapper data to the createjs object it was stored on (each class
 * module stores it under PIXI_DATA itself, with its own data type): the data
 * learns its owner (see IPixiData.owner), and the node's transform too, so
 * that values written through Pixi can be taken over into that object (see
 * pullFromPixi).
 */
export function registerPixiData(cjs: object, data: IPixiData<Container>): void {
	data.owner = cjs;
	if (isSyncNode(cjs)) {
		data.transform.owner = cjs;
	}
}

/**
 * The wrapper data of a createjs object, or null when it has none.
 */
export function findPixiData(cjs: IPixiDataHolder): IPixiData<Container> | null {
	const data = cjs[PIXI_DATA];
	return data && data.owner === cjs ? data : null;
}

/**
 * @ignore
 */
let driveDepth = 0;

/**
 * Brackets the driver's own work (playing frames, settling, syncing): the
 * display-list churn createjs makes while resolving a frame is not an
 * application change and marks nothing.
 */
export function beginDrive(): void {
	driveDepth++;
}

export function endDrive(): void {
	driveDepth--;
}

export function isDriving(): boolean {
	return driveDepth > 0;
}

/**
 * Shared implementation of the mask setter (push layer).
 *
 * createjs clips with a mask only while its `graphics` is set (the Shape's
 * graphics setter keeps the Pixi mask in step with that), and never draws a
 * mask shape that is on no display list. The mask's node is kept in the
 * masked node's parent node, so that it is transformed in the same space as
 * createjs transforms the mask. When no masked node uses a mask any more and
 * the mask shape is on no createjs display list, its node is taken out of
 * the Pixi tree: Pixi makes a node drawable again when it stops being a mask.
 */
export function setMaskForPixi(data: IPixiData<Container>, value: TCreatejsMask): void {
	const old = data.mask;
	const instance = data.instance;

	if (old && old !== value) {
		const index = old.masked.indexOf(instance);
		if (index >= 0) {
			old.masked.splice(index, 1);
		}
		instance.mask = null;

		if (old.masked.length) {
			// still masking other nodes: Pixi's unmasking just made it drawable
			old.pixi.renderable = false;
		} else if (!old.parent && old.pixi.parent) {
			old.pixi.parent.removeChild(old.pixi);
		}
	}

	if (value) {
		if (value.masked.indexOf(instance) < 0) {
			value.masked.push(instance);
		}
		instance.mask = value.graphics ? value.pixi : null;

		if (instance.parent && value.pixi.parent !== instance.parent) {
			instance.parent.addChild(value.pixi);
		}
		instance.once('added', () => {
			if (data.mask === value && instance.parent && value.pixi.parent !== instance.parent) {
				instance.parent.addChild(value.pixi);
			}
		});
	} else {
		instance.mask = null;
	}

	data.mask = value;
}

/**
 * Push half of the sync: copies the plain display properties of the whole
 * createjs tree to the Pixi mirror. Runs at the end of each handleTick and
 * right before Pixi draws (the container's updateTransform), so that Pixi
 * always draws the current createjs state, whenever it draws.
 *
 * - A property is written only when its createjs value differs from the one
 *   last written (or taken over, see pullFromPixi). Besides saving the Pixi
 *   setters, this keeps a value written to the Pixi node
 *   (`instance.pixi.x = 100`) in place until createjs writes that property
 *   again, as AC2 did
 * - Invisible nodes are NOT skipped: switching to invisible is itself a state
 *   that must reach Pixi.
 * - `_off` is not mapped: createjs draws whatever is on its display list
 *   (`_off` only keeps the timeline from placing an object, and the display
 *   list is mirrored to Pixi). `renderable` is left to Pixi, which turns it
 *   off for nodes used as masks.
 */
export function syncToPixi(root: ICreatejsSyncNode): void {
	suspendPixiWriteLog();
	pushNode(root);
	resumePixiWriteLog();
}

/**
 * Pull half of the sync: takes values written to the Pixi nodes
 * (`instance.pixi.x = 100`) over into the createjs properties. Runs before
 * createjs plays a frame, so that a tween writing the property in that frame
 * (even with the value it already had) replaces the Pixi-side write, as it
 * did in AC2, and a property nothing writes keeps it. Only the nodes written
 * through Pixi since the last call are visited (their transforms log the
 * writes, see CjsTransform). `renderable` is not taken over (Pixi changes
 * it itself for masks).
 */
export function pullFromPixi(): void {
	const writes = takePixiWrites();

	for (let i = 0; i < writes.length; i++) {
		const transform = writes[i];
		transform.logged = false;

		const cjs = transform.owner;
		const data = cjs ? cjs[PIXI_DATA] : undefined;
		if (cjs && data && data.owner === cjs && data.transform === transform) {
			pullNode(cjs, data);
		}
	}
}

/**
 * Whether an object registered with pixi data is a display object (synced),
 * not a Graphics (which only carries drawing commands).
 */
function isSyncNode(cjs: object): cjs is ICreatejsSyncNode {
	return 'x' in cjs && 'regX' in cjs && 'alpha' in cjs;
}

function pushNode(cjs: ICreatejsSyncNode): void {
	const data = cjs[PIXI_DATA];

	if (data && data.owner === cjs) {
		const pixi = data.instance;
		const transform = data.transform;

		// Each pair is written with one call (one change notification). An
		// axis whose createjs value did not change keeps the Pixi node's
		// current value, which may have been written through Pixi.
		const x = cjs.x;
		const y = cjs.y;
		const xChanged = x !== data.syncedX;
		const yChanged = y !== data.syncedY;
		if (xChanged || yChanged) {
			const position = transform.position;
			position.set(xChanged ? (data.syncedX = x) : position.x, yChanged ? (data.syncedY = y) : position.y);
		}

		const scaleX = cjs.scaleX;
		const scaleY = cjs.scaleY;
		const scaleXChanged = scaleX !== data.syncedScaleX;
		const scaleYChanged = scaleY !== data.syncedScaleY;
		if (scaleXChanged || scaleYChanged) {
			const scale = transform.scale;
			scale.set(scaleXChanged ? (data.syncedScaleX = scaleX) : scale.x, scaleYChanged ? (data.syncedScaleY = scaleY) : scale.y);
		}

		const rotation = cjs.rotation;
		const skewX = cjs.skewX;
		const skewY = cjs.skewY;
		const rotationChanged = rotation !== data.syncedRotation;
		const skewXChanged = skewX !== data.syncedSkewX;
		const skewYChanged = skewY !== data.syncedSkewY;
		if (rotationChanged || skewXChanged || skewYChanged) {
			transform.setRotationSkew(
				rotationChanged ? (data.syncedRotation = rotation) : transform.degRotation,
				skewXChanged ? (data.syncedSkewX = skewX) : transform.degSkewX,
				skewYChanged ? (data.syncedSkewY = skewY) : transform.degSkewY
			);
		}

		const regX = cjs.regX;
		const regY = cjs.regY;
		const regXChanged = regX !== data.syncedRegX;
		const regYChanged = regY !== data.syncedRegY;
		if (regXChanged || regYChanged) {
			const regObj = data.regObj;
			regObj.set(regXChanged ? (data.syncedRegX = regX) : regObj.x, regYChanged ? (data.syncedRegY = regY) : regObj.y);
		}
		const visible = !!cjs.visible;
		if (visible !== data.syncedVisible) {
			pixi.visible = data.syncedVisible = visible;
		}
		if (cjs.alpha !== data.syncedAlpha) {
			pixi.alpha = data.syncedAlpha = cjs.alpha;
		}

		const colorFilters = data.colorFilters;
		if (colorFilters) {
			for (let i = 0; i < colorFilters.length; i++) {
				const source = colorFilters[i].source;
				const matrix = colorFilters[i].matrix;

				matrix[0] = source.redMultiplier;
				matrix[6] = source.greenMultiplier;
				matrix[12] = source.blueMultiplier;
				matrix[18] = source.alphaMultiplier;
				matrix[4] = source.redOffset / 255;
				matrix[9] = source.greenOffset / 255;
				matrix[14] = source.blueOffset / 255;
				matrix[19] = source.alphaOffset / 255;
			}
		}

		// Mask shapes live OUTSIDE the children tree (publish output keeps them
		// as standalone _off shapes referenced by `mask` only), so the walk must
		// follow the mask reference explicitly or a tweened/nested mask never
		// receives its transform.
		if (data.mask) {
			pushNode(data.mask);
		}
	}

	const children = cjs.children;
	if (children) {
		for (let i = 0; i < children.length; i++) {
			pushNode(children[i]);
		}
	}
}

function pullNode(cjs: ICreatejsSyncNode, data: IPixiData<Container>): void {
	const pixi = data.instance;
	const transform = data.transform;

	const x = transform.position.x;
	if (x !== data.syncedX) {
		cjs.x = data.syncedX = x;
	}
	const y = transform.position.y;
	if (y !== data.syncedY) {
		cjs.y = data.syncedY = y;
	}
	const scaleX = transform.scale.x;
	if (scaleX !== data.syncedScaleX) {
		cjs.scaleX = data.syncedScaleX = scaleX;
	}
	const scaleY = transform.scale.y;
	if (scaleY !== data.syncedScaleY) {
		cjs.scaleY = data.syncedScaleY = scaleY;
	}
	// CjsTransform turns a Pixi-side rotation / skew write into degrees
	if (transform.degRotation !== data.syncedRotation) {
		cjs.rotation = data.syncedRotation = transform.degRotation;
	}
	if (transform.degSkewX !== data.syncedSkewX) {
		cjs.skewX = data.syncedSkewX = transform.degSkewX;
	}
	if (transform.degSkewY !== data.syncedSkewY) {
		cjs.skewY = data.syncedSkewY = transform.degSkewY;
	}
	const regX = data.regObj.x;
	if (regX !== data.syncedRegX) {
		cjs.regX = data.syncedRegX = regX;
	}
	const regY = data.regObj.y;
	if (regY !== data.syncedRegY) {
		cjs.regY = data.syncedRegY = regY;
	}
	if (pixi.visible !== data.syncedVisible) {
		cjs.visible = data.syncedVisible = pixi.visible;
	}
	if (pixi.alpha !== data.syncedAlpha) {
		cjs.alpha = data.syncedAlpha = pixi.alpha;
	}
}
