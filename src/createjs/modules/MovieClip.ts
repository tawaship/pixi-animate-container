import { BLEND_MODES, Container } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import { CreatejsColorFilter, PixiColorMatrixFilter, getPixiColorMatrixFilter } from './ColorFilter';
import {
	ICreatejsDisplayObject, ICreatejsBlendModeTarget,
	IColorFilterSyncPair, IPixiData, TCreatejsMask,
	createPixiData, registerPixiData, setMaskForPixi
} from './core';
import { TCreatejsEventListener, addInteractionListener, removeInteractionListener, removeAllInteractionListeners } from './EventManager';

/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Container.html | PIXI.Container}
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

/**
 * The real createjs.MovieClip declares `labels` as the untyped `Object[]`,
 * but the oracle always populates it with `{ label, position }` entries -
 * this guard recovers that shape without widening to `any`.
 */
function isAnimateLabel(value: Object): value is IAnimateReachLabelData {
	return 'label' in value && 'position' in value;
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
 * The real `children: DisplayObject[]` (createjs's own DisplayObject) does
 * not carry the Pixi bridge - every child actually added through this
 * wrapper's own addChild/addChildAt is one of the CreatejsXxx classes, which
 * always satisfy ICreatejsBlendModeTarget too, but the type system needs this
 * checked explicitly to recover that guarantee.
 */
function isBlendModeChild(child: createjs.DisplayObject): child is createjs.DisplayObject & ICreatejsBlendModeTarget {
	return 'pixi' in child && 'updateBlendModeForPixi' in child;
}

/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/MovieClip.html | createjs.MovieClip}
 *
 * `mask` is a plain data property on the real createjs.DisplayObject, but
 * this wrapper must intercept get/set to route the assigned value into the
 * Pixi mirror. See the class-level comment on CreatejsShape for why a
 * prototype accessor safely intercepts it despite TS2611/TS2416.
 */
export class CreatejsMovieClip extends createjs.MovieClip implements ICreatejsDisplayObject<PixiMovieClip> {
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

	// @ts-expect-error TS2611 - see the class-level comment on CreatejsShape for why a data-property-vs-accessor override is safe here
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
				if (isAnimateLabel(label) && this.currentFrame === label.position) {
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
			const child = this.children[i];

			if (isBlendModeChild(child)) {
				child.updateBlendModeForPixi(mode);
			}
		}
	}

	// @ts-expect-error TS2611/TS2416 - see the class-level comment on CreatejsShape
	get compositeOperation() {
		return ensureData(this).compositeOperation;
	}

	// @ts-expect-error TS2611/TS2416 - see the class-level comment on CreatejsShape
	set compositeOperation(value) {
		const data = ensureData(this);

		if (data.compositeOperation === value) return;

		const blendMode = (value && blendModes[value]) || data.reservedBlendMode;
		this.updateBlendModeForPixi(blendMode);
		data.compositeOperation = value;
	}

	// @ts-expect-error TS2611/TS2416 - see the class-level comment on CreatejsShape
	get filters() {
		return ensureData(this).filters;
	}

	// @ts-expect-error TS2611/TS2416 - see the class-level comment on CreatejsShape
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

	// @ts-expect-error TS2611/TS2416 - see the class-level comment on CreatejsShape
	get mask() {
		return ensureData(this).mask;
	}

	// @ts-expect-error TS2611/TS2416 - see the class-level comment on CreatejsShape
	set mask(value: TCreatejsMask) {
		setMaskForPixi(ensureData(this), value);
	}

	private _updateChildrenBlendModeForPixi(child: ICreatejsBlendModeTarget) {
		const data = ensureData(this);
		const blendMode = (data.compositeOperation && blendModes[data.compositeOperation]) || data.reservedBlendMode;
		if (!blendMode) return;
		child.updateBlendModeForPixi(blendMode);
	}

	// Every real Container.addChild overload has to be redeclared verbatim to
	// override it at all. The 1-4 fixed-arity forms exist upstream only to
	// keep the last argument's specific type as the return type; this
	// wrapper's own children are always both a real createjs.DisplayObject
	// (guaranteed by `extends`) and ICreatejsBlendModeTarget (the Pixi
	// bridge), so `T` is constrained to the intersection of both.
	addChild<T extends createjs.DisplayObject & ICreatejsBlendModeTarget>(child: T): T;
	addChild<T extends createjs.DisplayObject & ICreatejsBlendModeTarget>(child0: createjs.DisplayObject & ICreatejsBlendModeTarget, lastChild: T): T;
	addChild<T extends createjs.DisplayObject & ICreatejsBlendModeTarget>(child0: createjs.DisplayObject & ICreatejsBlendModeTarget, child1: createjs.DisplayObject & ICreatejsBlendModeTarget, lastChild: T): T;
	addChild<T extends createjs.DisplayObject & ICreatejsBlendModeTarget>(child0: createjs.DisplayObject & ICreatejsBlendModeTarget, child1: createjs.DisplayObject & ICreatejsBlendModeTarget, child2: createjs.DisplayObject & ICreatejsBlendModeTarget, lastChild: T): T;
	addChild(...children: (createjs.DisplayObject & ICreatejsBlendModeTarget)[]): createjs.DisplayObject;
	addChild(...children: (createjs.DisplayObject & ICreatejsBlendModeTarget)[]): createjs.DisplayObject {
		const data = ensureData(this);

		for (let i = 0; i < children.length; i++) {
			const child = children[i];

			data.subInstance.addChild(child.pixi);
			this._updateChildrenBlendModeForPixi(child);
		}

		return super.addChild(...children);
	}

	// See the addChild comment above for why every real overload (including
	// the messy `(...child, index)` catch-all) has to be redeclared.
	addChildAt<T extends createjs.DisplayObject & ICreatejsBlendModeTarget>(child: T, index: number): T;
	addChildAt<T extends createjs.DisplayObject & ICreatejsBlendModeTarget>(child0: createjs.DisplayObject & ICreatejsBlendModeTarget, lastChild: T, index: number): T;
	addChildAt<T extends createjs.DisplayObject & ICreatejsBlendModeTarget>(child0: createjs.DisplayObject & ICreatejsBlendModeTarget, child1: createjs.DisplayObject & ICreatejsBlendModeTarget, lastChild: T, index: number): T;
	addChildAt(...childOrIndex: ((createjs.DisplayObject & ICreatejsBlendModeTarget) | number)[]): createjs.DisplayObject;
	addChildAt(...childOrIndex: ((createjs.DisplayObject & ICreatejsBlendModeTarget) | number)[]): createjs.DisplayObject {
		const data = ensureData(this);
		const index = childOrIndex[childOrIndex.length - 1];

		if (typeof index === 'number') {
			for (let i = 0; i < childOrIndex.length - 1; i++) {
				const child = childOrIndex[i];

				if (typeof child !== 'number') {
					data.subInstance.addChildAt(child.pixi, index);
					this._updateChildrenBlendModeForPixi(child);
				}
			}
		}

		return super.addChildAt(...childOrIndex);
	}

	removeChild(...children: createjs.DisplayObject[]): boolean {
		const data = ensureData(this);

		for (let i = 0; i < children.length; i++) {
			const child = children[i];

			if (isBlendModeChild(child)) {
				data.subInstance.removeChild(child.pixi);
			}
		}

		return super.removeChild(...children);
	}

	removeChildAt(...index: number[]): boolean {
		const data = ensureData(this);

		for (let i = 0; i < index.length; i++) {
			data.subInstance.removeChildAt(index[i]);
		}

		return super.removeChildAt(...index);
	}

	removeAllChildren(): void {
		ensureData(this).subInstance.removeChildren();

		super.removeAllChildren();
	}

	// Every overload of the real EventDispatcher.addEventListener has to be
	// redeclared verbatim to override it at all (see TCreatejsEventListener).
	// Unlike Shape/Bitmap/Text, the `{ handleEvent }` branch here is not
	// theoretical: ButtonHelper's target can be a MovieClip, and ButtonHelper
	// registers itself (a `handleEvent`-shaped instance) directly - that
	// branch forwards to the real implementation with no interaction
	// bridging, matching this class's original `instanceof CreatejsButtonHelper`
	// check.
	addEventListener(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): Function;
	addEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): Function;
	addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => boolean }, useCapture?: boolean): Object;
	addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void }, useCapture?: boolean): Object;
	addEventListener(type: string, listener: TCreatejsEventListener, useCapture?: boolean): Function | Object {
		if (typeof listener === 'function') {
			const res = super.addEventListener(type, listener, useCapture);
			addInteractionListener(this, type, listener);

			return res;
		}

		return super.addEventListener(type, listener, useCapture);
	}

	// See the class-level removeEventListener comment on CreatejsShape for why
	// the real 5th `Function` catch-all overload is intentionally not
	// redeclared here.
	removeEventListener(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): void;
	removeEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
	removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => boolean }, useCapture?: boolean): void;
	removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void }, useCapture?: boolean): void;
	removeEventListener(type: string, listener: TCreatejsEventListener, useCapture?: boolean): void {
		if (typeof listener === 'function') {
			super.removeEventListener(type, listener, useCapture);
			removeInteractionListener(this, type, listener);

			return;
		}

		super.removeEventListener(type, listener, useCapture);
	}

	removeAllEventListeners(type?: string) {
		super.removeAllEventListeners(type);
		removeAllInteractionListeners(this, type);
	}
}

delete(CreatejsMovieClip.prototype.endAnimation);
delete(CreatejsMovieClip.prototype.reachLabel);
