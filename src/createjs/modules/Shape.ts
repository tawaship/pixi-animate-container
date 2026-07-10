import { DisplayObject, Container, BLEND_MODES } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import {
	ICreatejsDisplayObject, ICreatejsDisplayObjectBase, IPixiData, TCreatejsMask,
	createPixiData, registerPixiData, setMaskForPixi
} from './core';
import { CreatejsGraphics } from './Graphics';
import { CreatejsButtonHelper } from './ButtonHelper';
import { ICreatejsInteractionEventDelegate, addInteractionListener, removeInteractionListener, removeAllInteractionListeners } from './EventManager';

/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.Container.html | PIXI.Container}
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

export type TCreatejsShapeConstructorArgs = [CreatejsGraphics?];

/**
 * Members of the (untyped) createjs.Shape runtime that the wrapper relies on.
 */
export interface ICreatejsShapeBase extends ICreatejsDisplayObjectBase {
	initialize(...args: TCreatejsShapeConstructorArgs): void;
}

export interface ICreatejsShapeBaseConstructor {
	new (...args: TCreatejsShapeConstructorArgs): ICreatejsShapeBase;
}

/**
 * @ignore
 */
const ShapeBase: ICreatejsShapeBaseConstructor = createjs.Shape;

export interface IPixiShapeData extends IPixiData<PixiShape> {
	/**
	 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.DisplayObject.html | PIXI.DisplayObject}
	 */
	masked: DisplayObject[];

	graphics: CreatejsGraphics | null;
}

/**
 * @ignore
 */
function createPixiShapeData(cjs: CreatejsShape): IPixiShapeData {
	const pixi = new PixiShape(cjs);

	return Object.assign(createPixiData<PixiShape>(pixi, pixi.pivot), {
		masked: [],
		graphics: null
	});
}

/**
 * @ignore
 */
const dataStore = new WeakMap<CreatejsShape, IPixiShapeData>();

/**
 * @ignore
 */
function resetData(cjs: CreatejsShape): IPixiShapeData {
	const data = createPixiShapeData(cjs);
	dataStore.set(cjs, data);
	registerPixiData(cjs, data);

	return data;
}

/**
 * @ignore
 */
function ensureData(cjs: CreatejsShape): IPixiShapeData {
	const data = dataStore.get(cjs);

	return data ? data : resetData(cjs);
}

/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Shape.html | createjs.Shape}
 */
export class CreatejsShape extends ShapeBase implements ICreatejsDisplayObject<PixiShape> {
	constructor(...args: TCreatejsShapeConstructorArgs) {
		super(...args);

		ensureData(this);
	}

	initialize(...args: TCreatejsShapeConstructorArgs) {
		resetData(this);

		return super.initialize(...args);
	}

	get pixi() {
		return ensureData(this).instance;
	}

	updateBlendModeForPixi(mode: BLEND_MODES): void {
		const data = ensureData(this);

		data.reservedBlendMode = mode;
		data.graphics?.updateBlendModeForPixi(mode);
	}

	get graphics() {
		return ensureData(this).graphics;
	}

	set graphics(value) {
		const data = ensureData(this);

		if (data.masked.length) {
			data.instance.removeChildren();

			if (value) {
				for (let i = 0; i < data.masked.length; i++) {
					data.masked[i].mask = data.instance;
				}
			} else {
				for (let i = 0; i < data.masked.length; i++) {
					data.masked[i].mask = null;
				}
			}
		}

		if (value) {
			data.instance.addChild(value.pixi);
		}

		data.graphics = value;
	}

	get masked() {
		return ensureData(this).masked;
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
