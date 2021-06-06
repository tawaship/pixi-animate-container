/*!
 * pixi-animate-container - v1.0.1
 * 
 * @require pixi.js v^5.3.2
 * @author tawaship (makazu.mori@gmail.com)
 * @license MIT
 */

import createjs from '@tawaship/createjs-module';
export { default as createjs } from '@tawaship/createjs-module';
import { filters, Container as Container$1, BaseTexture, Texture, LINE_CAP, LINE_JOIN, Text, Sprite, Graphics } from 'pixi.js';

/*!
 * @tawaship/pixi-animate-core - v3.0.3
 * 
 * @require pixi.js v^5.3.2
 * @author tawaship (makazu.mori@gmail.com)
 * @license MIT
 */

function createPixiData(pixi, regObj) {
    return {
        regObj,
        instance: pixi
    };
}
function createCreatejsParams() {
    return {
        x: 0,
        y: 0,
        scaleX: 0,
        scaleY: 0,
        regX: 0,
        regY: 0,
        skewX: 0,
        skewY: 0,
        rotation: 0,
        visible: true,
        alpha: 1,
        _off: false,
        mask: null,
        filters: null
    };
}
function updateDisplayObjectChildren(cjs, e) {
    const list = cjs.children.slice();
    for (let i = 0, l = list.length; i < l; i++) {
        const child = list[i];
        if (!child.isVisible()) {
            continue;
        }
        //child.draw();
        child.updateForPixi(e);
    }
    return true;
}

/**
 * [[https://createjs.com/docs/easeljs/classes/Stage.html | createjs.Stage]]
 */
class CreatejsStage extends createjs.Stage {
    updateForPixi(props) {
        if (this.tickOnUpdate) {
            this.tick(props);
        }
        this.dispatchEvent("drawstart");
        updateDisplayObjectChildren(this, props);
        this.dispatchEvent("drawend");
        return true;
    }
}

/**
 * [[https://createjs.com/docs/easeljs/classes/StageGL.html | createjs.StageGL]]
 */
class CreatejsStageGL extends createjs.StageGL {
    updateForPixi(props) {
        if (this.tickOnUpdate) {
            this.tick(props);
        }
        this.dispatchEvent("drawstart");
        updateDisplayObjectChildren(this, props);
        this.dispatchEvent("drawend");
        return true;
    }
}

function createObject(proto) {
    return Object.create(proto);
}
/**
 * @ignore
 */
const DEG_TO_RAD = Math.PI / 180;

class EventManager {
    constructor(cjs) {
        this._isDown = false;
        this._events = {
            pointerdown: [],
            pointerover: [],
            pointerout: [],
            pointermove: [],
            pointerup: [],
            pointerupoutside: []
        };
        this._data = {
            mousedown: {
                types: ['pointerdown'],
                factory: (cb) => {
                    return this._mousedownFactory(cjs, cb);
                }
            },
            rollover: {
                types: ['pointerover'],
                factory: (cb) => {
                    return this._rolloverFactory(cjs, cb);
                }
            },
            rollout: {
                types: ['pointerout'],
                factory: (cb) => {
                    return this._rolloutFactory(cjs, cb);
                }
            },
            pressmove: {
                types: ['pointermove'],
                factory: (cb) => {
                    console.log(cb);
                    return this._pressmoveFactory(cjs, cb);
                }
            },
            pressup: {
                types: ['pointerup', 'pointerupoutside'],
                factory: (cb) => {
                    return this._pressupFactory(cjs, cb);
                }
            }
        };
    }
    add(pixi, type, cb) {
        const data = this._data[type];
        const types = data.types;
        const func = data.factory(cb);
        for (let i = 0; i < types.length; i++) {
            const t = types[i];
            this._events[t].push({ func, origin: cb });
            pixi.on(t, func);
        }
        pixi.interactive = true;
    }
    remove(pixi, type, cb) {
        const data = this._data[type];
        const types = data.types;
        for (let i = 0; i < types.length; i++) {
            const t = types[i];
            const list = this._events[t];
            if (list) {
                for (var j = list.length - 1; j >= 0; j--) {
                    if (list[j].origin === cb) {
                        pixi.off(t, list[j].func);
                        list.splice(j, 1);
                        break;
                    }
                }
                if (list.length === 0) {
                    this._events[t] = [];
                }
            }
        }
    }
    _mousedownFactory(cjs, cb) {
        return (e) => {
            e.currentTarget = e.currentTarget.createjs;
            e.target = e.target.createjs;
            const ev = e.data;
            e.rawX = ev.global.x;
            e.rawY = ev.global.y;
            this._isDown = true;
            cb(e);
        };
    }
    _rolloverFactory(cjs, cb) {
        return (e) => {
            e.currentTarget = e.currentTarget.createjs;
            e.target = e.currentTarget.createjs;
            const ev = e.data;
            e.rawX = ev.global.x;
            e.rawY = ev.global.y;
            this._isDown = true;
            cb(e);
        };
    }
    _rolloutFactory(cjs, cb) {
        return (e) => {
            e.currentTarget = e.currentTarget.createjs;
            e.target = e.currentTarget.createjs;
            const ev = e.data;
            e.rawX = ev.global.x;
            e.rawY = ev.global.y;
            this._isDown = true;
            cb(e);
        };
    }
    _pressmoveFactory(cjs, cb) {
        return (e) => {
            if (!this._isDown) {
                return;
            }
            e.currentTarget = cjs;
            e.target = e.target && e.target.createjs;
            const ev = e.data;
            e.rawX = ev.global.x;
            e.rawY = ev.global.y;
            cb(e);
        };
    }
    _pressupFactory(cjs, cb) {
        return (e) => {
            if (!this._isDown) {
                return;
            }
            e.currentTarget = cjs;
            this._isDown = false;
            e.target = e.target && e.target.createjs;
            const ev = e.data;
            e.rawX = ev.global.x;
            e.rawY = ev.global.y;
            cb(e);
        };
    }
}

/**
 * [[https://createjs.com/docs/easeljs/classes/ButtonHelper.html | createjs.ButtonHelper]]
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

/**
 * [[http://pixijs.download/release/docs/PIXI.Container.html | PIXI.Container]]
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
/**
 * @ignore
 */
function createCreatejsMovieClipParams() {
    return createCreatejsParams();
}
/**
 * @ignore
 */
function createPixiMovieClipData(cjs) {
    const pixi = new PixiMovieClip(cjs);
    return Object.assign(createPixiData(pixi, pixi.pivot), {
        subInstance: pixi
    });
}
/**
 * @ignore
 */
const P = createjs.MovieClip;
/**
 * [[https://createjs.com/docs/easeljs/classes/MovieClip.html | createjs.MovieClip]]
 */
class CreatejsMovieClip extends createjs.MovieClip {
    constructor(...args) {
        super();
        this._pixiData = createPixiMovieClipData(this);
        this._createjsParams = createCreatejsMovieClipParams();
        this._createjsEventManager = new EventManager(this);
        P.apply(this, args);
    }
    initialize(...args) {
        this._pixiData = createPixiMovieClipData(this);
        this._createjsParams = createCreatejsMovieClipParams();
        this._createjsEventManager = new EventManager(this);
        return super.initialize(...args);
    }
    get pixi() {
        return this._pixiData.instance;
    }
    updateForPixi(e) {
        this._updateState();
        return updateDisplayObjectChildren(this, e);
    }
    get x() {
        return this._createjsParams.x;
    }
    set x(value) {
        this._pixiData.instance.x = value;
        this._createjsParams.x = value;
    }
    get y() {
        return this._createjsParams.y;
    }
    set y(value) {
        this._pixiData.instance.y = value;
        this._createjsParams.y = value;
    }
    get scaleX() {
        return this._createjsParams.scaleX;
    }
    set scaleX(value) {
        this._pixiData.instance.scale.x = value;
        this._createjsParams.scaleX = value;
    }
    get scaleY() {
        return this._createjsParams.scaleY;
    }
    set scaleY(value) {
        this._pixiData.instance.scale.y = value;
        this._createjsParams.scaleY = value;
    }
    get skewX() {
        return this._createjsParams.skewX;
    }
    set skewX(value) {
        this._pixiData.instance.skew.x = -value * DEG_TO_RAD;
        this._createjsParams.skewX = value;
    }
    get skewY() {
        return this._createjsParams.skewY;
    }
    set skewY(value) {
        this._pixiData.instance.skew.y = value * DEG_TO_RAD;
        this._createjsParams.skewY = value;
    }
    get regX() {
        return this._createjsParams.regX;
    }
    set regX(value) {
        this._pixiData.regObj.x = value;
        this._createjsParams.regX = value;
    }
    get regY() {
        return this._createjsParams.regY;
    }
    set regY(value) {
        this._pixiData.regObj.y = value;
        this._createjsParams.regY = value;
    }
    get rotation() {
        return this._createjsParams.rotation;
    }
    set rotation(value) {
        this._pixiData.instance.rotation = value * DEG_TO_RAD;
        this._createjsParams.rotation = value;
    }
    get visible() {
        return this._createjsParams.visible;
    }
    set visible(value) {
        value = !!value;
        this._pixiData.instance.visible = value;
        this._createjsParams.visible = value;
    }
    get alpha() {
        return this._createjsParams.alpha;
    }
    set alpha(value) {
        this._pixiData.instance.alpha = value;
        this._createjsParams.alpha = value;
    }
    get _off() {
        return this._createjsParams._off;
    }
    set _off(value) {
        this._pixiData.instance.renderable = !value;
        this._createjsParams._off = value;
    }
    addEventListener(type, cb, ...args) {
        if (!(cb instanceof CreatejsButtonHelper)) {
            if (type === 'mousedown' || type === 'rollover' || type === 'rollout' || type === 'pressmove' || type === 'pressup') {
                this._createjsEventManager.add(this._pixiData.instance, type, cb);
            }
        }
        return super.addEventListener(type, cb, ...args);
    }
    removeEventListener(type, cb, ...args) {
        if (!(cb instanceof CreatejsButtonHelper)) {
            if (type === 'mousedown' || type === 'rollover' || type === 'rollout' || type === 'pressmove' || type === 'pressup') {
                this._createjsEventManager.remove(this._pixiData.instance, type, cb);
            }
        }
        return super.removeEventListener(type, cb, ...args);
    }
    get mask() {
        return this._createjsParams.mask;
    }
    set mask(value) {
        if (value) {
            value.masked.push(this._pixiData.instance);
            this._pixiData.instance.mask = value.pixi;
            this._pixiData.instance.once('added', () => {
                this._pixiData.instance.parent.addChild(value.pixi);
            });
        }
        else {
            this._pixiData.instance.mask = null;
        }
        this._createjsParams.mask = value;
    }
    get filters() {
        return this._createjsParams.filters;
    }
    set filters(value) {
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
            var o = this._pixiData.instance;
            var c = o.children;
            var n = new Container$1();
            var nc = this._pixiData.subInstance = n.addChild(new Container$1());
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
                        fc.cacheAsBitmap = false;
                    }
                }
            }
            n.x = x;
            n.y = y;
            nc.filters = list;
            nc.cacheAsBitmap = true;
        }
        else {
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
                nc.cacheAsBitmap = false;
                this._pixiData.subInstance = o;
            }
        }
        this._createjsParams.filters = value;
    }
    addChild(child) {
        this._pixiData.subInstance.addChild(child.pixi);
        return super.addChild(child);
    }
    addChildAt(child, index) {
        this._pixiData.subInstance.addChildAt(child.pixi, index);
        return super.addChildAt(child, index);
    }
    removeChild(child) {
        this._pixiData.subInstance.removeChild(child.pixi);
        return super.removeChild(child);
    }
    removeChildAt(index) {
        this._pixiData.subInstance.removeChildAt(index);
        return super.removeChildAt(index);
    }
    removeAllChldren() {
        this._pixiData.subInstance.removeChildren();
        return super.removeAllChldren();
    }
}
// temporary prototype
Object.defineProperties(CreatejsMovieClip.prototype, {
    _createjsParams: {
        value: createCreatejsMovieClipParams(),
        writable: true
    },
    _pixiData: {
        value: createPixiMovieClipData(createObject(CreatejsMovieClip.prototype)),
        writable: true
    }
});

/**
 * [[http://pixijs.download/release/docs/PIXI.Sprite.html | PIXI.Sprite]]
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
function createCreatejsSpriteParams() {
    return createCreatejsParams();
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
const P$1 = createjs.Sprite;
/**
 * [[https://createjs.com/docs/easeljs/classes/Sprite.html | createjs.Sprite]]
 */
class CreatejsSprite extends createjs.Sprite {
    constructor(...args) {
        super(...args);
        this._pixiData = createPixiSpriteData(this);
        this._createjsParams = createCreatejsSpriteParams();
        this._createjsEventManager = new EventManager(this);
        P$1.apply(this, args);
    }
    initialize(...args) {
        this._pixiData = createPixiSpriteData(this);
        this._createjsParams = createCreatejsSpriteParams();
        this._createjsEventManager = new EventManager(this);
        return super.initialize(...args);
    }
    get pixi() {
        return this._pixiData.instance;
    }
    updateForPixi(e) {
        return true;
    }
    get x() {
        return this._createjsParams.x;
    }
    set x(value) {
        this._pixiData.instance.x = value;
        this._createjsParams.x = value;
    }
    get y() {
        return this._createjsParams.y;
    }
    set y(value) {
        this._pixiData.instance.y = value;
        this._createjsParams.y = value;
    }
    get scaleX() {
        return this._createjsParams.scaleX;
    }
    set scaleX(value) {
        this._pixiData.instance.scale.x = value;
        this._createjsParams.scaleX = value;
    }
    get scaleY() {
        return this._createjsParams.scaleY;
    }
    set scaleY(value) {
        this._pixiData.instance.scale.y = value;
        this._createjsParams.scaleY = value;
    }
    get skewX() {
        return this._createjsParams.skewX;
    }
    set skewX(value) {
        this._pixiData.instance.skew.x = -value * DEG_TO_RAD;
        this._createjsParams.skewX = value;
    }
    get skewY() {
        return this._createjsParams.skewY;
    }
    set skewY(value) {
        this._pixiData.instance.skew.y = value * DEG_TO_RAD;
        this._createjsParams.skewY = value;
    }
    get regX() {
        return this._createjsParams.regX;
    }
    set regX(value) {
        this._pixiData.regObj.x = value;
        this._createjsParams.regX = value;
    }
    get regY() {
        return this._createjsParams.regY;
    }
    set regY(value) {
        this._pixiData.regObj.y = value;
        this._createjsParams.regY = value;
    }
    get rotation() {
        return this._createjsParams.rotation;
    }
    set rotation(value) {
        this._pixiData.instance.rotation = value * DEG_TO_RAD;
        this._createjsParams.rotation = value;
    }
    get visible() {
        return this._createjsParams.visible;
    }
    set visible(value) {
        value = !!value;
        this._pixiData.instance.visible = value;
        this._createjsParams.visible = value;
    }
    get alpha() {
        return this._createjsParams.alpha;
    }
    set alpha(value) {
        this._pixiData.instance.alpha = value;
        this._createjsParams.alpha = value;
    }
    get _off() {
        return this._createjsParams._off;
    }
    set _off(value) {
        this._pixiData.instance.renderable = !value;
        this._createjsParams._off = value;
    }
    addEventListener(type, cb, ...args) {
        if (!(cb instanceof CreatejsButtonHelper)) {
            if (type === 'mousedown' || type === 'rollover' || type === 'rollout' || type === 'pressmove' || type === 'pressup') {
                this._createjsEventManager.add(this._pixiData.instance, type, cb);
            }
        }
        return super.addEventListener(type, cb, ...args);
    }
    removeEventListener(type, cb, ...args) {
        if (!(cb instanceof CreatejsButtonHelper)) {
            if (type === 'mousedown' || type === 'rollover' || type === 'rollout' || type === 'pressmove' || type === 'pressup') {
                this._createjsEventManager.remove(this._pixiData.instance, type, cb);
            }
        }
        return super.removeEventListener(type, cb, ...args);
    }
    get mask() {
        return this._createjsParams.mask;
    }
    set mask(value) {
        if (value) {
            value.masked.push(this._pixiData.instance);
            this._pixiData.instance.mask = value.pixi;
            this._pixiData.instance.once('added', () => {
                this._pixiData.instance.parent.addChild(value.pixi);
            });
        }
        else {
            this._pixiData.instance.mask = null;
        }
        this._createjsParams.mask = value;
    }
    gotoAndStop(...args) {
        super.gotoAndStop(...args);
        const frame = this.spriteSheet.getFrame(this.currentFrame);
        const baseTexture = BaseTexture.from(frame.image);
        const texture = new Texture(baseTexture, frame.rect);
        this._pixiData.instance.texture = texture;
    }
}
// temporary prototype
Object.defineProperties(CreatejsSprite.prototype, {
    _createjsParams: {
        value: createCreatejsSpriteParams(),
        writable: true
    },
    _pixiData: {
        value: createPixiSpriteData(createObject(CreatejsSprite.prototype)),
        writable: true
    }
});

/**
 * [[http://pixijs.download/release/docs/PIXI.Container.html | PIXI.Container]]
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
function createCreatejsShapeParams(graphics) {
    return Object.assign(createCreatejsParams(), {
        graphics
    });
}
/**
 * @ignore
 */
function createPixiShapeData(cjs) {
    const pixi = new PixiShape(cjs);
    return Object.assign(createPixiData(pixi, pixi.pivot), {
        masked: []
    });
}
/**
 * @ignore
 */
const P$2 = createjs.Shape;
/**
 * [[https://createjs.com/docs/easeljs/classes/Shape.html | createjs.Shape]]
 */
class CreatejsShape extends createjs.Shape {
    constructor(...args) {
        super(...args);
        this._pixiData = createPixiShapeData(this);
        this._createjsParams = createCreatejsShapeParams(null);
        this._createjsEventManager = new EventManager(this);
        P$2.apply(this, args);
    }
    initialize(...args) {
        this._pixiData = createPixiShapeData(this);
        this._createjsParams = createCreatejsShapeParams(null);
        this._createjsEventManager = new EventManager(this);
        return super.initialize(...args);
    }
    get pixi() {
        return this._pixiData.instance;
    }
    updateForPixi(e) {
        return true;
    }
    get x() {
        return this._createjsParams.x;
    }
    set x(value) {
        this._pixiData.instance.x = value;
        this._createjsParams.x = value;
    }
    get y() {
        return this._createjsParams.y;
    }
    set y(value) {
        this._pixiData.instance.y = value;
        this._createjsParams.y = value;
    }
    get scaleX() {
        return this._createjsParams.scaleX;
    }
    set scaleX(value) {
        this._pixiData.instance.scale.x = value;
        this._createjsParams.scaleX = value;
    }
    get scaleY() {
        return this._createjsParams.scaleY;
    }
    set scaleY(value) {
        this._pixiData.instance.scale.y = value;
        this._createjsParams.scaleY = value;
    }
    get skewX() {
        return this._createjsParams.skewX;
    }
    set skewX(value) {
        this._pixiData.instance.skew.x = -value * DEG_TO_RAD;
        this._createjsParams.skewX = value;
    }
    get skewY() {
        return this._createjsParams.skewY;
    }
    set skewY(value) {
        this._pixiData.instance.skew.y = value * DEG_TO_RAD;
        this._createjsParams.skewY = value;
    }
    get regX() {
        return this._createjsParams.regX;
    }
    set regX(value) {
        this._pixiData.regObj.x = value;
        this._createjsParams.regX = value;
    }
    get regY() {
        return this._createjsParams.regY;
    }
    set regY(value) {
        this._pixiData.regObj.y = value;
        this._createjsParams.regY = value;
    }
    get rotation() {
        return this._createjsParams.rotation;
    }
    set rotation(value) {
        this._pixiData.instance.rotation = value * DEG_TO_RAD;
        this._createjsParams.rotation = value;
    }
    get visible() {
        return this._createjsParams.visible;
    }
    set visible(value) {
        value = !!value;
        this._pixiData.instance.visible = value;
        this._createjsParams.visible = value;
    }
    get alpha() {
        return this._createjsParams.alpha;
    }
    set alpha(value) {
        this._pixiData.instance.alpha = value;
        this._createjsParams.alpha = value;
    }
    get _off() {
        return this._createjsParams._off;
    }
    set _off(value) {
        this._pixiData.instance.renderable = !value;
        this._createjsParams._off = value;
    }
    addEventListener(type, cb, ...args) {
        if (!(cb instanceof CreatejsButtonHelper)) {
            if (type === 'mousedown' || type === 'rollover' || type === 'rollout' || type === 'pressmove' || type === 'pressup') {
                this._createjsEventManager.add(this._pixiData.instance, type, cb);
            }
        }
        return super.addEventListener(type, cb, ...args);
    }
    removeEventListener(type, cb, ...args) {
        if (!(cb instanceof CreatejsButtonHelper)) {
            if (type === 'mousedown' || type === 'rollover' || type === 'rollout' || type === 'pressmove' || type === 'pressup') {
                this._createjsEventManager.remove(this._pixiData.instance, type, cb);
            }
        }
        return super.removeEventListener(type, cb, ...args);
    }
    get mask() {
        return this._createjsParams.mask;
    }
    set mask(value) {
        if (value) {
            value.masked.push(this._pixiData.instance);
            this._pixiData.instance.mask = value.pixi;
            this._pixiData.instance.once('added', () => {
                this._pixiData.instance.parent.addChild(value.pixi);
            });
        }
        else {
            this._pixiData.instance.mask = null;
        }
        this._createjsParams.mask = value;
    }
    get graphics() {
        return this._createjsParams.graphics;
    }
    set graphics(value) {
        if (this._pixiData.masked.length) {
            this._pixiData.instance.removeChildren();
            if (value) {
                for (let i = 0; i < this._pixiData.masked.length; i++) {
                    this._pixiData.masked[i].mask = this._pixiData.instance;
                }
            }
            else {
                for (let i = 0; i < this._pixiData.masked.length; i++) {
                    this._pixiData.masked[i].mask = null;
                }
            }
        }
        if (value) {
            this._pixiData.instance.addChild(value.pixi);
        }
        this._createjsParams.graphics = value;
    }
    get masked() {
        return this._pixiData.masked;
    }
}
// temporary prototype
Object.defineProperties(CreatejsShape.prototype, {
    _createjsParams: {
        value: createCreatejsShapeParams(null),
        writable: true
    },
    _pixiData: {
        value: createPixiShapeData(createObject(CreatejsShape.prototype)),
        writable: true
    }
});

/**
 * [[http://pixijs.download/release/docs/PIXI.Sprite.html | PIXI.Sprite]]
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
function createCreatejsBitmapParams() {
    return createCreatejsParams();
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
const P$3 = createjs.Bitmap;
/**
 * [[https://createjs.com/docs/easeljs/classes/Bitmap.html | createjs.Bitmap]]
 */
class CreatejsBitmap extends createjs.Bitmap {
    constructor(...args) {
        super(...args);
        this._pixiData = createPixiBitmapData(this);
        this._createjsParams = createCreatejsBitmapParams();
        this._createjsEventManager = new EventManager(this);
        P$3.apply(this, args);
    }
    initialize(...args) {
        this._pixiData = createPixiBitmapData(this);
        this._createjsParams = createCreatejsBitmapParams();
        this._createjsEventManager = new EventManager(this);
        const res = super.initialize(...args);
        const texture = Texture.from(this.image);
        this._pixiData.instance.texture = texture;
        return res;
    }
    get pixi() {
        return this._pixiData.instance;
    }
    updateForPixi(e) {
        return true;
    }
    get x() {
        return this._createjsParams.x;
    }
    set x(value) {
        this._pixiData.instance.x = value;
        this._createjsParams.x = value;
    }
    get y() {
        return this._createjsParams.y;
    }
    set y(value) {
        this._pixiData.instance.y = value;
        this._createjsParams.y = value;
    }
    get scaleX() {
        return this._createjsParams.scaleX;
    }
    set scaleX(value) {
        this._pixiData.instance.scale.x = value;
        this._createjsParams.scaleX = value;
    }
    get scaleY() {
        return this._createjsParams.scaleY;
    }
    set scaleY(value) {
        this._pixiData.instance.scale.y = value;
        this._createjsParams.scaleY = value;
    }
    get skewX() {
        return this._createjsParams.skewX;
    }
    set skewX(value) {
        this._pixiData.instance.skew.x = -value * DEG_TO_RAD;
        this._createjsParams.skewX = value;
    }
    get skewY() {
        return this._createjsParams.skewY;
    }
    set skewY(value) {
        this._pixiData.instance.skew.y = value * DEG_TO_RAD;
        this._createjsParams.skewY = value;
    }
    get regX() {
        return this._createjsParams.regX;
    }
    set regX(value) {
        this._pixiData.regObj.x = value;
        this._createjsParams.regX = value;
    }
    get regY() {
        return this._createjsParams.regY;
    }
    set regY(value) {
        this._pixiData.regObj.y = value;
        this._createjsParams.regY = value;
    }
    get rotation() {
        return this._createjsParams.rotation;
    }
    set rotation(value) {
        this._pixiData.instance.rotation = value * DEG_TO_RAD;
        this._createjsParams.rotation = value;
    }
    get visible() {
        return this._createjsParams.visible;
    }
    set visible(value) {
        value = !!value;
        this._pixiData.instance.visible = value;
        this._createjsParams.visible = value;
    }
    get alpha() {
        return this._createjsParams.alpha;
    }
    set alpha(value) {
        this._pixiData.instance.alpha = value;
        this._createjsParams.alpha = value;
    }
    get _off() {
        return this._createjsParams._off;
    }
    set _off(value) {
        this._pixiData.instance.renderable = !value;
        this._createjsParams._off = value;
    }
    addEventListener(type, cb, ...args) {
        if (!(cb instanceof CreatejsButtonHelper)) {
            if (type === 'mousedown' || type === 'rollover' || type === 'rollout' || type === 'pressmove' || type === 'pressup') {
                this._createjsEventManager.add(this._pixiData.instance, type, cb);
            }
        }
        return super.addEventListener(type, cb, ...args);
    }
    removeEventListener(type, cb, ...args) {
        if (!(cb instanceof CreatejsButtonHelper)) {
            if (type === 'mousedown' || type === 'rollover' || type === 'rollout' || type === 'pressmove' || type === 'pressup') {
                this._createjsEventManager.remove(this._pixiData.instance, type, cb);
            }
        }
        return super.removeEventListener(type, cb, ...args);
    }
    get mask() {
        return this._createjsParams.mask;
    }
    set mask(value) {
        if (value) {
            value.masked.push(this._pixiData.instance);
            this._pixiData.instance.mask = value.pixi;
            this._pixiData.instance.once('added', () => {
                this._pixiData.instance.parent.addChild(value.pixi);
            });
        }
        else {
            this._pixiData.instance.mask = null;
        }
        this._createjsParams.mask = value;
    }
}
// temporary prototype
Object.defineProperties(CreatejsBitmap.prototype, {
    _createjsParams: {
        value: createCreatejsBitmapParams(),
        writable: true
    },
    _pixiData: {
        value: createPixiBitmapData(createObject(CreatejsBitmap.prototype)),
        writable: true
    }
});

/**
 * [[http://pixijs.download/release/docs/PIXI.Graphics.html | PIXI.Graphics]]
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
function createCreatejsGraphicsParams() {
    return createCreatejsParams();
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
 * @ignore
 */
const P$4 = createjs.Graphics;
/**
 * [[https://createjs.com/docs/easeljs/classes/Graphics.html | createjs.Graphics]]
 */
class CreatejsGraphics extends createjs.Graphics {
    constructor(...args) {
        super(...args);
        this._pixiData = createPixiGraphicsData(this);
        this._createjsParams = createCreatejsGraphicsParams();
        this._createjsEventManager = new EventManager(this);
        P$4.apply(this, args);
        this._pixiData.instance.beginFill(0xFFEEEE, 1);
        this._pixiData.strokeFill = 0;
        this._pixiData.strokeAlpha = 1;
    }
    initialize(...args) {
        this._pixiData = createPixiGraphicsData(this);
        this._createjsParams = createCreatejsGraphicsParams();
        this._createjsEventManager = new EventManager(this);
        return super.initialize(...args);
    }
    get pixi() {
        return this._pixiData.instance;
    }
    updateForPixi(e) {
        return true;
    }
    get x() {
        return this._createjsParams.x;
    }
    set x(value) {
        this._pixiData.instance.x = value;
        this._createjsParams.x = value;
    }
    get y() {
        return this._createjsParams.y;
    }
    set y(value) {
        this._pixiData.instance.y = value;
        this._createjsParams.y = value;
    }
    get scaleX() {
        return this._createjsParams.scaleX;
    }
    set scaleX(value) {
        this._pixiData.instance.scale.x = value;
        this._createjsParams.scaleX = value;
    }
    get scaleY() {
        return this._createjsParams.scaleY;
    }
    set scaleY(value) {
        this._pixiData.instance.scale.y = value;
        this._createjsParams.scaleY = value;
    }
    get skewX() {
        return this._createjsParams.skewX;
    }
    set skewX(value) {
        this._pixiData.instance.skew.x = -value * DEG_TO_RAD;
        this._createjsParams.skewX = value;
    }
    get skewY() {
        return this._createjsParams.skewY;
    }
    set skewY(value) {
        this._pixiData.instance.skew.y = value * DEG_TO_RAD;
        this._createjsParams.skewY = value;
    }
    get regX() {
        return this._createjsParams.regX;
    }
    set regX(value) {
        this._pixiData.regObj.x = value;
        this._createjsParams.regX = value;
    }
    get regY() {
        return this._createjsParams.regY;
    }
    set regY(value) {
        this._pixiData.regObj.y = value;
        this._createjsParams.regY = value;
    }
    get rotation() {
        return this._createjsParams.rotation;
    }
    set rotation(value) {
        this._pixiData.instance.rotation = value * DEG_TO_RAD;
        this._createjsParams.rotation = value;
    }
    get visible() {
        return this._createjsParams.visible;
    }
    set visible(value) {
        value = !!value;
        this._pixiData.instance.visible = value;
        this._createjsParams.visible = value;
    }
    get alpha() {
        return this._createjsParams.alpha;
    }
    set alpha(value) {
        this._pixiData.instance.alpha = value;
        this._createjsParams.alpha = value;
    }
    get _off() {
        return this._createjsParams._off;
    }
    set _off(value) {
        this._pixiData.instance.renderable = !value;
        this._createjsParams._off = value;
    }
    addEventListener(type, cb, ...args) {
        if (!(cb instanceof CreatejsButtonHelper)) {
            if (type === 'mousedown' || type === 'rollover' || type === 'rollout' || type === 'pressmove' || type === 'pressup') {
                this._createjsEventManager.add(this._pixiData.instance, type, cb);
            }
        }
        return super.addEventListener(type, cb, ...args);
    }
    removeEventListener(type, cb, ...args) {
        if (!(cb instanceof CreatejsButtonHelper)) {
            if (type === 'mousedown' || type === 'rollover' || type === 'rollout' || type === 'pressmove' || type === 'pressup') {
                this._createjsEventManager.remove(this._pixiData.instance, type, cb);
            }
        }
        return super.removeEventListener(type, cb, ...args);
    }
    get mask() {
        return this._createjsParams.mask;
    }
    set mask(value) {
        if (value) {
            value.masked.push(this._pixiData.instance);
            this._pixiData.instance.mask = value.pixi;
            this._pixiData.instance.once('added', () => {
                this._pixiData.instance.parent.addChild(value.pixi);
            });
        }
        else {
            this._pixiData.instance.mask = null;
        }
        this._createjsParams.mask = value;
    }
    // path methods
    moveTo(x, y) {
        if (this._pixiData.instance.clone().endFill().containsPoint({ x: x, y: y })) {
            this._pixiData.instance.beginHole();
        }
        else {
            this._pixiData.instance.endHole();
        }
        this._pixiData.instance.moveTo(x, y);
        return super.moveTo(x, y);
    }
    mt(x, y) {
        return this.moveTo(x, y);
    }
    lineTo(x, y) {
        this._pixiData.instance.lineTo(x, y);
        return super.lineTo(x, y);
    }
    lt(x, y) {
        return this.lineTo(x, y);
    }
    arcTo(x1, y1, x2, y2, radius) {
        this._pixiData.instance.arcTo(x1, y1, x2, y2, radius);
        return super.arcTo(x1, y1, x2, y2, radius);
    }
    at(x1, y1, x2, y2, radius) {
        return this.arcTo(x1, y1, x2, y2, radius);
    }
    arc(x, y, radius, startAngle, endAngle, anticlockwise) {
        this._pixiData.instance.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        return super.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    }
    a(x, y, radius, startAngle, endAngle, anticlockwise) {
        return this.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    }
    quadraticCurveTo(cpx, cpy, x, y) {
        this._pixiData.instance.quadraticCurveTo(cpx, cpy, x, y);
        return super.quadraticCurveTo(cpx, cpy, x, y);
    }
    qt(cpx, cpy, x, y) {
        return this.quadraticCurveTo(cpx, cpy, x, y);
    }
    curveTo(cpx, cpy, x, y) {
        return this.quadraticCurveTo(cpx, cpy, x, y);
    }
    bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
        this._pixiData.instance.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
        return super.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    }
    bt(cp1x, cp1y, cp2x, cp2y, x, y) {
        return this.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    }
    rect(x, y, w, h) {
        this._pixiData.instance.drawRect(x, y, w, h);
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
        this._pixiData.instance.closePath();
        return super.closePath();
    }
    cp() {
        return this.closePath();
    }
    clear() {
        this._pixiData.instance.clear();
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
        this._pixiData.instance.beginFill(c.color, c.alpha);
        return super.beginFill(color);
    }
    f(color) {
        return this.beginFill(color);
    }
    endFill() {
        this._pixiData.instance.endFill();
        return super.endFill();
    }
    ef() {
        return this.endFill();
    }
    setStrokeStyle(thickness, caps, joints, miterLimit, ignoreScale) {
        this._pixiData.instance.lineTextureStyle({
            width: thickness,
            color: this._pixiData.strokeFill,
            alpha: this._pixiData.strokeAlpha,
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
        const c = this._parseColor(color);
        this._pixiData.strokeFill = c.color;
        this._pixiData.strokeAlpha = c.alpha;
        return super.beginStroke(color);
    }
    s(color) {
        return this.beginStroke(color);
    }
    drawRoundRect(x, y, w, h, radius) {
        this._pixiData.instance.drawRoundedRect(x, y, w, h, radius);
        return super.drawRoundRect(x, y, w, h, radius);
    }
    rr(x, y, w, h, radius) {
        return this.drawRoundRect(x, y, w, h, radius);
    }
    drawCircle(x, y, radius) {
        this._pixiData.instance.drawCircle(x, y, radius);
        return super.drawCircle(x, y, radius);
    }
    dc(x, y, radius) {
        return this.drawCircle(x, y, radius);
    }
    drawEllipse(x, y, w, h) {
        this._pixiData.instance.drawEllipse(x, y, w, h);
        return super.drawEllipse(x, y, w, h);
    }
    de(x, y, w, h) {
        return this.drawEllipse(x, y, w, h);
    }
    drawPolyStar(x, y, radius, sides, pointSize, angle) {
        this._pixiData.instance.drawRegularPolygon(x, y, radius, sides, angle * DEG_TO_RAD);
        return super.drawPolyStar(x, y, radius, sides, pointSize, angle);
    }
    dp(x, y, radius, sides, pointSize, angle) {
        return this.drawPolyStar(x, y, radius, sides, pointSize, angle);
    }
}
// temporary prototype
Object.defineProperties(CreatejsGraphics.prototype, {
    _createjsParams: {
        value: createCreatejsGraphicsParams(),
        writable: true
    },
    _pixiData: {
        value: createPixiGraphicsData(createObject(CreatejsGraphics.prototype)),
        writable: true
    }
});

/**
 * [[http://pixijs.download/release/docs/PIXI.Text.html | PIXI.Text]]
 */
class PixiText extends Text {
}
/**
 * [[http://pixijs.download/release/docs/PIXI.Container.html | PIXI.Container]]
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
function createCreatejsTextParams(text, font, color) {
    return Object.assign(createCreatejsParams(), {
        text: text,
        font: font,
        color: color,
        textAlign: DEF_ALIGN,
        lineHeight: 0,
        lineWidth: 0
    });
}
/**
 * @ignore
 */
function createPixiTextData(cjs, text) {
    const pixi = new PixiTextContainer(cjs, text);
    return createPixiData(pixi, pixi.pivot);
}
/**
 * @ignore
 */
const P$5 = createjs.Text;
/**
 * [[https://createjs.com/docs/easeljs/classes/Text.html | createjs.Text]]
 */
class CreatejsText extends createjs.Text {
    constructor(text, font, color = '#000000', ...args) {
        super(text, font, color, ...args);
        this._createjsParams = createCreatejsTextParams(text, font, color);
        const _font = this._parseFont(font);
        const t = new PixiText(text, {
            fontWeight: _font.fontWeight,
            fontSize: _font.fontSize,
            fontFamily: _font.fontFamily,
            fill: this._parseColor(color),
            wordWrap: true
        });
        this._pixiData = createPixiTextData(this, t);
        this._pixiData.instance.addChild(t);
        this._createjsEventManager = new EventManager(this);
        P$5.call(this, text, font, color, ...args);
    }
    get pixi() {
        return this._pixiData.instance;
    }
    updateForPixi(e) {
        return true;
    }
    get x() {
        return this._createjsParams.x;
    }
    set x(value) {
        this._pixiData.instance.x = value;
        this._createjsParams.x = value;
    }
    get y() {
        return this._createjsParams.y;
    }
    set y(value) {
        this._pixiData.instance.y = value;
        this._createjsParams.y = value;
    }
    get scaleX() {
        return this._createjsParams.scaleX;
    }
    set scaleX(value) {
        this._pixiData.instance.scale.x = value;
        this._createjsParams.scaleX = value;
    }
    get scaleY() {
        return this._createjsParams.scaleY;
    }
    set scaleY(value) {
        this._pixiData.instance.scale.y = value;
        this._createjsParams.scaleY = value;
    }
    get skewX() {
        return this._createjsParams.skewX;
    }
    set skewX(value) {
        this._pixiData.instance.skew.x = -value * DEG_TO_RAD;
        this._createjsParams.skewX = value;
    }
    get skewY() {
        return this._createjsParams.skewY;
    }
    set skewY(value) {
        this._pixiData.instance.skew.y = value * DEG_TO_RAD;
        this._createjsParams.skewY = value;
    }
    get regX() {
        return this._createjsParams.regX;
    }
    set regX(value) {
        this._pixiData.regObj.x = value;
        this._createjsParams.regX = value;
    }
    get regY() {
        return this._createjsParams.regY;
    }
    set regY(value) {
        this._pixiData.regObj.y = value;
        this._createjsParams.regY = value;
    }
    get rotation() {
        return this._createjsParams.rotation;
    }
    set rotation(value) {
        this._pixiData.instance.rotation = value * DEG_TO_RAD;
        this._createjsParams.rotation = value;
    }
    get visible() {
        return this._createjsParams.visible;
    }
    set visible(value) {
        value = !!value;
        this._pixiData.instance.visible = value;
        this._createjsParams.visible = value;
    }
    get alpha() {
        return this._createjsParams.alpha;
    }
    set alpha(value) {
        this._pixiData.instance.alpha = value;
        this._createjsParams.alpha = value;
    }
    get _off() {
        return this._createjsParams._off;
    }
    set _off(value) {
        this._pixiData.instance.renderable = !value;
        this._createjsParams._off = value;
    }
    addEventListener(type, cb, ...args) {
        if (!(cb instanceof CreatejsButtonHelper)) {
            if (type === 'mousedown' || type === 'rollover' || type === 'rollout' || type === 'pressmove' || type === 'pressup') {
                this._createjsEventManager.add(this._pixiData.instance, type, cb);
            }
        }
        return super.addEventListener(type, cb, ...args);
    }
    removeEventListener(type, cb, ...args) {
        if (!(cb instanceof CreatejsButtonHelper)) {
            if (type === 'mousedown' || type === 'rollover' || type === 'rollout' || type === 'pressmove' || type === 'pressup') {
                this._createjsEventManager.remove(this._pixiData.instance, type, cb);
            }
        }
        return super.removeEventListener(type, cb, ...args);
    }
    get mask() {
        return this._createjsParams.mask;
    }
    set mask(value) {
        if (value) {
            value.masked.push(this._pixiData.instance);
            this._pixiData.instance.mask = value.pixi;
            this._pixiData.instance.once('added', () => {
                this._pixiData.instance.parent.addChild(value.pixi);
            });
        }
        else {
            this._pixiData.instance.mask = null;
        }
        this._createjsParams.mask = value;
    }
    get text() {
        return this._createjsParams.text;
    }
    set text(text) {
        this._pixiData.instance.text.text = text;
        this._align(this.textAlign);
        this._createjsParams.text = text;
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
        return this._createjsParams.font;
    }
    set font(font) {
        const _font = this._parseFont(font);
        this._pixiData.instance.text.style.fontSize = _font.fontSize;
        this._pixiData.instance.text.style.fontFamily = _font.fontFamily;
        this._createjsParams.font = font;
    }
    _parseColor(color) {
        return parseInt(color.slice(1), 16);
    }
    get color() {
        return this._createjsParams.color;
    }
    set color(color) {
        this._pixiData.instance.text.style.fill = this._parseColor(color);
        this._createjsParams.color = color;
    }
    _align(align) {
        if (align === 'left') {
            this._pixiData.instance.text.x = 0;
            return;
        }
        if (align === 'center') {
            this._pixiData.instance.text.x = -this._pixiData.instance.text.width / 2;
            return;
        }
        if (align === 'right') {
            this._pixiData.instance.text.x = -this._pixiData.instance.text.width;
            return;
        }
    }
    get textAlign() {
        return this._createjsParams.textAlign;
    }
    set textAlign(align) {
        this._pixiData.instance.text.style.align = align;
        this._align(align);
        this._createjsParams.textAlign = align;
    }
    get lineHeight() {
        return this._createjsParams.lineHeight;
    }
    set lineHeight(height) {
        this._pixiData.instance.text.style.lineHeight = height;
        this._createjsParams.lineHeight = height;
    }
    get lineWidth() {
        return this._createjsParams.lineWidth;
    }
    set lineWidth(width) {
        this._pixiData.instance.text.style.wordWrapWidth = width;
        this._align(this.textAlign);
        this._createjsParams.lineWidth = width;
    }
}
// temporary prototype
Object.defineProperties(CreatejsText.prototype, {
    _createjsParams: {
        value: createCreatejsTextParams('', '', ''),
        writable: true
    },
    _pixiData: {
        value: createPixiTextData(createObject(CreatejsText.prototype), new PixiText('')),
        writable: true
    }
});

/**
 * Load assets of createjs content published with Adobe Animate.
 *
 * @param comp Composition obtained from `AdobeAn.getComposition`.
 * @param basepath Directory path of Animate content.
 */
function loadAssetAsync(comp, basepath, options = {}) {
    if (!comp) {
        throw new Error('no composition');
    }
    const lib = comp.getLibrary();
    return new Promise((resolve, reject) => {
        if (lib.properties.manifest.length === 0) {
            resolve({});
        }
        if (basepath) {
            basepath = (basepath + '/').replace(/([^\:])\/\//, "$1/");
        }
        const loader = new createjs.LoadQueue(false, basepath);
        loader.installPlugin(createjs.Sound);
        loader.addEventListener('fileload', function (evt) {
            handleFileLoad(evt, comp);
        });
        loader.addEventListener('complete', function (evt) {
            resolve(evt);
        });
        if (options.crossOrigin) {
            const m = lib.properties.manifest;
            for (let i = 0; i < m.length; i++) {
                m[i].crossOrigin = true;
            }
        }
        loader.loadManifest(lib.properties.manifest);
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
}
// overrides
createjs.Stage = CreatejsStage;
createjs.StageGL = CreatejsStageGL;
createjs.MovieClip = CreatejsMovieClip;
createjs.Sprite = CreatejsSprite;
createjs.Shape = CreatejsShape;
createjs.Bitmap = CreatejsBitmap;
createjs.Graphics = CreatejsGraphics;
createjs.Text = CreatejsText;
createjs.ButtonHelper = CreatejsButtonHelper;
// install plugins
createjs.MotionGuidePlugin.install();
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
const P$6 = 1000 / 60;
/**
 * \@tawaship/pixi-animate-core [[https://tawaship.github.io/pixi-animate-core/classes/createjsmovieclip.html | CreatejsMovieClip]]
 */
class CreatejsMovieClip$1 extends CreatejsMovieClip {
    constructor(...args) {
        super(...args);
        this.framerate = this._framerateBase;
    }
    initialize(...args) {
        super.initialize(...args);
        this.framerate = this._framerateBase;
    }
    /**
     * @override
     */
    updateForPixi(e) {
        this.advance(e.delta * P$6);
        return super.updateForPixi(e);
    }
}

/**
 * Load the assets of createjs content published by Adobe Animate.
 * If you use multiple contents, each composition ID must be unique.
 * Please run "Pixim.animate.init" before running.
 */
function loadAssetAsync$1(targets) {
    if (!Array.isArray(targets)) {
        targets = [targets];
    }
    const promises = [];
    for (let i = 0; i < targets.length; i++) {
        const target = targets[i];
        const comp = AdobeAn.getComposition(target.id);
        if (!comp) {
            throw new Error(`no composition: ${target.id}`);
        }
        promises.push(loadAssetAsync(comp, target.basepath, target.options)
            .then((lib) => {
            for (let i in lib) {
                if (lib[i].prototype instanceof CreatejsMovieClip$1) {
                    lib[i].prototype._framerateBase = lib.properties.fps;
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
// overrides
createjs.MovieClip = CreatejsMovieClip$1;

/**
 * [[https://tawaship.github.io/Pixim.js/classes/container.html | Pixim.Container]]
 */
class Container extends Container$1 {
    constructor(ticker) {
        super();
        this._createjsData = {
            id: 0,
            targets: {}
        };
        this.on('added', () => {
            ticker.add(this._handleTick, this);
        });
        this.on('removed', () => {
            ticker.remove(this._handleTick, this);
        });
    }
    _handleTick(delta) {
        const e = { delta };
        const targets = this._createjsData.targets;
        for (let i in targets) {
            targets[i].updateForPixi(e);
        }
    }
    _addCreatejs(cjs) {
        if (cjs instanceof CreatejsMovieClip$1) {
            const p = cjs.pixi.parent;
            cjs.pixi.once('added', () => {
                if (cjs.pixi.parent !== p) {
                    cjs.gotoAndPlay(0);
                }
                const id = this._createjsData.id++;
                this._createjsData.targets[id] = cjs;
                cjs.pixi.once('removed', () => {
                    delete (this._createjsData.targets[id]);
                });
            });
        }
    }
    /**
     * [[https://tawaship.github.io/pixi-animate-core/modules.html#tcreatejsobject | TCreatejsObject]]
     */
    addCreatejs(cjs) {
        this._addCreatejs(cjs);
        this.addChild(cjs.pixi);
        return cjs;
    }
    /**
     * [[https://tawaship.github.io/pixi-animate-core/modules.html#tcreatejsobject | TCreatejsObject]]
     */
    addCreatejsAt(cjs, index) {
        this._addCreatejs(cjs);
        this.addChildAt(cjs.pixi, index);
        return cjs;
    }
    /**
     * [[https://tawaship.github.io/pixi-animate-core/modules.html#tcreatejsobject | TCreatejsObject]]
     */
    removeCreatejs(cjs) {
        this.removeChild(cjs.pixi);
        return cjs;
    }
}

export { Container, CreatejsMovieClip$1 as CreatejsMovieClip, loadAssetAsync$1 as loadAssetAsync };
//# sourceMappingURL=pixi-animate-container.esm.js.map
