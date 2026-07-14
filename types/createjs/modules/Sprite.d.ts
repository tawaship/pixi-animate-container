import { Sprite, BLEND_MODES } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import { ICreatejsDisplayObject, IPixiData, TCreatejsMask } from './core';
/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Sprite.html | PIXI.Sprite}
 */
export declare class PixiSprite extends Sprite {
    private _createjs;
    constructor(cjs: CreatejsSprite);
    get createjs(): CreatejsSprite;
}
export type TCreatejsSpriteConstructorArgs = ConstructorParameters<typeof createjs.Sprite>;
export interface IPixiSpriteData extends IPixiData<PixiSprite> {
}
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Sprite.html | createjs.Sprite}
 *
 * `mask` is a plain data property on the real createjs.DisplayObject, but
 * this wrapper must intercept get/set to route the assigned value into the
 * Pixi mirror. See the class-level comment on CreatejsShape for why a
 * prototype accessor safely intercepts it despite TS2611/TS2416.
 */
export declare class CreatejsSprite extends createjs.Sprite implements ICreatejsDisplayObject<PixiSprite> {
    constructor(...args: TCreatejsSpriteConstructorArgs);
    initialize(...args: TCreatejsSpriteConstructorArgs): void;
    get pixi(): PixiSprite;
    /**
     * The Pixi mirror is only updated through gotoAndStop, so the spritesheet
     * animation must not self-advance when the original Sprite._tick runs
     * (tick delegation would otherwise advance the createjs side alone and
     * leave the display behind).
     */
    advance(time?: number): void;
    updateBlendModeForPixi(mode: BLEND_MODES): void;
    gotoAndStop(frameOrAnimation: string | number): void;
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
