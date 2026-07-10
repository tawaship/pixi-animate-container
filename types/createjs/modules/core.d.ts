import { BLEND_MODES, Container, DisplayObject, Point } from 'pixi.js';
import type { CreatejsMovieClip } from './MovieClip';
import type { CreatejsSprite } from './Sprite';
import type { CreatejsShape } from './Shape';
import type { CreatejsBitmap } from './Bitmap';
import type { CreatejsGraphics } from './Graphics';
import type { CreatejsText } from './Text';
import type { CreatejsButtonHelper } from './ButtonHelper';
import type { ICreatejsInteractionEventDelegate } from './EventManager';
export interface ITickerData {
    delta: number;
}
export type TCreatejsMask = CreatejsShape | null;
export type TCreatejsObject = CreatejsMovieClip | CreatejsSprite | CreatejsShape | CreatejsBitmap | CreatejsGraphics | CreatejsText;
/**
 * Minimal surface of a createjs display object consumed by the pull-sync walk.
 * All members are plain data properties on the createjs side.
 */
export interface ICreatejsSyncNode {
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
    _off?: boolean;
    children?: ICreatejsSyncNode[];
}
/**
 * Members of the (untyped) createjs.DisplayObject runtime that the wrapper relies on.
 * Base constructors of each wrapper class are typed against extensions of this interface.
 */
export interface ICreatejsDisplayObjectBase extends ICreatejsSyncNode {
    addEventListener(type: string, listener: ICreatejsInteractionEventDelegate | CreatejsButtonHelper, useCapture?: boolean): ICreatejsInteractionEventDelegate | CreatejsButtonHelper;
    removeEventListener(type: string, listener: ICreatejsInteractionEventDelegate, useCapture?: boolean): void;
    removeAllEventListeners(type?: string): void;
    dispatchEvent(evt: object | string): boolean;
    _tick(evt: object): void;
}
export interface ICreatejsLabel {
    label: string;
    position: number;
}
/**
 * Contract of every wrapper display object class.
 * Implementations are supplied per class (no mixin); this interface makes the
 * compiler verify that nothing is missing.
 */
export interface ICreatejsDisplayObject<T extends Container> {
    readonly pixi: T;
    mask: TCreatejsMask;
    updateBlendModeForPixi(mode: BLEND_MODES): void;
    addEventListener(type: string, cb: ICreatejsInteractionEventDelegate | CreatejsButtonHelper, useCapture?: boolean): ICreatejsInteractionEventDelegate | CreatejsButtonHelper;
    removeEventListener(type: string, cb: ICreatejsInteractionEventDelegate, useCapture?: boolean): void;
    removeAllEventListeners(type?: string): void;
}
/**
 * What a child passed to the overridden structure operations (addChild etc.) must provide.
 */
export interface ICreatejsBlendModeTarget {
    readonly pixi: DisplayObject;
    updateBlendModeForPixi(mode: BLEND_MODES): void;
}
/**
 * Shape of the members of `children` as seen from the wrapper (every child in a
 * wrapper-driven tree is a wrapper class instance).
 */
export interface ICreatejsChildNode extends ICreatejsSyncNode {
    updateBlendModeForPixi(mode: BLEND_MODES): void;
}
/**
 * Source of the ColorFilter scalar sync (plain data properties, original-faithful).
 */
export interface IColorFilterSyncSource {
    redMultiplier: number;
    greenMultiplier: number;
    blueMultiplier: number;
    alphaMultiplier: number;
    redOffset: number;
    greenOffset: number;
    blueOffset: number;
    alphaOffset: number;
}
export interface IColorFilterSyncPair {
    source: IColorFilterSyncSource;
    matrix: number[];
}
export interface IPixiData<T extends Container> {
    regObj: Point;
    instance: T;
    reservedBlendMode: BLEND_MODES;
    mask: TCreatejsMask;
    colorFilters: IColorFilterSyncPair[] | null;
}
export declare function createPixiData<TPixiDisplayObject extends Container>(pixi: TPixiDisplayObject, regObj: Point): IPixiData<TPixiDisplayObject>;
export declare function registerPixiData(cjs: object, data: IPixiData<Container>): void;
export declare function findPixiData(cjs: object): IPixiData<Container> | null;
/**
 * Shared implementation of the mask setter (push layer).
 * Writing a mask re-attaches display objects, so it must fire on change only;
 * the accessor of each class is the change detector.
 */
export declare function setMaskForPixi(data: IPixiData<Container>, value: TCreatejsMask): void;
/**
 * Pull-sync: copies the plain display properties of the whole createjs tree to
 * the Pixi mirror. Runs once at the end of each tick, after `_tick()` has
 * resolved the createjs state.
 *
 * - Invisible nodes are NOT skipped: switching to invisible is itself a state
 *   that must reach Pixi.
 * - No dirty tracking: the Pixi setters either are plain fields (renderable,
 *   visible, alpha) or contain their own equality checks (position, scale,
 *   skew, rotation, pivot), so unconditional copies never invalidate anything.
 */
export declare function syncToPixi(root: ICreatejsSyncNode): void;
