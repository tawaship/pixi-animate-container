import { Container as PixiContainer } from 'pixi.js';
import { CreatejsMovieClip, TCreatejsObject } from './createjs';
export interface ICreatejsMovieClipDictionary {
    [id: number]: CreatejsMovieClip;
}
export interface IAnimateContainer extends PixiContainer {
    handleTick(delta: number): void;
    addCreatejs(cjs: TCreatejsObject): TCreatejsObject;
    addCreatejsAt(cjs: TCreatejsObject, index: number): TCreatejsObject;
    removeCreatejs(cjs: TCreatejsObject): TCreatejsObject;
}
export declare class CreatejsController {
    private _createjsData;
    constructor(container: IAnimateContainer);
    handleTick(delta: number): void;
    private _addCreatejs;
    addCreatejs(cjs: TCreatejsObject): TCreatejsObject;
    addCreatejsAt(cjs: TCreatejsObject, index: number): TCreatejsObject;
    removeCreatejs(cjs: TCreatejsObject): TCreatejsObject;
}
/**
 * inherited {@link https://tawaship.github.io/Pixim.js/classes/container.html | Pixim.Container}
 */
export declare class Container extends PixiContainer implements IAnimateContainer {
    private _createjsData;
    constructor();
    handleTick(delta: number): void;
    addCreatejs(cjs: TCreatejsObject): TCreatejsObject;
    addCreatejsAt(cjs: TCreatejsObject, index: number): TCreatejsObject;
    removeCreatejs(cjs: TCreatejsObject): TCreatejsObject;
}
