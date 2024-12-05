import { Container, Point } from 'pixi.js';
import { CreatejsButtonHelper } from './ButtonHelper';
import { CreatejsStage } from './Stage';
import { CreatejsStageGL } from './StageGL';
import { CreatejsMovieClip } from './MovieClip';
import { CreatejsSprite } from './Sprite';
import { CreatejsShape } from './Shape';
import { CreatejsBitmap } from './Bitmap';
import { CreatejsGraphics } from './Graphics';
import { CreatejsText } from './Text';
import { ICreatejsInteractionEventDelegate } from './EventManager';
export interface ITickerData {
    delta: number;
}
export interface IPixiData<T extends Container> {
    regObj: Point;
    instance: T;
    reservedBlendMode: PIXI.BLEND_MODES;
}
export declare function createPixiData<TPixiDisplayObject extends Container>(pixi: TPixiDisplayObject, regObj: Point): IPixiData<TPixiDisplayObject>;
export type TCreatejsMask = CreatejsShape | null;
export interface ICreatejsParam {
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
    regX: number;
    regY: number;
    skewX: number;
    skewY: number;
    rotation: number;
    visible: boolean;
    alpha: number;
    _off: boolean;
    mask: TCreatejsMask;
}
export type TCreatejsObject = CreatejsStage | CreatejsStageGL | CreatejsMovieClip | CreatejsSprite | CreatejsShape | CreatejsBitmap | CreatejsGraphics | CreatejsText;
export declare function createCreatejsParams(): ICreatejsParam;
export type TCreatejsDisplayObject = any;
export interface ICreatejsDisplayObjectUpdater extends TCreatejsDisplayObject {
    updateForPixi(e: ITickerData): boolean;
    updateBlendModeForPixi(mode: PIXI.BLEND_MODES): void;
}
export interface ICreatejsDisplayObjectInitializer {
    initialize(...args: any[]): any;
}
export declare function updateDisplayObjectChildren(cjs: ICreatejsDisplayObjectUpdater, e: ITickerData): boolean;
export interface IMixinedCreatejsDisplayObject<T extends Container> extends ICreatejsParam, TCreatejsDisplayObject {
    pixi: T;
    addEventListener(type: string, cb: ICreatejsInteractionEventDelegate | CreatejsButtonHelper, ...args: any[]): any;
    removeEventListener(type: string, cb: ICreatejsInteractionEventDelegate, ...args: any[]): any;
    removeAllEventListeners(type?: string, ...args: any[]): any;
}
export declare function mixinCreatejsDisplayObject<T extends Container, U extends ICreatejsParam>(superClass: new (...args: any[]) => IMixinedCreatejsDisplayObject<T>): abstract new (...args: any[]) => IMixinedCreatejsDisplayObject<T>;
