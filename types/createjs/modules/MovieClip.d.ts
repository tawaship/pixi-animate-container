import { BLEND_MODES, Container } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import { CreatejsColorFilter } from './ColorFilter';
import { ICreatejsDisplayObject, ICreatejsBlendModeTarget, IPixiData, TCreatejsMask, PIXI_DATA } from './core';
import { EVENT_MANAGER, CreatejsEventManager } from './EventManager';
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
 * Key of the mark a root clip carries while its tree has to be settled before
 * Pixi draws (see markForSettle).
 */
export declare const SETTLE_MARK: unique symbol;
/**
 * Marks the tree `node` belongs to as needing to be settled before Pixi draws
 * (CreatejsController.flushForRender). createjs settles synched / single
 * frame clips and clips waiting to start over when it draws (MovieClip.draw
 * -> _updateState); the driver does that after every frame it plays, but a
 * goto made by the application between frames, or a clip added between
 * frames, would otherwise be drawn unsettled until the next frame is played.
 * The mark is put on the top of the tree, which is a clip the container
 * plays when the tree is on one.
 */
export declare function markForSettle(node: createjs.DisplayObject): void;
/**
 * Whether `root` was marked since the last call, clearing the mark.
 */
export declare function takeSettleMark(root: CreatejsMovieClip): boolean;
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/MovieClip.html | createjs.MovieClip}
 *
 * `mask` is a plain data property on the real createjs.DisplayObject, but
 * this wrapper must intercept get/set to route the assigned value into the
 * Pixi mirror. See the class-level comment on CreatejsShape for why a
 * prototype accessor safely intercepts it despite TS2611/TS2416.
 */
export declare class CreatejsMovieClip extends createjs.MovieClip implements ICreatejsDisplayObject<PixiMovieClip> {
    /** The wrapper data (see PIXI_DATA in core) */
    [PIXI_DATA]?: IPixiMovieClipData;
    /** The interaction event manager, created on the first listener (see EVENT_MANAGER) */
    [EVENT_MANAGER]?: CreatejsEventManager;
    /** Set while the tree under this root has to be settled before Pixi draws (see markForSettle) */
    [SETTLE_MARK]?: boolean;
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
    /**
     * Settles the tree for drawing without playing on — what createjs does to
     * each clip when the stage draws (MovieClip.draw -> _updateState): synched
     * and single-frame clips are placed at the frame their parent gives. A
     * clip waiting to start over (an independent clip reset when its parent
     * placed it again, _rawPosition -1) is shown at its first frame the way
     * createjs shows a new clip (_renderFirstFrame: no frame script, the
     * playhead left as it was), so that it starts on the next frame played,
     * as in the Animate template, where createjs draws only after a tick (a
     * draw's _updateState would start it at once, a frame ahead). Children
     * are settled after their parent, in the resolve phase's order. Used
     * right before Pixi draws a tree whose timelines moved between frames
     * (CreatejsController.flushForRender).
     */
    settleForPixi(): void;
    /**
     * Delegated to the original; the tree is marked so that it is settled and
     * synced before Pixi draws (a goto made between frames is drawn the way
     * createjs would draw it, without waiting for the next frame).
     */
    gotoAndPlay(positionOrLabel: string | number): void;
    /**
     * See {@link CreatejsMovieClip.gotoAndPlay}.
     */
    gotoAndStop(positionOrLabel: string | number): void;
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
