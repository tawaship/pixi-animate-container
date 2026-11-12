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



// stage content:
(lib.shape = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_11
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("rgba(255,0,0,0.439)").setStrokeStyle(8,1,1).moveTo(34,-25.5).lineTo(85,-25.5).lineTo(85,25.5).lineTo(34,25.5).closePath().moveTo(-85,-25.5).lineTo(-34,-25.5).lineTo(-34,25.5).lineTo(-85,25.5).closePath();
	this.shape.setTransform(278,197.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#FF0000").setStrokeStyle(8,1,1).moveTo(-25.5,-25.5).lineTo(25.5,-25.5).lineTo(25.5,25.5).lineTo(-25.5,25.5).closePath();
	this.shape_1.setTransform(337.5,104.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#FF0000").setStrokeStyle(1,1,1).moveTo(-25.5,-25.5).lineTo(25.5,-25.5).lineTo(25.5,25.5).lineTo(-25.5,25.5).closePath();
	this.shape_2.setTransform(444.5,104.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill().beginStroke("#FF0000").setStrokeStyle(1,1,1,3,true).moveTo(-25.5,-25.5).lineTo(25.5,-25.5).lineTo(25.5,25.5).lineTo(-25.5,25.5).closePath();
	this.shape_3.setTransform(218.5,104.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#000000").setStrokeStyle(1,1,1).moveTo(-25.5,-25.5).lineTo(25.5,-25.5).lineTo(25.5,25.5).lineTo(-25.5,25.5).closePath();
	this.shape_4.setTransform(83.5,104.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginRadialGradientFill(["#00FF00","#000000"],[0,1],0,0,0,0,0,36.1).beginStroke().moveTo(-25.5,25.5).lineTo(-25.5,-25.5).lineTo(25.5,-25.5).lineTo(25.5,25.5).closePath();
	this.shape_5.setTransform(337.5,197.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("rgba(0,0,0,0.4)").beginStroke().moveTo(42,25.5).lineTo(42,-25.5).lineTo(93,-25.5).lineTo(93,25.5).closePath().moveTo(-93,25.5).lineTo(-93,-25.5).lineTo(-42,-25.5).lineTo(-42,25.5).closePath();
	this.shape_6.setTransform(151,197.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#000000").beginStroke().moveTo(155,25.5).lineTo(155,-25.5).lineTo(206,-25.5).lineTo(206,25.5).closePath().moveTo(48,25.5).lineTo(48,-25.5).lineTo(99,-25.5).lineTo(99,25.5).closePath().moveTo(-71,25.5).lineTo(-71,-25.5).lineTo(-20,-25.5).lineTo(-20,25.5).closePath().moveTo(-206,25.5).lineTo(-206,-25.5).lineTo(-155,-25.5).lineTo(-155,25.5).closePath();
	this.shape_7.setTransform(264,104.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(332,348,139,-121);
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