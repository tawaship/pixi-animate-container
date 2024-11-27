(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"game_atlas_1", frames: [[0,120,82,82],[120,0,50,50],[84,120,82,82],[0,0,118,118]]}
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



(lib.ビットマップ3 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ビットマップ5 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(3);
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


(lib.symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AChBDQgOgPAAgZQAAgZAPgQQANgNAVABQAUgBAOAOQANANAAAbIhMAAQAAATAKAKQAHAIAOAAQANAAAFgGQAHgGAAgIIAVAAQgEAQgIAJQgNAMgVAAQgXAAgOgOgACxgDQgHAGgCAIIA2AAQgBgIgHgHQgHgHgMABQgLgBgHAIgAhQBDQgPgQAAgYQAAgYAPgQQAOgOAVABQAUgBAPAOQAOAQABAYQgBAYgOAQQgPAOgUAAQgVAAgOgOgAhAgCQgLAKAAATQAAASAKALQAJAIALAAQALAAAIgIQALgLAAgSQAAgTgMgKQgHgIgLAAQgMAAgHAIgABmBPIAAhIQAAgHgGgGQgFgGgLABQgIAAgKAJQgOANAAAQIAAA0IgTAAIAAhoIATAAIAAATQAQgVAUABQASgBAMALQAHAIAAAJIAABOgAiSBPIhLh9IAAB9IgWAAIAAifIAYAAIBKB+IAAh+IAWAAIAACfg");
	this.shape.setTransform(42.1,38.65);

	this.instance = new lib.ビットマップ3();

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArAyQgLgLAAgTQAAgSAMgLQAKgKAPAAQAPAAAKALQAKAIAAAUIg4AAQAAAPAGAHQAHAGAJAAQAKAAAEgEQAFgFAAgGIAPAAQgCAMgHAGQgIAJgRAAQgQAAgLgKgAA2gBQgEADgBAHIAmAAQAAgHgFgEQgEgFgJAAQgJAAgGAGgAgXA8IgihNIAQAAIAYA8IAYg8IAPAAIggBNgAicAtQgQgRAAgcQAAgcAQgRQAOgOAWAAQAUAAAPAOQAQARAAAcQAAAcgQARQgPAOgUAAQgWAAgOgOgAiQgkQgMAMAAAYQAAAYAMAMQAKAKAOAAQANAAAJgKQAMgMABgYQgBgYgMgMQgJgKgNAAQgOAAgKAKgAB6A7IAAhMIAOAAIAAASIAHgJQAMgLASAAIAAAQIgHgBQgLAAgJAIQgHAHgDAJIAAAng");
	this.shape_1.setTransform(40.85,39.025);

	this.instance_1 = new lib.ビットマップ2();
	this.instance_1.setTransform(16,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABmBRIgYhUIgYBUIgSAAIgghqIATAAIAWBOIAWhOIAVAAIAWBOIAWhOIAUAAIggBqgAhfBDQgQgQAAgYQAAgYAQgQQAOgOAVABQAUgBAPAOQAQAQAAAYQAAAYgQAQQgPAOgUAAQgVAAgOgOgAhPgCQgLAKAAATQAAASALALQAHAIAMAAQALAAAIgIQALgLAAgSQAAgTgMgKQgHgIgLAAQgLAAgIAIgADzBPIAAhIQgBgHgFgGQgGgGgKABQgJAAgKAJQgOANABAQIAAA0IgTAAIAAhoIATAAIAAATQAQgVATABQATgBALALQAHAIABAJIAABOgAkEBPIAAifIA3AAQAdAAATATQAVAVAAApQAAAngWAWQgRARgeAAgAjvA+IAiAAQASAAALgMQARgSAAgfQAAgigQgQQgNgNgRAAIgiAAg");
	this.shape_2.setTransform(41.25,38.65);

	this.instance_2 = new lib.ビットマップ1();

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Az0BOIY7wEIOtNqI48QDg");
	this.shape_3.setTransform(41.2,41.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance_1},{t:this.shape_1}]},1).to({state:[{t:this.instance_2},{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.6,-54,253.7,190.2);


(lib.sem = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.gotoAndStop(0)
		playSound("se");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(15));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC6600").ss(8,1,1).p("AgngnIBPAAIAABPIhPAAg");
	this.shape.setTransform(4,4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AgnAoIAAhPIBPAAIAABPg");
	this.shape_1.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,16,16);


(lib.sbt = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AmXGYQiqipAAjvQAAjHB2iXQAYgdAcgcIAMgNIAIgHQCkiWDfAAQAwAAAsAIQC0AaCICIQCqCpgBDuQABDviqCpQipCqjvgBQjuABipiqg");
	this.shape.setTransform(57.75,57.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AmXGYQiqipAAjvQAAjHB2iXQAYgdAcgcIAMgNIAIgHQCkiWDfAAQAwAAAsAIQC0AaCICIQCqCpgBDuQABDviqCpQipCqjvgBQjuABipiqg");
	this.shape_1.setTransform(57.75,57.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AmXGYQiqipAAjvQAAjHB2iXQAYgdAcgcIAMgNIAIgHQCkiWDfAAQAwAAAsAIQC0AaCICIQCqCpgBDuQABDviqCpQipCqjvgBQjuABipiqg");
	this.shape_2.setTransform(57.75,57.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115.5,115.5);


(lib.bt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhyBBQgMgMAAgXIAVAAQAAAQAIAIQAKALAWAAQATAAAKgKQAHgHAAgIQAAgJgFgFQgFgFgKgFIgZgLIgbgLQgHgDgGgFQgIgJAAgOQAAgSANgNQANgNAbAAQAdAAAPAPQANANAAASIgVAAQAAgMgIgHQgIgIgSAAQgUAAgHAHQgHAHAAAIQAAAJAEADQAFAFAMAFIAxAVQAHACAHAHQAKAKAAAOQAAATgNANQgOAOggAAQgfAAgRgRgAATBQIAAifIBnAAIAAASIhRAAIAAAxIBMAAIAAARIhMAAIAAA5IBWAAIAAASg");
	this.shape.setTransform(37.325,37.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AF8AAQAACdhwBwQhuBvieAAQidAAhvhvQhvhwAAidQAAicBvhwQBvhvCdAAQCeAABuBvQBwBwAACcg");
	this.shape_1.setTransform(38,38.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Aj8D8QhphoAAiUQAAiTBphpQBphpCTAAQCUAABoBpQBqBpAACTQAACUhqBoQhoBqiUAAQiTAAhphqg");
	this.shape_2.setTransform(37.95,37.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AkMENQhvhwAAidQAAicBvhwQBwhvCcAAQCdAABwBvQBvBwAACcQAACdhvBwQhwBvidAAQicAAhwhvgAj8j9QhpBpAACUQAACTBpBpQBoBpCUAAQCTAABphpQBphpAAiTQAAiUhphpQhphoiTAAQiUAAhoBog");
	this.shape_3.setTransform(38,38.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bt, new cjs.Rectangle(-1,-1,78,78.1), null);


(lib.symbol6_copy = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ビットマップ5();
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// レイヤー_1
	this.sbt = new lib.sbt();
	this.sbt.name = "sbt";
	this.sbt.setTransform(57.8,57.8,1,1,0,0,0,57.8,57.8);

	this.timeline.addTween(cjs.Tween.get(this.sbt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symbol6_copy, new cjs.Rectangle(-1,-1,118,118), null);


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

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AJCAAQAADviqCpQipCqjvAAQjuAAiqiqQipipAAjvQAAjHB2iXQAXgeAcgcQAGgGAHgGQAEgEAEgDQCjiWDgAAQAwAAAsAHQC1AbCHCHQCqCqAADug");
	this.shape.setTransform(57.75,57.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(225,225,225,0.008)").s().p("AmXGYQiqipAAjvQAAjHB2iXQAYgdAcgcIAMgNIAIgHQCkiWDfAAQAwAAAsAIQC0AaCICIQCqCpgBDuQABDviqCpQipCqjvgBQjuABipiqg");
	this.shape_1.setTransform(57.75,57.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// レイヤー_1
	this.sbt = new lib.sbt();
	this.sbt.name = "sbt";
	this.sbt.setTransform(57.8,57.8,1,1,0,0,0,57.8,57.8);

	this.timeline.addTween(cjs.Tween.get(this.sbt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symbol6, new cjs.Rectangle(-1,-1,117.5,117.5), null);


(lib.symbol4_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AAbA1IAAhHQAAgIgFgGQgGgFgKAAQgJAAgJAJQgOAOAAAPIAAA0IgTAAIAAhoIATAAIAAATQARgUARAAQATAAAMALQAHAHAAALIAABMg");
	this.shape.setTransform(200.5,17.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiAoQgPgQgBgYQABgXAPgQQAPgOATAAQAVAAAOAOQAPAQAAAXQAAAYgPAQQgOAOgVAAQgTAAgPgOgAgSgdQgLALAAASQAAATALAKQAHAIALAAQALAAAIgIQALgKAAgTQAAgSgLgLQgIgIgLAAQgLAAgHAIg");
	this.shape_1.setTransform(188.4,17.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIA/QgJgJAAgLIAAg+IgXAAIAAgPIAXAAIAAglIASAAIAAAlIAfAAIAAAPIgfAAIAAA8QAAAGAEAEQAEAEAIAAQAOAAAKgHIAAASQgKAGgNAAQgSAAgIgJg");
	this.shape_2.setTransform(177.925,15.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIA/QgJgJAAgLIAAg+IgXAAIAAgPIAXAAIAAglIASAAIAAAlIAfAAIAAAPIgfAAIAAA8QAAAGAEAEQAEAEAIAAQAOAAAKgHIAAASQgKAGgNAAQgSAAgIgJg");
	this.shape_3.setTransform(169.475,15.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AglAtQgIgJAAgNIAAhLIATAAIAABFQAAALAFAGQAFAEAJABQALAAAJgKQAOgOAAgPIAAg0IATAAIAABnIgTAAIAAgSQgPAUgUABQgUAAgJgJg");
	this.shape_4.setTransform(159.4,17.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbBCIAAANIgTAAIAAifIATAAIAABEQAMgQAQABQATgBAMAMQAQAPgBAcQABAbgQAPQgMAMgTAAQgUAAgIgPgAgTgBQgJAHABAPIAAAMQAAAOAJAJQAJAIAKAAQAJAAAHgHQAKgJAAgVQAAgWgJgIQgIgHgJAAQgKgBgKAKg");
	this.shape_5.setTransform(147.45,14.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiArQgJgJAAgOIATAAQAAAIAEAEQAHAGANAAQAPAAAGgFQADgEAAgGQAAgDgEgFQgEgEgJgCQgPgDgJgDQgKgDgFgEQgIgIAAgKQAAgMAIgIQALgLAVAAQAWAAAJAKQAKAJAAAMIgTAAQAAgHgDgDQgGgFgOAAQgJAAgGAFQgEAFgBAFQABAEACADQAEAEASAEIAVAGQAHACAFAEQAHAHAAAKQAAAMgKAJQgKALgYAAQgXAAgLgLg");
	this.shape_6.setTransform(128.7,17.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgfBbIAAgSQAQAHAKAAQAJAAAGgGQAEgEAAgFIAAhrIASAAIAABsQAAAMgIAJQgKAKgTAAQgOAAgMgGgAAOhIIAAgYIASAAIAAAYg");
	this.shape_7.setTransform(118.225,16.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghAoQgPgPAAgZQAAgYAQgQQANgNAUAAQATAAAOAOQAOANAAAaIhLAAQAAAUAJAJQAIAIANAAQANAAAFgFQAHgHAAgIIAVAAQgEARgJAIQgMAMgVAAQgWAAgOgOgAgSgeQgHAHgBAJIA0AAQAAgJgHgIQgHgGgMAAQgKAAgIAHg");
	this.shape_8.setTransform(111.925,17.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIA/QgJgJAAgLIAAg+IgXAAIAAgPIAXAAIAAglIASAAIAAAlIAfAAIAAAPIgfAAIAAA8QAAAGAEAEQAEAEAIAAQAOAAAKgHIAAASQgKAGgNAAQgSAAgIgJg");
	this.shape_9.setTransform(101.525,15.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgnAtQgJgIAAgMQAAgNAJgIQAJgJARgCQALgCAIgDQAMgDAEgDQAAgHgFgGQgGgGgKAAQgMAAgGAGQgEAEgBAGIgVAAQADgNAJgJQAKgKAUAAQAXAAAKAKQAJAJAAAMIAAA7QAAAKAIAFIgXAAQgEgDAAgJQgOAOgUAAQgSAAgJgJgAAMACIgXAFQgIACgDAEQgFAFAAAFQAAAHAFAFQACACAKAAQAPAAAKgKQAHgGAAgDIAAgSIgKACg");
	this.shape_10.setTransform(91.725,17.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AghAoQgPgPAAgZQAAgYAQgQQANgNAUAAQATAAAOAOQAOANAAAaIhLAAQAAAUAJAJQAIAIANAAQANAAAFgFQAHgHAAgIIAVAAQgEARgJAIQgMAMgVAAQgWAAgOgOgAgSgeQgHAHgBAJIA0AAQAAgJgHgIQgHgGgMAAQgKAAgIAHg");
	this.shape_11.setTransform(80.025,17.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiA1IAAhoIATAAIAAAbQAFgIAFgFQAOgPAaAAIAAAUIgLgBQgOAAgLAMQgKALgEAKIAAA1g");
	this.shape_12.setTransform(70.425,17.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AggApQgQgRAAgYQAAgYAPgPQAOgOAUAAQAWAAALALQALAKABAPIgUAAQgBgHgGgHQgHgGgLAAQgKAAgHAIQgLALAAATQAAATAKAKQAHAHALAAQAMAAAIgHQAHgIAAgMIAVAAQAAAUgNAMQgMAMgXAAQgTAAgOgNg");
	this.shape_13.setTransform(59.7,17.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AEIA9QgHgHAAgJQAAgLAHgIQAIgHAOgDIARgEIAOgEQAAgHgFgEQgFgEgIAAQgLAAgFAEQgDADgCAFIgRAAQADgKAHgIQAJgIAQAAQAUAAAJAIQAHAIAAAJIAAAyQABAJAGAEIgTAAQgDgDAAgHQgMAMgSAAQgPAAgIgIgAE0AZIgUAFQgHABgDADQgDAEAAAFQAAAFADAEQADADAHAAQAOAAAJgJQAFgFABgDIAAgQIgJADgACrA5QgMgMAAgWQAAgVANgMQALgLARAAQARAAALALQAMAKAAAXIhAAAQAAARAHAIQAIAHALAAQALAAAEgFQAGgFAAgIIASAAQgEAPgHAHQgKAKgSAAQgTAAgMgMgAC3gCQgFAFgBAIIAtAAQAAgIgHgGQgFgFgLAAQgJAAgHAGgAiZA+QgIgIAAgJIAAg0IgTAAIAAgNIATAAIAAgfIAQAAIAAAfIAbAAIAAANIgbAAIAAAyQAAAFADAEQAEADAHAAQALAAAJgGIAAAPQgJAFgLAAQgPAAgHgHgABaBDIAAhXIAQAAIAAAVQAEgFAFgFQAMgMAWAAIAAARIgJgBQgMAAgLAJQgIAJgDAJIAAAtgAA5BDIgQgpIgzAAIgQApIgTAAIA0iHIAQAAIA2CHgAgFALIAoAAIgUg1gAjRBDIAAhXIAPAAIAABXgAj/BDIAAg/IhBAAIAAA/IgSAAIAAiFIASAAIAAA4IBBAAIAAg4IASAAIAACFgAjRgtIAAgVIAPAAIAAAVg");
	this.shape_14.setTransform(100.95,192.725);

	this.a = new lib.symbol2();
	this.a.name = "a";
	this.a.setTransform(126.65,134.65,1,1,0,0,0,41,41);
	new cjs.ButtonHelper(this.a, 0, 1, 2, false, new lib.symbol2(), 3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AFHu2IOuNpI49QEIustpg");
	this.shape_15.setTransform(126.85,134.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.a},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symbol4_4, new cjs.Rectangle(-1,0,309.7,230.9), null);


(lib.symbol4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AAbA1IAAhHQAAgIgFgGQgGgFgKAAQgJAAgJAJQgOAOAAAPIAAA0IgTAAIAAhoIATAAIAAATQARgUARAAQATAAAMALQAHAHAAALIAABMg");
	this.shape.setTransform(200.5,17.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiAoQgPgQgBgYQABgXAPgQQAPgOATAAQAVAAAOAOQAPAQAAAXQAAAYgPAQQgOAOgVAAQgTAAgPgOgAgSgdQgLALAAASQAAATALAKQAHAIALAAQALAAAIgIQALgKAAgTQAAgSgLgLQgIgIgLAAQgLAAgHAIg");
	this.shape_1.setTransform(188.4,17.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIA/QgJgJAAgLIAAg+IgXAAIAAgPIAXAAIAAglIASAAIAAAlIAfAAIAAAPIgfAAIAAA8QAAAGAEAEQAEAEAIAAQAOAAAKgHIAAASQgKAGgNAAQgSAAgIgJg");
	this.shape_2.setTransform(177.925,15.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIA/QgJgJAAgLIAAg+IgXAAIAAgPIAXAAIAAglIASAAIAAAlIAfAAIAAAPIgfAAIAAA8QAAAGAEAEQAEAEAIAAQAOAAAKgHIAAASQgKAGgNAAQgSAAgIgJg");
	this.shape_3.setTransform(169.475,15.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AglAtQgIgJAAgNIAAhLIATAAIAABFQAAALAFAGQAFAEAJABQALAAAJgKQAOgOAAgPIAAg0IATAAIAABnIgTAAIAAgSQgPAUgUABQgUAAgJgJg");
	this.shape_4.setTransform(159.4,17.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbBCIAAANIgTAAIAAifIATAAIAABEQAMgQAQABQATgBAMAMQAQAPgBAcQABAbgQAPQgMAMgTAAQgUAAgIgPgAgTgBQgJAHABAPIAAAMQAAAOAJAJQAJAIAKAAQAJAAAHgHQAKgJAAgVQAAgWgJgIQgIgHgJAAQgKgBgKAKg");
	this.shape_5.setTransform(147.45,14.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiArQgJgJAAgOIATAAQAAAIAEAEQAHAGANAAQAPAAAGgFQADgEAAgGQAAgDgEgFQgEgEgJgCQgPgDgJgDQgKgDgFgEQgIgIAAgKQAAgMAIgIQALgLAVAAQAWAAAJAKQAKAJAAAMIgTAAQAAgHgDgDQgGgFgOAAQgJAAgGAFQgEAFgBAFQABAEACADQAEAEASAEIAVAGQAHACAFAEQAHAHAAAKQAAAMgKAJQgKALgYAAQgXAAgLgLg");
	this.shape_6.setTransform(128.7,17.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgfBbIAAgSQAQAHAKAAQAJAAAGgGQAEgEAAgFIAAhrIASAAIAABsQAAAMgIAJQgKAKgTAAQgOAAgMgGgAAOhIIAAgYIASAAIAAAYg");
	this.shape_7.setTransform(118.225,16.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghAoQgPgPAAgZQAAgYAQgQQANgNAUAAQATAAAOAOQAOANAAAaIhLAAQAAAUAJAJQAIAIANAAQANAAAFgFQAHgHAAgIIAVAAQgEARgJAIQgMAMgVAAQgWAAgOgOgAgSgeQgHAHgBAJIA0AAQAAgJgHgIQgHgGgMAAQgKAAgIAHg");
	this.shape_8.setTransform(111.925,17.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIA/QgJgJAAgLIAAg+IgXAAIAAgPIAXAAIAAglIASAAIAAAlIAfAAIAAAPIgfAAIAAA8QAAAGAEAEQAEAEAIAAQAOAAAKgHIAAASQgKAGgNAAQgSAAgIgJg");
	this.shape_9.setTransform(101.525,15.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgnAtQgJgIAAgMQAAgNAJgIQAJgJARgCQALgCAIgDQAMgDAEgDQAAgHgFgGQgGgGgKAAQgMAAgGAGQgEAEgBAGIgVAAQADgNAJgJQAKgKAUAAQAXAAAKAKQAJAJAAAMIAAA7QAAAKAIAFIgXAAQgEgDAAgJQgOAOgUAAQgSAAgJgJgAAMACIgXAFQgIACgDAEQgFAFAAAFQAAAHAFAFQACACAKAAQAPAAAKgKQAHgGAAgDIAAgSIgKACg");
	this.shape_10.setTransform(91.725,17.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AghAoQgPgPAAgZQAAgYAQgQQANgNAUAAQATAAAOAOQAOANAAAaIhLAAQAAAUAJAJQAIAIANAAQANAAAFgFQAHgHAAgIIAVAAQgEARgJAIQgMAMgVAAQgWAAgOgOgAgSgeQgHAHgBAJIA0AAQAAgJgHgIQgHgGgMAAQgKAAgIAHg");
	this.shape_11.setTransform(80.025,17.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiA1IAAhoIATAAIAAAbQAFgIAFgFQAOgPAaAAIAAAUIgLgBQgOAAgLAMQgKALgEAKIAAA1g");
	this.shape_12.setTransform(70.425,17.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AggApQgQgRAAgYQAAgYAPgPQAOgOAUAAQAWAAALALQALAKABAPIgUAAQgBgHgGgHQgHgGgLAAQgKAAgHAIQgLALAAATQAAATAKAKQAHAHALAAQAMAAAIgHQAHgIAAgMIAVAAQAAAUgNAMQgMAMgXAAQgTAAgOgNg");
	this.shape_13.setTransform(59.7,17.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AEIA9QgHgHAAgJQAAgLAHgIQAIgHAOgDIARgEIAOgEQAAgHgFgEQgFgEgIAAQgLAAgFAEQgDADgCAFIgRAAQADgKAHgIQAJgIAQAAQAUAAAJAIQAHAIAAAJIAAAyQABAJAGAEIgTAAQgDgDAAgHQgMAMgSAAQgPAAgIgIgAE0AZIgUAFQgHABgDADQgDAEAAAFQAAAFADAEQADADAHAAQAOAAAJgJQAFgFABgDIAAgQIgJADgACrA5QgMgMAAgWQAAgVANgMQALgLARAAQARAAALALQAMAKAAAXIhAAAQAAARAHAIQAIAHALAAQALAAAEgFQAGgFAAgIIASAAQgEAPgHAHQgKAKgSAAQgTAAgMgMgAC3gCQgFAFgBAIIAtAAQAAgIgHgGQgFgFgLAAQgJAAgHAGgAiZA+QgIgIAAgJIAAg0IgTAAIAAgNIATAAIAAgfIAQAAIAAAfIAbAAIAAANIgbAAIAAAyQAAAFADAEQAEADAHAAQALAAAJgGIAAAPQgJAFgLAAQgPAAgHgHgABaBDIAAhXIAQAAIAAAVQAEgFAFgFQAMgMAWAAIAAARIgJgBQgMAAgLAJQgIAJgDAJIAAAtgAA5BDIgQgpIgzAAIgQApIgTAAIA0iHIAQAAIA2CHgAgFALIAoAAIgUg1gAjRBDIAAhXIAPAAIAABXgAj/BDIAAg/IhBAAIAAA/IgSAAIAAiFIASAAIAAA4IBBAAIAAg4IASAAIAACFgAjRgtIAAgVIAPAAIAAAVg");
	this.shape_14.setTransform(100.95,192.725);

	this.a = new lib.symbol2();
	this.a.name = "a";
	this.a.setTransform(126.65,134.65,1,1,0,0,0,41,41);
	new cjs.ButtonHelper(this.a, 0, 1, 2, false, new lib.symbol2(), 3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AFHu2IOuNpI49QEIustpg");
	this.shape_15.setTransform(126.85,134.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.a},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symbol4, new cjs.Rectangle(-1,0,309.7,230.9), null);


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

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/*
		this.a.addEventListener("mousedown", function() {
			console.log(4)
		})
		
		this.a.addEventListener("pressup", function() {
			console.log(6)
		})
		*/
		
		function p(d) {
		
			var sbt = d.sbt;
		
			var f = function(e) {
				console.log(e)
				console.log(e.rawX)
				console.log(e.type, e.currentTarget, e.target)
				sbt.gotoAndStop(2);
			};
			d.addEventListener("mousedown", f);
			d.addEventListener("mousedown", f);
			d.addEventListener("mousedown", function(e) {
				console.log(":")
			});
			d.addEventListener("click", function(e) {
				console.log(e.type, e.currentTarget, e.target)
			});
		
			d.addEventListener("pressup", function(e) {
				console.log(e.type, e.currentTarget, e.target)
				sbt.gotoAndStop(0);
			});
		
			d.addEventListener("pressmove", function(e) {
				console.log(e.type, e.currentTarget, e.target)
			});
		
			d.addEventListener("rollover", function(e) {
				console.log(e.type, e.currentTarget, e.target)
				sbt.gotoAndStop(1);
			});
		
			d.addEventListener("rollout", function(e) {
				console.log(e.type, e.currentTarget, e.target)
				sbt.gotoAndStop(0);
			});
		}
		
		p(this.sbt)
		p(this.sbt2)
		
		var sem = this.sem;
		this.se.addEventListener("mousedown", function() {
			sem.gotoAndStop(1);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// レイヤー_2
	this.instance = new lib.symbol4_4();
	this.instance.setTransform(23.45,-196.4,1,1,0,0,0,154.1,115.2);

	this.instance_1 = new lib.symbol4();
	this.instance_1.setTransform(-251.55,-196.4,1,1,0,0,0,154.1,115.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// レイヤー_3
	this.sbt = new lib.symbol6();
	this.sbt.name = "sbt";
	this.sbt.setTransform(129.85,-3.85,1,1,0,0,0,57.8,57.8);

	this.sbt2 = new lib.symbol6_copy();
	this.sbt2.name = "sbt2";
	this.sbt2.setTransform(-95.15,15.15,1,1,0,0,0,57.8,57.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sbt2},{t:this.sbt}]}).wait(1));

	// レイヤー_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbA1IAAhHQAAgIgGgGQgFgFgKAAQgIAAgKAJQgOAOAAAPIAAA0IgTAAIAAhoIATAAIAAATQAQgUATAAQASAAALALQAIAHAAALIAABMg");
	this.shape.setTransform(-86.9,-69.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghAoQgRgQABgYQgBgXARgQQANgOAUAAQAVAAANAOQARAQgBAXQABAYgRAQQgNAOgVAAQgUAAgNgOgAgSgdQgLALAAASQAAATAKAKQAJAIAKAAQALAAAJgIQAKgKAAgTQAAgSgLgLQgIgIgLAAQgLAAgHAIg");
	this.shape_1.setTransform(-99,-69.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIA/QgJgJAAgLIAAg+IgXAAIAAgPIAXAAIAAglIASAAIAAAlIAfAAIAAAPIgfAAIAAA8QAAAGAEAEQAEAEAIAAQAOAAAKgHIAAASQgKAGgNAAQgSAAgIgJg");
	this.shape_2.setTransform(-109.475,-71.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIA/QgJgJAAgLIAAg+IgXAAIAAgPIAXAAIAAglIASAAIAAAlIAfAAIAAAPIgfAAIAAA8QAAAGAEAEQAEAEAIAAQAOAAAKgHIAAASQgKAGgNAAQgSAAgIgJg");
	this.shape_3.setTransform(-117.925,-71.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AglAtQgIgJAAgNIAAhMIATAAIAABGQAAALAGAGQAEAFAIAAQAMAAAJgKQAOgOAAgPIAAg1IATAAIAABoIgTAAIAAgSQgPAUgVAAQgTABgJgJg");
	this.shape_4.setTransform(-128,-69.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcBCIAAANIgTAAIAAifIATAAIAABDQAMgOASAAQASAAAMALQAPAQABAbQgBAbgPAPQgMAMgTAAQgUAAgJgPgAgTgBQgJAHAAAPIAAALQAAAOAKAKQAJAIAKAAQAJAAAGgHQALgKAAgUQAAgWgKgIQgHgIgJABQgLAAgJAJg");
	this.shape_5.setTransform(-139.95,-72.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgIA/QgJgJAAgLIAAg+IgXAAIAAgPIAXAAIAAglIASAAIAAAlIAfAAIAAAPIgfAAIAAA8QAAAGAEAEQAEAEAIAAQAOAAAKgHIAAASQgKAGgNAAQgSAAgIgJg");
	this.shape_6.setTransform(-157.575,-71.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgvBHIAAiLIATAAIAAAMQAMgOAQAAQAUAAANAMQAPAPAAAbQAAAcgPAPQgNAMgUAAQgSAAgKgPIAAAvgAgSgtQgKAKAAANIAAANQAAAMALAKQAIAJAJAAQAKAAAGgHQALgKAAgVQAAgUgKgKQgHgHgKAAQgJAAgJAIg");
	this.shape_7.setTransform(-167.6,-67.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIBPIAAhoIARAAIAABogAgIg3IAAgYIARAAIAAAYg");
	this.shape_8.setTransform(-176.075,-72.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiA1IAAhoIATAAIAAAbQAFgIAFgFQAOgPAaAAIAAAUIgLgBQgOAAgLAMQgKALgEAKIAAA1g");
	this.shape_9.setTransform(-182.175,-69.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgfApQgRgRAAgYQAAgYAPgPQAOgOATAAQAXAAALALQAKAKACAPIgUAAQgBgHgHgHQgFgGgMAAQgKAAgIAIQgLALAAATQAAATAKAKQAIAHAKAAQANAAAIgHQAIgIgBgMIAVAAQAAAUgNAMQgMAMgYAAQgSAAgNgNg");
	this.shape_10.setTransform(-192.9,-69.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgiArQgJgJAAgOIASAAQACAIADAEQAHAGANAAQAPAAAFgFQAEgEAAgGQAAgDgFgFQgDgEgIgCQgRgDgIgDQgKgDgFgEQgJgIAAgKQAAgMAJgIQAMgLAUAAQAWAAAJAKQAKAJAAAMIgTAAQgBgHgCgDQgGgFgOAAQgKAAgFAFQgFAFAAAFQAAAEADADQAEAEASAEIAVAGQAIACAEAEQAHAHAAAKQAAAMgJAJQgLALgYAAQgWAAgMgLg");
	this.shape_11.setTransform(-204.45,-69.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// レイヤー_5
	this.sem = new lib.sem();
	this.sem.name = "sem";
	this.sem.setTransform(-467.95,-225.95,1,1,0,0,0,4,4);

	this.se = new lib.bt();
	this.se.name = "se";
	this.se.setTransform(-351.2,15.8,1,1,0,0,0,38,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.se},{t:this.sem}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シンボル1, new cjs.Rectangle(-475.9,-311.6,664,386), null);


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

	// レイヤー_6
	this.instance = new lib.シンボル1();
	this.instance.setTransform(451.7,352.75,1,1,0,0,0,34.7,34.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(216.1,206.5,389,185.89999999999998);
// library properties:
lib.properties = {
	id: '2FA8E0C7230941478CE2CA3DB82DBEDF',
	width: 550,
	height: 400,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/game_atlas_1.png?1732705999146", id:"game_atlas_1"},
		{src:"sounds/se.mp3?1732705999159", id:"se"}
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