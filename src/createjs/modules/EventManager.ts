import type { TCreatejsObject } from './core';
import { utils } from 'pixi.js';

export enum createjsInteractionEvents {
	mousedown = "mousedown",
	pressmove = "pressmove",
	pressup = "pressup",
	rollover = "rollover",
	rollout = "rollout",
	click = "click",
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
export type TCreatejsEventListener =
	| ((eventObj: Object) => boolean)
	| ((eventObj: Object) => void)
	| { handleEvent: (eventObj: Object) => boolean }
	| { handleEvent: (eventObj: Object) => void };

export class CreatejsEventManager {
	private _downTarget: TCreatejsObject | null = null;
	private _emitter: utils.EventEmitter;
	private _cjs: TCreatejsObject;
	
	/**
	 * Whether this is the manager of `cjs` (a symbol-keyed property is
	 * inherited through the prototype chain, so the one found may be a
	 * prototype's).
	 */
	isFor(cjs: TCreatejsObject): boolean {
		return this._cjs === cjs;
	}

	constructor(cjs: TCreatejsObject) {
		this._cjs = cjs;
		this._emitter = new utils.EventEmitter();
		
		const pixi = cjs.pixi;
		
		pixi
		.on('pointerdown', this._onPointerDown, this)
		.on('pointermove', this._onPointerMove, this)
		.on('pointerup', this._onPointerUp, this)
		.on('pointerupoutside', this._onPointerUpOutside, this)
		.on('pointertap', this._onPointerTap, this)
		.on('pointerover', this._onPointerOver, this)
		.on('pointerout', this._onPointerOut, this);
	}
	
	private _onPointerDown(e: any) {
		const ev: ICreatejsInteractionEvent = {
			type: createjsInteractionEvents.mousedown,
			currentTarget: e.currentTarget.createjs,
			target: e.target.createjs,
			rawX: e.data.global.x,
			rawY: e.data.global.y,
		};
		
		this._downTarget = e.target.createjs;
		
		this._emitter.emit('mousedown', ev);
	}
	
	private _onPointerMove(e: any) {
		if (!this._downTarget) {
			return;
		}

		const ev: ICreatejsInteractionEvent = {
			type: createjsInteractionEvents.pressmove,
			currentTarget: e.currentTarget.createjs,
			target: this._downTarget,
			rawX: e.data.global.x,
			rawY: e.data.global.y,
		};
		
		this._emitter.emit('pressmove', ev);
	}
	
	private _onPointerUp(e: any) {
		const ev: ICreatejsInteractionEvent = {
			type: createjsInteractionEvents.pressup,
			currentTarget: e.currentTarget.createjs,
			target: this._downTarget,
			rawX: e.data.global.x,
			rawY: e.data.global.y,
		};

		this._downTarget = null;
		
		this._emitter.emit('pressup', ev);
	}
	
	private _onPointerUpOutside(e: any) {
		const ev: ICreatejsInteractionEvent = {
			type: createjsInteractionEvents.pressup,
			currentTarget: e.currentTarget.createjs,
			target: this._downTarget,
			rawX: e.data.global.x,
			rawY: e.data.global.y,
		};

		this._downTarget = null;
		
		this._emitter.emit('pressup', ev);
	}
	
	private _onPointerTap(e: any) {
		const ev: ICreatejsInteractionEvent = {
			type: createjsInteractionEvents.click,
			currentTarget: e.currentTarget.createjs,
			target: e.target.createjs,
			rawX: e.data.global.x,
			rawY: e.data.global.y,
		};

		this._emitter.emit('click', ev);
	}
	
	private _onPointerOver(e: any) {
		const ev: ICreatejsInteractionEvent = {
			type: createjsInteractionEvents.rollover,
			currentTarget: e.currentTarget.createjs,
			target: e.currentTarget.createjs,
			rawX: e.data.global.x,
			rawY: e.data.global.y,
		};

		this._emitter.emit('rollover', ev);
	}
	
	private _onPointerOut(e: any) {
		const ev: ICreatejsInteractionEvent = {
			type: createjsInteractionEvents.rollout,
			currentTarget: e.currentTarget.createjs,
			target: e.currentTarget.createjs,
			rawX: e.data.global.x,
			rawY: e.data.global.y,
		};

		this._emitter.emit('rollout', ev);
	}
	
	add(type: string, cb: ICreatejsInteractionEventDelegate) {
		if (!(type in createjsInteractionEvents)) {
			return;
		}

		this._emitter.on(type, cb);

		if (this._emitter.eventNames().length > 0) {
			this._cjs.pixi.interactive = true;
		}
	}

	remove(type: string, cb: ICreatejsInteractionEventDelegate) {
		if (!(type in createjsInteractionEvents)) {
			return;
		}

		this._emitter.off(type, cb);

		if (this._emitter.eventNames().length === 0) {
			this._cjs.pixi.interactive = false;
		}
	}

	removeAll(type?: string) {
		if (type && !(type in createjsInteractionEvents)) {
			return;
		}

		this._emitter.removeAllListeners(type);

		if (this._emitter.eventNames().length === 0) {
			this._cjs.pixi.interactive = false;
		}
	}
}

/**
 * Key of the event manager on the createjs instance (every display wrapper
 * class declares it). The manager (and its pointer handlers on the Pixi
 * instance) is created lazily on the first listener registration, so
 * instances that never listen pay nothing. A symbol key keeps the createjs
 * object's surface as it is.
 */
export const EVENT_MANAGER: unique symbol = Symbol('eventManager');

/**
 * @ignore
 */
function getEventManager(cjs: TCreatejsObject): CreatejsEventManager {
	let manager = cjs[EVENT_MANAGER];

	if (!manager || !manager.isFor(cjs)) {
		manager = new CreatejsEventManager(cjs);
		cjs[EVENT_MANAGER] = manager;
	}

	return manager;
}

export function addInteractionListener(cjs: TCreatejsObject, type: string, cb: ICreatejsInteractionEventDelegate): void {
	if (!(type in createjsInteractionEvents)) {
		return;
	}

	getEventManager(cjs).add(type, cb);
}

export function removeInteractionListener(cjs: TCreatejsObject, type: string, cb: ICreatejsInteractionEventDelegate): void {
	const manager = cjs[EVENT_MANAGER];

	if (manager && manager.isFor(cjs)) {
		manager.remove(type, cb);
	}
}

export function removeAllInteractionListeners(cjs: TCreatejsObject, type?: string): void {
	const manager = cjs[EVENT_MANAGER];

	if (manager && manager.isFor(cjs)) {
		manager.removeAll(type);
	}
}