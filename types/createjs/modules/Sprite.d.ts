import { Sprite, BLEND_MODES, Rectangle } from 'pixi.js';
import { ICreatejsDisplayObject, ICreatejsDisplayObjectBase, IPixiData, TCreatejsMask } from './core';
import { CreatejsButtonHelper } from './ButtonHelper';
import { ICreatejsInteractionEventDelegate } from './EventManager';
/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.Sprite.html | PIXI.Sprite}
 */
export declare class PixiSprite extends Sprite {
    private _createjs;
    constructor(cjs: CreatejsSprite);
    get createjs(): CreatejsSprite;
}
export interface ICreatejsSpriteSheetFrame {
    image: HTMLImageElement | HTMLCanvasElement;
    rect: Rectangle;
}
export interface ICreatejsSpriteSheet {
    getFrame(frameIndex: number): ICreatejsSpriteSheetFrame;
}
export type TCreatejsSpriteConstructorArgs = [ICreatejsSpriteSheet?, (string | number)?];
/**
 * Members of the (untyped) createjs.Sprite runtime that the wrapper relies on.
 */
export interface ICreatejsSpriteBase extends ICreatejsDisplayObjectBase {
    spriteSheet: ICreatejsSpriteSheet;
    currentFrame: number;
    gotoAndStop(frameOrAnimation: string | number): void;
    initialize(...args: TCreatejsSpriteConstructorArgs): void;
}
export interface ICreatejsSpriteBaseConstructor {
    new (...args: TCreatejsSpriteConstructorArgs): ICreatejsSpriteBase;
}
/**
 * @ignore
 */
declare const SpriteBase: ICreatejsSpriteBaseConstructor;
export interface IPixiSpriteData extends IPixiData<PixiSprite> {
}
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Sprite.html | createjs.Sprite}
 */
export declare class CreatejsSprite extends SpriteBase implements ICreatejsDisplayObject<PixiSprite> {
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
    addEventListener(type: string, cb: ICreatejsInteractionEventDelegate | CreatejsButtonHelper, useCapture?: boolean): CreatejsButtonHelper | ICreatejsInteractionEventDelegate;
    removeEventListener(type: string, cb: ICreatejsInteractionEventDelegate, useCapture?: boolean): void;
    removeAllEventListeners(type?: string): void;
}
export {};
