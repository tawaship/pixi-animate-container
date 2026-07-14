import { BLEND_MODES, Graphics } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import { IPixiData, TCreatejsMask } from './core';
/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Graphics.html | PIXI.Graphics}
 */
export declare class PixiGraphics extends Graphics {
    private _createjs;
    constructor(cjs: CreatejsGraphics);
    get createjs(): CreatejsGraphics;
}
export type TCreatejsGraphicsConstructorArgs = ConstructorParameters<typeof createjs.Graphics>;
export interface IPixiGraphicsData extends IPixiData<PixiGraphics> {
    strokeFill: number;
    strokeAlpha: number;
}
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Graphics.html | createjs.Graphics}
 *
 * createjs.Graphics is a command object, not a display object (no
 * EventDispatcher, no initialize) - a Shape holds it rather than it being
 * added to a container directly, so this wrapper does not implement
 * ICreatejsDisplayObject.
 */
export declare class CreatejsGraphics extends createjs.Graphics {
    constructor(...args: TCreatejsGraphicsConstructorArgs);
    get pixi(): PixiGraphics;
    updateBlendModeForPixi(mode: BLEND_MODES): void;
    moveTo(x: number, y: number): this;
    mt(x: number, y: number): this;
    lineTo(x: number, y: number): this;
    lt(x: number, y: number): this;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): this;
    at(x1: number, y1: number, x2: number, y2: number, radius: number): this;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean): this;
    a(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean): this;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): this;
    qt(cpx: number, cpy: number, x: number, y: number): this;
    curveTo(cpx: number, cpy: number, x: number, y: number): this;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): this;
    bt(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): this;
    rect(x: number, y: number, w: number, h: number): this;
    r(x: number, y: number, w: number, h: number): this;
    drawRect(x: number, y: number, w: number, h: number): this;
    dr(x: number, y: number, w: number, h: number): this;
    closePath(): this;
    cp(): this;
    clear(): this;
    c(): this;
    private _parseColor;
    beginFill(color: string): this;
    f(color: string): this;
    endFill(): this;
    ef(): this;
    setStrokeStyle(thickness: number, caps: 0 | 1 | 2, joints: 0 | 1 | 2, miterLimit: number, ignoreScale: boolean): this;
    ss(thickness: number, caps: 0 | 1 | 2, joints: 0 | 1 | 2, miterLimit: number, ignoreScale: boolean): this;
    beginStroke(color: string): this;
    s(color: string): this;
    drawRoundRect(x: number, y: number, w: number, h: number, radius: number): this;
    rr(x: number, y: number, w: number, h: number, radius: number): this;
    drawCircle(x: number, y: number, radius: number): this;
    dc(x: number, y: number, radius: number): this;
    drawEllipse(x: number, y: number, w: number, h: number): this;
    de(x: number, y: number, w: number, h: number): this;
    drawPolyStar(x: number, y: number, radius: number, sides: number, pointSize: number, angle: number): this;
    dp(x: number, y: number, radius: number, sides: number, pointSize: number, angle: number): this;
    get mask(): TCreatejsMask;
    set mask(value: TCreatejsMask);
}
