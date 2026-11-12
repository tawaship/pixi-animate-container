import { filters } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.filters.ColorMatrixFilter.html | PIXI.filters.ColorMatrixFilter}
 *
 * Its matrix follows the 8 scalars of its createjs ColorFilter. They are
 * plain data properties (tweens write them), so they are copied over when
 * the filter is about to be drawn (see PixiMovieClip.updateTransform) and
 * when `matrix` is read.
 */
export declare class PixiColorMatrixFilter extends filters.ColorMatrixFilter {
    private _createjs;
    constructor(cjs: CreatejsColorFilter);
    get createjs(): CreatejsColorFilter;
    get matrix(): number[];
    set matrix(value: number[]);
    /**
     * Copies the scalars of the createjs ColorFilter into the matrix.
     */
    syncFromCreatejs(): void;
}
export type TCreatejsColorFilterConstructorArgs = ConstructorParameters<typeof createjs.ColorFilter>;
export declare function getPixiColorMatrixFilter(filter: CreatejsColorFilter): PixiColorMatrixFilter;
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/ColorFilter.html | createjs.ColorFilter}
 *
 * The 8 scalars (redMultiplier etc.) are plain data properties; the paired Pixi
 * filter copies them into its matrix before it is drawn and when its matrix is
 * read (see PixiColorMatrixFilter), not by accessors.
 */
export declare class CreatejsColorFilter extends createjs.ColorFilter {
    constructor(...args: TCreatejsColorFilterConstructorArgs);
    get pixi(): PixiColorMatrixFilter;
}
