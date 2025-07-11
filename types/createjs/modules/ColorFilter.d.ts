import { filters } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import { ICreatejsParam } from './core';
/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.ColorMatrixFilter.html | PIXI.Sprite}
 */
export declare class PixiColorMatrixFilter extends filters.ColorMatrixFilter {
    private _createjs;
    constructor(cjs: CreatejsColorFilter);
    get createjs(): CreatejsColorFilter;
}
export interface IPixiColorMatrixFilterData {
    instance: PixiColorMatrixFilter;
}
export interface ICreatejsColorFilterParam extends ICreatejsParam {
    redMultiplier: number;
    greenMultiplier: number;
    blueMultiplier: number;
    alphaMultiplier: number;
    redOffset: number;
    greenOffset: number;
    blueOffset: number;
    alphaOffset: number;
}
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/ColorFilter.html | createjs.ColorFilter}
 */
export declare class CreatejsColorFilter extends createjs.ColorFilter {
    static [x: string]: any;
    protected _pixiData: IPixiColorMatrixFilterData;
    protected _createjsParams: ICreatejsColorFilterParam;
    constructor(...args: number[]);
    get pixi(): PixiColorMatrixFilter;
}
