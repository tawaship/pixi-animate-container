import { BLEND_MODES, Container, Text } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import { ICreatejsDisplayObject, IPixiData, TCreatejsMask } from './core';
/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Text.html | PIXI.Text}
 */
export declare class PixiText extends Text {
}
/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Container.html | PIXI.Container}
 */
export declare class PixiTextContainer extends Container {
    private _createjs;
    private _text;
    constructor(cjs: CreatejsText, text: PixiText);
    get createjs(): CreatejsText;
    get text(): PixiText;
}
export type TCreatejsTextAlign = 'left' | 'center' | 'right';
export type TCreatejsTextConstructorArgs = ConstructorParameters<typeof createjs.Text>;
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
 *
 * `text`/`font`/`color`/`textAlign`/`lineHeight`/`lineWidth`/`mask` are all
 * plain data properties on the real createjs.Text/DisplayObject, but this
 * wrapper must intercept get/set on each to route the assigned value into the
 * Pixi mirror. See the class-level comment on CreatejsShape for why a
 * prototype accessor safely intercepts them despite TS2611/TS2416.
 */
export declare class CreatejsText extends createjs.Text implements ICreatejsDisplayObject<PixiTextContainer> {
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
