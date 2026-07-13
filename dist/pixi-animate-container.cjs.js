/*!
 * pixi-animate-container - v3.0.0
 * 
 * @require pixi.js v^5.3.2
 * @author tawaship (makazu.mori@gmail.com)
 * @license MIT
 */

'use strict';

var PIXI = require('pixi.js');
var createjs = require('@tawaship/createjs-module');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var PIXI__namespace = /*#__PURE__*/_interopNamespaceDefault(PIXI);

/**
 * @ignore
 */
const DEG_TO_RAD = Math.PI / 180;

function createPixiData(pixi, regObj) {
    return {
        regObj,
        instance: pixi,
        reservedBlendMode: PIXI.BLEND_MODES.NORMAL,
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
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.filters.ColorMatrixFilter.html | PIXI.filters.ColorMatrixFilter}
 */
class PixiColorMatrixFilter extends PIXI.filters.ColorMatrixFilter {
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

exports.createjsInteractionEvents = void 0;
(function (createjsInteractionEvents) {
    createjsInteractionEvents["mousedown"] = "mousedown";
    createjsInteractionEvents["pressmove"] = "pressmove";
    createjsInteractionEvents["pressup"] = "pressup";
    createjsInteractionEvents["rollover"] = "rollover";
    createjsInteractionEvents["rollout"] = "rollout";
    createjsInteractionEvents["click"] = "click";
})(exports.createjsInteractionEvents || (exports.createjsInteractionEvents = {}));
class CreatejsEventManager {
    constructor(cjs) {
        this._downTarget = null;
        this._cjs = cjs;
        this._emitter = new PIXI.utils.EventEmitter();
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
            type: exports.createjsInteractionEvents.mousedown,
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
            type: exports.createjsInteractionEvents.pressmove,
            currentTarget: e.currentTarget.createjs,
            target: this._downTarget,
            rawX: e.data.global.x,
            rawY: e.data.global.y,
        };
        this._emitter.emit('pressmove', ev);
    }
    _onPointerUp(e) {
        const ev = {
            type: exports.createjsInteractionEvents.pressup,
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
            type: exports.createjsInteractionEvents.pressup,
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
            type: exports.createjsInteractionEvents.click,
            currentTarget: e.currentTarget.createjs,
            target: e.target.createjs,
            rawX: e.data.global.x,
            rawY: e.data.global.y,
        };
        this._emitter.emit('click', ev);
    }
    _onPointerOver(e) {
        const ev = {
            type: exports.createjsInteractionEvents.rollover,
            currentTarget: e.currentTarget.createjs,
            target: e.currentTarget.createjs,
            rawX: e.data.global.x,
            rawY: e.data.global.y,
        };
        this._emitter.emit('rollover', ev);
    }
    _onPointerOut(e) {
        const ev = {
            type: exports.createjsInteractionEvents.rollout,
            currentTarget: e.currentTarget.createjs,
            target: e.currentTarget.createjs,
            rawX: e.data.global.x,
            rawY: e.data.global.y,
        };
        this._emitter.emit('rollout', ev);
    }
    add(type, cb) {
        if (!(type in exports.createjsInteractionEvents)) {
            return;
        }
        this._emitter.on(type, cb);
        if (this._emitter.eventNames().length > 0) {
            this._cjs.pixi.interactive = true;
        }
    }
    remove(type, cb) {
        if (!(type in exports.createjsInteractionEvents)) {
            return;
        }
        this._emitter.off(type, cb);
        if (this._emitter.eventNames().length === 0) {
            this._cjs.pixi.interactive = false;
        }
    }
    removeAll(type) {
        if (type && !(type in exports.createjsInteractionEvents)) {
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
    if (!(type in exports.createjsInteractionEvents)) {
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
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Container.html | PIXI.Container}
 */
class PixiMovieClip extends PIXI.Container {
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
/**
 * The real createjs.MovieClip declares `labels` as the untyped `Object[]`,
 * but the oracle always populates it with `{ label, position }` entries -
 * this guard recovers that shape without widening to `any`.
 */
function isAnimateLabel(value) {
    return 'label' in value && 'position' in value;
}
class AnimateReachLabelEvent extends AnimateEvent {
    constructor(type, label) {
        super(type);
        this.data = label;
    }
}
exports.CompositeOperations = void 0;
(function (CompositeOperations) {
    CompositeOperations["Lighter"] = "lighter";
    CompositeOperations["Multiply"] = "multiply";
    CompositeOperations["Screen"] = "screen";
})(exports.CompositeOperations || (exports.CompositeOperations = {}));
/**
 * @ignore
 */
const blendModes = {
    [exports.CompositeOperations.Lighter]: PIXI.BLEND_MODES.ADD,
    [exports.CompositeOperations.Multiply]: PIXI.BLEND_MODES.MULTIPLY,
    [exports.CompositeOperations.Screen]: PIXI.BLEND_MODES.SCREEN,
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
 * The real `children: DisplayObject[]` (createjs's own DisplayObject) does
 * not carry the Pixi bridge - every child actually added through this
 * wrapper's own addChild/addChildAt is one of the CreatejsXxx classes, which
 * always satisfy ICreatejsBlendModeTarget too, but the type system needs this
 * checked explicitly to recover that guarantee.
 */
function isBlendModeChild(child) {
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
class CreatejsMovieClip extends createjs.MovieClip {
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
    // @ts-expect-error TS2611 - see the class-level comment on CreatejsShape for why a data-property-vs-accessor override is safe here
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
            const child = this.children[i];
            if (isBlendModeChild(child)) {
                child.updateBlendModeForPixi(mode);
            }
        }
    }
    // @ts-expect-error TS2611/TS2416 - see the class-level comment on CreatejsShape
    get compositeOperation() {
        return ensureData$5(this).compositeOperation;
    }
    // @ts-expect-error TS2611/TS2416 - see the class-level comment on CreatejsShape
    set compositeOperation(value) {
        const data = ensureData$5(this);
        if (data.compositeOperation === value)
            return;
        const blendMode = (value && blendModes[value]) || data.reservedBlendMode;
        this.updateBlendModeForPixi(blendMode);
        data.compositeOperation = value;
    }
    // @ts-expect-error TS2611/TS2416 - see the class-level comment on CreatejsShape
    get filters() {
        return ensureData$5(this).filters;
    }
    // @ts-expect-error TS2611/TS2416 - see the class-level comment on CreatejsShape
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
    // @ts-expect-error TS2611/TS2416 - see the class-level comment on CreatejsShape
    get mask() {
        return ensureData$5(this).mask;
    }
    // @ts-expect-error TS2611/TS2416 - see the class-level comment on CreatejsShape
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
    addChild(...children) {
        const data = ensureData$5(this);
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            data.subInstance.addChild(child.pixi);
            this._updateChildrenBlendModeForPixi(child);
        }
        return super.addChild(...children);
    }
    addChildAt(...childOrIndex) {
        const data = ensureData$5(this);
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
    removeChild(...children) {
        const data = ensureData$5(this);
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (isBlendModeChild(child)) {
                data.subInstance.removeChild(child.pixi);
            }
        }
        return super.removeChild(...children);
    }
    removeChildAt(...index) {
        const data = ensureData$5(this);
        for (let i = 0; i < index.length; i++) {
            data.subInstance.removeChildAt(index[i]);
        }
        return super.removeChildAt(...index);
    }
    removeAllChldren() {
        ensureData$5(this).subInstance.removeChildren();
        return super.removeAllChildren();
    }
    addEventListener(type, listener, useCapture) {
        if (typeof listener === 'function') {
            const res = super.addEventListener(type, listener, useCapture);
            addInteractionListener(this, type, listener);
            return res;
        }
        return super.addEventListener(type, listener, useCapture);
    }
    removeEventListener(type, listener, useCapture) {
        if (typeof listener === 'function') {
            super.removeEventListener(type, listener, useCapture);
            removeInteractionListener(this, type, listener);
            return;
        }
        super.removeEventListener(type, listener, useCapture);
    }
    removeAllEventListeners(type) {
        super.removeAllEventListeners(type);
        removeAllInteractionListeners(this, type);
    }
}
delete (CreatejsMovieClip.prototype.endAnimation);
delete (CreatejsMovieClip.prototype.reachLabel);

/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Sprite.html | PIXI.Sprite}
 */
class PixiSprite extends PIXI.Sprite {
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
 *
 * `mask` is a plain data property on the real createjs.DisplayObject, but
 * this wrapper must intercept get/set to route the assigned value into the
 * Pixi mirror. See the class-level comment on CreatejsShape for why a
 * prototype accessor safely intercepts it despite TS2611/TS2416.
 */
class CreatejsSprite extends createjs.Sprite {
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
        const baseTexture = PIXI.BaseTexture.from(frame.image);
        // frame.rect is a createjs.Rectangle (plain x/y/width/height), not a
        // PIXI.Rectangle - Texture needs the latter, so convert by value.
        const rect = new PIXI.Rectangle(frame.rect.x, frame.rect.y, frame.rect.width, frame.rect.height);
        const texture = new PIXI.Texture(baseTexture, rect);
        ensureData$4(this).instance.texture = texture;
    }
    // @ts-expect-error TS2611/TS2416 - see the class-level comment above
    get mask() {
        return ensureData$4(this).mask;
    }
    // @ts-expect-error TS2611/TS2416 - see the class-level comment above
    set mask(value) {
        setMaskForPixi(ensureData$4(this), value);
    }
    addEventListener(type, listener, useCapture) {
        if (typeof listener === 'function') {
            const res = super.addEventListener(type, listener, useCapture);
            addInteractionListener(this, type, listener);
            return res;
        }
        return super.addEventListener(type, listener, useCapture);
    }
    removeEventListener(type, listener, useCapture) {
        if (typeof listener === 'function') {
            super.removeEventListener(type, listener, useCapture);
            removeInteractionListener(this, type, listener);
            return;
        }
        super.removeEventListener(type, listener, useCapture);
    }
    removeAllEventListeners(type) {
        super.removeAllEventListeners(type);
        removeAllInteractionListeners(this, type);
    }
}

/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Container.html | PIXI.Container}
 */
class PixiShape extends PIXI.Container {
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
 *
 * `graphics` and `mask` are declared as plain data properties on the real
 * createjs.Shape/DisplayObject, but this wrapper must intercept get/set to
 * route the assigned value into the Pixi mirror. TypeScript's
 * accessor-over-property check (TS2611/TS2416) guards against real class-field
 * semantics; createjs.Shape is a legacy ES5 prototype constructor with no
 * class fields, so a prototype accessor correctly intercepts the plain
 * `this.graphics = x` / `this.mask = x` assignments the real base constructor
 * makes, with no runtime hazard - confirmed by the wrapper smoke and
 * verification-C suites, which exercise both assignments.
 */
class CreatejsShape extends createjs.Shape {
    constructor(graphics) {
        super(graphics);
        ensureData$3(this);
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
    // @ts-expect-error TS2611/TS2416 - see the class-level comment above
    get graphics() {
        return ensureData$3(this).graphics;
    }
    // @ts-expect-error TS2611/TS2416 - see the class-level comment above
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
    // @ts-expect-error TS2611/TS2416 - see the class-level comment above
    get mask() {
        return ensureData$3(this).mask;
    }
    // @ts-expect-error TS2611/TS2416 - see the class-level comment above
    set mask(value) {
        setMaskForPixi(ensureData$3(this), value);
    }
    addEventListener(type, listener, useCapture) {
        if (typeof listener === 'function') {
            const res = super.addEventListener(type, listener, useCapture);
            addInteractionListener(this, type, listener);
            return res;
        }
        return super.addEventListener(type, listener, useCapture);
    }
    removeEventListener(type, listener, useCapture) {
        if (typeof listener === 'function') {
            super.removeEventListener(type, listener, useCapture);
            removeInteractionListener(this, type, listener);
            return;
        }
        super.removeEventListener(type, listener, useCapture);
    }
    removeAllEventListeners(type) {
        super.removeAllEventListeners(type);
        removeAllInteractionListeners(this, type);
    }
}

/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Sprite.html | PIXI.Sprite}
 */
class PixiBitmap extends PIXI.Sprite {
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
 *
 * `mask` is a plain data property on the real createjs.DisplayObject, but
 * this wrapper must intercept get/set to route the assigned value into the
 * Pixi mirror. See the class-level comment on CreatejsShape for why a
 * prototype accessor safely intercepts it despite TS2611/TS2416.
 */
class CreatejsBitmap extends createjs.Bitmap {
    constructor(...args) {
        super(...args);
        ensureData$2(this);
    }
    initialize(...args) {
        const data = resetData$2(this);
        const res = super.initialize(...args);
        data.instance.texture = PIXI.Texture.from(this.image);
        return res;
    }
    get pixi() {
        return ensureData$2(this).instance;
    }
    updateBlendModeForPixi(mode) {
        ensureData$2(this).instance.blendMode = mode;
    }
    // @ts-expect-error TS2611/TS2416 - see the class-level comment above
    get mask() {
        return ensureData$2(this).mask;
    }
    // @ts-expect-error TS2611/TS2416 - see the class-level comment above
    set mask(value) {
        setMaskForPixi(ensureData$2(this), value);
    }
    addEventListener(type, listener, useCapture) {
        if (typeof listener === 'function') {
            const res = super.addEventListener(type, listener, useCapture);
            addInteractionListener(this, type, listener);
            return res;
        }
        return super.addEventListener(type, listener, useCapture);
    }
    removeEventListener(type, listener, useCapture) {
        if (typeof listener === 'function') {
            super.removeEventListener(type, listener, useCapture);
            removeInteractionListener(this, type, listener);
            return;
        }
        super.removeEventListener(type, listener, useCapture);
    }
    removeAllEventListeners(type) {
        super.removeAllEventListeners(type);
        removeAllInteractionListeners(this, type);
    }
}

/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Graphics.html | PIXI.Graphics}
 */
class PixiGraphics extends PIXI.Graphics {
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
    0: PIXI.LINE_CAP.BUTT,
    1: PIXI.LINE_CAP.ROUND,
    2: PIXI.LINE_CAP.SQUARE
};
/**
 * @ignore
 */
const LineJoin = {
    0: PIXI.LINE_JOIN.MITER,
    1: PIXI.LINE_JOIN.ROUND,
    2: PIXI.LINE_JOIN.BEVEL
};
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/Graphics.html | createjs.Graphics}
 *
 * createjs.Graphics is a command object, not a display object (no
 * EventDispatcher, no initialize) - a Shape holds it rather than it being
 * added to a container directly, so this wrapper does not implement
 * ICreatejsDisplayObject.
 */
class CreatejsGraphics extends createjs.Graphics {
    constructor(...args) {
        super(...args);
        const data = ensureData$1(this);
        data.instance.beginFill(0xFFEEEE, 1);
        data.strokeFill = 0;
        data.strokeAlpha = 1;
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
    //
    // Each overrides mirrors the command to the Pixi side, forwards it to the
    // real createjs.Graphics command list via super, then returns `this` so
    // the wrapper (not the real Graphics's own return type) keeps flowing
    // through chained calls (e.g. `graphics.f('#000').dr(0, 0, 20, 20)`).
    moveTo(x, y) {
        const pixi = ensureData$1(this).instance;
        if (pixi.clone().endFill().containsPoint({ x: x, y: y })) {
            pixi.beginHole();
        }
        else {
            pixi.endHole();
        }
        pixi.moveTo(x, y);
        super.moveTo(x, y);
        return this;
    }
    mt(x, y) {
        return this.moveTo(x, y);
    }
    lineTo(x, y) {
        ensureData$1(this).instance.lineTo(x, y);
        super.lineTo(x, y);
        return this;
    }
    lt(x, y) {
        return this.lineTo(x, y);
    }
    arcTo(x1, y1, x2, y2, radius) {
        ensureData$1(this).instance.arcTo(x1, y1, x2, y2, radius);
        super.arcTo(x1, y1, x2, y2, radius);
        return this;
    }
    at(x1, y1, x2, y2, radius) {
        return this.arcTo(x1, y1, x2, y2, radius);
    }
    arc(x, y, radius, startAngle, endAngle, anticlockwise) {
        ensureData$1(this).instance.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        super.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        return this;
    }
    a(x, y, radius, startAngle, endAngle, anticlockwise) {
        return this.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    }
    quadraticCurveTo(cpx, cpy, x, y) {
        ensureData$1(this).instance.quadraticCurveTo(cpx, cpy, x, y);
        super.quadraticCurveTo(cpx, cpy, x, y);
        return this;
    }
    qt(cpx, cpy, x, y) {
        return this.quadraticCurveTo(cpx, cpy, x, y);
    }
    curveTo(cpx, cpy, x, y) {
        return this.quadraticCurveTo(cpx, cpy, x, y);
    }
    bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
        ensureData$1(this).instance.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
        super.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
        return this;
    }
    bt(cp1x, cp1y, cp2x, cp2y, x, y) {
        return this.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    }
    rect(x, y, w, h) {
        ensureData$1(this).instance.drawRect(x, y, w, h);
        super.rect(x, y, w, h);
        return this;
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
        super.closePath();
        return this;
    }
    cp() {
        return this.closePath();
    }
    clear() {
        ensureData$1(this).instance.clear();
        super.clear();
        return this;
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
        super.beginFill(color);
        return this;
    }
    f(color) {
        return this.beginFill(color);
    }
    endFill() {
        ensureData$1(this).instance.endFill();
        super.endFill();
        return this;
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
        super.setStrokeStyle(thickness, caps, joints, miterLimit, ignoreScale);
        return this;
    }
    ss(thickness, caps, joints, miterLimit, ignoreScale) {
        return this.setStrokeStyle(thickness, caps, joints, miterLimit, ignoreScale);
    }
    beginStroke(color) {
        const data = ensureData$1(this);
        const c = this._parseColor(color);
        data.strokeFill = c.color;
        data.strokeAlpha = c.alpha;
        super.beginStroke(color);
        return this;
    }
    s(color) {
        return this.beginStroke(color);
    }
    drawRoundRect(x, y, w, h, radius) {
        ensureData$1(this).instance.drawRoundedRect(x, y, w, h, radius);
        super.drawRoundRect(x, y, w, h, radius);
        return this;
    }
    rr(x, y, w, h, radius) {
        return this.drawRoundRect(x, y, w, h, radius);
    }
    drawCircle(x, y, radius) {
        ensureData$1(this).instance.drawCircle(x, y, radius);
        super.drawCircle(x, y, radius);
        return this;
    }
    dc(x, y, radius) {
        return this.drawCircle(x, y, radius);
    }
    drawEllipse(x, y, w, h) {
        ensureData$1(this).instance.drawEllipse(x, y, w, h);
        super.drawEllipse(x, y, w, h);
        return this;
    }
    de(x, y, w, h) {
        return this.drawEllipse(x, y, w, h);
    }
    drawPolyStar(x, y, radius, sides, pointSize, angle) {
        ensureData$1(this).instance.drawRegularPolygon(x, y, radius, sides, angle * DEG_TO_RAD);
        super.drawPolyStar(x, y, radius, sides, pointSize, angle);
        return this;
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
}

/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Text.html | PIXI.Text}
 */
class PixiText extends PIXI.Text {
}
/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Container.html | PIXI.Container}
 */
class PixiTextContainer extends PIXI.Container {
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
 *
 * `text`/`font`/`color`/`textAlign`/`lineHeight`/`lineWidth`/`mask` are all
 * plain data properties on the real createjs.Text/DisplayObject, but this
 * wrapper must intercept get/set on each to route the assigned value into the
 * Pixi mirror. See the class-level comment on CreatejsShape for why a
 * prototype accessor safely intercepts them despite TS2611/TS2416.
 */
class CreatejsText extends createjs.Text {
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
    // @ts-expect-error TS2611 - see the class-level comment above
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
    // @ts-expect-error TS2611 - see the class-level comment above
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
    // @ts-expect-error TS2611 - see the class-level comment above
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
    // @ts-expect-error TS2611 - see the class-level comment above
    get textAlign() {
        return ensureData(this).textAlign;
    }
    set textAlign(align) {
        const data = ensureData(this);
        data.instance.text.style.align = align;
        this._align(align);
        data.textAlign = align;
    }
    // @ts-expect-error TS2611 - see the class-level comment above
    get lineHeight() {
        return ensureData(this).lineHeight;
    }
    set lineHeight(height) {
        const data = ensureData(this);
        data.instance.text.style.lineHeight = height;
        data.lineHeight = height;
    }
    // @ts-expect-error TS2611 - see the class-level comment above
    get lineWidth() {
        return ensureData(this).lineWidth;
    }
    set lineWidth(width) {
        const data = ensureData(this);
        data.instance.text.style.wordWrapWidth = width;
        this._align(data.textAlign);
        data.lineWidth = width;
    }
    // @ts-expect-error TS2611/TS2416 - see the class-level comment above
    get mask() {
        return ensureData(this).mask;
    }
    // @ts-expect-error TS2611/TS2416 - see the class-level comment above
    set mask(value) {
        setMaskForPixi(ensureData(this), value);
    }
    addEventListener(type, listener, useCapture) {
        if (typeof listener === 'function') {
            const res = super.addEventListener(type, listener, useCapture);
            addInteractionListener(this, type, listener);
            return res;
        }
        return super.addEventListener(type, listener, useCapture);
    }
    removeEventListener(type, listener, useCapture) {
        if (typeof listener === 'function') {
            super.removeEventListener(type, listener, useCapture);
            removeInteractionListener(this, type, listener);
            return;
        }
        super.removeEventListener(type, listener, useCapture);
    }
    removeAllEventListeners(type) {
        super.removeAllEventListeners(type);
        removeAllInteractionListeners(this, type);
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
                manifest.src = PIXI__namespace.utils.url.resolve(target.basepath, manifest.src);
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
class Container extends PIXI.Container {
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

exports.AnimateEvent = AnimateEvent;
exports.AnimateReachLabelEvent = AnimateReachLabelEvent;
exports.Container = Container;
exports.CreatejsBitmap = CreatejsBitmap;
exports.CreatejsButtonHelper = CreatejsButtonHelper;
exports.CreatejsColorFilter = CreatejsColorFilter;
exports.CreatejsController = CreatejsController;
exports.CreatejsEventManager = CreatejsEventManager;
exports.CreatejsGraphics = CreatejsGraphics;
exports.CreatejsMovieClip = CreatejsMovieClip;
exports.CreatejsShape = CreatejsShape;
exports.CreatejsSprite = CreatejsSprite;
exports.CreatejsText = CreatejsText;
exports.PixiBitmap = PixiBitmap;
exports.PixiColorMatrixFilter = PixiColorMatrixFilter;
exports.PixiGraphics = PixiGraphics;
exports.PixiMovieClip = PixiMovieClip;
exports.PixiShape = PixiShape;
exports.PixiSprite = PixiSprite;
exports.PixiText = PixiText;
exports.PixiTextContainer = PixiTextContainer;
exports.addInteractionListener = addInteractionListener;
exports.createPixiData = createPixiData;
exports.findPixiData = findPixiData;
exports.getPixiColorMatrixFilter = getPixiColorMatrixFilter;
exports.loadAssetAsync = loadAssetAsync;
exports.registerPixiData = registerPixiData;
exports.removeAllInteractionListeners = removeAllInteractionListeners;
exports.removeInteractionListener = removeInteractionListener;
exports.setMaskForPixi = setMaskForPixi;
exports.syncToPixi = syncToPixi;
//# sourceMappingURL=pixi-animate-container.cjs.js.map
