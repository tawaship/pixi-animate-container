import { BLEND_MODES, Graphics, LINE_CAP, LINE_JOIN } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import {
	ICreatejsDisplayObject, ICreatejsDisplayObjectBase, IPixiData, TCreatejsMask,
	createPixiData, registerPixiData, setMaskForPixi
} from './core';
import { DEG_TO_RAD } from './utils';
import { CreatejsButtonHelper } from './ButtonHelper';
import { ICreatejsInteractionEventDelegate, addInteractionListener, removeInteractionListener, removeAllInteractionListeners } from './EventManager';

/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.Graphics.html | PIXI.Graphics}
 */
export class PixiGraphics extends Graphics {
	private _createjs: CreatejsGraphics;

	constructor(cjs: CreatejsGraphics) {
		super();

		this._createjs = cjs;
	}

	get createjs() {
		return this._createjs;
	}
}

export type TCreatejsGraphicsConstructorArgs = [];

/**
 * Members of the (untyped) createjs.Graphics runtime that the wrapper relies on.
 * createjs.Graphics is a command object (not a display object); the drawing
 * methods below are overridden to mirror each path command to the Pixi side.
 */
export interface ICreatejsGraphicsBase {
	moveTo(x: number, y: number): ICreatejsGraphicsBase;
	lineTo(x: number, y: number): ICreatejsGraphicsBase;
	arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): ICreatejsGraphicsBase;
	arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean): ICreatejsGraphicsBase;
	quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): ICreatejsGraphicsBase;
	bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): ICreatejsGraphicsBase;
	rect(x: number, y: number, w: number, h: number): ICreatejsGraphicsBase;
	closePath(): ICreatejsGraphicsBase;
	clear(): ICreatejsGraphicsBase;
	beginFill(color: string): ICreatejsGraphicsBase;
	endFill(): ICreatejsGraphicsBase;
	setStrokeStyle(thickness: number, caps: 0 | 1 | 2, joints: 0 | 1 | 2, miterLimit: number, ignoreScale: boolean): ICreatejsGraphicsBase;
	beginStroke(color: string): ICreatejsGraphicsBase;
	drawRoundRect(x: number, y: number, w: number, h: number, radius: number): ICreatejsGraphicsBase;
	drawCircle(x: number, y: number, radius: number): ICreatejsGraphicsBase;
	drawEllipse(x: number, y: number, w: number, h: number): ICreatejsGraphicsBase;
	drawPolyStar(x: number, y: number, radius: number, sides: number, pointSize: number, angle: number): ICreatejsGraphicsBase;

	// Note: the original createjs.Graphics is not an EventDispatcher and has no
	// initialize; these members are declared to keep the wrapper surface that the
	// previous (untyped) implementation exposed. Calling them reaches the original
	// prototype, exactly as before.
	initialize(...args: TCreatejsGraphicsConstructorArgs): void;
	addEventListener(type: string, listener: ICreatejsInteractionEventDelegate | CreatejsButtonHelper, useCapture?: boolean): ICreatejsInteractionEventDelegate | CreatejsButtonHelper;
	removeEventListener(type: string, listener: ICreatejsInteractionEventDelegate, useCapture?: boolean): void;
	removeAllEventListeners(type?: string): void;
}

export interface ICreatejsGraphicsBaseConstructor {
	new (...args: TCreatejsGraphicsConstructorArgs): ICreatejsGraphicsBase;
}

/**
 * @ignore
 */
const GraphicsBase: ICreatejsGraphicsBaseConstructor = createjs.Graphics;

export interface IPixiGraphicsData extends IPixiData<PixiGraphics> {
	strokeFill: number;
	strokeAlpha: number;
}

/**
 * @ignore
 */
function createPixiGraphicsData(cjs: CreatejsGraphics): IPixiGraphicsData {
	const pixi = new PixiGraphics(cjs);

	return Object.assign(createPixiData<PixiGraphics>(pixi, pixi.pivot), {
		strokeFill: 0,
		strokeAlpha: 1
	});
}

/**
 * @ignore
 */
const dataStore = new WeakMap<CreatejsGraphics, IPixiGraphicsData>();

/**
 * @ignore
 */
function resetData(cjs: CreatejsGraphics): IPixiGraphicsData {
	const data = createPixiGraphicsData(cjs);
	dataStore.set(cjs, data);
	registerPixiData(cjs, data);

	return data;
}

/**
 * @ignore
 */
function ensureData(cjs: CreatejsGraphics): IPixiGraphicsData {
	const data = dataStore.get(cjs);

	return data ? data : resetData(cjs);
}

/**
 * @ignore
 */
const COLOR_RED = 16 * 16 * 16 * 16;

/**
 * @ignore
 */
const COLOR_GREEN = 16 * 16;

/**
 * @ignore
 */
const LineCap = {
	0: LINE_CAP.BUTT,
	1: LINE_CAP.ROUND,
	2: LINE_CAP.SQUARE
};

/**
 * @ignore
 */
const LineJoin = {
	0: LINE_JOIN.MITER,
	1: LINE_JOIN.ROUND,
	2: LINE_JOIN.BEVEL
};

/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Graphics.html | createjs.Graphics}
 */
export class CreatejsGraphics extends GraphicsBase implements ICreatejsDisplayObject<PixiGraphics> {
	constructor(...args: TCreatejsGraphicsConstructorArgs) {
		super(...args);

		const data = ensureData(this);
		data.instance.beginFill(0xFFEEEE, 1);
		data.strokeFill = 0;
		data.strokeAlpha = 1;
	}

	initialize(...args: TCreatejsGraphicsConstructorArgs) {
		resetData(this);

		return super.initialize(...args);
	}

	get pixi() {
		return ensureData(this).instance;
	}

	updateBlendModeForPixi(mode: BLEND_MODES): void {
		if (!mode) return;
		ensureData(this).instance.blendMode = mode;
	}

	// path methods

	moveTo(x: number, y: number) {
		const pixi = ensureData(this).instance;

		if (pixi.clone().endFill().containsPoint({ x: x, y: y })) {
			pixi.beginHole();
		} else {
			pixi.endHole();
		}

		pixi.moveTo(x, y);

		return super.moveTo(x, y);
	}

	mt(x: number, y: number) {
		return this.moveTo(x, y);
	}

	lineTo(x: number, y: number) {
		ensureData(this).instance.lineTo(x, y);

		return super.lineTo(x, y);
	}

	lt(x: number, y: number) {
		return this.lineTo(x, y);
	}

	arcTo(x1: number, y1: number, x2: number, y2: number, radius: number) {
		ensureData(this).instance.arcTo(x1, y1, x2, y2, radius);

		return super.arcTo(x1, y1, x2, y2, radius);
	}

	at(x1: number, y1: number, x2: number, y2: number, radius: number) {
		return this.arcTo(x1, y1, x2, y2, radius);
	}

	arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean) {
		ensureData(this).instance.arc(x, y, radius, startAngle, endAngle, anticlockwise);

		return super.arc(x, y, radius, startAngle, endAngle, anticlockwise);
	}

	a(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean) {
		return this.arc(x, y, radius, startAngle, endAngle, anticlockwise);
	}

	quadraticCurveTo(cpx: number, cpy: number, x: number, y: number) {
		ensureData(this).instance.quadraticCurveTo(cpx, cpy, x, y);

		return super.quadraticCurveTo(cpx, cpy, x, y);
	}

	qt(cpx: number, cpy: number, x: number, y: number) {
		return this.quadraticCurveTo(cpx, cpy, x, y);
	}

	curveTo(cpx: number, cpy: number, x: number, y: number) {
		return this.quadraticCurveTo(cpx, cpy, x, y);
	}

	bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number) {
		ensureData(this).instance.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);

		return super.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
	}

	bt(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number) {
		return this.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
	}

	rect(x: number, y: number, w: number, h: number) {
		ensureData(this).instance.drawRect(x, y, w, h);

		return super.rect(x, y, w, h);
	}

	r(x: number, y: number, w: number, h: number) {
		return this.rect(x, y, w, h);
	}

	drawRect(x: number, y: number, w: number, h: number) {
		return this.rect(x, y, w, h);
	}

	dr(x: number, y: number, w: number, h: number) {
		return this.rect(x, y, w, h);
	}

	closePath() {
		ensureData(this).instance.closePath();

		return super.closePath();
	}

	cp() {
		return this.closePath();
	}

	clear() {
		ensureData(this).instance.clear();

		return super.clear();
	}

	c() {
		return this.clear();
	}

	private _parseColor(color: string) {
		const res = {
			color: 0,
			alpha: 1
		};

		if (!color) {
			res.alpha = 0;
			return res;
		}

		if (color.charAt(0) === '#') {
			res.color = parseInt(color.slice(1), 16);
			return res;
		}

		const colors = color.replace(/rgba|\(|\)|\s/g, '').split(',');

		res.color = Number(colors[0]) * COLOR_RED + Number(colors[1]) * COLOR_GREEN + Number(colors[2]);
		res.alpha = Number(colors[3]);

		return res;
	}

	beginFill(color: string) {
		const c = this._parseColor(color);
		ensureData(this).instance.beginFill(c.color, c.alpha);

		return super.beginFill(color);
	}

	f(color: string) {
		return this.beginFill(color);
	}

	endFill() {
		ensureData(this).instance.endFill();

		return super.endFill();
	}

	ef() {
		return this.endFill();
	}

	setStrokeStyle(thickness: number, caps: 0 | 1 | 2, joints: 0 | 1 | 2, miterLimit: number, ignoreScale: boolean) {
		const data = ensureData(this);

		data.instance.lineTextureStyle({
			width: thickness,
			color: data.strokeFill,
			alpha: data.strokeAlpha,
			cap: (caps in LineCap) ? LineCap[caps] : LineCap[0],
			join: (joints in LineJoin) ? LineJoin[joints] : LineJoin[0],
			miterLimit
		});

		return super.setStrokeStyle(thickness, caps, joints, miterLimit, ignoreScale);
	}

	ss(thickness: number, caps: 0 | 1 | 2, joints: 0 | 1 | 2, miterLimit: number, ignoreScale: boolean) {
		return this.setStrokeStyle(thickness, caps, joints, miterLimit, ignoreScale);
	}

	beginStroke(color: string) {
		const data = ensureData(this);
		const c = this._parseColor(color);
		data.strokeFill = c.color;
		data.strokeAlpha = c.alpha;

		return super.beginStroke(color);
	}

	s(color: string) {
		return this.beginStroke(color);
	}

	drawRoundRect(x: number, y: number, w: number, h: number, radius: number) {
		ensureData(this).instance.drawRoundedRect(x, y, w, h, radius);

		return super.drawRoundRect(x, y, w, h, radius);
	}

	rr(x: number, y: number, w: number, h: number, radius: number) {
		return this.drawRoundRect(x, y, w, h, radius);
	}

	drawCircle(x: number, y: number, radius: number) {
		ensureData(this).instance.drawCircle(x, y, radius);

		return super.drawCircle(x, y, radius);
	}

	dc(x: number, y: number, radius: number) {
		return this.drawCircle(x, y, radius);
	}

	drawEllipse(x: number, y: number, w: number, h: number) {
		ensureData(this).instance.drawEllipse(x, y, w, h);

		return super.drawEllipse(x, y, w, h);
	}

	de(x: number, y: number, w: number, h: number) {
		return this.drawEllipse(x, y, w, h);
	}

	drawPolyStar(x: number, y: number, radius: number, sides: number, pointSize: number, angle: number) {
		ensureData(this).instance.drawRegularPolygon(x, y, radius, sides, angle * DEG_TO_RAD);

		return super.drawPolyStar(x, y, radius, sides, pointSize, angle);
	}

	dp(x: number, y: number, radius: number, sides: number, pointSize: number, angle: number) {
		return this.drawPolyStar(x, y, radius, sides, pointSize, angle);
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
