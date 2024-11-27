import { Sprite, Texture, BaseTexture } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import { mixinCreatejsDisplayObject, createPixiData, createCreatejsParams, IPixiData, ICreatejsParam, ITickerData, ICreatejsDisplayObjectUpdater, ICreatejsDisplayObjectInitializer } from './core';
import { createObject } from './utils';
import { CreatejsEventManager } from './EventManager';

/**
 * inherited {@link http://pixijs.download/release/docs/PIXI.Sprite.html | PIXI.Sprite}
 */
export class PixiSprite extends Sprite {
	private _createjs: CreatejsSprite | {};
	
	constructor(cjs: CreatejsSprite | {}) {
		super();
		
		this._createjs = cjs;
	}
	
	get createjs() {
		return this._createjs;
	}
}

export interface ICreatejsSpriteParam extends ICreatejsParam {

}

/**
 * @ignore
 */
function createCreatejsSpriteParams(): ICreatejsSpriteParam {
	return createCreatejsParams();
}

export interface IPixiSpriteData extends IPixiData<PixiSprite> {

}

/**
 * @ignore
 */
function createPixiSpriteData(cjs: CreatejsSprite | {}): IPixiSpriteData {
	const pixi = new PixiSprite(cjs);
	
	return createPixiData<PixiSprite>(pixi, pixi.anchor)
}

/**
 * @ignore
 */
const P = createjs.Sprite;

/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Sprite.html | createjs.Sprite}
 */
export class CreatejsSprite extends mixinCreatejsDisplayObject<PixiSprite, ICreatejsSpriteParam>(createjs.Sprite) implements ICreatejsDisplayObjectUpdater, ICreatejsDisplayObjectInitializer {
	protected _pixiData: IPixiSpriteData;
	protected _createjsParams: ICreatejsSpriteParam;
	protected _createjsEventManager: CreatejsEventManager;
	
	constructor(...args: any[]) {
		super(...args);
		
		this._pixiData = createPixiSpriteData(this);
		this._createjsParams = createCreatejsSpriteParams();
		this._createjsEventManager = new CreatejsEventManager(this);
		
		P.apply(this, args);
	}
	
	initialize(...args: any[]) {
		this._pixiData = createPixiSpriteData(this);
		this._createjsParams = createCreatejsSpriteParams();
		this._createjsEventManager = new CreatejsEventManager(this);
		
		return super.initialize(...args);
	}
	
	updateForPixi(e: ITickerData) {
		return true;
	}

	updateBlendModeForPixi(mode: PIXI.BLEND_MODES): void {
		this._pixiData.instance.blendMode = mode;
	}
	
	gotoAndStop(...args: any[]) {
		super.gotoAndStop(...args);
		
		const frame = this.spriteSheet.getFrame(this.currentFrame);
		const baseTexture = BaseTexture.from(frame.image);
		const texture = new Texture(baseTexture, frame.rect);
		
		this._pixiData.instance.texture = texture;
	}
}

// temporary prototype
Object.defineProperties(CreatejsSprite.prototype, {
	_createjsParams: {
		value: createCreatejsSpriteParams(),
		writable: true
	},
	_pixiData: {
		value: createPixiSpriteData(createObject<CreatejsSprite>(CreatejsSprite.prototype)),
		writable: true
	}
});