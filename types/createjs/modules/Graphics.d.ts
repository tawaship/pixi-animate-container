import { BLEND_MODES, Graphics } from 'pixi.js';
import { ICreatejsDisplayObject, IPixiData, TCreatejsMask } from './core';
import { CreatejsButtonHelper } from './ButtonHelper';
import { ICreatejsInteractionEventDelegate } from './EventManager';
/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.Graphics.html | PIXI.Graphics}
 */
export declare class PixiGraphics extends Graphics {
    private _createjs;
    constructor(cjs: CreatejsGraphics);
    get createjs(): CreatejsGraphics;
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
declare const GraphicsBase: ICreatejsGraphicsBaseConstructor;
export interface IPixiGraphicsData extends IPixiData<PixiGraphics> {
    strokeFill: number;
    strokeAlpha: number;
}
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Graphics.html | createjs.Graphics}
 */
export declare class CreatejsGraphics extends GraphicsBase implements ICreatejsDisplayObject<PixiGraphics> {
    constructor(...args: TCreatejsGraphicsConstructorArgs);
    initialize(...args: TCreatejsGraphicsConstructorArgs): void;
    get pixi(): PixiGraphics;
    updateBlendModeForPixi(mode: BLEND_MODES): void;
    moveTo(x: number, y: number): ICreatejsGraphicsBase;
    mt(x: number, y: number): ICreatejsGraphicsBase;
    lineTo(x: number, y: number): ICreatejsGraphicsBase;
    lt(x: number, y: number): ICreatejsGraphicsBase;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): ICreatejsGraphicsBase;
    at(x1: number, y1: number, x2: number, y2: number, radius: number): ICreatejsGraphicsBase;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean): ICreatejsGraphicsBase;
    a(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean): ICreatejsGraphicsBase;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): ICreatejsGraphicsBase;
    qt(cpx: number, cpy: number, x: number, y: number): ICreatejsGraphicsBase;
    curveTo(cpx: number, cpy: number, x: number, y: number): ICreatejsGraphicsBase;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): ICreatejsGraphicsBase;
    bt(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): ICreatejsGraphicsBase;
    rect(x: number, y: number, w: number, h: number): ICreatejsGraphicsBase;
    r(x: number, y: number, w: number, h: number): ICreatejsGraphicsBase;
    drawRect(x: number, y: number, w: number, h: number): ICreatejsGraphicsBase;
    dr(x: number, y: number, w: number, h: number): ICreatejsGraphicsBase;
    closePath(): ICreatejsGraphicsBase;
    cp(): ICreatejsGraphicsBase;
    clear(): ICreatejsGraphicsBase;
    c(): ICreatejsGraphicsBase;
    private _parseColor;
    beginFill(color: string): ICreatejsGraphicsBase;
    f(color: string): ICreatejsGraphicsBase;
    endFill(): ICreatejsGraphicsBase;
    ef(): ICreatejsGraphicsBase;
    setStrokeStyle(thickness: number, caps: 0 | 1 | 2, joints: 0 | 1 | 2, miterLimit: number, ignoreScale: boolean): ICreatejsGraphicsBase;
    ss(thickness: number, caps: 0 | 1 | 2, joints: 0 | 1 | 2, miterLimit: number, ignoreScale: boolean): ICreatejsGraphicsBase;
    beginStroke(color: string): ICreatejsGraphicsBase;
    s(color: string): ICreatejsGraphicsBase;
    drawRoundRect(x: number, y: number, w: number, h: number, radius: number): ICreatejsGraphicsBase;
    rr(x: number, y: number, w: number, h: number, radius: number): ICreatejsGraphicsBase;
    drawCircle(x: number, y: number, radius: number): ICreatejsGraphicsBase;
    dc(x: number, y: number, radius: number): ICreatejsGraphicsBase;
    drawEllipse(x: number, y: number, w: number, h: number): ICreatejsGraphicsBase;
    de(x: number, y: number, w: number, h: number): ICreatejsGraphicsBase;
    drawPolyStar(x: number, y: number, radius: number, sides: number, pointSize: number, angle: number): ICreatejsGraphicsBase;
    dp(x: number, y: number, radius: number, sides: number, pointSize: number, angle: number): ICreatejsGraphicsBase;
    get mask(): TCreatejsMask;
    set mask(value: TCreatejsMask);
    addEventListener(type: string, cb: ICreatejsInteractionEventDelegate | CreatejsButtonHelper, useCapture?: boolean): CreatejsButtonHelper | ICreatejsInteractionEventDelegate;
    removeEventListener(type: string, cb: ICreatejsInteractionEventDelegate, useCapture?: boolean): void;
    removeAllEventListeners(type?: string): void;
}
export {};
