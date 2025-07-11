import { Sprite } from 'pixi.js';
import { IPixiData, ICreatejsParam, ITickerData, ICreatejsDisplayObjectUpdater, ICreatejsDisplayObjectInitializer } from './core';
import { CreatejsEventManager } from './EventManager';
/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.Sprite.html | PIXI.Sprite}
 */
export declare class PixiSprite extends Sprite {
    private _createjs;
    constructor(cjs: CreatejsSprite | {});
    get createjs(): {} | CreatejsSprite;
}
export interface ICreatejsSpriteParam extends ICreatejsParam {
}
export interface IPixiSpriteData extends IPixiData<PixiSprite> {
}
declare const CreatejsSprite_base: abstract new (...args: any[]) => import("./core").IMixinedCreatejsDisplayObject<PixiSprite>;
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Sprite.html | createjs.Sprite}
 */
export declare class CreatejsSprite extends CreatejsSprite_base implements ICreatejsDisplayObjectUpdater, ICreatejsDisplayObjectInitializer {
    protected _pixiData: IPixiSpriteData;
    protected _createjsParams: ICreatejsSpriteParam;
    protected _createjsEventManager: CreatejsEventManager;
    constructor(...args: any[]);
    initialize(...args: any[]): any;
    updateForPixi(e: ITickerData): boolean;
    updateBlendModeForPixi(mode: PIXI.BLEND_MODES): void;
    gotoAndStop(...args: any[]): void;
}
export {};
