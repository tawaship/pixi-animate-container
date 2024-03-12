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


(lib.シンボル1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-86.5,86.5).lineTo(-86.5,-86.5).lineTo(86.5,-86.5).lineTo(86.5,86.5).closePath();
	this.shape.setTransform(86.5,86.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シンボル1, new cjs.Rectangle(0,0,173,173), null);


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


(lib.シンボル2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(2.8,54.9).lineTo(2,54.8).lineTo(1.2,54.5).curveTo(-7.8,51.3,-16.8,48.3).curveTo(-25.5,45.3,-34.5,42.7).lineTo(-46.8,39.3).curveTo(-56.2,36.5,-63.6,30.4).curveTo(-71.1,24.1,-72.7,14.5).curveTo(-73.6,9.9,-72.4,5.3).curveTo(-68.8,-4.9,-59.7,-10.2).curveTo(-53.8,-13.6,-47.3,-15.3).lineTo(-47.5,-19.1).curveTo(-47.8,-28.2,-48.5,-37.3).curveTo(-49.1,-44.2,-43.6,-48).curveTo(-38.2,-51.8,-32.8,-48.1).curveTo(-27.6,-44.5,-27.8,-38.3).curveTo(-28.1,-30.7,-27.6,-23.3).lineTo(-27.3,-17.2).curveTo(-19.9,-17.5,-12.5,-17.6).curveTo(-2.5,-17.6,7.4,-16.1).curveTo(20.3,-14.3,33,-11.7).lineTo(33.2,-12.4).curveTo(33.8,-16.4,34.3,-20.5).lineTo(35.3,-28.4).curveTo(35.4,-29.9,35.8,-31.3).curveTo(36,-34.4,37.8,-36.9).curveTo(39.6,-39.6,42.7,-40.5).curveTo(45.8,-41.6,48.9,-40.5).curveTo(51.1,-39.8,52.8,-38.1).curveTo(54.6,-36.4,55.3,-34.2).curveTo(55.8,-33,55.8,-31.8).lineTo(55.7,-30.4).lineTo(55.6,-28.8).lineTo(55.3,-27.3).lineTo(55.1,-26).lineTo(54.8,-24.7).lineTo(53.4,-13.3).curveTo(52.9,-9.1,52.1,-5).lineTo(55.1,-3.3).curveTo(62.2,1.1,67.7,7.3).curveTo(71.5,11.6,72.5,17.2).curveTo(74.7,28.4,68.1,37).curveTo(64.9,41.4,59.8,43.8).curveTo(51.5,47.6,42.2,47.2).curveTo(35.6,46.9,28.9,46.8).lineTo(13.6,46.8).curveTo(13.4,47.9,12.9,48.8).curveTo(12.5,49.8,11.9,50.6).lineTo(10.5,52.2).curveTo(9.7,52.9,8.9,53.5).curveTo(7.9,54,6.7,54.4).curveTo(5.6,54.7,4.5,54.9).lineTo(2.8,54.9).closePath().moveTo(-42.2,4).curveTo(-46.6,4.9,-50.3,7.2).lineTo(-50.9,7.7).lineTo(-51.4,8.2).lineTo(-52,8.8).lineTo(-52.3,9.6).lineTo(-52.8,10.2).lineTo(-53.1,11).lineTo(-53.1,11.5).lineTo(-52.9,12.2).lineTo(-52.5,12.9).lineTo(-52.1,13.6).lineTo(-51.7,14.3).curveTo(-50.4,15.6,-48.8,16.6).curveTo(-47,17.8,-45.1,18.8).curveTo(-43.6,19.7,-41.8,20.2).curveTo(-40.1,20.8,-38.5,21.3).lineTo(-35.2,21.8).curveTo(-33.5,22,-31.9,22.4).lineTo(-31.1,22.6).lineTo(-25.6,24.3).lineTo(-20.5,26).lineTo(-15,27.8).lineTo(-9.6,29.6).lineTo(-4.2,31.4).lineTo(-2.4,32.1).curveTo(-0.1,28.2,4.2,27.4).curveTo(9.1,26.7,14.1,26.8).lineTo(24.8,26.9).lineTo(38.5,27).curveTo(43.9,27,49.2,26.7).lineTo(49.8,26.5).lineTo(50.5,26.3).lineTo(51.2,26).lineTo(51.8,25.6).lineTo(52.3,25.1).lineTo(52.8,24.6).lineTo(52.8,23.8).lineTo(52.8,23).lineTo(52.8,22.2).lineTo(52.8,21.4).lineTo(52.6,20.5).lineTo(52.4,19.6).lineTo(51.7,19).lineTo(51.2,18.5).lineTo(50.6,18).lineTo(48.5,16.5).lineTo(46.3,15.2).lineTo(44.2,13.7).lineTo(42.7,12.7).lineTo(41.3,11.9).lineTo(39.8,11).curveTo(32.3,8.5,24.7,7.1).lineTo(25.4,8).curveTo(29.7,13.5,25.8,19.2).curveTo(21.9,24.9,15.3,23.1).curveTo(8.7,21.3,7.8,14.5).lineTo(7.8,13.8).curveTo(8.1,7.6,13.6,5.2).lineTo(2.1,3.5).curveTo(-2.6,2.8,-7.3,2.8).lineTo(-12.3,2.8).curveTo(-10,7.5,-13.2,12.2).curveTo(-17.1,18,-23.8,16.1).curveTo(-30.3,14.3,-31.2,7.5).lineTo(-31.2,6.9).curveTo(-31,4.5,-30.2,2.7).curveTo(-36.2,2.9,-42.2,4).closePath();
	mask.setTransform(73.1,54.85);

	// レイヤー_1
	this.instance = new lib.シンボル1();
	this.instance.setTransform(75.55,60.5,0.6994,0.6994,0,0,0,86.5,86.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シンボル2, new cjs.Rectangle(15.1,5,121,104.7), null);


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

	// レイヤー_9
	this.text = new cjs.Text("result", "bold 20px 'Nirmala UI'", "#006699");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 168;
	this.text.parent = this;
	this.text.setTransform(465.15,9.8,0.8083,0.8083);

	this.text_1 = new cjs.Text("masked object", "bold 20px 'Nirmala UI'", "#006699");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 29;
	this.text_1.lineWidth = 168;
	this.text_1.parent = this;
	this.text_1.setTransform(235.65,9.8,0.8083,0.8083);

	this.text_2 = new cjs.Text("masking object", "bold 20px 'Nirmala UI'", "#006699");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 29;
	this.text_2.lineWidth = 168;
	this.text_2.parent = this;
	this.text_2.setTransform(84.05,9.8,0.8083,0.8083);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	// レイヤー_11
	this.instance = new lib.symbol12();
	this.instance.setTransform(73.65,87.6,0.8083,0.8083,0,0,0,73.1,52.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// レイヤー_12
	this.instance_1 = new lib.シンボル1();
	this.instance_1.setTransform(237.1,90.15,0.5654,0.5654,0,0,0,86.6,86.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#00FF00").beginStroke().moveTo(-134,54.4).lineTo(-74.8,-4.8).lineTo(-15.7,54.4).lineTo(-74.9,113.5).closePath().moveTo(36.2,-15.7).lineTo(36.2,-113.5).lineTo(134,-113.5).lineTo(134,-15.7).closePath();
	this.shape.setTransform(152,270.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).wait(1));

	// レイヤー_13
	this.instance_2 = new lib.シンボル2();
	this.instance_2.setTransform(235.1,321.15,0.8083,0.8083,0,0,0,73.2,60.6);

	this.instance_3 = new lib.シンボル2();
	this.instance_3.setTransform(75.3,206.2,0.8083,0.8083,0,0,0,73.2,60.6);

	this.instance_4 = new lib.シンボル2();
	this.instance_4.setTransform(460,90.2,0.8083,0.8083,0,0,0,73.1,60.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// レイヤー_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(200.8,122.9).lineTo(200.2,122.9).lineTo(199.5,122.7).curveTo(192.3,120,185,117.6).curveTo(177.9,115.2,170.7,113.2).lineTo(160.7,110.3).curveTo(153.1,108.1,147.2,103.1).curveTo(141.1,98.1,139.8,90.4).curveTo(139.1,86.6,140.1,82.8).curveTo(143,74.7,150.4,70.4).curveTo(155.1,67.6,160.4,66.2).lineTo(160.2,63.1).curveTo(159.9,55.8,159.4,48.4).curveTo(158.9,42.9,163.4,39.8).curveTo(167.7,36.8,172.1,39.7).curveTo(176.2,42.6,176.1,47.7).curveTo(175.8,53.7,176.3,59.8).lineTo(176.5,64.7).curveTo(182.5,64.5,188.5,64.4).curveTo(196.6,64.4,204.6,65.5).curveTo(215,67,225.3,69.1).lineTo(225.4,68.6).lineTo(226.3,62).lineTo(227.1,55.7).curveTo(227.2,54.5,227.5,53.3).curveTo(227.7,50.8,229.1,48.8).curveTo(230.6,46.6,233.1,45.8).curveTo(235.6,45,238.1,45.8).curveTo(239.9,46.4,241.3,47.8).curveTo(242.7,49.2,243.3,51).curveTo(243.6,51.9,243.7,52.9).lineTo(243.6,54.1).lineTo(243.5,55.3).lineTo(243.3,56.5).lineTo(243.1,57.6).lineTo(242.9,58.6).lineTo(241.7,67.8).curveTo(241.3,71.2,240.7,74.6).lineTo(243.1,76).curveTo(248.9,79.5,253.3,84.5).curveTo(256.3,88,257.2,92.5).curveTo(259,101.5,253.7,108.5).curveTo(251,112.1,247,114).curveTo(240.2,117.1,232.6,116.8).curveTo(227.3,116.5,221.9,116.5).lineTo(209.6,116.5).curveTo(209.4,117.3,209,118.1).curveTo(208.7,118.9,208.2,119.5).lineTo(207.1,120.8).lineTo(205.7,121.8).curveTo(204.9,122.3,204,122.6).curveTo(203.1,122.9,202.2,122.9).lineTo(200.8,122.9).closePath().moveTo(164.5,81.9).curveTo(160.9,82.6,157.9,84.4).lineTo(157.4,84.8).lineTo(157,85.3).lineTo(156.6,85.7).lineTo(156.3,86.3).lineTo(155.9,86.9).lineTo(155.7,87.5).lineTo(155.7,87.9).lineTo(155.8,88.5).lineTo(156.1,89).lineTo(156.5,89.6).lineTo(156.8,90.1).curveTo(157.9,91.2,159.1,92.1).lineTo(162.1,93.8).curveTo(163.4,94.5,164.8,95).curveTo(166.1,95.5,167.5,95.8).lineTo(170.1,96.2).curveTo(171.5,96.4,172.8,96.7).lineTo(173.5,96.9).lineTo(177.9,98.3).lineTo(182,99.6).lineTo(186.4,101).lineTo(190.9,102.5).lineTo(195.2,104).lineTo(196.7,104.5).curveTo(198.5,101.4,202,100.8).curveTo(206,100.1,210,100.2).lineTo(218.6,100.3).lineTo(229.7,100.4).curveTo(234.1,100.4,238.4,100.2).lineTo(238.9,100.1).lineTo(239.4,99.9).lineTo(239.9,99.6).lineTo(240.4,99.3).lineTo(240.9,98.9).lineTo(241.3,98.5).lineTo(241.3,97.9).lineTo(241.3,97.2).lineTo(241.3,96.5).lineTo(241.3,95.9).lineTo(241.1,95.2).lineTo(240.9,94.4).lineTo(240.4,94).lineTo(240,93.6).lineTo(239.5,93.2).lineTo(237.7,92).lineTo(236,90.8).lineTo(234.3,89.7).lineTo(233.1,88.9).lineTo(232,88.2).lineTo(230.7,87.5).curveTo(224.7,85.5,218.5,84.3).lineTo(219.1,85).curveTo(222.6,89.5,219.4,94.1).curveTo(216.3,98.8,210.9,97.3).curveTo(205.6,95.8,204.9,90.3).lineTo(204.9,89.8).curveTo(205.2,84.7,209.6,82.8).lineTo(200.2,81.4).curveTo(196.4,80.9,192.6,80.9).lineTo(188.6,80.9).curveTo(190.5,84.6,187.9,88.5).curveTo(184.8,93.1,179.4,91.6).curveTo(174.1,90.2,173.4,84.7).lineTo(173.4,84.1).curveTo(173.5,82.2,174.2,80.7).curveTo(169.3,80.9,164.5,81.9).closePath();
	mask.setTransform(257.6654,122.938);

	// レイヤー_10
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#00FF00").beginStroke().moveTo(-48.9,48.9).lineTo(-48.9,-48.9).lineTo(48.9,-48.9).lineTo(48.9,48.9).closePath();
	this.shape_1.setTransform(460.7,206.125);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// レイヤー_14 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.moveTo(-59.2,0).lineTo(0,-59.2).lineTo(59.2,0).lineTo(-0,59.2).closePath();
	mask_1.setTransform(457.175,325.075);

	// レイヤー_8
	this.instance_5 = new lib.シンボル2();
	this.instance_5.setTransform(455.1,321.15,0.8083,0.8083,0,0,0,73.2,60.6);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(289.6,208.2,245.10000000000002,176.10000000000002);
// library properties:
lib.properties = {
	id: '2FA8E0C7230941478CE2CA3DB82DBEDF',
	width: 550,
	height: 400,
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