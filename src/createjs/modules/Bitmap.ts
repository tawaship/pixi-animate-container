import { BLEND_MODES, Sprite, Texture } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import {
	ICreatejsDisplayObject, ICreatejsDisplayObjectBase, IPixiData, TCreatejsMask,
	createPixiData, registerPixiData, setMaskForPixi
} from './core';
import { CreatejsButtonHelper } from './ButtonHelper';
import { ICreatejsInteractionEventDelegate, addInteractionListener, removeInteractionListener, removeAllInteractionListeners } from './EventManager';

/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.Sprite.html | PIXI.Sprite}
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

/**
 * Members of the (untyped) createjs.Bitmap runtime that the wrapper relies on.
 */
export interface ICreatejsBitmapBase extends ICreatejsDisplayObjectBase {
	image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
	initialize(...args: TCreatejsBitmapConstructorArgs): void;
}

export interface ICreatejsBitmapBaseConstructor {
	new (...args: TCreatejsBitmapConstructorArgs): ICreatejsBitmapBase;
}

/**
 * @ignore
 */
const BitmapBase: ICreatejsBitmapBaseConstructor = createjs.Bitmap;

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
 */
export class CreatejsBitmap extends BitmapBase implements ICreatejsDisplayObject<PixiBitmap> {
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

	get mask() {
		return ensureData(this).mask;
	}

	set mask(value: TCreatejsMask) {
		setMaskForPixi(ensureData(this), value);
	}

	addEventListener(type: string, cb: ICreatejsInteractionEventDelegate | CreatejsButtonHelper, useCapture?: boolean) {
		const p = super.addEventListener(type, cb, useCapture);

		if (!(cb instanceof CreatejsButtonHelper)) {
			addInteractionListener(this, type, cb);
		}

		return p;
	}

	removeEventListener(type: string, cb: ICreatejsInteractionEventDelegate, useCapture?: boolean) {
		super.removeEventListener(type, cb, useCapture);
		removeInteractionListener(this, type, cb);
	}

	removeAllEventListeners(type?: string) {
		super.removeAllEventListeners(type);
		removeAllInteractionListeners(this, type);
	}
}
