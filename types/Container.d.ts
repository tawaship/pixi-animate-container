import { Container as PixiContainer } from 'pixi.js';
import { CreatejsMovieClip, TCreatejsObject } from './createjs';
export interface ICreatejsMovieClipDictionary {
    [id: number]: {
        cjs: CreatejsMovieClip;
        /** Frames owed by the real time (delta x speed x fps / 60 added up) */
        t: number;
        /** The steady clock the frames are played by when smooth (see CreatejsController.smooth) */
        clock: number;
        isFirst: boolean;
    };
}
export interface IAnimateContainer extends PixiContainer {
    handleTick(delta: number): void;
    /**
     * Add a createjs instance as a child.
     */
    addCreatejs(cjs: TCreatejsObject): TCreatejsObject;
    /**
     * Add a createjs instance as a child to the specified hierarchy.
     */
    addCreatejsAt(cjs: TCreatejsObject, index: number): TCreatejsObject;
    /**
     * Remove the createjs instance from the child.
     */
    removeCreatejs(cjs: TCreatejsObject): TCreatejsObject;
    /**
     * The playback speed multiplier for the createjs instance managed by this container. <br />
     * This value multiplied by `delta time` determines the playback speed. A value below `0` (or `NaN`) is played as `0`: the content pauses and resumes at once when the speed is set back; the value set is read back as it was set.
     */
    createjsSpeed: number;
    /**
     * Whether the playback speed of the createjs instance managed by this container can exceed `1`. <br />
     * If the playback speed exceeds `1`, more than `2` frames may progress in one process, but this may result in unexpected behavior depending on the frame script.
     */
    createjsOverSpeed: boolean;
    /**
     * Whether the frames of the createjs instances managed by this container are played by a steady clock (default `true`). <br />
     * With `false`, each call of `handleTick` plays the whole frames owed by the `delta` values added up; small changes of `delta` from display frame to display frame can then play no frame on one call and two on the next, which makes the animation uneven. With `true`, the frames follow a clock that advances by the usual `delta` and is kept in step with the real time, so the playing stays even. The frames played and their order are the same either way; only the call each frame is played on can differ.
     */
    createjsSmooth: boolean;
}
export declare class CreatejsController {
    private _createjsData;
    private _speed;
    /**
     * Playback speed multiplier (a value below 0, or NaN, is played as 0)
     */
    get speed(): number;
    set speed(value: number);
    private _overSpeed;
    /**
     * Whether to allow more than two frames to advance in a single process.
     */
    get overSpeed(): boolean;
    set overSpeed(value: boolean);
    private _smooth;
    /**
     * Whether frames are played by a steady clock, so that small changes of the delta do not make the playing uneven.
     */
    get smooth(): boolean;
    set smooth(value: boolean);
    /** The latest deltas (a ring of DELTA_SAMPLES) */
    private _deltas;
    private _nextDelta;
    constructor(container: IAnimateContainer);
    /**
     * Advances every registered root by the accumulated integer number of
     * frames, then pull-syncs the whole tree to Pixi.
     *
     * Driving is delegated to the original createjs walk: one `_tick(evt)` call
     * on the root advances the tree by exactly one frame (no delta is passed,
     * and framerate is fixed at -1, so `advance()` can never consume time
     * itself). A fresh event object is created per `_tick` call and shared by
     * the whole traversal, matching the granularity of the original
     * Stage-driven dispatch.
     *
     * The original pipeline is TWO-phase: the tick phase only advances
     * INDEPENDENT clips, and the draw phase (MovieClip.draw -> _updateState)
     * resolves SYNCHED / SINGLE_FRAME / first-render state. There is no draw
     * phase here, so updateStateForPixi() (the recursive _updateState walk)
     * must run per frame as its substitute — without it, SYNCHED clips never
     * move at all.
     *
     * Before a frame is played, values written to the Pixi nodes are taken
     * over into createjs (pullFromPixi), so that a tween writing the property
     * in that frame replaces them, as it did when the wrapper pushed every
     * createjs write to Pixi. After the frames, the tree is synced to Pixi, so
     * that code reading the Pixi nodes before the next render sees the frame.
     *
     * How many frames a call plays: every root is owed `delta x speed x fps /
     * 60` frames a call (t). Without smooth, the whole frames of t are played.
     * With smooth, the whole frames of a steady clock are played instead: the
     * clock advances by the usual delta (the median of the latest deltas) on
     * every call, half a step ahead of t (so that it sits midway between whole
     * frames, where small changes of the delta do not move it across one), is
     * pulled toward that point by PULL of the distance on every call, and is
     * set to it when they are a frame apart (a display frame was missed).
     * Without that, t sits on a frame boundary whenever the content's frame
     * rate divides the display's (60 fps content on a 60 Hz display starts at
     * 0, a boundary), and the jitter of the delta plays 0 frames on one call
     * and 2 on the next. The frames and their order are the same either way.
     * t never goes below 0 (the speed is at least 0), so the whole frames of t
     * are its floor.
     */
    handleTick(delta: number): void;
    /**
     * Brings the Pixi mirror up to the current createjs state right before
     * Pixi draws (called from the container's updateTransform, which a Pixi
     * render calls on the tree before drawing). Pixi draws on every display
     * frame, a content frame played or not, and what it draws has to be what
     * createjs would draw at that moment:
     *
     * - a tree whose timelines moved outside handleTick (a goto made by the
     *   application, a clip added between frames) is settled first, as a
     *   createjs draw settles each clip (CreatejsMovieClip.settleForPixi)
     * - every tree is synced, so that createjs properties written after
     *   handleTick (by application code running later in the same display
     *   frame) are drawn at once
     */
    flushForRender(): void;
    /**
     * Records a delta and gives the median of the latest ones (the median, so
     * that an occasional long delta of a missed display frame does not drag
     * the usual delta along).
     */
    private _usualDelta;
    private _addCreatejs;
    addCreatejs<T extends TCreatejsObject>(cjs: T): T;
    addCreatejsAt<T extends TCreatejsObject>(cjs: T, index: number): T;
    removeCreatejs(cjs: TCreatejsObject): TCreatejsObject;
}
/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Container.html | PIXI.Container}
 */
export declare class Container extends PixiContainer implements IAnimateContainer {
    private _createjsData;
    constructor();
    get createjsSpeed(): number;
    set createjsSpeed(value: number);
    get createjsOverSpeed(): boolean;
    set createjsOverSpeed(value: boolean);
    get createjsSmooth(): boolean;
    set createjsSmooth(value: boolean);
    handleTick(delta: number): void;
    /**
     * Pixi calls this on the tree before drawing: the createjs content is
     * brought up to date first ({@link CreatejsController.flushForRender}).
     */
    updateTransform(): void;
    addCreatejs<T extends TCreatejsObject = TCreatejsObject>(cjs: T): T;
    addCreatejsAt<T extends TCreatejsObject = TCreatejsObject>(cjs: T, index: number): T;
    removeCreatejs(cjs: TCreatejsObject): TCreatejsObject;
}
