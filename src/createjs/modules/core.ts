import { BLEND_MODES, Container, DisplayObject, Point } from 'pixi.js';
import { CjsTransform } from './transform';
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
 * Minimal surface of a createjs object walked by syncToPixi.
 */
export interface ICreatejsSyncNode {
	visible: boolean;
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
	/**
	 * Gives the node the blend mode in effect where its parent is drawn (the
	 * parent's own, or what the parent inherits); see blendModeForPixi.
	 */
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
	regObj: Point;
	instance: T;
	/** The node's transform, which composes rotation and skew the createjs way */
	transform: CjsTransform;
	/** The blend mode the node inherits from its ancestors (see blendModeForPixi) */
	reservedBlendMode: BLEND_MODES;
	/** The node's own createjs compositeOperation */
	compositeOperation: string | null;
	mask: TCreatejsMask;
	colorFilters: IColorFilterSyncPair[] | null;

	// The createjs-side values of the display properties (see
	// defineDisplayAccessors). Reading a property gives the value last
	// written to it on the createjs side; a value written to the Pixi node
	// does not change them, as in AC2.
	cjsX: number;
	cjsY: number;
	cjsScaleX: number;
	cjsScaleY: number;
	cjsRotation: number;
	cjsSkewX: number;
	cjsSkewY: number;
	cjsRegX: number;
	cjsRegY: number;
	cjsVisible: boolean;
	cjsAlpha: number;
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
		regObj: anchor || pixi.pivot,
		instance: pixi,
		transform,
		reservedBlendMode: BLEND_MODES.NORMAL,
		compositeOperation: null,
		mask: null,
		colorFilters: null,
		cjsX: 0,
		cjsY: 0,
		cjsScaleX: 1,
		cjsScaleY: 1,
		cjsRotation: 0,
		cjsSkewX: 0,
		cjsSkewY: 0,
		cjsRegX: 0,
		cjsRegY: 0,
		cjsVisible: true,
		cjsAlpha: 1
	};
}

/**
 * The Pixi blend modes of the createjs compositeOperation values Pixi can draw.
 *
 * @ignore
 */
const BLEND_MODE_OF_OPERATION: Record<string, BLEND_MODES> = {
	'source-over': BLEND_MODES.NORMAL,
	'lighter': BLEND_MODES.ADD,
	'multiply': BLEND_MODES.MULTIPLY,
	'screen': BLEND_MODES.SCREEN
};

/**
 * The blend mode a node draws its content with, as createjs draws it: its own
 * compositeOperation, or else the one in effect where its parent is drawn
 * (`reservedBlendMode`, passed down by the parent). createjs sets a node's
 * compositeOperation on the context for the draw of the node and its whole
 * subtree (DisplayObject.updateContext, inside save / restore), so a
 * descendant's own value replaces it for that descendant's subtree only.
 * A value Pixi cannot draw is drawn as the inherited one.
 */
export function blendModeForPixi(data: IPixiData<Container>): BLEND_MODES {
	const operation = data.compositeOperation;

	if (operation && Object.prototype.hasOwnProperty.call(BLEND_MODE_OF_OPERATION, operation)) {
		return BLEND_MODE_OF_OPERATION[operation];
	}

	return data.reservedBlendMode;
}

/**
 * External store keyed by the createjs instance. Keyed by the object itself,
 * a lookup never finds the data of a prototype: published symbols use a
 * createjs instance as their prototype (`p = new cjs.MovieClip()`), which
 * has wrapper data of its own.
 * Each class module additionally keeps its own store with a more concrete data type;
 * this one serves the type-agnostic consumers (sync walk, mask helper).
 */
const pixiDataStore = new WeakMap<object, IPixiData<Container>>();

export function registerPixiData(cjs: object, data: IPixiData<Container>): void {
	pixiDataStore.set(cjs, data);
}

export function findPixiData(cjs: object): IPixiData<Container> | null {
	const data = pixiDataStore.get(cjs);
	return data ? data : null;
}

/**
 * The display properties every wrapper display object class gets as
 * accessors (see defineDisplayAccessors). One list for all classes, so that
 * no class can miss one; test/harness checks that every class has them.
 */
export const DISPLAY_ACCESSOR_NAMES = ['x', 'y', 'scaleX', 'scaleY', 'rotation', 'skewX', 'skewY', 'regX', 'regY', 'visible', 'alpha'];

/**
 * Makes the display properties of a wrapper display object class write
 * through to its Pixi node at once: every write on the createjs side
 * (timeline, frame scripts, application code) reaches the Pixi node when it
 * is made, so Pixi draws the createjs state whenever it draws, with no walk
 * to copy it over.
 *
 * - The createjs-side value is kept in the wrapper data and read back from
 *   there. A value written to the Pixi node (`instance.pixi.x = 100`) stays
 *   until the createjs side writes that property again, and the createjs
 *   side still reads its own value (AC2's behavior)
 * - Every write is passed to the Pixi node, even with the value it had, so
 *   that a tween writing the property puts a Pixi-side write back (Pixi's
 *   setters compare the value themselves)
 * - The data is looked up (and made the first time) by `getData`: the
 *   createjs constructor writes these properties inside `super()`, before
 *   the wrapper's constructor body runs, and the first write creates the data
 * - `_off` is not mapped: createjs draws whatever is on its display list
 *   (`_off` only keeps the timeline from placing an object, and the display
 *   list is mirrored to Pixi). `renderable` is left to Pixi, which turns it
 *   off for nodes used as masks.
 *
 * Pixi declares these as plain fields of the createjs-side classes' types,
 * which an accessor in a subclass body cannot override (TS2611), so they are
 * defined on the prototype; they are enumerable, so that for-in on an
 * instance still lists them.
 */
export function defineDisplayAccessors<T extends object>(proto: object, getData: (cjs: T) => IPixiData<Container>): void {
	function define(name: string, get: (this: T) => number | boolean, set: (this: T, value: never) => void): void {
		Object.defineProperty(proto, name, { configurable: true, enumerable: true, get, set });
	}

	define('x', function () { return getData(this).cjsX; }, function (value: number) {
		const data = getData(this);
		data.cjsX = value;
		data.transform.position.x = value;
	});
	define('y', function () { return getData(this).cjsY; }, function (value: number) {
		const data = getData(this);
		data.cjsY = value;
		data.transform.position.y = value;
	});
	define('scaleX', function () { return getData(this).cjsScaleX; }, function (value: number) {
		const data = getData(this);
		data.cjsScaleX = value;
		data.transform.scale.x = value;
	});
	define('scaleY', function () { return getData(this).cjsScaleY; }, function (value: number) {
		const data = getData(this);
		data.cjsScaleY = value;
		data.transform.scale.y = value;
	});
	define('rotation', function () { return getData(this).cjsRotation; }, function (value: number) {
		const data = getData(this);
		data.cjsRotation = value;
		data.transform.setRotation(value);
	});
	define('skewX', function () { return getData(this).cjsSkewX; }, function (value: number) {
		const data = getData(this);
		data.cjsSkewX = value;
		data.transform.setSkewX(value);
	});
	define('skewY', function () { return getData(this).cjsSkewY; }, function (value: number) {
		const data = getData(this);
		data.cjsSkewY = value;
		data.transform.setSkewY(value);
	});
	define('regX', function () { return getData(this).cjsRegX; }, function (value: number) {
		const data = getData(this);
		data.cjsRegX = value;
		data.regObj.x = value;
	});
	define('regY', function () { return getData(this).cjsRegY; }, function (value: number) {
		const data = getData(this);
		data.cjsRegY = value;
		data.regObj.y = value;
	});
	define('visible', function () { return getData(this).cjsVisible; }, function (value: boolean) {
		const data = getData(this);
		data.cjsVisible = value;
		data.instance.visible = !!value;
	});
	define('alpha', function () { return getData(this).cjsAlpha; }, function (value: number) {
		const data = getData(this);
		data.cjsAlpha = value;
		data.instance.alpha = value;
	});
}

/**
 * Roots (tops of createjs trees) whose timelines moved outside the driver,
 * so that the clips under them have to be settled before Pixi draws
 * (CreatejsController.flushForRender). createjs settles synched / single
 * frame clips and clips waiting to start over when it draws (MovieClip.draw
 * -> _updateState); the driver does that after every frame it plays, but a
 * goto made by the application between frames, or a clip added between
 * frames, would otherwise be drawn unsettled until the next frame is played.
 */
const settleMarks = new WeakSet<object>();

/**
 * @ignore
 */
let driveDepth = 0;

/**
 * Brackets the driver's own work (playing frames, settling): the
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
 * Marks the tree `node` belongs to as needing to be settled before Pixi draws.
 */
export function markForSettle(node: createjs.DisplayObject): void {
	let top = node;
	while (top.parent) {
		top = top.parent;
	}
	settleMarks.add(top);
}

/**
 * Whether `root` was marked since the last call, clearing the mark.
 */
export function takeSettleMark(root: object): boolean {
	if (!settleMarks.has(root)) {
		return false;
	}
	settleMarks.delete(root);
	return true;
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

function syncColorFilterPairs(colorFilters: IColorFilterSyncPair[]): void {
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

/**
 * Copies the color filter scalars of a whole createjs tree (children and
 * mask references) into their Pixi filters' matrices. The display properties
 * need no copying (they write through at once, see defineDisplayAccessors).
 */
export function syncToPixi(root: ICreatejsSyncNode): void {
	const data = pixiDataStore.get(root);

	if (data) {
		if (data.colorFilters) {
			syncColorFilterPairs(data.colorFilters);
		}
		if (data.mask) {
			syncToPixi(data.mask);
		}
	}

	const children = root.children;
	if (children) {
		for (let i = 0; i < children.length; i++) {
			syncToPixi(children[i]);
		}
	}
}
