import { BLEND_MODES, Graphics, Matrix, Texture } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import { IPixiData, TCreatejsMask } from './core';
/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Graphics.html | PIXI.Graphics}
 */
export declare class PixiGraphics extends Graphics {
    private _createjs;
    constructor(cjs: CreatejsGraphics);
    get createjs(): CreatejsGraphics;
    /**
     * Sets the blend mode the graphics is drawn with. Pixi 5 draws a small
     * Graphics in batches that keep the blend mode it had when they were made
     * and makes them again only when the shapes change, so a new mode would
     * not be drawn; the batches are made again on the next render.
     *
     * @ignore
     */
    setBlendModeForPixi(mode: BLEND_MODES): void;
}
export type TCreatejsGraphicsConstructorArgs = ConstructorParameters<typeof createjs.Graphics>;
export interface IPixiGraphicsData extends IPixiData<PixiGraphics> {
    strokeFill: number;
    strokeAlpha: number;
    /** The gradient texture the next stroke style strokes with (null: the color above) */
    strokeTexture: Texture | null;
    /** The matrix from strokeTexture's pixels to the shape's coordinates */
    strokeMatrix: Matrix | null;
}
/**
 * What createjs fills with: an image, a canvas (SpriteSheetUtils.extractFrame
 * makes one) or a video.
 */
export type TBitmapFillImage = HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
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
    /**
     * Fills with an image, placed by `matrix` (from the image's space to the
     * shape's) as createjs places its pattern. The image is repeated (Pixi
     * repeats every texture it fills with, as createjs does for the default
     * repetition that published content uses; "no-repeat" and the other
     * repetitions are drawn repeated too).
     */
    beginBitmapFill(image: TBitmapFillImage, repetition?: string, matrix?: createjs.Matrix2D): this;
    bf(image: TBitmapFillImage, repetition?: string, matrix?: createjs.Matrix2D): this;
    /**
     * Fills with a gradient. Pixi's Graphics has no gradients: the gradient is
     * drawn by the browser's canvas into a texture (so that its colors are what
     * createjs paints), once for each gradient and shared, and filled with
     * through a matrix from the texture's pixels to the shape's coordinates.
     * Outside the gradient the end colors continue, as in canvas. A gradient
     * canvas paints nothing with (a line of length 0, two equal circles) fills
     * nothing.
     */
    beginLinearGradientFill(colors: string[], ratios: number[], x0: number, y0: number, x1: number, y1: number): this;
    lf(colors: string[], ratios: number[], x0: number, y0: number, x1: number, y1: number): this;
    beginRadialGradientFill(colors: string[], ratios: number[], x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): this;
    rf(colors: string[], ratios: number[], x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): this;
    private _beginGradientFill;
    endFill(): this;
    ef(): this;
    setStrokeStyle(thickness: number, caps: 0 | 1 | 2, joints: 0 | 1 | 2, miterLimit: number, ignoreScale: boolean): this;
    ss(thickness: number, caps: 0 | 1 | 2, joints: 0 | 1 | 2, miterLimit: number, ignoreScale: boolean): this;
    beginStroke(color: string): this;
    s(color: string): this;
    /**
     * Strokes with a gradient (taken by the stroke style set next, as a color
     * set by beginStroke is). The gradient is drawn by the browser's canvas
     * into a texture once and shared; see beginLinearGradientFill.
     */
    beginLinearGradientStroke(colors: string[], ratios: number[], x0: number, y0: number, x1: number, y1: number): this;
    ls(colors: string[], ratios: number[], x0: number, y0: number, x1: number, y1: number): this;
    beginRadialGradientStroke(colors: string[], ratios: number[], x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): this;
    rs(colors: string[], ratios: number[], x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): this;
    private _setGradientStroke;
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
