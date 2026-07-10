import { BLEND_MODES, Container, Text } from 'pixi.js';
import { ICreatejsDisplayObject, ICreatejsDisplayObjectBase, IPixiData, TCreatejsMask } from './core';
import { CreatejsButtonHelper } from './ButtonHelper';
import { ICreatejsInteractionEventDelegate } from './EventManager';
/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.Text.html | PIXI.Text}
 */
export declare class PixiText extends Text {
}
/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.Container.html | PIXI.Container}
 */
export declare class PixiTextContainer extends Container {
    private _createjs;
    private _text;
    constructor(cjs: CreatejsText, text: PixiText);
    get createjs(): CreatejsText;
    get text(): PixiText;
}
export type TCreatejsTextAlign = 'left' | 'center' | 'right';
export type TCreatejsTextConstructorArgs = [string?, string?, string?];
/**
 * Members of the (untyped) createjs.Text runtime that the wrapper relies on.
 */
export interface ICreatejsTextBase extends ICreatejsDisplayObjectBase {
}
export interface ICreatejsTextBaseConstructor {
    new (...args: TCreatejsTextConstructorArgs): ICreatejsTextBase;
}
/**
 * @ignore
 */
declare const TextBase: ICreatejsTextBaseConstructor;
export interface ICreatejsParsedText {
    fontSize: number;
    fontFamily: string;
    fontWeight: string;
}
export interface IPixiTextData extends IPixiData<PixiTextContainer> {
    text: string;
    font: string;
    color: string;
    textAlign: TCreatejsTextAlign;
    lineHeight: number;
    lineWidth: number;
}
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Text.html | createjs.Text}
 */
export declare class CreatejsText extends TextBase implements ICreatejsDisplayObject<PixiTextContainer> {
    constructor(text: string, font: string, color?: string);
    get pixi(): PixiTextContainer;
    updateBlendModeForPixi(mode: BLEND_MODES): void;
    get text(): string;
    set text(text: string);
    private _parseFont;
    get font(): string;
    set font(font: string);
    private _parseColor;
    get color(): string;
    set color(color: string);
    private _align;
    get textAlign(): TCreatejsTextAlign;
    set textAlign(align: TCreatejsTextAlign);
    get lineHeight(): number;
    set lineHeight(height: number);
    get lineWidth(): number;
    set lineWidth(width: number);
    get mask(): TCreatejsMask;
    set mask(value: TCreatejsMask);
    addEventListener(type: string, cb: ICreatejsInteractionEventDelegate | CreatejsButtonHelper, useCapture?: boolean): CreatejsButtonHelper | ICreatejsInteractionEventDelegate;
    removeEventListener(type: string, cb: ICreatejsInteractionEventDelegate, useCapture?: boolean): void;
    removeAllEventListeners(type?: string): void;
}
export {};
