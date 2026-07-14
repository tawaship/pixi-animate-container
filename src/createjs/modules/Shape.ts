import { DisplayObject, Container, BLEND_MODES } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import {
	ICreatejsDisplayObject, IPixiData, TCreatejsMask,
	createPixiData, registerPixiData, setMaskForPixi
} from './core';
import { CreatejsGraphics } from './Graphics';
import { TCreatejsEventListener, addInteractionListener, removeInteractionListener, removeAllInteractionListeners } from './EventManager';

/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Container.html | PIXI.Container}
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

export interface IPixiShapeData extends IPixiData<PixiShape> {
	/**
	 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.DisplayObject.html | PIXI.DisplayObject}
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
 *
 * `graphics` and `mask` are declared as plain data properties on the real
 * createjs.Shape/DisplayObject, but this wrapper must intercept get/set to
 * route the assigned value into the Pixi mirror. TypeScript's
 * accessor-over-property check (TS2611/TS2416) guards against real class-field
 * semantics; createjs.Shape is a legacy ES5 prototype constructor with no
 * class fields, so a prototype accessor correctly intercepts the plain
 * `this.graphics = x` / `this.mask = x` assignments the real base constructor
 * makes, with no runtime hazard - confirmed by the wrapper smoke and
 * verification-C suites, which exercise both assignments.
 */
export class CreatejsShape extends createjs.Shape implements ICreatejsDisplayObject<PixiShape> {
	constructor(graphics?: CreatejsGraphics) {
		super(graphics);

		ensureData(this);
	}

	get pixi() {
		return ensureData(this).instance;
	}

	updateBlendModeForPixi(mode: BLEND_MODES): void {
		const data = ensureData(this);

		data.reservedBlendMode = mode;
		data.graphics?.updateBlendModeForPixi(mode);
	}

	// @ts-expect-error TS2611/TS2416 - see the class-level comment above
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

	// @ts-expect-error TS2611/TS2416 - see the class-level comment above
	get mask() {
		return ensureData(this).mask;
	}

	set mask(value: TCreatejsMask) {
		setMaskForPixi(ensureData(this), value);
	}

	// Every overload of the real EventDispatcher.addEventListener has to be
	// redeclared verbatim to override it at all (see TCreatejsEventListener).
	// Shape only ever receives the function-listener shapes in practice (the
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

	// The real removeEventListener has a 5th overload accepting a bare
	// `Function` (for the `arguments.callee` idiom). It's intentionally not
	// redeclared here: addEventListener above never exposes a matching "add"
	// path for a bare Function, so nothing this wrapper ever registers can
	// arrive back here typed as plain `Function` - and even if external code
	// called this with one, removeInteractionListener's underlying removal
	// (`_emitter.off`) is a harmless no-op for a reference it never tracked.
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

	// The original defines `off` as a prototype ALIAS of removeEventListener
	// (`p.off = p.removeEventListener`), captured when EventDispatcher was
	// defined - so calling off() on a wrapper skips the removeEventListener
	// override above entirely, and the pixi-side interaction bridge would
	// never detach (the handler keeps firing from the pixi side after off()).
	// Delegating through `this.removeEventListener` puts off() back on the
	// virtual dispatch path. The typeof split only exists so each call site
	// sees a non-union listener type that resolves against one overload
	// family; both branches make the identical call.
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