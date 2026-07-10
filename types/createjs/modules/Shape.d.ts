import { DisplayObject, Container, BLEND_MODES } from 'pixi.js';
import { ICreatejsDisplayObject, ICreatejsDisplayObjectBase, IPixiData, TCreatejsMask } from './core';
import { CreatejsGraphics } from './Graphics';
import { CreatejsButtonHelper } from './ButtonHelper';
import { ICreatejsInteractionEventDelegate } from './EventManager';
/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.Container.html | PIXI.Container}
 */
export declare class PixiShape extends Container {
    private _createjs;
    constructor(cjs: CreatejsShape);
    get createjs(): CreatejsShape;
}
export type TCreatejsShapeConstructorArgs = [CreatejsGraphics?];
/**
 * Members of the (untyped) createjs.Shape runtime that the wrapper relies on.
 */
export interface ICreatejsShapeBase extends ICreatejsDisplayObjectBase {
    initialize(...args: TCreatejsShapeConstructorArgs): void;
}
export interface ICreatejsShapeBaseConstructor {
    new (...args: TCreatejsShapeConstructorArgs): ICreatejsShapeBase;
}
/**
 * @ignore
 */
declare const ShapeBase: ICreatejsShapeBaseConstructor;
export interface IPixiShapeData extends IPixiData<PixiShape> {
    /**
     * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.DisplayObject.html | PIXI.DisplayObject}
     */
    masked: DisplayObject[];
    graphics: CreatejsGraphics | null;
}
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Shape.html | createjs.Shape}
 */
export declare class CreatejsShape extends ShapeBase implements ICreatejsDisplayObject<PixiShape> {
    constructor(...args: TCreatejsShapeConstructorArgs);
    initialize(...args: TCreatejsShapeConstructorArgs): void;
    get pixi(): PixiShape;
    updateBlendModeForPixi(mode: BLEND_MODES): void;
    get graphics(): CreatejsGraphics | null;
    set graphics(value: CreatejsGraphics | null);
    get masked(): DisplayObject[];
    get mask(): TCreatejsMask;
    set mask(value: TCreatejsMask);
    addEventListener(type: string, cb: ICreatejsInteractionEventDelegate | CreatejsButtonHelper, useCapture?: boolean): CreatejsButtonHelper | ICreatejsInteractionEventDelegate;
    removeEventListener(type: string, cb: ICreatejsInteractionEventDelegate, useCapture?: boolean): void;
    removeAllEventListeners(type?: string): void;
}
export {};
