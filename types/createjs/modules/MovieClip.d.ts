import { BLEND_MODES, Container } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import { CreatejsColorFilter } from './ColorFilter';
import { ICreatejsDisplayObject, ICreatejsBlendModeTarget, IPixiData, TCreatejsMask } from './core';
/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Container.html | PIXI.Container}
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
/**
 * A timeline label entry (`label` name and `position` frame number) - the
 * element type of the real createjs.MovieClip.labels, referenced instead of
 * redeclared so there is a single source of truth.
 */
export type IAnimateReachLabelData = createjs.MovieClip['labels'][number];
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
 * Constructor arguments accepted by createjs.MovieClip across publish
 * generations: either a single properties object, or the legacy positional
 * form (mode, startPosition, loop, labels). Derived from the real
 * constructor so there is a single source of truth - this class is assigned
 * over createjs.MovieClip, so it must accept everything the original
 * accepts.
 */
export type TCreatejsMovieClipConstructorArgs = ConstructorParameters<typeof createjs.MovieClip>;
/**
 * The properties object form of the createjs.MovieClip constructor arguments
 * (the shape produced by current Animate publishes) - the non-positional
 * member of {@link TCreatejsMovieClipConstructorArgs}. `mode`'s documented
 * values are {@link TCreatejsMovieClipMode}, and `labels` is a
 * `{ [name: string]: number }` dictionary in publish output.
 */
export type ICreatejsMovieClipProps = NonNullable<Exclude<TCreatejsMovieClipConstructorArgs[0], string>>;
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
 *
 * `mask` is a plain data property on the real createjs.DisplayObject, but
 * this wrapper must intercept get/set to route the assigned value into the
 * Pixi mirror. See the class-level comment on CreatejsShape for why a
 * prototype accessor safely intercepts it despite TS2611/TS2416.
 */
export declare class CreatejsMovieClip extends createjs.MovieClip implements ICreatejsDisplayObject<PixiMovieClip> {
    [key: string]: any;
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
    addChild<T extends createjs.DisplayObject & ICreatejsBlendModeTarget>(child: T): T;
    addChild<T extends createjs.DisplayObject & ICreatejsBlendModeTarget>(child0: createjs.DisplayObject & ICreatejsBlendModeTarget, lastChild: T): T;
    addChild<T extends createjs.DisplayObject & ICreatejsBlendModeTarget>(child0: createjs.DisplayObject & ICreatejsBlendModeTarget, child1: createjs.DisplayObject & ICreatejsBlendModeTarget, lastChild: T): T;
    addChild<T extends createjs.DisplayObject & ICreatejsBlendModeTarget>(child0: createjs.DisplayObject & ICreatejsBlendModeTarget, child1: createjs.DisplayObject & ICreatejsBlendModeTarget, child2: createjs.DisplayObject & ICreatejsBlendModeTarget, lastChild: T): T;
    addChild(...children: (createjs.DisplayObject & ICreatejsBlendModeTarget)[]): createjs.DisplayObject;
    addChildAt<T extends createjs.DisplayObject & ICreatejsBlendModeTarget>(child: T, index: number): T;
    addChildAt<T extends createjs.DisplayObject & ICreatejsBlendModeTarget>(child0: createjs.DisplayObject & ICreatejsBlendModeTarget, lastChild: T, index: number): T;
    addChildAt<T extends createjs.DisplayObject & ICreatejsBlendModeTarget>(child0: createjs.DisplayObject & ICreatejsBlendModeTarget, child1: createjs.DisplayObject & ICreatejsBlendModeTarget, lastChild: T, index: number): T;
    addChildAt(...childOrIndex: ((createjs.DisplayObject & ICreatejsBlendModeTarget) | number)[]): createjs.DisplayObject;
    removeChild(...children: createjs.DisplayObject[]): boolean;
    removeChildAt(...index: number[]): boolean;
    removeAllChildren(): void;
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
