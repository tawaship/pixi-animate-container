import { Container } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import { CreatejsColorFilter, PixiColorMatrixFilter } from './ColorFilter';
import { mixinCreatejsDisplayObject, createPixiData, createCreatejsParams, IPixiData, ICreatejsParam, updateDisplayObjectChildren, ITickerData, ICreatejsDisplayObjectUpdater, ICreatejsDisplayObjectInitializer } from './core';
import { createObject } from './utils';
import { CreatejsEventManager } from './EventManager';

/**
 * inherited {@link http://pixijs.download/release/docs/PIXI.Container.html | PIXI.Container}
 */
export class PixiMovieClip extends Container {
	private _createjs: CreatejsMovieClip;
	private _filterContainer: Container | null = null;
	
	constructor(cjs: CreatejsMovieClip) {
		super();
		
		this._createjs = cjs;
	}
	
	get filterContainer() {
		return this._filterContainer;
	}
	
	set filterContainer(value) {
		this._filterContainer = value;
	}
	
	get createjs() {
		return this._createjs;
	}
}

export type TCreatejsColorFilters = CreatejsColorFilter[] | null;

export interface ICreatejsMovieClipParam extends ICreatejsParam {
	filters: TCreatejsColorFilters;
}

/**
 * @ignore
 */
function createCreatejsMovieClipParams(): ICreatejsMovieClipParam {
	return Object.assign(createCreatejsParams(), {
		filters: null
	});
}

export interface IPixiMovieClipData extends IPixiData<PixiMovieClip> {
	subInstance: Container;
}

/**
 * @ignore
 */
function createPixiMovieClipData(cjs: CreatejsMovieClip): IPixiMovieClipData {
	const pixi = new PixiMovieClip(cjs);
	
	return Object.assign(createPixiData<PixiMovieClip>(pixi, pixi.pivot), {
		subInstance: pixi
	});
}

export class AnimateEvent extends createjs.Event {
	constructor(type: string) {
		super(type);
	}
};

export interface IAnimateReachLabelData {
	/**
	 * Label name.
	 */
	label: string;
	
	/**
	 * Frame number of label.
	 */
	position: number;
}

export class AnimateReachLabelEvent extends AnimateEvent {
	data: IAnimateReachLabelData;
	
	constructor(type: string, label: IAnimateReachLabelData) {
		super(type);
		
		this.data = label;
	}
}

export interface IAnimateFrameEventOption {
	/**
	 * Whether to fire {@link CreatejsMovieClip.endAnimation}
	 */
	endAnimation?: boolean;

	/**
	 * Whether to fire {@link CreatejsMovieClip.reachLabel}
	 */
	reachLabel?: boolean;
}

const P = createjs.MovieClip;

const T: number = 1000 / 60;

/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/MovieClip.html | createjs.MovieClip}
 */
export class CreatejsMovieClip extends mixinCreatejsDisplayObject(createjs.MovieClip) implements ICreatejsDisplayObjectUpdater, ICreatejsDisplayObjectInitializer {
	protected _pixiData: IPixiMovieClipData;
	protected _createjsParams: ICreatejsMovieClipParam;
	protected _createjsEventManager: CreatejsEventManager;

	declare protected _framerateBase: number;
	declare protected _listenFrameEvents: IAnimateFrameEventOption;

	/**
	 * When the last frame of the timeline is reached.
	 * 
	 * @event
	 */
	endAnimation?(e: AnimateEvent): void {}
	
	/**
	 * When either labels is reached.
	 * 
	 * @event
	 */
	reachLabel?(e: AnimateReachLabelEvent): void {}

	constructor(...args: any[]) {
		super();
		
		this._pixiData = createPixiMovieClipData(this);
		this._createjsParams = createCreatejsMovieClipParams();
		this._createjsEventManager = new CreatejsEventManager(this);
		P.apply(this, args);
		this.framerate = this._framerateBase;
	}
	
	initialize(...args: any[]) {
		this._pixiData = createPixiMovieClipData(this);
		this._createjsParams = createCreatejsMovieClipParams();
		this._createjsEventManager = new CreatejsEventManager(this);
		super.initialize(...args);
		this.framerate = this._framerateBase;
	}
	
	updateForPixi(e: ITickerData): boolean {
		const currentFrame = this.currentFrame;
		
		this.advance(T * e.delta);
		
		if (this._listenFrameEvents && currentFrame !== this.currentFrame) {
			if (this._listenFrameEvents.endAnimation && this.currentFrame === (this.totalFrames - 1)) {
				this.dispatchEvent(new AnimateEvent('endAnimation'));
			}
			
			if (this._listenFrameEvents.reachLabel) {
				for (let i = 0; i < this.labels.length; i++) {
					const label = this.labels[i];
					if (this.currentFrame === label.position) {
						this.dispatchEvent(new AnimateReachLabelEvent('reachLabel', label));
						break;
					}
				}
			}
		}

		this._updateState();
		
		return updateDisplayObjectChildren(this, e);
	}
	
	get filters() {
		return this._createjsParams.filters;
	}
	
	//*
	set filters(value: TCreatejsColorFilters) {
		const list: PixiColorMatrixFilter[] = [];

		if (value && value.length > 0) {
			for (var i = 0; i < value.length; i++) {
				let f = value[i];
				
				if (!(f instanceof createjs.ColorFilter)) {
					continue;
				}
				
				list.push(f.pixi);
			}
		}

		this._pixiData.instance.filters = list;
		this._createjsParams.filters = value;
	}
	//*/
	/*
	set filters(value: TCreatejsColorFilters) {
		if (value) {
			const list = [];
			
			for (var i = 0; i < value.length; i++) {
				const f = value[i];
				
				if (f instanceof createjs.ColorMatrixFilter) {
					continue;
				}
				
				const m = new filters.ColorMatrixFilter();
				m.matrix = [
					f.redMultiplier, 0, 0, 0, f.redOffset / 255,
					0, f.greenMultiplier, 0, 0, f.greenOffset / 255,
					0, 0, f.blueMultiplier, 0, f.blueOffset / 255,
					0, 0, 0, f.alphaMultiplier, f.alphaOffset / 255,
					0, 0, 0, 0, 1
				];
				list.push(m);
			}

			for (var i = 0; i < value.length; i++) {
				let f = value[i];
				
				if (!(f instanceof createjs.ColorFilter)) {
					continue;
				}
				
				list.push(f.pixi);
			}

			var o = this._pixiData.instance;
			var c = o.children;
			var n = new Container();
			var nc = this._pixiData.subInstance = n.addChild(new Container());
			
			while (c.length) {
				nc.addChild(c[0]);
			}
			
			o.addChild(n);
			o.filterContainer = nc;
			
			nc.updateTransform();
			nc.calculateBounds();
			
			const b = nc.getLocalBounds();
			const x = b.x;
			const y = b.y;
			
			for (var i = 0; i < nc.children.length; i++) {
				const child = nc.children[i];
				
				child.x -= x;
				child.y -= y;
				
				if (child instanceof PixiMovieClip) {
					const fc = child.filterContainer;
					if (fc) {
						//fc.cacheAsBitmap = false;
					}
				}
			}
			n.x = x;
			n.y = y;
			
			nc.filters = list;
			//nc.cacheAsBitmap = true;
		} else {
			const o = this._pixiData.instance;
			
			if (o.filterContainer) {
				const nc = this._pixiData.subInstance;
				const n = nc.parent;
				const c = nc.children;
				
				o.removeChildren();
				o.filterContainer = null;
				while (c.length) {
					const v = o.addChild(c[0]);
					v.x += n.x;
					v.y += n.y;
				}
				
				nc.filters = [];
				//nc.cacheAsBitmap = false;
				
				this._pixiData.subInstance = o;
			}
		}
		
		this._createjsParams.filters = value;
	}
	//*/
	
	addChild(child: ICreatejsDisplayObjectUpdater) {
		this._pixiData.subInstance.addChild(child.pixi);
		
		return super.addChild(child);
	}
	
	addChildAt(child: ICreatejsDisplayObjectUpdater, index: number) {
		this._pixiData.subInstance.addChildAt(child.pixi, index);
		
		return super.addChildAt(child, index);
	}
	
	removeChild(child: ICreatejsDisplayObjectUpdater) {
		this._pixiData.subInstance.removeChild(child.pixi);
		
		return super.removeChild(child);
	}
	
	removeChildAt(index: number) {
		this._pixiData.subInstance.removeChildAt(index);
		
		return super.removeChildAt(index);
	}
	
	removeAllChldren() {
		this._pixiData.subInstance.removeChildren();
		
		return super.removeAllChldren();
	}
}

delete(CreatejsMovieClip.prototype.endAnimation);
delete(CreatejsMovieClip.prototype.reachLabel);

// temporary prototype
Object.defineProperties(CreatejsMovieClip.prototype, {
	_createjsParams: {
		value: createCreatejsMovieClipParams(),
		writable: true
	},
	_pixiData: {
		value: createPixiMovieClipData(createObject<CreatejsMovieClip>(CreatejsMovieClip.prototype)),
		writable: true
	}
});

