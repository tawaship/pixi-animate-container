import { Sprite, Texture, BaseTexture, BLEND_MODES, Rectangle } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import {
	ICreatejsDisplayObject, IPixiData, TCreatejsMask,
	createPixiData, registerPixiData, setMaskForPixi
} from './core';
import { TCreatejsEventListener, addInteractionListener, removeInteractionListener, removeAllInteractionListeners } from './EventManager';

/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Sprite.html | PIXI.Sprite}
 */
export class PixiSprite extends Sprite {
	private _createjs: CreatejsSprite;

	constructor(cjs: CreatejsSprite) {
		super();

		this._createjs = cjs;
	}

	get createjs() {
		return this._createjs;
	}
}

// Derived from the real constructor so there is a single source of truth.
export type TCreatejsSpriteConstructorArgs = ConstructorParameters<typeof createjs.Sprite>;

export interface IPixiSpriteData extends IPixiData<PixiSprite> {
}

/**
 * @ignore
 */
function createPixiSpriteData(cjs: CreatejsSprite): IPixiSpriteData {
	const pixi = new PixiSprite(cjs);

	return createPixiData<PixiSprite>(pixi, pixi.anchor);
}

/**
 * @ignore
 */
const dataStore = new WeakMap<CreatejsSprite, IPixiSpriteData>();

/**
 * @ignore
 */
function resetData(cjs: CreatejsSprite): IPixiSpriteData {
	const data = createPixiSpriteData(cjs);
	dataStore.set(cjs, data);
	registerPixiData(cjs, data);

	return data;
}

/**
 * @ignore
 */
function ensureData(cjs: CreatejsSprite): IPixiSpriteData {
	const data = dataStore.get(cjs);

	return data ? data : resetData(cjs);
}

/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Sprite.html | createjs.Sprite}
 *
 * `mask` is a plain data property on the real createjs.DisplayObject, but
 * this wrapper must intercept get/set to route the assigned value into the
 * Pixi mirror. See the class-level comment on CreatejsShape for why a
 * prototype accessor safely intercepts it despite TS2611/TS2416.
 */
export class CreatejsSprite extends createjs.Sprite implements ICreatejsDisplayObject<PixiSprite> {
	constructor(...args: TCreatejsSpriteConstructorArgs) {
		super(...args);

		ensureData(this);
	}

	initialize(...args: TCreatejsSpriteConstructorArgs) {
		resetData(this);

		return super.initialize(...args);
	}

	get pixi() {
		return ensureData(this).instance;
	}

	/**
	 * The Pixi mirror is only updated through gotoAndStop, so the spritesheet
	 * animation must not self-advance when the original Sprite._tick runs
	 * (tick delegation would otherwise advance the createjs side alone and
	 * leave the display behind).
	 */
	advance(time?: number): void {
		// spritesheet self-animation is disabled
	}

	updateBlendModeForPixi(mode: BLEND_MODES): void {
		ensureData(this).instance.blendMode = mode;
	}

	gotoAndStop(frameOrAnimation: string | number): void {
		super.gotoAndStop(frameOrAnimation);

		const frame = this.spriteSheet.getFrame(this.currentFrame);
		const baseTexture = BaseTexture.from(frame.image);
		// frame.rect is a createjs.Rectangle (plain x/y/width/height), not a
		// PIXI.Rectangle - Texture needs the latter, so convert by value.
		const rect = new Rectangle(frame.rect.x, frame.rect.y, frame.rect.width, frame.rect.height);
		const texture = new Texture(baseTexture, rect);

		ensureData(this).instance.texture = texture;
	}

	// @ts-expect-error TS2611/TS2416 - see the class-level comment above
	get mask() {
		return ensureData(this).mask;
	}

	set mask(value: TCreatejsMask) {
		setMaskForPixi(ensureData(this), value);
	}

	// Every overload of the real EventDispatcher.addEventListener has to be
	// redeclared verbatim to override it at all (see TCreatejsEventListener).
	// Unlike Shape/Bitmap, the `{ handleEvent }` branch here is not
	// theoretical: ButtonHelper's target can be a Sprite, and ButtonHelper
	// registers itself (a `handleEvent`-shaped instance) directly - that
	// branch forwards to the real implementation with no interaction
	// bridging, matching this class's original `instanceof CreatejsButtonHelper`
	// check.
	addEventListener(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): Function;
	addEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): Function;
	addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => boolean }, useCapture?: boolean): Object;
	addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void }, useCapture?: boolean): Object;
	addEventListener(type: string, listener: TCreatejsEventListener, useCapture?: boolean): Function | Object {
		if (typeof listener === 'function') {
			const res = super.addEventListener(type, listener, useCapture);
			addInteractionListener(this, type, listener);

			return res;
		}

		return super.addEventListener(type, listener, useCapture);
	}

	// See the class-level removeEventListener comment on CreatejsShape for why
	// the real 5th `Function` catch-all overload is intentionally not
	// redeclared here.
	removeEventListener(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): void;
	removeEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
	removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => boolean }, useCapture?: boolean): void;
	removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void }, useCapture?: boolean): void;
	removeEventListener(type: string, listener: TCreatejsEventListener, useCapture?: boolean): void {
		if (typeof listener === 'function') {
			super.removeEventListener(type, listener, useCapture);
			removeInteractionListener(this, type, listener);

			return;
		}

		super.removeEventListener(type, listener, useCapture);
	}

	// See the off comment on CreatejsShape: the original's `off` is a
	// prototype alias of removeEventListener and would bypass the override
	// above, leaking the pixi-side interaction bridge.
	off(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): void;
	off(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
	off(type: string, listener: { handleEvent: (eventObj: Object) => boolean }, useCapture?: boolean): void;
	off(type: string, listener: { handleEvent: (eventObj: Object) => void }, useCapture?: boolean): void;
	off(type: string, listener: TCreatejsEventListener, useCapture?: boolean): void {
		if (typeof listener === 'function') {
			this.removeEventListener(type, listener, useCapture);

			return;
		}

		this.removeEventListener(type, listener, useCapture);
	}

	removeAllEventListeners(type?: string) {
		super.removeAllEventListeners(type);
		removeAllInteractionListeners(this, type);
	}
}
