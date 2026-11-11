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
/**
 * Key of the paired Pixi filter on the createjs filter. A symbol key keeps
 * the createjs instance's surface as it is (for-in, Object.keys and
 * Object.getOwnPropertyNames show exactly the original 8 scalars; tween's
 * for-in sees the same surface as with the original createjs).
 */
export declare const PIXI_FILTER: unique symbol;
export declare function getPixiColorMatrixFilter(filter: CreatejsColorFilter): PixiColorMatrixFilter;
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/ColorFilter.html | createjs.ColorFilter}
 *
 * The 8 scalars (redMultiplier etc.) are plain data properties; they are copied
 * into the paired Pixi filter's matrix by the pull-sync pass at the end of each
 * tick (see core.ts syncToPixi), not by accessors.
 */
export declare class CreatejsColorFilter extends createjs.ColorFilter {
    /** The paired Pixi filter (see PIXI_FILTER) */
    [PIXI_FILTER]?: PixiColorMatrixFilter;
    constructor(...args: TCreatejsColorFilterConstructorArgs);
    get pixi(): PixiColorMatrixFilter;
}
