import { DisplayObject, Container } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import { mixinCreatejsDisplayObject, createPixiData, createCreatejsParams, IPixiData, ICreatejsParam, ITickerData, ICreatejsDisplayObjectUpdater, ICreatejsDisplayObjectInitializer } from './core';
import { CreatejsGraphics } from './Graphics';
import { createObject } from './utils';
import { CreatejsEventManager } from './EventManager';

/**
 * inherited {@link http://pixijs.download/release/docs/PIXI.Container.html | PIXI.Container}
 */
export class PixiShape extends Container {
	private _createjs: CreatejsShape;
	
	constructor(cjs: CreatejsShape) {
		super();
		
		this._createjs = cjs;
	}
	
	get createjs() {
		return this._createjs;
	}
}

export interface ICreatejsShapeParam extends ICreatejsParam {
	graphics: CreatejsGraphics | null;
}

/**
 * @ignore
 */
function createCreatejsShapeParams(graphics: CreatejsGraphics | null): ICreatejsShapeParam {
	return Object.assign(createCreatejsParams(), {
		graphics
	});
}

export interface IPixiShapeData extends IPixiData<PixiShape> {
	/**
	 * inherited {@link http://pixijs.download/release/docs/PIXI.DisplayObject.html | PIXI.DisplayObject}
	 */
	masked: DisplayObject[];
};

/**
 * @ignore
 */
function createPixiShapeData(cjs: CreatejsShape) {
	const pixi = new PixiShape(cjs);
	
	return Object.assign(createPixiData<PixiShape>(pixi, pixi.pivot), {
		masked: []
	});
}

/**
 * @ignore
 */
const P = createjs.Shape;

/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Shape.html | createjs.Shape}
 */
export class CreatejsShape extends mixinCreatejsDisplayObject<PixiShape, ICreatejsShapeParam>(createjs.Shape) implements ICreatejsDisplayObjectUpdater, ICreatejsDisplayObjectInitializer {
	protected _pixiData: IPixiShapeData;
	protected _createjsParams: ICreatejsShapeParam;
	protected _createjsEventManager: CreatejsEventManager;
	
	constructor(...args: any[]) {
		super(...args);
		
		this._pixiData = createPixiShapeData(this);
		this._createjsParams = createCreatejsShapeParams(null);
		this._createjsEventManager = new CreatejsEventManager(this);
		
		P.apply(this, args);
	}
	
	initialize(...args: any[]) {
		this._pixiData = createPixiShapeData(this);
		this._createjsParams = createCreatejsShapeParams(null);
		this._createjsEventManager = new CreatejsEventManager(this);
		
		return super.initialize(...args);
	}
	
	updateForPixi(e: ITickerData) {
		return true;
	}

	updateBlendModeForPixi(mode: PIXI.BLEND_MODES): void {
		this._pixiData.reservedBlendMode = mode;
		this._createjsParams.graphics?.updateBlendModeForPixi(mode);
	}
	
	get graphics() {
		return this._createjsParams.graphics;
	}
	
	set graphics(value) {
		if (this._pixiData.masked.length) {
			this._pixiData.instance.removeChildren();
			
			if (value) {
				for (let i = 0; i < this._pixiData.masked.length; i++) {
					this._pixiData.masked[i].mask = this._pixiData.instance;
				}
			} else {
				for (let i = 0; i < this._pixiData.masked.length; i++) {
					this._pixiData.masked[i].mask = null;
				}
			}
		}
		
		if (value) {
			this._pixiData.instance.addChild(value.pixi);
		}
		
		this._createjsParams.graphics = value;
	}
	
	get masked() {
		return this._pixiData.masked;
	}
}

// temporary prototype
Object.defineProperties(CreatejsShape.prototype, {
	_createjsParams: {
		value: createCreatejsShapeParams(null),
		writable: true
	},
	_pixiData: {
		value: createPixiShapeData(createObject<CreatejsShape>(CreatejsShape.prototype)),
		writable: true
	}
});