(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
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



(lib.G_B = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0000").ss(13,2,0,3).p("AiQiQIEhAAIAAEhIkhAAg");
	this.shape.setTransform(14.5,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AiQCRIAAkhIEhAAIAAEhg");
	this.shape_1.setTransform(14.5,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-6.5,42,42);


(lib.G_A = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#00FF00").ss(13,1,1).p("AiQiQIEhAAIAAEhIkhAAg");
	this.shape.setTransform(14.5,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AiQCRIAAkhIEhAAIAAEhg");
	this.shape_1.setTransform(14.5,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-6.5,42,42);


(lib.B = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.G_B("synched",0);
	this.instance.setTransform(14.5,14.5,1,1,0,0,0,14.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360,x:487.5},59,cjs.Ease.cubicIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-15.2,515,59.400000000000006);


(lib.A = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.G_A("synched",0);
	this.instance.setTransform(14.5,14.5,1,1,0,0,0,14.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360,x:496.5},59).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-12.5,524,54.1);


(lib.C = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.A("synched",0);
	this.instance.setTransform(14.5,14.5,1,1,0,0,0,14.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:94.5,startPosition:29},29).to({y:14.5,startPosition:59},30).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-6.5,524,122.8);


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

	// レイヤー_4
	this.instance = new lib.C();
	this.instance.setTransform(33.5,282.55,1,1,0,0,0,14.5,14.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBAXIAWgtIAaAAIghAtgAguAXIAXgtIAZAAIggAtg");
	this.shape.setTransform(240.6,234.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAzBRIgUgxIg9AAIgTAxIgXAAIA/ihIASAAIBAChgAgYAOIAxAAIgZg/g");
	this.shape_1.setTransform(226.95,242.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCAXIAXgtIAbAAIgiAtgAgvAXIAYgtIAaAAIghAtg");
	this.shape_2.setTransform(213.4,234.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghAoQgPgPAAgZQAAgYAQgQQANgNAUAAQATAAAOAOQAOANAAAaIhLAAQAAAUAJAJQAIAIANAAQANAAAFgFQAHgHAAgIIAVAAQgEARgJAIQgMAMgVAAQgWAAgOgOgAgSgeQgHAHgBAJIA0AAQAAgJgHgIQgHgGgMAAQgKAAgIAHg");
	this.shape_3.setTransform(194.075,245.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiArQgJgJAAgOIASAAQACAIADAEQAHAGANAAQAPAAAFgFQAEgEAAgGQAAgDgFgFQgDgEgIgCQgRgDgIgDQgKgDgFgEQgJgIAAgKQAAgMAJgIQAMgLAUAAQAWAAAJAKQAKAJAAAMIgTAAQgBgHgCgDQgGgFgOAAQgKAAgFAFQgFAFAAAFQAAAEADADQAEAEASAEIAVAGQAIACAEAEQAHAHAAAKQAAAMgJAJQgLALgYAAQgWAAgMgLg");
	this.shape_4.setTransform(182.55,245.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglAtQgIgJAAgNIAAhMIATAAIAABGQAAALAFAGQAFAFAJAAQALAAAJgKQAOgOAAgPIAAg1IATAAIAABoIgTAAIAAgSQgPAUgVAAQgTABgJgJg");
	this.shape_5.setTransform(171,245.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgCAXIAXgtIAbAAIgiAtgAgvAXIAYgtIAaAAIghAtg");
	this.shape_6.setTransform(151.75,234.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgrBBQgXgYAAgoQAAgoAXgYQATgSAaAAQAcAAAQAQQARARABAaIgWAAQgCgUgLgKQgKgLgRAAQgPAAgOANQgQARgBAiQABAiAQARQANANAQAAQAUAAAKgLQANgNgBgYIAXAAQAAAfgTASQgPAQgfAAQgaAAgTgRg");
	this.shape_7.setTransform(137.75,242.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgBAXIAWgtIAaAAIggAtgAguAXIAXgtIAZAAIgfAtg");
	this.shape_8.setTransform(123.8,234.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgvBHIAAiLIATAAIAAAMQALgOASAAQATAAAMAMQAPAPABAbQgBAcgPAPQgMAMgTAAQgTAAgKgPIAAAvgAgSgtQgKAKAAANIAAANQAAAMALAKQAIAJAKAAQAJAAAGgHQALgKAAgVQAAgUgJgKQgIgHgJAAQgKAAgJAIg");
	this.shape_9.setTransform(104.5,247.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgIBPIAAhoIARAAIAABogAgIg3IAAgYIARAAIAAAYg");
	this.shape_10.setTransform(96.025,242.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIBQIAAifIARAAIAACfg");
	this.shape_11.setTransform(90.975,242.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgrBBQgXgYAAgoQAAgoAXgYQASgSAbAAQAcAAAQAQQARARABAaIgWAAQgCgUgLgKQgLgLgQAAQgPAAgNANQgRARgBAiQABAiARARQAMANAQAAQAUAAAJgLQANgNABgYIAWAAQAAAfgTASQgQAQgeAAQgbAAgSgRg");
	this.shape_12.setTransform(80.5,242.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AghAoQgPgPAAgZQAAgYAQgQQANgNAUAAQATAAAOAOQAOANAAAaIhLAAQAAAUAJAJQAIAIANAAQANAAAFgFQAHgHAAgIIAVAAQgEARgJAIQgMAMgVAAQgWAAgOgOgAgSgeQgHAHgBAJIA0AAQAAgJgHgIQgHgGgMAAQgKAAgIAHg");
	this.shape_13.setTransform(66.525,245.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgIBPIAAhoIARAAIAABogAgIg3IAAgYIARAAIAAAYg");
	this.shape_14.setTransform(57.975,242.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIA1IgthqIAUAAIAhBTIAihTIAUAAIgtBqg");
	this.shape_15.setTransform(49.725,245.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AghAoQgQgQgBgYQABgXAQgQQAOgOATAAQAVAAANAOQARAQgBAXQABAYgRAQQgNAOgVAAQgTAAgOgOgAgSgdQgLALAAASQAAATAKAKQAIAIALAAQALAAAJgIQAKgKAAgTQAAgSgLgLQgIgIgLAAQgKAAgIAIg");
	this.shape_16.setTransform(37.9,245.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAyBQIAAh6IgrB6IgOAAIgrh6IAAB6IgVAAIAAifIAdAAIAqB8IArh8IAdAAIAACfg");
	this.shape_17.setTransform(22.925,242.75);

	this.instance_1 = new lib.B();
	this.instance_1.setTransform(33.5,173.55,1,1,0,0,0,14.5,14.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgCAXIAXgtIAbAAIghAtgAgvAXIAYgtIAaAAIggAtg");
	this.shape_18.setTransform(151.1,125.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag8BQIAAifIBKAAQASAAANAMQALALAAATQAAAPgKAKQgGAGgIADQALADAGAGQAMAMAAAQQAAAVgOAOQgLALgXAAgAgnA/IAwAAQAOAAAHgIQAIgIABgNQgBgNgHgIQgIgIgOAAIgwAAgAgngMIAyAAQAKAAAGgGQAIgIAAgMQAAgKgIgIQgGgFgIAAIg0AAg");
	this.shape_19.setTransform(137.45,133.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgBAXIAWgtIAaAAIggAtgAguAXIAXgtIAZAAIgfAtg");
	this.shape_20.setTransform(123.8,125.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgvBHIAAiLIATAAIAAAMQALgOASAAQATAAAMAMQAPAPABAbQgBAcgPAPQgMAMgTAAQgTAAgKgPIAAAvgAgSgtQgKAKAAANIAAANQAAAMALAKQAIAJAKAAQAJAAAGgHQALgKAAgVQAAgUgJgKQgIgHgJAAQgKAAgJAIg");
	this.shape_21.setTransform(104.5,138.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgIBPIAAhoIARAAIAABogAgIg3IAAgYIARAAIAAAYg");
	this.shape_22.setTransform(96.025,133.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgIBQIAAifIARAAIAACfg");
	this.shape_23.setTransform(90.975,133.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgrBBQgXgYAAgoQAAgoAXgYQASgSAbAAQAcAAAQAQQARARABAaIgWAAQgCgUgLgKQgLgLgQAAQgPAAgNANQgRARgBAiQABAiARARQAMANAQAAQAUAAAJgLQANgNABgZIAWAAQAAAhgTARQgQAQgeAAQgbAAgSgRg");
	this.shape_24.setTransform(80.5,133.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AghAoQgPgPAAgZQAAgYAQgQQANgNAUAAQATAAAOAOQAOANAAAaIhLAAQAAAUAJAJQAIAIANAAQANAAAFgFQAHgHAAgIIAVAAQgEARgJAIQgMAMgVAAQgWAAgOgOgAgSgeQgHAHgBAJIA0AAQAAgJgHgIQgHgGgMAAQgKAAgIAHg");
	this.shape_25.setTransform(66.525,136.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgIBPIAAhoIARAAIAABogAgIg3IAAgYIARAAIAAAYg");
	this.shape_26.setTransform(57.975,133.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgIA1IgthqIAUAAIAhBTIAihTIAUAAIgtBqg");
	this.shape_27.setTransform(49.725,136.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AghAoQgQgQgBgYQABgXAQgQQAOgOATAAQAVAAANAOQARAQgBAXQABAYgRAQQgNAOgVAAQgTAAgOgOgAgSgdQgLALAAASQAAATAKAKQAIAIALAAQALAAAJgIQAKgKAAgTQAAgSgLgLQgIgIgLAAQgKAAgIAIg");
	this.shape_28.setTransform(37.9,136.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAyBQIAAh5IgrB5IgOAAIgrh5IAAB5IgVAAIAAifIAdAAIAqB8IArh8IAdAAIAACfg");
	this.shape_29.setTransform(22.925,133.75);

	this.instance_2 = new lib.A();
	this.instance_2.setTransform(33.5,59.55,1,1,0,0,0,14.5,14.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgCAXIAXgtIAbAAIghAtgAgvAXIAYgtIAaAAIggAtg");
	this.shape_30.setTransform(151,11.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAyBRIgTgxIg9AAIgTAxIgXAAIBAihIASAAIA/ChgAgXAOIAvAAIgYg/g");
	this.shape_31.setTransform(137.35,19.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgBAXIAWgtIAaAAIggAtgAguAXIAXgtIAZAAIgfAtg");
	this.shape_32.setTransform(123.8,11.175);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgvBHIAAiLIATAAIAAAMQALgOASAAQATAAAMAMQAPAPABAbQgBAcgPAPQgMAMgTAAQgTAAgKgPIAAAvgAgSgtQgKAKAAANIAAANQAAAMALAKQAIAJAKAAQAJAAAGgHQALgKAAgVQAAgUgJgKQgIgHgJAAQgKAAgJAIg");
	this.shape_33.setTransform(104.5,24.175);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgIBPIAAhnIARAAIAABngAgIg3IAAgXIARAAIAAAXg");
	this.shape_34.setTransform(96.025,19.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgIBQIAAifIARAAIAACfg");
	this.shape_35.setTransform(90.975,19.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgrBAQgXgXAAgpQAAgnAXgYQASgSAbAAQAcAAAQAQQARARABAaIgWAAQgCgUgLgKQgLgLgQAAQgPAAgNANQgRARgBAhQABAjARARQAMAMAQAAQAUAAAJgKQANgNABgYIAWAAQAAAfgTASQgQAQgeAAQgbAAgSgSg");
	this.shape_36.setTransform(80.5,19.75);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AghAoQgPgPAAgZQAAgYAQgQQANgNAUAAQATAAAOAOQAOANAAAaIhLAAQAAAUAJAJQAIAIANAAQANAAAFgFQAHgHAAgIIAVAAQgEARgJAIQgMAMgVAAQgWAAgOgOgAgSgeQgHAHgBAJIA0AAQAAgJgHgIQgHgGgMAAQgKAAgIAHg");
	this.shape_37.setTransform(66.525,22.525);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgIBPIAAhnIARAAIAABngAgIg3IAAgXIARAAIAAAXg");
	this.shape_38.setTransform(57.975,19.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgIA2IgthqIAUAAIAhBSIAihSIAUAAIgtBqg");
	this.shape_39.setTransform(49.725,22.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AghAoQgQgQgBgYQABgXAQgQQAOgOATAAQAVAAANAOQARAQgBAXQABAYgRAQQgNAOgVAAQgTAAgOgOgAgSgdQgLALAAASQAAATAKAKQAIAIALAAQALAAAJgIQAKgKAAgTQAAgSgLgLQgIgIgLAAQgKAAgIAIg");
	this.shape_40.setTransform(37.9,22.525);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAyBQIAAh6IgrB6IgOAAIgrh6IAAB6IgVAAIAAifIAdAAIAqB8IArh8IAdAAIAACfg");
	this.shape_41.setTransform(22.925,19.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.instance_2},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.instance_1},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(285.4,205.4,105.60000000000002,98.20000000000002);
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;