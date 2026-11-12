import type { TCreatejsObject } from './core';
export declare enum createjsInteractionEvents {
    mousedown = "mousedown",
    pressmove = "pressmove",
    pressup = "pressup",
    rollover = "rollover",
    rollout = "rollout",
    click = "click"
}
/**
 * Event object passed to createjs interaction event handler.
 *
 * It is different from the createjs event because it converts the event that occurred on pixi.js.
 * There may be fewer properties and the property values may not match the createjs event values.
 * Therefore, we recommend that you do not implement interaction processing with createjs, but with pixi.js.
 *
 * - `target`
 * A different object may be stored than the createjs event.
 *
 * - `rawX`, `rawY`
 * Global coordinates in the pixi.js canvas are stored.
 * When playing with createjs, the content is always placed at the canvas's global coordinates (0, 0), but this plugin allows you to freely change the coordinates of the createjs instance, so the values may shift.
 */
export interface ICreatejsInteractionEvent {
    type: createjsInteractionEvents | null;
    currentTarget: TCreatejsObject | null;
    target: TCreatejsObject | null;
    rawX: number;
    rawY: number;
}
export interface ICreatejsInteractionEventDelegate {
    (e: any): void;
}
/**
 * The full listener shape createjs.EventDispatcher's addEventListener /
 * removeEventListener overloads accept (function or `{ handleEvent }`
 * object, each returning boolean or void). Wrapper classes that extend a
 * real createjs class directly must redeclare every one of these overloads
 * verbatim to override addEventListener/removeEventListener at all -
 * TypeScript requires an override's overload set to cover every overload of
 * the base method it replaces, even the shapes a given wrapper class never
 * actually receives (e.g. Shape can never receive a ButtonHelper, but the
 * `{ handleEvent }` overloads still have to be declared).
 */
export type TCreatejsEventListener = ((eventObj: Object) => boolean) | ((eventObj: Object) => void) | {
    handleEvent: (eventObj: Object) => boolean;
} | {
    handleEvent: (eventObj: Object) => void;
};
export declare class CreatejsEventManager {
    private _downTarget;
    private _emitter;
    private _cjs;
    constructor(cjs: TCreatejsObject);
    private _onPointerDown;
    private _onPointerMove;
    private _onPointerUp;
    private _onPointerUpOutside;
    private _onPointerTap;
    private _onPointerOver;
    private _onPointerOut;
    add(type: string, cb: ICreatejsInteractionEventDelegate): void;
    remove(type: string, cb: ICreatejsInteractionEventDelegate): void;
    removeAll(type?: string): void;
}
export declare function addInteractionListener(cjs: TCreatejsObject, type: string, cb: ICreatejsInteractionEventDelegate): void;
export declare function removeInteractionListener(cjs: object, type: string, cb: ICreatejsInteractionEventDelegate): void;
export declare function removeAllInteractionListeners(cjs: object, type?: string): void;
