import { filters } from 'pixi.js';
import { IColorFilterSyncSource } from './core';
/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.filters.ColorMatrixFilter.html | PIXI.filters.ColorMatrixFilter}
 */
export declare class PixiColorMatrixFilter extends filters.ColorMatrixFilter {
    private _createjs;
    constructor(cjs: CreatejsColorFilter);
    get createjs(): CreatejsColorFilter;
}
/**
 * Members of the (untyped) createjs.ColorFilter runtime that the wrapper relies on.
 * The 8 scalars are plain enumerable data properties written by the original
 * constructor, exactly as in the original implementation.
 */
export interface ICreatejsColorFilterBase extends IColorFilterSyncSource {
}
export type TCreatejsColorFilterConstructorArgs = [
    number?,
    number?,
    number?,
    number?,
    number?,
    number?,
    number?,
    number?
];
export interface ICreatejsColorFilterBaseConstructor {
    new (...args: TCreatejsColorFilterConstructorArgs): ICreatejsColorFilterBase;
}
/**
 * @ignore
 */
declare const ColorFilterBase: ICreatejsColorFilterBaseConstructor;
export declare function getPixiColorMatrixFilter(filter: CreatejsColorFilter): PixiColorMatrixFilter;
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/ColorFilter.html | createjs.ColorFilter}
 *
 * The 8 scalars (redMultiplier etc.) are plain data properties; they are copied
 * into the paired Pixi filter's matrix by the pull-sync pass at the end of each
 * tick (see core.ts syncToPixi), not by accessors.
 */
export declare class CreatejsColorFilter extends ColorFilterBase {
    constructor(...args: TCreatejsColorFilterConstructorArgs);
    get pixi(): PixiColorMatrixFilter;
}
export {};
