import { filters } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.filters.ColorMatrixFilter.html | PIXI.filters.ColorMatrixFilter}
 */
export declare class PixiColorMatrixFilter extends filters.ColorMatrixFilter {
    private _createjs;
    constructor(cjs: CreatejsColorFilter);
    get createjs(): CreatejsColorFilter;
}
export type TCreatejsColorFilterConstructorArgs = ConstructorParameters<typeof createjs.ColorFilter>;
export declare function getPixiColorMatrixFilter(filter: CreatejsColorFilter): PixiColorMatrixFilter;
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/ColorFilter.html | createjs.ColorFilter}
 *
 * The 8 scalars (redMultiplier etc.) are plain data properties; they are copied
 * into the paired Pixi filter's matrix by the pull-sync pass at the end of each
 * tick (see core.ts syncToPixi), not by accessors.
 */
export declare class CreatejsColorFilter extends createjs.ColorFilter {
    constructor(...args: TCreatejsColorFilterConstructorArgs);
    get pixi(): PixiColorMatrixFilter;
}
