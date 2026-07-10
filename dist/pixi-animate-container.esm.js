/*!
 * pixi-animate-container - v2.5.0
 * 
 * @require pixi.js v^5.3.2
 * @author tawaship (makazu.mori@gmail.com)
 * @license MIT
 */

import * as PIXI from 'pixi.js';
import { BLEND_MODES, filters, utils, Container as Container$1, BaseTexture, Texture, Sprite, LINE_CAP, LINE_JOIN, Graphics, Text } from 'pixi.js';
import createjs from '@tawaship/createjs-module';

/**
 * @ignore
 */
const DEG_TO_RAD = Math.PI / 180;

function createPixiData(pixi, regObj) {
    return {
        regObj,
        instance: pixi,
        reservedBlendMode: BLEND_MODES.NORMAL,
        mask: null,
        colorFilters: null
    };
}
/**
 * External store keyed by the createjs instance, so that wrapper metadata never
 * appears as own properties of the createjs object (for-in surface stays original-faithful).
 * Each class module additionally keeps its own store with a more concrete data type;
 * this one serves the type-agnostic consumers (pull-sync walk, mask helper).
 */
const pixiDataStore = new WeakMap();
function registerPixiData(cjs, data) {
    pixiDataStore.set(cjs, data);
}
function findPixiData(cjs) {
    const data = pixiDataStore.get(cjs);
    return data ? data : null;
}
/**
 * Shared implementation of the mask setter (push layer).
 * Writing a mask re-attaches display objects, so it must fire on change only;
 * the accessor of each class is the change detector.
 */
function setMaskForPixi(data, value) {
    if (value) {
        value.masked.push(data.instance);
        data.instance.mask = value.pixi;
        data.instance.once('added', () => {
            if (data.instance.parent) {
                data.instance.parent.addChild(value.pixi);
            }
        });
    }
    else {
        data.instance.mask = null;
    }
    data.mask = value;
}
/**
 * Pull-sync: copies the plain display properties of the whole createjs tree to
 * the Pixi mirror. Runs once at the end of each tick, after `_tick()` has
 * resolved the createjs state.
 *
 * - Invisible nodes are NOT skipped: switching to invisible is itself a state
 *   that must reach Pixi.
 * - No dirty tracking: the Pixi setters either are plain fields (renderable,
 *   visible, alpha) or contain their own equality checks (position, scale,
 *   skew, rotation, pivot), so unconditional copies never invalidate anything.
 */
function syncToPixi(root) {
    syncNode(root);
}
function syncNode(cjs) {
    const data = pixiDataStore.get(cjs);
    if (data) {
        const pixi = data.instance;
        pixi.x = cjs.x;
        pixi.y = cjs.y;
        pixi.scale.x = cjs.scaleX;
        pixi.scale.y = cjs.scaleY;
        pixi.skew.x = -cjs.skewX * DEG_TO_RAD;
        pixi.skew.y = cjs.skewY * DEG_TO_RAD;
        pixi.rotation = cjs.rotation * DEG_TO_RAD;
        data.regObj.x = cjs.regX;
        data.regObj.y = cjs.regY;
        pixi.visible = !!cjs.visible;
        pixi.alpha = cjs.alpha;
        pixi.renderable = !cjs._off;
        const colorFilters = data.colorFilters;
        if (colorFilters) {
            for (let i = 0; i < colorFilters.length; i++) {
                const source = colorFilters[i].source;
                const matrix = colorFilters[i].matrix;
                matrix[0] = source.redMultiplier;
                matrix[6] = source.greenMultiplier;
                matrix[12] = source.blueMultiplier;
                matrix[18] = source.alphaMultiplier;
                matrix[4] = source.redOffset / 255;
                matrix[9] = source.greenOffset / 255;
                matrix[14] = source.blueOffset / 255;
                matrix[19] = source.alphaOffset / 255;
            }
        }
        // Mask shapes live OUTSIDE the children tree (publish output keeps them
        // as standalone _off shapes referenced by `mask` only), so the walk must
        // follow the mask reference explicitly or a tweened/nested mask never
        // receives its transform.
        if (data.mask) {
            syncNode(data.mask);
        }
    }
    const children = cjs.children;
    if (children) {
        for (let i = 0; i < children.length; i++) {
            syncNode(children[i]);
        }
    }
}

/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.filters.ColorMatrixFilter.html | PIXI.filters.ColorMatrixFilter}
 */
class PixiColorMatrixFilter extends filters.ColorMatrixFilter {
    constructor(cjs) {
        super();
        this._createjs = cjs;
    }
    get createjs() {
        return this._createjs;
    }
}
/**
 * @ignore
 */
const ColorFilterBase = createjs.ColorFilter;
/**
 * External store for the paired Pixi filter, so that the createjs instance
 * carries no wrapper metadata (its own properties are exactly the original 8
 * scalars; tween's for-in sees the same surface as with the original createjs).
 */
const pixiFilterStore = new WeakMap();
/**
 * @ignore
 */
function syncMatrix(filter, pixi) {
    const matrix = pixi.matrix;
    matrix[0] = filter.redMultiplier;
    matrix[6] = filter.greenMultiplier;
    matrix[12] = filter.blueMultiplier;
    matrix[18] = filter.alphaMultiplier;
    matrix[4] = filter.redOffset / 255;
    matrix[9] = filter.greenOffset / 255;
    matrix[14] = filter.blueOffset / 255;
    matrix[19] = filter.alphaOffset / 255;
}
function getPixiColorMatrixFilter(filter) {
    let pixi = pixiFilterStore.get(filter);
    if (!pixi) {
        pixi = new PixiColorMatrixFilter(filter);
        syncMatrix(filter, pixi);
        pixiFilterStore.set(filter, pixi);
    }
    return pixi;
}
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/ColorFilter.html | createjs.ColorFilter}
 *
 * The 8 scalars (redMultiplier etc.) are plain data properties; they are copied
 * into the paired Pixi filter's matrix by the pull-sync pass at the end of each
 * tick (see core.ts syncToPixi), not by accessors.
 */
class CreatejsColorFilter extends ColorFilterBase {
    constructor(...args) {
        super(...args);
    }
    get pixi() {
        return getPixiColorMatrixFilter(this);
    }
}

/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/ButtonHelper.html | createjs.ButtonHelper}
 */
class CreatejsButtonHelper extends createjs.ButtonHelper {
    constructor(...args) {
        super(...args);
        const createjs = args[0];
        const pixi = createjs.pixi;
        const baseFrame = args[1];
        const overFrame = args[2];
        const downFrame = args[3];
        const hit = arguments[5];
        const hitFrame = args[6];
        hit.gotoAndStop(hitFrame);
        // The hit clip hangs on the pixi tree only (never on the createjs tree),
        // so the per-tick pull sync can never reach it. It is static after the
        // gotoAndStop above, so one explicit sync here is sufficient.
        syncToPixi(hit);
        const hitPixi = pixi.addChild(hit.pixi);
        hitPixi.alpha = 0.00001;
        let isOver = false;
        let isDown = false;
        hitPixi.on('pointerover', function () {
            isOver = true;
            if (isDown) {
                createjs.gotoAndStop(downFrame);
            }
            else {
                createjs.gotoAndStop(overFrame);
            }
        });
        hitPixi.on('pointerout', function () {
            isOver = false;
            if (isDown) {
                createjs.gotoAndStop(overFrame);
            }
            else {
                createjs.gotoAndStop(baseFrame);
            }
        });
        hitPixi.on('pointerdown', function () {
            isDown = true;
            createjs.gotoAndStop(downFrame);
        });
        hitPixi.on('pointerup', function () {
            isDown = false;
            if (isOver) {
                createjs.gotoAndStop(overFrame);
            }
            else {
                createjs.gotoAndStop(baseFrame);
            }
        });
        hitPixi.on('pointerupoutside', function () {
            isDown = false;
            if (isOver) {
                createjs.gotoAndStop(overFrame);
            }
            else {
                createjs.gotoAndStop(baseFrame);
            }
        });
        hitPixi.interactive = true;
        hitPixi.cursor = 'pointer';
    }
}

var createjsInteractionEvents;
(function (createjsInteractionEvents) {
    createjsInteractionEvents["mousedown"] = "mousedown";
    createjsInteractionEvents["pressmove"] = "pressmove";
    createjsInteractionEvents["pressup"] = "pressup";
    createjsInteractionEvents["rollover"] = "rollover";
    createjsInteractionEvents["rollout"] = "rollout";
    createjsInteractionEvents["click"] = "click";
})(createjsInteractionEvents || (createjsInteractionEvents = {}));
class CreatejsEventManager {
    constructor(cjs) {
        this._downTarget = null;
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
    _onPointerDown(e) {
        const ev = {
            type: createjsInteractionEvents.mousedown,
            currentTarget: e.currentTarget.createjs,
            target: e.target.createjs,
            rawX: e.data.global.x,
            rawY: e.data.global.y,
        };
        this._downTarget = e.target.createjs;
        this._emitter.emit('mousedown', ev);
    }
    _onPointerMove(e) {
        if (!this._downTarget) {
            return;
        }
        const ev = {
            type: createjsInteractionEvents.pressmove,
            currentTarget: e.currentTarget.createjs,
            target: this._downTarget,
            rawX: e.data.global.x,
            rawY: e.data.global.y,
        };
        this._emitter.emit('pressmove', ev);
    }
    _onPointerUp(e) {
        const ev = {
            type: createjsInteractionEvents.pressup,
            currentTarget: e.currentTarget.createjs,
            target: this._downTarget,
            rawX: e.data.global.x,
            rawY: e.data.global.y,
        };
        this._downTarget = null;
        this._emitter.emit('pressup', ev);
    }
    _onPointerUpOutside(e) {
        const ev = {
            type: createjsInteractionEvents.pressup,
            currentTarget: e.currentTarget.createjs,
            target: this._downTarget,
            rawX: e.data.global.x,
            rawY: e.data.global.y,
        };
        this._downTarget = null;
        this._emitter.emit('pressup', ev);
    }
    _onPointerTap(e) {
        const ev = {
            type: createjsInteractionEvents.click,
            currentTarget: e.currentTarget.createjs,
            target: e.target.createjs,
            rawX: e.data.global.x,
            rawY: e.data.global.y,
        };
        this._emitter.emit('click', ev);
    }
    _onPointerOver(e) {
        const ev = {
            type: createjsInteractionEvents.rollover,
            currentTarget: e.currentTarget.createjs,
            target: e.currentTarget.createjs,
            rawX: e.data.global.x,
            rawY: e.data.global.y,
        };
        this._emitter.emit('rollover', ev);
    }
    _onPointerOut(e) {
        const ev = {
            type: createjsInteractionEvents.rollout,
            currentTarget: e.currentTarget.createjs,
            target: e.currentTarget.createjs,
            rawX: e.data.global.x,
            rawY: e.data.global.y,
        };
        this._emitter.emit('rollout', ev);
    }
    add(type, cb) {
        if (!(type in createjsInteractionEvents)) {
            return;
        }
        this._emitter.on(type, cb);
        if (this._emitter.eventNames().length > 0) {
            this._cjs.pixi.interactive = true;
        }
    }
    remove(type, cb) {
        if (!(type in createjsInteractionEvents)) {
            return;
        }
        this._emitter.off(type, cb);
        if (this._emitter.eventNames().length === 0) {
            this._cjs.pixi.interactive = false;
        }
    }
    removeAll(type) {
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
 * External store keyed by the createjs instance. The manager (and its pointer
 * handlers on the Pixi instance) is created lazily on the first listener
 * registration, so instances that never listen pay nothing.
 */
const eventManagerStore = new WeakMap();
/**
 * @ignore
 */
function getEventManager(cjs) {
    let manager = eventManagerStore.get(cjs);
    if (!manager) {
        manager = new CreatejsEventManager(cjs);
        eventManagerStore.set(cjs, manager);
    }
    return manager;
}
function addInteractionListener(cjs, type, cb) {
    if (!(type in createjsInteractionEvents)) {
        return;
    }
    getEventManager(cjs).add(type, cb);
}
function removeInteractionListener(cjs, type, cb) {
    const manager = eventManagerStore.get(cjs);
    if (manager) {
        manager.remove(type, cb);
    }
}
function removeAllInteractionListeners(cjs, type) {
    const manager = eventManagerStore.get(cjs);
    if (manager) {
        manager.removeAll(type);
    }
}

/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.Container.html | PIXI.Container}
 */
class PixiMovieClip extends Container$1 {
    constructor(cjs) {
        super();
        this._filterContainer = null;
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
class AnimateEvent extends createjs.Event {
    constructor(type) {
        super(type);
    }
}
class AnimateReachLabelEvent extends AnimateEvent {
    constructor(type, label) {
        super(type);
        this.data = label;
    }
}
/**
 * @ignore
 */
const MovieClipBase = createjs.MovieClip;
var CompositeOperations;
(function (CompositeOperations) {
    CompositeOperations["Lighter"] = "lighter";
    CompositeOperations["Multiply"] = "multiply";
    CompositeOperations["Screen"] = "screen";
})(CompositeOperations || (CompositeOperations = {}));
/**
 * @ignore
 */
const blendModes = {
    [CompositeOperations.Lighter]: BLEND_MODES.ADD,
    [CompositeOperations.Multiply]: BLEND_MODES.MULTIPLY,
    [CompositeOperations.Screen]: BLEND_MODES.SCREEN,
};
/**
 * @ignore
 */
function createPixiMovieClipData(cjs) {
    const pixi = new PixiMovieClip(cjs);
    return Object.assign(createPixiData(pixi, pixi.pivot), {
        subInstance: pixi,
        listenFrameEvents: {},
        filters: null,
        compositeOperation: null
    });
}
/**
 * @ignore
 */
const dataStore$5 = new WeakMap();
/**
 * @ignore
 */
function resetData$5(cjs) {
    const data = createPixiMovieClipData(cjs);
    dataStore$5.set(cjs, data);
    registerPixiData(cjs, data);
    return data;
}
/**
 * @ignore
 */
function ensureData$5(cjs) {
    const data = dataStore$5.get(cjs);
    return data ? data : resetData$5(cjs);
}
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/MovieClip.html | createjs.MovieClip}
 */
class CreatejsMovieClip extends MovieClipBase {
    /**
     * When the last frame of the timeline is reached.
     *
     * @event
     */
    endAnimation(e) { }
    /**
     * When either labels is reached.
     *
     * @event
     */
    reachLabel(e) { }
    constructor(...args) {
        super(...args);
        ensureData$5(this).listenFrameEvents = Object.assign({}, this._listenFrameEventsBase || {});
    }
    initialize(...args) {
        resetData$5(this).listenFrameEvents = Object.assign({}, this._listenFrameEventsBase || {});
        return super.initialize(...args);
    }
    get pixi() {
        return ensureData$5(this).instance;
    }
    get framerate() {
        return -1;
    }
    set framerate(value) {
        // framerate is disabled
    }
    get fps() {
        return this._fps;
    }
    /**
     * This changes whether to `listen` for a specified custom event.
     */
    listenCustomFrameEvent(type, value) {
        ensureData$5(this).listenFrameEvents[type] = value;
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
    advance(time) {
        const beforeFrame = this.currentFrame;
        super.advance(time);
        if (this.currentFrame === beforeFrame) {
            return;
        }
        const listen = ensureData$5(this).listenFrameEvents;
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
    updateStateForPixi() {
        this._updateState();
        const children = this.children;
        for (let i = children.length - 1; i >= 0; i--) {
            const child = children[i];
            if (child instanceof CreatejsMovieClip) {
                child.updateStateForPixi();
            }
        }
    }
    updateBlendModeForPixi(mode) {
        const data = ensureData$5(this);
        if (data.compositeOperation && blendModes[data.compositeOperation] === mode)
            return;
        data.reservedBlendMode = mode;
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].updateBlendModeForPixi(mode);
        }
    }
    get compositeOperation() {
        return ensureData$5(this).compositeOperation;
    }
    set compositeOperation(value) {
        const data = ensureData$5(this);
        if (data.compositeOperation === value)
            return;
        const blendMode = (value && blendModes[value]) || data.reservedBlendMode;
        this.updateBlendModeForPixi(blendMode);
        data.compositeOperation = value;
    }
    get filters() {
        return ensureData$5(this).filters;
    }
    set filters(value) {
        const data = ensureData$5(this);
        const list = [];
        const pairs = [];
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
        return ensureData$5(this).mask;
    }
    set mask(value) {
        setMaskForPixi(ensureData$5(this), value);
    }
    _updateChildrenBlendModeForPixi(child) {
        const data = ensureData$5(this);
        const blendMode = (data.compositeOperation && blendModes[data.compositeOperation]) || data.reservedBlendMode;
        if (!blendMode)
            return;
        child.updateBlendModeForPixi(blendMode);
    }
    addChild(child) {
        ensureData$5(this).subInstance.addChild(child.pixi);
        this._updateChildrenBlendModeForPixi(child);
        return super.addChild(child);
    }
    addChildAt(child, index) {
        ensureData$5(this).subInstance.addChildAt(child.pixi, index);
        this._updateChildrenBlendModeForPixi(child);
        return super.addChildAt(child, index);
    }
    removeChild(child) {
        ensureData$5(this).subInstance.removeChild(child.pixi);
        return super.removeChild(child);
    }
    removeChildAt(index) {
        ensureData$5(this).subInstance.removeChildAt(index);
        return super.removeChildAt(index);
    }
    removeAllChldren() {
        ensureData$5(this).subInstance.removeChildren();
        return super.removeAllChildren();
    }
    addEventListener(type, cb, useCapture) {
        const p = super.addEventListener(type, cb, useCapture);
        if (!(cb instanceof CreatejsButtonHelper)) {
            addInteractionListener(this, type, cb);
        }
        return p;
    }
    removeEventListener(type, cb, useCapture) {
        super.removeEventListener(type, cb, useCapture);
        removeInteractionListener(this, type, cb);
    }
    removeAllEventListeners(type) {
        super.removeAllEventListeners(type);
        removeAllInteractionListeners(this, type);
    }
}
delete (CreatejsMovieClip.prototype.endAnimation);
delete (CreatejsMovieClip.prototype.reachLabel);

/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.Sprite.html | PIXI.Sprite}
 */
class PixiSprite extends Sprite {
    constructor(cjs) {
        super();
        this._createjs = cjs;
    }
    get createjs() {
        return this._createjs;
    }
}
/**
 * @ignore
 */
const SpriteBase = createjs.Sprite;
/**
 * @ignore
 */
function createPixiSpriteData(cjs) {
    const pixi = new PixiSprite(cjs);
    return createPixiData(pixi, pixi.anchor);
}
/**
 * @ignore
 */
const dataStore$4 = new WeakMap();
/**
 * @ignore
 */
function resetData$4(cjs) {
    const data = createPixiSpriteData(cjs);
    dataStore$4.set(cjs, data);
    registerPixiData(cjs, data);
    return data;
}
/**
 * @ignore
 */
function ensureData$4(cjs) {
    const data = dataStore$4.get(cjs);
    return data ? data : resetData$4(cjs);
}
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Sprite.html | createjs.Sprite}
 */
class CreatejsSprite extends SpriteBase {
    constructor(...args) {
        super(...args);
        ensureData$4(this);
    }
    initialize(...args) {
        resetData$4(this);
        return super.initialize(...args);
    }
    get pixi() {
        return ensureData$4(this).instance;
    }
    /**
     * The Pixi mirror is only updated through gotoAndStop, so the spritesheet
     * animation must not self-advance when the original Sprite._tick runs
     * (tick delegation would otherwise advance the createjs side alone and
     * leave the display behind).
     */
    advance(time) {
        // spritesheet self-animation is disabled
    }
    updateBlendModeForPixi(mode) {
        ensureData$4(this).instance.blendMode = mode;
    }
    gotoAndStop(frameOrAnimation) {
        super.gotoAndStop(frameOrAnimation);
        const frame = this.spriteSheet.getFrame(this.currentFrame);
        const baseTexture = BaseTexture.from(frame.image);
        const texture = new Texture(baseTexture, frame.rect);
        ensureData$4(this).instance.texture = texture;
    }
    get mask() {
        return ensureData$4(this).mask;
    }
    set mask(value) {
        setMaskForPixi(ensureData$4(this), value);
    }
    addEventListener(type, cb, useCapture) {
        const p = super.addEventListener(type, cb, useCapture);
        if (!(cb instanceof CreatejsButtonHelper)) {
            addInteractionListener(this, type, cb);
        }
        return p;
    }
    removeEventListener(type, cb, useCapture) {
        super.removeEventListener(type, cb, useCapture);
        removeInteractionListener(this, type, cb);
    }
    removeAllEventListeners(type) {
        super.removeAllEventListeners(type);
        removeAllInteractionListeners(this, type);
    }
}

/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.Container.html | PIXI.Container}
 */
class PixiShape extends Container$1 {
    constructor(cjs) {
        super();
        this._createjs = cjs;
    }
    get createjs() {
        return this._createjs;
    }
}
/**
 * @ignore
 */
const ShapeBase = createjs.Shape;
/**
 * @ignore
 */
function createPixiShapeData(cjs) {
    const pixi = new PixiShape(cjs);
    return Object.assign(createPixiData(pixi, pixi.pivot), {
        masked: [],
        graphics: null
    });
}
/**
 * @ignore
 */
const dataStore$3 = new WeakMap();
/**
 * @ignore
 */
function resetData$3(cjs) {
    const data = createPixiShapeData(cjs);
    dataStore$3.set(cjs, data);
    registerPixiData(cjs, data);
    return data;
}
/**
 * @ignore
 */
function ensureData$3(cjs) {
    const data = dataStore$3.get(cjs);
    return data ? data : resetData$3(cjs);
}
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Shape.html | createjs.Shape}
 */
class CreatejsShape extends ShapeBase {
    constructor(...args) {
        super(...args);
        ensureData$3(this);
    }
    initialize(...args) {
        resetData$3(this);
        return super.initialize(...args);
    }
    get pixi() {
        return ensureData$3(this).instance;
    }
    updateBlendModeForPixi(mode) {
        var _a;
        const data = ensureData$3(this);
        data.reservedBlendMode = mode;
        (_a = data.graphics) === null || _a === void 0 ? void 0 : _a.updateBlendModeForPixi(mode);
    }
    get graphics() {
        return ensureData$3(this).graphics;
    }
    set graphics(value) {
        const data = ensureData$3(this);
        if (data.masked.length) {
            data.instance.removeChildren();
            if (value) {
                for (let i = 0; i < data.masked.length; i++) {
                    data.masked[i].mask = data.instance;
                }
            }
            else {
                for (let i = 0; i < data.masked.length; i++) {
                    data.masked[i].mask = null;
                }
            }
        }
        if (value) {
            data.instance.addChild(value.pixi);
        }
        data.graphics = value;
    }
    get masked() {
        return ensureData$3(this).masked;
    }
    get mask() {
        return ensureData$3(this).mask;
    }
    set mask(value) {
        setMaskForPixi(ensureData$3(this), value);
    }
    addEventListener(type, cb, useCapture) {
        const p = super.addEventListener(type, cb, useCapture);
        if (!(cb instanceof CreatejsButtonHelper)) {
            addInteractionListener(this, type, cb);
        }
        return p;
    }
    removeEventListener(type, cb, useCapture) {
        super.removeEventListener(type, cb, useCapture);
        removeInteractionListener(this, type, cb);
    }
    removeAllEventListeners(type) {
        super.removeAllEventListeners(type);
        removeAllInteractionListeners(this, type);
    }
}

/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.Sprite.html | PIXI.Sprite}
 */
class PixiBitmap extends Sprite {
    constructor(cjs) {
        super();
        this._createjs = cjs;
    }
    get createjs() {
        return this._createjs;
    }
}
/**
 * @ignore
 */
const BitmapBase = createjs.Bitmap;
/**
 * @ignore
 */
function createPixiBitmapData(cjs) {
    const pixi = new PixiBitmap(cjs);
    return createPixiData(pixi, pixi.anchor);
}
/**
 * @ignore
 */
const dataStore$2 = new WeakMap();
/**
 * @ignore
 */
function resetData$2(cjs) {
    const data = createPixiBitmapData(cjs);
    dataStore$2.set(cjs, data);
    registerPixiData(cjs, data);
    return data;
}
/**
 * @ignore
 */
function ensureData$2(cjs) {
    const data = dataStore$2.get(cjs);
    return data ? data : resetData$2(cjs);
}
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Bitmap.html | createjs.Bitmap}
 */
class CreatejsBitmap extends BitmapBase {
    constructor(...args) {
        super(...args);
        ensureData$2(this);
    }
    initialize(...args) {
        const data = resetData$2(this);
        const res = super.initialize(...args);
        data.instance.texture = Texture.from(this.image);
        return res;
    }
    get pixi() {
        return ensureData$2(this).instance;
    }
    updateBlendModeForPixi(mode) {
        ensureData$2(this).instance.blendMode = mode;
    }
    get mask() {
        return ensureData$2(this).mask;
    }
    set mask(value) {
        setMaskForPixi(ensureData$2(this), value);
    }
    addEventListener(type, cb, useCapture) {
        const p = super.addEventListener(type, cb, useCapture);
        if (!(cb instanceof CreatejsButtonHelper)) {
            addInteractionListener(this, type, cb);
        }
        return p;
    }
    removeEventListener(type, cb, useCapture) {
        super.removeEventListener(type, cb, useCapture);
        removeInteractionListener(this, type, cb);
    }
    removeAllEventListeners(type) {
        super.removeAllEventListeners(type);
        removeAllInteractionListeners(this, type);
    }
}

/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.Graphics.html | PIXI.Graphics}
 */
class PixiGraphics extends Graphics {
    constructor(cjs) {
        super();
        this._createjs = cjs;
    }
    get createjs() {
        return this._createjs;
    }
}
/**
 * @ignore
 */
const GraphicsBase = createjs.Graphics;
/**
 * @ignore
 */
function createPixiGraphicsData(cjs) {
    const pixi = new PixiGraphics(cjs);
    return Object.assign(createPixiData(pixi, pixi.pivot), {
        strokeFill: 0,
        strokeAlpha: 1
    });
}
/**
 * @ignore
 */
const dataStore$1 = new WeakMap();
/**
 * @ignore
 */
function resetData$1(cjs) {
    const data = createPixiGraphicsData(cjs);
    dataStore$1.set(cjs, data);
    registerPixiData(cjs, data);
    return data;
}
/**
 * @ignore
 */
function ensureData$1(cjs) {
    const data = dataStore$1.get(cjs);
    return data ? data : resetData$1(cjs);
}
/**
 * @ignore
 */
const COLOR_RED = 16 * 16 * 16 * 16;
/**
 * @ignore
 */
const COLOR_GREEN = 16 * 16;
/**
 * @ignore
 */
const LineCap = {
    0: LINE_CAP.BUTT,
    1: LINE_CAP.ROUND,
    2: LINE_CAP.SQUARE
};
/**
 * @ignore
 */
const LineJoin = {
    0: LINE_JOIN.MITER,
    1: LINE_JOIN.ROUND,
    2: LINE_JOIN.BEVEL
};
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Graphics.html | createjs.Graphics}
 */
class CreatejsGraphics extends GraphicsBase {
    constructor(...args) {
        super(...args);
        const data = ensureData$1(this);
        data.instance.beginFill(0xFFEEEE, 1);
        data.strokeFill = 0;
        data.strokeAlpha = 1;
    }
    initialize(...args) {
        resetData$1(this);
        return super.initialize(...args);
    }
    get pixi() {
        return ensureData$1(this).instance;
    }
    updateBlendModeForPixi(mode) {
        if (!mode)
            return;
        ensureData$1(this).instance.blendMode = mode;
    }
    // path methods
    moveTo(x, y) {
        const pixi = ensureData$1(this).instance;
        if (pixi.clone().endFill().containsPoint({ x: x, y: y })) {
            pixi.beginHole();
        }
        else {
            pixi.endHole();
        }
        pixi.moveTo(x, y);
        return super.moveTo(x, y);
    }
    mt(x, y) {
        return this.moveTo(x, y);
    }
    lineTo(x, y) {
        ensureData$1(this).instance.lineTo(x, y);
        return super.lineTo(x, y);
    }
    lt(x, y) {
        return this.lineTo(x, y);
    }
    arcTo(x1, y1, x2, y2, radius) {
        ensureData$1(this).instance.arcTo(x1, y1, x2, y2, radius);
        return super.arcTo(x1, y1, x2, y2, radius);
    }
    at(x1, y1, x2, y2, radius) {
        return this.arcTo(x1, y1, x2, y2, radius);
    }
    arc(x, y, radius, startAngle, endAngle, anticlockwise) {
        ensureData$1(this).instance.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        return super.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    }
    a(x, y, radius, startAngle, endAngle, anticlockwise) {
        return this.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    }
    quadraticCurveTo(cpx, cpy, x, y) {
        ensureData$1(this).instance.quadraticCurveTo(cpx, cpy, x, y);
        return super.quadraticCurveTo(cpx, cpy, x, y);
    }
    qt(cpx, cpy, x, y) {
        return this.quadraticCurveTo(cpx, cpy, x, y);
    }
    curveTo(cpx, cpy, x, y) {
        return this.quadraticCurveTo(cpx, cpy, x, y);
    }
    bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
        ensureData$1(this).instance.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
        return super.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    }
    bt(cp1x, cp1y, cp2x, cp2y, x, y) {
        return this.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    }
    rect(x, y, w, h) {
        ensureData$1(this).instance.drawRect(x, y, w, h);
        return super.rect(x, y, w, h);
    }
    r(x, y, w, h) {
        return this.rect(x, y, w, h);
    }
    drawRect(x, y, w, h) {
        return this.rect(x, y, w, h);
    }
    dr(x, y, w, h) {
        return this.rect(x, y, w, h);
    }
    closePath() {
        ensureData$1(this).instance.closePath();
        return super.closePath();
    }
    cp() {
        return this.closePath();
    }
    clear() {
        ensureData$1(this).instance.clear();
        return super.clear();
    }
    c() {
        return this.clear();
    }
    _parseColor(color) {
        const res = {
            color: 0,
            alpha: 1
        };
        if (!color) {
            res.alpha = 0;
            return res;
        }
        if (color.charAt(0) === '#') {
            res.color = parseInt(color.slice(1), 16);
            return res;
        }
        const colors = color.replace(/rgba|\(|\)|\s/g, '').split(',');
        res.color = Number(colors[0]) * COLOR_RED + Number(colors[1]) * COLOR_GREEN + Number(colors[2]);
        res.alpha = Number(colors[3]);
        return res;
    }
    beginFill(color) {
        const c = this._parseColor(color);
        ensureData$1(this).instance.beginFill(c.color, c.alpha);
        return super.beginFill(color);
    }
    f(color) {
        return this.beginFill(color);
    }
    endFill() {
        ensureData$1(this).instance.endFill();
        return super.endFill();
    }
    ef() {
        return this.endFill();
    }
    setStrokeStyle(thickness, caps, joints, miterLimit, ignoreScale) {
        const data = ensureData$1(this);
        data.instance.lineTextureStyle({
            width: thickness,
            color: data.strokeFill,
            alpha: data.strokeAlpha,
            cap: (caps in LineCap) ? LineCap[caps] : LineCap[0],
            join: (joints in LineJoin) ? LineJoin[joints] : LineJoin[0],
            miterLimit
        });
        return super.setStrokeStyle(thickness, caps, joints, miterLimit, ignoreScale);
    }
    ss(thickness, caps, joints, miterLimit, ignoreScale) {
        return this.setStrokeStyle(thickness, caps, joints, miterLimit, ignoreScale);
    }
    beginStroke(color) {
        const data = ensureData$1(this);
        const c = this._parseColor(color);
        data.strokeFill = c.color;
        data.strokeAlpha = c.alpha;
        return super.beginStroke(color);
    }
    s(color) {
        return this.beginStroke(color);
    }
    drawRoundRect(x, y, w, h, radius) {
        ensureData$1(this).instance.drawRoundedRect(x, y, w, h, radius);
        return super.drawRoundRect(x, y, w, h, radius);
    }
    rr(x, y, w, h, radius) {
        return this.drawRoundRect(x, y, w, h, radius);
    }
    drawCircle(x, y, radius) {
        ensureData$1(this).instance.drawCircle(x, y, radius);
        return super.drawCircle(x, y, radius);
    }
    dc(x, y, radius) {
        return this.drawCircle(x, y, radius);
    }
    drawEllipse(x, y, w, h) {
        ensureData$1(this).instance.drawEllipse(x, y, w, h);
        return super.drawEllipse(x, y, w, h);
    }
    de(x, y, w, h) {
        return this.drawEllipse(x, y, w, h);
    }
    drawPolyStar(x, y, radius, sides, pointSize, angle) {
        ensureData$1(this).instance.drawRegularPolygon(x, y, radius, sides, angle * DEG_TO_RAD);
        return super.drawPolyStar(x, y, radius, sides, pointSize, angle);
    }
    dp(x, y, radius, sides, pointSize, angle) {
        return this.drawPolyStar(x, y, radius, sides, pointSize, angle);
    }
    get mask() {
        return ensureData$1(this).mask;
    }
    set mask(value) {
        setMaskForPixi(ensureData$1(this), value);
    }
    addEventListener(type, cb, useCapture) {
        const p = super.addEventListener(type, cb, useCapture);
        if (!(cb instanceof CreatejsButtonHelper)) {
            addInteractionListener(this, type, cb);
        }
        return p;
    }
    removeEventListener(type, cb, useCapture) {
        super.removeEventListener(type, cb, useCapture);
        removeInteractionListener(this, type, cb);
    }
    removeAllEventListeners(type) {
        super.removeAllEventListeners(type);
        removeAllInteractionListeners(this, type);
    }
}

/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.Text.html | PIXI.Text}
 */
class PixiText extends Text {
}
/**
 * inherited {@link http://pixijs.download/v5.3.2/docs/PIXI.Container.html | PIXI.Container}
 */
class PixiTextContainer extends Container$1 {
    constructor(cjs, text) {
        super();
        this._createjs = cjs;
        this._text = text;
    }
    get createjs() {
        return this._createjs;
    }
    get text() {
        return this._text;
    }
}
/**
 * @ignore
 */
const DEF_ALIGN = 'left';
/**
 * @ignore
 */
const TextBase = createjs.Text;
/**
 * @ignore
 */
function createPixiTextData(cjs) {
    const text = new PixiText('', {
        wordWrap: true
    });
    const pixi = new PixiTextContainer(cjs, text);
    pixi.addChild(text);
    return Object.assign(createPixiData(pixi, pixi.pivot), {
        text: '',
        font: '',
        color: '',
        textAlign: DEF_ALIGN,
        lineHeight: 0,
        lineWidth: 0
    });
}
/**
 * @ignore
 */
const dataStore = new WeakMap();
/**
 * @ignore
 */
function resetData(cjs) {
    const data = createPixiTextData(cjs);
    dataStore.set(cjs, data);
    registerPixiData(cjs, data);
    return data;
}
/**
 * @ignore
 */
function ensureData(cjs) {
    const data = dataStore.get(cjs);
    return data ? data : resetData(cjs);
}
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Text.html | createjs.Text}
 */
class CreatejsText extends TextBase {
    constructor(text, font, color = '#000000') {
        super(text, font, color);
        ensureData(this);
    }
    get pixi() {
        return ensureData(this).instance;
    }
    updateBlendModeForPixi(mode) {
        ensureData(this).instance.text.blendMode = mode;
    }
    get text() {
        return ensureData(this).text;
    }
    set text(text) {
        const data = ensureData(this);
        data.instance.text.text = text;
        this._align(data.textAlign);
        data.text = text;
    }
    _parseFont(font) {
        const p = font.split(' ');
        let w = 'normal';
        let s = p.shift() || '';
        if (s.indexOf('px') === -1) {
            w = s;
            s = p.shift() || '';
        }
        return {
            fontWeight: w,
            fontSize: Number((s || '0px').replace('px', '')),
            fontFamily: p.join(' ').replace(/'/g, '') //'
        };
    }
    get font() {
        return ensureData(this).font;
    }
    set font(font) {
        const data = ensureData(this);
        const _font = this._parseFont(font);
        data.instance.text.style.fontWeight = _font.fontWeight;
        data.instance.text.style.fontSize = _font.fontSize;
        data.instance.text.style.fontFamily = _font.fontFamily;
        data.font = font;
    }
    _parseColor(color) {
        return parseInt(color.slice(1), 16);
    }
    get color() {
        return ensureData(this).color;
    }
    set color(color) {
        const data = ensureData(this);
        data.instance.text.style.fill = this._parseColor(color);
        data.color = color;
    }
    _align(align) {
        const pixiText = ensureData(this).instance.text;
        if (align === 'left') {
            pixiText.x = 0;
            return;
        }
        if (align === 'center') {
            pixiText.x = -pixiText.width / 2;
            return;
        }
        if (align === 'right') {
            pixiText.x = -pixiText.width;
            return;
        }
    }
    get textAlign() {
        return ensureData(this).textAlign;
    }
    set textAlign(align) {
        const data = ensureData(this);
        data.instance.text.style.align = align;
        this._align(align);
        data.textAlign = align;
    }
    get lineHeight() {
        return ensureData(this).lineHeight;
    }
    set lineHeight(height) {
        const data = ensureData(this);
        data.instance.text.style.lineHeight = height;
        data.lineHeight = height;
    }
    get lineWidth() {
        return ensureData(this).lineWidth;
    }
    set lineWidth(width) {
        const data = ensureData(this);
        data.instance.text.style.wordWrapWidth = width;
        this._align(data.textAlign);
        data.lineWidth = width;
    }
    get mask() {
        return ensureData(this).mask;
    }
    set mask(value) {
        setMaskForPixi(ensureData(this), value);
    }
    addEventListener(type, cb, useCapture) {
        const p = super.addEventListener(type, cb, useCapture);
        if (!(cb instanceof CreatejsButtonHelper)) {
            addInteractionListener(this, type, cb);
        }
        return p;
    }
    removeEventListener(type, cb, useCapture) {
        super.removeEventListener(type, cb, useCapture);
        removeInteractionListener(this, type, cb);
    }
    removeAllEventListeners(type) {
        super.removeAllEventListeners(type);
        removeAllInteractionListeners(this, type);
    }
}

function playSound(id, loop, offset) {
    return createjs.Sound.play(id, {
        interrupt: createjs.Sound.INTERRUPT_EARLY,
        loop,
        offset
    });
}
/*
export function dataURLToBlobURL(dataURL: string) {
    const bin = atob(dataURL.replace(/^.*,/, ''));
    const buffer = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) {
        buffer[i] = bin.charCodeAt(i);
    }

    const p = dataURL.slice(5);
    try{
        const blob = new Blob([buffer.buffer], {
            type: p.slice(0, p.indexOf(";"))
        });
        return (URL || webkitURL).createObjectURL(blob);
    } catch (e){
        throw e;
    };
}
*/
/**
 * Load the assets of createjs content published by Adobe Animate.
 * If you use multiple contents, each composition ID must be unique.
 */
function loadAssetAsync(targets) {
    var _a, _b;
    if (!Array.isArray(targets)) {
        targets = [targets];
    }
    const promises = [];
    for (let i = 0; i < targets.length; i++) {
        const target = targets[i];
        if ((_a = target.options) === null || _a === void 0 ? void 0 : _a.useSound) {
            window.playSound = playSound;
        }
        const comp = AdobeAn.getComposition(target.id);
        if (!comp) {
            throw new Error(`no composition: ${target.id}`);
        }
        const lib = comp.getLibrary();
        const manifests = lib.properties.manifest.map((v) => {
            return JSON.parse(JSON.stringify(v));
        });
        const crossOrigin = typeof ((_b = target.options) === null || _b === void 0 ? void 0 : _b.crossOrigin) === 'boolean' ? target.options.crossOrigin : true;
        for (let i = 0; i < manifests.length; i++) {
            const manifest = manifests[i];
            if (manifest.src.indexOf('data:image') === 0) {
                manifest.type = createjs.Types.IMAGE;
            }
            else if (manifest.src.indexOf('data:audio') === 0) {
                /* note
                    It seems that data URL format sounds are not supported by the createjs loader.
                    Converting to blob URL also didn't work.
                */
                throw new Error("data URL formatted sound is not supported.");
                /*
                manifest.type = createjs.Types.SOUND;
                manifest.src = dataURLToBlobURL(manifest.src);
                */
            }
            else if (manifest.src.indexOf('blob:') === 0) ;
            else if (manifest.src.indexOf('file:') === 0) ;
            else {
                manifest.src = PIXI.utils.url.resolve(target.basepath, manifest.src);
            }
        }
        if (crossOrigin) {
            for (let i = 0; i < manifests.length; i++) {
                manifests[i].crossOrigin = true;
            }
        }
        const loadPromise = new Promise((resolve, reject) => {
            var _a;
            if (manifests.length === 0) {
                resolve({});
            }
            const loader = new createjs.LoadQueue(false);
            if ((_a = target.options) === null || _a === void 0 ? void 0 : _a.useSound) {
                loader.installPlugin(createjs.Sound);
            }
            const errors = [];
            loader.addEventListener('fileload', (evt) => {
                handleFileLoad(evt, comp);
            });
            loader.addEventListener('complete', (evt) => {
                if (errors.length) {
                    reject(errors);
                    return;
                }
                resolve(evt);
            });
            loader.addEventListener('error', (evt) => {
                errors.push(evt.data);
            });
            loader.loadManifest(manifests || []);
        })
            .then((evt) => {
            const ss = comp.getSpriteSheet();
            const queue = evt.target;
            const ssMetadata = lib.ssMetadata;
            for (let i = 0; i < ssMetadata.length; i++) {
                ss[ssMetadata[i].name] = new createjs.SpriteSheet({
                    images: [
                        queue.getResult(ssMetadata[i].name)
                    ],
                    frames: ssMetadata[i].frames
                });
            }
            return lib;
        });
        promises.push(loadPromise
            .then((lib) => {
            var _a;
            for (let i in lib) {
                if (lib[i].prototype instanceof CreatejsMovieClip) {
                    lib[i].prototype._fps = lib.properties.fps;
                    lib[i].prototype._listenFrameEventsBase = (_a = target.options) === null || _a === void 0 ? void 0 : _a.listenFrameEvents;
                }
            }
            return lib;
        }));
    }
    return Promise.all(promises)
        .then((resolvers) => {
        if (resolvers.length === 1) {
            return resolvers[0];
        }
        return resolvers;
    });
}
/**
 * @ignore
 */
function handleFileLoad(evt, comp) {
    const images = comp.getImages();
    if (evt && (evt.item.type == 'image')) {
        images[evt.item.id] = evt.result;
    }
}

/**
 * @ignore
 */
const CreatejsEvent = createjs.Event;
class CreatejsController {
    /**
     * Playback speed multiplier
     */
    get speed() {
        return this._speed;
    }
    set speed(value) {
        this._speed = value;
    }
    /**
     * Whether to allow more than two frames to advance in a single process.
     */
    get overSpeed() {
        return this._overSpeed;
    }
    set overSpeed(value) {
        this._overSpeed = value;
    }
    constructor(container) {
        this._speed = 1;
        this._overSpeed = true;
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
     */
    handleTick(delta) {
        const d = delta * this._speed;
        const targets = this._createjsData.targets;
        for (let i in targets) {
            const target = targets[i];
            target.t += d * target.cjs.fps / 60;
            let p = target.t | 0;
            let frame = this._overSpeed ? p : Math.min(p, 1);
            if (target.isFirst) {
                target.isFirst = false;
                target.cjs.updateStateForPixi();
                syncToPixi(target.cjs);
                continue;
            }
            target.t -= p;
            for (let f = 0; f < frame; f++) {
                target.cjs._tick(new CreatejsEvent('tick'));
                target.cjs.updateStateForPixi();
            }
            syncToPixi(target.cjs);
        }
    }
    _addCreatejs(cjs) {
        if (cjs instanceof CreatejsMovieClip) {
            const p = cjs.pixi.parent;
            cjs.pixi.once('added', () => {
                if (cjs.pixi.parent !== p) {
                    cjs.gotoAndPlay(0);
                }
                const id = this._createjsData.id++;
                this._createjsData.targets[id] = { cjs, t: 0, isFirst: true };
                cjs.pixi.once('removed', () => {
                    delete (this._createjsData.targets[id]);
                });
            });
        }
    }
    addCreatejs(cjs) {
        this._addCreatejs(cjs);
        this._createjsData.container.addChild(cjs.pixi);
        return cjs;
    }
    addCreatejsAt(cjs, index) {
        this._addCreatejs(cjs);
        this._createjsData.container.addChildAt(cjs.pixi, index);
        return cjs;
    }
    removeCreatejs(cjs) {
        this._createjsData.container.removeChild(cjs.pixi);
        return cjs;
    }
}
/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Container.html | PIXI.Container}
 */
class Container extends Container$1 {
    constructor() {
        super();
        this._createjsData = {
            controller: new CreatejsController(this)
        };
    }
    get createjsSpeed() {
        return this._createjsData.controller.speed;
    }
    set createjsSpeed(value) {
        this._createjsData.controller.speed = value;
    }
    get createjsOverSpeed() {
        return this._createjsData.controller.overSpeed;
    }
    set createjsOverSpeed(value) {
        this._createjsData.controller.overSpeed = value;
    }
    handleTick(delta) {
        return this._createjsData.controller.handleTick(delta);
    }
    addCreatejs(cjs) {
        return this._createjsData.controller.addCreatejs(cjs);
    }
    addCreatejsAt(cjs, index) {
        return this._createjsData.controller.addCreatejsAt(cjs, index);
    }
    removeCreatejs(cjs) {
        return this._createjsData.controller.removeCreatejs(cjs);
    }
}

// overrides
createjs.MovieClip = CreatejsMovieClip;
createjs.Sprite = CreatejsSprite;
createjs.Shape = CreatejsShape;
createjs.Bitmap = CreatejsBitmap;
createjs.Graphics = CreatejsGraphics;
createjs.Text = CreatejsText;
createjs.ButtonHelper = CreatejsButtonHelper;
createjs.ColorFilter = CreatejsColorFilter;
// install plugins
createjs.MotionGuidePlugin.install();

export { AnimateEvent, AnimateReachLabelEvent, CompositeOperations, Container, CreatejsBitmap, CreatejsButtonHelper, CreatejsColorFilter, CreatejsController, CreatejsEventManager, CreatejsGraphics, CreatejsMovieClip, CreatejsShape, CreatejsSprite, CreatejsText, PixiBitmap, PixiColorMatrixFilter, PixiGraphics, PixiMovieClip, PixiShape, PixiSprite, PixiText, PixiTextContainer, addInteractionListener, createPixiData, createjsInteractionEvents, findPixiData, getPixiColorMatrixFilter, loadAssetAsync, registerPixiData, removeAllInteractionListeners, removeInteractionListener, setMaskForPixi, syncToPixi };
//# sourceMappingURL=pixi-animate-container.esm.js.map
