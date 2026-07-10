import { BLEND_MODES, Sprite } from 'pixi.js';
import { ICreatejsDisplayObject, ICreatejsDisplayObjectBase, IPixiData, TCreatejsMask } from './core';
import { CreatejsButtonHelper } from './ButtonHelper';
import { ICreatejsInteractionEventDelegate } from './EventManager';
/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.Sprite.html | PIXI.Sprite}
 */
export declare class PixiBitmap extends Sprite {
    private _createjs;
    constructor(cjs: CreatejsBitmap);
    get createjs(): CreatejsBitmap;
}
export type TCreatejsBitmapSource = HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | string;
export type TCreatejsBitmapConstructorArgs = [TCreatejsBitmapSource?];
/**
 * Members of the (untyped) createjs.Bitmap runtime that the wrapper relies on.
 */
export interface ICreatejsBitmapBase extends ICreatejsDisplayObjectBase {
    image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    initialize(...args: TCreatejsBitmapConstructorArgs): void;
}
export interface ICreatejsBitmapBaseConstructor {
    new (...args: TCreatejsBitmapConstructorArgs): ICreatejsBitmapBase;
}
/**
 * @ignore
 */
declare const BitmapBase: ICreatejsBitmapBaseConstructor;
export interface IPixiBitmapData extends IPixiData<PixiBitmap> {
}
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Bitmap.html | createjs.Bitmap}
 */
export declare class CreatejsBitmap extends BitmapBase implements ICreatejsDisplayObject<PixiBitmap> {
    constructor(...args: TCreatejsBitmapConstructorArgs);
    initialize(...args: TCreatejsBitmapConstructorArgs): void;
    get pixi(): PixiBitmap;
    updateBlendModeForPixi(mode: BLEND_MODES): void;
    get mask(): TCreatejsMask;
    set mask(value: TCreatejsMask);
    addEventListener(type: string, cb: ICreatejsInteractionEventDelegate | CreatejsButtonHelper, useCapture?: boolean): CreatejsButtonHelper | ICreatejsInteractionEventDelegate;
    removeEventListener(type: string, cb: ICreatejsInteractionEventDelegate, useCapture?: boolean): void;
    removeAllEventListeners(type?: string): void;
}
export {};
