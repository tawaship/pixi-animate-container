(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(2.7,5.3).lineTo(2.7,-1.9).curveTo(2.7,-2.7,2.2,-3.3).curveTo(1.6,-3.8,0.6,-3.8).curveTo(-0.4,-3.8,-1.3,-2.9).curveTo(-2.7,-1.5,-2.7,0.1).lineTo(-2.7,5.3).lineTo(-4.6,5.3).lineTo(-4.6,-5.2).lineTo(-2.7,-5.2).lineTo(-2.7,-3.3).curveTo(-1,-5.3,0.8,-5.3).curveTo(2.7,-5.3,3.8,-4.2).curveTo(4.6,-3.5,4.6,-2.4).lineTo(4.6,5.3).closePath();
	this.shape.setTransform(280.95,425.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,4).curveTo(-4.9,2.5,-4.9,-0).curveTo(-4.9,-2.5,-3.3,-4.1).curveTo(-2,-5.4,0.1,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(4.8,-2.7,4.8,-0).lineTo(-2.8,-0).curveTo(-2.8,2,-1.9,2.9).curveTo(-1.1,3.7,0.3,3.7).curveTo(1.6,3.7,2.1,3.2).curveTo(2.8,2.5,2.8,1.7).lineTo(4.9,1.7).curveTo(4.5,3.4,3.6,4.2).curveTo(2.4,5.4,0.3,5.4).curveTo(-2,5.4,-3.4,4).closePath().moveTo(-1.9,-3.1).curveTo(-2.6,-2.4,-2.7,-1.5).lineTo(2.6,-1.5).curveTo(2.6,-2.4,1.9,-3.2).curveTo(1.2,-3.8,-0,-3.8).curveTo(-1.1,-3.8,-1.9,-3.1).closePath();
	this.shape_1.setTransform(268.975,425.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,4).curveTo(-4.9,2.5,-4.9,-0).curveTo(-4.9,-2.5,-3.3,-4.1).curveTo(-2,-5.4,0.1,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(4.8,-2.7,4.8,-0).lineTo(-2.8,-0).curveTo(-2.8,2,-1.9,2.9).curveTo(-1.1,3.7,0.3,3.7).curveTo(1.6,3.7,2.1,3.2).curveTo(2.8,2.5,2.8,1.7).lineTo(4.9,1.7).curveTo(4.5,3.4,3.6,4.2).curveTo(2.4,5.4,0.3,5.4).curveTo(-2,5.4,-3.4,4).closePath().moveTo(-1.9,-3.1).curveTo(-2.6,-2.4,-2.7,-1.5).lineTo(2.6,-1.5).curveTo(2.6,-2.4,1.9,-3.2).curveTo(1.2,-3.8,-0,-3.8).curveTo(-1.1,-3.8,-1.9,-3.1).closePath();
	this.shape_2.setTransform(256.975,425.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(2.4,5.3).lineTo(-0,-3.1).lineTo(-2.4,5.3).lineTo(-4.3,5.3).lineTo(-7.4,-5.3).lineTo(-5.4,-5.3).lineTo(-3.3,2.5).lineTo(-1,-5.3).lineTo(1,-5.3).lineTo(3.2,2.5).lineTo(5.4,-5.3).lineTo(7.4,-5.3).lineTo(4.2,5.3).closePath();
	this.shape_3.setTransform(243.2,425.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#000000").beginStroke().moveTo(-1.1,8).lineTo(-1.1,-6.2).lineTo(-6.4,-6.2).lineTo(-6.4,-8).lineTo(6.4,-8).lineTo(6.4,-6.2).lineTo(1.1,-6.2).lineTo(1.1,8).closePath();
	this.shape_4.setTransform(228.325,422.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#000000").beginStroke().moveTo(-3.1,7).curveTo(-4.8,5.3,-4.8,2.6).curveTo(-4.8,-0.2,-3.3,-1.7).curveTo(-2,-2.9,-0.3,-2.9).curveTo(1.7,-2.8,2.9,-1.2).lineTo(2.9,-8.1).lineTo(4.7,-8.1).lineTo(4.7,7.9).lineTo(2.9,7.9).lineTo(2.9,6.6).curveTo(1.8,8.1,0.1,8.1).curveTo(-1.9,8.1,-3.1,7).closePath().moveTo(-1.7,-0.4).curveTo(-2.7,0.5,-2.6,2.6).curveTo(-2.7,4.8,-1.6,5.8).curveTo(-1,6.4,-0,6.4).curveTo(1.1,6.4,1.9,5.6).curveTo(2.8,4.7,2.9,2.6).curveTo(2.8,0.7,1.8,-0.4).curveTo(1,-1.1,-0,-1.1).curveTo(-1,-1.1,-1.7,-0.4).closePath();
	this.shape_5.setTransform(323.3,299.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,4).curveTo(-4.9,2.5,-4.9,-0).curveTo(-4.9,-2.5,-3.3,-4.1).curveTo(-2,-5.4,0.1,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(4.8,-2.7,4.8,-0).lineTo(-2.8,-0).curveTo(-2.8,2,-1.9,2.9).curveTo(-1.1,3.7,0.3,3.7).curveTo(1.6,3.7,2.1,3.2).curveTo(2.8,2.5,2.8,1.7).lineTo(4.9,1.7).curveTo(4.5,3.4,3.6,4.2).curveTo(2.4,5.4,0.3,5.4).curveTo(-2,5.4,-3.4,4).closePath().moveTo(-1.9,-3.1).curveTo(-2.6,-2.4,-2.7,-1.5).lineTo(2.6,-1.5).curveTo(2.6,-2.4,1.9,-3.2).curveTo(1.2,-3.8,-0,-3.8).curveTo(-1.1,-3.8,-1.9,-3.1).closePath();
	this.shape_6.setTransform(311.375,302.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#000000").beginStroke().moveTo(-3.5,5.3).lineTo(-3.5,-5.2).lineTo(-1.6,-5.2).lineTo(-1.6,-2.5).curveTo(-1.1,-3.3,-0.6,-3.8).curveTo(0.9,-5.3,3.5,-5.3).lineTo(3.5,-3.3).lineTo(2.4,-3.4).curveTo(1,-3.4,-0.2,-2.2).curveTo(-1.2,-1.1,-1.6,0).lineTo(-1.6,5.3).closePath();
	this.shape_7.setTransform(301.775,302.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,4).curveTo(-4.9,2.5,-4.9,-0).curveTo(-4.9,-2.5,-3.3,-4.1).curveTo(-2,-5.4,0.1,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(4.8,-2.7,4.8,-0).lineTo(-2.8,-0).curveTo(-2.8,2,-1.9,2.9).curveTo(-1.1,3.7,0.3,3.7).curveTo(1.6,3.7,2.1,3.2).curveTo(2.8,2.5,2.8,1.7).lineTo(4.9,1.7).curveTo(4.5,3.4,3.6,4.2).curveTo(2.4,5.4,0.3,5.4).curveTo(-2,5.4,-3.4,4).closePath().moveTo(-1.9,-3.1).curveTo(-2.6,-2.4,-2.7,-1.5).lineTo(2.6,-1.5).curveTo(2.6,-2.4,1.9,-3.2).curveTo(1.2,-3.8,-0,-3.8).curveTo(-1.1,-3.8,-1.9,-3.1).closePath();
	this.shape_8.setTransform(291.025,302.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#000000").beginStroke().moveTo(-3.9,6.6).lineTo(-3.9,4.8).curveTo(-3.2,5.2,-2.3,5.2).curveTo(-1.9,5.2,-1.5,4.8).curveTo(-1.1,4.4,-0.9,3.8).lineTo(-5.4,-7).lineTo(-3.4,-7).lineTo(0,1.3).lineTo(3.4,-7).lineTo(5.4,-7).lineTo(0.8,4.3).curveTo(0.2,5.7,-0.4,6.2).curveTo(-1.1,7,-2.2,7).curveTo(-3.6,7,-3.9,6.6).closePath();
	this.shape_9.setTransform(279.175,304.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#000000").beginStroke().moveTo(-4,4.5).curveTo(-4.9,3.7,-4.9,2.5).curveTo(-4.9,1.2,-4,0.4).curveTo(-3.1,-0.6,-1.4,-0.8).curveTo(-0.3,-1,0.6,-1.3).curveTo(1.8,-1.6,2.2,-1.9).curveTo(2.2,-2.6,1.7,-3.2).curveTo(1.1,-3.8,0.1,-3.8).curveTo(-1.2,-3.8,-1.8,-3.2).curveTo(-2.2,-2.8,-2.3,-2.2).lineTo(-4.4,-2.2).curveTo(-4.1,-3.5,-3.2,-4.4).curveTo(-2.2,-5.4,-0.2,-5.4).curveTo(2.2,-5.4,3.2,-4.4).curveTo(4.1,-3.5,4.1,-2.3).lineTo(4.1,3.7).curveTo(4.1,4.7,4.9,5.2).lineTo(2.6,5.2).curveTo(2.2,4.9,2.2,4).curveTo(0.8,5.4,-1.3,5.4).curveTo(-3.1,5.4,-4,4.5).closePath().moveTo(1.2,0.2).lineTo(-1.2,0.7).curveTo(-2,0.9,-2.3,1.3).curveTo(-2.8,1.8,-2.8,2.3).curveTo(-2.8,3,-2.3,3.5).curveTo(-2.1,3.7,-1.1,3.7).curveTo(0.5,3.7,1.5,2.7).curveTo(2.2,2.1,2.2,1.8).lineTo(2.2,-0.1).lineTo(1.2,0.2).closePath();
	this.shape_10.setTransform(267.825,302.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-8).lineTo(0.9,-8).lineTo(0.9,8).closePath();
	this.shape_11.setTransform(259.575,299.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#000000").beginStroke().moveTo(-5.4,0.7).lineTo(-5.4,-0.8).lineTo(5.4,-0.8).lineTo(5.4,0.7).closePath();
	this.shape_12.setTransform(251.05,299.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,7.9).lineTo(-0.9,-2.5).lineTo(0.9,-2.5).lineTo(0.9,7.9).closePath().moveTo(-0.9,-5.6).lineTo(-0.9,-7.9).lineTo(0.9,-7.9).lineTo(0.9,-5.6).closePath();
	this.shape_13.setTransform(242.525,299.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,6.3).curveTo(-1.8,5.4,-1.8,4.3).lineTo(-1.8,-2).lineTo(-4.1,-2).lineTo(-4.1,-3.5).lineTo(-1.8,-3.5).lineTo(-1.8,-7.2).lineTo(0.1,-7.2).lineTo(0.1,-3.5).lineTo(3.2,-3.5).lineTo(3.2,-2).lineTo(0.1,-2).lineTo(0.1,4.1).curveTo(0.1,4.7,0.5,5.1).curveTo(0.9,5.5,1.7,5.5).curveTo(3.1,5.5,4.1,4.8).lineTo(4.1,6.6).curveTo(3.1,7.2,1.8,7.2).curveTo(-0,7.2,-0.9,6.3).closePath();
	this.shape_14.setTransform(235.625,300.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-8).lineTo(0.9,-8).lineTo(0.9,8).closePath();
	this.shape_15.setTransform(229.025,299.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#000000").beginStroke().moveTo(-3.8,4.5).curveTo(-4.6,3.7,-4.6,2.3).lineTo(-4.6,-5.3).lineTo(-2.7,-5.3).lineTo(-2.7,1.7).curveTo(-2.7,2.9,-2.2,3.4).curveTo(-1.7,3.8,-0.8,3.8).curveTo(0.4,3.8,1.3,2.9).curveTo(2.7,1.5,2.7,-0).lineTo(2.7,-5.3).lineTo(4.6,-5.3).lineTo(4.6,5.1).lineTo(2.7,5.1).lineTo(2.7,3.3).curveTo(1.2,5.3,-1,5.4).curveTo(-2.9,5.4,-3.8,4.5).closePath();
	this.shape_16.setTransform(220.5,302.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#000000").beginStroke().moveTo(5,8).lineTo(5,-4.3).lineTo(0.7,8).lineTo(-0.8,8).lineTo(-5.1,-4.3).lineTo(-5.1,8).lineTo(-7.2,8).lineTo(-7.2,-8).lineTo(-4.3,-8).lineTo(-0,4.4).lineTo(4.3,-8).lineTo(7.2,-8).lineTo(7.2,8).closePath();
	this.shape_17.setTransform(205.625,299.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#000000").beginStroke().moveTo(2.7,5.3).lineTo(2.7,-1.9).curveTo(2.7,-2.7,2.1,-3.3).curveTo(1.6,-3.8,0.5,-3.8).curveTo(-0.4,-3.8,-1.3,-2.9).curveTo(-2.7,-1.5,-2.7,0.1).lineTo(-2.7,5.3).lineTo(-4.6,5.3).lineTo(-4.6,-5.2).lineTo(-2.7,-5.2).lineTo(-2.7,-3.3).curveTo(-1.1,-5.3,0.9,-5.3).curveTo(2.7,-5.3,3.9,-4.2).curveTo(4.6,-3.5,4.6,-2.4).lineTo(4.6,5.3).closePath();
	this.shape_18.setTransform(175.7,169.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#000000").beginStroke().moveTo(-3.5,4).curveTo(-5,2.4,-5,-0).curveTo(-5,-2.4,-3.5,-4).curveTo(-2.1,-5.4,0,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(5,-2.4,5.1,-0).curveTo(5,2.4,3.4,4).curveTo(2,5.4,0,5.4).curveTo(-2.1,5.4,-3.5,4).closePath().moveTo(-1.9,-3).curveTo(-3,-1.9,-3,-0).curveTo(-3,1.9,-2,2.9).curveTo(-1.1,3.7,0,3.7).curveTo(1.1,3.7,1.9,2.9).curveTo(3,1.9,3,-0).curveTo(3,-1.9,1.8,-3).curveTo(1.1,-3.8,0,-3.8).curveTo(-1.2,-3.8,-1.9,-3).closePath();
	this.shape_19.setTransform(163.6,169.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,7.9).lineTo(-0.9,-2.5).lineTo(0.9,-2.5).lineTo(0.9,7.9).closePath().moveTo(-0.9,-5.6).lineTo(-0.9,-7.9).lineTo(0.9,-7.9).lineTo(0.9,-5.6).closePath();
	this.shape_20.setTransform(154.975,166.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,6.3).curveTo(-1.8,5.4,-1.8,4.3).lineTo(-1.8,-2).lineTo(-4.1,-2).lineTo(-4.1,-3.5).lineTo(-1.8,-3.5).lineTo(-1.8,-7.2).lineTo(0.1,-7.2).lineTo(0.1,-3.5).lineTo(3.2,-3.5).lineTo(3.2,-2).lineTo(0.1,-2).lineTo(0.1,4.1).curveTo(0.1,4.7,0.5,5.1).curveTo(0.9,5.5,1.7,5.5).curveTo(3.1,5.5,4.1,4.8).lineTo(4.1,6.6).curveTo(3.1,7.2,1.8,7.2).curveTo(-0,7.2,-0.9,6.3).closePath();
	this.shape_21.setTransform(148.075,167.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,7.9).lineTo(-0.9,-2.5).lineTo(0.9,-2.5).lineTo(0.9,7.9).closePath().moveTo(-0.9,-5.6).lineTo(-0.9,-7.9).lineTo(0.9,-7.9).lineTo(0.9,-5.6).closePath();
	this.shape_22.setTransform(141.475,166.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#000000").beginStroke().moveTo(-3,7).curveTo(-4.7,5.3,-4.8,2.7).curveTo(-4.7,-0.2,-3.2,-1.7).curveTo(-2,-2.9,-0.3,-2.8).curveTo(1.8,-2.9,2.8,-1.2).lineTo(2.8,-8.1).lineTo(4.8,-8.1).lineTo(4.8,7.9).lineTo(2.8,7.9).lineTo(2.8,6.6).curveTo(1.9,8.1,0,8.1).curveTo(-1.9,8.1,-3,7).closePath().moveTo(-1.8,-0.4).curveTo(-2.6,0.5,-2.7,2.7).curveTo(-2.6,4.8,-1.7,5.7).curveTo(-1,6.4,-0.1,6.4).curveTo(1.1,6.4,1.8,5.6).curveTo(2.8,4.6,2.8,2.7).curveTo(2.8,0.7,1.7,-0.4).curveTo(1,-1.2,-0.1,-1.1).curveTo(-1,-1.2,-1.8,-0.4).closePath();
	this.shape_23.setTransform(133,166.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#000000").beginStroke().moveTo(-3,7).curveTo(-4.8,5.3,-4.7,2.7).curveTo(-4.8,-0.2,-3.3,-1.7).curveTo(-2,-2.9,-0.3,-2.8).curveTo(1.8,-2.9,2.8,-1.2).lineTo(2.8,-8.1).lineTo(4.7,-8.1).lineTo(4.7,7.9).lineTo(2.8,7.9).lineTo(2.8,6.6).curveTo(1.8,8.1,0,8.1).curveTo(-1.9,8.1,-3,7).closePath().moveTo(-1.8,-0.4).curveTo(-2.7,0.5,-2.7,2.7).curveTo(-2.7,4.8,-1.7,5.7).curveTo(-1,6.4,-0.1,6.4).curveTo(1.1,6.4,1.8,5.6).curveTo(2.9,4.6,2.8,2.7).curveTo(2.9,0.7,1.7,-0.4).curveTo(1,-1.2,-0.1,-1.1).curveTo(-1,-1.2,-1.8,-0.4).closePath();
	this.shape_24.setTransform(121.1,166.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#000000").beginStroke().moveTo(5,8.1).lineTo(3.1,3.2).lineTo(-3.1,3.2).lineTo(-5,8.1).lineTo(-7.3,8.1).lineTo(-1,-8.1).lineTo(1,-8.1).lineTo(7.3,8.1).closePath().moveTo(-2.4,1.4).lineTo(2.4,1.4).lineTo(-0,-5).closePath();
	this.shape_25.setTransform(107.55,166.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#000000").beginStroke().moveTo(2.7,5.3).lineTo(2.7,-1.9).curveTo(2.7,-2.7,2.2,-3.3).curveTo(1.6,-3.8,0.6,-3.8).curveTo(-0.4,-3.8,-1.3,-2.9).curveTo(-2.7,-1.5,-2.7,0.1).lineTo(-2.7,5.3).lineTo(-4.6,5.3).lineTo(-4.6,-5.2).lineTo(-2.7,-5.2).lineTo(-2.7,-3.3).curveTo(-1,-5.3,0.8,-5.3).curveTo(2.7,-5.3,3.8,-4.2).curveTo(4.6,-3.5,4.6,-2.4).lineTo(4.6,5.3).closePath();
	this.shape_26.setTransform(429.9,169.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,4).curveTo(-5,2.4,-5.1,-0).curveTo(-5,-2.4,-3.4,-4).curveTo(-2,-5.4,-0,-5.4).curveTo(2.1,-5.4,3.5,-4).curveTo(5,-2.4,5,-0).curveTo(5,2.4,3.5,4).curveTo(2.1,5.4,-0,5.4).curveTo(-2,5.4,-3.4,4).closePath().moveTo(-1.9,-3).curveTo(-3,-1.9,-3,-0).curveTo(-3,1.9,-1.9,2.9).curveTo(-1.2,3.7,-0,3.7).curveTo(1.1,3.7,2,2.9).curveTo(3,1.9,3,-0).curveTo(3,-1.9,1.9,-3).curveTo(1.1,-3.8,-0,-3.8).curveTo(-1.1,-3.8,-1.9,-3).closePath();
	this.shape_27.setTransform(417.8,169.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,7.9).lineTo(-0.9,-2.5).lineTo(0.9,-2.5).lineTo(0.9,7.9).closePath().moveTo(-0.9,-5.6).lineTo(-0.9,-7.9).lineTo(0.9,-7.9).lineTo(0.9,-5.6).closePath();
	this.shape_28.setTransform(409.175,166.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,6.3).curveTo(-1.8,5.4,-1.8,4.3).lineTo(-1.8,-2).lineTo(-4.1,-2).lineTo(-4.1,-3.5).lineTo(-1.8,-3.5).lineTo(-1.8,-7.2).lineTo(0.1,-7.2).lineTo(0.1,-3.5).lineTo(3.2,-3.5).lineTo(3.2,-2).lineTo(0.1,-2).lineTo(0.1,4.1).curveTo(0.1,4.7,0.5,5.1).curveTo(0.9,5.5,1.7,5.5).curveTo(3.1,5.5,4.1,4.8).lineTo(4.1,6.6).curveTo(3.1,7.2,1.8,7.2).curveTo(-0,7.2,-0.9,6.3).closePath();
	this.shape_29.setTransform(402.275,167.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#000000").beginStroke().moveTo(-4,4.5).curveTo(-4.9,3.7,-4.9,2.5).curveTo(-4.9,1.2,-4,0.4).curveTo(-3.1,-0.6,-1.4,-0.8).curveTo(-0.3,-1,0.6,-1.3).curveTo(1.8,-1.6,2.2,-1.9).curveTo(2.2,-2.6,1.7,-3.2).curveTo(1.1,-3.8,0.1,-3.8).curveTo(-1.2,-3.8,-1.8,-3.2).curveTo(-2.2,-2.8,-2.3,-2.2).lineTo(-4.4,-2.2).curveTo(-4.1,-3.5,-3.2,-4.4).curveTo(-2.2,-5.4,-0.2,-5.4).curveTo(2.2,-5.4,3.2,-4.4).curveTo(4.1,-3.5,4.1,-2.3).lineTo(4.1,3.7).curveTo(4.1,4.7,4.9,5.2).lineTo(2.6,5.2).curveTo(2.2,4.9,2.2,4).curveTo(0.8,5.4,-1.3,5.4).curveTo(-3.1,5.4,-4,4.5).closePath().moveTo(1.2,0.2).lineTo(-1.2,0.7).curveTo(-2,0.9,-2.3,1.3).curveTo(-2.8,1.8,-2.8,2.3).curveTo(-2.8,3,-2.3,3.5).curveTo(-2.1,3.7,-1.1,3.7).curveTo(0.5,3.7,1.5,2.7).curveTo(2.2,2.1,2.2,1.8).lineTo(2.2,-0.1).lineTo(1.2,0.2).closePath();
	this.shape_30.setTransform(392.475,169.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#000000").beginStroke().moveTo(-3.3,4.1).curveTo(-4.9,2.4,-4.9,-0).curveTo(-4.9,-2.5,-3.4,-4).curveTo(-2,-5.4,0.1,-5.4).curveTo(2.3,-5.4,3.4,-4.3).curveTo(4.5,-3.3,4.7,-1.8).lineTo(2.6,-1.8).curveTo(2.5,-2.5,1.9,-3.2).curveTo(1.2,-3.8,0.2,-3.8).curveTo(-1,-3.8,-1.7,-3).curveTo(-2.9,-1.9,-2.9,0.1).curveTo(-2.9,2,-1.8,3).curveTo(-1.1,3.7,0.1,3.7).curveTo(1.4,3.7,2.1,3).curveTo(2.9,2.2,2.9,1).lineTo(4.9,1).curveTo(4.8,3,3.6,4.2).curveTo(2.4,5.4,0.1,5.4).curveTo(-1.9,5.4,-3.3,4.1).closePath();
	this.shape_31.setTransform(380.8,169.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,7.9).lineTo(-0.9,-2.5).lineTo(0.9,-2.5).lineTo(0.9,7.9).closePath().moveTo(-0.9,-5.6).lineTo(-0.9,-7.9).lineTo(0.9,-7.9).lineTo(0.9,-5.6).closePath();
	this.shape_32.setTransform(372.225,166.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-8).lineTo(0.9,-8).lineTo(0.9,8).closePath();
	this.shape_33.setTransform(367.175,166.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#000000").beginStroke().moveTo(-4.7,7.1).lineTo(-4.7,-6.9).lineTo(-2.8,-6.9).lineTo(-2.8,-5.7).curveTo(-1.7,-7.1,0,-7.1).curveTo(2,-7.1,3.3,-5.9).curveTo(4.7,-4.4,4.7,-1.7).curveTo(4.7,1.2,3.3,2.7).curveTo(2,3.9,0,3.9).curveTo(-1.9,3.9,-2.8,2.4).lineTo(-2.8,7.1).closePath().moveTo(-1.9,-4.6).curveTo(-2.8,-3.6,-2.8,-2.3).lineTo(-2.8,-1).curveTo(-2.8,0.3,-1.8,1.3).curveTo(-1,2.2,0,2.2).curveTo(1,2.2,1.7,1.5).curveTo(2.7,0.5,2.7,-1.7).curveTo(2.7,-3.7,1.7,-4.7).curveTo(1,-5.4,0,-5.4).curveTo(-1.1,-5.4,-1.9,-4.6).closePath();
	this.shape_34.setTransform(358.7,170.775);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,7.9).lineTo(-0.9,-2.5).lineTo(0.9,-2.5).lineTo(0.9,7.9).closePath().moveTo(-0.9,-5.6).lineTo(-0.9,-7.9).lineTo(0.9,-7.9).lineTo(0.9,-5.6).closePath();
	this.shape_35.setTransform(350.225,166.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,6.3).curveTo(-1.8,5.4,-1.8,4.3).lineTo(-1.8,-2).lineTo(-4.1,-2).lineTo(-4.1,-3.5).lineTo(-1.8,-3.5).lineTo(-1.8,-7.2).lineTo(0.1,-7.2).lineTo(0.1,-3.5).lineTo(3.2,-3.5).lineTo(3.2,-2).lineTo(0.1,-2).lineTo(0.1,4.1).curveTo(0.1,4.7,0.5,5.1).curveTo(0.9,5.5,1.7,5.5).curveTo(3.1,5.5,4.1,4.8).lineTo(4.1,6.6).curveTo(3.1,7.2,1.8,7.2).curveTo(-0,7.2,-0.9,6.3).closePath();
	this.shape_36.setTransform(343.325,167.375);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-8).lineTo(0.9,-8).lineTo(0.9,8).closePath();
	this.shape_37.setTransform(336.725,166.35);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#000000").beginStroke().moveTo(-3.8,4.5).curveTo(-4.6,3.6,-4.6,2.3).lineTo(-4.6,-5.3).lineTo(-2.7,-5.3).lineTo(-2.7,1.7).curveTo(-2.7,2.8,-2.1,3.4).curveTo(-1.7,3.8,-0.9,3.9).curveTo(0.4,3.9,1.3,2.9).curveTo(2.7,1.5,2.7,-0).lineTo(2.7,-5.3).lineTo(4.6,-5.3).lineTo(4.6,5.1).lineTo(2.7,5.1).lineTo(2.7,3.3).curveTo(1.2,5.3,-1,5.3).curveTo(-2.9,5.4,-3.8,4.5).closePath();
	this.shape_38.setTransform(328.2,169.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#000000").beginStroke().moveTo(5,8).lineTo(5,-4.3).lineTo(0.7,8).lineTo(-0.8,8).lineTo(-5.1,-4.3).lineTo(-5.1,8).lineTo(-7.2,8).lineTo(-7.2,-8).lineTo(-4.3,-8).lineTo(-0,4.5).lineTo(4.3,-8).lineTo(7.2,-8).lineTo(7.2,8).closePath();
	this.shape_39.setTransform(313.325,166.35);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#000000").beginStroke().moveTo(-3.5,4.3).curveTo(-4.4,3.4,-4.4,2).lineTo(-2.6,2).curveTo(-2.5,2.8,-2.1,3.2).curveTo(-1.4,3.8,-0.1,3.8).curveTo(1.5,3.8,2,3.3).curveTo(2.4,2.9,2.4,2.3).curveTo(2.4,2,1.9,1.5).curveTo(1.6,1.1,0.8,0.9).curveTo(-1,0.6,-1.8,0.3).curveTo(-2.9,-0,-3.3,-0.5).curveTo(-4.2,-1.3,-4.2,-2.3).curveTo(-4.2,-3.5,-3.3,-4.3).curveTo(-2.1,-5.4,-0.1,-5.4).curveTo(2.2,-5.4,3.2,-4.4).curveTo(4.1,-3.5,4.1,-2.3).lineTo(2.3,-2.3).curveTo(2.1,-3,1.8,-3.3).curveTo(1.3,-3.8,-0.2,-3.8).curveTo(-1.1,-3.8,-1.7,-3.3).curveTo(-2.2,-2.8,-2.1,-2.3).curveTo(-2.1,-1.9,-1.9,-1.6).curveTo(-1.5,-1.2,0.5,-0.8).lineTo(2.5,-0.2).curveTo(3.3,0.1,3.6,0.5).curveTo(4.4,1.2,4.4,2.2).curveTo(4.4,3.4,3.5,4.3).curveTo(2.3,5.4,0,5.4).curveTo(-2.3,5.4,-3.5,4.3).closePath();
	this.shape_40.setTransform(288.05,131.125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-8).lineTo(0.9,-8).lineTo(0.9,8).closePath();
	this.shape_41.setTransform(279.975,128.35);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,7.9).lineTo(-0.9,-2.6).lineTo(0.9,-2.6).lineTo(0.9,7.9).closePath().moveTo(-0.9,-5.6).lineTo(-0.9,-8).lineTo(0.9,-8).lineTo(0.9,-5.6).closePath();
	this.shape_42.setTransform(274.925,128.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#000000").beginStroke().moveTo(-4,4.5).curveTo(-4.9,3.7,-4.9,2.5).curveTo(-4.9,1.2,-4,0.4).curveTo(-3.1,-0.6,-1.4,-0.8).curveTo(-0.3,-1,0.6,-1.3).curveTo(1.8,-1.6,2.2,-1.9).curveTo(2.2,-2.6,1.7,-3.2).curveTo(1.1,-3.8,0.1,-3.8).curveTo(-1.2,-3.8,-1.8,-3.2).curveTo(-2.2,-2.8,-2.3,-2.2).lineTo(-4.4,-2.2).curveTo(-4.1,-3.5,-3.2,-4.4).curveTo(-2.2,-5.4,-0.2,-5.4).curveTo(2.2,-5.4,3.2,-4.4).curveTo(4.1,-3.5,4.1,-2.3).lineTo(4.1,3.7).curveTo(4.1,4.7,4.9,5.2).lineTo(2.6,5.2).curveTo(2.2,4.9,2.2,4).curveTo(0.8,5.4,-1.3,5.4).curveTo(-3.1,5.4,-4,4.5).closePath().moveTo(1.2,0.2).lineTo(-1.2,0.7).curveTo(-2,0.9,-2.3,1.3).curveTo(-2.8,1.8,-2.8,2.3).curveTo(-2.8,3,-2.3,3.5).curveTo(-2.1,3.7,-1.1,3.7).curveTo(0.5,3.7,1.5,2.7).curveTo(2.2,2.1,2.2,1.8).lineTo(2.2,-0.1).lineTo(1.2,0.2).closePath();
	this.shape_43.setTransform(266.675,131.125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,6.3).curveTo(-1.8,5.4,-1.8,4.3).lineTo(-1.8,-2).lineTo(-4.1,-2).lineTo(-4.1,-3.5).lineTo(-1.8,-3.5).lineTo(-1.8,-7.2).lineTo(0.1,-7.2).lineTo(0.1,-3.5).lineTo(3.2,-3.5).lineTo(3.2,-2).lineTo(0.1,-2).lineTo(0.1,4.1).curveTo(0.1,4.7,0.5,5.1).curveTo(0.9,5.5,1.7,5.5).curveTo(3.1,5.5,4.1,4.8).lineTo(4.1,6.6).curveTo(3.1,7.2,1.8,7.2).curveTo(-0,7.2,-0.9,6.3).closePath();
	this.shape_44.setTransform(256.575,129.375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,4).curveTo(-4.9,2.5,-4.9,-0).curveTo(-4.9,-2.5,-3.3,-4.1).curveTo(-2,-5.4,0.1,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(4.8,-2.7,4.8,-0).lineTo(-2.8,-0).curveTo(-2.8,2,-1.9,2.9).curveTo(-1.1,3.7,0.3,3.7).curveTo(1.6,3.7,2.1,3.2).curveTo(2.8,2.5,2.8,1.7).lineTo(4.9,1.7).curveTo(4.5,3.4,3.6,4.2).curveTo(2.4,5.4,0.3,5.4).curveTo(-2,5.4,-3.4,4).closePath().moveTo(-1.9,-3.1).curveTo(-2.6,-2.4,-2.7,-1.5).lineTo(2.6,-1.5).curveTo(2.6,-2.4,1.9,-3.2).curveTo(1.2,-3.8,-0,-3.8).curveTo(-1.1,-3.8,-1.9,-3.1).closePath();
	this.shape_45.setTransform(246.525,131.125);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#000000").beginStroke().moveTo(-6.2,8).lineTo(-6.2,-8).lineTo(-0.6,-8).curveTo(2.2,-8,4.2,-6).curveTo(6.2,-4,6.2,0.2).curveTo(6.2,4.1,4.1,6.3).curveTo(2.3,8,-0.6,8).closePath().moveTo(-4.1,6.3).lineTo(-0.7,6.3).curveTo(1.1,6.3,2.2,5.1).curveTo(4,3.3,4,0.2).curveTo(4,-3.3,2.3,-4.9).curveTo(1,-6.2,-0.7,-6.2).lineTo(-4.1,-6.2).closePath();
	this.shape_46.setTransform(232.775,128.35);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#000000").beginStroke().moveTo(2.7,5.3).lineTo(2.7,-1.9).curveTo(2.7,-2.7,2.1,-3.3).curveTo(1.6,-3.8,0.5,-3.8).curveTo(-0.4,-3.8,-1.3,-2.9).curveTo(-2.7,-1.5,-2.7,0.1).lineTo(-2.7,5.3).lineTo(-4.6,5.3).lineTo(-4.6,-5.2).lineTo(-2.7,-5.2).lineTo(-2.7,-3.3).curveTo(-1.1,-5.3,0.9,-5.3).curveTo(2.7,-5.3,3.9,-4.2).curveTo(4.6,-3.5,4.6,-2.4).lineTo(4.6,5.3).closePath();
	this.shape_47.setTransform(447.85,20.025);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#000000").beginStroke().moveTo(-3.5,4).curveTo(-5,2.4,-5,-0).curveTo(-5,-2.4,-3.5,-4).curveTo(-2.1,-5.4,0,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(5,-2.4,5.1,-0).curveTo(5,2.4,3.4,4).curveTo(2,5.4,0,5.4).curveTo(-2.1,5.4,-3.5,4).closePath().moveTo(-1.9,-3).curveTo(-3,-1.9,-3,-0).curveTo(-3,1.9,-2,2.9).curveTo(-1.1,3.7,0,3.7).curveTo(1.1,3.7,1.9,2.9).curveTo(3,1.9,3,-0).curveTo(3,-1.9,1.8,-3).curveTo(1.1,-3.8,0,-3.8).curveTo(-1.2,-3.8,-1.9,-3).closePath();
	this.shape_48.setTransform(435.75,20.125);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-2.6).lineTo(0.9,-2.6).lineTo(0.9,8).closePath().moveTo(-0.9,-5.5).lineTo(-0.9,-8).lineTo(0.9,-8).lineTo(0.9,-5.5).closePath();
	this.shape_49.setTransform(427.125,17.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,6.3).curveTo(-1.8,5.4,-1.8,4.3).lineTo(-1.8,-2).lineTo(-4.1,-2).lineTo(-4.1,-3.5).lineTo(-1.8,-3.5).lineTo(-1.8,-7.2).lineTo(0.1,-7.2).lineTo(0.1,-3.5).lineTo(3.2,-3.5).lineTo(3.2,-2).lineTo(0.1,-2).lineTo(0.1,4.1).curveTo(0.1,4.7,0.5,5.1).curveTo(0.9,5.5,1.7,5.5).curveTo(3.1,5.5,4.1,4.8).lineTo(4.1,6.6).curveTo(3.1,7.2,1.8,7.2).curveTo(-0,7.2,-0.9,6.3).closePath();
	this.shape_50.setTransform(420.225,18.375);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#000000").beginStroke().moveTo(-4,4.5).curveTo(-4.9,3.7,-4.9,2.5).curveTo(-4.9,1.2,-4,0.4).curveTo(-3.1,-0.6,-1.4,-0.8).curveTo(-0.3,-1,0.6,-1.3).curveTo(1.8,-1.6,2.2,-1.9).curveTo(2.2,-2.6,1.7,-3.2).curveTo(1.1,-3.8,0.1,-3.8).curveTo(-1.2,-3.8,-1.8,-3.2).curveTo(-2.2,-2.8,-2.3,-2.2).lineTo(-4.4,-2.2).curveTo(-4.1,-3.5,-3.2,-4.4).curveTo(-2.2,-5.4,-0.2,-5.4).curveTo(2.2,-5.4,3.2,-4.4).curveTo(4.1,-3.5,4.1,-2.3).lineTo(4.1,3.7).curveTo(4.1,4.7,4.9,5.2).lineTo(2.6,5.2).curveTo(2.2,4.9,2.2,4).curveTo(0.8,5.4,-1.3,5.4).curveTo(-3.1,5.4,-4,4.5).closePath().moveTo(1.2,0.2).lineTo(-1.2,0.7).curveTo(-2,0.9,-2.3,1.3).curveTo(-2.8,1.8,-2.8,2.3).curveTo(-2.8,3,-2.3,3.5).curveTo(-2.1,3.7,-1.1,3.7).curveTo(0.5,3.7,1.5,2.7).curveTo(2.2,2.1,2.2,1.8).lineTo(2.2,-0.1).lineTo(1.2,0.2).closePath();
	this.shape_51.setTransform(410.425,20.125);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#000000").beginStroke().moveTo(-3.5,5.3).lineTo(-3.5,-5.2).lineTo(-1.6,-5.2).lineTo(-1.6,-2.5).curveTo(-1.1,-3.3,-0.6,-3.8).curveTo(0.9,-5.3,3.5,-5.3).lineTo(3.5,-3.3).lineTo(2.4,-3.4).curveTo(1,-3.4,-0.2,-2.2).curveTo(-1.2,-1.1,-1.6,0).lineTo(-1.6,5.3).closePath();
	this.shape_52.setTransform(401.125,20.025);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#000000").beginStroke().moveTo(-3.7,4.5).curveTo(-4.6,3.7,-4.6,2.4).lineTo(-4.6,-5.4).lineTo(-2.7,-5.4).lineTo(-2.7,1.7).curveTo(-2.7,2.9,-2.2,3.4).curveTo(-1.7,3.9,-0.8,3.8).curveTo(0.4,3.8,1.3,2.9).curveTo(2.7,1.5,2.7,-0).lineTo(2.7,-5.4).lineTo(4.6,-5.4).lineTo(4.6,5.2).lineTo(2.7,5.2).lineTo(2.7,3.3).curveTo(1.2,5.4,-0.9,5.4).curveTo(-2.9,5.4,-3.7,4.5).closePath();
	this.shape_53.setTransform(390.35,20.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,6.3).curveTo(-1.8,5.4,-1.8,4.3).lineTo(-1.8,-2).lineTo(-4.1,-2).lineTo(-4.1,-3.5).lineTo(-1.8,-3.5).lineTo(-1.8,-7.2).lineTo(0.1,-7.2).lineTo(0.1,-3.5).lineTo(3.2,-3.5).lineTo(3.2,-2).lineTo(0.1,-2).lineTo(0.1,4.1).curveTo(0.1,4.7,0.5,5.1).curveTo(0.9,5.5,1.7,5.5).curveTo(3.1,5.5,4.1,4.8).lineTo(4.1,6.6).curveTo(3.1,7.2,1.8,7.2).curveTo(-0,7.2,-0.9,6.3).closePath();
	this.shape_54.setTransform(379.975,18.375);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#000000").beginStroke().moveTo(-4,4.5).curveTo(-4.9,3.7,-4.9,2.5).curveTo(-4.9,1.2,-4,0.4).curveTo(-3.1,-0.6,-1.4,-0.8).curveTo(-0.3,-1,0.6,-1.3).curveTo(1.8,-1.6,2.2,-1.9).curveTo(2.2,-2.6,1.7,-3.2).curveTo(1.1,-3.8,0.1,-3.8).curveTo(-1.2,-3.8,-1.8,-3.2).curveTo(-2.2,-2.8,-2.3,-2.2).lineTo(-4.4,-2.2).curveTo(-4.1,-3.5,-3.2,-4.4).curveTo(-2.2,-5.4,-0.2,-5.4).curveTo(2.2,-5.4,3.2,-4.4).curveTo(4.1,-3.5,4.1,-2.3).lineTo(4.1,3.7).curveTo(4.1,4.7,4.9,5.2).lineTo(2.6,5.2).curveTo(2.2,4.9,2.2,4).curveTo(0.8,5.4,-1.3,5.4).curveTo(-3.1,5.4,-4,4.5).closePath().moveTo(1.2,0.2).lineTo(-1.2,0.7).curveTo(-2,0.9,-2.3,1.3).curveTo(-2.8,1.8,-2.8,2.3).curveTo(-2.8,3,-2.3,3.5).curveTo(-2.1,3.7,-1.1,3.7).curveTo(0.5,3.7,1.5,2.7).curveTo(2.2,2.1,2.2,1.8).lineTo(2.2,-0.1).lineTo(1.2,0.2).closePath();
	this.shape_55.setTransform(370.175,20.125);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#000000").beginStroke().moveTo(-4.7,6.5).curveTo(-6,5.3,-6,3).lineTo(-3.8,3).curveTo(-3.8,4.6,-3,5.4).curveTo(-2,6.5,0.1,6.4).curveTo(2.1,6.5,3,5.5).curveTo(3.8,4.7,3.8,4).curveTo(3.8,3.2,3.3,2.6).curveTo(2.8,2.1,1.8,1.6).lineTo(-0.7,0.5).lineTo(-3.4,-0.7).curveTo(-4.1,-1,-4.7,-1.5).curveTo(-5.5,-2.4,-5.5,-3.8).curveTo(-5.6,-5.6,-4.3,-6.9).curveTo(-3,-8.2,-0.2,-8.2).curveTo(2.7,-8.2,4.2,-6.7).curveTo(5.5,-5.4,5.5,-3.6).lineTo(3.4,-3.6).curveTo(3.4,-4.8,2.6,-5.5).curveTo(1.7,-6.3,-0.1,-6.3).curveTo(-2,-6.3,-2.7,-5.6).curveTo(-3.4,-4.9,-3.4,-4).curveTo(-3.4,-3.3,-3,-2.9).curveTo(-2.5,-2.4,-1.3,-1.9).lineTo(3.5,0.3).curveTo(4.3,0.5,5,1.2).curveTo(5.9,2.2,6,3.6).curveTo(6,5.5,4.6,6.8).curveTo(3.2,8.2,0,8.2).curveTo(-3,8.2,-4.7,6.5).closePath();
	this.shape_56.setTransform(357.35,17.35);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#000000").beginStroke().moveTo(-3.5,4.3).curveTo(-4.4,3.4,-4.4,2).lineTo(-2.5,2).curveTo(-2.4,2.8,-2.1,3.2).curveTo(-1.4,3.8,-0.1,3.8).curveTo(1.5,3.8,2.1,3.3).curveTo(2.4,2.9,2.4,2.3).curveTo(2.4,2,2,1.5).curveTo(1.6,1.1,0.7,0.9).curveTo(-0.9,0.6,-1.8,0.3).curveTo(-2.8,-0,-3.3,-0.5).curveTo(-4.1,-1.3,-4.2,-2.3).curveTo(-4.1,-3.5,-3.3,-4.3).curveTo(-2.2,-5.4,-0.1,-5.4).curveTo(2.1,-5.4,3.1,-4.4).curveTo(4.1,-3.5,4.1,-2.3).lineTo(2.2,-2.3).curveTo(2.1,-3,1.9,-3.3).curveTo(1.3,-3.8,-0.2,-3.8).curveTo(-1.1,-3.8,-1.7,-3.3).curveTo(-2.1,-2.8,-2.2,-2.3).curveTo(-2.1,-1.9,-1.9,-1.6).curveTo(-1.5,-1.2,0.4,-0.8).lineTo(2.5,-0.2).curveTo(3.2,0.1,3.7,0.5).curveTo(4.4,1.2,4.4,2.2).curveTo(4.4,3.4,3.4,4.3).curveTo(2.4,5.4,-0,5.4).curveTo(-2.4,5.4,-3.5,4.3).closePath();
	this.shape_57.setTransform(254.8,20.125);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#000000").beginStroke().moveTo(-3.5,4.3).curveTo(-4.4,3.4,-4.4,2).lineTo(-2.6,2).curveTo(-2.4,2.8,-2.1,3.2).curveTo(-1.4,3.8,-0.1,3.8).curveTo(1.5,3.8,2,3.3).curveTo(2.4,2.9,2.4,2.3).curveTo(2.4,2,1.9,1.5).curveTo(1.6,1.1,0.8,0.9).curveTo(-1,0.6,-1.8,0.3).curveTo(-2.8,-0,-3.3,-0.5).curveTo(-4.2,-1.3,-4.2,-2.3).curveTo(-4.2,-3.5,-3.3,-4.3).curveTo(-2.1,-5.4,-0.1,-5.4).curveTo(2.2,-5.4,3.1,-4.4).curveTo(4.1,-3.5,4.1,-2.3).lineTo(2.2,-2.3).curveTo(2.1,-3,1.9,-3.3).curveTo(1.3,-3.8,-0.2,-3.8).curveTo(-1.2,-3.8,-1.7,-3.3).curveTo(-2.2,-2.8,-2.2,-2.3).curveTo(-2.2,-1.9,-1.9,-1.6).curveTo(-1.5,-1.2,0.4,-0.8).lineTo(2.5,-0.2).curveTo(3.3,0.1,3.7,0.5).curveTo(4.4,1.2,4.4,2.2).curveTo(4.4,3.4,3.5,4.3).curveTo(2.4,5.4,-0,5.4).curveTo(-2.3,5.4,-3.5,4.3).closePath();
	this.shape_58.setTransform(243.75,20.125);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,4).curveTo(-4.9,2.5,-4.9,-0).curveTo(-4.9,-2.5,-3.3,-4.1).curveTo(-2,-5.4,0.1,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(4.8,-2.7,4.8,-0).lineTo(-2.8,-0).curveTo(-2.8,2,-1.9,2.9).curveTo(-1.1,3.7,0.3,3.7).curveTo(1.6,3.7,2.1,3.2).curveTo(2.8,2.5,2.8,1.7).lineTo(4.9,1.7).curveTo(4.5,3.4,3.6,4.2).curveTo(2.4,5.4,0.3,5.4).curveTo(-2,5.4,-3.4,4).closePath().moveTo(-1.9,-3.1).curveTo(-2.6,-2.4,-2.7,-1.5).lineTo(2.6,-1.5).curveTo(2.6,-2.4,1.9,-3.2).curveTo(1.2,-3.8,-0,-3.8).curveTo(-1.1,-3.8,-1.9,-3.1).closePath();
	this.shape_59.setTransform(232.225,20.125);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#000000").beginStroke().moveTo(2.7,5.3).lineTo(2.7,-1.9).curveTo(2.7,-2.7,2.2,-3.3).curveTo(1.6,-3.8,0.6,-3.8).curveTo(-0.4,-3.8,-1.3,-2.9).curveTo(-2.7,-1.5,-2.7,0.1).lineTo(-2.7,5.3).lineTo(-4.6,5.3).lineTo(-4.6,-5.2).lineTo(-2.7,-5.2).lineTo(-2.7,-3.3).curveTo(-1,-5.3,0.8,-5.3).curveTo(2.7,-5.3,3.8,-4.2).curveTo(4.6,-3.5,4.6,-2.4).lineTo(4.6,5.3).closePath();
	this.shape_60.setTransform(220.2,20.025);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,6.3).curveTo(-1.8,5.4,-1.8,4.3).lineTo(-1.8,-2).lineTo(-4.1,-2).lineTo(-4.1,-3.5).lineTo(-1.8,-3.5).lineTo(-1.8,-7.2).lineTo(0.1,-7.2).lineTo(0.1,-3.5).lineTo(3.2,-3.5).lineTo(3.2,-2).lineTo(0.1,-2).lineTo(0.1,4.1).curveTo(0.1,4.7,0.5,5.1).curveTo(0.9,5.5,1.7,5.5).curveTo(3.1,5.5,4.1,4.8).lineTo(4.1,6.6).curveTo(3.1,7.2,1.8,7.2).curveTo(-0,7.2,-0.9,6.3).closePath();
	this.shape_61.setTransform(209.825,18.375);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#000000").beginStroke().moveTo(2.7,8).lineTo(2.7,1).curveTo(2.7,-0.1,2,-0.7).curveTo(1.6,-1.1,0.8,-1.2).curveTo(-0.3,-1.1,-1.1,-0.3).curveTo(-2.2,0.7,-2.7,2.6).lineTo(-2.7,8).lineTo(-4.6,8).lineTo(-4.6,-8).lineTo(-2.7,-8).lineTo(-2.7,-0.6).curveTo(-1.1,-2.6,0.8,-2.7).curveTo(2.7,-2.6,3.6,-1.8).curveTo(4.6,-0.8,4.6,0.5).lineTo(4.6,8).closePath();
	this.shape_62.setTransform(199.75,17.35);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#000000").beginStroke().moveTo(-4.4,6).curveTo(-5.1,5.4,-5.1,4.4).curveTo(-5.1,3.8,-4.7,3.3).curveTo(-4.2,2.9,-3.5,2.6).lineTo(-4.1,2).curveTo(-4.6,1.5,-4.7,0.8).curveTo(-4.7,-0.2,-3.2,-1).curveTo(-4.2,-2,-4.2,-3.4).curveTo(-4.2,-5,-3.2,-6.1).curveTo(-2.2,-7.1,-0.6,-7.1).curveTo(0.9,-7.1,2.1,-6.2).curveTo(2.9,-7.1,4.3,-7.1).lineTo(5.1,-7.1).lineTo(5.1,-5.3).curveTo(4,-5.8,2.6,-5.4).curveTo(3.2,-4.6,3.2,-3.4).curveTo(3.2,-1.7,2.2,-0.7).curveTo(1.3,0.2,-0.5,0.2).curveTo(-1.4,0.2,-2.4,-0.2).curveTo(-3,0.1,-3,0.5).curveTo(-3,0.6,-2.9,0.6).curveTo(-2.9,0.7,-2.9,0.8).curveTo(-2.9,0.8,-2.8,0.9).curveTo(-2.8,0.9,-2.8,1).curveTo(-2.3,1.4,-0.6,1.5).lineTo(2.6,1.7).curveTo(3.6,1.9,4,2.4).curveTo(4.8,3.1,4.8,4.2).curveTo(4.8,5.3,4,6).curveTo(3,7.1,-0.5,7.1).curveTo(-3.4,7.1,-4.4,6).closePath().moveTo(-3.1,3.5).curveTo(-3.4,3.9,-3.4,4.3).curveTo(-3.4,4.8,-3.1,5.2).curveTo(-2.4,5.8,-0.6,5.8).curveTo(1.9,5.8,2.6,5.1).curveTo(2.9,4.7,3,4.3).curveTo(2.9,4,2.7,3.7).curveTo(2.3,3.3,1.3,3.3).curveTo(-0.9,3.2,-2.1,3).curveTo(-2.8,3.2,-3.1,3.5).closePath().moveTo(-1.7,-5).curveTo(-2.4,-4.4,-2.4,-3.4).curveTo(-2.4,-2.5,-1.8,-1.9).curveTo(-1.3,-1.4,-0.5,-1.4).curveTo(0.4,-1.4,0.8,-1.8).curveTo(1.3,-2.4,1.3,-3.4).curveTo(1.3,-4.4,0.7,-5).curveTo(0.2,-5.5,-0.6,-5.5).curveTo(-1.3,-5.5,-1.7,-5).closePath();
	this.shape_63.setTransform(188.55,21.775);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-2.6).lineTo(0.9,-2.6).lineTo(0.9,8).closePath().moveTo(-0.9,-5.5).lineTo(-0.9,-8).lineTo(0.9,-8).lineTo(0.9,-5.5).closePath();
	this.shape_64.setTransform(180.175,17.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#000000").beginStroke().moveTo(-3.5,5.3).lineTo(-3.5,-5.2).lineTo(-1.6,-5.2).lineTo(-1.6,-2.5).curveTo(-1.1,-3.3,-0.6,-3.8).curveTo(0.9,-5.3,3.5,-5.3).lineTo(3.5,-3.3).lineTo(2.4,-3.4).curveTo(1,-3.4,-0.2,-2.2).curveTo(-1.2,-1.1,-1.6,0).lineTo(-1.6,5.3).closePath();
	this.shape_65.setTransform(174.075,20.025);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#000000").beginStroke().moveTo(-6.1,8).lineTo(-6.1,-8).lineTo(1.4,-8).curveTo(3.3,-8,4.5,-6.8).curveTo(5.6,-5.7,5.6,-3.8).curveTo(5.6,-2.3,4.6,-1.2).curveTo(4,-0.7,3.2,-0.4).curveTo(4.3,-0,5,0.6).curveTo(6.1,1.8,6.1,3.4).curveTo(6.1,5.5,4.7,6.9).curveTo(3.6,8,1.3,8).closePath().moveTo(-3.9,6.2).lineTo(0.8,6.2).curveTo(2.2,6.2,3,5.5).curveTo(3.9,4.6,3.8,3.4).curveTo(3.9,2.1,3.1,1.4).curveTo(2.2,0.5,0.8,0.5).lineTo(-3.9,0.5).closePath().moveTo(-3.9,-1.2).lineTo(1.1,-1.2).curveTo(2.1,-1.3,2.7,-1.9).curveTo(3.4,-2.7,3.4,-3.9).curveTo(3.4,-4.9,2.7,-5.7).curveTo(2.1,-6.2,1.3,-6.3).lineTo(-3.9,-6.3).closePath();
	this.shape_66.setTransform(161.7,17.35);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,6.3).curveTo(-1.8,5.4,-1.8,4.3).lineTo(-1.8,-2).lineTo(-4.1,-2).lineTo(-4.1,-3.5).lineTo(-1.8,-3.5).lineTo(-1.8,-7.2).lineTo(0.1,-7.2).lineTo(0.1,-3.5).lineTo(3.2,-3.5).lineTo(3.2,-2).lineTo(0.1,-2).lineTo(0.1,4.1).curveTo(0.1,4.7,0.5,5.1).curveTo(0.9,5.5,1.7,5.5).curveTo(3.1,5.5,4.1,4.8).lineTo(4.1,6.6).curveTo(3.1,7.2,1.8,7.2).curveTo(-0,7.2,-0.9,6.3).closePath();
	this.shape_67.setTransform(87.425,18.375);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,8).lineTo(-0.9,-8).lineTo(0.9,-8).lineTo(0.9,8).closePath();
	this.shape_68.setTransform(80.825,17.35);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#000000").beginStroke().moveTo(-3.7,4.5).curveTo(-4.6,3.7,-4.6,2.4).lineTo(-4.6,-5.4).lineTo(-2.7,-5.4).lineTo(-2.7,1.7).curveTo(-2.7,2.9,-2.2,3.4).curveTo(-1.7,3.9,-0.8,3.8).curveTo(0.4,3.8,1.3,2.9).curveTo(2.7,1.5,2.7,-0).lineTo(2.7,-5.4).lineTo(4.6,-5.4).lineTo(4.6,5.2).lineTo(2.7,5.2).lineTo(2.7,3.3).curveTo(1.2,5.4,-0.9,5.4).curveTo(-2.9,5.4,-3.7,4.5).closePath();
	this.shape_69.setTransform(72.3,20.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#000000").beginStroke().moveTo(-4,4.5).curveTo(-4.9,3.7,-4.9,2.5).curveTo(-4.9,1.2,-4,0.4).curveTo(-3.1,-0.6,-1.4,-0.8).curveTo(-0.3,-1,0.6,-1.3).curveTo(1.8,-1.6,2.2,-1.9).curveTo(2.2,-2.6,1.7,-3.2).curveTo(1.1,-3.8,0.1,-3.8).curveTo(-1.2,-3.8,-1.8,-3.2).curveTo(-2.2,-2.8,-2.3,-2.2).lineTo(-4.4,-2.2).curveTo(-4.1,-3.5,-3.2,-4.4).curveTo(-2.2,-5.4,-0.2,-5.4).curveTo(2.2,-5.4,3.2,-4.4).curveTo(4.1,-3.5,4.1,-2.3).lineTo(4.1,3.7).curveTo(4.1,4.7,4.9,5.2).lineTo(2.6,5.2).curveTo(2.2,4.9,2.2,4).curveTo(0.8,5.4,-1.3,5.4).curveTo(-3.1,5.4,-4,4.5).closePath().moveTo(1.2,0.2).lineTo(-1.2,0.7).curveTo(-2,0.9,-2.3,1.3).curveTo(-2.8,1.8,-2.8,2.3).curveTo(-2.8,3,-2.3,3.5).curveTo(-2.1,3.7,-1.1,3.7).curveTo(0.5,3.7,1.5,2.7).curveTo(2.2,2.1,2.2,1.8).lineTo(2.2,-0.1).lineTo(1.2,0.2).closePath();
	this.shape_70.setTransform(60.575,20.125);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#000000").beginStroke().moveTo(-1.8,8.1).lineTo(-1.8,-0.9).lineTo(-4.1,-0.9).lineTo(-4.1,-2.4).lineTo(-1.8,-2.4).lineTo(-1.8,-5).curveTo(-1.8,-6.3,-1,-7.2).curveTo(-0,-8.1,1.6,-8.1).curveTo(2.8,-8.1,4.1,-7.6).lineTo(4.1,-5.7).curveTo(2.8,-6.4,1.9,-6.4).curveTo(0.9,-6.4,0.4,-5.9).curveTo(0.1,-5.5,0.1,-5).lineTo(0.1,-2.4).lineTo(3.2,-2.4).lineTo(3.2,-0.9).lineTo(0.1,-0.9).lineTo(0.1,8.1).closePath();
	this.shape_71.setTransform(51.625,17.25);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,4).curveTo(-4.9,2.5,-4.9,-0).curveTo(-4.9,-2.5,-3.3,-4.1).curveTo(-2,-5.4,0.1,-5.4).curveTo(2,-5.4,3.4,-4).curveTo(4.8,-2.7,4.8,-0).lineTo(-2.8,-0).curveTo(-2.8,2,-1.9,2.9).curveTo(-1.1,3.7,0.3,3.7).curveTo(1.6,3.7,2.1,3.2).curveTo(2.8,2.5,2.8,1.7).lineTo(4.9,1.7).curveTo(4.5,3.4,3.6,4.2).curveTo(2.4,5.4,0.3,5.4).curveTo(-2,5.4,-3.4,4).closePath().moveTo(-1.9,-3.1).curveTo(-2.6,-2.4,-2.7,-1.5).lineTo(2.6,-1.5).curveTo(2.6,-2.4,1.9,-3.2).curveTo(1.2,-3.8,-0,-3.8).curveTo(-1.1,-3.8,-1.9,-3.1).closePath();
	this.shape_72.setTransform(41.575,20.125);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#000000").beginStroke().moveTo(-6.2,8).lineTo(-6.2,-8).lineTo(-0.6,-8).curveTo(2.2,-8,4.2,-6).curveTo(6.2,-4,6.2,0.1).curveTo(6.2,4.1,4.1,6.2).curveTo(2.3,8,-0.6,8).closePath().moveTo(-4.1,6.2).lineTo(-0.7,6.2).curveTo(1.1,6.2,2.2,5.1).curveTo(4,3.4,4,0.1).curveTo(4,-3.2,2.3,-4.9).curveTo(1,-6.3,-0.7,-6.3).lineTo(-4.1,-6.3).closePath();
	this.shape_73.setTransform(27.825,17.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(50));

	// レイヤー_8
	this.instance = new lib.symbol5();
	this.instance.setTransform(384.05,354.55,1,1,0,0,0,28,27.9);
	this.instance.alpha = 0.6211;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));
	this.instance.addEventListener("tick", AdobeAn.handleFilterCache);

	// レイヤー_2
	this.instance_1 = new lib.symbol6("synched",0);
	this.instance_1.setTransform(430.45,219.7,1,1,0,0,0,28,27.9);
	var instance_1Filter_1 = new cjs.ColorFilter(1,-1,-1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-2,-2,60,60);

	this.instance_2 = new lib.symbol6("synched",0);
	this.instance_2.setTransform(345.2,219.7,1,1,0,0,0,28,27.9);
	var instance_2Filter_2 = new cjs.ColorFilter(1,1,-1,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_2];
	this.instance_2.cache(-2,-2,60,60);

	this.instance_3 = new lib.symbol6("synched",0);
	this.instance_3.setTransform(184,219.7,1,1,0,0,0,28,27.9);
	var instance_3Filter_3 = new cjs.ColorFilter(1,1,1,1,0,-255,0,0);
	this.instance_3.filters = [instance_3Filter_3];
	this.instance_3.cache(-2,-2,60,60);

	this.instance_4 = new lib.symbol6("synched",0);
	this.instance_4.setTransform(98.75,219.7,1,1,0,0,0,28,27.9);
	var instance_4Filter_4 = new cjs.ColorFilter(1,1,1,1,0,255,0,0);
	this.instance_4.filters = [instance_4Filter_4];
	this.instance_4.cache(-2,-2,60,60);

	this.instance_5 = new lib.symbol6("synched",0);
	this.instance_5.setTransform(411,69.4,1,1,0,0,0,28,27.9);
	var instance_5Filter_5 = new cjs.ColorFilter(0.2,0.2,0.2,1,103.2,200,76.8,0);
	this.instance_5.filters = [instance_5Filter_5];
	this.instance_5.cache(-2,-2,60,60);

	this.instance_6 = new lib.symbol6("synched",0);
	this.instance_6.setTransform(476.05,69.4,1,1,0,0,0,28,27.9);
	var instance_6Filter_6 = new cjs.ColorFilter(0.15,0.15,0.15,1,97.75,92.65,216.75,0);
	this.instance_6.filters = [instance_6Filter_6];
	this.instance_6.cache(-2,-2,60,60);

	this.instance_7 = new lib.symbol6("synched",0);
	this.instance_7.setTransform(343,69.4,1,1,0,0,0,28,27.9);
	var instance_7Filter_7 = new cjs.ColorFilter(0.04,0.04,0.04,1,222.72,92.16,182.4,0);
	this.instance_7.filters = [instance_7Filter_7];
	this.instance_7.cache(-2,-2,60,60);

	this.instance_8 = new lib.symbol6("synched",0);
	this.instance_8.setTransform(242,69.4,1,1,0,0,0,28,27.9);
	var instance_8Filter_8 = new cjs.ColorFilter(0.46,0.46,0.46,1,0,0,0,0);
	this.instance_8.filters = [instance_8Filter_8];
	this.instance_8.cache(-2,-2,60,60);

	this.instance_9 = new lib.symbol6("synched",0);
	this.instance_9.setTransform(180,69.4,1,1,0,0,0,28,27.9);
	var instance_9Filter_9 = new cjs.ColorFilter(0.44,0.44,0.44,1,142.8,142.8,142.8,0);
	this.instance_9.filters = [instance_9Filter_9];
	this.instance_9.cache(-2,-2,60,60);

	this.instance_10 = new lib.symbol6("synched",0);
	this.instance_10.setTransform(58.75,69.4,1,1,0,0,0,28,27.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(50));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(50));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_2).wait(50));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_3).wait(50));
	this.timeline.addTween(cjs.Tween.get(instance_4Filter_4).wait(50));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_5).wait(50));
	this.timeline.addTween(cjs.Tween.get(instance_6Filter_6).wait(50));
	this.timeline.addTween(cjs.Tween.get(instance_7Filter_7).wait(50));
	this.timeline.addTween(cjs.Tween.get(instance_8Filter_8).wait(50));
	this.timeline.addTween(cjs.Tween.get(instance_9Filter_9).wait(50));

	// レイヤー_5
	this.instance_11 = new lib.symbol6("synched",0);
	this.instance_11.setTransform(258,484.35,1,1,0,0,0,28,27.9);
	var instance_11Filter_10 = new cjs.ColorFilter(1,1,1,1,0,-255,0,0);
	this.instance_11.filters = [instance_11Filter_10];
	this.instance_11.cache(-2,-2,60,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({alpha:0.4805},22).to({alpha:1},27).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_11Filter_10).to(new cjs.ColorFilter(0.12890625,1,1,1,169,75,0,0), 22).to(new cjs.ColorFilter(1,1,0.55859375,1,0,-137,222,0), 27).wait(1));

	// レイヤー_7
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill().beginStroke("rgba(201,201,201,0.259)").setStrokeStyle(13,1,1).moveTo(118.7,-0.1).curveTo(118.7,49.1,83.9,83.9).curveTo(49.2,118.6,0,118.6).curveTo(-49.2,118.6,-84,83.9).curveTo(-118.7,49.1,-118.7,-0.1).curveTo(-118.7,-49.2,-84,-84).curveTo(-49.2,-118.8,0,-118.8).curveTo(49.2,-118.8,83.9,-84).curveTo(118.7,-49.2,118.7,-0.1).closePath().moveTo(267.8,-0).curveTo(267.8,110.9,189.3,189.3).curveTo(111,267.8,0,267.8).curveTo(-110.9,267.8,-189.4,189.3).curveTo(-267.7,110.9,-267.7,-0).curveTo(-267.7,-110.9,-189.4,-189.4).curveTo(-110.9,-267.7,0,-267.7).curveTo(111,-267.7,189.3,-189.4).curveTo(267.8,-110.9,267.8,-0).closePath().moveTo(170.5,-0).curveTo(170.5,70.6,120.5,120.5).curveTo(70.6,170.5,-0,170.5).curveTo(-70.7,170.5,-120.6,120.5).curveTo(-170.5,70.6,-170.5,-0).curveTo(-170.5,-70.7,-120.6,-120.6).curveTo(-70.7,-170.5,-0,-170.5).curveTo(70.6,-170.5,120.5,-120.6).curveTo(170.5,-70.7,170.5,-0).closePath().moveTo(223.5,-0).curveTo(223.5,92.6,158,158).curveTo(92.6,223.5,0,223.5).curveTo(-92.6,223.5,-158.1,158).curveTo(-223.5,92.6,-223.5,-0).curveTo(-223.5,-92.6,-158.1,-158.1).curveTo(-92.6,-223.5,0,-223.5).curveTo(92.6,-223.5,158,-158.1).curveTo(223.5,-92.6,223.5,-0).closePath().moveTo(20.4,-0.1).curveTo(20.4,8.3,14.4,14.3).curveTo(8.5,20.3,0,20.3).curveTo(-8.4,20.3,-14.4,14.3).curveTo(-20.4,8.3,-20.4,-0.1).curveTo(-20.4,-8.6,-14.4,-14.5).curveTo(-8.4,-20.5,0,-20.5).curveTo(8.5,-20.5,14.4,-14.5).curveTo(20.4,-8.6,20.4,-0.1).closePath().moveTo(68.3,-0.1).curveTo(68.3,28.2,48.3,48.1).curveTo(28.3,68.1,0,68.1).curveTo(-28.3,68.1,-48.2,48.1).curveTo(-68.2,28.2,-68.2,-0.1).curveTo(-68.2,-28.4,-48.2,-48.4).curveTo(-28.3,-68.3,0,-68.3).curveTo(28.3,-68.3,48.3,-48.4).curveTo(68.3,-28.4,68.3,-0.1).closePath();
	this.shape_74.setTransform(285.75,278.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_74).wait(50));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_11, startFrame:1, endFrame:22, x:-2, y:-2, w:60, h:60});
	this.filterCacheList.push({instance: this.instance_11, startFrame:0, endFrame:0, x:-2, y:-2, w:60, h:60});
	this.filterCacheList.push({instance: this.instance_11, startFrame:23, endFrame:49, x:-2, y:-2, w:60, h:60});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(286.5,276,273.5,276.5);
// library properties:
lib.properties = {
	id: '2FA8E0C7230941478CE2CA3DB82DBEDF',
	width: 550,
	height: 546,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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