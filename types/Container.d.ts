import { Container as PixiContainer } from 'pixi.js';
import { CreatejsMovieClip, TCreatejsObject } from './createjs';
export interface ICreatejsMovieClipDictionary {
    [id: number]: {
        cjs: CreatejsMovieClip;
        t: number;
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
     * This value multiplied by `delta time` determines the playback speed.
     */
    createjsSpeed: number;
    /**
     * Whether the playback speed of the createjs instance managed by this container can exceed `1`. <br />
     * If the playback speed exceeds `1`, more than `2` frames may progress in one process, but this may result in unexpected behavior depending on the frame script.
     */
    createjsOverSpeed: boolean;
}
export declare class CreatejsController {
    private _createjsData;
    private _speed;
    /**
     * Playback speed multiplier
     */
    get speed(): number;
    set speed(value: number);
    private _overSpeed;
    /**
     * Whether to allow more than two frames to advance in a single process.
     */
    get overSpeed(): boolean;
    set overSpeed(value: boolean);
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
     */
    handleTick(delta: number): void;
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
    handleTick(delta: number): void;
    addCreatejs<T extends TCreatejsObject = TCreatejsObject>(cjs: T): T;
    addCreatejsAt<T extends TCreatejsObject = TCreatejsObject>(cjs: T, index: number): T;
    removeCreatejs(cjs: TCreatejsObject): TCreatejsObject;
}
