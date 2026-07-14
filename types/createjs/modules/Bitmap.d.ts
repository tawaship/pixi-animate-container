import { BLEND_MODES, Sprite } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import { ICreatejsDisplayObject, IPixiData, TCreatejsMask } from './core';
/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Sprite.html | PIXI.Sprite}
 */
export declare class PixiBitmap extends Sprite {
    private _createjs;
    constructor(cjs: CreatejsBitmap);
    get createjs(): CreatejsBitmap;
}
export type TCreatejsBitmapConstructorArgs = ConstructorParameters<typeof createjs.Bitmap>;
export type TCreatejsBitmapSource = Exclude<TCreatejsBitmapConstructorArgs[0], undefined>;
export interface IPixiBitmapData extends IPixiData<PixiBitmap> {
}
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Bitmap.html | createjs.Bitmap}
 *
 * `mask` is a plain data property on the real createjs.DisplayObject, but
 * this wrapper must intercept get/set to route the assigned value into the
 * Pixi mirror. See the class-level comment on CreatejsShape for why a
 * prototype accessor safely intercepts it despite TS2611/TS2416.
 */
export declare class CreatejsBitmap extends createjs.Bitmap implements ICreatejsDisplayObject<PixiBitmap> {
    constructor(...args: TCreatejsBitmapConstructorArgs);
    initialize(...args: TCreatejsBitmapConstructorArgs): void;
    get pixi(): PixiBitmap;
    updateBlendModeForPixi(mode: BLEND_MODES): void;
    get mask(): TCreatejsMask;
    set mask(value: TCreatejsMask);
    addEventListener(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): Function;
    addEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): Function;
    addEventListener(type: string, listener: {
        handleEvent: (eventObj: Object) => boolean;
    }, useCapture?: boolean): Object;
    addEventListener(type: string, listener: {
        handleEvent: (eventObj: Object) => void;
    }, useCapture?: boolean): Object;
    removeEventListener(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): void;
    removeEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
    removeEventListener(type: string, listener: {
        handleEvent: (eventObj: Object) => boolean;
    }, useCapture?: boolean): void;
    removeEventListener(type: string, listener: {
        handleEvent: (eventObj: Object) => void;
    }, useCapture?: boolean): void;
    off(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): void;
    off(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
    off(type: string, listener: {
        handleEvent: (eventObj: Object) => boolean;
    }, useCapture?: boolean): void;
    off(type: string, listener: {
        handleEvent: (eventObj: Object) => void;
    }, useCapture?: boolean): void;
    removeAllEventListeners(type?: string): void;
}
