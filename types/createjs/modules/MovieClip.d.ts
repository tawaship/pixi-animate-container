import { BLEND_MODES, Container } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import { CreatejsColorFilter } from './ColorFilter';
import { IPixiData, ICreatejsParam, ICreatejsDisplayObjectUpdater, ICreatejsDisplayObjectInitializer } from './core';
import { CreatejsEventManager } from './EventManager';
/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.Container.html | PIXI.Container}
 */
export declare class PixiMovieClip extends Container {
    private _createjs;
    private _filterContainer;
    constructor(cjs: CreatejsMovieClip);
    get filterContainer(): Container | null;
    set filterContainer(value: Container | null);
    get createjs(): CreatejsMovieClip;
}
export type TCreatejsColorFilters = CreatejsColorFilter[] | null;
export interface ICreatejsMovieClipParam extends ICreatejsParam {
    filters: TCreatejsColorFilters;
    compositeOperation: CompositeOpeations | null;
}
export interface IPixiMovieClipData extends IPixiData<PixiMovieClip> {
    subInstance: Container;
}
export declare class AnimateEvent extends createjs.Event {
    static [x: string]: any;
    constructor(type: string);
}
export interface IAnimateReachLabelData {
    /**
     * Label name.
     */
    label: string;
    /**
     * Frame number of label.
     */
    position: number;
}
export declare class AnimateReachLabelEvent extends AnimateEvent {
    data: IAnimateReachLabelData;
    constructor(type: string, label: IAnimateReachLabelData);
}
export interface IAnimateFrameEventOption {
    /**
     * Whether to fire {@link CreatejsMovieClip.endAnimation}
     */
    endAnimation?: boolean;
    /**
     * Whether to fire {@link CreatejsMovieClip.reachLabel}
     */
    reachLabel?: boolean;
}
/**
 * @ignore
 */
declare enum CompositeOpeations {
    Lighter = "lighter",
    Multiply = "multiply",
    Screen = "screen"
}
declare const CreatejsMovieClip_base: abstract new (...args: any[]) => import("./core").IMixinedCreatejsDisplayObject<PixiMovieClip>;
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/MovieClip.html | createjs.MovieClip}
 */
export declare class CreatejsMovieClip extends CreatejsMovieClip_base implements ICreatejsDisplayObjectUpdater, ICreatejsDisplayObjectInitializer {
    protected _pixiData: IPixiMovieClipData;
    protected _createjsParams: ICreatejsMovieClipParam;
    protected _createjsEventManager: CreatejsEventManager;
    protected _fps: number;
    protected _listenFrameEventsBase: IAnimateFrameEventOption;
    protected _listenFrameEvents: IAnimateFrameEventOption;
    /**
     * When the last frame of the timeline is reached.
     *
     * @event
     */
    endAnimation?(e: AnimateEvent): void;
    /**
     * When either labels is reached.
     *
     * @event
     */
    reachLabel?(e: AnimateReachLabelEvent): void;
    constructor(...args: any[]);
    initialize(...args: any[]): void;
    get framerate(): number;
    set framerate(value: number);
    get fps(): number;
    /**
     * This changes whether to `listen` for a specified custom event.
     */
    listenCustomFrameEvent(type: keyof IAnimateFrameEventOption, value: boolean): void;
    /**
     * Advances createjs by 1 frame.
     *
     * Because framerate is fixed at -1, advance() always advances by 1 frame regardless of delta time.
     * Control such as "advance 0 frames" or "advance 2 or more frames" is achieved by
     * the number of times this function is called (the responsibility of the caller).
     */
    updateForPixi(): boolean;
    updateBlendModeForPixi(mode: BLEND_MODES): void;
    get compositeOperation(): CompositeOpeations | null;
    set compositeOperation(value: CompositeOpeations | null);
    get filters(): TCreatejsColorFilters;
    set filters(value: TCreatejsColorFilters);
    private _updateChildrenBlendModeForPixi;
    addChild(child: ICreatejsDisplayObjectUpdater): any;
    addChildAt(child: ICreatejsDisplayObjectUpdater, index: number): any;
    removeChild(child: ICreatejsDisplayObjectUpdater): any;
    removeChildAt(index: number): any;
    removeAllChldren(): any;
}
export {};
