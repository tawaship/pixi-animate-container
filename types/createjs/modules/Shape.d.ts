import { DisplayObject, Container, BLEND_MODES } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import { ICreatejsDisplayObject, IPixiData, TCreatejsMask } from './core';
import { CreatejsGraphics } from './Graphics';
/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Container.html | PIXI.Container}
 */
export declare class PixiShape extends Container {
    private _createjs;
    constructor(cjs: CreatejsShape);
    get createjs(): CreatejsShape;
}
export interface IPixiShapeData extends IPixiData<PixiShape> {
    /**
     * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.DisplayObject.html | PIXI.DisplayObject}
     */
    masked: DisplayObject[];
    graphics: CreatejsGraphics | null;
}
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Shape.html | createjs.Shape}
 *
 * `graphics` and `mask` are declared as plain data properties on the real
 * createjs.Shape/DisplayObject, but this wrapper must intercept get/set to
 * route the assigned value into the Pixi mirror. TypeScript's
 * accessor-over-property check (TS2611/TS2416) guards against real class-field
 * semantics; createjs.Shape is a legacy ES5 prototype constructor with no
 * class fields, so a prototype accessor correctly intercepts the plain
 * `this.graphics = x` / `this.mask = x` assignments the real base constructor
 * makes, with no runtime hazard - confirmed by the wrapper smoke and
 * verification-C suites, which exercise both assignments.
 */
export declare class CreatejsShape extends createjs.Shape implements ICreatejsDisplayObject<PixiShape> {
    constructor(graphics?: CreatejsGraphics);
    get pixi(): PixiShape;
    updateBlendModeForPixi(mode: BLEND_MODES): void;
    get graphics(): CreatejsGraphics | null;
    set graphics(value: CreatejsGraphics | null);
    get masked(): DisplayObject[];
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
