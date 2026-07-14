import { BLEND_MODES, Container, DisplayObject, Point } from 'pixi.js';
import { DEG_TO_RAD } from './utils';
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
 * Minimal surface of a createjs display object consumed by the pull-sync walk.
 * All members are plain data properties on the createjs side.
 */
export interface ICreatejsSyncNode {
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
	regObj: Point;
	instance: T;
	reservedBlendMode: BLEND_MODES;
	mask: TCreatejsMask;
	colorFilters: IColorFilterSyncPair[] | null;
}

export function createPixiData<TPixiDisplayObject extends Container>(pixi: TPixiDisplayObject, regObj: Point): IPixiData<TPixiDisplayObject> {
	return {
		regObj,
		instance: pixi,
		reservedBlendMode: BLEND_MODES.NORMAL,
		mask: null,
		colorFilters: null
	};
}

/**
 * External store keyed by the createjs instance, so that wrapper metadata never
 * appears as own properties of the createjs object (for-in surface stays original-faithful).
 * Each class module additionally keeps its own store with a more concrete data type;
 * this one serves the type-agnostic consumers (pull-sync walk, mask helper).
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
 * Shared implementation of the mask setter (push layer).
 * Writing a mask re-attaches display objects, so it must fire on change only;
 * the accessor of each class is the change detector.
 */
export function setMaskForPixi(data: IPixiData<Container>, value: TCreatejsMask): void {
	if (value) {
		value.masked.push(data.instance);
		data.instance.mask = value.pixi;

		data.instance.once('added', () => {
			if (data.instance.parent) {
				data.instance.parent.addChild(value.pixi);
			}
		});
	} else {
		data.instance.mask = null;
	}

	data.mask = value;
}

/**
 * Pull-sync: copies the plain display properties of the whole createjs tree to
 * the Pixi mirror. Runs once at the end of each tick, after `_tick()` has
 * resolved the createjs state.
 *
 * - Invisible nodes are NOT skipped: switching to invisible is itself a state
 *   that must reach Pixi.
 * - No dirty tracking: the Pixi setters either are plain fields (renderable,
 *   visible, alpha) or contain their own equality checks (position, scale,
 *   skew, rotation, pivot), so unconditional copies never invalidate anything.
 */
export function syncToPixi(root: ICreatejsSyncNode): void {
	syncNode(root);
}

function syncNode(cjs: ICreatejsSyncNode): void {
	const data = pixiDataStore.get(cjs);

	if (data) {
		const pixi = data.instance;

		pixi.x = cjs.x;
		pixi.y = cjs.y;
		pixi.scale.x = cjs.scaleX;
		pixi.scale.y = cjs.scaleY;
		pixi.skew.x = -cjs.skewX * DEG_TO_RAD;
		pixi.skew.y = cjs.skewY * DEG_TO_RAD;
		pixi.rotation = cjs.rotation * DEG_TO_RAD;
		data.regObj.x = cjs.regX;
		data.regObj.y = cjs.regY;
		pixi.visible = !!cjs.visible;
		pixi.alpha = cjs.alpha;
		pixi.renderable = !cjs._off;

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
			syncNode(data.mask);
		}
	}

	const children = cjs.children;
	if (children) {
		for (let i = 0; i < children.length; i++) {
			syncNode(children[i]);
		}
	}
}
