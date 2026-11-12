/*!
 * pixi-animate-container - v3.1.0
 * 
 * @require pixi.js v^5.3.2
 * @author tawaship (makazu.mori@gmail.com)
 * @license MIT
 */

import * as PIXI from 'pixi.js';
import { Transform, BLEND_MODES, filters, utils, Container as Container$1, BaseTexture, Rectangle, Texture, Sprite, Matrix, MIPMAP_MODES, WRAP_MODES, LINE_CAP, LINE_JOIN, Graphics, Text } from 'pixi.js';
import createjs from '@tawaship/createjs-module';
export { default as createjs } from '@tawaship/createjs-module';

/**
 * @ignore
 */
const DEG_TO_RAD = Math.PI / 180;

/**
 * @ignore
 */
const RAD_TO_DEG = 180 / Math.PI;
/**
 * A Pixi Transform whose rotation and skew follow createjs.
 *
 * - The createjs values (degrees) are kept as written, so that the matrix is
 *   built from exactly them (a degrees -> radians -> degrees round trip would
 *   not give them back)
 * - Pixi's own fields carry the same values in Pixi's terms (rotation in
 *   radians, skew.x = -skewX, skew.y = skewY, all in radians), so code that
 *   uses the Pixi node sees the values it always saw. A write made through
 *   Pixi (node.rotation, node.skew) is converted to degrees and used
 * - The local matrix is built the createjs way (Matrix2D.appendTransform):
 *   skew x (rotation x scale), i.e. the object is rotated first and then
 *   skewed. Pixi composes them the other way round (skewed, then rotated as
 *   a whole); the two agree only while the rotation is 0 or skewX equals
 *   skewY. A rotation that is a multiple of 360 is taken as exactly none, as
 *   createjs does
 */
class CjsTransform extends Transform {
    constructor() {
        super(...arguments);
        /** createjs rotation, in degrees */
        this.degRotation = 0;
        /** createjs skewX, in degrees */
        this.degSkewX = 0;
        /** createjs skewY, in degrees */
        this.degSkewY = 0;
        /** The radians last written to the Pixi fields for the values above */
        this._radRotation = 0;
        this._radSkewX = 0;
        this._radSkewY = 0;
    }
    /**
     * Writes the createjs rotation (degrees). Nothing is computed when the
     * node already has it (tweens write every property they have on every
     * frame, value changed or not).
     */
    setRotation(degrees) {
        if (degrees === this.degRotation && this._rotation === this._radRotation) {
            return;
        }
        this.degRotation = degrees;
        this._radRotation = degrees * DEG_TO_RAD;
        this._rotation = this._radRotation;
        this.updateSkew();
    }
    /**
     * Writes the createjs skewX (degrees). See setRotation.
     */
    setSkewX(degrees) {
        if (degrees === this.degSkewX && this.skew.x === this._radSkewX) {
            return;
        }
        this.degSkewX = degrees;
        this._radSkewX = -degrees * DEG_TO_RAD;
        if (this.skew.x !== this._radSkewX) {
            // Setting the point calls updateSkew when the value changes
            this.skew.x = this._radSkewX;
        }
        else {
            this.updateSkew();
        }
    }
    /**
     * Writes the createjs skewY (degrees). See setRotation.
     */
    setSkewY(degrees) {
        if (degrees === this.degSkewY && this.skew.y === this._radSkewY) {
            return;
        }
        this.degSkewY = degrees;
        this._radSkewY = degrees * DEG_TO_RAD;
        if (this.skew.y !== this._radSkewY) {
            this.skew.y = this._radSkewY;
        }
        else {
            this.updateSkew();
        }
    }
    updateSkew() {
        // Values written through Pixi are converted to degrees
        if (this._rotation !== this._radRotation) {
            this._radRotation = this._rotation;
            this.degRotation = this._rotation * RAD_TO_DEG;
        }
        if (this.skew.x !== this._radSkewX) {
            this._radSkewX = this.skew.x;
            this.degSkewX = -this.skew.x * RAD_TO_DEG;
        }
        if (this.skew.y !== this._radSkewY) {
            this._radSkewY = this.skew.y;
            this.degSkewY = this.skew.y * RAD_TO_DEG;
        }
        // createjs Matrix2D.appendTransform: (skew) x (rotation, scale)
        let cos = 1;
        let sin = 0;
        if (this.degRotation % 360) {
            const r = this.degRotation * DEG_TO_RAD;
            cos = Math.cos(r);
            sin = Math.sin(r);
        }
        if (this.degSkewX || this.degSkewY) {
            const skewX = this.degSkewX * DEG_TO_RAD;
            const skewY = this.degSkewY * DEG_TO_RAD;
            const a1 = Math.cos(skewY);
            const b1 = Math.sin(skewY);
            const c1 = -Math.sin(skewX);
            const d1 = Math.cos(skewX);
            this._cx = a1 * cos + c1 * sin;
            this._sx = b1 * cos + d1 * sin;
            this._cy = a1 * -sin + c1 * cos;
            this._sy = b1 * -sin + d1 * cos;
        }
        else {
            this._cx = cos;
            this._sx = sin;
            this._cy = -sin;
            this._sy = cos;
        }
        this._localID++;
    }
}

/**
 * Creates the wrapper data of a Pixi node and gives the node a
 * {@link CjsTransform}. `anchor` is where createjs's regX / regY go when it
 * is not the node's pivot (a Sprite's anchor); the pivot is read after the
 * transform is replaced, as it belongs to the transform.
 */
function createPixiData(pixi, anchor) {
    const transform = new CjsTransform();
    pixi.transform = transform;
    return {
        regObj: anchor || pixi.pivot,
        instance: pixi,
        transform,
        reservedBlendMode: BLEND_MODES.NORMAL,
        compositeOperation: null,
        mask: null,
        colorFilters: null,
        cjsX: 0,
        cjsY: 0,
        cjsScaleX: 1,
        cjsScaleY: 1,
        cjsRotation: 0,
        cjsSkewX: 0,
        cjsSkewY: 0,
        cjsRegX: 0,
        cjsRegY: 0,
        cjsVisible: true,
        cjsAlpha: 1
    };
}
/**
 * The Pixi blend modes of the createjs compositeOperation values Pixi can draw.
 *
 * @ignore
 */
const BLEND_MODE_OF_OPERATION = {
    'source-over': BLEND_MODES.NORMAL,
    'lighter': BLEND_MODES.ADD,
    'multiply': BLEND_MODES.MULTIPLY,
    'screen': BLEND_MODES.SCREEN
};
/**
 * The blend mode a node draws its content with, as createjs draws it: its own
 * compositeOperation, or else the one in effect where its parent is drawn
 * (`reservedBlendMode`, passed down by the parent). createjs sets a node's
 * compositeOperation on the context for the draw of the node and its whole
 * subtree (DisplayObject.updateContext, inside save / restore), so a
 * descendant's own value replaces it for that descendant's subtree only.
 * A value Pixi cannot draw is drawn as the inherited one.
 */
function blendModeForPixi(data) {
    const operation = data.compositeOperation;
    if (operation && Object.prototype.hasOwnProperty.call(BLEND_MODE_OF_OPERATION, operation)) {
        return BLEND_MODE_OF_OPERATION[operation];
    }
    return data.reservedBlendMode;
}
/**
 * External store keyed by the createjs instance. Keyed by the object itself,
 * a lookup never finds the data of a prototype: published symbols use a
 * createjs instance as their prototype (`p = new cjs.MovieClip()`), which
 * has wrapper data of its own.
 * Each class module additionally keeps its own store with a more concrete data type;
 * this one serves the type-agnostic consumers (sync walk, mask helper).
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
 * The display properties every wrapper display object class gets as
 * accessors (see defineDisplayAccessors). One list for all classes, so that
 * no class can miss one; test/harness checks that every class has them.
 */
const DISPLAY_ACCESSOR_NAMES = ['x', 'y', 'scaleX', 'scaleY', 'rotation', 'skewX', 'skewY', 'regX', 'regY', 'visible', 'alpha'];
/**
 * Makes the display properties of a wrapper display object class write
 * through to its Pixi node at once: every write on the createjs side
 * (timeline, frame scripts, application code) reaches the Pixi node when it
 * is made, so Pixi draws the createjs state whenever it draws, with no walk
 * to copy it over.
 *
 * - The createjs-side value is kept in the wrapper data and read back from
 *   there. A value written to the Pixi node (`instance.pixi.x = 100`) stays
 *   until the createjs side writes that property again, and the createjs
 *   side still reads its own value (AC2's behavior)
 * - Every write is passed to the Pixi node, even with the value it had, so
 *   that a tween writing the property puts a Pixi-side write back (Pixi's
 *   setters compare the value themselves)
 * - The data is looked up (and made the first time) by `getData`: the
 *   createjs constructor writes these properties inside `super()`, before
 *   the wrapper's constructor body runs, and the first write creates the data
 * - `_off` is not mapped: createjs draws whatever is on its display list
 *   (`_off` only keeps the timeline from placing an object, and the display
 *   list is mirrored to Pixi). `renderable` is left to Pixi, which turns it
 *   off for nodes used as masks.
 *
 * Pixi declares these as plain fields of the createjs-side classes' types,
 * which an accessor in a subclass body cannot override (TS2611), so they are
 * defined on the prototype; they are enumerable, so that for-in on an
 * instance still lists them.
 */
function defineDisplayAccessors(proto, getData) {
    function define(name, get, set) {
        Object.defineProperty(proto, name, { configurable: true, enumerable: true, get, set });
    }
    define('x', function () { return getData(this).cjsX; }, function (value) {
        const data = getData(this);
        data.cjsX = value;
        data.transform.position.x = value;
    });
    define('y', function () { return getData(this).cjsY; }, function (value) {
        const data = getData(this);
        data.cjsY = value;
        data.transform.position.y = value;
    });
    define('scaleX', function () { return getData(this).cjsScaleX; }, function (value) {
        const data = getData(this);
        data.cjsScaleX = value;
        data.transform.scale.x = value;
    });
    define('scaleY', function () { return getData(this).cjsScaleY; }, function (value) {
        const data = getData(this);
        data.cjsScaleY = value;
        data.transform.scale.y = value;
    });
    define('rotation', function () { return getData(this).cjsRotation; }, function (value) {
        const data = getData(this);
        data.cjsRotation = value;
        data.transform.setRotation(value);
    });
    define('skewX', function () { return getData(this).cjsSkewX; }, function (value) {
        const data = getData(this);
        data.cjsSkewX = value;
        data.transform.setSkewX(value);
    });
    define('skewY', function () { return getData(this).cjsSkewY; }, function (value) {
        const data = getData(this);
        data.cjsSkewY = value;
        data.transform.setSkewY(value);
    });
    define('regX', function () { return getData(this).cjsRegX; }, function (value) {
        const data = getData(this);
        data.cjsRegX = value;
        data.regObj.x = value;
    });
    define('regY', function () { return getData(this).cjsRegY; }, function (value) {
        const data = getData(this);
        data.cjsRegY = value;
        data.regObj.y = value;
    });
    define('visible', function () { return getData(this).cjsVisible; }, function (value) {
        const data = getData(this);
        data.cjsVisible = value;
        data.instance.visible = !!value;
    });
    define('alpha', function () { return getData(this).cjsAlpha; }, function (value) {
        const data = getData(this);
        data.cjsAlpha = value;
        data.instance.alpha = value;
    });
}
/**
 * Roots (tops of createjs trees) whose timelines moved outside the driver,
 * so that the clips under them have to be settled before Pixi draws
 * (CreatejsController.flushForRender). createjs settles synched / single
 * frame clips and clips waiting to start over when it draws (MovieClip.draw
 * -> _updateState); the driver does that after every frame it plays, but a
 * goto made by the application between frames, or a clip added between
 * frames, would otherwise be drawn unsettled until the next frame is played.
 */
const settleMarks = new WeakSet();
/**
 * @ignore
 */
let driveDepth = 0;
/**
 * Brackets the driver's own work (playing frames, settling): the
 * display-list churn createjs makes while resolving a frame is not an
 * application change and marks nothing.
 */
function beginDrive() {
    driveDepth++;
}
function endDrive() {
    driveDepth--;
}
function isDriving() {
    return driveDepth > 0;
}
/**
 * Marks the tree `node` belongs to as needing to be settled before Pixi draws.
 */
function markForSettle(node) {
    let top = node;
    while (top.parent) {
        top = top.parent;
    }
    settleMarks.add(top);
}
/**
 * Whether `root` was marked since the last call, clearing the mark.
 */
function takeSettleMark(root) {
    if (!settleMarks.has(root)) {
        return false;
    }
    settleMarks.delete(root);
    return true;
}
/**
 * Shared implementation of the mask setter (push layer).
 *
 * createjs clips with a mask only while its `graphics` is set (the Shape's
 * graphics setter keeps the Pixi mask in step with that), and never draws a
 * mask shape that is on no display list. The mask's node is kept in the
 * masked node's parent node, so that it is transformed in the same space as
 * createjs transforms the mask. When no masked node uses a mask any more and
 * the mask shape is on no createjs display list, its node is taken out of
 * the Pixi tree: Pixi makes a node drawable again when it stops being a mask.
 */
function setMaskForPixi(data, value) {
    const old = data.mask;
    const instance = data.instance;
    if (old && old !== value) {
        const index = old.masked.indexOf(instance);
        if (index >= 0) {
            old.masked.splice(index, 1);
        }
        instance.mask = null;
        if (old.masked.length) {
            // still masking other nodes: Pixi's unmasking just made it drawable
            old.pixi.renderable = false;
        }
        else if (!old.parent && old.pixi.parent) {
            old.pixi.parent.removeChild(old.pixi);
        }
    }
    if (value) {
        if (value.masked.indexOf(instance) < 0) {
            value.masked.push(instance);
        }
        instance.mask = value.graphics ? value.pixi : null;
        if (instance.parent && value.pixi.parent !== instance.parent) {
            instance.parent.addChild(value.pixi);
        }
        instance.once('added', () => {
            if (data.mask === value && instance.parent && value.pixi.parent !== instance.parent) {
                instance.parent.addChild(value.pixi);
            }
        });
    }
    else {
        instance.mask = null;
    }
    data.mask = value;
}
function syncColorFilterPairs(colorFilters) {
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
/**
 * Copies the color filter scalars of a whole createjs tree (children and
 * mask references) into their Pixi filters' matrices. The display properties
 * need no copying (they write through at once, see defineDisplayAccessors).
 */
function syncToPixi(root) {
    const data = pixiDataStore.get(root);
    if (data) {
        if (data.colorFilters) {
            syncColorFilterPairs(data.colorFilters);
        }
        if (data.mask) {
            syncToPixi(data.mask);
        }
    }
    const children = root.children;
    if (children) {
        for (let i = 0; i < children.length; i++) {
            syncToPixi(children[i]);
        }
    }
}

/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.filters.ColorMatrixFilter.html | PIXI.filters.ColorMatrixFilter}
 *
 * Its matrix follows the 8 scalars of its createjs ColorFilter. They are
 * plain data properties (tweens write them), so they are copied over when
 * the filter is about to be drawn (see PixiMovieClip.updateTransform) and
 * when `matrix` is read.
 */
class PixiColorMatrixFilter extends filters.ColorMatrixFilter {
    constructor(cjs) {
        super();
        this._createjs = cjs;
        this.syncFromCreatejs();
    }
    get createjs() {
        return this._createjs;
    }
    // pixi.js declares `matrix` as a plain field of ColorMatrixFilter, while it
    // is an accessor on its prototype (get/set of uniforms.m); TypeScript's
    // accessor-over-property check (TS2611) only sees the declaration.
    // @ts-expect-error TS2611 - see above
    get matrix() {
        this.syncFromCreatejs();
        return this.uniforms.m;
    }
    set matrix(value) {
        this.uniforms.m = value;
    }
    /**
     * Copies the scalars of the createjs ColorFilter into the matrix.
     */
    syncFromCreatejs() {
        const filter = this._createjs;
        if (!filter) {
            // inside the Pixi constructor
            return;
        }
        const matrix = this.uniforms.m;
        matrix[0] = filter.redMultiplier;
        matrix[6] = filter.greenMultiplier;
        matrix[12] = filter.blueMultiplier;
        matrix[18] = filter.alphaMultiplier;
        matrix[4] = filter.redOffset / 255;
        matrix[9] = filter.greenOffset / 255;
        matrix[14] = filter.blueOffset / 255;
        matrix[19] = filter.alphaOffset / 255;
    }
}
/**
 * External store for the paired Pixi filter, so that the createjs instance
 * carries no wrapper metadata (its own properties are exactly the original 8
 * scalars; tween's for-in sees the same surface as with the original createjs).
 */
const pixiFilterStore = new WeakMap();
function getPixiColorMatrixFilter(filter) {
    let pixi = pixiFilterStore.get(filter);
    if (!pixi) {
        pixi = new PixiColorMatrixFilter(filter);
        pixiFilterStore.set(filter, pixi);
    }
    return pixi;
}
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/ColorFilter.html | createjs.ColorFilter}
 *
 * The 8 scalars (redMultiplier etc.) are plain data properties; the paired Pixi
 * filter copies them into its matrix before it is drawn and when its matrix is
 * read (see PixiColorMatrixFilter), not by accessors.
 */
class CreatejsColorFilter extends createjs.ColorFilter {
    constructor(...args) {
        super(...args);
    }
    get pixi() {
        return getPixiColorMatrixFilter(this);
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
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Container.html | PIXI.Container}
 */
class PixiMovieClip extends Container$1 {
    constructor(cjs) {
        super();
        this._filterContainer = null;
        this._colorFilters = null;
        this._createjs = cjs;
    }
    /**
     * Sets the color filters whose matrices follow their createjs ColorFilters
     * (see updateTransform).
     *
     * @ignore
     */
    setColorFiltersForPixi(value) {
        this._colorFilters = value;
    }
    /**
     * Copies the color filter scalars (plain data properties that tweens write)
     * into the filters' matrices, then updates the transforms as usual. Pixi
     * calls this on every node it is about to draw, so the filters drawn always
     * carry the current createjs values, and a node no longer drawn (or
     * discarded) costs nothing.
     */
    updateTransform() {
        const colorFilters = this._colorFilters;
        if (colorFilters) {
            for (let i = 0; i < colorFilters.length; i++) {
                colorFilters[i].syncFromCreatejs();
            }
        }
        super.updateTransform();
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
var CompositeOperations;
(function (CompositeOperations) {
    CompositeOperations["Lighter"] = "lighter";
    CompositeOperations["Multiply"] = "multiply";
    CompositeOperations["Screen"] = "screen";
})(CompositeOperations || (CompositeOperations = {}));
/**
 * @ignore
 */
function createPixiMovieClipData(cjs) {
    const pixi = new PixiMovieClip(cjs);
    return Object.assign(createPixiData(pixi, null), {
        subInstance: pixi,
        listenFrameEvents: {},
        filters: null
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
    /**
     * Settles the tree for drawing without playing on — what createjs does to
     * each clip when the stage draws (MovieClip.draw -> _updateState): synched
     * and single-frame clips are placed at the frame their parent gives. A
     * clip waiting to start over (an independent clip reset when its parent
     * placed it again, _rawPosition -1) is shown at its first frame the way
     * createjs shows a new clip (_renderFirstFrame: no frame script, the
     * playhead left as it was), so that it starts on the next frame played,
     * as in the Animate template, where createjs draws only after a tick (a
     * draw's _updateState would start it at once, a frame ahead). Children
     * are settled after their parent, in the resolve phase's order. Used
     * right before Pixi draws a tree whose timelines moved between frames
     * (CreatejsController.flushForRender).
     */
    settleForPixi() {
        if (this.mode !== createjs.MovieClip.INDEPENDENT) {
            this._updateState();
        }
        else if (this._rawPosition === -1) {
            this._renderFirstFrame();
        }
        const children = this.children.slice();
        for (let i = children.length - 1; i >= 0; i--) {
            const child = children[i];
            if (child instanceof CreatejsMovieClip) {
                child.settleForPixi();
            }
        }
    }
    /**
     * Delegated to the original; the tree is marked so that it is settled and
     * synced before Pixi draws (a goto made between frames is drawn the way
     * createjs would draw it, without waiting for the next frame).
     */
    gotoAndPlay(positionOrLabel) {
        super.gotoAndPlay(positionOrLabel);
        markForSettle(this);
    }
    /**
     * See {@link CreatejsMovieClip.gotoAndPlay}.
     */
    gotoAndStop(positionOrLabel) {
        super.gotoAndStop(positionOrLabel);
        markForSettle(this);
    }
    updateBlendModeForPixi(mode) {
        const data = ensureData$5(this);
        // The subtree already draws with what this mode gives: a clip passes its
        // mode on whenever it changes, and to each child it is given
        if (data.reservedBlendMode === mode) {
            return;
        }
        data.reservedBlendMode = mode;
        this._passBlendModeForPixi(data);
    }
    /**
     * Gives the children the blend mode this clip draws them with.
     */
    _passBlendModeForPixi(data) {
        const children = this.children;
        if (!children) {
            // inside the createjs constructor (DisplayObject writes
            // compositeOperation before Container makes the child list)
            return;
        }
        const mode = blendModeForPixi(data);
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (isBlendModeChild(child)) {
                child.updateBlendModeForPixi(mode);
            }
        }
    }
    // @ts-expect-error TS2611/TS2416 - see the class-level comment on CreatejsShape
    get compositeOperation() {
        return ensureData$5(this).compositeOperation;
    }
    set compositeOperation(value) {
        const data = ensureData$5(this);
        const before = blendModeForPixi(data);
        data.compositeOperation = value;
        // timelines write the value on every frame they place the clip
        if (blendModeForPixi(data) !== before) {
            this._passBlendModeForPixi(data);
        }
    }
    // @ts-expect-error TS2611/TS2416 - see the class-level comment on CreatejsShape
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
        data.instance.setColorFiltersForPixi(list.length ? list : null);
        data.colorFilters = pairs.length ? pairs : null;
        data.filters = value;
    }
    // @ts-expect-error TS2611/TS2416 - see the class-level comment on CreatejsShape
    get mask() {
        return ensureData$5(this).mask;
    }
    set mask(value) {
        setMaskForPixi(ensureData$5(this), value);
    }
    /**
     * Gives a child being added the blend mode this clip draws it with. A child
     * this clip already has (timelines place their children again on every
     * frame) has it already: this clip passes its mode to all its children
     * whenever the mode changes.
     */
    _updateChildrenBlendModeForPixi(child) {
        if (child.parent === this) {
            return;
        }
        child.updateBlendModeForPixi(blendModeForPixi(ensureData$5(this)));
    }
    addChild(...children) {
        const data = ensureData$5(this);
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            data.subInstance.addChild(child.pixi);
            this._updateChildrenBlendModeForPixi(child);
        }
        const res = super.addChild(...children);
        // An application adding children between frames (a clip added this way
        // has to be shown at its first frame before the next frame is played)
        if (!isDriving()) {
            markForSettle(this);
        }
        return res;
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
        const res = super.addChildAt(...childOrIndex);
        // See addChild
        if (!isDriving()) {
            markForSettle(this);
        }
        return res;
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
    removeAllChildren() {
        ensureData$5(this).subInstance.removeChildren();
        super.removeAllChildren();
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
    off(type, listener, useCapture) {
        if (typeof listener === 'function') {
            this.removeEventListener(type, listener, useCapture);
            return;
        }
        this.removeEventListener(type, listener, useCapture);
    }
    removeAllEventListeners(type) {
        super.removeAllEventListeners(type);
        removeAllInteractionListeners(this, type);
    }
}
// x / y / scale / rotation / skew / reg / visible / alpha write through to the Pixi node (see defineDisplayAccessors)
defineDisplayAccessors(CreatejsMovieClip.prototype, ensureData$5);
delete (CreatejsMovieClip.prototype.endAnimation);
delete (CreatejsMovieClip.prototype.reachLabel);

/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Sprite.html | PIXI.Sprite}
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
        const data = ensureData$4(this);
        data.reservedBlendMode = mode;
        data.instance.blendMode = blendModeForPixi(data);
    }
    // @ts-expect-error TS2611/TS2416 - a plain data property on the real
    // createjs.DisplayObject; intercepted here to draw it (see the class-level
    // comment on CreatejsShape)
    get compositeOperation() {
        return ensureData$4(this).compositeOperation;
    }
    set compositeOperation(value) {
        const data = ensureData$4(this);
        data.compositeOperation = value;
        data.instance.blendMode = blendModeForPixi(data);
    }
    gotoAndStop(frameOrAnimation) {
        super.gotoAndStop(frameOrAnimation);
        const frame = this.spriteSheet.getFrame(this.currentFrame);
        const baseTexture = BaseTexture.from(frame.image);
        // frame.rect is a createjs.Rectangle (plain x/y/width/height), not a
        // PIXI.Rectangle - Texture needs the latter, so convert by value.
        const rect = new Rectangle(frame.rect.x, frame.rect.y, frame.rect.width, frame.rect.height);
        const texture = new Texture(baseTexture, rect);
        ensureData$4(this).instance.texture = texture;
    }
    // @ts-expect-error TS2611/TS2416 - see the class-level comment above
    get mask() {
        return ensureData$4(this).mask;
    }
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
    off(type, listener, useCapture) {
        if (typeof listener === 'function') {
            this.removeEventListener(type, listener, useCapture);
            return;
        }
        this.removeEventListener(type, listener, useCapture);
    }
    removeAllEventListeners(type) {
        super.removeAllEventListeners(type);
        removeAllInteractionListeners(this, type);
    }
}
// x / y / scale / rotation / skew / reg / visible / alpha write through to the Pixi node (see defineDisplayAccessors)
defineDisplayAccessors(CreatejsSprite.prototype, ensureData$4);

/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Container.html | PIXI.Container}
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
function createPixiShapeData(cjs) {
    const pixi = new PixiShape(cjs);
    return Object.assign(createPixiData(pixi, null), {
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
        (_a = data.graphics) === null || _a === void 0 ? void 0 : _a.updateBlendModeForPixi(blendModeForPixi(data));
    }
    // @ts-expect-error TS2611/TS2416 - a plain data property on the real
    // createjs.DisplayObject; intercepted here to draw it (see the class-level
    // comment on CreatejsShape)
    get compositeOperation() {
        return ensureData$3(this).compositeOperation;
    }
    set compositeOperation(value) {
        var _a;
        const data = ensureData$3(this);
        data.compositeOperation = value;
        (_a = data.graphics) === null || _a === void 0 ? void 0 : _a.updateBlendModeForPixi(blendModeForPixi(data));
    }
    // @ts-expect-error TS2611/TS2416 - see the class-level comment above
    get graphics() {
        return ensureData$3(this).graphics;
    }
    set graphics(value) {
        const data = ensureData$3(this);
        // The node holds the current graphics only: createjs draws
        // this.graphics, never one it had before
        data.instance.removeChildren();
        if (data.masked.length) {
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
            value.updateBlendModeForPixi(blendModeForPixi(data));
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
    off(type, listener, useCapture) {
        if (typeof listener === 'function') {
            this.removeEventListener(type, listener, useCapture);
            return;
        }
        this.removeEventListener(type, listener, useCapture);
    }
    removeAllEventListeners(type) {
        super.removeAllEventListeners(type);
        removeAllInteractionListeners(this, type);
    }
}
// x / y / scale / rotation / skew / reg / visible / alpha write through to the Pixi node (see defineDisplayAccessors)
defineDisplayAccessors(CreatejsShape.prototype, ensureData$3);

/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Sprite.html | PIXI.Sprite}
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
        data.instance.texture = Texture.from(this.image);
        return res;
    }
    get pixi() {
        return ensureData$2(this).instance;
    }
    updateBlendModeForPixi(mode) {
        const data = ensureData$2(this);
        data.reservedBlendMode = mode;
        data.instance.blendMode = blendModeForPixi(data);
    }
    // @ts-expect-error TS2611/TS2416 - a plain data property on the real
    // createjs.DisplayObject; intercepted here to draw it (see the class-level
    // comment on CreatejsShape)
    get compositeOperation() {
        return ensureData$2(this).compositeOperation;
    }
    set compositeOperation(value) {
        const data = ensureData$2(this);
        data.compositeOperation = value;
        data.instance.blendMode = blendModeForPixi(data);
    }
    // @ts-expect-error TS2611/TS2416 - see the class-level comment above
    get mask() {
        return ensureData$2(this).mask;
    }
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
    off(type, listener, useCapture) {
        if (typeof listener === 'function') {
            this.removeEventListener(type, listener, useCapture);
            return;
        }
        this.removeEventListener(type, listener, useCapture);
    }
    removeAllEventListeners(type) {
        super.removeAllEventListeners(type);
        removeAllInteractionListeners(this, type);
    }
}
// x / y / scale / rotation / skew / reg / visible / alpha write through to the Pixi node (see defineDisplayAccessors)
defineDisplayAccessors(CreatejsBitmap.prototype, ensureData$2);

/** Pixels a gradient is drawn across: along the line of a linear one, across the circles of a radial one */
const GRADIENT_SIZE = 256;
/** At most this many gradient textures are kept for sharing (the oldest is let go first) */
const MAX_KEPT_GRADIENTS = 256;
/**
 * The base texture of a gradient: always clamped. Pixi's Graphics sets the
 * wrap mode of every texture it fills with to REPEAT when it builds its
 * shapes (GraphicsGeometry.updateBatches), which would repeat the gradient
 * outside the area drawn; canvas (and so createjs) pads a gradient with its
 * end colors instead, which is what clamping gives.
 */
class GradientBaseTexture extends BaseTexture {
    // pixi.js declares `wrapMode` as a plain field of BaseTexture; an accessor
    // on this prototype takes the writes (the field is never an own property:
    // BaseTexture's constructor assigns it, which reaches this setter)
    // @ts-expect-error TS2611 - see above
    get wrapMode() {
        return WRAP_MODES.CLAMP;
    }
    set wrapMode(value) {
        // always clamped
    }
}
/**
 * A gradient drawn into a canvas by the browser's own gradient (so that its
 * colors are what canvas, and createjs, paints), as a texture that Pixi's
 * Graphics fills and strokes with through a matrix. `gradient` is the
 * gradient in the shape's coordinates, `local` the same gradient in the
 * texture's pixels, and `toShape` takes texture pixels to the shape's
 * coordinates.
 */
class GradientTexture extends Texture {
    constructor(canvas, gradient, local, toShape) {
        // No mipmaps: a gradient drawn small would take the averaged colors of
        // a smaller image; canvas paints the exact color at every pixel, which
        // sampling the full-size image gives
        super(new GradientBaseTexture(canvas, { mipmap: MIPMAP_MODES.OFF }));
        this.gradient = gradient;
        this.local = local;
        this.toShape = toShape;
    }
}
/**
 * Gradient textures by their gradient, shared by every Graphics that uses the
 * same gradient (each instance of a published symbol draws its own Graphics
 * with the same commands). Made outside Pixi's texture caches; a texture let
 * go here stays while a Graphics still uses it.
 */
const gradientTextures = new Map();
function paintGradient(canvas, local) {
    const context = canvas.getContext('2d');
    if (!context) {
        return;
    }
    const paint = local.type === 'linear'
        ? context.createLinearGradient(local.x0, local.y0, local.x1, local.y1)
        : context.createRadialGradient(local.x0, local.y0, local.r0, local.x1, local.y1, local.r1);
    for (let i = 0; i < local.colors.length; i++) {
        paint.addColorStop(local.ratios[i], local.colors[i]);
    }
    context.fillStyle = paint;
    context.fillRect(0, 0, canvas.width, canvas.height);
}
/**
 * A linear gradient drawn along a canvas one pixel high, from one pixel in
 * from the left edge to one pixel in from the right edge: the edge pixels are
 * then the end colors themselves, which clamping continues outside the line
 * (an edge pixel on the line would hold the color at its center, a little
 * short of the end color). The texture's x axis runs along the gradient's
 * line and its y axis across it (every row is the same, so how far across
 * does not matter).
 */
function linearGradientTexture(gradient) {
    const dx = gradient.x1 - gradient.x0;
    const dy = gradient.y1 - gradient.y0;
    const length = Math.sqrt(dx * dx + dy * dy);
    if (!length) {
        // canvas paints nothing with a line of length 0
        return null;
    }
    const canvas = document.createElement('canvas');
    canvas.width = GRADIENT_SIZE + 2;
    canvas.height = 1;
    const local = {
        type: 'linear', colors: gradient.colors, ratios: gradient.ratios,
        x0: 1, y0: 0, r0: 0, x1: GRADIENT_SIZE + 1, y1: 0, r1: 0
    };
    paintGradient(canvas, local);
    const a = dx / GRADIENT_SIZE;
    const b = dy / GRADIENT_SIZE;
    // texture pixel x = 1 is the line's start
    const toShape = new Matrix(a, b, -dy / length, dx / length, gradient.x0 - a, gradient.y0 - b);
    return new GradientTexture(canvas, gradient, local, toShape);
}
/**
 * A radial gradient drawn into a square canvas covering both of its circles,
 * scaled to fit (the mapping is a scale and a move, so the circles stay
 * circles and every point keeps its place in the gradient).
 */
function radialGradientTexture(gradient) {
    const left = Math.min(gradient.x0 - gradient.r0, gradient.x1 - gradient.r1);
    const top = Math.min(gradient.y0 - gradient.r0, gradient.y1 - gradient.r1);
    const right = Math.max(gradient.x0 + gradient.r0, gradient.x1 + gradient.r1);
    const bottom = Math.max(gradient.y0 + gradient.r0, gradient.y1 + gradient.r1);
    const size = Math.max(right - left, bottom - top);
    if (!(size > 0) || (gradient.r1 === gradient.r0 && gradient.x0 === gradient.x1 && gradient.y0 === gradient.y1)) {
        // canvas paints nothing with two equal circles
        return null;
    }
    const scale = GRADIENT_SIZE / size;
    const canvas = document.createElement('canvas');
    canvas.width = GRADIENT_SIZE;
    canvas.height = GRADIENT_SIZE;
    const local = {
        type: 'radial', colors: gradient.colors, ratios: gradient.ratios,
        x0: (gradient.x0 - left) * scale, y0: (gradient.y0 - top) * scale, r0: gradient.r0 * scale,
        x1: (gradient.x1 - left) * scale, y1: (gradient.y1 - top) * scale, r1: gradient.r1 * scale
    };
    paintGradient(canvas, local);
    const toShape = new Matrix(1 / scale, 0, 0, 1 / scale, left, top);
    return new GradientTexture(canvas, gradient, local, toShape);
}
/**
 * The texture a gradient is drawn with, or null when canvas paints nothing
 * with it (a line of length 0, two equal circles).
 */
function getGradientTexture(gradient) {
    const key = JSON.stringify(gradient);
    const known = gradientTextures.get(key);
    if (known !== undefined) {
        return known;
    }
    const texture = gradient.type === 'linear' ? linearGradientTexture(gradient) : radialGradientTexture(gradient);
    gradientTextures.set(key, texture);
    if (gradientTextures.size > MAX_KEPT_GRADIENTS) {
        const oldest = gradientTextures.keys().next();
        if (!oldest.done) {
            gradientTextures.delete(oldest.value);
        }
    }
    return texture;
}

/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Graphics.html | PIXI.Graphics}
 */
class PixiGraphics extends Graphics {
    constructor(cjs) {
        super();
        this._createjs = cjs;
    }
    get createjs() {
        return this._createjs;
    }
    /**
     * Sets the blend mode the graphics is drawn with. Pixi 5 draws a small
     * Graphics in batches that keep the blend mode it had when they were made
     * and makes them again only when the shapes change, so a new mode would
     * not be drawn; the batches are made again on the next render.
     *
     * @ignore
     */
    setBlendModeForPixi(mode) {
        if (this.blendMode === mode) {
            return;
        }
        this.blendMode = mode;
        this.batchDirty = -1;
    }
}
/**
 * @ignore
 */
function createPixiGraphicsData(cjs) {
    const pixi = new PixiGraphics(cjs);
    return Object.assign(createPixiData(pixi, null), {
        strokeFill: 0,
        strokeAlpha: 1,
        strokeTexture: null,
        strokeMatrix: null
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
 * The textures bitmap fills are drawn with, one per image. Keyed by the image,
 * so that a texture is kept only while its image is: the images of a published
 * library live with the library, and an image a frame is extracted into
 * (SpriteSheetUtils.extractFrame, made for each instance) goes with the
 * Graphics that use it. The textures are made outside Pixi's texture caches
 * (which would keep them for good), and their GPU memory is given back by
 * Pixi's texture garbage collection once they are no longer drawn.
 *
 * @ignore
 */
const bitmapFillTextures = new WeakMap();
/**
 * @ignore
 */
function getBitmapFillTexture(image) {
    let texture = bitmapFillTextures.get(image);
    if (!texture) {
        texture = new Texture(new BaseTexture(image));
        bitmapFillTextures.set(image, texture);
    }
    return texture;
}
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
        ensureData$1(this).instance.setBlendModeForPixi(mode);
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
    /**
     * Fills with an image, placed by `matrix` (from the image's space to the
     * shape's) as createjs places its pattern. The image is repeated (Pixi
     * repeats every texture it fills with, as createjs does for the default
     * repetition that published content uses; "no-repeat" and the other
     * repetitions are drawn repeated too).
     */
    beginBitmapFill(image, repetition, matrix) {
        ensureData$1(this).instance.beginTextureFill({
            texture: getBitmapFillTexture(image),
            color: 0xFFFFFF,
            alpha: 1,
            matrix: matrix ? new Matrix(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty) : undefined
        });
        super.beginBitmapFill(image, repetition, matrix);
        return this;
    }
    bf(image, repetition, matrix) {
        return this.beginBitmapFill(image, repetition, matrix);
    }
    /**
     * Fills with a gradient. Pixi's Graphics has no gradients: the gradient is
     * drawn by the browser's canvas into a texture (so that its colors are what
     * createjs paints), once for each gradient and shared, and filled with
     * through a matrix from the texture's pixels to the shape's coordinates.
     * Outside the gradient the end colors continue, as in canvas. A gradient
     * canvas paints nothing with (a line of length 0, two equal circles) fills
     * nothing.
     */
    beginLinearGradientFill(colors, ratios, x0, y0, x1, y1) {
        this._beginGradientFill({ type: 'linear', colors, ratios, x0, y0, r0: 0, x1, y1, r1: 0 });
        super.beginLinearGradientFill(colors, ratios, x0, y0, x1, y1);
        return this;
    }
    lf(colors, ratios, x0, y0, x1, y1) {
        return this.beginLinearGradientFill(colors, ratios, x0, y0, x1, y1);
    }
    beginRadialGradientFill(colors, ratios, x0, y0, r0, x1, y1, r1) {
        this._beginGradientFill({ type: 'radial', colors, ratios, x0, y0, r0, x1, y1, r1 });
        super.beginRadialGradientFill(colors, ratios, x0, y0, r0, x1, y1, r1);
        return this;
    }
    rf(colors, ratios, x0, y0, r0, x1, y1, r1) {
        return this.beginRadialGradientFill(colors, ratios, x0, y0, r0, x1, y1, r1);
    }
    _beginGradientFill(gradient) {
        const instance = ensureData$1(this).instance;
        const texture = getGradientTexture(gradient);
        if (texture) {
            instance.beginTextureFill({ texture, color: 0xFFFFFF, alpha: 1, matrix: texture.toShape });
        }
        else {
            instance.beginFill(0, 0);
        }
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
        const cap = (caps in LineCap) ? LineCap[caps] : LineCap[0];
        const join = (joints in LineJoin) ? LineJoin[joints] : LineJoin[0];
        const gradient = data.strokeTexture;
        if (gradient) {
            data.instance.lineTextureStyle({
                width: thickness,
                texture: gradient,
                color: 0xFFFFFF,
                alpha: 1,
                matrix: data.strokeMatrix || undefined,
                cap,
                join,
                miterLimit
            });
        }
        else {
            data.instance.lineTextureStyle({
                width: thickness,
                color: data.strokeFill,
                alpha: data.strokeAlpha,
                cap,
                join,
                miterLimit
            });
        }
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
        data.strokeTexture = null;
        data.strokeMatrix = null;
        super.beginStroke(color);
        return this;
    }
    s(color) {
        return this.beginStroke(color);
    }
    /**
     * Strokes with a gradient (taken by the stroke style set next, as a color
     * set by beginStroke is). The gradient is drawn by the browser's canvas
     * into a texture once and shared; see beginLinearGradientFill.
     */
    beginLinearGradientStroke(colors, ratios, x0, y0, x1, y1) {
        this._setGradientStroke({ type: 'linear', colors, ratios, x0, y0, r0: 0, x1, y1, r1: 0 });
        super.beginLinearGradientStroke(colors, ratios, x0, y0, x1, y1);
        return this;
    }
    ls(colors, ratios, x0, y0, x1, y1) {
        return this.beginLinearGradientStroke(colors, ratios, x0, y0, x1, y1);
    }
    beginRadialGradientStroke(colors, ratios, x0, y0, r0, x1, y1, r1) {
        this._setGradientStroke({ type: 'radial', colors, ratios, x0, y0, r0, x1, y1, r1 });
        super.beginRadialGradientStroke(colors, ratios, x0, y0, r0, x1, y1, r1);
        return this;
    }
    rs(colors, ratios, x0, y0, r0, x1, y1, r1) {
        return this.beginRadialGradientStroke(colors, ratios, x0, y0, r0, x1, y1, r1);
    }
    _setGradientStroke(gradient) {
        const data = ensureData$1(this);
        const texture = getGradientTexture(gradient);
        data.strokeTexture = texture;
        data.strokeMatrix = texture ? texture.toShape : null;
        data.strokeFill = 0xFFFFFF;
        // a gradient canvas paints nothing with strokes nothing
        data.strokeAlpha = texture ? 1 : 0;
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
class PixiText extends Text {
}
/**
 * inherited {@link https://pixijs.download/v5.3.9/docs/PIXI.Container.html | PIXI.Container}
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
function createPixiTextData(cjs) {
    const text = new PixiText('', {
        wordWrap: true
    });
    const pixi = new PixiTextContainer(cjs, text);
    pixi.addChild(text);
    return Object.assign(createPixiData(pixi, null), {
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
        const data = ensureData(this);
        data.reservedBlendMode = mode;
        data.instance.text.blendMode = blendModeForPixi(data);
    }
    // @ts-expect-error TS2611/TS2416 - a plain data property on the real
    // createjs.DisplayObject; intercepted here to draw it (see the class-level
    // comment on CreatejsShape)
    get compositeOperation() {
        return ensureData(this).compositeOperation;
    }
    set compositeOperation(value) {
        const data = ensureData(this);
        data.compositeOperation = value;
        data.instance.text.blendMode = blendModeForPixi(data);
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
    off(type, listener, useCapture) {
        if (typeof listener === 'function') {
            this.removeEventListener(type, listener, useCapture);
            return;
        }
        this.removeEventListener(type, listener, useCapture);
    }
    removeAllEventListeners(type) {
        super.removeAllEventListeners(type);
        removeAllInteractionListeners(this, type);
    }
}
// x / y / scale / rotation / skew / reg / visible / alpha write through to the Pixi node (see defineDisplayAccessors)
defineDisplayAccessors(CreatejsText.prototype, ensureData);

/**
 * Recovers the wrapper contract (the paired Pixi instance) on a value typed
 * as a real createjs display object. Inside a wrapper-driven tree every
 * display object is a wrapper class instance, but the type system needs this
 * checked explicitly - same pattern as isBlendModeChild in MovieClip.ts.
 */
function isWrapped(obj) {
    return 'pixi' in obj && 'updateBlendModeForPixi' in obj;
}
/**
 * The hit clip must additionally be frame-addressable (a Sprite/MovieClip
 * wrapper), because the helper parks it on its hit frame.
 */
function isAnimatableWrapped(obj) {
    return isWrapped(obj) && 'gotoAndStop' in obj;
}
/**
 * Forwards a frame argument into gotoAndStop verbatim, including undefined.
 * The original AC implementation passed the constructor arguments straight
 * through, and the real createjs gotoAndStop tolerates undefined without
 * throwing (measured: it pauses without moving, for MovieClip and Sprite
 * both) - so an omitted frame must stay an as-is forward, not become a skip,
 * a substitute value, or an error. gotoAndStop's declaration (rightly)
 * doesn't accept undefined; the optional parameter in the shape below lets
 * the narrower real signature through via method-parameter bivariance. This
 * is a deliberate, isolated use of that unsound comparison rule: the runtime
 * data flow is the priority here, and this function is the one place where
 * the type description compromises instead.
 */
function gotoAndStopVerbatim(target, positionOrLabel) {
    target.gotoAndStop(positionOrLabel);
}
/**
 * inherited {@link https://createjs.com/docs/easeljs/classes/ButtonHelper.html | createjs.ButtonHelper}
 *
 * Unlike the original, this wrapper requires `target` (and `hitArea` when
 * given) to be wrapper class instances (it re-implements the button states
 * on the Pixi interaction layer, so it needs their paired Pixi objects).
 * Inputs that don't satisfy that crashed with a TypeError mid-construction
 * before; now they fail the explicit check below at the same point.
 * `hitArea` itself is optional: Animate publishes a button whose hit frame
 * is empty as a 4-argument call (measured: `new cjs.ButtonHelper(target,
 * 0, 1, 1)`), and the original then uses the target itself as the hit
 * surface - mirrored here by making the target's own Pixi instance
 * interactive. The frame arguments are forwarded verbatim, omitted or not,
 * exactly as before (see gotoAndStopVerbatim above).
 */
class CreatejsButtonHelper extends createjs.ButtonHelper {
    constructor(target, outLabel, overLabel, downLabel, play, hitArea, hitLabel) {
        super(target, outLabel, overLabel, downLabel, play, hitArea, hitLabel);
        if (!isWrapped(target)) {
            throw new TypeError('CreatejsButtonHelper requires wrapper class instances for target and hitArea.');
        }
        const pixi = target.pixi;
        let hitPixi;
        if (hitArea) {
            if (!isAnimatableWrapped(hitArea)) {
                throw new TypeError('CreatejsButtonHelper requires wrapper class instances for target and hitArea.');
            }
            gotoAndStopVerbatim(hitArea, hitLabel);
            // The hit clip hangs on the pixi tree only (never on the createjs tree).
            // Its color filters are copied at once here (Pixi copies them again
            // whenever it draws the clip).
            syncToPixi(hitArea);
            hitPixi = pixi.addChild(hitArea.pixi);
            hitPixi.alpha = 0.00001;
        }
        else {
            // 4-argument publish form (empty hit frame): the target itself is the
            // hit surface, exactly like the original. Its alpha is left alone -
            // the button must stay visible.
            hitPixi = pixi;
        }
        let isOver = false;
        let isDown = false;
        hitPixi.on('pointerover', function () {
            isOver = true;
            if (isDown) {
                gotoAndStopVerbatim(target, downLabel);
            }
            else {
                gotoAndStopVerbatim(target, overLabel);
            }
        });
        hitPixi.on('pointerout', function () {
            isOver = false;
            if (isDown) {
                gotoAndStopVerbatim(target, overLabel);
            }
            else {
                gotoAndStopVerbatim(target, outLabel);
            }
        });
        hitPixi.on('pointerdown', function () {
            isDown = true;
            gotoAndStopVerbatim(target, downLabel);
        });
        hitPixi.on('pointerup', function () {
            isDown = false;
            if (isOver) {
                gotoAndStopVerbatim(target, overLabel);
            }
            else {
                gotoAndStopVerbatim(target, outLabel);
            }
        });
        hitPixi.on('pointerupoutside', function () {
            isDown = false;
            if (isOver) {
                gotoAndStopVerbatim(target, overLabel);
            }
            else {
                gotoAndStopVerbatim(target, outLabel);
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
class CreatejsController {
    /**
     * Playback speed multiplier (a value below 0, or NaN, is played as 0)
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
    /**
     * Whether frames are played by a steady clock, so that small changes of the delta do not make the playing uneven.
     */
    get smooth() {
        return this._smooth;
    }
    set smooth(value) {
        this._smooth = value;
    }
    constructor(container) {
        this._speed = 1;
        this._overSpeed = true;
        this._smooth = true;
        /** The latest deltas (a ring of DELTA_SAMPLES) */
        this._deltas = [];
        this._nextDelta = 0;
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
     * The display properties write through to the Pixi nodes as createjs writes
     * them (see defineDisplayAccessors), so the Pixi mirror follows every
     * frame with no copying walk. The color filter scalars (plain data
     * properties of createjs ColorFilters) are copied by the Pixi nodes that
     * carry the filters, right before they are drawn.
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
    handleTick(delta) {
        // Frames cannot be played backwards: a speed below 0 (or NaN) plays as 0,
        // so that nothing is owed while it lasts and the content resumes at once
        const speed = this._speed > 0 ? this._speed : 0;
        const d = delta * speed;
        const usual = this._usualDelta(delta) * speed;
        beginDrive();
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
                continue;
            }
            let p;
            if (this._smooth) {
                target.clock += step;
                const behind = target.t + lead - target.clock;
                if (behind >= 1 || behind <= -1) {
                    target.clock = target.t + lead;
                }
                else {
                    target.clock += behind * PULL;
                }
                p = Math.max(Math.floor(target.clock), 0);
                target.clock -= p;
            }
            else {
                p = Math.floor(target.t);
                target.clock = target.t - p;
            }
            const frame = this._overSpeed ? p : Math.min(p, 1);
            target.t -= p;
            for (let f = 0; f < frame; f++) {
                target.cjs._tick(new CreatejsEvent('tick'));
                target.cjs.updateStateForPixi();
            }
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
     *   application, a clip added between frames) is settled, as a createjs
     *   draw settles each clip (CreatejsMovieClip.settleForPixi)
     *
     * Display properties written after handleTick need nothing here: they
     * reached the Pixi nodes when they were written. Color filters are brought
     * up to date by the nodes that carry them (PixiMovieClip.updateTransform).
     */
    flushForRender() {
        beginDrive();
        const targets = this._createjsData.targets;
        for (let i in targets) {
            const root = targets[i].cjs;
            if (takeSettleMark(root)) {
                root.settleForPixi();
            }
        }
        endDrive();
    }
    /**
     * Records a delta and gives the median of the latest ones (the median, so
     * that an occasional long delta of a missed display frame does not drag
     * the usual delta along).
     */
    _usualDelta(delta) {
        const deltas = this._deltas;
        deltas[this._nextDelta] = delta;
        this._nextDelta = (this._nextDelta + 1) % DELTA_SAMPLES;
        const sorted = deltas.slice().sort((a, b) => a - b);
        const middle = sorted.length >> 1;
        return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
    }
    _addCreatejs(cjs) {
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
    get createjsSmooth() {
        return this._createjsData.controller.smooth;
    }
    set createjsSmooth(value) {
        this._createjsData.controller.smooth = value;
    }
    handleTick(delta) {
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

export { AnimateEvent, AnimateReachLabelEvent, CjsTransform, CompositeOperations, Container, CreatejsBitmap, CreatejsButtonHelper, CreatejsColorFilter, CreatejsController, CreatejsEventManager, CreatejsGraphics, CreatejsMovieClip, CreatejsShape, CreatejsSprite, CreatejsText, DISPLAY_ACCESSOR_NAMES, PixiBitmap, PixiColorMatrixFilter, PixiGraphics, PixiMovieClip, PixiShape, PixiSprite, PixiText, PixiTextContainer, addInteractionListener, beginDrive, blendModeForPixi, createPixiData, createjsInteractionEvents, defineDisplayAccessors, endDrive, findPixiData, getPixiColorMatrixFilter, isDriving, loadAssetAsync, markForSettle, registerPixiData, removeAllInteractionListeners, removeInteractionListener, setMaskForPixi, syncToPixi, takeSettleMark };
//# sourceMappingURL=pixi-animate-container.esm.js.map
