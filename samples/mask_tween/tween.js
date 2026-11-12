(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"tween_atlas_1", frames: [[0,0,90,65]]}
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
	this.initialize(ss["tween_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.symbol12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#FF0000").beginStroke().moveTo(2.8,52.4).lineTo(1.9,52.3).lineTo(1.1,52).curveTo(-7.8,48.8,-16.8,45.8).curveTo(-25.6,42.8,-34.5,40.3).lineTo(-46.9,36.8).curveTo(-56.2,34.1,-63.6,27.9).curveTo(-71.1,21.6,-72.8,12.1).curveTo(-73.6,7.4,-72.4,2.8).curveTo(-68.8,-7.3,-59.7,-12.7).curveTo(-53.8,-16.1,-47.3,-17.8).lineTo(-47.5,-21.6).curveTo(-47.8,-30.7,-48.5,-39.8).curveTo(-49.1,-46.7,-43.6,-50.5).curveTo(-38.2,-54.2,-32.8,-50.6).curveTo(-27.7,-47,-27.9,-40.7).curveTo(-28.2,-33.2,-27.6,-25.7).lineTo(-27.3,-19.7).curveTo(-19.9,-20,-12.5,-20).curveTo(-2.5,-20,7.4,-18.6).curveTo(20.3,-16.8,33,-14.2).lineTo(33.1,-14.8).curveTo(33.8,-18.9,34.3,-23).lineTo(35.2,-30.8).curveTo(35.4,-32.3,35.8,-33.8).curveTo(36,-36.9,37.7,-39.4).curveTo(39.6,-42,42.7,-43).curveTo(45.8,-44,48.9,-43).curveTo(51.1,-42.3,52.8,-40.6).curveTo(54.5,-38.9,55.3,-36.6).curveTo(55.7,-35.5,55.8,-34.3).lineTo(55.7,-32.8).lineTo(55.6,-31.3).lineTo(55.3,-29.8).lineTo(55.1,-28.5).lineTo(54.8,-27.2).lineTo(53.4,-15.8).curveTo(52.9,-11.6,52.1,-7.4).lineTo(55,-5.7).curveTo(62.2,-1.4,67.6,4.8).curveTo(71.4,9.1,72.5,14.8).curveTo(74.7,25.9,68.1,34.6).curveTo(64.8,39,59.8,41.3).curveTo(51.5,45.2,42.1,44.7).curveTo(35.5,44.4,28.9,44.4).lineTo(13.6,44.4).curveTo(13.4,45.4,12.9,46.4).curveTo(12.5,47.3,11.9,48.2).lineTo(10.5,49.8).curveTo(9.7,50.5,8.8,51).curveTo(7.8,51.6,6.7,51.9).curveTo(5.6,52.3,4.4,52.4).lineTo(2.8,52.4).closePath().moveTo(-42.2,1.6).curveTo(-46.6,2.4,-50.3,4.7).lineTo(-50.9,5.2).lineTo(-51.5,5.8).lineTo(-52,6.3).lineTo(-52.4,7.1).lineTo(-52.8,7.8).lineTo(-53.1,8.5).lineTo(-53.1,9).lineTo(-52.9,9.7).lineTo(-52.5,10.4).lineTo(-52.1,11.1).lineTo(-51.7,11.8).curveTo(-50.4,13.1,-48.8,14.2).curveTo(-47,15.3,-45.1,16.3).curveTo(-43.6,17.2,-41.8,17.8).curveTo(-40.2,18.4,-38.5,18.8).lineTo(-35.2,19.3).curveTo(-33.5,19.5,-31.9,19.9).lineTo(-31.1,20.2).lineTo(-25.6,21.9).lineTo(-20.5,23.5).lineTo(-15,25.3).lineTo(-9.6,27.1).lineTo(-4.2,28.9).lineTo(-2.4,29.6).curveTo(-0.2,25.7,4.2,25).curveTo(9.1,24.2,14.1,24.3).lineTo(24.8,24.4).lineTo(38.5,24.5).curveTo(43.9,24.5,49.2,24.2).lineTo(49.8,24.1).lineTo(50.4,23.9).lineTo(51.1,23.5).lineTo(51.8,23.1).lineTo(52.3,22.6).lineTo(52.8,22.2).lineTo(52.8,21.4).lineTo(52.8,20.5).lineTo(52.8,19.7).lineTo(52.8,18.9).lineTo(52.6,18).lineTo(52.3,17.1).lineTo(51.7,16.6).lineTo(51.2,16).lineTo(50.6,15.5).lineTo(48.4,14.1).lineTo(46.3,12.7).lineTo(44.1,11.2).lineTo(42.7,10.3).lineTo(41.3,9.4).lineTo(39.8,8.6).curveTo(32.3,6.1,24.7,4.6).lineTo(25.4,5.5).curveTo(29.7,11,25.8,16.7).curveTo(21.9,22.5,15.2,20.6).curveTo(8.7,18.8,7.8,12).lineTo(7.8,11.4).curveTo(8.1,5.1,13.6,2.7).lineTo(2,1).curveTo(-2.7,0.3,-7.4,0.4).lineTo(-12.3,0.4).curveTo(-10,5,-13.2,9.7).curveTo(-17.1,15.5,-23.8,13.6).curveTo(-30.3,11.8,-31.2,5).lineTo(-31.2,4.4).curveTo(-31.1,2,-30.2,0.2).curveTo(-36.3,0.4,-42.2,1.6).closePath();
	this.shape.setTransform(73.103,52.3687);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symbol12, new cjs.Rectangle(0,0,146.2,104.8), null);


// stage content:
(lib.tween = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_14_コピー_コピー (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-25.5,25.4).curveTo(-36,14.9,-36,0).curveTo(-36,-14.9,-25.5,-25.4).curveTo(-14.9,-36,0,-36).curveTo(14.9,-36,25.5,-25.4).curveTo(36,-14.9,36,0).curveTo(36,14.9,25.5,25.4).curveTo(14.9,36,0,36).curveTo(-14.9,36,-25.5,25.4).closePath();
	mask.setTransform(81,79.8);

	// レイヤー_8_コピー_コピー
	this.instance = new lib.symbol12();
	this.instance.setTransform(80.05,76.15,0.6169,0.6169,0,0,0,73.1,52.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27));

	// レイヤー_14_コピー_コピー (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.moveTo(-25.5,25.5).curveTo(-36,14.9,-36,-0).curveTo(-36,-14.9,-25.5,-25.5).curveTo(-14.9,-36,0,-36).curveTo(14.9,-36,25.5,-25.5).curveTo(36,-14.9,36,-0).curveTo(36,14.9,25.5,25.5).curveTo(14.9,36,0,36).curveTo(-14.9,36,-25.5,25.5).closePath();
	mask_1.setTransform(81,299.8);

	// レイヤー_8_コピー_コピー
	this.instance_1 = new lib.ビットマップ1();
	this.instance_1.setTransform(35,264);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27));

	// レイヤー_14_コピー (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.moveTo(-25.5,25.5).curveTo(-36,14.9,-36,0).curveTo(-36,-14.9,-25.5,-25.5).curveTo(-14.9,-36,0,-36).curveTo(14.9,-36,25.5,-25.5).curveTo(36,-14.9,36,0).curveTo(36,14.9,25.5,25.5).curveTo(14.9,36,0,36).curveTo(-14.9,36,-25.5,25.5).closePath();
	mask_2.setTransform(81,189.8);

	// レイヤー_8_コピー
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FF0000").beginStroke().moveTo(1.8,32.3).lineTo(1.2,32.3).lineTo(0.7,32.1).curveTo(-4.8,30.1,-10.3,28.3).curveTo(-15.7,26.5,-21.3,24.9).lineTo(-28.9,22.7).curveTo(-34.6,21.1,-39.2,17.2).curveTo(-43.8,13.4,-44.9,7.5).curveTo(-45.4,4.6,-44.6,1.7).curveTo(-42.4,-4.5,-36.8,-7.8).curveTo(-33.1,-9.9,-29.1,-10.9).lineTo(-29.3,-13.3).curveTo(-29.5,-18.9,-29.9,-24.5).curveTo(-30.3,-28.8,-26.8,-31.1).curveTo(-23.5,-33.4,-20.2,-31.2).curveTo(-17,-29,-17.2,-25.1).curveTo(-17.3,-20.5,-17,-15.8).lineTo(-16.8,-12.1).lineTo(-7.7,-12.3).curveTo(-1.5,-12.3,4.6,-11.5).curveTo(12.5,-10.3,20.4,-8.7).lineTo(20.5,-9.1).lineTo(21.2,-14.1).lineTo(21.8,-19).curveTo(21.9,-19.9,22.1,-20.8).curveTo(22.2,-22.7,23.3,-24.3).curveTo(24.5,-25.9,26.4,-26.5).curveTo(28.3,-27.1,30.2,-26.5).curveTo(31.6,-26,32.6,-25).curveTo(33.7,-23.9,34.2,-22.6).curveTo(34.4,-21.8,34.4,-21.1).lineTo(34.4,-20.2).lineTo(34.3,-19.3).lineTo(34.2,-18.4).lineTo(34,-17.5).lineTo(33.8,-16.7).lineTo(33,-9.7).curveTo(32.7,-7.1,32.2,-4.5).lineTo(34,-3.5).curveTo(38.4,-0.8,41.8,3).curveTo(44.1,5.7,44.8,9.2).curveTo(46.1,16,42.1,21.4).curveTo(40,24.1,36.9,25.5).curveTo(31.8,27.9,26,27.6).curveTo(22,27.4,17.9,27.4).lineTo(8.4,27.4).lineTo(8,28.6).curveTo(7.8,29.2,7.4,29.8).lineTo(6.5,30.7).lineTo(5.5,31.5).curveTo(4.9,31.9,4.2,32.1).curveTo(3.5,32.3,2.8,32.3).lineTo(1.8,32.3).closePath().moveTo(-26,1).curveTo(-28.7,1.5,-31,3).lineTo(-31.4,3.3).lineTo(-31.7,3.6).lineTo(-32,3.9).lineTo(-32.3,4.4).lineTo(-32.5,4.8).lineTo(-32.7,5.3).lineTo(-32.7,5.6).lineTo(-32.6,6).lineTo(-32.4,6.5).lineTo(-32.1,6.9).lineTo(-31.8,7.3).curveTo(-31,8.1,-30.1,8.8).lineTo(-27.8,10.1).lineTo(-25.8,11).lineTo(-23.7,11.6).lineTo(-21.7,12).curveTo(-20.6,12.1,-19.7,12.3).lineTo(-19.1,12.5).lineTo(-15.7,13.5).lineTo(-12.6,14.5).lineTo(-9.2,15.6).lineTo(-5.9,16.7).lineTo(-2.5,17.9).lineTo(-1.4,18.3).curveTo(-0.1,15.9,2.6,15.4).curveTo(5.7,15,8.7,15).lineTo(15.3,15.1).lineTo(23.8,15.1).curveTo(27.1,15.2,30.4,15).lineTo(30.8,14.9).lineTo(31.1,14.8).lineTo(31.6,14.6).lineTo(32,14.3).lineTo(32.3,14).lineTo(32.6,13.7).lineTo(32.6,13.2).lineTo(32.6,12.7).lineTo(32.6,12.2).lineTo(32.6,11.7).lineTo(32.5,11.2).lineTo(32.3,10.6).lineTo(32,10.3).lineTo(31.6,9.9).lineTo(31.2,9.6).lineTo(29.9,8.7).lineTo(28.6,7.9).lineTo(27.3,7).lineTo(26.4,6.4).lineTo(25.5,5.9).lineTo(24.6,5.3).curveTo(20,3.8,15.3,2.9).lineTo(15.7,3.4).curveTo(18.3,6.8,15.9,10.4).curveTo(13.5,13.9,9.4,12.8).curveTo(5.4,11.7,4.9,7.5).lineTo(4.8,7.1).curveTo(5.1,3.2,8.4,1.7).lineTo(1.3,0.6).curveTo(-1.6,0.2,-4.5,0.3).lineTo(-7.6,0.3).curveTo(-6.1,3.1,-8.1,6).curveTo(-10.5,9.6,-14.6,8.4).curveTo(-18.7,7.3,-19.2,3.1).lineTo(-19.2,2.7).curveTo(-19.1,1.3,-18.6,0.1).curveTo(-22.3,0.3,-26,1).closePath();
	this.shape.setTransform(80.0438,186.0937);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(27));

	// レイヤー_3_コピー_コピー (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().moveTo(-25.4,104.4).curveTo(-36,61,-36,-0).curveTo(-36,-61.1,-25.4,-104.3).curveTo(-14.9,-147.6,0,-147.6).curveTo(14.9,-147.6,25.4,-104.3).curveTo(36,-61.1,36,-0).curveTo(36,61,25.4,104.4).curveTo(14.9,147.6,0,147.6).curveTo(-14.9,147.6,-25.4,104.4).closePath();
	var mask_3_graphics_13 = new cjs.Graphics().moveTo(-25.5,104.3).curveTo(-36,61,-36,-0).curveTo(-36,-61.1,-25.5,-104.3).curveTo(-14.9,-147.6,-0,-147.6).curveTo(14.9,-147.6,25.4,-104.3).curveTo(36,-61.1,36,-0).curveTo(36,61,25.4,104.3).curveTo(14.9,147.6,-0,147.6).curveTo(-14.9,147.6,-25.5,104.3).closePath();

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:194,y:181.45}).wait(13).to({graphics:mask_3_graphics_13,x:254,y:181.45}).wait(14));

	// レイヤー_10_コピー_コピー_コピー_コピー
	this.instance_2 = new lib.symbol12();
	this.instance_2.setTransform(220.05,86.15,0.6169,0.6169,0,0,0,73.1,52.4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27));

	// レイヤー_10_コピー_コピー_コピー
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FF0000").beginStroke().moveTo(1.8,32.3).lineTo(1.2,32.3).lineTo(0.7,32.1).curveTo(-4.8,30.1,-10.3,28.3).curveTo(-15.7,26.5,-21.3,24.9).lineTo(-28.9,22.7).curveTo(-34.6,21.1,-39.2,17.2).curveTo(-43.8,13.4,-44.9,7.5).curveTo(-45.4,4.6,-44.6,1.7).curveTo(-42.4,-4.5,-36.8,-7.8).curveTo(-33.1,-9.9,-29.1,-10.9).lineTo(-29.3,-13.3).curveTo(-29.5,-18.9,-29.9,-24.5).curveTo(-30.3,-28.8,-26.8,-31.1).curveTo(-23.5,-33.4,-20.2,-31.2).curveTo(-17,-29,-17.2,-25.1).curveTo(-17.3,-20.5,-17,-15.8).lineTo(-16.8,-12.1).lineTo(-7.7,-12.3).curveTo(-1.5,-12.3,4.6,-11.5).curveTo(12.5,-10.3,20.4,-8.7).lineTo(20.5,-9.1).lineTo(21.2,-14.1).lineTo(21.8,-19).curveTo(21.9,-19.9,22.1,-20.8).curveTo(22.2,-22.7,23.3,-24.3).curveTo(24.5,-25.9,26.4,-26.5).curveTo(28.3,-27.1,30.2,-26.5).curveTo(31.6,-26,32.6,-25).curveTo(33.7,-23.9,34.2,-22.6).curveTo(34.4,-21.8,34.4,-21.1).lineTo(34.4,-20.2).lineTo(34.3,-19.3).lineTo(34.2,-18.4).lineTo(34,-17.5).lineTo(33.8,-16.7).lineTo(33,-9.7).curveTo(32.7,-7.1,32.2,-4.5).lineTo(34,-3.5).curveTo(38.4,-0.8,41.8,3).curveTo(44.1,5.7,44.8,9.2).curveTo(46.1,16,42.1,21.4).curveTo(40,24.1,36.9,25.5).curveTo(31.8,27.9,26,27.6).curveTo(22,27.4,17.9,27.4).lineTo(8.4,27.4).lineTo(8,28.6).curveTo(7.8,29.2,7.4,29.8).lineTo(6.5,30.7).lineTo(5.5,31.5).curveTo(4.9,31.9,4.2,32.1).curveTo(3.5,32.3,2.8,32.3).lineTo(1.8,32.3).closePath().moveTo(-26,1).curveTo(-28.7,1.5,-31,3).lineTo(-31.4,3.3).lineTo(-31.7,3.6).lineTo(-32,3.9).lineTo(-32.3,4.4).lineTo(-32.5,4.8).lineTo(-32.7,5.3).lineTo(-32.7,5.6).lineTo(-32.6,6).lineTo(-32.4,6.5).lineTo(-32.1,6.9).lineTo(-31.8,7.3).curveTo(-31,8.1,-30.1,8.8).lineTo(-27.8,10.1).lineTo(-25.8,11).lineTo(-23.7,11.6).lineTo(-21.7,12).curveTo(-20.6,12.1,-19.7,12.3).lineTo(-19.1,12.5).lineTo(-15.7,13.5).lineTo(-12.6,14.5).lineTo(-9.2,15.6).lineTo(-5.9,16.7).lineTo(-2.5,17.9).lineTo(-1.4,18.3).curveTo(-0.1,15.9,2.6,15.4).curveTo(5.7,15,8.7,15).lineTo(15.3,15.1).lineTo(23.8,15.1).curveTo(27.1,15.2,30.4,15).lineTo(30.8,14.9).lineTo(31.1,14.8).lineTo(31.6,14.6).lineTo(32,14.3).lineTo(32.3,14).lineTo(32.6,13.7).lineTo(32.6,13.2).lineTo(32.6,12.7).lineTo(32.6,12.2).lineTo(32.6,11.7).lineTo(32.5,11.2).lineTo(32.3,10.6).lineTo(32,10.3).lineTo(31.6,9.9).lineTo(31.2,9.6).lineTo(29.9,8.7).lineTo(28.6,7.9).lineTo(27.3,7).lineTo(26.4,6.4).lineTo(25.5,5.9).lineTo(24.6,5.3).curveTo(20,3.8,15.3,2.9).lineTo(15.7,3.4).curveTo(18.3,6.8,15.9,10.4).curveTo(13.5,13.9,9.4,12.8).curveTo(5.4,11.7,4.9,7.5).lineTo(4.8,7.1).curveTo(5.1,3.2,8.4,1.7).lineTo(1.3,0.6).curveTo(-1.6,0.2,-4.5,0.3).lineTo(-7.6,0.3).curveTo(-6.1,3.1,-8.1,6).curveTo(-10.5,9.6,-14.6,8.4).curveTo(-18.7,7.3,-19.2,3.1).lineTo(-19.2,2.7).curveTo(-19.1,1.3,-18.6,0.1).curveTo(-22.3,0.3,-26,1).closePath();
	this.shape_1.setTransform(220.0438,176.0937);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(27));

	// レイヤー_10_コピー_コピー
	this.instance_3 = new lib.ビットマップ1();
	this.instance_3.setTransform(176,236);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27));

	// レイヤー_14 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.moveTo(-25.4,25.4).curveTo(-36,14.9,-36,0).curveTo(-36,-14.9,-25.4,-25.4).curveTo(-14.9,-36,-0,-36).curveTo(14.9,-36,25.4,-25.4).curveTo(36,-14.9,36,0).curveTo(36,14.9,25.4,25.4).curveTo(14.9,36,-0,36).curveTo(-14.9,36,-25.4,25.4).closePath();
	mask_4.setTransform(417,69.8);

	// レイヤー_8
	this.instance_4 = new lib.symbol12();
	this.instance_4.setTransform(352.7,73.55,0.6169,0.6169,0,0,0,73.1,52.4);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:482.7},26).wait(1));

	// レイヤー_3_コピー (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.moveTo(-25.4,25.4).curveTo(-36,14.9,-36,-0).curveTo(-36,-14.9,-25.4,-25.5).curveTo(-14.9,-36,-0,-36).curveTo(14.9,-36,25.4,-25.5).curveTo(36,-14.9,36,-0).curveTo(36,14.9,25.4,25.4).curveTo(14.9,36,-0,36).curveTo(-14.9,36,-25.4,25.4).closePath();
	mask_5.setTransform(391,200);

	// レイヤー_10_コピー
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FF0000").beginStroke().moveTo(1.9,35.2).lineTo(1.3,35.1).lineTo(0.7,34.9).curveTo(-5.2,32.8,-11.3,30.8).curveTo(-17.2,28.8,-23.2,27.1).lineTo(-31.5,24.7).curveTo(-37.8,22.9,-42.7,18.7).curveTo(-47.8,14.5,-48.9,8.1).curveTo(-49.5,5,-48.6,1.9).curveTo(-46.2,-4.9,-40.1,-8.5).curveTo(-36.1,-10.8,-31.8,-11.9).lineTo(-31.9,-14.5).curveTo(-32.1,-20.6,-32.6,-26.7).curveTo(-33,-31.3,-29.3,-33.9).curveTo(-25.7,-36.4,-22.1,-34).curveTo(-18.6,-31.6,-18.7,-27.3).curveTo(-18.9,-22.3,-18.6,-17.3).lineTo(-18.4,-13.2).curveTo(-13.4,-13.4,-8.4,-13.4).curveTo(-1.7,-13.4,5,-12.5).curveTo(13.6,-11.3,22.2,-9.6).lineTo(22.2,-10).lineTo(23,-15.4).lineTo(23.7,-20.7).curveTo(23.8,-21.7,24,-22.7).curveTo(24.2,-24.8,25.3,-26.4).curveTo(26.6,-28.2,28.7,-28.9).curveTo(30.7,-29.6,32.8,-28.9).curveTo(34.3,-28.4,35.5,-27.2).curveTo(36.6,-26.1,37.2,-24.6).curveTo(37.4,-23.8,37.5,-23.1).lineTo(37.4,-22).lineTo(37.3,-21).lineTo(37.2,-20).lineTo(37,-19.1).lineTo(36.8,-18.2).lineTo(35.8,-10.6).curveTo(35.5,-7.8,35,-5).lineTo(37,-3.8).curveTo(41.8,-0.9,45.4,3.2).curveTo(48,6.1,48.7,9.9).curveTo(50.2,17.4,45.7,23.2).curveTo(43.5,26.2,40.2,27.7).curveTo(34.6,30.3,28.3,30).curveTo(23.9,29.8,19.4,29.8).lineTo(9.1,29.8).curveTo(9,30.5,8.7,31.2).lineTo(8,32.4).lineTo(7.1,33.4).curveTo(6.5,33.9,5.9,34.3).lineTo(4.5,34.9).curveTo(3.8,35.1,3,35.2).lineTo(1.9,35.2).closePath().moveTo(-28.4,1.1).curveTo(-31.3,1.6,-33.8,3.2).lineTo(-34.2,3.5).lineTo(-34.6,3.9).lineTo(-34.9,4.3).lineTo(-35.2,4.8).lineTo(-35.5,5.2).lineTo(-35.7,5.7).lineTo(-35.7,6.1).lineTo(-35.6,6.5).lineTo(-35.3,7).lineTo(-35,7.5).lineTo(-34.7,7.9).curveTo(-33.8,8.8,-32.8,9.5).lineTo(-30.3,11).curveTo(-29.3,11.5,-28.1,11.9).lineTo(-25.9,12.6).lineTo(-23.7,13).lineTo(-21.5,13.4).lineTo(-20.9,13.6).lineTo(-17.2,14.7).lineTo(-13.8,15.8).lineTo(-10.1,17).lineTo(-6.4,18.2).lineTo(-2.8,19.4).lineTo(-1.6,19.9).curveTo(-0.1,17.3,2.8,16.8).curveTo(6.1,16.2,9.4,16.3).lineTo(16.6,16.4).lineTo(25.8,16.4).curveTo(29.5,16.5,33.1,16.3).lineTo(33.5,16.2).lineTo(33.9,16).lineTo(34.3,15.8).lineTo(34.8,15.5).lineTo(35.1,15.2).lineTo(35.4,14.9).lineTo(35.5,14.4).lineTo(35.5,13.8).lineTo(35.5,13.3).lineTo(35.4,12.7).lineTo(35.3,12.1).lineTo(35.1,11.5).lineTo(34.7,11.1).lineTo(34.4,10.8).lineTo(34,10.4).lineTo(32.5,9.5).lineTo(31.1,8.5).lineTo(29.6,7.5).lineTo(28.7,6.9).lineTo(27.7,6.3).lineTo(26.7,5.8).curveTo(21.7,4.1,16.6,3.1).lineTo(17.1,3.7).curveTo(19.9,7.4,17.3,11.2).curveTo(14.7,15.1,10.2,13.9).curveTo(5.8,12.6,5.2,8.1).lineTo(5.2,7.6).curveTo(5.4,3.4,9.1,1.8).lineTo(1.4,0.7).curveTo(-1.8,0.2,-5,0.3).lineTo(-8.3,0.3).curveTo(-6.7,3.3,-8.9,6.5).curveTo(-11.5,10.4,-16,9.2).curveTo(-20.4,7.9,-20.9,3.4).lineTo(-21,2.9).curveTo(-20.9,1.4,-20.3,0.1).curveTo(-24.4,0.3,-28.4,1.1).closePath();
	this.shape_2.setTransform(395.054,160.0187);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(9).to({x:420.054,y:199.1687},0).wait(10).to({x:357.054,y:225.0187},0).wait(8));

	// レイヤー_3 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.moveTo(-25.4,25.4).curveTo(-36,14.9,-36,-0).curveTo(-36,-14.9,-25.4,-25.4).curveTo(-14.9,-36,-0,-36).curveTo(14.9,-36,25.4,-25.4).curveTo(36,-14.9,36,-0).curveTo(36,14.9,25.4,25.4).curveTo(14.9,36,-0,36).curveTo(-14.9,36,-25.4,25.4).closePath();
	mask_6.setTransform(391,310);

	// レイヤー_10
	this.instance_5 = new lib.ビットマップ1();
	this.instance_5.setTransform(303,281);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({x:354,y:306},0).wait(10).to({x:393,y:264},0).wait(8));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(320,241.2,133,104.80000000000001);
// library properties:
lib.properties = {
	id: '2FA8E0C7230941478CE2CA3DB82DBEDF',
	width: 550,
	height: 400,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/tween_atlas_1.png?1788143209641", id:"tween_atlas_1"}
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