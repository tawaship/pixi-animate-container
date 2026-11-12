import { Matrix, Texture } from 'pixi.js';
/**
 * A linear or radial gradient as createjs makes it (beginLinearGradientFill
 * and the like): colors at ratios along the line from (x0, y0) to (x1, y1),
 * or between the circles (x0, y0, r0) and (x1, y1, r1), in the shape's
 * coordinates.
 */
export interface ICreatejsGradient {
    type: 'linear' | 'radial';
    colors: string[];
    ratios: number[];
    x0: number;
    y0: number;
    r0: number;
    x1: number;
    y1: number;
    r1: number;
}
/**
 * A gradient drawn into a canvas by the browser's own gradient (so that its
 * colors are what canvas, and createjs, paints), as a texture that Pixi's
 * Graphics fills and strokes with through a matrix. `gradient` is the
 * gradient in the shape's coordinates, `local` the same gradient in the
 * texture's pixels, and `toShape` takes texture pixels to the shape's
 * coordinates.
 */
export declare class GradientTexture extends Texture {
    readonly gradient: ICreatejsGradient;
    readonly local: ICreatejsGradient;
    readonly toShape: Matrix;
    constructor(canvas: HTMLCanvasElement, gradient: ICreatejsGradient, local: ICreatejsGradient, toShape: Matrix);
}
/**
 * The texture a gradient is drawn with, or null when canvas paints nothing
 * with it (a line of length 0, two equal circles).
 */
export declare function getGradientTexture(gradient: ICreatejsGradient): GradientTexture | null;
