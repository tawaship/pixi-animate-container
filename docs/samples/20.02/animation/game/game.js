(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bitmap1 = function() {
	this.initialize(img.bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.gra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.bitmap1();
	this.instance.setTransform(-16,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,32,32);


(lib.anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.gra("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360,x:485,y:43},65,cjs.Ease.cubicIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-18.2,517,79.4);


// stage content:
(lib.game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E6E6E").s().p("AgcBcQAqgpAAgzQAAgzgqgoIALgKQAuAsAAA5QAAA6guAsg");
	this.shape.setTransform(322.025,347.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6E6E6E").s().p("Ag1BQIAAifIBrAAIAAARIhVAAIAAA1IBCAAIAAARIhCAAIAABIg");
	this.shape_1.setTransform(312.575,347.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E6E6E").s().p("AggBFQgSgSgBgpIAAgSQABgpASgTQANgNATAAQATAAAOANQATATAAApIAAASQAAApgTASQgOANgTAAQgTAAgNgNgAgQg4QgMANAAAhIAAAVQAAAgANAOQAHAIAIgBQAJABAIgIQAMgNAAghIAAgVQAAghgMgNQgIgHgJAAQgJAAgHAHg");
	this.shape_2.setTransform(299.3,347.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E6E6E").s().p("AALBRIAAgpIg+AAIAAgTIA+hlIAWAAIAABmIATAAIAAASIgTAAIAAApgAgeAWIApAAIAAhEg");
	this.shape_3.setTransform(287.35,347.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E6E6E").s().p("AgbAAQAAg5AtgsIAKAKQgqAoAAAzQAAAzAqApIgKAKQgtgsAAg6g");
	this.shape_4.setTransform(277.7,347.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6E6E6E").s().p("AghAoQgPgPAAgZQAAgYAQgQQANgNAUAAQATAAAOAOQAOANAAAaIhLAAQAAAUAJAJQAIAIANAAQANAAAFgFQAHgHAAgIIAVAAQgEARgJAIQgMAMgVAAQgWAAgOgOgAgSgeQgHAHgBAJIA0AAQAAgJgHgIQgHgGgMAAQgKAAgIAHg");
	this.shape_5.setTransform(491.925,324.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6E6E6E").s().p("AA3A1IAAhJQAAgFgDgEQgGgGgIAAQgNAAgIAJQgHAHgBAHIAABBIgRAAIAAhIQAAgFgGgGQgEgFgKAAQgKAAgHAIQgJAIAAAIIAABAIgTAAIAAhoIATAAIAAAQQAMgRAQAAQASAAAIAJQAFAFADAFQAMgTAWAAQAOAAAJAIQAJAJAAAMIAABMg");
	this.shape_6.setTransform(477.05,323.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6E6E6E").s().p("AgnAtQgJgIAAgMQAAgNAJgIQAJgJARgCQALgCAIgDQAMgDAEgDQAAgHgFgGQgGgGgKAAQgMAAgGAGQgEAEgBAGIgVAAQADgNAJgJQAKgKAUAAQAXAAAKAKQAJAJAAAMIAAA7QAAAKAIAFIgXAAQgEgDAAgJQgOAOgUAAQgSAAgJgJgAAMACIgXAFQgIACgDAEQgFAFAAAFQAAAHAFAFQACACAKAAQAPAAAKgKQAHgGAAgDIAAgSIgKACg");
	this.shape_7.setTransform(462.525,324.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6E6E6E").s().p("AgiA1IAAhoIATAAIAAAbQAFgIAFgFQAOgPAaAAIAAAUIgLgBQgOAAgLAMQgKALgEAKIAAA1g");
	this.shape_8.setTransform(453.225,323.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6E6E6E").s().p("AgRBRIAAhZIgXAAIAAgPIAXAAIAAgaQAAgNAIgIQAJgKAQAAQAMAAANAEIAAATQgNgGgJAAQgKAAgFAEQgDAFAAAFIAAAaIAfAAIAAAPIgfAAIAABZg");
	this.shape_9.setTransform(445.225,321.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6E6E6E").s().p("AghAoQgPgPAAgZQAAgYAQgQQANgNAUAAQATAAAOAOQAOANAAAaIhLAAQAAAUAJAJQAIAIANAAQANAAAFgFQAHgHAAgIIAVAAQgEARgJAIQgMAMgVAAQgWAAgOgOgAgSgeQgHAHgBAJIA0AAQAAgJgHgIQgHgGgMAAQgKAAgIAHg");
	this.shape_10.setTransform(427.875,324.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6E6E6E").s().p("AgIBQIAAifIARAAIAACfg");
	this.shape_11.setTransform(419.325,321.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6E6E6E").s().p("AgrA8QgHgGAAgKQAAgGAFgFQAEgEAHgDIgHgGQgEgFAAgHQAAgJAOgIQgLgKAAgOQAAgQALgLQAKgKAQAAQAOAAALAJQAKgJANAAIAIAAIAAASQgLgFgOAEQAHAIgBAMQABARgLAKQgJAIgRAAQgJAAgLgDQgEACAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAABABQAEAEARABIAfACQAJACAFAFQAHAHAAALQAAALgHAHQgLALghAAQgdAAgKgLgAgeAjQgDAEAAAEQAAAFADAEQAGAGATAAQAZAAAGgHQADgEAAgEQABgDgDgDQgEgEgKAAQgVgBgMgCQgGACgEADgAgQgxQgHAGAAAKQAAAJAGAGQAGAFAHAAQAHAAAFgEQAGgGgBgKQABgKgHgGQgFgFgHAAQgGAAgFAFg");
	this.shape_12.setTransform(411.6,325.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6E6E6E").s().p("AAbA1IAAhHQAAgIgFgGQgGgFgKAAQgJAAgJAJQgOAOAAAPIAAA0IgTAAIAAhoIATAAIAAATQARgUARAAQATAAALALQAIAHAAALIAABMg");
	this.shape_13.setTransform(399.75,323.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6E6E6E").s().p("AgIBPIAAhnIARAAIAABngAgIg3IAAgXIARAAIAAAXg");
	this.shape_14.setTransform(391.225,321.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6E6E6E").s().p("AgiArQgJgJAAgOIASAAQACAIADAEQAHAGANAAQAPAAAGgFQADgEAAgGQAAgDgFgFQgDgEgJgCQgQgDgIgDQgLgDgEgEQgJgIABgKQgBgMAJgIQALgLAVAAQAVAAALAKQAJAJAAAMIgSAAQgBgHgEgDQgFgFgOAAQgKAAgFAFQgEAFAAAFQgBAEADADQAEAEATAEIAUAGQAHACAEAEQAIAHAAAKQAAAMgKAJQgKALgYAAQgWAAgMgLg");
	this.shape_15.setTransform(383.2,324.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6E6E6E").s().p("Ag0AIIAAgPIBqAAIAAAPg");
	this.shape_16.setTransform(364.35,321);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6E6E6E").s().p("AggApQgQgRAAgYQAAgYAPgPQAOgOATAAQAXAAALALQALAKABAPIgUAAQgBgHgHgHQgFgGgMAAQgKAAgHAIQgMALABATQgBATALAKQAHAHAKAAQANAAAIgHQAHgIAAgMIAVAAQgBAUgMAMQgMAMgYAAQgSAAgOgNg");
	this.shape_17.setTransform(345.1,324.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6E6E6E").s().p("AgIBPIAAhnIARAAIAABngAgIg3IAAgXIARAAIAAAXg");
	this.shape_18.setTransform(336.525,321.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6E6E6E").s().p("AAbBQIAAhGQAAgKgHgGQgEgFgIABQgKgBgIAJQgLAJgFATIAAA2IgTAAIAAifIATAAIAABKQAQgVASABQATgBAJAJQAKAKAAAMIAABLg");
	this.shape_19.setTransform(328,321.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6E6E6E").s().p("AguBHIAAiLIASAAIAAAMQAMgOAQAAQAUAAANAMQAOAPAAAbQAAAcgOAPQgNAMgUAAQgSAAgKgPIAAAvgAgSgtQgKAKAAANIAAANQAAAMALAKQAIAJAJAAQAKAAAGgHQALgKAAgVQAAgUgKgKQgHgHgKAAQgKAAgIAIg");
	this.shape_20.setTransform(316.05,325.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6E6E6E").s().p("AgnAtQgJgIAAgMQAAgNAJgIQAJgJARgCQALgCAIgDQAMgDAEgDQAAgHgFgGQgGgGgKAAQgMAAgGAGQgEAEgBAGIgVAAQADgNAJgJQAKgKAUAAQAXAAAKAKQAJAJAAAMIAAA7QAAAKAIAFIgXAAQgEgDAAgJQgOAOgUAAQgSAAgJgJgAAMACIgXAFQgIACgDAEQgFAFAAAFQAAAHAFAFQACACAKAAQAPAAAKgKQAHgGAAgDIAAgSIgKACg");
	this.shape_21.setTransform(304.375,324.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6E6E6E").s().p("AgiA1IAAhoIATAAIAAAbQAFgIAFgFQAOgPAaAAIAAAUIgLgBQgOAAgLAMQgKALgEAKIAAA1g");
	this.shape_22.setTransform(295.075,323.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6E6E6E").s().p("AAzBSIgGgQQgPAQgZAAQgdAAgTgSQgXgYAAgoQAAgnAVgXQAUgTAbAAQAcAAASASQAQAPAAAWIgWAAQgBgQgLgLQgKgKgSAAQgQAAgNAMQgQARgBAiQABAiARASQANAMAUAAQAQAAALgKQAKgLABgKIAAgPIgbAAIAAgSIAxAAIAABSg");
	this.shape_23.setTransform(282.2,321.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6E6E6E").s().p("AgcBcQAqgpAAgzQAAgzgqgoIALgKQAuAsAAA5QAAA6guAsg");
	this.shape_24.setTransform(377.075,145.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6E6E6E").s().p("Ag1BQIAAifIBrAAIAAASIhVAAIAAA0IBCAAIAAARIhCAAIAABIg");
	this.shape_25.setTransform(367.625,145.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6E6E6E").s().p("AggBFQgTgSAAgpIAAgSQAAgpATgTQAOgNASAAQAUAAANANQASATAAApIAAASQAAApgSASQgNANgUAAQgSAAgOgNgAgQg3QgMALAAAjIAAAUQAAAhANANQAIAHAHAAQAKAAAHgHQAMgNAAghIAAgUQAAgjgMgLQgHgIgKAAQgIAAgIAIg");
	this.shape_26.setTransform(354.35,145.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6E6E6E").s().p("AALBRIAAgpIg+AAIAAgTIA+hlIAWAAIAABmIATAAIAAASIgTAAIAAApgAgfAWIAqAAIAAhDg");
	this.shape_27.setTransform(342.4,145.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6E6E6E").s().p("AgIA/QgJgJAAgLIAAg+IgXAAIAAgPIAXAAIAAglIASAAIAAAlIAfAAIAAAPIgfAAIAAA8QAAAGAEAEQAEAEAIAAQAOAAAKgHIAAASQgKAGgNAAQgSAAgIgJg");
	this.shape_28.setTransform(324.675,146.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6E6E6E").s().p("AgiA1IAAhoIATAAIAAAbQAFgIAFgFQAOgPAaAAIAAAUIgLgBQgOAAgLAMQgKALgEAKIAAA1g");
	this.shape_29.setTransform(317.025,147.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6E6E6E").s().p("AgnAtQgJgIAAgMQAAgNAJgIQAJgJARgCQALgCAIgDQAMgDAEgDQAAgHgFgGQgGgGgKAAQgMAAgGAGQgEAEgBAGIgVAAQADgNAJgJQAKgKAUAAQAXAAAKAKQAJAJAAAMIAAA7QAAAKAIAFIgXAAQgEgDAAgJQgOAOgUAAQgSAAgJgJgAAMACIgXAFQgIACgDAEQgFAFAAAFQAAAHAFAFQACACAKAAQAPAAAKgKQAHgGAAgDIAAgSIgKACg");
	this.shape_30.setTransform(306.525,148.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6E6E6E").s().p("AgIA/QgJgJAAgLIAAg+IgXAAIAAgPIAXAAIAAglIASAAIAAAlIAfAAIAAAPIgfAAIAAA8QAAAGAEAEQAEAEAIAAQAOAAAKgHIAAASQgKAGgNAAQgSAAgIgJg");
	this.shape_31.setTransform(296.425,146.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6E6E6E").s().p("AgiArQgJgJAAgOIATAAQABAIADAEQAHAGANAAQAPAAAFgFQAEgEAAgGQAAgDgEgFQgEgEgIgCQgRgDgIgDQgLgDgEgEQgJgIAAgKQAAgMAJgIQALgLAVAAQAVAAAKAKQAKAJAAAMIgTAAQgBgHgCgDQgGgFgOAAQgJAAgGAFQgFAFAAAFQAAAEADADQAEAEASAEIAVAGQAHACAFAEQAHAHAAAKQAAAMgJAJQgLALgYAAQgXAAgLgLg");
	this.shape_32.setTransform(286.85,148.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6E6E6E").s().p("AgbAAQAAg5AtgsIAKAKQgqAoAAAzQAAAzAqApIgKAKQgtgsAAg6g");
	this.shape_33.setTransform(277.7,145.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6E6E6E").s().p("AguBHIAAiLIATAAIAAAMQALgOARAAQATAAANAMQAPAPgBAbQABAcgPAPQgNAMgTAAQgTAAgJgPIAAAvgAgSgtQgJAKAAANIAAANQAAAMAKAKQAIAJAKAAQAJAAAHgHQAKgKAAgVQAAgUgJgKQgIgHgJAAQgLAAgIAIg");
	this.shape_34.setTransform(413.05,123.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6E6E6E").s().p("AgiAoQgQgQAAgYQAAgXAQgQQAOgOAUAAQAUAAAPAOQAQAQAAAXQAAAYgQAQQgPAOgUAAQgUAAgOgOgAgSgdQgLALAAASQAAATALAKQAHAIALAAQALAAAIgIQALgKAAgTQAAgSgMgLQgHgIgLAAQgKAAgIAIg");
	this.shape_35.setTransform(401,122.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6E6E6E").s().p("AghAoQgRgQABgYQgBgXARgQQANgOAUAAQAUAAAOAOQARAQgBAXQABAYgRAQQgOAOgUAAQgUAAgNgOgAgSgdQgLALAAASQAAATAKAKQAJAIAKAAQALAAAJgIQAKgKAAgTQAAgSgLgLQgIgIgLAAQgLAAgHAIg");
	this.shape_36.setTransform(388.8,122.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6E6E6E").s().p("AgIBQIAAifIARAAIAACfg");
	this.shape_37.setTransform(380.175,119.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6E6E6E").s().p("Ag0AIIAAgOIBqAAIAAAOg");
	this.shape_38.setTransform(364.35,119);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6E6E6E").s().p("AggApQgQgRAAgYQAAgYAPgPQAOgOATAAQAXAAALALQALAKABAPIgUAAQgBgHgHgHQgFgGgMAAQgKAAgHAIQgMALABATQgBATALAKQAHAHAKAAQANAAAIgHQAHgIAAgMIAVAAQgBAUgMAMQgMAMgYAAQgSAAgOgNg");
	this.shape_39.setTransform(345.1,122.125);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6E6E6E").s().p("AgIBQIAAhpIARAAIAABpgAgIg2IAAgZIARAAIAAAZg");
	this.shape_40.setTransform(336.525,119.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6E6E6E").s().p("AAbBQIAAhGQAAgKgHgGQgEgEgIgBQgKAAgIAJQgLAJgFATIAAA2IgTAAIAAifIATAAIAABKQAQgUASAAQATAAAJAJQAKAJAAAMIAABLg");
	this.shape_41.setTransform(328,119.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6E6E6E").s().p("AguBHIAAiLIASAAIAAAMQAMgOAQAAQAUAAANAMQAOAPAAAbQAAAcgOAPQgNAMgUAAQgSAAgKgPIAAAvgAgSgtQgKAKAAANIAAANQAAAMALAKQAIAJAJAAQAKAAAGgHQALgKAAgVQAAgUgKgKQgHgHgKAAQgKAAgIAIg");
	this.shape_42.setTransform(316.05,123.675);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6E6E6E").s().p("AgnAtQgJgIAAgMQAAgNAJgIQAJgJARgCQALgCAIgDQAMgDAEgDQAAgHgFgGQgGgGgKAAQgMAAgGAGQgEAEgBAGIgVAAQADgNAJgJQAKgKAUAAQAXAAAKAKQAJAJAAAMIAAA7QAAAKAIAFIgXAAQgEgDAAgJQgOAOgUAAQgSAAgJgJgAAMACIgXAFQgIACgDAEQgFAFAAAFQAAAHAFAFQACACAKAAQAPAAAKgKQAHgGAAgDIAAgSIgKACg");
	this.shape_43.setTransform(304.375,122.025);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6E6E6E").s().p("AgiA1IAAhoIATAAIAAAbQAFgIAFgFQAOgPAaAAIAAAUIgLgBQgOAAgLAMQgKALgEAKIAAA1g");
	this.shape_44.setTransform(295.075,121.925);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6E6E6E").s().p("AAzBSIgGgQQgPAQgZAAQgdAAgTgSQgXgYAAgnQAAgoAVgWQAUgUAbAAQAcAAASASQAQAPAAAVIgWAAQgBgPgLgLQgKgKgSAAQgQAAgNAMQgQARgBAjQABAhARASQANANAUAAQAQAAALgLQAKgLABgLIAAgPIgbAAIAAgRIAxAAIAABSg");
	this.shape_45.setTransform(282.2,119.25);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6E6E6E").s().p("AgcBcQAqgpAAgzQAAgzgqgoIALgKQAuAsAAA5QAAA6guAsg");
	this.shape_46.setTransform(377.075,247.275);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6E6E6E").s().p("Ag1BQIAAifIBrAAIAAARIhVAAIAAA1IBCAAIAAARIhCAAIAABIg");
	this.shape_47.setTransform(367.625,247.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6E6E6E").s().p("AggBFQgTgSAAgpIAAgSQAAgpATgTQAOgNASAAQAUAAANANQASATAAApIAAASQAAApgSASQgNANgUAAQgSAAgOgNgAgQg3QgMALAAAiIAAAVQAAAgANAOQAIAIAHgBQAKABAHgIQAMgNAAghIAAgVQAAgigMgLQgHgIgKAAQgIAAgIAIg");
	this.shape_48.setTransform(354.35,247.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6E6E6E").s().p("AALBRIAAgpIg+AAIAAgTIA+hlIAWAAIAABmIATAAIAAASIgTAAIAAApgAgfAWIAqAAIAAhDg");
	this.shape_49.setTransform(342.4,247.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6E6E6E").s().p("AgIA/QgJgJAAgLIAAg+IgXAAIAAgPIAXAAIAAglIASAAIAAAlIAfAAIAAAPIgfAAIAAA8QAAAGAEAEQAEAEAIAAQAOAAAKgHIAAASQgKAGgNAAQgSAAgIgJg");
	this.shape_50.setTransform(324.675,248.325);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6E6E6E").s().p("AgiA1IAAhoIATAAIAAAbQAFgIAFgFQAOgPAaAAIAAAUIgLgBQgOAAgLAMQgKALgEAKIAAA1g");
	this.shape_51.setTransform(317.025,249.975);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#6E6E6E").s().p("AgnAtQgJgIAAgMQAAgNAJgIQAJgJARgCQALgCAIgDQAMgDAEgDQAAgHgFgGQgGgGgKAAQgMAAgGAGQgEAEgBAGIgVAAQADgNAJgJQAKgKAUAAQAXAAAKAKQAJAJAAAMIAAA7QAAAKAIAFIgXAAQgEgDAAgJQgOAOgUAAQgSAAgJgJgAAMACIgXAFQgIACgDAEQgFAFAAAFQAAAHAFAFQACACAKAAQAPAAAKgKQAHgGAAgDIAAgSIgKACg");
	this.shape_52.setTransform(306.525,250.075);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6E6E6E").s().p("AgIA/QgJgJAAgLIAAg+IgXAAIAAgPIAXAAIAAglIASAAIAAAlIAfAAIAAAPIgfAAIAAA8QAAAGAEAEQAEAEAIAAQAOAAAKgHIAAASQgKAGgNAAQgSAAgIgJg");
	this.shape_53.setTransform(296.425,248.325);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6E6E6E").s().p("AgiArQgJgJAAgOIATAAQABAIADAEQAHAGANAAQAPAAAFgFQAEgEAAgGQAAgDgEgFQgEgEgIgCQgRgDgIgDQgLgDgEgEQgJgIAAgKQAAgMAJgIQALgLAVAAQAVAAAKAKQAKAJAAAMIgTAAQgBgHgCgDQgGgFgOAAQgJAAgGAFQgFAFAAAFQAAAEADADQAEAEASAEIAVAGQAHACAFAEQAHAHAAAKQAAAMgJAJQgLALgYAAQgXAAgLgLg");
	this.shape_54.setTransform(286.85,250.075);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6E6E6E").s().p("AgbAAQAAg5AtgsIAKAKQgqAoAAAzQAAAzAqApIgKAKQgtgsAAg6g");
	this.shape_55.setTransform(277.7,247.275);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6E6E6E").s().p("AghAoQgPgPAAgZQAAgYAQgQQANgNAUAAQATAAAOAOQAOANAAAaIhLAAQAAAUAJAJQAIAIANAAQANAAAFgFQAHgHAAgIIAVAAQgEARgJAIQgMAMgVAAQgWAAgOgOgAgSgeQgHAHgBAJIA0AAQAAgJgHgIQgHgGgMAAQgKAAgIAHg");
	this.shape_56.setTransform(419.875,224.025);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#6E6E6E").s().p("AggApQgQgRAAgYQAAgYAPgPQAOgOAUAAQAWAAALALQALAKACAPIgVAAQgBgHgGgHQgHgGgKAAQgLAAgHAIQgLALAAATQAAATAKAKQAHAHALAAQANAAAHgHQAHgIABgMIAUAAQAAAUgNAMQgMAMgXAAQgTAAgOgNg");
	this.shape_57.setTransform(407.9,224.125);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#6E6E6E").s().p("AAbA1IAAhHQAAgIgGgGQgFgFgLAAQgHAAgKAJQgOAOAAAPIAAA0IgTAAIAAhoIATAAIAAATQARgUASAAQASAAALALQAIAHAAALIAABMg");
	this.shape_58.setTransform(395.85,223.925);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6E6E6E").s().p("AghAoQgRgQABgYQgBgXARgQQANgOAUAAQAUAAAOAOQAQAQAAAXQAAAYgQAQQgOAOgUAAQgUAAgNgOgAgSgdQgLALAAASQAAATAKAKQAJAIAKAAQALAAAJgIQAKgKAAgTQAAgSgMgLQgHgIgLAAQgLAAgHAIg");
	this.shape_59.setTransform(383.75,224.025);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#6E6E6E").s().p("Ag0AIIAAgPIBqAAIAAAPg");
	this.shape_60.setTransform(364.35,221);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6E6E6E").s().p("AggApQgQgRAAgYQAAgYAPgPQAOgOATAAQAXAAALALQALAKABAPIgUAAQgBgHgHgHQgFgGgMAAQgKAAgHAIQgMALABATQgBATALAKQAHAHAKAAQANAAAIgHQAHgIAAgMIAVAAQgBAUgMAMQgMAMgYAAQgSAAgOgNg");
	this.shape_61.setTransform(345.1,224.125);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6E6E6E").s().p("AgIBPIAAhnIARAAIAABngAgIg3IAAgXIARAAIAAAXg");
	this.shape_62.setTransform(336.525,221.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#6E6E6E").s().p("AAbBQIAAhGQAAgKgHgGQgEgFgIABQgKgBgIAJQgLAJgFATIAAA2IgTAAIAAifIATAAIAABKQAQgVASABQATgBAJAKQAKAJAAAMIAABLg");
	this.shape_63.setTransform(328,221.25);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#6E6E6E").s().p("AguBHIAAiLIASAAIAAAMQAMgOAQAAQAUAAANAMQAOAPAAAbQAAAcgOAPQgNAMgUAAQgSAAgKgPIAAAvgAgSgtQgKAKAAANIAAANQAAAMALAKQAIAJAJAAQAKAAAGgHQALgKAAgVQAAgUgKgKQgHgHgKAAQgKAAgIAIg");
	this.shape_64.setTransform(316.05,225.675);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#6E6E6E").s().p("AgnAtQgJgIAAgMQAAgNAJgIQAJgJARgCQALgCAIgDQAMgDAEgDQAAgHgFgGQgGgGgKAAQgMAAgGAGQgEAEgBAGIgVAAQADgNAJgJQAKgKAUAAQAXAAAKAKQAJAJAAAMIAAA7QAAAKAIAFIgXAAQgEgDAAgJQgOAOgUAAQgSAAgJgJgAAMACIgXAFQgIACgDAEQgFAFAAAFQAAAHAFAFQACACAKAAQAPAAAKgKQAHgGAAgDIAAgSIgKACg");
	this.shape_65.setTransform(304.375,224.025);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#6E6E6E").s().p("AgiA1IAAhoIATAAIAAAbQAFgIAFgFQAOgPAaAAIAAAUIgLgBQgOAAgLAMQgKALgEAKIAAA1g");
	this.shape_66.setTransform(295.075,223.925);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#6E6E6E").s().p("AAzBSIgGgQQgPAQgZAAQgdAAgTgSQgXgYAAgnQAAgoAVgWQAUgUAbAAQAcAAASASQAQAPAAAWIgWAAQgBgQgLgLQgKgKgSAAQgQAAgNAMQgQARgBAjQABAhARASQANAMAUAAQAQAAALgKQAKgKABgMIAAgOIgbAAIAAgSIAxAAIAABSg");
	this.shape_67.setTransform(282.2,221.25);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#6E6E6E").s().p("AgvBHIAAiLIATAAIAAAMQALgOASAAQATAAAMAMQAPAPABAbQgBAcgPAPQgMAMgTAAQgTAAgKgPIAAAvgAgSgtQgKAKAAANIAAANQAAAMALAKQAIAJAKAAQAJAAAGgHQALgKAAgVQAAgUgKgKQgHgHgJAAQgLAAgIAIg");
	this.shape_68.setTransform(364.5,25.675);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#6E6E6E").s().p("AgIBQIAAhpIARAAIAABpgAgIg3IAAgYIARAAIAAAYg");
	this.shape_69.setTransform(356.025,21.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#6E6E6E").s().p("AgIBQIAAifIARAAIAACfg");
	this.shape_70.setTransform(350.975,21.25);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6E6E6E").s().p("AgrBBQgXgYAAgoQAAgoAXgYQASgSAbAAQAdAAAPAQQARARABAaIgWAAQgCgUgLgKQgLgLgQAAQgPAAgNANQgRARAAAiQAAAiARARQAMANAQAAQAUAAAJgLQANgNABgZIAWAAQAAAhgTARQgQAQgeAAQgbAAgSgRg");
	this.shape_71.setTransform(340.5,21.25);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#6E6E6E").s().p("AghAoQgPgPAAgZQAAgYAQgQQANgNAUAAQATAAAOAOQAOANAAAaIhLAAQAAAUAJAJQAIAIANAAQANAAAFgFQAHgHAAgIIAVAAQgEARgJAIQgMAMgVAAQgWAAgOgOgAgSgeQgHAHgBAJIA0AAQAAgJgHgIQgHgGgMAAQgKAAgIAHg");
	this.shape_72.setTransform(326.525,24.025);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#6E6E6E").s().p("AgIBQIAAhpIARAAIAABpgAgIg3IAAgYIARAAIAAAYg");
	this.shape_73.setTransform(317.975,21.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#6E6E6E").s().p("AgIA1IgthqIAUAAIAhBTIAihTIAUAAIgtBqg");
	this.shape_74.setTransform(309.725,24.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#6E6E6E").s().p("AghAoQgRgQABgYQgBgXARgQQANgOAUAAQAVAAANAOQAQAQAAAXQAAAYgQAQQgNAOgVAAQgUAAgNgOgAgSgdQgLALAAASQAAATAKAKQAJAIAKAAQALAAAJgIQAKgKAAgTQAAgSgLgLQgIgIgLAAQgLAAgHAIg");
	this.shape_75.setTransform(297.9,24.025);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6E6E6E").s().p("AAyBQIAAh5IgrB5IgOAAIgrh5IAAB5IgVAAIAAifIAdAAIAqB8IArh8IAdAAIAACfg");
	this.shape_76.setTransform(282.925,21.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(87));

	// レイヤー_4
	this.instance = new lib.anim("single",39);
	this.instance.setTransform(31.75,330.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(1,1,1,3,true).p("EgnNAAPMBObAAAEgnNAQBMBObAAAEgnNgQAMBObAAA");
	this.shape_77.setTransform(279,200.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77},{t:this.instance}]}).wait(87));

	// レイヤー_3
	this.instance_1 = new lib.anim("synched",39,false);
	this.instance_1.setTransform(31.75,230.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(87));

	// レイヤー_1
	this.instance_2 = new lib.anim("synched",39);
	this.instance_2.setTransform(31.75,122.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(87));

	// レイヤー_2
	this.instance_3 = new lib.anim();
	this.instance_3.setTransform(31.75,30.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(87));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(290.8,206.9,262.2,154.1);
// library properties:
lib.properties = {
	id: '2FA8E0C7230941478CE2CA3DB82DBEDF_1',
	width: 550,
	height: 400,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bitmap1.png?1598936650286", id:"bitmap1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

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
an.compositions['2FA8E0C7230941478CE2CA3DB82DBEDF_1'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;