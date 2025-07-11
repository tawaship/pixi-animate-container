import { Graphics } from 'pixi.js';
import { IPixiData, ICreatejsParam, ITickerData, ICreatejsDisplayObjectUpdater, ICreatejsDisplayObjectInitializer } from './core';
import { CreatejsEventManager } from './EventManager';
/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.Graphics.html | PIXI.Graphics}
 */
export declare class PixiGraphics extends Graphics {
    private _createjs;
    constructor(cjs: CreatejsGraphics);
    get createjs(): CreatejsGraphics;
}
export interface ICreatejsGraphicsParam extends ICreatejsParam {
}
export interface IPixiGraphicsData extends IPixiData<PixiGraphics> {
    strokeFill: number;
    strokeAlpha: number;
}
declare const CreatejsGraphics_base: abstract new (...args: any[]) => import("./core").IMixinedCreatejsDisplayObject<PixiGraphics>;
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Graphics.html | createjs.Graphics}
 */
export declare class CreatejsGraphics extends CreatejsGraphics_base implements ICreatejsDisplayObjectUpdater, ICreatejsDisplayObjectInitializer {
    protected _pixiData: IPixiGraphicsData;
    protected _createjsParams: ICreatejsGraphicsParam;
    protected _createjsEventManager: CreatejsEventManager;
    constructor(...args: any[]);
    initialize(...args: any[]): any;
    updateForPixi(e: ITickerData): boolean;
    updateBlendModeForPixi(mode: PIXI.BLEND_MODES): void;
    moveTo(x: number, y: number): any;
    mt(x: number, y: number): any;
    lineTo(x: number, y: number): any;
    lt(x: number, y: number): any;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): any;
    at(x1: number, y1: number, x2: number, y2: number, radius: number): any;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean): any;
    a(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean): any;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): any;
    qt(cpx: number, cpy: number, x: number, y: number): any;
    curveTo(cpx: number, cpy: number, x: number, y: number): any;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): any;
    bt(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): any;
    rect(x: number, y: number, w: number, h: number): any;
    r(x: number, y: number, w: number, h: number): any;
    drawRect(x: number, y: number, w: number, h: number): any;
    dr(x: number, y: number, w: number, h: number): any;
    closePath(): any;
    cp(): any;
    clear(): any;
    c(): any;
    private _parseColor;
    beginFill(color: string): any;
    f(color: string): any;
    endFill(): any;
    ef(): any;
    setStrokeStyle(thickness: number, caps: 0 | 1 | 2, joints: 0 | 1 | 2, miterLimit: number, ignoreScale: boolean): any;
    ss(thickness: number, caps: 0 | 1 | 2, joints: 0 | 1 | 2, miterLimit: number, ignoreScale: boolean): any;
    beginStroke(color: string): any;
    s(color: string): any;
    drawRoundRect(x: number, y: number, w: number, h: number, radius: number): any;
    rr(x: number, y: number, w: number, h: number, radius: number): any;
    drawCircle(x: number, y: number, radius: number): any;
    dc(x: number, y: number, radius: number): any;
    drawEllipse(x: number, y: number, w: number, h: number): any;
    de(x: number, y: number, w: number, h: number): any;
    drawPolyStar(x: number, y: number, radius: number, sides: number, pointSize: number, angle: number): any;
    dp(x: number, y: number, radius: number, sides: number, pointSize: number, angle: number): any;
}
export {};
