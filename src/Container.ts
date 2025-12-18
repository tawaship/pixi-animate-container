import { Container as PixiContainer } from 'pixi.js';
import { CreatejsBitmap, CreatejsMovieClip, TCreatejsObject } from './createjs';

export interface ICreatejsMovieClipDictionary {
	[id: number]: CreatejsMovieClip;
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

export class CreatejsController {
	private _createjsData: {
		id: number;
		targets: ICreatejsMovieClipDictionary;
		container: IAnimateContainer;
	};

    private _speed = 1;
    get speed() {
        return this._speed;
    }
    set speed(value: number) {
        this._speed = value;
    }

    private _overSpeed = false;
    get overSpeed() {
        return this._overSpeed;
    }
    set overSpeed(value: boolean) {
        this._overSpeed = value;
    }
	
	constructor(container: IAnimateContainer) {
		this._createjsData = {
			id: 0,
			targets: {},
			container
		};
	}
	
	handleTick(delta: number) {
        const d = delta * this._speed;
		const e = { delta: this._overSpeed ? d : Math.min(d, 1)};

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
	
	addCreatejs<T extends TCreatejsObject>(cjs: TCreatejsObject) {
		this._addCreatejs(cjs);
		this._createjsData.container.addChild(cjs.pixi);
		
		return cjs as T;
	}
	
	addCreatejsAt<T extends TCreatejsObject>(cjs: TCreatejsObject, index: number) {
		this._addCreatejs(cjs);
		this._createjsData.container.addChildAt(cjs.pixi, index);
		
		return cjs as T;
	}
	
	removeCreatejs(cjs: TCreatejsObject) {
		this._createjsData.container.removeChild(cjs.pixi);
		
		return cjs;
	}
}

/**
 * inherited {@link https://tawaship.github.io/Pixim.js/classes/container.html | Pixim.Container}
 */
export class Container extends PixiContainer implements IAnimateContainer {
	private _createjsData: {
		controller: CreatejsController;
	};
	
	constructor() {
		super();
		
		this._createjsData = {
			controller: new CreatejsController(this)
		};
	}

    get createjsSpeed() {
        return this._createjsData.controller.speed;
    }
    set createjsSpeed(value: number) {
        this._createjsData.controller.speed = value;
    }

    get createjsOverSpeed() {
        return this._createjsData.controller.overSpeed;
    }
    set createjsOverSpeed(value: boolean) {
        this._createjsData.controller.overSpeed = value;
    }
	
	handleTick(delta: number) {
		return this._createjsData.controller.handleTick(delta);
	}
	
	addCreatejs<T extends TCreatejsObject = TCreatejsObject>(cjs: TCreatejsObject) {
		return this._createjsData.controller.addCreatejs<T>(cjs);
	}
	
	addCreatejsAt<T extends TCreatejsObject = TCreatejsObject>(cjs: TCreatejsObject, index: number) {
		return this._createjsData.controller.addCreatejsAt<T>(cjs, index);
	}
	
	removeCreatejs(cjs: TCreatejsObject) {
		return this._createjsData.controller.removeCreatejs(cjs);
	}
}