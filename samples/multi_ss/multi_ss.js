(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"multi_ss_atlas_1", frames: [[0,0,146,105],[0,107,146,105]]},
		{name:"multi_ss_atlas_2", frames: [[0,0,146,105],[0,107,146,105]]},
		{name:"multi_ss_atlas_3", frames: [[0,0,146,105],[0,107,146,105]]},
		{name:"multi_ss_atlas_4", frames: [[0,0,146,105]]}
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
	this.initialize(ss["multi_ss_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ビットマップ2 = function() {
	this.initialize(ss["multi_ss_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ビットマップ3 = function() {
	this.initialize(ss["multi_ss_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ビットマップ4 = function() {
	this.initialize(ss["multi_ss_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ビットマップ5 = function() {
	this.initialize(ss["multi_ss_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ビットマップ6 = function() {
	this.initialize(ss["multi_ss_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ビットマップ7 = function() {
	this.initialize(ss["multi_ss_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.multi_ss = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ビットマップ7();
	this.instance.setTransform(294,337);

	this.instance_1 = new lib.ビットマップ6();
	this.instance_1.setTransform(403,76);

	this.instance_2 = new lib.ビットマップ5();
	this.instance_2.setTransform(449,355);

	this.instance_3 = new lib.ビットマップ4();
	this.instance_3.setTransform(449,207);

	this.instance_4 = new lib.ビットマップ3();
	this.instance_4.setTransform(220,208);

	this.instance_5 = new lib.ビットマップ2();
	this.instance_5.setTransform(121,332);

	this.instance_6 = new lib.ビットマップ1();
	this.instance_6.setTransform(74,89);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AAcIMIgJgBIgIgDQhYgghageQhYgehZgZIh8gjQhdgbhKg+QhLg/gRhfQgIgvAMguQAkhkBbg2QA7giBBgRIgCgmQgDhbgHhbQgGhFA3gmQA2glA2AkQAzAkgCA/QgDBLAGBLIADA8QBKgDBKAAQBkAABiAOQCBASB/AaIABgGQAHgpAFgpIAJhOQACgPAEgPQACgfARgZQATgaAfgKQAfgKAfAKQAWAHARARQARARAIAXQAEALABAMIgBAPIgBAPIgDAPIgCANIgDANIgOByQgFAqgIAqIAdARQBIArA2A9QAmArALA5QAWBvhCBXQghAsgyAXQhTAnhegFQhCgDhCAAIiZAAQgCAKgFAKQgEAJgGAJIgOAQQgIAHgJAFQgKAGgLADQgLAEgMABIgQAAgAmlAQQgsAIglAXIgGAFIgGAGIgFAFIgEAIIgEAHIgDAHIAAAFIACAHIAEAHIAEAHIAEAHQANANAQALQASALATAKQAPAJASAGQAQAGARAEIAhAFQARACAQAEIAIADIA3ARIAzAQIA3ASIA2ASIA2ASIASAHQAWgnArgHQAxgIAyABIBrABICJABQA2AAA1gDIAGgBIAGgCIAHgEIAHgEIAFgFIAFgEIAAgIIAAgJIAAgIIAAgIIgCgJIgDgJIgGgFIgFgGIgGgFIgWgOIgVgOIgWgPIgOgJIgOgJIgPgIQhLgZhMgPIAHAJQArA3gnA5QgnA6hDgTQhBgSgJhEIAAgGQADg/A3gYIh0gRQgugHgvABIgxAAQAXAuggAvQgnA6hDgTQhBgSgJhEIAAgGQABgYAJgSQg9ACg7AMg");
	this.shape.setTransform(78.003,260.7687);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(324.9,316,270.1,144);
// library properties:
lib.properties = {
	id: 'D6D503623560A342B108582EC805B2B5',
	width: 640,
	height: 480,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/multi_ss_atlas_1.png?1792922538326", id:"multi_ss_atlas_1"},
		{src:"images/multi_ss_atlas_2.png?1792922538326", id:"multi_ss_atlas_2"},
		{src:"images/multi_ss_atlas_3.png?1792922538326", id:"multi_ss_atlas_3"},
		{src:"images/multi_ss_atlas_4.png?1792922538326", id:"multi_ss_atlas_4"}
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
an.compositions['D6D503623560A342B108582EC805B2B5'] = {
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