/*!
 * pixi-animate-container - v2.0.0
 * 
 * @require pixi.js v^5.3.2
 * @author tawaship (makazu.mori@gmail.com)
 * @license MIT
 */
this.PIXI = this.PIXI || {}, function(exports, createjs, PIXI) {
    "use strict";
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
    }((createjs = createjs && Object.prototype.hasOwnProperty.call(createjs, "default") ? createjs.default : createjs).ButtonHelper);
    function createObject(proto) {
        return Object.create(proto);
    }
    var DEG_TO_RAD = Math.PI / 180;
    function createPixiData(pixi, regObj) {
        return {
            regObj: regObj,
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
            visible: !0,
            alpha: 1,
            _off: !1,
            mask: null
        };
    }
    function updateDisplayObjectChildren(cjs, e) {
        for (var list = cjs.children.slice(), i = 0, l = list.length; i < l; i++) {
            list[i].updateForPixi(e);
        }
        return !0;
    }
    function mixinCreatejsDisplayObject(superClass) {
        return function(superClass) {
            function C() {
                superClass.apply(this, arguments);
            }
            superClass && (C.__proto__ = superClass), C.prototype = Object.create(superClass && superClass.prototype), 
            C.prototype.constructor = C;
            var prototypeAccessors = {
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
            return prototypeAccessors.pixi.get = function() {
                return this._pixiData.instance;
            }, prototypeAccessors.x.get = function() {
                return this._createjsParams.x;
            }, prototypeAccessors.x.set = function(value) {
                this._pixiData.instance.x = value, this._createjsParams.x = value;
            }, prototypeAccessors.y.get = function() {
                return this._createjsParams.y;
            }, prototypeAccessors.y.set = function(value) {
                this._pixiData.instance.y = value, this._createjsParams.y = value;
            }, prototypeAccessors.scaleX.get = function() {
                return this._createjsParams.scaleX;
            }, prototypeAccessors.scaleX.set = function(value) {
                this._pixiData.instance.scale.x = value, this._createjsParams.scaleX = value;
            }, prototypeAccessors.scaleY.get = function() {
                return this._createjsParams.scaleY;
            }, prototypeAccessors.scaleY.set = function(value) {
                this._pixiData.instance.scale.y = value, this._createjsParams.scaleY = value;
            }, prototypeAccessors.skewX.get = function() {
                return this._createjsParams.skewX;
            }, prototypeAccessors.skewX.set = function(value) {
                this._pixiData.instance.skew.x = -value * DEG_TO_RAD, this._createjsParams.skewX = value;
            }, prototypeAccessors.skewY.get = function() {
                return this._createjsParams.skewY;
            }, prototypeAccessors.skewY.set = function(value) {
                this._pixiData.instance.skew.y = value * DEG_TO_RAD, this._createjsParams.skewY = value;
            }, prototypeAccessors.regX.get = function() {
                return this._createjsParams.regX;
            }, prototypeAccessors.regX.set = function(value) {
                this._pixiData.regObj.x = value, this._createjsParams.regX = value;
            }, prototypeAccessors.regY.get = function() {
                return this._createjsParams.regY;
            }, prototypeAccessors.regY.set = function(value) {
                this._pixiData.regObj.y = value, this._createjsParams.regY = value;
            }, prototypeAccessors.rotation.get = function() {
                return this._createjsParams.rotation;
            }, prototypeAccessors.rotation.set = function(value) {
                this._pixiData.instance.rotation = value * DEG_TO_RAD, this._createjsParams.rotation = value;
            }, prototypeAccessors.visible.get = function() {
                return this._createjsParams.visible;
            }, prototypeAccessors.visible.set = function(value) {
                value = !!value, this._pixiData.instance.visible = value, this._createjsParams.visible = value;
            }, prototypeAccessors.alpha.get = function() {
                return this._createjsParams.alpha;
            }, prototypeAccessors.alpha.set = function(value) {
                this._pixiData.instance.alpha = value, this._createjsParams.alpha = value;
            }, prototypeAccessors._off.get = function() {
                return this._createjsParams._off;
            }, prototypeAccessors._off.set = function(value) {
                this._pixiData.instance.renderable = !value, this._createjsParams._off = value;
            }, C.prototype.addEventListener = function(type, cb) {
                for (var args = [], len = arguments.length - 2; len-- > 0; ) {
                    args[len] = arguments[len + 2];
                }
                var p = superClass.prototype.addEventListener.apply(this, [ type, cb ].concat(args));
                return cb instanceof CreatejsButtonHelper || this._createjsEventManager.add(type, cb), 
                p;
            }, C.prototype.removeEventListener = function(type, cb) {
                for (var args = [], len = arguments.length - 2; len-- > 0; ) {
                    args[len] = arguments[len + 2];
                }
                var p = superClass.prototype.removeEventListener.apply(this, [ type, cb ].concat(args));
                return cb instanceof CreatejsButtonHelper || this._createjsEventManager.remove(type, cb), 
                p;
            }, C.prototype.removeAllEventListeners = function(type) {
                for (var args = [], len = arguments.length - 1; len-- > 0; ) {
                    args[len] = arguments[len + 1];
                }
                var p = superClass.prototype.removeAllEventListeners.apply(this, [ type ].concat(args));
                return this._createjsEventManager.removeAll(type), p;
            }, prototypeAccessors.mask.get = function() {
                return this._createjsParams.mask;
            }, prototypeAccessors.mask.set = function(value) {
                var this$1 = this;
                value ? (value.masked.push(this._pixiData.instance), this._pixiData.instance.mask = value.pixi, 
                this._pixiData.instance.once("added", (function() {
                    this$1._pixiData.instance.parent.addChild(value.pixi);
                }))) : this._pixiData.instance.mask = null, this._createjsParams.mask = value;
            }, Object.defineProperties(C.prototype, prototypeAccessors), C;
        }(superClass);
    }
    var createjsInteractionEvents, CreatejsStage = function(superclass) {
        function CreatejsStage() {
            superclass.apply(this, arguments);
        }
        return superclass && (CreatejsStage.__proto__ = superclass), CreatejsStage.prototype = Object.create(superclass && superclass.prototype), 
        CreatejsStage.prototype.constructor = CreatejsStage, CreatejsStage.prototype.updateForPixi = function(props) {
            return this.tickOnUpdate && this.tick(props), this.dispatchEvent("drawstart"), updateDisplayObjectChildren(this, props), 
            this.dispatchEvent("drawend"), !0;
        }, CreatejsStage;
    }(createjs.Stage), CreatejsStageGL = function(superclass) {
        function CreatejsStageGL() {
            superclass.apply(this, arguments);
        }
        return superclass && (CreatejsStageGL.__proto__ = superclass), CreatejsStageGL.prototype = Object.create(superclass && superclass.prototype), 
        CreatejsStageGL.prototype.constructor = CreatejsStageGL, CreatejsStageGL.prototype.updateForPixi = function(props) {
            return this.tickOnUpdate && this.tick(props), this.dispatchEvent("drawstart"), updateDisplayObjectChildren(this, props), 
            this.dispatchEvent("drawend"), !0;
        }, CreatejsStageGL;
    }(createjs.StageGL);
    (createjsInteractionEvents = exports.createjsInteractionEvents || (exports.createjsInteractionEvents = {})).mousedown = "mousedown", 
    createjsInteractionEvents.pressmove = "pressmove", createjsInteractionEvents.pressup = "pressup", 
    createjsInteractionEvents.rollover = "rollover", createjsInteractionEvents.rollout = "rollout", 
    createjsInteractionEvents.click = "click";
    var EventManager = function(cjs) {
        this._downTarget = null, this._cjs = cjs, this._emitter = new PIXI.utils.EventEmitter, 
        cjs.pixi.on("pointerdown", this._onPointerDown, this).on("pointermove", this._onPointerMove, this).on("pointerup", this._onPointerUp, this).on("pointerupoutside", this._onPointerUpOutside, this).on("pointertap", this._onPointerTap, this).on("pointerover", this._onPointerOver, this).on("pointerout", this._onPointerOut, this);
    };
    EventManager.prototype._onPointerDown = function(e) {
        var ev = {
            type: exports.createjsInteractionEvents.mousedown,
            currentTarget: e.currentTarget.createjs,
            target: e.target.createjs,
            rawX: e.data.global.x,
            rawY: e.data.global.y
        };
        this._downTarget = e.target.createjs, this._emitter.emit("mousedown", ev);
    }, EventManager.prototype._onPointerMove = function(e) {
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
    }, EventManager.prototype._onPointerUp = function(e) {
        var ev = {
            type: exports.createjsInteractionEvents.pressup,
            currentTarget: e.currentTarget.createjs,
            target: this._downTarget,
            rawX: e.data.global.x,
            rawY: e.data.global.y
        };
        this._downTarget = null, this._emitter.emit("pressup", ev);
    }, EventManager.prototype._onPointerUpOutside = function(e) {
        var ev = {
            type: exports.createjsInteractionEvents.pressup,
            currentTarget: e.currentTarget.createjs,
            target: this._downTarget,
            rawX: e.data.global.x,
            rawY: e.data.global.y
        };
        this._downTarget = null, this._emitter.emit("pressup", ev);
    }, EventManager.prototype._onPointerTap = function(e) {
        var ev = {
            type: exports.createjsInteractionEvents.click,
            currentTarget: e.currentTarget.createjs,
            target: e.target.createjs,
            rawX: e.data.global.x,
            rawY: e.data.global.y
        };
        this._emitter.emit("click", ev);
    }, EventManager.prototype._onPointerOver = function(e) {
        var ev = {
            type: exports.createjsInteractionEvents.rollover,
            currentTarget: e.currentTarget.createjs,
            target: e.currentTarget.createjs,
            rawX: e.data.global.x,
            rawY: e.data.global.y
        };
        this._emitter.emit("rollover", ev);
    }, EventManager.prototype._onPointerOut = function(e) {
        var ev = {
            type: exports.createjsInteractionEvents.rollout,
            currentTarget: e.currentTarget.createjs,
            target: e.currentTarget.createjs,
            rawX: e.data.global.x,
            rawY: e.data.global.y
        };
        this._emitter.emit("rollout", ev);
    }, EventManager.prototype.add = function(type, cb) {
        type in exports.createjsInteractionEvents && (this._emitter.on(type, cb), this._emitter.eventNames().length > 0 && (this._cjs.pixi.interactive = !0));
    }, EventManager.prototype.remove = function(type, cb) {
        type in exports.createjsInteractionEvents && (this._emitter.off(type, cb), 0 === this._emitter.eventNames().length && (this._cjs.pixi.interactive = !1));
    }, EventManager.prototype.removeAll = function(type) {
        type && !(type in exports.createjsInteractionEvents) || (this._emitter.removeAllListeners(type), 
        0 === this._emitter.eventNames().length && (this._cjs.pixi.interactive = !1));
    };
    var PixiMovieClip = function(Container) {
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
    }(PIXI.Container);
    function createCreatejsMovieClipParams() {
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
            mask: null
        }, {
            filters: null
        });
    }
    function createPixiMovieClipData(cjs) {
        var pixi = new PixiMovieClip(cjs);
        return Object.assign(createPixiData(pixi, pixi.pivot), {
            subInstance: pixi
        });
    }
    var AnimateEvent = function(superclass) {
        function AnimateEvent(type) {
            superclass.call(this, type);
        }
        return superclass && (AnimateEvent.__proto__ = superclass), AnimateEvent.prototype = Object.create(superclass && superclass.prototype), 
        AnimateEvent.prototype.constructor = AnimateEvent, AnimateEvent;
    }(createjs.Event), ReachLabelEvent = function(AnimateEvent) {
        function ReachLabelEvent(type, label) {
            AnimateEvent.call(this, type), this.data = label;
        }
        return AnimateEvent && (ReachLabelEvent.__proto__ = AnimateEvent), ReachLabelEvent.prototype = Object.create(AnimateEvent && AnimateEvent.prototype), 
        ReachLabelEvent.prototype.constructor = ReachLabelEvent, ReachLabelEvent;
    }(AnimateEvent), P = createjs.MovieClip, CreatejsMovieClip = function(superclass) {
        function CreatejsMovieClip() {
            for (var args = [], len = arguments.length; len--; ) {
                args[len] = arguments[len];
            }
            superclass.call(this), this._pixiData = createPixiMovieClipData(this), this._createjsParams = createCreatejsMovieClipParams(), 
            this._createjsEventManager = new EventManager(this), P.apply(this, args), this.framerate = this._framerateBase;
        }
        superclass && (CreatejsMovieClip.__proto__ = superclass), CreatejsMovieClip.prototype = Object.create(superclass && superclass.prototype), 
        CreatejsMovieClip.prototype.constructor = CreatejsMovieClip;
        var prototypeAccessors$1 = {
            filters: {
                configurable: !0
            }
        };
        return CreatejsMovieClip.prototype.endAnimation = function(e) {}, CreatejsMovieClip.prototype.reachLabel = function(e) {}, 
        CreatejsMovieClip.prototype.initialize = function() {
            for (var args = [], len = arguments.length; len--; ) {
                args[len] = arguments[len];
            }
            this._pixiData = createPixiMovieClipData(this), this._createjsParams = createCreatejsMovieClipParams(), 
            this._createjsEventManager = new EventManager(this), superclass.prototype.initialize.apply(this, args), 
            this.framerate = this._framerateBase;
        }, CreatejsMovieClip.prototype.updateForPixi = function(e) {
            var currentFrame = this.currentFrame;
            if (this.advance(16.666666666666668 * e.delta), this._useFrameEvent && currentFrame !== this.currentFrame && (this._useFrameEvent.endAnimation && this.currentFrame === this.totalFrames - 1 && this.dispatchEvent(new AnimateEvent("endAnimation")), 
            this._useFrameEvent.reachLabel)) {
                for (var i = 0; i < this.labels.length; i++) {
                    var label = this.labels[i];
                    if (this.currentFrame === label.position) {
                        this.dispatchEvent(new ReachLabelEvent("reachLabel", label));
                        break;
                    }
                }
            }
            return this._updateState(), updateDisplayObjectChildren(this, e);
        }, prototypeAccessors$1.filters.get = function() {
            return this._createjsParams.filters;
        }, prototypeAccessors$1.filters.set = function(value) {
            var list = [];
            if (value && value.length > 0) {
                for (var i = 0; i < value.length; i++) {
                    var f = value[i];
                    f instanceof createjs.ColorFilter && list.push(f.pixi);
                }
            }
            this._pixiData.instance.filters = list, this._createjsParams.filters = value;
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
    }(mixinCreatejsDisplayObject(createjs.MovieClip));
    delete CreatejsMovieClip.prototype.endAnimation, delete CreatejsMovieClip.prototype.reachLabel, 
    Object.defineProperties(CreatejsMovieClip.prototype, {
        _createjsParams: {
            value: createCreatejsMovieClipParams(),
            writable: !0
        },
        _pixiData: {
            value: createPixiMovieClipData(createObject(CreatejsMovieClip.prototype)),
            writable: !0
        }
    });
    var PixiSprite = function(Sprite) {
        function PixiSprite(cjs) {
            Sprite.call(this), this._createjs = cjs, this.interactive = !0;
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
                mask: null
            }, this._createjsEventManager = new EventManager(this), P$1.apply(this, args);
        }
        return superclass && (CreatejsSprite.__proto__ = superclass), CreatejsSprite.prototype = Object.create(superclass && superclass.prototype), 
        CreatejsSprite.prototype.constructor = CreatejsSprite, CreatejsSprite.prototype.initialize = function() {
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
                mask: null
            }, this._createjsEventManager = new EventManager(this), superclass.prototype.initialize.apply(this, args);
        }, CreatejsSprite.prototype.updateForPixi = function(e) {
            return !0;
        }, CreatejsSprite.prototype.gotoAndStop = function() {
            for (var args = [], len = arguments.length; len--; ) {
                args[len] = arguments[len];
            }
            superclass.prototype.gotoAndStop.apply(this, args);
            var frame = this.spriteSheet.getFrame(this.currentFrame), baseTexture = PIXI.BaseTexture.from(frame.image), texture = new PIXI.Texture(baseTexture, frame.rect);
            this._pixiData.instance.texture = texture;
        }, CreatejsSprite;
    }(mixinCreatejsDisplayObject(createjs.Sprite));
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
                mask: null
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
            Container.call(this), this._createjs = cjs, this.interactive = !0;
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
            mask: null
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
        var prototypeAccessors$1 = {
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
        }, CreatejsShape.prototype.updateForPixi = function(e) {
            return !0;
        }, prototypeAccessors$1.graphics.get = function() {
            return this._createjsParams.graphics;
        }, prototypeAccessors$1.graphics.set = function(value) {
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
        }, prototypeAccessors$1.masked.get = function() {
            return this._pixiData.masked;
        }, Object.defineProperties(CreatejsShape.prototype, prototypeAccessors$1), CreatejsShape;
    }(mixinCreatejsDisplayObject(createjs.Shape));
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
            Sprite.call(this), this._createjs = cjs, this.interactive = !0;
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
                mask: null
            }, this._createjsEventManager = new EventManager(this), P$3.apply(this, args);
        }
        return superclass && (CreatejsBitmap.__proto__ = superclass), CreatejsBitmap.prototype = Object.create(superclass && superclass.prototype), 
        CreatejsBitmap.prototype.constructor = CreatejsBitmap, CreatejsBitmap.prototype.initialize = function() {
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
                mask: null
            }, this._createjsEventManager = new EventManager(this);
            var res = superclass.prototype.initialize.apply(this, args), texture = PIXI.Texture.from(this.image);
            return this._pixiData.instance.texture = texture, res;
        }, CreatejsBitmap.prototype.updateForPixi = function(e) {
            return !0;
        }, CreatejsBitmap;
    }(mixinCreatejsDisplayObject(createjs.Bitmap));
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
                mask: null
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
        var prototypeAccessors = {
            createjs: {
                configurable: !0
            }
        };
        return prototypeAccessors.createjs.get = function() {
            return this._createjs;
        }, Object.defineProperties(PixiGraphics.prototype, prototypeAccessors), PixiGraphics;
    }(PIXI.Graphics);
    function createPixiGraphicsData(cjs) {
        var pixi = new PixiGraphics(cjs);
        return Object.assign(createPixiData(pixi, pixi.pivot), {
            strokeFill: 0,
            strokeAlpha: 1
        });
    }
    var LineCap = {
        0: PIXI.LINE_CAP.BUTT,
        1: PIXI.LINE_CAP.ROUND,
        2: PIXI.LINE_CAP.SQUARE
    }, LineJoin = {
        0: PIXI.LINE_JOIN.MITER,
        1: PIXI.LINE_JOIN.ROUND,
        2: PIXI.LINE_JOIN.BEVEL
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
                mask: null
            }, this._createjsEventManager = new EventManager(this), P$4.apply(this, args), this._pixiData.instance.beginFill(16772846, 1), 
            this._pixiData.strokeFill = 0, this._pixiData.strokeAlpha = 1;
        }
        return superclass && (CreatejsGraphics.__proto__ = superclass), CreatejsGraphics.prototype = Object.create(superclass && superclass.prototype), 
        CreatejsGraphics.prototype.constructor = CreatejsGraphics, CreatejsGraphics.prototype.initialize = function() {
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
                mask: null
            }, this._createjsEventManager = new EventManager(this), superclass.prototype.initialize.apply(this, args);
        }, CreatejsGraphics.prototype.updateForPixi = function(e) {
            return !0;
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
        }, CreatejsGraphics;
    }(mixinCreatejsDisplayObject(createjs.Graphics));
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
                mask: null
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
            mask: null
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
        var prototypeAccessors$1 = {
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
        return CreatejsText.prototype.updateForPixi = function(e) {
            return !0;
        }, prototypeAccessors$1.text.get = function() {
            return this._createjsParams.text;
        }, prototypeAccessors$1.text.set = function(text) {
            this._pixiData.instance.text.text = text, this._align(this.textAlign), this._createjsParams.text = text;
        }, CreatejsText.prototype._parseFont = function(font) {
            var p = font.split(" "), w = "normal", s = p.shift() || "";
            return -1 === s.indexOf("px") && (w = s, s = p.shift() || ""), {
                fontWeight: w,
                fontSize: Number((s || "0px").replace("px", "")),
                fontFamily: p.join(" ").replace(/'/g, "")
            };
        }, prototypeAccessors$1.font.get = function() {
            return this._createjsParams.font;
        }, prototypeAccessors$1.font.set = function(font) {
            var _font = this._parseFont(font);
            this._pixiData.instance.text.style.fontSize = _font.fontSize, this._pixiData.instance.text.style.fontFamily = _font.fontFamily, 
            this._createjsParams.font = font;
        }, CreatejsText.prototype._parseColor = function(color) {
            return parseInt(color.slice(1), 16);
        }, prototypeAccessors$1.color.get = function() {
            return this._createjsParams.color;
        }, prototypeAccessors$1.color.set = function(color) {
            this._pixiData.instance.text.style.fill = this._parseColor(color), this._createjsParams.color = color;
        }, CreatejsText.prototype._align = function(align) {
            "left" !== align ? "center" !== align ? "right" !== align || (this._pixiData.instance.text.x = -this._pixiData.instance.text.width) : this._pixiData.instance.text.x = -this._pixiData.instance.text.width / 2 : this._pixiData.instance.text.x = 0;
        }, prototypeAccessors$1.textAlign.get = function() {
            return this._createjsParams.textAlign;
        }, prototypeAccessors$1.textAlign.set = function(align) {
            this._pixiData.instance.text.style.align = align, this._align(align), this._createjsParams.textAlign = align;
        }, prototypeAccessors$1.lineHeight.get = function() {
            return this._createjsParams.lineHeight;
        }, prototypeAccessors$1.lineHeight.set = function(height) {
            this._pixiData.instance.text.style.lineHeight = height, this._createjsParams.lineHeight = height;
        }, prototypeAccessors$1.lineWidth.get = function() {
            return this._createjsParams.lineWidth;
        }, prototypeAccessors$1.lineWidth.set = function(width) {
            this._pixiData.instance.text.style.wordWrapWidth = width, this._align(this.textAlign), 
            this._createjsParams.lineWidth = width;
        }, Object.defineProperties(CreatejsText.prototype, prototypeAccessors$1), CreatejsText;
    }(mixinCreatejsDisplayObject(createjs.Text));
    Object.defineProperties(CreatejsText.prototype, {
        _createjsParams: {
            value: createCreatejsTextParams("", "", ""),
            writable: !0
        },
        _pixiData: {
            value: createPixiTextData(createObject(CreatejsText.prototype), new PixiText("")),
            writable: !0
        }
    });
    var PixiColorMatrixFilter = function(superclass) {
        function PixiColorMatrixFilter(cjs) {
            superclass.call(this), this._createjs = cjs;
        }
        superclass && (PixiColorMatrixFilter.__proto__ = superclass), PixiColorMatrixFilter.prototype = Object.create(superclass && superclass.prototype), 
        PixiColorMatrixFilter.prototype.constructor = PixiColorMatrixFilter;
        var prototypeAccessors = {
            createjs: {
                configurable: !0
            }
        };
        return prototypeAccessors.createjs.get = function() {
            return this._createjs;
        }, Object.defineProperties(PixiColorMatrixFilter.prototype, prototypeAccessors), 
        PixiColorMatrixFilter;
    }(PIXI.filters.ColorMatrixFilter);
    function createPixiColorMatrixFilterData(cjs) {
        return {
            instance: new PixiColorMatrixFilter(cjs)
        };
    }
    function createCreatejsColorFilterParams() {
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
            mask: null
        }, {
            redMultiplier: 1,
            greenMultiplier: 1,
            blueMultiplier: 1,
            alphaMultiplier: 1,
            redOffset: 0,
            greenOffset: 0,
            blueOffset: 0,
            alphaOffset: 0
        });
    }
    var P$6 = createjs.ColorFilter, CreatejsColorFilter = function(superclass) {
        function CreatejsColorFilter() {
            for (var args = [], len = arguments.length; len--; ) {
                args[len] = arguments[len];
            }
            superclass.call(this, args);
            var pixiData = this._pixiData = createPixiColorMatrixFilterData(this), createjsParams = this._createjsParams = createCreatejsColorFilterParams();
            Object.defineProperties(this, {
                _pixiData: {
                    enumerable: !1,
                    value: pixiData
                },
                _createjsParams: {
                    enumerable: !1,
                    value: createjsParams
                },
                redMultiplier: {
                    get: function() {
                        return this._createjsParams.redMultiplier;
                    },
                    set: function(value) {
                        this._pixiData.instance.matrix[0] = value, this._createjsParams.redMultiplier = value;
                    }
                },
                greenMultiplier: {
                    get: function() {
                        return this._createjsParams.greenMultiplier;
                    },
                    set: function(value) {
                        this._pixiData.instance.matrix[6] = value, this._createjsParams.greenMultiplier = value;
                    }
                },
                blueMultiplier: {
                    get: function() {
                        return this._createjsParams.blueMultiplier;
                    },
                    set: function(value) {
                        this._pixiData.instance.matrix[12] = value, this._createjsParams.blueMultiplier = value;
                    }
                },
                alphaMultiplier: {
                    get: function() {
                        return this._createjsParams.alphaMultiplier;
                    },
                    set: function(value) {
                        this._pixiData.instance.matrix[18] = value, this._createjsParams.alphaMultiplier = value;
                    }
                },
                redOffset: {
                    get: function() {
                        return this._createjsParams.redOffset;
                    },
                    set: function(value) {
                        this._pixiData.instance.matrix[4] = value / 255, this._createjsParams.redOffset = value;
                    }
                },
                greenOffset: {
                    get: function() {
                        return this._createjsParams.greenOffset;
                    },
                    set: function(value) {
                        this._pixiData.instance.matrix[9] = value / 255, this._createjsParams.greenOffset = value;
                    }
                },
                blueOffset: {
                    get: function() {
                        return this._createjsParams.blueOffset;
                    },
                    set: function(value) {
                        this._pixiData.instance.matrix[14] = value / 255, this._createjsParams.blueOffset = value;
                    }
                },
                alphaOffset: {
                    get: function() {
                        return this._createjsParams.alphaOffset;
                    },
                    set: function(value) {
                        this._pixiData.instance.matrix[19] = value / 255, this._createjsParams.alphaOffset = value;
                    }
                }
            }), P$6.apply(this, args);
        }
        superclass && (CreatejsColorFilter.__proto__ = superclass), CreatejsColorFilter.prototype = Object.create(superclass && superclass.prototype), 
        CreatejsColorFilter.prototype.constructor = CreatejsColorFilter;
        var prototypeAccessors$1 = {
            pixi: {
                configurable: !0
            }
        };
        return prototypeAccessors$1.pixi.get = function() {
            return this._pixiData.instance;
        }, Object.defineProperties(CreatejsColorFilter.prototype, prototypeAccessors$1), 
        CreatejsColorFilter;
    }(createjs.ColorFilter);
    function playSound(id, loop, offset) {
        return createjs.Sound.play(id, {
            interrupt: createjs.Sound.INTERRUPT_EARLY,
            loop: loop,
            offset: offset
        });
    }
    Object.defineProperties(CreatejsColorFilter.prototype, {
        _createjsParams: {
            value: createCreatejsColorFilterParams(),
            writable: !0
        },
        _pixiData: {
            value: createPixiColorMatrixFilterData(createObject(CreatejsColorFilter.prototype)),
            writable: !0
        }
    });
    var CreatejsController = function(container) {
        this._createjsData = {
            id: 0,
            targets: {},
            container: container
        };
    };
    CreatejsController.prototype.handleTick = function(delta) {
        var e = {
            delta: Math.min(delta, 1)
        }, targets = this._createjsData.targets;
        for (var i in targets) {
            targets[i].updateForPixi(e);
        }
    }, CreatejsController.prototype._addCreatejs = function(cjs) {
        var this$1 = this;
        if (cjs instanceof CreatejsMovieClip) {
            var p = cjs.pixi.parent;
            cjs.pixi.once("added", (function() {
                cjs.pixi.parent !== p && cjs.gotoAndPlay(0);
                var id = this$1._createjsData.id++;
                this$1._createjsData.targets[id] = cjs, cjs.pixi.once("removed", (function() {
                    delete this$1._createjsData.targets[id];
                }));
            }));
        }
    }, CreatejsController.prototype.addCreatejs = function(cjs) {
        return this._addCreatejs(cjs), this._createjsData.container.addChild(cjs.pixi), 
        cjs;
    }, CreatejsController.prototype.addCreatejsAt = function(cjs, index) {
        return this._addCreatejs(cjs), this._createjsData.container.addChildAt(cjs.pixi, index), 
        cjs;
    }, CreatejsController.prototype.removeCreatejs = function(cjs) {
        return this._createjsData.container.removeChild(cjs.pixi), cjs;
    };
    var Container = function(_Container) {
        function Container() {
            _Container.call(this), this._createjsData = {
                controller: new CreatejsController(this)
            };
        }
        return _Container && (Container.__proto__ = _Container), Container.prototype = Object.create(_Container && _Container.prototype), 
        Container.prototype.constructor = Container, Container.prototype.handleTick = function(delta) {
            return this._createjsData.controller.handleTick(delta);
        }, Container.prototype.addCreatejs = function(cjs) {
            return this._createjsData.controller.addCreatejs(cjs);
        }, Container.prototype.addCreatejsAt = function(cjs, index) {
            return this._createjsData.controller.addCreatejsAt(cjs, index);
        }, Container.prototype.removeCreatejs = function(cjs) {
            return this._createjsData.controller.removeCreatejs(cjs);
        }, Container;
    }(PIXI.Container);
    createjs.Stage = CreatejsStage, createjs.StageGL = CreatejsStageGL, createjs.MovieClip = CreatejsMovieClip, 
    createjs.Sprite = CreatejsSprite, createjs.Shape = CreatejsShape, createjs.Bitmap = CreatejsBitmap, 
    createjs.Graphics = CreatejsGraphics, createjs.Text = CreatejsText, createjs.ButtonHelper = CreatejsButtonHelper, 
    createjs.ColorFilter = CreatejsColorFilter, createjs.MotionGuidePlugin.install(), 
    exports.AnimateEvent = AnimateEvent, exports.Container = Container, exports.CreatejsBitmap = CreatejsBitmap, 
    exports.CreatejsButtonHelper = CreatejsButtonHelper, exports.CreatejsColorFilter = CreatejsColorFilter, 
    exports.CreatejsController = CreatejsController, exports.CreatejsGraphics = CreatejsGraphics, 
    exports.CreatejsMovieClip = CreatejsMovieClip, exports.CreatejsShape = CreatejsShape, 
    exports.CreatejsSprite = CreatejsSprite, exports.CreatejsStage = CreatejsStage, 
    exports.CreatejsStageGL = CreatejsStageGL, exports.CreatejsText = CreatejsText, 
    exports.EventManager = EventManager, exports.PixiBitmap = PixiBitmap, exports.PixiColorMatrixFilter = PixiColorMatrixFilter, 
    exports.PixiGraphics = PixiGraphics, exports.PixiMovieClip = PixiMovieClip, exports.PixiShape = PixiShape, 
    exports.PixiSprite = PixiSprite, exports.PixiText = PixiText, exports.PixiTextContainer = PixiTextContainer, 
    exports.ReachLabelEvent = ReachLabelEvent, exports.createCreatejsParams = createCreatejsParams, 
    exports.createPixiData = createPixiData, exports.dataURLToBlobURL = function(dataURL) {
        for (var bin = atob(dataURL.replace(/^.*,/, "")), buffer = new Uint8Array(bin.length), i = 0; i < bin.length; i++) {
            buffer[i] = bin.charCodeAt(i);
        }
        var p = dataURL.slice(5);
        try {
            var blob = new Blob([ buffer.buffer ], {
                type: p.slice(0, p.indexOf(";"))
            });
            return console.log(p.slice(0, p.indexOf(";"))), (URL || webkitURL).createObjectURL(blob);
        } catch (e) {
            throw e;
        }
    }, exports.loadAssetAsync = function(targets) {
        var _a, _b;
        Array.isArray(targets) || (targets = [ targets ]);
        for (var promises = [], loop = function(i) {
            var target = targets[i];
            (null === (_a = target.options) || void 0 === _a ? void 0 : _a.useSound) && (window.playSound = playSound);
            var comp = AdobeAn.getComposition(target.id);
            if (!comp) {
                throw new Error("no composition: " + target.id);
            }
            for (var lib = comp.getLibrary(), manifests = lib.properties.manifest, crossOrigin = "boolean" != typeof (null === (_b = target.options) || void 0 === _b ? void 0 : _b.crossOrigin) || target.options.crossOrigin, i$1 = 0; i$1 < manifests.length; i$1++) {
                var manifest = manifests[i$1];
                if (manifest.src = PIXI.utils.url.resolve(target.basepath, manifest.src), 0 === manifest.src.indexOf("data:image")) {
                    manifest.type = createjs.Types.IMAGE;
                } else if (0 === manifest.src.indexOf("data:audio")) {
                    throw new Error("data URL formatted sound is not supported.");
                }
            }
            if (crossOrigin) {
                for (var i$2 = 0; i$2 < manifests.length; i$2++) {
                    manifests[i$2].crossOrigin = !0;
                }
            }
            var loadPromise = new Promise((function(resolve, reject) {
                var _a;
                0 === lib.properties.manifest.length && resolve({});
                var loader = new createjs.LoadQueue(!1);
                (null === (_a = target.options) || void 0 === _a ? void 0 : _a.useSound) && loader.installPlugin(createjs.Sound);
                var errors = [];
                loader.addEventListener("fileload", (function(evt) {
                    !function(evt, comp) {
                        var images = comp.getImages();
                        evt && "image" == evt.item.type && (images[evt.item.id] = evt.result);
                    }(evt, comp);
                })), loader.addEventListener("complete", (function(evt) {
                    errors.length ? reject(errors) : resolve(evt);
                })), loader.addEventListener("error", (function(evt) {
                    errors.push(evt.data);
                })), loader.loadManifest(lib.properties.manifest || []);
            })).then((function(evt) {
                for (var ss = comp.getSpriteSheet(), queue = evt.target, ssMetadata = lib.ssMetadata, i = 0; i < ssMetadata.length; i++) {
                    ss[ssMetadata[i].name] = new createjs.SpriteSheet({
                        images: [ queue.getResult(ssMetadata[i].name) ],
                        frames: ssMetadata[i].frames
                    });
                }
                return lib;
            }));
            promises.push(loadPromise.then((function(lib) {
                var _a;
                for (var i in lib) {
                    lib[i].prototype instanceof CreatejsMovieClip && (lib[i].prototype._framerateBase = lib.properties.fps, 
                    lib[i].prototype._useFrameEvent = null === (_a = target.options) || void 0 === _a ? void 0 : _a.useFrameEvent);
                }
                return lib;
            })));
        }, i = 0; i < targets.length; i++) {
            loop(i);
        }
        return Promise.all(promises).then((function(resolvers) {
            return 1 === resolvers.length ? resolvers[0] : resolvers;
        }));
    }, exports.mixinCreatejsDisplayObject = mixinCreatejsDisplayObject, exports.updateDisplayObjectChildren = updateDisplayObjectChildren;
}(this.PIXI.animate = this.PIXI.animate || {}, createjs, PIXI);
//# sourceMappingURL=pixi-animate-container.js.map
