import { Container as _Container } from 'pixi.js';
import { CreatejsMovieClip, TCreatejsObject } from './createjs';

export interface ICreatejsMovieClipDictionary {
	[id: number]: CreatejsMovieClip;
}

export interface ICreatejsData {
	id: number;
	targets: ICreatejsMovieClipDictionary;
}

/**
 * [[https://tawaship.github.io/Pixim.js/classes/container.html | Pixim.Container]]
 */
export class Container extends _Container {
	private _createjsData: ICreatejsData;
	
	constructor() {
		super();
		
		this._createjsData = {
			id: 0,
			targets: {}
		};
	}
	
	handleTick(delta: number) {
		// delta timeが1以上になるとフレーム飛びするので
		const e = { delta: Math.min(delta, 1)};

		const targets = this._createjsData.targets;
		for (let i in targets) {
			targets[i].updateForPixi(e);
		}
	}
	
	private _addCreatejs(cjs: TCreatejsObject) {
		if (cjs instanceof CreatejsMovieClip) {
			const p = cjs.pixi.parent;
			
			cjs.pixi.once('added', () => {
				if (cjs.pixi.parent !== p) {
					cjs.gotoAndPlay(0);
				}
				
				const id = this._createjsData.id++;
				this._createjsData.targets[id] = cjs;
				
				cjs.pixi.once('removed', () => {
					delete(this._createjsData.targets[id]);
				});
			});
		}
	}
	
	/**
	 * [[https://tawaship.github.io/pixi-animate-core/modules.html#tcreatejsobject | TCreatejsObject]]
	 */
	addCreatejs(cjs: TCreatejsObject) {
		this._addCreatejs(cjs);
		this.addChild(cjs.pixi);
		
		return cjs;
	}
	
	/**
	 * [[https://tawaship.github.io/pixi-animate-core/modules.html#tcreatejsobject | TCreatejsObject]]
	 */
	addCreatejsAt(cjs: TCreatejsObject, index: number) {
		this._addCreatejs(cjs);
		this.addChildAt(cjs.pixi, index);
		
		return cjs;
	}
	
	/**
	 * [[https://tawaship.github.io/pixi-animate-core/modules.html#tcreatejsobject | TCreatejsObject]]
	 */
	removeCreatejs(cjs: TCreatejsObject) {
		this.removeChild(cjs.pixi);
		
		return cjs;
	}
}