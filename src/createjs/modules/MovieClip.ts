import { BLEND_MODES, Container } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import { CreatejsColorFilter, PixiColorMatrixFilter, getPixiColorMatrixFilter } from './ColorFilter';
import {
	ICreatejsDisplayObject, ICreatejsDisplayObjectBase, ICreatejsChildNode, ICreatejsBlendModeTarget,
	ICreatejsLabel, IColorFilterSyncPair, IPixiData, TCreatejsMask,
	createPixiData, registerPixiData, setMaskForPixi
} from './core';
import { CreatejsButtonHelper } from './ButtonHelper';
import { ICreatejsInteractionEventDelegate, addInteractionListener, removeInteractionListener, removeAllInteractionListeners } from './EventManager';

/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.Container.html | PIXI.Container}
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

export class AnimateEvent extends createjs.Event {
	constructor(type: string) {
		super(type);
	}
}

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

export type TCreatejsMovieClipMode = 'independent' | 'single' | 'synched';

/**
 * The properties object form of the createjs.MovieClip constructor arguments
 * (the shape produced by current Animate publishes).
 */
export interface ICreatejsMovieClipProps {
	mode?: TCreatejsMovieClipMode;
	startPosition?: number;
	loop?: boolean;
	reversed?: boolean;
	paused?: boolean;
	position?: number;
	labels?: { [name: string]: number };
}

/**
 * Constructor arguments accepted by createjs.MovieClip across publish
 * generations: either a single properties object, or the legacy positional
 * form (mode, startPosition, loop, labels-or-reversed).
 */
export type TCreatejsMovieClipConstructorArgs =
	| [ICreatejsMovieClipProps?]
	| [TCreatejsMovieClipMode?, number?, boolean?, ({ [name: string]: number } | boolean)?];

/**
 * The target object of a timeline tween: either a display object (has `x`) or
 * a state-holder used by publish output for child membership swapping (has
 * `state`). Both members are optional because either kind can appear.
 */
export interface ICreatejsTweenTarget {
	state?: { t: object }[];
	x?: number;
}

export interface ICreatejsTweenLike {
	target: ICreatejsTweenTarget;
}

export interface ICreatejsTimelineBase {
	reversed: boolean;
	tweens: ICreatejsTweenLike[];
}

/**
 * Bounds metadata stamped on symbol prototypes by Animate publish output
 * (not part of core createjs).
 */
export interface ICreatejsNominalBounds {
	x: number;
	y: number;
	width: number;
	height: number;
}

/**
 * Members of the (untyped) createjs.MovieClip runtime that the wrapper relies on.
 */
export interface ICreatejsMovieClipBase extends ICreatejsDisplayObjectBase {
	children: ICreatejsChildNode[];
	currentFrame: number;
	totalFrames: number;
	labels: ICreatejsLabel[];
	mode: TCreatejsMovieClipMode;
	startPosition: number;
	loop: boolean;
	timeline: ICreatejsTimelineBase;
	nominalBounds: ICreatejsNominalBounds;
	cache(x: number, y: number, width: number, height: number, scale?: number): void;
	advance(time?: number): void;
	_updateState(): void;
	addChild<T extends ICreatejsBlendModeTarget>(child: T): T;
	addChildAt<T extends ICreatejsBlendModeTarget>(child: T, index: number): T;
	removeChild<T extends ICreatejsBlendModeTarget>(child: T): boolean;
	removeChildAt(index: number): boolean;
	removeAllChildren(): void;
	gotoAndPlay(positionOrLabel: string | number): void;
	gotoAndStop(positionOrLabel: string | number): void;
	play(): void;
	stop(): void;
	initialize(...args: TCreatejsMovieClipConstructorArgs): void;
}

export interface ICreatejsMovieClipBaseConstructor {
	new (...args: TCreatejsMovieClipConstructorArgs): ICreatejsMovieClipBase;
}

/**
 * @ignore
 */
const MovieClipBase: ICreatejsMovieClipBaseConstructor = createjs.MovieClip;

export enum CompositeOperations {
	Lighter = "lighter",
	Multiply = "multiply",
	Screen = "screen"
}

/**
 * @ignore
 */
const blendModes = {
	[CompositeOperations.Lighter]: BLEND_MODES.ADD,
	[CompositeOperations.Multiply]: BLEND_MODES.MULTIPLY,
	[CompositeOperations.Screen]: BLEND_MODES.SCREEN,
};

export interface IPixiMovieClipData extends IPixiData<PixiMovieClip> {
	subInstance: Container;
	listenFrameEvents: IAnimateFrameEventOption;
	filters: TCreatejsColorFilters;
	compositeOperation: CompositeOperations | null;
}

/**
 * @ignore
 */
function createPixiMovieClipData(cjs: CreatejsMovieClip): IPixiMovieClipData {
	const pixi = new PixiMovieClip(cjs);

	return Object.assign(createPixiData<PixiMovieClip>(pixi, pixi.pivot), {
		subInstance: pixi,
		listenFrameEvents: {},
		filters: null,
		compositeOperation: null
	});
}

/**
 * @ignore
 */
const dataStore = new WeakMap<CreatejsMovieClip, IPixiMovieClipData>();

/**
 * @ignore
 */
function resetData(cjs: CreatejsMovieClip): IPixiMovieClipData {
	const data = createPixiMovieClipData(cjs);
	dataStore.set(cjs, data);
	registerPixiData(cjs, data);

	return data;
}

/**
 * @ignore
 */
function ensureData(cjs: CreatejsMovieClip): IPixiMovieClipData {
	const data = dataStore.get(cjs);

	return data ? data : resetData(cjs);
}

/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/MovieClip.html | createjs.MovieClip}
 */
export class CreatejsMovieClip extends MovieClipBase implements ICreatejsDisplayObject<PixiMovieClip> {
	declare protected _fps: number;
	declare protected _listenFrameEventsBase: IAnimateFrameEventOption;

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

	constructor(...args: TCreatejsMovieClipConstructorArgs) {
		super(...args);

		ensureData(this).listenFrameEvents = Object.assign({}, this._listenFrameEventsBase || {});
	}

	initialize(...args: TCreatejsMovieClipConstructorArgs) {
		resetData(this).listenFrameEvents = Object.assign({}, this._listenFrameEventsBase || {});

		return super.initialize(...args);
	}

	get pixi() {
		return ensureData(this).instance;
	}

	get framerate() {
		return -1;
	}

	set framerate(value: number) {
		// framerate is disabled
	}

	get fps() {
		return this._fps;
	}

	/**
	 * This changes whether to `listen` for a specified custom event.
	 */
	listenCustomFrameEvent(type: keyof IAnimateFrameEventOption, value: boolean) {
		ensureData(this).listenFrameEvents[type] = value;
	}

	/**
	 * Advances the timeline (delegated to the original createjs implementation)
	 * and dispatches the custom frame events right after the frame changes,
	 * before the children are ticked — the same timing the previous
	 * self-managed walk provided.
	 *
	 * framerate is fixed at -1 and the driver never passes a delta, so one call
	 * always advances exactly one frame (determinism lives with the caller).
	 */
	advance(time?: number): void {
		const beforeFrame = this.currentFrame;

		super.advance(time);

		if (this.currentFrame === beforeFrame) {
			return;
		}

		const listen = ensureData(this).listenFrameEvents;

		if (listen.endAnimation && this.currentFrame === (this.totalFrames - 1)) {
			this.dispatchEvent(new AnimateEvent('endAnimation'));
		}

		if (listen.reachLabel) {
			for (let i = 0; i < this.labels.length; i++) {
				const label = this.labels[i];
				if (this.currentFrame === label.position) {
					this.dispatchEvent(new AnimateReachLabelEvent('reachLabel', label));
					break;
				}
			}
		}
	}

	/**
	 * Recursive _updateState walk: the substitute for the draw phase of the
	 * original pipeline (MovieClip.draw -> _updateState), which is what
	 * resolves SYNCHED / SINGLE_FRAME / first-render state — advance() only
	 * moves INDEPENDENT clips. Runs once per frame after _tick, and once when
	 * a root is registered (frame-0 seating). Walks the live children array in
	 * reverse, matching the traversal discipline of the original
	 * Container._tick.
	 */
	updateStateForPixi(): void {
		this._updateState();

		const children = this.children;
		for (let i = children.length - 1; i >= 0; i--) {
			const child = children[i];
			if (child instanceof CreatejsMovieClip) {
				child.updateStateForPixi();
			}
		}
	}

	updateBlendModeForPixi(mode: BLEND_MODES): void {
		const data = ensureData(this);

		if (data.compositeOperation && blendModes[data.compositeOperation] === mode) return;

		data.reservedBlendMode = mode;
		for (let i = 0; i < this.children.length; i++) {
			this.children[i].updateBlendModeForPixi(mode);
		}
	}

	get compositeOperation() {
		return ensureData(this).compositeOperation;
	}

	set compositeOperation(value) {
		const data = ensureData(this);

		if (data.compositeOperation === value) return;

		const blendMode = (value && blendModes[value]) || data.reservedBlendMode;
		this.updateBlendModeForPixi(blendMode);
		data.compositeOperation = value;
	}

	get filters() {
		return ensureData(this).filters;
	}

	set filters(value: TCreatejsColorFilters) {
		const data = ensureData(this);
		const list: PixiColorMatrixFilter[] = [];
		const pairs: IColorFilterSyncPair[] = [];

		if (value && value.length > 0) {
			for (let i = 0; i < value.length; i++) {
				const f = value[i];

				if (!(f instanceof CreatejsColorFilter)) {
					continue;
				}

				const pixiFilter = getPixiColorMatrixFilter(f);
				list.push(pixiFilter);
				pairs.push({ source: f, matrix: pixiFilter.matrix });
			}
		}

		data.instance.filters = list;
		data.colorFilters = pairs.length ? pairs : null;
		data.filters = value;
	}

	get mask() {
		return ensureData(this).mask;
	}

	set mask(value: TCreatejsMask) {
		setMaskForPixi(ensureData(this), value);
	}

	private _updateChildrenBlendModeForPixi(child: ICreatejsBlendModeTarget) {
		const data = ensureData(this);
		const blendMode = (data.compositeOperation && blendModes[data.compositeOperation]) || data.reservedBlendMode;
		if (!blendMode) return;
		child.updateBlendModeForPixi(blendMode);
	}

	addChild<T extends ICreatejsBlendModeTarget>(child: T): T {
		ensureData(this).subInstance.addChild(child.pixi);
		this._updateChildrenBlendModeForPixi(child);

		return super.addChild(child);
	}

	addChildAt<T extends ICreatejsBlendModeTarget>(child: T, index: number): T {
		ensureData(this).subInstance.addChildAt(child.pixi, index);
		this._updateChildrenBlendModeForPixi(child);

		return super.addChildAt(child, index);
	}

	removeChild<T extends ICreatejsBlendModeTarget>(child: T): boolean {
		ensureData(this).subInstance.removeChild(child.pixi);

		return super.removeChild(child);
	}

	removeChildAt(index: number): boolean {
		ensureData(this).subInstance.removeChildAt(index);

		return super.removeChildAt(index);
	}

	removeAllChldren(): void {
		ensureData(this).subInstance.removeChildren();

		return super.removeAllChildren();
	}

	addEventListener(type: string, cb: ICreatejsInteractionEventDelegate | CreatejsButtonHelper, useCapture?: boolean) {
		const p = super.addEventListener(type, cb, useCapture);

		if (!(cb instanceof CreatejsButtonHelper)) {
			addInteractionListener(this, type, cb);
		}

		return p;
	}

	removeEventListener(type: string, cb: ICreatejsInteractionEventDelegate, useCapture?: boolean) {
		super.removeEventListener(type, cb, useCapture);
		removeInteractionListener(this, type, cb);
	}

	removeAllEventListeners(type?: string) {
		super.removeAllEventListeners(type);
		removeAllInteractionListeners(this, type);
	}
}

delete(CreatejsMovieClip.prototype.endAnimation);
delete(CreatejsMovieClip.prototype.reachLabel);
