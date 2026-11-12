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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AkXkXIIvAAIAAIvIovAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9900FF").s().p("AkXEYIAAovIIvAAIAAIvg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シンボル1, new cjs.Rectangle(-29,-29,58,58), null);


// stage content:
(lib.transformation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_5
	this.instance = new lib.シンボル1();
	this.instance.setTransform(486.05,393.05,1,1.4142,0,45,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({skewX:57.1665,skewY:12.1665,x:487.9088,y:390.0777},0).wait(1).to({skewX:69.1347,skewY:24.1347,x:489.7372,y:387.1538},0).wait(1).to({skewX:80.8971,skewY:35.8971,x:491.5343,y:384.2801},0).wait(1).to({skewX:92.4686,skewY:47.4686,x:493.3021,y:381.4532},0).wait(1).to({skewX:103.8343,skewY:58.8343,x:495.0386,y:378.6765},0).wait(1).to({skewX:114.9943,skewY:69.9943,x:496.7436,y:375.95},0).wait(1).to({skewX:125.9559,skewY:80.9559,x:498.4183,y:373.272},0).wait(1).to({skewX:136.7192,skewY:91.7192,x:500.0627,y:370.6425},0).wait(1).to({skewX:147.2841,skewY:102.2841,x:501.6767,y:368.0614},0).wait(1).to({skewX:157.6433,skewY:112.6433,x:503.2594,y:365.5306},0).wait(1).to({skewX:167.8041,skewY:122.8041,x:504.8117,y:363.0483},0).wait(1).to({skewX:177.7665,skewY:132.7665,x:506.3338,y:360.6144},0).wait(1).to({skewX:187.5233,skewY:142.5233,x:507.8244,y:358.2308},0).wait(1).to({skewX:197.0816,skewY:152.0816,x:509.2847,y:355.8956},0).wait(1).to({skewX:206.4343,skewY:161.4343,x:510.7136,y:353.6107},0).wait(1).to({skewX:215.5886,skewY:170.5886,x:512.1121,y:351.3743},0).wait(1).to({skewX:224.5445,skewY:179.5445,x:513.4804,y:349.1863},0).wait(1).to({skewX:233.2947,skewY:188.2947,x:514.8172,y:347.0486},0).wait(1).to({skewX:241.8465,skewY:196.8465,x:516.1238,y:344.9593},0).wait(1).to({skewX:250.2,skewY:205.2,x:517.4,y:342.9185},0).wait(1).to({skewX:258.3551,skewY:213.3551,x:518.6459,y:340.9262},0).wait(1).to({skewX:266.3045,skewY:221.3045,x:519.8604,y:338.9841},0).wait(1).to({skewX:274.0482,skewY:229.0482,x:521.0435,y:337.0923},0).wait(1).to({skewX:281.6008,skewY:236.6008,x:522.1974,y:335.2471},0).wait(1).to({skewX:288.9478,skewY:243.9478,x:523.3198,y:333.4522},0).wait(1).to({skewX:296.089,skewY:251.089,x:524.4108,y:331.7076},0).wait(1).to({skewX:303.0392,skewY:258.0392,x:525.4727,y:330.0096},0).wait(1).to({skewX:309.7763,skewY:264.7763,x:526.5019,y:328.3637},0).wait(1).to({skewX:316.3224,skewY:271.3224,x:527.502,y:326.7644},0).wait(1).to({skewX:322.6629,skewY:277.6629,x:528.4707,y:325.2154},0).wait(1).to({skewX:328.8049,skewY:283.8049,x:529.4091,y:323.7149},0).wait(1).to({skewX:334.7486,skewY:289.7486,x:530.3171,y:322.2628},0).wait(1).to({skewX:340.4865,skewY:295.4865,x:531.1938,y:320.861},0).wait(1).to({skewX:346.0261,skewY:301.0261,x:532.0401,y:319.5077},0).wait(1).to({skewX:351.3673,skewY:306.3673,x:532.8561,y:318.2028},0).wait(1).to({skewX:356.5029,skewY:311.5029,x:533.6407,y:316.9481},0).wait(1).to({skewX:361.44,skewY:316.44,x:534.395,y:315.7419},0).wait(1).to({skewX:366.1714,skewY:321.1714,x:535.1179,y:314.586},0).wait(1).to({skewX:370.7045,skewY:325.7045,x:535.8104,y:313.4786},0).wait(1).to({skewX:375.0392,skewY:330.0392,x:536.4727,y:312.4196},0).wait(1).to({skewX:379.1682,skewY:334.1682,x:537.1035,y:311.4109},0).wait(1).to({skewX:383.0988,skewY:338.0988,x:537.704,y:310.4506},0).wait(1).to({skewX:386.831,skewY:341.831,x:538.2742,y:309.5388},0).wait(1).to({skewX:390.3649,skewY:345.3649,x:538.8141,y:308.6754},0).wait(1).to({skewX:393.6931,skewY:348.6931,x:539.3226,y:307.8624},0).wait(1).to({skewX:396.8155,skewY:351.8155,x:539.7996,y:307.0995},0).wait(1).to({skewX:399.7469,skewY:354.7469,x:540.2475,y:306.3834},0).wait(1).to({skewX:402.4727,skewY:357.4727,x:540.6639,y:305.7174},0).wait(1).to({skewX:405,skewY:360,x:541.05,y:305.1},0).wait(1));

	// レイヤー_4
	this.instance_1 = new lib.シンボル1();
	this.instance_1.setTransform(105.05,308.05,1,1.4142,0,45,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:720,x:227.05,y:389},49,cjs.Ease.quartInOut).wait(1));

	// レイヤー_2
	this.instance_2 = new lib.シンボル1();
	this.instance_2.setTransform(260.05,200.05,1,1.4142,0,45,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-360,x:330.05},49,cjs.Ease.quadIn).wait(1));

	// レイヤー_3
	this.instance_3 = new lib.シンボル1();
	this.instance_3.setTransform(70.05,200.05,1,1.4142,0,45,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:360},49).wait(1));

	// レイヤー_1
	this.instance_4 = new lib.シンボル1();
	this.instance_4.setTransform(349.05,79.05,1.3492,1,0,-45,-2.8316);

	this.instance_5 = new lib.シンボル1();
	this.instance_5.setTransform(162.15,69.15,1,1.459,0,76.7323,29.9992,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(50));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(326.4,285.3,271.70000000000005,160.09999999999997);
// library properties:
lib.properties = {
	id: 'D6D503623560A342B108582EC805B2B5',
	width: 640,
	height: 480,
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