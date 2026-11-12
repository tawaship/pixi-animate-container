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



(lib.シンボル56 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(127);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#FF0000").setStrokeStyle(1,1,1).moveTo(-21.5,-21.5).lineTo(21.5,-21.5).lineTo(21.5,21.5).lineTo(-21.5,21.5).closePath();

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#0000FF").beginStroke().moveTo(-21.5,21.5).lineTo(-21.5,-21.5).lineTo(21.5,-21.5).lineTo(21.5,21.5).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-22.5,45,45);


(lib.シンボル7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_10 = function() {
		this.parent.gotoAndStop(0)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// レイヤー_1
	this.text = new cjs.Text("C", "30px 'MS PGothic'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.parent = this;
	this.text.setTransform(0,-31.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-33.4,24.1,66.8);


(lib.シンボル5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop("undefined");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#FF0000").setStrokeStyle(1,1,1).moveTo(-21.5,-21.5).lineTo(21.5,-21.5).lineTo(21.5,21.5).lineTo(-21.5,21.5).closePath();

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#0000FF").beginStroke().moveTo(-21.5,21.5).lineTo(-21.5,-21.5).lineTo(21.5,-21.5).lineTo(21.5,21.5).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-22.5,45,45);


(lib.シンボル3コピー2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {j:15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		console.log("j before")
	}
	this.frame_5 = function() {
		console.log("j?")
		this.gotoAndStop("j");
	}
	this.frame_6 = function() {
		console.log("j after")
	}
	this.frame_12 = function() {
		this.gotoAndStop(30)
	}
	this.frame_14 = function() {
		console.log("j after 2")
	}
	this.frame_15 = function() {
		console.log("ラベルF")
	}
	this.frame_30 = function() {
		this.gotoAndStop("35")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(6).call(this.frame_12).wait(2).call(this.frame_14).wait(1).call(this.frame_15).wait(15).call(this.frame_30).wait(10));

	// レイヤー_3
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#00FF00").beginStroke().moveTo(0.4,10.2).lineTo(0.4,-5.5).lineTo(-3.1,-5.5).lineTo(-3.1,-6.8).lineTo(-2.1,-6.8).curveTo(-0.4,-6.8,0.5,-7.8).curveTo(1.6,-8.9,1.7,-10.2).lineTo(3.1,-10.2).lineTo(3.1,10.2).closePath();
	this.shape.setTransform(26.275,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#00FF00").beginStroke().moveTo(-6,10.1).lineTo(-6,8.1).curveTo(-5.7,7,-4,4.9).lineTo(0.8,-0.4).curveTo(2.8,-2.5,2.8,-4.9).curveTo(2.8,-6.3,1.9,-7.2).curveTo(1.1,-7.9,0.1,-7.9).curveTo(-0.8,-7.9,-1.5,-7.2).curveTo(-2.8,-5.9,-2.8,-3.1).lineTo(-5.5,-3.1).curveTo(-5.5,-6.8,-3.6,-8.6).curveTo(-2.1,-10.1,0,-10.1).curveTo(2.6,-10.1,4.1,-8.6).curveTo(5.6,-7.1,5.6,-4.9).curveTo(5.7,-2.1,3.8,0).curveTo(2.2,2,0.5,3.9).lineTo(-1.4,6).curveTo(-2.3,7,-2.8,7.9).lineTo(6,7.9).lineTo(6,10.1).closePath();
	this.shape_1.setTransform(27.5,17.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#00FF00").beginStroke().moveTo(-4.4,8.6).curveTo(-6,7,-6,4.7).lineTo(-6,3.8).lineTo(-3.3,3.8).lineTo(-3.3,4.6).curveTo(-3.3,6.1,-2.2,7.2).curveTo(-1.4,8,-0.2,8).curveTo(1.3,8,2.3,7).curveTo(3.1,6.1,3.2,4.2).curveTo(3.1,2.5,2.3,1.6).curveTo(1.3,0.6,0.1,0.6).lineTo(-0.8,0.6).lineTo(-0.8,-1.3).lineTo(-0.1,-1.3).curveTo(0.9,-1.3,1.9,-2.3).curveTo(2.8,-3.3,2.8,-5).curveTo(2.8,-6.5,1.9,-7.4).curveTo(1.1,-8.2,0,-8.2).curveTo(-1,-8.2,-1.9,-7.4).curveTo(-2.8,-6.4,-2.9,-4.3).lineTo(-5.5,-4.3).curveTo(-5.5,-7,-3.7,-8.8).curveTo(-2.3,-10.3,0,-10.2).curveTo(2.6,-10.3,4.1,-8.8).curveTo(5.5,-7.4,5.5,-5).curveTo(5.5,-2.6,4.4,-1.5).curveTo(3.5,-0.7,2.6,-0.5).curveTo(3.8,-0.2,4.5,0.6).curveTo(6,2,6,4.4).curveTo(6,7,4.4,8.6).curveTo(2.7,10.2,-0.2,10.3).curveTo(-2.7,10.2,-4.4,8.6).closePath();
	this.shape_2.setTransform(27.5,17.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#00FF00").beginStroke().moveTo(1.3,10.1).lineTo(1.3,5).lineTo(-6.5,5).lineTo(-6.5,2.6).lineTo(1.3,-10.1).lineTo(4,-10.1).lineTo(4,2.7).lineTo(6.5,2.7).lineTo(6.5,5).lineTo(4,5).lineTo(4,10.1).closePath().moveTo(-3.9,2.7).lineTo(1.3,2.7).lineTo(1.3,-5.8).closePath();
	this.shape_3.setTransform(27.55,17.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#00FF00").beginStroke().moveTo(-4.1,8.6).curveTo(-5.6,7.1,-6,4.1).lineTo(-3.3,4.1).curveTo(-3,6.2,-2.1,7.2).curveTo(-1.4,7.9,-0.3,7.9).curveTo(1.1,7.9,1.9,7.1).curveTo(3.2,5.8,3.2,2.7).curveTo(3.2,-0.2,2.1,-1.2).curveTo(1.4,-2,0.5,-2).curveTo(-0.9,-2,-2,-0.9).lineTo(-2.9,0.1).lineTo(-5.3,0.1).lineTo(-5.2,-0.6).lineTo(-4.6,-9.6).lineTo(-4.6,-10.2).lineTo(5.5,-10.2).lineTo(5.5,-7.9).lineTo(-2.4,-7.9).lineTo(-2.4,-7.5).curveTo(-2.5,-5.3,-2.7,-3.2).lineTo(-2.8,-2.5).curveTo(-1.3,-3.9,0.5,-3.9).curveTo(2.8,-3.9,4.4,-2.4).curveTo(6,-0.8,6,2.4).curveTo(6,6.4,3.8,8.5).curveTo(2.3,10.1,-0.2,10.2).curveTo(-2.6,10.1,-4.1,8.6).closePath();
	this.shape_4.setTransform(27.5,17.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#00FF00").beginStroke().moveTo(-3.7,8.5).curveTo(-5.9,6.4,-5.8,0.4).curveTo(-5.8,-6.1,-3,-8.9).curveTo(-1.6,-10.3,0.5,-10.2).curveTo(2.7,-10.3,4.1,-8.9).curveTo(5.6,-7.4,5.6,-5).lineTo(2.9,-5).curveTo(2.9,-6.6,2.3,-7.4).curveTo(1.5,-8.1,0.5,-8.1).curveTo(-0.6,-8.1,-1.3,-7.4).curveTo(-3.1,-5.5,-3.1,-0.8).curveTo(-2.7,-1.6,-2,-2.3).curveTo(-1,-3.4,0.6,-3.4).curveTo(2.7,-3.4,4.1,-1.9).curveTo(5.8,-0.2,5.9,3.3).curveTo(5.8,7,4,8.9).curveTo(2.6,10.3,0.1,10.3).curveTo(-2,10.2,-3.7,8.5).closePath().moveTo(-1.7,-0.4).curveTo(-3,0.8,-2.9,3.1).curveTo(-2.9,5.9,-1.5,7.3).curveTo(-0.7,8.1,0.2,8.1).curveTo(1.3,8.1,2,7.4).curveTo(3.1,6.4,3,3.3).curveTo(3.1,0.6,2,-0.4).curveTo(1.1,-1.3,0.3,-1.2).curveTo(-0.8,-1.3,-1.7,-0.4).closePath();
	this.shape_5.setTransform(27.5,17.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#00FF00").beginStroke().moveTo(-2.7,10).lineTo(3,-7.8).lineTo(-5.6,-7.8).lineTo(-5.6,-10).lineTo(5.6,-10).lineTo(5.6,-7.4).lineTo(-0.1,10).closePath();
	this.shape_6.setTransform(27.575,17.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#00FF00").beginStroke().moveTo(-4.5,8.7).curveTo(-6.1,7,-6.1,4.7).curveTo(-6.1,2.4,-4.7,1).curveTo(-3.7,0.1,-2.7,-0.2).lineTo(-2.7,-0.4).curveTo(-3.4,-0.6,-4.2,-1.5).curveTo(-5.5,-2.8,-5.5,-4.7).curveTo(-5.5,-7.2,-3.8,-8.9).curveTo(-2.4,-10.3,0,-10.2).curveTo(2.4,-10.3,4,-8.8).curveTo(5.5,-7.2,5.5,-4.7).curveTo(5.5,-2.7,4.1,-1.2).curveTo(3.5,-0.6,2.7,-0.4).lineTo(2.7,-0.2).curveTo(3.7,0.1,4.7,1).curveTo(6.1,2.4,6.1,4.7).curveTo(6.1,7,4.5,8.7).curveTo(3,10.2,0,10.3).curveTo(-3,10.2,-4.5,8.7).closePath().moveTo(-2.5,1.7).curveTo(-3.4,2.6,-3.4,4.4).curveTo(-3.4,6.1,-2.4,7.2).curveTo(-1.4,8.1,0,8.1).curveTo(1.4,8.1,2.4,7.2).curveTo(3.4,6.1,3.4,4.4).curveTo(3.4,2.6,2.4,1.6).curveTo(1.5,0.7,0,0.8).curveTo(-1.5,0.7,-2.5,1.7).closePath().moveTo(-2,-7.4).curveTo(-2.9,-6.4,-2.9,-4.7).curveTo(-2.9,-3,-2,-2).curveTo(-1.1,-1.3,-0.1,-1.2).curveTo(1.3,-1.2,2,-1.9).curveTo(2.9,-2.9,2.9,-4.7).curveTo(2.9,-6.4,2,-7.4).curveTo(1.1,-8.2,0,-8.2).curveTo(-1.1,-8.2,-2,-7.4).closePath();
	this.shape_7.setTransform(27.5,17.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#00FF00").beginStroke().moveTo(-4.1,8.9).curveTo(-5.6,7.4,-5.6,5).lineTo(-2.9,5).curveTo(-3,6.5,-2,7.6).curveTo(-1.5,8,-0.6,8).curveTo(0.4,8,1.3,7.2).curveTo(3.1,5.3,3.2,0.2).curveTo(2.7,1,2.1,1.6).curveTo(0.8,2.8,-1,2.8).curveTo(-2.8,2.8,-4,1.7).curveTo(-5.8,-0.2,-5.8,-3.4).curveTo(-5.9,-6.9,-3.7,-9).curveTo(-2.5,-10.2,-0.2,-10.2).curveTo(1.9,-10.3,3.4,-8.8).curveTo(5.9,-6.3,5.9,-0.2).curveTo(5.9,6,3.3,8.6).curveTo(1.7,10.2,-0.6,10.3).curveTo(-2.8,10.3,-4.1,8.9).closePath().moveTo(-1.9,-7.4).curveTo(-3,-6.3,-3,-3.4).curveTo(-3,-1,-2.1,-0.1).curveTo(-1.3,0.7,-0.4,0.8).curveTo(0.9,0.8,1.7,0).curveTo(2.9,-1.3,2.9,-3.1).curveTo(2.9,-6,1.7,-7.4).curveTo(0.8,-8.2,-0.2,-8.2).curveTo(-1.1,-8.2,-1.9,-7.4).closePath();
	this.shape_8.setTransform(27.5,17.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#00FF00").beginStroke().moveTo(-4.1,8.6).curveTo(-6.4,6.3,-6.5,1.3).lineTo(-6.5,-1.1).curveTo(-6.4,-6.3,-4.1,-8.6).curveTo(-2.4,-10.3,0,-10.3).curveTo(2.5,-10.3,4.1,-8.6).curveTo(6.5,-6.3,6.5,-1.1).lineTo(6.5,1.3).curveTo(6.5,6.3,4.1,8.6).curveTo(2.5,10.2,0,10.3).curveTo(-2.4,10.2,-4.1,8.6).closePath().moveTo(-2.1,-7.1).curveTo(-3.7,-5.6,-3.7,-1.4).lineTo(-3.7,1.3).curveTo(-3.7,5.5,-2,7.1).curveTo(-1.1,8.1,0,8).curveTo(1.2,8.1,2.1,7.1).curveTo(3.6,5.6,3.6,1.3).lineTo(3.6,-1.4).curveTo(3.6,-5.6,2.1,-7.1).curveTo(1.2,-8,0,-8).curveTo(-1.2,-8,-2.1,-7.1).closePath();
	this.shape_9.setTransform(35,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{x:26.275}}]},20).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape,p:{x:18.775}},{t:this.shape_9}]},1).to({state:[]},1).wait(10));

	// レイヤー_2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FF0000").beginStroke().moveTo(0.4,10.2).lineTo(0.4,-5.5).lineTo(-3.1,-5.5).lineTo(-3.1,-6.8).lineTo(-2.1,-6.8).curveTo(-0.4,-6.8,0.5,-7.8).curveTo(1.6,-8.9,1.7,-10.2).lineTo(3.1,-10.2).lineTo(3.1,10.2).closePath();
	this.shape_10.setTransform(26.275,17);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FF0000").beginStroke().moveTo(-6,10.1).lineTo(-6,8.1).curveTo(-5.7,7,-4,4.9).lineTo(0.8,-0.4).curveTo(2.8,-2.5,2.8,-4.9).curveTo(2.8,-6.3,1.9,-7.2).curveTo(1.1,-7.9,0.1,-7.9).curveTo(-0.8,-7.9,-1.5,-7.2).curveTo(-2.8,-5.9,-2.8,-3.1).lineTo(-5.5,-3.1).curveTo(-5.5,-6.8,-3.6,-8.6).curveTo(-2.1,-10.1,0,-10.1).curveTo(2.6,-10.1,4.1,-8.6).curveTo(5.6,-7.1,5.6,-4.9).curveTo(5.7,-2.1,3.8,0).curveTo(2.2,2,0.5,3.9).lineTo(-1.4,6).curveTo(-2.3,7,-2.8,7.9).lineTo(6,7.9).lineTo(6,10.1).closePath();
	this.shape_11.setTransform(27.5,17.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FF0000").beginStroke().moveTo(-4.4,8.6).curveTo(-6,7,-6,4.7).lineTo(-6,3.8).lineTo(-3.3,3.8).lineTo(-3.3,4.6).curveTo(-3.3,6.1,-2.2,7.2).curveTo(-1.4,8,-0.2,8).curveTo(1.3,8,2.3,7).curveTo(3.1,6.1,3.2,4.2).curveTo(3.1,2.5,2.3,1.6).curveTo(1.3,0.6,0.1,0.6).lineTo(-0.8,0.6).lineTo(-0.8,-1.3).lineTo(-0.1,-1.3).curveTo(0.9,-1.3,1.9,-2.3).curveTo(2.8,-3.3,2.8,-5).curveTo(2.8,-6.5,1.9,-7.4).curveTo(1.1,-8.2,0,-8.2).curveTo(-1,-8.2,-1.9,-7.4).curveTo(-2.8,-6.4,-2.9,-4.3).lineTo(-5.5,-4.3).curveTo(-5.5,-7,-3.7,-8.8).curveTo(-2.3,-10.3,0,-10.2).curveTo(2.6,-10.3,4.1,-8.8).curveTo(5.5,-7.4,5.5,-5).curveTo(5.5,-2.6,4.4,-1.5).curveTo(3.5,-0.7,2.6,-0.5).curveTo(3.8,-0.2,4.5,0.6).curveTo(6,2,6,4.4).curveTo(6,7,4.4,8.6).curveTo(2.7,10.2,-0.2,10.3).curveTo(-2.7,10.2,-4.4,8.6).closePath();
	this.shape_12.setTransform(27.5,17.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FF0000").beginStroke().moveTo(1.3,10.1).lineTo(1.3,5).lineTo(-6.5,5).lineTo(-6.5,2.6).lineTo(1.3,-10.1).lineTo(4,-10.1).lineTo(4,2.7).lineTo(6.5,2.7).lineTo(6.5,5).lineTo(4,5).lineTo(4,10.1).closePath().moveTo(-3.9,2.7).lineTo(1.3,2.7).lineTo(1.3,-5.8).closePath();
	this.shape_13.setTransform(27.55,17.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FF0000").beginStroke().moveTo(-4.1,8.6).curveTo(-5.6,7.1,-6,4.1).lineTo(-3.3,4.1).curveTo(-3,6.2,-2.1,7.2).curveTo(-1.4,7.9,-0.3,7.9).curveTo(1.1,7.9,1.9,7.1).curveTo(3.2,5.8,3.2,2.7).curveTo(3.2,-0.2,2.1,-1.2).curveTo(1.4,-2,0.5,-2).curveTo(-0.9,-2,-2,-0.9).lineTo(-2.9,0.1).lineTo(-5.3,0.1).lineTo(-5.2,-0.6).lineTo(-4.6,-9.6).lineTo(-4.6,-10.2).lineTo(5.5,-10.2).lineTo(5.5,-7.9).lineTo(-2.4,-7.9).lineTo(-2.4,-7.5).curveTo(-2.5,-5.3,-2.7,-3.2).lineTo(-2.8,-2.5).curveTo(-1.3,-3.9,0.5,-3.9).curveTo(2.8,-3.9,4.4,-2.4).curveTo(6,-0.8,6,2.4).curveTo(6,6.4,3.8,8.5).curveTo(2.3,10.1,-0.2,10.2).curveTo(-2.6,10.1,-4.1,8.6).closePath();
	this.shape_14.setTransform(27.5,17.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FF0000").beginStroke().moveTo(-3.7,8.5).curveTo(-5.9,6.4,-5.8,0.4).curveTo(-5.8,-6.1,-3,-8.9).curveTo(-1.6,-10.3,0.5,-10.2).curveTo(2.7,-10.3,4.1,-8.9).curveTo(5.6,-7.4,5.6,-5).lineTo(2.9,-5).curveTo(2.9,-6.6,2.3,-7.4).curveTo(1.5,-8.1,0.5,-8.1).curveTo(-0.6,-8.1,-1.3,-7.4).curveTo(-3.1,-5.5,-3.1,-0.8).curveTo(-2.7,-1.6,-2,-2.3).curveTo(-1,-3.4,0.6,-3.4).curveTo(2.7,-3.4,4.1,-1.9).curveTo(5.8,-0.2,5.9,3.3).curveTo(5.8,7,4,8.9).curveTo(2.6,10.3,0.1,10.3).curveTo(-2,10.2,-3.7,8.5).closePath().moveTo(-1.7,-0.4).curveTo(-3,0.8,-2.9,3.1).curveTo(-2.9,5.9,-1.5,7.3).curveTo(-0.7,8.1,0.2,8.1).curveTo(1.3,8.1,2,7.4).curveTo(3.1,6.4,3,3.3).curveTo(3.1,0.6,2,-0.4).curveTo(1.1,-1.3,0.3,-1.2).curveTo(-0.8,-1.3,-1.7,-0.4).closePath();
	this.shape_15.setTransform(27.5,17.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FF0000").beginStroke().moveTo(-2.7,10).lineTo(3,-7.8).lineTo(-5.6,-7.8).lineTo(-5.6,-10).lineTo(5.6,-10).lineTo(5.6,-7.4).lineTo(-0.1,10).closePath();
	this.shape_16.setTransform(27.575,17.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FF0000").beginStroke().moveTo(-4.5,8.7).curveTo(-6.1,7,-6.1,4.7).curveTo(-6.1,2.4,-4.7,1).curveTo(-3.7,0.1,-2.7,-0.2).lineTo(-2.7,-0.4).curveTo(-3.4,-0.6,-4.2,-1.5).curveTo(-5.5,-2.8,-5.5,-4.7).curveTo(-5.5,-7.2,-3.8,-8.9).curveTo(-2.4,-10.3,0,-10.2).curveTo(2.4,-10.3,4,-8.8).curveTo(5.5,-7.2,5.5,-4.7).curveTo(5.5,-2.7,4.1,-1.2).curveTo(3.5,-0.6,2.7,-0.4).lineTo(2.7,-0.2).curveTo(3.7,0.1,4.7,1).curveTo(6.1,2.4,6.1,4.7).curveTo(6.1,7,4.5,8.7).curveTo(3,10.2,0,10.3).curveTo(-3,10.2,-4.5,8.7).closePath().moveTo(-2.5,1.7).curveTo(-3.4,2.6,-3.4,4.4).curveTo(-3.4,6.1,-2.4,7.2).curveTo(-1.4,8.1,0,8.1).curveTo(1.4,8.1,2.4,7.2).curveTo(3.4,6.1,3.4,4.4).curveTo(3.4,2.6,2.4,1.6).curveTo(1.5,0.7,0,0.8).curveTo(-1.5,0.7,-2.5,1.7).closePath().moveTo(-2,-7.4).curveTo(-2.9,-6.4,-2.9,-4.7).curveTo(-2.9,-3,-2,-2).curveTo(-1.1,-1.3,-0.1,-1.2).curveTo(1.3,-1.2,2,-1.9).curveTo(2.9,-2.9,2.9,-4.7).curveTo(2.9,-6.4,2,-7.4).curveTo(1.1,-8.2,0,-8.2).curveTo(-1.1,-8.2,-2,-7.4).closePath();
	this.shape_17.setTransform(27.5,17.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FF0000").beginStroke().moveTo(-4.1,8.9).curveTo(-5.6,7.4,-5.6,5).lineTo(-2.9,5).curveTo(-3,6.5,-2,7.6).curveTo(-1.5,8,-0.6,8).curveTo(0.4,8,1.3,7.2).curveTo(3.1,5.3,3.2,0.2).curveTo(2.7,1,2.1,1.6).curveTo(0.8,2.8,-1,2.8).curveTo(-2.8,2.8,-4,1.7).curveTo(-5.8,-0.2,-5.8,-3.4).curveTo(-5.9,-6.9,-3.7,-9).curveTo(-2.5,-10.2,-0.2,-10.2).curveTo(1.9,-10.3,3.4,-8.8).curveTo(5.9,-6.3,5.9,-0.2).curveTo(5.9,6,3.3,8.6).curveTo(1.7,10.2,-0.6,10.3).curveTo(-2.8,10.3,-4.1,8.9).closePath().moveTo(-1.9,-7.4).curveTo(-3,-6.3,-3,-3.4).curveTo(-3,-1,-2.1,-0.1).curveTo(-1.3,0.7,-0.4,0.8).curveTo(0.9,0.8,1.7,0).curveTo(2.9,-1.3,2.9,-3.1).curveTo(2.9,-6,1.7,-7.4).curveTo(0.8,-8.2,-0.2,-8.2).curveTo(-1.1,-8.2,-1.9,-7.4).closePath();
	this.shape_18.setTransform(27.5,17.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FF0000").beginStroke().moveTo(-4.1,8.6).curveTo(-6.4,6.3,-6.5,1.3).lineTo(-6.5,-1.1).curveTo(-6.4,-6.3,-4.1,-8.6).curveTo(-2.4,-10.3,0,-10.3).curveTo(2.5,-10.3,4.1,-8.6).curveTo(6.5,-6.3,6.5,-1.1).lineTo(6.5,1.3).curveTo(6.5,6.3,4.1,8.6).curveTo(2.5,10.2,0,10.3).curveTo(-2.4,10.2,-4.1,8.6).closePath().moveTo(-2.1,-7.1).curveTo(-3.7,-5.6,-3.7,-1.4).lineTo(-3.7,1.3).curveTo(-3.7,5.5,-2,7.1).curveTo(-1.1,8.1,0,8).curveTo(1.2,8.1,2.1,7.1).curveTo(3.6,5.6,3.6,1.3).lineTo(3.6,-1.4).curveTo(3.6,-5.6,2.1,-7.1).curveTo(1.2,-8,0,-8).curveTo(-1.2,-8,-2.1,-7.1).closePath();
	this.shape_19.setTransform(35,17.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#0000FF").beginStroke().moveTo(0.4,10.2).lineTo(0.4,-5.5).lineTo(-3.1,-5.5).lineTo(-3.1,-6.8).lineTo(-2.1,-6.8).curveTo(-0.4,-6.8,0.5,-7.8).curveTo(1.6,-8.9,1.7,-10.2).lineTo(3.1,-10.2).lineTo(3.1,10.2).closePath();
	this.shape_20.setTransform(26.275,17);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#0000FF").beginStroke().moveTo(-6,10.1).lineTo(-6,8.1).curveTo(-5.7,7,-4,4.9).lineTo(0.8,-0.4).curveTo(2.8,-2.5,2.8,-4.9).curveTo(2.8,-6.3,1.9,-7.2).curveTo(1.1,-7.9,0.1,-7.9).curveTo(-0.8,-7.9,-1.5,-7.2).curveTo(-2.8,-5.9,-2.8,-3.1).lineTo(-5.5,-3.1).curveTo(-5.5,-6.8,-3.6,-8.6).curveTo(-2.1,-10.1,0,-10.1).curveTo(2.6,-10.1,4.1,-8.6).curveTo(5.6,-7.1,5.6,-4.9).curveTo(5.7,-2.1,3.8,0).curveTo(2.2,2,0.5,3.9).lineTo(-1.4,6).curveTo(-2.3,7,-2.8,7.9).lineTo(6,7.9).lineTo(6,10.1).closePath();
	this.shape_21.setTransform(27.5,17.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#0000FF").beginStroke().moveTo(-4.4,8.6).curveTo(-6,7,-6,4.7).lineTo(-6,3.8).lineTo(-3.3,3.8).lineTo(-3.3,4.6).curveTo(-3.3,6.1,-2.2,7.2).curveTo(-1.4,8,-0.2,8).curveTo(1.3,8,2.3,7).curveTo(3.1,6.1,3.2,4.2).curveTo(3.1,2.5,2.3,1.6).curveTo(1.3,0.6,0.1,0.6).lineTo(-0.8,0.6).lineTo(-0.8,-1.3).lineTo(-0.1,-1.3).curveTo(0.9,-1.3,1.9,-2.3).curveTo(2.8,-3.3,2.8,-5).curveTo(2.8,-6.5,1.9,-7.4).curveTo(1.1,-8.2,0,-8.2).curveTo(-1,-8.2,-1.9,-7.4).curveTo(-2.8,-6.4,-2.9,-4.3).lineTo(-5.5,-4.3).curveTo(-5.5,-7,-3.7,-8.8).curveTo(-2.3,-10.3,0,-10.2).curveTo(2.6,-10.3,4.1,-8.8).curveTo(5.5,-7.4,5.5,-5).curveTo(5.5,-2.6,4.4,-1.5).curveTo(3.5,-0.7,2.6,-0.5).curveTo(3.8,-0.2,4.5,0.6).curveTo(6,2,6,4.4).curveTo(6,7,4.4,8.6).curveTo(2.7,10.2,-0.2,10.3).curveTo(-2.7,10.2,-4.4,8.6).closePath();
	this.shape_22.setTransform(27.5,17.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#0000FF").beginStroke().moveTo(1.3,10.1).lineTo(1.3,5).lineTo(-6.5,5).lineTo(-6.5,2.6).lineTo(1.3,-10.1).lineTo(4,-10.1).lineTo(4,2.7).lineTo(6.5,2.7).lineTo(6.5,5).lineTo(4,5).lineTo(4,10.1).closePath().moveTo(-3.9,2.7).lineTo(1.3,2.7).lineTo(1.3,-5.8).closePath();
	this.shape_23.setTransform(27.55,17.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#0000FF").beginStroke().moveTo(-4.1,8.6).curveTo(-5.6,7.1,-6,4.1).lineTo(-3.3,4.1).curveTo(-3,6.2,-2.1,7.2).curveTo(-1.4,7.9,-0.3,7.9).curveTo(1.1,7.9,1.9,7.1).curveTo(3.2,5.8,3.2,2.7).curveTo(3.2,-0.2,2.1,-1.2).curveTo(1.4,-2,0.5,-2).curveTo(-0.9,-2,-2,-0.9).lineTo(-2.9,0.1).lineTo(-5.3,0.1).lineTo(-5.2,-0.6).lineTo(-4.6,-9.6).lineTo(-4.6,-10.2).lineTo(5.5,-10.2).lineTo(5.5,-7.9).lineTo(-2.4,-7.9).lineTo(-2.4,-7.5).curveTo(-2.5,-5.3,-2.7,-3.2).lineTo(-2.8,-2.5).curveTo(-1.3,-3.9,0.5,-3.9).curveTo(2.8,-3.9,4.4,-2.4).curveTo(6,-0.8,6,2.4).curveTo(6,6.4,3.8,8.5).curveTo(2.3,10.1,-0.2,10.2).curveTo(-2.6,10.1,-4.1,8.6).closePath();
	this.shape_24.setTransform(27.5,17.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#0000FF").beginStroke().moveTo(-3.7,8.5).curveTo(-5.9,6.4,-5.8,0.4).curveTo(-5.8,-6.1,-3,-8.9).curveTo(-1.6,-10.3,0.5,-10.2).curveTo(2.7,-10.3,4.1,-8.9).curveTo(5.6,-7.4,5.6,-5).lineTo(2.9,-5).curveTo(2.9,-6.6,2.3,-7.4).curveTo(1.5,-8.1,0.5,-8.1).curveTo(-0.6,-8.1,-1.3,-7.4).curveTo(-3.1,-5.5,-3.1,-0.8).curveTo(-2.7,-1.6,-2,-2.3).curveTo(-1,-3.4,0.6,-3.4).curveTo(2.7,-3.4,4.1,-1.9).curveTo(5.8,-0.2,5.9,3.3).curveTo(5.8,7,4,8.9).curveTo(2.6,10.3,0.1,10.3).curveTo(-2,10.2,-3.7,8.5).closePath().moveTo(-1.7,-0.4).curveTo(-3,0.8,-2.9,3.1).curveTo(-2.9,5.9,-1.5,7.3).curveTo(-0.7,8.1,0.2,8.1).curveTo(1.3,8.1,2,7.4).curveTo(3.1,6.4,3,3.3).curveTo(3.1,0.6,2,-0.4).curveTo(1.1,-1.3,0.3,-1.2).curveTo(-0.8,-1.3,-1.7,-0.4).closePath();
	this.shape_25.setTransform(27.5,17.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#0000FF").beginStroke().moveTo(-2.7,10).lineTo(3,-7.8).lineTo(-5.6,-7.8).lineTo(-5.6,-10).lineTo(5.6,-10).lineTo(5.6,-7.4).lineTo(-0.1,10).closePath();
	this.shape_26.setTransform(27.575,17.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#0000FF").beginStroke().moveTo(-4.5,8.7).curveTo(-6.1,7,-6.1,4.7).curveTo(-6.1,2.4,-4.7,1).curveTo(-3.7,0.1,-2.7,-0.2).lineTo(-2.7,-0.4).curveTo(-3.4,-0.6,-4.2,-1.5).curveTo(-5.5,-2.8,-5.5,-4.7).curveTo(-5.5,-7.2,-3.8,-8.9).curveTo(-2.4,-10.3,0,-10.2).curveTo(2.4,-10.3,4,-8.8).curveTo(5.5,-7.2,5.5,-4.7).curveTo(5.5,-2.7,4.1,-1.2).curveTo(3.5,-0.6,2.7,-0.4).lineTo(2.7,-0.2).curveTo(3.7,0.1,4.7,1).curveTo(6.1,2.4,6.1,4.7).curveTo(6.1,7,4.5,8.7).curveTo(3,10.2,0,10.3).curveTo(-3,10.2,-4.5,8.7).closePath().moveTo(-2.5,1.7).curveTo(-3.4,2.6,-3.4,4.4).curveTo(-3.4,6.1,-2.4,7.2).curveTo(-1.4,8.1,0,8.1).curveTo(1.4,8.1,2.4,7.2).curveTo(3.4,6.1,3.4,4.4).curveTo(3.4,2.6,2.4,1.6).curveTo(1.5,0.7,0,0.8).curveTo(-1.5,0.7,-2.5,1.7).closePath().moveTo(-2,-7.4).curveTo(-2.9,-6.4,-2.9,-4.7).curveTo(-2.9,-3,-2,-2).curveTo(-1.1,-1.3,-0.1,-1.2).curveTo(1.3,-1.2,2,-1.9).curveTo(2.9,-2.9,2.9,-4.7).curveTo(2.9,-6.4,2,-7.4).curveTo(1.1,-8.2,0,-8.2).curveTo(-1.1,-8.2,-2,-7.4).closePath();
	this.shape_27.setTransform(27.5,17.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#0000FF").beginStroke().moveTo(-4.1,8.9).curveTo(-5.6,7.4,-5.6,5).lineTo(-2.9,5).curveTo(-3,6.5,-2,7.6).curveTo(-1.5,8,-0.6,8).curveTo(0.4,8,1.3,7.2).curveTo(3.1,5.3,3.2,0.2).curveTo(2.7,1,2.1,1.6).curveTo(0.8,2.8,-1,2.8).curveTo(-2.8,2.8,-4,1.7).curveTo(-5.8,-0.2,-5.8,-3.4).curveTo(-5.9,-6.9,-3.7,-9).curveTo(-2.5,-10.2,-0.2,-10.2).curveTo(1.9,-10.3,3.4,-8.8).curveTo(5.9,-6.3,5.9,-0.2).curveTo(5.9,6,3.3,8.6).curveTo(1.7,10.2,-0.6,10.3).curveTo(-2.8,10.3,-4.1,8.9).closePath().moveTo(-1.9,-7.4).curveTo(-3,-6.3,-3,-3.4).curveTo(-3,-1,-2.1,-0.1).curveTo(-1.3,0.7,-0.4,0.8).curveTo(0.9,0.8,1.7,0).curveTo(2.9,-1.3,2.9,-3.1).curveTo(2.9,-6,1.7,-7.4).curveTo(0.8,-8.2,-0.2,-8.2).curveTo(-1.1,-8.2,-1.9,-7.4).closePath();
	this.shape_28.setTransform(27.5,17.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#0000FF").beginStroke().moveTo(-4.1,8.6).curveTo(-6.4,6.3,-6.5,1.3).lineTo(-6.5,-1.1).curveTo(-6.4,-6.3,-4.1,-8.6).curveTo(-2.4,-10.3,0,-10.3).curveTo(2.5,-10.3,4.1,-8.6).curveTo(6.5,-6.3,6.5,-1.1).lineTo(6.5,1.3).curveTo(6.5,6.3,4.1,8.6).curveTo(2.5,10.2,0,10.3).curveTo(-2.4,10.2,-4.1,8.6).closePath().moveTo(-2.1,-7.1).curveTo(-3.7,-5.6,-3.7,-1.4).lineTo(-3.7,1.3).curveTo(-3.7,5.5,-2,7.1).curveTo(-1.1,8.1,0,8).curveTo(1.2,8.1,2.1,7.1).curveTo(3.6,5.6,3.6,1.3).lineTo(3.6,-1.4).curveTo(3.6,-5.6,2.1,-7.1).curveTo(1.2,-8,0,-8).curveTo(-1.2,-8,-2.1,-7.1).closePath();
	this.shape_29.setTransform(35,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10,p:{x:26.275}}]},10).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_10,p:{x:18.775}},{t:this.shape_19}]},1).to({state:[]},1).to({state:[{t:this.shape_20,p:{x:26.275}}]},10).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_20,p:{x:18.775}},{t:this.shape_29}]},1).wait(1));

	// レイヤー_1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#000000").beginStroke().moveTo(0.4,10.2).lineTo(0.4,-5.5).lineTo(-3.1,-5.5).lineTo(-3.1,-6.8).lineTo(-2.1,-6.8).curveTo(-0.4,-6.8,0.5,-7.8).curveTo(1.6,-8.9,1.7,-10.2).lineTo(3.1,-10.2).lineTo(3.1,10.2).closePath();
	this.shape_30.setTransform(26.275,17);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#000000").beginStroke().moveTo(-6,10.1).lineTo(-6,8.1).curveTo(-5.7,7,-4,4.9).lineTo(0.8,-0.4).curveTo(2.8,-2.5,2.8,-4.9).curveTo(2.8,-6.3,1.9,-7.2).curveTo(1.1,-7.9,0.1,-7.9).curveTo(-0.8,-7.9,-1.5,-7.2).curveTo(-2.8,-5.9,-2.8,-3.1).lineTo(-5.5,-3.1).curveTo(-5.5,-6.8,-3.6,-8.6).curveTo(-2.1,-10.1,0,-10.1).curveTo(2.6,-10.1,4.1,-8.6).curveTo(5.6,-7.1,5.6,-4.9).curveTo(5.7,-2.1,3.8,0).curveTo(2.2,2,0.5,3.9).lineTo(-1.4,6).curveTo(-2.3,7,-2.8,7.9).lineTo(6,7.9).lineTo(6,10.1).closePath();
	this.shape_31.setTransform(27.5,17.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#000000").beginStroke().moveTo(-4.4,8.6).curveTo(-6,7,-6,4.7).lineTo(-6,3.8).lineTo(-3.3,3.8).lineTo(-3.3,4.6).curveTo(-3.3,6.1,-2.2,7.2).curveTo(-1.4,8,-0.2,8).curveTo(1.3,8,2.3,7).curveTo(3.1,6.1,3.2,4.2).curveTo(3.1,2.5,2.3,1.6).curveTo(1.3,0.6,0.1,0.6).lineTo(-0.8,0.6).lineTo(-0.8,-1.3).lineTo(-0.1,-1.3).curveTo(0.9,-1.3,1.9,-2.3).curveTo(2.8,-3.3,2.8,-5).curveTo(2.8,-6.5,1.9,-7.4).curveTo(1.1,-8.2,0,-8.2).curveTo(-1,-8.2,-1.9,-7.4).curveTo(-2.8,-6.4,-2.9,-4.3).lineTo(-5.5,-4.3).curveTo(-5.5,-7,-3.7,-8.8).curveTo(-2.3,-10.3,0,-10.2).curveTo(2.6,-10.3,4.1,-8.8).curveTo(5.5,-7.4,5.5,-5).curveTo(5.5,-2.6,4.4,-1.5).curveTo(3.5,-0.7,2.6,-0.5).curveTo(3.8,-0.2,4.5,0.6).curveTo(6,2,6,4.4).curveTo(6,7,4.4,8.6).curveTo(2.7,10.2,-0.2,10.3).curveTo(-2.7,10.2,-4.4,8.6).closePath();
	this.shape_32.setTransform(27.5,17.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#000000").beginStroke().moveTo(1.3,10.1).lineTo(1.3,5).lineTo(-6.5,5).lineTo(-6.5,2.6).lineTo(1.3,-10.1).lineTo(4,-10.1).lineTo(4,2.7).lineTo(6.5,2.7).lineTo(6.5,5).lineTo(4,5).lineTo(4,10.1).closePath().moveTo(-3.9,2.7).lineTo(1.3,2.7).lineTo(1.3,-5.8).closePath();
	this.shape_33.setTransform(27.55,17.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#000000").beginStroke().moveTo(-4.1,8.6).curveTo(-5.6,7.1,-6,4.1).lineTo(-3.3,4.1).curveTo(-3,6.2,-2.1,7.2).curveTo(-1.4,7.9,-0.3,7.9).curveTo(1.1,7.9,1.9,7.1).curveTo(3.2,5.8,3.2,2.7).curveTo(3.2,-0.2,2.1,-1.2).curveTo(1.4,-2,0.5,-2).curveTo(-0.9,-2,-2,-0.9).lineTo(-2.9,0.1).lineTo(-5.3,0.1).lineTo(-5.2,-0.6).lineTo(-4.6,-9.6).lineTo(-4.6,-10.2).lineTo(5.5,-10.2).lineTo(5.5,-7.9).lineTo(-2.4,-7.9).lineTo(-2.4,-7.5).curveTo(-2.5,-5.3,-2.7,-3.2).lineTo(-2.8,-2.5).curveTo(-1.3,-3.9,0.5,-3.9).curveTo(2.8,-3.9,4.4,-2.4).curveTo(6,-0.8,6,2.4).curveTo(6,6.4,3.8,8.5).curveTo(2.3,10.1,-0.2,10.2).curveTo(-2.6,10.1,-4.1,8.6).closePath();
	this.shape_34.setTransform(27.5,17.35);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#000000").beginStroke().moveTo(-3.7,8.5).curveTo(-5.9,6.4,-5.8,0.4).curveTo(-5.8,-6.1,-3,-8.9).curveTo(-1.6,-10.3,0.5,-10.2).curveTo(2.7,-10.3,4.1,-8.9).curveTo(5.6,-7.4,5.6,-5).lineTo(2.9,-5).curveTo(2.9,-6.6,2.3,-7.4).curveTo(1.5,-8.1,0.5,-8.1).curveTo(-0.6,-8.1,-1.3,-7.4).curveTo(-3.1,-5.5,-3.1,-0.8).curveTo(-2.7,-1.6,-2,-2.3).curveTo(-1,-3.4,0.6,-3.4).curveTo(2.7,-3.4,4.1,-1.9).curveTo(5.8,-0.2,5.9,3.3).curveTo(5.8,7,4,8.9).curveTo(2.6,10.3,0.1,10.3).curveTo(-2,10.2,-3.7,8.5).closePath().moveTo(-1.7,-0.4).curveTo(-3,0.8,-2.9,3.1).curveTo(-2.9,5.9,-1.5,7.3).curveTo(-0.7,8.1,0.2,8.1).curveTo(1.3,8.1,2,7.4).curveTo(3.1,6.4,3,3.3).curveTo(3.1,0.6,2,-0.4).curveTo(1.1,-1.3,0.3,-1.2).curveTo(-0.8,-1.3,-1.7,-0.4).closePath();
	this.shape_35.setTransform(27.5,17.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#000000").beginStroke().moveTo(-2.7,10).lineTo(3,-7.8).lineTo(-5.6,-7.8).lineTo(-5.6,-10).lineTo(5.6,-10).lineTo(5.6,-7.4).lineTo(-0.1,10).closePath();
	this.shape_36.setTransform(27.575,17.225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#000000").beginStroke().moveTo(-4.5,8.7).curveTo(-6.1,7,-6.1,4.7).curveTo(-6.1,2.4,-4.7,1).curveTo(-3.7,0.1,-2.7,-0.2).lineTo(-2.7,-0.4).curveTo(-3.4,-0.6,-4.2,-1.5).curveTo(-5.5,-2.8,-5.5,-4.7).curveTo(-5.5,-7.2,-3.8,-8.9).curveTo(-2.4,-10.3,0,-10.2).curveTo(2.4,-10.3,4,-8.8).curveTo(5.5,-7.2,5.5,-4.7).curveTo(5.5,-2.7,4.1,-1.2).curveTo(3.5,-0.6,2.7,-0.4).lineTo(2.7,-0.2).curveTo(3.7,0.1,4.7,1).curveTo(6.1,2.4,6.1,4.7).curveTo(6.1,7,4.5,8.7).curveTo(3,10.2,0,10.3).curveTo(-3,10.2,-4.5,8.7).closePath().moveTo(-2.5,1.7).curveTo(-3.4,2.6,-3.4,4.4).curveTo(-3.4,6.1,-2.4,7.2).curveTo(-1.4,8.1,0,8.1).curveTo(1.4,8.1,2.4,7.2).curveTo(3.4,6.1,3.4,4.4).curveTo(3.4,2.6,2.4,1.6).curveTo(1.5,0.7,0,0.8).curveTo(-1.5,0.7,-2.5,1.7).closePath().moveTo(-2,-7.4).curveTo(-2.9,-6.4,-2.9,-4.7).curveTo(-2.9,-3,-2,-2).curveTo(-1.1,-1.3,-0.1,-1.2).curveTo(1.3,-1.2,2,-1.9).curveTo(2.9,-2.9,2.9,-4.7).curveTo(2.9,-6.4,2,-7.4).curveTo(1.1,-8.2,0,-8.2).curveTo(-1.1,-8.2,-2,-7.4).closePath();
	this.shape_37.setTransform(27.5,17.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#000000").beginStroke().moveTo(-4.1,8.9).curveTo(-5.6,7.4,-5.6,5).lineTo(-2.9,5).curveTo(-3,6.5,-2,7.6).curveTo(-1.5,8,-0.6,8).curveTo(0.4,8,1.3,7.2).curveTo(3.1,5.3,3.2,0.2).curveTo(2.7,1,2.1,1.6).curveTo(0.8,2.8,-1,2.8).curveTo(-2.8,2.8,-4,1.7).curveTo(-5.8,-0.2,-5.8,-3.4).curveTo(-5.9,-6.9,-3.7,-9).curveTo(-2.5,-10.2,-0.2,-10.2).curveTo(1.9,-10.3,3.4,-8.8).curveTo(5.9,-6.3,5.9,-0.2).curveTo(5.9,6,3.3,8.6).curveTo(1.7,10.2,-0.6,10.3).curveTo(-2.8,10.3,-4.1,8.9).closePath().moveTo(-1.9,-7.4).curveTo(-3,-6.3,-3,-3.4).curveTo(-3,-1,-2.1,-0.1).curveTo(-1.3,0.7,-0.4,0.8).curveTo(0.9,0.8,1.7,0).curveTo(2.9,-1.3,2.9,-3.1).curveTo(2.9,-6,1.7,-7.4).curveTo(0.8,-8.2,-0.2,-8.2).curveTo(-1.1,-8.2,-1.9,-7.4).closePath();
	this.shape_38.setTransform(27.5,17.25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#000000").beginStroke().moveTo(-4.1,8.6).curveTo(-6.4,6.3,-6.5,1.3).lineTo(-6.5,-1.1).curveTo(-6.4,-6.3,-4.1,-8.6).curveTo(-2.4,-10.3,0,-10.3).curveTo(2.5,-10.3,4.1,-8.6).curveTo(6.5,-6.3,6.5,-1.1).lineTo(6.5,1.3).curveTo(6.5,6.3,4.1,8.6).curveTo(2.5,10.2,0,10.3).curveTo(-2.4,10.2,-4.1,8.6).closePath().moveTo(-2.1,-7.1).curveTo(-3.7,-5.6,-3.7,-1.4).lineTo(-3.7,1.3).curveTo(-3.7,5.5,-2,7.1).curveTo(-1.1,8.1,0,8).curveTo(1.2,8.1,2.1,7.1).curveTo(3.6,5.6,3.6,1.3).lineTo(3.6,-1.4).curveTo(3.6,-5.6,2.1,-7.1).curveTo(1.2,-8,0,-8).curveTo(-1.2,-8,-2.1,-7.1).closePath();
	this.shape_39.setTransform(35,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30,p:{x:26.275}}]}).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_30,p:{x:18.775}},{t:this.shape_39}]},1).to({state:[]},1).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-0.2,125,34);


(lib.シンボル3コピー = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"j":15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		console.log(3)
	}
	this.frame_5 = function() {
		console.log("s?")
		this.stop();
	}
	this.frame_13 = function() {
		console.log(4444444)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(8).call(this.frame_13).wait(27));

	// レイヤー_3
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#00FF00").beginStroke().moveTo(0.4,10.2).lineTo(0.4,-5.5).lineTo(-3.1,-5.5).lineTo(-3.1,-6.8).lineTo(-2.1,-6.8).curveTo(-0.4,-6.8,0.5,-7.8).curveTo(1.6,-8.9,1.7,-10.2).lineTo(3.1,-10.2).lineTo(3.1,10.2).closePath();
	this.shape.setTransform(26.275,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#00FF00").beginStroke().moveTo(-6,10.1).lineTo(-6,8.1).curveTo(-5.7,7,-4,4.9).lineTo(0.8,-0.4).curveTo(2.8,-2.5,2.8,-4.9).curveTo(2.8,-6.3,1.9,-7.2).curveTo(1.1,-7.9,0.1,-7.9).curveTo(-0.8,-7.9,-1.5,-7.2).curveTo(-2.8,-5.9,-2.8,-3.1).lineTo(-5.5,-3.1).curveTo(-5.5,-6.8,-3.6,-8.6).curveTo(-2.1,-10.1,0,-10.1).curveTo(2.6,-10.1,4.1,-8.6).curveTo(5.6,-7.1,5.6,-4.9).curveTo(5.7,-2.1,3.8,0).curveTo(2.2,2,0.5,3.9).lineTo(-1.4,6).curveTo(-2.3,7,-2.8,7.9).lineTo(6,7.9).lineTo(6,10.1).closePath();
	this.shape_1.setTransform(27.5,17.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#00FF00").beginStroke().moveTo(-4.4,8.6).curveTo(-6,7,-6,4.7).lineTo(-6,3.8).lineTo(-3.3,3.8).lineTo(-3.3,4.6).curveTo(-3.3,6.1,-2.2,7.2).curveTo(-1.4,8,-0.2,8).curveTo(1.3,8,2.3,7).curveTo(3.1,6.1,3.2,4.2).curveTo(3.1,2.5,2.3,1.6).curveTo(1.3,0.6,0.1,0.6).lineTo(-0.8,0.6).lineTo(-0.8,-1.3).lineTo(-0.1,-1.3).curveTo(0.9,-1.3,1.9,-2.3).curveTo(2.8,-3.3,2.8,-5).curveTo(2.8,-6.5,1.9,-7.4).curveTo(1.1,-8.2,0,-8.2).curveTo(-1,-8.2,-1.9,-7.4).curveTo(-2.8,-6.4,-2.9,-4.3).lineTo(-5.5,-4.3).curveTo(-5.5,-7,-3.7,-8.8).curveTo(-2.3,-10.3,0,-10.2).curveTo(2.6,-10.3,4.1,-8.8).curveTo(5.5,-7.4,5.5,-5).curveTo(5.5,-2.6,4.4,-1.5).curveTo(3.5,-0.7,2.6,-0.5).curveTo(3.8,-0.2,4.5,0.6).curveTo(6,2,6,4.4).curveTo(6,7,4.4,8.6).curveTo(2.7,10.2,-0.2,10.3).curveTo(-2.7,10.2,-4.4,8.6).closePath();
	this.shape_2.setTransform(27.5,17.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#00FF00").beginStroke().moveTo(1.3,10.1).lineTo(1.3,5).lineTo(-6.5,5).lineTo(-6.5,2.6).lineTo(1.3,-10.1).lineTo(4,-10.1).lineTo(4,2.7).lineTo(6.5,2.7).lineTo(6.5,5).lineTo(4,5).lineTo(4,10.1).closePath().moveTo(-3.9,2.7).lineTo(1.3,2.7).lineTo(1.3,-5.8).closePath();
	this.shape_3.setTransform(27.55,17.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#00FF00").beginStroke().moveTo(-4.1,8.6).curveTo(-5.6,7.1,-6,4.1).lineTo(-3.3,4.1).curveTo(-3,6.2,-2.1,7.2).curveTo(-1.4,7.9,-0.3,7.9).curveTo(1.1,7.9,1.9,7.1).curveTo(3.2,5.8,3.2,2.7).curveTo(3.2,-0.2,2.1,-1.2).curveTo(1.4,-2,0.5,-2).curveTo(-0.9,-2,-2,-0.9).lineTo(-2.9,0.1).lineTo(-5.3,0.1).lineTo(-5.2,-0.6).lineTo(-4.6,-9.6).lineTo(-4.6,-10.2).lineTo(5.5,-10.2).lineTo(5.5,-7.9).lineTo(-2.4,-7.9).lineTo(-2.4,-7.5).curveTo(-2.5,-5.3,-2.7,-3.2).lineTo(-2.8,-2.5).curveTo(-1.3,-3.9,0.5,-3.9).curveTo(2.8,-3.9,4.4,-2.4).curveTo(6,-0.8,6,2.4).curveTo(6,6.4,3.8,8.5).curveTo(2.3,10.1,-0.2,10.2).curveTo(-2.6,10.1,-4.1,8.6).closePath();
	this.shape_4.setTransform(27.5,17.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#00FF00").beginStroke().moveTo(-3.7,8.5).curveTo(-5.9,6.4,-5.8,0.4).curveTo(-5.8,-6.1,-3,-8.9).curveTo(-1.6,-10.3,0.5,-10.2).curveTo(2.7,-10.3,4.1,-8.9).curveTo(5.6,-7.4,5.6,-5).lineTo(2.9,-5).curveTo(2.9,-6.6,2.3,-7.4).curveTo(1.5,-8.1,0.5,-8.1).curveTo(-0.6,-8.1,-1.3,-7.4).curveTo(-3.1,-5.5,-3.1,-0.8).curveTo(-2.7,-1.6,-2,-2.3).curveTo(-1,-3.4,0.6,-3.4).curveTo(2.7,-3.4,4.1,-1.9).curveTo(5.8,-0.2,5.9,3.3).curveTo(5.8,7,4,8.9).curveTo(2.6,10.3,0.1,10.3).curveTo(-2,10.2,-3.7,8.5).closePath().moveTo(-1.7,-0.4).curveTo(-3,0.8,-2.9,3.1).curveTo(-2.9,5.9,-1.5,7.3).curveTo(-0.7,8.1,0.2,8.1).curveTo(1.3,8.1,2,7.4).curveTo(3.1,6.4,3,3.3).curveTo(3.1,0.6,2,-0.4).curveTo(1.1,-1.3,0.3,-1.2).curveTo(-0.8,-1.3,-1.7,-0.4).closePath();
	this.shape_5.setTransform(27.5,17.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#00FF00").beginStroke().moveTo(-2.7,10).lineTo(3,-7.8).lineTo(-5.6,-7.8).lineTo(-5.6,-10).lineTo(5.6,-10).lineTo(5.6,-7.4).lineTo(-0.1,10).closePath();
	this.shape_6.setTransform(27.575,17.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#00FF00").beginStroke().moveTo(-4.5,8.7).curveTo(-6.1,7,-6.1,4.7).curveTo(-6.1,2.4,-4.7,1).curveTo(-3.7,0.1,-2.7,-0.2).lineTo(-2.7,-0.4).curveTo(-3.4,-0.6,-4.2,-1.5).curveTo(-5.5,-2.8,-5.5,-4.7).curveTo(-5.5,-7.2,-3.8,-8.9).curveTo(-2.4,-10.3,0,-10.2).curveTo(2.4,-10.3,4,-8.8).curveTo(5.5,-7.2,5.5,-4.7).curveTo(5.5,-2.7,4.1,-1.2).curveTo(3.5,-0.6,2.7,-0.4).lineTo(2.7,-0.2).curveTo(3.7,0.1,4.7,1).curveTo(6.1,2.4,6.1,4.7).curveTo(6.1,7,4.5,8.7).curveTo(3,10.2,0,10.3).curveTo(-3,10.2,-4.5,8.7).closePath().moveTo(-2.5,1.7).curveTo(-3.4,2.6,-3.4,4.4).curveTo(-3.4,6.1,-2.4,7.2).curveTo(-1.4,8.1,0,8.1).curveTo(1.4,8.1,2.4,7.2).curveTo(3.4,6.1,3.4,4.4).curveTo(3.4,2.6,2.4,1.6).curveTo(1.5,0.7,0,0.8).curveTo(-1.5,0.7,-2.5,1.7).closePath().moveTo(-2,-7.4).curveTo(-2.9,-6.4,-2.9,-4.7).curveTo(-2.9,-3,-2,-2).curveTo(-1.1,-1.3,-0.1,-1.2).curveTo(1.3,-1.2,2,-1.9).curveTo(2.9,-2.9,2.9,-4.7).curveTo(2.9,-6.4,2,-7.4).curveTo(1.1,-8.2,0,-8.2).curveTo(-1.1,-8.2,-2,-7.4).closePath();
	this.shape_7.setTransform(27.5,17.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#00FF00").beginStroke().moveTo(-4.1,8.9).curveTo(-5.6,7.4,-5.6,5).lineTo(-2.9,5).curveTo(-3,6.5,-2,7.6).curveTo(-1.5,8,-0.6,8).curveTo(0.4,8,1.3,7.2).curveTo(3.1,5.3,3.2,0.2).curveTo(2.7,1,2.1,1.6).curveTo(0.8,2.8,-1,2.8).curveTo(-2.8,2.8,-4,1.7).curveTo(-5.8,-0.2,-5.8,-3.4).curveTo(-5.9,-6.9,-3.7,-9).curveTo(-2.5,-10.2,-0.2,-10.2).curveTo(1.9,-10.3,3.4,-8.8).curveTo(5.9,-6.3,5.9,-0.2).curveTo(5.9,6,3.3,8.6).curveTo(1.7,10.2,-0.6,10.3).curveTo(-2.8,10.3,-4.1,8.9).closePath().moveTo(-1.9,-7.4).curveTo(-3,-6.3,-3,-3.4).curveTo(-3,-1,-2.1,-0.1).curveTo(-1.3,0.7,-0.4,0.8).curveTo(0.9,0.8,1.7,0).curveTo(2.9,-1.3,2.9,-3.1).curveTo(2.9,-6,1.7,-7.4).curveTo(0.8,-8.2,-0.2,-8.2).curveTo(-1.1,-8.2,-1.9,-7.4).closePath();
	this.shape_8.setTransform(27.5,17.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#00FF00").beginStroke().moveTo(-4.1,8.6).curveTo(-6.4,6.3,-6.5,1.3).lineTo(-6.5,-1.1).curveTo(-6.4,-6.3,-4.1,-8.6).curveTo(-2.4,-10.3,0,-10.3).curveTo(2.5,-10.3,4.1,-8.6).curveTo(6.5,-6.3,6.5,-1.1).lineTo(6.5,1.3).curveTo(6.5,6.3,4.1,8.6).curveTo(2.5,10.2,0,10.3).curveTo(-2.4,10.2,-4.1,8.6).closePath().moveTo(-2.1,-7.1).curveTo(-3.7,-5.6,-3.7,-1.4).lineTo(-3.7,1.3).curveTo(-3.7,5.5,-2,7.1).curveTo(-1.1,8.1,0,8).curveTo(1.2,8.1,2.1,7.1).curveTo(3.6,5.6,3.6,1.3).lineTo(3.6,-1.4).curveTo(3.6,-5.6,2.1,-7.1).curveTo(1.2,-8,0,-8).curveTo(-1.2,-8,-2.1,-7.1).closePath();
	this.shape_9.setTransform(35,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{x:26.275}}]},20).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape,p:{x:18.775}},{t:this.shape_9}]},1).to({state:[]},1).wait(10));

	// レイヤー_2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FF0000").beginStroke().moveTo(0.4,10.2).lineTo(0.4,-5.5).lineTo(-3.1,-5.5).lineTo(-3.1,-6.8).lineTo(-2.1,-6.8).curveTo(-0.4,-6.8,0.5,-7.8).curveTo(1.6,-8.9,1.7,-10.2).lineTo(3.1,-10.2).lineTo(3.1,10.2).closePath();
	this.shape_10.setTransform(26.275,17);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FF0000").beginStroke().moveTo(-6,10.1).lineTo(-6,8.1).curveTo(-5.7,7,-4,4.9).lineTo(0.8,-0.4).curveTo(2.8,-2.5,2.8,-4.9).curveTo(2.8,-6.3,1.9,-7.2).curveTo(1.1,-7.9,0.1,-7.9).curveTo(-0.8,-7.9,-1.5,-7.2).curveTo(-2.8,-5.9,-2.8,-3.1).lineTo(-5.5,-3.1).curveTo(-5.5,-6.8,-3.6,-8.6).curveTo(-2.1,-10.1,0,-10.1).curveTo(2.6,-10.1,4.1,-8.6).curveTo(5.6,-7.1,5.6,-4.9).curveTo(5.7,-2.1,3.8,0).curveTo(2.2,2,0.5,3.9).lineTo(-1.4,6).curveTo(-2.3,7,-2.8,7.9).lineTo(6,7.9).lineTo(6,10.1).closePath();
	this.shape_11.setTransform(27.5,17.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FF0000").beginStroke().moveTo(-4.4,8.6).curveTo(-6,7,-6,4.7).lineTo(-6,3.8).lineTo(-3.3,3.8).lineTo(-3.3,4.6).curveTo(-3.3,6.1,-2.2,7.2).curveTo(-1.4,8,-0.2,8).curveTo(1.3,8,2.3,7).curveTo(3.1,6.1,3.2,4.2).curveTo(3.1,2.5,2.3,1.6).curveTo(1.3,0.6,0.1,0.6).lineTo(-0.8,0.6).lineTo(-0.8,-1.3).lineTo(-0.1,-1.3).curveTo(0.9,-1.3,1.9,-2.3).curveTo(2.8,-3.3,2.8,-5).curveTo(2.8,-6.5,1.9,-7.4).curveTo(1.1,-8.2,0,-8.2).curveTo(-1,-8.2,-1.9,-7.4).curveTo(-2.8,-6.4,-2.9,-4.3).lineTo(-5.5,-4.3).curveTo(-5.5,-7,-3.7,-8.8).curveTo(-2.3,-10.3,0,-10.2).curveTo(2.6,-10.3,4.1,-8.8).curveTo(5.5,-7.4,5.5,-5).curveTo(5.5,-2.6,4.4,-1.5).curveTo(3.5,-0.7,2.6,-0.5).curveTo(3.8,-0.2,4.5,0.6).curveTo(6,2,6,4.4).curveTo(6,7,4.4,8.6).curveTo(2.7,10.2,-0.2,10.3).curveTo(-2.7,10.2,-4.4,8.6).closePath();
	this.shape_12.setTransform(27.5,17.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FF0000").beginStroke().moveTo(1.3,10.1).lineTo(1.3,5).lineTo(-6.5,5).lineTo(-6.5,2.6).lineTo(1.3,-10.1).lineTo(4,-10.1).lineTo(4,2.7).lineTo(6.5,2.7).lineTo(6.5,5).lineTo(4,5).lineTo(4,10.1).closePath().moveTo(-3.9,2.7).lineTo(1.3,2.7).lineTo(1.3,-5.8).closePath();
	this.shape_13.setTransform(27.55,17.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FF0000").beginStroke().moveTo(-4.1,8.6).curveTo(-5.6,7.1,-6,4.1).lineTo(-3.3,4.1).curveTo(-3,6.2,-2.1,7.2).curveTo(-1.4,7.9,-0.3,7.9).curveTo(1.1,7.9,1.9,7.1).curveTo(3.2,5.8,3.2,2.7).curveTo(3.2,-0.2,2.1,-1.2).curveTo(1.4,-2,0.5,-2).curveTo(-0.9,-2,-2,-0.9).lineTo(-2.9,0.1).lineTo(-5.3,0.1).lineTo(-5.2,-0.6).lineTo(-4.6,-9.6).lineTo(-4.6,-10.2).lineTo(5.5,-10.2).lineTo(5.5,-7.9).lineTo(-2.4,-7.9).lineTo(-2.4,-7.5).curveTo(-2.5,-5.3,-2.7,-3.2).lineTo(-2.8,-2.5).curveTo(-1.3,-3.9,0.5,-3.9).curveTo(2.8,-3.9,4.4,-2.4).curveTo(6,-0.8,6,2.4).curveTo(6,6.4,3.8,8.5).curveTo(2.3,10.1,-0.2,10.2).curveTo(-2.6,10.1,-4.1,8.6).closePath();
	this.shape_14.setTransform(27.5,17.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FF0000").beginStroke().moveTo(-3.7,8.5).curveTo(-5.9,6.4,-5.8,0.4).curveTo(-5.8,-6.1,-3,-8.9).curveTo(-1.6,-10.3,0.5,-10.2).curveTo(2.7,-10.3,4.1,-8.9).curveTo(5.6,-7.4,5.6,-5).lineTo(2.9,-5).curveTo(2.9,-6.6,2.3,-7.4).curveTo(1.5,-8.1,0.5,-8.1).curveTo(-0.6,-8.1,-1.3,-7.4).curveTo(-3.1,-5.5,-3.1,-0.8).curveTo(-2.7,-1.6,-2,-2.3).curveTo(-1,-3.4,0.6,-3.4).curveTo(2.7,-3.4,4.1,-1.9).curveTo(5.8,-0.2,5.9,3.3).curveTo(5.8,7,4,8.9).curveTo(2.6,10.3,0.1,10.3).curveTo(-2,10.2,-3.7,8.5).closePath().moveTo(-1.7,-0.4).curveTo(-3,0.8,-2.9,3.1).curveTo(-2.9,5.9,-1.5,7.3).curveTo(-0.7,8.1,0.2,8.1).curveTo(1.3,8.1,2,7.4).curveTo(3.1,6.4,3,3.3).curveTo(3.1,0.6,2,-0.4).curveTo(1.1,-1.3,0.3,-1.2).curveTo(-0.8,-1.3,-1.7,-0.4).closePath();
	this.shape_15.setTransform(27.5,17.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FF0000").beginStroke().moveTo(-2.7,10).lineTo(3,-7.8).lineTo(-5.6,-7.8).lineTo(-5.6,-10).lineTo(5.6,-10).lineTo(5.6,-7.4).lineTo(-0.1,10).closePath();
	this.shape_16.setTransform(27.575,17.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FF0000").beginStroke().moveTo(-4.5,8.7).curveTo(-6.1,7,-6.1,4.7).curveTo(-6.1,2.4,-4.7,1).curveTo(-3.7,0.1,-2.7,-0.2).lineTo(-2.7,-0.4).curveTo(-3.4,-0.6,-4.2,-1.5).curveTo(-5.5,-2.8,-5.5,-4.7).curveTo(-5.5,-7.2,-3.8,-8.9).curveTo(-2.4,-10.3,0,-10.2).curveTo(2.4,-10.3,4,-8.8).curveTo(5.5,-7.2,5.5,-4.7).curveTo(5.5,-2.7,4.1,-1.2).curveTo(3.5,-0.6,2.7,-0.4).lineTo(2.7,-0.2).curveTo(3.7,0.1,4.7,1).curveTo(6.1,2.4,6.1,4.7).curveTo(6.1,7,4.5,8.7).curveTo(3,10.2,0,10.3).curveTo(-3,10.2,-4.5,8.7).closePath().moveTo(-2.5,1.7).curveTo(-3.4,2.6,-3.4,4.4).curveTo(-3.4,6.1,-2.4,7.2).curveTo(-1.4,8.1,0,8.1).curveTo(1.4,8.1,2.4,7.2).curveTo(3.4,6.1,3.4,4.4).curveTo(3.4,2.6,2.4,1.6).curveTo(1.5,0.7,0,0.8).curveTo(-1.5,0.7,-2.5,1.7).closePath().moveTo(-2,-7.4).curveTo(-2.9,-6.4,-2.9,-4.7).curveTo(-2.9,-3,-2,-2).curveTo(-1.1,-1.3,-0.1,-1.2).curveTo(1.3,-1.2,2,-1.9).curveTo(2.9,-2.9,2.9,-4.7).curveTo(2.9,-6.4,2,-7.4).curveTo(1.1,-8.2,0,-8.2).curveTo(-1.1,-8.2,-2,-7.4).closePath();
	this.shape_17.setTransform(27.5,17.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FF0000").beginStroke().moveTo(-4.1,8.9).curveTo(-5.6,7.4,-5.6,5).lineTo(-2.9,5).curveTo(-3,6.5,-2,7.6).curveTo(-1.5,8,-0.6,8).curveTo(0.4,8,1.3,7.2).curveTo(3.1,5.3,3.2,0.2).curveTo(2.7,1,2.1,1.6).curveTo(0.8,2.8,-1,2.8).curveTo(-2.8,2.8,-4,1.7).curveTo(-5.8,-0.2,-5.8,-3.4).curveTo(-5.9,-6.9,-3.7,-9).curveTo(-2.5,-10.2,-0.2,-10.2).curveTo(1.9,-10.3,3.4,-8.8).curveTo(5.9,-6.3,5.9,-0.2).curveTo(5.9,6,3.3,8.6).curveTo(1.7,10.2,-0.6,10.3).curveTo(-2.8,10.3,-4.1,8.9).closePath().moveTo(-1.9,-7.4).curveTo(-3,-6.3,-3,-3.4).curveTo(-3,-1,-2.1,-0.1).curveTo(-1.3,0.7,-0.4,0.8).curveTo(0.9,0.8,1.7,0).curveTo(2.9,-1.3,2.9,-3.1).curveTo(2.9,-6,1.7,-7.4).curveTo(0.8,-8.2,-0.2,-8.2).curveTo(-1.1,-8.2,-1.9,-7.4).closePath();
	this.shape_18.setTransform(27.5,17.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FF0000").beginStroke().moveTo(-4.1,8.6).curveTo(-6.4,6.3,-6.5,1.3).lineTo(-6.5,-1.1).curveTo(-6.4,-6.3,-4.1,-8.6).curveTo(-2.4,-10.3,0,-10.3).curveTo(2.5,-10.3,4.1,-8.6).curveTo(6.5,-6.3,6.5,-1.1).lineTo(6.5,1.3).curveTo(6.5,6.3,4.1,8.6).curveTo(2.5,10.2,0,10.3).curveTo(-2.4,10.2,-4.1,8.6).closePath().moveTo(-2.1,-7.1).curveTo(-3.7,-5.6,-3.7,-1.4).lineTo(-3.7,1.3).curveTo(-3.7,5.5,-2,7.1).curveTo(-1.1,8.1,0,8).curveTo(1.2,8.1,2.1,7.1).curveTo(3.6,5.6,3.6,1.3).lineTo(3.6,-1.4).curveTo(3.6,-5.6,2.1,-7.1).curveTo(1.2,-8,0,-8).curveTo(-1.2,-8,-2.1,-7.1).closePath();
	this.shape_19.setTransform(35,17.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#0000FF").beginStroke().moveTo(0.4,10.2).lineTo(0.4,-5.5).lineTo(-3.1,-5.5).lineTo(-3.1,-6.8).lineTo(-2.1,-6.8).curveTo(-0.4,-6.8,0.5,-7.8).curveTo(1.6,-8.9,1.7,-10.2).lineTo(3.1,-10.2).lineTo(3.1,10.2).closePath();
	this.shape_20.setTransform(26.275,17);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#0000FF").beginStroke().moveTo(-6,10.1).lineTo(-6,8.1).curveTo(-5.7,7,-4,4.9).lineTo(0.8,-0.4).curveTo(2.8,-2.5,2.8,-4.9).curveTo(2.8,-6.3,1.9,-7.2).curveTo(1.1,-7.9,0.1,-7.9).curveTo(-0.8,-7.9,-1.5,-7.2).curveTo(-2.8,-5.9,-2.8,-3.1).lineTo(-5.5,-3.1).curveTo(-5.5,-6.8,-3.6,-8.6).curveTo(-2.1,-10.1,0,-10.1).curveTo(2.6,-10.1,4.1,-8.6).curveTo(5.6,-7.1,5.6,-4.9).curveTo(5.7,-2.1,3.8,0).curveTo(2.2,2,0.5,3.9).lineTo(-1.4,6).curveTo(-2.3,7,-2.8,7.9).lineTo(6,7.9).lineTo(6,10.1).closePath();
	this.shape_21.setTransform(27.5,17.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#0000FF").beginStroke().moveTo(-4.4,8.6).curveTo(-6,7,-6,4.7).lineTo(-6,3.8).lineTo(-3.3,3.8).lineTo(-3.3,4.6).curveTo(-3.3,6.1,-2.2,7.2).curveTo(-1.4,8,-0.2,8).curveTo(1.3,8,2.3,7).curveTo(3.1,6.1,3.2,4.2).curveTo(3.1,2.5,2.3,1.6).curveTo(1.3,0.6,0.1,0.6).lineTo(-0.8,0.6).lineTo(-0.8,-1.3).lineTo(-0.1,-1.3).curveTo(0.9,-1.3,1.9,-2.3).curveTo(2.8,-3.3,2.8,-5).curveTo(2.8,-6.5,1.9,-7.4).curveTo(1.1,-8.2,0,-8.2).curveTo(-1,-8.2,-1.9,-7.4).curveTo(-2.8,-6.4,-2.9,-4.3).lineTo(-5.5,-4.3).curveTo(-5.5,-7,-3.7,-8.8).curveTo(-2.3,-10.3,0,-10.2).curveTo(2.6,-10.3,4.1,-8.8).curveTo(5.5,-7.4,5.5,-5).curveTo(5.5,-2.6,4.4,-1.5).curveTo(3.5,-0.7,2.6,-0.5).curveTo(3.8,-0.2,4.5,0.6).curveTo(6,2,6,4.4).curveTo(6,7,4.4,8.6).curveTo(2.7,10.2,-0.2,10.3).curveTo(-2.7,10.2,-4.4,8.6).closePath();
	this.shape_22.setTransform(27.5,17.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#0000FF").beginStroke().moveTo(1.3,10.1).lineTo(1.3,5).lineTo(-6.5,5).lineTo(-6.5,2.6).lineTo(1.3,-10.1).lineTo(4,-10.1).lineTo(4,2.7).lineTo(6.5,2.7).lineTo(6.5,5).lineTo(4,5).lineTo(4,10.1).closePath().moveTo(-3.9,2.7).lineTo(1.3,2.7).lineTo(1.3,-5.8).closePath();
	this.shape_23.setTransform(27.55,17.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#0000FF").beginStroke().moveTo(-4.1,8.6).curveTo(-5.6,7.1,-6,4.1).lineTo(-3.3,4.1).curveTo(-3,6.2,-2.1,7.2).curveTo(-1.4,7.9,-0.3,7.9).curveTo(1.1,7.9,1.9,7.1).curveTo(3.2,5.8,3.2,2.7).curveTo(3.2,-0.2,2.1,-1.2).curveTo(1.4,-2,0.5,-2).curveTo(-0.9,-2,-2,-0.9).lineTo(-2.9,0.1).lineTo(-5.3,0.1).lineTo(-5.2,-0.6).lineTo(-4.6,-9.6).lineTo(-4.6,-10.2).lineTo(5.5,-10.2).lineTo(5.5,-7.9).lineTo(-2.4,-7.9).lineTo(-2.4,-7.5).curveTo(-2.5,-5.3,-2.7,-3.2).lineTo(-2.8,-2.5).curveTo(-1.3,-3.9,0.5,-3.9).curveTo(2.8,-3.9,4.4,-2.4).curveTo(6,-0.8,6,2.4).curveTo(6,6.4,3.8,8.5).curveTo(2.3,10.1,-0.2,10.2).curveTo(-2.6,10.1,-4.1,8.6).closePath();
	this.shape_24.setTransform(27.5,17.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#0000FF").beginStroke().moveTo(-3.7,8.5).curveTo(-5.9,6.4,-5.8,0.4).curveTo(-5.8,-6.1,-3,-8.9).curveTo(-1.6,-10.3,0.5,-10.2).curveTo(2.7,-10.3,4.1,-8.9).curveTo(5.6,-7.4,5.6,-5).lineTo(2.9,-5).curveTo(2.9,-6.6,2.3,-7.4).curveTo(1.5,-8.1,0.5,-8.1).curveTo(-0.6,-8.1,-1.3,-7.4).curveTo(-3.1,-5.5,-3.1,-0.8).curveTo(-2.7,-1.6,-2,-2.3).curveTo(-1,-3.4,0.6,-3.4).curveTo(2.7,-3.4,4.1,-1.9).curveTo(5.8,-0.2,5.9,3.3).curveTo(5.8,7,4,8.9).curveTo(2.6,10.3,0.1,10.3).curveTo(-2,10.2,-3.7,8.5).closePath().moveTo(-1.7,-0.4).curveTo(-3,0.8,-2.9,3.1).curveTo(-2.9,5.9,-1.5,7.3).curveTo(-0.7,8.1,0.2,8.1).curveTo(1.3,8.1,2,7.4).curveTo(3.1,6.4,3,3.3).curveTo(3.1,0.6,2,-0.4).curveTo(1.1,-1.3,0.3,-1.2).curveTo(-0.8,-1.3,-1.7,-0.4).closePath();
	this.shape_25.setTransform(27.5,17.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#0000FF").beginStroke().moveTo(-2.7,10).lineTo(3,-7.8).lineTo(-5.6,-7.8).lineTo(-5.6,-10).lineTo(5.6,-10).lineTo(5.6,-7.4).lineTo(-0.1,10).closePath();
	this.shape_26.setTransform(27.575,17.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#0000FF").beginStroke().moveTo(-4.5,8.7).curveTo(-6.1,7,-6.1,4.7).curveTo(-6.1,2.4,-4.7,1).curveTo(-3.7,0.1,-2.7,-0.2).lineTo(-2.7,-0.4).curveTo(-3.4,-0.6,-4.2,-1.5).curveTo(-5.5,-2.8,-5.5,-4.7).curveTo(-5.5,-7.2,-3.8,-8.9).curveTo(-2.4,-10.3,0,-10.2).curveTo(2.4,-10.3,4,-8.8).curveTo(5.5,-7.2,5.5,-4.7).curveTo(5.5,-2.7,4.1,-1.2).curveTo(3.5,-0.6,2.7,-0.4).lineTo(2.7,-0.2).curveTo(3.7,0.1,4.7,1).curveTo(6.1,2.4,6.1,4.7).curveTo(6.1,7,4.5,8.7).curveTo(3,10.2,0,10.3).curveTo(-3,10.2,-4.5,8.7).closePath().moveTo(-2.5,1.7).curveTo(-3.4,2.6,-3.4,4.4).curveTo(-3.4,6.1,-2.4,7.2).curveTo(-1.4,8.1,0,8.1).curveTo(1.4,8.1,2.4,7.2).curveTo(3.4,6.1,3.4,4.4).curveTo(3.4,2.6,2.4,1.6).curveTo(1.5,0.7,0,0.8).curveTo(-1.5,0.7,-2.5,1.7).closePath().moveTo(-2,-7.4).curveTo(-2.9,-6.4,-2.9,-4.7).curveTo(-2.9,-3,-2,-2).curveTo(-1.1,-1.3,-0.1,-1.2).curveTo(1.3,-1.2,2,-1.9).curveTo(2.9,-2.9,2.9,-4.7).curveTo(2.9,-6.4,2,-7.4).curveTo(1.1,-8.2,0,-8.2).curveTo(-1.1,-8.2,-2,-7.4).closePath();
	this.shape_27.setTransform(27.5,17.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#0000FF").beginStroke().moveTo(-4.1,8.9).curveTo(-5.6,7.4,-5.6,5).lineTo(-2.9,5).curveTo(-3,6.5,-2,7.6).curveTo(-1.5,8,-0.6,8).curveTo(0.4,8,1.3,7.2).curveTo(3.1,5.3,3.2,0.2).curveTo(2.7,1,2.1,1.6).curveTo(0.8,2.8,-1,2.8).curveTo(-2.8,2.8,-4,1.7).curveTo(-5.8,-0.2,-5.8,-3.4).curveTo(-5.9,-6.9,-3.7,-9).curveTo(-2.5,-10.2,-0.2,-10.2).curveTo(1.9,-10.3,3.4,-8.8).curveTo(5.9,-6.3,5.9,-0.2).curveTo(5.9,6,3.3,8.6).curveTo(1.7,10.2,-0.6,10.3).curveTo(-2.8,10.3,-4.1,8.9).closePath().moveTo(-1.9,-7.4).curveTo(-3,-6.3,-3,-3.4).curveTo(-3,-1,-2.1,-0.1).curveTo(-1.3,0.7,-0.4,0.8).curveTo(0.9,0.8,1.7,0).curveTo(2.9,-1.3,2.9,-3.1).curveTo(2.9,-6,1.7,-7.4).curveTo(0.8,-8.2,-0.2,-8.2).curveTo(-1.1,-8.2,-1.9,-7.4).closePath();
	this.shape_28.setTransform(27.5,17.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#0000FF").beginStroke().moveTo(-4.1,8.6).curveTo(-6.4,6.3,-6.5,1.3).lineTo(-6.5,-1.1).curveTo(-6.4,-6.3,-4.1,-8.6).curveTo(-2.4,-10.3,0,-10.3).curveTo(2.5,-10.3,4.1,-8.6).curveTo(6.5,-6.3,6.5,-1.1).lineTo(6.5,1.3).curveTo(6.5,6.3,4.1,8.6).curveTo(2.5,10.2,0,10.3).curveTo(-2.4,10.2,-4.1,8.6).closePath().moveTo(-2.1,-7.1).curveTo(-3.7,-5.6,-3.7,-1.4).lineTo(-3.7,1.3).curveTo(-3.7,5.5,-2,7.1).curveTo(-1.1,8.1,0,8).curveTo(1.2,8.1,2.1,7.1).curveTo(3.6,5.6,3.6,1.3).lineTo(3.6,-1.4).curveTo(3.6,-5.6,2.1,-7.1).curveTo(1.2,-8,0,-8).curveTo(-1.2,-8,-2.1,-7.1).closePath();
	this.shape_29.setTransform(35,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10,p:{x:26.275}}]},10).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_10,p:{x:18.775}},{t:this.shape_19}]},1).to({state:[]},1).to({state:[{t:this.shape_20,p:{x:26.275}}]},10).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_20,p:{x:18.775}},{t:this.shape_29}]},1).wait(1));

	// レイヤー_1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#000000").beginStroke().moveTo(0.4,10.2).lineTo(0.4,-5.5).lineTo(-3.1,-5.5).lineTo(-3.1,-6.8).lineTo(-2.1,-6.8).curveTo(-0.4,-6.8,0.5,-7.8).curveTo(1.6,-8.9,1.7,-10.2).lineTo(3.1,-10.2).lineTo(3.1,10.2).closePath();
	this.shape_30.setTransform(26.275,17);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#000000").beginStroke().moveTo(-6,10.1).lineTo(-6,8.1).curveTo(-5.7,7,-4,4.9).lineTo(0.8,-0.4).curveTo(2.8,-2.5,2.8,-4.9).curveTo(2.8,-6.3,1.9,-7.2).curveTo(1.1,-7.9,0.1,-7.9).curveTo(-0.8,-7.9,-1.5,-7.2).curveTo(-2.8,-5.9,-2.8,-3.1).lineTo(-5.5,-3.1).curveTo(-5.5,-6.8,-3.6,-8.6).curveTo(-2.1,-10.1,0,-10.1).curveTo(2.6,-10.1,4.1,-8.6).curveTo(5.6,-7.1,5.6,-4.9).curveTo(5.7,-2.1,3.8,0).curveTo(2.2,2,0.5,3.9).lineTo(-1.4,6).curveTo(-2.3,7,-2.8,7.9).lineTo(6,7.9).lineTo(6,10.1).closePath();
	this.shape_31.setTransform(27.5,17.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#000000").beginStroke().moveTo(-4.4,8.6).curveTo(-6,7,-6,4.7).lineTo(-6,3.8).lineTo(-3.3,3.8).lineTo(-3.3,4.6).curveTo(-3.3,6.1,-2.2,7.2).curveTo(-1.4,8,-0.2,8).curveTo(1.3,8,2.3,7).curveTo(3.1,6.1,3.2,4.2).curveTo(3.1,2.5,2.3,1.6).curveTo(1.3,0.6,0.1,0.6).lineTo(-0.8,0.6).lineTo(-0.8,-1.3).lineTo(-0.1,-1.3).curveTo(0.9,-1.3,1.9,-2.3).curveTo(2.8,-3.3,2.8,-5).curveTo(2.8,-6.5,1.9,-7.4).curveTo(1.1,-8.2,0,-8.2).curveTo(-1,-8.2,-1.9,-7.4).curveTo(-2.8,-6.4,-2.9,-4.3).lineTo(-5.5,-4.3).curveTo(-5.5,-7,-3.7,-8.8).curveTo(-2.3,-10.3,0,-10.2).curveTo(2.6,-10.3,4.1,-8.8).curveTo(5.5,-7.4,5.5,-5).curveTo(5.5,-2.6,4.4,-1.5).curveTo(3.5,-0.7,2.6,-0.5).curveTo(3.8,-0.2,4.5,0.6).curveTo(6,2,6,4.4).curveTo(6,7,4.4,8.6).curveTo(2.7,10.2,-0.2,10.3).curveTo(-2.7,10.2,-4.4,8.6).closePath();
	this.shape_32.setTransform(27.5,17.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#000000").beginStroke().moveTo(1.3,10.1).lineTo(1.3,5).lineTo(-6.5,5).lineTo(-6.5,2.6).lineTo(1.3,-10.1).lineTo(4,-10.1).lineTo(4,2.7).lineTo(6.5,2.7).lineTo(6.5,5).lineTo(4,5).lineTo(4,10.1).closePath().moveTo(-3.9,2.7).lineTo(1.3,2.7).lineTo(1.3,-5.8).closePath();
	this.shape_33.setTransform(27.55,17.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#000000").beginStroke().moveTo(-4.1,8.6).curveTo(-5.6,7.1,-6,4.1).lineTo(-3.3,4.1).curveTo(-3,6.2,-2.1,7.2).curveTo(-1.4,7.9,-0.3,7.9).curveTo(1.1,7.9,1.9,7.1).curveTo(3.2,5.8,3.2,2.7).curveTo(3.2,-0.2,2.1,-1.2).curveTo(1.4,-2,0.5,-2).curveTo(-0.9,-2,-2,-0.9).lineTo(-2.9,0.1).lineTo(-5.3,0.1).lineTo(-5.2,-0.6).lineTo(-4.6,-9.6).lineTo(-4.6,-10.2).lineTo(5.5,-10.2).lineTo(5.5,-7.9).lineTo(-2.4,-7.9).lineTo(-2.4,-7.5).curveTo(-2.5,-5.3,-2.7,-3.2).lineTo(-2.8,-2.5).curveTo(-1.3,-3.9,0.5,-3.9).curveTo(2.8,-3.9,4.4,-2.4).curveTo(6,-0.8,6,2.4).curveTo(6,6.4,3.8,8.5).curveTo(2.3,10.1,-0.2,10.2).curveTo(-2.6,10.1,-4.1,8.6).closePath();
	this.shape_34.setTransform(27.5,17.35);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#000000").beginStroke().moveTo(-3.7,8.5).curveTo(-5.9,6.4,-5.8,0.4).curveTo(-5.8,-6.1,-3,-8.9).curveTo(-1.6,-10.3,0.5,-10.2).curveTo(2.7,-10.3,4.1,-8.9).curveTo(5.6,-7.4,5.6,-5).lineTo(2.9,-5).curveTo(2.9,-6.6,2.3,-7.4).curveTo(1.5,-8.1,0.5,-8.1).curveTo(-0.6,-8.1,-1.3,-7.4).curveTo(-3.1,-5.5,-3.1,-0.8).curveTo(-2.7,-1.6,-2,-2.3).curveTo(-1,-3.4,0.6,-3.4).curveTo(2.7,-3.4,4.1,-1.9).curveTo(5.8,-0.2,5.9,3.3).curveTo(5.8,7,4,8.9).curveTo(2.6,10.3,0.1,10.3).curveTo(-2,10.2,-3.7,8.5).closePath().moveTo(-1.7,-0.4).curveTo(-3,0.8,-2.9,3.1).curveTo(-2.9,5.9,-1.5,7.3).curveTo(-0.7,8.1,0.2,8.1).curveTo(1.3,8.1,2,7.4).curveTo(3.1,6.4,3,3.3).curveTo(3.1,0.6,2,-0.4).curveTo(1.1,-1.3,0.3,-1.2).curveTo(-0.8,-1.3,-1.7,-0.4).closePath();
	this.shape_35.setTransform(27.5,17.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#000000").beginStroke().moveTo(-2.7,10).lineTo(3,-7.8).lineTo(-5.6,-7.8).lineTo(-5.6,-10).lineTo(5.6,-10).lineTo(5.6,-7.4).lineTo(-0.1,10).closePath();
	this.shape_36.setTransform(27.575,17.225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#000000").beginStroke().moveTo(-4.5,8.7).curveTo(-6.1,7,-6.1,4.7).curveTo(-6.1,2.4,-4.7,1).curveTo(-3.7,0.1,-2.7,-0.2).lineTo(-2.7,-0.4).curveTo(-3.4,-0.6,-4.2,-1.5).curveTo(-5.5,-2.8,-5.5,-4.7).curveTo(-5.5,-7.2,-3.8,-8.9).curveTo(-2.4,-10.3,0,-10.2).curveTo(2.4,-10.3,4,-8.8).curveTo(5.5,-7.2,5.5,-4.7).curveTo(5.5,-2.7,4.1,-1.2).curveTo(3.5,-0.6,2.7,-0.4).lineTo(2.7,-0.2).curveTo(3.7,0.1,4.7,1).curveTo(6.1,2.4,6.1,4.7).curveTo(6.1,7,4.5,8.7).curveTo(3,10.2,0,10.3).curveTo(-3,10.2,-4.5,8.7).closePath().moveTo(-2.5,1.7).curveTo(-3.4,2.6,-3.4,4.4).curveTo(-3.4,6.1,-2.4,7.2).curveTo(-1.4,8.1,0,8.1).curveTo(1.4,8.1,2.4,7.2).curveTo(3.4,6.1,3.4,4.4).curveTo(3.4,2.6,2.4,1.6).curveTo(1.5,0.7,0,0.8).curveTo(-1.5,0.7,-2.5,1.7).closePath().moveTo(-2,-7.4).curveTo(-2.9,-6.4,-2.9,-4.7).curveTo(-2.9,-3,-2,-2).curveTo(-1.1,-1.3,-0.1,-1.2).curveTo(1.3,-1.2,2,-1.9).curveTo(2.9,-2.9,2.9,-4.7).curveTo(2.9,-6.4,2,-7.4).curveTo(1.1,-8.2,0,-8.2).curveTo(-1.1,-8.2,-2,-7.4).closePath();
	this.shape_37.setTransform(27.5,17.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#000000").beginStroke().moveTo(-4.1,8.9).curveTo(-5.6,7.4,-5.6,5).lineTo(-2.9,5).curveTo(-3,6.5,-2,7.6).curveTo(-1.5,8,-0.6,8).curveTo(0.4,8,1.3,7.2).curveTo(3.1,5.3,3.2,0.2).curveTo(2.7,1,2.1,1.6).curveTo(0.8,2.8,-1,2.8).curveTo(-2.8,2.8,-4,1.7).curveTo(-5.8,-0.2,-5.8,-3.4).curveTo(-5.9,-6.9,-3.7,-9).curveTo(-2.5,-10.2,-0.2,-10.2).curveTo(1.9,-10.3,3.4,-8.8).curveTo(5.9,-6.3,5.9,-0.2).curveTo(5.9,6,3.3,8.6).curveTo(1.7,10.2,-0.6,10.3).curveTo(-2.8,10.3,-4.1,8.9).closePath().moveTo(-1.9,-7.4).curveTo(-3,-6.3,-3,-3.4).curveTo(-3,-1,-2.1,-0.1).curveTo(-1.3,0.7,-0.4,0.8).curveTo(0.9,0.8,1.7,0).curveTo(2.9,-1.3,2.9,-3.1).curveTo(2.9,-6,1.7,-7.4).curveTo(0.8,-8.2,-0.2,-8.2).curveTo(-1.1,-8.2,-1.9,-7.4).closePath();
	this.shape_38.setTransform(27.5,17.25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#000000").beginStroke().moveTo(-4.1,8.6).curveTo(-6.4,6.3,-6.5,1.3).lineTo(-6.5,-1.1).curveTo(-6.4,-6.3,-4.1,-8.6).curveTo(-2.4,-10.3,0,-10.3).curveTo(2.5,-10.3,4.1,-8.6).curveTo(6.5,-6.3,6.5,-1.1).lineTo(6.5,1.3).curveTo(6.5,6.3,4.1,8.6).curveTo(2.5,10.2,0,10.3).curveTo(-2.4,10.2,-4.1,8.6).closePath().moveTo(-2.1,-7.1).curveTo(-3.7,-5.6,-3.7,-1.4).lineTo(-3.7,1.3).curveTo(-3.7,5.5,-2,7.1).curveTo(-1.1,8.1,0,8).curveTo(1.2,8.1,2.1,7.1).curveTo(3.6,5.6,3.6,1.3).lineTo(3.6,-1.4).curveTo(3.6,-5.6,2.1,-7.1).curveTo(1.2,-8,0,-8).curveTo(-1.2,-8,-2.1,-7.1).closePath();
	this.shape_39.setTransform(35,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30,p:{x:26.275}}]}).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_30,p:{x:18.775}},{t:this.shape_39}]},1).to({state:[]},1).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-0.2,125,34);


(lib.シンボル3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"j":15};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_5 = function() {
		this.gotoAndStop("j");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(35));

	// レイヤー_3
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#00FF00").beginStroke().moveTo(0.4,10.2).lineTo(0.4,-5.5).lineTo(-3.1,-5.5).lineTo(-3.1,-6.8).lineTo(-2.1,-6.8).curveTo(-0.4,-6.8,0.5,-7.8).curveTo(1.6,-8.9,1.7,-10.2).lineTo(3.1,-10.2).lineTo(3.1,10.2).closePath();
	this.shape.setTransform(26.275,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#00FF00").beginStroke().moveTo(-6,10.1).lineTo(-6,8.1).curveTo(-5.7,7,-4,4.9).lineTo(0.8,-0.4).curveTo(2.8,-2.5,2.8,-4.9).curveTo(2.8,-6.3,1.9,-7.2).curveTo(1.1,-7.9,0.1,-7.9).curveTo(-0.8,-7.9,-1.5,-7.2).curveTo(-2.8,-5.9,-2.8,-3.1).lineTo(-5.5,-3.1).curveTo(-5.5,-6.8,-3.6,-8.6).curveTo(-2.1,-10.1,0,-10.1).curveTo(2.6,-10.1,4.1,-8.6).curveTo(5.6,-7.1,5.6,-4.9).curveTo(5.7,-2.1,3.8,0).curveTo(2.2,2,0.5,3.9).lineTo(-1.4,6).curveTo(-2.3,7,-2.8,7.9).lineTo(6,7.9).lineTo(6,10.1).closePath();
	this.shape_1.setTransform(27.5,17.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#00FF00").beginStroke().moveTo(-4.4,8.6).curveTo(-6,7,-6,4.7).lineTo(-6,3.8).lineTo(-3.3,3.8).lineTo(-3.3,4.6).curveTo(-3.3,6.1,-2.2,7.2).curveTo(-1.4,8,-0.2,8).curveTo(1.3,8,2.3,7).curveTo(3.1,6.1,3.2,4.2).curveTo(3.1,2.5,2.3,1.6).curveTo(1.3,0.6,0.1,0.6).lineTo(-0.8,0.6).lineTo(-0.8,-1.3).lineTo(-0.1,-1.3).curveTo(0.9,-1.3,1.9,-2.3).curveTo(2.8,-3.3,2.8,-5).curveTo(2.8,-6.5,1.9,-7.4).curveTo(1.1,-8.2,0,-8.2).curveTo(-1,-8.2,-1.9,-7.4).curveTo(-2.8,-6.4,-2.9,-4.3).lineTo(-5.5,-4.3).curveTo(-5.5,-7,-3.7,-8.8).curveTo(-2.3,-10.3,0,-10.2).curveTo(2.6,-10.3,4.1,-8.8).curveTo(5.5,-7.4,5.5,-5).curveTo(5.5,-2.6,4.4,-1.5).curveTo(3.5,-0.7,2.6,-0.5).curveTo(3.8,-0.2,4.5,0.6).curveTo(6,2,6,4.4).curveTo(6,7,4.4,8.6).curveTo(2.7,10.2,-0.2,10.3).curveTo(-2.7,10.2,-4.4,8.6).closePath();
	this.shape_2.setTransform(27.5,17.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#00FF00").beginStroke().moveTo(1.3,10.1).lineTo(1.3,5).lineTo(-6.5,5).lineTo(-6.5,2.6).lineTo(1.3,-10.1).lineTo(4,-10.1).lineTo(4,2.7).lineTo(6.5,2.7).lineTo(6.5,5).lineTo(4,5).lineTo(4,10.1).closePath().moveTo(-3.9,2.7).lineTo(1.3,2.7).lineTo(1.3,-5.8).closePath();
	this.shape_3.setTransform(27.55,17.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#00FF00").beginStroke().moveTo(-4.1,8.6).curveTo(-5.6,7.1,-6,4.1).lineTo(-3.3,4.1).curveTo(-3,6.2,-2.1,7.2).curveTo(-1.4,7.9,-0.3,7.9).curveTo(1.1,7.9,1.9,7.1).curveTo(3.2,5.8,3.2,2.7).curveTo(3.2,-0.2,2.1,-1.2).curveTo(1.4,-2,0.5,-2).curveTo(-0.9,-2,-2,-0.9).lineTo(-2.9,0.1).lineTo(-5.3,0.1).lineTo(-5.2,-0.6).lineTo(-4.6,-9.6).lineTo(-4.6,-10.2).lineTo(5.5,-10.2).lineTo(5.5,-7.9).lineTo(-2.4,-7.9).lineTo(-2.4,-7.5).curveTo(-2.5,-5.3,-2.7,-3.2).lineTo(-2.8,-2.5).curveTo(-1.3,-3.9,0.5,-3.9).curveTo(2.8,-3.9,4.4,-2.4).curveTo(6,-0.8,6,2.4).curveTo(6,6.4,3.8,8.5).curveTo(2.3,10.1,-0.2,10.2).curveTo(-2.6,10.1,-4.1,8.6).closePath();
	this.shape_4.setTransform(27.5,17.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#00FF00").beginStroke().moveTo(-3.7,8.5).curveTo(-5.9,6.4,-5.8,0.4).curveTo(-5.8,-6.1,-3,-8.9).curveTo(-1.6,-10.3,0.5,-10.2).curveTo(2.7,-10.3,4.1,-8.9).curveTo(5.6,-7.4,5.6,-5).lineTo(2.9,-5).curveTo(2.9,-6.6,2.3,-7.4).curveTo(1.5,-8.1,0.5,-8.1).curveTo(-0.6,-8.1,-1.3,-7.4).curveTo(-3.1,-5.5,-3.1,-0.8).curveTo(-2.7,-1.6,-2,-2.3).curveTo(-1,-3.4,0.6,-3.4).curveTo(2.7,-3.4,4.1,-1.9).curveTo(5.8,-0.2,5.9,3.3).curveTo(5.8,7,4,8.9).curveTo(2.6,10.3,0.1,10.3).curveTo(-2,10.2,-3.7,8.5).closePath().moveTo(-1.7,-0.4).curveTo(-3,0.8,-2.9,3.1).curveTo(-2.9,5.9,-1.5,7.3).curveTo(-0.7,8.1,0.2,8.1).curveTo(1.3,8.1,2,7.4).curveTo(3.1,6.4,3,3.3).curveTo(3.1,0.6,2,-0.4).curveTo(1.1,-1.3,0.3,-1.2).curveTo(-0.8,-1.3,-1.7,-0.4).closePath();
	this.shape_5.setTransform(27.5,17.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#00FF00").beginStroke().moveTo(-2.7,10).lineTo(3,-7.8).lineTo(-5.6,-7.8).lineTo(-5.6,-10).lineTo(5.6,-10).lineTo(5.6,-7.4).lineTo(-0.1,10).closePath();
	this.shape_6.setTransform(27.575,17.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#00FF00").beginStroke().moveTo(-4.5,8.7).curveTo(-6.1,7,-6.1,4.7).curveTo(-6.1,2.4,-4.7,1).curveTo(-3.7,0.1,-2.7,-0.2).lineTo(-2.7,-0.4).curveTo(-3.4,-0.6,-4.2,-1.5).curveTo(-5.5,-2.8,-5.5,-4.7).curveTo(-5.5,-7.2,-3.8,-8.9).curveTo(-2.4,-10.3,0,-10.2).curveTo(2.4,-10.3,4,-8.8).curveTo(5.5,-7.2,5.5,-4.7).curveTo(5.5,-2.7,4.1,-1.2).curveTo(3.5,-0.6,2.7,-0.4).lineTo(2.7,-0.2).curveTo(3.7,0.1,4.7,1).curveTo(6.1,2.4,6.1,4.7).curveTo(6.1,7,4.5,8.7).curveTo(3,10.2,0,10.3).curveTo(-3,10.2,-4.5,8.7).closePath().moveTo(-2.5,1.7).curveTo(-3.4,2.6,-3.4,4.4).curveTo(-3.4,6.1,-2.4,7.2).curveTo(-1.4,8.1,0,8.1).curveTo(1.4,8.1,2.4,7.2).curveTo(3.4,6.1,3.4,4.4).curveTo(3.4,2.6,2.4,1.6).curveTo(1.5,0.7,0,0.8).curveTo(-1.5,0.7,-2.5,1.7).closePath().moveTo(-2,-7.4).curveTo(-2.9,-6.4,-2.9,-4.7).curveTo(-2.9,-3,-2,-2).curveTo(-1.1,-1.3,-0.1,-1.2).curveTo(1.3,-1.2,2,-1.9).curveTo(2.9,-2.9,2.9,-4.7).curveTo(2.9,-6.4,2,-7.4).curveTo(1.1,-8.2,0,-8.2).curveTo(-1.1,-8.2,-2,-7.4).closePath();
	this.shape_7.setTransform(27.5,17.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#00FF00").beginStroke().moveTo(-4.1,8.9).curveTo(-5.6,7.4,-5.6,5).lineTo(-2.9,5).curveTo(-3,6.5,-2,7.6).curveTo(-1.5,8,-0.6,8).curveTo(0.4,8,1.3,7.2).curveTo(3.1,5.3,3.2,0.2).curveTo(2.7,1,2.1,1.6).curveTo(0.8,2.8,-1,2.8).curveTo(-2.8,2.8,-4,1.7).curveTo(-5.8,-0.2,-5.8,-3.4).curveTo(-5.9,-6.9,-3.7,-9).curveTo(-2.5,-10.2,-0.2,-10.2).curveTo(1.9,-10.3,3.4,-8.8).curveTo(5.9,-6.3,5.9,-0.2).curveTo(5.9,6,3.3,8.6).curveTo(1.7,10.2,-0.6,10.3).curveTo(-2.8,10.3,-4.1,8.9).closePath().moveTo(-1.9,-7.4).curveTo(-3,-6.3,-3,-3.4).curveTo(-3,-1,-2.1,-0.1).curveTo(-1.3,0.7,-0.4,0.8).curveTo(0.9,0.8,1.7,0).curveTo(2.9,-1.3,2.9,-3.1).curveTo(2.9,-6,1.7,-7.4).curveTo(0.8,-8.2,-0.2,-8.2).curveTo(-1.1,-8.2,-1.9,-7.4).closePath();
	this.shape_8.setTransform(27.5,17.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#00FF00").beginStroke().moveTo(-4.1,8.6).curveTo(-6.4,6.3,-6.5,1.3).lineTo(-6.5,-1.1).curveTo(-6.4,-6.3,-4.1,-8.6).curveTo(-2.4,-10.3,0,-10.3).curveTo(2.5,-10.3,4.1,-8.6).curveTo(6.5,-6.3,6.5,-1.1).lineTo(6.5,1.3).curveTo(6.5,6.3,4.1,8.6).curveTo(2.5,10.2,0,10.3).curveTo(-2.4,10.2,-4.1,8.6).closePath().moveTo(-2.1,-7.1).curveTo(-3.7,-5.6,-3.7,-1.4).lineTo(-3.7,1.3).curveTo(-3.7,5.5,-2,7.1).curveTo(-1.1,8.1,0,8).curveTo(1.2,8.1,2.1,7.1).curveTo(3.6,5.6,3.6,1.3).lineTo(3.6,-1.4).curveTo(3.6,-5.6,2.1,-7.1).curveTo(1.2,-8,0,-8).curveTo(-1.2,-8,-2.1,-7.1).closePath();
	this.shape_9.setTransform(35,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{x:26.275}}]},20).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape,p:{x:18.775}},{t:this.shape_9}]},1).to({state:[]},1).wait(10));

	// レイヤー_2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FF0000").beginStroke().moveTo(0.4,10.2).lineTo(0.4,-5.5).lineTo(-3.1,-5.5).lineTo(-3.1,-6.8).lineTo(-2.1,-6.8).curveTo(-0.4,-6.8,0.5,-7.8).curveTo(1.6,-8.9,1.7,-10.2).lineTo(3.1,-10.2).lineTo(3.1,10.2).closePath();
	this.shape_10.setTransform(26.275,17);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FF0000").beginStroke().moveTo(-6,10.1).lineTo(-6,8.1).curveTo(-5.7,7,-4,4.9).lineTo(0.8,-0.4).curveTo(2.8,-2.5,2.8,-4.9).curveTo(2.8,-6.3,1.9,-7.2).curveTo(1.1,-7.9,0.1,-7.9).curveTo(-0.8,-7.9,-1.5,-7.2).curveTo(-2.8,-5.9,-2.8,-3.1).lineTo(-5.5,-3.1).curveTo(-5.5,-6.8,-3.6,-8.6).curveTo(-2.1,-10.1,0,-10.1).curveTo(2.6,-10.1,4.1,-8.6).curveTo(5.6,-7.1,5.6,-4.9).curveTo(5.7,-2.1,3.8,0).curveTo(2.2,2,0.5,3.9).lineTo(-1.4,6).curveTo(-2.3,7,-2.8,7.9).lineTo(6,7.9).lineTo(6,10.1).closePath();
	this.shape_11.setTransform(27.5,17.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FF0000").beginStroke().moveTo(-4.4,8.6).curveTo(-6,7,-6,4.7).lineTo(-6,3.8).lineTo(-3.3,3.8).lineTo(-3.3,4.6).curveTo(-3.3,6.1,-2.2,7.2).curveTo(-1.4,8,-0.2,8).curveTo(1.3,8,2.3,7).curveTo(3.1,6.1,3.2,4.2).curveTo(3.1,2.5,2.3,1.6).curveTo(1.3,0.6,0.1,0.6).lineTo(-0.8,0.6).lineTo(-0.8,-1.3).lineTo(-0.1,-1.3).curveTo(0.9,-1.3,1.9,-2.3).curveTo(2.8,-3.3,2.8,-5).curveTo(2.8,-6.5,1.9,-7.4).curveTo(1.1,-8.2,0,-8.2).curveTo(-1,-8.2,-1.9,-7.4).curveTo(-2.8,-6.4,-2.9,-4.3).lineTo(-5.5,-4.3).curveTo(-5.5,-7,-3.7,-8.8).curveTo(-2.3,-10.3,0,-10.2).curveTo(2.6,-10.3,4.1,-8.8).curveTo(5.5,-7.4,5.5,-5).curveTo(5.5,-2.6,4.4,-1.5).curveTo(3.5,-0.7,2.6,-0.5).curveTo(3.8,-0.2,4.5,0.6).curveTo(6,2,6,4.4).curveTo(6,7,4.4,8.6).curveTo(2.7,10.2,-0.2,10.3).curveTo(-2.7,10.2,-4.4,8.6).closePath();
	this.shape_12.setTransform(27.5,17.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FF0000").beginStroke().moveTo(1.3,10.1).lineTo(1.3,5).lineTo(-6.5,5).lineTo(-6.5,2.6).lineTo(1.3,-10.1).lineTo(4,-10.1).lineTo(4,2.7).lineTo(6.5,2.7).lineTo(6.5,5).lineTo(4,5).lineTo(4,10.1).closePath().moveTo(-3.9,2.7).lineTo(1.3,2.7).lineTo(1.3,-5.8).closePath();
	this.shape_13.setTransform(27.55,17.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FF0000").beginStroke().moveTo(-4.1,8.6).curveTo(-5.6,7.1,-6,4.1).lineTo(-3.3,4.1).curveTo(-3,6.2,-2.1,7.2).curveTo(-1.4,7.9,-0.3,7.9).curveTo(1.1,7.9,1.9,7.1).curveTo(3.2,5.8,3.2,2.7).curveTo(3.2,-0.2,2.1,-1.2).curveTo(1.4,-2,0.5,-2).curveTo(-0.9,-2,-2,-0.9).lineTo(-2.9,0.1).lineTo(-5.3,0.1).lineTo(-5.2,-0.6).lineTo(-4.6,-9.6).lineTo(-4.6,-10.2).lineTo(5.5,-10.2).lineTo(5.5,-7.9).lineTo(-2.4,-7.9).lineTo(-2.4,-7.5).curveTo(-2.5,-5.3,-2.7,-3.2).lineTo(-2.8,-2.5).curveTo(-1.3,-3.9,0.5,-3.9).curveTo(2.8,-3.9,4.4,-2.4).curveTo(6,-0.8,6,2.4).curveTo(6,6.4,3.8,8.5).curveTo(2.3,10.1,-0.2,10.2).curveTo(-2.6,10.1,-4.1,8.6).closePath();
	this.shape_14.setTransform(27.5,17.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FF0000").beginStroke().moveTo(-3.7,8.5).curveTo(-5.9,6.4,-5.8,0.4).curveTo(-5.8,-6.1,-3,-8.9).curveTo(-1.6,-10.3,0.5,-10.2).curveTo(2.7,-10.3,4.1,-8.9).curveTo(5.6,-7.4,5.6,-5).lineTo(2.9,-5).curveTo(2.9,-6.6,2.3,-7.4).curveTo(1.5,-8.1,0.5,-8.1).curveTo(-0.6,-8.1,-1.3,-7.4).curveTo(-3.1,-5.5,-3.1,-0.8).curveTo(-2.7,-1.6,-2,-2.3).curveTo(-1,-3.4,0.6,-3.4).curveTo(2.7,-3.4,4.1,-1.9).curveTo(5.8,-0.2,5.9,3.3).curveTo(5.8,7,4,8.9).curveTo(2.6,10.3,0.1,10.3).curveTo(-2,10.2,-3.7,8.5).closePath().moveTo(-1.7,-0.4).curveTo(-3,0.8,-2.9,3.1).curveTo(-2.9,5.9,-1.5,7.3).curveTo(-0.7,8.1,0.2,8.1).curveTo(1.3,8.1,2,7.4).curveTo(3.1,6.4,3,3.3).curveTo(3.1,0.6,2,-0.4).curveTo(1.1,-1.3,0.3,-1.2).curveTo(-0.8,-1.3,-1.7,-0.4).closePath();
	this.shape_15.setTransform(27.5,17.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FF0000").beginStroke().moveTo(-2.7,10).lineTo(3,-7.8).lineTo(-5.6,-7.8).lineTo(-5.6,-10).lineTo(5.6,-10).lineTo(5.6,-7.4).lineTo(-0.1,10).closePath();
	this.shape_16.setTransform(27.575,17.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FF0000").beginStroke().moveTo(-4.5,8.7).curveTo(-6.1,7,-6.1,4.7).curveTo(-6.1,2.4,-4.7,1).curveTo(-3.7,0.1,-2.7,-0.2).lineTo(-2.7,-0.4).curveTo(-3.4,-0.6,-4.2,-1.5).curveTo(-5.5,-2.8,-5.5,-4.7).curveTo(-5.5,-7.2,-3.8,-8.9).curveTo(-2.4,-10.3,0,-10.2).curveTo(2.4,-10.3,4,-8.8).curveTo(5.5,-7.2,5.5,-4.7).curveTo(5.5,-2.7,4.1,-1.2).curveTo(3.5,-0.6,2.7,-0.4).lineTo(2.7,-0.2).curveTo(3.7,0.1,4.7,1).curveTo(6.1,2.4,6.1,4.7).curveTo(6.1,7,4.5,8.7).curveTo(3,10.2,0,10.3).curveTo(-3,10.2,-4.5,8.7).closePath().moveTo(-2.5,1.7).curveTo(-3.4,2.6,-3.4,4.4).curveTo(-3.4,6.1,-2.4,7.2).curveTo(-1.4,8.1,0,8.1).curveTo(1.4,8.1,2.4,7.2).curveTo(3.4,6.1,3.4,4.4).curveTo(3.4,2.6,2.4,1.6).curveTo(1.5,0.7,0,0.8).curveTo(-1.5,0.7,-2.5,1.7).closePath().moveTo(-2,-7.4).curveTo(-2.9,-6.4,-2.9,-4.7).curveTo(-2.9,-3,-2,-2).curveTo(-1.1,-1.3,-0.1,-1.2).curveTo(1.3,-1.2,2,-1.9).curveTo(2.9,-2.9,2.9,-4.7).curveTo(2.9,-6.4,2,-7.4).curveTo(1.1,-8.2,0,-8.2).curveTo(-1.1,-8.2,-2,-7.4).closePath();
	this.shape_17.setTransform(27.5,17.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FF0000").beginStroke().moveTo(-4.1,8.9).curveTo(-5.6,7.4,-5.6,5).lineTo(-2.9,5).curveTo(-3,6.5,-2,7.6).curveTo(-1.5,8,-0.6,8).curveTo(0.4,8,1.3,7.2).curveTo(3.1,5.3,3.2,0.2).curveTo(2.7,1,2.1,1.6).curveTo(0.8,2.8,-1,2.8).curveTo(-2.8,2.8,-4,1.7).curveTo(-5.8,-0.2,-5.8,-3.4).curveTo(-5.9,-6.9,-3.7,-9).curveTo(-2.5,-10.2,-0.2,-10.2).curveTo(1.9,-10.3,3.4,-8.8).curveTo(5.9,-6.3,5.9,-0.2).curveTo(5.9,6,3.3,8.6).curveTo(1.7,10.2,-0.6,10.3).curveTo(-2.8,10.3,-4.1,8.9).closePath().moveTo(-1.9,-7.4).curveTo(-3,-6.3,-3,-3.4).curveTo(-3,-1,-2.1,-0.1).curveTo(-1.3,0.7,-0.4,0.8).curveTo(0.9,0.8,1.7,0).curveTo(2.9,-1.3,2.9,-3.1).curveTo(2.9,-6,1.7,-7.4).curveTo(0.8,-8.2,-0.2,-8.2).curveTo(-1.1,-8.2,-1.9,-7.4).closePath();
	this.shape_18.setTransform(27.5,17.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FF0000").beginStroke().moveTo(-4.1,8.6).curveTo(-6.4,6.3,-6.5,1.3).lineTo(-6.5,-1.1).curveTo(-6.4,-6.3,-4.1,-8.6).curveTo(-2.4,-10.3,0,-10.3).curveTo(2.5,-10.3,4.1,-8.6).curveTo(6.5,-6.3,6.5,-1.1).lineTo(6.5,1.3).curveTo(6.5,6.3,4.1,8.6).curveTo(2.5,10.2,0,10.3).curveTo(-2.4,10.2,-4.1,8.6).closePath().moveTo(-2.1,-7.1).curveTo(-3.7,-5.6,-3.7,-1.4).lineTo(-3.7,1.3).curveTo(-3.7,5.5,-2,7.1).curveTo(-1.1,8.1,0,8).curveTo(1.2,8.1,2.1,7.1).curveTo(3.6,5.6,3.6,1.3).lineTo(3.6,-1.4).curveTo(3.6,-5.6,2.1,-7.1).curveTo(1.2,-8,0,-8).curveTo(-1.2,-8,-2.1,-7.1).closePath();
	this.shape_19.setTransform(35,17.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#0000FF").beginStroke().moveTo(0.4,10.2).lineTo(0.4,-5.5).lineTo(-3.1,-5.5).lineTo(-3.1,-6.8).lineTo(-2.1,-6.8).curveTo(-0.4,-6.8,0.5,-7.8).curveTo(1.6,-8.9,1.7,-10.2).lineTo(3.1,-10.2).lineTo(3.1,10.2).closePath();
	this.shape_20.setTransform(26.275,17);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#0000FF").beginStroke().moveTo(-6,10.1).lineTo(-6,8.1).curveTo(-5.7,7,-4,4.9).lineTo(0.8,-0.4).curveTo(2.8,-2.5,2.8,-4.9).curveTo(2.8,-6.3,1.9,-7.2).curveTo(1.1,-7.9,0.1,-7.9).curveTo(-0.8,-7.9,-1.5,-7.2).curveTo(-2.8,-5.9,-2.8,-3.1).lineTo(-5.5,-3.1).curveTo(-5.5,-6.8,-3.6,-8.6).curveTo(-2.1,-10.1,0,-10.1).curveTo(2.6,-10.1,4.1,-8.6).curveTo(5.6,-7.1,5.6,-4.9).curveTo(5.7,-2.1,3.8,0).curveTo(2.2,2,0.5,3.9).lineTo(-1.4,6).curveTo(-2.3,7,-2.8,7.9).lineTo(6,7.9).lineTo(6,10.1).closePath();
	this.shape_21.setTransform(27.5,17.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#0000FF").beginStroke().moveTo(-4.4,8.6).curveTo(-6,7,-6,4.7).lineTo(-6,3.8).lineTo(-3.3,3.8).lineTo(-3.3,4.6).curveTo(-3.3,6.1,-2.2,7.2).curveTo(-1.4,8,-0.2,8).curveTo(1.3,8,2.3,7).curveTo(3.1,6.1,3.2,4.2).curveTo(3.1,2.5,2.3,1.6).curveTo(1.3,0.6,0.1,0.6).lineTo(-0.8,0.6).lineTo(-0.8,-1.3).lineTo(-0.1,-1.3).curveTo(0.9,-1.3,1.9,-2.3).curveTo(2.8,-3.3,2.8,-5).curveTo(2.8,-6.5,1.9,-7.4).curveTo(1.1,-8.2,0,-8.2).curveTo(-1,-8.2,-1.9,-7.4).curveTo(-2.8,-6.4,-2.9,-4.3).lineTo(-5.5,-4.3).curveTo(-5.5,-7,-3.7,-8.8).curveTo(-2.3,-10.3,0,-10.2).curveTo(2.6,-10.3,4.1,-8.8).curveTo(5.5,-7.4,5.5,-5).curveTo(5.5,-2.6,4.4,-1.5).curveTo(3.5,-0.7,2.6,-0.5).curveTo(3.8,-0.2,4.5,0.6).curveTo(6,2,6,4.4).curveTo(6,7,4.4,8.6).curveTo(2.7,10.2,-0.2,10.3).curveTo(-2.7,10.2,-4.4,8.6).closePath();
	this.shape_22.setTransform(27.5,17.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#0000FF").beginStroke().moveTo(1.3,10.1).lineTo(1.3,5).lineTo(-6.5,5).lineTo(-6.5,2.6).lineTo(1.3,-10.1).lineTo(4,-10.1).lineTo(4,2.7).lineTo(6.5,2.7).lineTo(6.5,5).lineTo(4,5).lineTo(4,10.1).closePath().moveTo(-3.9,2.7).lineTo(1.3,2.7).lineTo(1.3,-5.8).closePath();
	this.shape_23.setTransform(27.55,17.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#0000FF").beginStroke().moveTo(-4.1,8.6).curveTo(-5.6,7.1,-6,4.1).lineTo(-3.3,4.1).curveTo(-3,6.2,-2.1,7.2).curveTo(-1.4,7.9,-0.3,7.9).curveTo(1.1,7.9,1.9,7.1).curveTo(3.2,5.8,3.2,2.7).curveTo(3.2,-0.2,2.1,-1.2).curveTo(1.4,-2,0.5,-2).curveTo(-0.9,-2,-2,-0.9).lineTo(-2.9,0.1).lineTo(-5.3,0.1).lineTo(-5.2,-0.6).lineTo(-4.6,-9.6).lineTo(-4.6,-10.2).lineTo(5.5,-10.2).lineTo(5.5,-7.9).lineTo(-2.4,-7.9).lineTo(-2.4,-7.5).curveTo(-2.5,-5.3,-2.7,-3.2).lineTo(-2.8,-2.5).curveTo(-1.3,-3.9,0.5,-3.9).curveTo(2.8,-3.9,4.4,-2.4).curveTo(6,-0.8,6,2.4).curveTo(6,6.4,3.8,8.5).curveTo(2.3,10.1,-0.2,10.2).curveTo(-2.6,10.1,-4.1,8.6).closePath();
	this.shape_24.setTransform(27.5,17.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#0000FF").beginStroke().moveTo(-3.7,8.5).curveTo(-5.9,6.4,-5.8,0.4).curveTo(-5.8,-6.1,-3,-8.9).curveTo(-1.6,-10.3,0.5,-10.2).curveTo(2.7,-10.3,4.1,-8.9).curveTo(5.6,-7.4,5.6,-5).lineTo(2.9,-5).curveTo(2.9,-6.6,2.3,-7.4).curveTo(1.5,-8.1,0.5,-8.1).curveTo(-0.6,-8.1,-1.3,-7.4).curveTo(-3.1,-5.5,-3.1,-0.8).curveTo(-2.7,-1.6,-2,-2.3).curveTo(-1,-3.4,0.6,-3.4).curveTo(2.7,-3.4,4.1,-1.9).curveTo(5.8,-0.2,5.9,3.3).curveTo(5.8,7,4,8.9).curveTo(2.6,10.3,0.1,10.3).curveTo(-2,10.2,-3.7,8.5).closePath().moveTo(-1.7,-0.4).curveTo(-3,0.8,-2.9,3.1).curveTo(-2.9,5.9,-1.5,7.3).curveTo(-0.7,8.1,0.2,8.1).curveTo(1.3,8.1,2,7.4).curveTo(3.1,6.4,3,3.3).curveTo(3.1,0.6,2,-0.4).curveTo(1.1,-1.3,0.3,-1.2).curveTo(-0.8,-1.3,-1.7,-0.4).closePath();
	this.shape_25.setTransform(27.5,17.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#0000FF").beginStroke().moveTo(-2.7,10).lineTo(3,-7.8).lineTo(-5.6,-7.8).lineTo(-5.6,-10).lineTo(5.6,-10).lineTo(5.6,-7.4).lineTo(-0.1,10).closePath();
	this.shape_26.setTransform(27.575,17.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#0000FF").beginStroke().moveTo(-4.5,8.7).curveTo(-6.1,7,-6.1,4.7).curveTo(-6.1,2.4,-4.7,1).curveTo(-3.7,0.1,-2.7,-0.2).lineTo(-2.7,-0.4).curveTo(-3.4,-0.6,-4.2,-1.5).curveTo(-5.5,-2.8,-5.5,-4.7).curveTo(-5.5,-7.2,-3.8,-8.9).curveTo(-2.4,-10.3,0,-10.2).curveTo(2.4,-10.3,4,-8.8).curveTo(5.5,-7.2,5.5,-4.7).curveTo(5.5,-2.7,4.1,-1.2).curveTo(3.5,-0.6,2.7,-0.4).lineTo(2.7,-0.2).curveTo(3.7,0.1,4.7,1).curveTo(6.1,2.4,6.1,4.7).curveTo(6.1,7,4.5,8.7).curveTo(3,10.2,0,10.3).curveTo(-3,10.2,-4.5,8.7).closePath().moveTo(-2.5,1.7).curveTo(-3.4,2.6,-3.4,4.4).curveTo(-3.4,6.1,-2.4,7.2).curveTo(-1.4,8.1,0,8.1).curveTo(1.4,8.1,2.4,7.2).curveTo(3.4,6.1,3.4,4.4).curveTo(3.4,2.6,2.4,1.6).curveTo(1.5,0.7,0,0.8).curveTo(-1.5,0.7,-2.5,1.7).closePath().moveTo(-2,-7.4).curveTo(-2.9,-6.4,-2.9,-4.7).curveTo(-2.9,-3,-2,-2).curveTo(-1.1,-1.3,-0.1,-1.2).curveTo(1.3,-1.2,2,-1.9).curveTo(2.9,-2.9,2.9,-4.7).curveTo(2.9,-6.4,2,-7.4).curveTo(1.1,-8.2,0,-8.2).curveTo(-1.1,-8.2,-2,-7.4).closePath();
	this.shape_27.setTransform(27.5,17.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#0000FF").beginStroke().moveTo(-4.1,8.9).curveTo(-5.6,7.4,-5.6,5).lineTo(-2.9,5).curveTo(-3,6.5,-2,7.6).curveTo(-1.5,8,-0.6,8).curveTo(0.4,8,1.3,7.2).curveTo(3.1,5.3,3.2,0.2).curveTo(2.7,1,2.1,1.6).curveTo(0.8,2.8,-1,2.8).curveTo(-2.8,2.8,-4,1.7).curveTo(-5.8,-0.2,-5.8,-3.4).curveTo(-5.9,-6.9,-3.7,-9).curveTo(-2.5,-10.2,-0.2,-10.2).curveTo(1.9,-10.3,3.4,-8.8).curveTo(5.9,-6.3,5.9,-0.2).curveTo(5.9,6,3.3,8.6).curveTo(1.7,10.2,-0.6,10.3).curveTo(-2.8,10.3,-4.1,8.9).closePath().moveTo(-1.9,-7.4).curveTo(-3,-6.3,-3,-3.4).curveTo(-3,-1,-2.1,-0.1).curveTo(-1.3,0.7,-0.4,0.8).curveTo(0.9,0.8,1.7,0).curveTo(2.9,-1.3,2.9,-3.1).curveTo(2.9,-6,1.7,-7.4).curveTo(0.8,-8.2,-0.2,-8.2).curveTo(-1.1,-8.2,-1.9,-7.4).closePath();
	this.shape_28.setTransform(27.5,17.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#0000FF").beginStroke().moveTo(-4.1,8.6).curveTo(-6.4,6.3,-6.5,1.3).lineTo(-6.5,-1.1).curveTo(-6.4,-6.3,-4.1,-8.6).curveTo(-2.4,-10.3,0,-10.3).curveTo(2.5,-10.3,4.1,-8.6).curveTo(6.5,-6.3,6.5,-1.1).lineTo(6.5,1.3).curveTo(6.5,6.3,4.1,8.6).curveTo(2.5,10.2,0,10.3).curveTo(-2.4,10.2,-4.1,8.6).closePath().moveTo(-2.1,-7.1).curveTo(-3.7,-5.6,-3.7,-1.4).lineTo(-3.7,1.3).curveTo(-3.7,5.5,-2,7.1).curveTo(-1.1,8.1,0,8).curveTo(1.2,8.1,2.1,7.1).curveTo(3.6,5.6,3.6,1.3).lineTo(3.6,-1.4).curveTo(3.6,-5.6,2.1,-7.1).curveTo(1.2,-8,0,-8).curveTo(-1.2,-8,-2.1,-7.1).closePath();
	this.shape_29.setTransform(35,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10,p:{x:26.275}}]},10).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_10,p:{x:18.775}},{t:this.shape_19}]},1).to({state:[]},1).to({state:[{t:this.shape_20,p:{x:26.275}}]},10).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_20,p:{x:18.775}},{t:this.shape_29}]},1).wait(1));

	// レイヤー_1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#000000").beginStroke().moveTo(0.4,10.2).lineTo(0.4,-5.5).lineTo(-3.1,-5.5).lineTo(-3.1,-6.8).lineTo(-2.1,-6.8).curveTo(-0.4,-6.8,0.5,-7.8).curveTo(1.6,-8.9,1.7,-10.2).lineTo(3.1,-10.2).lineTo(3.1,10.2).closePath();
	this.shape_30.setTransform(26.275,17);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#000000").beginStroke().moveTo(-6,10.1).lineTo(-6,8.1).curveTo(-5.7,7,-4,4.9).lineTo(0.8,-0.4).curveTo(2.8,-2.5,2.8,-4.9).curveTo(2.8,-6.3,1.9,-7.2).curveTo(1.1,-7.9,0.1,-7.9).curveTo(-0.8,-7.9,-1.5,-7.2).curveTo(-2.8,-5.9,-2.8,-3.1).lineTo(-5.5,-3.1).curveTo(-5.5,-6.8,-3.6,-8.6).curveTo(-2.1,-10.1,0,-10.1).curveTo(2.6,-10.1,4.1,-8.6).curveTo(5.6,-7.1,5.6,-4.9).curveTo(5.7,-2.1,3.8,0).curveTo(2.2,2,0.5,3.9).lineTo(-1.4,6).curveTo(-2.3,7,-2.8,7.9).lineTo(6,7.9).lineTo(6,10.1).closePath();
	this.shape_31.setTransform(27.5,17.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#000000").beginStroke().moveTo(-4.4,8.6).curveTo(-6,7,-6,4.7).lineTo(-6,3.8).lineTo(-3.3,3.8).lineTo(-3.3,4.6).curveTo(-3.3,6.1,-2.2,7.2).curveTo(-1.4,8,-0.2,8).curveTo(1.3,8,2.3,7).curveTo(3.1,6.1,3.2,4.2).curveTo(3.1,2.5,2.3,1.6).curveTo(1.3,0.6,0.1,0.6).lineTo(-0.8,0.6).lineTo(-0.8,-1.3).lineTo(-0.1,-1.3).curveTo(0.9,-1.3,1.9,-2.3).curveTo(2.8,-3.3,2.8,-5).curveTo(2.8,-6.5,1.9,-7.4).curveTo(1.1,-8.2,0,-8.2).curveTo(-1,-8.2,-1.9,-7.4).curveTo(-2.8,-6.4,-2.9,-4.3).lineTo(-5.5,-4.3).curveTo(-5.5,-7,-3.7,-8.8).curveTo(-2.3,-10.3,0,-10.2).curveTo(2.6,-10.3,4.1,-8.8).curveTo(5.5,-7.4,5.5,-5).curveTo(5.5,-2.6,4.4,-1.5).curveTo(3.5,-0.7,2.6,-0.5).curveTo(3.8,-0.2,4.5,0.6).curveTo(6,2,6,4.4).curveTo(6,7,4.4,8.6).curveTo(2.7,10.2,-0.2,10.3).curveTo(-2.7,10.2,-4.4,8.6).closePath();
	this.shape_32.setTransform(27.5,17.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#000000").beginStroke().moveTo(1.3,10.1).lineTo(1.3,5).lineTo(-6.5,5).lineTo(-6.5,2.6).lineTo(1.3,-10.1).lineTo(4,-10.1).lineTo(4,2.7).lineTo(6.5,2.7).lineTo(6.5,5).lineTo(4,5).lineTo(4,10.1).closePath().moveTo(-3.9,2.7).lineTo(1.3,2.7).lineTo(1.3,-5.8).closePath();
	this.shape_33.setTransform(27.55,17.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#000000").beginStroke().moveTo(-4.1,8.6).curveTo(-5.6,7.1,-6,4.1).lineTo(-3.3,4.1).curveTo(-3,6.2,-2.1,7.2).curveTo(-1.4,7.9,-0.3,7.9).curveTo(1.1,7.9,1.9,7.1).curveTo(3.2,5.8,3.2,2.7).curveTo(3.2,-0.2,2.1,-1.2).curveTo(1.4,-2,0.5,-2).curveTo(-0.9,-2,-2,-0.9).lineTo(-2.9,0.1).lineTo(-5.3,0.1).lineTo(-5.2,-0.6).lineTo(-4.6,-9.6).lineTo(-4.6,-10.2).lineTo(5.5,-10.2).lineTo(5.5,-7.9).lineTo(-2.4,-7.9).lineTo(-2.4,-7.5).curveTo(-2.5,-5.3,-2.7,-3.2).lineTo(-2.8,-2.5).curveTo(-1.3,-3.9,0.5,-3.9).curveTo(2.8,-3.9,4.4,-2.4).curveTo(6,-0.8,6,2.4).curveTo(6,6.4,3.8,8.5).curveTo(2.3,10.1,-0.2,10.2).curveTo(-2.6,10.1,-4.1,8.6).closePath();
	this.shape_34.setTransform(27.5,17.35);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#000000").beginStroke().moveTo(-3.7,8.5).curveTo(-5.9,6.4,-5.8,0.4).curveTo(-5.8,-6.1,-3,-8.9).curveTo(-1.6,-10.3,0.5,-10.2).curveTo(2.7,-10.3,4.1,-8.9).curveTo(5.6,-7.4,5.6,-5).lineTo(2.9,-5).curveTo(2.9,-6.6,2.3,-7.4).curveTo(1.5,-8.1,0.5,-8.1).curveTo(-0.6,-8.1,-1.3,-7.4).curveTo(-3.1,-5.5,-3.1,-0.8).curveTo(-2.7,-1.6,-2,-2.3).curveTo(-1,-3.4,0.6,-3.4).curveTo(2.7,-3.4,4.1,-1.9).curveTo(5.8,-0.2,5.9,3.3).curveTo(5.8,7,4,8.9).curveTo(2.6,10.3,0.1,10.3).curveTo(-2,10.2,-3.7,8.5).closePath().moveTo(-1.7,-0.4).curveTo(-3,0.8,-2.9,3.1).curveTo(-2.9,5.9,-1.5,7.3).curveTo(-0.7,8.1,0.2,8.1).curveTo(1.3,8.1,2,7.4).curveTo(3.1,6.4,3,3.3).curveTo(3.1,0.6,2,-0.4).curveTo(1.1,-1.3,0.3,-1.2).curveTo(-0.8,-1.3,-1.7,-0.4).closePath();
	this.shape_35.setTransform(27.5,17.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#000000").beginStroke().moveTo(-2.7,10).lineTo(3,-7.8).lineTo(-5.6,-7.8).lineTo(-5.6,-10).lineTo(5.6,-10).lineTo(5.6,-7.4).lineTo(-0.1,10).closePath();
	this.shape_36.setTransform(27.575,17.225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#000000").beginStroke().moveTo(-4.5,8.7).curveTo(-6.1,7,-6.1,4.7).curveTo(-6.1,2.4,-4.7,1).curveTo(-3.7,0.1,-2.7,-0.2).lineTo(-2.7,-0.4).curveTo(-3.4,-0.6,-4.2,-1.5).curveTo(-5.5,-2.8,-5.5,-4.7).curveTo(-5.5,-7.2,-3.8,-8.9).curveTo(-2.4,-10.3,0,-10.2).curveTo(2.4,-10.3,4,-8.8).curveTo(5.5,-7.2,5.5,-4.7).curveTo(5.5,-2.7,4.1,-1.2).curveTo(3.5,-0.6,2.7,-0.4).lineTo(2.7,-0.2).curveTo(3.7,0.1,4.7,1).curveTo(6.1,2.4,6.1,4.7).curveTo(6.1,7,4.5,8.7).curveTo(3,10.2,0,10.3).curveTo(-3,10.2,-4.5,8.7).closePath().moveTo(-2.5,1.7).curveTo(-3.4,2.6,-3.4,4.4).curveTo(-3.4,6.1,-2.4,7.2).curveTo(-1.4,8.1,0,8.1).curveTo(1.4,8.1,2.4,7.2).curveTo(3.4,6.1,3.4,4.4).curveTo(3.4,2.6,2.4,1.6).curveTo(1.5,0.7,0,0.8).curveTo(-1.5,0.7,-2.5,1.7).closePath().moveTo(-2,-7.4).curveTo(-2.9,-6.4,-2.9,-4.7).curveTo(-2.9,-3,-2,-2).curveTo(-1.1,-1.3,-0.1,-1.2).curveTo(1.3,-1.2,2,-1.9).curveTo(2.9,-2.9,2.9,-4.7).curveTo(2.9,-6.4,2,-7.4).curveTo(1.1,-8.2,0,-8.2).curveTo(-1.1,-8.2,-2,-7.4).closePath();
	this.shape_37.setTransform(27.5,17.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#000000").beginStroke().moveTo(-4.1,8.9).curveTo(-5.6,7.4,-5.6,5).lineTo(-2.9,5).curveTo(-3,6.5,-2,7.6).curveTo(-1.5,8,-0.6,8).curveTo(0.4,8,1.3,7.2).curveTo(3.1,5.3,3.2,0.2).curveTo(2.7,1,2.1,1.6).curveTo(0.8,2.8,-1,2.8).curveTo(-2.8,2.8,-4,1.7).curveTo(-5.8,-0.2,-5.8,-3.4).curveTo(-5.9,-6.9,-3.7,-9).curveTo(-2.5,-10.2,-0.2,-10.2).curveTo(1.9,-10.3,3.4,-8.8).curveTo(5.9,-6.3,5.9,-0.2).curveTo(5.9,6,3.3,8.6).curveTo(1.7,10.2,-0.6,10.3).curveTo(-2.8,10.3,-4.1,8.9).closePath().moveTo(-1.9,-7.4).curveTo(-3,-6.3,-3,-3.4).curveTo(-3,-1,-2.1,-0.1).curveTo(-1.3,0.7,-0.4,0.8).curveTo(0.9,0.8,1.7,0).curveTo(2.9,-1.3,2.9,-3.1).curveTo(2.9,-6,1.7,-7.4).curveTo(0.8,-8.2,-0.2,-8.2).curveTo(-1.1,-8.2,-1.9,-7.4).closePath();
	this.shape_38.setTransform(27.5,17.25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#000000").beginStroke().moveTo(-4.1,8.6).curveTo(-6.4,6.3,-6.5,1.3).lineTo(-6.5,-1.1).curveTo(-6.4,-6.3,-4.1,-8.6).curveTo(-2.4,-10.3,0,-10.3).curveTo(2.5,-10.3,4.1,-8.6).curveTo(6.5,-6.3,6.5,-1.1).lineTo(6.5,1.3).curveTo(6.5,6.3,4.1,8.6).curveTo(2.5,10.2,0,10.3).curveTo(-2.4,10.2,-4.1,8.6).closePath().moveTo(-2.1,-7.1).curveTo(-3.7,-5.6,-3.7,-1.4).lineTo(-3.7,1.3).curveTo(-3.7,5.5,-2,7.1).curveTo(-1.1,8.1,0,8).curveTo(1.2,8.1,2.1,7.1).curveTo(3.6,5.6,3.6,1.3).lineTo(3.6,-1.4).curveTo(3.6,-5.6,2.1,-7.1).curveTo(1.2,-8,0,-8).curveTo(-1.2,-8,-2.1,-7.1).closePath();
	this.shape_39.setTransform(35,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30,p:{x:26.275}}]}).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_30,p:{x:18.775}},{t:this.shape_39}]},1).to({state:[]},1).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-0.2,125,34);


(lib.シンボル6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {B:8,D:26,C:27};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(32));

	// レイヤー_2
	this.instance = new lib.シンボル7();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).wait(5));

	// レイヤー_1
	this.text = new cjs.Text("A", "30px 'MS PGothic'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.parent = this;
	this.text.setTransform(0,-31.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(8).to({text:"B"},0).to({_off:true},13).wait(5).to({_off:false,text:"D",lineWidth:20},0).to({_off:true},1).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-33.4,24.1,66.8);


(lib.シンボル4コピー = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.gotoAndStop(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2));

	// レイヤー_1
	this.instance = new lib.シンボル3();
	this.instance.setTransform(-27.5,-16.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.5,-17,125,34);


(lib.シンボル4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// レイヤー_1
	this.instance = new lib.シンボル3();
	this.instance.setTransform(-27.5,-16.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.5,-17,125,34);


// stage content:
(lib.script = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {日本語:6,eng:21};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [12,21,32,45];
	// timeline functions:
	this.frame_12 = function() {
		this.gotoAndStop("eng");
		this.tx.gotoAndStop("B");
	}
	this.frame_21 = function() {
		this.play();
	}
	this.frame_32 = function() {
		this.tx.gotoAndStop("C");
	}
	this.frame_45 = function() {
		this.gotoAndStop("日本語");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(9).call(this.frame_21).wait(11).call(this.frame_32).wait(13).call(this.frame_45).wait(1));

	// レイヤー_5
	this.tx = new lib.シンボル6();
	this.tx.name = "tx";
	this.tx.setTransform(429,151.55);

	this.timeline.addTween(cjs.Tween.get(this.tx).wait(46));

	// レイヤー_6
	this.instance = new lib.シンボル56();
	this.instance.setTransform(34,194.9);

	this.instance_1 = new lib.シンボル5();
	this.instance_1.setTransform(34,84.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(46));

	// レイヤー_7
	this.instance_2 = new lib.シンボル3コピー();
	this.instance_2.setTransform(178.5,289.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},17).wait(13).to({_off:false},0).wait(16));

	// レイヤー_4
	this.instance_3 = new lib.シンボル4();
	this.instance_3.setTransform(176,438.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},17).wait(13).to({_off:false},0).wait(16));

	// レイヤー_3
	this.instance_4 = new lib.シンボル3コピー2();
	this.instance_4.setTransform(178.5,229.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},17).wait(13).to({_off:false},0).wait(16));

	// レイヤー_8
	this.instance_5 = new lib.シンボル4コピー();
	this.instance_5.setTransform(176,488.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},17).wait(13).to({_off:false},0).wait(16));

	// レイヤー_11
	this.instance_6 = new lib.シンボル3("synched",0);
	this.instance_6.setTransform(402.5,408.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(46));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(287,335.9,205.5,106.30000000000001);
// library properties:
lib.properties = {
	id: '2FA8E0C7230941478CE2CA3DB82DBEDF',
	width: 550,
	height: 546,
	fps: 10,
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