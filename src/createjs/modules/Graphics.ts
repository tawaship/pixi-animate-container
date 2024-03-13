import { Graphics, LINE_CAP, LINE_JOIN} from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import { mixinCreatejsDisplayObject, createPixiData, createCreatejsParams, IPixiData, ICreatejsParam,  ITickerData, ICreatejsDisplayObjectUpdater, ICreatejsDisplayObjectInitializer } from './core';
import { createObject, DEG_TO_RAD } from './utils';
import { CreatejsEventManager } from './EventManager';

/**
 * inherited {@link http://pixijs.download/release/docs/PIXI.Graphics.html | PIXI.Graphics}
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

export interface ICreatejsGraphicsParam extends ICreatejsParam {

}

/**
 * @ignore
 */
function createCreatejsGraphicsParams(): ICreatejsGraphicsParam {
	return createCreatejsParams();
}

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
 * @ignore
 */
const P = createjs.Graphics;

/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Graphics.html | createjs.Graphics}
 */
export class CreatejsGraphics extends mixinCreatejsDisplayObject(createjs.Graphics) implements ICreatejsDisplayObjectUpdater, ICreatejsDisplayObjectInitializer {
	protected _pixiData: IPixiGraphicsData;
	protected _createjsParams: ICreatejsGraphicsParam;
	protected _createjsEventManager: CreatejsEventManager;
	
	constructor(...args: any[]) {
		super(...args);
		
		this._pixiData = createPixiGraphicsData(this);
		this._createjsParams = createCreatejsGraphicsParams();
		this._createjsEventManager = new CreatejsEventManager(this);
		
		P.apply(this, args);
		
		this._pixiData.instance.beginFill(0xFFEEEE, 1);
		this._pixiData.strokeFill = 0;
		this._pixiData.strokeAlpha = 1;
	}
	
	initialize(...args: any[]) {
		this._pixiData = createPixiGraphicsData(this);
		this._createjsParams = createCreatejsGraphicsParams();
		this._createjsEventManager = new CreatejsEventManager(this);
		
		return super.initialize(...args);
	}
	
	updateForPixi(e: ITickerData) {
		return true;
	}
	
	// path methods
	
	moveTo(x: number, y: number) {
		if (this._pixiData.instance.clone().endFill().containsPoint({x: x, y: y})) {
			this._pixiData.instance.beginHole();
		} else {
			this._pixiData.instance.endHole();
		}
		
		this._pixiData.instance.moveTo(x, y);
		
		return super.moveTo(x, y);
	}
	
	mt(x: number, y: number) {
		return this.moveTo(x, y);
	}
	
	lineTo(x: number, y: number) {
		this._pixiData.instance.lineTo(x, y);
		
		return super.lineTo(x, y);
	}
	
	lt(x: number, y: number) {
		return this.lineTo(x, y);
	}
	
	arcTo(x1: number, y1: number, x2: number, y2: number, radius: number) {
		this._pixiData.instance.arcTo(x1, y1, x2, y2, radius);
		
		return super.arcTo(x1, y1, x2, y2, radius);
	}
	
	at(x1: number, y1: number, x2: number, y2: number, radius: number) {
		return this.arcTo(x1, y1, x2, y2, radius);
	}
	
	arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean) {
		this._pixiData.instance.arc(x, y, radius, startAngle, endAngle, anticlockwise);
		
		return super.arc(x, y, radius, startAngle, endAngle, anticlockwise);
	}
	
	a(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean) {
		return this.arc(x, y, radius, startAngle, endAngle, anticlockwise);
	}
	
	quadraticCurveTo(cpx: number, cpy: number, x: number, y: number) {
		this._pixiData.instance.quadraticCurveTo(cpx, cpy, x, y);
		
		return super.quadraticCurveTo(cpx, cpy, x, y);
	}
	
	qt(cpx: number, cpy: number, x: number, y: number) {
		return this.quadraticCurveTo(cpx, cpy, x, y);
	}
	
	curveTo(cpx: number, cpy: number, x: number, y: number) {
		return this.quadraticCurveTo(cpx, cpy, x, y);
	}
	
	bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number) {
		this._pixiData.instance.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
		
		return super.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
	}
	
	bt(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number) {
		return this.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
	}
	
	rect(x: number, y: number, w: number, h: number) {
		this._pixiData.instance.drawRect(x, y, w, h);
		
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
		this._pixiData.instance.closePath();
		
		return super.closePath();
	}
	
	cp() {
		return this.closePath();
	}
	
	clear() {
		this._pixiData.instance.clear();
		
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
		this._pixiData.instance.beginFill(c.color, c.alpha);
		
		return super.beginFill(color);
	}
	
	f(color: string) {
		return this.beginFill(color);
	}
	
	endFill() {
		this._pixiData.instance.endFill();
		
		return super.endFill();
	}
	
	ef() {
		return this.endFill();
	}
	
	setStrokeStyle(thickness: number, caps: 0 | 1 | 2, joints: 0 | 1 | 2, miterLimit: number, ignoreScale: boolean) {
		this._pixiData.instance.lineTextureStyle({
			width: thickness,
			color: this._pixiData.strokeFill,
			alpha: this._pixiData.strokeAlpha,
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
		const c = this._parseColor(color);
		this._pixiData.strokeFill = c.color;
		this._pixiData.strokeAlpha = c.alpha;
		
		return super.beginStroke(color);
	}
	
	s(color: string) {
		return this.beginStroke(color);
	}
	
	drawRoundRect(x: number, y: number, w: number, h: number, radius: number) {
		this._pixiData.instance.drawRoundedRect(x, y, w, h, radius);
		
		return super.drawRoundRect(x, y, w, h, radius);
	}
	
	rr(x: number, y: number, w: number, h: number, radius: number) {
		return this.drawRoundRect(x, y, w, h, radius);
	}
	
	drawCircle(x: number, y: number, radius: number) {
		this._pixiData.instance.drawCircle(x, y, radius);
		
		return super.drawCircle(x, y, radius);
	}
	
	dc(x: number, y: number, radius: number) {
		return this.drawCircle(x, y, radius);
	}
	
	drawEllipse(x: number, y: number, w: number, h: number) {
		this._pixiData.instance.drawEllipse(x, y, w, h);
		
		return super.drawEllipse(x, y, w, h);
	}
	
	de(x: number, y: number, w: number, h: number) {
		return this.drawEllipse(x, y, w, h);
	}
	
	drawPolyStar(x: number, y: number, radius: number, sides: number, pointSize: number, angle: number) {
		this._pixiData.instance.drawRegularPolygon(x, y, radius, sides, angle * DEG_TO_RAD);
		
		return super.drawPolyStar(x, y, radius, sides, pointSize, angle);
	}
	
	dp(x: number, y: number, radius: number, sides: number, pointSize: number, angle: number) {
		return this.drawPolyStar(x, y, radius, sides, pointSize, angle);
	}
}

// temporary prototype
Object.defineProperties(CreatejsGraphics.prototype, {
	_createjsParams: {
		value: createCreatejsGraphicsParams(),
		writable: true
	},
	_pixiData: {
		value: createPixiGraphicsData(createObject<CreatejsGraphics>(CreatejsGraphics.prototype)),
		writable: true
	}
});