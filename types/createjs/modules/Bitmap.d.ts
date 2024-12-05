import { Sprite } from 'pixi.js';
import { IPixiData, ICreatejsParam, ITickerData, ICreatejsDisplayObjectUpdater, ICreatejsDisplayObjectInitializer } from './core';
import { CreatejsEventManager } from './EventManager';
/**
 * inherited {@link http://pixijs.download/release/docs/PIXI.Sprite.html | PIXI.Sprite}
 */
export declare class PixiBitmap extends Sprite {
    private _createjs;
    constructor(cjs: CreatejsBitmap);
    get createjs(): CreatejsBitmap;
}
export interface ICreatejsBitmapParam extends ICreatejsParam {
}
export interface IPixiBitmapData extends IPixiData<PixiBitmap> {
}
declare const CreatejsBitmap_base: abstract new (...args: any[]) => import("./core").IMixinedCreatejsDisplayObject<PixiBitmap>;
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Bitmap.html | createjs.Bitmap}
 */
export declare class CreatejsBitmap extends CreatejsBitmap_base implements ICreatejsDisplayObjectUpdater, ICreatejsDisplayObjectInitializer {
    protected _pixiData: IPixiBitmapData;
    protected _createjsParams: ICreatejsBitmapParam;
    protected _createjsEventManager: CreatejsEventManager;
    constructor(...args: any[]);
    initialize(...args: any[]): any;
    updateForPixi(e: ITickerData): boolean;
    updateBlendModeForPixi(mode: PIXI.BLEND_MODES): void;
}
export {};
