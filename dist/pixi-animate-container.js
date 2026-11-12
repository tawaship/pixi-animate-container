/*!
 * pixi-animate-container - v3.1.0
 * 
 * @require pixi.js v^5.3.2
 * @author tawaship (makazu.mori@gmail.com)
 * @license MIT
 */
this.PIXI = this.PIXI || {}, function(exports, PIXI, createjs) {
    "use strict";
    function _interopNamespaceDefault(e) {
        var n = Object.create(null);
        return e && Object.keys(e).forEach(function(k) {
            if ("default" !== k) {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: !0,
                    get: function() {
                        return e[k];
                    }
                });
            }
        }), n.default = e, Object.freeze(n);
    }
    var PIXI__namespace = _interopNamespaceDefault(PIXI), DEG_TO_RAD = Math.PI / 180, RAD_TO_DEG = 180 / Math.PI, CjsTransform = function(Transform) {
        function CjsTransform() {
            Transform.apply(this, arguments), this.degRotation = 0, this.degSkewX = 0, this.degSkewY = 0, 
            this._radRotation = 0, this._radSkewX = 0, this._radSkewY = 0;
        }
        return Transform && (CjsTransform.__proto__ = Transform), CjsTransform.prototype = Object.create(Transform && Transform.prototype), 
        CjsTransform.prototype.constructor = CjsTransform, CjsTransform.prototype.setRotation = function(degrees) {
            degrees === this.degRotation && this._rotation === this._radRotation || (this.degRotation = degrees, 
            this._radRotation = degrees * DEG_TO_RAD, this._rotation = this._radRotation, this.updateSkew());
        }, CjsTransform.prototype.setSkewX = function(degrees) {
            degrees === this.degSkewX && this.skew.x === this._radSkewX || (this.degSkewX = degrees, 
            this._radSkewX = -degrees * DEG_TO_RAD, this.skew.x !== this._radSkewX ? this.skew.x = this._radSkewX : this.updateSkew());
        }, CjsTransform.prototype.setSkewY = function(degrees) {
            degrees === this.degSkewY && this.skew.y === this._radSkewY || (this.degSkewY = degrees, 
            this._radSkewY = degrees * DEG_TO_RAD, this.skew.y !== this._radSkewY ? this.skew.y = this._radSkewY : this.updateSkew());
        }, CjsTransform.prototype.updateSkew = function() {
            this._rotation !== this._radRotation && (this._radRotation = this._rotation, this.degRotation = this._rotation * RAD_TO_DEG), 
            this.skew.x !== this._radSkewX && (this._radSkewX = this.skew.x, this.degSkewX = -this.skew.x * RAD_TO_DEG), 
            this.skew.y !== this._radSkewY && (this._radSkewY = this.skew.y, this.degSkewY = this.skew.y * RAD_TO_DEG);
            var cos = 1, sin = 0;
            if (this.degRotation % 360) {
                var r = this.degRotation * DEG_TO_RAD;
                cos = Math.cos(r), sin = Math.sin(r);
            }
            if (this.degSkewX || this.degSkewY) {
                var skewX = this.degSkewX * DEG_TO_RAD, skewY = this.degSkewY * DEG_TO_RAD, a1 = Math.cos(skewY), b1 = Math.sin(skewY), c1 = -Math.sin(skewX), d1 = Math.cos(skewX);
                this._cx = a1 * cos + c1 * sin, this._sx = b1 * cos + d1 * sin, this._cy = a1 * -sin + c1 * cos, 
                this._sy = b1 * -sin + d1 * cos;
            } else {
                this._cx = cos, this._sx = sin, this._cy = -sin, this._sy = cos;
            }
            this._localID++;
        }, CjsTransform;
    }(PIXI.Transform);
    function createPixiData(pixi, anchor) {
        var transform = new CjsTransform;
        return pixi.transform = transform, {
            regObj: anchor || pixi.pivot,
            instance: pixi,
            transform: transform,
            reservedBlendMode: PIXI.BLEND_MODES.NORMAL,
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
            cjsVisible: !0,
            cjsAlpha: 1
        };
    }
    var BLEND_MODE_OF_OPERATION = {
        "source-over": PIXI.BLEND_MODES.NORMAL,
        lighter: PIXI.BLEND_MODES.ADD,
        multiply: PIXI.BLEND_MODES.MULTIPLY,
        screen: PIXI.BLEND_MODES.SCREEN
    };
    function blendModeForPixi(data) {
        var operation = data.compositeOperation;
        return operation && Object.prototype.hasOwnProperty.call(BLEND_MODE_OF_OPERATION, operation) ? BLEND_MODE_OF_OPERATION[operation] : data.reservedBlendMode;
    }
    var pixiDataStore = new WeakMap;
    function registerPixiData(cjs, data) {
        pixiDataStore.set(cjs, data);
    }
    function defineDisplayAccessors(proto, getData) {
        function define(name, get, set) {
            Object.defineProperty(proto, name, {
                configurable: !0,
                enumerable: !0,
                get: get,
                set: set
            });
        }
        define("x", function() {
            return getData(this).cjsX;
        }, function(value) {
            var data = getData(this);
            data.cjsX = value, data.transform.position.x = value;
        }), define("y", function() {
            return getData(this).cjsY;
        }, function(value) {
            var data = getData(this);
            data.cjsY = value, data.transform.position.y = value;
        }), define("scaleX", function() {
            return getData(this).cjsScaleX;
        }, function(value) {
            var data = getData(this);
            data.cjsScaleX = value, data.transform.scale.x = value;
        }), define("scaleY", function() {
            return getData(this).cjsScaleY;
        }, function(value) {
            var data = getData(this);
            data.cjsScaleY = value, data.transform.scale.y = value;
        }), define("rotation", function() {
            return getData(this).cjsRotation;
        }, function(value) {
            var data = getData(this);
            data.cjsRotation = value, data.transform.setRotation(value);
        }), define("skewX", function() {
            return getData(this).cjsSkewX;
        }, function(value) {
            var data = getData(this);
            data.cjsSkewX = value, data.transform.setSkewX(value);
        }), define("skewY", function() {
            return getData(this).cjsSkewY;
        }, function(value) {
            var data = getData(this);
            data.cjsSkewY = value, data.transform.setSkewY(value);
        }), define("regX", function() {
            return getData(this).cjsRegX;
        }, function(value) {
            var data = getData(this);
            data.cjsRegX = value, data.regObj.x = value;
        }), define("regY", function() {
            return getData(this).cjsRegY;
        }, function(value) {
            var data = getData(this);
            data.cjsRegY = value, data.regObj.y = value;
        }), define("visible", function() {
            return getData(this).cjsVisible;
        }, function(value) {
            var data = getData(this);
            data.cjsVisible = value, data.instance.visible = !!value;
        }), define("alpha", function() {
            return getData(this).cjsAlpha;
        }, function(value) {
            var data = getData(this);
            data.cjsAlpha = value, data.instance.alpha = value;
        });
    }
    var settleMarks = new WeakSet, driveDepth = 0;
    function beginDrive() {
        driveDepth++;
    }
    function endDrive() {
        driveDepth--;
    }
    function isDriving() {
        return driveDepth > 0;
    }
    function markForSettle(node) {
        for (var top = node; top.parent; ) {
            top = top.parent;
        }
        settleMarks.add(top);
    }
    function takeSettleMark(root) {
        return !!settleMarks.has(root) && (settleMarks.delete(root), !0);
    }
    function setMaskForPixi(data, value) {
        var old = data.mask, instance = data.instance;
        if (old && old !== value) {
            var index = old.masked.indexOf(instance);
            index >= 0 && old.masked.splice(index, 1), instance.mask = null, old.masked.length ? old.pixi.renderable = !1 : !old.parent && old.pixi.parent && old.pixi.parent.removeChild(old.pixi);
        }
        value ? (value.masked.indexOf(instance) < 0 && value.masked.push(instance), instance.mask = value.graphics ? value.pixi : null, 
        instance.parent && value.pixi.parent !== instance.parent && instance.parent.addChild(value.pixi), 
        instance.once("added", function() {
            data.mask === value && instance.parent && value.pixi.parent !== instance.parent && instance.parent.addChild(value.pixi);
        })) : instance.mask = null, data.mask = value;
    }
    function syncToPixi(root) {
        var data = pixiDataStore.get(root);
        data && (data.colorFilters && function(colorFilters) {
            for (var i = 0; i < colorFilters.length; i++) {
                var source = colorFilters[i].source, matrix = colorFilters[i].matrix;
                matrix[0] = source.redMultiplier, matrix[6] = source.greenMultiplier, matrix[12] = source.blueMultiplier, 
                matrix[18] = source.alphaMultiplier, matrix[4] = source.redOffset / 255, matrix[9] = source.greenOffset / 255, 
                matrix[14] = source.blueOffset / 255, matrix[19] = source.alphaOffset / 255;
            }
        }(data.colorFilters), data.mask && syncToPixi(data.mask));
        var children = root.children;
        if (children) {
            for (var i = 0; i < children.length; i++) {
                syncToPixi(children[i]);
            }
        }
    }
    var PixiColorMatrixFilter = function(superclass) {
        function PixiColorMatrixFilter(cjs) {
            superclass.call(this), this._createjs = cjs, this.syncFromCreatejs();
        }
        superclass && (PixiColorMatrixFilter.__proto__ = superclass), PixiColorMatrixFilter.prototype = Object.create(superclass && superclass.prototype), 
        PixiColorMatrixFilter.prototype.constructor = PixiColorMatrixFilter;
        var prototypeAccessors = {
            createjs: {
                configurable: !0
            },
            matrix: {
                configurable: !0
            }
        };
        return prototypeAccessors.createjs.get = function() {
            return this._createjs;
        }, prototypeAccessors.matrix.get = function() {
            return this.syncFromCreatejs(), this.uniforms.m;
        }, prototypeAccessors.matrix.set = function(value) {
            this.uniforms.m = value;
        }, PixiColorMatrixFilter.prototype.syncFromCreatejs = function() {
            var filter = this._createjs;
            if (filter) {
                var matrix = this.uniforms.m;
                matrix[0] = filter.redMultiplier, matrix[6] = filter.greenMultiplier, matrix[12] = filter.blueMultiplier, 
                matrix[18] = filter.alphaMultiplier, matrix[4] = filter.redOffset / 255, matrix[9] = filter.greenOffset / 255, 
                matrix[14] = filter.blueOffset / 255, matrix[19] = filter.alphaOffset / 255;
            }
        }, Object.defineProperties(PixiColorMatrixFilter.prototype, prototypeAccessors), 
        PixiColorMatrixFilter;
    }(PIXI.filters.ColorMatrixFilter), pixiFilterStore = new WeakMap;
    function getPixiColorMatrixFilter(filter) {
        var pixi = pixiFilterStore.get(filter);
        return pixi || (pixi = new PixiColorMatrixFilter(filter), pixiFilterStore.set(filter, pixi)), 
        pixi;
    }
    var createjsInteractionEvents, CreatejsColorFilter = function(superclass) {
        function CreatejsColorFilter() {
            for (var args = [], len = arguments.length; len--; ) {
                args[len] = arguments[len];
            }
            superclass.apply(this, args);
        }
        superclass && (CreatejsColorFilter.__proto__ = superclass), CreatejsColorFilter.prototype = Object.create(superclass && superclass.prototype), 
        CreatejsColorFilter.prototype.constructor = CreatejsColorFilter;
        var prototypeAccessors$1 = {
            pixi: {
                configurable: !0
            }
        };
        return prototypeAccessors$1.pixi.get = function() {
            return getPixiColorMatrixFilter(this);
        }, Object.defineProperties(CreatejsColorFilter.prototype, prototypeAccessors$1), 
        CreatejsColorFilter;
    }(createjs.ColorFilter);
    exports.createjsInteractionEvents = void 0, (createjsInteractionEvents = exports.createjsInteractionEvents || (exports.createjsInteractionEvents = {})).mousedown = "mousedown", 
    createjsInteractionEvents.pressmove = "pressmove", createjsInteractionEvents.pressup = "pressup", 
    createjsInteractionEvents.rollover = "rollover", createjsInteractionEvents.rollout = "rollout", 
    createjsInteractionEvents.click = "click";
    var CreatejsEventManager = function(cjs) {
        this._downTarget = null, this._cjs = cjs, this._emitter = new PIXI.utils.EventEmitter, 
        cjs.pixi.on("pointerdown", this._onPointerDown, this).on("pointermove", this._onPointerMove, this).on("pointerup", this._onPointerUp, this).on("pointerupoutside", this._onPointerUpOutside, this).on("pointertap", this._onPointerTap, this).on("pointerover", this._onPointerOver, this).on("pointerout", this._onPointerOut, this);
    };
    CreatejsEventManager.prototype._onPointerDown = function(e) {
        var ev = {
            type: exports.createjsInteractionEvents.mousedown,
            currentTarget: e.currentTarget.createjs,
            target: e.target.createjs,
            rawX: e.data.global.x,
            rawY: e.data.global.y
        };
        this._downTarget = e.target.createjs, this._emitter.emit("mousedown", ev);
    }, CreatejsEventManager.prototype._onPointerMove = function(e) {
        if (this._downTarget) {
            var ev = {
                type: exports.createjsInteractionEvents.pressmove,
                currentTarget: e.currentTarget.createjs,
                target: this._downTarget,
                rawX: e.data.global.x,
                rawY: e.data.global.y
            };
            this._emitter.emit("pressmove", ev);
        }
    }, CreatejsEventManager.prototype._onPointerUp = function(e) {
        var ev = {
            type: exports.createjsInteractionEvents.pressup,
            currentTarget: e.currentTarget.createjs,
            target: this._downTarget,
            rawX: e.data.global.x,
            rawY: e.data.global.y
        };
        this._downTarget = null, this._emitter.emit("pressup", ev);
    }, CreatejsEventManager.prototype._onPointerUpOutside = function(e) {
        var ev = {
            type: exports.createjsInteractionEvents.pressup,
            currentTarget: e.currentTarget.createjs,
            target: this._downTarget,
            rawX: e.data.global.x,
            rawY: e.data.global.y
        };
        this._downTarget = null, this._emitter.emit("pressup", ev);
    }, CreatejsEventManager.prototype._onPointerTap = function(e) {
        var ev = {
            type: exports.createjsInteractionEvents.click,
            currentTarget: e.currentTarget.createjs,
            target: e.target.createjs,
            rawX: e.data.global.x,
            rawY: e.data.global.y
        };
        this._emitter.emit("click", ev);
    }, CreatejsEventManager.prototype._onPointerOver = function(e) {
        var ev = {
            type: exports.createjsInteractionEvents.rollover,
            currentTarget: e.currentTarget.createjs,
            target: e.currentTarget.createjs,
            rawX: e.data.global.x,
            rawY: e.data.global.y
        };
        this._emitter.emit("rollover", ev);
    }, CreatejsEventManager.prototype._onPointerOut = function(e) {
        var ev = {
            type: exports.createjsInteractionEvents.rollout,
            currentTarget: e.currentTarget.createjs,
            target: e.currentTarget.createjs,
            rawX: e.data.global.x,
            rawY: e.data.global.y
        };
        this._emitter.emit("rollout", ev);
    }, CreatejsEventManager.prototype.add = function(type, cb) {
        type in exports.createjsInteractionEvents && (this._emitter.on(type, cb), this._emitter.eventNames().length > 0 && (this._cjs.pixi.interactive = !0));
    }, CreatejsEventManager.prototype.remove = function(type, cb) {
        type in exports.createjsInteractionEvents && (this._emitter.off(type, cb), 0 === this._emitter.eventNames().length && (this._cjs.pixi.interactive = !1));
    }, CreatejsEventManager.prototype.removeAll = function(type) {
        type && !(type in exports.createjsInteractionEvents) || (this._emitter.removeAllListeners(type), 
        0 === this._emitter.eventNames().length && (this._cjs.pixi.interactive = !1));
    };
    var eventManagerStore = new WeakMap;
    function addInteractionListener(cjs, type, cb) {
        type in exports.createjsInteractionEvents && function(cjs) {
            var manager = eventManagerStore.get(cjs);
            return manager || (manager = new CreatejsEventManager(cjs), eventManagerStore.set(cjs, manager)), 
            manager;
        }(cjs).add(type, cb);
    }
    function removeInteractionListener(cjs, type, cb) {
        var manager = eventManagerStore.get(cjs);
        manager && manager.remove(type, cb);
    }
    function removeAllInteractionListeners(cjs, type) {
        var manager = eventManagerStore.get(cjs);
        manager && manager.removeAll(type);
    }
    var PixiMovieClip = function(Container) {
        function PixiMovieClip(cjs) {
            Container.call(this), this._filterContainer = null, this._colorFilters = null, this._createjs = cjs;
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
        return PixiMovieClip.prototype.setColorFiltersForPixi = function(value) {
            this._colorFilters = value;
        }, PixiMovieClip.prototype.updateTransform = function() {
            var colorFilters = this._colorFilters;
            if (colorFilters) {
                for (var i = 0; i < colorFilters.length; i++) {
                    colorFilters[i].syncFromCreatejs();
                }
            }
            Container.prototype.updateTransform.call(this);
        }, prototypeAccessors.filterContainer.get = function() {
            return this._filterContainer;
        }, prototypeAccessors.filterContainer.set = function(value) {
            this._filterContainer = value;
        }, prototypeAccessors.createjs.get = function() {
            return this._createjs;
        }, Object.defineProperties(PixiMovieClip.prototype, prototypeAccessors), PixiMovieClip;
    }(PIXI.Container), AnimateEvent = function(superclass) {
        function AnimateEvent(type) {
            superclass.call(this, type);
        }
        return superclass && (AnimateEvent.__proto__ = superclass), AnimateEvent.prototype = Object.create(superclass && superclass.prototype), 
        AnimateEvent.prototype.constructor = AnimateEvent, AnimateEvent;
    }(createjs.Event);
    function isAnimateLabel(value) {
        return "label" in value && "position" in value;
    }
    var CompositeOperations, AnimateReachLabelEvent = function(AnimateEvent) {
        function AnimateReachLabelEvent(type, label) {
            AnimateEvent.call(this, type), this.data = label;
        }
        return AnimateEvent && (AnimateReachLabelEvent.__proto__ = AnimateEvent), AnimateReachLabelEvent.prototype = Object.create(AnimateEvent && AnimateEvent.prototype), 
        AnimateReachLabelEvent.prototype.constructor = AnimateReachLabelEvent, AnimateReachLabelEvent;
    }(AnimateEvent);
    exports.CompositeOperations = void 0, (CompositeOperations = exports.CompositeOperations || (exports.CompositeOperations = {})).Lighter = "lighter", 
    CompositeOperations.Multiply = "multiply", CompositeOperations.Screen = "screen";
    var dataStore$5 = new WeakMap;
    function resetData$5(cjs) {
        var data = function(cjs) {
            var pixi = new PixiMovieClip(cjs);
            return Object.assign(createPixiData(pixi, null), {
                subInstance: pixi,
                listenFrameEvents: {},
                filters: null
            });
        }(cjs);
        return dataStore$5.set(cjs, data), registerPixiData(cjs, data), data;
    }
    function ensureData$5(cjs) {
        var data = dataStore$5.get(cjs);
        return data || resetData$5(cjs);
    }
    function isBlendModeChild(child) {
        return "pixi" in child && "updateBlendModeForPixi" in child;
    }
    var CreatejsMovieClip = function(superclass) {
        function CreatejsMovieClip() {
            for (var args = [], len = arguments.length; len--; ) {
                args[len] = arguments[len];
            }
            superclass.apply(this, args), ensureData$5(this).listenFrameEvents = Object.assign({}, this._listenFrameEventsBase || {});
        }
        superclass && (CreatejsMovieClip.__proto__ = superclass), CreatejsMovieClip.prototype = Object.create(superclass && superclass.prototype), 
        CreatejsMovieClip.prototype.constructor = CreatejsMovieClip;
        var prototypeAccessors$1 = {
            pixi: {
                configurable: !0
            },
            framerate: {
                configurable: !0
            },
            fps: {
                configurable: !0
            },
            compositeOperation: {
                configurable: !0
            },
            filters: {
                configurable: !0
            },
            mask: {
                configurable: !0
            }
        };
        return CreatejsMovieClip.prototype.endAnimation = function(e) {}, CreatejsMovieClip.prototype.reachLabel = function(e) {}, 
        CreatejsMovieClip.prototype.initialize = function() {
            for (var args = [], len = arguments.length; len--; ) {
                args[len] = arguments[len];
            }
            return resetData$5(this).listenFrameEvents = Object.assign({}, this._listenFrameEventsBase || {}), 
            superclass.prototype.initialize.apply(this, args);
        }, prototypeAccessors$1.pixi.get = function() {
            return ensureData$5(this).instance;
        }, prototypeAccessors$1.framerate.get = function() {
            return -1;
        }, prototypeAccessors$1.framerate.set = function(value) {}, prototypeAccessors$1.fps.get = function() {
            return this._fps;
        }, CreatejsMovieClip.prototype.listenCustomFrameEvent = function(type, value) {
            ensureData$5(this).listenFrameEvents[type] = value;
        }, CreatejsMovieClip.prototype.advance = function(time) {
            var beforeFrame = this.currentFrame;
            if (superclass.prototype.advance.call(this, time), this.currentFrame !== beforeFrame) {
                var listen = ensureData$5(this).listenFrameEvents;
                if (listen.endAnimation && this.currentFrame === this.totalFrames - 1 && this.dispatchEvent(new AnimateEvent("endAnimation")), 
                listen.reachLabel) {
                    for (var i = 0; i < this.labels.length; i++) {
                        var label = this.labels[i];
                        if (isAnimateLabel(label) && this.currentFrame === label.position) {
                            this.dispatchEvent(new AnimateReachLabelEvent("reachLabel", label));
                            break;
                        }
                    }
                }
            }
        }, CreatejsMovieClip.prototype.updateStateForPixi = function() {
            this._updateState();
            for (var children = this.children, i = children.length - 1; i >= 0; i--) {
                var child = children[i];
                child instanceof CreatejsMovieClip && child.updateStateForPixi();
            }
        }, CreatejsMovieClip.prototype.settleForPixi = function() {
            this.mode !== createjs.MovieClip.INDEPENDENT ? this._updateState() : -1 === this._rawPosition && this._renderFirstFrame();
            for (var children = this.children.slice(), i = children.length - 1; i >= 0; i--) {
                var child = children[i];
                child instanceof CreatejsMovieClip && child.settleForPixi();
            }
        }, CreatejsMovieClip.prototype.gotoAndPlay = function(positionOrLabel) {
            superclass.prototype.gotoAndPlay.call(this, positionOrLabel), markForSettle(this);
        }, CreatejsMovieClip.prototype.gotoAndStop = function(positionOrLabel) {
            superclass.prototype.gotoAndStop.call(this, positionOrLabel), markForSettle(this);
        }, CreatejsMovieClip.prototype.updateBlendModeForPixi = function(mode) {
            var data = ensureData$5(this);
            data.reservedBlendMode !== mode && (data.reservedBlendMode = mode, this._passBlendModeForPixi(data));
        }, CreatejsMovieClip.prototype._passBlendModeForPixi = function(data) {
            var children = this.children;
            if (children) {
                for (var mode = blendModeForPixi(data), i = 0; i < children.length; i++) {
                    var child = children[i];
                    isBlendModeChild(child) && child.updateBlendModeForPixi(mode);
                }
            }
        }, prototypeAccessors$1.compositeOperation.get = function() {
            return ensureData$5(this).compositeOperation;
        }, prototypeAccessors$1.compositeOperation.set = function(value) {
            var data = ensureData$5(this), before = blendModeForPixi(data);
            data.compositeOperation = value, blendModeForPixi(data) !== before && this._passBlendModeForPixi(data);
        }, prototypeAccessors$1.filters.get = function() {
            return ensureData$5(this).filters;
        }, prototypeAccessors$1.filters.set = function(value) {
            var data = ensureData$5(this), list = [], pairs = [];
            if (value && value.length > 0) {
                for (var i = 0; i < value.length; i++) {
                    var f = value[i];
                    if (f instanceof CreatejsColorFilter) {
                        var pixiFilter = getPixiColorMatrixFilter(f);
                        list.push(pixiFilter), pairs.push({
                            source: f,
                            matrix: pixiFilter.matrix
                        });
                    }
                }
            }
            data.instance.filters = list, data.instance.setColorFiltersForPixi(list.length ? list : null), 
            data.colorFilters = pairs.length ? pairs : null, data.filters = value;
        }, prototypeAccessors$1.mask.get = function() {
            return ensureData$5(this).mask;
        }, prototypeAccessors$1.mask.set = function(value) {
            setMaskForPixi(ensureData$5(this), value);
        }, CreatejsMovieClip.prototype._updateChildrenBlendModeForPixi = function(child) {
            child.parent !== this && child.updateBlendModeForPixi(blendModeForPixi(ensureData$5(this)));
        }, CreatejsMovieClip.prototype.addChild = function() {
            for (var children = [], len = arguments.length; len--; ) {
                children[len] = arguments[len];
            }
            for (var data = ensureData$5(this), i = 0; i < children.length; i++) {
                var child = children[i];
                data.subInstance.addChild(child.pixi), this._updateChildrenBlendModeForPixi(child);
            }
            var res = superclass.prototype.addChild.apply(this, children);
            return isDriving() || markForSettle(this), res;
        }, CreatejsMovieClip.prototype.addChildAt = function() {
            for (var childOrIndex = [], len = arguments.length; len--; ) {
                childOrIndex[len] = arguments[len];
            }
            var data = ensureData$5(this), index = childOrIndex[childOrIndex.length - 1];
            if ("number" == typeof index) {
                for (var i = 0; i < childOrIndex.length - 1; i++) {
                    var child = childOrIndex[i];
                    "number" != typeof child && (data.subInstance.addChildAt(child.pixi, index), this._updateChildrenBlendModeForPixi(child));
                }
            }
            var res = superclass.prototype.addChildAt.apply(this, childOrIndex);
            return isDriving() || markForSettle(this), res;
        }, CreatejsMovieClip.prototype.removeChild = function() {
            for (var children = [], len = arguments.length; len--; ) {
                children[len] = arguments[len];
            }
            for (var data = ensureData$5(this), i = 0; i < children.length; i++) {
                var child = children[i];
                isBlendModeChild(child) && data.subInstance.removeChild(child.pixi);
            }
            return superclass.prototype.removeChild.apply(this, children);
        }, CreatejsMovieClip.prototype.removeChildAt = function() {
            for (var index = [], len = arguments.length; len--; ) {
                index[len] = arguments[len];
            }
            for (var data = ensureData$5(this), i = 0; i < index.length; i++) {
                data.subInstance.removeChildAt(index[i]);
            }
            return superclass.prototype.removeChildAt.apply(this, index);
        }, CreatejsMovieClip.prototype.removeAllChildren = function() {
            ensureData$5(this).subInstance.removeChildren(), superclass.prototype.removeAllChildren.call(this);
        }, CreatejsMovieClip.prototype.addEventListener = function(type, listener, useCapture) {
            if ("function" == typeof listener) {
                var res = superclass.prototype.addEventListener.call(this, type, listener, useCapture);
                return addInteractionListener(this, type, listener), res;
            }
            return superclass.prototype.addEventListener.call(this, type, listener, useCapture);
        }, CreatejsMovieClip.prototype.removeEventListener = function(type, listener, useCapture) {
            if ("function" == typeof listener) {
                return superclass.prototype.removeEventListener.call(this, type, listener, useCapture), 
                void removeInteractionListener(this, type, listener);
            }
            superclass.prototype.removeEventListener.call(this, type, listener, useCapture);
        }, CreatejsMovieClip.prototype.off = function(type, listener, useCapture) {
            this.removeEventListener(type, listener, useCapture);
        }, CreatejsMovieClip.prototype.removeAllEventListeners = function(type) {
            superclass.prototype.removeAllEventListeners.call(this, type), removeAllInteractionListeners(this, type);
        }, Object.defineProperties(CreatejsMovieClip.prototype, prototypeAccessors$1), CreatejsMovieClip;
    }(createjs.MovieClip);
    defineDisplayAccessors(CreatejsMovieClip.prototype, ensureData$5), delete CreatejsMovieClip.prototype.endAnimation, 
    delete CreatejsMovieClip.prototype.reachLabel;
    var PixiSprite = function(Sprite) {
        function PixiSprite(cjs) {
            Sprite.call(this), this._createjs = cjs;
        }
        Sprite && (PixiSprite.__proto__ = Sprite), PixiSprite.prototype = Object.create(Sprite && Sprite.prototype), 
        PixiSprite.prototype.constructor = PixiSprite;
        var prototypeAccessors = {
            createjs: {
                configurable: !0
            }
        };
        return prototypeAccessors.createjs.get = function() {
            return this._createjs;
        }, Object.defineProperties(PixiSprite.prototype, prototypeAccessors), PixiSprite;
    }(PIXI.Sprite);
    var dataStore$4 = new WeakMap;
    function resetData$4(cjs) {
        var data = function(cjs) {
            var pixi = new PixiSprite(cjs);
            return createPixiData(pixi, pixi.anchor);
        }(cjs);
        return dataStore$4.set(cjs, data), registerPixiData(cjs, data), data;
    }
    function ensureData$4(cjs) {
        var data = dataStore$4.get(cjs);
        return data || resetData$4(cjs);
    }
    var CreatejsSprite = function(superclass) {
        function CreatejsSprite() {
            for (var args = [], len = arguments.length; len--; ) {
                args[len] = arguments[len];
            }
            superclass.apply(this, args), ensureData$4(this);
        }
        superclass && (CreatejsSprite.__proto__ = superclass), CreatejsSprite.prototype = Object.create(superclass && superclass.prototype), 
        CreatejsSprite.prototype.constructor = CreatejsSprite;
        var prototypeAccessors$1 = {
            pixi: {
                configurable: !0
            },
            compositeOperation: {
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
            return resetData$4(this), superclass.prototype.initialize.apply(this, args);
        }, prototypeAccessors$1.pixi.get = function() {
            return ensureData$4(this).instance;
        }, CreatejsSprite.prototype.advance = function(time) {}, CreatejsSprite.prototype.updateBlendModeForPixi = function(mode) {
            var data = ensureData$4(this);
            data.reservedBlendMode = mode, data.instance.blendMode = blendModeForPixi(data);
        }, prototypeAccessors$1.compositeOperation.get = function() {
            return ensureData$4(this).compositeOperation;
        }, prototypeAccessors$1.compositeOperation.set = function(value) {
            var data = ensureData$4(this);
            data.compositeOperation = value, data.instance.blendMode = blendModeForPixi(data);
        }, CreatejsSprite.prototype.gotoAndStop = function(frameOrAnimation) {
            superclass.prototype.gotoAndStop.call(this, frameOrAnimation);
            var frame = this.spriteSheet.getFrame(this.currentFrame), baseTexture = PIXI.BaseTexture.from(frame.image), rect = new PIXI.Rectangle(frame.rect.x, frame.rect.y, frame.rect.width, frame.rect.height), texture = new PIXI.Texture(baseTexture, rect);
            ensureData$4(this).instance.texture = texture;
        }, prototypeAccessors$1.mask.get = function() {
            return ensureData$4(this).mask;
        }, prototypeAccessors$1.mask.set = function(value) {
            setMaskForPixi(ensureData$4(this), value);
        }, CreatejsSprite.prototype.addEventListener = function(type, listener, useCapture) {
            if ("function" == typeof listener) {
                var res = superclass.prototype.addEventListener.call(this, type, listener, useCapture);
                return addInteractionListener(this, type, listener), res;
            }
            return superclass.prototype.addEventListener.call(this, type, listener, useCapture);
        }, CreatejsSprite.prototype.removeEventListener = function(type, listener, useCapture) {
            if ("function" == typeof listener) {
                return superclass.prototype.removeEventListener.call(this, type, listener, useCapture), 
                void removeInteractionListener(this, type, listener);
            }
            superclass.prototype.removeEventListener.call(this, type, listener, useCapture);
        }, CreatejsSprite.prototype.off = function(type, listener, useCapture) {
            this.removeEventListener(type, listener, useCapture);
        }, CreatejsSprite.prototype.removeAllEventListeners = function(type) {
            superclass.prototype.removeAllEventListeners.call(this, type), removeAllInteractionListeners(this, type);
        }, Object.defineProperties(CreatejsSprite.prototype, prototypeAccessors$1), CreatejsSprite;
    }(createjs.Sprite);
    defineDisplayAccessors(CreatejsSprite.prototype, ensureData$4);
    var PixiShape = function(Container) {
        function PixiShape(cjs) {
            Container.call(this), this._createjs = cjs;
        }
        Container && (PixiShape.__proto__ = Container), PixiShape.prototype = Object.create(Container && Container.prototype), 
        PixiShape.prototype.constructor = PixiShape;
        var prototypeAccessors = {
            createjs: {
                configurable: !0
            }
        };
        return prototypeAccessors.createjs.get = function() {
            return this._createjs;
        }, Object.defineProperties(PixiShape.prototype, prototypeAccessors), PixiShape;
    }(PIXI.Container);
    var dataStore$3 = new WeakMap;
    function resetData$3(cjs) {
        var data = function(cjs) {
            var pixi = new PixiShape(cjs);
            return Object.assign(createPixiData(pixi, null), {
                masked: [],
                graphics: null
            });
        }(cjs);
        return dataStore$3.set(cjs, data), registerPixiData(cjs, data), data;
    }
    function ensureData$3(cjs) {
        var data = dataStore$3.get(cjs);
        return data || resetData$3(cjs);
    }
    var CreatejsShape = function(superclass) {
        function CreatejsShape(graphics) {
            superclass.call(this, graphics), ensureData$3(this);
        }
        superclass && (CreatejsShape.__proto__ = superclass), CreatejsShape.prototype = Object.create(superclass && superclass.prototype), 
        CreatejsShape.prototype.constructor = CreatejsShape;
        var prototypeAccessors$1 = {
            pixi: {
                configurable: !0
            },
            compositeOperation: {
                configurable: !0
            },
            graphics: {
                configurable: !0
            },
            masked: {
                configurable: !0
            },
            mask: {
                configurable: !0
            }
        };
        return prototypeAccessors$1.pixi.get = function() {
            return ensureData$3(this).instance;
        }, CreatejsShape.prototype.updateBlendModeForPixi = function(mode) {
            var _a, data = ensureData$3(this);
            data.reservedBlendMode = mode, null === (_a = data.graphics) || void 0 === _a || _a.updateBlendModeForPixi(blendModeForPixi(data));
        }, prototypeAccessors$1.compositeOperation.get = function() {
            return ensureData$3(this).compositeOperation;
        }, prototypeAccessors$1.compositeOperation.set = function(value) {
            var _a, data = ensureData$3(this);
            data.compositeOperation = value, null === (_a = data.graphics) || void 0 === _a || _a.updateBlendModeForPixi(blendModeForPixi(data));
        }, prototypeAccessors$1.graphics.get = function() {
            return ensureData$3(this).graphics;
        }, prototypeAccessors$1.graphics.set = function(value) {
            var data = ensureData$3(this);
            if (data.instance.removeChildren(), data.masked.length) {
                if (value) {
                    for (var i = 0; i < data.masked.length; i++) {
                        data.masked[i].mask = data.instance;
                    }
                } else {
                    for (var i$1 = 0; i$1 < data.masked.length; i$1++) {
                        data.masked[i$1].mask = null;
                    }
                }
            }
            value && (data.instance.addChild(value.pixi), value.updateBlendModeForPixi(blendModeForPixi(data))), 
            data.graphics = value;
        }, prototypeAccessors$1.masked.get = function() {
            return ensureData$3(this).masked;
        }, prototypeAccessors$1.mask.get = function() {
            return ensureData$3(this).mask;
        }, prototypeAccessors$1.mask.set = function(value) {
            setMaskForPixi(ensureData$3(this), value);
        }, CreatejsShape.prototype.addEventListener = function(type, listener, useCapture) {
            if ("function" == typeof listener) {
                var res = superclass.prototype.addEventListener.call(this, type, listener, useCapture);
                return addInteractionListener(this, type, listener), res;
            }
            return superclass.prototype.addEventListener.call(this, type, listener, useCapture);
        }, CreatejsShape.prototype.removeEventListener = function(type, listener, useCapture) {
            if ("function" == typeof listener) {
                return superclass.prototype.removeEventListener.call(this, type, listener, useCapture), 
                void removeInteractionListener(this, type, listener);
            }
            superclass.prototype.removeEventListener.call(this, type, listener, useCapture);
        }, CreatejsShape.prototype.off = function(type, listener, useCapture) {
            this.removeEventListener(type, listener, useCapture);
        }, CreatejsShape.prototype.removeAllEventListeners = function(type) {
            superclass.prototype.removeAllEventListeners.call(this, type), removeAllInteractionListeners(this, type);
        }, Object.defineProperties(CreatejsShape.prototype, prototypeAccessors$1), CreatejsShape;
    }(createjs.Shape);
    defineDisplayAccessors(CreatejsShape.prototype, ensureData$3);
    var PixiBitmap = function(Sprite) {
        function PixiBitmap(cjs) {
            Sprite.call(this), this._createjs = cjs;
        }
        Sprite && (PixiBitmap.__proto__ = Sprite), PixiBitmap.prototype = Object.create(Sprite && Sprite.prototype), 
        PixiBitmap.prototype.constructor = PixiBitmap;
        var prototypeAccessors = {
            createjs: {
                configurable: !0
            }
        };
        return prototypeAccessors.createjs.get = function() {
            return this._createjs;
        }, Object.defineProperties(PixiBitmap.prototype, prototypeAccessors), PixiBitmap;
    }(PIXI.Sprite);
    var dataStore$2 = new WeakMap;
    function resetData$2(cjs) {
        var data = function(cjs) {
            var pixi = new PixiBitmap(cjs);
            return createPixiData(pixi, pixi.anchor);
        }(cjs);
        return dataStore$2.set(cjs, data), registerPixiData(cjs, data), data;
    }
    function ensureData$2(cjs) {
        var data = dataStore$2.get(cjs);
        return data || resetData$2(cjs);
    }
    var CreatejsBitmap = function(superclass) {
        function CreatejsBitmap() {
            for (var args = [], len = arguments.length; len--; ) {
                args[len] = arguments[len];
            }
            superclass.apply(this, args), ensureData$2(this);
        }
        superclass && (CreatejsBitmap.__proto__ = superclass), CreatejsBitmap.prototype = Object.create(superclass && superclass.prototype), 
        CreatejsBitmap.prototype.constructor = CreatejsBitmap;
        var prototypeAccessors$1 = {
            pixi: {
                configurable: !0
            },
            compositeOperation: {
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
            var data = resetData$2(this), res = superclass.prototype.initialize.apply(this, args);
            return data.instance.texture = PIXI.Texture.from(this.image), res;
        }, prototypeAccessors$1.pixi.get = function() {
            return ensureData$2(this).instance;
        }, CreatejsBitmap.prototype.updateBlendModeForPixi = function(mode) {
            var data = ensureData$2(this);
            data.reservedBlendMode = mode, data.instance.blendMode = blendModeForPixi(data);
        }, prototypeAccessors$1.compositeOperation.get = function() {
            return ensureData$2(this).compositeOperation;
        }, prototypeAccessors$1.compositeOperation.set = function(value) {
            var data = ensureData$2(this);
            data.compositeOperation = value, data.instance.blendMode = blendModeForPixi(data);
        }, prototypeAccessors$1.mask.get = function() {
            return ensureData$2(this).mask;
        }, prototypeAccessors$1.mask.set = function(value) {
            setMaskForPixi(ensureData$2(this), value);
        }, CreatejsBitmap.prototype.addEventListener = function(type, listener, useCapture) {
            if ("function" == typeof listener) {
                var res = superclass.prototype.addEventListener.call(this, type, listener, useCapture);
                return addInteractionListener(this, type, listener), res;
            }
            return superclass.prototype.addEventListener.call(this, type, listener, useCapture);
        }, CreatejsBitmap.prototype.removeEventListener = function(type, listener, useCapture) {
            if ("function" == typeof listener) {
                return superclass.prototype.removeEventListener.call(this, type, listener, useCapture), 
                void removeInteractionListener(this, type, listener);
            }
            superclass.prototype.removeEventListener.call(this, type, listener, useCapture);
        }, CreatejsBitmap.prototype.off = function(type, listener, useCapture) {
            this.removeEventListener(type, listener, useCapture);
        }, CreatejsBitmap.prototype.removeAllEventListeners = function(type) {
            superclass.prototype.removeAllEventListeners.call(this, type), removeAllInteractionListeners(this, type);
        }, Object.defineProperties(CreatejsBitmap.prototype, prototypeAccessors$1), CreatejsBitmap;
    }(createjs.Bitmap);
    defineDisplayAccessors(CreatejsBitmap.prototype, ensureData$2);
    var GradientBaseTexture = function(BaseTexture) {
        function GradientBaseTexture() {
            BaseTexture.apply(this, arguments);
        }
        BaseTexture && (GradientBaseTexture.__proto__ = BaseTexture), GradientBaseTexture.prototype = Object.create(BaseTexture && BaseTexture.prototype), 
        GradientBaseTexture.prototype.constructor = GradientBaseTexture;
        var prototypeAccessors = {
            wrapMode: {
                configurable: !0
            }
        };
        return prototypeAccessors.wrapMode.get = function() {
            return PIXI.WRAP_MODES.CLAMP;
        }, prototypeAccessors.wrapMode.set = function(value) {}, Object.defineProperties(GradientBaseTexture.prototype, prototypeAccessors), 
        GradientBaseTexture;
    }(PIXI.BaseTexture), GradientTexture = function(Texture) {
        function GradientTexture(canvas, gradient, local, toShape) {
            Texture.call(this, new GradientBaseTexture(canvas, {
                mipmap: PIXI.MIPMAP_MODES.OFF
            })), this.gradient = gradient, this.local = local, this.toShape = toShape;
        }
        return Texture && (GradientTexture.__proto__ = Texture), GradientTexture.prototype = Object.create(Texture && Texture.prototype), 
        GradientTexture.prototype.constructor = GradientTexture, GradientTexture;
    }(PIXI.Texture), gradientTextures = new Map;
    function paintGradient(canvas, local) {
        var context = canvas.getContext("2d");
        if (context) {
            for (var paint = "linear" === local.type ? context.createLinearGradient(local.x0, local.y0, local.x1, local.y1) : context.createRadialGradient(local.x0, local.y0, local.r0, local.x1, local.y1, local.r1), i = 0; i < local.colors.length; i++) {
                paint.addColorStop(local.ratios[i], local.colors[i]);
            }
            context.fillStyle = paint, context.fillRect(0, 0, canvas.width, canvas.height);
        }
    }
    function getGradientTexture(gradient) {
        var key = JSON.stringify(gradient), known = gradientTextures.get(key);
        if (void 0 !== known) {
            return known;
        }
        var texture = "linear" === gradient.type ? function(gradient) {
            var dx = gradient.x1 - gradient.x0, dy = gradient.y1 - gradient.y0, length = Math.sqrt(dx * dx + dy * dy);
            if (!length) {
                return null;
            }
            var canvas = document.createElement("canvas");
            canvas.width = 258, canvas.height = 1;
            var local = {
                type: "linear",
                colors: gradient.colors,
                ratios: gradient.ratios,
                x0: 1,
                y0: 0,
                r0: 0,
                x1: 257,
                y1: 0,
                r1: 0
            };
            paintGradient(canvas, local);
            var a = dx / 256, b = dy / 256, toShape = new PIXI.Matrix(a, b, -dy / length, dx / length, gradient.x0 - a, gradient.y0 - b);
            return new GradientTexture(canvas, gradient, local, toShape);
        }(gradient) : function(gradient) {
            var left = Math.min(gradient.x0 - gradient.r0, gradient.x1 - gradient.r1), top = Math.min(gradient.y0 - gradient.r0, gradient.y1 - gradient.r1), right = Math.max(gradient.x0 + gradient.r0, gradient.x1 + gradient.r1), bottom = Math.max(gradient.y0 + gradient.r0, gradient.y1 + gradient.r1), size = Math.max(right - left, bottom - top);
            if (!(size > 0) || gradient.r1 === gradient.r0 && gradient.x0 === gradient.x1 && gradient.y0 === gradient.y1) {
                return null;
            }
            var scale = 256 / size, canvas = document.createElement("canvas");
            canvas.width = 256, canvas.height = 256;
            var local = {
                type: "radial",
                colors: gradient.colors,
                ratios: gradient.ratios,
                x0: (gradient.x0 - left) * scale,
                y0: (gradient.y0 - top) * scale,
                r0: gradient.r0 * scale,
                x1: (gradient.x1 - left) * scale,
                y1: (gradient.y1 - top) * scale,
                r1: gradient.r1 * scale
            };
            paintGradient(canvas, local);
            var toShape = new PIXI.Matrix(1 / scale, 0, 0, 1 / scale, left, top);
            return new GradientTexture(canvas, gradient, local, toShape);
        }(gradient);
        if (gradientTextures.set(key, texture), gradientTextures.size > 256) {
            var oldest = gradientTextures.keys().next();
            oldest.done || gradientTextures.delete(oldest.value);
        }
        return texture;
    }
    var PixiGraphics = function(Graphics) {
        function PixiGraphics(cjs) {
            Graphics.call(this), this._createjs = cjs;
        }
        Graphics && (PixiGraphics.__proto__ = Graphics), PixiGraphics.prototype = Object.create(Graphics && Graphics.prototype), 
        PixiGraphics.prototype.constructor = PixiGraphics;
        var prototypeAccessors = {
            createjs: {
                configurable: !0
            }
        };
        return prototypeAccessors.createjs.get = function() {
            return this._createjs;
        }, PixiGraphics.prototype.setBlendModeForPixi = function(mode) {
            this.blendMode !== mode && (this.blendMode = mode, this.batchDirty = -1);
        }, Object.defineProperties(PixiGraphics.prototype, prototypeAccessors), PixiGraphics;
    }(PIXI.Graphics);
    var dataStore$1 = new WeakMap;
    function resetData$1(cjs) {
        var data = function(cjs) {
            var pixi = new PixiGraphics(cjs);
            return Object.assign(createPixiData(pixi, null), {
                strokeFill: 0,
                strokeAlpha: 1,
                strokeTexture: null,
                strokeMatrix: null
            });
        }(cjs);
        return dataStore$1.set(cjs, data), registerPixiData(cjs, data), data;
    }
    function ensureData$1(cjs) {
        var data = dataStore$1.get(cjs);
        return data || resetData$1(cjs);
    }
    var LineCap = {
        0: PIXI.LINE_CAP.BUTT,
        1: PIXI.LINE_CAP.ROUND,
        2: PIXI.LINE_CAP.SQUARE
    }, LineJoin = {
        0: PIXI.LINE_JOIN.MITER,
        1: PIXI.LINE_JOIN.ROUND,
        2: PIXI.LINE_JOIN.BEVEL
    }, bitmapFillTextures = new WeakMap;
    function getBitmapFillTexture(image) {
        var texture = bitmapFillTextures.get(image);
        return texture || (texture = new PIXI.Texture(new PIXI.BaseTexture(image)), bitmapFillTextures.set(image, texture)), 
        texture;
    }
    var CreatejsGraphics = function(superclass) {
        function CreatejsGraphics() {
            for (var args = [], len = arguments.length; len--; ) {
                args[len] = arguments[len];
            }
            superclass.apply(this, args);
            var data = ensureData$1(this);
            data.instance.beginFill(16772846, 1), data.strokeFill = 0, data.strokeAlpha = 1;
        }
        superclass && (CreatejsGraphics.__proto__ = superclass), CreatejsGraphics.prototype = Object.create(superclass && superclass.prototype), 
        CreatejsGraphics.prototype.constructor = CreatejsGraphics;
        var prototypeAccessors$1 = {
            pixi: {
                configurable: !0
            },
            mask: {
                configurable: !0
            }
        };
        return prototypeAccessors$1.pixi.get = function() {
            return ensureData$1(this).instance;
        }, CreatejsGraphics.prototype.updateBlendModeForPixi = function(mode) {
            ensureData$1(this).instance.setBlendModeForPixi(mode);
        }, CreatejsGraphics.prototype.moveTo = function(x, y) {
            var pixi = ensureData$1(this).instance;
            return pixi.clone().endFill().containsPoint({
                x: x,
                y: y
            }) ? pixi.beginHole() : pixi.endHole(), pixi.moveTo(x, y), superclass.prototype.moveTo.call(this, x, y), 
            this;
        }, CreatejsGraphics.prototype.mt = function(x, y) {
            return this.moveTo(x, y);
        }, CreatejsGraphics.prototype.lineTo = function(x, y) {
            return ensureData$1(this).instance.lineTo(x, y), superclass.prototype.lineTo.call(this, x, y), 
            this;
        }, CreatejsGraphics.prototype.lt = function(x, y) {
            return this.lineTo(x, y);
        }, CreatejsGraphics.prototype.arcTo = function(x1, y1, x2, y2, radius) {
            return ensureData$1(this).instance.arcTo(x1, y1, x2, y2, radius), superclass.prototype.arcTo.call(this, x1, y1, x2, y2, radius), 
            this;
        }, CreatejsGraphics.prototype.at = function(x1, y1, x2, y2, radius) {
            return this.arcTo(x1, y1, x2, y2, radius);
        }, CreatejsGraphics.prototype.arc = function(x, y, radius, startAngle, endAngle, anticlockwise) {
            return ensureData$1(this).instance.arc(x, y, radius, startAngle, endAngle, anticlockwise), 
            superclass.prototype.arc.call(this, x, y, radius, startAngle, endAngle, anticlockwise), 
            this;
        }, CreatejsGraphics.prototype.a = function(x, y, radius, startAngle, endAngle, anticlockwise) {
            return this.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        }, CreatejsGraphics.prototype.quadraticCurveTo = function(cpx, cpy, x, y) {
            return ensureData$1(this).instance.quadraticCurveTo(cpx, cpy, x, y), superclass.prototype.quadraticCurveTo.call(this, cpx, cpy, x, y), 
            this;
        }, CreatejsGraphics.prototype.qt = function(cpx, cpy, x, y) {
            return this.quadraticCurveTo(cpx, cpy, x, y);
        }, CreatejsGraphics.prototype.curveTo = function(cpx, cpy, x, y) {
            return this.quadraticCurveTo(cpx, cpy, x, y);
        }, CreatejsGraphics.prototype.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
            return ensureData$1(this).instance.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y), 
            superclass.prototype.bezierCurveTo.call(this, cp1x, cp1y, cp2x, cp2y, x, y), this;
        }, CreatejsGraphics.prototype.bt = function(cp1x, cp1y, cp2x, cp2y, x, y) {
            return this.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
        }, CreatejsGraphics.prototype.rect = function(x, y, w, h) {
            return ensureData$1(this).instance.drawRect(x, y, w, h), superclass.prototype.rect.call(this, x, y, w, h), 
            this;
        }, CreatejsGraphics.prototype.r = function(x, y, w, h) {
            return this.rect(x, y, w, h);
        }, CreatejsGraphics.prototype.drawRect = function(x, y, w, h) {
            return this.rect(x, y, w, h);
        }, CreatejsGraphics.prototype.dr = function(x, y, w, h) {
            return this.rect(x, y, w, h);
        }, CreatejsGraphics.prototype.closePath = function() {
            return ensureData$1(this).instance.closePath(), superclass.prototype.closePath.call(this), 
            this;
        }, CreatejsGraphics.prototype.cp = function() {
            return this.closePath();
        }, CreatejsGraphics.prototype.clear = function() {
            return ensureData$1(this).instance.clear(), superclass.prototype.clear.call(this), 
            this;
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
            return ensureData$1(this).instance.beginFill(c.color, c.alpha), superclass.prototype.beginFill.call(this, color), 
            this;
        }, CreatejsGraphics.prototype.f = function(color) {
            return this.beginFill(color);
        }, CreatejsGraphics.prototype.beginBitmapFill = function(image, repetition, matrix) {
            return ensureData$1(this).instance.beginTextureFill({
                texture: getBitmapFillTexture(image),
                color: 16777215,
                alpha: 1,
                matrix: matrix ? new PIXI.Matrix(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty) : void 0
            }), superclass.prototype.beginBitmapFill.call(this, image, repetition, matrix), 
            this;
        }, CreatejsGraphics.prototype.bf = function(image, repetition, matrix) {
            return this.beginBitmapFill(image, repetition, matrix);
        }, CreatejsGraphics.prototype.beginLinearGradientFill = function(colors, ratios, x0, y0, x1, y1) {
            return this._beginGradientFill({
                type: "linear",
                colors: colors,
                ratios: ratios,
                x0: x0,
                y0: y0,
                r0: 0,
                x1: x1,
                y1: y1,
                r1: 0
            }), superclass.prototype.beginLinearGradientFill.call(this, colors, ratios, x0, y0, x1, y1), 
            this;
        }, CreatejsGraphics.prototype.lf = function(colors, ratios, x0, y0, x1, y1) {
            return this.beginLinearGradientFill(colors, ratios, x0, y0, x1, y1);
        }, CreatejsGraphics.prototype.beginRadialGradientFill = function(colors, ratios, x0, y0, r0, x1, y1, r1) {
            return this._beginGradientFill({
                type: "radial",
                colors: colors,
                ratios: ratios,
                x0: x0,
                y0: y0,
                r0: r0,
                x1: x1,
                y1: y1,
                r1: r1
            }), superclass.prototype.beginRadialGradientFill.call(this, colors, ratios, x0, y0, r0, x1, y1, r1), 
            this;
        }, CreatejsGraphics.prototype.rf = function(colors, ratios, x0, y0, r0, x1, y1, r1) {
            return this.beginRadialGradientFill(colors, ratios, x0, y0, r0, x1, y1, r1);
        }, CreatejsGraphics.prototype._beginGradientFill = function(gradient) {
            var instance = ensureData$1(this).instance, texture = getGradientTexture(gradient);
            texture ? instance.beginTextureFill({
                texture: texture,
                color: 16777215,
                alpha: 1,
                matrix: texture.toShape
            }) : instance.beginFill(0, 0);
        }, CreatejsGraphics.prototype.endFill = function() {
            return ensureData$1(this).instance.endFill(), superclass.prototype.endFill.call(this), 
            this;
        }, CreatejsGraphics.prototype.ef = function() {
            return this.endFill();
        }, CreatejsGraphics.prototype.setStrokeStyle = function(thickness, caps, joints, miterLimit, ignoreScale) {
            var data = ensureData$1(this), cap = caps in LineCap ? LineCap[caps] : LineCap[0], join = joints in LineJoin ? LineJoin[joints] : LineJoin[0], gradient = data.strokeTexture;
            return gradient ? data.instance.lineTextureStyle({
                width: thickness,
                texture: gradient,
                color: 16777215,
                alpha: 1,
                matrix: data.strokeMatrix || void 0,
                cap: cap,
                join: join,
                miterLimit: miterLimit
            }) : data.instance.lineTextureStyle({
                width: thickness,
                color: data.strokeFill,
                alpha: data.strokeAlpha,
                cap: cap,
                join: join,
                miterLimit: miterLimit
            }), superclass.prototype.setStrokeStyle.call(this, thickness, caps, joints, miterLimit, ignoreScale), 
            this;
        }, CreatejsGraphics.prototype.ss = function(thickness, caps, joints, miterLimit, ignoreScale) {
            return this.setStrokeStyle(thickness, caps, joints, miterLimit, ignoreScale);
        }, CreatejsGraphics.prototype.beginStroke = function(color) {
            var data = ensureData$1(this), c = this._parseColor(color);
            return data.strokeFill = c.color, data.strokeAlpha = c.alpha, data.strokeTexture = null, 
            data.strokeMatrix = null, superclass.prototype.beginStroke.call(this, color), this;
        }, CreatejsGraphics.prototype.s = function(color) {
            return this.beginStroke(color);
        }, CreatejsGraphics.prototype.beginLinearGradientStroke = function(colors, ratios, x0, y0, x1, y1) {
            return this._setGradientStroke({
                type: "linear",
                colors: colors,
                ratios: ratios,
                x0: x0,
                y0: y0,
                r0: 0,
                x1: x1,
                y1: y1,
                r1: 0
            }), superclass.prototype.beginLinearGradientStroke.call(this, colors, ratios, x0, y0, x1, y1), 
            this;
        }, CreatejsGraphics.prototype.ls = function(colors, ratios, x0, y0, x1, y1) {
            return this.beginLinearGradientStroke(colors, ratios, x0, y0, x1, y1);
        }, CreatejsGraphics.prototype.beginRadialGradientStroke = function(colors, ratios, x0, y0, r0, x1, y1, r1) {
            return this._setGradientStroke({
                type: "radial",
                colors: colors,
                ratios: ratios,
                x0: x0,
                y0: y0,
                r0: r0,
                x1: x1,
                y1: y1,
                r1: r1
            }), superclass.prototype.beginRadialGradientStroke.call(this, colors, ratios, x0, y0, r0, x1, y1, r1), 
            this;
        }, CreatejsGraphics.prototype.rs = function(colors, ratios, x0, y0, r0, x1, y1, r1) {
            return this.beginRadialGradientStroke(colors, ratios, x0, y0, r0, x1, y1, r1);
        }, CreatejsGraphics.prototype._setGradientStroke = function(gradient) {
            var data = ensureData$1(this), texture = getGradientTexture(gradient);
            data.strokeTexture = texture, data.strokeMatrix = texture ? texture.toShape : null, 
            data.strokeFill = 16777215, data.strokeAlpha = texture ? 1 : 0;
        }, CreatejsGraphics.prototype.drawRoundRect = function(x, y, w, h, radius) {
            return ensureData$1(this).instance.drawRoundedRect(x, y, w, h, radius), superclass.prototype.drawRoundRect.call(this, x, y, w, h, radius), 
            this;
        }, CreatejsGraphics.prototype.rr = function(x, y, w, h, radius) {
            return this.drawRoundRect(x, y, w, h, radius);
        }, CreatejsGraphics.prototype.drawCircle = function(x, y, radius) {
            return ensureData$1(this).instance.drawCircle(x, y, radius), superclass.prototype.drawCircle.call(this, x, y, radius), 
            this;
        }, CreatejsGraphics.prototype.dc = function(x, y, radius) {
            return this.drawCircle(x, y, radius);
        }, CreatejsGraphics.prototype.drawEllipse = function(x, y, w, h) {
            return ensureData$1(this).instance.drawEllipse(x, y, w, h), superclass.prototype.drawEllipse.call(this, x, y, w, h), 
            this;
        }, CreatejsGraphics.prototype.de = function(x, y, w, h) {
            return this.drawEllipse(x, y, w, h);
        }, CreatejsGraphics.prototype.drawPolyStar = function(x, y, radius, sides, pointSize, angle) {
            return ensureData$1(this).instance.drawRegularPolygon(x, y, radius, sides, angle * DEG_TO_RAD), 
            superclass.prototype.drawPolyStar.call(this, x, y, radius, sides, pointSize, angle), 
            this;
        }, CreatejsGraphics.prototype.dp = function(x, y, radius, sides, pointSize, angle) {
            return this.drawPolyStar(x, y, radius, sides, pointSize, angle);
        }, prototypeAccessors$1.mask.get = function() {
            return ensureData$1(this).mask;
        }, prototypeAccessors$1.mask.set = function(value) {
            setMaskForPixi(ensureData$1(this), value);
        }, Object.defineProperties(CreatejsGraphics.prototype, prototypeAccessors$1), CreatejsGraphics;
    }(createjs.Graphics), PixiText = function(Text) {
        function PixiText() {
            Text.apply(this, arguments);
        }
        return Text && (PixiText.__proto__ = Text), PixiText.prototype = Object.create(Text && Text.prototype), 
        PixiText.prototype.constructor = PixiText, PixiText;
    }(PIXI.Text), PixiTextContainer = function(Container) {
        function PixiTextContainer(cjs, text) {
            Container.call(this), this._createjs = cjs, this._text = text;
        }
        Container && (PixiTextContainer.__proto__ = Container), PixiTextContainer.prototype = Object.create(Container && Container.prototype), 
        PixiTextContainer.prototype.constructor = PixiTextContainer;
        var prototypeAccessors = {
            createjs: {
                configurable: !0
            },
            text: {
                configurable: !0
            }
        };
        return prototypeAccessors.createjs.get = function() {
            return this._createjs;
        }, prototypeAccessors.text.get = function() {
            return this._text;
        }, Object.defineProperties(PixiTextContainer.prototype, prototypeAccessors), PixiTextContainer;
    }(PIXI.Container);
    var dataStore = new WeakMap;
    function resetData(cjs) {
        var data = function(cjs) {
            var text = new PixiText("", {
                wordWrap: !0
            }), pixi = new PixiTextContainer(cjs, text);
            return pixi.addChild(text), Object.assign(createPixiData(pixi, null), {
                text: "",
                font: "",
                color: "",
                textAlign: "left",
                lineHeight: 0,
                lineWidth: 0
            });
        }(cjs);
        return dataStore.set(cjs, data), registerPixiData(cjs, data), data;
    }
    function ensureData(cjs) {
        var data = dataStore.get(cjs);
        return data || resetData(cjs);
    }
    var CreatejsText = function(superclass) {
        function CreatejsText(text, font, color) {
            void 0 === color && (color = "#000000"), superclass.call(this, text, font, color), 
            ensureData(this);
        }
        superclass && (CreatejsText.__proto__ = superclass), CreatejsText.prototype = Object.create(superclass && superclass.prototype), 
        CreatejsText.prototype.constructor = CreatejsText;
        var prototypeAccessors$1 = {
            pixi: {
                configurable: !0
            },
            compositeOperation: {
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
            },
            mask: {
                configurable: !0
            }
        };
        return prototypeAccessors$1.pixi.get = function() {
            return ensureData(this).instance;
        }, CreatejsText.prototype.updateBlendModeForPixi = function(mode) {
            var data = ensureData(this);
            data.reservedBlendMode = mode, data.instance.text.blendMode = blendModeForPixi(data);
        }, prototypeAccessors$1.compositeOperation.get = function() {
            return ensureData(this).compositeOperation;
        }, prototypeAccessors$1.compositeOperation.set = function(value) {
            var data = ensureData(this);
            data.compositeOperation = value, data.instance.text.blendMode = blendModeForPixi(data);
        }, prototypeAccessors$1.text.get = function() {
            return ensureData(this).text;
        }, prototypeAccessors$1.text.set = function(text) {
            var data = ensureData(this);
            data.instance.text.text = text, this._align(data.textAlign), data.text = text;
        }, CreatejsText.prototype._parseFont = function(font) {
            var p = font.split(" "), w = "normal", s = p.shift() || "";
            return -1 === s.indexOf("px") && (w = s, s = p.shift() || ""), {
                fontWeight: w,
                fontSize: Number((s || "0px").replace("px", "")),
                fontFamily: p.join(" ").replace(/'/g, "")
            };
        }, prototypeAccessors$1.font.get = function() {
            return ensureData(this).font;
        }, prototypeAccessors$1.font.set = function(font) {
            var data = ensureData(this), _font = this._parseFont(font);
            data.instance.text.style.fontWeight = _font.fontWeight, data.instance.text.style.fontSize = _font.fontSize, 
            data.instance.text.style.fontFamily = _font.fontFamily, data.font = font;
        }, CreatejsText.prototype._parseColor = function(color) {
            return parseInt(color.slice(1), 16);
        }, prototypeAccessors$1.color.get = function() {
            return ensureData(this).color;
        }, prototypeAccessors$1.color.set = function(color) {
            var data = ensureData(this);
            data.instance.text.style.fill = this._parseColor(color), data.color = color;
        }, CreatejsText.prototype._align = function(align) {
            var pixiText = ensureData(this).instance.text;
            "left" !== align ? "center" !== align ? "right" !== align || (pixiText.x = -pixiText.width) : pixiText.x = -pixiText.width / 2 : pixiText.x = 0;
        }, prototypeAccessors$1.textAlign.get = function() {
            return ensureData(this).textAlign;
        }, prototypeAccessors$1.textAlign.set = function(align) {
            var data = ensureData(this);
            data.instance.text.style.align = align, this._align(align), data.textAlign = align;
        }, prototypeAccessors$1.lineHeight.get = function() {
            return ensureData(this).lineHeight;
        }, prototypeAccessors$1.lineHeight.set = function(height) {
            var data = ensureData(this);
            data.instance.text.style.lineHeight = height, data.lineHeight = height;
        }, prototypeAccessors$1.lineWidth.get = function() {
            return ensureData(this).lineWidth;
        }, prototypeAccessors$1.lineWidth.set = function(width) {
            var data = ensureData(this);
            data.instance.text.style.wordWrapWidth = width, this._align(data.textAlign), data.lineWidth = width;
        }, prototypeAccessors$1.mask.get = function() {
            return ensureData(this).mask;
        }, prototypeAccessors$1.mask.set = function(value) {
            setMaskForPixi(ensureData(this), value);
        }, CreatejsText.prototype.addEventListener = function(type, listener, useCapture) {
            if ("function" == typeof listener) {
                var res = superclass.prototype.addEventListener.call(this, type, listener, useCapture);
                return addInteractionListener(this, type, listener), res;
            }
            return superclass.prototype.addEventListener.call(this, type, listener, useCapture);
        }, CreatejsText.prototype.removeEventListener = function(type, listener, useCapture) {
            if ("function" == typeof listener) {
                return superclass.prototype.removeEventListener.call(this, type, listener, useCapture), 
                void removeInteractionListener(this, type, listener);
            }
            superclass.prototype.removeEventListener.call(this, type, listener, useCapture);
        }, CreatejsText.prototype.off = function(type, listener, useCapture) {
            this.removeEventListener(type, listener, useCapture);
        }, CreatejsText.prototype.removeAllEventListeners = function(type) {
            superclass.prototype.removeAllEventListeners.call(this, type), removeAllInteractionListeners(this, type);
        }, Object.defineProperties(CreatejsText.prototype, prototypeAccessors$1), CreatejsText;
    }(createjs.Text);
    function isWrapped(obj) {
        return "pixi" in obj && "updateBlendModeForPixi" in obj;
    }
    function gotoAndStopVerbatim(target, positionOrLabel) {
        target.gotoAndStop(positionOrLabel);
    }
    defineDisplayAccessors(CreatejsText.prototype, ensureData);
    var CreatejsButtonHelper = function(superclass) {
        function CreatejsButtonHelper(target, outLabel, overLabel, downLabel, play, hitArea, hitLabel) {
            if (superclass.call(this, target, outLabel, overLabel, downLabel, play, hitArea, hitLabel), 
            !isWrapped(target)) {
                throw new TypeError("CreatejsButtonHelper requires wrapper class instances for target and hitArea.");
            }
            var hitPixi, obj, pixi = target.pixi;
            if (hitArea) {
                if (!isWrapped(obj = hitArea) || !("gotoAndStop" in obj)) {
                    throw new TypeError("CreatejsButtonHelper requires wrapper class instances for target and hitArea.");
                }
                gotoAndStopVerbatim(hitArea, hitLabel), syncToPixi(hitArea), (hitPixi = pixi.addChild(hitArea.pixi)).alpha = 1e-5;
            } else {
                hitPixi = pixi;
            }
            var isOver = !1, isDown = !1;
            hitPixi.on("pointerover", function() {
                isOver = !0, gotoAndStopVerbatim(target, isDown ? downLabel : overLabel);
            }), hitPixi.on("pointerout", function() {
                isOver = !1, gotoAndStopVerbatim(target, isDown ? overLabel : outLabel);
            }), hitPixi.on("pointerdown", function() {
                isDown = !0, gotoAndStopVerbatim(target, downLabel);
            }), hitPixi.on("pointerup", function() {
                isDown = !1, gotoAndStopVerbatim(target, isOver ? overLabel : outLabel);
            }), hitPixi.on("pointerupoutside", function() {
                isDown = !1, gotoAndStopVerbatim(target, isOver ? overLabel : outLabel);
            }), hitPixi.interactive = !0, hitPixi.cursor = "pointer";
        }
        return superclass && (CreatejsButtonHelper.__proto__ = superclass), CreatejsButtonHelper.prototype = Object.create(superclass && superclass.prototype), 
        CreatejsButtonHelper.prototype.constructor = CreatejsButtonHelper, CreatejsButtonHelper;
    }(createjs.ButtonHelper);
    function playSound(id, loop, offset) {
        return createjs.Sound.play(id, {
            interrupt: createjs.Sound.INTERRUPT_EARLY,
            loop: loop,
            offset: offset
        });
    }
    var CreatejsEvent = createjs.Event, CreatejsController = function(container) {
        this._speed = 1, this._overSpeed = !0, this._smooth = !0, this._deltas = [], this._nextDelta = 0, 
        this._createjsData = {
            id: 0,
            targets: {},
            container: container
        };
    }, prototypeAccessors = {
        speed: {
            configurable: !0
        },
        overSpeed: {
            configurable: !0
        },
        smooth: {
            configurable: !0
        }
    };
    prototypeAccessors.speed.get = function() {
        return this._speed;
    }, prototypeAccessors.speed.set = function(value) {
        this._speed = value;
    }, prototypeAccessors.overSpeed.get = function() {
        return this._overSpeed;
    }, prototypeAccessors.overSpeed.set = function(value) {
        this._overSpeed = value;
    }, prototypeAccessors.smooth.get = function() {
        return this._smooth;
    }, prototypeAccessors.smooth.set = function(value) {
        this._smooth = value;
    }, CreatejsController.prototype.handleTick = function(delta) {
        var speed = this._speed > 0 ? this._speed : 0, d = delta * speed, usual = this._usualDelta(delta) * speed;
        beginDrive();
        var targets = this._createjsData.targets;
        for (var i in targets) {
            var target = targets[i], fps = target.cjs.fps;
            target.t += d * fps / 60;
            var step = usual * fps / 60, lead = Math.min(step, 1) / 2;
            if (target.isFirst) {
                target.isFirst = !1, target.clock = target.t + lead, target.cjs.updateStateForPixi();
            } else {
                var p = void 0;
                if (this._smooth) {
                    target.clock += step;
                    var behind = target.t + lead - target.clock;
                    behind >= 1 || behind <= -1 ? target.clock = target.t + lead : target.clock += .05 * behind, 
                    p = Math.max(Math.floor(target.clock), 0), target.clock -= p;
                } else {
                    p = Math.floor(target.t), target.clock = target.t - p;
                }
                var frame = this._overSpeed ? p : Math.min(p, 1);
                target.t -= p;
                for (var f = 0; f < frame; f++) {
                    target.cjs._tick(new CreatejsEvent("tick")), target.cjs.updateStateForPixi();
                }
            }
        }
        endDrive();
    }, CreatejsController.prototype.flushForRender = function() {
        beginDrive();
        var targets = this._createjsData.targets;
        for (var i in targets) {
            var root = targets[i].cjs;
            takeSettleMark(root) && root.settleForPixi();
        }
        endDrive();
    }, CreatejsController.prototype._usualDelta = function(delta) {
        var deltas = this._deltas;
        deltas[this._nextDelta] = delta, this._nextDelta = (this._nextDelta + 1) % 30;
        var sorted = deltas.slice().sort(function(a, b) {
            return a - b;
        }), middle = sorted.length >> 1;
        return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
    }, CreatejsController.prototype._addCreatejs = function(cjs) {
        var this$1$1 = this;
        if (cjs instanceof CreatejsMovieClip) {
            var p = cjs.pixi.parent;
            cjs.pixi.once("added", function() {
                cjs.pixi.parent !== p && cjs.gotoAndPlay(0);
                var id = this$1$1._createjsData.id++;
                this$1$1._createjsData.targets[id] = {
                    cjs: cjs,
                    t: 0,
                    clock: 0,
                    isFirst: !0
                }, markForSettle(cjs), cjs.pixi.once("removed", function() {
                    delete this$1$1._createjsData.targets[id];
                });
            });
        }
    }, CreatejsController.prototype.addCreatejs = function(cjs) {
        return this._addCreatejs(cjs), this._createjsData.container.addChild(cjs.pixi), 
        cjs;
    }, CreatejsController.prototype.addCreatejsAt = function(cjs, index) {
        return this._addCreatejs(cjs), this._createjsData.container.addChildAt(cjs.pixi, index), 
        cjs;
    }, CreatejsController.prototype.removeCreatejs = function(cjs) {
        return this._createjsData.container.removeChild(cjs.pixi), cjs;
    }, Object.defineProperties(CreatejsController.prototype, prototypeAccessors);
    var Container = function(PixiContainer) {
        function Container() {
            PixiContainer.call(this), this._createjsData = {
                controller: new CreatejsController(this)
            };
        }
        PixiContainer && (Container.__proto__ = PixiContainer), Container.prototype = Object.create(PixiContainer && PixiContainer.prototype), 
        Container.prototype.constructor = Container;
        var prototypeAccessors$1 = {
            createjsSpeed: {
                configurable: !0
            },
            createjsOverSpeed: {
                configurable: !0
            },
            createjsSmooth: {
                configurable: !0
            }
        };
        return prototypeAccessors$1.createjsSpeed.get = function() {
            return this._createjsData.controller.speed;
        }, prototypeAccessors$1.createjsSpeed.set = function(value) {
            this._createjsData.controller.speed = value;
        }, prototypeAccessors$1.createjsOverSpeed.get = function() {
            return this._createjsData.controller.overSpeed;
        }, prototypeAccessors$1.createjsOverSpeed.set = function(value) {
            this._createjsData.controller.overSpeed = value;
        }, prototypeAccessors$1.createjsSmooth.get = function() {
            return this._createjsData.controller.smooth;
        }, prototypeAccessors$1.createjsSmooth.set = function(value) {
            this._createjsData.controller.smooth = value;
        }, Container.prototype.handleTick = function(delta) {
            return this._createjsData.controller.handleTick(delta);
        }, Container.prototype.updateTransform = function() {
            this._createjsData.controller.flushForRender(), PixiContainer.prototype.updateTransform.call(this);
        }, Container.prototype.addCreatejs = function(cjs) {
            return this._createjsData.controller.addCreatejs(cjs);
        }, Container.prototype.addCreatejsAt = function(cjs, index) {
            return this._createjsData.controller.addCreatejsAt(cjs, index);
        }, Container.prototype.removeCreatejs = function(cjs) {
            return this._createjsData.controller.removeCreatejs(cjs);
        }, Object.defineProperties(Container.prototype, prototypeAccessors$1), Container;
    }(PIXI.Container);
    createjs.MovieClip = CreatejsMovieClip, createjs.Sprite = CreatejsSprite, createjs.Shape = CreatejsShape, 
    createjs.Bitmap = CreatejsBitmap, createjs.Graphics = CreatejsGraphics, createjs.Text = CreatejsText, 
    createjs.ButtonHelper = CreatejsButtonHelper, createjs.ColorFilter = CreatejsColorFilter, 
    createjs.MotionGuidePlugin.install(), exports.createjs = createjs, exports.AnimateEvent = AnimateEvent, 
    exports.AnimateReachLabelEvent = AnimateReachLabelEvent, exports.CjsTransform = CjsTransform, 
    exports.Container = Container, exports.CreatejsBitmap = CreatejsBitmap, exports.CreatejsButtonHelper = CreatejsButtonHelper, 
    exports.CreatejsColorFilter = CreatejsColorFilter, exports.CreatejsController = CreatejsController, 
    exports.CreatejsEventManager = CreatejsEventManager, exports.CreatejsGraphics = CreatejsGraphics, 
    exports.CreatejsMovieClip = CreatejsMovieClip, exports.CreatejsShape = CreatejsShape, 
    exports.CreatejsSprite = CreatejsSprite, exports.CreatejsText = CreatejsText, exports.DISPLAY_ACCESSOR_NAMES = [ "x", "y", "scaleX", "scaleY", "rotation", "skewX", "skewY", "regX", "regY", "visible", "alpha" ], 
    exports.PixiBitmap = PixiBitmap, exports.PixiColorMatrixFilter = PixiColorMatrixFilter, 
    exports.PixiGraphics = PixiGraphics, exports.PixiMovieClip = PixiMovieClip, exports.PixiShape = PixiShape, 
    exports.PixiSprite = PixiSprite, exports.PixiText = PixiText, exports.PixiTextContainer = PixiTextContainer, 
    exports.addInteractionListener = addInteractionListener, exports.beginDrive = beginDrive, 
    exports.blendModeForPixi = blendModeForPixi, exports.createPixiData = createPixiData, 
    exports.defineDisplayAccessors = defineDisplayAccessors, exports.endDrive = endDrive, 
    exports.findPixiData = function(cjs) {
        var data = pixiDataStore.get(cjs);
        return data || null;
    }, exports.getPixiColorMatrixFilter = getPixiColorMatrixFilter, exports.isDriving = isDriving, 
    exports.loadAssetAsync = function(targets) {
        var _a, _b;
        Array.isArray(targets) || (targets = [ targets ]);
        for (var promises = [], loop = function(i) {
            var target = targets[i];
            (null === (_a = target.options) || void 0 === _a ? void 0 : _a.useSound) && (window.playSound = playSound);
            var comp = AdobeAn.getComposition(target.id);
            if (!comp) {
                throw new Error("no composition: " + target.id);
            }
            for (var lib = comp.getLibrary(), manifests = lib.properties.manifest.map(function(v) {
                return JSON.parse(JSON.stringify(v));
            }), crossOrigin = "boolean" != typeof (null === (_b = target.options) || void 0 === _b ? void 0 : _b.crossOrigin) || target.options.crossOrigin, i$1 = 0; i$1 < manifests.length; i$1++) {
                var manifest = manifests[i$1];
                if (0 === manifest.src.indexOf("data:image")) {
                    manifest.type = createjs.Types.IMAGE;
                } else {
                    if (0 === manifest.src.indexOf("data:audio")) {
                        throw new Error("data URL formatted sound is not supported.");
                    }
                    0 === manifest.src.indexOf("blob:") || 0 === manifest.src.indexOf("file:") || (manifest.src = PIXI__namespace.utils.url.resolve(target.basepath, manifest.src));
                }
            }
            if (crossOrigin) {
                for (var i$2 = 0; i$2 < manifests.length; i$2++) {
                    manifests[i$2].crossOrigin = !0;
                }
            }
            var loadPromise = new Promise(function(resolve, reject) {
                var _a;
                0 === manifests.length && resolve({});
                var loader = new createjs.LoadQueue(!1);
                (null === (_a = target.options) || void 0 === _a ? void 0 : _a.useSound) && loader.installPlugin(createjs.Sound);
                var errors = [];
                loader.addEventListener("fileload", function(evt) {
                    !function(evt, comp) {
                        var images = comp.getImages();
                        evt && "image" == evt.item.type && (images[evt.item.id] = evt.result);
                    }(evt, comp);
                }), loader.addEventListener("complete", function(evt) {
                    errors.length ? reject(errors) : resolve(evt);
                }), loader.addEventListener("error", function(evt) {
                    errors.push(evt.data);
                }), loader.loadManifest(manifests || []);
            }).then(function(evt) {
                for (var ss = comp.getSpriteSheet(), queue = evt.target, ssMetadata = lib.ssMetadata, i = 0; i < ssMetadata.length; i++) {
                    ss[ssMetadata[i].name] = new createjs.SpriteSheet({
                        images: [ queue.getResult(ssMetadata[i].name) ],
                        frames: ssMetadata[i].frames
                    });
                }
                return lib;
            });
            promises.push(loadPromise.then(function(lib) {
                var _a;
                for (var i in lib) {
                    lib[i].prototype instanceof CreatejsMovieClip && (lib[i].prototype._fps = lib.properties.fps, 
                    lib[i].prototype._listenFrameEventsBase = null === (_a = target.options) || void 0 === _a ? void 0 : _a.listenFrameEvents);
                }
                return lib;
            }));
        }, i = 0; i < targets.length; i++) {
            loop(i);
        }
        return Promise.all(promises).then(function(resolvers) {
            return 1 === resolvers.length ? resolvers[0] : resolvers;
        });
    }, exports.markForSettle = markForSettle, exports.registerPixiData = registerPixiData, 
    exports.removeAllInteractionListeners = removeAllInteractionListeners, exports.removeInteractionListener = removeInteractionListener, 
    exports.setMaskForPixi = setMaskForPixi, exports.syncToPixi = syncToPixi, exports.takeSettleMark = takeSettleMark;
}(this.PIXI.animate = this.PIXI.animate || {}, PIXI, createjs);
//# sourceMappingURL=pixi-animate-container.js.map
