import { Container as PixiContainer } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
import {
	CreatejsMovieClip, TCreatejsObject, syncToPixi, pullFromPixi,
	beginDrive, endDrive, markForSettle, takeSettleMark
} from './createjs';

export interface ICreatejsMovieClipDictionary {
	[id: number]: {
        cjs: CreatejsMovieClip;
        /** Frames owed by the real time (delta x speed x fps / 60 added up) */
        t: number;
        /** The steady clock the frames are played by when smooth (see CreatejsController.smooth) */
        clock: number;
        isFirst: boolean;
    };
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
     * This value multiplied by `delta time` determines the playback speed. A value below `0` (or `NaN`) is played as `0`: the content pauses and resumes at once when the speed is set back; the value set is read back as it was set.
     */
    createjsSpeed: number;

    /**
     * Whether the playback speed of the createjs instance managed by this container can exceed `1`. <br />
     * If the playback speed exceeds `1`, more than `2` frames may progress in one process, but this may result in unexpected behavior depending on the frame script.
     */
    createjsOverSpeed: boolean;

    /**
     * Whether the frames of the createjs instances managed by this container are played by a steady clock (default `true`). <br />
     * With `false`, each call of `handleTick` plays the whole frames owed by the `delta` values added up; small changes of `delta` from display frame to display frame can then play no frame on one call and two on the next, which makes the animation uneven. With `true`, the frames follow a clock that advances by the usual `delta` and is kept in step with the real time, so the playing stays even. The frames played and their order are the same either way; only the call each frame is played on can differ.
     */
    createjsSmooth: boolean;
}

/**
 * @ignore
 */
const CreatejsEvent: { new (type: string): object } = createjs.Event;

/**
 * How many of the latest deltas the usual delta is the median of.
 *
 * @ignore
 */
const DELTA_SAMPLES = 30;

/**
 * The share of the distance to the real time the steady clock is pulled by on every call.
 *
 * @ignore
 */
const PULL = 0.05;

export class CreatejsController {
	private _createjsData: {
		id: number;
		targets: ICreatejsMovieClipDictionary;
		container: IAnimateContainer;
	};

    private _speed = 1;
    /**
     * Playback speed multiplier (a value below 0, or NaN, is played as 0)
     */
    get speed() {
        return this._speed;
    }
    set speed(value: number) {
        this._speed = value;
    }

    private _overSpeed = true;
    /**
     * Whether to allow more than two frames to advance in a single process.
     */
    get overSpeed() {
        return this._overSpeed;
    }
    set overSpeed(value: boolean) {
        this._overSpeed = value;
    }

    private _smooth = true;
    /**
     * Whether frames are played by a steady clock, so that small changes of the delta do not make the playing uneven.
     */
    get smooth() {
        return this._smooth;
    }
    set smooth(value: boolean) {
        this._smooth = value;
    }

    /** The latest deltas (a ring of DELTA_SAMPLES) */
    private _deltas: number[] = [];
    private _nextDelta = 0;

	constructor(container: IAnimateContainer) {
		this._createjsData = {
			id: 0,
			targets: {},
			container
		};
	}

	/**
	 * Advances every registered root by the accumulated integer number of
	 * frames, then pull-syncs the whole tree to Pixi.
	 *
	 * Driving is delegated to the original createjs walk: one `_tick(evt)` call
	 * on the root advances the tree by exactly one frame (no delta is passed,
	 * and framerate is fixed at -1, so `advance()` can never consume time
	 * itself). A fresh event object is created per `_tick` call and shared by
	 * the whole traversal, matching the granularity of the original
	 * Stage-driven dispatch.
	 *
	 * The original pipeline is TWO-phase: the tick phase only advances
	 * INDEPENDENT clips, and the draw phase (MovieClip.draw -> _updateState)
	 * resolves SYNCHED / SINGLE_FRAME / first-render state. There is no draw
	 * phase here, so updateStateForPixi() (the recursive _updateState walk)
	 * must run per frame as its substitute — without it, SYNCHED clips never
	 * move at all.
	 *
	 * Before a frame is played, values written to the Pixi nodes are taken
	 * over into createjs (pullFromPixi), so that a tween writing the property
	 * in that frame replaces them, as it did when the wrapper pushed every
	 * createjs write to Pixi. After the frames, the tree is synced to Pixi, so
	 * that code reading the Pixi nodes before the next render sees the frame.
	 *
	 * How many frames a call plays: every root is owed `delta x speed x fps /
	 * 60` frames a call (t). Without smooth, the whole frames of t are played.
	 * With smooth, the whole frames of a steady clock are played instead: the
	 * clock advances by the usual delta (the median of the latest deltas) on
	 * every call, half a step ahead of t (so that it sits midway between whole
	 * frames, where small changes of the delta do not move it across one), is
	 * pulled toward that point by PULL of the distance on every call, and is
	 * set to it when they are a frame apart (a display frame was missed).
	 * Without that, t sits on a frame boundary whenever the content's frame
	 * rate divides the display's (60 fps content on a 60 Hz display starts at
	 * 0, a boundary), and the jitter of the delta plays 0 frames on one call
	 * and 2 on the next. The frames and their order are the same either way.
	 * t never goes below 0 (the speed is at least 0), so the whole frames of t
	 * are its floor.
	 */
	handleTick(delta: number) {
        // Frames cannot be played backwards: a speed below 0 (or NaN) plays as 0,
        // so that nothing is owed while it lasts and the content resumes at once
        const speed = this._speed > 0 ? this._speed : 0;
        const d = delta * speed;
        const usual = this._usualDelta(delta) * speed;

		beginDrive();
		pullFromPixi();

		const targets = this._createjsData.targets;
		for (let i in targets) {
            const target = targets[i];
            const fps = target.cjs.fps;
            target.t += d * fps / 60;

            const step = usual * fps / 60;
            const lead = Math.min(step, 1) / 2;

            if (target.isFirst) {
                target.isFirst = false;
                target.clock = target.t + lead;
                target.cjs.updateStateForPixi();
                syncToPixi(target.cjs);
                continue;
            }

            let p: number;
            if (this._smooth) {
                target.clock += step;
                const behind = target.t + lead - target.clock;
                if (behind >= 1 || behind <= -1) {
                    target.clock = target.t + lead;
                } else {
                    target.clock += behind * PULL;
                }
                p = Math.max(Math.floor(target.clock), 0);
                target.clock -= p;
            } else {
                p = Math.floor(target.t);
                target.clock = target.t - p;
            }
            const frame = this._overSpeed ? p : Math.min(p, 1);

            target.t -= p;

            for (let f = 0; f < frame; f++) {
                target.cjs._tick(new CreatejsEvent('tick'));
                target.cjs.updateStateForPixi();
            }

            syncToPixi(target.cjs);
		}

		endDrive();
	}

	/**
	 * Brings the Pixi mirror up to the current createjs state right before
	 * Pixi draws (called from the container's updateTransform, which a Pixi
	 * render calls on the tree before drawing). Pixi draws on every display
	 * frame, a content frame played or not, and what it draws has to be what
	 * createjs would draw at that moment:
	 *
	 * - a tree whose timelines moved outside handleTick (a goto made by the
	 *   application, a clip added between frames) is settled first, as a
	 *   createjs draw settles each clip (CreatejsMovieClip.settleForPixi)
	 * - every tree is synced, so that createjs properties written after
	 *   handleTick (by application code running later in the same display
	 *   frame) are drawn at once
	 */
	flushForRender() {
		beginDrive();

		const targets = this._createjsData.targets;
		for (let i in targets) {
            const root = targets[i].cjs;

            if (takeSettleMark(root)) {
                root.settleForPixi();
            }

            syncToPixi(root);
		}

		endDrive();
	}

	/**
	 * Records a delta and gives the median of the latest ones (the median, so
	 * that an occasional long delta of a missed display frame does not drag
	 * the usual delta along).
	 */
	private _usualDelta(delta: number): number {
		const deltas = this._deltas;
		deltas[this._nextDelta] = delta;
		this._nextDelta = (this._nextDelta + 1) % DELTA_SAMPLES;
		const sorted = deltas.slice().sort((a, b) => a - b);
		const middle = sorted.length >> 1;
		return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
	}

	private _addCreatejs(cjs: TCreatejsObject) {
		if (cjs instanceof CreatejsMovieClip) {
			const p = cjs.pixi.parent;

			cjs.pixi.once('added', () => {
				if (cjs.pixi.parent !== p) {
					cjs.gotoAndPlay(0);
				}

				const id = this._createjsData.id++;
				this._createjsData.targets[id] = { cjs, t: 0, clock: 0, isFirst: true };
				// drawn before its first handleTick: settled and synced first
				markForSettle(cjs);

				cjs.pixi.once('removed', () => {
					delete(this._createjsData.targets[id]);
				});
			});
		}
	}

	addCreatejs<T extends TCreatejsObject>(cjs: T) {
		this._addCreatejs(cjs);
		this._createjsData.container.addChild(cjs.pixi);

		return cjs;
	}

	addCreatejsAt<T extends TCreatejsObject>(cjs: T, index: number) {
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
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Container.html | PIXI.Container}
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

    get createjsSmooth() {
        return this._createjsData.controller.smooth;
    }
    set createjsSmooth(value: boolean) {
        this._createjsData.controller.smooth = value;
    }

	handleTick(delta: number) {
		return this._createjsData.controller.handleTick(delta);
	}

	/**
	 * Pixi calls this on the tree before drawing: the createjs content is
	 * brought up to date first ({@link CreatejsController.flushForRender}).
	 */
	updateTransform() {
		this._createjsData.controller.flushForRender();
		super.updateTransform();
	}

	addCreatejs<T extends TCreatejsObject = TCreatejsObject>(cjs: T) {
		return this._createjsData.controller.addCreatejs(cjs);
	}

	addCreatejsAt<T extends TCreatejsObject = TCreatejsObject>(cjs: T, index: number) {
		return this._createjsData.controller.addCreatejsAt(cjs, index);
	}

	removeCreatejs(cjs: TCreatejsObject) {
		return this._createjsData.controller.removeCreatejs(cjs);
	}
}
