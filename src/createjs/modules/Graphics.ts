import { BLEND_MODES, Graphics, LINE_CAP, LINE_JOIN } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import {
	IPixiData, TCreatejsMask,
	createPixiData, registerPixiData, setMaskForPixi
} from './core';
import { DEG_TO_RAD } from './utils';

/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Graphics.html | PIXI.Graphics}
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

// Derived from the real constructor so there is a single source of truth.
export type TCreatejsGraphicsConstructorArgs = ConstructorParameters<typeof createjs.Graphics>;

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
 *
 * createjs.Graphics is a command object, not a display object (no
 * EventDispatcher, no initialize) - a Shape holds it rather than it being
 * added to a container directly, so this wrapper does not implement
 * ICreatejsDisplayObject.
 */
export class CreatejsGraphics extends createjs.Graphics {
	constructor(...args: TCreatejsGraphicsConstructorArgs) {
		super(...args);

		const data = ensureData(this);
		data.instance.beginFill(0xFFEEEE, 1);
		data.strokeFill = 0;
		data.strokeAlpha = 1;
	}

	get pixi() {
		return ensureData(this).instance;
	}

	updateBlendModeForPixi(mode: BLEND_MODES): void {
		if (!mode) return;
		ensureData(this).instance.blendMode = mode;
	}

	// path methods
	//
	// Each overrides mirrors the command to the Pixi side, forwards it to the
	// real createjs.Graphics command list via super, then returns `this` so
	// the wrapper (not the real Graphics's own return type) keeps flowing
	// through chained calls (e.g. `graphics.f('#000').dr(0, 0, 20, 20)`).

	moveTo(x: number, y: number): this {
		const pixi = ensureData(this).instance;

		if (pixi.clone().endFill().containsPoint({ x: x, y: y })) {
			pixi.beginHole();
		} else {
			pixi.endHole();
		}

		pixi.moveTo(x, y);
		super.moveTo(x, y);

		return this;
	}

	mt(x: number, y: number) {
		return this.moveTo(x, y);
	}

	lineTo(x: number, y: number): this {
		ensureData(this).instance.lineTo(x, y);
		super.lineTo(x, y);

		return this;
	}

	lt(x: number, y: number) {
		return this.lineTo(x, y);
	}

	arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): this {
		ensureData(this).instance.arcTo(x1, y1, x2, y2, radius);
		super.arcTo(x1, y1, x2, y2, radius);

		return this;
	}

	at(x1: number, y1: number, x2: number, y2: number, radius: number) {
		return this.arcTo(x1, y1, x2, y2, radius);
	}

	arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean): this {
		ensureData(this).instance.arc(x, y, radius, startAngle, endAngle, anticlockwise);
		super.arc(x, y, radius, startAngle, endAngle, anticlockwise);

		return this;
	}

	a(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean) {
		return this.arc(x, y, radius, startAngle, endAngle, anticlockwise);
	}

	quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): this {
		ensureData(this).instance.quadraticCurveTo(cpx, cpy, x, y);
		super.quadraticCurveTo(cpx, cpy, x, y);

		return this;
	}

	qt(cpx: number, cpy: number, x: number, y: number) {
		return this.quadraticCurveTo(cpx, cpy, x, y);
	}

	curveTo(cpx: number, cpy: number, x: number, y: number) {
		return this.quadraticCurveTo(cpx, cpy, x, y);
	}

	bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): this {
		ensureData(this).instance.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
		super.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);

		return this;
	}

	bt(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number) {
		return this.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
	}

	rect(x: number, y: number, w: number, h: number): this {
		ensureData(this).instance.drawRect(x, y, w, h);
		super.rect(x, y, w, h);

		return this;
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

	closePath(): this {
		ensureData(this).instance.closePath();
		super.closePath();

		return this;
	}

	cp() {
		return this.closePath();
	}

	clear(): this {
		ensureData(this).instance.clear();
		super.clear();

		return this;
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

	beginFill(color: string): this {
		const c = this._parseColor(color);
		ensureData(this).instance.beginFill(c.color, c.alpha);
		super.beginFill(color);

		return this;
	}

	f(color: string) {
		return this.beginFill(color);
	}

	endFill(): this {
		ensureData(this).instance.endFill();
		super.endFill();

		return this;
	}

	ef() {
		return this.endFill();
	}

	setStrokeStyle(thickness: number, caps: 0 | 1 | 2, joints: 0 | 1 | 2, miterLimit: number, ignoreScale: boolean): this {
		const data = ensureData(this);

		data.instance.lineTextureStyle({
			width: thickness,
			color: data.strokeFill,
			alpha: data.strokeAlpha,
			cap: (caps in LineCap) ? LineCap[caps] : LineCap[0],
			join: (joints in LineJoin) ? LineJoin[joints] : LineJoin[0],
			miterLimit
		});

		super.setStrokeStyle(thickness, caps, joints, miterLimit, ignoreScale);

		return this;
	}

	ss(thickness: number, caps: 0 | 1 | 2, joints: 0 | 1 | 2, miterLimit: number, ignoreScale: boolean) {
		return this.setStrokeStyle(thickness, caps, joints, miterLimit, ignoreScale);
	}

	beginStroke(color: string): this {
		const data = ensureData(this);
		const c = this._parseColor(color);
		data.strokeFill = c.color;
		data.strokeAlpha = c.alpha;

		super.beginStroke(color);

		return this;
	}

	s(color: string) {
		return this.beginStroke(color);
	}

	drawRoundRect(x: number, y: number, w: number, h: number, radius: number): this {
		ensureData(this).instance.drawRoundedRect(x, y, w, h, radius);
		super.drawRoundRect(x, y, w, h, radius);

		return this;
	}

	rr(x: number, y: number, w: number, h: number, radius: number) {
		return this.drawRoundRect(x, y, w, h, radius);
	}

	drawCircle(x: number, y: number, radius: number): this {
		ensureData(this).instance.drawCircle(x, y, radius);
		super.drawCircle(x, y, radius);

		return this;
	}

	dc(x: number, y: number, radius: number) {
		return this.drawCircle(x, y, radius);
	}

	drawEllipse(x: number, y: number, w: number, h: number): this {
		ensureData(this).instance.drawEllipse(x, y, w, h);
		super.drawEllipse(x, y, w, h);

		return this;
	}

	de(x: number, y: number, w: number, h: number) {
		return this.drawEllipse(x, y, w, h);
	}

	drawPolyStar(x: number, y: number, radius: number, sides: number, pointSize: number, angle: number): this {
		ensureData(this).instance.drawRegularPolygon(x, y, radius, sides, angle * DEG_TO_RAD);
		super.drawPolyStar(x, y, radius, sides, pointSize, angle);

		return this;
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
}
