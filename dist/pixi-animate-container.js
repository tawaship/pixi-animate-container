/*!
 * pixi-animate-container - v1.0.2
 * 
 * @require pixi.js v^5.3.2
 * @author tawaship (makazu.mori@gmail.com)
 * @license MIT
 */
this.PIXI = this.PIXI || {}, function(exports, createjs, pixi_js) {
    "use strict";
    /*!
     * @tawaship/pixi-animate-core - v3.0.4
     * 
     * @require pixi.js v^5.3.2
     * @author tawaship (makazu.mori@gmail.com)
     * @license MIT
     */
    function createPixiData(pixi, regObj) {
        return {
            regObj: regObj,
            instance: pixi
        };
    }
    function updateDisplayObjectChildren(cjs, e) {
        for (var list = cjs.children.slice(), i = 0, l = list.length; i < l; i++) {
            var child = list[i];
            child.isVisible() && child.updateForPixi(e);
        }
        return !0;
    }
    var CreatejsStage = function(superclass) {
        function CreatejsStage() {
            superclass.apply(this, arguments);
        }
        return superclass && (CreatejsStage.__proto__ = superclass), CreatejsStage.prototype = Object.create(superclass && superclass.prototype), 
        CreatejsStage.prototype.constructor = CreatejsStage, CreatejsStage.prototype.updateForPixi = function(props) {
            return this.tickOnUpdate && this.tick(props), this.dispatchEvent("drawstart"), updateDisplayObjectChildren(this, props), 
            this.dispatchEvent("drawend"), !0;
        }, CreatejsStage;
    }((createjs = createjs && Object.prototype.hasOwnProperty.call(createjs, "default") ? createjs.default : createjs).Stage), CreatejsStageGL = function(superclass) {
        function CreatejsStageGL() {
            superclass.apply(this, arguments);
        }
        return superclass && (CreatejsStageGL.__proto__ = superclass), CreatejsStageGL.prototype = Object.create(superclass && superclass.prototype), 
        CreatejsStageGL.prototype.constructor = CreatejsStageGL, CreatejsStageGL.prototype.updateForPixi = function(props) {
            return this.tickOnUpdate && this.tick(props), this.dispatchEvent("drawstart"), updateDisplayObjectChildren(this, props), 
            this.dispatchEvent("drawend"), !0;
        }, CreatejsStageGL;
    }(createjs.StageGL);
    function createObject(proto) {
        return Object.create(proto);
    }
    var DEG_TO_RAD = Math.PI / 180, EventManager = function(cjs) {
        var this$1 = this;
        this._isDown = !1, this._events = {
            pointerdown: [],
            pointerover: [],
            pointerout: [],
            pointermove: [],
            pointerup: [],
            pointerupoutside: []
        }, this._data = {
            mousedown: {
                types: [ "pointerdown" ],
                factory: function(cb) {
                    return this$1._mousedownFactory(cjs, cb);
                }
            },
            rollover: {
                types: [ "pointerover" ],
                factory: function(cb) {
                    return this$1._rolloverFactory(cjs, cb);
                }
            },
            rollout: {
                types: [ "pointerout" ],
                factory: function(cb) {
                    return this$1._rolloutFactory(cjs, cb);
                }
            },
            pressmove: {
                types: [ "pointermove" ],
                factory: function(cb) {
                    return console.log(cb), this$1._pressmoveFactory(cjs, cb);
                }
            },
            pressup: {
                types: [ "pointerup", "pointerupoutside" ],
                factory: function(cb) {
                    return this$1._pressupFactory(cjs, cb);
                }
            }
        };
    };
    EventManager.prototype.add = function(pixi, type, cb) {
        for (var data = this._data[type], types = data.types, func = data.factory(cb), i = 0; i < types.length; i++) {
            var t = types[i];
            this._events[t].push({
                func: func,
                origin: cb
            }), pixi.on(t, func);
        }
        pixi.interactive = !0;
    }, EventManager.prototype.remove = function(pixi, type, cb) {
        for (var types = this._data[type].types, i = 0; i < types.length; i++) {
            var t = types[i], list = this._events[t];
            if (list) {
                for (var j = list.length - 1; j >= 0; j--) {
                    if (list[j].origin === cb) {
                        pixi.off(t, list[j].func), list.splice(j, 1);
                        break;
                    }
                }
                0 === list.length && (this._events[t] = []);
            }
        }
    }, EventManager.prototype._mousedownFactory = function(cjs, cb) {
        var this$1 = this;
        return function(e) {
            e.currentTarget = e.currentTarget.createjs, e.target = e.target.createjs;
            var ev = e.data;
            e.rawX = ev.global.x, e.rawY = ev.global.y, this$1._isDown = !0, cb(e);
        };
    }, EventManager.prototype._rolloverFactory = function(cjs, cb) {
        var this$1 = this;
        return function(e) {
            e.currentTarget = e.currentTarget.createjs, e.target = e.currentTarget.createjs;
            var ev = e.data;
            e.rawX = ev.global.x, e.rawY = ev.global.y, this$1._isDown = !0, cb(e);
        };
    }, EventManager.prototype._rolloutFactory = function(cjs, cb) {
        var this$1 = this;
        return function(e) {
            e.currentTarget = e.currentTarget.createjs, e.target = e.currentTarget.createjs;
            var ev = e.data;
            e.rawX = ev.global.x, e.rawY = ev.global.y, this$1._isDown = !0, cb(e);
        };
    }, EventManager.prototype._pressmoveFactory = function(cjs, cb) {
        var this$1 = this;
        return function(e) {
            if (this$1._isDown) {
                e.currentTarget = cjs, e.target = e.target && e.target.createjs;
                var ev = e.data;
                e.rawX = ev.global.x, e.rawY = ev.global.y, cb(e);
            }
        };
    }, EventManager.prototype._pressupFactory = function(cjs, cb) {
        var this$1 = this;
        return function(e) {
            if (this$1._isDown) {
                e.currentTarget = cjs, this$1._isDown = !1, e.target = e.target && e.target.createjs;
                var ev = e.data;
                e.rawX = ev.global.x, e.rawY = ev.global.y, cb(e);
            }
        };
    };
    var CreatejsButtonHelper = function(superclass) {
        function CreatejsButtonHelper() {
            for (var args = [], len = arguments.length; len--; ) {
                args[len] = arguments[len];
            }
            superclass.apply(this, args);
            var createjs = args[0], pixi = createjs.pixi, baseFrame = args[1], overFrame = args[2], downFrame = args[3], hit = arguments[5], hitFrame = args[6];
            hit.gotoAndStop(hitFrame);
            var hitPixi = pixi.addChild(hit.pixi);
            hitPixi.alpha = 1e-5;
            var isOver = !1, isDown = !1;
            hitPixi.on("pointerover", (function() {
                isOver = !0, isDown ? createjs.gotoAndStop(downFrame) : createjs.gotoAndStop(overFrame);
            })), hitPixi.on("pointerout", (function() {
                isOver = !1, isDown ? createjs.gotoAndStop(overFrame) : createjs.gotoAndStop(baseFrame);
            })), hitPixi.on("pointerdown", (function() {
                isDown = !0, createjs.gotoAndStop(downFrame);
            })), hitPixi.on("pointerup", (function() {
                isDown = !1, isOver ? createjs.gotoAndStop(overFrame) : createjs.gotoAndStop(baseFrame);
            })), hitPixi.on("pointerupoutside", (function() {
                isDown = !1, isOver ? createjs.gotoAndStop(overFrame) : createjs.gotoAndStop(baseFrame);
            })), hitPixi.interactive = !0, hitPixi.cursor = "pointer";
        }
        return superclass && (CreatejsButtonHelper.__proto__ = superclass), CreatejsButtonHelper.prototype = Object.create(superclass && superclass.prototype), 
        CreatejsButtonHelper.prototype.constructor = CreatejsButtonHelper, CreatejsButtonHelper;
    }(createjs.ButtonHelper), PixiMovieClip = function(Container) {
        function PixiMovieClip(cjs) {
            Container.call(this), this._filterContainer = null, this._createjs = cjs;
        }
        Container && (PixiMovieClip.__proto__ = Container), PixiMovieClip.prototype = Object.create(Container && Container.prototype), 
        PixiMovieClip.prototype.constructor = PixiMovieClip;
        var prototypeAccessors = {
            filterContainer: {
                configurable: !0
            },
            createjs: {
                configurable: !0
            }
        };
        return prototypeAccessors.filterContainer.get = function() {
            return this._filterContainer;
        }, prototypeAccessors.filterContainer.set = function(value) {
            this._filterContainer = value;
        }, prototypeAccessors.createjs.get = function() {
            return this._createjs;
        }, Object.defineProperties(PixiMovieClip.prototype, prototypeAccessors), PixiMovieClip;
    }(pixi_js.Container);
    function createPixiMovieClipData(cjs) {
        var pixi = new PixiMovieClip(cjs);
        return Object.assign(createPixiData(pixi, pixi.pivot), {
            subInstance: pixi
        });
    }
    var P = createjs.MovieClip, CreatejsMovieClip = function(superclass) {
        function CreatejsMovieClip() {
            for (var args = [], len = arguments.length; len--; ) {
                args[len] = arguments[len];
            }
            superclass.call(this), this._pixiData = createPixiMovieClipData(this), this._createjsParams = {
                x: 0,
                y: 0,
                scaleX: 0,
                scaleY: 0,
                regX: 0,
                regY: 0,
                skewX: 0,
                skewY: 0,
                rotation: 0,
                visible: !0,
                alpha: 1,
                _off: !1,
                mask: null,
                filters: null
            }, this._createjsEventManager = new EventManager(this), P.apply(this, args);
        }
        superclass && (CreatejsMovieClip.__proto__ = superclass), CreatejsMovieClip.prototype = Object.create(superclass && superclass.prototype), 
        CreatejsMovieClip.prototype.constructor = CreatejsMovieClip;
        var prototypeAccessors$1 = {
            pixi: {
                configurable: !0
            },
            x: {
                configurable: !0
            },
            y: {
                configurable: !0
            },
            scaleX: {
                configurable: !0
            },
            scaleY: {
                configurable: !0
            },
            skewX: {
                configurable: !0
            },
            skewY: {
                configurable: !0
            },
            regX: {
                configurable: !0
            },
            regY: {
                configurable: !0
            },
            rotation: {
                configurable: !0
            },
            visible: {
                configurable: !0
            },
            alpha: {
                configurable: !0
            },
            _off: {
                configurable: !0
            },
            mask: {
                configurable: !0
            },
            filters: {
                configurable: !0
            }
        };
        return CreatejsMovieClip.prototype.initialize = function() {
            for (var args = [], len = arguments.length; len--; ) {
                args[len] = arguments[len];
            }
            return this._pixiData = createPixiMovieClipData(this), this._createjsParams = {
                x: 0,
                y: 0,
                scaleX: 0,
                scaleY: 0,
                regX: 0,
                regY: 0,
                skewX: 0,
                skewY: 0,
                rotation: 0,
                visible: !0,
                alpha: 1,
                _off: !1,
                mask: null,
                filters: null
            }, this._createjsEventManager = new EventManager(this), superclass.prototype.initialize.apply(this, args);
        }, prototypeAccessors$1.pixi.get = function() {
            return this._pixiData.instance;
        }, CreatejsMovieClip.prototype.updateForPixi = function(e) {
            return this._updateState(), updateDisplayObjectChildren(this, e);
        }, prototypeAccessors$1.x.get = function() {
            return this._createjsParams.x;
        }, prototypeAccessors$1.x.set = function(value) {
            this._pixiData.instance.x = value, this._createjsParams.x = value;
        }, prototypeAccessors$1.y.get = function() {
            return this._createjsParams.y;
        }, prototypeAccessors$1.y.set = function(value) {
            this._pixiData.instance.y = value, this._createjsParams.y = value;
        }, prototypeAccessors$1.scaleX.get = function() {
            return this._createjsParams.scaleX;
        }, prototypeAccessors$1.scaleX.set = function(value) {
            this._pixiData.instance.scale.x = value, this._createjsParams.scaleX = value;
        }, prototypeAccessors$1.scaleY.get = function() {
            return this._createjsParams.scaleY;
        }, prototypeAccessors$1.scaleY.set = function(value) {
            this._pixiData.instance.scale.y = value, this._createjsParams.scaleY = value;
        }, prototypeAccessors$1.skewX.get = function() {
            return this._createjsParams.skewX;
        }, prototypeAccessors$1.skewX.set = function(value) {
            this._pixiData.instance.skew.x = -value * DEG_TO_RAD, this._createjsParams.skewX = value;
        }, prototypeAccessors$1.skewY.get = function() {
            return this._createjsParams.skewY;
        }, prototypeAccessors$1.skewY.set = function(value) {
            this._pixiData.instance.skew.y = value * DEG_TO_RAD, this._createjsParams.skewY = value;
        }, prototypeAccessors$1.regX.get = function() {
            return this._createjsParams.regX;
        }, prototypeAccessors$1.regX.set = function(value) {
            this._pixiData.regObj.x = value, this._createjsParams.regX = value;
        }, prototypeAccessors$1.regY.get = function() {
            return this._createjsParams.regY;
        }, prototypeAccessors$1.regY.set = function(value) {
            this._pixiData.regObj.y = value, this._createjsParams.regY = value;
        }, prototypeAccessors$1.rotation.get = function() {
            return this._createjsParams.rotation;
        }, prototypeAccessors$1.rotation.set = function(value) {
            this._pixiData.instance.rotation = value * DEG_TO_RAD, this._createjsParams.rotation = value;
        }, prototypeAccessors$1.visible.get = function() {
            return this._createjsParams.visible;
        }, prototypeAccessors$1.visible.set = function(value) {
            value = !!value, this._pixiData.instance.visible = value, this._createjsParams.visible = value;
        }, prototypeAccessors$1.alpha.get = function() {
            return this._createjsParams.alpha;
        }, prototypeAccessors$1.alpha.set = function(value) {
            this._pixiData.instance.alpha = value, this._createjsParams.alpha = value;
        }, prototypeAccessors$1._off.get = function() {
            return this._createjsParams._off;
        }, prototypeAccessors$1._off.set = function(value) {
            this._pixiData.instance.renderable = !value, this._createjsParams._off = value;
        }, CreatejsMovieClip.prototype.addEventListener = function(type, cb) {
            for (var args = [], len = arguments.length - 2; len-- > 0; ) {
                args[len] = arguments[len + 2];
            }
            return cb instanceof CreatejsButtonHelper || "mousedown" !== type && "rollover" !== type && "rollout" !== type && "pressmove" !== type && "pressup" !== type || this._createjsEventManager.add(this._pixiData.instance, type, cb), 
            superclass.prototype.addEventListener.apply(this, [ type, cb ].concat(args));
        }, CreatejsMovieClip.prototype.removeEventListener = function(type, cb) {
            for (var args = [], len = arguments.length - 2; len-- > 0; ) {
                args[len] = arguments[len + 2];
            }
            return cb instanceof CreatejsButtonHelper || "mousedown" !== type && "rollover" !== type && "rollout" !== type && "pressmove" !== type && "pressup" !== type || this._createjsEventManager.remove(this._pixiData.instance, type, cb), 
            superclass.prototype.removeEventListener.apply(this, [ type, cb ].concat(args));
        }, prototypeAccessors$1.mask.get = function() {
            return this._createjsParams.mask;
        }, prototypeAccessors$1.mask.set = function(value) {
            var this$1 = this;
            value ? (value.masked.push(this._pixiData.instance), this._pixiData.instance.mask = value.pixi, 
            this._pixiData.instance.once("added", (function() {
                this$1._pixiData.instance.parent.addChild(value.pixi);
            }))) : this._pixiData.instance.mask = null, this._createjsParams.mask = value;
        }, prototypeAccessors$1.filters.get = function() {
            return this._createjsParams.filters;
        }, prototypeAccessors$1.filters.set = function(value) {
            if (value) {
                for (var list = [], i = 0; i < value.length; i++) {
                    var f = value[i];
                    if (!(f instanceof createjs.ColorMatrixFilter)) {
                        var m = new pixi_js.filters.ColorMatrixFilter;
                        m.matrix = [ f.redMultiplier, 0, 0, 0, f.redOffset / 255, 0, f.greenMultiplier, 0, 0, f.greenOffset / 255, 0, 0, f.blueMultiplier, 0, f.blueOffset / 255, 0, 0, 0, f.alphaMultiplier, f.alphaOffset / 255, 0, 0, 0, 0, 1 ], 
                        list.push(m);
                    }
                }
                for (var o = this._pixiData.instance, c = o.children, n = new pixi_js.Container, nc = this._pixiData.subInstance = n.addChild(new pixi_js.Container); c.length; ) {
                    nc.addChild(c[0]);
                }
                o.addChild(n), o.filterContainer = nc, nc.updateTransform(), nc.calculateBounds();
                var b = nc.getLocalBounds(), x = b.x, y = b.y;
                for (i = 0; i < nc.children.length; i++) {
                    var child = nc.children[i];
                    if (child.x -= x, child.y -= y, child instanceof PixiMovieClip) {
                        var fc = child.filterContainer;
                        fc && (fc.cacheAsBitmap = !1);
                    }
                }
                n.x = x, n.y = y, nc.filters = list, nc.cacheAsBitmap = !0;
            } else {
                var o$1 = this._pixiData.instance;
                if (o$1.filterContainer) {
                    var nc$1 = this._pixiData.subInstance, n$1 = nc$1.parent, c$1 = nc$1.children;
                    for (o$1.removeChildren(), o$1.filterContainer = null; c$1.length; ) {
                        var v = o$1.addChild(c$1[0]);
                        v.x += n$1.x, v.y += n$1.y;
                    }
                    nc$1.filters = [], nc$1.cacheAsBitmap = !1, this._pixiData.subInstance = o$1;
                }
            }
            this._createjsParams.filters = value;
        }, CreatejsMovieClip.prototype.addChild = function(child) {
            return this._pixiData.subInstance.addChild(child.pixi), superclass.prototype.addChild.call(this, child);
        }, CreatejsMovieClip.prototype.addChildAt = function(child, index) {
            return this._pixiData.subInstance.addChildAt(child.pixi, index), superclass.prototype.addChildAt.call(this, child, index);
        }, CreatejsMovieClip.prototype.removeChild = function(child) {
            return this._pixiData.subInstance.removeChild(child.pixi), superclass.prototype.removeChild.call(this, child);
        }, CreatejsMovieClip.prototype.removeChildAt = function(index) {
            return this._pixiData.subInstance.removeChildAt(index), superclass.prototype.removeChildAt.call(this, index);
        }, CreatejsMovieClip.prototype.removeAllChldren = function() {
            return this._pixiData.subInstance.removeChildren(), superclass.prototype.removeAllChldren.call(this);
        }, Object.defineProperties(CreatejsMovieClip.prototype, prototypeAccessors$1), CreatejsMovieClip;
    }(createjs.MovieClip);
    Object.defineProperties(CreatejsMovieClip.prototype, {
        _createjsParams: {
            value: {
                x: 0,
                y: 0,
                scaleX: 0,
                scaleY: 0,
                regX: 0,
                regY: 0,
                skewX: 0,
                skewY: 0,
                rotation: 0,
                visible: !0,
                alpha: 1,
                _off: !1,
                mask: null,
                filters: null
            },
            writable: !0
        },
        _pixiData: {
            value: createPixiMovieClipData(createObject(CreatejsMovieClip.prototype)),
            writable: !0
        }
    });
    var PixiSprite = function(Sprite) {
        function PixiSprite(cjs) {
            Sprite.call(this), this._createjs = cjs;
        }
        Sprite && (PixiSprite.__proto__ = Sprite), PixiSprite.prototype = Object.create(Sprite && Sprite.prototype), 
        PixiSprite.prototype.constructor = PixiSprite;
        var prototypeAccessors$2 = {
            createjs: {
                configurable: !0
            }
        };
        return prototypeAccessors$2.createjs.get = function() {
            return this._createjs;
        }, Object.defineProperties(PixiSprite.prototype, prototypeAccessors$2), PixiSprite;
    }(pixi_js.Sprite);
    function createPixiSpriteData(cjs) {
        var pixi = new PixiSprite(cjs);
        return createPixiData(pixi, pixi.anchor);
    }
    var P$1 = createjs.Sprite, CreatejsSprite = function(superclass) {
        function CreatejsSprite() {
            for (var args = [], len = arguments.length; len--; ) {
                args[len] = arguments[len];
            }
            superclass.apply(this, args), this._pixiData = createPixiSpriteData(this), this._createjsParams = {
                x: 0,
                y: 0,
                scaleX: 0,
                scaleY: 0,
                regX: 0,
                regY: 0,
                skewX: 0,
                skewY: 0,
                rotation: 0,
                visible: !0,
                alpha: 1,
                _off: !1,
                mask: null,
                filters: null
            }, this._createjsEventManager = new EventManager(this), P$1.apply(this, args);
        }
        superclass && (CreatejsSprite.__proto__ = superclass), CreatejsSprite.prototype = Object.create(superclass && superclass.prototype), 
        CreatejsSprite.prototype.constructor = CreatejsSprite;
        var prototypeAccessors$3 = {
            pixi: {
                configurable: !0
            },
            x: {
                configurable: !0
            },
            y: {
                configurable: !0
            },
            scaleX: {
                configurable: !0
            },
            scaleY: {
                configurable: !0
            },
            skewX: {
                configurable: !0
            },
            skewY: {
                configurable: !0
            },
            regX: {
                configurable: !0
            },
            regY: {
                configurable: !0
            },
            rotation: {
                configurable: !0
            },
            visible: {
                configurable: !0
            },
            alpha: {
                configurable: !0
            },
            _off: {
                configurable: !0
            },
            mask: {
                configurable: !0
            }
        };
        return CreatejsSprite.prototype.initialize = function() {
            for (var args = [], len = arguments.length; len--; ) {
                args[len] = arguments[len];
            }
            return this._pixiData = createPixiSpriteData(this), this._createjsParams = {
                x: 0,
                y: 0,
                scaleX: 0,
                scaleY: 0,
                regX: 0,
                regY: 0,
                skewX: 0,
                skewY: 0,
                rotation: 0,
                visible: !0,
                alpha: 1,
                _off: !1,
                mask: null,
                filters: null
            }, this._createjsEventManager = new EventManager(this), superclass.prototype.initialize.apply(this, args);
        }, prototypeAccessors$3.pixi.get = function() {
            return this._pixiData.instance;
        }, CreatejsSprite.prototype.updateForPixi = function(e) {
            return !0;
        }, prototypeAccessors$3.x.get = function() {
            return this._createjsParams.x;
        }, prototypeAccessors$3.x.set = function(value) {
            this._pixiData.instance.x = value, this._createjsParams.x = value;
        }, prototypeAccessors$3.y.get = function() {
            return this._createjsParams.y;
        }, prototypeAccessors$3.y.set = function(value) {
            this._pixiData.instance.y = value, this._createjsParams.y = value;
        }, prototypeAccessors$3.scaleX.get = function() {
            return this._createjsParams.scaleX;
        }, prototypeAccessors$3.scaleX.set = function(value) {
            this._pixiData.instance.scale.x = value, this._createjsParams.scaleX = value;
        }, prototypeAccessors$3.scaleY.get = function() {
            return this._createjsParams.scaleY;
        }, prototypeAccessors$3.scaleY.set = function(value) {
            this._pixiData.instance.scale.y = value, this._createjsParams.scaleY = value;
        }, prototypeAccessors$3.skewX.get = function() {
            return this._createjsParams.skewX;
        }, prototypeAccessors$3.skewX.set = function(value) {
            this._pixiData.instance.skew.x = -value * DEG_TO_RAD, this._createjsParams.skewX = value;
        }, prototypeAccessors$3.skewY.get = function() {
            return this._createjsParams.skewY;
        }, prototypeAccessors$3.skewY.set = function(value) {
            this._pixiData.instance.skew.y = value * DEG_TO_RAD, this._createjsParams.skewY = value;
        }, prototypeAccessors$3.regX.get = function() {
            return this._createjsParams.regX;
        }, prototypeAccessors$3.regX.set = function(value) {
            this._pixiData.regObj.x = value, this._createjsParams.regX = value;
        }, prototypeAccessors$3.regY.get = function() {
            return this._createjsParams.regY;
        }, prototypeAccessors$3.regY.set = function(value) {
            this._pixiData.regObj.y = value, this._createjsParams.regY = value;
        }, prototypeAccessors$3.rotation.get = function() {
            return this._createjsParams.rotation;
        }, prototypeAccessors$3.rotation.set = function(value) {
            this._pixiData.instance.rotation = value * DEG_TO_RAD, this._createjsParams.rotation = value;
        }, prototypeAccessors$3.visible.get = function() {
            return this._createjsParams.visible;
        }, prototypeAccessors$3.visible.set = function(value) {
            value = !!value, this._pixiData.instance.visible = value, this._createjsParams.visible = value;
        }, prototypeAccessors$3.alpha.get = function() {
            return this._createjsParams.alpha;
        }, prototypeAccessors$3.alpha.set = function(value) {
            this._pixiData.instance.alpha = value, this._createjsParams.alpha = value;
        }, prototypeAccessors$3._off.get = function() {
            return this._createjsParams._off;
        }, prototypeAccessors$3._off.set = function(value) {
            this._pixiData.instance.renderable = !value, this._createjsParams._off = value;
        }, CreatejsSprite.prototype.addEventListener = function(type, cb) {
            for (var args = [], len = arguments.length - 2; len-- > 0; ) {
                args[len] = arguments[len + 2];
            }
            return cb instanceof CreatejsButtonHelper || "mousedown" !== type && "rollover" !== type && "rollout" !== type && "pressmove" !== type && "pressup" !== type || this._createjsEventManager.add(this._pixiData.instance, type, cb), 
            superclass.prototype.addEventListener.apply(this, [ type, cb ].concat(args));
        }, CreatejsSprite.prototype.removeEventListener = function(type, cb) {
            for (var args = [], len = arguments.length - 2; len-- > 0; ) {
                args[len] = arguments[len + 2];
            }
            return cb instanceof CreatejsButtonHelper || "mousedown" !== type && "rollover" !== type && "rollout" !== type && "pressmove" !== type && "pressup" !== type || this._createjsEventManager.remove(this._pixiData.instance, type, cb), 
            superclass.prototype.removeEventListener.apply(this, [ type, cb ].concat(args));
        }, prototypeAccessors$3.mask.get = function() {
            return this._createjsParams.mask;
        }, prototypeAccessors$3.mask.set = function(value) {
            var this$1 = this;
            value ? (value.masked.push(this._pixiData.instance), this._pixiData.instance.mask = value.pixi, 
            this._pixiData.instance.once("added", (function() {
                this$1._pixiData.instance.parent.addChild(value.pixi);
            }))) : this._pixiData.instance.mask = null, this._createjsParams.mask = value;
        }, CreatejsSprite.prototype.gotoAndStop = function() {
            for (var args = [], len = arguments.length; len--; ) {
                args[len] = arguments[len];
            }
            superclass.prototype.gotoAndStop.apply(this, args);
            var frame = this.spriteSheet.getFrame(this.currentFrame), baseTexture = pixi_js.BaseTexture.from(frame.image), texture = new pixi_js.Texture(baseTexture, frame.rect);
            this._pixiData.instance.texture = texture;
        }, Object.defineProperties(CreatejsSprite.prototype, prototypeAccessors$3), CreatejsSprite;
    }(createjs.Sprite);
    Object.defineProperties(CreatejsSprite.prototype, {
        _createjsParams: {
            value: {
                x: 0,
                y: 0,
                scaleX: 0,
                scaleY: 0,
                regX: 0,
                regY: 0,
                skewX: 0,
                skewY: 0,
                rotation: 0,
                visible: !0,
                alpha: 1,
                _off: !1,
                mask: null,
                filters: null
            },
            writable: !0
        },
        _pixiData: {
            value: createPixiSpriteData(createObject(CreatejsSprite.prototype)),
            writable: !0
        }
    });
    var PixiShape = function(Container) {
        function PixiShape(cjs) {
            Container.call(this), this._createjs = cjs;
        }
        Container && (PixiShape.__proto__ = Container), PixiShape.prototype = Object.create(Container && Container.prototype), 
        PixiShape.prototype.constructor = PixiShape;
        var prototypeAccessors$4 = {
            createjs: {
                configurable: !0
            }
        };
        return prototypeAccessors$4.createjs.get = function() {
            return this._createjs;
        }, Object.defineProperties(PixiShape.prototype, prototypeAccessors$4), PixiShape;
    }(pixi_js.Container);
    function createCreatejsShapeParams(graphics) {
        return Object.assign({
            x: 0,
            y: 0,
            scaleX: 0,
            scaleY: 0,
            regX: 0,
            regY: 0,
            skewX: 0,
            skewY: 0,
            rotation: 0,
            visible: !0,
            alpha: 1,
            _off: !1,
            mask: null,
            filters: null
        }, {
            graphics: graphics
        });
    }
    function createPixiShapeData(cjs) {
        var pixi = new PixiShape(cjs);
        return Object.assign(createPixiData(pixi, pixi.pivot), {
            masked: []
        });
    }
    var P$2 = createjs.Shape, CreatejsShape = function(superclass) {
        function CreatejsShape() {
            for (var args = [], len = arguments.length; len--; ) {
                args[len] = arguments[len];
            }
            superclass.apply(this, args), this._pixiData = createPixiShapeData(this), this._createjsParams = createCreatejsShapeParams(null), 
            this._createjsEventManager = new EventManager(this), P$2.apply(this, args);
        }
        superclass && (CreatejsShape.__proto__ = superclass), CreatejsShape.prototype = Object.create(superclass && superclass.prototype), 
        CreatejsShape.prototype.constructor = CreatejsShape;
        var prototypeAccessors$5 = {
            pixi: {
                configurable: !0
            },
            x: {
                configurable: !0
            },
            y: {
                configurable: !0
            },
            scaleX: {
                configurable: !0
            },
            scaleY: {
                configurable: !0
            },
            skewX: {
                configurable: !0
            },
            skewY: {
                configurable: !0
            },
            regX: {
                configurable: !0
            },
            regY: {
                configurable: !0
            },
            rotation: {
                configurable: !0
            },
            visible: {
                configurable: !0
            },
            alpha: {
                configurable: !0
            },
            _off: {
                configurable: !0
            },
            mask: {
                configurable: !0
            },
            graphics: {
                configurable: !0
            },
            masked: {
                configurable: !0
            }
        };
        return CreatejsShape.prototype.initialize = function() {
            for (var args = [], len = arguments.length; len--; ) {
                args[len] = arguments[len];
            }
            return this._pixiData = createPixiShapeData(this), this._createjsParams = createCreatejsShapeParams(null), 
            this._createjsEventManager = new EventManager(this), superclass.prototype.initialize.apply(this, args);
        }, prototypeAccessors$5.pixi.get = function() {
            return this._pixiData.instance;
        }, CreatejsShape.prototype.updateForPixi = function(e) {
            return !0;
        }, prototypeAccessors$5.x.get = function() {
            return this._createjsParams.x;
        }, prototypeAccessors$5.x.set = function(value) {
            this._pixiData.instance.x = value, this._createjsParams.x = value;
        }, prototypeAccessors$5.y.get = function() {
            return this._createjsParams.y;
        }, prototypeAccessors$5.y.set = function(value) {
            this._pixiData.instance.y = value, this._createjsParams.y = value;
        }, prototypeAccessors$5.scaleX.get = function() {
            return this._createjsParams.scaleX;
        }, prototypeAccessors$5.scaleX.set = function(value) {
            this._pixiData.instance.scale.x = value, this._createjsParams.scaleX = value;
        }, prototypeAccessors$5.scaleY.get = function() {
            return this._createjsParams.scaleY;
        }, prototypeAccessors$5.scaleY.set = function(value) {
            this._pixiData.instance.scale.y = value, this._createjsParams.scaleY = value;
        }, prototypeAccessors$5.skewX.get = function() {
            return this._createjsParams.skewX;
        }, prototypeAccessors$5.skewX.set = function(value) {
            this._pixiData.instance.skew.x = -value * DEG_TO_RAD, this._createjsParams.skewX = value;
        }, prototypeAccessors$5.skewY.get = function() {
            return this._createjsParams.skewY;
        }, prototypeAccessors$5.skewY.set = function(value) {
            this._pixiData.instance.skew.y = value * DEG_TO_RAD, this._createjsParams.skewY = value;
        }, prototypeAccessors$5.regX.get = function() {
            return this._createjsParams.regX;
        }, prototypeAccessors$5.regX.set = function(value) {
            this._pixiData.regObj.x = value, this._createjsParams.regX = value;
        }, prototypeAccessors$5.regY.get = function() {
            return this._createjsParams.regY;
        }, prototypeAccessors$5.regY.set = function(value) {
            this._pixiData.regObj.y = value, this._createjsParams.regY = value;
        }, prototypeAccessors$5.rotation.get = function() {
            return this._createjsParams.rotation;
        }, prototypeAccessors$5.rotation.set = function(value) {
            this._pixiData.instance.rotation = value * DEG_TO_RAD, this._createjsParams.rotation = value;
        }, prototypeAccessors$5.visible.get = function() {
            return this._createjsParams.visible;
        }, prototypeAccessors$5.visible.set = function(value) {
            value = !!value, this._pixiData.instance.visible = value, this._createjsParams.visible = value;
        }, prototypeAccessors$5.alpha.get = function() {
            return this._createjsParams.alpha;
        }, prototypeAccessors$5.alpha.set = function(value) {
            this._pixiData.instance.alpha = value, this._createjsParams.alpha = value;
        }, prototypeAccessors$5._off.get = function() {
            return this._createjsParams._off;
        }, prototypeAccessors$5._off.set = function(value) {
            this._pixiData.instance.renderable = !value, this._createjsParams._off = value;
        }, CreatejsShape.prototype.addEventListener = function(type, cb) {
            for (var args = [], len = arguments.length - 2; len-- > 0; ) {
                args[len] = arguments[len + 2];
            }
            return cb instanceof CreatejsButtonHelper || "mousedown" !== type && "rollover" !== type && "rollout" !== type && "pressmove" !== type && "pressup" !== type || this._createjsEventManager.add(this._pixiData.instance, type, cb), 
            superclass.prototype.addEventListener.apply(this, [ type, cb ].concat(args));
        }, CreatejsShape.prototype.removeEventListener = function(type, cb) {
            for (var args = [], len = arguments.length - 2; len-- > 0; ) {
                args[len] = arguments[len + 2];
            }
            return cb instanceof CreatejsButtonHelper || "mousedown" !== type && "rollover" !== type && "rollout" !== type && "pressmove" !== type && "pressup" !== type || this._createjsEventManager.remove(this._pixiData.instance, type, cb), 
            superclass.prototype.removeEventListener.apply(this, [ type, cb ].concat(args));
        }, prototypeAccessors$5.mask.get = function() {
            return this._createjsParams.mask;
        }, prototypeAccessors$5.mask.set = function(value) {
            var this$1 = this;
            value ? (value.masked.push(this._pixiData.instance), this._pixiData.instance.mask = value.pixi, 
            this._pixiData.instance.once("added", (function() {
                this$1._pixiData.instance.parent.addChild(value.pixi);
            }))) : this._pixiData.instance.mask = null, this._createjsParams.mask = value;
        }, prototypeAccessors$5.graphics.get = function() {
            return this._createjsParams.graphics;
        }, prototypeAccessors$5.graphics.set = function(value) {
            if (this._pixiData.masked.length) {
                if (this._pixiData.instance.removeChildren(), value) {
                    for (var i = 0; i < this._pixiData.masked.length; i++) {
                        this._pixiData.masked[i].mask = this._pixiData.instance;
                    }
                } else {
                    for (var i$1 = 0; i$1 < this._pixiData.masked.length; i$1++) {
                        this._pixiData.masked[i$1].mask = null;
                    }
                }
            }
            value && this._pixiData.instance.addChild(value.pixi), this._createjsParams.graphics = value;
        }, prototypeAccessors$5.masked.get = function() {
            return this._pixiData.masked;
        }, Object.defineProperties(CreatejsShape.prototype, prototypeAccessors$5), CreatejsShape;
    }(createjs.Shape);
    Object.defineProperties(CreatejsShape.prototype, {
        _createjsParams: {
            value: createCreatejsShapeParams(null),
            writable: !0
        },
        _pixiData: {
            value: createPixiShapeData(createObject(CreatejsShape.prototype)),
            writable: !0
        }
    });
    var PixiBitmap = function(Sprite) {
        function PixiBitmap(cjs) {
            Sprite.call(this), this._createjs = cjs;
        }
        Sprite && (PixiBitmap.__proto__ = Sprite), PixiBitmap.prototype = Object.create(Sprite && Sprite.prototype), 
        PixiBitmap.prototype.constructor = PixiBitmap;
        var prototypeAccessors$6 = {
            createjs: {
                configurable: !0
            }
        };
        return prototypeAccessors$6.createjs.get = function() {
            return this._createjs;
        }, Object.defineProperties(PixiBitmap.prototype, prototypeAccessors$6), PixiBitmap;
    }(pixi_js.Sprite);
    function createPixiBitmapData(cjs) {
        var pixi = new PixiBitmap(cjs);
        return createPixiData(pixi, pixi.anchor);
    }
    var P$3 = createjs.Bitmap, CreatejsBitmap = function(superclass) {
        function CreatejsBitmap() {
            for (var args = [], len = arguments.length; len--; ) {
                args[len] = arguments[len];
            }
            superclass.apply(this, args), this._pixiData = createPixiBitmapData(this), this._createjsParams = {
                x: 0,
                y: 0,
                scaleX: 0,
                scaleY: 0,
                regX: 0,
                regY: 0,
                skewX: 0,
                skewY: 0,
                rotation: 0,
                visible: !0,
                alpha: 1,
                _off: !1,
                mask: null,
                filters: null
            }, this._createjsEventManager = new EventManager(this), P$3.apply(this, args);
        }
        superclass && (CreatejsBitmap.__proto__ = superclass), CreatejsBitmap.prototype = Object.create(superclass && superclass.prototype), 
        CreatejsBitmap.prototype.constructor = CreatejsBitmap;
        var prototypeAccessors$7 = {
            pixi: {
                configurable: !0
            },
            x: {
                configurable: !0
            },
            y: {
                configurable: !0
            },
            scaleX: {
                configurable: !0
            },
            scaleY: {
                configurable: !0
            },
            skewX: {
                configurable: !0
            },
            skewY: {
                configurable: !0
            },
            regX: {
                configurable: !0
            },
            regY: {
                configurable: !0
            },
            rotation: {
                configurable: !0
            },
            visible: {
                configurable: !0
            },
            alpha: {
                configurable: !0
            },
            _off: {
                configurable: !0
            },
            mask: {
                configurable: !0
            }
        };
        return CreatejsBitmap.prototype.initialize = function() {
            for (var args = [], len = arguments.length; len--; ) {
                args[len] = arguments[len];
            }
            this._pixiData = createPixiBitmapData(this), this._createjsParams = {
                x: 0,
                y: 0,
                scaleX: 0,
                scaleY: 0,
                regX: 0,
                regY: 0,
                skewX: 0,
                skewY: 0,
                rotation: 0,
                visible: !0,
                alpha: 1,
                _off: !1,
                mask: null,
                filters: null
            }, this._createjsEventManager = new EventManager(this);
            var res = superclass.prototype.initialize.apply(this, args), texture = pixi_js.Texture.from(this.image);
            return this._pixiData.instance.texture = texture, res;
        }, prototypeAccessors$7.pixi.get = function() {
            return this._pixiData.instance;
        }, CreatejsBitmap.prototype.updateForPixi = function(e) {
            return !0;
        }, prototypeAccessors$7.x.get = function() {
            return this._createjsParams.x;
        }, prototypeAccessors$7.x.set = function(value) {
            this._pixiData.instance.x = value, this._createjsParams.x = value;
        }, prototypeAccessors$7.y.get = function() {
            return this._createjsParams.y;
        }, prototypeAccessors$7.y.set = function(value) {
            this._pixiData.instance.y = value, this._createjsParams.y = value;
        }, prototypeAccessors$7.scaleX.get = function() {
            return this._createjsParams.scaleX;
        }, prototypeAccessors$7.scaleX.set = function(value) {
            this._pixiData.instance.scale.x = value, this._createjsParams.scaleX = value;
        }, prototypeAccessors$7.scaleY.get = function() {
            return this._createjsParams.scaleY;
        }, prototypeAccessors$7.scaleY.set = function(value) {
            this._pixiData.instance.scale.y = value, this._createjsParams.scaleY = value;
        }, prototypeAccessors$7.skewX.get = function() {
            return this._createjsParams.skewX;
        }, prototypeAccessors$7.skewX.set = function(value) {
            this._pixiData.instance.skew.x = -value * DEG_TO_RAD, this._createjsParams.skewX = value;
        }, prototypeAccessors$7.skewY.get = function() {
            return this._createjsParams.skewY;
        }, prototypeAccessors$7.skewY.set = function(value) {
            this._pixiData.instance.skew.y = value * DEG_TO_RAD, this._createjsParams.skewY = value;
        }, prototypeAccessors$7.regX.get = function() {
            return this._createjsParams.regX;
        }, prototypeAccessors$7.regX.set = function(value) {
            this._pixiData.regObj.x = value, this._createjsParams.regX = value;
        }, prototypeAccessors$7.regY.get = function() {
            return this._createjsParams.regY;
        }, prototypeAccessors$7.regY.set = function(value) {
            this._pixiData.regObj.y = value, this._createjsParams.regY = value;
        }, prototypeAccessors$7.rotation.get = function() {
            return this._createjsParams.rotation;
        }, prototypeAccessors$7.rotation.set = function(value) {
            this._pixiData.instance.rotation = value * DEG_TO_RAD, this._createjsParams.rotation = value;
        }, prototypeAccessors$7.visible.get = function() {
            return this._createjsParams.visible;
        }, prototypeAccessors$7.visible.set = function(value) {
            value = !!value, this._pixiData.instance.visible = value, this._createjsParams.visible = value;
        }, prototypeAccessors$7.alpha.get = function() {
            return this._createjsParams.alpha;
        }, prototypeAccessors$7.alpha.set = function(value) {
            this._pixiData.instance.alpha = value, this._createjsParams.alpha = value;
        }, prototypeAccessors$7._off.get = function() {
            return this._createjsParams._off;
        }, prototypeAccessors$7._off.set = function(value) {
            this._pixiData.instance.renderable = !value, this._createjsParams._off = value;
        }, CreatejsBitmap.prototype.addEventListener = function(type, cb) {
            for (var args = [], len = arguments.length - 2; len-- > 0; ) {
                args[len] = arguments[len + 2];
            }
            return cb instanceof CreatejsButtonHelper || "mousedown" !== type && "rollover" !== type && "rollout" !== type && "pressmove" !== type && "pressup" !== type || this._createjsEventManager.add(this._pixiData.instance, type, cb), 
            superclass.prototype.addEventListener.apply(this, [ type, cb ].concat(args));
        }, CreatejsBitmap.prototype.removeEventListener = function(type, cb) {
            for (var args = [], len = arguments.length - 2; len-- > 0; ) {
                args[len] = arguments[len + 2];
            }
            return cb instanceof CreatejsButtonHelper || "mousedown" !== type && "rollover" !== type && "rollout" !== type && "pressmove" !== type && "pressup" !== type || this._createjsEventManager.remove(this._pixiData.instance, type, cb), 
            superclass.prototype.removeEventListener.apply(this, [ type, cb ].concat(args));
        }, prototypeAccessors$7.mask.get = function() {
            return this._createjsParams.mask;
        }, prototypeAccessors$7.mask.set = function(value) {
            var this$1 = this;
            value ? (value.masked.push(this._pixiData.instance), this._pixiData.instance.mask = value.pixi, 
            this._pixiData.instance.once("added", (function() {
                this$1._pixiData.instance.parent.addChild(value.pixi);
            }))) : this._pixiData.instance.mask = null, this._createjsParams.mask = value;
        }, Object.defineProperties(CreatejsBitmap.prototype, prototypeAccessors$7), CreatejsBitmap;
    }(createjs.Bitmap);
    Object.defineProperties(CreatejsBitmap.prototype, {
        _createjsParams: {
            value: {
                x: 0,
                y: 0,
                scaleX: 0,
                scaleY: 0,
                regX: 0,
                regY: 0,
                skewX: 0,
                skewY: 0,
                rotation: 0,
                visible: !0,
                alpha: 1,
                _off: !1,
                mask: null,
                filters: null
            },
            writable: !0
        },
        _pixiData: {
            value: createPixiBitmapData(createObject(CreatejsBitmap.prototype)),
            writable: !0
        }
    });
    var PixiGraphics = function(Graphics) {
        function PixiGraphics(cjs) {
            Graphics.call(this), this._createjs = cjs;
        }
        Graphics && (PixiGraphics.__proto__ = Graphics), PixiGraphics.prototype = Object.create(Graphics && Graphics.prototype), 
        PixiGraphics.prototype.constructor = PixiGraphics;
        var prototypeAccessors$8 = {
            createjs: {
                configurable: !0
            }
        };
        return prototypeAccessors$8.createjs.get = function() {
            return this._createjs;
        }, Object.defineProperties(PixiGraphics.prototype, prototypeAccessors$8), PixiGraphics;
    }(pixi_js.Graphics);
    function createPixiGraphicsData(cjs) {
        var pixi = new PixiGraphics(cjs);
        return Object.assign(createPixiData(pixi, pixi.pivot), {
            strokeFill: 0,
            strokeAlpha: 1
        });
    }
    var LineCap = {
        0: pixi_js.LINE_CAP.BUTT,
        1: pixi_js.LINE_CAP.ROUND,
        2: pixi_js.LINE_CAP.SQUARE
    }, LineJoin = {
        0: pixi_js.LINE_JOIN.MITER,
        1: pixi_js.LINE_JOIN.ROUND,
        2: pixi_js.LINE_JOIN.BEVEL
    }, P$4 = createjs.Graphics, CreatejsGraphics = function(superclass) {
        function CreatejsGraphics() {
            for (var args = [], len = arguments.length; len--; ) {
                args[len] = arguments[len];
            }
            superclass.apply(this, args), this._pixiData = createPixiGraphicsData(this), this._createjsParams = {
                x: 0,
                y: 0,
                scaleX: 0,
                scaleY: 0,
                regX: 0,
                regY: 0,
                skewX: 0,
                skewY: 0,
                rotation: 0,
                visible: !0,
                alpha: 1,
                _off: !1,
                mask: null,
                filters: null
            }, this._createjsEventManager = new EventManager(this), P$4.apply(this, args), this._pixiData.instance.beginFill(16772846, 1), 
            this._pixiData.strokeFill = 0, this._pixiData.strokeAlpha = 1;
        }
        superclass && (CreatejsGraphics.__proto__ = superclass), CreatejsGraphics.prototype = Object.create(superclass && superclass.prototype), 
        CreatejsGraphics.prototype.constructor = CreatejsGraphics;
        var prototypeAccessors$9 = {
            pixi: {
                configurable: !0
            },
            x: {
                configurable: !0
            },
            y: {
                configurable: !0
            },
            scaleX: {
                configurable: !0
            },
            scaleY: {
                configurable: !0
            },
            skewX: {
                configurable: !0
            },
            skewY: {
                configurable: !0
            },
            regX: {
                configurable: !0
            },
            regY: {
                configurable: !0
            },
            rotation: {
                configurable: !0
            },
            visible: {
                configurable: !0
            },
            alpha: {
                configurable: !0
            },
            _off: {
                configurable: !0
            },
            mask: {
                configurable: !0
            }
        };
        return CreatejsGraphics.prototype.initialize = function() {
            for (var args = [], len = arguments.length; len--; ) {
                args[len] = arguments[len];
            }
            return this._pixiData = createPixiGraphicsData(this), this._createjsParams = {
                x: 0,
                y: 0,
                scaleX: 0,
                scaleY: 0,
                regX: 0,
                regY: 0,
                skewX: 0,
                skewY: 0,
                rotation: 0,
                visible: !0,
                alpha: 1,
                _off: !1,
                mask: null,
                filters: null
            }, this._createjsEventManager = new EventManager(this), superclass.prototype.initialize.apply(this, args);
        }, prototypeAccessors$9.pixi.get = function() {
            return this._pixiData.instance;
        }, CreatejsGraphics.prototype.updateForPixi = function(e) {
            return !0;
        }, prototypeAccessors$9.x.get = function() {
            return this._createjsParams.x;
        }, prototypeAccessors$9.x.set = function(value) {
            this._pixiData.instance.x = value, this._createjsParams.x = value;
        }, prototypeAccessors$9.y.get = function() {
            return this._createjsParams.y;
        }, prototypeAccessors$9.y.set = function(value) {
            this._pixiData.instance.y = value, this._createjsParams.y = value;
        }, prototypeAccessors$9.scaleX.get = function() {
            return this._createjsParams.scaleX;
        }, prototypeAccessors$9.scaleX.set = function(value) {
            this._pixiData.instance.scale.x = value, this._createjsParams.scaleX = value;
        }, prototypeAccessors$9.scaleY.get = function() {
            return this._createjsParams.scaleY;
        }, prototypeAccessors$9.scaleY.set = function(value) {
            this._pixiData.instance.scale.y = value, this._createjsParams.scaleY = value;
        }, prototypeAccessors$9.skewX.get = function() {
            return this._createjsParams.skewX;
        }, prototypeAccessors$9.skewX.set = function(value) {
            this._pixiData.instance.skew.x = -value * DEG_TO_RAD, this._createjsParams.skewX = value;
        }, prototypeAccessors$9.skewY.get = function() {
            return this._createjsParams.skewY;
        }, prototypeAccessors$9.skewY.set = function(value) {
            this._pixiData.instance.skew.y = value * DEG_TO_RAD, this._createjsParams.skewY = value;
        }, prototypeAccessors$9.regX.get = function() {
            return this._createjsParams.regX;
        }, prototypeAccessors$9.regX.set = function(value) {
            this._pixiData.regObj.x = value, this._createjsParams.regX = value;
        }, prototypeAccessors$9.regY.get = function() {
            return this._createjsParams.regY;
        }, prototypeAccessors$9.regY.set = function(value) {
            this._pixiData.regObj.y = value, this._createjsParams.regY = value;
        }, prototypeAccessors$9.rotation.get = function() {
            return this._createjsParams.rotation;
        }, prototypeAccessors$9.rotation.set = function(value) {
            this._pixiData.instance.rotation = value * DEG_TO_RAD, this._createjsParams.rotation = value;
        }, prototypeAccessors$9.visible.get = function() {
            return this._createjsParams.visible;
        }, prototypeAccessors$9.visible.set = function(value) {
            value = !!value, this._pixiData.instance.visible = value, this._createjsParams.visible = value;
        }, prototypeAccessors$9.alpha.get = function() {
            return this._createjsParams.alpha;
        }, prototypeAccessors$9.alpha.set = function(value) {
            this._pixiData.instance.alpha = value, this._createjsParams.alpha = value;
        }, prototypeAccessors$9._off.get = function() {
            return this._createjsParams._off;
        }, prototypeAccessors$9._off.set = function(value) {
            this._pixiData.instance.renderable = !value, this._createjsParams._off = value;
        }, CreatejsGraphics.prototype.addEventListener = function(type, cb) {
            for (var args = [], len = arguments.length - 2; len-- > 0; ) {
                args[len] = arguments[len + 2];
            }
            return cb instanceof CreatejsButtonHelper || "mousedown" !== type && "rollover" !== type && "rollout" !== type && "pressmove" !== type && "pressup" !== type || this._createjsEventManager.add(this._pixiData.instance, type, cb), 
            superclass.prototype.addEventListener.apply(this, [ type, cb ].concat(args));
        }, CreatejsGraphics.prototype.removeEventListener = function(type, cb) {
            for (var args = [], len = arguments.length - 2; len-- > 0; ) {
                args[len] = arguments[len + 2];
            }
            return cb instanceof CreatejsButtonHelper || "mousedown" !== type && "rollover" !== type && "rollout" !== type && "pressmove" !== type && "pressup" !== type || this._createjsEventManager.remove(this._pixiData.instance, type, cb), 
            superclass.prototype.removeEventListener.apply(this, [ type, cb ].concat(args));
        }, prototypeAccessors$9.mask.get = function() {
            return this._createjsParams.mask;
        }, prototypeAccessors$9.mask.set = function(value) {
            var this$1 = this;
            value ? (value.masked.push(this._pixiData.instance), this._pixiData.instance.mask = value.pixi, 
            this._pixiData.instance.once("added", (function() {
                this$1._pixiData.instance.parent.addChild(value.pixi);
            }))) : this._pixiData.instance.mask = null, this._createjsParams.mask = value;
        }, CreatejsGraphics.prototype.moveTo = function(x, y) {
            return this._pixiData.instance.clone().endFill().containsPoint({
                x: x,
                y: y
            }) ? this._pixiData.instance.beginHole() : this._pixiData.instance.endHole(), this._pixiData.instance.moveTo(x, y), 
            superclass.prototype.moveTo.call(this, x, y);
        }, CreatejsGraphics.prototype.mt = function(x, y) {
            return this.moveTo(x, y);
        }, CreatejsGraphics.prototype.lineTo = function(x, y) {
            return this._pixiData.instance.lineTo(x, y), superclass.prototype.lineTo.call(this, x, y);
        }, CreatejsGraphics.prototype.lt = function(x, y) {
            return this.lineTo(x, y);
        }, CreatejsGraphics.prototype.arcTo = function(x1, y1, x2, y2, radius) {
            return this._pixiData.instance.arcTo(x1, y1, x2, y2, radius), superclass.prototype.arcTo.call(this, x1, y1, x2, y2, radius);
        }, CreatejsGraphics.prototype.at = function(x1, y1, x2, y2, radius) {
            return this.arcTo(x1, y1, x2, y2, radius);
        }, CreatejsGraphics.prototype.arc = function(x, y, radius, startAngle, endAngle, anticlockwise) {
            return this._pixiData.instance.arc(x, y, radius, startAngle, endAngle, anticlockwise), 
            superclass.prototype.arc.call(this, x, y, radius, startAngle, endAngle, anticlockwise);
        }, CreatejsGraphics.prototype.a = function(x, y, radius, startAngle, endAngle, anticlockwise) {
            return this.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        }, CreatejsGraphics.prototype.quadraticCurveTo = function(cpx, cpy, x, y) {
            return this._pixiData.instance.quadraticCurveTo(cpx, cpy, x, y), superclass.prototype.quadraticCurveTo.call(this, cpx, cpy, x, y);
        }, CreatejsGraphics.prototype.qt = function(cpx, cpy, x, y) {
            return this.quadraticCurveTo(cpx, cpy, x, y);
        }, CreatejsGraphics.prototype.curveTo = function(cpx, cpy, x, y) {
            return this.quadraticCurveTo(cpx, cpy, x, y);
        }, CreatejsGraphics.prototype.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
            return this._pixiData.instance.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y), superclass.prototype.bezierCurveTo.call(this, cp1x, cp1y, cp2x, cp2y, x, y);
        }, CreatejsGraphics.prototype.bt = function(cp1x, cp1y, cp2x, cp2y, x, y) {
            return this.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
        }, CreatejsGraphics.prototype.rect = function(x, y, w, h) {
            return this._pixiData.instance.drawRect(x, y, w, h), superclass.prototype.rect.call(this, x, y, w, h);
        }, CreatejsGraphics.prototype.r = function(x, y, w, h) {
            return this.rect(x, y, w, h);
        }, CreatejsGraphics.prototype.drawRect = function(x, y, w, h) {
            return this.rect(x, y, w, h);
        }, CreatejsGraphics.prototype.dr = function(x, y, w, h) {
            return this.rect(x, y, w, h);
        }, CreatejsGraphics.prototype.closePath = function() {
            return this._pixiData.instance.closePath(), superclass.prototype.closePath.call(this);
        }, CreatejsGraphics.prototype.cp = function() {
            return this.closePath();
        }, CreatejsGraphics.prototype.clear = function() {
            return this._pixiData.instance.clear(), superclass.prototype.clear.call(this);
        }, CreatejsGraphics.prototype.c = function() {
            return this.clear();
        }, CreatejsGraphics.prototype._parseColor = function(color) {
            var res = {
                color: 0,
                alpha: 1
            };
            if (!color) {
                return res.alpha = 0, res;
            }
            if ("#" === color.charAt(0)) {
                return res.color = parseInt(color.slice(1), 16), res;
            }
            var colors = color.replace(/rgba|\(|\)|\s/g, "").split(",");
            return res.color = 65536 * Number(colors[0]) + 256 * Number(colors[1]) + Number(colors[2]), 
            res.alpha = Number(colors[3]), res;
        }, CreatejsGraphics.prototype.beginFill = function(color) {
            var c = this._parseColor(color);
            return this._pixiData.instance.beginFill(c.color, c.alpha), superclass.prototype.beginFill.call(this, color);
        }, CreatejsGraphics.prototype.f = function(color) {
            return this.beginFill(color);
        }, CreatejsGraphics.prototype.endFill = function() {
            return this._pixiData.instance.endFill(), superclass.prototype.endFill.call(this);
        }, CreatejsGraphics.prototype.ef = function() {
            return this.endFill();
        }, CreatejsGraphics.prototype.setStrokeStyle = function(thickness, caps, joints, miterLimit, ignoreScale) {
            return this._pixiData.instance.lineTextureStyle({
                width: thickness,
                color: this._pixiData.strokeFill,
                alpha: this._pixiData.strokeAlpha,
                cap: caps in LineCap ? LineCap[caps] : LineCap[0],
                join: joints in LineJoin ? LineJoin[joints] : LineJoin[0],
                miterLimit: miterLimit
            }), superclass.prototype.setStrokeStyle.call(this, thickness, caps, joints, miterLimit, ignoreScale);
        }, CreatejsGraphics.prototype.ss = function(thickness, caps, joints, miterLimit, ignoreScale) {
            return this.setStrokeStyle(thickness, caps, joints, miterLimit, ignoreScale);
        }, CreatejsGraphics.prototype.beginStroke = function(color) {
            var c = this._parseColor(color);
            return this._pixiData.strokeFill = c.color, this._pixiData.strokeAlpha = c.alpha, 
            superclass.prototype.beginStroke.call(this, color);
        }, CreatejsGraphics.prototype.s = function(color) {
            return this.beginStroke(color);
        }, CreatejsGraphics.prototype.drawRoundRect = function(x, y, w, h, radius) {
            return this._pixiData.instance.drawRoundedRect(x, y, w, h, radius), superclass.prototype.drawRoundRect.call(this, x, y, w, h, radius);
        }, CreatejsGraphics.prototype.rr = function(x, y, w, h, radius) {
            return this.drawRoundRect(x, y, w, h, radius);
        }, CreatejsGraphics.prototype.drawCircle = function(x, y, radius) {
            return this._pixiData.instance.drawCircle(x, y, radius), superclass.prototype.drawCircle.call(this, x, y, radius);
        }, CreatejsGraphics.prototype.dc = function(x, y, radius) {
            return this.drawCircle(x, y, radius);
        }, CreatejsGraphics.prototype.drawEllipse = function(x, y, w, h) {
            return this._pixiData.instance.drawEllipse(x, y, w, h), superclass.prototype.drawEllipse.call(this, x, y, w, h);
        }, CreatejsGraphics.prototype.de = function(x, y, w, h) {
            return this.drawEllipse(x, y, w, h);
        }, CreatejsGraphics.prototype.drawPolyStar = function(x, y, radius, sides, pointSize, angle) {
            return this._pixiData.instance.drawRegularPolygon(x, y, radius, sides, angle * DEG_TO_RAD), 
            superclass.prototype.drawPolyStar.call(this, x, y, radius, sides, pointSize, angle);
        }, CreatejsGraphics.prototype.dp = function(x, y, radius, sides, pointSize, angle) {
            return this.drawPolyStar(x, y, radius, sides, pointSize, angle);
        }, Object.defineProperties(CreatejsGraphics.prototype, prototypeAccessors$9), CreatejsGraphics;
    }(createjs.Graphics);
    Object.defineProperties(CreatejsGraphics.prototype, {
        _createjsParams: {
            value: {
                x: 0,
                y: 0,
                scaleX: 0,
                scaleY: 0,
                regX: 0,
                regY: 0,
                skewX: 0,
                skewY: 0,
                rotation: 0,
                visible: !0,
                alpha: 1,
                _off: !1,
                mask: null,
                filters: null
            },
            writable: !0
        },
        _pixiData: {
            value: createPixiGraphicsData(createObject(CreatejsGraphics.prototype)),
            writable: !0
        }
    });
    var PixiText = function(Text) {
        function PixiText() {
            Text.apply(this, arguments);
        }
        return Text && (PixiText.__proto__ = Text), PixiText.prototype = Object.create(Text && Text.prototype), 
        PixiText.prototype.constructor = PixiText, PixiText;
    }(pixi_js.Text), PixiTextContainer = function(Container) {
        function PixiTextContainer(cjs, text) {
            Container.call(this), this._createjs = cjs, this._text = text;
        }
        Container && (PixiTextContainer.__proto__ = Container), PixiTextContainer.prototype = Object.create(Container && Container.prototype), 
        PixiTextContainer.prototype.constructor = PixiTextContainer;
        var prototypeAccessors$10 = {
            createjs: {
                configurable: !0
            },
            text: {
                configurable: !0
            }
        };
        return prototypeAccessors$10.createjs.get = function() {
            return this._createjs;
        }, prototypeAccessors$10.text.get = function() {
            return this._text;
        }, Object.defineProperties(PixiTextContainer.prototype, prototypeAccessors$10), 
        PixiTextContainer;
    }(pixi_js.Container);
    function createCreatejsTextParams(text, font, color) {
        return Object.assign({
            x: 0,
            y: 0,
            scaleX: 0,
            scaleY: 0,
            regX: 0,
            regY: 0,
            skewX: 0,
            skewY: 0,
            rotation: 0,
            visible: !0,
            alpha: 1,
            _off: !1,
            mask: null,
            filters: null
        }, {
            text: text,
            font: font,
            color: color,
            textAlign: "left",
            lineHeight: 0,
            lineWidth: 0
        });
    }
    function createPixiTextData(cjs, text) {
        var pixi = new PixiTextContainer(cjs, text);
        return createPixiData(pixi, pixi.pivot);
    }
    var P$5 = createjs.Text, CreatejsText = function(superclass) {
        function CreatejsText(text, font, color) {
            void 0 === color && (color = "#000000");
            for (var args = [], len = arguments.length - 3; len-- > 0; ) {
                args[len] = arguments[len + 3];
            }
            superclass.apply(this, [ text, font, color ].concat(args)), this._createjsParams = createCreatejsTextParams(text, font, color);
            var _font = this._parseFont(font), t = new PixiText(text, {
                fontWeight: _font.fontWeight,
                fontSize: _font.fontSize,
                fontFamily: _font.fontFamily,
                fill: this._parseColor(color),
                wordWrap: !0
            });
            this._pixiData = createPixiTextData(this, t), this._pixiData.instance.addChild(t), 
            this._createjsEventManager = new EventManager(this), P$5.call.apply(P$5, [ this, text, font, color ].concat(args));
        }
        superclass && (CreatejsText.__proto__ = superclass), CreatejsText.prototype = Object.create(superclass && superclass.prototype), 
        CreatejsText.prototype.constructor = CreatejsText;
        var prototypeAccessors$11 = {
            pixi: {
                configurable: !0
            },
            x: {
                configurable: !0
            },
            y: {
                configurable: !0
            },
            scaleX: {
                configurable: !0
            },
            scaleY: {
                configurable: !0
            },
            skewX: {
                configurable: !0
            },
            skewY: {
                configurable: !0
            },
            regX: {
                configurable: !0
            },
            regY: {
                configurable: !0
            },
            rotation: {
                configurable: !0
            },
            visible: {
                configurable: !0
            },
            alpha: {
                configurable: !0
            },
            _off: {
                configurable: !0
            },
            mask: {
                configurable: !0
            },
            text: {
                configurable: !0
            },
            font: {
                configurable: !0
            },
            color: {
                configurable: !0
            },
            textAlign: {
                configurable: !0
            },
            lineHeight: {
                configurable: !0
            },
            lineWidth: {
                configurable: !0
            }
        };
        return prototypeAccessors$11.pixi.get = function() {
            return this._pixiData.instance;
        }, CreatejsText.prototype.updateForPixi = function(e) {
            return !0;
        }, prototypeAccessors$11.x.get = function() {
            return this._createjsParams.x;
        }, prototypeAccessors$11.x.set = function(value) {
            this._pixiData.instance.x = value, this._createjsParams.x = value;
        }, prototypeAccessors$11.y.get = function() {
            return this._createjsParams.y;
        }, prototypeAccessors$11.y.set = function(value) {
            this._pixiData.instance.y = value, this._createjsParams.y = value;
        }, prototypeAccessors$11.scaleX.get = function() {
            return this._createjsParams.scaleX;
        }, prototypeAccessors$11.scaleX.set = function(value) {
            this._pixiData.instance.scale.x = value, this._createjsParams.scaleX = value;
        }, prototypeAccessors$11.scaleY.get = function() {
            return this._createjsParams.scaleY;
        }, prototypeAccessors$11.scaleY.set = function(value) {
            this._pixiData.instance.scale.y = value, this._createjsParams.scaleY = value;
        }, prototypeAccessors$11.skewX.get = function() {
            return this._createjsParams.skewX;
        }, prototypeAccessors$11.skewX.set = function(value) {
            this._pixiData.instance.skew.x = -value * DEG_TO_RAD, this._createjsParams.skewX = value;
        }, prototypeAccessors$11.skewY.get = function() {
            return this._createjsParams.skewY;
        }, prototypeAccessors$11.skewY.set = function(value) {
            this._pixiData.instance.skew.y = value * DEG_TO_RAD, this._createjsParams.skewY = value;
        }, prototypeAccessors$11.regX.get = function() {
            return this._createjsParams.regX;
        }, prototypeAccessors$11.regX.set = function(value) {
            this._pixiData.regObj.x = value, this._createjsParams.regX = value;
        }, prototypeAccessors$11.regY.get = function() {
            return this._createjsParams.regY;
        }, prototypeAccessors$11.regY.set = function(value) {
            this._pixiData.regObj.y = value, this._createjsParams.regY = value;
        }, prototypeAccessors$11.rotation.get = function() {
            return this._createjsParams.rotation;
        }, prototypeAccessors$11.rotation.set = function(value) {
            this._pixiData.instance.rotation = value * DEG_TO_RAD, this._createjsParams.rotation = value;
        }, prototypeAccessors$11.visible.get = function() {
            return this._createjsParams.visible;
        }, prototypeAccessors$11.visible.set = function(value) {
            value = !!value, this._pixiData.instance.visible = value, this._createjsParams.visible = value;
        }, prototypeAccessors$11.alpha.get = function() {
            return this._createjsParams.alpha;
        }, prototypeAccessors$11.alpha.set = function(value) {
            this._pixiData.instance.alpha = value, this._createjsParams.alpha = value;
        }, prototypeAccessors$11._off.get = function() {
            return this._createjsParams._off;
        }, prototypeAccessors$11._off.set = function(value) {
            this._pixiData.instance.renderable = !value, this._createjsParams._off = value;
        }, CreatejsText.prototype.addEventListener = function(type, cb) {
            for (var args = [], len = arguments.length - 2; len-- > 0; ) {
                args[len] = arguments[len + 2];
            }
            return cb instanceof CreatejsButtonHelper || "mousedown" !== type && "rollover" !== type && "rollout" !== type && "pressmove" !== type && "pressup" !== type || this._createjsEventManager.add(this._pixiData.instance, type, cb), 
            superclass.prototype.addEventListener.apply(this, [ type, cb ].concat(args));
        }, CreatejsText.prototype.removeEventListener = function(type, cb) {
            for (var args = [], len = arguments.length - 2; len-- > 0; ) {
                args[len] = arguments[len + 2];
            }
            return cb instanceof CreatejsButtonHelper || "mousedown" !== type && "rollover" !== type && "rollout" !== type && "pressmove" !== type && "pressup" !== type || this._createjsEventManager.remove(this._pixiData.instance, type, cb), 
            superclass.prototype.removeEventListener.apply(this, [ type, cb ].concat(args));
        }, prototypeAccessors$11.mask.get = function() {
            return this._createjsParams.mask;
        }, prototypeAccessors$11.mask.set = function(value) {
            var this$1 = this;
            value ? (value.masked.push(this._pixiData.instance), this._pixiData.instance.mask = value.pixi, 
            this._pixiData.instance.once("added", (function() {
                this$1._pixiData.instance.parent.addChild(value.pixi);
            }))) : this._pixiData.instance.mask = null, this._createjsParams.mask = value;
        }, prototypeAccessors$11.text.get = function() {
            return this._createjsParams.text;
        }, prototypeAccessors$11.text.set = function(text) {
            this._pixiData.instance.text.text = text, this._align(this.textAlign), this._createjsParams.text = text;
        }, CreatejsText.prototype._parseFont = function(font) {
            var p = font.split(" "), w = "normal", s = p.shift() || "";
            return -1 === s.indexOf("px") && (w = s, s = p.shift() || ""), {
                fontWeight: w,
                fontSize: Number((s || "0px").replace("px", "")),
                fontFamily: p.join(" ").replace(/'/g, "")
            };
        }, prototypeAccessors$11.font.get = function() {
            return this._createjsParams.font;
        }, prototypeAccessors$11.font.set = function(font) {
            var _font = this._parseFont(font);
            this._pixiData.instance.text.style.fontSize = _font.fontSize, this._pixiData.instance.text.style.fontFamily = _font.fontFamily, 
            this._createjsParams.font = font;
        }, CreatejsText.prototype._parseColor = function(color) {
            return parseInt(color.slice(1), 16);
        }, prototypeAccessors$11.color.get = function() {
            return this._createjsParams.color;
        }, prototypeAccessors$11.color.set = function(color) {
            this._pixiData.instance.text.style.fill = this._parseColor(color), this._createjsParams.color = color;
        }, CreatejsText.prototype._align = function(align) {
            "left" !== align ? "center" !== align ? "right" !== align || (this._pixiData.instance.text.x = -this._pixiData.instance.text.width) : this._pixiData.instance.text.x = -this._pixiData.instance.text.width / 2 : this._pixiData.instance.text.x = 0;
        }, prototypeAccessors$11.textAlign.get = function() {
            return this._createjsParams.textAlign;
        }, prototypeAccessors$11.textAlign.set = function(align) {
            this._pixiData.instance.text.style.align = align, this._align(align), this._createjsParams.textAlign = align;
        }, prototypeAccessors$11.lineHeight.get = function() {
            return this._createjsParams.lineHeight;
        }, prototypeAccessors$11.lineHeight.set = function(height) {
            this._pixiData.instance.text.style.lineHeight = height, this._createjsParams.lineHeight = height;
        }, prototypeAccessors$11.lineWidth.get = function() {
            return this._createjsParams.lineWidth;
        }, prototypeAccessors$11.lineWidth.set = function(width) {
            this._pixiData.instance.text.style.wordWrapWidth = width, this._align(this.textAlign), 
            this._createjsParams.lineWidth = width;
        }, Object.defineProperties(CreatejsText.prototype, prototypeAccessors$11), CreatejsText;
    }(createjs.Text);
    function loadAssetAsync(comp, basepath, options) {
        if (void 0 === options && (options = {}), !comp) {
            throw new Error("no composition");
        }
        var lib = comp.getLibrary();
        return new Promise((function(resolve, reject) {
            0 === lib.properties.manifest.length && resolve({}), basepath && (basepath = (basepath + "/").replace(/([^\:])\/\//, "$1/"));
            var loader = new createjs.LoadQueue(!1, basepath);
            loader.installPlugin(createjs.Sound);
            var errors = [];
            if (loader.addEventListener("fileload", (function(evt) {
                !function(evt, comp) {
                    var images = comp.getImages();
                    evt && "image" == evt.item.type && (images[evt.item.id] = evt.result);
                }(evt, comp);
            })), loader.addEventListener("complete", (function(evt) {
                errors.length ? reject(errors) : resolve(evt);
            })), loader.addEventListener("error", (function(evt) {
                errors.push(evt.data);
            })), options.crossOrigin) {
                for (var m = lib.properties.manifest, i = 0; i < m.length; i++) {
                    m[i].crossOrigin = !0;
                }
            }
            loader.loadManifest(lib.properties.manifest);
        })).then((function(evt) {
            for (var ss = comp.getSpriteSheet(), queue = evt.target, ssMetadata = lib.ssMetadata, i = 0; i < ssMetadata.length; i++) {
                ss[ssMetadata[i].name] = new createjs.SpriteSheet({
                    images: [ queue.getResult(ssMetadata[i].name) ],
                    frames: ssMetadata[i].frames
                });
            }
            return lib;
        }));
    }
    Object.defineProperties(CreatejsText.prototype, {
        _createjsParams: {
            value: createCreatejsTextParams("", "", ""),
            writable: !0
        },
        _pixiData: {
            value: createPixiTextData(createObject(CreatejsText.prototype), new PixiText("")),
            writable: !0
        }
    }), createjs.Stage = CreatejsStage, createjs.StageGL = CreatejsStageGL, createjs.MovieClip = CreatejsMovieClip, 
    createjs.Sprite = CreatejsSprite, createjs.Shape = CreatejsShape, createjs.Bitmap = CreatejsBitmap, 
    createjs.Graphics = CreatejsGraphics, createjs.Text = CreatejsText, createjs.ButtonHelper = CreatejsButtonHelper, 
    createjs.MotionGuidePlugin.install();
    var CreatejsMovieClip$1 = function(_CreatejsMovieClip) {
        function CreatejsMovieClip() {
            for (var args = [], len = arguments.length; len--; ) {
                args[len] = arguments[len];
            }
            _CreatejsMovieClip.apply(this, args), this.framerate = this._framerateBase;
        }
        return _CreatejsMovieClip && (CreatejsMovieClip.__proto__ = _CreatejsMovieClip), 
        CreatejsMovieClip.prototype = Object.create(_CreatejsMovieClip && _CreatejsMovieClip.prototype), 
        CreatejsMovieClip.prototype.constructor = CreatejsMovieClip, CreatejsMovieClip.prototype.initialize = function() {
            for (var args = [], len = arguments.length; len--; ) {
                args[len] = arguments[len];
            }
            _CreatejsMovieClip.prototype.initialize.apply(this, args), this.framerate = this._framerateBase;
        }, CreatejsMovieClip.prototype.updateForPixi = function(e) {
            return this.advance(16.666666666666668 * e.delta), _CreatejsMovieClip.prototype.updateForPixi.call(this, e);
        }, CreatejsMovieClip;
    }(CreatejsMovieClip);
    createjs.MovieClip = CreatejsMovieClip$1;
    var Container = function(_Container) {
        function Container(ticker) {
            var this$1 = this;
            _Container.call(this), this._createjsData = {
                id: 0,
                targets: {}
            }, this.on("added", (function() {
                ticker.add(this$1._handleTick, this$1);
            })), this.on("removed", (function() {
                ticker.remove(this$1._handleTick, this$1);
            }));
        }
        return _Container && (Container.__proto__ = _Container), Container.prototype = Object.create(_Container && _Container.prototype), 
        Container.prototype.constructor = Container, Container.prototype._handleTick = function(delta) {
            var e = {
                delta: delta
            }, targets = this._createjsData.targets;
            for (var i in targets) {
                targets[i].updateForPixi(e);
            }
        }, Container.prototype._addCreatejs = function(cjs) {
            var this$1 = this;
            if (cjs instanceof CreatejsMovieClip$1) {
                var p = cjs.pixi.parent;
                cjs.pixi.once("added", (function() {
                    cjs.pixi.parent !== p && cjs.gotoAndPlay(0);
                    var id = this$1._createjsData.id++;
                    this$1._createjsData.targets[id] = cjs, cjs.pixi.once("removed", (function() {
                        delete this$1._createjsData.targets[id];
                    }));
                }));
            }
        }, Container.prototype.addCreatejs = function(cjs) {
            return this._addCreatejs(cjs), this.addChild(cjs.pixi), cjs;
        }, Container.prototype.addCreatejsAt = function(cjs, index) {
            return this._addCreatejs(cjs), this.addChildAt(cjs.pixi, index), cjs;
        }, Container.prototype.removeCreatejs = function(cjs) {
            return this.removeChild(cjs.pixi), cjs;
        }, Container;
    }(pixi_js.Container);
    exports.createjs = createjs, exports.Container = Container, exports.CreatejsMovieClip = CreatejsMovieClip$1, 
    exports.loadAssetAsync = function(targets) {
        Array.isArray(targets) || (targets = [ targets ]);
        for (var promises = [], i = 0; i < targets.length; i++) {
            var target = targets[i], comp = AdobeAn.getComposition(target.id);
            if (!comp) {
                throw new Error("no composition: " + target.id);
            }
            promises.push(loadAssetAsync(comp, target.basepath, target.options).then((function(lib) {
                for (var i in lib) {
                    lib[i].prototype instanceof CreatejsMovieClip$1 && (lib[i].prototype._framerateBase = lib.properties.fps);
                }
                return lib;
            })));
        }
        return Promise.all(promises).then((function(resolvers) {
            return 1 === resolvers.length ? resolvers[0] : resolvers;
        }));
    };
}(this.PIXI.animate = this.PIXI.animate || {}, createjs, PIXI);
//# sourceMappingURL=pixi-animate-container.js.map
