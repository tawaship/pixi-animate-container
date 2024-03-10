import { Container as _Container } from 'pixi.js';
import { CreatejsMovieClip, TCreatejsObject } from './createjs';

export interface ICreatejsMovieClipDictionary {
	[id: number]: CreatejsMovieClip;
}

export interface IAnimateContainer extends Container {
	handleTick(delta: number): void;
	addCreatejs(cjs: TCreatejsObject): TCreatejsObject;
	addCreatejsAt(cjs: TCreatejsObject, index: number): TCreatejsObject;
	removeCreatejs(cjs: TCreatejsObject): TCreatejsObject;
}

export class CreatejsController {
	private _createjsData: {
		id: number;
		targets: ICreatejsMovieClipDictionary;
		container: IAnimateContainer;
	};
	
	constructor(container: IAnimateContainer) {
		this._createjsData = {
			id: 0,
			targets: {},
			container
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
	
	addCreatejs(cjs: TCreatejsObject) {
		this._addCreatejs(cjs);
		this._createjsData.container.addChild(cjs.pixi);
		
		return cjs;
	}
	
	addCreatejsAt(cjs: TCreatejsObject, index: number) {
		this._addCreatejs(cjs);
		this._createjsData.container.addChildAt(cjs.pixi, index);
		
		return cjs;
	}
	
	removeCreatejs(cjs: TCreatejsObject) {
		this._createjsData.container.removeChild(cjs.pixi);
		
		return cjs;
	}
}

/**
 * [[https://tawaship.github.io/Pixim.js/classes/container.html | Pixim.Container]]
 */
export class Container extends _Container implements IAnimateContainer {
	private _createjsData: {
		controller: CreatejsController;
	};
	
	constructor() {
		super();
		
		this._createjsData = {
			controller: new CreatejsController(this)
		};
	}
	
	handleTick(delta: number) {
		return this._createjsData.controller.handleTick(delta);
	}
	
	addCreatejs(cjs: TCreatejsObject) {
		return this._createjsData.controller.addCreatejs(cjs);
	}
	
	addCreatejsAt(cjs: TCreatejsObject, index: number) {
		return this._createjsData.controller.addCreatejsAt(cjs, index);
	}
	
	removeCreatejs(cjs: TCreatejsObject) {
		return this._createjsData.controller.removeCreatejs(cjs);
	}
}