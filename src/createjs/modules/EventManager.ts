import { TCreatejsObject } from './core';
import { utils } from 'pixi.js';

/**
 * @ignore
 */
const createjsInteractionEvents = {
	mousedown: true,
	pressmove: true,
	pressup: true,
	rollover: true,
	rollout: true,
	click: true
};

export interface ICreatejsInteractionEventDelegate {
	 (e: any): void;
}

export class EventManager {
	private _isDown: boolean = false;
	private _emitter: utils.EventEmitter;
	private _cjs: TCreatejsObject;
	
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
		e.currentTarget = e.currentTarget.createjs;
		
		e.target = e.target.createjs;
		const ev = e.data;
		e.rawX = ev.global.x;
		e.rawY = ev.global.y;
		
		this._isDown = true;
		
		this._emitter.emit('mousedown', e);
	}
	
	private _onPointerMove(e: any) {
		if (!this._isDown) {
			return;
		}
		
		e.currentTarget = this._cjs;
		
		e.target = e.target && e.target.createjs;
		const ev = e.data;
		e.rawX = ev.global.x;
		e.rawY = ev.global.y;
		
		this._emitter.emit('pressmove', e);
	}
	
	private _onPointerUp(e: any) {
		e.currentTarget = this._cjs;
		
		e.target = e.target && e.target.createjs;
		const ev = e.data;
		e.rawX = ev.global.x;
		e.rawY = ev.global.y;
		
		this._isDown = false;
		
		this._emitter.emit('pressup', e);
	}
	
	private _onPointerUpOutside(e: any) {
		e.currentTarget = this._cjs;
		
		e.target = e.target && e.target.createjs;
		const ev = e.data;
		e.rawX = ev.global.x;
		e.rawY = ev.global.y;
		
		this._isDown = false;
		
		this._emitter.emit('pressup', e);
	}
	
	private _onPointerTap(e: any) {
		e.currentTarget = this._cjs;
		
		e.target = e.target && e.target.createjs;
		const ev = e.data;
		e.rawX = ev.global.x;
		e.rawY = ev.global.y;
		
		this._emitter.emit('click', e);
	}
	
	private _onPointerOver(e: any) {
		e.currentTarget = e.currentTarget.createjs;
		
		e.target = e.currentTarget.createjs;
		const ev = e.data;
		e.rawX = ev.global.x;
		e.rawY = ev.global.y;
		
		this._emitter.emit('rollover', e);
	}
	
	private _onPointerOut(e: any) {
		e.currentTarget = e.currentTarget.createjs;
		
		e.target = e.currentTarget.createjs;
		const ev = e.data;
		e.rawX = ev.global.x;
		e.rawY = ev.global.y;
		
		this._emitter.emit('rollout', e);
	}
	
	add(type: string, cb: ICreatejsInteractionEventDelegate) {
		if (!(type in createjsInteractionEvents)) {
			return;
		}
		
		this._emitter.off(type, cb);
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