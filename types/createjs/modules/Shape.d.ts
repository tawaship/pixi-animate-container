import { DisplayObject, Container } from 'pixi.js';
import { IPixiData, ICreatejsParam, ITickerData, ICreatejsDisplayObjectUpdater, ICreatejsDisplayObjectInitializer } from './core';
import { CreatejsGraphics } from './Graphics';
import { CreatejsEventManager } from './EventManager';
/**
 * inherited {@link http://pixijs.download/release/docs/PIXI.Container.html | PIXI.Container}
 */
export declare class PixiShape extends Container {
    private _createjs;
    constructor(cjs: CreatejsShape);
    get createjs(): CreatejsShape;
}
export interface ICreatejsShapeParam extends ICreatejsParam {
    graphics: CreatejsGraphics | null;
}
export interface IPixiShapeData extends IPixiData<PixiShape> {
    /**
     * inherited {@link http://pixijs.download/release/docs/PIXI.DisplayObject.html | PIXI.DisplayObject}
     */
    masked: DisplayObject[];
}
declare const CreatejsShape_base: abstract new (...args: any[]) => import("./core").IMixinedCreatejsDisplayObject<PixiShape>;
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Shape.html | createjs.Shape}
 */
export declare class CreatejsShape extends CreatejsShape_base implements ICreatejsDisplayObjectUpdater, ICreatejsDisplayObjectInitializer {
    protected _pixiData: IPixiShapeData;
    protected _createjsParams: ICreatejsShapeParam;
    protected _createjsEventManager: CreatejsEventManager;
    constructor(...args: any[]);
    initialize(...args: any[]): any;
    updateForPixi(e: ITickerData): boolean;
    updateBlendModeForPixi(mode: PIXI.BLEND_MODES): void;
    get graphics(): CreatejsGraphics | null;
    set graphics(value: CreatejsGraphics | null);
    get masked(): DisplayObject[];
}
export {};
