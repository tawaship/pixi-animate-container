import { Container, Point } from 'pixi.js';
import { CreatejsButtonHelper } from './ButtonHelper';
import { CreatejsStage } from './Stage';
import { CreatejsStageGL } from './StageGL';
import { CreatejsMovieClip } from './MovieClip';
import { CreatejsSprite } from './Sprite';
import { CreatejsShape } from './Shape';
import { CreatejsBitmap } from './Bitmap';
import { CreatejsGraphics } from './Graphics';
import { CreatejsText } from './Text';
import { CreatejsEventManager, ICreatejsInteractionEventDelegate, createjsInteractionEvents } from './EventManager';
import { DEG_TO_RAD } from './utils';

export interface ITickerData {
	delta: number;
}

export interface IPixiData<T extends Container> {
	regObj: Point;
	instance: T;
	reservedBlendMode: PIXI.BLEND_MODES;
}

export function createPixiData<TPixiDisplayObject extends Container>(pixi: TPixiDisplayObject, regObj: Point): IPixiData<TPixiDisplayObject> {
	return {
		regObj,
		instance: pixi,
		reservedBlendMode: PIXI.BLEND_MODES.NORMAL
	};
}

export type TCreatejsMask = CreatejsShape | null;

export interface ICreatejsParam {
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
	_off: boolean;
	mask: TCreatejsMask;
}

export type TCreatejsObject =
	CreatejsStage
	| CreatejsStageGL
	| CreatejsMovieClip
	| CreatejsSprite
	| CreatejsShape
	| CreatejsBitmap
	| CreatejsGraphics
	| CreatejsText;

export function createCreatejsParams(): ICreatejsParam {
	return {
		x: 0,
		y: 0,
		scaleX: 0,
		scaleY: 0,
		regX: 0,
		regY: 0,
		skewX: 0,
		skewY: 0,
		rotation: 0,
		visible: true,
		alpha: 1,
		_off: false,
		mask: null
	};
}

export type TCreatejsDisplayObject = any/* createjs.DisplayObject */;

export interface ICreatejsDisplayObjectUpdater extends TCreatejsDisplayObject {
	updateForPixi(e: ITickerData): boolean;
	updateBlendModeForPixi(mode: PIXI.BLEND_MODES): void;
}

export interface ICreatejsDisplayObjectInitializer {
	initialize(...args: any[]): any;
}

export function updateDisplayObjectChildren(cjs: ICreatejsDisplayObjectUpdater, e: ITickerData) {
	const list = cjs.children.slice();
	for (let i = 0, l = list.length; i < l; i++) {
		const child = list[i];
		child.updateForPixi(e);
	}
	
	return true;
}

export interface IMixinedCreatejsDisplayObject extends ICreatejsParam, TCreatejsDisplayObject {
	pixi: Container;
	addEventListener(type: string, cb: ICreatejsInteractionEventDelegate | CreatejsButtonHelper, ...args: any[]): any;
	removeEventListener(type: string, cb: ICreatejsInteractionEventDelegate, ...args: any[]): any;
	removeAllEventListeners(type?: string, ...args: any[]): any;
}

export type TMixinedCreatejsDisplayObjectClass = abstract new (...args: any[]) => IMixinedCreatejsDisplayObject;

export function mixinCreatejsDisplayObject(superClass: new (...args: any[]) => TCreatejsDisplayObject): TMixinedCreatejsDisplayObjectClass {
	abstract class C extends superClass {
		protected abstract _pixiData: IPixiData<Container>;
		protected abstract _createjsParams: ICreatejsParam;
		protected abstract _createjsEventManager: CreatejsEventManager;
		
		get pixi() {
			return this._pixiData.instance;
		}
		
		get x() {
			return this._createjsParams.x;
		}
		
		set x(value) {
			this._pixiData.instance.x = value;
			this._createjsParams.x = value;
		}
		
		get y() {
			return this._createjsParams.y;
		}
		
		set y(value) {
			this._pixiData.instance.y = value;
			this._createjsParams.y = value;
		}
		
		get scaleX() {
			return this._createjsParams.scaleX;
		}
			
		set scaleX(value) {
			this._pixiData.instance.scale.x = value;
			this._createjsParams.scaleX = value;
		}
		
		get scaleY() {
			return this._createjsParams.scaleY;
		}
		
		set scaleY(value) {
			this._pixiData.instance.scale.y = value;
			this._createjsParams.scaleY = value;
		}
		
		get skewX() {
			return this._createjsParams.skewX;
		}
		
		set skewX(value) {
			this._pixiData.instance.skew.x = -value * DEG_TO_RAD;
			this._createjsParams.skewX = value;
		}
		
		get skewY() {
			return this._createjsParams.skewY;
		}
		
		set skewY(value) {
			this._pixiData.instance.skew.y = value * DEG_TO_RAD;
			this._createjsParams.skewY = value;
		}
		
		get regX() {
			return this._createjsParams.regX;
		}
		
		set regX(value) {
			this._pixiData.regObj.x = value;
			this._createjsParams.regX = value;
		}
		
		get regY() {
			return this._createjsParams.regY;
		}
		
		set regY(value) {
			this._pixiData.regObj.y = value;
			this._createjsParams.regY = value;
		}
		
		get rotation() {
			return this._createjsParams.rotation;
		}
		
		set rotation(value) {
			this._pixiData.instance.rotation = value * DEG_TO_RAD;
			this._createjsParams.rotation = value;
		}
		
		get visible() {
			return this._createjsParams.visible;
		}
		
		set visible(value) {
			value = !!value;
			this._pixiData.instance.visible = value;
			this._createjsParams.visible = value;
		}
		
		get alpha() {
			return this._createjsParams.alpha;
		}
		
		set alpha(value) {
			this._pixiData.instance.alpha = value;
			this._createjsParams.alpha = value;
		}
		
		get _off() {
			return this._createjsParams._off;
		}
		
		set _off(value) {
			console.warn(value);
			this._pixiData.instance.renderable = !value;
			this._createjsParams._off = value;
		}
		
		addEventListener(type: createjsInteractionEvents, cb: ICreatejsInteractionEventDelegate | CreatejsButtonHelper, ...args: any[]) {
			const p = super.addEventListener(type, cb, ...args);
			if (!(cb instanceof CreatejsButtonHelper)) {
				this._createjsEventManager.add(type, cb);
			}

			return p;
		}
		
		removeEventListener(type: createjsInteractionEvents, cb: ICreatejsInteractionEventDelegate, ...args: any[]) {
			const p = super.removeEventListener(type, cb, ...args);
			if (!(cb instanceof CreatejsButtonHelper)) {
				this._createjsEventManager.remove(type, cb);
			}
			
			return p;
		}
		
		removeAllEventListeners(type?: string, ...args: any[]) {
			const p = super.removeAllEventListeners(type, ...args);
			this._createjsEventManager.removeAll(type);

			return p;
		}
		
		get mask() {
			return this._createjsParams.mask;
		}
		
		set mask(value: TCreatejsMask) {
			if (value) {
				value.masked.push(this._pixiData.instance);
				this._pixiData.instance.mask = value.pixi;
				
				this._pixiData.instance.once('added', () => {
					this._pixiData.instance.parent.addChild(value.pixi);
				});
			} else {
				this._pixiData.instance.mask = null;
			}
			
			this._createjsParams.mask = value;
		}
	}
	
	return C;
}