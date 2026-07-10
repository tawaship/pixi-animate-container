import { BLEND_MODES, Container } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import { CreatejsColorFilter } from './ColorFilter';
import { ICreatejsDisplayObject, ICreatejsDisplayObjectBase, ICreatejsChildNode, ICreatejsBlendModeTarget, ICreatejsLabel, IPixiData, TCreatejsMask } from './core';
import { CreatejsButtonHelper } from './ButtonHelper';
import { ICreatejsInteractionEventDelegate } from './EventManager';
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
export declare class AnimateEvent extends createjs.Event {
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
export type TCreatejsMovieClipMode = 'independent' | 'single' | 'synched';
/**
 * The properties object form of the createjs.MovieClip constructor arguments
 * (the shape produced by current Animate publishes).
 */
export interface ICreatejsMovieClipProps {
    mode?: TCreatejsMovieClipMode;
    startPosition?: number;
    loop?: boolean;
    reversed?: boolean;
    paused?: boolean;
    position?: number;
    labels?: {
        [name: string]: number;
    };
}
/**
 * Constructor arguments accepted by createjs.MovieClip across publish
 * generations: either a single properties object, or the legacy positional
 * form (mode, startPosition, loop, labels-or-reversed).
 */
export type TCreatejsMovieClipConstructorArgs = [ICreatejsMovieClipProps?] | [TCreatejsMovieClipMode?, number?, boolean?, ({
    [name: string]: number;
} | boolean)?];
/**
 * The target object of a timeline tween: either a display object (has `x`) or
 * a state-holder used by publish output for child membership swapping (has
 * `state`). Both members are optional because either kind can appear.
 */
export interface ICreatejsTweenTarget {
    state?: {
        t: object;
    }[];
    x?: number;
}
export interface ICreatejsTweenLike {
    target: ICreatejsTweenTarget;
}
export interface ICreatejsTimelineBase {
    reversed: boolean;
    tweens: ICreatejsTweenLike[];
}
/**
 * Bounds metadata stamped on symbol prototypes by Animate publish output
 * (not part of core createjs).
 */
export interface ICreatejsNominalBounds {
    x: number;
    y: number;
    width: number;
    height: number;
}
/**
 * Members of the (untyped) createjs.MovieClip runtime that the wrapper relies on.
 */
export interface ICreatejsMovieClipBase extends ICreatejsDisplayObjectBase {
    children: ICreatejsChildNode[];
    currentFrame: number;
    totalFrames: number;
    labels: ICreatejsLabel[];
    mode: TCreatejsMovieClipMode;
    startPosition: number;
    loop: boolean;
    timeline: ICreatejsTimelineBase;
    nominalBounds: ICreatejsNominalBounds;
    cache(x: number, y: number, width: number, height: number, scale?: number): void;
    advance(time?: number): void;
    _updateState(): void;
    addChild<T extends ICreatejsBlendModeTarget>(child: T): T;
    addChildAt<T extends ICreatejsBlendModeTarget>(child: T, index: number): T;
    removeChild<T extends ICreatejsBlendModeTarget>(child: T): boolean;
    removeChildAt(index: number): boolean;
    removeAllChildren(): void;
    gotoAndPlay(positionOrLabel: string | number): void;
    gotoAndStop(positionOrLabel: string | number): void;
    play(): void;
    stop(): void;
    initialize(...args: TCreatejsMovieClipConstructorArgs): void;
}
export interface ICreatejsMovieClipBaseConstructor {
    new (...args: TCreatejsMovieClipConstructorArgs): ICreatejsMovieClipBase;
}
/**
 * @ignore
 */
declare const MovieClipBase: ICreatejsMovieClipBaseConstructor;
export declare enum CompositeOperations {
    Lighter = "lighter",
    Multiply = "multiply",
    Screen = "screen"
}
export interface IPixiMovieClipData extends IPixiData<PixiMovieClip> {
    subInstance: Container;
    listenFrameEvents: IAnimateFrameEventOption;
    filters: TCreatejsColorFilters;
    compositeOperation: CompositeOperations | null;
}
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/MovieClip.html | createjs.MovieClip}
 */
export declare class CreatejsMovieClip extends MovieClipBase implements ICreatejsDisplayObject<PixiMovieClip> {
    protected _fps: number;
    protected _listenFrameEventsBase: IAnimateFrameEventOption;
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
    constructor(...args: TCreatejsMovieClipConstructorArgs);
    initialize(...args: TCreatejsMovieClipConstructorArgs): void;
    get pixi(): PixiMovieClip;
    get framerate(): number;
    set framerate(value: number);
    get fps(): number;
    /**
     * This changes whether to `listen` for a specified custom event.
     */
    listenCustomFrameEvent(type: keyof IAnimateFrameEventOption, value: boolean): void;
    /**
     * Advances the timeline (delegated to the original createjs implementation)
     * and dispatches the custom frame events right after the frame changes,
     * before the children are ticked — the same timing the previous
     * self-managed walk provided.
     *
     * framerate is fixed at -1 and the driver never passes a delta, so one call
     * always advances exactly one frame (determinism lives with the caller).
     */
    advance(time?: number): void;
    /**
     * Recursive _updateState walk: the substitute for the draw phase of the
     * original pipeline (MovieClip.draw -> _updateState), which is what
     * resolves SYNCHED / SINGLE_FRAME / first-render state — advance() only
     * moves INDEPENDENT clips. Runs once per frame after _tick, and once when
     * a root is registered (frame-0 seating). Walks the live children array in
     * reverse, matching the traversal discipline of the original
     * Container._tick.
     */
    updateStateForPixi(): void;
    updateBlendModeForPixi(mode: BLEND_MODES): void;
    get compositeOperation(): CompositeOperations | null;
    set compositeOperation(value: CompositeOperations | null);
    get filters(): TCreatejsColorFilters;
    set filters(value: TCreatejsColorFilters);
    get mask(): TCreatejsMask;
    set mask(value: TCreatejsMask);
    private _updateChildrenBlendModeForPixi;
    addChild<T extends ICreatejsBlendModeTarget>(child: T): T;
    addChildAt<T extends ICreatejsBlendModeTarget>(child: T, index: number): T;
    removeChild<T extends ICreatejsBlendModeTarget>(child: T): boolean;
    removeChildAt(index: number): boolean;
    removeAllChldren(): void;
    addEventListener(type: string, cb: ICreatejsInteractionEventDelegate | CreatejsButtonHelper, useCapture?: boolean): CreatejsButtonHelper | ICreatejsInteractionEventDelegate;
    removeEventListener(type: string, cb: ICreatejsInteractionEventDelegate, useCapture?: boolean): void;
    removeAllEventListeners(type?: string): void;
}
export {};
