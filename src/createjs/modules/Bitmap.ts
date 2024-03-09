import { Sprite, Texture } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import { mixinCreatejsDisplayObject, createPixiData, createCreatejsParams, IPixiData, ICreatejsParam, ITickerData, ICreatejsDisplayObjectUpdater, ICreatejsDisplayObjectInitializer } from './core';
import { createObject } from './utils';
import { EventManager } from './EventManager';

/**
 * [[http://pixijs.download/release/docs/PIXI.Sprite.html | PIXI.Sprite]]
 */
export class PixiBitmap extends Sprite {
	private _createjs: CreatejsBitmap;
	
	constructor(cjs: CreatejsBitmap) {
		super();
		
		this._createjs = cjs;
		this.interactive = true;
	}
	
	get createjs() {
		return this._createjs;
	}
}

export interface ICreatejsBitmapParam extends ICreatejsParam {

}

/**
 * @ignore
 */
function createCreatejsBitmapParams(): ICreatejsBitmapParam {
	return createCreatejsParams();
}

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
const P = createjs.Bitmap;

/**
 * [[https://createjs.com/docs/easeljs/classes/Bitmap.html | createjs.Bitmap]]
 */
export class CreatejsBitmap extends mixinCreatejsDisplayObject(createjs.Bitmap) implements ICreatejsDisplayObjectUpdater, ICreatejsDisplayObjectInitializer {
	protected _pixiData: IPixiBitmapData;
	protected _createjsParams: ICreatejsBitmapParam;
	protected _createjsEventManager: EventManager;
	 
	constructor(...args: any[]) {
		super(...args);
		
		this._pixiData = createPixiBitmapData(this);
		this._createjsParams = createCreatejsBitmapParams();
		this._createjsEventManager = new EventManager(this);
		
		P.apply(this, args);
	}
	
	initialize(...args: any[]) {
		this._pixiData = createPixiBitmapData(this);
		this._createjsParams = createCreatejsBitmapParams();
		this._createjsEventManager = new EventManager(this);
		
		const res = super.initialize(...args);
		const texture = Texture.from(this.image);
		this._pixiData.instance.texture = texture;
		
		return res;
	}
	
	updateForPixi(e: ITickerData) {
		return true;
	}
}

// temporary prototype
Object.defineProperties(CreatejsBitmap.prototype, {
	_createjsParams: {
		value: createCreatejsBitmapParams(),
		writable: true
	},
	_pixiData: {
		value: createPixiBitmapData(createObject<CreatejsBitmap>(CreatejsBitmap.prototype)),
		writable: true
	}
});