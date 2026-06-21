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
    handleTick(delta: number): void;
    private _addCreatejs;
    addCreatejs<T extends TCreatejsObject>(cjs: TCreatejsObject): T;
    addCreatejsAt<T extends TCreatejsObject>(cjs: TCreatejsObject, index: number): T;
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
    addCreatejs<T extends TCreatejsObject = TCreatejsObject>(cjs: TCreatejsObject): T;
    addCreatejsAt<T extends TCreatejsObject = TCreatejsObject>(cjs: TCreatejsObject, index: number): T;
    removeCreatejs(cjs: TCreatejsObject): TCreatejsObject;
}
