import { Container, Text } from 'pixi.js';
import { IPixiData, ICreatejsParam, ITickerData, ICreatejsDisplayObjectUpdater } from './core';
import { CreatejsEventManager } from './EventManager';
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
export interface ICreatejsTextParam extends ICreatejsParam {
    text: string;
    font: string;
    color: string;
    textAlign: TCreatejsTextAlign;
    lineHeight: number;
    lineWidth: number;
}
export interface IPixiTextData extends IPixiData<PixiTextContainer> {
}
export interface ICreatejsParsedText {
    fontSize: number;
    fontFamily: string;
    fontWeight?: string | number;
}
declare const CreatejsText_base: abstract new (...args: any[]) => import("./core").IMixinedCreatejsDisplayObject<PixiTextContainer>;
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Text.html | createjs.Text}
 */
export declare class CreatejsText extends CreatejsText_base implements ICreatejsDisplayObjectUpdater {
    protected _pixiData: IPixiTextData;
    protected _createjsParams: ICreatejsTextParam;
    protected _createjsEventManager: CreatejsEventManager;
    constructor(text: string, font: string, color?: string, ...args: any[]);
    updateForPixi(e: ITickerData): boolean;
    updateBlendModeForPixi(mode: PIXI.BLEND_MODES): void;
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
}
export {};
