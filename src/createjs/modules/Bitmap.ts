import { BLEND_MODES, Sprite, Texture } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import {
	ICreatejsDisplayObject, IPixiData, TCreatejsMask,
	createPixiData, registerPixiData, setMaskForPixi
} from './core';
import { TCreatejsEventListener, addInteractionListener, removeInteractionListener, removeAllInteractionListeners } from './EventManager';

/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Sprite.html | PIXI.Sprite}
 */
export class PixiBitmap extends Sprite {
	private _createjs: CreatejsBitmap;

	constructor(cjs: CreatejsBitmap) {
		super();

		this._createjs = cjs;
	}

	get createjs() {
		return this._createjs;
	}
}

export type TCreatejsBitmapSource = HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | string;

export type TCreatejsBitmapConstructorArgs = [TCreatejsBitmapSource?];

export interface IPixiBitmapData extends IPixiData<PixiBitmap> {
}

/**
 * @ignore
 */
function createPixiBitmapData(cjs: CreatejsBitmap): IPixiBitmapData {
	const pixi = new PixiBitmap(cjs);

	return createPixiData<PixiBitmap>(pixi, pixi.anchor);
}

/**
 * @ignore
 */
const dataStore = new WeakMap<CreatejsBitmap, IPixiBitmapData>();

/**
 * @ignore
 */
function resetData(cjs: CreatejsBitmap): IPixiBitmapData {
	const data = createPixiBitmapData(cjs);
	dataStore.set(cjs, data);
	registerPixiData(cjs, data);

	return data;
}

/**
 * @ignore
 */
function ensureData(cjs: CreatejsBitmap): IPixiBitmapData {
	const data = dataStore.get(cjs);

	return data ? data : resetData(cjs);
}

/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Bitmap.html | createjs.Bitmap}
 *
 * `mask` is a plain data property on the real createjs.DisplayObject, but
 * this wrapper must intercept get/set to route the assigned value into the
 * Pixi mirror. See the class-level comment on CreatejsShape for why a
 * prototype accessor safely intercepts it despite TS2611/TS2416.
 */
export class CreatejsBitmap extends createjs.Bitmap implements ICreatejsDisplayObject<PixiBitmap> {
	constructor(...args: TCreatejsBitmapConstructorArgs) {
		super(...args);

		ensureData(this);
	}

	initialize(...args: TCreatejsBitmapConstructorArgs) {
		const data = resetData(this);

		const res = super.initialize(...args);
		data.instance.texture = Texture.from(this.image);

		return res;
	}

	get pixi() {
		return ensureData(this).instance;
	}

	updateBlendModeForPixi(mode: BLEND_MODES): void {
		ensureData(this).instance.blendMode = mode;
	}

	// @ts-expect-error TS2611/TS2416 - see the class-level comment above
	get mask() {
		return ensureData(this).mask;
	}

	// @ts-expect-error TS2611/TS2416 - see the class-level comment above
	set mask(value: TCreatejsMask) {
		setMaskForPixi(ensureData(this), value);
	}

	// Every overload of the real EventDispatcher.addEventListener has to be
	// redeclared verbatim to override it at all (see TCreatejsEventListener).
	// Bitmap only ever receives the function-listener shapes in practice (the
	// `{ handleEvent }` shapes exist for ButtonHelper, which can only target
	// a Sprite/MovieClip) - that branch just forwards to the real
	// implementation with no interaction bridging.
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

	removeAllEventListeners(type?: string) {
		super.removeAllEventListeners(type);
		removeAllInteractionListeners(this, type);
	}
}
