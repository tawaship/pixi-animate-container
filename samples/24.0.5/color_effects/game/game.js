(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"game_atlas_1", frames: [[0,0,302,67],[304,0,56,56]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.ビットマップ1 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ビットマップ2 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.symbol66b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.ビットマップ2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,56);


(lib.symbol66 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#999999").beginStroke().moveTo(-28,28).lineTo(-27.9,-28).lineTo(28,-28).lineTo(28,28).closePath();
	this.shape.setTransform(28,27.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,56);


(lib.symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#999999").beginStroke().moveTo(-28,28).lineTo(-27.9,-28).lineTo(28,-28).lineTo(28,28).closePath();
	this.shape.setTransform(28,27.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,56);


(lib.symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.symbol6();
	this.instance.setTransform(28,27.9,1,1,0,0,0,28,27.9);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,0.76953125,1,76,-28,144,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,60,60);

	this.instance_1 = new lib.symbol6("synched",0);
	this.instance_1.setTransform(-35,27.9,1,1,0,0,0,28,27.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,0,119,56);


(lib.symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.symbol8();
	this.instance.setTransform(126.95,88.85,1,1,0,0,0,28,27.9);
	var instanceFilter_1 = new cjs.ColorFilter(0.55,0.55,0.55,1,72.45,114.75,4.5,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-65,-2,123,60);

	this.instance_1 = new lib.symbol6("synched",0);
	this.instance_1.setTransform(0.95,88.85,1,1,0,0,0,28,27.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1));
	this.instance.addEventListener("tick", AdobeAn.handleFilterCache);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,61,182,55.900000000000006);


(lib.symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2
	this.instance = new lib.symbol7();
	this.instance.setTransform(-95,-33.05,1,1,0,0,0,28,27.9);
	var instanceFilter_1 = new cjs.ColorFilter(0.59,0.59,0.59,1,104.55,104.55,104.55,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-29,59,186,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1));
	this.instance.addEventListener("tick", AdobeAn.handleFilterCache);

	// レイヤー_1
	this.instance_1 = new lib.symbol6("synched",0);
	this.instance_1.setTransform(-188,27.9,1,1,0,0,0,28,27.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216,0,248,56);


// stage content:
(lib.game = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_3
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(2.7,5.3).lineTo(2.7,-1.9).curveTo(2.7,-2.7,2.1,-3.3).curveTo(1.6,-3.8,0.5,-3.8).curveTo(-0.3,-3.8,-1.3,-2.9).curveTo(-2.7,-1.5,-2.7,0.1).lineTo(-2.7,5.3).lineTo(-4.6,5.3).lineTo(-4.6,-5.2).lineTo(-2.7,-5.2).lineTo(-2.7,-3.3).curveTo(-1,-5.3,0.9,-5.3).curveTo(2.7,-5.3,3.8,-4.2).curveTo(4.6,-3.5,4.6,-2.4).lineTo(4.6,5.3).closePath();
	this.shape.setTransform(530.85,387.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,4).curveTo(-4.9,2.5,-4.9,-0).curveTo(-4.9,-2.5,-3.3,-4.1).curveTo(-2,-5.4,0.1,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(4.8,-2.7,4.8,-0).lineTo(-2.8,-0).curveTo(-2.8,2,-1.9,2.9).curveTo(-1.1,3.7,0.3,3.7).curveTo(1.6,3.7,2.1,3.2).curveTo(2.8,2.5,2.8,1.7).lineTo(4.9,1.7).curveTo(4.5,3.4,3.6,4.2).curveTo(2.4,5.4,0.3,5.4).curveTo(-2,5.4,-3.4,4).closePath().moveTo(-1.9,-3.1).curveTo(-2.6,-2.4,-2.7,-1.5).lineTo(2.6,-1.5).curveTo(2.6,-2.4,1.9,-3.2).curveTo(1.2,-3.8,-0,-3.8).curveTo(-1.1,-3.8,-1.9,-3.1).closePath();
	this.shape_1.setTransform(518.875,387.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,4).curveTo(-4.9,2.5,-4.9,-0).curveTo(-4.9,-2.5,-3.3,-4.1).curveTo(-2,-5.4,0.1,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(4.8,-2.7,4.8,-0).lineTo(-2.8,-0).curveTo(-2.8,2,-1.9,2.9).curveTo(-1.1,3.7,0.3,3.7).curveTo(1.6,3.7,2.1,3.2).curveTo(2.8,2.5,2.8,1.7).lineTo(4.9,1.7).curveTo(4.5,3.4,3.6,4.2).curveTo(2.4,5.4,0.3,5.4).curveTo(-2,5.4,-3.4,4).closePath().moveTo(-1.9,-3.1).curveTo(-2.6,-2.4,-2.7,-1.5).lineTo(2.6,-1.5).curveTo(2.6,-2.4,1.9,-3.2).curveTo(1.2,-3.8,-0,-3.8).curveTo(-1.1,-3.8,-1.9,-3.1).closePath();
	this.shape_2.setTransform(506.875,387.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-3.5,5.3).lineTo(-3.5,-5.2).lineTo(-1.6,-5.2).lineTo(-1.6,-2.5).curveTo(-1.1,-3.3,-0.6,-3.8).curveTo(0.9,-5.3,3.5,-5.3).lineTo(3.5,-3.3).lineTo(2.4,-3.4).curveTo(1,-3.4,-0.2,-2.2).curveTo(-1.2,-1.1,-1.6,0).lineTo(-1.6,5.3).closePath();
	this.shape_3.setTransform(497.275,387.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#000000").beginStroke().moveTo(-3.3,4.1).curveTo(-4.9,2.4,-4.9,-0).curveTo(-4.9,-2.5,-3.4,-4).curveTo(-2,-5.4,0.1,-5.4).curveTo(2.3,-5.4,3.4,-4.3).curveTo(4.5,-3.3,4.7,-1.8).lineTo(2.6,-1.8).curveTo(2.5,-2.5,1.9,-3.2).curveTo(1.2,-3.8,0.2,-3.8).curveTo(-1,-3.8,-1.7,-3).curveTo(-2.9,-1.9,-2.9,0.1).curveTo(-2.9,2,-1.8,3).curveTo(-1.1,3.7,0.1,3.7).curveTo(1.4,3.7,2.1,3).curveTo(2.9,2.2,2.9,1).lineTo(4.9,1).curveTo(4.8,3,3.6,4.2).curveTo(2.4,5.4,0.1,5.4).curveTo(-1.9,5.4,-3.3,4.1).closePath();
	this.shape_4.setTransform(486.55,387.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#000000").beginStroke().moveTo(-4.7,6.5).curveTo(-5.9,5.3,-5.9,3).lineTo(-3.8,3).curveTo(-3.8,4.6,-3.1,5.4).curveTo(-2,6.5,0.2,6.5).curveTo(2.1,6.5,3.1,5.5).curveTo(3.8,4.8,3.8,4).curveTo(3.8,3.2,3.2,2.6).curveTo(2.8,2.1,1.7,1.6).lineTo(-0.7,0.5).lineTo(-3.4,-0.7).curveTo(-4.1,-1,-4.7,-1.5).curveTo(-5.6,-2.4,-5.6,-3.8).curveTo(-5.6,-5.6,-4.2,-6.9).curveTo(-2.9,-8.2,-0.2,-8.2).curveTo(2.7,-8.2,4.2,-6.7).curveTo(5.5,-5.4,5.5,-3.6).lineTo(3.3,-3.6).curveTo(3.3,-4.8,2.6,-5.5).curveTo(1.8,-6.3,-0.1,-6.3).curveTo(-2,-6.3,-2.8,-5.6).curveTo(-3.4,-4.9,-3.4,-4.1).curveTo(-3.4,-3.2,-3.1,-2.9).curveTo(-2.6,-2.4,-1.4,-1.9).lineTo(3.5,0.3).curveTo(4.3,0.5,5,1.2).curveTo(6,2.2,5.9,3.6).curveTo(6,5.5,4.7,6.8).curveTo(3.3,8.2,0.1,8.2).curveTo(-3.1,8.2,-4.7,6.5).closePath();
	this.shape_5.setTransform(473.4,384.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#000000").beginStroke().moveTo(-3.9,6.6).lineTo(-3.9,4.8).curveTo(-3.2,5.2,-2.3,5.2).curveTo(-1.9,5.2,-1.5,4.8).curveTo(-1.1,4.4,-0.9,3.8).lineTo(-5.4,-7).lineTo(-3.4,-7).lineTo(0,1.3).lineTo(3.4,-7).lineTo(5.4,-7).lineTo(0.8,4.3).curveTo(0.2,5.7,-0.4,6.2).curveTo(-1.1,7,-2.2,7).curveTo(-3.6,7,-3.9,6.6).closePath();
	this.shape_6.setTransform(443.925,389.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-8).lineTo(0.9,-8).lineTo(0.9,8).closePath();
	this.shape_7.setTransform(435.775,384.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#000000").beginStroke().moveTo(-4.8,7.1).lineTo(-4.8,-6.9).lineTo(-2.9,-6.9).lineTo(-2.9,-5.7).curveTo(-1.7,-7.1,0,-7.1).curveTo(2,-7.1,3.3,-5.9).curveTo(4.8,-4.4,4.8,-1.7).curveTo(4.8,1.2,3.3,2.7).curveTo(2,3.9,0,3.9).curveTo(-1.9,3.9,-2.9,2.4).lineTo(-2.9,7.1).closePath().moveTo(-1.9,-4.6).curveTo(-2.9,-3.6,-2.9,-2.3).lineTo(-2.9,-1).curveTo(-2.9,0.3,-1.8,1.3).curveTo(-1,2.2,0,2.2).curveTo(1,2.2,1.6,1.5).curveTo(2.7,0.5,2.7,-1.7).curveTo(2.7,-3.7,1.7,-4.7).curveTo(1,-5.4,0,-5.4).curveTo(-1,-5.4,-1.9,-4.6).closePath();
	this.shape_8.setTransform(427.3,389.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-2.6).lineTo(0.9,-2.6).lineTo(0.9,8).closePath().moveTo(-0.9,-5.5).lineTo(-0.9,-8).lineTo(0.9,-8).lineTo(0.9,-5.5).closePath();
	this.shape_9.setTransform(418.825,384.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,6.3).curveTo(-1.8,5.4,-1.8,4.3).lineTo(-1.8,-2).lineTo(-4.1,-2).lineTo(-4.1,-3.5).lineTo(-1.8,-3.5).lineTo(-1.8,-7.2).lineTo(0.1,-7.2).lineTo(0.1,-3.5).lineTo(3.2,-3.5).lineTo(3.2,-2).lineTo(0.1,-2).lineTo(0.1,4.1).curveTo(0.1,4.7,0.5,5.1).curveTo(0.9,5.5,1.7,5.5).curveTo(3.1,5.5,4.1,4.8).lineTo(4.1,6.6).curveTo(3.1,7.2,1.8,7.2).curveTo(-0,7.2,-0.9,6.3).closePath();
	this.shape_10.setTransform(411.925,385.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-8).lineTo(0.9,-8).lineTo(0.9,8).closePath();
	this.shape_11.setTransform(405.325,384.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#000000").beginStroke().moveTo(-3.8,4.5).curveTo(-4.6,3.7,-4.6,2.4).lineTo(-4.6,-5.4).lineTo(-2.7,-5.4).lineTo(-2.7,1.7).curveTo(-2.7,2.8,-2.2,3.4).curveTo(-1.7,3.9,-0.9,3.8).curveTo(0.4,3.9,1.3,2.9).curveTo(2.7,1.5,2.7,0).lineTo(2.7,-5.4).lineTo(4.6,-5.4).lineTo(4.6,5.2).lineTo(2.7,5.2).lineTo(2.7,3.3).curveTo(1.2,5.4,-1,5.3).curveTo(-2.9,5.3,-3.8,4.5).closePath();
	this.shape_12.setTransform(396.8,387.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#000000").beginStroke().moveTo(5,8).lineTo(5,-4.2).lineTo(0.7,8).lineTo(-0.8,8).lineTo(-5.1,-4.2).lineTo(-5.1,8).lineTo(-7.2,8).lineTo(-7.2,-8).lineTo(-4.3,-8).lineTo(-0,4.4).lineTo(4.3,-8).lineTo(7.2,-8).lineTo(7.2,8).closePath();
	this.shape_13.setTransform(381.925,384.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#000000").beginStroke().moveTo(-3,7).curveTo(-4.7,5.3,-4.7,2.7).curveTo(-4.8,-0.2,-3.2,-1.6).curveTo(-2,-2.9,-0.3,-2.9).curveTo(1.7,-2.9,2.8,-1.3).lineTo(2.8,-8.1).lineTo(4.7,-8.1).lineTo(4.7,7.9).lineTo(2.8,7.9).lineTo(2.8,6.6).curveTo(1.9,8.1,0,8.1).curveTo(-1.9,8.1,-3,7).closePath().moveTo(-1.8,-0.4).curveTo(-2.6,0.5,-2.7,2.7).curveTo(-2.6,4.7,-1.7,5.8).curveTo(-1,6.4,-0.1,6.4).curveTo(1.1,6.4,1.8,5.7).curveTo(2.8,4.6,2.8,2.7).curveTo(2.8,0.7,1.7,-0.4).curveTo(1,-1.2,-0.1,-1.2).curveTo(-1,-1.2,-1.8,-0.4).closePath();
	this.shape_14.setTransform(340.8,384.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#000000").beginStroke().moveTo(-3,7).curveTo(-4.8,5.3,-4.7,2.7).curveTo(-4.7,-0.2,-3.3,-1.6).curveTo(-2,-2.9,-0.3,-2.9).curveTo(1.8,-2.9,2.8,-1.3).lineTo(2.8,-8.1).lineTo(4.7,-8.1).lineTo(4.7,7.9).lineTo(2.8,7.9).lineTo(2.8,6.6).curveTo(1.8,8.1,0,8.1).curveTo(-1.9,8.1,-3,7).closePath().moveTo(-1.8,-0.4).curveTo(-2.7,0.5,-2.6,2.7).curveTo(-2.7,4.7,-1.7,5.8).curveTo(-1,6.4,-0,6.4).curveTo(1.1,6.4,1.9,5.7).curveTo(2.9,4.6,2.8,2.7).curveTo(2.9,0.7,1.8,-0.4).curveTo(1,-1.2,-0,-1.2).curveTo(-1,-1.2,-1.8,-0.4).closePath();
	this.shape_15.setTransform(328.9,384.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#000000").beginStroke().moveTo(5,8.1).lineTo(3.1,3.2).lineTo(-3.1,3.2).lineTo(-5,8.1).lineTo(-7.3,8.1).lineTo(-1,-8.1).lineTo(0.9,-8.1).lineTo(7.3,8.1).closePath().moveTo(-2.4,1.5).lineTo(2.4,1.5).lineTo(0,-5).closePath();
	this.shape_16.setTransform(315.35,384.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#000000").beginStroke().moveTo(-3,7).curveTo(-4.8,5.3,-4.7,2.6).curveTo(-4.8,-0.2,-3.3,-1.6).curveTo(-2,-2.8,-0.3,-2.9).curveTo(1.7,-2.8,2.8,-1.2).lineTo(2.8,-8.1).lineTo(4.7,-8.1).lineTo(4.7,7.9).lineTo(2.8,7.9).lineTo(2.8,6.6).curveTo(1.8,8.1,0,8.1).curveTo(-1.9,8.1,-3,7).closePath().moveTo(-1.8,-0.4).curveTo(-2.7,0.5,-2.7,2.6).curveTo(-2.7,4.8,-1.7,5.8).curveTo(-1,6.4,-0.1,6.4).curveTo(1.1,6.4,1.8,5.7).curveTo(2.9,4.7,2.8,2.6).curveTo(2.9,0.7,1.7,-0.4).curveTo(1,-1.1,-0.1,-1.2).curveTo(-1,-1.1,-1.8,-0.4).closePath();
	this.shape_17.setTransform(452.3,343.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#000000").beginStroke().moveTo(2.7,5.3).lineTo(2.7,-1.9).curveTo(2.7,-2.7,2.2,-3.3).curveTo(1.6,-3.8,0.6,-3.8).curveTo(-0.4,-3.8,-1.3,-2.9).curveTo(-2.7,-1.5,-2.7,0.1).lineTo(-2.7,5.3).lineTo(-4.6,5.3).lineTo(-4.6,-5.2).lineTo(-2.7,-5.2).lineTo(-2.7,-3.3).curveTo(-1,-5.3,0.8,-5.3).curveTo(2.7,-5.3,3.9,-4.2).curveTo(4.6,-3.5,4.6,-2.4).lineTo(4.6,5.3).closePath();
	this.shape_18.setTransform(440.35,345.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,4).curveTo(-4.9,2.5,-4.9,-0).curveTo(-4.9,-2.5,-3.3,-4.1).curveTo(-2,-5.4,0.1,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(4.8,-2.7,4.8,-0).lineTo(-2.8,-0).curveTo(-2.8,2,-1.9,2.9).curveTo(-1.1,3.7,0.3,3.7).curveTo(1.6,3.7,2.1,3.2).curveTo(2.8,2.5,2.8,1.7).lineTo(4.9,1.7).curveTo(4.5,3.4,3.6,4.2).curveTo(2.4,5.4,0.3,5.4).curveTo(-2,5.4,-3.4,4).closePath().moveTo(-1.9,-3.1).curveTo(-2.6,-2.4,-2.7,-1.5).lineTo(2.6,-1.5).curveTo(2.6,-2.4,1.9,-3.2).curveTo(1.2,-3.8,-0,-3.8).curveTo(-1.1,-3.8,-1.9,-3.1).closePath();
	this.shape_19.setTransform(428.375,345.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-8).lineTo(0.9,-8).lineTo(0.9,8).closePath();
	this.shape_20.setTransform(419.825,343.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#000000").beginStroke().moveTo(-6.1,8).lineTo(-6.1,-8).lineTo(1.4,-8).curveTo(3.2,-8,4.5,-6.8).curveTo(5.6,-5.7,5.6,-3.8).curveTo(5.6,-2.3,4.6,-1.2).curveTo(4,-0.7,3.2,-0.4).curveTo(4.3,-0,4.9,0.6).curveTo(6.1,1.8,6.1,3.4).curveTo(6.1,5.5,4.7,6.9).curveTo(3.6,8,1.3,8).closePath().moveTo(-4,6.2).lineTo(0.9,6.2).curveTo(2.2,6.2,3,5.5).curveTo(3.8,4.6,3.8,3.4).curveTo(3.8,2.1,3.1,1.4).curveTo(2.3,0.5,0.9,0.5).lineTo(-4,0.5).closePath().moveTo(-4,-1.2).lineTo(1.1,-1.2).curveTo(2.1,-1.3,2.7,-1.9).curveTo(3.5,-2.7,3.5,-3.9).curveTo(3.5,-4.9,2.7,-5.6).curveTo(2.1,-6.2,1.3,-6.3).lineTo(-4,-6.3).closePath();
	this.shape_21.setTransform(409.7,343.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#000000").beginStroke().moveTo(-4.7,7.1).lineTo(-4.7,-6.9).lineTo(-2.8,-6.9).lineTo(-2.8,-5.7).curveTo(-1.7,-7.1,0,-7.1).curveTo(2,-7.1,3.3,-5.9).curveTo(4.8,-4.4,4.7,-1.7).curveTo(4.8,1.2,3.3,2.7).curveTo(2,3.9,0,3.9).curveTo(-1.9,3.9,-2.8,2.4).lineTo(-2.8,7.1).closePath().moveTo(-1.9,-4.6).curveTo(-2.8,-3.6,-2.8,-2.3).lineTo(-2.8,-1).curveTo(-2.8,0.3,-1.8,1.3).curveTo(-1,2.2,0,2.2).curveTo(1,2.2,1.7,1.5).curveTo(2.7,0.5,2.7,-1.7).curveTo(2.7,-3.7,1.8,-4.7).curveTo(1,-5.4,0,-5.4).curveTo(-1.1,-5.4,-1.9,-4.6).closePath();
	this.shape_22.setTransform(388.75,347.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#000000").beginStroke().moveTo(-4,4.5).curveTo(-4.9,3.7,-4.9,2.5).curveTo(-4.9,1.2,-4,0.4).curveTo(-3.1,-0.6,-1.4,-0.8).curveTo(-0.3,-1,0.6,-1.3).curveTo(1.8,-1.6,2.2,-1.9).curveTo(2.2,-2.6,1.7,-3.2).curveTo(1.1,-3.8,0.1,-3.8).curveTo(-1.2,-3.8,-1.8,-3.2).curveTo(-2.2,-2.8,-2.3,-2.2).lineTo(-4.4,-2.2).curveTo(-4.1,-3.5,-3.2,-4.4).curveTo(-2.2,-5.4,-0.2,-5.4).curveTo(2.2,-5.4,3.2,-4.4).curveTo(4.1,-3.5,4.1,-2.3).lineTo(4.1,3.7).curveTo(4.1,4.7,4.9,5.2).lineTo(2.6,5.2).curveTo(2.2,4.9,2.2,4).curveTo(0.8,5.4,-1.3,5.4).curveTo(-3.1,5.4,-4,4.5).closePath().moveTo(1.2,0.2).lineTo(-1.2,0.7).curveTo(-2,0.9,-2.3,1.3).curveTo(-2.8,1.8,-2.8,2.3).curveTo(-2.8,3,-2.3,3.5).curveTo(-2.1,3.7,-1.1,3.7).curveTo(0.5,3.7,1.5,2.7).curveTo(2.2,2.1,2.2,1.8).lineTo(2.2,-0.1).lineTo(1.2,0.2).closePath();
	this.shape_23.setTransform(377.075,345.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#000000").beginStroke().moveTo(5.5,5.3).lineTo(5.5,-2.1).curveTo(5.5,-2.6,5.1,-3).curveTo(4.6,-3.6,3.9,-3.6).curveTo(2.5,-3.6,1.7,-2.7).curveTo(0.9,-2,0.9,-1.3).lineTo(0.9,5.3).lineTo(-0.9,5.3).lineTo(-0.9,-2).curveTo(-0.9,-2.5,-1.5,-3.1).curveTo(-2,-3.6,-2.9,-3.6).curveTo(-3.9,-3.6,-4.7,-2.8).curveTo(-5.5,-2,-5.5,-1.2).lineTo(-5.5,5.3).lineTo(-7.4,5.3).lineTo(-7.4,-5.2).lineTo(-5.5,-5.2).lineTo(-5.5,-3.6).curveTo(-4.3,-5.3,-2.7,-5.3).curveTo(-0.9,-5.3,0,-4.4).curveTo(0.5,-3.9,0.7,-3.4).curveTo(2,-5.3,4.2,-5.3).curveTo(5.6,-5.3,6.5,-4.5).curveTo(7.4,-3.6,7.4,-2.4).lineTo(7.4,5.3).closePath();
	this.shape_24.setTransform(362.5,345.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,6.3).curveTo(-1.8,5.4,-1.8,4.3).lineTo(-1.8,-2).lineTo(-4.1,-2).lineTo(-4.1,-3.5).lineTo(-1.8,-3.5).lineTo(-1.8,-7.2).lineTo(0.1,-7.2).lineTo(0.1,-3.5).lineTo(3.2,-3.5).lineTo(3.2,-2).lineTo(0.1,-2).lineTo(0.1,4.1).curveTo(0.1,4.7,0.5,5.1).curveTo(0.9,5.5,1.7,5.5).curveTo(3.1,5.5,4.1,4.8).lineTo(4.1,6.6).curveTo(3.1,7.2,1.8,7.2).curveTo(-0,7.2,-0.9,6.3).closePath();
	this.shape_25.setTransform(349.325,344.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-2.6).lineTo(0.9,-2.6).lineTo(0.9,8).closePath().moveTo(-0.9,-5.5).lineTo(-0.9,-7.9).lineTo(0.9,-7.9).lineTo(0.9,-5.5).closePath();
	this.shape_26.setTransform(342.725,343.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#000000").beginStroke().moveTo(-6.1,8).lineTo(-6.1,-8).lineTo(1.4,-8).curveTo(3.2,-8,4.5,-6.8).curveTo(5.6,-5.7,5.6,-3.8).curveTo(5.6,-2.3,4.6,-1.2).curveTo(4,-0.7,3.2,-0.4).curveTo(4.3,-0,5,0.6).curveTo(6.1,1.8,6.1,3.4).curveTo(6.1,5.5,4.7,6.9).curveTo(3.6,8,1.3,8).closePath().moveTo(-3.9,6.2).lineTo(0.8,6.2).curveTo(2.2,6.2,3,5.5).curveTo(3.8,4.6,3.8,3.4).curveTo(3.9,2.1,3.1,1.4).curveTo(2.2,0.5,0.8,0.5).lineTo(-3.9,0.5).closePath().moveTo(-3.9,-1.2).lineTo(1.1,-1.2).curveTo(2,-1.3,2.7,-1.9).curveTo(3.4,-2.7,3.5,-3.9).curveTo(3.4,-4.9,2.7,-5.6).curveTo(2.2,-6.2,1.3,-6.3).lineTo(-3.9,-6.3).closePath();
	this.shape_27.setTransform(332.6,343.15);

	this.instance = new lib.symbol66b();
	this.instance.setTransform(500.45,436.35,1,1,0,0,0,28,27.9);
	this.instance.compositeOperation = "screen";

	this.instance_1 = new lib.symbol66b();
	this.instance_1.setTransform(330,436.35,1,1,0,0,0,28,27.9);
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.symbol66b();
	this.instance_2.setTransform(410,436.35,1,1,0,0,0,28,27.9);
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.ビットマップ1();
	this.instance_3.setTransform(279,402,0.894,1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#000000").beginStroke().moveTo(2.7,5.3).lineTo(2.7,-1.9).curveTo(2.7,-2.7,2.1,-3.3).curveTo(1.6,-3.8,0.6,-3.8).curveTo(-0.3,-3.8,-1.3,-2.9).curveTo(-2.7,-1.5,-2.7,0.1).lineTo(-2.7,5.3).lineTo(-4.6,5.3).lineTo(-4.6,-5.2).lineTo(-2.7,-5.2).lineTo(-2.7,-3.3).curveTo(-1.1,-5.3,0.9,-5.3).curveTo(2.7,-5.3,3.8,-4.2).curveTo(4.6,-3.5,4.6,-2.4).lineTo(4.6,5.3).closePath();
	this.shape_28.setTransform(261.85,387.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,4).curveTo(-4.9,2.5,-4.9,-0).curveTo(-4.9,-2.5,-3.3,-4.1).curveTo(-2,-5.4,0.1,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(4.8,-2.7,4.8,-0).lineTo(-2.8,-0).curveTo(-2.8,2,-1.9,2.9).curveTo(-1.1,3.7,0.3,3.7).curveTo(1.6,3.7,2.1,3.2).curveTo(2.8,2.5,2.8,1.7).lineTo(4.9,1.7).curveTo(4.5,3.4,3.6,4.2).curveTo(2.4,5.4,0.3,5.4).curveTo(-2,5.4,-3.4,4).closePath().moveTo(-1.9,-3.1).curveTo(-2.6,-2.4,-2.7,-1.5).lineTo(2.6,-1.5).curveTo(2.6,-2.4,1.9,-3.2).curveTo(1.2,-3.8,-0,-3.8).curveTo(-1.1,-3.8,-1.9,-3.1).closePath();
	this.shape_29.setTransform(249.875,387.525);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,4).curveTo(-4.9,2.5,-4.9,-0).curveTo(-4.9,-2.5,-3.3,-4.1).curveTo(-2,-5.4,0.1,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(4.8,-2.7,4.8,-0).lineTo(-2.8,-0).curveTo(-2.8,2,-1.9,2.9).curveTo(-1.1,3.7,0.3,3.7).curveTo(1.6,3.7,2.1,3.2).curveTo(2.8,2.5,2.8,1.7).lineTo(4.9,1.7).curveTo(4.5,3.4,3.6,4.2).curveTo(2.4,5.4,0.3,5.4).curveTo(-2,5.4,-3.4,4).closePath().moveTo(-1.9,-3.1).curveTo(-2.6,-2.4,-2.7,-1.5).lineTo(2.6,-1.5).curveTo(2.6,-2.4,1.9,-3.2).curveTo(1.2,-3.8,-0,-3.8).curveTo(-1.1,-3.8,-1.9,-3.1).closePath();
	this.shape_30.setTransform(237.875,387.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#000000").beginStroke().moveTo(-3.5,5.3).lineTo(-3.5,-5.2).lineTo(-1.6,-5.2).lineTo(-1.6,-2.5).curveTo(-1.1,-3.3,-0.6,-3.8).curveTo(0.9,-5.3,3.5,-5.3).lineTo(3.5,-3.3).lineTo(2.4,-3.4).curveTo(1,-3.4,-0.2,-2.2).curveTo(-1.2,-1.1,-1.6,0).lineTo(-1.6,5.3).closePath();
	this.shape_31.setTransform(228.275,387.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#000000").beginStroke().moveTo(-3.3,4.1).curveTo(-4.9,2.4,-4.9,-0).curveTo(-4.9,-2.5,-3.4,-4).curveTo(-2,-5.4,0.1,-5.4).curveTo(2.3,-5.4,3.4,-4.3).curveTo(4.5,-3.3,4.7,-1.8).lineTo(2.6,-1.8).curveTo(2.5,-2.5,1.9,-3.2).curveTo(1.2,-3.8,0.2,-3.8).curveTo(-1,-3.8,-1.7,-3).curveTo(-2.8,-1.9,-2.8,0.1).curveTo(-2.8,2,-1.8,3).curveTo(-1.1,3.7,0.1,3.7).curveTo(1.4,3.7,2.1,3).curveTo(2.8,2.2,2.9,1).lineTo(4.9,1).curveTo(4.9,3,3.6,4.2).curveTo(2.4,5.4,0.1,5.4).curveTo(-1.9,5.4,-3.3,4.1).closePath();
	this.shape_32.setTransform(217.55,387.625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#000000").beginStroke().moveTo(-4.7,6.5).curveTo(-6,5.3,-6,3).lineTo(-3.8,3).curveTo(-3.8,4.6,-3.1,5.4).curveTo(-2,6.5,0.2,6.5).curveTo(2.1,6.5,3,5.5).curveTo(3.8,4.8,3.8,4).curveTo(3.8,3.2,3.2,2.6).curveTo(2.8,2.1,1.8,1.6).lineTo(-0.7,0.5).lineTo(-3.4,-0.7).curveTo(-4.2,-1,-4.7,-1.5).curveTo(-5.6,-2.4,-5.6,-3.8).curveTo(-5.6,-5.6,-4.2,-6.9).curveTo(-2.9,-8.2,-0.2,-8.2).curveTo(2.7,-8.2,4.2,-6.7).curveTo(5.5,-5.4,5.5,-3.6).lineTo(3.3,-3.6).curveTo(3.4,-4.8,2.6,-5.5).curveTo(1.7,-6.3,-0,-6.3).curveTo(-2,-6.3,-2.7,-5.6).curveTo(-3.4,-4.9,-3.4,-4.1).curveTo(-3.4,-3.2,-3.1,-2.9).curveTo(-2.5,-2.4,-1.4,-1.9).lineTo(3.6,0.3).curveTo(4.3,0.5,4.9,1.2).curveTo(6,2.2,5.9,3.6).curveTo(6,5.5,4.7,6.8).curveTo(3.3,8.2,0.1,8.2).curveTo(-3.1,8.2,-4.7,6.5).closePath();
	this.shape_33.setTransform(204.4,384.75);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#000000").beginStroke().moveTo(-3.9,6.6).lineTo(-3.9,4.8).curveTo(-3.2,5.2,-2.3,5.2).curveTo(-1.9,5.2,-1.5,4.8).curveTo(-1.1,4.4,-0.9,3.8).lineTo(-5.4,-7).lineTo(-3.4,-7).lineTo(0,1.3).lineTo(3.4,-7).lineTo(5.4,-7).lineTo(0.8,4.3).curveTo(0.2,5.7,-0.4,6.2).curveTo(-1.1,7,-2.2,7).curveTo(-3.6,7,-3.9,6.6).closePath();
	this.shape_34.setTransform(174.925,389.175);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-8).lineTo(0.9,-8).lineTo(0.9,8).closePath();
	this.shape_35.setTransform(166.775,384.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#000000").beginStroke().moveTo(-4.8,7.1).lineTo(-4.8,-6.9).lineTo(-2.9,-6.9).lineTo(-2.9,-5.7).curveTo(-1.7,-7.1,0,-7.1).curveTo(2,-7.1,3.3,-5.9).curveTo(4.8,-4.4,4.8,-1.7).curveTo(4.8,1.2,3.3,2.7).curveTo(2,3.9,0,3.9).curveTo(-1.9,3.9,-2.9,2.4).lineTo(-2.9,7.1).closePath().moveTo(-1.9,-4.6).curveTo(-2.9,-3.6,-2.9,-2.3).lineTo(-2.9,-1).curveTo(-2.9,0.3,-1.8,1.3).curveTo(-1,2.2,0,2.2).curveTo(1,2.2,1.6,1.5).curveTo(2.7,0.5,2.7,-1.7).curveTo(2.7,-3.7,1.7,-4.7).curveTo(1,-5.4,0,-5.4).curveTo(-1,-5.4,-1.9,-4.6).closePath();
	this.shape_36.setTransform(158.3,389.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-2.6).lineTo(0.9,-2.6).lineTo(0.9,8).closePath().moveTo(-0.9,-5.5).lineTo(-0.9,-8).lineTo(0.9,-8).lineTo(0.9,-5.5).closePath();
	this.shape_37.setTransform(149.825,384.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,6.3).curveTo(-1.8,5.4,-1.8,4.3).lineTo(-1.8,-2).lineTo(-4.1,-2).lineTo(-4.1,-3.5).lineTo(-1.8,-3.5).lineTo(-1.8,-7.2).lineTo(0.1,-7.2).lineTo(0.1,-3.5).lineTo(3.2,-3.5).lineTo(3.2,-2).lineTo(0.1,-2).lineTo(0.1,4.1).curveTo(0.1,4.7,0.5,5.1).curveTo(0.9,5.5,1.7,5.5).curveTo(3.1,5.5,4.1,4.8).lineTo(4.1,6.6).curveTo(3.1,7.2,1.8,7.2).curveTo(-0,7.2,-0.9,6.3).closePath();
	this.shape_38.setTransform(142.925,385.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-8).lineTo(0.9,-8).lineTo(0.9,8).closePath();
	this.shape_39.setTransform(136.325,384.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#000000").beginStroke().moveTo(-3.8,4.5).curveTo(-4.6,3.7,-4.6,2.4).lineTo(-4.6,-5.4).lineTo(-2.7,-5.4).lineTo(-2.7,1.7).curveTo(-2.7,2.8,-2.2,3.4).curveTo(-1.7,3.9,-0.8,3.8).curveTo(0.4,3.9,1.3,2.9).curveTo(2.7,1.5,2.7,0).lineTo(2.7,-5.4).lineTo(4.6,-5.4).lineTo(4.6,5.2).lineTo(2.7,5.2).lineTo(2.7,3.3).curveTo(1.2,5.4,-1,5.3).curveTo(-2.9,5.3,-3.8,4.5).closePath();
	this.shape_40.setTransform(127.8,387.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#000000").beginStroke().moveTo(5,8).lineTo(5,-4.2).lineTo(0.7,8).lineTo(-0.8,8).lineTo(-5.1,-4.2).lineTo(-5.1,8).lineTo(-7.2,8).lineTo(-7.2,-8).lineTo(-4.3,-8).lineTo(-0,4.4).lineTo(4.3,-8).lineTo(7.2,-8).lineTo(7.2,8).closePath();
	this.shape_41.setTransform(112.925,384.75);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#000000").beginStroke().moveTo(-3,7).curveTo(-4.7,5.3,-4.8,2.7).curveTo(-4.7,-0.2,-3.2,-1.6).curveTo(-2,-2.9,-0.3,-2.9).curveTo(1.8,-2.9,2.8,-1.3).lineTo(2.8,-8.1).lineTo(4.8,-8.1).lineTo(4.8,7.9).lineTo(2.8,7.9).lineTo(2.8,6.6).curveTo(1.9,8.1,0,8.1).curveTo(-1.9,8.1,-3,7).closePath().moveTo(-1.8,-0.4).curveTo(-2.6,0.5,-2.7,2.7).curveTo(-2.6,4.7,-1.7,5.8).curveTo(-1,6.4,-0.1,6.4).curveTo(1.1,6.4,1.8,5.7).curveTo(2.8,4.6,2.8,2.7).curveTo(2.8,0.7,1.7,-0.4).curveTo(1,-1.2,-0.1,-1.2).curveTo(-1,-1.2,-1.8,-0.4).closePath();
	this.shape_42.setTransform(71.8,384.85);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#000000").beginStroke().moveTo(-3,7).curveTo(-4.8,5.3,-4.7,2.7).curveTo(-4.8,-0.2,-3.3,-1.6).curveTo(-2,-2.9,-0.3,-2.9).curveTo(1.8,-2.9,2.8,-1.3).lineTo(2.8,-8.1).lineTo(4.7,-8.1).lineTo(4.7,7.9).lineTo(2.8,7.9).lineTo(2.8,6.6).curveTo(1.8,8.1,0,8.1).curveTo(-1.9,8.1,-3,7).closePath().moveTo(-1.8,-0.4).curveTo(-2.7,0.5,-2.7,2.7).curveTo(-2.7,4.7,-1.7,5.8).curveTo(-1,6.4,-0.1,6.4).curveTo(1.1,6.4,1.8,5.7).curveTo(2.9,4.6,2.8,2.7).curveTo(2.9,0.7,1.7,-0.4).curveTo(1,-1.2,-0.1,-1.2).curveTo(-1,-1.2,-1.8,-0.4).closePath();
	this.shape_43.setTransform(59.9,384.85);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#000000").beginStroke().moveTo(5,8.1).lineTo(3.1,3.2).lineTo(-3.1,3.2).lineTo(-5,8.1).lineTo(-7.3,8.1).lineTo(-1,-8.1).lineTo(1,-8.1).lineTo(7.3,8.1).closePath().moveTo(-2.4,1.5).lineTo(2.4,1.5).lineTo(-0,-5).closePath();
	this.shape_44.setTransform(46.35,384.65);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#000000").beginStroke().moveTo(-3.1,7).curveTo(-4.8,5.3,-4.8,2.6).curveTo(-4.8,-0.2,-3.2,-1.6).curveTo(-2,-2.8,-0.3,-2.9).curveTo(1.7,-2.8,2.9,-1.2).lineTo(2.9,-8.1).lineTo(4.8,-8.1).lineTo(4.8,7.9).lineTo(2.9,7.9).lineTo(2.9,6.6).curveTo(1.8,8.1,0.1,8.1).curveTo(-1.9,8.1,-3.1,7).closePath().moveTo(-1.7,-0.4).curveTo(-2.6,0.5,-2.6,2.6).curveTo(-2.6,4.8,-1.6,5.8).curveTo(-1,6.4,-0,6.4).curveTo(1.1,6.4,1.9,5.7).curveTo(2.8,4.7,2.9,2.6).curveTo(2.8,0.7,1.8,-0.4).curveTo(1,-1.1,-0,-1.2).curveTo(-1,-1.1,-1.7,-0.4).closePath();
	this.shape_45.setTransform(178.3,343.25);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#000000").beginStroke().moveTo(2.7,5.3).lineTo(2.7,-1.9).curveTo(2.7,-2.7,2.1,-3.3).curveTo(1.6,-3.8,0.5,-3.8).curveTo(-0.3,-3.8,-1.3,-2.9).curveTo(-2.7,-1.5,-2.7,0.1).lineTo(-2.7,5.3).lineTo(-4.6,5.3).lineTo(-4.6,-5.2).lineTo(-2.7,-5.2).lineTo(-2.7,-3.3).curveTo(-1,-5.3,0.9,-5.3).curveTo(2.7,-5.3,3.8,-4.2).curveTo(4.6,-3.5,4.6,-2.4).lineTo(4.6,5.3).closePath();
	this.shape_46.setTransform(166.35,345.825);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,4).curveTo(-4.9,2.5,-4.9,-0).curveTo(-4.9,-2.5,-3.3,-4.1).curveTo(-2,-5.4,0.1,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(4.8,-2.7,4.8,-0).lineTo(-2.8,-0).curveTo(-2.8,2,-1.9,2.9).curveTo(-1.1,3.7,0.3,3.7).curveTo(1.6,3.7,2.1,3.2).curveTo(2.8,2.5,2.8,1.7).lineTo(4.9,1.7).curveTo(4.5,3.4,3.6,4.2).curveTo(2.4,5.4,0.3,5.4).curveTo(-2,5.4,-3.4,4).closePath().moveTo(-1.9,-3.1).curveTo(-2.6,-2.4,-2.7,-1.5).lineTo(2.6,-1.5).curveTo(2.6,-2.4,1.9,-3.2).curveTo(1.2,-3.8,-0,-3.8).curveTo(-1.1,-3.8,-1.9,-3.1).closePath();
	this.shape_47.setTransform(154.375,345.925);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-8).lineTo(0.9,-8).lineTo(0.9,8).closePath();
	this.shape_48.setTransform(145.825,343.15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#000000").beginStroke().moveTo(-6.1,8).lineTo(-6.1,-8).lineTo(1.4,-8).curveTo(3.3,-8,4.5,-6.8).curveTo(5.6,-5.7,5.6,-3.8).curveTo(5.6,-2.3,4.6,-1.2).curveTo(4,-0.7,3.2,-0.4).curveTo(4.3,-0,5,0.6).curveTo(6.1,1.8,6.1,3.4).curveTo(6.1,5.5,4.7,6.9).curveTo(3.6,8,1.3,8).closePath().moveTo(-3.9,6.2).lineTo(0.8,6.2).curveTo(2.3,6.2,3,5.5).curveTo(3.9,4.6,3.9,3.4).curveTo(3.9,2.1,3.1,1.4).curveTo(2.3,0.5,0.8,0.5).lineTo(-3.9,0.5).closePath().moveTo(-3.9,-1.2).lineTo(1.1,-1.2).curveTo(2,-1.3,2.7,-1.9).curveTo(3.4,-2.7,3.4,-3.9).curveTo(3.4,-4.9,2.7,-5.6).curveTo(2.1,-6.2,1.3,-6.3).lineTo(-3.9,-6.3).closePath();
	this.shape_49.setTransform(135.7,343.15);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,4).curveTo(-4.9,2.5,-4.9,-0).curveTo(-4.9,-2.5,-3.3,-4.1).curveTo(-2,-5.4,0.1,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(4.8,-2.7,4.8,-0).lineTo(-2.8,-0).curveTo(-2.8,2,-1.9,2.9).curveTo(-1.1,3.7,0.3,3.7).curveTo(1.6,3.7,2.1,3.2).curveTo(2.8,2.5,2.8,1.7).lineTo(4.9,1.7).curveTo(4.5,3.4,3.6,4.2).curveTo(2.4,5.4,0.3,5.4).curveTo(-2,5.4,-3.4,4).closePath().moveTo(-1.9,-3.1).curveTo(-2.6,-2.4,-2.7,-1.5).lineTo(2.6,-1.5).curveTo(2.6,-2.4,1.9,-3.2).curveTo(1.2,-3.8,-0,-3.8).curveTo(-1.1,-3.8,-1.9,-3.1).closePath();
	this.shape_50.setTransform(114.725,345.925);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#000000").beginStroke().moveTo(-4.7,7.1).lineTo(-4.7,-6.9).lineTo(-2.8,-6.9).lineTo(-2.8,-5.7).curveTo(-1.7,-7.1,0,-7.1).curveTo(2,-7.1,3.3,-5.9).curveTo(4.7,-4.4,4.7,-1.7).curveTo(4.7,1.2,3.3,2.7).curveTo(2,3.9,0,3.9).curveTo(-1.9,3.9,-2.8,2.4).lineTo(-2.8,7.1).closePath().moveTo(-1.9,-4.6).curveTo(-2.9,-3.6,-2.8,-2.3).lineTo(-2.8,-1).curveTo(-2.9,0.3,-1.8,1.3).curveTo(-1,2.2,0,2.2).curveTo(1,2.2,1.7,1.5).curveTo(2.7,0.5,2.7,-1.7).curveTo(2.7,-3.7,1.7,-4.7).curveTo(1,-5.4,0,-5.4).curveTo(-1.1,-5.4,-1.9,-4.6).closePath();
	this.shape_51.setTransform(102.75,347.575);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#000000").beginStroke().moveTo(-4,4.5).curveTo(-4.9,3.7,-4.9,2.5).curveTo(-4.9,1.2,-4,0.4).curveTo(-3.1,-0.6,-1.4,-0.8).curveTo(-0.3,-1,0.6,-1.3).curveTo(1.8,-1.6,2.2,-1.9).curveTo(2.2,-2.6,1.7,-3.2).curveTo(1.1,-3.8,0.1,-3.8).curveTo(-1.2,-3.8,-1.8,-3.2).curveTo(-2.2,-2.8,-2.3,-2.2).lineTo(-4.4,-2.2).curveTo(-4.1,-3.5,-3.2,-4.4).curveTo(-2.2,-5.4,-0.2,-5.4).curveTo(2.2,-5.4,3.2,-4.4).curveTo(4.1,-3.5,4.1,-2.3).lineTo(4.1,3.7).curveTo(4.1,4.7,4.9,5.2).lineTo(2.6,5.2).curveTo(2.2,4.9,2.2,4).curveTo(0.8,5.4,-1.3,5.4).curveTo(-3.1,5.4,-4,4.5).closePath().moveTo(1.2,0.2).lineTo(-1.2,0.7).curveTo(-2,0.9,-2.3,1.3).curveTo(-2.8,1.8,-2.8,2.3).curveTo(-2.8,3,-2.3,3.5).curveTo(-2.1,3.7,-1.1,3.7).curveTo(0.5,3.7,1.5,2.7).curveTo(2.2,2.1,2.2,1.8).lineTo(2.2,-0.1).lineTo(1.2,0.2).closePath();
	this.shape_52.setTransform(91.075,345.925);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#000000").beginStroke().moveTo(2.7,8).lineTo(2.7,1).curveTo(2.7,-0.1,2,-0.7).curveTo(1.6,-1.1,0.7,-1.1).curveTo(-0.3,-1.1,-1.1,-0.3).curveTo(-2.1,0.7,-2.7,2.6).lineTo(-2.7,8).lineTo(-4.6,8).lineTo(-4.6,-8).lineTo(-2.7,-8).lineTo(-2.7,-0.6).curveTo(-1.1,-2.6,0.7,-2.7).curveTo(2.7,-2.6,3.6,-1.8).curveTo(4.6,-0.8,4.6,0.5).lineTo(4.6,8).closePath();
	this.shape_53.setTransform(79.35,343.15);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#000000").beginStroke().moveTo(-4.7,6.5).curveTo(-6,5.3,-6,3).lineTo(-3.8,3).curveTo(-3.8,4.6,-3.1,5.4).curveTo(-2,6.5,0.2,6.4).curveTo(2.1,6.5,3,5.5).curveTo(3.8,4.7,3.8,4).curveTo(3.8,3.2,3.2,2.6).curveTo(2.8,2.1,1.8,1.6).lineTo(-0.7,0.5).lineTo(-3.4,-0.7).curveTo(-4.1,-1,-4.7,-1.5).curveTo(-5.6,-2.4,-5.6,-3.8).curveTo(-5.6,-5.6,-4.2,-6.9).curveTo(-2.9,-8.2,-0.2,-8.2).curveTo(2.7,-8.2,4.2,-6.7).curveTo(5.5,-5.4,5.5,-3.6).lineTo(3.3,-3.6).curveTo(3.4,-4.8,2.6,-5.5).curveTo(1.7,-6.3,-0,-6.3).curveTo(-2,-6.3,-2.7,-5.6).curveTo(-3.4,-4.9,-3.4,-4).curveTo(-3.4,-3.3,-3.1,-2.9).curveTo(-2.5,-2.4,-1.4,-1.9).lineTo(3.6,0.3).curveTo(4.3,0.5,4.9,1.2).curveTo(6,2.2,5.9,3.6).curveTo(6,5.5,4.7,6.8).curveTo(3.3,8.2,0.1,8.2).curveTo(-3.1,8.2,-4.7,6.5).closePath();
	this.shape_54.setTransform(66.25,343.15);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#000000").beginStroke().moveTo(2.7,5.3).lineTo(2.7,-1.9).curveTo(2.7,-2.7,2.1,-3.3).curveTo(1.6,-3.8,0.6,-3.8).curveTo(-0.3,-3.8,-1.3,-2.9).curveTo(-2.7,-1.5,-2.7,0.1).lineTo(-2.7,5.3).lineTo(-4.6,5.3).lineTo(-4.6,-5.2).lineTo(-2.7,-5.2).lineTo(-2.7,-3.3).curveTo(-1,-5.3,0.9,-5.3).curveTo(2.7,-5.3,3.8,-4.2).curveTo(4.6,-3.5,4.6,-2.4).lineTo(4.6,5.3).closePath();
	this.shape_55.setTransform(455,135.175);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,4).curveTo(-4.9,2.5,-4.9,-0).curveTo(-4.9,-2.5,-3.3,-4.1).curveTo(-2,-5.4,0.1,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(4.8,-2.7,4.8,-0).lineTo(-2.8,-0).curveTo(-2.8,2,-1.9,2.9).curveTo(-1.1,3.7,0.3,3.7).curveTo(1.6,3.7,2.1,3.2).curveTo(2.8,2.5,2.8,1.7).lineTo(4.9,1.7).curveTo(4.5,3.4,3.6,4.2).curveTo(2.4,5.4,0.3,5.4).curveTo(-2,5.4,-3.4,4).closePath().moveTo(-1.9,-3.1).curveTo(-2.6,-2.4,-2.7,-1.5).lineTo(2.6,-1.5).curveTo(2.6,-2.4,1.9,-3.2).curveTo(1.2,-3.8,-0,-3.8).curveTo(-1.1,-3.8,-1.9,-3.1).closePath();
	this.shape_56.setTransform(443.025,135.275);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,4).curveTo(-4.9,2.5,-4.9,-0).curveTo(-4.9,-2.5,-3.3,-4.1).curveTo(-2,-5.4,0.1,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(4.8,-2.7,4.8,-0).lineTo(-2.8,-0).curveTo(-2.8,2,-1.9,2.9).curveTo(-1.1,3.7,0.3,3.7).curveTo(1.6,3.7,2.1,3.2).curveTo(2.8,2.5,2.8,1.7).lineTo(4.9,1.7).curveTo(4.5,3.4,3.6,4.2).curveTo(2.4,5.4,0.3,5.4).curveTo(-2,5.4,-3.4,4).closePath().moveTo(-1.9,-3.1).curveTo(-2.6,-2.4,-2.7,-1.5).lineTo(2.6,-1.5).curveTo(2.6,-2.4,1.9,-3.2).curveTo(1.2,-3.8,-0,-3.8).curveTo(-1.1,-3.8,-1.9,-3.1).closePath();
	this.shape_57.setTransform(431.025,135.275);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#000000").beginStroke().moveTo(2.4,5.3).lineTo(-0,-3.1).lineTo(-2.4,5.3).lineTo(-4.2,5.3).lineTo(-7.4,-5.4).lineTo(-5.4,-5.4).lineTo(-3.3,2.5).lineTo(-1.1,-5.4).lineTo(1,-5.4).lineTo(3.2,2.5).lineTo(5.4,-5.4).lineTo(7.4,-5.4).lineTo(4.2,5.3).closePath();
	this.shape_58.setTransform(417.25,135.35);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#000000").beginStroke().moveTo(-1.1,8).lineTo(-1.1,-6.2).lineTo(-6.4,-6.2).lineTo(-6.4,-8).lineTo(6.4,-8).lineTo(6.4,-6.2).lineTo(1.1,-6.2).lineTo(1.1,8).closePath();
	this.shape_59.setTransform(402.375,132.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#000000").beginStroke().moveTo(-3.1,7).curveTo(-4.7,5.3,-4.8,2.6).curveTo(-4.7,-0.2,-3.2,-1.7).curveTo(-2,-2.9,-0.3,-2.8).curveTo(1.7,-2.8,2.9,-1.2).lineTo(2.9,-8.1).lineTo(4.8,-8.1).lineTo(4.8,7.9).lineTo(2.9,7.9).lineTo(2.9,6.6).curveTo(1.8,8.1,0.1,8.1).curveTo(-1.9,8.1,-3.1,7).closePath().moveTo(-1.7,-0.4).curveTo(-2.6,0.5,-2.6,2.6).curveTo(-2.6,4.8,-1.6,5.8).curveTo(-1,6.4,-0.1,6.4).curveTo(1.1,6.4,1.9,5.6).curveTo(2.8,4.7,2.9,2.6).curveTo(2.9,0.7,1.7,-0.4).curveTo(1,-1.1,-0.1,-1.1).curveTo(-1,-1.1,-1.7,-0.4).closePath();
	this.shape_60.setTransform(212.85,234.15);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,4).curveTo(-4.9,2.5,-4.9,-0).curveTo(-4.9,-2.5,-3.3,-4.1).curveTo(-2,-5.4,0.1,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(4.8,-2.7,4.8,-0).lineTo(-2.8,-0).curveTo(-2.8,2,-1.9,2.9).curveTo(-1.1,3.7,0.3,3.7).curveTo(1.6,3.7,2.1,3.2).curveTo(2.8,2.5,2.8,1.7).lineTo(4.9,1.7).curveTo(4.5,3.4,3.6,4.2).curveTo(2.4,5.4,0.3,5.4).curveTo(-2,5.4,-3.4,4).closePath().moveTo(-1.9,-3.1).curveTo(-2.6,-2.4,-2.7,-1.5).lineTo(2.6,-1.5).curveTo(2.6,-2.4,1.9,-3.2).curveTo(1.2,-3.8,-0,-3.8).curveTo(-1.1,-3.8,-1.9,-3.1).closePath();
	this.shape_61.setTransform(200.925,236.825);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#000000").beginStroke().moveTo(-3.5,5.3).lineTo(-3.5,-5.2).lineTo(-1.6,-5.2).lineTo(-1.6,-2.5).curveTo(-1.1,-3.3,-0.6,-3.8).curveTo(0.9,-5.3,3.5,-5.3).lineTo(3.5,-3.3).lineTo(2.4,-3.4).curveTo(1,-3.4,-0.2,-2.2).curveTo(-1.2,-1.1,-1.6,0).lineTo(-1.6,5.3).closePath();
	this.shape_62.setTransform(191.325,236.725);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,4).curveTo(-4.9,2.5,-4.9,-0).curveTo(-4.9,-2.5,-3.3,-4.1).curveTo(-2,-5.4,0.1,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(4.8,-2.7,4.8,-0).lineTo(-2.8,-0).curveTo(-2.8,2,-1.9,2.9).curveTo(-1.1,3.7,0.3,3.7).curveTo(1.6,3.7,2.1,3.2).curveTo(2.8,2.5,2.8,1.7).lineTo(4.9,1.7).curveTo(4.5,3.4,3.6,4.2).curveTo(2.4,5.4,0.3,5.4).curveTo(-2,5.4,-3.4,4).closePath().moveTo(-1.9,-3.1).curveTo(-2.6,-2.4,-2.7,-1.5).lineTo(2.6,-1.5).curveTo(2.6,-2.4,1.9,-3.2).curveTo(1.2,-3.8,-0,-3.8).curveTo(-1.1,-3.8,-1.9,-3.1).closePath();
	this.shape_63.setTransform(180.575,236.825);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#000000").beginStroke().moveTo(-3.9,6.6).lineTo(-3.9,4.8).curveTo(-3.2,5.2,-2.3,5.2).curveTo(-1.9,5.2,-1.5,4.8).curveTo(-1.1,4.4,-0.9,3.8).lineTo(-5.4,-7).lineTo(-3.4,-7).lineTo(0,1.3).lineTo(3.4,-7).lineTo(5.4,-7).lineTo(0.8,4.3).curveTo(0.2,5.7,-0.4,6.2).curveTo(-1.1,7,-2.2,7).curveTo(-3.6,7,-3.9,6.6).closePath();
	this.shape_64.setTransform(168.725,238.475);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#000000").beginStroke().moveTo(-4,4.5).curveTo(-4.9,3.7,-4.9,2.5).curveTo(-4.9,1.2,-4,0.4).curveTo(-3.1,-0.6,-1.4,-0.8).curveTo(-0.3,-1,0.6,-1.3).curveTo(1.8,-1.6,2.2,-1.9).curveTo(2.2,-2.6,1.7,-3.2).curveTo(1.1,-3.8,0.1,-3.8).curveTo(-1.2,-3.8,-1.8,-3.2).curveTo(-2.2,-2.8,-2.3,-2.2).lineTo(-4.4,-2.2).curveTo(-4.1,-3.5,-3.2,-4.4).curveTo(-2.2,-5.4,-0.2,-5.4).curveTo(2.2,-5.4,3.2,-4.4).curveTo(4.1,-3.5,4.1,-2.3).lineTo(4.1,3.7).curveTo(4.1,4.7,4.9,5.2).lineTo(2.6,5.2).curveTo(2.2,4.9,2.2,4).curveTo(0.8,5.4,-1.3,5.4).curveTo(-3.1,5.4,-4,4.5).closePath().moveTo(1.2,0.2).lineTo(-1.2,0.7).curveTo(-2,0.9,-2.3,1.3).curveTo(-2.8,1.8,-2.8,2.3).curveTo(-2.8,3,-2.3,3.5).curveTo(-2.1,3.7,-1.1,3.7).curveTo(0.5,3.7,1.5,2.7).curveTo(2.2,2.1,2.2,1.8).lineTo(2.2,-0.1).lineTo(1.2,0.2).closePath();
	this.shape_65.setTransform(157.375,236.825);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-8).lineTo(0.9,-8).lineTo(0.9,8).closePath();
	this.shape_66.setTransform(149.125,234.05);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#000000").beginStroke().moveTo(-5.3,0.7).lineTo(-5.3,-0.8).lineTo(5.4,-0.8).lineTo(5.4,0.7).closePath();
	this.shape_67.setTransform(140.6,233.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,7.9).lineTo(-0.9,-2.5).lineTo(0.9,-2.5).lineTo(0.9,7.9).closePath().moveTo(-0.9,-5.6).lineTo(-0.9,-7.9).lineTo(0.9,-7.9).lineTo(0.9,-5.6).closePath();
	this.shape_68.setTransform(132.075,234.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,6.3).curveTo(-1.8,5.4,-1.8,4.3).lineTo(-1.8,-2).lineTo(-4.1,-2).lineTo(-4.1,-3.5).lineTo(-1.8,-3.5).lineTo(-1.8,-7.2).lineTo(0.1,-7.2).lineTo(0.1,-3.5).lineTo(3.2,-3.5).lineTo(3.2,-2).lineTo(0.1,-2).lineTo(0.1,4.1).curveTo(0.1,4.7,0.5,5.1).curveTo(0.9,5.5,1.7,5.5).curveTo(3.1,5.5,4.1,4.8).lineTo(4.1,6.6).curveTo(3.1,7.2,1.8,7.2).curveTo(-0,7.2,-0.9,6.3).closePath();
	this.shape_69.setTransform(125.175,235.075);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-8).lineTo(0.9,-8).lineTo(0.9,8).closePath();
	this.shape_70.setTransform(118.575,234.05);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#000000").beginStroke().moveTo(-3.8,4.5).curveTo(-4.6,3.7,-4.6,2.3).lineTo(-4.6,-5.3).lineTo(-2.7,-5.3).lineTo(-2.7,1.7).curveTo(-2.7,2.9,-2.1,3.4).curveTo(-1.7,3.8,-0.9,3.8).curveTo(0.4,3.8,1.3,2.9).curveTo(2.7,1.5,2.7,-0).lineTo(2.7,-5.3).lineTo(4.6,-5.3).lineTo(4.6,5.1).lineTo(2.7,5.1).lineTo(2.7,3.3).curveTo(1.2,5.3,-1,5.4).curveTo(-2.9,5.4,-3.8,4.5).closePath();
	this.shape_71.setTransform(110.05,236.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#000000").beginStroke().moveTo(5,8).lineTo(5,-4.3).lineTo(0.7,8).lineTo(-0.8,8).lineTo(-5.1,-4.3).lineTo(-5.1,8).lineTo(-7.2,8).lineTo(-7.2,-8).lineTo(-4.3,-8).lineTo(-0,4.4).lineTo(4.3,-8).lineTo(7.2,-8).lineTo(7.2,8).closePath();
	this.shape_72.setTransform(95.175,234.05);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#000000").beginStroke().moveTo(2.7,5.3).lineTo(2.7,-1.9).curveTo(2.7,-2.7,2.1,-3.3).curveTo(1.6,-3.8,0.5,-3.8).curveTo(-0.4,-3.8,-1.3,-2.9).curveTo(-2.7,-1.5,-2.7,0.1).lineTo(-2.7,5.3).lineTo(-4.6,5.3).lineTo(-4.6,-5.2).lineTo(-2.7,-5.2).lineTo(-2.7,-3.3).curveTo(-1.1,-5.3,0.9,-5.3).curveTo(2.7,-5.3,3.9,-4.2).curveTo(4.6,-3.5,4.6,-2.4).lineTo(4.6,5.3).closePath();
	this.shape_73.setTransform(123.95,130.175);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#000000").beginStroke().moveTo(-3.5,4).curveTo(-5,2.4,-5,-0).curveTo(-5,-2.4,-3.5,-4).curveTo(-2.1,-5.4,0,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(5,-2.4,5.1,-0).curveTo(5,2.4,3.4,4).curveTo(2,5.4,0,5.4).curveTo(-2.1,5.4,-3.5,4).closePath().moveTo(-1.9,-3).curveTo(-3,-1.9,-3,-0).curveTo(-3,1.9,-2,2.9).curveTo(-1.1,3.7,0,3.7).curveTo(1.1,3.7,1.9,2.9).curveTo(3,1.9,3,-0).curveTo(3,-1.9,1.8,-3).curveTo(1.1,-3.8,0,-3.8).curveTo(-1.2,-3.8,-1.9,-3).closePath();
	this.shape_74.setTransform(111.85,130.275);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-2.5).lineTo(0.9,-2.5).lineTo(0.9,8).closePath().moveTo(-0.9,-5.5).lineTo(-0.9,-7.9).lineTo(0.9,-7.9).lineTo(0.9,-5.5).closePath();
	this.shape_75.setTransform(103.225,127.55);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,6.3).curveTo(-1.8,5.4,-1.8,4.3).lineTo(-1.8,-2).lineTo(-4.1,-2).lineTo(-4.1,-3.5).lineTo(-1.8,-3.5).lineTo(-1.8,-7.2).lineTo(0.1,-7.2).lineTo(0.1,-3.5).lineTo(3.2,-3.5).lineTo(3.2,-2).lineTo(0.1,-2).lineTo(0.1,4.1).curveTo(0.1,4.7,0.5,5.1).curveTo(0.9,5.5,1.7,5.5).curveTo(3.1,5.5,4.1,4.8).lineTo(4.1,6.6).curveTo(3.1,7.2,1.8,7.2).curveTo(-0,7.2,-0.9,6.3).closePath();
	this.shape_76.setTransform(96.325,128.525);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-2.5).lineTo(0.9,-2.5).lineTo(0.9,8).closePath().moveTo(-0.9,-5.5).lineTo(-0.9,-7.9).lineTo(0.9,-7.9).lineTo(0.9,-5.5).closePath();
	this.shape_77.setTransform(89.725,127.55);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill("#000000").beginStroke().moveTo(-3,7).curveTo(-4.7,5.3,-4.8,2.6).curveTo(-4.7,-0.1,-3.2,-1.7).curveTo(-2,-2.8,-0.3,-2.9).curveTo(1.8,-2.8,2.8,-1.2).lineTo(2.8,-8.1).lineTo(4.8,-8.1).lineTo(4.8,7.9).lineTo(2.8,7.9).lineTo(2.8,6.6).curveTo(1.9,8.1,0,8.1).curveTo(-1.9,8.1,-3,7).closePath().moveTo(-1.8,-0.4).curveTo(-2.6,0.5,-2.7,2.6).curveTo(-2.6,4.8,-1.7,5.8).curveTo(-1,6.4,-0.1,6.4).curveTo(1.1,6.4,1.8,5.7).curveTo(2.8,4.7,2.8,2.6).curveTo(2.8,0.7,1.7,-0.4).curveTo(1,-1.1,-0.1,-1.2).curveTo(-1,-1.1,-1.8,-0.4).closePath();
	this.shape_78.setTransform(81.25,127.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#000000").beginStroke().moveTo(-3,7).curveTo(-4.8,5.3,-4.7,2.6).curveTo(-4.8,-0.1,-3.3,-1.7).curveTo(-2,-2.8,-0.3,-2.9).curveTo(1.8,-2.8,2.8,-1.2).lineTo(2.8,-8.1).lineTo(4.7,-8.1).lineTo(4.7,7.9).lineTo(2.8,7.9).lineTo(2.8,6.6).curveTo(1.8,8.1,0,8.1).curveTo(-1.9,8.1,-3,7).closePath().moveTo(-1.8,-0.4).curveTo(-2.7,0.5,-2.7,2.6).curveTo(-2.7,4.8,-1.7,5.8).curveTo(-1,6.4,-0.1,6.4).curveTo(1.1,6.4,1.8,5.7).curveTo(2.9,4.7,2.8,2.6).curveTo(2.9,0.7,1.7,-0.4).curveTo(1,-1.1,-0.1,-1.2).curveTo(-1,-1.1,-1.8,-0.4).closePath();
	this.shape_79.setTransform(69.35,127.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill("#000000").beginStroke().moveTo(5,8.1).lineTo(3.1,3.3).lineTo(-3.1,3.3).lineTo(-5,8.1).lineTo(-7.3,8.1).lineTo(-1,-8.1).lineTo(1,-8.1).lineTo(7.3,8.1).closePath().moveTo(-2.4,1.5).lineTo(2.4,1.5).lineTo(-0,-5).closePath();
	this.shape_80.setTransform(55.8,127.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#000000").beginStroke().moveTo(2.7,5.3).lineTo(2.7,-1.9).curveTo(2.7,-2.7,2.2,-3.3).curveTo(1.6,-3.8,0.6,-3.8).curveTo(-0.4,-3.8,-1.3,-2.9).curveTo(-2.7,-1.5,-2.7,0.1).lineTo(-2.7,5.3).lineTo(-4.6,5.3).lineTo(-4.6,-5.2).lineTo(-2.7,-5.2).lineTo(-2.7,-3.3).curveTo(-1,-5.3,0.8,-5.3).curveTo(2.7,-5.3,3.9,-4.2).curveTo(4.6,-3.5,4.6,-2.4).lineTo(4.6,5.3).closePath();
	this.shape_81.setTransform(303.55,130.175);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,4).curveTo(-5,2.4,-5.1,-0).curveTo(-5,-2.4,-3.4,-4).curveTo(-2,-5.4,-0,-5.4).curveTo(2.1,-5.4,3.5,-4).curveTo(5,-2.4,5,-0).curveTo(5,2.4,3.5,4).curveTo(2.1,5.4,-0,5.4).curveTo(-2,5.4,-3.4,4).closePath().moveTo(-1.9,-3).curveTo(-3,-1.9,-3,-0).curveTo(-3,1.9,-1.9,2.9).curveTo(-1.2,3.7,-0,3.7).curveTo(1.1,3.7,1.9,2.9).curveTo(3,1.9,3,-0).curveTo(3,-1.9,1.9,-3).curveTo(1.1,-3.8,-0,-3.8).curveTo(-1.2,-3.8,-1.9,-3).closePath();
	this.shape_82.setTransform(291.45,130.275);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-2.5).lineTo(0.9,-2.5).lineTo(0.9,8).closePath().moveTo(-0.9,-5.5).lineTo(-0.9,-7.9).lineTo(0.9,-7.9).lineTo(0.9,-5.5).closePath();
	this.shape_83.setTransform(282.825,127.55);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,6.3).curveTo(-1.8,5.4,-1.8,4.3).lineTo(-1.8,-2).lineTo(-4.1,-2).lineTo(-4.1,-3.5).lineTo(-1.8,-3.5).lineTo(-1.8,-7.2).lineTo(0.1,-7.2).lineTo(0.1,-3.5).lineTo(3.2,-3.5).lineTo(3.2,-2).lineTo(0.1,-2).lineTo(0.1,4.1).curveTo(0.1,4.7,0.5,5.1).curveTo(0.9,5.5,1.7,5.5).curveTo(3.1,5.5,4.1,4.8).lineTo(4.1,6.6).curveTo(3.1,7.2,1.8,7.2).curveTo(-0,7.2,-0.9,6.3).closePath();
	this.shape_84.setTransform(275.925,128.525);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#000000").beginStroke().moveTo(-4,4.5).curveTo(-4.9,3.7,-4.9,2.5).curveTo(-4.9,1.2,-4,0.4).curveTo(-3.1,-0.6,-1.4,-0.8).curveTo(-0.3,-1,0.6,-1.3).curveTo(1.8,-1.6,2.2,-1.9).curveTo(2.2,-2.6,1.7,-3.2).curveTo(1.1,-3.8,0.1,-3.8).curveTo(-1.2,-3.8,-1.8,-3.2).curveTo(-2.2,-2.8,-2.3,-2.2).lineTo(-4.4,-2.2).curveTo(-4.1,-3.5,-3.2,-4.4).curveTo(-2.2,-5.4,-0.2,-5.4).curveTo(2.2,-5.4,3.2,-4.4).curveTo(4.1,-3.5,4.1,-2.3).lineTo(4.1,3.7).curveTo(4.1,4.7,4.9,5.2).lineTo(2.6,5.2).curveTo(2.2,4.9,2.2,4).curveTo(0.8,5.4,-1.3,5.4).curveTo(-3.1,5.4,-4,4.5).closePath().moveTo(1.2,0.2).lineTo(-1.2,0.7).curveTo(-2,0.9,-2.3,1.3).curveTo(-2.8,1.8,-2.8,2.3).curveTo(-2.8,3,-2.3,3.5).curveTo(-2.1,3.7,-1.1,3.7).curveTo(0.5,3.7,1.5,2.7).curveTo(2.2,2.1,2.2,1.8).lineTo(2.2,-0.1).lineTo(1.2,0.2).closePath();
	this.shape_85.setTransform(266.125,130.275);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill("#000000").beginStroke().moveTo(-3.3,4.1).curveTo(-4.9,2.4,-4.9,-0).curveTo(-4.9,-2.5,-3.4,-4).curveTo(-2,-5.4,0.1,-5.4).curveTo(2.3,-5.4,3.4,-4.3).curveTo(4.5,-3.3,4.7,-1.8).lineTo(2.6,-1.8).curveTo(2.5,-2.5,1.9,-3.2).curveTo(1.2,-3.8,0.2,-3.8).curveTo(-1,-3.8,-1.7,-3).curveTo(-2.8,-1.9,-2.8,0.1).curveTo(-2.8,2,-1.8,3).curveTo(-1.1,3.7,0.1,3.7).curveTo(1.4,3.7,2.1,3).curveTo(2.8,2.2,2.9,1).lineTo(4.9,1).curveTo(4.9,3,3.6,4.2).curveTo(2.4,5.4,0.1,5.4).curveTo(-1.9,5.4,-3.3,4.1).closePath();
	this.shape_86.setTransform(254.45,130.375);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-2.5).lineTo(0.9,-2.5).lineTo(0.9,8).closePath().moveTo(-0.9,-5.5).lineTo(-0.9,-7.9).lineTo(0.9,-7.9).lineTo(0.9,-5.5).closePath();
	this.shape_87.setTransform(245.875,127.55);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-8).lineTo(0.9,-8).lineTo(0.9,8).closePath();
	this.shape_88.setTransform(240.825,127.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#000000").beginStroke().moveTo(-4.7,7.1).lineTo(-4.7,-6.9).lineTo(-2.8,-6.9).lineTo(-2.8,-5.7).curveTo(-1.7,-7.1,0,-7.1).curveTo(2,-7.1,3.3,-5.9).curveTo(4.7,-4.4,4.7,-1.7).curveTo(4.7,1.2,3.3,2.7).curveTo(2,3.9,0,3.9).curveTo(-1.9,3.9,-2.8,2.4).lineTo(-2.8,7.1).closePath().moveTo(-1.9,-4.6).curveTo(-2.8,-3.6,-2.8,-2.3).lineTo(-2.8,-1).curveTo(-2.8,0.3,-1.8,1.3).curveTo(-1,2.2,0,2.2).curveTo(1,2.2,1.7,1.5).curveTo(2.7,0.5,2.7,-1.7).curveTo(2.7,-3.7,1.7,-4.7).curveTo(1,-5.4,0,-5.4).curveTo(-1.1,-5.4,-1.9,-4.6).closePath();
	this.shape_89.setTransform(232.35,131.925);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-2.5).lineTo(0.9,-2.5).lineTo(0.9,8).closePath().moveTo(-0.9,-5.5).lineTo(-0.9,-7.9).lineTo(0.9,-7.9).lineTo(0.9,-5.5).closePath();
	this.shape_90.setTransform(223.875,127.55);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,6.3).curveTo(-1.8,5.4,-1.8,4.3).lineTo(-1.8,-2).lineTo(-4.1,-2).lineTo(-4.1,-3.5).lineTo(-1.8,-3.5).lineTo(-1.8,-7.2).lineTo(0.1,-7.2).lineTo(0.1,-3.5).lineTo(3.2,-3.5).lineTo(3.2,-2).lineTo(0.1,-2).lineTo(0.1,4.1).curveTo(0.1,4.7,0.5,5.1).curveTo(0.9,5.5,1.7,5.5).curveTo(3.1,5.5,4.1,4.8).lineTo(4.1,6.6).curveTo(3.1,7.2,1.8,7.2).curveTo(-0,7.2,-0.9,6.3).closePath();
	this.shape_91.setTransform(216.975,128.525);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-8).lineTo(0.9,-8).lineTo(0.9,8).closePath();
	this.shape_92.setTransform(210.375,127.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill("#000000").beginStroke().moveTo(-3.8,4.5).curveTo(-4.6,3.7,-4.6,2.3).lineTo(-4.6,-5.3).lineTo(-2.7,-5.3).lineTo(-2.7,1.7).curveTo(-2.7,2.9,-2.1,3.4).curveTo(-1.7,3.8,-0.9,3.8).curveTo(0.4,3.8,1.3,2.9).curveTo(2.7,1.5,2.7,-0).lineTo(2.7,-5.3).lineTo(4.6,-5.3).lineTo(4.6,5.2).lineTo(2.7,5.2).lineTo(2.7,3.3).curveTo(1.2,5.4,-1,5.4).curveTo(-2.9,5.4,-3.8,4.5).closePath();
	this.shape_93.setTransform(201.85,130.35);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill("#000000").beginStroke().moveTo(5,8).lineTo(5,-4.3).lineTo(0.7,8).lineTo(-0.8,8).lineTo(-5.1,-4.3).lineTo(-5.1,8).lineTo(-7.2,8).lineTo(-7.2,-8).lineTo(-4.3,-8).lineTo(-0,4.4).lineTo(4.3,-8).lineTo(7.2,-8).lineTo(7.2,8).closePath();
	this.shape_94.setTransform(186.975,127.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill("#000000").beginStroke().moveTo(2.7,5.3).lineTo(2.7,-1.9).curveTo(2.7,-2.7,2.1,-3.3).curveTo(1.6,-3.8,0.5,-3.8).curveTo(-0.4,-3.8,-1.3,-2.9).curveTo(-2.7,-1.5,-2.7,0.1).lineTo(-2.7,5.3).lineTo(-4.6,5.3).lineTo(-4.6,-5.2).lineTo(-2.7,-5.2).lineTo(-2.7,-3.3).curveTo(-1.1,-5.3,0.9,-5.3).curveTo(2.7,-5.3,3.9,-4.2).curveTo(4.6,-3.5,4.6,-2.4).lineTo(4.6,5.3).closePath();
	this.shape_95.setTransform(447.85,20.025);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill("#000000").beginStroke().moveTo(-3.5,4).curveTo(-5,2.4,-5,-0).curveTo(-5,-2.4,-3.5,-4).curveTo(-2.1,-5.4,0,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(5,-2.4,5.1,-0).curveTo(5,2.4,3.4,4).curveTo(2,5.4,0,5.4).curveTo(-2.1,5.4,-3.5,4).closePath().moveTo(-1.9,-3).curveTo(-3,-1.9,-3,-0).curveTo(-3,1.9,-2,2.9).curveTo(-1.1,3.7,0,3.7).curveTo(1.1,3.7,1.9,2.9).curveTo(3,1.9,3,-0).curveTo(3,-1.9,1.8,-3).curveTo(1.1,-3.8,0,-3.8).curveTo(-1.2,-3.8,-1.9,-3).closePath();
	this.shape_96.setTransform(435.75,20.125);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-2.6).lineTo(0.9,-2.6).lineTo(0.9,8).closePath().moveTo(-0.9,-5.5).lineTo(-0.9,-8).lineTo(0.9,-8).lineTo(0.9,-5.5).closePath();
	this.shape_97.setTransform(427.125,17.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,6.3).curveTo(-1.8,5.4,-1.8,4.3).lineTo(-1.8,-2).lineTo(-4.1,-2).lineTo(-4.1,-3.5).lineTo(-1.8,-3.5).lineTo(-1.8,-7.2).lineTo(0.1,-7.2).lineTo(0.1,-3.5).lineTo(3.2,-3.5).lineTo(3.2,-2).lineTo(0.1,-2).lineTo(0.1,4.1).curveTo(0.1,4.7,0.5,5.1).curveTo(0.9,5.5,1.7,5.5).curveTo(3.1,5.5,4.1,4.8).lineTo(4.1,6.6).curveTo(3.1,7.2,1.8,7.2).curveTo(-0,7.2,-0.9,6.3).closePath();
	this.shape_98.setTransform(420.225,18.375);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginFill("#000000").beginStroke().moveTo(-4,4.5).curveTo(-4.9,3.7,-4.9,2.5).curveTo(-4.9,1.2,-4,0.4).curveTo(-3.1,-0.6,-1.4,-0.8).curveTo(-0.3,-1,0.6,-1.3).curveTo(1.8,-1.6,2.2,-1.9).curveTo(2.2,-2.6,1.7,-3.2).curveTo(1.1,-3.8,0.1,-3.8).curveTo(-1.2,-3.8,-1.8,-3.2).curveTo(-2.2,-2.8,-2.3,-2.2).lineTo(-4.4,-2.2).curveTo(-4.1,-3.5,-3.2,-4.4).curveTo(-2.2,-5.4,-0.2,-5.4).curveTo(2.2,-5.4,3.2,-4.4).curveTo(4.1,-3.5,4.1,-2.3).lineTo(4.1,3.7).curveTo(4.1,4.7,4.9,5.2).lineTo(2.6,5.2).curveTo(2.2,4.9,2.2,4).curveTo(0.8,5.4,-1.3,5.4).curveTo(-3.1,5.4,-4,4.5).closePath().moveTo(1.2,0.2).lineTo(-1.2,0.7).curveTo(-2,0.9,-2.3,1.3).curveTo(-2.8,1.8,-2.8,2.3).curveTo(-2.8,3,-2.3,3.5).curveTo(-2.1,3.7,-1.1,3.7).curveTo(0.5,3.7,1.5,2.7).curveTo(2.2,2.1,2.2,1.8).lineTo(2.2,-0.1).lineTo(1.2,0.2).closePath();
	this.shape_99.setTransform(410.425,20.125);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginFill("#000000").beginStroke().moveTo(-3.5,5.3).lineTo(-3.5,-5.2).lineTo(-1.6,-5.2).lineTo(-1.6,-2.5).curveTo(-1.1,-3.3,-0.6,-3.8).curveTo(0.9,-5.3,3.5,-5.3).lineTo(3.5,-3.3).lineTo(2.4,-3.4).curveTo(1,-3.4,-0.2,-2.2).curveTo(-1.2,-1.1,-1.6,0).lineTo(-1.6,5.3).closePath();
	this.shape_100.setTransform(401.125,20.025);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.beginFill("#000000").beginStroke().moveTo(-3.7,4.5).curveTo(-4.6,3.7,-4.6,2.4).lineTo(-4.6,-5.4).lineTo(-2.7,-5.4).lineTo(-2.7,1.7).curveTo(-2.7,2.9,-2.2,3.4).curveTo(-1.7,3.9,-0.8,3.8).curveTo(0.4,3.8,1.3,2.9).curveTo(2.7,1.5,2.7,-0).lineTo(2.7,-5.4).lineTo(4.6,-5.4).lineTo(4.6,5.2).lineTo(2.7,5.2).lineTo(2.7,3.3).curveTo(1.2,5.4,-0.9,5.4).curveTo(-2.9,5.4,-3.7,4.5).closePath();
	this.shape_101.setTransform(390.35,20.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,6.3).curveTo(-1.8,5.4,-1.8,4.3).lineTo(-1.8,-2).lineTo(-4.1,-2).lineTo(-4.1,-3.5).lineTo(-1.8,-3.5).lineTo(-1.8,-7.2).lineTo(0.1,-7.2).lineTo(0.1,-3.5).lineTo(3.2,-3.5).lineTo(3.2,-2).lineTo(0.1,-2).lineTo(0.1,4.1).curveTo(0.1,4.7,0.5,5.1).curveTo(0.9,5.5,1.7,5.5).curveTo(3.1,5.5,4.1,4.8).lineTo(4.1,6.6).curveTo(3.1,7.2,1.8,7.2).curveTo(-0,7.2,-0.9,6.3).closePath();
	this.shape_102.setTransform(379.975,18.375);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.beginFill("#000000").beginStroke().moveTo(-4,4.5).curveTo(-4.9,3.7,-4.9,2.5).curveTo(-4.9,1.2,-4,0.4).curveTo(-3.1,-0.6,-1.4,-0.8).curveTo(-0.3,-1,0.6,-1.3).curveTo(1.8,-1.6,2.2,-1.9).curveTo(2.2,-2.6,1.7,-3.2).curveTo(1.1,-3.8,0.1,-3.8).curveTo(-1.2,-3.8,-1.8,-3.2).curveTo(-2.2,-2.8,-2.3,-2.2).lineTo(-4.4,-2.2).curveTo(-4.1,-3.5,-3.2,-4.4).curveTo(-2.2,-5.4,-0.2,-5.4).curveTo(2.2,-5.4,3.2,-4.4).curveTo(4.1,-3.5,4.1,-2.3).lineTo(4.1,3.7).curveTo(4.1,4.7,4.9,5.2).lineTo(2.6,5.2).curveTo(2.2,4.9,2.2,4).curveTo(0.8,5.4,-1.3,5.4).curveTo(-3.1,5.4,-4,4.5).closePath().moveTo(1.2,0.2).lineTo(-1.2,0.7).curveTo(-2,0.9,-2.3,1.3).curveTo(-2.8,1.8,-2.8,2.3).curveTo(-2.8,3,-2.3,3.5).curveTo(-2.1,3.7,-1.1,3.7).curveTo(0.5,3.7,1.5,2.7).curveTo(2.2,2.1,2.2,1.8).lineTo(2.2,-0.1).lineTo(1.2,0.2).closePath();
	this.shape_103.setTransform(370.175,20.125);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.beginFill("#000000").beginStroke().moveTo(-4.7,6.5).curveTo(-6,5.3,-6,3).lineTo(-3.8,3).curveTo(-3.8,4.6,-3,5.4).curveTo(-2,6.5,0.1,6.4).curveTo(2.1,6.5,3,5.5).curveTo(3.8,4.7,3.8,4).curveTo(3.8,3.2,3.3,2.6).curveTo(2.8,2.1,1.8,1.6).lineTo(-0.7,0.5).lineTo(-3.4,-0.7).curveTo(-4.1,-1,-4.7,-1.5).curveTo(-5.5,-2.4,-5.5,-3.8).curveTo(-5.6,-5.6,-4.3,-6.9).curveTo(-3,-8.2,-0.2,-8.2).curveTo(2.7,-8.2,4.2,-6.7).curveTo(5.5,-5.4,5.5,-3.6).lineTo(3.4,-3.6).curveTo(3.4,-4.8,2.6,-5.5).curveTo(1.7,-6.3,-0.1,-6.3).curveTo(-2,-6.3,-2.7,-5.6).curveTo(-3.4,-4.9,-3.4,-4).curveTo(-3.4,-3.3,-3,-2.9).curveTo(-2.5,-2.4,-1.3,-1.9).lineTo(3.5,0.3).curveTo(4.3,0.5,5,1.2).curveTo(5.9,2.2,6,3.6).curveTo(6,5.5,4.6,6.8).curveTo(3.2,8.2,0,8.2).curveTo(-3,8.2,-4.7,6.5).closePath();
	this.shape_104.setTransform(357.35,17.35);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.beginFill("#000000").beginStroke().moveTo(-3.5,4.3).curveTo(-4.4,3.4,-4.4,2).lineTo(-2.5,2).curveTo(-2.4,2.8,-2.1,3.2).curveTo(-1.4,3.8,-0.1,3.8).curveTo(1.5,3.8,2.1,3.3).curveTo(2.4,2.9,2.4,2.3).curveTo(2.4,2,2,1.5).curveTo(1.6,1.1,0.7,0.9).curveTo(-0.9,0.6,-1.8,0.3).curveTo(-2.8,-0,-3.3,-0.5).curveTo(-4.1,-1.3,-4.2,-2.3).curveTo(-4.1,-3.5,-3.3,-4.3).curveTo(-2.2,-5.4,-0.1,-5.4).curveTo(2.1,-5.4,3.1,-4.4).curveTo(4.1,-3.5,4.1,-2.3).lineTo(2.2,-2.3).curveTo(2.1,-3,1.9,-3.3).curveTo(1.3,-3.8,-0.2,-3.8).curveTo(-1.1,-3.8,-1.7,-3.3).curveTo(-2.1,-2.8,-2.2,-2.3).curveTo(-2.1,-1.9,-1.9,-1.6).curveTo(-1.5,-1.2,0.4,-0.8).lineTo(2.5,-0.2).curveTo(3.2,0.1,3.7,0.5).curveTo(4.4,1.2,4.4,2.2).curveTo(4.4,3.4,3.4,4.3).curveTo(2.4,5.4,-0,5.4).curveTo(-2.4,5.4,-3.5,4.3).closePath();
	this.shape_105.setTransform(254.8,20.125);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.beginFill("#000000").beginStroke().moveTo(-3.5,4.3).curveTo(-4.4,3.4,-4.4,2).lineTo(-2.6,2).curveTo(-2.4,2.8,-2.1,3.2).curveTo(-1.4,3.8,-0.1,3.8).curveTo(1.5,3.8,2,3.3).curveTo(2.4,2.9,2.4,2.3).curveTo(2.4,2,1.9,1.5).curveTo(1.6,1.1,0.8,0.9).curveTo(-1,0.6,-1.8,0.3).curveTo(-2.8,-0,-3.3,-0.5).curveTo(-4.2,-1.3,-4.2,-2.3).curveTo(-4.2,-3.5,-3.3,-4.3).curveTo(-2.1,-5.4,-0.1,-5.4).curveTo(2.2,-5.4,3.1,-4.4).curveTo(4.1,-3.5,4.1,-2.3).lineTo(2.2,-2.3).curveTo(2.1,-3,1.9,-3.3).curveTo(1.3,-3.8,-0.2,-3.8).curveTo(-1.2,-3.8,-1.7,-3.3).curveTo(-2.2,-2.8,-2.2,-2.3).curveTo(-2.2,-1.9,-1.9,-1.6).curveTo(-1.5,-1.2,0.4,-0.8).lineTo(2.5,-0.2).curveTo(3.3,0.1,3.7,0.5).curveTo(4.4,1.2,4.4,2.2).curveTo(4.4,3.4,3.5,4.3).curveTo(2.4,5.4,-0,5.4).curveTo(-2.3,5.4,-3.5,4.3).closePath();
	this.shape_106.setTransform(243.75,20.125);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,4).curveTo(-4.9,2.5,-4.9,-0).curveTo(-4.9,-2.5,-3.3,-4.1).curveTo(-2,-5.4,0.1,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(4.8,-2.7,4.8,-0).lineTo(-2.8,-0).curveTo(-2.8,2,-1.9,2.9).curveTo(-1.1,3.7,0.3,3.7).curveTo(1.6,3.7,2.1,3.2).curveTo(2.8,2.5,2.8,1.7).lineTo(4.9,1.7).curveTo(4.5,3.4,3.6,4.2).curveTo(2.4,5.4,0.3,5.4).curveTo(-2,5.4,-3.4,4).closePath().moveTo(-1.9,-3.1).curveTo(-2.6,-2.4,-2.7,-1.5).lineTo(2.6,-1.5).curveTo(2.6,-2.4,1.9,-3.2).curveTo(1.2,-3.8,-0,-3.8).curveTo(-1.1,-3.8,-1.9,-3.1).closePath();
	this.shape_107.setTransform(232.225,20.125);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.beginFill("#000000").beginStroke().moveTo(2.7,5.3).lineTo(2.7,-1.9).curveTo(2.7,-2.7,2.2,-3.3).curveTo(1.6,-3.8,0.6,-3.8).curveTo(-0.4,-3.8,-1.3,-2.9).curveTo(-2.7,-1.5,-2.7,0.1).lineTo(-2.7,5.3).lineTo(-4.6,5.3).lineTo(-4.6,-5.2).lineTo(-2.7,-5.2).lineTo(-2.7,-3.3).curveTo(-1,-5.3,0.8,-5.3).curveTo(2.7,-5.3,3.8,-4.2).curveTo(4.6,-3.5,4.6,-2.4).lineTo(4.6,5.3).closePath();
	this.shape_108.setTransform(220.2,20.025);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,6.3).curveTo(-1.8,5.4,-1.8,4.3).lineTo(-1.8,-2).lineTo(-4.1,-2).lineTo(-4.1,-3.5).lineTo(-1.8,-3.5).lineTo(-1.8,-7.2).lineTo(0.1,-7.2).lineTo(0.1,-3.5).lineTo(3.2,-3.5).lineTo(3.2,-2).lineTo(0.1,-2).lineTo(0.1,4.1).curveTo(0.1,4.7,0.5,5.1).curveTo(0.9,5.5,1.7,5.5).curveTo(3.1,5.5,4.1,4.8).lineTo(4.1,6.6).curveTo(3.1,7.2,1.8,7.2).curveTo(-0,7.2,-0.9,6.3).closePath();
	this.shape_109.setTransform(209.825,18.375);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.beginFill("#000000").beginStroke().moveTo(2.7,8).lineTo(2.7,1).curveTo(2.7,-0.1,2,-0.7).curveTo(1.6,-1.1,0.8,-1.2).curveTo(-0.3,-1.1,-1.1,-0.3).curveTo(-2.2,0.7,-2.7,2.6).lineTo(-2.7,8).lineTo(-4.6,8).lineTo(-4.6,-8).lineTo(-2.7,-8).lineTo(-2.7,-0.6).curveTo(-1.1,-2.6,0.8,-2.7).curveTo(2.7,-2.6,3.6,-1.8).curveTo(4.6,-0.8,4.6,0.5).lineTo(4.6,8).closePath();
	this.shape_110.setTransform(199.75,17.35);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.beginFill("#000000").beginStroke().moveTo(-4.4,6).curveTo(-5.1,5.4,-5.1,4.4).curveTo(-5.1,3.8,-4.7,3.3).curveTo(-4.2,2.9,-3.5,2.6).lineTo(-4.1,2).curveTo(-4.6,1.5,-4.7,0.8).curveTo(-4.7,-0.2,-3.2,-1).curveTo(-4.2,-2,-4.2,-3.4).curveTo(-4.2,-5,-3.2,-6.1).curveTo(-2.2,-7.1,-0.6,-7.1).curveTo(0.9,-7.1,2.1,-6.2).curveTo(2.9,-7.1,4.3,-7.1).lineTo(5.1,-7.1).lineTo(5.1,-5.3).curveTo(4,-5.8,2.6,-5.4).curveTo(3.2,-4.6,3.2,-3.4).curveTo(3.2,-1.7,2.2,-0.7).curveTo(1.3,0.2,-0.5,0.2).curveTo(-1.4,0.2,-2.4,-0.2).curveTo(-3,0.1,-3,0.5).curveTo(-3,0.6,-2.9,0.6).curveTo(-2.9,0.7,-2.9,0.8).curveTo(-2.9,0.8,-2.8,0.9).curveTo(-2.8,0.9,-2.8,1).curveTo(-2.3,1.4,-0.6,1.5).lineTo(2.6,1.7).curveTo(3.6,1.9,4,2.4).curveTo(4.8,3.1,4.8,4.2).curveTo(4.8,5.3,4,6).curveTo(3,7.1,-0.5,7.1).curveTo(-3.4,7.1,-4.4,6).closePath().moveTo(-3.1,3.5).curveTo(-3.4,3.9,-3.4,4.3).curveTo(-3.4,4.8,-3.1,5.2).curveTo(-2.4,5.8,-0.6,5.8).curveTo(1.9,5.8,2.6,5.1).curveTo(2.9,4.7,3,4.3).curveTo(2.9,4,2.7,3.7).curveTo(2.3,3.3,1.3,3.3).curveTo(-0.9,3.2,-2.1,3).curveTo(-2.8,3.2,-3.1,3.5).closePath().moveTo(-1.7,-5).curveTo(-2.4,-4.4,-2.4,-3.4).curveTo(-2.4,-2.5,-1.8,-1.9).curveTo(-1.3,-1.4,-0.5,-1.4).curveTo(0.4,-1.4,0.8,-1.8).curveTo(1.3,-2.4,1.3,-3.4).curveTo(1.3,-4.4,0.7,-5).curveTo(0.2,-5.5,-0.6,-5.5).curveTo(-1.3,-5.5,-1.7,-5).closePath();
	this.shape_111.setTransform(188.55,21.775);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-2.6).lineTo(0.9,-2.6).lineTo(0.9,8).closePath().moveTo(-0.9,-5.5).lineTo(-0.9,-8).lineTo(0.9,-8).lineTo(0.9,-5.5).closePath();
	this.shape_112.setTransform(180.175,17.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.beginFill("#000000").beginStroke().moveTo(-3.5,5.3).lineTo(-3.5,-5.2).lineTo(-1.6,-5.2).lineTo(-1.6,-2.5).curveTo(-1.1,-3.3,-0.6,-3.8).curveTo(0.9,-5.3,3.5,-5.3).lineTo(3.5,-3.3).lineTo(2.4,-3.4).curveTo(1,-3.4,-0.2,-2.2).curveTo(-1.2,-1.1,-1.6,0).lineTo(-1.6,5.3).closePath();
	this.shape_113.setTransform(174.075,20.025);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.beginFill("#000000").beginStroke().moveTo(-6.1,8).lineTo(-6.1,-8).lineTo(1.4,-8).curveTo(3.3,-8,4.5,-6.8).curveTo(5.6,-5.7,5.6,-3.8).curveTo(5.6,-2.3,4.6,-1.2).curveTo(4,-0.7,3.2,-0.4).curveTo(4.3,-0,5,0.6).curveTo(6.1,1.8,6.1,3.4).curveTo(6.1,5.5,4.7,6.9).curveTo(3.6,8,1.3,8).closePath().moveTo(-3.9,6.2).lineTo(0.8,6.2).curveTo(2.2,6.2,3,5.5).curveTo(3.9,4.6,3.8,3.4).curveTo(3.9,2.1,3.1,1.4).curveTo(2.2,0.5,0.8,0.5).lineTo(-3.9,0.5).closePath().moveTo(-3.9,-1.2).lineTo(1.1,-1.2).curveTo(2.1,-1.3,2.7,-1.9).curveTo(3.4,-2.7,3.4,-3.9).curveTo(3.4,-4.9,2.7,-5.7).curveTo(2.1,-6.2,1.3,-6.3).lineTo(-3.9,-6.3).closePath();
	this.shape_114.setTransform(161.7,17.35);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,6.3).curveTo(-1.8,5.4,-1.8,4.3).lineTo(-1.8,-2).lineTo(-4.1,-2).lineTo(-4.1,-3.5).lineTo(-1.8,-3.5).lineTo(-1.8,-7.2).lineTo(0.1,-7.2).lineTo(0.1,-3.5).lineTo(3.2,-3.5).lineTo(3.2,-2).lineTo(0.1,-2).lineTo(0.1,4.1).curveTo(0.1,4.7,0.5,5.1).curveTo(0.9,5.5,1.7,5.5).curveTo(3.1,5.5,4.1,4.8).lineTo(4.1,6.6).curveTo(3.1,7.2,1.8,7.2).curveTo(-0,7.2,-0.9,6.3).closePath();
	this.shape_115.setTransform(87.425,18.375);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-8).lineTo(0.9,-8).lineTo(0.9,8).closePath();
	this.shape_116.setTransform(80.825,17.35);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.beginFill("#000000").beginStroke().moveTo(-3.7,4.5).curveTo(-4.6,3.7,-4.6,2.4).lineTo(-4.6,-5.4).lineTo(-2.7,-5.4).lineTo(-2.7,1.7).curveTo(-2.7,2.9,-2.2,3.4).curveTo(-1.7,3.9,-0.8,3.8).curveTo(0.4,3.8,1.3,2.9).curveTo(2.7,1.5,2.7,-0).lineTo(2.7,-5.4).lineTo(4.6,-5.4).lineTo(4.6,5.2).lineTo(2.7,5.2).lineTo(2.7,3.3).curveTo(1.2,5.4,-0.9,5.4).curveTo(-2.9,5.4,-3.7,4.5).closePath();
	this.shape_117.setTransform(72.3,20.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.beginFill("#000000").beginStroke().moveTo(-4,4.5).curveTo(-4.9,3.7,-4.9,2.5).curveTo(-4.9,1.2,-4,0.4).curveTo(-3.1,-0.6,-1.4,-0.8).curveTo(-0.3,-1,0.6,-1.3).curveTo(1.8,-1.6,2.2,-1.9).curveTo(2.2,-2.6,1.7,-3.2).curveTo(1.1,-3.8,0.1,-3.8).curveTo(-1.2,-3.8,-1.8,-3.2).curveTo(-2.2,-2.8,-2.3,-2.2).lineTo(-4.4,-2.2).curveTo(-4.1,-3.5,-3.2,-4.4).curveTo(-2.2,-5.4,-0.2,-5.4).curveTo(2.2,-5.4,3.2,-4.4).curveTo(4.1,-3.5,4.1,-2.3).lineTo(4.1,3.7).curveTo(4.1,4.7,4.9,5.2).lineTo(2.6,5.2).curveTo(2.2,4.9,2.2,4).curveTo(0.8,5.4,-1.3,5.4).curveTo(-3.1,5.4,-4,4.5).closePath().moveTo(1.2,0.2).lineTo(-1.2,0.7).curveTo(-2,0.9,-2.3,1.3).curveTo(-2.8,1.8,-2.8,2.3).curveTo(-2.8,3,-2.3,3.5).curveTo(-2.1,3.7,-1.1,3.7).curveTo(0.5,3.7,1.5,2.7).curveTo(2.2,2.1,2.2,1.8).lineTo(2.2,-0.1).lineTo(1.2,0.2).closePath();
	this.shape_118.setTransform(60.575,20.125);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.beginFill("#000000").beginStroke().moveTo(-1.8,8.1).lineTo(-1.8,-0.9).lineTo(-4.1,-0.9).lineTo(-4.1,-2.4).lineTo(-1.8,-2.4).lineTo(-1.8,-5).curveTo(-1.8,-6.3,-1,-7.2).curveTo(-0,-8.1,1.6,-8.1).curveTo(2.8,-8.1,4.1,-7.6).lineTo(4.1,-5.7).curveTo(2.8,-6.4,1.9,-6.4).curveTo(0.9,-6.4,0.4,-5.9).curveTo(0.1,-5.5,0.1,-5).lineTo(0.1,-2.4).lineTo(3.2,-2.4).lineTo(3.2,-0.9).lineTo(0.1,-0.9).lineTo(0.1,8.1).closePath();
	this.shape_119.setTransform(51.625,17.25);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,4).curveTo(-4.9,2.5,-4.9,-0).curveTo(-4.9,-2.5,-3.3,-4.1).curveTo(-2,-5.4,0.1,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(4.8,-2.7,4.8,-0).lineTo(-2.8,-0).curveTo(-2.8,2,-1.9,2.9).curveTo(-1.1,3.7,0.3,3.7).curveTo(1.6,3.7,2.1,3.2).curveTo(2.8,2.5,2.8,1.7).lineTo(4.9,1.7).curveTo(4.5,3.4,3.6,4.2).curveTo(2.4,5.4,0.3,5.4).curveTo(-2,5.4,-3.4,4).closePath().moveTo(-1.9,-3.1).curveTo(-2.6,-2.4,-2.7,-1.5).lineTo(2.6,-1.5).curveTo(2.6,-2.4,1.9,-3.2).curveTo(1.2,-3.8,-0,-3.8).curveTo(-1.1,-3.8,-1.9,-3.1).closePath();
	this.shape_120.setTransform(41.575,20.125);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.beginFill("#000000").beginStroke().moveTo(-6.2,8).lineTo(-6.2,-8).lineTo(-0.6,-8).curveTo(2.2,-8,4.2,-6).curveTo(6.2,-4,6.2,0.1).curveTo(6.2,4.1,4.1,6.2).curveTo(2.3,8,-0.6,8).closePath().moveTo(-4.1,6.2).lineTo(-0.7,6.2).curveTo(1.1,6.2,2.2,5.1).curveTo(4,3.4,4,0.1).curveTo(4,-3.2,2.3,-4.9).curveTo(1,-6.3,-0.7,-6.3).lineTo(-4.1,-6.3).closePath();
	this.shape_121.setTransform(27.825,17.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(50));

	// レイヤー_8
	this.instance_4 = new lib.symbol5();
	this.instance_4.setTransform(273.6,288.85,1,1,0,0,0,28,27.9);
	this.instance_4.alpha = 0.6211;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50));
	this.instance_4.addEventListener("tick", AdobeAn.handleFilterCache);

	// レイヤー_2
	this.instance_5 = new lib.symbol66();
	this.instance_5.setTransform(231.45,436.35,1,1,0,0,0,28,27.9);
	this.instance_5.compositeOperation = "screen";

	this.instance_6 = new lib.symbol66();
	this.instance_6.setTransform(61,436.35,1,1,0,0,0,28,27.9);
	this.instance_6.compositeOperation = "lighter";

	this.instance_7 = new lib.symbol66();
	this.instance_7.setTransform(141,436.35,1,1,0,0,0,28,27.9);
	this.instance_7.compositeOperation = "multiply";

	this.instance_8 = new lib.ビットマップ1();
	this.instance_8.setTransform(10,402,0.894,1);

	this.instance_9 = new lib.symbol6();
	this.instance_9.setTransform(61,69.4,1,1,0,0,0,28,27.9);

	this.instance_10 = new lib.symbol6("synched",0);
	this.instance_10.setTransform(279.1,180.85,1,1,0,0,0,28,27.9);
	var instance_10Filter_1 = new cjs.ColorFilter(1,-1,-1,1,0,0,0,0);
	this.instance_10.filters = [instance_10Filter_1];
	this.instance_10.cache(-2,-2,60,60);

	this.instance_11 = new lib.symbol6("synched",0);
	this.instance_11.setTransform(209.85,180.85,1,1,0,0,0,28,27.9);
	var instance_11Filter_2 = new cjs.ColorFilter(1,1,-1,1,0,0,0,0);
	this.instance_11.filters = [instance_11Filter_2];
	this.instance_11.cache(-2,-2,60,60);

	this.instance_12 = new lib.symbol6("synched",0);
	this.instance_12.setTransform(121.25,180.85,1,1,0,0,0,28,27.9);
	var instance_12Filter_3 = new cjs.ColorFilter(1,1,1,1,0,-255,0,0);
	this.instance_12.filters = [instance_12Filter_3];
	this.instance_12.cache(-2,-2,60,60);

	this.instance_13 = new lib.symbol6("synched",0);
	this.instance_13.setTransform(51,180.85,1,1,0,0,0,28,27.9);
	var instance_13Filter_4 = new cjs.ColorFilter(1,1,1,1,0,255,0,0);
	this.instance_13.filters = [instance_13Filter_4];
	this.instance_13.cache(-2,-2,60,60);

	this.instance_14 = new lib.symbol6("synched",0);
	this.instance_14.setTransform(411,69.4,1,1,0,0,0,28,27.9);
	var instance_14Filter_5 = new cjs.ColorFilter(0.2,0.2,0.2,1,103.2,200,76.8,0);
	this.instance_14.filters = [instance_14Filter_5];
	this.instance_14.cache(-2,-2,60,60);

	this.instance_15 = new lib.symbol6("synched",0);
	this.instance_15.setTransform(476.05,69.4,1,1,0,0,0,28,27.9);
	var instance_15Filter_6 = new cjs.ColorFilter(0.15,0.15,0.15,1,97.75,92.65,216.75,0);
	this.instance_15.filters = [instance_15Filter_6];
	this.instance_15.cache(-2,-2,60,60);

	this.instance_16 = new lib.symbol6("synched",0);
	this.instance_16.setTransform(343,69.4,1,1,0,0,0,28,27.9);
	var instance_16Filter_7 = new cjs.ColorFilter(0.04,0.04,0.04,1,222.72,92.16,182.4,0);
	this.instance_16.filters = [instance_16Filter_7];
	this.instance_16.cache(-2,-2,60,60);

	this.instance_17 = new lib.symbol6("synched",0);
	this.instance_17.setTransform(242,69.4,1,1,0,0,0,28,27.9);
	var instance_17Filter_8 = new cjs.ColorFilter(0.46,0.46,0.46,1,0,0,0,0);
	this.instance_17.filters = [instance_17Filter_8];
	this.instance_17.cache(-2,-2,60,60);

	this.instance_18 = new lib.symbol6("synched",0);
	this.instance_18.setTransform(180,69.4,1,1,0,0,0,28,27.9);
	var instance_18Filter_9 = new cjs.ColorFilter(0.44,0.44,0.44,1,142.8,142.8,142.8,0);
	this.instance_18.filters = [instance_18Filter_9];
	this.instance_18.cache(-2,-2,60,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(50));
	this.timeline.addTween(cjs.Tween.get(instance_10Filter_1).wait(50));
	this.timeline.addTween(cjs.Tween.get(instance_11Filter_2).wait(50));
	this.timeline.addTween(cjs.Tween.get(instance_12Filter_3).wait(50));
	this.timeline.addTween(cjs.Tween.get(instance_13Filter_4).wait(50));
	this.timeline.addTween(cjs.Tween.get(instance_14Filter_5).wait(50));
	this.timeline.addTween(cjs.Tween.get(instance_15Filter_6).wait(50));
	this.timeline.addTween(cjs.Tween.get(instance_16Filter_7).wait(50));
	this.timeline.addTween(cjs.Tween.get(instance_17Filter_8).wait(50));
	this.timeline.addTween(cjs.Tween.get(instance_18Filter_9).wait(50));

	// レイヤー_5
	this.instance_19 = new lib.symbol6("synched",0);
	this.instance_19.setTransform(428.45,180.85,1,1,0,0,0,28,27.9);
	var instance_19Filter_10 = new cjs.ColorFilter(1,1,1,1,0,-255,0,0);
	this.instance_19.filters = [instance_19Filter_10];
	this.instance_19.cache(-2,-2,60,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({alpha:0.4805},22).to({alpha:1},27).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_19Filter_10).to(new cjs.ColorFilter(0.12890625,1,1,1,169,75,0,0), 22).to(new cjs.ColorFilter(1,1,1,1,0,-255,0,0), 27).wait(1));

	// レイヤー_7
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.beginFill().beginStroke("rgba(201,201,201,0.259)").setStrokeStyle(13,1,1).moveTo(118.7,-0.1).curveTo(118.7,49.1,83.9,83.9).curveTo(49.2,118.6,0,118.6).curveTo(-49.2,118.6,-84,83.9).curveTo(-118.7,49.1,-118.7,-0.1).curveTo(-118.7,-49.2,-84,-84).curveTo(-49.2,-118.8,0,-118.8).curveTo(49.2,-118.8,83.9,-84).curveTo(118.7,-49.2,118.7,-0.1).closePath().moveTo(267.8,-0).curveTo(267.8,110.9,189.3,189.3).curveTo(111,267.8,0,267.8).curveTo(-110.9,267.8,-189.4,189.3).curveTo(-267.7,110.9,-267.7,-0).curveTo(-267.7,-110.9,-189.4,-189.4).curveTo(-110.9,-267.7,0,-267.7).curveTo(111,-267.7,189.3,-189.4).curveTo(267.8,-110.9,267.8,-0).closePath().moveTo(170.5,-0).curveTo(170.5,70.6,120.5,120.5).curveTo(70.6,170.5,-0,170.5).curveTo(-70.7,170.5,-120.6,120.5).curveTo(-170.5,70.6,-170.5,-0).curveTo(-170.5,-70.7,-120.6,-120.6).curveTo(-70.7,-170.5,-0,-170.5).curveTo(70.6,-170.5,120.5,-120.6).curveTo(170.5,-70.7,170.5,-0).closePath().moveTo(223.5,-0).curveTo(223.5,92.6,158,158).curveTo(92.6,223.5,0,223.5).curveTo(-92.6,223.5,-158.1,158).curveTo(-223.5,92.6,-223.5,-0).curveTo(-223.5,-92.6,-158.1,-158.1).curveTo(-92.6,-223.5,0,-223.5).curveTo(92.6,-223.5,158,-158.1).curveTo(223.5,-92.6,223.5,-0).closePath().moveTo(20.4,-0.1).curveTo(20.4,8.3,14.4,14.3).curveTo(8.5,20.3,0,20.3).curveTo(-8.4,20.3,-14.4,14.3).curveTo(-20.4,8.3,-20.4,-0.1).curveTo(-20.4,-8.6,-14.4,-14.5).curveTo(-8.4,-20.5,0,-20.5).curveTo(8.5,-20.5,14.4,-14.5).curveTo(20.4,-8.6,20.4,-0.1).closePath().moveTo(68.3,-0.1).curveTo(68.3,28.2,48.3,48.1).curveTo(28.3,68.1,0,68.1).curveTo(-28.3,68.1,-48.2,48.1).curveTo(-68.2,28.2,-68.2,-0.1).curveTo(-68.2,-28.4,-48.2,-48.4).curveTo(-28.3,-68.3,0,-68.3).curveTo(28.3,-68.3,48.3,-48.4).curveTo(68.3,-28.4,68.3,-0.1).closePath();
	this.shape_122.setTransform(285.75,278.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_122).wait(50));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_19, startFrame:1, endFrame:22, x:-2, y:-2, w:60, h:60});
	this.filterCacheList.push({instance: this.instance_19, startFrame:0, endFrame:0, x:-2, y:-2, w:60, h:60});
	this.filterCacheList.push({instance: this.instance_19, startFrame:23, endFrame:49, x:-2, y:-2, w:60, h:60});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(285,276,337.70000000000005,276.5);
// library properties:
lib.properties = {
	id: '2FA8E0C7230941478CE2CA3DB82DBEDF',
	width: 550,
	height: 546,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/game_atlas_1.png?1732705910887", id:"game_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2FA8E0C7230941478CE2CA3DB82DBEDF'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;