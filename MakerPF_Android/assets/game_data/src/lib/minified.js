

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js from "files.txt" begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


/* Last merge : dimarts, 3 de juny de 2014, 18:56:24 CEST  */

/* Merging order :

- PFUtils.js
- Singleton.js
- PFCore.js
- Background.js
- PFSound.js
- PFMain.js
- PFPortada.js
- PFLanguage.js
- PFLangManager.js
- PFMenu.js
- PFItemMenu.js
- PFAction.js
- PFGameManager.js
- PFGame.js
- PFItem.js
- PFItemDecoratorAction.js
- PFItemLanguage.js
- PFMusicManager.js
- games/PFBaseItem.js
- games/PFThemeItem.js
- games/PFBaseGame.js
- games/PFInstructions.js
- games/PFEndInstruction.js
- games/PFEndGame.js
- games/PFEndGameResult.js
- games/quiz/PFQuizResult.js
- games/explore/PFItemExplore.js
- games/explore/PFGameExplore.js
- games/explore/PFGameExploreListen.js
- games/drag/PFItemDrag.js
- games/drag/PFGameDrag.js
- games/drag/PFGameDragListen.js
- games/memory/PFItemMemory.js
- games/memory/PFGameMemory.js
- games/memory/PFGameMemoryListen.js
- games/puzzle/PFItemPuzzle.js
- games/puzzle/PFGamePuzzle.js
- games/puzzle/PFGamePuzzleListen.js
- games/findMe/PFItemFindMe.js
- games/findMe/PFGameFindMe.js
- games/listenAndTouch/PFItemTouchListen.js
- games/touch2/PFItemTouch2.js
- games/listenAndTouch/PFGameTouchListen.js
- games/touch2/PFGameTouch2.js
- games/touch2/PFGameTouch2Listen.js
- games/listenAndTouch/PFGameTouchListenListen.js
- games/listenAndDrag/PFItemListenDrag.js
- games/listenAndDrag/PFGameListenDrag.js
- games/listenAndDrag/PFGameListenDragListen.js
- games/fastDrag/PFItemFastDrag.js
- games/fastDrag/PFItemFastDragParent.js
- games/fastDrag/PFFastDrag.js
- games/fastDrag/PFFastDragListen.js
- games/differences/PFItemDifferences.js
- games/differences/PFGameDifferences.js
- games/differences/PFGameDifferencesListen.js
- games/differences/PFBackgroundDifferences.js
- games/paint/PFGamePaint.js
- games/paint2/PFGamePaint2.js
- games/paint2/PFGamePaint2Listen.js
- games/InteractiveImages/PFItemInteractiveImages.js
- games/InteractiveImages/PFGameInteractiveImages.js
- games/InteractiveImages/PFGameInteractiveImagesListen.js
- games/InteractiveImages/PFInteractiveImageInstruction.js
- games/quiz/PFItemQuizQuestion.js
- games/quiz/PFItemQuizAnswer.js
- games/quiz/PFGameQuiz.js
- games/arrows/PFItemFletxes.js
- games/arrows/PFGameFletxes.js
- games/arrows/PFGameFletxesListen.js
- games/quizText/PFItemQuizGapsQuestion.js
- games/quizText/PFItemQuizGapsQuestionState.js
- games/quizText/PFGameQuizGaps.js
- games/dragToContainers/PFGameDragAllIn.js
- games/dragToContainers/PFGameDragAllInListen.js
- games/arrows/PFGameFletxesValidar.js
- games/arrows/PFGameFletxesValidarListen.js
- games/paint/PFItemPaint.js
- games/paint2/PFItemPaint2.js
- games/xml/PFXMLParser.js
- games/xml/PFActionXML.js
- games/xml/PFThemeXML.js
- games/xml/PFXMLExplore.js
- games/xml/PFXMLMemory.js
- games/xml/PFXMLArrows.js
- games/xml/PFXMLDifferences.js
- games/xml/PFXMLDrag.js
- games/xml/PFXMLDragContainers.js
- games/xml/PFXMLFindMe.js
- games/xml/PFXMLInteractiveImages.js
- games/xml/PFXMLListenDrag.js
- games/xml/PFXMLListenTouch.js
- games/xml/PFXMLTouch2.js
- games/xml/PFXMLPaint.js
- games/xml/PFXMLPaint2.js
- games/xml/PFXMLPuzzle.js
- games/xml/PFXMLQuiz.js
- games/xml/PFXMLQuizText.js

*/


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: PFUtils.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// ============================================================
// EXTEND (For creating inhertance)
// ============================================================
Function.prototype.extend = function(construct){
	construct.prototype = new this();
	construct.prototype.superc = construct.prototype.constructor;
	construct.prototype.constructor = construct;
	return construct;
};

// ============================================================
// MANAGE LOADING
// ============================================================
function addLoading() {
	$("#loading").show();
}

function removeLoading() {
	$("#loading").hide();
}

// ============================================================
// LOAD SCRIPT ASYNC
// ============================================================
function loadScript(path , c) {
    //PFDebug("Loading script:" + path);
    //document.write("<script src='" + path +"'><\/script>");

    var s = document.createElement("script");
    $("head").append(s);

    var d = document,
        t = 'script',
        o = d.createElement(t);
        //s = d.getElementsByTagName(t)[0];
        //s = d.getElementsByTagName(t)[d.getElementsByTagName(t).length-1];
    o.u = '//' + path;
    //PFDebug(s);
    if (c) { s.addEventListener('load', function (e) { c(null, e); }, false); }

    s.type = "text/javascript";
    s.src = path;


    //s.parentNode.insertBefore(o, s);
}

function loadActions(folder,callback) {
    loadScript("./"+GAME_FOLDER+"/actions/up_down.js",function() {
        loadScript("./"+GAME_FOLDER+"/actions/up_down_2.js",function() {
            loadScript("./"+GAME_FOLDER+"/actions/small_big.js",function() {
                loadScript("./"+GAME_FOLDER+"/actions/right_left.js",function() {
                   callback();
                });
            });
        });
    });
}

function parseScriptToXML(xmlStr) {

    if (window.DOMParser) {

        return ( new window.DOMParser() ).parseFromString(xmlStr, "text/xml");

    } else if (typeof window.ActiveXObject != "undefined" && new window.ActiveXObject("Microsoft.XMLDOM")) {

        var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = "false";
        xmlDoc.loadXML(xmlStr);
        return xmlDoc;

    } else {
        return null;
    }
}

// ============================================================
// GET URL PARAMETERS
// ============================================================
function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
	return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function goBackToParent(params) {
	location.href= "../../index.html?back=true";
}

// ============================================================
// GET IMAGE SCALE
// ============================================================
function getImageScale(width,height,size) 
{
	if (parseInt(width) > parseInt(height))
	{
		if (width > size)		{
			return size/width;
		}
		else		{
			return 1;
		}
	}
	else
	{
		if (parseInt(height) > parseInt(size))		{
			return size/height;
		}
		else		{
			return 1;
		}
	}
}

function getImageScale2(width,height,maxWidth,maxHeight){
	
	var scale1 = 1;
	if(parseInt(width) > parseInt(maxWidth)){
		scale1 = maxWidth/width;
	}	
	
	var scale2 = 1;
	if(parseInt(height) > parseInt(maxHeight)){
		scale2 = maxHeight/height;
	}

    return Math.min(scale1,scale2);
}

// ============================================================
// PRELOAD MANIFEST FIX
// ============================================================
/**
 * Removes the null elements or folder elements so it works on local
 *
 * @param thePreloadManifest
 * @return thePreloadManifest without the null or folder elements
 */
function fixPreloadManifest(thePreloadManifest){

    for(var i=0; i< thePreloadManifest.length; i++){
        if(thePreloadManifest[i][thePreloadManifest[i].length-1] == "/")
        {
            index = i;
            if (index > -1) {
                thePreloadManifest.splice(index, 1);
            }
        }
    }

    // Don't load images when in loading
	if (isLocal)
        thePreloadManifest.splice(0);

    return thePreloadManifest;
}

function addCustomOnClick(params,callback) {

	var g = new Graphics();
    g.beginFill(CUSTOM_CLICK_COLOR);

	if (params.item.image)
		g.drawRect(0,0,params.item.image.width,params.item.image.height);
	else
		g.drawRect(0,0,params.item.children[0].getMeasuredWidth(),params.item.children[0].getMeasuredHeight());

    var s = new Shape(g);
    s.regX = params.item.regX;
    s.regY = params.item.regY;
    s.x = params.item.x;
    s.y = params.item.y;
	s.scaleX = params.item.scaleX;
	s.scaleY = params.item.scaleY;
    s.alpha = CUSTOM_CLICK_ALPHA;
	s.rotation = params.item.rotation;

	if (params.item.image)
		s.setBounds(params.item.x - params.item.regX,params.item.y - params.item.regY,
			params.item.image.width*params.item.scaleX,
			params.item.image.height*params.item.scaleY);
	else
		s.setBounds(params.item.x - params.item.regX,params.item.y - params.item.regY,
			params.item.children[0].getMeasuredWidth()*params.item.scaleX,
			params.item.children[0].getMeasuredHeight()*params.item.scaleY);

    params.c.addChild(s);

	s.item = params.item;
    s.addEventListener("click",callback,false);

	s.addEventListener("mouseover", function(e)    { document.body.style.cursor='pointer'; });
	s.addEventListener("mouseout", function(e)     { document.body.style.cursor='default'; });

	return s;
}

function addDrag(item,c) {

	var g = new Graphics();
	g.beginFill(CUSTOM_CLICK_COLOR);

	if (item.image)
		g.drawRect(0,0,item.image.width,item.image.height);
	else
		g.drawRect(0,0,item.children[0].getMeasuredWidth(),item.children[0].getMeasuredHeight());

	var s = new Shape(g);
	s.regX = item.regX;
	s.regY = item.regY;
	s.scaleX = item.scaleX;
	s.scaleY = item.scaleY;
	s.x = item.x;
	s.y = item.y;
	s.alpha = CUSTOM_CLICK_ALPHA;
	s.rotation = item.rotation;

	if (item.image)
		s.setBounds(item.x - item.regX,item.y - item.regY,
			item.image.width*item.scaleX,
			item.image.height*item.scaleY);
	else
		s.setBounds(item.x - item.regX,item.y - item.regY,
			item.children[0].getMeasuredWidth()*item.scaleX,
			item.children[0].getMeasuredHeight()*item.scaleY);


	c.addChild(s);

	s.item = item;

	s.addEventListener("mouseover", function(e)    { document.body.style.cursor='pointer'; });
	s.addEventListener("mouseout", function(e)     { document.body.style.cursor='default'; });

	return s;
}


function PFDebug(string){
    if(SHOULD_DEBUG){
        console.log(string);
    }
}

function PFWarning(string){
    if(SHOULD_DEBUG){
        console.warn(string);
    }
}

function PFError(string){
    if(SHOULD_DEBUG){
        console.error(string);
    }
}

// ============================================================
// SCALE METHIDS
// ============================================================
function scaleWithType(pBitmap,pScaleType,pWidth,pHeight){

    switch(pScaleType){
        case "scalefitwidth":
            PFDebug("Scale fit width");
            var scaleFactor = pWidth/pBitmap.image.width;
            pBitmap.scaleX	= scaleFactor;
            pBitmap.scaleY  = scaleFactor;
            break;

        case "scalefitheight":
            PFDebug("Scale fit Height");
            var scaleFactor = pHeight/pBitmap.image.height;
            pBitmap.scaleX	= scaleFactor;
            pBitmap.scaleY  = scaleFactor;
            break;

        case "scalefit":
            PFDebug("Scale fit");
            var newScaleX		= pWidth/pBitmap.image.width;
            var newScaleY		= pHeight/pBitmap.image.height;

            var currScale = 1;
            if(newScaleX > newScaleY){
                currScale = newScaleY;
            }else{
                currScale = newScaleX;
            }

            pBitmap.scaleX = currScale;
            pBitmap.scaleY = currScale;

            break;

        case "scalefill":
            pBitmap.scaleX	= pWidth/pBitmap.image.width;
            pBitmap.scaleY  = pHeight/pBitmap.image.height;
            break;

        case "noscale":
            PFDebug("No Scale");
            break;
    }
}

var inputX;
var inputY;
var inputW;
var inputH;
var inputFSize;

// RESIZE CANVAS WHEN VIEWPORT CHANGES
function resize() {
	var canvas = document.querySelector('canvas');

	var normWidth = 1024;
	var normHeight = 768;

	var devHeight = window.innerHeight;
	var devWidth = window.innerWidth;

	var thisScale = devWidth/normWidth;
	var otherScale = devHeight/normHeight;

	if(thisScale>otherScale){
		thisScale=otherScale     // makes sure both width and height fit on screen
	}

	if (thisScale > 1)
		thisScale = 1;

	globalScale = thisScale;

	$("#canvas").width(normWidth*thisScale);
	$("#canvas").height(normHeight*thisScale);

	if ($('#inputAnswer').length > 0) {
		$('#inputAnswer').css('margin-left', parseInt(inputX * thisScale) + 'px');
		$('#inputAnswer').css('top', parseInt(inputY * thisScale) + 'px');
		$('#inputAnswer').width(parseInt(inputW * thisScale));
		$('#inputAnswer').height(parseInt(inputH * thisScale));
		$('#inputAnswer').css('font-size', parseInt(inputFSize * thisScale) + 'px');
	}
}



/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: Singleton.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************
// File: Singleton.js 
// Singleton: Don't use it
//*****************************************************/
var Singleton = function() {
	var names = [];
	//-------------------------------------------
	// Get the instance of the Singleton class
	// If there's none, instanciate one
	//-------------------------------------------
	var getInstance = function() {
		if (!Singleton.singletonInstance) { 
			Singleton.singletonInstance = createInstance();
		}
		return Singleton.singletonInstance;
	}
	//-------------------------------------------
	// Create an instance of the Singleton class
	//-------------------------------------------
	var createInstance = function() {
		//------------------------------------------------------
		// Here, you return all public methods and variables
		//------------------------------------------------------
		return {
			add : function(name) {
				names.push(name);
				return this.names();
			},
			names : function() {
				return names;
			}
		}
	}

	return getInstance();
}


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: PFCore.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFCore.js 
//	PFCore: Calculate and show FPS  
//*************************************************************
var PFCore = function (maxfps) {
    
    ///=====================================================
	// VARIABLES
	//=====================================================
	var canvas 			= document.getElementById('canvas');
    var maxfps 			= maxfps;
    var frameCount 		= 0;
    var currentFps 		= 0;
    var drawInterval 	= 1 / this.maxfps * 1000;
    var lastFps 		= new Date().getTime();
    var canvasCtx 		= null;
	var container;
	
	this.initCore 	= initCore;
	this.startApp 	= startApp;
	this.update 	= update;
	this.draw 	= draw;
	
	//=====================================================
	// initCore: create text ans start value
	//=====================================================
	function initCore() {
		canvasCtx =  canvas.getContext('2d'); //canvas FPS
        setInterval(function(){fps.startApp();}, drawInterval); // Init the interval of the FPS
        return this;
	}
	//=====================================================
	// startApp: call update
	//=====================================================
	function startApp() {
        this.update(); // Update FPS
        this.draw(); // Draw the FPS text
	}
	//=====================================================
	// update: refresh value
	//=====================================================
	function update() {
        // Calculate the time from the last frame
        var thisFrame = new Date().getTime();
        var diffTime = Math.ceil((thisFrame - lastFps));
 
        if (diffTime >= 1000) {
            currentFps = frameCount;
            frameCount = 0.0;
            lastFps = thisFrame;
        }
 
        frameCount++;
	}
	//=====================================================
	// draw: show on screen
	//=====================================================
	function draw() {
        // Clear de text of FPS for realize the refresh
        canvasCtx.clearRect(0, 0, 70, 20);
 
        // Paint de PFS
        canvasCtx.save();
        canvasCtx.font = 'bold 10px sans-serif';
        canvasCtx.fillText('FPS: ' + currentFps + '/' + maxfps, 10,15);
    }
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: Background.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: Background.js 
//	Background: Save data and properties of game's background
//*************************************************************
function Background(src,x,y,folder,scaleType){
	
	if(src!="null"){
		if(folder=="")	{ this.src="./"+GAME_FOLDER+"/images/"+src;					}
		else			{ this.src = "./"+GAME_FOLDER+"/"+folder+"/images/"+src;		}
	}else{
		this.src = src;
	}
	
	this.scaleType = scaleType;
	
	this.x		= x;
	this.y		= y;
	this.getSrc = getSrc;
	this.getX 	= getX;
	this.getY 	= getY;
	this.getScaleType = getScaleType;

	function getSrc() 	{ return this.src;	}
	function getX() 	{ return this.x;	}
	function getY() 	{ return this.y;	}
	function getScaleType() { return this.scaleType; }
	
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: PFSound.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


var PFSound = {

    useOgg: false,
	sounds: [],
	isMuted: false,

	init: function(){
  		if(soundDevice == "WEB"){
			soundManager.preferFlash = false;
			soundManager.flashVersion = (window.location.toString().match(/#flash8/i)?8:9);
			if (soundManager.flashVersion != 8) {
			  	soundManager.useHighPerformance = true;
			}
			soundManager.setup({
				url: 'js/swf/', // path to load SWF from (overriding default)
				wmode: 'transparent',
                allowScriptAccess: 'always',
				debugMode: false,
				consoleOnly: true,
                useFlashBlock: true,
                flashLoadTimeout:0,
				defaultOptions: {
				    autoLoad: true
				}
			});
            /*soundManager.onready(function(status){
                PFDebug("SoundManager did load");
                PFDebug(status);
            });
            soundManager.ontimeout(function(error) {
                PFWarning("SoundManager did not load");
                PFDebug(error);
            });*/
  		}
  	},
  
	load: function ( id, assetPath, success, fail) {

        if(this.useOgg){
            assetPath = assetPath.substr(0,assetPath.length-3) + "ogg";
        }

		if(soundDevice == "IOS") {

			var media = new Media(src);
			media.id = id;

			this.sounds[id] = media;
		}
		    //return cordova.exec(success, fail, "LowLatencyAudio", "preloadFX", [id, assetPath]);
		if(soundDevice == "WEB")
			soundManager.createSound(id,assetPath);
	},  

	unload: function (id, success, fail) {
		if(soundDevice == "IOS") {
			//return cordova.exec(success, fail, "LowLatencyAudio", "unload", [id]);
			this.sounds[id].release();
		}

		if(soundDevice == "WEB"){

			PFDebug("UNLOAD SOUND: " + id);

			soundManager.unload(id);
			soundManager.destroySound(id);
		}  
	},

	killAllSounds: function () {
		if (soundDevice == "WEB") {
			soundManager.unloadAll();
			soundManager.destroyAllSounds();
		}
	},

	play: function (id, success, fail) {
		if(soundDevice == "IOS"){
			this.stopAll();
			this.sounds[id].play();
			//return cordova.exec(success, fail, "LowLatencyAudio", "play", [id]);
		}

		if(soundDevice == "WEB" && !this.isMuted)
        {
            soundManager.stopAll();
            soundManager.play(id);
        }
	},
	
	playWithCallback: function (id, callback) {
		if(soundDevice == "IOS"){
			this.stopAll();
			this.sounds[id].play();
			//return cordova.exec(success, fail, "LowLatencyAudio", "play", [id]);
		}

		if(soundDevice == "WEB")
        {
            soundManager.stopAll();

	        if (this.isMuted)
	        {
		        callback();
		        return;
	        }

	        if (soundManager.defaultOptions.hasOwnProperty('onfinish'))
	        {
		        soundManager.play(id,{
			        multiShotEvents: true,
			        onfinish:function() {
				        callback();
			        }
		        });
	        }
	        else
	        {
		        soundManager.play(id);
		        callback();
	        }

        }
	},
	
	stop: function (id, success, fail) {
		if(soundDevice == "IOS") {
			//return cordova.exec(success, fail, "LowLatencyAudio", "stop", [id]);
			this.sounds[id].stop();
		}

	    if(soundDevice == "WEB")
	    	soundManager.stop(id);
	},

    stopAll:function(){
        if(soundDevice == "WEB")
            soundManager.stopAll();

	    if (soundDevice == "IOS") {
		    for (var i=0; i<this.sounds.length; i++)
		    {
			    this.sounds[i].stop();
		    }
	    }
    },

    tooglePause:function(id){
        if(soundDevice == "WEB")
            return soundManager.togglePause(id)
        if (soundDevice == "IOS") {
            return this.sounds[id].togglePause(id);
        }
    },

	setMuted:function(value) {

		if (value && !soundManager.defaultOptions.hasOwnProperty('onfinish'))
			this.stopAll();
		else {
			if (value)
				soundManager.mute();
			else
				soundManager.unmute();
		}

		this.isMuted = value;
	}




}


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: PFMain.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFMain.js 
//	PFMain: init App
//*************************************************************

//=====================================================
// GLOBAL VARIABLES
//=====================================================
var fps;
var stage;
var gameManager;
var loadingImg;
var portada;
var menu;
var lang;
var langManager;
var isPaint;
var typeNavigation;
var musicManager;
var themeXML;
var communicationLayer;
var WIDTH;
var HEIGHT;

var gameHasMenu     = false;
var gameHasCover    = false;

var backFromExternal = getParameterByName("back") == "true" ? true:false;
var isExternal = getParameterByName("external") == "true" ? true:false;

var isLocal = true;

var GAME_FOLDER = "data";

//---------------------------
// TABLET GENERIC FUNCTIONS
//---------------------------
var PFMain = function() {

    loadScript("./"+GAME_FOLDER+"/metadata.js",function(){
        loadScript("./"+GAME_FOLDER+"/options.js",function(){
            loadScript("./"+GAME_FOLDER+"/cover.js",function(){
                loadScript("./"+GAME_FOLDER+"/menu.js",function(){
                    loadScript("./"+GAME_FOLDER+"/theme/theme.js",function(){
	                    loadActions("./"+GAME_FOLDER+"/actions/",function(){
		                    PFDebug("Init Web");
		                    initWebVars();
		                    initWeb();
	                    });
                    });
                });
            });
        });
    });

    /*
	if(playDevice == "WEB") {
		initWeb();
	}
	if(playDevice == "IOS") {
		document.addEventListener("deviceready", initIOS, false);
	}
    */

}

function initWebVars() {
    //TO SCALE WHOLE INTERACTIVE
    //$("#canvas").width(960);                      //This resizes content!
    //$("#canvas").height(530);                     //This resizes content!

    metadata = new PFAction();
    metadata.ReadMetadata(null);
    WIDTH   = parseInt(metadata.canvasWidth);
    HEIGHT  = parseInt(metadata.canvasHeight);

    var c = document.getElementById("canvas");
    c.width = WIDTH;                                  //This doesn't resize the conten!
    c.height = HEIGHT;                                 //This doesn't resize the conten!

	var pat = /^http?:\/\//i;
	var pats = /^https?:\/\//i;
	if (pat.test(location.href))
	{
		isLocal = false;
	}
	else if (pats.test(location.href))
	{
		isLocal = false;
	}
}

//=====================================================
// INIT IOS
//=====================================================
/*
function initIOS(){
    document.addEventListener("active", onResume, false);
    document.addEventListener("resign", onPause, false);
	var canvas          = document.getElementById("canvas");
	stage               = new Stage(canvas);
    stage.enableMouseOver();
	gameManager         = new PFGameManager();
	musicManager        = new PFMusicManager();
    langManager         = new PFLangManager();
    shop                = new PFShop();

    communicationLayer  = new PFCommunicationLayer();
    communicationLayer.onMakerPFStarted();

	Ticker.addListener(window);
	Ticker.setInterval(17);

    var genPath = "../../";
    urlInt = GAME_FOLDER+"/";
    urlExt = genPath+"Library/theme/";
    urlTheme = urlInt;
}
*/

//----------------------------
// WINDOW LISTENERS
//----------------------------
window.addEventListener("load",function() {
	//-------------------------
	// SET TIME OUT...
	//-------------------------
  	setTimeout(function(){
    	//-------------------------
    	// HIDE ADRESS BAR
    	//-------------------------
    	window.scrollTo(0, 1);
  	}, 0);
});

//=====================================================
// INIT WEB
//=====================================================
function initWeb(){

    themeXML        = new PFThemeXML();
    themeXML.loadTheme();
    themeXML.getLoading();
    themeXML.getGeneral();

    var canvas		    = document.getElementById("canvas");
    stage 			    = new Stage(canvas);
	resize();

	PFDebug("Game Size W:" + $("#canvas").width());
	PFDebug("Game Size H:" + $("#canvas").height());

    stage.enableMouseOver();
    gameManager 	    = new PFGameManager();
    musicManager	    = new PFMusicManager();
    portada 		    = new PFPortada();
    langManager         = new PFLangManager();
    menu 			    = new PFMenu();

    communicationLayer  = new PFCommunicationLayer();
    communicationLayer.onMakerPFStarted();

    Ticker.addEventListener("tick",tick);

	loadingImg          = new Bitmap("./"+GAME_FOLDER+"/theme/images/" + themeXML.loadingSrc);
	loadingImg.image.onload = function(evt){
		loadingImg.regX = loadingImg.width/2;
		loadingImg.regY = loadingImg.height/2;
		loadingImg.x = WIDTH/2;
		loadingImg.y = HEIGHT/2;

		showPortada();
	}

	PFDebug("Init Web Completed: Local: " + isLocal);
}

//=====================================================
// showPortada: start Portada stage
//=====================================================
function showPortada(){
	if (Touch.isSupported()) { Touch.enable(stage); }
	portada.load();
    portada.show();
}

//=====================================================
// TICK: update code in each frame
//=====================================================
function tick() {	
	//---------------------------
	// UPDATE FOR PAINT GAME
	//---------------------------

	if(isPaint){
		if (isMouseDown && !isElementDown) {
			var pt 			= new Point(stage.mouseX, stage.mouseY);
			var midPoint	= new Point(oldX + pt.x>>1, oldY+pt.y>>1);
			currentShape.graphics.moveTo(midPoint.x, midPoint.y);
			currentShape.graphics.curveTo(oldX, oldY, oldMidX, oldMidY);
			currentShape.updateCache("source-over");
			
			oldX 	= pt.x;
			oldY 	= pt.y;
			oldMidX = midPoint.x;
			oldMidY = midPoint.y;
		}
	}
	
	stage.update();
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: PFPortada.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************
// File: PFPortada.js 
// PFPortada: Load portada stage
//*****************************************************/

var PFPortada = function(){

	//=====================================================
	// VARIABLES
	//=====================================================
	var items;
	var xmlCover;
	var container;
	var containerActLang;
	var containerLangList;
	var preload;
	var textAct;
	var language;
    var background;
	
	this.load			= load;
	this.show			= show;
	this.showMenu		= showMenu;

	//=======================================================================
	// SHOW MENU
	//=======================================================================
	function showMenu(){

		PFSound.load('soPortada','./data/sounds/boto.mp3');
		PFSound.play('soPortada');

		addLoading();

		container.removeAllChildren();
		stage.removeChild(container);
		menu.load();
        menu.show();
        document.body.style.cursor='default';
    }

	//=======================================================================
	// LOAD
	//=======================================================================
	function load(){
		gameManager.setCurrentGame(10);
        xmlCover = new PFAction();
        xmlCover.ReadOptions(null);
        xmlCover.ReadPortada(null);
		gameHasCover = xmlCover.getPortadaActive() == "false" ? false:true;
	}

	//=======================================================================
	// SHOW
	//=======================================================================
	function show(){

		if(xmlCover.getPortadaActive() == "false" || backFromExternal){

			backFromExternal = false;
			stage.removeChild(container);
			menu.load();
            menu.show();
		}else{

			var itemsPortadaManifest	= new Array();
			itemsPortadaManifest[0]		= xmlCover.getBackground("Portada").getSrc();
			itemsPortadaManifest[1] 	= xmlCover.getPlay().getSrc();

            fixPreloadManifest(itemsPortadaManifest);

			preload 					= new PreloadJS();
			preload.onComplete 			= handleComplete;
			preload.loadManifest		(itemsPortadaManifest);

            //setTimeout(showPortada,1);
		}
	}

	//=======================================================================
	// HANDLE COMPLETE
	//=======================================================================
	function handleComplete(event) {
		showPortada();
		removeLoading();
    }

	//=======================================================================
	// SHOW PORTADA
	//=======================================================================
	function showPortada(){
		container			= new Container();
        stage.addChild(container);

        var rgb = xmlCover.rgb;
        var g = new Graphics();
        g.beginFill(Graphics.getRGB(rgb[0],rgb[1],rgb[2]));
        g.drawRect(0,0,WIDTH,HEIGHT);
        var s = new Shape(g);
        s.x = 0;
        s.y = 0;
        container.addChild(s);

        var bgSrc = xmlCover.backgroundPortada.getSrc();
        if(bgSrc.charAt( bgSrc.length-1 ) != "/"){
            background = new Bitmap(bgSrc);
            background.image.onload = drawBackground;
            //drawBackground();
        }
        else {
            var playButton		= new Bitmap(xmlCover.getPlay().getSrc());
            playButton.image.onload = function(){
                playButton.regX 	= parseInt(playButton.image.width/2);
                playButton.regY 	= parseInt(playButton.image.height/2);
                playButton.x 		= parseInt(xmlCover.getPlay().getX());
                playButton.y 		= parseInt(xmlCover.getPlay().getY());

				var button = addCustomOnClick({item:playButton,c:container},showMenu);

                container.addChild(playButton);
                container.addChild(containerActLang);
                language = new PFLanguage(container,langList);
            }
        }

		playMusic();

	}

	function playMusic(){
		if(musicManager.getIsPlaying() == false){
			setTimeout(function(){
				musicManager.play();
			},1000);
		}
	}


    //=====================================================
    // DRAW BACKGROUND
    //=====================================================
    function drawBackground(){
        var scaleType = xmlCover.backgroundPortada.getScaleType();

        scaleWithType(background,scaleType,WIDTH,HEIGHT);

        background.x = WIDTH/2 - background.image.width*background.scaleX / 2;
        background.y = HEIGHT/2 - background.image.height*background.scaleY / 2;

        container.addChild(background);

        var playButton		= new Bitmap(xmlCover.getPlay().getSrc());
        playButton.image.onload = function() {
            playButton.regX 	= parseInt(playButton.image.width/2);
            playButton.regY 	= parseInt(playButton.image.height/2);
            playButton.x 		= parseInt(xmlCover.getPlay().getX());
            playButton.y 		= parseInt(xmlCover.getPlay().getY());
            //playButton.onPress	= showMenu;

	        addCustomOnClick({item:playButton,c:container},showMenu);

            container.addChild(playButton);
            language = new PFLanguage(container,langList);
            container.addChild(containerActLang);
        }

	    if (isExternal)
	        addBackButton();
    }

	//=====================================================
	// ADD PORTADA BUTTON
	//=====================================================
	function addBackButton(){

		var backButton = themeXML.homeThemeItem.create(function() {

			//portadaButton.onPress	= showPortada
			container.addChild(backButton);
			addCustomOnClick({item:backButton,c:container},function() {
				goBackToParent();
			});
		});

		//addJQueryClick(portadaButton.image,showPortada);

	}

}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: PFLanguage.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFLanguage.js 
//	PFLanguage: Define language information
//*************************************************************
var PFLanguage = function(pMainContainer, pLangList){	
	//=====================================================
	// VARIABLES
	//=====================================================
	var mainContainer 	= pMainContainer;
	var langList 		= pLangList;
	var container;
	var languageContainers;	
	var showPosition;
	var hidePosition;	
	var status 			= "hidden";	
	var TRANSITION_TIME = 300;
		
	create();
	
	//=======================================================================			
	// CREATE
	//=======================================================================	
	function create(){
		
		if(langList.length>1){
			container = new Container();
			mainContainer.addChild(container);
		
			languageContainers = new Array();
		
			showPosition	= 1024 - langList.length*48 + 5;		 	
			hidePosition	= 1024 - 48 + 5;
			container.x		= showPosition;
					
			var x = 0;		
			for(i = 0; i<langList.length; i++){
				writeLang(langList[i], "25px Helvetica", "#1F1E21", x, 30,255,255,255, false, i);
				x = x+48;
			}	
		
			hide();
			selectLanguage();			
		}
	}
	
	//=======================================================================			
	// WRITE LANGUAGE
	//=======================================================================	
	function writeLang(langItem , font, color, x, y, r, g, b, act, i){
		
		var s;
		if(i == 0)	{ s = new Bitmap("./"+GAME_FOLDER+"/images/languagebg_left.png");	}
		else		{ s = new Bitmap("./"+GAME_FOLDER+"/images/languagebg.png");			}
			
		//----------------------------------------
		// CENTER OBJECT
		//----------------------------------------	
		s.y = y - 10;
		s.x = x - 7;
				
		var txtLang 		 = new Text(getShortLangName(langItem.lang), font, color);
		s.langItem 			 = langItem;
		s.txt				 = txtLang;
			
		txtLang.textBaseline = "top"; 
		txtLang.textAlign	 = "center";		
		txtLang.x 			 = x + 20 ;
		txtLang.y 			 = y;

        //s.onPress 			 = setLanguage;
		s.image.onload = function () {
			var shapeLanguage = addCustomOnClick({item:s,c:container},setLanguage);
			shapeLanguage.langItem = langItem;
			shapeLanguage.txt = txtLang;
		}

        container.addChild		(s);
		container.addChild		(txtLang);
		languageContainers.push	(s);
	}
	
	//=======================================================================			
	// SHOW
	//=======================================================================	
	function show(){
		Tween.get(container).to({x:showPosition},TRANSITION_TIME);
		status = "visible";
	}
	
	//=======================================================================			
	// HIDE
	//=======================================================================	
	function hide(){
		Tween.get(container).to({x:hidePosition},TRANSITION_TIME);
		status = "hidden";
	}	
	
	//=======================================================================			
	// SELECT LANGUAGE
	//=======================================================================		
	function selectLanguage(){

		var t   = languageContainers[0].langItem.id;
		var t2  = lang;		
		lang 	= t;			
		swapLanguages(t2);
	}			
	
	//=======================================================================			
	// SET LANGUAGE
	//=======================================================================		
	function setLanguage(event){
		if(status == "hidden"){
			show();	
		}
		else{
			if(lang != event.target.langItem.id){
				var tempID = event.target.langItem.id;
				swapLanguages(event.target.langItem.id);				
				lang = tempID;				
			}
			hide();
		}
	}	

	//=======================================================================			
	// SWAP LANGUAGES
	//=======================================================================		
	function swapLanguages(langId){
				
		var currentLanguageItem;
		var newLanguageItem;
		
		for(i = 0; i<languageContainers.length; i++){
			if(languageContainers[i].langItem.id == lang)	{	currentLanguageItem = languageContainers[i];	}
			if(languageContainers[i].langItem.id == langId)	{	newLanguageItem 	= languageContainers[i];	}			
		}
					
		var temp   							= newLanguageItem.txt.text;
		var tempId 							= newLanguageItem.langItem.id;
		newLanguageItem		.txt.text 		= currentLanguageItem.txt.text;
		newLanguageItem		.langItem.id 	= currentLanguageItem.langItem.id;		
		currentLanguageItem .txt.text 		= temp;
		currentLanguageItem .langItem.id 	= tempId;
	}

	//=======================================================================			
	// GET SHORT LANG NAME
	//======================================================================			
	function getShortLangName(langName){
		if		(langName == "Ingl�s") 		return "En";
		else if (langName == "Alem�n") 		return "De";
		else if (langName == "Portugu�s")	return "Pt";		
		else								return langName.substring(0, 2)
	}
	
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: PFLangManager.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


var PFLangManager = function(){
    this.texts;
}

    PFLangManager.prototype.load = function(folder){
        /*
        if ( window.XMLHttpRequest ) { xmlhttp = new XMLHttpRequest(); }
        else { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); }

        //PFDebug("Trying to load texts");
        this.texts = null;

        xmlhttp.open("GET","game/" + folder + "/texts/" + lang + ".xml",false);
        xmlhttp.send();

        xmlIni = xmlhttp.responseXML;
        */

        xmlIni = parseScriptToXML(window["_"+lang+"_xml"]);

        this.texts 	= xmlIni.getElementsByTagName("texts")[0].getElementsByTagName("text");
        //PFDebug("Texts Loaded");
        //PFDebug(this.texts);
    }


    PFLangManager.prototype.getText = function(pTextId){
        for(var i=0; i< this.texts.length; i++){
            if(this.texts[i].attributes.getNamedItem("textId").nodeValue == pTextId){
                //PFDebug("Found!" + this.texts[i].childNodes[0].nodeValue);
                return this.texts[i].childNodes[0].nodeValue
            }
        }
        return "";
    }




/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: PFMenu.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************
// File: PFMenu.js 
// PFMenu: Load and execute Main Menu
//*****************************************************/

var PFMenu = function(){
	
	//=====================================================
	// VARIABLES
	//=====================================================
	var itemsMenu;
	var xmlMenu;
	var games;
	var container;
    var background;
	var preload;
	var offsetx, offsety;
	var newx, newy;
	var i;
	var random;	
	
	this.load 		= load;
	this.show 		= show;
	this.onTouch 	= onTouch;
	this.loadGame 	= loadGame;
	
	//=======================================================================			
	// LOAD
	//=======================================================================	
	function load(){
		//musicManager.play();
		gameManager.setCurrentGame(20);
		xmlMenu 	= new PFAction();
        xmlMenu.ReadMenu(null);
        xmlMenu.ReadOptions(null);
		gameHasMenu = xmlMenu.getMenuActive() == "false" ? false:true;
        itemsMenu 	= new Array(xmlMenu.getItemsMenu().length);
	}
	
	//=======================================================================================			
	// controlRandom: Check if this item is already loaded
	//=======================================================================================
	function controlRandom (random,value,length){
		for(j=0;j<length;j++){
			if(random[j] == value){
				return false;
			}		
		}
		return true;
	}

	//=======================================================================			
	// SHOW
	//=======================================================================	
	function show(){
		var itemsMenuManifest = new Array();

		for ( i=0; i<itemsMenu.length; i++){
            itemsMenuManifest[i] = xmlMenu.getItemsMenu()[i].getSrc();
		}
		if(xmlMenu.getBackground("Menu").getSrc()!="null"){
			itemsMenuManifest[itemsMenuManifest.length] = xmlMenu.getBackground("Menu").getSrc();
		}

		if(xmlMenu.getMenuActive() == "false"){

			container = new Container();
			stage.addChild(container);
			onTouch(0);
		}else{
            fixPreloadManifest(itemsMenuManifest);

			preload = new PreloadJS();
            preload.onComplete = handleComplete;
			preload.loadManifest(itemsMenuManifest);
		}
	}
	
	//=======================================================================			
	// HANDLE COMPLETE
	//=======================================================================		
	function handleComplete(event) {
		showMenu();
    }
	
	//=======================================================================			
	// SHOW MENU
	//=======================================================================		
	function showMenu(){
		
		container = new Container();
		stage.addChild(container);

        var rgb = xmlMenu.rgb;

        var g = new Graphics();
        g.beginFill(Graphics.getRGB(rgb[0],rgb[1],rgb[2]));
		g.drawRect(0,0,WIDTH,HEIGHT);
        var s = new Shape(g);
        s.x = 0;
        s.y = 0;
        container.addChild(s);

        var bgSrc = xmlMenu.backgroundMenu.getSrc();
        if(bgSrc.charAt( bgSrc.length-1 ) != "/"){
            background = new Bitmap(bgSrc);
            background.image.onload = drawBackground;
        }
        else
        {
            addMenuItems();
        }

		playMusic();

	}

    //=======================================================================
    // PLAY MUSIC
    //=======================================================================
	function playMusic(){
		if(musicManager.getIsPlaying() == false){
			setTimeout(function(){
				musicManager.play();
			},1000);
		}
	}

    //=======================================================================
    // SHOW IMAGE
    //=======================================================================
	function showImage(evt){
		var i = evt.target.i;		
		offsetx				= (parseInt(itemsMenu[i].image.width)/2);
		offsety				= (parseInt(itemsMenu[i].image.height)/2);
		itemsMenu[i].regX	= offsetx;
		itemsMenu[i].regY	= offsety;
		newx=parseInt(xmlMenu.getItemsMenu()[i].getX());
		newy=parseInt(xmlMenu.getItemsMenu()[i].getY());
		itemsMenu[i].x		= newx;
		itemsMenu[i].y		= newy;			
		//eval('itemsMenu['+i+'].onPress = function(){onTouch('+i+');};');

		var scaleFactor				= xmlMenu.getItemsMenu()[i].getScale()/1000;
		itemsMenu[i].scaleX			= scaleFactor;
		itemsMenu[i].scaleY			= scaleFactor;
		itemsMenu[i].defaultScaleX	= itemsMenu[i].scaleX;
		itemsMenu[i].defaultScaleY	= itemsMenu[i].scaleY;			
		itemsMenu[i].rotation		= xmlMenu.getItemsMenu()[i].getRotation();

		var item = addCustomOnClick({item:itemsMenu[i],c:container},function() {
			onTouch(i);
		});

		container.addChild(itemsMenu[i]);
	}
	
	//=======================================================================			
	// SHOW PORTADA
	//=======================================================================	
	function showPortada(){

		if(isExternal && !gameHasCover)
			goBackToParent();
		else
		{
			container.removeAllChildren();
			stage.removeChild(container);
			portada.load();
			portada.show();
		}
	}
	//=======================================================================			
	// onTouch: Delete menu and Load the selected game 
	//=======================================================================
	function onTouch(i){
		container.removeAllChildren();
		var containerAux = new Container();
		stage.addChild(containerAux);
		loadGame(i,containerAux,container);
	}
	
	//=======================================================================			
	// LOAD GAME
	//=======================================================================	
	function loadGame(i,containerAux,container){
		var games = gameManager.setGames();

        gameManager.playGame(i,0,containerAux,container);
	}


    //=====================================================
    // DRAW BACKGROUND
    //=====================================================
    function drawBackground(){
        var scaleType = xmlMenu.backgroundMenu.getScaleType();

        scaleWithType(background,scaleType,WIDTH,HEIGHT);

        background.x = WIDTH/2 - background.image.width*background.scaleX / 2;
        background.y = HEIGHT/2 - background.image.height*background.scaleY / 2;

        container.addChild(background);

        addMenuItems();
    }

    //=====================================================
    // ADD MENU ITEMS
    //=====================================================
    function addMenuItems() {

		games = new Array(itemsMenu.length);

		switch (typeNavigation){
			case "menu-random":
				random = new Array(itemsMenu.length);
				//-----------------------
				// Choose random order
				//-----------------------
				for(i=0;i<itemsMenu.length;i++){
					do{
						valueRandom = Math.floor(Math.random()*itemsMenu.length);
					}while(!controlRandom (random,valueRandom,itemsMenu.length));
					random[i] = valueRandom;
				}
				//----------------
				// insert games
				//----------------
				for ( i=0; i<itemsMenu.length; i++){
					games[i] = new PFGame(xmlMenu.getItemsMenu()[random[i]].getSrc(),xmlMenu.getItemsMenu()[random[i]].getType(),xmlMenu.getItemsMenu()[random[i]].getGame());
				}
				break;
			default:
				for ( i=0; i<itemsMenu.length; i++){
					games[i] = new PFGame(xmlMenu.getItemsMenu()[i].getSrc(),xmlMenu.getItemsMenu()[i].getType(),xmlMenu.getItemsMenu()[i].getGame());
				}
 		}

		for ( i=0; i<itemsMenu.length; i++){
			itemsMenu[i] 		        = new Bitmap(games[i].getSrcMenu());
			itemsMenu[i].image.i        = i;
			itemsMenu[i].image.onload   = showImage;
		}

		if(typeNavigation == 1){
			onTouch(0);
		}else if(typeNavigation == 2){
			var firstGame = Math.floor(Math.random()*itemsMenu.length);
			onTouch(firstGame);
		}

	    addPortadaButton();
	    removeLoading();
    }

    //=====================================================
    // ADD PORTADA BUTTON
    //=====================================================
    function addPortadaButton(){
        xmlCover = new PFAction();

        xmlCover.ReadOptions(null);
        xmlCover.ReadPortada(null);

        if(xmlCover.getPortadaActive() == "true" || (isExternal && !gameHasCover)){

            var portadaButton = themeXML.homeThemeItem.create(function() {

                //portadaButton.onPress	= showPortada
	            container.addChild(portadaButton);
                addCustomOnClick({item:portadaButton,c:container},showPortada);
            });

	        //addJQueryClick(portadaButton.image,showPortada);
        }
    }
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: PFItemMenu.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFItemMenu.js 
//	PFItemMenu: create particular item properties
//*************************************************************

function PFItemMenu(id,game,type){

	//=====================================================
	// VARIABLES
	//=====================================================	
	this.id = id;
	this.game = game;
	this.type = type;
	
	this.getId = getId;
	this.getGame = getGame;
	this.getType = getType;

	//=====================================================
	// GETS
	//=====================================================	
	function getId() {
		return this.id;
	}
	function getGame() {
		return this.game;
	}
	function getType() {
		return this.type;
	}
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: PFAction.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************/// PFAction: Load all xmls to variables//*****************************************************/function PFAction(){		//Variables	var jumps;	var movementX;	var movementY;	var CardPositions;	var redCard;	var endGameScreen;	var endGameSound;	var numPages;	var backgroundPuzzle;	var actionState;	var actionMove;	var actionJump;	var actionRotation;	var actionScale;	var actionSound;	var itemsMenu;	var itemsExplore;	var itemsMemory;	var itemsDrag;	var itemsListenDrag;	var itemsPuzzle;	var itemsFindMe;	var itemsFletxes;	var numLostItems;	var numRelations;	var itemsTouchListen;	var foregroundPaint;	var itemsPare;	var itemsFast;	var itemsInteractiveImages;	var itemsQuiz;	var itemsQuizGaps;	var itemsDifferences;	var backgroundPortada;	var backgroundGame;	var backgroundMenu;    var rgb;	var playPortada;	var xmlhttp;	var xmlIni;	var xmlDoc;	var i, j, n;	var level;	var portadaActive;	var menuActive;	var musicSrc;	var menuMusic;    this.canvasWidth;    this.canvasHeight;		//Function declarations	this.LoadItems = LoadItems;	//this.LoadActions = LoadActions;	this.ReadPortada = ReadPortada;    this.ReadMetadata = ReadMetadata;	this.ReadMenu = ReadMenu;	this.ReadOptions = ReadOptions;	this.getBackground = getBackground;	this.getPlay = getPlay;	this.getItemsMenu = getItemsMenu;	this.getItems = getItems;	this.getAction = getAction;	this.getBackgroundPuzzle = getBackgroundPuzzle;	this.getEndGameScreen = getEndGameScreen;	this.getEndGameSound = getEndGameSound;	this.getRedCard = getRedCard;	this.getCardPositions = getCardPositions;	this.setMovementX = setMovementX;	this.setMovementY = setMovementY;	this.getMovementX = getMovementX;	this.getMovementY = getMovementY;	this.setJumps = setJumps;	this.getJumps = getJumps;	this.getActionMove = getActionMove;	this.getActionScale = getActionScale;	this.getActionRotation = getActionRotation;	this.getActionJump = getActionJump;	this.getNumLostItems = getNumLostItems;	this.getNumRelations = getNumRelations;	this.getItemsPare = getItemsPare;	this.getLevel = getLevel;	this.getPortadaActive = getPortadaActive;	this.getMenuActive	= getMenuActive;	this.getMusicSrc	= getMusicSrc;	this.getMenuMusic	= getMenuMusic;				//Functions	function getNumLostItems()	{ return this.numLostItems;		}	function getNumRelations()	{ return numRelations;			}	function setJumps(value)	{ this.jumps = value;			}	function getJumps()			{ return this.jumps;			}	function setMovementX(value){ this.movementX=value;			}	function setMovementY(value){ this.movementY=value;			}	function getMovementX()		{ return this.movementX;		}	function getMovementY()		{ return this.movementY;		}	function getRedCard()		{ return this.redCard;			}	function getCardPositions()	{ return this.CardPositions;	}	function getEndGameScreen() { return this.endGameScreen;	}	function getEndGameSound()	{ return this.endGameSound;		}	function getAction()		{		if (actionState){			if(this.actionMove.length>0){				return this.actionMove;			}			if(this.actionScale.length>0){				return this.actionScale;			}			if(this.actionRotation.length>0){				return this.actionRotation;			}			if(this.actionJump.length>0){				return this.actionJump;			}			if(this.actionSound != ""){						}		}	}	function getActionMove()	{ return this.actionMove;		}	function getActionScale()	{ return this.actionScale;		}	function getActionRotation(){ return this.actionRotation;	}	function getActionJump()	{ return this.actionJump;		}	function getItemsMenu()		{ return this.itemsMenu;		}	function getItemsPare()		{ return this.itemsPare;		}	function getLevel()			{ return this.level;			}	function getPortadaActive()	{ return portadaActive;			}	function getMenuActive()	{ return menuActive;			}	function getMusicSrc()		{ return musicSrc;				}	function getMenuMusic()		{ return menuMusic;				}	function getItems(value){		if(value=="explore"){			return this.itemsExplore;		}		if(value=="drag"){			return this.itemsDrag;		}		if(value=="memory"){			return this.itemsMemory;		}		if(value=="puzzle"){			return this.itemsPuzzle;		}		if(value=="findme"){			return this.itemsFindMe;		}		if(value=="listenandtouch"){			return this.itemsTouchListen;		}		if(value=="listenanddrag"){			return this.itemsListenDrag;		}		if(value=="fastdrag" || value=="dragtocontainers"){			return this.itemsFast;		}		if(value=="differences"){			return this.itemsDifferences;		}		if(value=="paint"){			return this.foregroundPaint;		}		if(value=="interactiveimages"){			return this.itemsInteractiveImages;		}		if(value=="quiz"){			return this.itemsQuiz;		}		if(value=="quiztext"){			return this.itemsQuizGaps;		}		if(value=="arrows" || value=="arrowsvalidate"){			return this.itemsFletxes;		}	}	function getBackground(value){		if( value == "Portada" ){			return this.backgroundPortada;		}else{			if( value == "Menu" ){				return this.backgroundMenu;			}else{				return this.backgroundGame;			}		}	}	function getBackgroundPuzzle()	{	return this.backgroundPuzzle;	}	function getPlay()				{	return this.playPortada;		}		//=======================================================================				// READ PORTADA	//=======================================================================			function ReadPortada( action ){        /*		if  ( window.XMLHttpRequest ){			xmlhttp = new XMLHttpRequest();		}else{			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");		}		xmlhttp.open("GET",action,false);		xmlhttp.send();		xmlDoc = xmlhttp.responseXML;		 */        xmlDoc = parseScriptToXML(_cover_xml);		var x = xmlDoc.getElementsByTagName("background");		this.backgroundPortada = new Background(x[0].attributes.getNamedItem('src').nodeValue,0,0,"",x[0].attributes.getNamedItem('scale').nodeValue);        var rgb = "0-0-0";        if(typeof(x[0]) != "undefined"){            if(x[0].attributes.getNamedItem('rgb') != null){                rgb = x[0].attributes.getNamedItem('rgb').nodeValue;            }        }        this.rgb = rgb.split("-");		x = xmlDoc.getElementsByTagName("play");		this.playPortada = new PFItem(x[0].attributes.getNamedItem('src').nodeValue,x[0].attributes.getNamedItem('x').nodeValue,x[0].attributes.getNamedItem('y').nodeValue,x[0].attributes.getNamedItem('scale').nodeValue,x[0].attributes.getNamedItem('rotation').nodeValue,"");	}		//=======================================================================				// READ OPTION	//=======================================================================		function ReadOptions( ){        /*		if  (window.XMLHttpRequest){			xmlhttp = new XMLHttpRequest();		}else{			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");		}		xmlhttp.open("GET",action,false);		xmlhttp.send();		xmlDoc 				= xmlhttp.responseXML;		*/        xmlDoc = parseScriptToXML(_options_xml);		var tagLanguages 	= xmlDoc.getElementsByTagName("languages");		var tagLang 		= tagLanguages[0].getElementsByTagName("language");		if(lang == null)			lang 				= tagLang[0].attributes.getNamedItem("id").nodeValue;		langList 			= new Array();				for(i=0; i<tagLang.length; i++){			tagLang = xmlDoc.getElementsByTagName("language");			langList[i] = new PFItemLanguage (tagLang[i].attributes.getNamedItem("id").nodeValue, tagLang[i].attributes.getNamedItem("lang").nodeValue);		}					if(typeof(xmlDoc.getElementsByTagName("cover")[0]) != "undefined"){			portadaActive	=	xmlDoc.getElementsByTagName("cover")[0].attributes.getNamedItem("active").nodeValue;		}		if(typeof(xmlDoc.getElementsByTagName("menu")[0]) != "undefined"){			menuActive 		=	xmlDoc.getElementsByTagName("menu")[0].attributes.getNamedItem("active").nodeValue;		}		musicSrc 	= "";		menuMusic 	= "";		if(typeof(xmlDoc.getElementsByTagName("music")[0]) != "undefined"){			musicSrc		=	xmlDoc.getElementsByTagName("music")[0].attributes.getNamedItem("src").nodeValue;			menuMusic		= 	xmlDoc.getElementsByTagName("music")[0].attributes.getNamedItem("menu_music").nodeValue;		}	}    //=======================================================================    // READ METADATA    //=======================================================================    function ReadMetadata(action){        /*        if  (window.XMLHttpRequest){            xmlhttp = new XMLHttpRequest();        }else{            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");        }        xmlhttp.open("GET",action,false);        xmlhttp.send();        xmlDoc 				= xmlhttp.responseXML;        */        xmlDoc = parseScriptToXML(_metadata_xml);        this.canvasWidth = xmlDoc.getElementsByTagName("canvasWidth")[0].childNodes[0].nodeValue;        this.canvasHeight = xmlDoc.getElementsByTagName("canvasHeight")[0].childNodes[0].nodeValue;        PFDebug("Canvas Width:" + this.canvasWidth);        PFDebug("Canvas Height:" + this.canvasHeight);    }	//=======================================================================				// READ MENU	//=======================================================================			function ReadMenu( action ){        /*		if  (window.XMLHttpRequest){			xmlhttp = new XMLHttpRequest();		}else{			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");		}		xmlhttp.open("GET",action,false);		xmlhttp.send();		xmlDoc = xmlhttp.responseXML;		*/        xmlDoc = parseScriptToXML(_menu_xml);		var x = xmlDoc.getElementsByTagName("background");		this.backgroundMenu = new Background(x[0].attributes.getNamedItem('src').nodeValue,0,0,"",x[0].attributes.getNamedItem('scale').nodeValue);        // GET RGB        var rgb = "0-0-0";        if(typeof(x[0]) != "undefined"){            if(x[0].attributes.getNamedItem('rgb') != null){                rgb = x[0].attributes.getNamedItem('rgb').nodeValue;            }        }        this.rgb = rgb.split("-");		x = xmlDoc.getElementsByTagName("menuItem");		this.itemsMenu = new Array(x.length);		for  (i = 0; i < x.length; i++){			PFItemMenu.prototype = new PFItem(x[i].attributes.getNamedItem("src").nodeValue,x[i].attributes.getNamedItem("x").nodeValue,x[i].attributes.getNamedItem("y").nodeValue,x[i].attributes.getNamedItem("scale").nodeValue,x[i].attributes.getNamedItem("rotation").nodeValue,"");			this.itemsMenu[i] = new PFItemMenu(x[i].attributes.getNamedItem("id").nodeValue,x[i].attributes.getNamedItem("game").nodeValue,x[i].attributes.getNamedItem("type").nodeValue);		}		typeNavigation = xmlDoc.getElementsByTagName("mode")[0].attributes.getNamedItem("id").nodeValue;	}		//=======================================================================				// SELECT SOUND XML	//=======================================================================			function SelectSoundXML(tagSnd){		//Select which sound is related with language		var j=0;		if(tagSnd[j].attributes.getNamedItem("lang").nodeValue==lang){				return j;			}		while(tagSnd[j].attributes.getNamedItem("lang").nodeValue!=lang){			if(tagSnd[j].attributes.getNamedItem("lang").nodeValue==lang){				return j;			}			j++;			if(j >= tagSnd.length){				break;			}			if(tagSnd[j].attributes.getNamedItem("lang").nodeValue==lang){				return j;			}					}		return -1;	}		//=======================================================================				// SELECT TEXT XML	//=======================================================================			function SelectTextXML(tagText){		//Select which text is related with language		var j=0;		if(tagText[j].attributes.getNamedItem("lang").nodeValue==lang){			return j;		}		while(tagText[j].attributes.getNamedItem("lang").nodeValue!=lang){			if(tagText[j].attributes.getNamedItem("lang").nodeValue==lang){				return j;			}			j++;			if(j >= tagText.length){				break;			}			if(tagText[j].attributes.getNamedItem("lang").nodeValue==lang){				return j;			}					}				return -1;		}		//=======================================================================				// LoadItems: load the items of the chosen game	//=======================================================================	function LoadItems( game, folder ){        xmlIni = parseScriptToXML(_game_xml);		xmlDoc 	= xmlIni.getElementsByTagName("page")[0];		var x 	= xmlDoc.getElementsByTagName("background");		if(typeof(x[0]) != "undefined"){			this.backgroundGame = new Background(x[0].attributes.getNamedItem('src').nodeValue,0,0,folder);		}		x = xmlDoc.getElementsByTagName("item");		var x2;		var tagSound;				//if(game=="explore")		{ JA HI HA EL NOU }		//if(game=="memory") 		{ JA HI HA EL NOU }		//if(game=="quiz")	 		{ JA HI HA EL NOU } 				//if(game=="listenTouch") 	{ JA HI HA EL NOU }				//if(game=="puzzle") 		{ JA HI HA EL NOU }					//if(game=="drag") 			{ JA HI HA EL NOU }					//if(game=="findme") 		{ JA HI HA EL NOU }						//if(game=="listenanddrag")	{ JA HI HA EL NOU }					//if(game=="fastdrag")		{ JA HI HA EL NOU }														//if(game=="dragcontainers"){ JA HI HA EL NOU }							//if(game=="paint")			{ JA HI HA EL NOU }									//if(game=="differences")	{ JA HI HA EL NOU }						//if(game=="interactiveimages")			{ JA HI HA EL NOU }				//if(game=="quiztext")		{ JA HI HA EL NOU }				//if(game=="arrows")		{ JA HI HA EL NOU }	}}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: PFGameManager.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFGameManager.js 
//	PFGameManager: Singleton file
//*************************************************************

var PFGameManager = function(){

	//=======================================================================================			
	// VARIABLES
	//=======================================================================================
	var currentLanguage;
	var currentGame;
	var nextGame = 0;
	var backGame = 0;
	var gameList;
	var menuType;
	var games;
	var gamePlayed;
	var i;
	var isFirst = true;
	var currentContainer;
	
	var numGames;
	var random;
 
	//=======================================================================================			
	// getInstance: Get the instance of the Singleton class
	//=======================================================================================
	var getInstance = function() {
		if (!Singleton.singletonInstance) {
			Singleton.singletonInstance = createInstance();
		}
		return Singleton.singletonInstance;
	}

	
	//--------------------------------------------
	// Create an instance of the Singleton class
	//--------------------------------------------
	var createInstance = function() {
		//---------------------------------------------------------
		// Here, you return all public methods and variables
		//---------------------------------------------------------	
		return {
			setLanguage : function(language) {
				currentLanguage = language;
				return this.currentLanguage();
			},
			setGames : function() {
				var xmlMenu = new PFAction();
				xmlMenu.ReadMenu();
				var itemsMenu = new Array(xmlMenu.getItemsMenu().length);
				numGames = itemsMenu.length;
				games = new Array(itemsMenu.length);
				for ( i=0; i<itemsMenu.length; i++){
					games[i] = new PFGame(xmlMenu.getItemsMenu()[i].getSrc(),xmlMenu.getItemsMenu()[i].getType(),xmlMenu.getItemsMenu()[i].getGame());
				}

                return games;
			},
			currentLanguage : function() {
				return currentLanguage;
			},

			//=======================================================================			
			// PLAY GAME
			//=======================================================================				
			playGame : function(i,direction,containerAux,containerAnt) {

				PFSound.stopAll();
				PFSound.killAllSounds();

				currentContainer = containerAux;
				currentGame=i;
				if(typeNavigation == 1){
					if(i<games.length-1){
						nextGame=i+1;
					}else{
						nextGame=0;
					}
					if(i==0){
						backGame=games.length-1;
					}else{
						backGame=i-1;
					}
				}
			
				var game 	= games[i].getType();
				var folder 	= games[i].getGame();
								
				switch(game){
					case "explore":
						gamePlayed = new PFGameExplore();
					break;
					case "drag":
						gamePlayed = new PFGameDrag();
					break;
					case "memory":
						gamePlayed = new PFGameMemory();
					break;
					case "puzzle":
						gamePlayed = new PFGamePuzzle();
					break;
					case "fillthegaps":
						gamePlayed = new PFGamePuzzle();
						game = "puzzle";
					break;
					case "findme":
						gamePlayed = new PFGameFindMe();
					break;
					case "listenandtouch":
						gamePlayed = new PFGameTouchListen();
					break;
					case "listenanddrag":
						gamePlayed = new PFGameListenDrag();
					break;
					case "fastdrag":
						gamePlayed = new PFFastDrag();
					break;
					case "paint":
						paintState = true;
						gamePlayed = new PFGamePaint();
					break;
					case "differences":
						gamePlayed = new PFGameDifferences();
					break;
					case "interactiveimages":
						gamePlayed = new PFGameInteractiveImages();
					break;
					case "quiz":
						gamePlayed = new PFGameQuiz();
					break;
					case "quiztext":
						gamePlayed = new PFGameQuizGaps();
					break;
					case "arrows":
						gamePlayed = new PFGameFletxes();
					break;
					case "dragtocontainers":
						gamePlayed = new PFGameDragAllIn();
					break;
					case "arrowsvalidate":
						gamePlayed = new PFGameFletxesValidar();
					break;
					case "externalactivity":
						location.href = "./"+GAME_FOLDER+"/"+ folder + "/index.html?external=true";
						break;
					case "touch2":
						gamePlayed = new PFGameTouch2();
						break;
					case "paint2":
						gamePlayed = new PFGamePaint2();
						break
				}

				loadScript("./"+GAME_FOLDER+"/"+folder+"/game.js",function() {
					loadScript("./"+GAME_FOLDER+"/" + folder + "/texts/" + lang + ".js",function() {
						langManager.load(folder);
						gamePlayed.load(game,folder);
						gamePlayed.show(game,folder,direction,containerAux,containerAnt);
					});
				});

			},
			setCurrentGame : function(game) {
				currentGame = game;
			},
			currentGame : function() {
				return currentGame;
			},
			//=======================================================================			
			// NEXT GAME
			//=======================================================================
			nextGame : function() {	
				var xmlMenu = new PFAction();
				xmlMenu.ReadOptions(null);
				isFirst = false;
				nextGame = currentGame;
				if(xmlMenu.getMenuActive() == "false"){
						if(currentGame<games.length-1){
							nextGame=currentGame+1;
						}else{
							nextGame=0;

							if (isExternal)
								goBackToParent();
							//go to portada
						}					
				}else{
					if(typeNavigation == 1){
						if(currentGame<games.length-1){
							nextGame=currentGame+1;
						}else{
							nextGame=0;
							if (isExternal)
								goBackToParent();
						}					
					}else if(typeNavigation == 2){						
						while(nextGame == currentGame){						
							nextGame=Math.floor(Math.random()*numGames);						
						}					
					}
				}
				return nextGame;
			},
			//=======================================================================			
			// BAKC GAME
			//=======================================================================
			backGame : function() {		
				var xmlMenu = new PFAction();
				xmlMenu.ReadOptions(null);
				if(xmlMenu.getMenuActive() == "false"){
					if(currentGame == 0){
						backGame=games.length-1;
					}
					else{
						backGame=currentGame-1;
					}
				}
						
				return backGame;
				
				/*backGame = currentGame;				
				if(typeNavigation == 1){					
					if(currentGame==0){
						backGame=games.length-1;
					}else{
						backGame=currentGame-1;
					}
					if(backGame == 0){
						isFirst = true;
					}
				}else if(typeNavigation == 2){											
					while(backGame == currentGame){						
						backGame=Math.floor(Math.random()*numGames);						
					}										
				}
				return backGame;*/
			},
			
			//=======================================================================			
			// IS FIRST GAME
			//=======================================================================
			isFirstGame : function(){
				return isFirst;
			},
			setGamesList : function(list) {
				gameList = list;
				return this.gameList();
			},
			gameList : function() {
				return gameList;
			},
			setMenuType : function(type) {
				menuType = type;
				return this.menuType();
			},
			menuType : function() {
				return menuType;
			},
			
			//=======================================================================			
			// SHOW PORTADA
			//=======================================================================	
			showPortada : function(container){
				isFirst = true;
				container.removeAllChildren();
				stage.removeChild(container);
				portada.load();
				portada.show();
			}
		}
	}
	return getInstance();
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: PFGame.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFGame.js 
//	PFGame: Create menu's button game  
//*************************************************************

function PFGame(srcMenu, type, game){
	
	//=====================================================
	// VARIABLES
	//=====================================================
	this.srcMenu 	= srcMenu;
	this.type 		= type;
	this.game 		= game;
	
	//=====================================================
	// GETS
	//=====================================================
	this.getSrcMenu = getSrcMenu;
	this.getType 	= getType;
	this.getGame 	= getGame;
	
	function getSrcMenu(){	return this.srcMenu;	}
	function getType(){		return this.type;		}
	function getGame(){		return this.game;		}
	
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: PFItem.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFItem.js 
//	PFItem: create common item properties
//*************************************************************

function PFItem(src,x,y,scale,rotation,folder){

	//=====================================================
	// VARIABLES
	//=====================================================
	if(folder==""){
		this.src = "./"+GAME_FOLDER+"/images/"+src;
	}else{
		this.src = "./"+GAME_FOLDER+"/"+folder+"/images/"+src;
	}
	this.x = x;
	this.y = y;
	this.scale = scale;
	this.rotation = rotation;
	this.folder = folder;
	
	this.getSrc = getSrc;
	this.getX = getX;
	this.getY = getY;
	this.setX = setX;
	this.setY = setY;
	this.getScale = getScale;
	this.getRotation = getRotation;
	this.getRotation = getRotation;
	this.getFolder = getFolder;
	this.setSrc = setSrc;
}
//=====================================================
// GETS
//=====================================================
function getX() {
	return this.x;
}
function getY() {
	return this.y;
}
function getSrc() {
	return this.src;
}
function getScale() {
	return this.scale;
}
function getRotation() {
	return this.rotation;
}
function getFolder(){
	return this.folder;
}
//=====================================================
// SETS
//=====================================================
function setX(value) {
	this.x=value;
}
function setY(value) {
	this.y=value;
}
function setSrc(newSrc){
	this.src = newSrc;
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: PFItemDecoratorAction.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFItemDecoratorAction.js 
//	PFItemDecoratorAction: create item animation properties
//*************************************************************

function PFItemDecoratorAction(){
	
	//=====================================================
	// VARIABLES
	//=====================================================
	var item = new Array(0);
	var n, l;
	
	this.calculateScale			= calculateScale;
	this.calculateRotation		= calculateRotation;
	this.calculateMovementX 	= calculateMovementX;
	this.calculateMovementY 	= calculateMovementY;
	this.calculateJump 			= calculateJump;
	this.calculateMovementJump 	= calculateMovementJump;
	this.getItem 				= getItem;
	
	//=====================================================
	// GET
	//=====================================================
	function getItem(){
		return item;
	}
	
	//=====================================================
	// CALCULATE SCALE
	//=====================================================
	function calculateScale(i,j,actions,items){
		
		if(j == actions.length){
			for(n=0;n<item.length;n++){
				if(item[n] == i){
					item.splice(n,1);
					break;
				}
			}
		}
		if(j == 0){
			item.splice(0,0,i);

			scalex = items[i].defaultScaleX;
			scaley = items[i].defaultScaleY;	
			
			Tween.get(items[i])		.to({scaleX:parseFloat(actions[0][0]*scalex)},actions[0][1]*scalex)
									.play(Tween.get(items[i])
									.to({scaleY:parseFloat(actions[0][0]*scaley)},actions[0][1]*scaley))
									.call(function(){ calculateScale(i,1,actions,items)});

												
		}else{
			if (j < actions.length){
				scalex = items[i].defaultScaleX;
				scaley = items[i].defaultScaleY;
				Tween.get(items[i])	.to({scaleX:parseFloat(actions[j][0]*scalex)},actions[j][1]*scalex)
									.play(Tween.get(items[i])
									.to({scaleY:parseFloat(actions[j][0]*scaley)},actions[j][1]*scaley))
									.call(function(){calculateScale(i,j,actions,items)});
				j++;
			}
		}
	}
	
	//=====================================================
	// CALCULATE ROTATION
	//=====================================================
	function calculateRotation(i,j,actions,items){
		if(j==actions.length){
			for(n=0;n<item.length;n++){
				if(item[n]==i){
					item.splice(n,1);
					break;
				}
			}
		}	
		
		if(j==0){
			item.splice(0,0,i);						
			Tween.get(items[i]).to({rotation:parseInt(actions[0][0]) + parseInt(items[i].defaultRotation)},parseInt(actions[0][1])).wait(0).call(function(){calculateRotation(i,1,actions,items)});
		}else{
		
			if (j < actions.length){
				Tween.get(items[i]).to({rotation: parseInt(actions[j][0]) + parseInt(items[i].defaultRotation)},parseInt(actions[j][1])).wait(0).call(function(){calculateRotation(i,j,actions,items)});				
				j++;
			}
		}
	}
	
	//=====================================================
	// CALCULATE JUMP
	//=====================================================
	function calculateMovementJump(jumps,xml,offsety,i,game){
		var movimentsjump = new Array((jumps[0][1]*2)+2);
		for (l = 0;l < movimentsjump.length; l++){
				if (l == 0){
					movimentsjump[l] = parseInt(offsety)+parseInt(jumps[l][0])/2;
				}else{
					var resto;
					resto = l % 2;
					if  (resto == 0){ 
						 movimentsjump[l] = parseInt((jumps[0][0]))/2+parseInt(movimentsjump[l-1]);
					}else{
						  movimentsjump[l] = parseInt(-(jumps[0][0]))/2+parseInt(movimentsjump[l-1]);
					}
				}
		}
		xml.items[i].setActionJump(movimentsjump);
	}
	
	//=====================================================
	// CALCULATE MOVEMENT X
	//=====================================================
	function calculateMovementX(i,j,items,xml,game){
		if(j==xml.items[i].getActionMove().length){
			for(n=0;n<item.length;n++){
				if(item[n]==i){
					item.splice(n,1);
					break;
				}
			}
		}
		if(j==0){ 
			item.splice(0,0,i);
			var newX=parseInt(xml.items[i].getX())+parseInt(xml.items[i].getActionMove()[0][0]);
			xml.items[i].setX(newX);
			Tween.get(items[i]).to({x:newX},xml.items[i].getActionMove()[0][2]).wait(0).call(function(){calculateMovementX(i,1,items,xml,game)});
		}else{
			if (j < xml.items[i].getActionMove().length){
				var newX=parseInt(xml.items[i].getX())+parseInt(xml.items[i].getActionMove()[j][0]);
				xml.items[i].setX(newX);
				Tween.get(items[i]).to({x:newX},xml.items[i].getActionMove()[j][2]).call(function(){calculateMovementX(i,j,items,xml,game)});
				j++;
			}
		}
	}
	
	//=====================================================
	// CALCULATE MOVEMENT Y
	//=====================================================
	function calculateMovementY(i,j,items,xml,game){
		if(j==xml.items[i].getActionMove().length){
			for(n=0;n<item.length;n++){
				if(item[n]==i){
					item.splice(n,1);
					break;
				}
			}
		}
		if(j==0){ 
			item.splice(0,0,i);;
			var newY=parseInt(xml.items[i].getY())+parseInt(xml.items[i].getActionMove()[0][1]);
			xml.items[i].setY(newY);
			Tween.get(items[i]).to({y:newY},xml.items[i].getActionMove()[0][2]).wait(0).call(function(){calculateMovementY(i,1,items,xml,game)});
		}else{
			if (j < xml.items[i].getActionMove().length){
				var newY=parseInt(xml.items[i].getY())+parseInt(xml.items[i].getActionMove()[j][1]);
				xml.items[i].setY(newY);
				Tween.get(items[i]).to({y:newY},xml.items[i].getActionMove()[j][2]).call(function(){calculateMovementY(i,j,items,xml,game)});
				j++;
			}
		}
	}
	
	//=====================================================
	// CALCULATE JUMP
	//=====================================================	
	function calculateJump(i,j,items,xml,game){
		if(j==xml.items[i].getActionJump().length){
			for(n=0;n<item.length;n++){
				if(item[n]==i){
					item.splice(n,1);
					break;
				}
			}
		}
		if(j==0){ 
			item.splice(0,0,i);
			Tween.get(items[i]).to({y:xml.items[i].getActionJump()[0]},100).wait(0).call(function(){calculateJump(i,1,items,xml,game)});
		}else{
			if (j < xml.items[i].getActionJump().length){
				Tween.get(items[i]).to({y:xml.items[i].getActionJump()[j]},100).call(function(){calculateJump(i,j,items,xml,game)});
				j++;
			}
		}
	}
}


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: PFItemLanguage.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFItemLanguage.js 
//	PFItemLanguage: create particular item properties
//*************************************************************

function PFItemLanguage(id,lang){
	
	//=====================================================
	// VARIABLES
	//=====================================================
	this.id = id;
	this.lang = lang;
	this.getId = getId;
	this.setId = setId;
	this.getLang = getLang;
	this.setLang = setLang;
	this.getLangAbrev = getLangAbrev;
	
	//=====================================================
	// GETS
	//=====================================================
	function getId() {
		return this.id;
	}
	function getLang() {
		return this.lang;
	}
	function getLangAbrev(){
		var langTxt = "";		
		switch(this.id){
			case 1:				
				langTxt = "En";
				break;
			case 2:
				langTxt = "Es";
				break;
			case 3:
				langTxt = "Ca";
				break;
			case 4:
				langTxt = "Fr";
				break;
			case 5:
				langTxt = "De";
				break;				
			case 6:
				langTxt = "It";
				break;
		}
		return langTxt;
	}
	//=====================================================
	// SETS
	//=====================================================
	function setId(id){
		this.id = id;
	}
	function setLang(lang){
		this.lang = lang;
	}
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: PFMusicManager.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


var PFMusicManager = function() {
	var isPlaying = false;
	
	var getInstance = function() {
		if (!PFMusicManager.singletonInstance) { 
			PFMusicManager.singletonInstance = createInstance();
		}
		return PFMusicManager.singletonInstance;
	}

	var createInstance = function() {
		
		//------------------------------------------------------
		// Here, you return all public methods and variables
		//------------------------------------------------------
		return {
			play: function(){
				var xmlCover = new PFAction();
				xmlCover.ReadOptions(null);
				
				var sound = xmlCover.getMusicSrc();				
				if(sound != ""){
					if(!isPlaying){
						PFSound.load("generalMusic","./"+GAME_FOLDER+"/sounds/" + sound);
						PFSound.play("generalMusic");
						isPlaying = true;	
					}
				}
			},
			stop: function(){
				var xmlCover = new PFAction();
				xmlCover.ReadOptions(null);
				
				var sound = xmlCover.getMusicSrc();				
				if(sound != ""){
					if(isPlaying){
						PFSound.stop(generalMusic);
						isPlaying = false;
					}
				}
			},		
			getIsPlaying: function(){
				return isPlaying;
			}
		}
	}

	return getInstance();
}


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/PFBaseItem.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFBaseItem.js 
//	PFBaseItem: Create a generic bitmap with common properties
//*************************************************************
var PFBaseItem = function(pItem,pI,clickCallback){
	
	//=====================================================
	// VARIABLES
	//=====================================================	
	var xml 		= xml;
	var folder 		= folder;
	var game 		= game;
	var imageSrc 	= imageSrc;

	var i 			= pI;		
	var item		= pItem;
	var bitmap;	
	var kind;
	var text = "";
	var textContainer;
	
	create(clickCallback);

	//=====================================================
	// CREATE: Create a generic bitmap 
	//=====================================================
	function create(itemCallback){
		if(item.getSrc().charAt( item.getSrc().length-1 ) != "/" && item.getSrc().substr(item.getSrc().length - 4) != "null"){		
			kind = 1;
			bitmap = new Bitmap(item.getSrc());	
			bitmap.i = i;
			bitmap.image.onload = function(){			
				var scaleFactor = 1;		
				if(item.getScale() != 1000){
					scaleFactor 	= item.getScale()/1000;
					bitmap.scaleX	= scaleFactor;
					bitmap.scaleY	= scaleFactor;	
				}			
				bitmap.rotation = item.getRotation();
				
				bitmap.defaultScaleX = scaleFactor;
				bitmap.defaultScaleY = scaleFactor;			
				
				offsetx	= parseInt(bitmap.image.width)/2;
				offsety	= parseInt(bitmap.image.height)/2;
				newx	= parseInt(item.getX());
				newy	= parseInt(item.getY());
				
				bitmap.regX 	= offsetx;
				bitmap.regY 	= offsety;
				bitmap.x		= newx;
				bitmap.y		= newy;
				item.setOffsetX(offsetx);
				item.setOffsetY(offsety);


				if (itemCallback)
				{
					var itemShape = itemCallback(bitmap);
				}
			}
		}else{
			text = new Container();
			kind = 0;
			textTxt = new Text(item.getText(),"20px Arial","rgb(" + item.getRgb().replace(/-/g,",") + ")");
			
			text.rotation = item.getRotation();
			newx	= parseInt(item.getX());
			newy	= parseInt(item.getY());
			
			text.defaultScaleX = 1;
			text.defaultScaleY = 1;
			text.x 	= newx;
			text.y	= newy;
			
			text.i 	= i;
			text.addChild(textTxt);
			var g = new Graphics();
			g.beginFill(Graphics.getRGB(255,255,255));
			g.drawRect(0,0,textTxt.getMeasuredWidth()+2,24);
			var s = new Shape(g);
				s.x = -1;
				s.y =-22;
				s.alpha = 0.01;
			text.addChild(s);
            s.onMouseOver = function(e)    { document.body.style.cursor='pointer'; }
            s.onMouseOut = function(e)     { document.body.style.cursor='default'; }
            text.onMouseOver = function(e)    { document.body.style.cursor='pointer'; }
            text.onMouseOut = function(e)     { document.body.style.cursor='default'; }
		}
	}
	
	//=====================================================
	// GETS
	//===================================================== 
	this.getBitmap = function()	{ return bitmap;	}
	this.getKind = function() 	{ return kind; 		}
	this.getText = function()	{ return text; 		}
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/PFThemeItem.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


var PFThemeItem = function(pBasePath,pAttributes){

    var src         = "";
	var srcCornerL  = "";
	var srcCornerR  = "";
    var basePath    = "";
    var alignX      = "top";
    var alignY      = "left";
    var maxWidth    = 0;
    var maxHeight   = 0;
    var x = 0;
    var y = 0;
    var sound;
    var font;
    var fontSize;
    var color;

    var theBitmap;

    this.setValues(pBasePath,pAttributes);

}
    //========================================================
    // SET VALUES
    //========================================================
    PFThemeItem.prototype.setValues = function(pBasePath,attributes){
        this.basePath           = pBasePath;

        if(attributes.getNamedItem("src")!=null)
            this.src                = attributes.getNamedItem("src").nodeValue;

	    if(attributes.getNamedItem("cornerLsrc")!=null)
		    this.srcCornerL         = attributes.getNamedItem("cornerLsrc").nodeValue;

	    if(attributes.getNamedItem("cornerRsrc")!=null)
		    this.srcCornerR         = attributes.getNamedItem("cornerRsrc").nodeValue;

        if(attributes.getNamedItem("alignX")!=null)
            this.alignX             = attributes.getNamedItem("alignX").nodeValue;

        if(attributes.getNamedItem("alignY")!=null)
            this.alignY             = attributes.getNamedItem("alignY").nodeValue;

        if(attributes.getNamedItem("x")!=null)
            this.x                  = parseInt(attributes.getNamedItem("x").nodeValue);

        if(attributes.getNamedItem("y")!=null)
            this.y                  = parseInt(attributes.getNamedItem("y").nodeValue);

        if(attributes.getNamedItem("maxWidth")!=null){
            if(attributes.getNamedItem("maxWidth").nodeValue == "WIDTH") this.maxWidth = WIDTH;
            else                                                         this.maxWidth = parseInt(attributes.getNamedItem("maxWidth").nodeValue);
        }

        if(attributes.getNamedItem("maxHeight")!=null){
            if(attributes.getNamedItem("maxHeight").nodeValue == "HEIGHT") this.maxHeight = HEIGHT;
            else                                                           this.maxHeight = parseInt(attributes.getNamedItem("maxHeight").nodeValue);
        }

        if(attributes.getNamedItem("sound")!=null)
            this.sound              = attributes.getNamedItem("sound").nodeValue;

        if(attributes.getNamedItem("font")!=null)
            this.font               = attributes.getNamedItem("font").nodeValue;

        if(attributes.getNamedItem("fontSize")!=null)
            this.fontSize               = attributes.getNamedItem("fontSize").nodeValue;

        if(attributes.getNamedItem("color")!=null)
            this.color                  = attributes.getNamedItem("color").nodeValue;

        this.printValues();
    }

    //========================================================
    // CREATE BITMAP
    //========================================================
    PFThemeItem.prototype.create = function(callback){
        this.theBitmap = new Bitmap(this.basePath + this.src);

        this.theBitmap.x = this.getX();
        this.theBitmap.y = this.getY();

        if (callback)
            this.theBitmap.image.onload = callback;

		return this.theBitmap;
    }

	PFThemeItem.prototype.createMenuBackground = function () {
		this.theBitmap = new Bitmap(this.basePath + this.src);

		var selfTheme = this;

		this.theBitmap.image.onload = function(evt) {

			PFDebug("BACKGROUND THEME");
			PFDebug(evt.target.width);
			PFDebug(selfTheme);

			selfTheme.theBitmap.regX = evt.target.width/2;
			selfTheme.theBitmap.regY = evt.target.height;
			selfTheme.theBitmap.x = selfTheme.getX();
			selfTheme.theBitmap.y = selfTheme.getY();

			PFDebug(selfTheme.getX() +"-"+selfTheme.getY());
		}

		return this.theBitmap;
	}

	PFThemeItem.prototype.createShapeColor = function () {
		var g = new Graphics();
		g.beginFill("#"+this.color);

		g.drawRect(0,0,WIDTH,this.getMaxHeight());

		var s = new Shape(g);
		s.x = 0
		s.y = HEIGHT - this.getMaxHeight();

		return s;
	}

	PFThemeItem.prototype.createCornerL = function () {
		this.theBitmap = new Bitmap(this.basePath + this.srcCornerL);

		PFDebug("------------------- CORNER LEFT SRC -------------------");
		PFDebug(this.src);


		var selfTheme = this;

		this.theBitmap.image.onload = function(evt) {

			selfTheme.theBitmap.regX = evt.target.width/2;
			selfTheme.theBitmap.regY = evt.target.height/2;
			selfTheme.theBitmap.x = 0 + evt.target.width/2;
			selfTheme.theBitmap.y = HEIGHT - evt.target.height/2;

			PFDebug("------------------- CORNER LEFT -------------------");
			PFDebug(selfTheme.theBitmap.x);
			PFDebug(selfTheme.theBitmap.y);
		}

		return this.theBitmap;
	}

	PFThemeItem.prototype.createCornerR = function () {
		this.theBitmap = new Bitmap(this.basePath + this.srcCornerR);

		var selfTheme = this;

		this.theBitmap.image.onload = function(evt) {

			selfTheme.theBitmap.regX = evt.target.width/2;
			selfTheme.theBitmap.regY = evt.target.height/2;
			selfTheme.theBitmap.x = WIDTH - evt.target.width/2;
			selfTheme.theBitmap.y = HEIGHT - evt.target.height/2;
		}

		return this.theBitmap;
	}

    PFThemeItem.prototype.createWithPath = function(path){
        this.theBitmap = new Bitmap(path);

        this.theBitmap.x = this.getX();
        this.theBitmap.y = this.getY();

        return this.theBitmap;
    }

    PFThemeItem.prototype.createText = function(text){

        text = text.replace("\\n","\n");
        var txt = new Text(text, this.getFontSize() + "px " + this.getFont(), "#" + this.getFontColor());
        txt.lineWidth 	= this.getMaxWidth();
        txt.lineHeight  = parseInt(this.getFontSize()) + 10;

        txt.x = this.getX();
        txt.y = this.getY();

        return txt;
    }

    //========================================================
    // SET BITMAP
    //========================================================
    PFThemeItem.prototype.setBitmap = function(pBitmap){
        this.theBitmap = pBitmap;
    }

    //========================================================
    // GET X and Y
    //========================================================
    PFThemeItem.prototype.getX = function(){
        if     (this.alignX == "right")     { return WIDTH - this.x;        }
        else if(this.alignX == "center")    { return WIDTH*0.5 + this.x     }
        else                                { return this.x;                }
    }

    PFThemeItem.prototype.getY = function(){
        if      (this.alignY == "bottom")   { return HEIGHT     - this.y;   }
        else if (this.alignY == "center")   { return HEIGHT*0.5 + this.y    }
        else                                { return this.y;                }
    }

    //========================================================
    // GET Max Width And Height
    //========================================================
    PFThemeItem.prototype.getAlignX     = function(){ return this.alignX;    }
    PFThemeItem.prototype.getAlignY     = function(){ return this.alignY;    }

    PFThemeItem.prototype.getRealX      = function(){ return this.x;    }
    PFThemeItem.prototype.getRealY      = function(){ return this.y;    }

    PFThemeItem.prototype.getMaxWidth   = function(){ return parseInt(this.maxWidth);  }
    PFThemeItem.prototype.getMaxHeight  = function(){ return parseInt(this.maxHeight); }
    PFThemeItem.prototype.scaleToFit    = function(){
        var scaleFactor = getImageScale2(this.theBitmap.image.width,this.theBitmap.image.height, this.maxWidth,this.maxHeight);
        this.theBitmap.scaleX = scaleFactor;
        this.theBitmap.scaleY = scaleFactor;
        return scaleFactor;
    }


    //========================================================
    // GET Font Values
    //========================================================
    PFThemeItem.prototype.getFont         = function(){ return this.font; }
    PFThemeItem.prototype.getFontSize     = function(){ return this.fontSize;    }
    PFThemeItem.prototype.getFontColor    = function(){ return this.color;    }

    //========================================================
    // PRINT VALUES
    //========================================================
    PFThemeItem.prototype.printValues = function(){
        PFDebug(this.basePath + this.src + "-" + this.alignX + "-" + this.alignY + "-" + this.sound + "-" + this.x + "-" + this.y);
    }

    //========================================================
    // GET PATH
    //========================================================
    PFThemeItem.prototype.getPath = function(){

	    if (this.src != "")
	        return this.basePath + this.src;
	    else
	        return "";
    }




/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/PFBaseGame.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFBaseGeneric.js 
//	PFBaseGeneric: Create a generic containers with common 
//	game properties
//*************************************************************
var PFBaseGame = function(){

	//=====================================================
	// VARIABLES
	//=====================================================
	this.containerNou 			= null;
	this.containerPrincipal		= null;

    this.containerBgColor       = null;
    this.containerBg            = null;
	this.containerBase			= null;
	this.highcontainer			= null;
	this.containerNav			= null;
	this.containerInstructions 	= null;

	var end = false;
	var gameListener = null;

	var containerPrincipalLocal;
	var containerNouLocal;

	var game;
	var folder;
	var isGameActive = false;

	var selfBaseGame;

	var instructions = null;
	var endGameVar = null;

	var newXML 		= null;
	var background 	= null;
	var mlMenu		= null;

	var hasBg = true;

	var clickMuteButton;
	var clickUnmuteButton;


	//=====================================================
	// hasBackground
	//=====================================================
	this.hasBackground = hasBackground;
	function hasBackground(has){
		hasBg = has;
	}

	//=====================================================
	// CREATE
	//=====================================================
	this.create = create;
	function create(pListener,pGame,pFolder,pContainerAux,pContainerAnt){

		PFSound.setMuted(false);

		xmlMenu 	= new PFAction();
		xmlMenu.ReadOptions();

		selfBaseGame		 = this;
		gameListener 		 = pListener;
		game 				 = pGame;
		folder 				 = pFolder

		containerNou    	 = pContainerAux;
		containerPrincipal   = pContainerAnt;

		instructions 		= new PFInstructions(this);
		instructions.loadInstructions(folder);

        this.containerBgColor       = new Container();
        this.containerBg            = new Container();
		this.containerBase 			= new Container();
		this.highcontainer 			= new Container();
		this.containerNav 			= new Container();
		this.containerInstructions 	= new Container();

		newXML	= new PFXMLParser;
		newXML.load(game,folder);

        containerPrincipal.addChild(this.containerBgColor);
        containerPrincipal.addChild(this.containerBg);
		containerPrincipal.addChild(this.containerBase);
		containerPrincipal.addChild(this.highcontainer);
		containerPrincipal.addChild(this.containerNav);
		containerPrincipal.addChild(this.containerInstructions);

		addLoading();

		var bgSrc = newXML.background.getSrc();
		if(bgSrc.charAt( bgSrc.length-1 ) != "/"){
			background = new Bitmap(bgSrc);
		}

		Tween.get(containerPrincipal).to({x:0},1000);

		var preload = new PreloadJS();
        preload.onComplete = onResourcesLoaded;
        preload.loadManifest(fixPreloadManifest(buildPreloadManifest()));

        communicationLayer.onActivityStarted(game,folder,0);
	}

	//=====================================================
	// BUILD PRELOAD MANIFEST
	//=====================================================
	function buildPreloadManifest(){
		var preloadManifest = new Array();

		if (themeXML.homeBackThemeItemImg != null)
			preloadManifest.push("./"+GAME_FOLDER+"/theme/images/menu/" + themeXML.homeBackThemeItemImg.src);
		if (themeXML.homeBackCornerLItem != null)
			preloadManifest.push("./"+GAME_FOLDER+"/theme/images/menu/" + themeXML.homeBackCornerLItem.src);
		if (themeXML.homeBackCornerRItem != null)
			preloadManifest.push("./"+GAME_FOLDER+"/theme/images/menu/" + themeXML.homeBackCornerRItem.src);

    	preloadManifest.push("./"+GAME_FOLDER+"/theme/images/menu/" + themeXML.homeThemeItem.src);
		preloadManifest.push("./"+GAME_FOLDER+"/theme/images/menu/" + themeXML.nextThemeItem.src);
		preloadManifest.push("./"+GAME_FOLDER+"/theme/images/menu/" + themeXML.prevThemeItem.src);

		if (typeof(gameListener.hasMuteButton) === "function" && !gameListener.hasMuteButton())
		{
			themeXML.muteThemeItem = null;
			themeXML.unmuteThemeItem = null;
		}

		if (themeXML.muteThemeItem != null)
			preloadManifest.push("./"+GAME_FOLDER+"/theme/images/menu/" + themeXML.muteThemeItem.src);
		if (themeXML.unmuteThemeItem != null)
			preloadManifest.push("./"+GAME_FOLDER+"/theme/images/menu/" + themeXML.unmuteThemeItem.src);

		var bgSrc = newXML.background.getSrc();
		if(bgSrc.charAt( bgSrc.length-1 ) != "/"){
			preloadManifest.push(bgSrc);
		}

		return instructions.buildPreloadManifest(gameListener.buildPreloadManifest(preloadManifest,game),game);
	}

	//=====================================================
	// ON RESOURCES LOADED
	//=====================================================
	function onResourcesLoaded(){
		selfBaseGame.addMenu();
		selfBaseGame.drawBackgroundColor();
		if(hasBg){
			var bgSrc = newXML.background.getSrc();
			if(bgSrc.charAt( bgSrc.length-1 ) != "/"){
				selfBaseGame.drawBackground();
			}
		}

		gameListener.onShowGame();
		instructions.hasStart = gameListener.getHasStart();
		if(!instructions.show(selfBaseGame.containerInstructions)){
			onStartGame();
		}
	}

	//=====================================================
	// ADD MENU
	//=====================================================
	this.addMenu = addMenu;
	function addMenu(){

        var self = this;

		if (themeXML.homeBackThemeItemImg != null) {
			var homeBackground = themeXML.homeBackThemeItemImg.createMenuBackground();
			this.containerNav.addChild(homeBackground);
		}

		if (themeXML.homeBackThemeItemColor != null) {
			var homeShapeColor = themeXML.homeBackThemeItemColor.createShapeColor();
			this.containerNav.addChild(homeShapeColor);
		}

		if (themeXML.homeBackCornerLItem != null) {
			var cornerL = themeXML.homeBackCornerLItem.createCornerL();
			this.containerNav.addChild(cornerL);
		}

		if (themeXML.homeBackCornerRItem != null) {
			var cornerR = themeXML.homeBackCornerRItem.createCornerR();
			this.containerNav.addChild(cornerR);
		}

		if (themeXML.unmuteThemeItem != null) {
			var unmuteButton = themeXML.unmuteThemeItem.create(function() {

				clickUnmuteButton = addCustomOnClick({item:unmuteButton,c:self.containerNav},function() {

					if (!PFSound.isMuted)
						return;

					PFDebug("UnMute Clicked: " + PFSound.isMuted);

					PFSound.setMuted(false);

					clickMuteButton.visible = true;
					clickUnmuteButton.visible = false;
					clickMuteButton.item.visible = true;
					clickUnmuteButton.item.visible = false;
				});
				self.containerNav.addChild(unmuteButton);
				clickUnmuteButton.item.visible = false;
				clickUnmuteButton.visible = false;
			});
		}

		if (themeXML.muteThemeItem != null) {
			var muteButton = themeXML.muteThemeItem.create(function() {

				clickMuteButton = addCustomOnClick({item:muteButton,c:self.containerNav},function() {

					if (PFSound.isMuted)
						return;

					PFDebug("Mute Clicked: " + PFSound.isMuted);
					PFSound.setMuted(true);

					clickMuteButton.visible = false;
					clickUnmuteButton.visible = true;
					clickMuteButton.item.visible = false;
					clickUnmuteButton.item.visible = true;
				});
				self.containerNav.addChild(muteButton);
			});
		}

		if (xmlMenu.getMenuActive() != "false" || (isExternal && !gameHasCover)){
            var homeBt = themeXML.homeThemeItem.create(function() {
                addCustomOnClick({item:homeBt,c:self.containerNav},goHome);
            });
            this.containerNav.addChild(homeBt);
		}

		if(xmlMenu.getMenuActive() == "false"){
            if(true/*gameManager.currentGame() != gameManager.gameList().length*/){
                var nextGameButton = themeXML.nextThemeItem.create(function() {
                    addCustomOnClick({item:nextGameButton,c:self.containerNav},goNextGame);
                });
                this.containerNav.addChild(nextGameButton);
            }

            if(gameManager.currentGame() != 0){
                var backGameButton = themeXML.prevThemeItem.create(function() {
                    addCustomOnClick({item:backGameButton,c:self.containerNav},goBackGame);
                });
                this.containerNav.addChild(backGameButton);
            }
		}
		gameListener.onAddMenu();

		removeLoading();
	}

	//=====================================================
	// START GAME
	//=====================================================
	this.onStartGame = onStartGame;
	function onStartGame(){
		isGameActive = true;
		gameListener.onStartGame();
	}

	//=====================================================
	// END GAME
	//=====================================================
	this.endGame 		= endGame;
	this.endGameResult 	= endGameResult;

	function endGame(pEndGame){

        loadScript("./"+GAME_FOLDER+"/"+folder+"/end_game.js",function() {
            var endInstructions = new PFEndInstruction(selfBaseGame);
            endInstructions.loadInstructions(folder);
            endInstructions.setListener(selfBaseGame);
	        setTimeout(function(){
		        endInstructions.show(selfBaseGame.containerInstructions);
	        },1000);
        });

        //communicationLayer.onActivityEnded(true);

		/*isGameActive = false;
		endGameVar = new PFEndGame();
		endGameVar.show(self,pEndGame,folder,this.containerNav);*/
	}

	function endGameResult(xml, ok, total){
		isGameActive = false;
		endGameVar = new PFEndGameResult();
		endGameVar.show(selfBaseGame,game,folder,ok,total,this.containerNav);
	}

    //=====================================================
    // DRAW BACKGROUND COLOR
    //=====================================================
    this.drawBackgroundColor = drawBackgroundColor;
    function drawBackgroundColor(){
        var rgb = newXML.backgroundRgb;
        var g = new Graphics();
        g.beginFill(Graphics.getRGB(rgb[0],rgb[1],rgb[2]));
        g.drawRect(0,0,WIDTH,HEIGHT);
        var s = new Shape(g);
        s.x = 0;
        s.y = 0;
        this.containerBgColor.addChild(s);
        //this.containerBg.addChild(s);
    }

	//=====================================================
	// DRAW BACKGROUND
	//=====================================================
	this.drawBackground = drawBackground;
	function drawBackground(){

        var background = new Bitmap(newXML.background.getSrc());

        background.image.onload = function(evt){
            scaleWithType(background,newXML.background.getScaleType(),WIDTH,HEIGHT);

            background.x = WIDTH/2 - background.image.width*background.scaleX / 2;
            background.y = HEIGHT/2 - background.image.height*background.scaleY / 2;
        }
        this.containerBg.addChild(background);
	}
	//=====================================================
	// ON END GAME SCREEN FINISHED : Listener called when PFEndGame ends showing the screen
	//=====================================================
	this.onEndGameScreenFinished = onEndGameScreenFinished;
	function onEndGameScreenFinished(){
        communicationLayer.onActivityEnded(true);
		if(typeNavigation != 0 || xmlMenu.getMenuActive() == "false"){
			end=false;
			goNextGame();
		}
		else{
			goHome(true);
		}
	}

	//=====================================================
	// GENERIC Controls
	//=====================================================
	function changeGame(){
		clearSounds();
		containerNou.removeAllChildren();
		stage.removeChild(containerNou);
		stage.addChild(containerNou);
	}

	function goBackGame(){
        communicationLayer.onActivityEnded(false);
		if(!gameManager.isFirstGame()){
			if(end==false){
				Tween.get(containerPrincipal).to({x:1024},1000);
				setTimeout(function(){
					containerNou.removeAllChildren();
				},1000);
				changeGame();
				containerNou.x=-1024;
				gameManager.playGame(gameManager.backGame(),1,containerPrincipal,containerNou);
			}
		}else{
			goToPortada();
		}
	}
	function goNextGame(){
        //PFTODO: Call the activity ended if next button pressed
        communicationLayer.onActivityEnded(false);
		var ng = gameManager.nextGame();

		if(xmlMenu.getMenuActive() == "false"){
			if(end==false){
				Tween.get(containerPrincipal).to({x:-1024},1000);
				setTimeout(function(){
					containerNou.removeAllChildren();
				},1000);

				if (ng == 0)
					goToPortada();
				else {
					changeGame();
					containerNou.x=1024;
					gameManager.playGame(ng,2,containerPrincipal,containerNou);
				}
			}
		}else{
			if(ng == 0 && typeNavigation == 1){
				goToPortada();
			}else{
				if(end==false){
					Tween.get(containerPrincipal).to({x:-1024},1000);
					setTimeout(function(){
						containerNou.removeAllChildren();
					},1000);
					changeGame();
					containerNou.x=1024;
					gameManager.playGame(ng,2,containerPrincipal,containerNou);
				}
			}
		}
	}
	//=====================================================
	// GO HOME
	//=====================================================
	function goHome(pressedHomeButton){		//Main Menu
        communicationLayer.onActivityEnded(false);
        PFSound.stopAll();

		addLoading();

		cleanGame();

		if (xmlMenu.getMenuActive() == "false")
        {
	        if (isExternal && !gameHasCover) {
		        goBackToParent();
	        }
	        else
	        {
		        goToPortada();
	        }
        }
        else
        {
            if(typeNavigation == 0){
                if(end==false){
                    menu.load();
                    menu.show();
                }
            }else{
                goToPortada();
            }
        }
	}
	//=====================================================
	// GOT TO PORTADA
	//=====================================================
	function goToPortada(){
		cleanGame();
		gameManager.showPortada(containerPrincipal);
	}

    //=====================================================
    // FIT TI SCREEN
    //=====================================================
    this.fitToScreen = fitToScreen;
    function fitToScreen(useScreenWidth){
        var scale = getImageScale2(1024,768,WIDTH,HEIGHT);

        if(useScreenWidth){
            this.containerBase.regX   = WIDTH*0.5;
            this.containerBase.regY   = HEIGHT*0.5;
        }
        else{
            this.containerBase.regX   = 1024*0.5;
            this.containerBase.regY   = 768*0.5;
        }
        this.containerBase.scaleX = scale;
        this.containerBase.scaleY = scale;

        this.containerBase.x = WIDTH*0.5;
        this.containerBase.y = HEIGHT*0.5;
    }

	//=====================================================
	// CLEAN GAME: delete all game showed
	//=====================================================
	function cleanGame(){
        clearSounds();
        containerPrincipal.removeAllChildren();
		containerNou.removeAllChildren();
		stage.removeChild(containerPrincipal);
		stage.removeChild(containerNou);

		if (typeof(gameListener.cleanGame) === "function")
			gameListener.cleanGame();
	}

	//=====================================================
	// CLEAR SOUNDS
	//=====================================================
    function clearSounds(){
	    PFSound.stopAll();
    	if(endGameVar 	!= null)	endGameVar	.onClearSounds();
    	if(gameListener != null)	gameListener.onClearSounds();
    }

	this.checkItemsForSound = checkItemsForSound;
	function checkItemsForSound(items) {

		var hasSound = false;

		for (var i=0; i<items.length; i++) {
			if(items[i] && items[i].getSound() != ""){
				hasSound = true;
				break;
			}
		}

		return hasSound;
	}

	//=====================================================
	// GETS
	//=====================================================
    this.getGame   		= function()		{ return game	};
    this.getFolder 		= function()	  	{ return folder	};

    this.isGameActive  	= function() 	 	{ return isGameActive; }
    this.setGameActive 	= function(value) 	{
	    console.log("Active: " + value);
	    console.log(value);
	    isGameActive = value;
    }

    this.showNav		= function() 		{ containerPrincipal.addChild(this.containerNav); 		}
    this.hideNav		= function() 		{ containerPrincipal.removeChild(this.containerNav); 	}

}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/PFInstructions.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFInstructions.js 
//	PFInstructions: Create and show differents kinds of  
// 	instructions on start game 
//*************************************************************
var numberIterations;

var PFInstructions = function(listener){

	//=====================================================
	// VARIABLES
	//=====================================================	
    this.iterations;
	this.image 	= "";
	this.text 	= "";
	this.sound;
    this.baseGame = listener;

	this.folder;

    this.xmlhttp;
    this.xmlDoc;
    this.counter = 0;

	this.defTexts 	= "texts";
    this.defText 	= "text";
    this.defSounds 	= "sounds";
    this.defSound 	= "sound";
    this.defImage 	= "image";
    this.soundID     = -1;

	this.hasStart = false;
    this.listener;
    this.aText;

}

    //=======================================================================
    // GET XML PATH
    //=======================================================================
    PFInstructions.prototype.getXMLPath = function(folder){
        return _game_xml;
    }

    PFInstructions.prototype.getInstructionKind = function(){
        return "initialInstruction";
    }

    PFInstructions.prototype.getThemeFolder = function(){
        return "./"+GAME_FOLDER+"/theme/images/instruction/";
    }

	//=======================================================================			
	// loadInstructions: load the instructions of a game
	//=======================================================================
    PFInstructions.prototype.loadInstructions = function(folder){

	    themeXML.getHasInstructionStart(this.getInstructionKind());
	    if (themeXML.instructionIsStart)
	    {
		    PFDebug("Load Instructins: instruction start in Theme set to true");

		    return;
	    }

        xmlDoc = parseScriptToXML(this.getXMLPath(null));

		this.iterations  = xmlDoc.getElementsByTagName("instruction");
        numberIterations = this.iterations.length;
		if(typeof(xmlDoc.getElementsByTagName("instruction")[0]) != 'undefined'){
			var iteration = xmlDoc.getElementsByTagName("instruction")[0];
			//----------------------------------------------
			//We have instructions
			//----------------------------------------------			
			//----------------------------------------------
			//GET TEXT
			//----------------------------------------------
			if(typeof(iteration.getElementsByTagName(this.defTexts)[0]) != 'undefined'){
				var texts = iteration.getElementsByTagName(this.defTexts)[0];
				if(typeof(texts.getElementsByTagName(this.defText)[0]) != 'undefined'){
					//text = texts.getElementsByTagName("text")[0].attributes.getNamedItem('text').nodeValue;
					var j = this.SelectTextXML(texts.getElementsByTagName(this.defText));
					if(j != -1){						
						if(typeof(iteration.getElementsByTagName(this.defText)[j]) != 'undefined'){
							this.text = texts.getElementsByTagName(this.defText)[j].attributes.getNamedItem('text').nodeValue;

                            this.counter = this.counter + 1;
						}
					}else{
						this.text = "";
					}
				}
			}

            //----------------------------------------------
            //GET TEXT (NEW)
            //----------------------------------------------
            if(typeof(iteration.getElementsByTagName(this.defText)[0]) != 'undefined'){
                if(iteration.getElementsByTagName(this.defText)[0].attributes.getNamedItem("textId") != null && typeof(iteration.getElementsByTagName(this.defText)[0].attributes.getNamedItem("textId")) != 'undefined'){
                    this.text = iteration.getElementsByTagName(this.defText)[0].attributes.getNamedItem("textId").nodeValue;
                    this.text = langManager.getText(this.text);
                }
            }
			//----------------------------------------------
			//GET SOUND
			//----------------------------------------------
			if(typeof(iteration.getElementsByTagName(this.defSounds)[0]) != 'undefined'){
				var sounds = iteration.getElementsByTagName(this.defSounds)[0];
				if(typeof(sounds.getElementsByTagName(this.defSound)[0]) != 'undefined'){
					var j = this.SelectTextXML(sounds.getElementsByTagName(this.defSound));
					if(typeof(iteration.getElementsByTagName(this.defSound)[j]) != 'undefined'){
						this.sound = sounds.getElementsByTagName(this.defSound)[j].attributes.getNamedItem('src').nodeValue;
                        this.sound = "./"+GAME_FOLDER+"/"+folder+"/sounds/" + lang + "/" +this.sound;
                        this.counter = this.counter + 10;
					}					
				}
			}
			//----------------------------------------------
			//GET IMAGE
			//----------------------------------------------	
			if(typeof(iteration.getElementsByTagName(this.defImage)[0]) != 'undefined'){
				/*
				if (imageFromTheme != "") {
					this.image = "./"+GAME_FOLDER+"/theme/images/instruction/"+imageFromTheme;
				}
				else */
				{
					this.image = iteration.getElementsByTagName(this.defImage)[0].attributes.getNamedItem('src').nodeValue;
					this.image = "./"+GAME_FOLDER+"/"+folder+"/images/"+this.image;
				}

                this.counter = this.counter + 100;
			}
		}
	}
	
	//=====================================================
	// BUILD PRELOAD MANIFEST
	//=====================================================
    PFInstructions.prototype.buildPreloadManifest = function(itemsManifest,game){

		if(this.image !== undefined && this.image != ""){
			itemsManifest.push(this.image);
		}

	    if(this.sound !== undefined && this.sound != ""){
		    itemsManifest.push(this.sound);
	    }

		itemsManifest.push("./"+GAME_FOLDER+"/theme/images/instruction/bg_popup.png");
		itemsManifest.push("./"+GAME_FOLDER+"/theme/images/instruction/instruction_arrow.png");
		itemsManifest.push("./"+GAME_FOLDER+"/theme/images/instruction/bt_sound.png");
        itemsManifest.push("./"+GAME_FOLDER+"/theme/images/instruction/bt_sound_big.png");

		return itemsManifest;
	}
	
	//=====================================================
	// SHOW INSTRUCTIONS
	//=====================================================
    PFInstructions.prototype.show = function(container){
		//BLACK BACKGROUND

		//if(this.iterations.length > 0) {

	    var themeFolder = this.getThemeFolder();

	    if (themeXML.instructionIsStart && this.getInstructionKind() != "interactiveImages") {

		    PFDebug("Instruction Of Kind Start and Game Has Start: " + this.hasStart);

		    themeXML.getInstructionInfo(this.getInstructionKind(),"onlyImage",themeFolder);

		    if (this.hasStart)
		        this.showStartInstructions(container);

		    return this.hasStart;
	    }

        if(numberIterations > 0) {

			var g = new Graphics();
			g.beginFill(Graphics.getRGB(0,0,0));
			g.drawRect(0,0,WIDTH, HEIGHT);

	        container.alpha = 0;
			var s 	= new Shape(g);
			s.alpha = 0.5;
			container.addChild(s);

            if      (this.counter == 111)    { themeXML.getInstructionInfo(this.getInstructionKind(),"ImageSoundAndText",themeFolder); }
            else if (this.counter == 110)    { themeXML.getInstructionInfo(this.getInstructionKind(),"ImageAndSound",themeFolder);     }
            else if (this.counter == 101)    { themeXML.getInstructionInfo(this.getInstructionKind(),"ImageAndText",themeFolder);      }
            else if (this.counter == 100)    { themeXML.getInstructionInfo(this.getInstructionKind(),"onlyImage",themeFolder);         }
            else if (this.counter == 11)     { themeXML.getInstructionInfo(this.getInstructionKind(),"SoundAndText",themeFolder);      }
            else if (this.counter == 10)     { themeXML.getInstructionInfo(this.getInstructionKind(),"onlySound",themeFolder);         }
            else if (this.counter == 1)      { themeXML.getInstructionInfo(this.getInstructionKind(),"onlyText",themeFolder);          }
            else                             { themeXML.getInstructionInfo(this.getInstructionKind(),"onlyImage",themeFolder);         }

            //var bgPopUpBitmap 	= new Bitmap("game/theme/images/instruction/" + themeXML.instBackgroundSrc);
            var bgPopUpBitmap 	= themeXML.instructionBackgroundThemeItem.create();
			//bgPopUpBitmap.y 	= themeXML.instBackgroundY;

			bgPopUpBitmap.image.container 		= container;
			bgPopUpBitmap.image.s 				= s;
			bgPopUpBitmap.image.image 			= this.image;
			bgPopUpBitmap.image.text 			= this.text;
			bgPopUpBitmap.image.sound 			= this.sound;
			bgPopUpBitmap.image.bgPopUpBitmap 	= bgPopUpBitmap;
			bgPopUpBitmap.image.folder 			= this.folder;
			bgPopUpBitmap.image.theClass        = this;
            bgPopUpBitmap.image.onload 			= this.showPopupInstructions;

			return true;
		} else {
			return false;
		}
	}

    //=====================================================
    // SHOW POPUP INSTRUCTIONS
    //=====================================================
	PFInstructions.prototype.showStartInstructions = function(container) {
		var selfCaller = this;

		if (themeXML.instructionArrowThemeItem != null){
			var fletxaPopup		    = themeXML.instructionArrowThemeItem.create(function() {
				fletxaPopup.container 	= container;
				fletxaPopup.theClass    = selfCaller;

				var fletxaShape = addCustomOnClick({item:fletxaPopup,c:container},selfCaller.onNext);
				fletxaShape.theClass = selfCaller;
				container.addChild(fletxaPopup);
			});
		}
	}

    PFInstructions.prototype.showPopupInstructions = function(evt) {

		var container 		= evt.target.container;
		var s 				= evt.target.s;
		var image 			= evt.target.image;
		var text 			= evt.target.text;
		var sound 			= evt.target.sound;
		var bgPopUpBitmap 	= evt.target.bgPopUpBitmap;
		var folder 			= evt.target.folder;
        var theClass        = evt.target.theClass;

        if(image.charAt(image.length-1) == "/"){
            image = "";
        }

	    if (themeXML.instructionCloseThemeItem != null){
		    var closePopup		    = themeXML.instructionCloseThemeItem.create(function() {
			    closePopup.container 	= container;
			    closePopup.theClass    = theClass;

			    var closeShape = addCustomOnClick({item:closePopup,c:container},theClass.onClose);
			    closeShape.theClass = theClass;
			    //fletxaPopup.onPress 	= theClass.onNext;
		    });

	    }

        if (themeXML.instructionArrowThemeItem != null){
            var fletxaPopup		    = themeXML.instructionArrowThemeItem.create(function() {
                fletxaPopup.container 	= container;
                fletxaPopup.theClass    = theClass;

                var fletxaShape = addCustomOnClick({item:fletxaPopup,c:container},theClass.onNext);
	            fletxaShape.theClass = theClass;
                //fletxaPopup.onPress 	= theClass.onNext;
            });

        }

        if (themeXML.instructionArrowPrevThemeItem != null){
            var fletxaPrevPopup		= themeXML.instructionArrowPrevThemeItem.create(function() {
                fletxaPrevPopup.container = container;
                fletxaPrevPopup.theClass= theClass;

                var fletxaShape = addCustomOnClick({item:fletxaPrevPopup,c:container},theClass.onPrev);
	            fletxaShape.theClass = theClass;
                //fletxaPrevPopup.onPress = theClass.onPrev;
            });

        }

        if (themeXML.instructionSoundThemeItem != null)
            var soundPopup		= themeXML.instructionSoundThemeItem.create(null);

        soundID = Math.floor(Math.random()*100000000);

        //--------
        // IMAGE AND TEXT (And sound)
        //-------
    	if(typeof(image) != 'undefined' && image != "" && typeof(text) != 'undefined' && text != ""){
            PFDebug("Instruction 1:" + image);
            theClass.setBgInstruction(bgPopUpBitmap,container);

			var imgPopup    = new Bitmap(image);
			imgPopup.image.onload = function() {
				themeXML.instructionImageThemeItem.setBitmap(imgPopup);
                themeXML.instructionImageThemeItem.scaleToFit();
                theClass.addInstructionItem(imgPopup, themeXML.instructionImageThemeItem,bgPopUpBitmap,container);
			}

            var txt = themeXML.instructionTextThemeItem.createText(text);

            if(typeof(sound) != 'undefined' && sound != ""){
				PFSound.load('soInstructions'+soundID,sound);
                PFSound.play('soInstructions'+soundID);
				soundPopup.image.onload = function(){

					//soundPopup.onPress	= theClass.repeatPopupSound;
                    theClass.addInstructionItem(soundPopup, themeXML.instructionSoundThemeItem,bgPopUpBitmap,container);
					addCustomOnClick({item:soundPopup,c:container},theClass.repeatPopupSound);
				}
			}
            theClass.addInstructionItem(fletxaPopup,        themeXML.instructionArrowThemeItem,bgPopUpBitmap,container);
            theClass.addInstructionItem(fletxaPrevPopup,    themeXML.instructionArrowPrevThemeItem,bgPopUpBitmap,container);
            theClass.addInstructionItem(txt,                themeXML.instructionTextThemeItem,bgPopUpBitmap,container);
		}

        //--------
        // TEXT (And sound)
        //-------
		else if((typeof(image) == 'undefined' || image == "") && (typeof(text) != 'undefined' && text != "")){
            PFDebug("Instruction 2");
            theClass.setBgInstruction(bgPopUpBitmap,container);

            var txt = themeXML.instructionTextThemeItem.createText(text);

			if(typeof(sound) != 'undefined' && sound != ""){
				PFSound.load('soInstructions'+soundID,sound);
				PFSound.play('soInstructions'+soundID);
				soundPopup.image.onload = function(){
					//soundPopup.onPress 	= theClass.repeatPopupSound;
					theClass.addInstructionItem(soundPopup, themeXML.instructionSoundThemeItem,bgPopUpBitmap,container);
                    addCustomOnClick({item:soundPopup,c:container},theClass.repeatPopupSound);
					//container.addChild(soundPopup);
				}

			}

            theClass.addInstructionItem(fletxaPopup,        themeXML.instructionArrowThemeItem,bgPopUpBitmap,container);
            theClass.addInstructionItem(fletxaPrevPopup,    themeXML.instructionArrowPrevThemeItem,bgPopUpBitmap,container);
            theClass.addInstructionItem(txt,                themeXML.instructionTextThemeItem,bgPopUpBitmap,container);
        }

        //--------
        // IMAGE (and sound)
        //-------
		else if((typeof(text) == 'undefined' || text == "") && (typeof(image) != 'undefined' && image != "")){
            PFDebug("Instruction 3");
            theClass.setBgInstruction(bgPopUpBitmap,container);
            if(!themeXML.instructionVisible){
                bgPopUpBitmap.alpha = 0;
            }

			var imgPopup = new Bitmap(image);
            imgPopup.theClass   = theClass;
			imgPopup.image.onload = function(){

                themeXML.instructionImageThemeItem.setBitmap(imgPopup);
                themeXML.instructionImageThemeItem.scaleToFit();
                theClass.addInstructionItem(imgPopup, themeXML.instructionImageThemeItem,bgPopUpBitmap,container);
                var imageNext = addCustomOnClick({item:imgPopup,c:container},function(evt) {
	                theClass.onNext(evt);
                });

				imageNext.theClass = theClass;

                //imgPopup.onPress    = theClass.onNext;
			}
            imgPopup.container 	= container;
			
			if(typeof(sound) != 'undefined' && sound != ""){

				PFSound.load('soInstructions'+soundID,sound);
				PFSound.play('soInstructions'+soundID);
				soundPopup.image.onload = function(){
					//soundPopup.onPress	= theClass.repeatPopupSound;
                    theClass.addInstructionItem(soundPopup, themeXML.instructionSoundThemeItem,bgPopUpBitmap,container);
					addCustomOnClick({item:soundPopup,c:container},theClass.repeatPopupSound);
				}
			}
            if(themeXML.instructionVisible){
                theClass.addInstructionItem(fletxaPopup,        themeXML.instructionArrowThemeItem,bgPopUpBitmap,container);
                theClass.addInstructionItem(fletxaPrevPopup,      themeXML.instructionArrowPrevThemeItem,bgPopUpBitmap,container);
            }
		}

        //--------
        // SOUND
        //-------
		else if((typeof(text) == 'undefined' || text == "")  && (typeof(image) == 'undefined' || image == "")) {
            PFDebug("Instruction 4");
            PFDebug("Is visible:" + themeXML.instructionVisible);

			if(typeof(sound) != 'undefined' && sound != ""){

                if(themeXML.instructionVisible){
                   theClass.setBgInstruction(bgPopUpBitmap,container);   //Not show background
                }
                else{
                    this.theClass.onNext(evt,true);            //To start the activity!
                }

				PFSound.load('soInstructions'+soundID,sound);
				PFSound.play('soInstructions'+soundID);
                if(themeXML.instructionVisible){
				    soundPopup.image.onload = function(){ //Don't show sound image
					    //soundPopup.onPress 	= theClass.repeatPopupSound;
                        theClass.addInstructionItem(soundPopup, themeXML.instructionSoundThemeItem,bgPopUpBitmap,container);
					    addCustomOnClick({item:soundPopup,c:container},theClass.repeatPopupSound);
				    }
                }
                else{
                    container.removeChild(s);   // Don't show the black curtain
                }

			}else{
				container.removeChild(s);
				return false;
			}
            if(themeXML.instructionVisible){
                theClass.addInstructionItem(fletxaPopup,        themeXML.instructionArrowThemeItem,bgPopUpBitmap,container);
                theClass.addInstructionItem(fletxaPrevPopup,    themeXML.instructionArrowPrevThemeItem,bgPopUpBitmap,container);
            }
		}

	    if (themeXML.instructionCloseThemeItem != null) {
		    theClass.addInstructionItem(closePopup,         themeXML.instructionCloseThemeItem,bgPopUpBitmap,container);
	    }


        Tween.get(container).to({alpha:1},600).call(function(){
        });
	}
	//=====================================================
	// ON NEXT INSTRUCTIONS
	//=====================================================
    PFInstructions.prototype.onNext = function(evt,shouldPlaySound){

	    if (evt.target.item)
	        target = evt.target.item;
	    else
		    target = evt.target;

		Tween.get(target.container).to({alpha:0},600).call(function(){
            target.container.removeAllChildren();
			target.theClass.onInstructionsClosed(shouldPlaySound);
		});
	}

    //=====================================================
    // ON PREV INSTRUCTIONS
    //=====================================================
    PFInstructions.prototype.onPrev = function(evt){

        PFSound.stop('soInstructions'+soundID);
        PFSound.unload('soInstructions'+soundID);

	    if (evt.target.item)
		    target = evt.target.item;
	    else
		    target = evt.target;

        Tween.get(target.container).to({alpha:0},600).call(function(){
            target.container.removeAllChildren();
            target.theClass.onInstructionsClosed();
        });
    }

    //=====================================================
    // ON INSTRUCTION CLOSED
    //=====================================================
    PFInstructions.prototype.onInstructionsClosed = function(shouldPlaySound){

	    if (!shouldPlaySound && this.sound != null) {
		    PFSound.stop('soInstructions'+soundID);
		    PFSound.unload('soInstructions'+soundID);
	    }

	    this.baseGame.onStartGame();
    }

	//=====================================================
	// REPEAT POPUP SOUND
	//=====================================================
    PFInstructions.prototype.repeatPopupSound = function(){
		PFSound.play('soInstructions'+soundID);
	}
	
	//=====================================================
	// SelectTextXML: Select text in correct language
	//=====================================================
    PFInstructions.prototype.SelectTextXML = function(tagText){
		var j=0;
		if(tagText[j].attributes.getNamedItem("lang").nodeValue==lang){
			return j;
		}
		
		while(tagText[j].attributes.getNamedItem("lang").nodeValue!=lang){
			if(tagText[j].attributes.getNamedItem("lang").nodeValue==lang){
				return j;
			}
			j++;
			if(j >= tagText.length){
				break;
			}
			if(tagText[j].attributes.getNamedItem("lang").nodeValue==lang){
				return j;
			}			
		}		
		return -1;			
	}
	
	//=====================================================
	// SETS
	//=====================================================
    PFInstructions.prototype.setBgInstruction = function(bg, container){
        container.addChild(bg);
        bg.x = bg.x - bg.image.width/2;
        bg.y = bg.y - bg.image.height/2;
	}

    //=====================================================
    // ADD ARROW
    //=====================================================
    PFInstructions.prototype.addInstructionItem = function(item,themeItem,bg,container){
        if(themeItem != null){
            if(themeItem.getAlignX() == "right"){
                item.x = bg.x + bg.image.width - themeItem.getRealX();
            }
            else if(themeItem.getAlignX() == "left"){
                item.x = bg.x + themeItem.getRealX();
            }
            else if(themeItem.getAlignX() == "center"){
                item.x = bg.x + bg.image.width/2 + themeItem.getRealX() - (item.image.width/2)*item.scaleX;
            }

            if(themeItem.getAlignY() == "bottom"){
                item.y = bg.y + bg.image.height - themeItem.getRealY();
            }
            else if(themeItem.getAlignY() == "top"){
                item.y = bg.y + themeItem.getRealY();
            }
            else if(themeItem.getAlignY() == "center"){
                item.y = bg.y + bg.image.height/2 + themeItem.getRealY() - (item.image.height/2)*item.scaleY;
            }
            container.addChild(item);
        }
    }

	//=====================================================
	// GETS
	//=====================================================
	/*this.getImage 	= getImage;
	this.getText 	= getText;
	this.getSound 	= getSound;*/

	//Functions
    PFInstructions.prototype.getImage   = function() {	return this.image;	}
    PFInstructions.prototype.getText    = function() {	return this.text;	}
    PFInstructions.prototype.getSound   = function() {	return this.sound;	}

    //=====================================================
    // SET LISTENER
    //=====================================================
    PFInstructions.prototype.setListener = function(pListener) {
        this.listener = pListener;
    }


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/PFEndInstruction.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


var PFEndInstruction = PFInstructions.extend(function(){
    this.superc.call(this);
});

    //=======================================================================
    // OVERRIDING PARENT FUNCTIONS
    //=======================================================================
    PFEndInstruction.prototype.getXMLPath = function(folder){
        return _end_game_xml;
    }

    PFEndInstruction.prototype.getInstructionKind = function(){
        return "endInstruction";
    }

    PFEndInstruction.prototype.onNext = function(evt){
        PFSound.stop('soInstructions'+soundID);
        PFSound.unload('soInstructions'+soundID);

        if(evt.target.theClass.listener!=null)
            evt.target.theClass.listener.onEndGameScreenFinished();
    }


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/PFEndGame.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFEndGame.js 
//	PFEndGame: Create and show final game screen 
//*************************************************************
var PFEndGame = function(){

	//=====================================================
	// VARIABLES
	//=====================================================	
	var endGameListener;
	var container;
	
	PFSound.load('end',"./"+GAME_FOLDER+"/sounds/ok.mp3");

	//=====================================================
	// SHOW 
	//=====================================================
	this.show = show;
	function show(listener, pEndGame , folder, baseContainer){		
		endGameListener = listener;
		container = new Container();		
		
		//Black cuirtain		
		var g = new Graphics();
		g.beginFill(Graphics.getRGB(0,0,0));
		g.drawRect(0,0,1024, 768); 
		var s = new Shape(g);
		s.alpha = 0.5;
		
		container.addChild(s);		
		container.alpha = 0;		
		
		var endScreen = new Bitmap(pEndGame.getSrc());
		endScreen.image.onload = function(){
			
			offsetx		= endScreen.image.width/2;
			offsety		= endScreen.image.height/2;		
			endScreen.x = 512 		- offsetx;
			endScreen.y = 768*0.5 	- offsety;
			
			container.addChild(endScreen);
			
			baseContainer.addChild(container);	
			Tween.get(container).wait(1200).to({alpha:1},1000).wait(2000).to({alpha:0},1000).call(function(){
				onEndGameScreenFinished(); 
			});			
			PFSound.play('end');
		}
	}
	
		
	//=====================================================
	// SHOW 
	//=====================================================
	this.onClearSounds = onClearSounds;
	function onClearSounds(){
		PFSound.unload('end');
	}
	
	//=====================================================
	// ON END GAME SCREEN FINISHED 
	//=====================================================
	function onEndGameScreenFinished(){
		endGameListener.onEndGameScreenFinished();
	}
	
}


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/PFEndGameResult.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFEndGameResult.js 
//	PFEndGameResult: Create and show popUp with resuts 
// 	of end game screen 
//*************************************************************
var PFEndGameResult = function(){

	//=====================================================
	// VARIABLES
	//=====================================================	
	var endGameListener;
	
	//=====================================================
	// ON END GAME SCREEN FINISHED 
	//=====================================================
	this.show = show;
	function show(listener, game, folder, ok, total, container){
		
		var g = new Graphics();
		g.beginFill(Graphics.getRGB(0,0,0));
		g.drawRect(0,0,WIDTH, HEIGHT);
		
		var s 	= new Shape(g);
		s.alpha = 0;
		
		endGameListener = listener;

        var containerPopUp = new Container();

		bgPopUpBitmap = new Bitmap("./"+GAME_FOLDER+"/images/bg_popup_green_final.png");
        bgPopUpBitmap.image.onload = function(evt){
		    bgPopUpBitmap.x = WIDTH/2 - bgPopUpBitmap.image.width/2;
		    bgPopUpBitmap.y = HEIGHT/2 - bgPopUpBitmap.image.height/2;

            addCustomOnClick({item:bgPopUpBitmap,c:containerPopUp},onEndGameScreenFinished);
        }
		

		containerPopUp.addChild(s);
		containerPopUp.addChild(bgPopUpBitmap);		
		
		container.addChild(containerPopUp);
		
		
		txtPopUp = new Text("          "+ok+"/"+total, "57px Helvetica", "#ffffff");
		txtPopUp.x = WIDTH/2 - 190;
		txtPopUp.y = HEIGHT/2;
		//bgPopUpBitmap.onPress = function(){ onEndGameScreenFinished(); };
		containerPopUp.addChild(txtPopUp);
		Tween.get(containerPopUp).to({alpha:1},600);
		Tween.get(s).to({alpha:0.5},600);
	}	
	
	//=====================================================
	// SHOW 
	//=====================================================
	this.onClearSounds = onClearSounds;
	function onClearSounds(){	
	}	
	
	//=====================================================
	// ON END GAME SCREEN FINISHED 
	//=====================================================
	function onEndGameScreenFinished(){
		endGameListener.onEndGameScreenFinished();
	}
	
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/quiz/PFQuizResult.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFQuizResult.js 
//	PFQuizResult: Create and show end quizz game  
//*************************************************************
var PFQuizResult = function(pGameListener){

	//=====================================================
	// VARIABLES
	//=====================================================
	var gameListener = pGameListener;
	var container;
	var bgPopUpBitmap;
	
	var bgPopupBitmapOk;
	var bgPopupBitmapFail;	
	var bPopUp;
	var txtPopUp;

	create();
	
	//=====================================================
	// CREATE
	//=====================================================
	function create()
	{		
		gameListener = pGameListener;
		container 	 = new Container();
		
		//----------------------------------------------
		//Black Curtain
		//----------------------------------------------	
		var g = new Graphics();
		g.beginFill(Graphics.getRGB(0,0,0));
		g.drawRect(0,0,WIDTH, HEIGHT);
		
		var s 	= new Shape(g);
		s.alpha = 0.5;
		
		container.addChild(s);		
		container.alpha = 0;		
		
		bgPopupBitmapOk 	= new Bitmap("./"+GAME_FOLDER+"/images/bg_popup_red.png");
		bgPopupBitmapFail 	= new Bitmap("./"+GAME_FOLDER+"/images/bg_popup_green.png");
		bgPopupBitmapFinal 	= new Bitmap("./"+GAME_FOLDER+"/images/bg_popup_green_final.png");
		
		drawImages();
	}

	//=====================================================
	// DRAW IMAGES
	//=====================================================	
	function drawImages(){
		bPopUp 		  = new Bitmap("./"+GAME_FOLDER+"/images/popup_arrow.png");
		bPopUp.x 	  = WIDTH/2;
		bPopUp.y 	  = HEIGHT/2;
		bPopUp.scaleX = 0.7;	
		bPopUp.scaleY = 0.7;
	}

	//=====================================================
	// SHOW CORRECTION : load PopUp with result
	//=====================================================
	this.showCorrection = showCorrection
	function showCorrection(game,folder,isOk,total){
				
		container.removeChild(bgPopUpBitmap);
		container.removeChild(txtPopUp);
		container.removeChild(bPopUp);		
		
		if (!isOk){
			bgPopUpBitmap = bgPopupBitmapOk;
		}else{
			bgPopUpBitmap = bgPopupBitmapFail;
		}
		
		var offsetx = (parseInt(bgPopUpBitmap.image.width)/2);
		var offsety = (parseInt(bgPopUpBitmap.image.height)/2);	
		bgPopUpBitmap.regX = offsetx;
		bgPopUpBitmap.regY = offsety;
		bgPopUpBitmap.x = WIDTH/2;
		bgPopUpBitmap.y = HEIGHT/2;

		container.addChild(bgPopUpBitmap);

		addCustomOnClick({item:bgPopUpBitmap,c:container}, function(){
			PFSound.play('tick');
			hide();
			gameListener.nextQuestion();
		});
		/*
		bgPopUpBitmap.onPress = function(){
			PFSound.play('tick');
			hide();
			gameListener.nextQuestion();
		};
		*/

		Tween.get(container).to({alpha:1},600);
	}

	//=====================================================
	// HIDE
	//=====================================================	
	function hide(){
		Tween.get(container).to({alpha:0},600);
	}
	
	
	//=====================================================
	// GETs
	//=====================================================	
	this.getContainer = function() { return container; }	
	
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/explore/PFItemExplore.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFItemExplore.js 
//	PFItemExplore: create particular item properties
//*************************************************************

function PFItemExplore(action,actionLoops,run,sound,folder,text,rgb){

	//=====================================================
	// VARIABLES
	//=====================================================
	if(sound==""){
		this.sound ="";
	}else{
		this.sound = "./"+GAME_FOLDER+"/"+folder+"/sounds/"+sound;
	}
	this.offsetX;
	this.offsetY;
	this.action = action;
	this.actionLoops = actionLoops;
	this.run    = run;
	this.actionRotation;
	this.actionScale;
	this.actionMove;
	this.actionJump;
	this.text   = text;
	this.rgb    = rgb;
	
	this.getAction = getAction;
	this.getActionLoops = getActionLoops;
	this.getRun = getRun;
	this.getSound = getSound;
	this.getActionRotation = getActionRotation;
	this.getActionScale = getActionScale;
	this.getActionJump = getActionJump;
	this.getActionMove = getActionMove;
	this.getText = getText;
	this.getRgb = getRgb;
	this.setActionRotation = setActionRotation;
	this.setActionScale = setActionScale;
	this.setActionJump = setActionJump;
	this.setActionMove = setActionMove;
	
	this.setOffsetX = setOffsetX;
	this.setOffsetY = setOffsetY;
	this.getOffsetX = getOffsetX;
	this.getOffsetY = getOffsetY;
	
	//=====================================================
	// GETS
	//=====================================================
	function getAction() {
		return this.action;
	}
	function getText() {
		return this.text;
	}
	function getRgb() {
		return this.rgb;
	}
	function getActionLoops() {
		return this.actionLoops;
	}
	function getRun() {
		return this.run;
	}
	function getSound() {
		return this.sound;
	}
	
	function getOffsetX(){
		return this.offsetX;
	}
	function getOffsetY(){
		return this.offsetY;
	}
	function getActionRotation(){
		return this.actionRotation;
	}
	function getActionScale(){
		return this.actionScale;
	}
	function getActionMove(){
		return this.actionMove;
	}
	function getActionJump(){
		return this.actionJump;
	}
	//=====================================================
	// SETS
	//=====================================================
	function setOffsetX(value){
		this.offsetX = value;
	}
	function setOffsetY(value){
		this.offsetY = value;
	}
	function setActionRotation(value){
		this.actionRotation=value;
	}
	function setActionScale(value){
		this.actionScale=value;
	}
	function setActionMove(value){
		this.actionMove=value;
	}
	function setActionJump(value){
		this.actionJump=value;
	}

}


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/explore/PFGameExplore.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFGameExplore.js 
//	PFGameExplore: game explore
//*************************************************************

var PFGameExplore = function(){

	//======================================================================			
	// VARIABLES
	//======================================================================
	var items;
	var xml;
	var newXML;
	var exploreListen;
	var images;
	var containerPrincipal;
	var containerNou;
	var containerBase;
	var containerSup;
	var preloader;
	var num = 0;
	var offsetx, offsety;
	var newx, newy;
	var i;
	
	this.load = load;
	this.show = show;
	
	var baseGame;
	
	//======================================================================
	// LOAD
	//======================================================================
	function load(game,folder){
		newXML			= new PFXMLExplore;
		newXML.load(game,folder);

        themeXML.getExploreInfo();

		xml 			= new PFAction();
		xml.LoadItems(game,folder);
		items			= new Array(newXML.items.length);
		exploreListen 	= new PFGameExploreListen();
	}
	
	//======================================================================
	// SHOW GAME
	//======================================================================
	function show(game,folder,direction,containerAux,containerAnt){		
		baseGame = new PFBaseGame();
		baseGame.create(this,game,folder,containerAux, containerAnt);			
	}
	
	//=====================================================
	// BUILD PRELOAD MANIFEST
	//=====================================================
	this.buildPreloadManifest = buildPreloadManifest
	function buildPreloadManifest(itemsManifest,game){	
		for ( i=0; i<newXML.items.length; i++){
			if(newXML.items[i].getSrc().charAt( newXML.items[i].getSrc().length-1 ) != "/"){
				itemsManifest.push(newXML.items[i].getSrc());
			}
			
		}
		//itemsManifest.push(newXML.background.getSrc());
		
		return itemsManifest;
	}	
	
	//=====================================================
	// ON ADD MENU
	//=====================================================
	this.onAddMenu = onAddMenu;
	function onAddMenu(){
		/*
        var button = new Bitmap("game/images/bt_so.png");
        button.x = 200;
        button.y = 200;
        baseGame.containerNav.addChild(button);
        button.onPress = function(event){
            //window.location = "http://www.google.es";
            window.open('http://www.google.es','_blank');
        };
        */
		/*
        if(themeXML.modeTale == "true"){
            var repeatButton = themeXML.soundThemeItem.create();
            repeatButton.image.onload = function () {
                baseGame.containerNav.addChild(repeatButton);
                addCustomOnClick({item:repeatButton,c:baseGame.containerNav},toogleInstructionSoundPause);
            }
        }
        */
    }

    //=====================================================
    // PLAY STOP INSTRUCTION
    //=====================================================
    function toogleInstructionSoundPause(){
        PFSound.tooglePause('soInstructions'+soundID);
    }
    
    //=====================================================
	// ON SHOW GAME 
	//=====================================================
	this.onShowGame = onShowGame;
	function onShowGame(){						
		images = new Array(items.length);       
	   
        for (i = 0; i < items.length; i++){

			// Add click when loading Bitmap
			var bm = new PFBaseItem(newXML.items[i],i,function(itemClick) {

				var itemResult = addCustomOnClick({item:itemClick,c:baseGame.containerBase}, function(evt){
					if(baseGame.isGameActive()){
						PFDebug(evt.target.i);
						exploreListen.onTouch(evt.target.i,baseGame.getGame(),newXML,items,baseGame.getFolder());
					}
				});

				itemResult.i = itemClick.i;
				return itemResult;
			});

			if(bm.getKind() == 1){
				items[i] = bm.getBitmap();

			}else{
				items[i] = bm.getText();

				addCustomOnClick({item:items[i],c:baseGame.containerBase}, function(evt){
					if(baseGame.isGameActive()){
						exploreListen.onTouch(evt.target.i,baseGame.getGame(),newXML,items,baseGame.getFolder());
					}
				});
			}
			
			baseGame.containerBase.addChild(items[i]);

			if(newXML.items[i].getSound() != ""){
				PFSound.load("sound"+i,newXML.items[i].getSound());
			}

		}		
	}
	
	//=======================================================================
	// ON START GAME
	//=======================================================================
	this.onStartGame = onStartGame;
	function onStartGame(){
		
	}

	this.getHasStart = getHasStart;
	function getHasStart() {
		return false;
	}
	this.hasMuteButton = hasMuteButton;
	function hasMuteButton() {
		return true;
	}

	//=====================================================
	// CLEAR SOUNDS
	//=====================================================		
	this.onClearSounds = onClearSounds;
    function onClearSounds(){
        for(i=0;i<items.length;i++){
            PFSound.unload("sound"+i);
        }
    }
}


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/explore/PFGameExploreListen.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFGameExploreListen.js 
//	PFGameExploreListen: listener explore's game
//*************************************************************

var PFGameExploreListen = function(){
	
	//======================================================================			
	// VARIABLES
	//======================================================================
	var decoratorAction = new PFItemDecoratorAction();
	var anima;
	var j;

	this.onTouch = onTouch;
	
	//======================================================================			
	// onTouch: start animation
	//======================================================================
	function onTouch(i,game,xml,items,folder){

        communicationLayer.onCorrect(0);
		anima = true;
		for(j=0;j<decoratorAction.getItem().length;j++){
			if(decoratorAction.getItem()[j] == i){
				anima = false;
			}
		}
		if(anima){			
			var actionXML = new PFActionXML();

			PFDebug("Actions: ");
			PFDebug(actionXML);

			actionXML.load(folder, xml.items[i].getAction());

			actions = actionXML.getAction();

			if(actionXML.getActionScale() != null && actionXML.getActionScale().length > 0 ){
				xml.items[i].setActionScale(actions);
				decoratorAction.calculateScale(i,0,actionXML.getActionScale(),items);
			}
			if(actionXML.getActionRotation() != null && actionXML.getActionRotation().length > 0){
				xml.items[i].setActionRotation(actions);
				decoratorAction.calculateRotation(i,0,actionXML.getActionRotation(),items);
			}
			if(actionXML.getActionMove() != null && actionXML.getActionMove().length > 0){
				xml.items[i].setActionMove(actions);
				decoratorAction.calculateMovementX(i,0,items,xml,game);
				decoratorAction.calculateMovementY(i,0,items,xml,game);
			}
			if(actionXML.getActionJump() != null && actionXML.getActionJump().length > 0){
				xml.items[i].setActionJump(actions);
				decoratorAction.calculateMovementJump(actionXML.getActionJump(),xml,xml.items[i].getY(),i,game);
				decoratorAction.calculateJump(i,0,items,xml,game);
			}
            
			//----------------------------------------------
			//start sound
			//----------------------------------------------
			var itSound = xml.items[i].getSound();
			if(itSound != ""){
				PFSound.play("sound"+i);
			}
		}
	}
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/drag/PFItemDrag.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************//	File: PFItemDrag.js //	PFItemDrag: create particular item properties//*************************************************************function PFItemDrag(scaleActive,action,actionLoops,run,sound,folder,text,rgb){		//=====================================================	// VARIABLES	//=====================================================	if(sound==""){		this.sound ="";	}else{		this.sound = "./"+GAME_FOLDER+"/"+folder+"/sounds/"+sound;	}	this.scaleActive = scaleActive;	this.action = action;	this.actionLoops = actionLoops;	this.run=run;	this.getAction = getAction;	this.getActionLoops = getActionLoops;	this.getRun = getRun;	this.getSound = getSound;	this.getScaleActive = getScaleActive;	this.setOffsetX = setOffsetX;	this.setOffsetY = setOffsetY;	this.getOffsetX = getOffsetX;	this.getOffsetY = getOffsetY;	this.text 			= text;	this.rgb 			= rgb;	this.getText 		= getText;	this.getRgb			= getRgb;		//=====================================================	// GETS	//=====================================================	function getScaleActive(){		return this.scaleActive;	}	function getAction() {		return this.action;	}	function getActionLoops() {		return this.actionLoops;	}	function getRun() {		return this.run;	}	function getSound() {		return this.sound;	}	function getOffsetX(){		return this.offsetX;	}	function getOffsetY(){		return this.offsetY;	}	function getText() {		return this.text;	}	function getRgb() {		return this.rgb;	}	//=====================================================	// SETS	//=====================================================	function setOffsetX(value){		this.offsetX = value;	}	function setOffsetY(value){		this.offsetY = value;	}}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/drag/PFGameDrag.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFGameDrag.js 
//	PFGameDrag: game drag
//*************************************************************

function PFGameDrag(){

	//======================================================================			
	// VARIABLES
	//======================================================================
	var items;
	var newXML;
	var dragListen;
	var containerSup;
	var containerBase;
	var images;
	var num=0;
	var offsetx, offsety;
	var newx, newy;
	var i;

	this.load = load;
	this.show = show;
	
	var baseGame;
	
	//======================================================================			
	// LOAD
	//======================================================================
	function load(game,folder){
		newXML = new PFXMLDrag();
		newXML.load(game,folder);

		themeXML.getDragInfo();

		items		= new Array(newXML.items.length);
		dragListen 	= new PFGameDragListen();
	}
	//======================================================================			
	// SHOW GAME
	//======================================================================
	function show(game,folder,direction,containerAux,containerAnt){
		
		baseGame = new PFBaseGame();
		baseGame.create(this,game,folder,containerAux, containerAnt);		
	}
	
	//=====================================================
	// BUILD PRELOAD MANIFEST
	//=====================================================
	this.buildPreloadManifest = buildPreloadManifest
	function buildPreloadManifest(itemsManifest,game){
		for ( i=0; i<items.length; i++){
			if(newXML.items[i].getSrc().charAt( newXML.items[i].getSrc().length-1 ) != "/"){
				itemsManifest.push(newXML.items[i].getSrc());				
			}
		}
		itemsManifest.push("./"+GAME_FOLDER+"/images/drag_zone.png");
		//itemsManifest.push(newXML.background.getSrc());
		return itemsManifest;
	}	
	
	//=====================================================
	// ON ADD MENU
	//=====================================================
	this.onAddMenu = onAddMenu;
	function onAddMenu(){}
    
    //=====================================================
	// ON SHOW GAME
	//=====================================================
	this.onShowGame = onShowGame;
	function onShowGame(){

        var dragZone = new Bitmap("./"+GAME_FOLDER+"/images/drag_zone.png");
        dragZone.image.onload = function(evt){
            dragZone.y = HEIGHT - evt.target.height - themeXML.itemToDragThemeItem.getY();
            dragZone.scaleX = 1024/HEIGHT;
            baseGame.containerBase.addChild(dragZone);
        }
		
		images=new Array(items.length);
        
        for (i = 0; i < items.length; i++){
			if(newXML.items[i].getSrc().charAt( newXML.items[i].getSrc().length-1 ) != "/"){
				images[i] 			= new Image();
				images[i].src 		= newXML.items[i].getSrc();
				images[i]. i 		= i;
				images[i].onload = 	loadBitmap;
			}else{
				loadText(i);
			}
			if(newXML.items[i].getSound()!=""){
				PFSound.load("sound"+i,newXML.items[i].getSound());
			}
		}		
	}
	
	//=======================================================================
	// ON START GAME
	//=======================================================================
	this.onStartGame = onStartGame;
	function onStartGame(){
		
	}
	
	//=====================================================
	// loadText
	//=====================================================
	function loadText(evt){
		i = evt;
		var game  	= baseGame.getGame();
		var folder 	= baseGame.getFolder();

		var bm = new PFBaseItem(newXML.items[i],i);
		items[i] = bm.getText();
		
		items[i].i 	= i;
	
		items[i].scaleX			= 1;
		items[i].scaleY			= 1;
		items[i].defaultScaleX 	= 1;
		items[i].defaultScaleY	= 1;			

		newx	= parseInt(newXML.items[i].getX());
		newy	= parseInt(newXML.items[i].getY());
		
		items[i].x		= newx;
		items[i].y		= newy-themeXML.itemToDragThemeItem.getY();
		items[i].i		= i;
		newXML.items[i].setOffsetX(0);
		newXML.items[i].setOffsetY(0);
		baseGame.containerBase.addChild(items[i]);

		var itemDrag = addDrag(items[i],baseGame.containerBase);
		itemDrag.i = i;

		itemDrag.addEventListener("mousedown", function(evt){
			if(baseGame.isGameActive()){
				var i = evt.target.i;

				dragListen.onTouch(i,game,newXML);

				var offset = {x:evt.x-evt.stageX, y:evt.y-evt.stageY};
				evt.addEventListener("mousemove", function(ev) {
					dragListen.onMouseMove(ev,evt.target,newXML,i,game,offset,1);	//Call drag&drop
				},false);
				evt.addEventListener("mouseup", function(ev){
					dragListen.onMouseUp(evt.target,newXML,i,game,scaleFactor);
				},false);
			}
		},false);
	}
	//=====================================================
	// loadBitmaps: load and show all items images 
	//=====================================================
	function loadBitmap(evt){
		
		i = evt.target.i;
		var game  	= baseGame.getGame();
		var folder 	= baseGame.getFolder();

		items[i] 	= new Bitmap(images[i]);
		items[i].i 	= i;

		var scaleFactor 		= getImageScale(items[i].image.width,items[i].image.height,100);
		items[i].scaleX			= scaleFactor;
		items[i].scaleY			= scaleFactor;
		items[i].defaultScaleX 	= scaleFactor;
		items[i].defaultScaleY	= scaleFactor;			

		
		offsetx	= parseInt(items[i].image.width)/2;
		offsety	= parseInt(items[i].image.height)/2;
		newx	= parseInt(newXML.items[i].getX());
		newy	= parseInt(newXML.items[i].getY());
		
		items[i].regX 	= offsetx;
		items[i].regY 	= offsety;
		items[i].x		= newx;
		items[i].y		= newy-themeXML.itemToDragThemeItem.getY();
		items[i].i		= i;
		newXML.items[i].setOffsetX(offsetx);
		newXML.items[i].setOffsetY(offsety);
		baseGame.containerBase.addChild(items[i]);
		
		var itemDrag = addDrag(items[i],baseGame.containerBase);
		itemDrag.i = i;

			itemDrag.addEventListener("mousedown", function(evt){
				if(baseGame.isGameActive()){
					var i = evt.target.i;

					dragListen.onTouch(i,game,newXML);
				
					var offset = {x:evt.x-evt.stageX, y:evt.y-evt.stageY};
					evt.addEventListener("mousemove", function(ev) {
						dragListen.onMouseMove(ev,evt.target,newXML,i,game,offset,1);	//Call drag&drop
					},false);
					evt.addEventListener("mouseup", function(ev){
						dragListen.onMouseUp(evt.target,newXML,i,game,scaleFactor);
					},false);
				}
			},false);
	}

	this.getHasStart = getHasStart;
	function getHasStart() {
		return false;
	}

	this.hasMuteButton = hasMuteButton;
	function hasMuteButton() {
		// PFTODO: items sounds
		return true;
	}

	//=====================================================
	// CLEAR SOUNDS
	//=====================================================		
	this.onClearSounds = onClearSounds;
    function onClearSounds(){
        for(i=0;i<items.length;i++){
            PFSound.unload("sound"+i);
        }
    }
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/drag/PFGameDragListen.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFGameDragListen.js 
//	PFGameDragListen: listener drag's game
//*************************************************************

function PFGameDragListen(){

	this.onMouseMove 	= onMouseMove;
	this.onMouseUp 		= onMouseUp;
	this.onTouch 		= onTouch;
	
	//======================================================================			
	// onMouseUp: stop drag and drop; resize and position control
	//======================================================================
	function onMouseUp(target,xml,i,game,scaleFactor){
		if(target.y>600-themeXML.itemToDragThemeItem.getY()){
			var posx = parseFloat(xml.items[i].getX());
			var posy = parseFloat(xml.items[i].getY());
			
			Tween.get(target).to({x:posx},200).play(Tween.get(target).to({y:posy-themeXML.itemToDragThemeItem.getY()},200));
			Tween.get(target).to({scaleX:scaleFactor},300).play(Tween.get(target).to({scaleY:scaleFactor},300));
			Tween.get(target.item).to({x:posx},200).play(Tween.get(target.item).to({y:posy-themeXML.itemToDragThemeItem.getY()},200));
			Tween.get(target.item).to({scaleX:scaleFactor},300).play(Tween.get(target.item).to({scaleY:scaleFactor},300));
		}
	}
	//======================================================================			
	// onMouseMove: drag and drop; control resize 
	//======================================================================
	function onMouseMove(ev,target,xml,i,game,offset,kind){

		target.x = ev.stageX;//+offset.x;
		target.y = ev.stageY;//+offset.y;

		target.item.x = ev.stageX;//+offset.x;
		target.item.y = ev.stageY;//+offset.y;

		if(kind == 1){
			if(target.y<620-themeXML.itemToDragThemeItem.getY()){
				var newScale = getImageScale(target.item.image.width,target.item.image.height,300);
				Tween.get(target).to({scaleX:newScale},300).play(Tween.get(target).to({scaleY:newScale},300));
				Tween.get(target.item).to({scaleX:newScale},300).play(Tween.get(target.item).to({scaleY:newScale},300));
			}
		}
	}
    //======================================================================			
	// onTouch: play sound
	//======================================================================
	function onTouch(i,game,xml){
		var itSound = xml.items[i].getSound();
		if(itSound != ""){
            PFSound.play("sound"+i);
		}
	}
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/memory/PFItemMemory.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFItemMemory.js 
//	PFItemMemory: create particular item properties
//*************************************************************

function PFItemMemory(id,action,actionLoops,run,sound,sound2,folder,text,rgb){
	
	//=====================================================
	// VARIABLES
	//=====================================================
	if(sound==""){
		this.sound ="";
	}else{
		this.sound = "./"+GAME_FOLDER+"/"+folder+"/sounds/"+sound;
	}
	if(sound2==""){
		this.sound2 ="";
	}else{
		this.sound2 = "./"+GAME_FOLDER+"/"+folder+"/sounds/"+sound2;
	}
	this.marked 		= false;
	this.id 			= id;
	this.action 		= action;
	this.actionLoops 	= actionLoops;
	this.run			= run;
	this.getAction		= getAction;
	this.getActionLoops = getActionLoops;
	this.getRun 		= getRun;
	this.getSound 		= getSound;
	this.getSound2 		= getSound2;
	this.getId 			= getId;
	this.setMarked 		= setMarked;
	this.getMarked 		= getMarked;
	this.text 			= text;
	this.rgb 			= rgb;
	this.getText 		= getText;
	this.getRgb			= getRgb;
	
	//=====================================================
	// GETS
	//=====================================================
	function getMarked(){
		return this.marked;
	}
	function getId(){
		return this.id;
	}
	function getAction() {
		return this.action;
	}
	function getActionLoops() {
		return this.actionLoops;
	}
	function getRun() {
		return this.run;
	}
	function getSound() {
		return this.sound;
	}
	function getSound2() {
		return this.sound2;
	}
	function getText() {
		return this.text;
	}
	function getRgb() {
		return this.rgb;
	}
	//=====================================================
	// SETS
	//=====================================================
	function setMarked(value){
		this.marked = value;
	}
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/memory/PFGameMemory.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFGameMemory.js 
//	PFGameMemory: game memory
//*************************************************************

var PFGameMemory = function(){
	
	//=====================================================
	// VARIABLES
	//=====================================================
	var numItems;
	var redCard;
	var items;
	var itemsCard;
	var itemsGame;
	var bgCard;
	var Ids;
	var posicionsRandom;
	var click	 = 0;
	var selected = 0;
	var game;
	var folder;
	var end	= false;
	var memoryListen;
	var wait = 0;
	var images;
	var card;
    var num	= 0;
	var offsetx, offsety;
	var newx, newy;
	var i,j;

    var cards;
    var frontCards;
    var whiteCards;

    var previousItem;

	var newXML;

	this.load = load;
	this.show = show;

	var baseGame;
	
	//=======================================================================			
	// LOAD
	//=======================================================================
	function load(game,folder){

		themeXML.getMemory();

		newXML = new PFXMLMemory();
		newXML.load(game,folder);

		themeXML.getCardPositions(newXML.nItems);

		numItems	 = themeXML.cardPositions.length;
		chooseItems();
		calculateRandomPositions();
		items 		 = new Array(newXML.items.length);
		itemsGame 	 = newXML.items;
		itemsCard 	 = new Array(newXML.items.length);
		bgCard 		 = new Array(newXML.items.length);
		memoryListen = new PFGameMemoryListen;
		PFSound.load('tick',"./"+GAME_FOLDER+"/sounds/boto.mp3");
	}
	
	//=======================================================================			
	// SHOW GAME : It is a create, not a show
	//=======================================================================
	function show(game,folder,direction,containerAux,containerAnt){	
		baseGame = new PFBaseGame();
		baseGame.create(this,game,folder,containerAux, containerAnt);
	}
		
	//=====================================================
	// BUILD PRELOAD MANIFEST
	//=====================================================
	this.buildPreloadManifest = buildPreloadManifest
	function buildPreloadManifest(itemsManifest,game){
		for ( i=0; i<items.length; i++){
			itemsManifest.push(newXML.items[i].getSrc());
		}
		//itemsManifest.push(newXML.background.getSrc());
		itemsManifest.push("./"+GAME_FOLDER+"/" + baseGame.getFolder() +"/images/under_card.png");
		itemsManifest.push(newXML.redCard);
		
		return itemsManifest;
	}	
	
	//=====================================================
	// ON ADD MENU
	//=====================================================
	this.onAddMenu = onAddMenu;
	function onAddMenu(){}
    
    //=====================================================
	// ON SHOW GAME
	//=====================================================
	this.onShowGame = onShowGame;
	function onShowGame(){

		//var background = new Bitmap(newXML.background.getSrc());
		//baseGame.containerBase.addChild(background);
        communicationLayer.setNumberOfQuestions(posicionsRandom.length/2);
		
		images  = new Array(items.length);
		card 	= new Array(items.length);

        cards       = new Array(items.length);
        frontCards  = new Array(items.length);
        whiteCards  = new Array(items.length);

        for (var i = 0; i < posicionsRandom.length; i++){
            loadFrontCards(i);
            loadBackCards(i);
            loadItems(i);
        }
		
		for (i = 0; i < newXML.items.length; i++){
			if(newXML.items[i].getSound()!=""){
				PFSound.load("sound"+i,newXML.items[i].getSound());
			}
			if(newXML.items[i].getSound2()!=""){
				PFSound.load("sound2"+i,newXML.items[i].getSound2());
			}
		}

		if (newXML.wrongSound != null)
			PFSound.load("wrongSound",newXML.wrongSound);
		if (newXML.rightSound != null)
			PFSound.load("okSound",newXML.rightSound);
        baseGame.fitToScreen(true);
	}
	
	//=======================================================================
	// ON START GAME
	//=======================================================================
	this.onStartGame = onStartGame;
	function onStartGame(){
		
	}

    //=======================================================================
    // LOAD FRONT
    //=======================================================================
    function loadFrontCards(i){

	    var coverImage = "";

	    if (themeXML.cardCover != null)
	        coverImage = "./"+GAME_FOLDER+"/theme/images/memory/"+themeXML.cardCover;
	    else
	        coverImage = newXML.redCard;

        frontCards[i] 			= new Bitmap(coverImage);
        frontCards[i].image. i  = i;
        frontCards[i].image.onload = function(event){
            var i = event.target.i;

	        var imageScale;

	        if (themeXML.whiteRotation != 0)
				imageScale 		            = getImageScale(event.target.width,event.target.height,posicionsRandom[i].getMaxHeight());
	        else
		        imageScale 		            = getImageScale(event.target.width,event.target.height,Math.max(posicionsRandom[i].getMaxWidth(),posicionsRandom[i].getMaxHeight()));

            frontCards[i].scaleX 		    = imageScale;
            frontCards[i].scaleY 		    = imageScale;
            frontCards[i].defaultScaleX  	= imageScale;
            frontCards[i].defaultScaleY     = imageScale;
            frontCards[i].regX              = event.target.width/2;
            frontCards[i].regY              = event.target.height/2;
            frontCards[i].x                 = posicionsRandom[i].getX();
            frontCards[i].y                 = posicionsRandom[i].getY();

	        frontCards[i].rotation          = themeXML.whiteRotation;

	        var cardShape = addCustomOnClick({item:frontCards[i],c:baseGame.containerBase},function(evt){
		        cardPressed(evt);
	        });

	        cardShape.i = event.target.i;
        }
        //frontCards[i].onPress = cardPressed;
        baseGame.containerBase.addChild(frontCards[i]);
    }

    //=======================================================================
    // LOAD BACK
    //=======================================================================
    function loadBackCards(i){

	    var whiteImage = "";

	    if (themeXML.cardWhite != null)
		    whiteImage = "./"+GAME_FOLDER+"/theme/images/memory/"+themeXML.cardWhite;
	    else
		    whiteImage = "./"+GAME_FOLDER+"/" + baseGame.getFolder() + "/images/under_card.png"

        whiteCards[i] 			= new Bitmap(whiteImage);
        whiteCards[i].image. i  = i;
        whiteCards[i].image.onload = function(event){
            var i = event.target.i;
	        var imageScale;

	        if (themeXML.whiteRotation != 0)
		        imageScale 		            = getImageScale(event.target.width,event.target.height,posicionsRandom[i].getMaxHeight());
	        else
		        imageScale 		            = getImageScale(event.target.width,event.target.height,Math.max(posicionsRandom[i].getMaxWidth(),posicionsRandom[i].getMaxHeight()));
            whiteCards[i].scaleX 		    = imageScale;
            whiteCards[i].scaleY 		    = imageScale;
            whiteCards[i].defaultScaleX  	= imageScale;
            whiteCards[i].defaultScaleY     = imageScale;
            whiteCards[i].regX              = event.target.width/2;
            whiteCards[i].regY              = event.target.height/2;
            whiteCards[i].x                 = posicionsRandom[i].getX();
            whiteCards[i].y                 = posicionsRandom[i].getY();

	        whiteCards[i].rotation          = themeXML.whiteRotation;
        }
        baseGame.containerBase.addChild(whiteCards[i]);
        whiteCards[i].alpha = 0;
    }

    //=======================================================================
    // LOAD ITEMS
    //=======================================================================
    function loadItems(i){

        if(newXML.items[i].getSrc().charAt( newXML.items[i].getSrc().length-1 ) != "/"){
            cards[i] 			= new Bitmap(newXML.items[i].getSrc());
            cards[i].image.i	= i;
            cards[i].image.onload = function(event){
                var i = event.target.i;
                var imageScale 		    = getImageScale(event.target.width,event.target.height,Math.min(posicionsRandom[i].getMaxWidth(),posicionsRandom[i].getMaxHeight())*0.9);
                cards[i].scaleX 		= imageScale;
                cards[i].scaleY 		= imageScale;
                cards[i].defaultScaleX 	= imageScale;
                cards[i].defaultScaleY 	= imageScale;
                cards[i].regX           = event.target.width/2;
                cards[i].regY           = event.target.height/2;
                cards[i].x              = posicionsRandom[i].getX();
                cards[i].y              = posicionsRandom[i].getY();
            }
            baseGame.containerBase.addChild(cards[i]);
        }
        else{
            var bm = new PFBaseItem(newXML.items[i],i);
            cards[i] = bm.getText();
            cards[i].getChildAt(0).lineWidth = posicionsRandom[i].getMaxWidth();
            var itemText        = cards[i].getChildAt(0);
            var sep             = itemText.getMeasuredWidth()/2;
            var sepY            = itemText.getMeasuredLineHeight()/2 * ( itemText.getMeasuredWidth()/posicionsRandom[i].getMaxWidth()) -itemText.getMeasuredLineHeight()/2;
            cards[i].x 		    =  posicionsRandom[i].getX() - sep;
            cards[i].y 		    =  posicionsRandom[i].getY() - sepY;
            cards[i].alpha      = 1;

            baseGame.containerBase.addChild(cards[i]);
        }
        cards[i].done   = false;
        cards[i].alpha  = 0;
        cards[i].identifier = itemsGame[i].getId();
    }

    //=======================================================================
    // CARD PRESSED
    //=======================================================================
    function cardPressed(event){
        var i = event.target.i;

	    if (frontCards[i].alpha == 0)
	        return;

        if(baseGame.isGameActive()){

            if(cards[i].done  == false){

	            baseGame.setGameActive(false);

                frontCards[i].alpha = 0;
                cards[i].alpha      = 1;
                whiteCards[i].alpha = 1;

                var bigScale    = cards[i].defaultScaleX + 0.1*cards[i].defaultScaleX;
                var normalScale = cards[i].defaultScaleX;

                cards[i].scaleX = 0.5*normalScale;
                cards[i].scaleY = 0.5*normalScale;

                Tween.get(cards[i]).to({scaleX:bigScale},150).play(Tween.get(cards[i]).to({scaleY:bigScale},150));
                Tween.get(items[i]).wait(150).call(function(){
                    Tween.get(cards[i]).to({scaleX:normalScale},50).play(Tween.get(cards[i]).to({scaleY:normalScale},50));
                });

				if(click == 0){
                    click        = 1;
					previousItem = i;
					if(newXML.items[i].getSound() != ""){
						PFSound.playWithCallback("sound"+i,function() {
							baseGame.setGameActive(true);
						});
					}
					else
					{
						baseGame.setGameActive(true);
					}
				}
				else{
					click = 0;
					if(cards[previousItem].identifier == cards[i].identifier && previousItem != i){
						//Play card sound
						cards[i].done               = true;
						cards[previousItem].done    = true;

						if (newXML.items[i].getSound2() != "") {
							PFSound.playWithCallback("sound2"+i,function() {
								playOkSound(function() {
									checkEndGame(folder);
								});
							});
						}
						else
						{
							playOkSound(function() {
								checkEndGame(folder);
							});
						}
					}
					else{
						//Play wrong sound
						playWrongSound(function() {
							Tween.get(items[i]).wait(5).call(function(){
								hideCards(i);
							});
						});
					}
				}
            }
        }
    }

    //=======================================================================
    // HIDE CARDS
    //=======================================================================
    function hideCards(i){
        frontCards[i].alpha = 1;
        cards[i].alpha      = 0;
        whiteCards[i].alpha = 0;

        frontCards[previousItem].alpha = 1;
        cards[previousItem].alpha      = 0;
        whiteCards[previousItem].alpha = 0;

	    baseGame.setGameActive(true);
    }

	//=======================================================================
	// chooseItems:
	//=======================================================================
	function chooseItems(){
		Ids=new Array(numItems);
		for(i=0;i<(numItems/2);i++){
			Ids[i]=Math.floor(Math.random()*(numItems+1));
			if(Ids[i]==0){
				Ids[i]=1;
			}
		}
		for(i=0; i<(numItems/2); i++){
			for(j=0; j<(numItems/2); j++){
				if(i!=j){
					if(Ids[i]==Ids[j]){
						chooseItems(numItems);
					}
				}
			}
		}
		for(i=0;i<(numItems/2);i++){
			Ids[i+(numItems/2)]=Ids[i];
		}
	}

	//=======================================================
	// playWrongSound:
	//=======================================================
	function playWrongSound(callback){
		if(newXML.wrongSound != null){
			PFSound.playWithCallback("wrongSound",callback);
		}
		else
			callback();
	}
	//=======================================================
	// playOkSound:
	//=======================================================
	function playOkSound(callback){
		if(newXML.rightSound != null){
			PFSound.playWithCallback("okSound",callback);
		}
		else
			callback();
	}


	//=======================================================
	// calculateRandomPositions: where items will be hidden
	//=======================================================
	function calculateRandomPositions(){
		posicionsRandom	= new Array(themeXML.cardPositions.length);
		for(i=0;i<posicionsRandom.length;i++){
			posicionsRandom[i] = themeXML.cardPositionsThemeItem[i];
		}
		var i=posicionsRandom.length;
		while(i--){
			var j			   = Math.floor( Math.random() * (i+1) );
			var tmp			   = posicionsRandom[i];
			posicionsRandom[i] = posicionsRandom[j];
			posicionsRandom[j] = tmp;
		}
	}

	//=====================================================
	// checkEndGame: evaluate if game is ended
	//=====================================================
	function checkEndGame(folder){

		var win = true;
		for(i=0; i<numItems; i++){
			if(cards[i].done==false){
				win=false;
			}
		}

		baseGame.setGameActive(true);

		if(win == true){
			end = true;
			baseGame.endGame(newXML.endGame);
		}
	}

	this.getHasStart = getHasStart;
	function getHasStart() {
		return false;
	}

	this.hasMuteButton = hasMuteButton;
	function hasMuteButton() {
		return baseGame.checkItemsForSound(newXML.items);
	}

	//=====================================================
	// CLEAR SOUNDS 
	//=====================================================		
	this.onClearSounds = onClearSounds;
    function onClearSounds(){
        for(i=0; i<items.length; i++){
            PFSound.unload("sound"+i);
	        PFSound.unload("sound2"+i);
        }

	    PFSound.unload("okSound");
	    PFSound.unload("wrongSound");
        PFSound.unload('tick');
    }
}


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/memory/PFGameMemoryListen.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFGameMemoryListen.js 
//	PFGameMemoryListen: listener of memory game
//*************************************************************
function PFGameMemoryListen(){

	//=====================================================
	// VARIABLES
	//=====================================================
	var decoratorAction = new PFItemDecoratorAction();
	var actions;
	
	this.onTouch	= onTouch;
	this.onTouchHide= onTouchHide;

	//=====================================================
	// onTouch: animate card
	//=====================================================
	function onTouch(i,xml,items,folder){
		var actionXML = new PFActionXML();
		actionXML.load(folder, xml.items[i].getAction());	
		actions = actionXML.getAction();
					
		if(actionXML.getActionScale().length > 0)	{ decoratorAction.calculateScale	(i,0,actions,items); }
		if(actionXML.getActionRotation().length > 0){ decoratorAction.calculateRotation	(i,0,actions,items); }
	}
	//=====================================================
	// onTouchHide: animate card
	//=====================================================
	function onTouchHide(i,xml,items,folder){
		var actionXML = new PFActionXML();
		actionXML.load(folder, xml.items[i].getAction());	
		actions = actionXML.getAction();
		decoratorAction.calculateScale(i,0,actions,items);
	}
}


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/puzzle/PFItemPuzzle.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFItemPuzzle.js 
//	PFItemPuzzle: create particular item properties
//*************************************************************

function PFItemPuzzle(scaleActive,action,actionLoops,run,sound,finalX,finalY,folder,text,rgb,active){
	
	//=====================================================
	// VARIABLES
	//=====================================================
	if(sound==""){
		this.sound = "";
	}else{
		this.sound = "./"+GAME_FOLDER+"/"+folder+"/sounds/"+sound;
	}
	this.marked 		= false;
	this.offsetX;
	this.offsetY;
	this.finalX 		= finalX;
	this.finalY 		= finalY;
	this.getFinalX		= getFinalX;
	this.getFinalY 		= getFinalY;
	this.scaleActive 	= scaleActive;
	this.action 		= action;
	this.actionLoops 	= actionLoops;
	this.run=run;
	this.text = text;
	this.rgb = rgb;
    this.active = active;
	
	this.getAction		= getAction;
	this.getActionLoops = getActionLoops;
	this.getRun 		= getRun;
	this.getSound 		= getSound;
	this.getScaleActive	= getScaleActive;
	this.setOffsetX 	= setOffsetX;
	this.setOffsetY 	= setOffsetY;
	this.getOffsetX 	= getOffsetX;
	this.getOffsetY 	= getOffsetY;
	this.setMarked 		= setMarked;
	this.getMarked		= getMarked;
	this.getText 		= getText;
	this.getRgb			= getRgb;
    this.isActive       = isActive;
	
	//=====================================================
	// GETS
	//=====================================================
	function getMarked(){
		return this.marked;
	}
    function isActive(){
        PFDebug("Is active:" + this.active);
        return this.active;
    }
	function getScaleActive(){
		return this.scaleActive;
	}
	function getAction() {
		return this.action;
	}
	function getActionLoops() {
		return this.actionLoops;
	}
	function getRun() {
		return this.run;
	}
	function getSound() {
		return this.sound;
	}
	function getFinalX(){
		return this.finalX;
	}
	function getFinalY(){
		return this.finalY;
	}
	function getOffsetX(){
		return this.offsetX;
	}
	function getOffsetY(){
		return this.offsetY;
	}
	function getText() {
		return this.text;
	}
	function getRgb() {
		return this.rgb;
	}
	//=====================================================
	// SETS
	//=====================================================
	function setMarked(value){
		this.marked = value;
	}
	function setOffsetX(value){
		this.offsetX = value;
	}
	function setOffsetY(value){
		this.offsetY = value;
	}
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/puzzle/PFGamePuzzle.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFGamePuzzle.js 
//	PFGamePuzzle: game puzzle
//*************************************************************

function PFGamePuzzle(){
	
	//=====================================================
	// VARIABLES
	//=====================================================
	var items;
	var end = false;
	var num = 0;
	var numPages;
	var actualPage;
	var newXML;
	var puzzleListen;
	var images;
	var preload;
	var offsetx, offsety;
	var newx, newy;
	var i;
		
	var baseGame;

	this.load = load;
	this.show = show;

	//======================================================================
	// LOAD GAME
	//======================================================================
	function load(game,folder){
		newXML = new PFXMLPuzzle();
		newXML.load(game,folder);

		items		 = new Array(newXML.items.length);
		puzzleListen = new PFGamePuzzleListen();
		PFSound.load('end',"./"+GAME_FOLDER+"/sounds/ok.mp3");
		PFSound.load('puzzle',"./"+GAME_FOLDER+"/"+folder+"/sounds/puzzle.mp3");
	}
	//=======================================================================			
	// SHOW GAME : It is a create, not a show
	//=======================================================================
	function show(game,folder,direction,containerAux,containerAnt){	
		baseGame = new PFBaseGame();
		baseGame.create(this,game,folder,containerAux, containerAnt);
	}
	
	//=======================================================================
	// BUILD PRELOAD MANIFEST
	//=======================================================================
	this.buildPreloadManifest = buildPreloadManifest
	function buildPreloadManifest(itemsManifest,game){
		for ( i=0; i<items.length; i++){
			itemsManifest.push(newXML.items[i].getSrc());
		}
		//itemsManifest.push(newXML.background.getSrc());
		return itemsManifest;
	}
	
	//=======================================================================
	// ON ADD MENU : Here we add the custom menu things for this specific game
	//=======================================================================
	this.onAddMenu = onAddMenu;
	function onAddMenu(){}	
	
	//=======================================================================
	// ON SHOW GAME
	//=======================================================================
	this.onShowGame = onShowGame;
	function onShowGame(){
		//var background = new Bitmap(newXML.background.getSrc());
		//baseGame.containerBase.addChild(background);

        communicationLayer.setNumberOfQuestions(items.length);
				
		images = new Array(items.length);

		for (i = 0; i < items.length; i++){
			images[i] 		 = new Image();
			images[i].src    = newXML.items[i].getSrc();
			images[i].i 	 = i;
			if(newXML.items[i].getSrc().charAt( newXML.items[i].getSrc().length-1 ) != "/"){
				images[i].onload = 	loadBitmap;
			}else{
				loadText(i);
			}
		}	
	}
	
	//=======================================================================
	// ON START GAME
	//=======================================================================
	this.onStartGame = onStartGame;
	function onStartGame(){
		
	}	
	//=======================================================================
	// LOAD TEXTS
	//=======================================================================    
	function loadText(event){
		i = event;
		
		var bm = new PFBaseItem(newXML.items[i],i);
		
	
		items[i] = bm.getText();
		var currentItem = items[i];
		
		newx				= parseInt(newXML.items[i].getX());
		newy				= parseInt(newXML.items[i].getY());
		currentItem.x	  	= newx;
		currentItem.y	  	= newy;
					
		newXML.items[i].setOffsetX(offsetx);
		newXML.items[i].setOffsetY(offsety);
		baseGame.highcontainer.addChild(items[i]);

		//items[i].onPress = function(){onTouch(i,game);};

		var dragItem = addDrag(items[i],baseGame.highcontainer);
		dragItem.i = i;
		dragItem.defaultScaleX = items[i].scaleX;
		dragItem.defaultScaleY = items[i].scaleY;

		(function(target) {

			puzzleListen.onLoad(i,baseGame.getGame(),newXML,items,baseGame.getFolder());

			target.addEventListener("mousedown", function(evt) {
				i = evt.target.i;
				if(end==false && baseGame.isGameActive() && !newXML.items[i].getMarked()){
					baseGame.highcontainer.removeChild(items[i]);
					baseGame.highcontainer.removeChild(evt.target);
					baseGame.highcontainer.addChild(items[i]);
					baseGame.highcontainer.addChild(evt.target);
					puzzleListen.onTouch(i,baseGame.getGame(),newXML);
					var offset = {x:target.x-evt.stageX, y:target.y-evt.stageY};
					evt.addEventListener("mousemove", function(ev) {
						puzzleListen.onMouseMove(ev,target,offset);
					},false);
					evt.addEventListener("mouseup", function(ev){
						puzzleListen.onMouseUp(target,newXML,i,baseGame.getGame(),items,baseGame.containerBase,baseGame.highcontainer);
						checkEndGame(newXML,baseGame.getGame(),baseGame.getFolder());
					},false);
				}
			},false);
		})(dragItem);
	};

	//=======================================================================
	// LOAD BITMAPS
	//=======================================================================
	function loadBitmap(event){
		i = event.target.i;
		
		var bm = new PFBaseItem(newXML.items[i],i);
		
	
		items[i] = new Bitmap(images[i]);	
		items[i].i = i;
		
		var currentItem = items[i];
	
		if(newXML.items[i].getScale() != 1000)
		{
			var scaleFactor = newXML.items[i].getScale()/1000;
			currentItem.scaleX = scaleFactor;
			currentItem.scaleY = scaleFactor;
		}

		offsetx				= parseInt(currentItem.image.width)/2;
		offsety				= parseInt(currentItem.image.height)/2;
		newx				= parseInt(newXML.items[i].getX());
		newy				= parseInt(newXML.items[i].getY());
		currentItem.regX 	= offsetx;
		currentItem.regY	= offsety;
		currentItem.x	  	= newx;
		currentItem.y	  	= newy;
					
		newXML.items[i].setOffsetX(offsetx);
		newXML.items[i].setOffsetY(offsety);
		baseGame.highcontainer.addChild(items[i]);

		var dragItem = addDrag(currentItem,baseGame.highcontainer);
		dragItem.i = i;
		dragItem.defaultScaleX = currentItem.scaleX;
		dragItem.defaultScaleY = currentItem.scaleY;

		(function(target) {

			puzzleListen.onLoad(i,baseGame.getGame(),newXML,items,baseGame.getFolder());

			target.addEventListener("mousedown", function(evt) {
				i = evt.target.i;
				if(end==false && baseGame.isGameActive() && !newXML.items[i].getMarked()){
					baseGame.highcontainer.removeChild(items[i]);
					baseGame.highcontainer.addChild(items[i]);
					puzzleListen.onTouch(i,baseGame.getGame(),newXML);
					var offset = {x:target.x-evt.stageX, y:target.y-evt.stageY};
					evt.addEventListener("mousemove", function(ev) {
						puzzleListen.onMouseMove(ev,target,offset);
					},false);
					evt.addEventListener("mouseup", function(ev){
						puzzleListen.onMouseUp(target,newXML,i,baseGame.getGame(),items,baseGame.containerBase,baseGame.highcontainer);
						checkEndGame(newXML,baseGame.getGame(),baseGame.getFolder());
					},false);
				}
			},false);
		})(dragItem);

		//items[i].onPress = function(){onTouch(i,game);};

	};
	
	//=======================================================================
	// Scale: load scale animation
	//=======================================================================
	function Scale(target){
		Tween.get(target).to({scaleX:parseFloat(1)},500).play(Tween.get(target).to({scaleY:parseFloat(1)},500));
	}
	
	//=======================================================================
	// CONTROLS :
	//=======================================================================
	function checkEndGame(xml,game,folder){
		end = true;	
		for(i = 0; i< items.length; i++){
			if(newXML.items[i].getMarked() != true){
                if(newXML.items[i].isActive() == "true"){
				    end = false;
                }
			}
		}
		if(end==true){
			baseGame.endGame(newXML.endGame);
		}
	}

	this.getHasStart = getHasStart;
	function getHasStart() {
		return false;
	}

	this.hasMuteButton = hasMuteButton;
	function hasMuteButton() {
		return true;
	}


	//=======================================================================
	// CLEAR SOUNDS
	//=======================================================================
	this.onClearSounds = onClearSounds;
    function onClearSounds(){
		PFSound.unload("puzzle");
    }
}


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/puzzle/PFGamePuzzleListen.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFGamePuzzleListen.js 
//	PFGamePuzzleListen: listener of puzzle game
//*************************************************************

function PFGamePuzzleListen(){
	
	//=====================================================
	// VARIABLES
	//=====================================================
	var decoratorAction = new PFItemDecoratorAction();
	this.onLoad			= onLoad;
	this.onMouseMove 	= onMouseMove;
	this.onMouseUp 		= onMouseUp;
	this.onTouch 		= onTouch;
	
	//=====================================================
	// onLoad: resize piece 
	//=====================================================
	function onLoad(i,game,xml,items,folder){
		
		var actionXML = new PFActionXML();
		actionXML.load(folder, xml.items[i].getAction());	
		actions = actionXML.getAction();

		if(actionXML.getAction() == "small_big"){
			decoratorAction.calculateScale(i,0,actions,items);
		}
	}
	
	//=====================================================
	// onMouseUp: validate piece position
	//=====================================================
	function onMouseUp(target,xml,i,game,items,container,highcontainer){
        if(xml.items[i].isActive() == "true"
		    && Math.abs(target.x - parseFloat(xml.items[i].getFinalX()))<80 &&
			Math.abs(target.y - parseFloat(xml.items[i].getFinalY()))<80){
				Tween.get(target).to({x:parseFloat(xml.items[i].getFinalX())},100).play(Tween.get(target).to({y:parseFloat(xml.items[i].getFinalY())},100));
	            Tween.get(target.item).to({x:parseFloat(xml.items[i].getFinalX())},100).play(Tween.get(target.item).to({y:parseFloat(xml.items[i].getFinalY())},100));
				xml.items[i].setMarked(true);
				highcontainer.removeChild(items[i]);
	            highcontainer.removeChild(target);
				container.addChild(items[i]);
                communicationLayer.onCorrect(0);
		}
        else{
            communicationLayer.onIncorrect(0);
            Tween.get(target).to({x:parseFloat(xml.items[i].getX())},100).play(Tween.get(target).to({y:parseFloat(xml.items[i].getY())},100));
	        Tween.get(target.item).to({x:parseFloat(xml.items[i].getX())},100).play(Tween.get(target.item).to({y:parseFloat(xml.items[i].getY())},100));
        }
	}
	
	//=====================================================
	// onMouseMove: drag and drop
	//=====================================================
	function onMouseMove(ev,target,offset){
		target.x = ev.stageX+offset.x;
		target.y = ev.stageY+offset.y;
		target.item.x = ev.stageX+offset.x;
		target.item.y = ev.stageY+offset.y;
	}
	
	//=====================================================
	// onTouch: play sound
	//=====================================================
	function onTouch(i,game,xml){
		var itSound = xml.items[i].getSound()
		if(itSound != ""){
			PFSound.play("puzzle");
		}
	}
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/findMe/PFItemFindMe.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************//	File: PFItemFindMe.js //	PFItemFindMe: create particular item properties//*************************************************************function PFItemFindMe(action,actionLoops,run,sound,folder,id,state,posX,posY,text,rgb){		//=====================================================	// VARIABLES	//=====================================================	if(sound==""){		this.sound ="";	}else{		this.sound = "./"+GAME_FOLDER+"/"+folder+"/sounds/"+sound;	}	this.action         = action;	this.actionLoops    = actionLoops;	this.run            = run;	this.sound          = sound;	this.folder         = folder;	this.id             = id;	this.state          = state;	this.posX           = posX;	this.posY           = posY;	this.text 			= text;	this.rgb 			= rgb;	this.getText 		= getText;	this.getRgb			= getRgb;			this.getAction = getAction;	this.getActionLoops = getActionLoops;	this.getRun = getRun;	this.getSound = getSound;	this.getId = getId;	this.getPosX = getPosX;	this.getPosY = getPosY;	this.getState = getState;	this.setState = setState;		//=====================================================	// GETS	//=====================================================	function getId(){		return this.id;	}	function getAction(){		return this.action;	}	function getActionLoops(){		return this.ActionLoops;	}	function getRun(){		return this.run;	}	function getSound(){		return this.sound;	}	function getPosX(){		return this.posX;	}	function getPosY(){		return this.posY;	}	function getState(){		return this.state;	}	function getText() {		return this.text;	}	function getRgb() {		return this.rgb;	}	//=====================================================	// SETS	//=====================================================	function setState(newState){		this.state = newState;	}}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/findMe/PFGameFindMe.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFGameFindMe.js 
//	PFGameFindMe: game find me
//*************************************************************/

function PFGameFindMe(){
	
	//======================================================================			
	// VARIABLES
	//======================================================================
	var items;
	var newXML;
	var imgEmpty;
	var images;
	var itemRandom;
	var nRows;
	var nCols;
	var matrix;
	var matrixDimension;
	var numLost;
	var srcLost;
	var endGame = false;
	var level;
	var containerMatrix;
	var num = 0;
	var newx, newy;
	var i, j;
	var start = false;
	var takenPositions;
	
	
	this.load = load;
	this.show = show;
	
	var itemDown = null;
	
	var baseGame;
	
	//======================================================================			
	// LOAD
	//======================================================================
	function load(game,folder){

		newXML = new PFXMLFindMe();
		newXML.load(game,folder);

        themeXML.getFindmeInfo();

		level 	= newXML.level;
		getValuesLevel();
		items	= new Array(matrixDimension+1);
		createItemsGame(game,newXML);
		PFSound.load('tick',"./"+GAME_FOLDER+"/sounds/boto.mp3");
	}
	
	//======================================================================			
	// SHOW GAME
	//======================================================================
	function show(game,folder,direction,containerAux,containerAnt){
		baseGame = new PFBaseGame();
		baseGame.create(this,game,folder,containerAux, containerAnt);		
	}
	
	//=====================================================
	// BUILD PRELOAD MANIFEST
	//=====================================================
	this.buildPreloadManifest = buildPreloadManifest
	function buildPreloadManifest(itemsManifest,game){
		for ( i=0; i<newXML.numLostItems; i++){
			itemsManifest.push(newXML.items[i].getSrc());
		}
		//itemsManifest.push(newXML.background.getSrc());
		itemsManifest.push("./"+GAME_FOLDER+"/theme/images/findme/empty.png");
		return itemsManifest;
	}	
	
	//=====================================================
	// ON ADD MENU
	//=====================================================
	this.onAddMenu = onAddMenu;
	function onAddMenu(){}
		
	//=====================================================
	// ON SHOW GAME
	//=====================================================
	this.onShowGame = onShowGame;
	function onShowGame(){
	
		var bg2 = new Bitmap(newXML.background.getSrc());

        communicationLayer.setNumberOfQuestions(itemRandom.length);
		
		containerMatrix = new Container();
		
		baseGame.containerBase.addChild(containerMatrix);
		
		// blur and desaturate the background image:		
		bg2.cache(0,615,WIDTH,615);
		
		baseGame.containerBase.addChild(bg2);
		
		images = new Array(matrixDimension+1);
		
		/*Dragable empty matrix*/
		imgEmpty 		= new Bitmap("./"+GAME_FOLDER+"/theme/images/findme/empty.png");
		imgEmpty.x		= 0; imgEmpty.y=0;
		imgEmpty.scaleX	= WIDTH;
		imgEmpty.scaleY	= HEIGHT;
		containerMatrix.addChild(imgEmpty);
		imgEmpty.onPress = emptyDrag;
		
		var k=0;
		for (var i = 0; i < nRows; i++){	// load matrix bitmaps
			for (var j = 0; j < nCols; j++){	
				if(matrix[i][j].getSrc().charAt( matrix[i][j].getSrc().length-1 ) != "/" &&
                   matrix[i][j].getSrc().substr(matrix[i][j].getSrc().length - 4) != "null" ){

					images[k] 		= new Image();
					images[k].src 	= matrix[i][j].getSrc();
					images[k].id 	= matrix[i][j].getId();
					images[k].i 	= i;
					images[k].j 	= j;
					images[k].k 	= k;								
					images[k].onload = loadBitmapMatrix;
				}else{
					loadTextMatrix(i,j,k, matrix[i][j].getId());
				}
				k++;
			}
		}	//Paint Down Element Background
		
		/*Lost Item Down*/
		numLost = 0;	//Init lost Items
		srcLost = newXML.items[itemRandom[numLost]].getId();
		if(newXML.items[itemRandom[numLost]].getSrc().charAt( newXML.items[itemRandom[numLost]].getSrc().length-1 ) != "/" &&
		   newXML.items[itemRandom[numLost]].getSrc().substr(newXML.items[itemRandom[numLost]].getSrc().length - 4) != "null" ){

			images[k] = new Image();
			images[k].src = newXML.items[itemRandom[numLost]].getSrc();
			images[k].onload = function(){
				loadBitmapDown(itemRandom[numLost],baseGame.getGame(),k);
			};
		}else{
			loadTextDown(itemRandom[numLost],baseGame.getGame(),k,baseGame.getFolder(),newXML.items[itemRandom[numLost]].getId());
		}
		var num=0;

		var itemsManifest= new Array(nRows);
		for ( i=0; i<nRows; i++){
				itemsManifest[num]=matrix[i][0].getSrc();
				num++;
		}
	}

	//=======================================================================
	// ON START GAME
	//=======================================================================
	this.onStartGame = onStartGame;
	function onStartGame(){
		Tween.get(itemDown).to({alpha:1},400);
	}	
	
	
	//======================================================================
	// controlRepeatPos: evaluate that if position in matrix is already taken
	//======================================================================
	function controlRepeatPos(randi,randj, pos){
		var found = false;
		if(randi == 0 && (randj == 0 || randj == 8 || randj == 9)){
			found = true;
		}
		for(var i = 0; i <takenPositions.length; i++){
			if(takenPositions[i][0] == randi && takenPositions[i][1] == randj){
				found = true;
			}
		}
		return found;		
	}
		
	//=======================================================================================			
	// createItemsGame: create game; elements of matrix (positions) and items will be lost
	//=======================================================================================
	function createItemsGame(game){
		//----------------------------------------------
		//Dimension the matrix
		//----------------------------------------------
		matrix = new Array (nRows);
		for (i=0;i<nRows;i++){	
			matrix[i] = new Array (nCols); 	
		}
		
		takenPositions = new Array(newXML.numLostItems);
		
		//----------------------------------------------
		//Fill the matrix
		//----------------------------------------------
		
		itemRandom = new Array(newXML.numLostItems);
		for(i=0;i<newXML.numLostItems;i++){
			do{
				//----------------------------------------------
				//Select which items will be lost
				//----------------------------------------------				
				itemRandom[i] = Math.floor(Math.random()*newXML.items.length);				
			}while(controlRepeat(itemRandom,i)==true && i>0);
			
			newXML.items[itemRandom[i]].setState(0);				
			var randI = 0;
			var randJ = 0;
			
			do{
				randI = Math.floor(Math.random()*(nRows-1));				
				randJ = Math.floor(Math.random()*(nCols-1));				
			}while(controlRepeatPos(randI,randJ,i) == true);					
			
			takenPositions[i] = [randI,randJ,itemRandom[i]];			
		}		
		
		
		//----------------------------------------------
		//Create matrix with all items, random elements
		//----------------------------------------------
		var itemMatrix = 0;
		var countRandItems = 0;
		for(var i=0;i<nRows;i++){
			for(var j=0;j<nCols;j++){
				do{
					itemMatrix = Math.floor(Math.random()*newXML.items.length);
				}while(controlRepeat2(itemMatrix,game) == true);
	
				PFItemFindMe.prototype = new PFItem(newXML.items[itemMatrix].getSrc(), 0, 0, newXML.items[itemMatrix].getScale(), newXML.items[itemMatrix].getRotation(),"");
				
				if(newXML.items[itemMatrix].getState() == 1){
					matrix[i][j] = new PFItemFindMe(	newXML.items[itemMatrix].getAction(), 
														newXML.items[itemMatrix].getActionLoops(), 
														newXML.items[itemMatrix].getRun(), 
														newXML.items[itemMatrix].getSound(), 
														"", 
														newXML.items[itemMatrix].getId(), 
														1, i, j,
														newXML.items[itemMatrix].getText(),
														newXML.items[itemMatrix].getRgb());
				}
				
				matrix[i][j].setSrc(newXML.items[itemMatrix].getSrc());	
				
				if(i == nRows-1 && j == nCols-1){
					for(c=0;c<newXML.numLostItems;c++){
						matrix[takenPositions[c][0]][takenPositions[c][1]] = new PFItemFindMe(newXML.items[takenPositions[c][2]].getAction(), newXML.items[takenPositions[c][2]].getActionLoops(), newXML.items[takenPositions[c][2]].getRun(), newXML.items[takenPositions[c][2]].getSound(), "", newXML.items[takenPositions[c][2]].getId(), -1, takenPositions[c][0], takenPositions[c][1],
						newXML.items[takenPositions[c][2]].getText(),
						newXML.items[takenPositions[c][2]].getRgb());
						matrix[takenPositions[c][0]][takenPositions[c][1]].setSrc(newXML.items[takenPositions[c][2]].getSrc());
					}
				}
			}
		}
	}

    //============================================================		
	// emptyDrag: Paint Down background for image d to find
	//============================================================	
	function emptyDrag(){
		(function(target) {
			imgEmpty.onPress = function(evt) {
				if (!endGame && baseGame.isGameActive()){
					var offset = {x:containerMatrix.x-evt.stageX, y:containerMatrix.y-evt.stageY};
					evt.onMouseMove = function(ev) {
						if (!endGame){
							switch(level){
								//----------------------------------------------
								//MEDIUM LEVEL
								//----------------------------------------------
								case "1":
									if (ev.stageX+offset.x < 0 && ev.stageX+offset.x > (-495)){ containerMatrix.x = ev.stageX+offset.x; }
									if (ev.stageY+offset.y < 0 && ev.stageY+offset.y > (-905)){ containerMatrix.y = ev.stageY+offset.y; }
								break;
								//----------------------------------------------
								//HARD LEVEL
								//----------------------------------------------
								case "2":
									if (ev.stageX+offset.x < 0 && ev.stageX+offset.x > (-1595)){ containerMatrix.x = ev.stageX+offset.x; }
									if (ev.stageY+offset.y < 0 && ev.stageY+offset.y > (-2000)){ containerMatrix.y = ev.stageY+offset.y; }
								break;
							}
						}
					}
				}
			}
		})(eval(imgEmpty));
		//})(imgEmpty);
	}
	
	//=============================================================
	// getValuesLevel: matrix dimensioned according to the level
	//=============================================================
	function getValuesLevel(){
		switch(level){
			case "0":
				//----------------------------------------------
				//EASY LEVEL
				//----------------------------------------------
				nRows = 6;
				nCols = 10;
			break;
			case "1":
				//----------------------------------------------
				//MEDIUM LEVEL
				//----------------------------------------------
				nRows = 15;
				nCols = 15;
			break;
			case "2":	//hard
				//----------------------------------------------
				//HARD LEVEL
				//----------------------------------------------
				nRows = 26;
				nCols = 26;
			break;
		}
		matrixDimension = nCols*nRows;
	}
	//============================================
	// loadTextDown: show down item to search
	//============================================
	function loadTextDown(i,game,k,folder,id){	
		if(itemDown != null){			
			baseGame.containerBase.removeChild(itemDown);			
		}
		var bm = new PFBaseItem(newXML.items[id-1],id-1);
		itemDown = bm.getText();		
		
		itemDown.scaleX	= 1;
		itemDown.scaleY	= 1;
		itemDown.x		= themeXML.itemToFindeThemeItem.getX();
		itemDown.y		= themeXML.itemToFindeThemeItem.getY();

		baseGame.containerNav.addChild(itemDown);
		itemDown.alpha = 0;

		if (!themeXML.instructionIsStart)
			Tween.get(itemDown).to({alpha:1},400);
	}
	//============================================
	// loadBitmapDown: show down item to search
	//============================================
	function loadBitmapDown(i,game,k,folder){		
		if(itemDown != null){			
			baseGame.containerBase.removeChild(itemDown);			
		}
		itemDown 		= new Bitmap(images[k]);

        var scaleFactor 	= getImageScale(itemDown.image.width,itemDown.image.height, themeXML.itemToFindeThemeItem.getMaxWidth()/2);
		itemDown.regX = itemDown.image.width/2;
		itemDown.regY = itemDown.image.height/2;
        itemDown.scaleX	= scaleFactor;
        itemDown.scaleY	= scaleFactor;
        itemDown.x		= themeXML.itemToFindeThemeItem.getX();
        itemDown.y		= themeXML.itemToFindeThemeItem.getY();
        baseGame.containerNav.addChild(itemDown);
        itemDown.alpha = 0;

		if (!themeXML.instructionIsStart)
			Tween.get(itemDown).to({alpha:1},400);
	}

	//=========================================================
	// loadTextMatrix: show matrix, with all elements painted
	//=========================================================
	function loadTextMatrix(i,j,k,id){
		var id 		= id;
		var posRow 	= i;
		var posCol 	= j;
		var k 		= k;
		var game 	= baseGame.getGame();
		var folder 	= baseGame.getFolder();
		
		var bm = new PFBaseItem(newXML.items[id-1],id-1);
		items[k] = bm.getText();
		items[k].scaleX = 0.6;
		items[k].scaleY = 0.6;
		items[k].defaultScaleX = 0.6;
		items[k].defaultScaleY = 0.6;

        newx=posCol*(WIDTH/ (nCols + 1))  + WIDTH/13 + 0;
        newy=posRow*(HEIGHT/(nRows + 2)) + HEIGHT/12 + 30;
		
		items[k].x = newx;
		items[k].y = newy;		

		containerMatrix.addChild(items[k]);

		var findmeShape = addCustomOnClick({item:items[k],c:containerMatrix},function(){
			if (!endGame && baseGame.isGameActive()){
				onTouch(posRow,posCol,game,folder,k,0);	//Item clicked call idle
			}
		});

		findmeShape.defaultScaleX = items[k].defaultScaleX;
		findmeShape.defaultScaleY = items[k].defaultScaleY;
	}

	//=========================================================
	// loadBitmapMatrix: show matrix, with all elements painted
	//=========================================================
	function loadBitmapMatrix(event){
		var id 		= event.target.id;
		var posRow 	= event.target.i;
		var posCol 	= event.target.j;
		var k 		= event.target.k;
		var game 	= baseGame.getGame();
		var folder 	= baseGame.getFolder();
			
		items[k] = new Bitmap(images[k]);
        items[k].onMouseOver = function(e)    { document.body.style.cursor='pointer'; }
        items[k].onMouseOut = function(e)     { document.body.style.cursor='default'; }

		var size;
		if (parseInt(WIDTH) > parseInt(HEIGHT)) {
			size = HEIGHT/(nRows + 1);
			PFDebug(HEIGHT);
		}
		else
		{
			size = WIDTH/(nCols + 2);
			PFDebug(WIDTH);
		}

		var scaleFactor = getImageScale(items[k].image.width,items[k].image.height, size*0.9);
		items[k].scaleX = scaleFactor;
		items[k].scaleY = scaleFactor;
		items[k].defaultScaleX = scaleFactor;
		items[k].defaultScaleY = scaleFactor;
		
		items[k].regX = (items[k].image.width/2);
		items[k].regY = (items[k].image.height/2);
				
		newx=posCol*(WIDTH/ (nCols + 1))  + WIDTH/13 + 15;
		newy=posRow*(HEIGHT/(nRows + 2)) + HEIGHT/12 + 30;
		
		items[k].x = newx;
		items[k].y = newy - 20;

		containerMatrix.addChild(items[k]);

		var findmeShape = addCustomOnClick({item:items[k],c:containerMatrix},function(){
			if (!endGame && baseGame.isGameActive()){
				onTouch(posRow,posCol,game,folder,k,0);	//Item clicked call idle
			}
		});

		findmeShape.defaultScaleX = items[k].defaultScaleX;
		findmeShape.defaultScaleY = items[k].defaultScaleY;

	}
	
	//=================================================
	// onTouch: validate if item clicked is item lost
	//=================================================
	function onTouch(posRow,posCol,game,folder,k,kind){
		if(baseGame.isGameActive()){
			if(matrix[posRow][posCol].getId() == srcLost){
                communicationLayer.onCorrect(0);
				if(kind == 1){
					var scaleFactor 	= getImageScale(items[k].image.width,items[k].image.height, WIDTH/(nCols + 2) );
					Tween.get(items[k])	.to({scaleX:scaleFactor*1.5,scaleY:scaleFactor*1.5},200).to({scaleX:scaleFactor,scaleY:scaleFactor},200);
				}
				Tween.get(items[k]).to({rotation:360},400);
				
				PFSound.play('tick');
				if (numLost<=itemRandom.length) { numLost++; }

				if(numLost==itemRandom.length){
					endGame=true;
					baseGame.endGame(newXML.endGame);
				}else{
					Tween.get(itemDown).to({alpha:0},400).call(function(){
						srcLost = newXML.items[itemRandom[numLost]].getId();

                        if(images[matrixDimension] == undefined){
                            images[matrixDimension] = new Image();
                            images[matrixDimension].src = newXML.items[itemRandom[numLost]].getSrc();
                            images[matrixDimension].onload = function(){
                                loadBitmapDown(itemRandom[numLost],baseGame.getGame(),matrixDimension);

                            };
                        }

                        if(newXML.items[itemRandom[numLost]].getSrc().charAt( newXML.items[itemRandom[numLost]].getSrc().length - 1) != "/" &&
                           newXML.items[itemRandom[numLost]].getSrc().substr( newXML.items[itemRandom[numLost]].getSrc().length - 4) != "null" ){

                            images[matrixDimension].src 	 = newXML.items[itemRandom[numLost]].getSrc();
                            images[matrixDimension].onload = function(){
                                loadBitmapDown(itemRandom[numLost],game,matrixDimension,folder);
	                            Tween.get(itemDown).to({alpha:1},400);
                            };

                        }else{
                            loadTextDown(itemRandom[numLost],game,matrixDimension,folder,newXML.items[itemRandom[numLost]].getId());
	                        Tween.get(itemDown).to({alpha:1},400);
                        }

					});
				}
			}
            else{
                communicationLayer.onIncorrect(0);
            }
		}
	}

	//=============================================================
	// controlRepeat: evaluate that if item is already a lostItem 
	//=============================================================
	function controlRepeat(aControl,num){
		var repetit = false;
		for(i=0;i<num;i++){
			if(aControl[i]==aControl[num]){ repetit = true; }
		}
		return repetit;
	}
	//======================================================================
	// controlRepeat2: evaluate that if this lostItem is already in matrix
	//======================================================================
	function controlRepeat2(aControl,game){
		var repetit = false;
		if(newXML.items[aControl].getState()<1){ 
			repetit = true;
		}
		return repetit;
	}

	this.getHasStart = getHasStart;
	function getHasStart() {
		return true;
	}

	this.hasMuteButton = hasMuteButton;
	function hasMuteButton() {
		return true;
	}

	//=====================================================
	// CLEAR SOUNDS
	//=====================================================
	this.onClearSounds = onClearSounds;
    function onClearSounds(){
        PFSound.unload('tick');
   }
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/listenAndTouch/PFItemTouchListen.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFItemTouchListen.js 
//	PFItemTouchListen: create particular item properties
//*************************************************************



function PFItemTouchListen(action,actionLoops,run,sound,folder,text,rgb){
	
	//=====================================================
	// VARIABLES
	//=====================================================
	if(sound==""){
		this.sound = "";
	}else{
		this.sound = "./"+GAME_FOLDER+"/"+folder+"/sounds/"+sound;
	}
		
	this.offsetX;
	this.offsetY;
	this.action			= action;
	this.actionLoops	= actionLoops;
	this.run			=run;
	this.actionRotation;
	this.actionScale;
	this.actionMove;
	this.actionJump;
	this.text = text;
	this.rgb = rgb;
	//=====================================================
	// GETS
	//=====================================================
	this.getAction = getAction;
	this.getActionLoops = getActionLoops;
	this.getRun = getRun;
	this.getSound = getSound;
	this.getActionRotation = getActionRotation;
	this.getActionScale = getActionScale;
	this.getActionJump = getActionJump;
	this.getActionMove = getActionMove;
	this.getOffsetX = getOffsetX;
	this.getOffsetY = getOffsetY;
	this.getText = getText;
	this.getRgb = getRgb;

	
	function getAction() {
		return this.action;
	}
	function getActionLoops() {
		return this.actionLoops;
	}
	function getRun() {
		return this.run;
	}
	function getSound() {
		return this.sound;
	}	
	function getOffsetX(){
		return this.offsetX;
	}
	function getOffsetY(){
		return this.offsetY;
	}	
	function getActionRotation(){
		return this.actionRotation;
	}	
	function getActionScale(){
		return this.actionScale;
	}	
	function getActionMove(){
		return this.actionMove;
	}	
	function getActionJump(){
		return this.actionJump;
	}
	function getText() {
		return this.text;
	}
	function getRgb() {
		return this.rgb;
	}
	//=====================================================
	// SETS
	//=====================================================
	this.setActionRotation	= setActionRotation;
	this.setActionScale 	= setActionScale;
	this.setActionJump		= setActionJump;
	this.setActionMove		= setActionMove;	
	this.setOffsetX 		= setOffsetX;
	this.setOffsetY 		= setOffsetY;
	
	function setOffsetX(value){
		this.offsetX = value;
	}
	function setOffsetY(value){
		this.offsetY = value;
	}
	function setActionRotation(value){
		this.actionRotation=value;
	}
	function setActionScale(value){
		this.actionScale=value;
	}
	function setActionMove(value){
		this.actionMove=value;
	}
	function setActionJump(value){
		this.actionJump=value;
	}
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/touch2/PFItemTouch2.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFItemTouchListen.js 
//	PFItemTouchListen: create particular item properties
//*************************************************************



function PFItemTouchListen(action,actionLoops,run,sound,folder,text,rgb){
	
	//=====================================================
	// VARIABLES
	//=====================================================
	if(sound==""){
		this.sound = "";
	}else{
		this.sound = "./"+GAME_FOLDER+"/"+folder+"/sounds/"+sound;
	}
		
	this.offsetX;
	this.offsetY;
	this.action			= action;
	this.actionLoops	= actionLoops;
	this.run			=run;
	this.actionRotation;
	this.actionScale;
	this.actionMove;
	this.actionJump;
	this.text = text;
	this.rgb = rgb;
	//=====================================================
	// GETS
	//=====================================================
	this.getAction = getAction;
	this.getActionLoops = getActionLoops;
	this.getRun = getRun;
	this.getSound = getSound;
	this.getActionRotation = getActionRotation;
	this.getActionScale = getActionScale;
	this.getActionJump = getActionJump;
	this.getActionMove = getActionMove;
	this.getOffsetX = getOffsetX;
	this.getOffsetY = getOffsetY;
	this.getText = getText;
	this.getRgb = getRgb;

	
	function getAction() {
		return this.action;
	}
	function getActionLoops() {
		return this.actionLoops;
	}
	function getRun() {
		return this.run;
	}
	function getSound() {
		return this.sound;
	}	
	function getOffsetX(){
		return this.offsetX;
	}
	function getOffsetY(){
		return this.offsetY;
	}	
	function getActionRotation(){
		return this.actionRotation;
	}	
	function getActionScale(){
		return this.actionScale;
	}	
	function getActionMove(){
		return this.actionMove;
	}	
	function getActionJump(){
		return this.actionJump;
	}
	function getText() {
		return this.text;
	}
	function getRgb() {
		return this.rgb;
	}
	//=====================================================
	// SETS
	//=====================================================
	this.setActionRotation	= setActionRotation;
	this.setActionScale 	= setActionScale;
	this.setActionJump		= setActionJump;
	this.setActionMove		= setActionMove;	
	this.setOffsetX 		= setOffsetX;
	this.setOffsetY 		= setOffsetY;
	
	function setOffsetX(value){
		this.offsetX = value;
	}
	function setOffsetY(value){
		this.offsetY = value;
	}
	function setActionRotation(value){
		this.actionRotation=value;
	}
	function setActionScale(value){
		this.actionScale=value;
	}
	function setActionMove(value){
		this.actionMove=value;
	}
	function setActionJump(value){
		this.actionJump=value;
	}
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/listenAndTouch/PFGameTouchListen.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFGameTouchListen.js 
//	PFGameTouchListen: game listen and touch
//*************************************************************/

var PFGameTouchListen = function(){
	
	//=====================================================
	// VARIABLES
	//=====================================================
	var items;
	var newXML;
	var touchListenListen;
	var usedItems;
	var numUsed;
	var itemRandom;
	var images;		
	var num		= 0;
	var fiJoc	= false;
	var offsetx, offsety;
	var newx, newy;
	var i;
	var gameGlob;
	
	this.load = load;
	this.show = show;
	
	var baseGame;	
	
	//=======================================================================			
	// LOAD
	//======================================================================
	function load(game,folder){		
		
		newXML = new PFXMLListenTouch();
		newXML.load(game,folder);

		PFSound.load('end',"./"+GAME_FOLDER+"/sounds/ok.mp3");
		items 			  = new Array(newXML.items.length);
		touchListenListen = new PFGameTouchListenListen();
		gameGlob 	= game;
	}
	
	//=======================================================================			
	// SHOW GAME : It is a create, not a show
	//=======================================================================
	function show(game,folder,direction,containerAux,containerAnt){	
		baseGame = new PFBaseGame();
		baseGame.create(this,game,folder,containerAux, containerAnt);
	}
	
	//=====================================================
	// BUILD PRELOAD MANIFEST
	//=====================================================
	this.buildPreloadManifest = buildPreloadManifest
	function buildPreloadManifest(itemsManifest,game){		
		//itemsManifest.push(newXML.background.getSrc());
		for ( i=0; i<items.length; i++){
			itemsManifest.push(newXML.items[i].getSrc());
		}		
		return itemsManifest;
	}	
	
	//=====================================================
	// ON ADD MENU
	//=====================================================
	this.onAddMenu = onAddMenu;
	function onAddMenu(){
	}
	
	//=======================================================================
	// ON SHOW GAME
	//=======================================================================
	this.onShowGame = onShowGame;
	function onShowGame(){		
		//var background = new Bitmap(newXML.background.getSrc());
		//baseGame.containerBase.addChild(background);
		communicationLayer.setNumberOfQuestions(items.length);
		images = new Array(items.length);
		
		for (i = 0; i < items.length; i++){
			if(newXML.items[i].getSrc().charAt( newXML.items[i].getSrc().length-1 ) != "/"){
				images[i] 		= new Image();
				images[i].src 	= newXML.items[i].getSrc();
				images[i].i 	= i;
				images[i].onload = loadBitmaps; //Load the bitmaps
			}else{
				loadText(i);
			}
			PFSound.load("sound"+i,newXML.items[i].getSound());
		}
		
		/* Select which animal we've to touch */
		usedItems 	= new Array(items.length);
		numUsed  	= 0;
		
		itemRandom 	= Math.floor(Math.random()*newXML.items.length);
		touchListenListen.setActual(itemRandom);	
		
        var repeatButton = themeXML.soundThemeItem.create();
		repeatButton.image.onload = function () {
			baseGame.containerNav.addChild(repeatButton);
			addCustomOnClick({item:repeatButton,c:baseGame.containerNav},repeat);
		}

		//repeatButton.onPress = repeat
	}
	
	//=======================================================================
	// ON START GAME
	//=======================================================================
	this.onStartGame = onStartGame;
	function onStartGame(){
		if(themeXML.instructionVisible || themeXML.instructionIsStart)
            touchListenListen.playSound(itemRandom,baseGame.getGame(),newXML);
	}		
	
	//=====================================================
	// repeat: repeat sound
	//=====================================================
	function repeat(){
		touchListenListen.repeatSound();
	}
	//=====================================================
	// loadText: load and show all items images 
	//=====================================================
	function loadText(evt){
		i = evt;
		var game = baseGame.getGame();
		var folder = baseGame.getFolder();
		var bm = new PFBaseItem(newXML.items[i],i);
		items[i] = bm.getText();
		
		var scaleFactor = 1;
		if (newXML.items[i].getScale()!=1000){
			scaleFactor = newXML.items[i].getScale()/1000;
			items[i].scaleX = scaleFactor;
			items[i].scaleY = scaleFactor;
		}
		items[i].defaultScaleX = items[i].scaleX;
		items[i].defaultScaleY = items[i].scaleX;
			
		newx			= parseInt(newXML.items[i].getX());
		newy			= parseInt(newXML.items[i].getY());
		
		items[i].x	  	= newx;
		items[i].y	  	= newy;
		newXML.items[i].setOffsetX(offsetx);
		newXML.items[i].setOffsetY(offsety);
		
		items[i].rotation	=  newXML.items[i].getRotation();
		items[i].defaultRotation	=  newXML.items[i].getRotation();
		
		baseGame.containerBase.addChild(items[i]);
		items[i].i = i;

		var resultShape = addCustomOnClick({item:items[i],c:baseGame.containerBase},onTouch);
		resultShape.i = i;
		//items[i].onPress = onTouch;
	}
	//=====================================================
	// loadBitmaps: load and show all items images 
	//=====================================================
	function loadBitmaps(evt){
		i = evt.target.i;
		var game = baseGame.getGame();
		var folder = baseGame.getFolder();
		items[i] = new Bitmap(images[i]);
		
		var scaleFactor = 1;
		if (newXML.items[i].getScale()!=1000){
			scaleFactor = newXML.items[i].getScale()/1000;
			items[i].scaleX = scaleFactor;
			items[i].scaleY = scaleFactor;
		}
		items[i].defaultScaleX = items[i].scaleX;
		items[i].defaultScaleY = items[i].scaleX;
			
		offsetx			= (parseInt(items[i].image.width)/2);
		offsety			= (parseInt(items[i].image.height)/2);
		newx			= parseInt(newXML.items[i].getX());
		newy			= parseInt(newXML.items[i].getY());
		items[i].regX 	= offsetx;
		items[i].regY 	= offsety;
		items[i].x	  	= newx;
		items[i].y	  	= newy;
		newXML.items[i].setOffsetX(offsetx);
		newXML.items[i].setOffsetY(offsety);
		
		items[i].rotation	=  newXML.items[i].getRotation();
		items[i].defaultRotation	=  newXML.items[i].getRotation();
		
		baseGame.containerBase.addChild(items[i]);
		items[i].i = i;

		var resultShape = addCustomOnClick({item:items[i],c:baseGame.containerBase},onTouch);
		resultShape.i = i;

		//items[i].onPress = onTouch;
	}
	
	//================================================================================================
	// onTouch: evaluate if items it's OK, in afirmative case call animation and next item to click
	//================================================================================================
	function onTouch(evt){
		i 			= evt.target.i;
		var game 	= baseGame.getGame();
		var folder	= baseGame.getFolder();
		
		//----------------------------
		// item clicked correct
		//----------------------------
		if (i==itemRandom){
            communicationLayer.onCorrect(0);
			usedItems[numUsed] = itemRandom;
			//--------------------------------
			// not all items appeared
			//--------------------------------
			if (numUsed<(items.length-1)){	
				touchListenListen.onTouch(i,game,newXML,items,folder);
				do{
					itemRandom = Math.floor(Math.random()*newXML.items.length);
				}while(controlRepetit(itemRandom)==true);
				numUsed++;
				touchListenListen.setActual(itemRandom);
				touchListenListen.playSound(itemRandom,game,newXML);
			}else{
				touchListenListen.onTouch(i,game,newXML,items,folder);
				fiJoc = true;
				Tween.get(containerPrincipal).wait(100).call(function(){
					baseGame.endGame(newXML.endGame);
				});
			}
		}
        else{
            communicationLayer.onIncorrect(0);
        }
	}	
	
	//==========================================================================
	// controlRepetit: evaluate if this item is already used (appeared before)
	//==========================================================================
	function controlRepetit(itemR){
		var repetit = false;
		for(i=0;i<=numUsed;i++){
			if(usedItems[i]==itemR){ repetit = true; }
		}
		return repetit;
	}

	this.getHasStart = getHasStart;
	function getHasStart() {
		return true;
	}

	this.hasMuteButton = hasMuteButton;
	function hasMuteButton() {
		return true;
	}

	//=====================================================
	// CLEAR SOUNDS
	//=====================================================		
	this.onClearSounds = onClearSounds;
    function onClearSounds(){
		for(i=0;i<items.length;i++){
            PFSound.unload("sound"+i);
        }      
    }
    function clearSounds(){
        for(i=0;i<items.length;i++){
            PFSound.unload("sound"+i);
        }
        PFSound.unload('end');
    }	
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/touch2/PFGameTouch2.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFGameTouch2.js 
//	PFGameTouch2: game listen and touch 2
//*************************************************************/

var PFGameTouch2 = function(){
	
	//=====================================================
	// VARIABLES
	//=====================================================
	var items;
	var newXML;
	var touchListenListen;
	var usedItems;
	var numUsed;
	var itemRandom;
	var images;		
	var num		= 0;
	var fiJoc	= false;
	var offsetx, offsety;
	var newx, newy;
	var i;
	var gameGlob;
	
	this.load = load;
	this.show = show;
	
	var baseGame;	
	
	//=======================================================================			
	// LOAD
	//======================================================================
	function load(game,folder){		
		
		newXML = new PFXMLTouch2();
		newXML.load(game,folder);
		
		if(newXML.wrongSound != null){
			PFSound.load("wrongSound",newXML.wrongSound);
		}		
		if(newXML.tryAgainSound != null){
			
			PFSound.load("tryAgainSound",newXML.tryAgainSound);
		}

		PFSound.load('end',"./"+GAME_FOLDER+"/sounds/ok.mp3");
		items 			  = new Array(newXML.items.length);
		touchListenListen = new PFGameTouch2Listen();
		gameGlob 	= game;
	}
	
	//=======================================================================			
	// SHOW GAME : It is a create, not a show
	//=======================================================================
	function show(game,folder,direction,containerAux,containerAnt){	
		baseGame = new PFBaseGame();
		baseGame.create(this,game,folder,containerAux, containerAnt);
	}
	
	//=====================================================
	// BUILD PRELOAD MANIFEST
	//=====================================================
	this.buildPreloadManifest = buildPreloadManifest
	function buildPreloadManifest(itemsManifest,game){		
		//itemsManifest.push(newXML.background.getSrc());
		for ( i=0; i<items.length; i++){
			itemsManifest.push(newXML.items[i].getSrc());
		}		
		return itemsManifest;
	}	
	
	//=====================================================
	// ON ADD MENU
	//=====================================================
	this.onAddMenu = onAddMenu;
	function onAddMenu(){
	}
	
	//=======================================================================
	// ON SHOW GAME
	//=======================================================================
	this.onShowGame = onShowGame;
	function onShowGame(){		
		//var background = new Bitmap(newXML.background.getSrc());
		//baseGame.containerBase.addChild(background);
		communicationLayer.setNumberOfQuestions(items.length);
		images = new Array(items.length);
		
		for (i = 0; i < items.length; i++){
			if(newXML.items[i].getSrc().charAt( newXML.items[i].getSrc().length-1 ) != "/"){
				images[i] 		= new Image();
				images[i].src 	= newXML.items[i].getSrc();
				images[i].i 	= i;
				images[i].onload = loadBitmaps; //Load the bitmaps
			}else{
				loadText(i);
			}
			PFSound.load("sound"+i,newXML.items[i].getSound());
		}
		
		/* Select which animal we've to touch */
		usedItems 	= new Array(items.length);
		numUsed  	= 0;
		
		itemRandom 	= Math.floor(Math.random()*newXML.items.length);
		touchListenListen.setActual(itemRandom);	
		
        var repeatButton = themeXML.soundThemeItem.create();
		repeatButton.image.onload = function () {
			baseGame.containerNav.addChild(repeatButton);
			addCustomOnClick({item:repeatButton,c:baseGame.containerNav},repeat);
		}

		//repeatButton.onPress = repeat
	}
	
	//=======================================================================
	// ON START GAME
	//=======================================================================
	this.onStartGame = onStartGame;
	function onStartGame(){		
		if(themeXML.instructionVisible == true || typeof(themeXML.instructionVisible) == "undefined")
            touchListenListen.playSound(itemRandom,baseGame.getGame(),newXML);
	}		
	
	//=====================================================
	// repeat: repeat sound
	//=====================================================
	function repeat(){
		touchListenListen.repeatSound();
	}
	//=====================================================
	// loadText: load and show all items images 
	//=====================================================
	function loadText(evt){
		i = evt;
		var game = baseGame.getGame();
		var folder = baseGame.getFolder();
		var bm = new PFBaseItem(newXML.items[i],i);
		items[i] = bm.getText();
		
		var scaleFactor = 1;
		if (newXML.items[i].getScale()!=1000){
			scaleFactor = newXML.items[i].getScale()/1000;
			items[i].scaleX = scaleFactor;
			items[i].scaleY = scaleFactor;
		}
		items[i].defaultScaleX = items[i].scaleX;
		items[i].defaultScaleY = items[i].scaleX;
			
		newx			= parseInt(newXML.items[i].getX());
		newy			= parseInt(newXML.items[i].getY());
		
		items[i].x	  	= newx;
		items[i].y	  	= newy;
		newXML.items[i].setOffsetX(offsetx);
		newXML.items[i].setOffsetY(offsety);
		
		items[i].rotation	=  newXML.items[i].getRotation();
		items[i].defaultRotation	=  newXML.items[i].getRotation();
		
		baseGame.containerBase.addChild(items[i]);
		items[i].i = i;

		var resultShape = addCustomOnClick({item:items[i],c:baseGame.containerBase},onTouch);
		resultShape.i = i;
		//items[i].onPress = onTouch;
	}
	//=====================================================
	// loadBitmaps: load and show all items images 
	//=====================================================
	function loadBitmaps(evt){
		i = evt.target.i;
		var game = baseGame.getGame();
		var folder = baseGame.getFolder();
		items[i] = new Bitmap(images[i]);
		
		var scaleFactor = 1;
		if (newXML.items[i].getScale()!=1000){
			scaleFactor = newXML.items[i].getScale()/1000;
			items[i].scaleX = scaleFactor;
			items[i].scaleY = scaleFactor;
		}
		items[i].defaultScaleX = items[i].scaleX;
		items[i].defaultScaleY = items[i].scaleX;
			
		offsetx			= (parseInt(items[i].image.width)/2);
		offsety			= (parseInt(items[i].image.height)/2);
		newx			= parseInt(newXML.items[i].getX());
		newy			= parseInt(newXML.items[i].getY());
		items[i].regX 	= offsetx;
		items[i].regY 	= offsety;
		items[i].x	  	= newx;
		items[i].y	  	= newy;
		newXML.items[i].setOffsetX(offsetx);
		newXML.items[i].setOffsetY(offsety);
		
		items[i].rotation	=  newXML.items[i].getRotation();
		items[i].defaultRotation	=  newXML.items[i].getRotation();
		
		baseGame.containerBase.addChild(items[i]);
		items[i].i = i;

		var resultShape = addCustomOnClick({item:items[i],c:baseGame.containerBase},onTouch);
		resultShape.i = i;

		//items[i].onPress = onTouch;
	}
	
	//================================================================================================
	// onTouch: evaluate if items it's OK, in afirmative case call animation and next item to click
	//================================================================================================
	function onTouch(evt){
		i 			= evt.target.i;
		var game 	= baseGame.getGame();
		var folder	= baseGame.getFolder();
		
		//----------------------------
		// item clicked correct
		//----------------------------
		if (i==itemRandom){
            communicationLayer.onCorrect(0);
			usedItems[numUsed] = itemRandom;
			//--------------------------------
			// not all items appeared
			//--------------------------------
			if (numUsed<(items.length-1)){	
				touchListenListen.onTouch(i,game,newXML,items,folder);
				do{
					itemRandom = Math.floor(Math.random()*newXML.items.length);
				}while(controlRepetit(itemRandom)==true);
				numUsed++;
				touchListenListen.setActual(itemRandom);
				touchListenListen.playSound(itemRandom,game,newXML);
			}else{
				touchListenListen.onTouch(i,game,newXML,items,folder);
				fiJoc = true;
				Tween.get(containerPrincipal).wait(100).call(function(){
					baseGame.endGame(newXML.endGame);
				});
			}
		}
        else{
			switch(newXML.wrongMethod){				
				case "0":
					if(newXML.wrongSound != null){
						PFSound.play("wrongSound");
					}
					break;
				case "1":			
					if(newXML.tryAgainSound != null){
						PFSound.playWithCallback("tryAgainSound", function(){
							repeat();
						});
					}
					
					break;
				case "2":
					if(newXML.tryAgainSound != null){
						PFSound.play("tryAgainSound");
					}
					break;
			}
			
            communicationLayer.onIncorrect(0);
        }
	}	
	
	//==========================================================================
	// controlRepetit: evaluate if this item is already used (appeared before)
	//==========================================================================
	function controlRepetit(itemR){
		var repetit = false;
		for(i=0;i<=numUsed;i++){
			if(usedItems[i]==itemR){ repetit = true; }
		}
		return repetit;
	}


	this.getHasStart = getHasStart;
	function getHasStart() {
		return false;
	}

	this.hasMuteButton = hasMuteButton;
	function hasMuteButton() {
		return true;
	}
	
	//=====================================================
	// CLEAR SOUNDS
	//=====================================================		
	this.onClearSounds = onClearSounds;
    function onClearSounds(){
		for(i=0;i<items.length;i++){
            PFSound.unload("sound"+i);
        }      
    }
    function clearSounds(){
        for(i=0;i<items.length;i++){
            PFSound.unload("sound"+i);
        }
        PFSound.unload('end');
    }	
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/touch2/PFGameTouch2Listen.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFGameTouchListenListen.js 
//	PFGameTouchListenListen: listener of listen and touch game
//*************************************************************

var PFGameTouch2Listen = function(){
	
	//=====================================================
	// VARIABLES
	//=====================================================
	var decoratorAction = new PFItemDecoratorAction();
	var actual;

	this.onTouch=onTouch;
	this.playSound=playSound;
	this.getActual=getActual;
	this.setActual=setActual;
	this.repeatSound=repeatSound;
	
	//=====================================================
	// onTouch: animate
	//=====================================================
	function onTouch(i,game,xml,items,folder){
		
		var decoratorAction = new PFItemDecoratorAction();
		
		var actionXML = new PFActionXML();

		PFDebug("Actions: ");
		PFDebug(actionXML);

		actionXML.load(folder, xml.items[i].getAction());	
		actions = actionXML.getAction();

		PFDebug("Actions: ");
		PFDebug(actions);

		if(actionXML.getActionScale() != null && actionXML.getActionScale().length > 0){
			xml.items[i].setActionScale(actions);
			decoratorAction.calculateScale(i,0,xml.items[i].getActionScale(),items);
		}
		if(actionXML.getActionScale() != null && actionXML.getActionRotation().length > 0){
			xml.items[i].setActionRotation(actions);
			decoratorAction.calculateRotation(i,0,xml.items[i].getActionRotation(),items);
		}
		if(actionXML.getActionScale() != null && actionXML.getActionMove().length > 0){
			xml.items[i].setActionMove(actions);
			decoratorAction.calculateMovementX(i,0,items,xml,game);
			decoratorAction.calculateMovementY(i,0,items,xml,game);
		}
		if(actionXML.getActionScale() != null && actionXML.getActionJump().length > 0){
			xml.items[i].setActionJump(actions);
			decoratorAction.calculateMovementJump(xml.items[i].getActionJump(),xml,xml.items[i].getY(),i,game);
			decoratorAction.calculateJump(i,0,items,xml,game);
		}
	}
	
	//=====================================================
	// PLAY SOUND	
	//=====================================================
	function playSound(i,game,xml){
		actual 		= i;
		var itSound = xml.items[i].getSound();
		if(itSound != ""){
			PFSound.play("sound"+i);
		}
	}
	//=====================================================
	// PLAY SOUND ERROR
	//=====================================================
	function playSoundError(){
		//sound.play();
	}
	//=====================================================
	// REPEAT SOUND
	//=====================================================
	function repeatSound(){
		PFSound.play("sound"+actual);
	}
	//=====================================================
	// SETS
	//=====================================================
	function setActual(act){
		actual = act;
	}
	//=====================================================
	// GETS
	//=====================================================
	function getActual(){
		return actual;	
	}
}




/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/listenAndTouch/PFGameTouchListenListen.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFGameTouchListenListen.js 
//	PFGameTouchListenListen: listener of listen and touch game
//*************************************************************

var PFGameTouchListenListen = function(){
	
	//=====================================================
	// VARIABLES
	//=====================================================
	var decoratorAction = new PFItemDecoratorAction();
	var actual;

	this.onTouch=onTouch;
	this.playSound=playSound;
	this.getActual=getActual;
	this.setActual=setActual;
	this.repeatSound=repeatSound;
	
	//=====================================================
	// onTouch: animate
	//=====================================================
	function onTouch(i,game,xml,items,folder){
		
		var decoratorAction = new PFItemDecoratorAction();
		
		var actionXML = new PFActionXML();

		PFDebug("Actions: ");
		PFDebug(actionXML);

		actionXML.load(folder, xml.items[i].getAction());	
		actions = actionXML.getAction();

		PFDebug("Actions: ");
		PFDebug(actions);

		if(actionXML.getActionScale() != null && actionXML.getActionScale().length > 0){
			xml.items[i].setActionScale(actions);
			decoratorAction.calculateScale(i,0,xml.items[i].getActionScale(),items);
		}
		if(actionXML.getActionScale() != null && actionXML.getActionRotation().length > 0){
			xml.items[i].setActionRotation(actions);
			decoratorAction.calculateRotation(i,0,xml.items[i].getActionRotation(),items);
		}
		if(actionXML.getActionScale() != null && actionXML.getActionMove().length > 0){
			xml.items[i].setActionMove(actions);
			decoratorAction.calculateMovementX(i,0,items,xml,game);
			decoratorAction.calculateMovementY(i,0,items,xml,game);
		}
		if(actionXML.getActionScale() != null && actionXML.getActionJump().length > 0){
			xml.items[i].setActionJump(actions);
			decoratorAction.calculateMovementJump(xml.items[i].getActionJump(),xml,xml.items[i].getY(),i,game);
			decoratorAction.calculateJump(i,0,items,xml,game);
		}
	}
	
	//=====================================================
	// PLAY SOUND	
	//=====================================================
	function playSound(i,game,xml){
		actual 		= i;
		var itSound = xml.items[i].getSound();
		if(itSound != ""){
			PFSound.play("sound"+i);
		}
	}
	//=====================================================
	// PLAY SOUND ERROR
	//=====================================================
	function playSoundError(){
		//sound.play();
	}
	//=====================================================
	// REPEAT SOUND
	//=====================================================
	function repeatSound(){
		PFSound.play("sound"+actual);
	}
	//=====================================================
	// SETS
	//=====================================================
	function setActual(act){
		actual = act;
	}
	//=====================================================
	// GETS
	//=====================================================
	function getActual(){
		return actual;	
	}
}




/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/listenAndDrag/PFItemListenDrag.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************//	File: PFItemListenDrag.js //	PFItemListenDrag: create particular item properties//*************************************************************function PFItemListenDrag(scaleActive,action,actionLoops,run,sound,folder,state,text,rgb){		//=====================================================	// VARIABLES	//=====================================================	if(sound==""){		this.sound ="";	}else{		this.sound = "./"+GAME_FOLDER+"/"+folder+"/sounds/"+sound;	}	this.scaleActive = scaleActive;	this.action = action;	this.actionLoops = actionLoops;	this.run=run;	//---------------------------------	// Active=1	// Passive=0;	//---------------------------------	this.state=state;		this.getAction = getAction;	this.getActionLoops = getActionLoops;	this.getRun = getRun;	this.getSound = getSound;	this.getScaleActive = getScaleActive;	this.getState = getState;	this.setState = setState;		this.setOffsetX = setOffsetX;	this.setOffsetY = setOffsetY;	this.getOffsetX = getOffsetX;	this.getOffsetY = getOffsetY;		this.text = text;	this.rgb = rgb;	this.getText = getText;	this.getRgb = getRgb;			//=====================================================	// GETS	//=====================================================	function getScaleActive(){		return this.scaleActive;	}	function getAction() {		return this.action;	}	function getActionLoops() {		return this.actionLoops;	}	function getRun() {		return this.run;	}	function getSound() {		return this.sound;	}	function getState() {		return this.state;	}	function getOffsetX(){		return this.offsetX;	}	function getOffsetY(){		return this.offsetY;	}	function getText() {		return this.text;	}	function getRgb() {		return this.rgb;	}	//=====================================================	// SETS	//=====================================================	function setState(state) {		this.state = state;	}	function setOffsetX(value){		this.offsetX = value;	}	function setOffsetY(value){		this.offsetY = value;	}	}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/listenAndDrag/PFGameListenDrag.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************//	File: PFGameListenDrag.js //	PFGameListenDrag: game listen and drag//*************************************************************function PFGameListenDrag(){	//=====================================================	// VARIABLES	//=====================================================	var items;	var newXML;	var dragListen;	var images;	var containerSup;	var containerPrincipal;	var containerNou;	var containerBase;	var preload;	var num=0;	var itemRandom;	var offsetx, offsety;	var newx, newy;	var i;	var gameGlob;	var end = false;	this.load = load;	this.show = show;		var baseGame;	var selfListenDrag = this;		//======================================================================			// LOAD	//======================================================================	function load(game,folder){				newXML		= new PFXMLListenDrag();		newXML.load(game,folder);		themeXML.getDragInfo();		items		= new Array(newXML.items.length);		dragListen 	= new PFGameListenDragListen();	}		//======================================================================			// SHOW GAME	//======================================================================	function show(game,folder,direction,containerAux,containerAnt){			//---------------------------------		//Select which item we've to touch		//---------------------------------		itemRandom = Math.floor(Math.random()*newXML.items.length);		newXML.items[itemRandom].setState(1);		dragListen.setActual(itemRandom);		baseGame = new PFBaseGame();		baseGame.create(this,game,folder,containerAux, containerAnt);	}		//=====================================================	// BUILD PRELOAD MANIFEST	//=====================================================	this.buildPreloadManifest = buildPreloadManifest	function buildPreloadManifest(itemsManifest,game){		for ( i=0; i<items.length; i++){			itemsManifest.push(newXML.items[i].getSrc());		}		itemsManifest.push("./"+GAME_FOLDER+"/images/drag_zone.png");		//itemsManifest.push(newXML.background.getSrc());		return itemsManifest;	}			//=====================================================	// ON ADD MENU	//=====================================================	this.onAddMenu = onAddMenu;	function onAddMenu(){	}	//=====================================================	// repeat: repeat sound	//=====================================================	function repeat(){		dragListen.repeatSound();	}    //=====================================================	// ON SHOW GAME	//=====================================================	this.onShowGame = onShowGame;	function onShowGame(){		var dragZone = new Bitmap("./"+GAME_FOLDER+"/images/drag_zone.png");        dragZone.image.onload = function(evt){	        PFDebug(themeXML.itemToDragThemeItem);            dragZone.y = HEIGHT - evt.target.height - themeXML.itemToDragThemeItem.getY();            dragZone.scaleX = 1024/HEIGHT;            baseGame.containerBase.addChild(dragZone);        }        var repeatButton = themeXML.soundThemeItem.create(function() {	        baseGame.containerNav.addChild(repeatButton);	        addCustomOnClick({item:repeatButton,c:baseGame.containerNav},repeat);        });		images=new Array(items.length);                for (i = 0; i < items.length; i++){			if(newXML.items[i].getSrc().charAt( newXML.items[i].getSrc().length-1 ) != "/"){				images[i] 			= new Image();				images[i].src 		= newXML.items[i].getSrc();								images[i].i 		= i				images[i].onload 	= loadBitmap;			}else{				loadText(i);			}			if(newXML.items[i].getSound()!=""){				PFSound.load("sound"+i,newXML.items[i].getSound());			}		}				}		//=======================================================================	// ON START GAME	//=======================================================================	this.onStartGame = onStartGame;	function onStartGame(){        if(themeXML.instructionVisible || themeXML.instructionIsStart)            dragListen.repeatSound();	}		//=====================================================	// loadText: load and show all items images 	//=====================================================	function loadText(evt){		i 			= evt;		var iAux 	= i;		var game  	= baseGame.getGame();		var folder 	= baseGame.getFolder();		var bm = new PFBaseItem(newXML.items[i],i);		items[i]    = bm.getText();		items[i].i 	= i;						//var scaleFactor = getImageScale(items[i].image.width,items[i].image.height,100);		items[i].scaleX	= 1;		items[i].scaleY	= 1;		items[i].defaultScaleX = 1;		items[i].defaultScaleY = 1;							newx	= parseInt(newXML.items[i].getX());		newy	= parseInt(newXML.items[i].getY());			items[i].x		= newx;		items[i].y		= newy;		newXML.items[i].setOffsetX(offsetx);		newXML.items[i].setOffsetY(offsety);		baseGame.containerBase.addChild(items[i]);				var itemDrag = addDrag(items[i],baseGame.containerBase);		itemDrag.i = i;			itemDrag.addEventListener("mousedown", function(evt){				if(baseGame.isGameActive()){					var offset = {x:evt.target.x-evt.stageX, y:evt.target.y-evt.stageY};					evt.addEventListener("mousemove",function(ev) {						//---------------------------------						//call drag and drop						//---------------------------------						dragListen.onMouseMove(ev,evt,newXML,iAux,game,offset,0);					},false);					evt.addEventListener("mouseup", function(ev){						dragListen.onMouseUp(evt,newXML,iAux,game,1);						selfListenDrag.checkEndGame();					},false);				}			},false);	}			//=====================================================	// loadBitmaps: load and show all items images 	//=====================================================	function loadBitmap(evt){		i 			= evt.target.i;		var iAux 	= i;		var game  	= baseGame.getGame();		var folder 	= baseGame.getFolder();		items[i] 	= new Bitmap(images[i]);		items[i].i 	= i;						var scaleFactor = getImageScale(items[i].image.width,items[i].image.height,100);		items[i].scaleX	= scaleFactor;		items[i].scaleY	= scaleFactor;		items[i].defaultScaleX = scaleFactor;		items[i].defaultScaleY = scaleFactor;							offsetx	= parseInt(items[i].image.width)/2;		offsety	= parseInt(items[i].image.height)/2;		newx	= parseInt(newXML.items[i].getX());		newy	= parseInt(newXML.items[i].getY());				items[i].regX 	= offsetx;		items[i].regY 	= offsety;		items[i].x		= newx;		items[i].y		= newy-themeXML.itemToDragThemeItem.getY();		newXML.items[i].setOffsetX(offsetx);		newXML.items[i].setOffsetY(offsety);		baseGame.containerBase.addChild(items[i]);		var itemDrag = addDrag(items[i],baseGame.containerBase);		itemDrag.i = i;		itemDrag.addEventListener("mousedown", function(evt){			if(baseGame.isGameActive() && !end){				var offset = {x:evt.target.x-evt.stageX, y:evt.target.y-evt.stageY};				evt.addEventListener("mousemove",function(ev) {					//---------------------------------					//call drag and drop					//---------------------------------					dragListen.onMouseMove(ev,evt,newXML,iAux,game,offset,1);				},false);				evt.addEventListener("mouseup", function(ev){					dragListen.onMouseUp(evt,newXML,iAux,game,scaleFactor);					selfListenDrag.checkEndGame();				},false);			}		},false);	}	//=====================================================	// checkEndGame: evaluate if game is ended	//=====================================================	this.checkEndGame = checkEndGame;	function checkEndGame(folder){		PFDebug(dragListen.getFinished());		if(dragListen.getFinished()){			end = true;			baseGame.endGame(newXML.endGame);		}	}	this.getHasStart = getHasStart;	function getHasStart() {		return true;	}	this.hasMuteButton = hasMuteButton;	function hasMuteButton() {		return true;	}	//=====================================================	// CLEAR SOUNDS :	//=====================================================			this.onClearSounds = onClearSounds;    function onClearSounds(){        for(i=0;i<items.length;i++){            PFSound.unload("sound"+i);        }    }}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/listenAndDrag/PFGameListenDragListen.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFGameListenDragListen.js 
//	PFGameListenDragListen: listener of game listen and drag
//*************************************************************

function PFGameListenDragListen(){

	//=====================================================
	// VARIABLES
	//=====================================================
	var count = 0;
	var moved = false;
	var actual;
	var finished = false;
	var numItems;

	this.onMouseMove  	= onMouseMove;
	this.onMouseUp 		= onMouseUp;
	this.playSound		= playSound;
	this.getActual		= getActual;
	this.getFinished    = getFinished;
	this.setActual		= setActual;
	this.repeatSound	= repeatSound;
	
	//=====================================================
	// ON MOUSE UP: stop drag and drop
	//=====================================================
	function onMouseUp(targetItem,xml,i,game,scaleFactor){

		var target = targetItem.target

		numItems = xml.items.length;

		if(target.y>600-themeXML.itemToDragThemeItem.getY()) {
			var posx = parseFloat(xml.items[i].getX());
			var posy = parseFloat(xml.items[i].getY());

			PFDebug("SCALE FACTOR: " + scaleFactor);


			Tween.get(target).to({x:posx},200).play(Tween.get(target).to({y:posy-themeXML.itemToDragThemeItem.getY()},200));
			Tween.get(target).to({scaleX:scaleFactor},300).play(Tween.get(target).to({scaleY:scaleFactor},300));
			Tween.get(target.item).to({x:posx},200).play(Tween.get(target.item).to({y:posy-themeXML.itemToDragThemeItem.getY()},200));
			Tween.get(target.item).to({scaleX:scaleFactor},300).play(Tween.get(target.item).to({scaleY:scaleFactor},300));
		}

		if (xml.items[i].getState()==1 && moved) {
			moved=false;
			xml.items[i].setState(2);

			count++;

			if (count < xml.items.length) {
				do{
					var itemRandom = Math.floor(Math.random()*xml.items.length);
				}while(xml.items[itemRandom].getState()>=1);
				xml.items[itemRandom].setState(1);
				PFSound.stop("sound"+actual);
				setTimeout(function() {
					PFSound.play("sound"+itemRandom);
				},2000)

				actual = itemRandom;
			}
		}
	}
	//=====================================================
	// ON MOUSE MOVE: start drag and drop + control item
	//=====================================================	
	function onMouseMove(ev,target,xml,i,game,offset,kind){

		var container = target.target.parent;

		container.setChildIndex(target.target.item,container.getNumChildren()-1);
		container.setChildIndex(target.target,container.getNumChildren()-1);

		if (xml.items[i].getState() >= 1){
			moved=true;

			if (ev.stageY > HEIGHT - themeXML.itemToDragThemeItem.getY())
				return;

			target.target.x = ev.stageX;// + offset.x;
			target.target.y = ev.stageY;// + offset.y;
			target.target.item.x = ev.stageX;// + offset.x;
			target.target.item.y = ev.stageY;// + offset.y;

			if(target.target.y<620-themeXML.itemToDragThemeItem.getY()){
				if(kind == 1){
					var newScale = getImageScale(target.target.item.image.width,target.target.item.image.height,300);
				}else{
					var newScale = 2;
				}
				Tween.get(target.target).to({scaleX:newScale},300).play(Tween.get(target.target).to({scaleY:newScale},300));
				Tween.get(target.target.item).to({scaleX:newScale},300).play(Tween.get(target.target.item).to({scaleY:newScale},300));
			}
		}
	}
	//=====================================================
	// PLAY SOUND
	//=====================================================	
	function playSound(i,game,xml){
		actual = i;
		var itSound = xml.items[i].getSound();
		if(itSound != ""){;
			PFSound.play("sound"+i);
		}
	}
	//=====================================================
	// REPEAT SOUND
	//=====================================================	
	function repeatSound(){
		PFSound.play("sound"+actual);
	}
	//=====================================================
	// SET
	//=====================================================	
	function setActual(act){
		actual = act;
	}
	//=====================================================
	// GET
	//=====================================================	
	function getActual(){
		return actual;	
	}
	function getFinished(){

		if (count > (numItems-1)) {
			finished = true;
		}

		PFDebug("FINISHED");
		PFDebug(count);
		PFDebug(numItems);
		PFDebug(finished);


		return finished;
	}
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/fastDrag/PFItemFastDrag.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************//	File: PFItemFastDrag.js //	PFItemFastDrag: create particular item properties//*************************************************************function PFItemFastDrag(parent,sound,folder,text,rgb,kind){		//=====================================================	// VARIABLES	//=====================================================	if(sound==""){		this.sound ="";	}else{		this.sound = "./"+GAME_FOLDER+"/"+folder+"/sounds/"+sound;	}	this.parent = parent;	this.getParent = getParent;	this.getSound = getSound;		this.setOffsetX = setOffsetX;	this.setOffsetY = setOffsetY;	this.getOffsetX = getOffsetX;	this.getOffsetY = getOffsetY;	this.text 			= text;	this.rgb 			= rgb;	this.getText 		= getText;	this.getRgb			= getRgb;	this.kind			= kind;	this.getKind		= getKind;		//=====================================================	// GETS	//=====================================================	function getParent(){		return this.parent;	}	function getSound() {        return this.sound;	}	function getOffsetX(){		return this.offsetX;	}	function getOffsetY(){		return this.offsetY;	}	function getText() {		return this.text;	}	function getRgb() {		return this.rgb;	}	function getKind() {		return this.kind;	}	//=====================================================	// SETS	//=====================================================	function setOffsetX(value){		this.offsetX = value;	}	function setOffsetY(value){		this.offsetY = value;	}	}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/fastDrag/PFItemFastDragParent.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************//	File: PFItemFastDragParent.js //	PFItemFastDragParent: create particular item properties//*************************************************************function PFItemFastDragParent(id,sound,folder,text,rgb,kind){		//=====================================================	// VARIABLES	//=====================================================	if(sound == ""){		this.sound = "";	}else{		this.sound = "./"+GAME_FOLDER+"/"+folder+"/sounds/"+sound;	}	this.id 		= id;	this.getId 		= getId;	this.getSound 	= getSound;		this.setOffsetX = setOffsetX;	this.setOffsetY = setOffsetY;	this.getOffsetX = getOffsetX;	this.getOffsetY = getOffsetY;	this.text 			= text;	this.rgb 			= rgb;	this.getText 		= getText;	this.getRgb			= getRgb;	this.kind			= kind;	this.getKind		= getKind;		//=====================================================	// GETS	//=====================================================	function getId(){		return this.id;	}	function getSound() {		return this.sound;	}		function getOffsetX(){		return this.offsetX;	}	function getOffsetY(){		return this.offsetY;	}	function getText() {		return this.text;	}	function getRgb() {		return this.rgb;	}	function getKind() {		return this.kind;	}	//=====================================================	// SETS	//=====================================================	function setOffsetX(value){		this.offsetX = value;	}	function setOffsetY(value){		this.offsetY = value;	}}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/fastDrag/PFFastDrag.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************//	File: PFFastDrag.js //	PFFastDrag: game fastDrag//*************************************************************function PFFastDrag(){		//=====================================================	// VARIABLES	//=====================================================	var items;	var itemsPare;	var newXML;	var fastListen;	var images;	var imagesDrag;	var disponibles;	var fiJoc 	= false;	var sortir	= false;		var containerPrincipal;	var containerNou;	var total;	var preload;	var num		= 0;	var offsetx, offsety;	var newx, newy;	var i, j;	var firstI 	= 0;	var gameHasEnded = false;    var shouldSound = true;	this.load 	= load;	this.show 	= show;		var baseGame;		//=======================================================================				// LOAD	//=======================================================================	function load(game,folder){		// test		newXML = new PFXMLDragContainers();		newXML.load(game,folder);				items 		= new Array(newXML.items.length);		itemsPare 	= new Array(newXML.itemsPare.length);		fastListen 	= new PFFastDragListen();		fastListen.setShouldDisappear(newXML.disappear);		PFSound.load('end',"./"+GAME_FOLDER+"/sounds/ok.mp3");		//PFSound.load('tick','game/sounds/boto.mp3');		total = items.length - newXML.itemsDiscard;	}		//=======================================================================				// SHOW GAME : It is a create, not a show	//=======================================================================	function show(game,folder,direction,containerAux,containerAnt){			baseGame = new PFBaseGame();		baseGame.create(this,game,folder,containerAux, containerAnt);	}		//=====================================================	// BUILD PRELOAD MANIFEST	//=====================================================	this.buildPreloadManifest = buildPreloadManifest	function buildPreloadManifest(itemsManifest,game){						for ( i=0; i<itemsPare.length; i++){			if(newXML.itemsPare[i].getSrc().charAt( newXML.itemsPare[i].getSrc().length-1 ) != "/"){				itemsManifest.push(newXML.itemsPare[i].getSrc());			}		}		return itemsManifest;	}			//=====================================================	// ON ADD MENU	//=====================================================	this.onAddMenu = onAddMenu;	function onAddMenu(){	}		//=======================================================================	// ON SHOW GAME	//=======================================================================	this.onShowGame = onShowGame;	function onShowGame(){				//var background = new Bitmap(newXML.background.getSrc());		//baseGame.containerBase.addChild(background);        communicationLayer.setNumberOfQuestions(items.length);				images=new Array(itemsPare.length);		for (i = 0; i < itemsPare.length; i++){			if(newXML.itemsPare[i].getKind() == 1){				images[i] 			= new Image();				images[i].src 		= newXML.itemsPare[i].getSrc();							images[i].i 		= i;				images[i].onload 	= loadPare;			}else{				loadPareText(i);			}            if (newXML.itemsPare[i] && newXML.itemsPare[i].getSound() != "")                PFSound.load("parent_sound"+newXML.itemsPare[i].getId(),newXML.itemsPare[i].getSound());		}		for (var i=0; i<newXML.items.length; i++) {			if (newXML.items[i].getSound() != "") {				PFSound.load("item_sound"+i,newXML.items[i].getSound());			}		}	}		//=======================================================================	// ON START GAME	//=======================================================================	this.onStartGame = onStartGame;	function onStartGame(){		loadChild(baseGame.getGame(),baseGame.getFolder());	}			//=====================================================	// loadImatgeDrag: load child items images 	//=====================================================	function loadChild(game,folder){				imagesDrag	= new Array(items.length);		disponibles	= new Array(items.length);				for (i = 0; i < items.length; i++){			imagesDrag[i] 		= new Image();			imagesDrag[i].src 	= newXML.items[i].getSrc();			imagesDrag[i].kind	= newXML.items[i].getKind();			disponibles[i] 		= i;		}				var imatgeAleatoria 				= Math.floor((items.length)*Math.random());		if(imagesDrag[imatgeAleatoria].kind == 1){			imagesDrag[imatgeAleatoria].onload 	= function(){loadImatgeDrag(imatgeAleatoria,game,folder);};		}else{			loadTextDrag(imatgeAleatoria,game,folder);		}	}	//=====================================================	// loadTextDrag: load and show all child items images 	//=====================================================	function loadTextDrag(i,game,folder){		var bm = new PFBaseItem(newXML.items[i],i);		items[i] = bm.getText();					if (newXML.items[i].getScale()!=1000){			var scaleFactor = newXML.items[i].getScale()/1000;			items[i].scaleX = scaleFactor;			items[i].scaleY = scaleFactor;		}				items[i].defaultScaleX = items[i].scaleX;		items[i].defaultScaleY = items[i].scaleY;				newx			= parseInt(newXML.items[i].getX());		newy			= parseInt(newXML.items[i].getY());			items[i].x 		= Math.floor((1024)*Math.random());		items[i].y 		= Math.floor((384)*Math.random() - 384);				items[i].rotation	=  newXML.items[i].getRotation();/*        if (newXML.items[i].getSound() != "")            PFSound.load("item_sound"+i,newXML.items[i].getSound());*/		baseGame.containerBase.addChild(items[i]);		var dragItem = addDrag(items[i],baseGame.containerBase);		dragItem.i = i;		dragItem.defaultScaleX = items[i].scaleX;		dragItem.defaultScaleY = items[i].scaleY;		Tween.get(items[i]).to({x:newx},300).play(Tween.get(items[i]).to({y:newy},300));		Tween.get(dragItem).to({x:newx},300).play(Tween.get(dragItem).to({y:newy},300));				(function(target) {			target.addEventListener("mousedown", function(evt) {				if(baseGame.isGameActive()){					if(fastListen.getItem() != i){						baseGame.containerBase.removeChild(items[i]);						baseGame.containerBase.addChild(items[i]);						//PFSound.play('tick');						fastListen.getPosition(target);						var offset 		= {x:target.x-evt.stageX, y:target.y-evt.stageY};                        if (shouldSound)                        {                            if (newXML.items[i].getSound() != "")                                PFSound.play('item_sound'+i);                            shouldSound = false;                        }						evt.addEventListener("mousemove", function(ev) {							fastListen.onMouseMove(ev,target,offset);						},false);						evt.addEventListener("mouseup", function(ev){							fastListen.onMouseUp(target,i,newXML.items[i].getParent(),newXML.itemsPare,items,itemsPare);							fiJoc=fastListen.getFinal(total);							if(fastListen.getCorrect()){								total--;								var aftertotal = total;								Tween.get(containerPrincipal).wait(800).call(function(){checkChange(target.item,i,game,folder,aftertotal)});							}                            shouldSound = true;						},false);					}				}			},false);		})(dragItem);		if(disponibles.length>1 && !gameHasEnded){			Tween.get(containerPrincipal).wait(2000).call(function(){loadNext(i);});					}	}	//=====================================================	// loadImatgeDrag: load and show all child items images 	//=====================================================	function loadImatgeDrag(i,game,folder){		items[i] = new Bitmap(imagesDrag[i]);		if (newXML.items[i].getScale()!=1000){			var scaleFactor = newXML.items[i].getScale()/1000;			items[i].scaleX = scaleFactor;			items[i].scaleY = scaleFactor;		}				items[i].defaultScaleX = items[i].scaleX;		items[i].defaultScaleY = items[i].scaleY;				offsetx			= (parseInt(items[i].image.width)/2);		offsety			= (parseInt(items[i].image.height)/2);		newx			= parseInt(newXML.items[i].getX());		newy			= parseInt(newXML.items[i].getY());		items[i].regX	= offsetx;		items[i].regY	= offsety;		items[i].x 		= Math.floor((1024)*Math.random());		items[i].y 		= Math.floor((384)*Math.random() - 384);				items[i].rotation	=  newXML.items[i].getRotation();/*        if (newXML.items[i].getSound() != "")            PFSound.load("item_sound"+i,newXML.items[i].getSound());*/		baseGame.containerBase.addChild(items[i]);		var dragItem = addDrag(items[i],baseGame.containerBase);		dragItem.i = i;		dragItem.defaultScaleX = items[i].scaleX;		dragItem.defaultScaleY = items[i].scaleY;		Tween.get(items[i]).to({x:newx},300).play(Tween.get(items[i]).to({y:newy},300));		Tween.get(dragItem).to({x:newx},300).play(Tween.get(dragItem).to({y:newy},300));		(function(target) {			target.addEventListener("mousedown", function(evt) {				if(baseGame.isGameActive()){					if(fastListen.getItem() != i){						baseGame.containerBase.removeChild(items[i]);						baseGame.containerBase.addChild(items[i]);						//PFSound.play('tick');						fastListen.getPosition(target);						var offset 		= {x:target.x-evt.stageX, y:target.y-evt.stageY};                        if (shouldSound)                        {                            if (newXML.items[i].getSound() != "")                                PFSound.play('item_sound'+i);                            shouldSound = false;                        }						evt.addEventListener("mousemove", function(ev) {							fastListen.onMouseMove(ev,target,offset);						},false);						evt.addEventListener("mouseup", function(ev){							fastListen.onMouseUp(target,i,newXML.items[i].getParent(),newXML.itemsPare,items,itemsPare);							fiJoc=fastListen.getFinal(total);							if(fastListen.getCorrect()){								total--;								var aftertotal = total;								Tween.get(containerPrincipal).wait(800).call(function(){checkChange(target.item,i,game,folder,aftertotal)});							}                            shouldSound = true;						},false);					}				}			},false);		})(dragItem);		if(disponibles.length>1 && !gameHasEnded){			Tween.get(containerPrincipal).wait(2000).call(function(){loadNext(i);});					}	}	//=====================================================	// loadNext: load next child bitmap after some time	//=====================================================	function loadNext(i){		var game 	= baseGame.getGame();		var folder 	= baseGame.getFolder();		for(j = 0; j < disponibles.length; j++){			if(disponibles[j] == i){				var posEliminar = j;			}		}		disponibles.splice(posEliminar,1);		var imatgeAleatoria = Math.floor((disponibles.length)*Math.random());        if (imagesDrag[disponibles[imatgeAleatoria]].kind == 1)		    loadImatgeDrag(disponibles[imatgeAleatoria],game,folder);        else            loadTextDrag(disponibles[imatgeAleatoria],game,folder);	}	//=====================================================	// checkChange: remove correct bitmap and check end	//=====================================================	function checkChange(target,pos,game,folder,aftertotal){		if(aftertotal == 0){			baseGame.endGame(newXML.endGame);		}	}	//=====================================================	// loadPareText: load and show all parent items images 	//=====================================================	function loadPareText(evt){				var game 	= baseGame.getGame();		var folder 	= baseGame.getFolder();		i = evt;				var bm = new PFBaseItem(newXML.itemsPare[i],i);		itemsPare[i] = bm.getText();						if (newXML.itemsPare[i].getScale() != 1000){			var scaleFactor 	= newXML.itemsPare[i].getScale()/1000;			itemsPare[i].scaleX	= scaleFactor;			itemsPare[i].scaleY	= scaleFactor;				}				itemsPare[i].defaultScaleX = itemsPare[i].scaleX;		itemsPare[i].defaultScaleY = itemsPare[i].scaleX;					newx				= parseInt(newXML.itemsPare[i].getX());		newy				= parseInt(newXML.itemsPare[i].getY());			itemsPare[i].x		= newx;		itemsPare[i].y		= newy;				itemsPare[i].rotation	=  newXML.itemsPare[i].getRotation();				baseGame.containerBase.addChild(itemsPare[i]);		}	//=====================================================	// loadPare: load and show all parent items images 	//=====================================================	function loadPare(evt){		i = evt.target.i;				var game 	= baseGame.getGame();		var folder 	= baseGame.getFolder();		i = evt.target.i;				itemsPare[i] 			= new Bitmap(images[i]);		if (newXML.itemsPare[i].getScale() != 1000){			var scaleFactor 	= newXML.itemsPare[i].getScale()/1000;			itemsPare[i].scaleX	= scaleFactor;			itemsPare[i].scaleY	= scaleFactor;				}				itemsPare[i].defaultScaleX = itemsPare[i].scaleX;		itemsPare[i].defaultScaleY = itemsPare[i].scaleX;					offsetx=(parseInt(itemsPare[i].image.width)/2);		offsety			 	= (parseInt(itemsPare[i].image.height)/2);		newx				= parseInt(newXML.itemsPare[i].getX());		newy				= parseInt(newXML.itemsPare[i].getY());		itemsPare[i].regX	= offsetx;		itemsPare[i].regY	= offsety;		itemsPare[i].x		= newx;		itemsPare[i].y		= newy;				itemsPare[i].rotation	=  newXML.itemsPare[i].getRotation();				baseGame.containerBase.addChild(itemsPare[i]);		}	//=====================================================	// cleanGame: delete all game showed	//=====================================================	this.cleanGame = cleanGame;	function cleanGame(){		gameHasEnded = true;        onClearSounds();		if (containerPrincipal)			containerPrincipal.removeAllChildren();		if (containerNou)			containerNou.removeAllChildren();		stage.removeChild(containerPrincipal);		stage.removeChild(containerNou);	}	this.getHasStart = getHasStart;	function getHasStart() {		return true;	}	this.hasMuteButton = hasMuteButton;	function hasMuteButton() {		return baseGame.checkItemsForSound(newXML.items.concat(newXML.itemsPare));	}	//=====================================================	// CLEAR SOUNDS	//=====================================================			this.onClearSounds = onClearSounds;    function onClearSounds(){		//PFSound.unload('tick');	    for (var i=0; i<newXML.items.length; i++) {		    if (newXML.items[i].getSound() != "") {			    PFSound.unload("item_sound"+i);		    }	    }	    for (i = 0; i < itemsPare.length; i++){		    PFSound.unload("parent_sound"+newXML.itemsPare[i].getId());	    }        PFSound.unload('end');    }}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/fastDrag/PFFastDragListen.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFFastDragListen.js 
//	PFFastDragListen: Listener of fastDrag game 
//*************************************************************
function PFFastDragListen(){
	
	//=====================================================
	// VARIABLES
	//=====================================================	
	var posX;
	var posY;
	var moure			= true;
	var correct 		= false;
	var itemMoviment 	= -1;
	var i;
	var shouldDisappear = true;
	
	this.onMouseMove 	= onMouseMove;
	this.onMouseUp 		= onMouseUp;
	this.getPosition	= getPosition;
	this.loadAnimation 	= loadAnimation;
	this.getFinal 		= getFinal;
	this.getCorrect 	= getCorrect;
	this.getItem 		= getItem;
	this.setShouldDisappear = setShouldDisappear;

	//=====================================================
	// getFinal: Tell us if it's end game
	//=====================================================
	function getFinal(total){
		if(total == 1 && moure == false){
			var fi = true;
		}else{
			var fi = false;
		}
		return fi;
	}
	
	//=====================================================
	// GETS
	//=====================================================
	function getPosition(target){
		posX = target.x;
		posY = target.y;
	}
	function getItem(){
		return itemMoviment;
	}
	function getCorrect(){
		return correct;
	}
	//=====================================================
	// onMouseUp: validate if position is OK
	//=====================================================
	function onMouseUp(target,item,pare,llistaPares,items,itemsPare){

		correct = false;

		for(i = 0; i < llistaPares.length; i++){

			if(llistaPares[i].getId()==pare){
                var newParent = itemsPare[i];

                if (newParent)
                {
                    var leftParent 		= parseInt(llistaPares[i].getX()) - newParent.image.width/2;
                    var rightParent 	= parseInt(llistaPares[i].getX()) + newParent.image.width/2;
                    var topParent 		= parseInt(llistaPares[i].getY()) - newParent.image.height/2;
                    var bottomParent 	= parseInt(llistaPares[i].getY()) + newParent.image.height/2;

                    if (target.x >= leftParent && target.x <= rightParent && target.y >= topParent && target.y <= bottomParent)
                    {
                        correct			    = true;
                        var fatherPosition	= i;
                    }
                }
                else
                    correct = false;
			}
		}
		if( correct == false){
            communicationLayer.onIncorrect(0);
			Tween.get(target).to({x:parseFloat(posX)},100).play(Tween.get(target).to({y:parseFloat(posY)},100));
			Tween.get(target.item).to({x:parseFloat(posX)},100).play(Tween.get(target.item).to({y:parseFloat(posY)},100));
            return correct;
		}
		if( correct == true){
            communicationLayer.onCorrect(0);
			moure			= false;
			itemMoviment	= item;
			var distancia 	= Math.round(Math.sqrt(Math.pow(llistaPares[fatherPosition].getX()-target.x,2)+Math.pow(llistaPares[fatherPosition].getY()-target.y,2)));

            if (llistaPares[fatherPosition] && llistaPares[fatherPosition].getSound() != "")
                PFSound.play("parent_sound"+llistaPares[fatherPosition].getId());

			if (shouldDisappear) {
				Tween.get(target.item).to({x:parseFloat(llistaPares[fatherPosition].getX())},100).play(Tween.get(target.item).to({y:parseFloat(llistaPares[fatherPosition].getY())},100));
				Tween.get(target.item).wait(distancia).call(function(){loadAnimation(item,items)});
			} else {
				createjs.Tween.get(target.item).to({scaleX:0.8,scaleY:0.8});
			}

			target.parent.removeChild(target);

            return correct;
		}
	}
	//=====================================================
	// loadAnimation: start animation
	//=====================================================
	function loadAnimation(item,items){
		
		var decoratorAction = new PFItemDecoratorAction();
		var actions 		= new Array(27);
		for(i = 0;i < 27;i++){
			actions[i] 		= new Array(2);
			actions[i][0] 	= (i+1)*20;
			actions[i][1] 	= 10;
		}
		decoratorAction.calculateRotation(item,0,actions,items);
		var actions = new Array(10);
		for(i = 0;i < 10;i++){
			actions[9-i] 	= new Array(2);
			actions[9-i][0] = i/10;
			actions[9-i][1] = 35;
		}
		decoratorAction.calculateScale(item,0,actions,items);
		correct = false;
	}
	//=====================================================
	// onMouseMove: drag and drop
	//=====================================================
	function onMouseMove(ev,target,offset){
		target.x = ev.stageX+offset.x;
		target.y = ev.stageY+offset.y;
		target.item.x = ev.stageX+offset.x;
		target.item.y = ev.stageY+offset.y;
	}


	//======================================================================
	// set Should Disappear
	//======================================================================
	function setShouldDisappear(value) {
		shouldDisappear = value;
	}
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/differences/PFItemDifferences.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFItemMemory.js 
//	PFItemMemory: create particular item properties
//*************************************************************

function PFItemDifferences(id,action,actionLoops,run,sound,folder,text,rgb){
	
	//=====================================================
	// VARIABLES
	//=====================================================
	if(sound==""){
		this.sound ="";
	}else{
		this.sound = "./"+GAME_FOLDER+"/"+folder+"/sounds/"+sound;
	}
	this.marked 		= false;
	this.id 			= id;
	this.action 		= action;
	this.actionLoops 	= actionLoops;
	this.run			= run;
	this.getAction		= getAction;
	this.getActionLoops = getActionLoops;
	this.getRun 		= getRun;
	this.getSound 		= getSound;
	this.getId 			= getId;
	this.setMarked 		= setMarked;
	this.getMarked 		= getMarked;
	this.text 			= text;
	this.rgb 			= rgb;
	this.getText 		= getText;
	this.getRgb			= getRgb;
	
	//=====================================================
	// GETS
	//=====================================================
	function getMarked(){
		return this.marked;
	}
	function getId(){
		return this.id;
	}
	function getAction() {
		return this.action;
	}
	function getActionLoops() {
		return this.actionLoops;
	}
	function getRun() {
		return this.run;
	}
	function getSound() {
		return this.sound;
	}
	function getText() {
		return this.text;
	}
	function getRgb() {
		return this.rgb;
	}
	//=====================================================
	// SETS
	//=====================================================
	function setMarked(value){
		this.marked = value;
	}
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/differences/PFGameDifferences.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************//	File: PFGameDifferences.js //	PFGameDifferences: game Differences//*************************************************************function PFGameDifferences(){	//======================================================================				// VARIABLES	//======================================================================	var items1;	var items2;	var fons;	var xml;	var differencesListen;	var images1;	var images2;	var imgBackground;	var availables;	var dif;	var totals	= 0;	var endGame	= false;		var offsetx, offsety;	var newx, newy;	var i;	var newXML;	var differencesOrientation;		this.load = load;	this.show = show;		var baseGame;    var shouldSeguirCarrega = false;		//======================================================================				// LOAD	//======================================================================	function load(game,folder){		newXML 	= new PFXMLDifferences;		newXML.load(game,folder);		        themeXML.getDifferencesInfo();		xml 				= new PFAction();		xml.LoadItems(game,folder);		items1 				= new Array(newXML.items.length-3);		items2 				= new Array(newXML.items.length-3);		fons 				= new Array(2);		imgBackground 		= new Array(2);		differencesListen 	= new PFGameDifferencesListen();		PFSound.load('tick',"./"+GAME_FOLDER+"/sounds/boto.mp3");	}		//=======================================================================				// SHOW GAME : It is a create, not a show	//=======================================================================	function show(game,folder,direction,containerAux,containerAnt){			baseGame = new PFBaseGame();		baseGame.hasBackground(false);		baseGame.create(this,game,folder,containerAux, containerAnt);	}			//=====================================================	// BUILD PRELOAD MANIFEST	//=====================================================	this.buildPreloadManifest = buildPreloadManifest	function buildPreloadManifest(itemsManifest,game){				//itemsManifest.push(newXML.background.getSrc());		itemsManifest.push(newXML.items[1].getSrc());		itemsManifest.push(newXML.items[2].getSrc());		        /*		for (i = 0; i < items1.length; i++){			itemsManifest.push(newXML.items[i+3].getSrc());					}		*/        itemsManifest.push("./"+GAME_FOLDER+"/theme/images/differences/" + themeXML.imageOKSrc);				return itemsManifest;	}			//=====================================================	// ON ADD MENU	//=====================================================	this.onAddMenu = onAddMenu;	function onAddMenu(){	}	//=======================================================================	// ON SHOW GAME	//=======================================================================	this.onShowGame = onShowGame;	function onShowGame(){		//var background = new Bitmap(xml.getBackground("game").getSrc());		//baseGame.containerBase.addChild(background);		imgBackground[0] = new Image();        imgBackground[0].onload = aaLoadImatgeFons;        imgBackground[0].src = newXML.items[1].getSrc();        imgBackground[0].i = 0;		imgBackground[1] = new Image();        imgBackground[1].onload = aaLoadImatgeFons;        imgBackground[1].src = newXML.items[2].getSrc();        imgBackground[1].i = 1;						for (i = 3; i < newXML.items.length; i++){					if(newXML.items[i].getSound()!=""){				PFSound.load("sound"+(i-3),newXML.items[i].getSound());			}		}		if(newXML.wrongSound != null){			PFSound.load("wrongSound",newXML.wrongSound);		}	}    function aaLoadImatgeFons(evt){        loadImatgesFons(evt.target.i,baseGame.getGame(),baseGame.getFolder(),newXML.orientation,evt.target.i,newXML.items[evt.target.i+1].getScaleType(),newXML.items[evt.target.i+1].getRgb());    }		//=======================================================================	// ON START GAME	//=======================================================================	this.onStartGame = onStartGame;	function onStartGame(){			}	//=======================================================================				// segueixCarrega: keeps loading bitmaps in the right order	//=======================================================================	function segueixCarrega(folder){        if(!shouldSeguirCarrega){            shouldSeguirCarrega = true;        }        else{            images1		= new Array(items1.length);            images2		= new Array(items2.length);            availables	= new Array(items1.length);            differencesOrientation = newXML.orientation;            communicationLayer.setNumberOfQuestions(items1.length);            for (i = 0; i < items1.length; i++){                images1[i]                  = new Bitmap("./"+GAME_FOLDER+"/theme/images/differences/" + themeXML.imageOKSrc);                images1[i].image.i	    	= i;                images1[i].image.num		= 1;                images1[i].image.orientation= newXML.orientation;                images1[i].image.factor		= 0;                images1[i].image.onload	    = loadImatge;                images2[i]                  = new Bitmap("./"+GAME_FOLDER+"/theme/images/differences/" + themeXML.imageOKSrc);                images2[i].image.i			= i;                images2[i].image.num		= 2;                images2[i].image.orientation= newXML.orientation;                images2[i].image.factor		= 1;                images2[i].image.onload	    = loadImatge;                availables[i] = i;            }        }	}	//=======================================================================    // loadImatgesFons: loads the two differences images	//=======================================================================    function loadImatgesFons(i,game,folder,orientation,factor,scaleType,rgb){		fons[i] = new Bitmap(newXML.items[i+1].getSrc());        fons[i].image.onload = function(evt){            loadFons(i,game,folder,orientation,factor,scaleType,rgb);        }    }    //=======================================================================    // LOAD FONS    //=======================================================================    function loadFons(i,game,folder,orientation,factor,scaleType,rgb) {        var rgb = rgb.split("-");        if(orientation == "horizontal"){            var g = new Graphics();            g.beginFill(Graphics.getRGB(rgb[0],rgb[1],rgb[2]));            g.drawRect(0,0,WIDTH,HEIGHT/2);            if(i == 0){                var s = new Shape(g);                s.x = 0;                s.y = 0;                baseGame.containerBase.addChild(s);            }else{                var s = new Shape(g);                s.x = 0;                s.y = HEIGHT/2;                baseGame.containerBase.addChild(s);            }            baseGame.containerBase.addChild(fons[i]);            fons[i].x 	= 0;            fons[i].y 	= HEIGHT/2 * factor;            scaleWithType(fons[i],scaleType,WIDTH,HEIGHT/2);            fons[i].cache(0,0,WIDTH/fons[i].scaleX,(HEIGHT/2)/fons[i].scaleY);            if(scaleType == "scalefitheight" || scaleType == "scalefit"){                fons[i].x = WIDTH/2 - fons[i].image.width/2*fons[i].scaleX;            }        }        if(orientation == "vertical"){            var g = new Graphics();            g.beginFill(Graphics.getRGB(rgb[0],rgb[1],rgb[2]));            g.drawRect(0,0,WIDTH/2,HEIGHT);            if(i == 0){                var s = new Shape(g);                s.x = 0;                s.y = 0;                baseGame.containerBase.addChild(s);            }else{                var ss = new Shape(g);                ss.x = WIDTH/2;                ss.y = 0;                baseGame.containerBase.addChild(ss);            }            baseGame.containerBase.addChild(fons[i]);            fons[i].x 	= WIDTH/2 * factor;            fons[i].y 	= 0;            scaleWithType(fons[i],scaleType,WIDTH/2,HEIGHT);            fons[i].cache(0,0,(WIDTH/2)/fons[i].scaleX,HEIGHT/fons[i].scaleY);            if(scaleType == "scalefitheight"){                if(i==0)                    fons[i].x =  WIDTH/4  - fons[i].image.width/2*fons[i].scaleX;                else                    fons[i].x =  WIDTH/4*3  - fons[i].image.width/2*fons[i].scaleX;            }            if(scaleType == "scalefitwidth" || scaleType == "scalefit"){                PFDebug("AA:" + scaleType);                fons[i].y = HEIGHT/2 - fons[i].image.height/2*fons[i].scaleY;            }        }        segueixCarrega(folder);	    addCustomOnClick({item:fons[i],c:baseGame.containerBase},function(evt) {            if(endGame==false && baseGame.isGameActive()){                if(differencesListen.checkPos(evt.stageX,evt.stageY)){														/**/					                    dif = differencesListen.getDif();                    Tween.get(items1[dif]).to({alpha:1},400);                    Tween.get(items2[dif]).to({alpha:1},400);                    communicationLayer.onCorrect(0);                    var itSound = xml.getEndGameSound();					if(newXML.items[dif+3].getSound() != ""){						PFSound.play("sound"+dif);																	}else{						if(itSound != ""){							PFSound.play('tick');						}					}                    totals++;                }else{					//Play wrong sound					if(newXML.wrongSound != null){						PFSound.play("wrongSound");											}				}                if(totals==items1.length){                    endGame=true;                    baseGame.endGame(newXML.endGame);                }            }        });    }		//=======================================================================				// loadImatge: loads the differences in its right place	//=======================================================================	function loadImatge(evt){		i 			= evt.target.i;		num 		= evt.target.num;		orientation = evt.target.orientation;		factor 		= evt.target.factor;        var item;        if      (num == 1){ item = images1[i]; }        else if (num == 2){ item = images2[i]; }		var game 	= baseGame.getGame();        //PFDebug("Loading item:" + i + " with num:" + num);        //PFDebug(item);	    newx		= parseInt(newXML.items[(i+3)].getX());	    newy		= parseInt(newXML.items[(i+3)].getY());        item.regX	= parseInt(evt.target.width)/2;        item.regY	= parseInt(evt.target.height)/2;        if(differencesOrientation == "horizontal"){            item.x = newx;            item.y = newy + HEIGHT/2 * factor;	  	}    	if(differencesOrientation == "vertical"){            item.x = newx + WIDTH/2 * factor;            item.y = newy;		}        baseGame.containerBase.addChild(item);        item.alpha=0.0;        if		(num == 1) items1[i] = item;        else  if(num == 2) items2[i] = item;        if(num==2 && (i+1)==items2.length){            differencesListen.guardaPosicions(items1,items2);        }	}	this.getHasStart = getHasStart;	function getHasStart() {		return false;	}	this.hasMuteButton = hasMuteButton;	function hasMuteButton() {		return true;	}	//=====================================================	// CLEAR SOUNDS :	//=====================================================			this.onClearSounds = onClearSounds;    function onClearSounds(){		PFSound.unload('tick');                    }	}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/differences/PFGameDifferencesListen.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


function PFGameDifferencesListen(){
	
	var items1;
	var items2;
	var trobada;
	var trobats = new Array(0);
	var omplir;
	var i, j;
	
	//Declaration functions
	this.checkPos = checkPos;
	this.guardaPosicions = guardaPosicions;
	this.getDif = getDif;
	
	function checkPos(x,y){

        //PFDebug("Check pos:" + x + "x" + y);

		omplir=true;
		for(i=0;i<this.items1.length;i++){

            //PFDebug("For items: "  + this.items1[i].x + "x" + this.items1[i].y);
            //PFDebug("For items: "  + this.items2[i].x + "x" + this.items2[i].y);

			if((this.items1[i].x<=(x+30) && this.items1[i].x>=(x-30) && this.items1[i].y<=y+30 && this.items1[i].y>=y-30)
			|| (this.items2[i].x<=(x+30) && this.items2[i].x>=(x-30) && this.items2[i].y<=y+30 && this.items2[i].y>=y-30)){
				for(j=0;j<trobats.length;j++){
					if(trobats[j]==i){
						omplir=false;
					}
				}
				if(omplir){
					trobada = i;
					trobats.splice(0,0,i);
					return true;
				}
			}
		}
		return false;
	}
	
	function getDif(){
		return trobada;
	}
	
	function guardaPosicions(items1,items2){
		this.items1 = items1;
		this.items2 = items2;
	}
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/differences/PFBackgroundDifferences.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFBackgroundDifferences.js 
//	PFBackgroundDifferences: create particular item properties
//*************************************************************

function PFBackgroundDifferences(id,game,type,scaleType,rgb){

	//=====================================================
	// VARIABLES
	//=====================================================	
	this.id 		= id;
	this.game 		= game;
	this.type 		= type;
	this.scaleType 	= scaleType;
	this.rgb 		= rgb;
	
	this.getId			= getId;
	this.getGame 		= getGame;
	this.getType 		= getType;
	this.getScaleType	= getScaleType;
	this.getRgb			= getRgb;

	//=====================================================
	// GETS
	//=====================================================	
	function getId() {
		return this.id;
	}
	function getGame() {
		return this.game;
	}
	function getType() {
		return this.type;
	}
	function getScaleType(){
		return this.scaleType;
	}
	function getRgb(){
		return this.rgb;
	}
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/paint/PFGamePaint.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFGamePaint.js 
//	PFGamePaint: paint game
//*************************************************************/

var PFGamePaint = function(){

	//=====================================================
	// VARIABLES
	//=====================================================
	var foreground;
	var fScaleType;
	var newXML;
	//var storage = new PFStorage();	//for mobile devices
	var image;
	var s;
	var containerPaint;
	var containerNav;
	var containerForeground;
	var containerPrincipal;
	var containerNou;
	var containerBase;
	var isTakePhoto;
	var preload;
	var activeBrush;
	var colorR 		= 49;
	var colorG 		= 182;
	var colorB 		= 234;
	var thickness 	= 50;
	var colors;
	var rgbs;
	var brushes;
	var sizes;

	var bin;

	var colorsContainer = new Container();
	var brushesContainer = new Container();

	this.load = load;
	this.show = show;
	
	var baseGame;
	
	//=======================================================================			
	// LOAD
	//======================================================================
	function load(game,folder){

		newXML 			= new PFXMLPaint;
		newXML.load(game,folder);
		themeXML.getPaint();
		
		foreground 		= newXML.foreground;
		fScaleType		= newXML.fScaleType;
		isTakePhoto 	= false;
		isMouseDown 	= false;
		isElementDown 	= false;
        isPaint 		= true;
	}
	
	//=======================================================================			
	// SHOW GAME : It is a create, not a show
	//=======================================================================
	function show(game,folder,direction,containerAux,containerAnt){	
		baseGame = new PFBaseGame();
		baseGame.create(this,game,folder,containerAux, containerAnt);
		baseGame.highcontainer.addChild(colorsContainer);
		baseGame.highcontainer.addChild(brushesContainer);
	}
	
	//=====================================================
	// BUILD PRELOAD MANIFEST
	//=====================================================
	this.buildPreloadManifest = buildPreloadManifest
	function buildPreloadManifest(itemsManifest,game){
				
		//itemsManifest.push(newXML.background.getSrc());
		for(var i = 0; i < themeXML.colors.length; i++){
			itemsManifest.push(themeXML.colors[i].getSrc());
		}
		for(var i = 0; i < themeXML.brushSizes.length; i++){
			itemsManifest.push(themeXML.brushSizes[i].getSrc());
		}
		itemsManifest.push(themeXML.colorsPaletteThemeItem.getPath());
        itemsManifest.push(themeXML.colorsBrushesThemeItem.getPath());
			
		if(foreground!="null"){
			itemsManifest.push("./"+GAME_FOLDER+"/"+baseGame.getFolder()+"/images/"+foreground);
		}
		
		return itemsManifest;
	}	
	
	//=====================================================
	// ON ADD MENU
	//=====================================================
	this.onAddMenu = onAddMenu;
	function onAddMenu(){
		loadColorPalette(baseGame.getFolder());
		loadBrushes		(baseGame.getFolder());
		loadBin			(baseGame.getFolder());
		//loadCamera	(baseGame.getFolder());

		scaleContentToFit();
	}
	
	//=======================================================================
	// ON SHOW GAME
	//=======================================================================
	this.onShowGame = onShowGame;
	function onShowGame(){
		//---------------------------------
		//Paint Container
		//---------------------------------
		containerPaint 		= new Container();		
		//---------------------------------
		//Foreground Container
		//---------------------------------
		containerForeground = new Container();		

		//var background = new Bitmap(newXML.background.getSrc());
		//baseGame.containerBase.addChild(background);
						
		baseGame.containerBase.addChild(containerPaint);
		baseGame.containerBase.addChild(containerForeground);			

		
		if(foreground!="null"){
			var foregroundImage = new Bitmap("./"+GAME_FOLDER+"/"+baseGame.getFolder()+"/images/"+foreground);
            foregroundImage.image.onload = function(evt){

                scaleWithType(foregroundImage,fScaleType,WIDTH,HEIGHT);

                foregroundImage.x = WIDTH/2 - foregroundImage.image.width*foregroundImage.scaleX / 2;
                foregroundImage.y = HEIGHT/2 - foregroundImage.image.height*foregroundImage.scaleY / 2;

                containerForeground.addChild(foregroundImage);
            }
		}	
		
		//---------------------------------
		//activate screen mouse listeners
		//---------------------------------
		onTouch();	
	}	
	
	//=======================================================================
	// ON START GAME
	//=======================================================================
	this.onStartGame = onStartGame;
	function onStartGame(){
		
	}	
	
	//=======================================================================
	// PAINT MENU THINGS
	//=======================================================================
	function loadColorPalette(folder){

        var palette = themeXML.colorsPaletteThemeItem.create(function() {
	        /*
	        addCustomOnClick({item:palette,c:baseGame.containerNav}, function() {
		        isElementDown = true;
	        });
	        */
        });

		colorsContainer.addChild(palette);

		loadColors(folder);
	}
	//=======================================================================
	// LOAD COLORS
	//=======================================================================	
	function loadColors(folder){
		colors = new Array();
		rgbs = new Array();
		for(var i = 0; i < themeXML.colors.length; i++){
			var color 		= new Bitmap(themeXML.colors[i].getSrc());

			color.x 	= parseInt(themeXML.colors[i].getX());
			color.y 	= parseInt(themeXML.colors[i].getY());

			colorsContainer.addChild(color);

			rgbs.push(themeXML.colors[i].getRgb());
			color.i = i;

			color.image.i = i;

			colors.push(color);

			colors[i].image.onload = function() {
				var itemClick = addCustomOnClick({item:colors[this.i],c:colorsContainer},changeColor);
				itemClick.i = this.i;
			};

			//colors[i].onPress = changeColor;
		}
	}
	//=======================================================================
	// CHANGE COLOR
	//=======================================================================	
	function changeColor(evt){

		evt.stopImmediatePropagation();
		evt.stopPropagation();

		var i = evt.target.i;
		//isElementDown 	= true;
		colorR 			= parseInt(rgbs[i][0]);
		colorG 			= parseInt(rgbs[i][1]);
		colorB 			= parseInt(rgbs[i][2]);
	}
	//=======================================================================
	// LOAD BRUSHES
	//=======================================================================
	function loadBrushes(folder){

        var bgBrush =  themeXML.colorsBrushesThemeItem.create(/*function() {
	        addCustomOnClick({item:bgBrush,c:baseGame.containerNav}, function() {
		        isElementDown = true;
	        });
        }*/);

		brushesContainer.addChild(bgBrush);
		//bgBrush.onPress = function(){ isElementDown = true; };

		brushes = new Array(themeXML.brushSizes.length);
		sizes = new Array(themeXML.brushSizes.length);
		for(var i = 0; i < themeXML.brushSizes.length; i++){
			brushes[i] = new Bitmap(themeXML.brushSizes[i].getSrc());

            brushes[i].x = parseInt(themeXML.brushSizes[i].getX());
			brushes[i].y = themeXML.brushSizes[i].getY();

			brushesContainer.addChild(brushes[i]);
			sizes[i] =	themeXML.brushSizes[i].getThickness();
			brushes[i].i = i;
			brushes[i].image.i = i;
			brushes[i].src = themeXML.brushSizes[i].getSrc();

			//brushes[i].onPress = changeBrush;

			brushes[i].image.onload = function() {
				var itemClick = addCustomOnClick({item:brushes[this.i],c:brushesContainer},changeBrush);
				itemClick.i = this.i;
				itemClick.src = brushes[this.i].src;
			};

		}
		
		//---------------------------------
		//Active brush :PFTODO => Get it from theme
		//---------------------------------
		activeBrush 	= new Bitmap(brushes[1].src);
        activeBrush.image.onload = function(evt){
            activeBrush.x	= themeXML.activeBrush.getX() - activeBrush.image.width/2;
            activeBrush.y	= themeXML.activeBrush.getY() - activeBrush.image.height/2;
	        brushesContainer.addChild(activeBrush);
        }
		/*activeBrush.x	= themeXML.activeBrush.getX();
		activeBrush.y	= themeXML.activeBrush.getY();
		baseGame.containerNav.addChild(activeBrush);*/
	}
	
	//=======================================================================
	// CHANGE BRUSH
	//=======================================================================	
	function changeBrush(evt){
		var i = evt.target.i;
		var src = evt.target.src;
		//isElementDown = true;
		brushesContainer.removeChild(activeBrush);
		
		thickness = sizes[i];
		activeBrush	= new Bitmap(src)
        activeBrush.image.onload = function(evt){
            activeBrush.x	= themeXML.activeBrush.getX() - activeBrush.image.width/2;
            activeBrush.y	= themeXML.activeBrush.getY() - activeBrush.image.height/2;
	        brushesContainer.addChild(activeBrush);
        }
		
		/*switch (i){
			case 2:
				activeBrush.x	= 20;
				activeBrush.y	= 381;	
				baseGame.containerNav.addChild(activeBrush);
			break;
			case 1:
				activeBrush.x	= 26;
				activeBrush.y	= 388;
				baseGame.containerNav.addChild(activeBrush);
			break;
			case 0:
				activeBrush.x	= 33;
				activeBrush.y	= 395;
				baseGame.containerNav.addChild(activeBrush);
			break;
		}*/


	}
	
	//===================================================
	// loadCamera: Load reset paint button
	//===================================================
	function loadBin(folder){

		if (themeXML.binButton != null) {
			bin = themeXML.binButton.create(function() {

				PFDebug("Created bin with theme");
				PFDebug(bin);

				baseGame.containerNav.addChild(bin);
				addCustomOnClick({item:bin,c:baseGame.containerNav},cleanPaint);
			})
		}
		else
		{
			bin = new Bitmap("./"+GAME_FOLDER+"/images/paint-bin.png");
			bin.x 	= WIDTH - 74;
			bin.y	= 100;
			baseGame.containerNav.addChild(bin);
			bin.image.onload = function () {
				addCustomOnClick({item:bin,c:baseGame.containerNav},cleanPaint);
			}
		}
		//bin.onPress = cleanPaint;
	}
	//===================================================
	// cleanPaint: Delete all we've painted
	//===================================================
	function cleanPaint(){
		//isElementDown = true;
		containerPaint.removeAllChildren();
	}
	//===================================================
	// loadCamera: Load screenshot button
	//===================================================
	function loadCamera(folder){
		var camera 	= new Bitmap("./"+GAME_FOLDER+"/images/camera.png");
		camera.x	= 900;
		camera.y	= 100;
		baseGame.containerNav.addChild(camera);

		addCustomOnClick({item:baseGame,c:containerNav},screenshot);

		//camera.onPress = screenshot;
	} 
	
	//=====================================================================
	// screenshot: Take a screenshot; adapted for every device 
	//=====================================================================
	function screenshot(){
		isElementDown = true;
		baseGame.hideNav();	//Clean buttons temporary to take screenshot correctly 
		stage.update();

		if (!isTakePhoto){
			var myDraw = document.getElementById("canvas");
			var draw = myDraw.toDataURL("image/png");
		
		if(playDevice == "WEB"){
			window.open (draw, "_blank");
		}
			/*
		if(playDevice == "IOS"){
			storage.save("IOS");	//Call mobile devices plugins to take and save screenshots
		}
		if(playDevice == "ANDROID"){
			storage.save("ANDROID");	//Call mobile devices plugins to take and save screenshots
			sleep(1000);
		}
			*/
			isTakePhoto=true;
		}
		
		baseGame.showNav();
	}
	
	/* Interaction to paint */
	//===================================================
	// handleMouseDown: Activate screen mouse listeners
	//===================================================
	function onTouch(){
		stage.autoClear 	= true;

		$("canvas").on("mousedown touchstart", handleMouseDown);
		$("canvas").on("mouseup touchend", handleMouseUp);

		stage.update();
		Ticker.addEventListener(window);
	}

	/* Mouse Listeners*/
	//============================================================================================
	// handleMouseDown: Turn on booleans to start to paint, and select type of brush and color
	//============================================================================================
	function handleMouseDown() {

		if(baseGame.isGameActive()){
			isMouseDown = true;
			s = new Shape();
			s.cache(0,0,stage.canvas.width,stage.canvas.height);
			oldX = stage.mouseX;
			oldY = stage.mouseY;
			oldMidX = stage.mouseX;
			oldMidY = stage.mouseY;
			var g = s.graphics;
			g.setStrokeStyle(thickness + 1, 'round', 'round');
			var color = Graphics.getRGB(colorR,colorG,colorB);
			g.beginStroke(color);
			containerPaint.addChild(s);
			currentShape = s;
		}
	}
	//=======================================================================
	// handleMouseUp: Turn off booleans to stop to paint, and clean cach�
	//=======================================================================
	function handleMouseUp() {

		if(baseGame.isGameActive()){
			if(s!=undefined){
				s.graphics.clear();
			}
			isMouseDown = false;
			isElementDown = false;
			isTakePhoto = false;
		}
	}

	function scaleContentToFit() {

		var initialWidth = 1024; // Your content is 500px wide un-scaled
		var initialHeight = 768 - 61;
		var targetHeight = HEIGHT - 61;
		var targetWidth = WIDTH; // Your window is now 1000px wide

		var scaleX = initialWidth/targetWidth;
		var scaleY = initialHeight/targetHeight;

		colorsContainer.x = WIDTH/2;
		colorsContainer.y = HEIGHT-61;

		colorsContainer.regX = WIDTH/2;
		colorsContainer.regY = HEIGHT-61;

		brushesContainer.x = 0;
		brushesContainer.y = (HEIGHT-61)/2;

		brushesContainer.regX = 0;
		brushesContainer.regY = (HEIGHT-61)/2;

		if (scaleX > scaleY) {
			colorsContainer.scaleX = colorsContainer.scaleY = 1/scaleX;
			brushesContainer.scaleX = brushesContainer.scaleY = 1/scaleX;
			//bin.scaleX = bin.scaleY = 1/scaleX;
		} else {
			colorsContainer.scaleX = colorsContainer.scaleY = 1/scaleY;
			brushesContainer.scaleX = brushesContainer.scaleY = 1/scaleY;
			//bin.scaleX = bin.scaleY = 1/scaleY;
		}
	}

	this.getHasStart = getHasStart;
	function getHasStart() {
		return false;
	}

	this.hasMuteButton = hasMuteButton;
	function hasMuteButton() {
		return false;
	}

	//=====================================================
	// CLEAR SOUNDS
	//=====================================================		
	this.onClearSounds = onClearSounds;
    function onClearSounds(){
    }	
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/paint2/PFGamePaint2.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFGamePaint2.js 
//	PFGamePaint2: game listen and touch 2
//*************************************************************/

var PFGamePaint2 = function(){
	
	//=====================================================
	// VARIABLES
	//=====================================================
	var items;
	var newXML;
	var touchListenListen;
	var usedItems;
	var numUsed;
	var itemRandom;
	var images;		
	var num		= 0;
	var fiJoc	= false;
	var offsetx, offsety;
	var newx, newy;
	var i;
	var gameGlob;
	var activeBrush;
	var colorR 		= 49;
	var colorG 		= 182;
	var colorB 		= 234;
	var thickness 	= 50;
	var colors;
	var rgbs;
	var brushes;
	var sizes;
	var aura;
	
	this.load = load;
	this.show = show;
	
	var baseGame;	
	var selectedRgb = "49-182-234";
	
	//=======================================================================			
	// LOAD
	//======================================================================
	function load(game,folder){		
		
		newXML = new PFXMLPaint2();
		newXML.load(game,folder);
		themeXML.getPaint();
		
		if(newXML.wrongSound != null){			
			PFSound.load("wrongSound",newXML.wrongSound);
		}		
		
		PFSound.load('end',"./"+GAME_FOLDER+"/sounds/ok.mp3");
		items 			  = new Array(newXML.items.length);
		touchListenListen = new PFGamePaint2Listen();
		gameGlob 	= game;
	}
	
	//=======================================================================			
	// SHOW GAME : It is a create, not a show
	//=======================================================================
	function show(game,folder,direction,containerAux,containerAnt){	
		baseGame = new PFBaseGame();
		baseGame.create(this,game,folder,containerAux, containerAnt);
	}
	
	//=====================================================
	// BUILD PRELOAD MANIFEST
	//=====================================================
	this.buildPreloadManifest = buildPreloadManifest
	function buildPreloadManifest(itemsManifest,game){		
		//itemsManifest.push(newXML.background.getSrc());
		//itemsManifest.push(newXML.background.getSrc());
		for(var i = 0; i < themeXML.colors.length; i++){
			itemsManifest.push(themeXML.colors[i].getSrc());
		}
		for(var i = 0; i < themeXML.brushSizes.length; i++){
			itemsManifest.push(themeXML.brushSizes[i].getSrc());
		}
		itemsManifest.push(themeXML.aura);
		itemsManifest.push(themeXML.colorsPaletteThemeItem.getPath());
        itemsManifest.push(themeXML.colorsBrushesThemeItem.getPath());
		for ( i=0; i<items.length; i++){
			itemsManifest.push(newXML.items[i].getSrc());
		}		
		return itemsManifest;
	}	
	
	//=====================================================
	// ON ADD MENU
	//=====================================================
	this.onAddMenu = onAddMenu;
	function onAddMenu(){
		loadColorPalette(baseGame.getFolder());				
	}
	
	//=======================================================================
	// ON SHOW GAME
	//=======================================================================
	this.onShowGame = onShowGame;
	function onShowGame(){		
		//var background = new Bitmap(newXML.background.getSrc());
		//baseGame.containerBase.addChild(background);
		communicationLayer.setNumberOfQuestions(items.length);
		images = new Array(items.length);
		
		for (i = 0; i < items.length; i++){			
			images[i] 		= new Image();
			images[i].src 	= newXML.items[i].getSrc();
			images[i].i 	= i;
			images[i].onload = loadBitmaps; //Load the bitmaps		
			
			PFSound.load("sound"+i,newXML.items[i].getSound());		
			PFSound.load("wrongColor"+i,newXML.items[i].getWrongColorSound());
		}
		
		/* Select which animal we've to touch */
		usedItems 	= new Array(items.length);
		numUsed  	= 0;
		
		
		itemRandom 	= Math.floor(Math.random()*newXML.items.length);
		touchListenListen.setActual(itemRandom);			
		touchListenListen.setCurrentRgb(newXML.items[itemRandom].getRgb());
		
        var repeatButton = themeXML.soundThemeItem.create();
		repeatButton.image.onload = function () {
			baseGame.containerNav.addChild(repeatButton);
			addCustomOnClick({item:repeatButton,c:baseGame.containerNav},repeat);
		}

		//repeatButton.onPress = repeat
	}
	
	//=======================================================================
	// ON START GAME
	//=======================================================================
	this.onStartGame = onStartGame;
	function onStartGame(){
		if(themeXML.instructionVisible == true || typeof(themeXML.instructionVisible) == "undefined")
            touchListenListen.playSound(itemRandom,baseGame.getGame(),newXML);
	}		
	
	//=======================================================================
	// PAINT MENU THINGS
	//=======================================================================
	function loadColorPalette(folder){

        var palette = themeXML.colorsPaletteThemeItem.create(/*function() {
	        addCustomOnClick({item:palette,c:baseGame.containerNav}, function() {
		        isElementDown = true;
	        });
        }*/);

        //palette.onPress = function(){ isElementDown = true; };
		baseGame.containerNav.addChild(palette);

		loadColors(folder);
	}
	//=======================================================================
	// LOAD COLORS
	//=======================================================================	
	function loadColors(folder){
		colors = new Array();
		rgbs = new Array();
		for(var i = 0; i < themeXML.colors.length; i++){
			if(i==0){
				aura = new Bitmap(themeXML.aura);
				aura.x 	= parseInt(themeXML.colors[i].getX())-3;
				aura.y 	= parseInt(themeXML.colors[i].getY())-3;				
				baseGame.containerNav.addChild(aura);
			}
			var color 		= new Bitmap(themeXML.colors[i].getSrc());

			color.x 	= parseInt(themeXML.colors[i].getX());
			color.y 	= parseInt(themeXML.colors[i].getY());

			baseGame.containerNav.addChild(color);

			rgbs.push(themeXML.colors[i].getRgb());
			color.i = i;

			color.image.i = i;

			colors.push(color);

			colors[i].image.onload = function() {
				var itemClick = addCustomOnClick({item:colors[this.i],c:baseGame.containerNav},changeColor);
				itemClick.i = this.i;
			};

			//colors[i].onPress = changeColor;
		}
	}
	//=======================================================================
	// CHANGE COLOR
	//=======================================================================	
	function changeColor(evt){

		evt.stopImmediatePropagation();
		evt.stopPropagation();

		var i = evt.target.i;
		
		aura.x 	= parseInt(themeXML.colors[i].getX())-3;
		aura.y 	= parseInt(themeXML.colors[i].getY())-3;
		//isElementDown 	= true;
		colorR 			= parseInt(rgbs[i][0]);
		colorG 			= parseInt(rgbs[i][1]);
		colorB 			= parseInt(rgbs[i][2]);
		selectedRgb = colorR + "-" + colorG + "-" + colorB;		
		
		if(touchListenListen.getCurrentRgb() != selectedRgb){			
			PFSound.play("wrongColor"+itemRandom);			
		}
		
	}
	
	//=====================================================
	// repeat: repeat sound
	//=====================================================
	function repeat(){
		touchListenListen.repeatSound();
	}
	//=====================================================
	// loadText: load and show all items images 
	//=====================================================
	function loadText(evt){
		i = evt;
		var game = baseGame.getGame();
		var folder = baseGame.getFolder();
		var bm = new PFBaseItem(newXML.items[i],i);
		items[i] = bm.getText();
		
		var scaleFactor = 1;
		if (newXML.items[i].getScale()!=1000){
			scaleFactor = newXML.items[i].getScale()/1000;
			items[i].scaleX = scaleFactor;
			items[i].scaleY = scaleFactor;
		}
		items[i].defaultScaleX = items[i].scaleX;
		items[i].defaultScaleY = items[i].scaleX;
			
		newx			= parseInt(newXML.items[i].getX());
		newy			= parseInt(newXML.items[i].getY());
		
		items[i].x	  	= newx;
		items[i].y	  	= newy;
		newXML.items[i].setOffsetX(offsetx);
		newXML.items[i].setOffsetY(offsety);
		
		items[i].rotation	=  newXML.items[i].getRotation();
		items[i].defaultRotation	=  newXML.items[i].getRotation();
		
		baseGame.containerBase.addChild(items[i]);
		items[i].i = i;

		var resultShape = addCustomOnClick({item:items[i],c:baseGame.containerBase},onTouch);
		resultShape.i = i;
		//items[i].onPress = onTouch;
	}
	//=====================================================
	// loadBitmaps: load and show all items images 
	//=====================================================
	function loadBitmaps(evt){
		i = evt.target.i;
		var game = baseGame.getGame();
		var folder = baseGame.getFolder();
		items[i] = new Bitmap(images[i]);
		
		var scaleFactor = 1;
		if (newXML.items[i].getScale()!=1000){
			scaleFactor = newXML.items[i].getScale()/1000;
			items[i].scaleX = scaleFactor;
			items[i].scaleY = scaleFactor;
		}
		items[i].defaultScaleX = items[i].scaleX;
		items[i].defaultScaleY = items[i].scaleX;
			
		offsetx			= (parseInt(items[i].image.width)/2);
		offsety			= (parseInt(items[i].image.height)/2);
		newx			= parseInt(newXML.items[i].getX());
		newy			= parseInt(newXML.items[i].getY());
		items[i].regX 	= offsetx;
		items[i].regY 	= offsety;
		items[i].x	  	= newx;
		items[i].y	  	= newy;
		items[i].alpha	= 0.01;
		newXML.items[i].setOffsetX(offsetx);
		newXML.items[i].setOffsetY(offsety);
		
		items[i].rotation	=  newXML.items[i].getRotation();
		items[i].defaultRotation	=  newXML.items[i].getRotation();
		
		baseGame.containerBase.addChild(items[i]);
		items[i].i = i;

		var resultShape = addCustomOnClick({item:items[i],c:baseGame.containerBase},onTouch);
		resultShape.i = i;
		
		//items[i].onPress = onTouch;
	}
	
	//================================================================================================
	// onTouch: evaluate if items it's OK, in afirmative case call animation and next item to click
	//================================================================================================
	function onTouch(evt){
		i 			= evt.target.i;
		var game 	= baseGame.getGame();
		var folder	= baseGame.getFolder();
	
		//----------------------------
		// item clicked correct
		//----------------------------
		if (i==itemRandom && touchListenListen.getCurrentRgb() == selectedRgb){			
            communicationLayer.onCorrect(0);
			usedItems[numUsed] = itemRandom;
			Tween.get(items[i]).to({alpha:1},600);			
			//--------------------------------
			// not all items appeared
			//--------------------------------
			if (numUsed<(items.length-1)){	
				touchListenListen.onTouch(i,game,newXML,items,folder);
				do{
					itemRandom = Math.floor(Math.random()*newXML.items.length);
				}while(controlRepetit(itemRandom)==true);
				numUsed++;
				touchListenListen.setActual(itemRandom);
				touchListenListen.setCurrentRgb(newXML.items[itemRandom].getRgb());
				touchListenListen.playSound(itemRandom,game,newXML);
			}else{
				touchListenListen.onTouch(i,game,newXML,items,folder);
				fiJoc = true;				
				Tween.get(containerPrincipal).wait(100).call(function(){
					baseGame.endGame(newXML.endGame);
				});
			}
		}
        else{		
			if(newXML.wrongSound != null){
				PFSound.play("wrongSound");
			}
            communicationLayer.onIncorrect(0);
        }
	}	
	
	//==========================================================================
	// controlRepetit: evaluate if this item is already used (appeared before)
	//==========================================================================
	function controlRepetit(itemR){
		var repetit = false;
		for(i=0;i<=numUsed;i++){
			if(usedItems[i]==itemR){ repetit = true; }
		}
		return repetit;
	}

	this.getHasStart = getHasStart;
	function getHasStart() {
		return false;
	}
	this.hasMuteButton = hasMuteButton;
	function hasMuteButton() {
		return true;
	}

	//=====================================================
	// CLEAR SOUNDS
	//=====================================================		
	this.onClearSounds = onClearSounds;
    function onClearSounds(){
		for(i=0;i<items.length;i++){
            PFSound.unload("sound"+i);
			PFSound.unload("wrongColor"+i);
        }      
    }
    function clearSounds(){
        for(i=0;i<items.length;i++){
            PFSound.unload("sound"+i);
			PFSound.unload("wrongColor"+i);
        }
        PFSound.unload('end');
    }	
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/paint2/PFGamePaint2Listen.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFGameTouchListenListen.js 
//	PFGameTouchListenListen: listener of listen and touch game
//*************************************************************

var PFGamePaint2Listen = function(){
	
	//=====================================================
	// VARIABLES
	//=====================================================
	var decoratorAction = new PFItemDecoratorAction();
	var actual;
	var currentRgb;

	this.onTouch=onTouch;
	this.playSound=playSound;
	this.getActual=getActual;
	this.setActual=setActual;
	this.repeatSound=repeatSound;
	this.getCurrentRgb=getCurrentRgb;
	this.setCurrentRgb=setCurrentRgb;
	
	//=====================================================
	// onTouch: animate
	//=====================================================
	function onTouch(i,game,xml,items,folder){
		
		var decoratorAction = new PFItemDecoratorAction();
		
		var actionXML = new PFActionXML();

		PFDebug("Actions: ");
		PFDebug(actionXML);

		actionXML.load(folder, xml.items[i].getAction());	
		actions = actionXML.getAction();

		PFDebug("Actions: ");
		PFDebug(actions);

		if(actionXML.getActionScale() != null && actionXML.getActionScale().length > 0){
			xml.items[i].setActionScale(actions);
			decoratorAction.calculateScale(i,0,xml.items[i].getActionScale(),items);
		}
		if(actionXML.getActionScale() != null && actionXML.getActionRotation().length > 0){
			xml.items[i].setActionRotation(actions);
			decoratorAction.calculateRotation(i,0,xml.items[i].getActionRotation(),items);
		}
		if(actionXML.getActionScale() != null && actionXML.getActionMove().length > 0){
			xml.items[i].setActionMove(actions);
			decoratorAction.calculateMovementX(i,0,items,xml,game);
			decoratorAction.calculateMovementY(i,0,items,xml,game);
		}
		if(actionXML.getActionScale() != null && actionXML.getActionJump().length > 0){
			xml.items[i].setActionJump(actions);
			decoratorAction.calculateMovementJump(xml.items[i].getActionJump(),xml,xml.items[i].getY(),i,game);
			decoratorAction.calculateJump(i,0,items,xml,game);
		}
	}
	
	//=====================================================
	// PLAY SOUND	
	//=====================================================
	function playSound(i,game,xml){
		actual 		= i;
		currentRgb = xml.items[i].getRgb();
		var itSound = xml.items[i].getSound();
		if(itSound != ""){
			PFSound.play("sound"+i);
		}
	}
	//=====================================================
	// PLAY SOUND ERROR
	//=====================================================
	function playSoundError(){
		//sound.play();
	}
	//=====================================================
	// REPEAT SOUND
	//=====================================================
	function repeatSound(){
		PFSound.play("sound"+actual);
	}
	//=====================================================
	// SETS
	//=====================================================
	function setActual(act){
		actual = act;
	}
	function setCurrentRgb(rgb){
		currentRgb = rgb;
	}
	//=====================================================
	// GETS
	//=====================================================
	function getActual(){
		return actual;	
	}
	function getCurrentRgb(){
		return currentRgb;
	}
}




/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/InteractiveImages/PFItemInteractiveImages.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFItemFastDragParent.js 
//	PFItemFastDragParent: create particular item properties
//*************************************************************

function PFItemInteractiveImages(text,img,sound,folder){

	//=====================================================
	// VARIABLES
	//=====================================================
	if(typeof(sound) != 'undefined'){
		if(sound==""){
			this.sound ="";
		}else{
			this.sound = "./"+GAME_FOLDER+"/"+folder+"/sounds/"+sound;
		}
	}
	if(typeof(img) != 'undefined'){
		if(folder==""){	
			this.img = "images/"+img;
		}else{
			this.img = "./"+GAME_FOLDER+"/"+folder+"/images/"+img;
		}
	}	
	this.text = text;

	this.getText = getText;
	this.getImage = getImage;
	this.getSound = getSound;
	
	//=====================================================
	// GETS
	//=====================================================
	function getText() {
		return this.text;
	}
	function getImage() {
		return this.img;
	}
	function getSound() {
		return this.sound;
	}
}


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/InteractiveImages/PFGameInteractiveImages.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//******************************************************************
// PFGameInteractiveImages: Load and execute "InteractiveImages"
//*****************************************************************/

var PFGameInteractiveImages = function(){

	//Variables
	var items;
	var itemsMid;
	var xml;
	var interactiveImagesListen;
	var images;
	var imagesPopup;

	var containerMid;
	var preload;
	var num=0;
	var offsetx, offsety;
	var newx, newy;
	var i;
	var newMXL;
	
	//Functions declaration
	this.load = load;
	this.show = show;
	
	var baseGame;
	
	//=======================================================================			
	// LOAD
	//=======================================================================
	function load(game,folder){
		newXML = new PFXMLInteractiveImages();
		newXML.load(game,folder);	
	
		xml 		= new PFAction();
		xml.LoadItems(game,folder);
		items 		= new Array(newXML.items.length);
		itemsMid 	= new Array(newXML.items.length);		
		interactiveImagesListen = new PFGameInteractiveImagesListen();
	}
	
	//=======================================================================			
	// SHOW GAME : It is a create, not a show
	//=======================================================================
	function show(game,folder,direction,containerAux,containerAnt){	
		baseGame = new PFBaseGame();
		baseGame.create(this,game,folder,containerAux, containerAnt);
	}
	
	//=====================================================
	// BUILD PRELOAD MANIFEST
	//=====================================================
	this.buildPreloadManifest = buildPreloadManifest
	function buildPreloadManifest(itemsManifest,game){				
		for ( i=0; i<items.length; i++){
			if(typeof(newXML.items[i]) != 'undefined'){
				itemsManifest.push(newXML.items[i].getSrc());
				if(typeof(newXML.items[i].getImage()) != 'undefined'){				
					itemsManifest.push(newXML.items[i].getImage());
				}				
			}
		}
		itemsManifest.push("./"+GAME_FOLDER+"/images/bt_creditos_exit.png");
		
		return itemsManifest;
	}	
	
	//=====================================================
	// ON ADD MENU
	//=====================================================
	this.onAddMenu = onAddMenu;
	function onAddMenu(){
	}
	
	//=======================================================================
	// ON SHOW GAME
	//=======================================================================
	this.onShowGame = onShowGame;
	function onShowGame(){		
		containerMid = new Container();
		containerMid.alpha=0;				
				
		//var background = new Bitmap(xml.getBackground("game").getSrc());
		//baseGame.containerBase.addChild(background);

        communicationLayer.setNumberOfQuestions(items.length);
		
		baseGame.containerNav.addChild(containerMid);
		
		images		= new Array(items.length);
		imagesPopup	= new Array(items.length);		
		for (i = 0; i < items.length; i++){			
			images[i] = new Image();
			images[i].src = newXML.items[i].getSrc();
			imagesPopup[i] = new Image();
			var strImage = newXML.items[i].getImage();
			
			if(typeof(strImage) != 'undefined'){
				if(strImage.charAt(strImage.length-1) != "/"){
					imagesPopup[i].src = newXML.items[i].getImage();
					imagesPopup[i].i 		= i;
					imagesPopup[i].onload	= loadBitmapsMid;
				}
			}
			images[i].i 			= i;
			images[i].onload		= loadBitmapsBase;
		}	
	}

	//=======================================================================
	// ON START GAME
	//=======================================================================
	this.onStartGame = onStartGame;
	function onStartGame(){

	}	

	//=====================================================
	// loadBitmaps: load and show all items images 
	//=====================================================
	function loadBitmapsBase(evt){
		i 			= evt.target.i;
		var folder 	= baseGame.getFolder();
		var game 	= baseGame.getGame();
		items[i] 	= new Bitmap(images[i]);
		
		if (newXML.items[i].getScale()!=1000){
			var scaleFactor = newXML.items[i].getScale()/1000;
			items[i].scaleX=scaleFactor;
			items[i].scaleY=scaleFactor;
		}
		offsetx			= parseInt(items[i].image.width)/2;
		offsety			= parseInt(items[i].image.height)/2;
		newx			= parseInt(newXML.items[i].getX());
		newy			= parseInt(newXML.items[i].getY());
		items[i].regX 	= offsetx;
		items[i].regY 	= offsety;
		items[i].x 		= newx;
		items[i].y 		= newy;
		
		items[i].rotation	=  newXML.items[i].getRotation();
		
		baseGame.containerBase.addChild(items[i]);
		items[i].i = i;
		items[i].game = game;

		var itemShape = addCustomOnClick({item: items[i],c:baseGame.containerBase},callOnTouch);

		itemShape.i = i;
		itemShape.game = game;
	}
	
	function callOnTouch(evt){
		var i = evt.target.i;
		var game = evt.target.game;		
		
		if(baseGame.isGameActive()){
            communicationLayer.onCorrect(0);
			interactiveImagesListen.onTouch(i,game,xml,itemsMid,containerMid,baseGame.containerBase,newXML);
		}
	}
	
	
	//=====================================================
	// loadBitmapsMid: load all popup images 
	//=====================================================
	function loadBitmapsMid(evt){		
		i 			= evt.target.i;
		var folder 	= baseGame.getFolder();
		var game 	= baseGame.getGame();
		itemsMid[i] = new Bitmap(imagesPopup[i]);
		offsetx		= parseInt(itemsMid[i].image.width)/2;
		offsety		= parseInt(itemsMid[i].image.height)/2;
		newx		= 344;
		newy		= 384;
		itemsMid[i].regX 	= offsetx;
		itemsMid[i].regY 	= offsety;
		itemsMid[i].x 		= newx;
		itemsMid[i].y 		= newy;
	}

	this.getHasStart = getHasStart;
	function getHasStart() {
		return false;
	}

	this.hasMuteButton = hasMuteButton;
	function hasMuteButton() {
		return baseGame.checkItemsForSound(newXML.items);
	}

	//=====================================================
	// CLEAR SOUNDS :
	//=====================================================		
	this.onClearSounds = onClearSounds;
    function onClearSounds(){
		for(i=0;i<items.length;i++){
            PFSound.unload('soPopup'+i);       
        }   
    }	
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/InteractiveImages/PFGameInteractiveImagesListen.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


var PFGameInteractiveImagesListen = function(){

	//Variables
	this.popup=false;
    this.container;
    this.num;
    this.itemsPopup;
    this.xmlAux;
    this.gameAux;
    this.square;
    this.containerB;
    this.newXML;
}

    //=======================================================================
    // ON TOUCH
    //=======================================================================
	//Functions
    PFGameInteractiveImagesListen.prototype.onTouch = function(i,game,xml,itemsMid,containerMid,containerBase,newX){
		if(!this.popup){

			//soundsP=sounds;
            this.containerB  = containerBase;
            this.container   = containerMid;
            this.itemsPopup  = itemsMid;
            this.xmlAux      = xml;
            this.gameAux     = game;
            this.num         = i;
            this.newXML      = newX;
			if(!this.openPopup()){

			}else{
                this.popup=true;
                this.drawRect(0,0,WIDTH,HEIGHT,0,0,0,0);
                this.creaPopup(1);
			}
		}
	}
	//=======================================================================			
	// CREA POPUP
	//=======================================================================	
    PFGameInteractiveImagesListen.prototype.creaPopup = function(anim){
		//PLAY THE SOUND ASSOCIED WITH THE SPRITE			
		var itSound = this.newXML.items[this.num].getSound();
		if(itSound != ""){
			PFSound.load('soPopup'+this.num,itSound);
			PFSound.play('soPopup'+this.num);
		}

        var instructions = new PFInteractiveImageInstruction(null);
        instructions.loadInteractiveImage(this.newXML,this.num);
        instructions.show(this.container);
        instructions.setListener(this);

		switch(anim){
			case 1:
				Tween.get(this.container).to({alpha:1},600);
				Tween.get(this.square).to({alpha:0.5},600);
			break;
			case 2:
				Tween.get(this.container).to({x:0},600);
			break;
		}
	}

    //=======================================================================
    // DRAW RECT
    //=======================================================================
    PFGameInteractiveImagesListen.prototype.drawRect = function(x,y,sizex,sizey,alpha,r,gr,b){
		var g = new Graphics();
		g.beginFill(Graphics.getRGB(r,gr,b));
		g.drawRect(x,y,sizex,sizey);
        this.square = new Shape(g);
        this.square.alpha=alpha;
        this.containerB.addChild(this.square);
        this.square.theClass = this;

	    this.square.addEventListener("click",this.onClose,false);
	}

    PFGameInteractiveImagesListen.prototype.onClose = function(evt){
	    if (evt)
            evt.target.theClass.endPopup();
	    else
	        this.endPopup();
    }

    //=======================================================================
    // BO NEXT POPUP
    //=======================================================================
    PFGameInteractiveImagesListen.prototype.goNextPopup = function(evt){
		if((this.num+1)<=(this.itemsPopup.length-1)){
            this.num++;
		}else{
            this.num=0;
		}		
		
		if(!this.openPopup()){

		}else{
            this.container.theClass = this;
			Tween.get(this.container).to({x:1024},600).call(function(evt){
                evt._target.theClass.container.removeAllChildren();
                evt._target.theClass.container.x=-1024;
                evt._target.theClass.creaPopup(2);
            });
		}
	}


    //=======================================================================
    // BO BACK POPUP
    //=======================================================================
    PFGameInteractiveImagesListen.prototype.goBackPopup = function(evt){
		if((this.num-1)>=0){
            this.num--;
		}else{
            this.num=(this.itemsPopup.length-1);
		}
		if(!this.openPopup()){

		}else{
            this.container.theClass = this;
			Tween.get(this.container).to({x:-1024},600).call(function(evt) {
                evt._target.theClass.container.removeAllChildren();
                evt._target.theClass.container.x=1024;
                evt._target.theClass.creaPopup(2);
            });
		}
	}

    //=======================================================================
    // OPEN POPUP
    //=======================================================================
    PFGameInteractiveImagesListen.prototype.openPopup = function(){
		if( (this.newXML.items[this.num].getText() == "" || typeof(this.newXML.items[this.num].getText())== 'undefined') &&
			(this.newXML.items[this.num].getSound() == "" || typeof(this.newXML.items[this.num].getSound())== 'undefined') &&
			(this.itemsPopup[this.num] == "" || typeof(this.itemsPopup[this.num])== 'undefined')
		){		
			return false;	
		}else{
			return true;
		}
	}

    //=======================================================================
    // END POPUP
    //=======================================================================
    PFGameInteractiveImagesListen.prototype.endPopup = function(){
        this.square.containerB = this.containerB;

	    PFSound.stopAll();

		Tween.get(this.square).to({alpha:0},600).call(function(evt){
            evt._target.containerB.removeChild(evt._target);
        });

		Tween.get(this.container).to({alpha:0},600).call(function(evt){
            evt._target.removeAllChildren();
        });
        this.popup=false;
	}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/InteractiveImages/PFInteractiveImageInstruction.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


var PFInteractiveImageInstruction = PFInstructions.extend(function(){
    this.superc.call(this);
});

    //=======================================================================
    // OVERRIDING PARENT FUNCTIONS
    //=======================================================================
    PFInteractiveImageInstruction.prototype.getXMLPath = function(folder){
        return _game_xml;
    }

    PFInteractiveImageInstruction.prototype.getInstructionKind = function(){
        return "interactiveImages";
    }

    PFInteractiveImageInstruction.prototype.getThemeFolder = function(){
        return "./"+GAME_FOLDER+"/theme/images/interactiveImages/";
    }

    PFInteractiveImageInstruction.prototype.onNext = function(evt){
        PFSound.stop('soInstructions'+soundID);
        PFSound.unload('soInstructions'+soundID);
        if(evt.target.theClass.listener!=null)
            evt.target.theClass.listener.goNextPopup();

    }
    PFInteractiveImageInstruction.prototype.onPrev = function(evt){
        PFSound.stop('soInstructions'+soundID);
        PFSound.unload('soInstructions'+soundID);

        if(evt.target.theClass.listener!=null)
            evt.target.theClass.listener.goBackPopup();
    }
	PFInteractiveImageInstruction.prototype.onClose = function(evt){
		PFSound.stop('soInstructions'+soundID);
		PFSound.unload('soInstructions'+soundID);

		if(evt.target.theClass.listener!=null)
			evt.target.theClass.listener.onClose();
	}


    //=======================================================================
    // loadInstructions: load the instructions of a game
    //=======================================================================
    PFInteractiveImageInstruction.prototype.loadInteractiveImage = function(xml,itemNum){
        //PFDebug(xml);
        //PFDebug(xml.items[itemNum]);

        this.iterations = xml.items;
	    numberIterations = xml.items.length;
        this.counter = 0;

        if(typeof xml.items[itemNum] != "undefined" && xml.items[itemNum].getText() != "" ){
            this.counter = this.counter + 1;
            this.text = xml.items[itemNum].getText();
            PFDebug("There is text:" + this.text);
        }
        if(typeof xml.items[itemNum] != "undefined" && xml.items[itemNum].getImage() != "" ){

            var image = xml.items[itemNum].getImage();
            if(image.charAt(image.length-1) != "/"){
                this.counter = this.counter + 100;
                this.image = xml.items[itemNum].getImage();
                PFDebug("There is Image:" + this.image);
            }
        }
        if(typeof xml.items[itemNum] != "undefined" && xml.items[itemNum].getSound() != "" ){
            this.counter = this.counter + 10;
            this.sound = xml.items[itemNum].getSound()
            PFDebug("There is Sound:" + this.sound);
        }
    }


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/quiz/PFItemQuizQuestion.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************//      File: PFItemQuizQuestion.js //      PFItemQuizQuestion: create particular item properties//*************************************************************function PFItemQuizQuestion(question, img, sound, answers, rgb){		//=====================================================    // VARIABLES    //=====================================================	this.question 	= question;	this.img 		= img;	this.answers 	= answers;	this.sound 		= sound;	this.rgb		= rgb;	//=====================================================	// GETS	//=====================================================	this.getQuestion	= getQuestion;	this.getImage		= getImage;	this.getAnswers		= getAnswers;	this.getSound		= getSound;	this.getRgb			= getRgb;		function getQuestion(){		return this.question;	}	function getImage(){		return this.img;	}	function getAnswers(){		return this.answers;	}	function getSound(){		return this.sound;	}		function getRgb(){		return this.rgb;	}}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/quiz/PFItemQuizAnswer.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


﻿//*************************************************************
//	File: PFItemQuizAnswer.js 
//	PFItemQuizAnswer: create particular item properties
//*************************************************************

function PFItemQuizAnswer(answer, ok, image){
	
	//=====================================================
	// VARIABLES
	//=====================================================

	this.answer	= answer;
	this.image	= image;
	if (ok == "false"){
		this.ok = false;
	}else{
		this.ok = true;
	}
	
	//----------------------------------------------
	// BOOLEAN
	//----------------------------------------------
	this.active;
	
	//=====================================================
	// GETS
	//=====================================================	
	this.getAnswer = getAnswer;
	this.getImage = getImage;
	this.getOk = getOk;
	this.getActive = getActive;		
	
	function getAnswer(){
		return this.answer;
	}
	function getImage(){
		return this.image;
	}
	function getOk(){
		return this.ok;
	}
	function getActive(){
		return this.active;
	}
	
	//=====================================================
	// SETS
	//=====================================================
	this.setActive = setActive;	

	function setActive(act){
		this.active = act;
	}	
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/quiz/PFGameQuiz.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFGameQuiz.js 
//	PFGameQuiz: game quiz
//*************************************************************

var PFGameQuiz = function(){

	//=====================================================
	// VARIABLES
	//=====================================================
	var items;
	var newXML;
	var numQuestion;
	var numOkAnswers;
	var txtQuestion;
	var txtAnswers;
	var imgAnswers;
	var answerBgs;
	var checkBoxes;		
	var checks;
	var bNextQuestion;
	var bPopUp;
	var isPopupActive;
	var quizImage;
	var i;
	var bgPopUpBitmap;
	var containerPopUp;	
	var containerPregunta;
	var resultPopup;
	
	var baseGame;
	
	repeatQuestion = null;	

	this.load = load;
	this.show = show;
	
	//======================================================================			
	// LOAD
	//======================================================================
	function load(game,folder){
		
		newXML = new PFXMLQuiz();
		newXML.load(game,folder);
		
		items= new Array(newXML.items.length);
		numQuestion = 0;
		numOkAnswers = 0;
		isPopupActive = false;
		PFSound.load('tick',"./"+GAME_FOLDER+"/sounds/boto.mp3");

        themeXML.getQuiz();
	}
	
	//=======================================================================			
	// SHOW GAME
	//======================================================================
	function show(game,folder,direction,containerAux,containerAnt){
		
		baseGame = new PFBaseGame();
		baseGame.create(this,game,folder,containerAux, containerAnt);		
	}	
		
	//=====================================================
	// BUILD PRELOAD MANIFEST
	//=====================================================
	this.buildPreloadManifest = buildPreloadManifest
	function buildPreloadManifest(itemsManifest,game){
		
		var imgSources = newXML.items[numQuestion].getAnswers();
		for(var j = 0; j < imgSources.length; j++){
            var imageSrc = newXML.items[numQuestion].getAnswers()[j].getImage();
            if(imageSrc != ""){
			    itemsManifest[1+j] = "./"+GAME_FOLDER+"/" + baseGame.getFolder() + "/images/" + imageSrc;
            }
		}
		itemsManifest.push("./"+GAME_FOLDER+"/theme/images/quizText/nextQuestion.png");
		return itemsManifest;
	}		
	
	//============================================================================
	// ON ADD MENU : Here we add the custom menu things for this specific game
	//============================================================================
	this.onAddMenu = onAddMenu;
	function onAddMenu(){
		repeatQuestion = themeXML.soundThemeItem.create(function() {
			addCustomOnClick({item:repeatQuestion,c:baseGame.containerNav},function() {
				if(newXML.items[numQuestion].getSound() != ""){
					PFSound.play('question'+numQuestion);
				}
			});
		});
		activeRepeatQuestion = true;
		baseGame.containerNav.addChild(repeatQuestion);
		repeatQuestion.alpha = 0;

		bNextQuestion = themeXML.quizNextThemeItem.create(function() {
			//---------------------------------
			// Next question button
			//---------------------------------
			addCustomOnClick({item:bNextQuestion,c:baseGame.containerNav},function(){

				if(controlMarked(baseGame.getGame()) && !isPopupActive && baseGame.isGameActive()){
					//------------------------------------
					// Activate if some answer is marked
					//------------------------------------
					isPopupActive = true;
					resultPopup.showCorrection(baseGame.getGame(),baseGame.getFolder(),controlResult(baseGame.getGame()));
					PFSound.play('tick');
				}
			});
		});

		baseGame.containerNav.addChild(bNextQuestion);
	}
	
    //=====================================================
	// ON SHOW GAME
	//=====================================================
	this.onShowGame = onShowGame;
	function onShowGame(){

		//var background = new Bitmap(newXML.background.getSrc());
		//baseGame.containerBase.addChild(background);

        communicationLayer.setNumberOfQuestions(items.length);

		containerPopUp 			= new Container();
		containerPopUp.alpha 	= 0;		
		containerPregunta 		= new Container();
				
		baseGame.containerBase.addChild(containerPregunta);
		baseGame.containerBase.addChild(containerPopUp);

		resultPopup = new PFQuizResult(this);
		baseGame.containerNav.addChild(resultPopup.getContainer());
		
		//------------------------------------
		// Image question
		//------------------------------------
		showQuestion(baseGame.getGame(),baseGame.getFolder());		
	}	
	
	//=======================================================================
	// ON START GAME
	//=======================================================================
	this.onStartGame = onStartGame;
	function onStartGame(){
		playSound(baseGame.getGame(),baseGame.getFolder());	
	}	
	
	//=====================================================
	// goNextQuestion: write next question with checkboxes
	//=====================================================
	function showQuestion(game,folder){
		containerPregunta.removeAllChildren();
		setImageQuestion(game,folder);
		writeQuestion(game);
		writeAnswers(game,folder);

        baseGame.fitToScreen(false);
	}
	
	//=====================================================	
	// NEXT QUESTION
	//=====================================================	
	this.nextQuestion = nextQuestion;
	function nextQuestion(){
		//------------------------------------
		// next question or end game
		//------------------------------------
		if ((numQuestion+1)<newXML.items.length){
			isPopupActive = false;
			cleanPage(baseGame.getGame());	
			numQuestion++;				
			showQuestion(baseGame.getGame(),baseGame.getFolder());
			playSound(baseGame.getGame(),baseGame.getFolder());	
		}else{
			baseGame.endGameResult(this, numOkAnswers, newXML.items.length);	
		}		
	}
	
	//=====================================================	
	// setImageQuestion: set image related with question
	//=====================================================
	function setImageQuestion(game,folder){		

		if(newXML.items[numQuestion].getImage()!= ""){		

            quizImage = themeXML.quizImageThemeItem.createWithPath("./"+GAME_FOLDER+"/" + folder + "/images/" + newXML.items[numQuestion].getImage());
            quizImage.image.onload = function(event){
                scaleWithType(quizImage,"scalefit",themeXML.quizImageThemeItem.getMaxWidth(),themeXML.quizImageThemeItem.getMaxHeight());
                baseGame.containerBase.addChild(quizImage);
            }

			/*quizImage = new Bitmap("game/" + folder + "/images/" + newXML.items[numQuestion].getImage());
			quizImage.image.onload = function()
			{			
				var scale = getImageScale(quizImage.image.width,quizImage.image.height,173);			
				quizImage.scaleX = scale;
				quizImage.scaleY = scale;	
			
				quizImage.x = 806;
				quizImage.y = 90;
				baseGame.containerBase.addChild(quizImage);	
			}*/
		}
	}

	function truncate(n) {
		return Math[n > 0 ? "floor" : "ceil"](n);
	}
	
	//=====================================================
	// MULTILINE TEXT
	//=====================================================
	function multiLineText(text,font, color, x, y, width, separation){

		text = text.replace("\\n","\n");
		var answerText = themeXML.quizAnswerThemeItem.createText(text);
		answerText.lineWidth 	= width;
		answerText.x = x;
		answerText.y = y;

		containerPregunta.addChild(answerText);
	}
	//=====================================================
	// PLAY SOUND: 
	//=====================================================	
	function playSound(game,folder){
		
		if(newXML.items[numQuestion].getSound() == ""){
			repeatQuestion.alpha = 0;
		}
		else{
			repeatQuestion.alpha = 1;
			PFSound.load('question' + numQuestion,"./"+GAME_FOLDER+"/"+folder+'/sounds/'+newXML.items[numQuestion].getSound());
			PFSound.play('question' + numQuestion);

			/*
			repeatQuestion.onPress = function(){
				PFSound.play('question'+numQuestion);
			};
			*/
		}
	}

	//=====================================================
	// WRITE QUESTION
	//=====================================================			
	function writeQuestion(game){
        var text = themeXML.quizQuestionThemeItem.createText(newXML.items[numQuestion].getQuestion());
		text.color = "rgb(" + newXML.items[numQuestion].getRgb().replace(/-/g,",") + ")";
        containerPregunta.addChild(text);
	}

	//=====================================================
	// WRITE ANSWERS
	//=====================================================
	function writeAnswers(game,folder){
		var posInitY = 300;
		txtAnswers 	= new Array(newXML.items[numQuestion].getAnswers().length);
		imgAnswers 	= new Array(newXML.items[numQuestion].getAnswers().length);
		checkBoxes 	= new Array(newXML.items[numQuestion].getAnswers().length);
		answerBgs 	= new Array(newXML.items[numQuestion].getAnswers().length);
		checks 		= new Array(newXML.items[numQuestion].getAnswers().length);
		
		for (i=0; i<newXML.items[numQuestion].getAnswers().length; i++){
			
			if((i+1)%2 == 0){
				var posInitX = 520;
			}else{
				var posInitX = 40;
			}			
			
			checks[i] = new Bitmap("./"+GAME_FOLDER+"/images/tick.png");
			checks[i].x = posInitX+18;
			checks[i].y = posInitY-12;
			checks[i].alpha = 0;
			newXML.items[numQuestion].getAnswers()[i].setActive(false);
			answerBgs[i] = new Bitmap("./"+GAME_FOLDER+"/images/answer.png");
			answerBgs[i].x = posInitX;
			answerBgs[i].y = posInitY-30;			
			containerPregunta.addChild(answerBgs[i]);
			
			checkBoxes[i] = new Bitmap("./"+GAME_FOLDER+"/images/checkbox.png");
			checkBoxes[i].x = posInitX + 15;
			checkBoxes[i].y = posInitY - 15;
			checkBoxes[i].i	= i;

			checkBoxes[i].image.id = i;

			checkBoxes[i].image.onload = function() {

				var checkShape = addCustomOnClick({item:checkBoxes[this.id],c:containerPregunta},function(event){
					if(!isPopupActive && baseGame.isGameActive()){
						changeCheck(event.target.i,game);
						PFSound.play("tick");
					}
				});

				checkShape.i = this.id;
			};


			if(newXML.items[numQuestion].getAnswers()[i].getImage() != ""){
				multiLineText(newXML.items[numQuestion].getAnswers()[i].getAnswer(),"26px Helvetica", "#1F1E21",posInitX+165,posInitY-15,200,30 );
			}else{
				multiLineText(newXML.items[numQuestion].getAnswers()[i].getAnswer(),"26px Helvetica", "#1F1E21",posInitX+50,posInitY-15,400,30 );
			}
			
			var imgSource = newXML.items[numQuestion].getAnswers()[i].getImage();
			if(imgSource != ""){
				
				var myImage = new Image();
				myImage.src = "./"+GAME_FOLDER+"/" + folder + "/images/" +  imgSource;
				myImage.posInitX = posInitX;			
				myImage.posInitY = posInitY;
				
				myImage.onload = function(event){				
				
					var scale = 0;			
					var t = event.target;
					var item = new Bitmap(event.target);
					scale = getImageScale(item.image.width, item.image.height,104);					
					item.scaleX = scale;
					item.scaleY = scale;
				
					item.x = t.posInitX + 50;			
					item.y = t.posInitY + (70 - (item.image.height*scale))/2;
					containerPregunta.addChild(item);
				}
			}
			
			if((i+1)%2 == 0){
				posInitY = posInitY+127;
			}
			
			containerPregunta.addChild(checkBoxes[i]);
			containerPregunta.addChild(checks[i]);

		}
	}
	
	//=====================================================
	// Play sound question : Controls of ticks 
	//=====================================================	
	function changeCheck(n,game){
		var state = newXML.items[numQuestion].getAnswers()[n].getActive();
		if(state){
			checks[n].alpha = 0;
			newXML.items[numQuestion].getAnswers()[n].setActive(false);
		}else{
			checks[n].alpha = 1;
			newXML.items[numQuestion].getAnswers()[n].setActive(true);
		}	
	}	
	
	//=====================================================
	// cleanPage: delete all question infortmation showed
	//=====================================================
	function cleanPage(game){
		baseGame.containerBase.removeChild(quizImage);
		baseGame.containerBase.removeChild(txtQuestion);
		
		for (i=0; i<newXML.items[numQuestion].getAnswers().length; i++){
			baseGame.containerBase.removeChild(txtAnswers[i]);
			baseGame.containerBase.removeChild(checkBoxes[i]);
			baseGame.containerBase.removeChild(checks[i]);
			newXML.items[numQuestion].getAnswers()[i].setActive(false);
		}
	}
	
	//======================================================================
	// controlResult: evaluate if answers are OK; all answers must be ok 
	//======================================================================
	function controlResult(game){
		numOkAnswers++;
		for (i=0; i<newXML.items[numQuestion].getAnswers().length; i++){
			if(newXML.items[numQuestion].getAnswers()[i].getActive() != newXML.items[numQuestion].getAnswers()[i].getOk()){
				numOkAnswers--;
                communicationLayer.onIncorrect(0);
				return false;
			}			
		}
        communicationLayer.onCorrect(0);
		return true;
	}
	
	//====================================================
	// controlMarked: evaluate if somecheckbox is marked
	//====================================================
	function controlMarked(game){
		var ok = false;
		for (i=0; i<newXML.items[numQuestion].getAnswers().length; i++){
			if(newXML.items[numQuestion].getAnswers()[i].getActive() == true){
				ok = true;
			}			
		}
		return ok;
	}

	this.getHasStart = getHasStart;
	function getHasStart() {
		return false;
	}

	this.hasMuteButton = hasMuteButton;
	function hasMuteButton() {
		return true;
	}

	//=====================================================
	// CLEAR SOUNDS
	//=====================================================		
	this.onClearSounds = onClearSounds;
    function onClearSounds(){
        for(i=0;i<items.length;i++){
            PFSound.unload("question"+i);
        }
        PFSound.unload('tick');
    }	
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/arrows/PFItemFletxes.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFItemFastDragParent.js 
//	PFItemFastDragParent: create particular item properties
//*************************************************************

function PFItemFletxes(relations,type,parent,sound,folder,id,group,state,numRel,text,rgb){

	//=====================================================
	// VARIABLES
	//=====================================================
	if(sound==""){
		this.sound ="";
	}else{
		this.sound = "./"+GAME_FOLDER+"/"+folder+"/sounds/"+sound;
	}
	this.type = type;
	this.parent = parent;
	this.relations = relations;
	this.id = id;
	this.group = group;
	this.state = state;
	this.numRel= numRel;
	this.text = text;
	this.rgb = rgb;
	
	this.getRelations = getRelations;
	this.getSound = getSound;
	this.getId = getId;
	this.getGroup = getGroup;
	this.getType = getType;
	this.getParent = getParent;
	this.getState = getState;
	this.setState = setState;
	this.getNumRelations = getNumRelations;
	this.setNumRelations = setNumRelations;
	this.getText = getText;
	this.getRgb = getRgb;
	
	//=====================================================
	// GETS
	//=====================================================
	function getRelations() {
		return this.relations;
	}
	function getSound() {
		return this.sound;
	}
	function getId(){
		return this.id;
	}
	function getGroup(){
		return this.group;
	}
	function getType(){
		return this.type;
	}
	function getParent(){
		return this.parent;
	}
	function getState(){
		return this.state;
	}
	function getNumRelations(){	
		//---------------------------------
		// parent always false
		//---------------------------------
		
		return this.numRel;
	}
	function getText(){
		return this.text;
	}
	function getRgb (){
		return this.rgb;
	}
	//=====================================================
	// SETS
	//=====================================================
	function setState(s){
		//---------------------------------
		// parent always false
		//---------------------------------
		this.state=s;
	}
	function setNumRelations(n){	
		//---------------------------------
		// parent always false
		//---------------------------------
		this.numRel=n;
	}
	
}


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/arrows/PFGameFletxes.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************
// PFGameFletxes: Load and execute "Fletxes"
//*****************************************************/

var PFGameFletxes = function(){

	//Variables
	var items;
	var fletxesListen;
	var images;
	var containerPrincipal;
	var containerNou;
	var preload;
	var num=0;
	var containerBase;
	var containerSup;
	var end=false;
	var offsetx, offsety;
	var newx, newy;
	var i;
	var newXML;

	var shapes = [];

	//Functions declaration
	this.load = load;
	this.show = show;
	
	var baseGame;
	
	//======================================================================
	// LOAD GAME
	//======================================================================
	function load(game,folder){
		newXML = new PFXMLArrows;
		newXML.load(game,folder);

        themeXML.getArrowsInfo();

		items			= new Array(newXML.items.length);
		fletxesListen 	= new PFGameFletxesListen();
		PFSound.load('tick',"./"+GAME_FOLDER+"/sounds/boto.mp3");
	}
	
	//=======================================================================			
	// SHOW GAME
	//======================================================================
	function show(game,folder,direction,containerAux,containerAnt){
		
		baseGame = new PFBaseGame();
		baseGame.create(this,game,folder,containerAux, containerAnt);		
	}
	
	//=====================================================
	// BUILD PRELOAD MANIFEST
	//=====================================================
	this.buildPreloadManifest = buildPreloadManifest
	function buildPreloadManifest(itemsManifest,game){
		for ( i=0; i<items.length; i++){
			itemsManifest.push(newXML.items[i].getSrc());
		}
		//itemsManifest.push(newXML.background.getSrc());

		return itemsManifest;
	}	
	
	//=====================================================
	// ON ADD MENU
	//=====================================================
	this.onAddMenu = onAddMenu;
	function onAddMenu(){}
    
    //=====================================================
	// ON SHOW GAME
	//=====================================================
	this.onShowGame = onShowGame;
	function onShowGame(){
		
		stage.enableMouseOver();
		
		//var background = new Bitmap(newXML.background.getSrc());
		//baseGame.containerBase.addChild(background);
		
		images=new Array(items.length);

        communicationLayer.setNumberOfQuestions(items.length/2);

		for(i=0;i<items.length;i++){
			if(newXML.items[i].getSrc().charAt( newXML.items[i].getSrc().length-1 ) != "/"){
				images[i] 			= new Image();
				images[i].src 		= newXML.items[i].getSrc();
				images[i].i			= i;
				images[i].onload 	= loadBitmap;
			}else{
				loadText(i);
			}

            if (newXML.items[i] && newXML.items[i].getSound() != "")
                PFSound.load("parent_sound"+i,newXML.items[i].getSound());
		}
	}
	//=======================================================================
	// ON START GAME
	//=======================================================================
	this.onStartGame = onStartGame;
	function onStartGame(){
		
	}	

	//=====================================================
	// loadText: load and show all items images 
	//=====================================================
	function loadText(event){
		
		var i 		= event;
		var game 	= baseGame.getGame();
		var folder 	= baseGame.getFolder();
		
		var bm = new PFBaseItem(newXML.items[i],i);
		items[i] = bm.getText();
		
		if (newXML.items[i].getScale() != 1000){
			var scaleFactor = newXML.items[i].getScale()/1000;
			items[i].scaleX = scaleFactor;
			items[i].scaleY = scaleFactor;
		}
		items[i].defaultScaleX = items[i].scaleX;
		items[i].defaultScaleY = items[i].scaleY;
		
		newx			= parseInt(newXML.items[i].getX());
		newy			= parseInt(newXML.items[i].getY());
		items[i].x 		= newx;
		items[i].y 		= newy;

		items[i].rotation	=  newXML.items[i].getRotation();
		
		baseGame.containerBase.addChild(items[i]);
        addEventListener(i,game);
	}

	//=====================================================
	// loadBitmaps: load and show all items images 
	//=====================================================
	function loadBitmap(event){
		
		var i 		= event.target.i;
		var game 	= baseGame.getGame();
		var folder 	= baseGame.getFolder();
		
		items[i] = new Bitmap(images[i]);

		if (newXML.items[i].getScale() != 1000){
			var scaleFactor = newXML.items[i].getScale()/1000;
			items[i].scaleX = scaleFactor;
			items[i].scaleY = scaleFactor;
		}
		items[i].defaultScaleX = items[i].scaleX;
		items[i].defaultScaleY = items[i].scaleY;
		
		offsetx 		= parseInt(items[i].image.width)/2;
		offsety 		= parseInt(items[i].image.height)/2;
		newx			= parseInt(newXML.items[i].getX());
		newy			= parseInt(newXML.items[i].getY());
		items[i].regX	= offsetx;
		items[i].regY	= offsety;
		items[i].x 		= newx;
		items[i].y 		= newy;
		
		items[i].rotation	=  newXML.items[i].getRotation();
		
		baseGame.containerBase.addChild(items[i]);

        addEventListener(i,game);
	}

    //=====================================================
    // ADD EVENT LISTENER
    //=====================================================
    function addEventListener(i,game){

	    var itemShape = addDrag(items[i],baseGame.containerBase);
/*
	    itemShape.addEventListener("mouseover", function(evt) {
		    document.body.style.cursor='pointer';
		    if(fletxesListen.getPressed() != -1 && baseGame.isGameActive()){
			    fletxesListen.setInto(i);
		    }
	    });

	    itemShape.addEventListener("mouseout", function(evt){
		    document.body.style.cursor='default';
		    if(fletxesListen.getPressed() != -1 && baseGame.isGameActive()){
			    fletxesListen.setInto(-1);
		    }
	    });
*/
	    itemShape.on("mousedown",function(evt) {

		    if(baseGame.isGameActive()) {
			    fletxesListen.onTouch(i,themeXML.arrowsColor,game,newXML,baseGame.containerBase,evt);
			    evt.on("mousemove",function(evt) {
				    fletxesListen.onMouseMove(themeXML.arrowsSize,evt);
			    },false);
			    evt.on("mouseup",function(evt){

				    var into = -1;

				    for (var k=0; k<shapes.length; k++)
				    {
					    if (itemShape == shapes[k]) {
						    continue;
					    }

					    into = fletxesListen.checkItemContainsPoint(evt,shapes[k]);
					    if (into >= 0)
					    {
						    break;
					    }
				    }

				    fletxesListen.onMouseUp(into,game,newXML,baseGame.containerBase);
				    if(fletxesListen.getFinish()){
					    baseGame.endGame(newXML.endGame);
					    end=true;
				    }
				},false);
		    }
	    },false);

	    itemShape.i = i;

	    shapes.push(itemShape);
    }

	this.getHasStart = getHasStart;
	function getHasStart() {
		return false;
	}

	this.hasMuteButton = hasMuteButton;
	function hasMuteButton() {
		return baseGame.checkItemsForSound(newXML.items);
	}



	//=====================================================
	// CLEAR SOUNDS :
	//=====================================================		
	this.onClearSounds = onClearSounds;
    function onClearSounds(){
        for(i=0;i<items.length;i++){
            soundManager.unload("parent_sound"+i);
            soundManager.destroySound("parent_sound"+i);
        }
        PFSound.unload("tick");
    }
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/arrows/PFGameFletxesListen.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


var PFGameFletxesListen = function(){
	
	//Variables
	var pressed=-1;
	//var into=-1;
	var nRel=0;
	var posX;
	var posY;
	var selectedColor;
	var ok=false;
	var lineShape;
	var lineGraphics;
	var finish;
	var j;

	//Functions declaration
	this.onTouch	= onTouch;
	this.onMouseMove= onMouseMove;
	this.onMouseUp	= onMouseUp;
	this.getFinish	= getFinish;
	this.getPressed	= getPressed;
	this.setInto	= setInto;
	this.checkItemContainsPoint = checkItemContainsPoint;
	
	//======================================================================
	// ON TOUCH
	//======================================================================
	function onTouch(i,arrowColor,game,newXML,containerPrincipal,evt){
		pressed=i;

        var color = arrowColor.split("-");

		selectedColor = Graphics.getRGB(color[0],color[1],color[2]);

		lineShape 			= new Shape();
		lineGraphics 		= new Graphics();
		lineShape.graphics 	= lineGraphics;
		containerPrincipal.addChild(lineShape);
		posX				= evt.stageX;
		posY				= evt.stageY;

        //PLAY THE SOUND ASSOCIED WIDTH THE SPRITE

        if(newXML.items[i] && newXML.items[i].getSound() != ""){
            PFSound.play("parent_sound"+i);
        }
	}
	
	//======================================================================
	// ON MOUSE MOVE
	//======================================================================	
	function onMouseMove(strokeSize,ev){
		//clear previous line
		lineGraphics.clear();
		//stroke style
		lineGraphics.setStrokeStyle(strokeSize,1);
		//stroke color
		lineGraphics.beginStroke(selectedColor);
		//draw line from Mouse position to Drone position
		lineGraphics.moveTo(posX, posY);
		lineGraphics.lineTo(ev.stageX, ev.stageY);
	}
	
	//======================================================================
	// ON MOUSE UP
	//======================================================================	
	function onMouseUp(into,game,newXML,containerPrincipal){

		if(into!=-1){

			var pressedItem = newXML.items[pressed];
			var intoItem    = newXML.items[into];

			if(pressedItem.getType()=="parent" &&
				pressedItem.getParent()==intoItem.getParent()){

				for(j=0;j<pressedItem.getRelations().length;j++){
					if(pressedItem.getRelations()[j]==intoItem.getId() && !intoItem.getState()){
						ok=true;
                        PFSound.play("parent_sound"+into);
						nRel++;
						//pressedItem.getRelations().splice(j,1);
						for(n=0;n<intoItem.getRelations().length;n++){
							if(intoItem.getRelations()[n]==pressedItem.getParent()){
								//intoItem.getRelations().splice(n,1);
							}
						}
						intoItem.setState(true);
					}
				}
			}else if( pressedItem.getType()=="child" && intoItem.getType()=="parent" &&
				pressedItem.getParent()==intoItem.getId() && !pressedItem.getState()) {

				ok=true;
                PFSound.play("parent_sound"+into);
				nRel++;
				//newXML.items[into].getRelations().splice(j,1);
				for(n=0;n<pressedItem.getRelations().length;n++){
					if(pressedItem.getRelations()[n]==pressedItem.getParent()){
						//newXML.items[pressed].getRelations().splice(n,1);
					}
				}
				pressedItem.setState(true);
			}
			
			finish=true;
			
			if(nRel<newXML.items[pressed].getNumRelations()){
				finish=false;
			}
		}
		if(!ok){
			containerPrincipal.removeChild(lineShape);
            communicationLayer.onIncorrect(0);
		}
        else{
            communicationLayer.onCorrect(0);
        }
		//into=-1;
		pressed=-1;
		ok=false;
	}
	
	//======================================================================
	// 
	//======================================================================	
	function getFinish(){
		return finish;
	}
	function getPressed(){
		return pressed;
	}
	function setInto(num){
		into = num;
	}

	function checkItemContainsPoint(p,i) {

		var bounds = i.getBounds();
		var scale = i.scaleX;

		if (i.item.image) {
			if (p.stageX < i.x + bounds.width/2 && p.stageX > i.x - bounds.width/2 &&
				p.stageY < i.y + bounds.height/2 && p.stageY > i.y - bounds.height/2)
			{
				PFDebug("X: " + i.x);
				PFDebug("REG X: " + i.regX);
				PFDebug("SCALE: " + i.scaleX);
				PFDebug("Bounds Widht: " + bounds.width);
				return i.i;
			}
		}
		else {
			if (p.stageX < i.x + bounds.width/2 && p.stageX > i.x - bounds.width/2 &&
				p.stageY < i.y + bounds.height && p.stageY > i.y)
			{
				PFDebug("X: " + i.x);
				PFDebug("REG X: " + i.regX);
				PFDebug("SCALE: " + i.scaleX);
				PFDebug("Bounds Widht: " + bounds.width);
				return i.i;
			}
		}

		return -1;
	}

}




/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/quizText/PFItemQuizGapsQuestion.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


﻿//*************************************************************//      File: PFItemQuizGapsQuestion.js //      PFItemQuizGapsQuestion: create particular item properties//*************************************************************function PFItemQuizGapsQuestion(states, panswer,rgb){		//=====================================================        // VARIABLES        //=====================================================	this.states = states;	var answer;	addAnswers(panswer);	this.rgb	= rgb;		//=====================================================	// GETS 	//=====================================================	this.getStates = getStates;	this.getAnswer = getAnswer;	this.getRgb		= getRgb;		function getStates(){		return this.states;	}	function getAnswer(){		return answer;	}	function getRgb(){		return this.rgb;	}	function addAnswers (answerXML) {		answer = new Array();		for (var i=0;i<answerXML.length; i++)		{			answer.push(answerXML[i].attributes.getNamedItem("answer").nodeValue);		}	}}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/quizText/PFItemQuizGapsQuestionState.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*******************************************************************
//	File: PFItemQuizGapsQuestionState.js 
//	PFItemQuizGapsQuestionState: create particular item properties
//*******************************************************************

function PFItemQuizGapsQuestionState(type, src, x, y){
	//=====================================================
	// VARIABLES
	//=====================================================
	this.type	= type;
	this.src	= src;
	this.x		= x;
	this.y		= y;
	
	//=====================================================
	// GETS
	//=====================================================
	this.getSrc		= getSrc;
	this.getType	= getType;
	this.getX		= getX;
	this.getY		= getY;
	
	function getSrc(){
		return this.src;
	}
	function getType(){
		return this.type;
	}
	function getY(){
		return this.y;
	}
	function getX(){
		return this.x;
	}
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/quizText/PFGameQuizGaps.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************
// PFGameQuiz: Load and execute "QuizGapsGame"
//*****************************************************/

var PFGameQuizGaps = function(){
	//Variables
	var items;
	var xml;
	var numQuestion;
	var numOkAnswers;
	var txtQuestion;
	var txtAnswers;
	var txtPopUp;
	var questionImage;
	var questionText;
	var questionSound;
	var bNextQuestion;
	var bClear;
	var bPopUp;
	var repeatQuestion;
	var type;
	var level;
	var answerInput;
	var isPopupActive;
	var activeQuestionImage;
	var activeQuestionText;
	var activeRepeatQuestion;
	var containerPopUp;
	var i;
	var containerText;
	
	var resultPopup;
		
	var bgPopUpBitmap;
	
	var newXML;
	
	//Functions declaration
	this.load = load;
	this.show = show;
	
	var baseGame;
	
	//=======================================================================			
	// LOAD
	//=======================================================================
	function load(game,folder){
		newXML = new PFXMLQuizText;
		newXML.load(game,folder);	
		
		xml 					= new PFAction();
		xml.LoadItems(game,folder);
		items					= new Array();
		numQuestion 			= 0;
		numOkAnswers 			= 0;
		isPopupActive 			= false;
		activeQuestionText 		= false;
		activeQuestionImage 	= false;
		activeRepeatQuestion 	= false;
		level 					= xml.getLevel();
		myI 					= 0;
		PFSound.load('tick',"./"+GAME_FOLDER+"/sounds/boto.mp3");

        themeXML.getQuizText();
	}
	
	//=======================================================================			
	// SHOW GAME
	//=======================================================================
	function show(game,folder,direction,containerAux,containerAnt){
		
		baseGame = new PFBaseGame();
		baseGame.create(this,game,folder,containerAux, containerAnt);		
	}	
		
	//=======================================================================
	// BUILD PRELOAD MANIFEST
	//=======================================================================
	this.buildPreloadManifest = buildPreloadManifest
	function buildPreloadManifest(itemsManifest,game){
		
		/*for(var j = 0; j < imgSources.length; j++){		
			itemsManifest.push(xml.getItems(game)[numQuestion].getStates());
		}*/					
				
		//itemsManifest.push(newXML.background.getSrc());
		itemsManifest.push("./"+GAME_FOLDER+"/images/nextQuestion.png");
		itemsManifest.push("./"+GAME_FOLDER+"/images/popup_arrow.png");
		itemsManifest.push("./"+GAME_FOLDER+"/images/input.png");
		itemsManifest.push("./"+GAME_FOLDER+"/images/bt_so.png");
		itemsManifest.push("./"+GAME_FOLDER+"/images/bt_creditos_exit.png");
		return itemsManifest;
	}		
	
	//=======================================================================
	// ON ADD MENU : Here we add the custom menu things for this specific game
	//=======================================================================
	this.onAddMenu = onAddMenu;
	function onAddMenu(){

		activeRepeatQuestion = true;

		/* Button Next Question*/
        bNextQuestion = themeXML.quizTextNextThemeItem.create(function(){
	        addCustomOnClick({item:bNextQuestion,c:baseGame.containerNav},function(){

		        if(!isPopupActive && baseGame.isGameActive()){
			        if(level == "1"){		//easy
				        answerInput = "";
				        for(i=0;i<newXML.items[numQuestion].getAnswer().length;i++){
					        answerInput += document.getElementById("inputAnswer"+i).value;
				        }
			        }else{					//hard
				        answerInput = document.getElementById("inputAnswer").value;
			        }
			        if(!isPopupActive && answerInput!="") {
				        var element = document.getElementById('inputDiv');	//Delete input
				        if(element != null)
					        element.parentNode.removeChild(element);

				        $('#inputAnswer').remove();

				        isPopupActive = true;
				        resultPopup.showCorrection(baseGame.getGame(),baseGame.getFolder(),controlResult(baseGame.getGame()));
				        PFSound.play('tick');
			        }
		        }
	        });
        });
		baseGame.containerNav.addChild(bNextQuestion);

		bClear = themeXML.quizClearThemeItem.create(function(){
			if (newXML.answerPositionX != null && newXML.answerPositionY != null) {
				var x = parseInt(newXML.answerPositionX);
				var y = parseInt(newXML.answerPositionY);

				bClear.regX = bClear.image.width/2;
				bClear.regY = bClear.image.height/2;

				bClear.x = x - bClear.image.width;
				bClear.y = y + parseInt(themeXML.quizTextInputThemeItem.getMaxHeight())/2;
				bClear.y += bClear.image.height/2;
				PFDebug("CLEAR: " + bClear.y);
			}

			addCustomOnClick({item:bClear,c:baseGame.containerNav},function(){
				$("#inputAnswer").val("");
			});

		});

		baseGame.containerNav.addChild(bClear);
	}
	
	//=======================================================================
	// ON SHOW GAME
	//=======================================================================
	this.onShowGame = onShowGame;
	function onShowGame(){

        communicationLayer.setNumberOfQuestions(newXML.items.length);

		containerText = new Container();
		containerPopUp = new Container();
		containerPopUp.alpha = 0;

		baseGame.containerBase.addChild(containerText);	
		
		resultPopup = new PFQuizResult(this);		
		baseGame.containerNav.addChild(resultPopup.getContainer());
	}
	
	//=======================================================================
	// ON START GAME
	//=======================================================================
	this.onStartGame = onStartGame;
	function onStartGame(){
		showQuestion();
	}		
	
	//=======================================================================
	// SHOW QUESTION
	//=======================================================================
	function showQuestion(){
		printInput		(baseGame.getGame());
		selectQuestion	(baseGame.getGame(), baseGame.getFolder());
	}		
	
	//=====================================================	
	// NEXT QUESTION
	//=====================================================	
	this.nextQuestion = nextQuestion;
	function nextQuestion(){
		if ((numQuestion+1)<newXML.items.length){		//next question or end game
			isPopupActive = false;
			numQuestion++;		
			cleanPage(baseGame.getGame(),baseGame.getFolder());
			showQuestion();			
		}else{
			baseGame.endGameResult(this, numOkAnswers, newXML.items.length);	
		}		
	}	
	
	//=======================================================================
	// PRINT INPUT : load HTML input type=text
	//=======================================================================
	function printInput(game){
		/* Add input text box */

		PFDebug("THEME INPUT X: ");

		//var inputBackSrc    = "";
		inputW  = 360;
		inputH  = 91;
		inputFSize   = themeXML.quizTextInputThemeItem.getFontSize();

		/*
		var inputWidth = inputW;
		var inputHeight = inputH;
		var inputFontSize
		*/
		/*
		if (themeXML.quizTextInputThemeItem.getPath() != "") {
			inputBackSrc = themeXML.quizTextInputThemeItem.getPath();
		}
		else
		 */
		{
			var inputWidthTheme = parseInt(themeXML.quizTextInputThemeItem.getMaxWidth());
			var inputHeightTheme = parseInt(themeXML.quizTextInputThemeItem.getMaxHeight());

			if (!isNaN(inputWidthTheme) && isNaN(inputHeightTheme)) {
				inputW = inputWidthTheme;
				inputH = inputHeightTheme;
			}
		}

		var inputWidth = inputW * globalScale;
		var inputHeight = inputH * globalScale;
		var inputFontSize = inputFSize * globalScale;

		if (newXML.answerPositionX != null && newXML.answerPositionY != null) {
			var x = parseInt(newXML.answerPositionX);
			var y = parseInt(newXML.answerPositionY);

			inputY = y;
			inputX = x - WIDTH/2;

			var finalInputY = inputY * globalScale;
			var finalInputX = inputX * globalScale;
		}
		else
		{
			inputY = themeXML.quizTextInputThemeItem.getY();
			inputX = WIDTH/2;
			var finalInputY = inputY * globalScale;
			var finalInputX = inputX * globalScale;
		}

		document.getElementById('aux').innerHTML += "<input id='inputAnswer' type='text' value='' style=' border-style: none;   font-size:"+ inputFontSize +"px; position:absolute; left:50%; margin-left:"+finalInputX+"px; top:"+finalInputY+"px;   height: "+inputHeight+"px;    width: "+inputWidth+"px;padding-left: 10px; padding-right:10px;'/></div>";
	}
		
	//=======================================================================
	// SELECT QUESTION : load question; select wich type must be loaded
	//=======================================================================
	function selectQuestion(game,folder){
		myI++;
		var states = newXML.items[numQuestion].getStates();
		
		//repeatQuestion.alpha = 0;
		
		for (i=0; i<states.length; i++){
						
			if(states[i] != null){
			
				type 	= states[i].getType();
				var src = states[i].getSrc();
	
				var posX = "50";
				var posY = "80";
				
				switch(type){	//which type of question
					case "image":
						if(src != ""){
							setImageQuestion(game,folder,src, posX, posY);
						}
					break;
					case "sound":
						if(src != ""){
							PFSound.load('question'+myI,'./'+GAME_FOLDER+'/'+folder+'/sounds/'+src);
							PFDebug("Lang text");
							PFDebug(src);
							playSoundQuestion(myI,game,folder,src);
							repeatQuestion.alpha = 1;
						}
					break;
					case "text":
						if(src != ""){
							writeQuestion(game,src, "500", posY);
						}
					break;		
				}
			}
		}
	}

	//=======================================================================			
	// WRITE QUESTION
	//=======================================================================	
	function writeQuestion(game,src, x, y){				

        var color = newXML.items[numQuestion].getRgb();
		activeQuestionText = true;

        var questionText = themeXML.quizQuestionThemeItem.createText(src);
		questionText.color = rgbToHex(color);
        containerText.addChild(questionText);
	}

    function rgbToHex(rgbColor) {

        var rgb = rgbColor.split("-");
        var r = parseInt(rgb[0]);
        var g = parseInt(rgb[1]);
        var b = parseInt(rgb[2]);

        var hexColor = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

        return hexColor;
    }

	//=====================================================
	// SET IMAGE QUESTION
	//=====================================================
	function setImageQuestion(game,folder, src, x, y){

        quizImage = themeXML.quizImageThemeItem.createWithPath("./"+GAME_FOLDER+"/" + folder + "/images/" + src);
        quizImage.image.onload = function(event){
            scaleWithType(quizImage,"scalefit",themeXML.quizImageThemeItem.getMaxWidth(),themeXML.quizImageThemeItem.getMaxHeight());
            containerText.addChild(quizImage);
        }
	}
	
	//=====================================================
	// PLAY SOUND QUESTION
	//=====================================================
	function playSoundQuestion(i,game,folder,src){
        PFSound.play('question'+i);

		repeatQuestion = themeXML.soundThemeItem.create(function() {
			addCustomOnClick({item:repeatQuestion,c:baseGame.containerNav},function(){
				PFSound.play('question'+i);
			});
		});
		baseGame.containerNav.addChild(repeatQuestion);

		/*
		repeatQuestion.onPress 	= function(){ 
			PFSound.play('question'+i); 
		}
		*/
	}
			
	//=======================================================================
	// CONTROL RESULT : evaluate if answers are OK; all answers must be ok 
	//=======================================================================
	function controlResult(game){

		PFDebug(newXML);
		PFDebug(newXML.items);
		PFDebug(newXML.items[numQuestion]);

		var answerXML = newXML.items[numQuestion].getAnswer();
		var ok=false;

		PFDebug(answerXML);

		for (var j=0;j<answerXML.length; j++)
		{
			var answer = answerXML[j];

			if (answerInput.toLowerCase() == answer.toLowerCase())
			{
				ok=true;
				break;
			}
		}

		if (ok){
            communicationLayer.onCorrect(answerInput.toLowerCase());
			numOkAnswers++;
		}
        else{
            communicationLayer.onIncorrect(answerInput.toLowerCase());
        }
		return ok;
	}
	
	//=======================================================================
	// CLEAN PAGE: delete all question infortmation showed
	//=======================================================================
	function cleanPage(game,folder){	

		if (activeQuestionText){
			containerText.removeChild(questionText);
			activeQuestionText = false;
		}
		if (activeQuestionImage){
			containerText.removeChild(questionImage);
			activeQuestionImage = false;
		}
		if(activeRepeatQuestion){
			containerText.removeChild(repeatQuestion);
			activeRepeatQuestion = false;
		}
		containerText.removeAllChildren();
	}
	
	//=======================================================================
	// LINE TEXT
	//=======================================================================
	function multiLineText(text,font, color, x, y, characters, separation){
		var questionOffset  = 0;
		var words           = text.split(" ");
		var maxCharsPerLine = characters;		
		
		var nWord = 0;
		
		while(nWord < words.length){
			var textLine = "";			
			while(textLine.length < maxCharsPerLine && nWord < words.length){				
				textLine += words[nWord] + " ";
				nWord++;				
			}	
			txtQuestion = new Text(textLine, font, color);
			txtQuestion.textBaseline = "top"; 
			txtQuestion.x = x;
			txtQuestion.y = y + questionOffset;
			questionOffset+= separation;
			containerText.addChild(txtQuestion);
		}
	}

	this.getHasStart = getHasStart;
	function getHasStart() {
		return false;
	}

	this.hasMuteButton = hasMuteButton;
	function hasMuteButton() {
		return true;
	}

	//=======================================================================
	// CLEAR SOUNDS 
	//=======================================================================		
	this.onClearSounds = onClearSounds;
    function onClearSounds(){

		var element = document.getElementById('inputDiv');	//Delete input
		if(element != null)
	    	element.parentNode.removeChild(element);

	    $('#inputAnswer').remove();
    	
        for(i=0;i<newXML.items.length;i++){
            PFSound.unload("question"+i);
        }
        PFSound.unload('tick');
    }
}


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/dragToContainers/PFGameDragAllIn.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************//	File: PFGameDragAllIn.js //	PFGameDragAllIn: game drag all in//*************************************************************var PFGameDragAllIn = function (){		//======================================================================				// VARIABLES	//======================================================================	var items;	var itemsPare;	var newXML;	var dragallinListen;	var images;	var imagesBox;	var imagesDrag;	var fiJoc	= false;	var sortir	= false;	var containerSup;	var containerPrincipal;	var containerNou;	var containerBase;	var total;	var num = 0;	var offsetx, offsety;	var newx, newy;	var i, j;    var shouldSound = true;	this.load = load;	this.show = show;		var baseGame;	var folder;	var direction;	var gameID;			//=======================================================================				// LOAD	//======================================================================	function load(game,folder){		folder = folder;		gameID = game;		newXML = new PFXMLDragContainers();		newXML.load(game,folder);				items 			= new Array(newXML.items.length);		itemsPare 		= new Array(newXML.itemsPare.length);		dragallinListen = new PFGameDragAllInListen();		dragallinListen.setShouldDisappear(newXML.disappear);		PFSound.load('end',"./"+GAME_FOLDER+"/sounds/ok.mp3");		//PFSound.load('tick','game/sounds/boto.mp3');		total = items.length - newXML.itemsDiscard;	}	//=======================================================================				// SHOW GAME	//======================================================================	function show(game,folder,direction,containerAux,containerAnt){		direction = direction;		baseGame = new PFBaseGame();		baseGame.create(this,game,folder,containerAux, containerAnt);			}		//=====================================================	// BUILD PRELOAD MANIFEST	//=====================================================	this.buildPreloadManifest = buildPreloadManifest	function buildPreloadManifest(itemsManifest,game){		for ( i=0; i<items.length; i++){			if(newXML.items[i].getSrc().charAt( newXML.items[i].getSrc().length-1 ) != "/"){				itemsManifest.push(newXML.items[i].getSrc());			}		}		itemsManifest.push(newXML.background.getSrc());		return itemsManifest;	}			//=====================================================	// ON ADD MENU	//=====================================================	this.onAddMenu = onAddMenu;	function onAddMenu(){}        //=====================================================	// ON SHOW GAME	//=====================================================	this.onShowGame = onShowGame;	function onShowGame(){		//var background = new Bitmap(newXML.background.getSrc());		//baseGame.containerBase.addChild(background);				imagesBox=new Array(itemsPare.length);        communicationLayer.setNumberOfQuestions(items.length);        		for (i = 0; i < itemsPare.length; i++){			var imgSrc = newXML.itemsPare[i].getSrc();			if(imgSrc.charAt( imgSrc.length-1 ) != "/"){				imagesBox[i] 		= new Image();				imagesBox[i].src 	= imgSrc;				imagesBox[i].i 		= i;				imagesBox[i].onload = loadPare;			}else{				if(newXML.itemsPare[i].getKind() == 0 && newXML.itemsPare[i].getId() != "123456789") {					loadPareText(i);				}else{					loadChild(gameID,folder,direction);				}			}            if (newXML.itemsPare[i] && newXML.itemsPare[i].getSound() != "")                PFSound.load("parent_sound"+newXML.itemsPare[i].getId(),newXML.itemsPare[i].getSound());		}	}		//=======================================================================	// ON START GAME	//=======================================================================	this.onStartGame = onStartGame;	function onStartGame(){			}	//=====================================================	// loadText: load and show all child items images 	//=====================================================	function loadText(evt,direc){		i = evt;		direction 	= direc;		var game	= baseGame.getGame();		var folder 	= baseGame.getFolder();				var bm = new PFBaseItem(newXML.items[i],i);		items[i] = bm.getText();				var scaleFactor = 1;		if (newXML.items[i].getScale()!=1000){			scaleFactor = newXML.items[i].getScale()/1000;			items[i].scaleX	= scaleFactor;			items[i].scaleY	= scaleFactor;				}				items[i].defaultScaleX = items[i].scaleX;		items[i].defaultScaleY = items[i].scaleY;			items[i].i = i;					newx			= parseInt(newXML.items[i].getX());		newy			= parseInt(newXML.items[i].getY());		items[i].x 		= Math.floor((1024)*Math.random());		items[i].y 		= Math.floor((384)*Math.random() - 384);				items[i].rotation	=  newXML.items[i].getRotation();        if (newXML.items[i].getSound() != "")            PFSound.load("item_sound"+i,newXML.items[i].getSound());		baseGame.containerBase.addChild(items[i]);		var dragItem = addDrag(items[i],baseGame.containerBase);		dragItem.i = i;		dragItem.defaultScaleX = items[i].scaleX;		dragItem.defaultScaleY = items[i].scaleY;		Tween.get(items[i]).to({x:newx},300).play(Tween.get(items[i]).to({y:newy},300));		Tween.get(dragItem).to({x:newx},300).play(Tween.get(dragItem).to({y:newy},300));		dragItem.addEventListener("mousedown", function(evt) {			i = evt.target.i;			if(baseGame.isGameActive()){				if(dragallinListen.getItem() != i){					baseGame.containerBase.addChild(items[i]);					//PFSound.play('tick');					dragallinListen.getPosition(evt.target);					var offset = {x:evt.target.x-evt.stageX, y:evt.target.y-evt.stageY};					if (shouldSound)					{						if (newXML.items[i].getSound() != "")							PFSound.play('item_sound'+i);						shouldSound = false;					}					evt.addEventListener("mousemove", function(ev) {						dragallinListen.onMouseMove(ev,evt.target,offset);					},false);					evt.addEventListener("mouseup", function(ev){						dragallinListen.onMouseUp(evt.target,i,newXML.items[i].getParent(),newXML.itemsPare,items,itemsPare);						if(dragallinListen.getCorrect()){							total--;							var aftertotal = total;							Tween.get(baseGame.containerBase).wait(800).call(function(){checkChange(evt.target,i,game,folder,aftertotal)});						}						shouldSound = true;					},false);				}			}		},false);	}	//=====================================================	// loadBitmap: load and show all child items images 	//=====================================================	function loadBitmap(evt){		i = evt.target.i;		direction 	= evt.target.direction;		var game	= baseGame.getGame();		var folder 	= baseGame.getFolder();				items[i] = new Bitmap(imagesDrag[i]);		var scaleFactor = 1;		if (newXML.items[i].getScale()!=1000){			scaleFactor = newXML.items[i].getScale()/1000;			items[i].scaleX	= scaleFactor;			items[i].scaleY	= scaleFactor;				}				items[i].defaultScaleX = items[i].scaleX;		items[i].defaultScaleY = items[i].scaleY;			items[i].i = i;					offsetx			= (parseInt(items[i].image.width)/2);		offsety			= (parseInt(items[i].image.height)/2);		newx			= parseInt(newXML.items[i].getX());		newy			= parseInt(newXML.items[i].getY());		items[i].regX	= offsetx;		items[i].regY	= offsety;		items[i].x 		= Math.floor((1024)*Math.random());		items[i].y 		= Math.floor((384)*Math.random() - 384);				items[i].rotation	=  newXML.items[i].getRotation();        if (newXML.items[i].getSound() != "")            PFSound.load("item_sound"+i,newXML.items[i].getSound());		baseGame.containerBase.addChild(items[i]);		var dragItem = addDrag(items[i],baseGame.containerBase);		dragItem.i = i;		dragItem.defaultScaleX = items[i].scaleX;		dragItem.defaultScaleY = items[i].scaleY;		Tween.get(items[i]).to({x:newx},300).play(Tween.get(items[i]).to({y:newy},300));		Tween.get(dragItem).to({x:newx},300).play(Tween.get(dragItem).to({y:newy},300));		dragItem.addEventListener("mousedown", function(evt) {				i = evt.target.i;				if(baseGame.isGameActive()){										if(dragallinListen.getItem() != i){						baseGame.containerBase.addChild(items[i]);												//PFSound.play('tick');                        dragallinListen.getPosition(evt.target);                        var offset = {x:evt.target.x-evt.stageX, y:evt.target.y-evt.stageY};                        if (shouldSound)                        {                            if (newXML.items[i].getSound() != "")                                PFSound.play('item_sound'+i);                            shouldSound = false;                        }												evt.addEventListener("mousemove", function(ev) {							dragallinListen.onMouseMove(ev,evt.target,offset);						},false);						evt.addEventListener("mouseup", function(ev){							dragallinListen.onMouseUp(evt.target,i,newXML.items[i].getParent(),newXML.itemsPare,items,itemsPare);							if(dragallinListen.getCorrect()){								total--;																var aftertotal = total;								Tween.get(baseGame.containerBase).wait(800).call(function(){checkChange(evt.target,i,game,folder,aftertotal)});							}                            shouldSound = true;						},false);					}				}		},false);	}		//=====================================================	// checkChange: remove correct bitmap and check end	//=====================================================	function checkChange(target,pos,game,folder,aftertotal){						if(aftertotal == 0){			baseGame.endGame(newXML.endGame);		}	}	//=====================================================	// loadPareText: load and show all parent items images 	//=====================================================	function loadPareText(evt){				if(i==itemsPare.length-1){			loadChild(gameID,folder,direction);		}		i = evt;				var bm = new PFBaseItem(newXML.itemsPare[i],i);		itemsPare[i] = bm.getText();					var scaleFactor = 1;				if (newXML.itemsPare[i].getScale()!=1000){			scaleFactor 	= newXML.itemsPare[i].getScale()/1000;			itemsPare[i].scaleX	= scaleFactor;			itemsPare[i].scaleY	= scaleFactor;					}			newx					= parseInt(newXML.itemsPare[i].getX());		newy					= parseInt(newXML.itemsPare[i].getY());		itemsPare[i].x			= newx;		itemsPare[i].y			= newy;		itemsPare[i].rotation	=  newXML.itemsPare[i].getRotation();		baseGame.containerBase.addChild(itemsPare[i]);		}	//=====================================================	// loadPare: load and show all parent items images 	//=====================================================	function loadPare(evt){		i = evt.target.i;		if(i==itemsPare.length-1){			loadChild(gameID,folder,direction);		}		i = evt.target.i;		itemsPare[i] = new Bitmap(imagesBox[i]);					var scaleFactor = 1;				if (newXML.itemsPare[i].getScale()!=1000){			scaleFactor 	= newXML.itemsPare[i].getScale()/1000;			itemsPare[i].scaleX	= scaleFactor;			itemsPare[i].scaleY	= scaleFactor;					}		offsetx					= (parseInt(itemsPare[i].image.width)/2);		offsety					= (parseInt(itemsPare[i].image.height)/2);		newx					= parseInt(newXML.itemsPare[i].getX());		newy					= parseInt(newXML.itemsPare[i].getY());		itemsPare[i].regX		= offsetx;		itemsPare[i].regY		= offsety;		itemsPare[i].x			= newx;		itemsPare[i].y			= newy;		itemsPare[i].rotation	=  newXML.itemsPare[i].getRotation();		baseGame.containerBase.addChild(itemsPare[i]);		}		function loadChild(game,folder,direction){		imagesDrag=new Array(items.length);		for (i = 0; i < items.length; i++){			if(newXML.items[i].getKind() == 1) {				imagesDrag[i]			= new Image();				imagesDrag[i].src 		= newXML.items[i].getSrc();				imagesDrag[i].i 		= i;				imagesDrag[i].direction = direction;				imagesDrag[i].onload 	= loadBitmap;			}else{				loadText(i,direction);			}		}	}	this.getHasStart = getHasStart;	function getHasStart() {		return false;	}	this.hasMuteButton = hasMuteButton;	function hasMuteButton() {		// PFTODO: items sounds		return true;	}	this.hasMuteButton = hasMuteButton;	function hasMuteButton() {		return baseGame.checkItemsForSound(newXML.items.concat(newXML.itemsPare));	}	//=====================================================	// CLEAR SOUNDS :	//=====================================================	this.onClearSounds = onClearSounds;    function onClearSounds(){        var j = 0;        for(j=0;j<itemsPare.length;j++){            PFSound.unload("parent_sound"+newXML.itemsPare[j].getId());        }        for(j=0;j<newXML.items.length;j++){            PFSound.unload("item_sound"+j);        }    }}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/dragToContainers/PFGameDragAllInListen.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFGameDragListen.js 
//	PFGameDragListen: listener drag all in's game
//*************************************************************

function PFGameDragAllInListen(){
	
	//======================================================================			
	// VARIABLES
	//======================================================================
	var posX;
	var posY;
	var move			= true;
	var correct 		= false;
	var itemMovement 	= -1;
	var i;
	var shouldDisappear = true;

	this.onMouseMove 	= onMouseMove;
	this.onMouseUp 		= onMouseUp;
	this.getPosition 	= getPosition;
	this.loadAnimation 	= loadAnimation;
	this.getEnd 		= getEnd;
	this.getCorrect 	= getCorrect;
	this.getItem 		= getItem;
	this.setShouldDisappear = setShouldDisappear;
	
	//======================================================================			
	// GETS
	//======================================================================
	function getEnd(total){
		if(total == 1 && move == false){
			var end = true;
		}else{
			var	end = false;
		}
		return end;
	}
	function getPosition(target){
		posX = target.x;
		posY = target.y;
	}
	function getItem(){
		return itemMovement;
	}
	function getCorrect(){
		return correct;
	}
	//======================================================================			
	// onMouseUp: stop drag and drop; check if position is OK
	//======================================================================
	function onMouseUp(target,item,pare,fathersList,items,itemsPare){

		correct = false;

		for(i = 0; i < fathersList.length; i++){
			
			if(fathersList[i].getId() == pare)
			{
				var newParent = itemsPare[i];
	
				if(typeof(newParent) != "undefined"){	
					if(typeof(newParent.image) != "undefined"){
						var leftParent = parseInt(fathersList[i].getX()) - newParent.image.width/2.5;
						var rightParent = parseInt(fathersList[i].getX()) + newParent.image.width/2.5;
						var topParent = parseInt(fathersList[i].getY()) - newParent.image.height/2.5;
						var bottomParent = parseInt(fathersList[i].getY()) + newParent.image.height/2.5;
					}else{
						var leftParent = parseInt(fathersList[i].getX()) - 40;
						var rightParent = parseInt(fathersList[i].getX()) + 40;
						var topParent = parseInt(fathersList[i].getY()) - 40;
						var bottomParent = parseInt(fathersList[i].getY()) + 40;
					}
					
					if (target.x >= leftParent && target.x <= rightParent && target.y >= topParent && target.y <= bottomParent)
					{
						correct				= true;
						var fatherPosition	= i;
					}
				}
			}
		}
		if( correct == false){
			createjs.Tween.get(target).to({x:parseFloat(posX)},100).play(createjs.Tween.get(target).to({y:parseFloat(posY)},100));
			createjs.Tween.get(target.item).to({x:parseFloat(posX)},100).play(createjs.Tween.get(target.item).to({y:parseFloat(posY)},100));
            communicationLayer.onIncorrect(0);
		}
		if( correct == true){
            communicationLayer.onCorrect(0);
			move = false;
			itemMovement 	= item;
			var distance 	= Math.round(Math.sqrt(Math.pow(fathersList[fatherPosition].getX()-target.x,2)+Math.pow(fathersList[fatherPosition].getY()-target.y,2)));

            if (fathersList[fatherPosition] && fathersList[fatherPosition].getSound() != "")
                PFSound.play("parent_sound"+fathersList[fatherPosition].getId());

			if (shouldDisappear) {
				createjs.Tween.get(target.item).to({x:parseFloat(fathersList[fatherPosition].getX())},100).play(createjs.Tween.get(target.item).to({y:parseFloat(fathersList[fatherPosition].getY())},100));
				createjs.Tween.get(target.item).wait(distance).call(function(){loadAnimation(item,items)});
			} else {
				createjs.Tween.get(target.item).to({scaleX:0.8,scaleY:0.8});
			}

			target.parent.removeChild(target);
		}
	}

	//======================================================================			
	// loadAnimation: start animation
	//======================================================================
	function loadAnimation(item,items){
		
		var decoratorAction = new PFItemDecoratorAction();
		var actions = new Array(27);
		for(i = 0;i < 27;i++){
			actions[i] 		= new Array(2);
			actions[i][0] 	= (i+1)*20;
			actions[i][1] 	= 10;
		}
		decoratorAction.calculateRotation(item,0,actions,items);
		var actions = new Array(10);
		for(i = 0;i < 10;i++){
			actions[9-i] 	= new Array(2);
			actions[9-i][0] = i/10;
			actions[9-i][1] = 35;
		}
		decoratorAction.calculateScale(item,0,actions,items);
		correct = false;
	}
	//======================================================================			
	// onMouseMove: drag and drop
	//======================================================================
	function onMouseMove(ev,target,offset){
		target.x = ev.stageX+offset.x;
		target.y = ev.stageY+offset.y;
		target.item.x = ev.stageX+offset.x;
		target.item.y = ev.stageY+offset.y;
	}

	//======================================================================
	// set Should Disappear
	//======================================================================
	function setShouldDisappear(value) {
		shouldDisappear = value;
	}
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/arrows/PFGameFletxesValidar.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************
// PFGameFletxesValidar: Load and execute "FletxesValidate"
//*****************************************************/

var PFGameFletxesValidar = function(){

	//Variables
	var items;
	var xml;
	var fletxesListen;
	var images;
	var containerPrincipal;
	var containerNou;
	var preload;
	var num=0;
	var containerBase;
	var containerSup;
	var offsetx, offsety;
	var newx, newy;
	var i;
	var folderGame;
	var relations;
	var endGame = true;

	//Functions declaration
	this.load = load;
	this.show = show;
	//Functions
	/* Load the items of the game */
	function load(game,folder){
		xml = new PFAction();
		xml.LoadItems(game,folder);
		items= new Array(xml.getItems(game).length);
		fletxesListen = new PFGameFletxesValidarListen();
	}
	/* Show the game */
	function show(game,folder,direction,containerAux,containerAnt){
		
		stage.enableMouseOver();

		containerNou = containerAux;
		containerPrincipal = containerAnt;
		
		containerBase = new Container();
		containerSup = new Container();
		
		containerPrincipal.addChild(containerBase);
		containerPrincipal.addChild(containerSup);
		containerPrincipal.addChild(loadingImg);
		
		Tween.get(containerPrincipal).to({x:0},1000);
		
		//var background = new Bitmap(xml.getBackground("game").getSrc());
		//containerBase.addChild(background);
		
		images=new Array(items.length);
        relations=new Array(items.length);
        
		for(i=0;i<items.length;i++){
			eval('images['+i+'] = new Image()');
			eval('images['+i+'].src = xml.getItems(game)['+i+'].getSrc()');
			eval('images['+i+'].onload = function(){loadBitmaps('+i+',game,folder,direction);};'); //Load the bitmaps
            relations[i]=new Array(0);
			PFSound.load("sound"+i,xml.getItems(game)[i].getSound());
		}
        
        fletxesListen.setRelations(relations);
        
        folderGame = folder;
        gameAux = game;
        
		var itemsManifest= new Array();
		for ( i=0; i<items.length; i++){
			itemsManifest[i]=xml.getItems(game)[i].getSrc();
		}
		preload = new PreloadJS();
        preload.onComplete = handleComplete;
        preload.loadManifest(itemsManifest);

	}
	//=======================================================================			
	// handleComplete: wait all images loaded to execute their functions
	//=======================================================================
	function handleComplete(event) {
		containerPrincipal.removeChild(loadingImg);
		
		var backButton = new Bitmap("./"+GAME_FOLDER+"/theme/images/menu/bt_menu.png");
		backButton.x=20;
		backButton.y=20;
		containerSup.addChild(backButton);
		addCustomOnClick({item:backButton,c:containerSup},goBack);
		//backButton.onPress = goBack;
		
		var nextGameButton = new Bitmap("./"+GAME_FOLDER+"/theme/images/menu/bt_adelante.png");
		nextGameButton.x=930;
		nextGameButton.y=20;
		containerSup.addChild(nextGameButton);
		//nextGameButton.onPress = goNextGame;
		addCustomOnClick({item:nextGameButton,c:containerSup},goNextGame);
		
		var backGameButton = new Bitmap("./"+GAME_FOLDER+"/theme/images/menu/bt_enrera.png");
		backGameButton.x=870;
		backGameButton.y=20;
		containerSup.addChild(backGameButton);
		//backGameButton.onPress = goBackGame;
		addCustomOnClick({item:backGameButton,c:containerSup},goBackGame);

		var validateButton = new Bitmap("./"+GAME_FOLDER+"/"+folderGame+"/images/validate.png");
		validateButton.x=412;
		validateButton.y=600;
		containerBase.addChild(validateButton);
		addCustomOnClick({item:validateButton,c:containerSup},function(){
			if(endGame){
				fletxesListen.validate(xml,gameAux);
				var statistics = fletxesListen.getStatistics();
				endingGame(statistics);
			}
		});
    }
	//=====================================================
	// endingGame: show end statistics
	//=====================================================
    function endingGame(statistics){
    	endGame=false;
    	containerPopUp = new Container();
    	containerPopUp.alpha=0;
    	containerBase.addChild(containerPopUp);
    	drawRect(0,0,1024,768,0,0,0,0,containerPopUp);
    	var bgPopUp = new Image();
		bgPopUp.src = "./"+GAME_FOLDER+"/images/bg_popup.png";
		bgPopUp.onload = function(){
			var bgPopUpBitmap = new Bitmap("./"+GAME_FOLDER+"/images/bg_popup.png");
			var offsetx = (parseInt(bgPopUpBitmap.image.width)/2);
			var offsety = (parseInt(bgPopUpBitmap.image.height)/2);
			bgPopUpBitmap.regX = offsetx;
			bgPopUpBitmap.regY = offsety;
			bgPopUpBitmap.x = 512;
			bgPopUpBitmap.y = 384;
			containerPopUp.addChild(bgPopUpBitmap);
			
			var size = 28;

			var txt = new Text((statistics[1])+" of "+(statistics[0])+" right "+(statistics[2]-statistics[1])+" wrong", (size)+"px Arial");
			txt.x=480;
			txt.y=392;
			txt.lineWidth = size*6-20;
			txt.textAlign = "center";
			containerPopUp.addChild(txt);

			Tween.get(containerPopUp).to({alpha:1},600);
			Tween.get(square).to({alpha:0.5},600);
		}
    }
    function drawRect(x,y,sizex,sizey,alpha,r,gr,b,containerPopUp){
		var g = new Graphics();
		g.beginFill(Graphics.getRGB(r,gr,b));
		g.drawRect(x,y,sizex,sizey);
		square = new Shape(g);
		square.alpha=alpha;
		containerPopUp.addChild(square);
	}
/* GENERIC LOGIC BUTTONS */
	function goBackGame(){
        clearSounds();
		Tween.get(containerPrincipal).to({x:1024},1000);
		containerNou.removeAllChildren();
		stage.removeChild(containerNou);
		stage.addChild(containerNou);
		containerNou.x=-1024;
		gameManager.playGame(gameManager.backGame(),1,containerPrincipal,containerNou);
	}
	function goNextGame(){
		clearSounds();
        Tween.get(containerPrincipal).to({x:-1024},1000);
		containerNou.removeAllChildren();
		stage.removeChild(containerNou);
		stage.addChild(containerNou);
		containerNou.x=1024;
		gameManager.playGame(gameManager.nextGame(),2,containerPrincipal,containerNou);
	}
	function goBack(){
		cleanGame();
		menu.load();
		menu.show();
	}
	//=====================================================
	// loadBitmaps: load and show all items images 
	//=====================================================
	function loadBitmaps(i,game,folder,direction){
		eval('items['+i+'] = new Bitmap(images['+i+'])');
		if (eval('xml.getItems(game)['+i+']').getScale()!=1000){
			var scaleFactor = eval('xml.getItems(game)['+i+']').getScale()/1000;
			eval('items['+i+'].scaleX='+ scaleFactor);
			eval('items['+i+'].scaleY='+ scaleFactor);
		}
		offsetx=(parseInt(eval('items['+i+'].image.width'))/2);
		offsety=(parseInt(eval('items['+i+'].image.height'))/2);
		newx=parseInt(eval('xml.getItems(game)['+i+'].getX()'));
		newy=parseInt(eval('xml.getItems(game)['+i+'].getY()'));
		eval('items['+i+'].regX='+ offsetx);
		eval('items['+i+'].regY='+ offsety);
		eval('items['+i+'].x=newx');
		eval('items['+i+'].y=newy');
		containerBase.addChild(eval('items['+i+']'));

		(function(target) {

			target.onPress = function(evt) {
				if(endGame){
					fletxesListen.onTouch(i,game,xml,containerBase,evt);
					evt.onMouseMove = function(ev) {
						fletxesListen.onMouseMove(ev);
					}
					evt.onMouseUp = function(ev){
						fletxesListen.onMouseUp(i,game,xml,containerBase);
					}
				}
			}
			
			target.onMouseOver = function(evt) {
				if(fletxesListen.getPressed()!=-1 && endGame){
					fletxesListen.setInto(i);
				}
			}

			target.onMouseOut = function(evt){
				if(fletxesListen.getPressed()!=-1 && endGame){
					fletxesListen.setInto(-1);
				}
			}

		})(eval('items['+i+']'));
	}
	//=====================================================
	// cleanGame: delete all game showed
	//=====================================================
	function cleanGame(){
        clearSounds();
		containerPrincipal.removeAllChildren();
		containerNou.removeAllChildren();
		stage.removeChild(containerPrincipal);
		stage.removeChild(containerNou);
	}
    function clearSounds(){
        for(i=0;i<items.length;i++){
            PFSound.unload("sound"+i);
        }
    }
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/arrows/PFGameFletxesValidarListen.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


var PFGameFletxesValidarListen = function(){
	//Variables
	var pressed=-1;
	var into=-1;
	var posX;
	var posY;
	var selectedColor;
	var ok=true;
	var lineShape;
	var lineGraphics;
	var j;
	var relationsAux;
	var statistics;
	
	//Functions declaration
	this.onTouch=onTouch;
	this.onMouseMove=onMouseMove;
	this.onMouseUp=onMouseUp;
	this.getPressed=getPressed;
	this.setInto=setInto;
	this.validate=validate;
	this.setRelations=setRelations;
	this.getStatistics=getStatistics;

	function setRelations(relations){
		relationsAux=relations;
	}
	
	function validate(xml,game,containerBase){
		var i=0;
		statistics=new Array(0,0,0);
		while(xml.getItems(game)[i].getGroup()=="left"){
			statistics[0]+=xml.getItems(game)[i].getRelations().length;
			for(j=0;j<relationsAux[i].length;j++){
				for(var n=0;n<xml.getItems(game)[i].getRelations().length;n++){
					if(relationsAux[i][j]==xml.getItems(game)[i].getRelations()[n]){
						statistics[1]++;
					}
				}
				statistics[2]++;
			}
			i++;
		}
	}

	function getStatistics(){
		return statistics;
	}

	//Functions
	function onTouch(i,game,xml,containerPrincipal,evt){
		pressed=i;

		selectedColor = Graphics.getRGB(Math.random()*255 | 0 ,Math.random()*255 | 0, Math.random()*255 | 0);

		lineShape = new Shape();
		lineGraphics = new Graphics();
		lineShape.graphics = lineGraphics;
		containerPrincipal.addChild(lineShape);
		posX=evt.stageX;
		posY=evt.stageY;
		
		//PLAY THE SOUND ASSOCIED WIDTH THE SPRITE
		var itSound = xml.getItems(game)[i].getSound()
		if(itSound != ""){
			PFSound.play("sound"+i);
		}
	}
	function onMouseMove(ev){
		//clear previous line
		lineGraphics.clear();
		//stroke style
		lineGraphics.setStrokeStyle(8,1);
		//stroke color
		lineGraphics.beginStroke(selectedColor);
		//draw line from Mouse position to Drone position
		lineGraphics.moveTo(posX, posY);
		lineGraphics.lineTo(ev.stageX, ev.stageY);
	}
	function onMouseUp(i,game,xml,containerPrincipal){
		if(into!=-1 && xml.getItems(game)[i].getGroup()!=xml.getItems(game)[into].getGroup()){
			for(j=0;j<relationsAux[i].length;j++){
				if(relationsAux[i][j]==xml.getItems(game)[into].getId()){
					ok = false;
				}
			}
			for(j=0;j<relationsAux[into].length;j++){
				if(relationsAux[into][j]==xml.getItems(game)[i].getId()){
					ok = false;
					relationsAux[i].splice(0,0,xml.getItems(game)[into].getId());
				}
			}
			if(ok){
				relationsAux[i].splice(0,0,xml.getItems(game)[into].getId());
				relationsAux[into].splice(0,0,xml.getItems(game)[i].getId());
			}
		}
		if(!ok || into==-1 || xml.getItems(game)[i].getGroup()==xml.getItems(game)[into].getGroup()){
			containerPrincipal.removeChild(lineShape);
		}
		into=-1;
		pressed=-1;
		ok=true;
	}
	function getPressed(){
		return pressed;
	}
	function setInto(num){
		into = num;
	}
}




/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/paint/PFItemPaint.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFItemColor.js 
//	PFItemColor: create particular item properties
//*************************************************************

function PFItemPaint(src,rgb,x,y,alignX,alignY,isColor,thickness){

	//=====================================================
	// VARIABLES
	//=====================================================
	if(isColor){
		this.src		= "./"+GAME_FOLDER+"/theme/images/paint/colors/" + src;
	}else{
		this.src		= "./"+GAME_FOLDER+"/theme/images/paint/" + src;
	}
	this.rgb 		= rgb;
	this.x			= parseInt(x);
	this.y 			= parseInt(y);
	this.thickness 	= thickness;
    this.alignX     = alignX;
    this.alignY     = alignY;
	
	this.getSrc		= getSrc;	
	this.getRgb		= getRgb;
	this.getX		= getX;
	this.getY		= getY;
	this.getThickness = getThickness;

	//=====================================================
	// GETS
	//=====================================================	
	function getSrc() {
		return this.src;
	}
	function getX() {
        if     (this.alignX == "right")     { return WIDTH - this.x;        }
        else if(this.alignX == "center")    { return WIDTH*0.5 + this.x     }
        else                                { return this.x;                }
	}
	function getY() {
        if      (this.alignY == "bottom")   { return HEIGHT - this.y;       }
        else if (this.alignY == "center")   { return HEIGHT*0.5 + this.y }
        else                                { return this.y;                }
	}
	function getRgb(){
		return this.rgb.split("-");
	}
	function getThickness(){
		return parseInt(this.thickness);
	}
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/paint2/PFItemPaint2.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*************************************************************
//	File: PFItemTouchListen.js 
//	PFItemTouchListen: create particular item properties
//*************************************************************



function PFItemPaint2(action,actionLoops,run,sound,folder,text,rgb,wrongColorSound){
	
	//=====================================================
	// VARIABLES
	//=====================================================
	if(sound==""){
		this.sound = "";
	}else{
		this.sound = "./"+GAME_FOLDER+"/"+folder+"/sounds/"+sound;
	}
	if(wrongColorSound==""){
		this.wrongColorSound = "";
	}else{
		this.wrongColorSound = "./"+GAME_FOLDER+"/"+folder+"/sounds/"+wrongColorSound;
	}
		
	this.offsetX;
	this.offsetY;
	this.action			= action;
	this.actionLoops	= actionLoops;
	this.run			=run;
	this.actionRotation;
	this.actionScale;
	this.actionMove;
	this.actionJump;
	this.text = text;
	this.rgb = rgb;
	//=====================================================
	// GETS
	//=====================================================
	this.getAction = getAction;
	this.getActionLoops = getActionLoops;
	this.getRun = getRun;
	this.getSound = getSound;
	this.getWrongColorSound = getWrongColorSound;
	this.getActionRotation = getActionRotation;
	this.getActionScale = getActionScale;
	this.getActionJump = getActionJump;
	this.getActionMove = getActionMove;
	this.getOffsetX = getOffsetX;
	this.getOffsetY = getOffsetY;
	this.getText = getText;
	this.getRgb = getRgb;

	
	function getAction() {
		return this.action;
	}
	function getActionLoops() {
		return this.actionLoops;
	}
	function getRun() {
		return this.run;
	}
	function getSound() {
		return this.sound;
	}	
	function getWrongColorSound() {
		return this.wrongColorSound;
	}	
	function getOffsetX(){
		return this.offsetX;
	}
	function getOffsetY(){
		return this.offsetY;
	}	
	function getActionRotation(){
		return this.actionRotation;
	}	
	function getActionScale(){
		return this.actionScale;
	}	
	function getActionMove(){
		return this.actionMove;
	}	
	function getActionJump(){
		return this.actionJump;
	}
	function getText() {
		return this.text;
	}
	function getRgb() {
		return this.rgb;
	}
	//=====================================================
	// SETS
	//=====================================================
	this.setActionRotation	= setActionRotation;
	this.setActionScale 	= setActionScale;
	this.setActionJump		= setActionJump;
	this.setActionMove		= setActionMove;	
	this.setOffsetX 		= setOffsetX;
	this.setOffsetY 		= setOffsetY;
	
	function setOffsetX(value){
		this.offsetX = value;
	}
	function setOffsetY(value){
		this.offsetY = value;
	}
	function setActionRotation(value){
		this.actionRotation=value;
	}
	function setActionScale(value){
		this.actionScale=value;
	}
	function setActionMove(value){
		this.actionMove=value;
	}
	function setActionJump(value){
		this.actionJump=value;
	}
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/xml/PFXMLParser.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//http://duncanpierce.org/node/185

var PFXMLParser = function(pListener){
	
	//=====================================================
	// VARIABLES
	//=====================================================	
	this.background 	= null;
	this.endGame		= null;
	this.items			= null;
	}	
	
	
	//=====================================================
	// ABSTRACT 
	//=====================================================			
	PFXMLParser.prototype.loadItems			= function(xmlDoc,folder){ }
	PFXMLParser.prototype.loadCustom 		= function(xmlIni,folder){ }
	PFXMLParser.prototype.hasEndGame 		= function(xmlDoc,folder){ }	
	
		
	//=====================================================
	// LOAD MEMORY
	//=====================================================		

	PFXMLParser.prototype.load = function(game, folder){

		xmlIni 				= this.loadGameXML(folder);
		xmlDoc				= xmlIni.getElementsByTagName("page")[0];				
		this.background 	= this.getBackground	(xmlDoc,folder);
		this.backgroundRgb	= this.getBackgroundRgb	(xmlDoc,folder);
		this.items 			= this.loadItems		(xmlDoc,folder);		
							  this.loadCustom		(xmlIni,folder);
		//this.endGame 		= this.getEndGameScreen	(folder);
	}
	
	//=====================================================
	// LOAD GAME XML
	//=====================================================		
	PFXMLParser.prototype.loadGameXML = function(folder){
        /*
		if  ( window.XMLHttpRequest )	{ xmlhttp = new XMLHttpRequest();						}
		else							{ xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");		}
		
		xmlhttp.open("GET","game/"+folder+"/game.xml",false);
		xmlhttp.send();
		xmlIni = xmlhttp.responseXML;
		*/

        xmlIni = parseScriptToXML(_game_xml);

		return xmlIni;
	}
	
	//=====================================================
	// GET BACKGROUND SRC
	//=====================================================		
	PFXMLParser.prototype.getBackground = function(xmlDoc,folder){
		var x  = xmlDoc.getElementsByTagName("background");
		var scale = "noscale";
		var src = "";
		if(typeof(x[0]) != "undefined"){
			if(x[0].attributes.getNamedItem('scale') != null){
				scale = x[0].attributes.getNamedItem('scale').nodeValue;
				src = x[0].attributes.getNamedItem('src').nodeValue;
			}
		}
		
		return new Background(src,0,0,folder,scale);
		
	}
	//=====================================================
	// GET BACKGROUND RGB
	//=====================================================	
	PFXMLParser.prototype.getBackgroundRgb = function(xmlDoc,folder){
		var x  = xmlDoc.getElementsByTagName("background");
		
		var rgb = "0-0-0";
		if(typeof(x[0]) != "undefined"){
			if(x[0].attributes.getNamedItem('rgb') != null){
				rgb = x[0].attributes.getNamedItem('rgb').nodeValue;
			}	
		}			
		return rgb.split("-");
	}

	//=====================================================
	// GET END GAME SCREEN
	//=====================================================			
	PFXMLParser.prototype.getEndGameScreen = function(folder){
		if(this.hasEndGame()){
			/*
			if  ( window.XMLHttpRequest )	{ xmlhttp = new XMLHttpRequest();						}
			else							{ xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");		}
				
			xmlhttp.open("GET","game/"+folder+"/end_game.xml",false);
			xmlhttp.send();

			xmlDoc 	= xmlhttp.responseXML;
			 */

			xmlDoc = parseScriptToXML(_end_game_xml);

			x 		= xmlDoc.getElementsByTagName("image");
			return new Background(x[0].attributes.getNamedItem('src').nodeValue,0,0,folder);		
		}
	}
	
	//=======================================================================			
	// SELECT SOUND XML : DEPENDING IN LANGUAGE
	//=======================================================================		
	PFXMLParser.prototype.SelectSoundXML = function(tagSnd){		
	
		var src = "";
		if( typeof(tagSnd[0]) != 'undefined' &&
			typeof(tagSnd[0].getElementsByTagName("sound")[0]) != 'undefined'){	
			
			for(var i = 0; i< tagSnd[0].getElementsByTagName("sound").length; i++){
				if(tagSnd[0].getElementsByTagName("sound")[i].attributes.getNamedItem("lang").nodeValue==lang){
					src = lang + "/" + tagSnd[0].getElementsByTagName("sound")[i].attributes.getNamedItem("src").nodeValue;					
				}	
			}
		}
		return src;
	}

	
	//=======================================================================			
	// SELECT TEXT : DEPENDING IN LANGUAGE
	//=======================================================================		
	PFXMLParser.prototype.SelectTextXML = function(tagText){		
		var txt = "";

		if( typeof(tagText[0]) != 'undefined' &&					
			typeof(tagText[0].getElementsByTagName("text")[0]) != 'undefined'){			
				
			for(var i = 0; i< tagText[0].getElementsByTagName("text").length; i++){
				if(tagText[0].getElementsByTagName("text")[i].attributes.getNamedItem("lang").nodeValue==lang){
					txt = tagText[0].getElementsByTagName("text")[i].attributes.getNamedItem("text").nodeValue;	
				}
			}
		}
		return txt;
	}

    //=======================================================================
    // SELECT TEXT : DEPENDING IN LANGUAGE
    //=======================================================================
    PFXMLParser.prototype.getText = function(tagItem){
        //PFDebug(tagItem);

        if(tagItem.attributes.getNamedItem("textId") != null && typeof(tagItem.attributes.getNamedItem("textId")) != 'undefined'){
            var textId = tagItem.attributes.getNamedItem("textId").nodeValue;
            return langManager.getText(textId);
        }

        return "";
    }

    //=======================================================================
    // SELECT TEXT : DEPENDING IN LANGUAGE
    //=======================================================================
    PFXMLParser.prototype.getText2 = function(tagText){
        //PFDebug(tagText[0]);

        if( typeof(tagText[0]) != 'undefined' &&
            typeof(tagText[0].getElementsByTagName("text")[0]) != 'undefined'){

            for(var i = 0; i< tagText[0].getElementsByTagName("text").length; i++){
                if(tagText[0].getElementsByTagName("text")[i].attributes.getNamedItem("lang").nodeValue==lang){

	                var textResult = langManager.getText(tagText[0].getElementsByTagName("text")[i].attributes.getNamedItem("textId").nodeValue);
	                PFDebug("TEXT RESULT");
	                PFDebug(textResult);

                    return langManager.getText(tagText[0].getElementsByTagName("text")[i].attributes.getNamedItem("textId").nodeValue);
                }
            }
        }

        return "";
    }

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/xml/PFActionXML.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************// File: PFActionXML.js // PFActionXML: Read Action XML//*****************************************************/function PFActionXML(){		//=======================================================================				// LOAD ACTIONS: load the corresponding animation if there's any interaction	//=======================================================================	this.load = load;	function load(folder, action){		if (action!=""){			actionState = true;			/*            if  ( window.XMLHttpRequest )	{ xmlhttp = new XMLHttpRequest();					}			else							{ xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");	}						xmlhttp.open("GET","game/"+folder+"/actions/"+action+".xml",false);			xmlhttp.send();			xmlDoc = xmlhttp.responseXML;			 */			var xmlDocAction;            switch (action) {                case "right_left" :	                xmlDocAction = parseScriptToXML(_right_left_xml);                    break;                case "small_big" :	                xmlDocAction = parseScriptToXML(_small_big_xml);                    break;                case "up_down_2" :	                xmlDocAction = parseScriptToXML(_up_down_2_xml);                    break;                case "up_down" :	                xmlDocAction = parseScriptToXML(_up_down_xml);                    break;            }			/********** MOVE **********/			var x = xmlDocAction.getElementsByTagName("move");			this.actionMove = new Array(x.length);			for (i = 0;i<x.length;i++){				this.actionMove[i] = new Array(3);				this.actionMove[i][0] = x[i].attributes.getNamedItem('x').nodeValue;				this.actionMove[i][1] = x[i].attributes.getNamedItem('y').nodeValue;				this.actionMove[i][2] = x[i].attributes.getNamedItem('duration').nodeValue;			}			/********** SCALE **********/			var x = xmlDocAction.getElementsByTagName("scale");			this.actionScale = new Array(x.length);			for (i = 0;i<x.length;i++){				this.actionScale[i] = new Array(2);				this.actionScale[i][0] = x[i].attributes.getNamedItem('scale').nodeValue;				this.actionScale[i][1] = x[i].attributes.getNamedItem('duration').nodeValue-15;				}			/********** ROTATE **********/			var x = xmlDocAction.getElementsByTagName("rotate");			this.actionRotation = new Array(x.length);			if (x.length>0){				this.actionRotation = new Array(x.length+1);			}else{				this.actionRotation = new Array(x.length);			}			for (i = 0;i<x.length;i++){				this.actionRotation[i] = new Array(2);				this.actionRotation[i][0] = x[i].attributes.getNamedItem('angle').nodeValue;				this.actionRotation[i][1] = x[i].attributes.getNamedItem('duration').nodeValue;			}			if (this.actionRotation.length>0){				this.actionRotation[x.length] = new Array(2);				this.actionRotation[x.length][0] = 0;				this.actionRotation[x.length][1] = 0;			}			/********** JUMP **********/			var x = xmlDocAction.getElementsByTagName("jump");			this.actionJump = new Array(x.length);			for (i = 0;i<x.length;i++){				this.actionJump[i] = new Array(3);				this.actionJump[i][0] = x[i].attributes.getNamedItem('height').nodeValue;				this.actionJump[i][1] = x[i].attributes.getNamedItem('jumps').nodeValue;				this.actionJump[i][2] = x[i].attributes.getNamedItem('duration').nodeValue;			}		}else{			actionState = false;		}	}		//=======================================================================				// GET ACTION	//=======================================================================	this.getAction = getAction;	function getAction(){		if (actionState){			if(this.actionMove.length>0)		{ return this.actionMove;		}			if(this.actionScale.length>0)		{ return this.actionScale;		}			if(this.actionRotation.length>0)	{ return this.actionRotation;	}			if(this.actionJump.length>0)		{ return this.actionJump;		}			if(this.actionSound != "")			{	}		}	}			//=======================================================================				// GET ACTION XXX	//=======================================================================		this.getActionMove		= function()	{ return this.actionMove;		}	this.getActionScale		= function()	{ return this.actionScale;		}	this.getActionRotation	= function()	{ return this.actionRotation;	}		this.getActionJump		= function()	{ return this.actionJump;		}		}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/xml/PFThemeXML.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************/
// PFAction: Load all xmls to variables
//*****************************************************/

var PFThemeXML = function() {
	
	//Variables

    // LOADING
    this.loadingSrc;

    // GENERAL
    this.homeThemeItem;
	this.homeBackThemeItemImg = null;
	this.homeBackThemeItemColor = null;
	this.homeBackCornerLItem = null;
	this.homeBackCornerRItem = null;
    this.soundThemeItem;
	this.muteThemeItem = null;
	this.unmuteThemeItem = null;

    this.nextThemeItem;
    this.prevThemeItem;

    // INSTRUCTION
    this.instructionBackgroundThemeItem;
	this.instructionCloseThemeItem;
    this.instructionArrowThemeItem;
    this.instructionArrowPrevThemeItem;
    this.instructionSoundThemeItem;
    this.instructionTextThemeItem;
    this.instructionImageThemeItem;
    this.instructionVisible;
	this.instructionIsStart = false;

    this.instBackgroundSrc  = "";
    this.instBackgroundX    = "";
    this.instBackgroundY    = "";

    this.instArrowSrc       = "";
    this.instArrowX         = "";
    this.instArrowY         = "";

    this.instSoundSrc       = "";
    this.instSoundX         = "";
    this.instSoundY         = "";

    this.instTextFont       = "";
    this.instTextFontSize   = "";
    this.instTextX          = "";
    this.instTextY          = "";
    this.instTextMaxWidth   = "";
    this.instTextMaxHeight  = "";

    this.instImageX         = "";
    this.instImageY         = "";
    this.instImageMaxWidth  = "";
    this.instImageMaxHeight = "";

    // EXPLORE
    this.modeTale;

    // FINDME
    this.itemToFindeThemeItem;

	// DRAG
	this.itemToDragThemeItem;

    // DIFFERENCES
    this.imageOKSrc;

    // MEMORY
	this.cardPositions;
    this.cardPositionsThemeItem;
	this.cardWhite = null;
	this.cardCover = null;
	this.whiteRotation = 0;

    // PAINT
    this.colorsPaletteThemeItem;
    this.colorsBrushesThemeItem;
    this.colors;
	this.aura;
	this.brushSizes;
    this.activeBrush;
	this.binButton = null;

    // ARROWS
    this.arrowsColor;
    this.arrowsSize;
    this.arrowsOkSound;

    // QUIZ
    this.quizNextThemeItem;
    this.quizQuestionThemeItem;
    this.quizImageThemeItem;
	this.quizAnswerThemeItem;

    // QUIZ TEXT
    this.quizTextNextThemeItem;
    this.quizTextInputThemeItem;

    // INTERACTIVEIMAGES
    this.interactiveBackgroundThemeItem;
    this.interactiveNextThemeItem;
    this.interactivePrevThemeItem;
    this.interactiveSoundThemeItem;
    this.interactiveTextThemeItem;
    this.interactiveImageThemeItem;
	
	var xmlhttp;
	var xmlIni;
	var xmlDoc;
	
	
	//Function declarations

    this.getLoading         = getLoading;
	this.getFont            = getFont;
    this.getGeneral         = getGeneral;
    this.getInstructionInfo = getInstructionInfo;
	this.getHasInstructionStart = getHasInstructionStart;

	this.getMemory          = getMemory;
	this.getCardPositions   = getCardPositions;
	this.getPaint 		    = getPaint;
    this.getArrowsInfo      = getArrowsInfo;
    this.getExploreInfo     = getExploreInfo;
    this.getDifferencesInfo = getDifferencesInfo;
    this.getFindmeInfo      = getFindmeInfo;
    this.getQuizText        = getQuizText;
    this.getQuiz            = getQuiz;
	this.getDragInfo        = getDragInfo;

    this.loadTheme          = loadTheme;

    function loadTheme(callback)
    {
        xmlIni  = parseScriptToXML(_theme_xml);
        xmlDoc 	= xmlIni.getElementsByTagName("theme")[0];
    }

    //=====================================================
    // GET GENERAL INFO:
    //=====================================================
    function getLoading() {
        var x           = xmlDoc.getElementsByTagName("loading");
        var loading     = x[0].getElementsByTagName("image");

        this.loadingSrc = loading[0].attributes.getNamedItem("src").nodeValue;
    }

	//=====================================================
	// GET FONT:
	//=====================================================
	function getFont() {
		var x           = xmlDoc.getElementsByTagName("font");
		this.fontName = x[0].attributes.getNamedItem("name").nodeValue;
	}

    //=====================================================
    // GET GENERAL INFO:
    //=====================================================
    function getGeneral()	{

        var x       = xmlDoc.getElementsByTagName("menu");

	    var toolbar = x[0].getElementsByTagName("toolbar");
        var home    = x[0].getElementsByTagName("buttonHome");
        var next    = x[0].getElementsByTagName("buttonNext");
        var prev    = x[0].getElementsByTagName("buttonPrev");
        var sound   = x[0].getElementsByTagName("buttonSound");
	    var mute    = x[0].getElementsByTagName("buttonMute");
	    var unmute  = x[0].getElementsByTagName("buttonUnMute");

	    if (toolbar.length > 0) {

		    var toolbarAttr = toolbar[0].attributes;

		    if (toolbarAttr.getNamedItem("src").nodeValue !== "")
		    {
			    this.homeBackThemeItemImg  = new PFThemeItem("",toolbarAttr);
		    }
			else if (toolbarAttr.getNamedItem("color").nodeValue !== ""){
			    this.homeBackThemeItemColor  = new PFThemeItem("",toolbarAttr);
		    }

			if (toolbarAttr.getNamedItem("cornerLsrc").nodeValue !== "")
			{
				this.homeBackCornerLItem = new PFThemeItem("./"+GAME_FOLDER+"/theme/images/menu/",toolbarAttr);
			}
		    if (toolbarAttr.getNamedItem("cornerRsrc").nodeValue !== "")
		    {
			    this.homeBackCornerRItem = new PFThemeItem("./"+GAME_FOLDER+"/theme/images/menu/",toolbarAttr);
		    }
	    }

		if (mute.length > 0)
		{
			this.muteThemeItem = new PFThemeItem("./"+GAME_FOLDER+"/theme/images/menu/",mute[0].attributes);
		}

		if (unmute.length > 0)
		{
			this.unmuteThemeItem = new PFThemeItem("./"+GAME_FOLDER+"/theme/images/menu/",unmute[0].attributes);
		}

        this.homeThemeItem      = new PFThemeItem("./"+GAME_FOLDER+"/theme/images/menu/",home[0].attributes);
        this.soundThemeItem     = new PFThemeItem("./"+GAME_FOLDER+"/theme/images/menu/",sound[0].attributes);
        this.nextThemeItem      = new PFThemeItem("./"+GAME_FOLDER+"/theme/images/menu/",next[0].attributes);
        this.prevThemeItem      = new PFThemeItem("./"+GAME_FOLDER+"/theme/images/menu/",prev[0].attributes);
    }


    //=====================================================
    // GET INSTRUCTION
    /*
     <background src="" x="" y=""/>
     <sound		src="" x="" y=""/>
     <text		font="" fontSize="" x="" y="" maxWidth="" maxHeight=""/>
     <image		x="" y="" maxWidth="" maxHeight=""/>
     */
    //=====================================================
    function getInstructionInfo(instructionKind,infoKind,themeFolder) {

        this.instructionBackgroundThemeItem = null;
        this.instructionArrowThemeItem = null;
        this.instructionArrowPrevThemeItem = null;
        this.instructionSoundThemeItem = null;
        this.instructionTextThemeItem = null;
        this.instructionImageThemeItem = null;
	    this.instructionCloseThemeItem = null;

        var x           = xmlDoc.getElementsByTagName(instructionKind);

        var info = x[0].getElementsByTagName(infoKind);

	    if (x[0].attributes.getNamedItem("start") != null && x[0].attributes.getNamedItem("start").nodeValue == "true") {

		    var nextArrow           = info[0].getElementsByTagName("next");

		    if (nextArrow.length > 0){
			    this.instructionArrowThemeItem = new PFThemeItem(themeFolder,nextArrow[0].attributes);
		    }

		    return;
	    }

        this.instructionVisible = true;
        if(info[0].attributes.getNamedItem("visible") != null && info[0].attributes.getNamedItem("visible").nodeValue == "false"){
            this.instructionVisible = false;
        }

        var background          = info[0].getElementsByTagName("background");

        if (background.length > 0){
            this.instructionBackgroundThemeItem = new PFThemeItem(themeFolder,background[0].attributes);
        }

	    var close           = info[0].getElementsByTagName("close");

	    if (close.length > 0){
		    this.instructionCloseThemeItem = new PFThemeItem(themeFolder,close[0].attributes);
	    }

        var nextArrow           = info[0].getElementsByTagName("next");

        if (nextArrow.length > 0){
            this.instructionArrowThemeItem = new PFThemeItem(themeFolder,nextArrow[0].attributes);
        }

        var prevArrow           = info[0].getElementsByTagName("prev");

        if (prevArrow.length > 0){
            this.instructionArrowPrevThemeItem = new PFThemeItem(themeFolder,prevArrow[0].attributes);
        }

        var sound               = info[0].getElementsByTagName("sound");

        if (sound.length > 0){
            this.instructionSoundThemeItem = new PFThemeItem(themeFolder,sound[0].attributes);
        }

        var text                = info[0].getElementsByTagName("text");

        if (text.length > 0){
            this.instructionTextThemeItem = new PFThemeItem(themeFolder,text[0].attributes);
        }

        var image               = info[0].getElementsByTagName("image");

        if (image.length > 0){
            this.instructionImageThemeItem = new PFThemeItem("",image[0].attributes);
        }
    }

	function getHasInstructionStart(instructionKind) {
		var x = xmlDoc.getElementsByTagName(instructionKind);

		if (x[0].attributes.getNamedItem("start") != null && x[0].attributes.getNamedItem("start").nodeValue == "true") {
			this.instructionIsStart = true;
		}
		else
			this.instructionIsStart = false;
	}


    //=====================================================
    // GET EXPLORE
    //=====================================================
    function getExploreInfo(){
        var x            = xmlDoc.getElementsByTagName("explore");
        var modetale     = x[0].getElementsByTagName("modeTale");

        this.modeTale = modetale[0].attributes.getNamedItem("active").nodeValue;
    }

    //=====================================================
    // GET DIFFERENCES INFO
    //=====================================================
    function getDifferencesInfo() {
        var x           = xmlDoc.getElementsByTagName("differences");
        var imageOK     = x[0].getElementsByTagName("imageOk");

        this.imageOKSrc = imageOK[0].attributes.getNamedItem("src").nodeValue;
    }


    //=====================================================
    // GET CARDS POSITIONS FOR MEMORY
    /*
     <findme itemToSearchX="512" itemToSearchY="100"
     maxPieceWidth=""
     itemFoundAction="" changeItemAction=""
     itemFoundSound="" itemFailAction=""
     itemFailSound="" >
     </findme>
     */
    //=====================================================
    function getFindmeInfo() {
        var x = xmlDoc.getElementsByTagName("findme");

        this.itemToFindeThemeItem = new PFThemeItem("", x[0].attributes);
    }

	function getDragInfo() {
		var x = xmlDoc.getElementsByTagName("drag");

		this.itemToDragThemeItem = new PFThemeItem("", x[0].attributes);
	}

	//=====================================================
	// GET CARDS POSITIONS FOR MEMORY 
	//=====================================================	
	function getCardPositions(nCards)	{ 

		var x 					= xmlDoc.getElementsByTagName("memory");
		
		var pieces = x[0].getElementsByTagName("pieces");
		var positions;
		this.whiteRotation = 0;
		if(nCards == 8){
			positions = pieces[0].getElementsByTagName("position");
		}else if(nCards == 12){
			positions = pieces[1].getElementsByTagName("position");

			if (pieces[1].attributes.getNamedItem("rotation") != null)
				this.whiteRotation = pieces[1].attributes.getNamedItem("rotation").nodeValue;
		}
	
		this.cardPositions 	= new Array(positions.length);
		for (i = 0; i < positions.length; i++){
			this.cardPositions[i]		= new Array(2);
			this.cardPositions[i][0]	= positions[i].attributes.getNamedItem("x").nodeValue-115;
			this.cardPositions[i][1]	= positions[i].attributes.getNamedItem("y").nodeValue-100;
		}

        this.cardPositionsThemeItem = new Array(positions.length);
        for (i = 0; i < positions.length; i++){
            this.cardPositionsThemeItem[i]		= new PFThemeItem("",positions[i].attributes);
        }
	}

	function getMemory() {

		var x = xmlDoc.getElementsByTagName("memory");

		if (x[0].getElementsByTagName("cover").length > 0) {
			this.cardCover = x[0].getElementsByTagName("cover")[0].attributes.getNamedItem("src").nodeValue;
		}

		if (x[0].getElementsByTagName("white").length > 0) {
			this.cardWhite = x[0].getElementsByTagName("white")[0].attributes.getNamedItem("src").nodeValue;
		}
	}

		//=====================================================
    // GET EVERYTHING FOR ARROWS: <arrows strokeSize="" arrowColor="" okSound=""></arrows>
    //=====================================================
    function getArrowsInfo()	{

        var x 					= xmlDoc.getElementsByTagName("arrows");

        this.arrowsSize     = x[0].attributes.getNamedItem("strokeSize").nodeValue;
        this.arrowsColor    = x[0].attributes.getNamedItem("arrowColor").nodeValue; //return this.arrowsColor.split("-");
        this.arrowsOkSound  = x[0].attributes.getNamedItem("okSound").nodeValue;
    }

	//=====================================================
	// GET EVERYTHING FOR PAINT 
	//=====================================================	
	function getPaint(){

		var x 			= xmlDoc.getElementsByTagName("paint");
        this.colorsPaletteThemeItem = new PFThemeItem("./"+GAME_FOLDER+"/theme/images/paint/",x[0].getElementsByTagName("colors")[0].attributes);
		
		var colorsTag	= x[0].getElementsByTagName("colors")[0].getElementsByTagName("color");
		
		this.colors		= new Array(colorsTag.length);
		for (i = 0; i < colorsTag.length; i++){
			this.colors[i]		= new PFItemPaint(	colorsTag[i].attributes.getNamedItem("src").nodeValue,
													colorsTag[i].attributes.getNamedItem("rgb").nodeValue,
													colorsTag[i].attributes.getNamedItem("x").nodeValue,
													colorsTag[i].attributes.getNamedItem("y").nodeValue,
                                                    colorsTag[i].attributes.getNamedItem("alignX").nodeValue,
                                                    colorsTag[i].attributes.getNamedItem("alignY").nodeValue,
													true,
													""
												);
		}

		if (x[0].getElementsByTagName("aura").length > 0)
			this.aura = "./"+GAME_FOLDER+"/theme/images/paint/" + x[0].getElementsByTagName("aura")[0].attributes.getNamedItem("src").nodeValue;
		
		var brushesTag = x[0].getElementsByTagName("sizes")[0].getElementsByTagName("size");

        this.colorsBrushesThemeItem = new PFThemeItem("./"+GAME_FOLDER+"/theme/images/paint/",x[0].getElementsByTagName("sizes")[0].attributes);
		
		this.brushSizes = new Array(brushesTag.length);
		
		for(i = 0; i < brushesTag.length; i++){
			this.brushSizes[i]		= new PFItemPaint(	brushesTag[i].attributes.getNamedItem("src").nodeValue,
													"",
													brushesTag[i].attributes.getNamedItem("x").nodeValue,
													brushesTag[i].attributes.getNamedItem("y").nodeValue,
                                                    brushesTag[i].attributes.getNamedItem("alignX").nodeValue,
                                                    brushesTag[i].attributes.getNamedItem("alignY").nodeValue,
													false,
													brushesTag[i].attributes.getNamedItem("value").nodeValue
												);	
		
		}

        this.activeBrush = new PFThemeItem("",x[0].getElementsByTagName("activeBrush")[0].attributes);

		var binAttrib = x[0].getElementsByTagName("buttons")[0].getElementsByTagName("clear")[0].attributes;

		if (binAttrib.getNamedItem("src").nodeValue != "") {
			this.binButton = new PFThemeItem("./"+GAME_FOLDER+"/theme/images/paint/",binAttrib);
		}
		
	}

    //=====================================================
    // GET EVERYTHING FOR QUIZ TEXT
    //=====================================================
    function getQuizText(){
        var x 			= xmlDoc.getElementsByTagName("quizText");
        this.quizTextNextThemeItem  = new PFThemeItem("./"+GAME_FOLDER+"/theme/images/quizText/",x[0].getElementsByTagName("nextQuestion")[0].attributes);
        this.quizTextInputThemeItem = new PFThemeItem("./"+GAME_FOLDER+"/theme/images/quizText/",x[0].getElementsByTagName("input")[0].attributes);
        this.quizQuestionThemeItem  = new PFThemeItem("./"+GAME_FOLDER+"/theme/images/quizText/",x[0].getElementsByTagName("question")[0].attributes);
        this.quizImageThemeItem     = new PFThemeItem("./"+GAME_FOLDER+"/theme/images/quizText/",x[0].getElementsByTagName("image")[0].attributes);
	    this.quizClearThemeItem     = new PFThemeItem("./"+GAME_FOLDER+"/theme/images/quizText/",x[0].getElementsByTagName("clear")[0].attributes)
    }

    //=====================================================
    // GET QUIZ
    //=====================================================
    function getQuiz(){
        var x 			            = xmlDoc.getElementsByTagName("quiz");
        this.quizNextThemeItem      = new PFThemeItem("./"+GAME_FOLDER+"/theme/images/quiz/",x[0].getElementsByTagName("nextQuestion")[0].attributes);
        this.quizQuestionThemeItem  = new PFThemeItem("./"+GAME_FOLDER+"/theme/images/quiz/",x[0].getElementsByTagName("question")[0].attributes);
        this.quizImageThemeItem     = new PFThemeItem("./"+GAME_FOLDER+"/theme/images/quiz/",x[0].getElementsByTagName("image")[0].attributes);
	    this.quizAnswerThemeItem    = new PFThemeItem("./"+GAME_FOLDER+"/theme/images/quiz/",x[0].getElementsByTagName("answer")[0].attributes)
    }
}

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/xml/PFXMLExplore.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************
// File: PFXMLExplore.js 
// PFXMLExplore: Read Explore XML
//*****************************************************/

var PFXMLExplore = PFXMLParser.extend(function(){
   	this.superc.call(this);	
});

	//=====================================================
	// LOAD ITEMS
	//=====================================================				
	PFXMLExplore.prototype.loadItems = function(xmlDoc,folder){		
		x = xmlDoc.getElementsByTagName("item");	
		var itemsExplore = new Array();
		for  (i = 0; i < x.length; i++){
			var srcSound = this.SelectSoundXML(x[i].getElementsByTagName("sounds"));
				
			PFItemExplore.prototype = new PFItem(x[i].attributes.getNamedItem("src").nodeValue,
												x[i].attributes.getNamedItem("x").nodeValue,
												x[i].attributes.getNamedItem("y").nodeValue,
												x[i].attributes.getNamedItem("scale").nodeValue,
												x[i].attributes.getNamedItem("rotation").nodeValue, folder);
			
            var textItem = this.getText2(x[i].getElementsByTagName("texts"));
			
			itemsExplore.push	( new PFItemExplore (	x[i].attributes.getNamedItem("action").nodeValue,
														x[i].attributes.getNamedItem("actionLoops").nodeValue,
														x[i].attributes.getNamedItem("run").nodeValue, srcSound,folder,
														textItem,
														x[i].attributes.getNamedItem("rgb").nodeValue));
		}			
		return itemsExplore;
	}	
	
	//=====================================================
	// LOAD CUSTOM
	//=====================================================					
	PFXMLExplore.prototype.loadCustom = function(xmlDoc, folder){ }

	//=====================================================
	// HAS END GAME
	//=====================================================		
	PFXMLExplore.prototype.hasEndGame = function(){ return false; }
	

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/xml/PFXMLMemory.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************
// File: PFXMLMemory.js 
// PFXMLMemory: Read Memory XML
//*****************************************************/

var PFXMLMemory = PFXMLParser.extend(function(){
   	this.superc.call(this);	
	//=====================================================
	// VARIABLES
	//=====================================================	
	this.redCard 		= null;
	this.CardPositions 	= null;
	this.nItems			= null;
	this.discardItems 	= null;
	this.wrongSound 	= null;
	this.rightSound     = null;
});

	var discardItems 	= null;

	function getRandomNum(total){
		var num = Math.floor(Math.random()*(total+1));
		if(num == 0){
			num = 1;
		}
		if(!checkTakenNum(num)){
			return num;
		}else{
			getRandomNum(total);
		}
	}
	
	function checkTakenNum(n){
		var found = false;
		for(var i = 0; i < discardItems.length; i++){
			if(n == discardItems[i]){
				found = true;
			}
		}
		return found;
	}
	//=====================================================
	// LOAD ITEMS
	//=====================================================				
	PFXMLMemory.prototype.loadItems = function(xmlDoc,folder){		
		this.nItems = parseInt(xmlDoc.getElementsByTagName("cards")[0].attributes.getNamedItem("n").nodeValue);
		x = xmlDoc.getElementsByTagName("item");
		itemsMemory = new Array();		
		
		var nDiscardItems = (x.length - this.nItems)/2;
		if(nDiscardItems > 0){
			discardItems = new Array(nDiscardItems);	
			for(var i = 0; i < discardItems.length; i++){
				discardItems[i] = getRandomNum(x.length/2);
			}
		}else{	
			discardItems = new Array(1);
			discardItems[0] = -1;
		}
				
		for  (var i = 0; i < x.length; i++){
		
			if(!checkTakenNum(parseInt(x[i].attributes.getNamedItem("id").nodeValue))){
		
				var srcSound = this.SelectSoundXML(x[i].getElementsByTagName("sounds"));
				var srcSound2 = this.SelectSoundXML(x[i].getElementsByTagName("sounds2"));

				PFItemMemory.prototype = new PFItem(x[i].attributes.getNamedItem("src").nodeValue,
													x[i].attributes.getNamedItem("x").nodeValue,
													x[i].attributes.getNamedItem("y").nodeValue,
													x[i].attributes.getNamedItem("scale").nodeValue,
													x[i].attributes.getNamedItem("rotation").nodeValue,
													folder);

				//var textItem = this.SelectTextXML(x[i].getElementsByTagName("texts"));    //Old text method
                var textItem = this.getText2(x[i].getElementsByTagName("texts"));

				var rgb = "0-0-0";
				if(x[i].attributes.getNamedItem("rgb") != null){
					rgb = x[i].attributes.getNamedItem("rgb").nodeValue;
				}
				itemsMemory.push( new PFItemMemory(	x[i].attributes.getNamedItem("id").nodeValue,
														x[i].attributes.getNamedItem("action").nodeValue,
														x[i].attributes.getNamedItem("actionLoops").nodeValue,
														x[i].attributes.getNamedItem("run").nodeValue,
														srcSound,
														srcSound2,
														folder,
														textItem,
														rgb));			
			}													
		}				
		return itemsMemory;
	}	
	
	//=====================================================
	// LOAD CUSTOM
	//=====================================================					
	PFXMLMemory.prototype.loadCustom = function(xmlIni, folder){
		xmlDoc = xmlIni.getElementsByTagName("page")[0];		
		
		x 					= xmlDoc.getElementsByTagName("card");
		this.redCard 		= "./"+GAME_FOLDER+"/"+folder+"/images/"+x[0].attributes.getNamedItem('src').nodeValue;
		x 					= xmlDoc.getElementsByTagName("position");
		this.cardPositions 	= new Array(x.length);
		
		for (i = 0; i < x.length; i++){
			this.cardPositions[i]		= new Array(2);
			this.cardPositions[i][0]	= x[i].attributes.getNamedItem("x").nodeValue-115;
			this.cardPositions[i][1]	= x[i].attributes.getNamedItem("y").nodeValue-100;
		}			

		var sounds = "";
		if (xmlDoc.getElementsByTagName("wrongSounds").length > 0)
			sounds = this.SelectSoundXML(xmlDoc.getElementsByTagName("wrongSounds"));
		if (sounds != "")
			this.wrongSound		= "./"+GAME_FOLDER+"/"+folder+"/sounds/"+sounds;

		sounds = "";
		if (xmlDoc.getElementsByTagName("okSounds").length > 0)
			sounds = this.SelectSoundXML(xmlDoc.getElementsByTagName("okSounds"));
		if (sounds!= "")
			this.rightSound		= "./"+GAME_FOLDER+"/"+folder+"/sounds/"+sounds;
	}

	
	//=====================================================
	// HAS END GAME
	//=====================================================		
	PFXMLMemory.prototype.hasEndGame = function(){ return true; }

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/xml/PFXMLArrows.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************
// File: PFXMLArrows.js 
// PFXMLArrows: Read Arows XML
//*****************************************************/

var PFXMLArrows = PFXMLParser.extend(function(){
   	this.superc.call(this);	
	this.itemsDiscard = 0;
});

	//=====================================================
	// LOAD ITEMS
	//=====================================================				
	PFXMLArrows.prototype.loadItems = function(xmlDoc,folder){			
		
		var relations;
	    var x2;
		numRelations = 0;       
		var x = xmlDoc.getElementsByTagName("parent");		
	    
		var itemsFletxes = new Array();
	    
		var num = 0;
		for  (i = 0; i < x.length; i++){
	        
			x2 = x[i].getElementsByTagName("item");

			var srcSound = "";
			relations = new Array(x[i].getElementsByTagName("item").length);
			for(n=0;n<relations.length;n++){
				relations[n]=x2[n].attributes.getNamedItem("id").nodeValue;                 
                
	            PFItemFletxes.prototype	= new PFItem(			x2[n].attributes.getNamedItem("src").nodeValue,
																x2[n].attributes.getNamedItem("x").nodeValue,
																x2[n].attributes.getNamedItem("y").nodeValue,
																x2[n].attributes.getNamedItem("scale").nodeValue,
																x2[n].attributes.getNamedItem("rotation").nodeValue,
																folder);

                var textItem = this.getText2(x2[n].getElementsByTagName("texts"));
                srcSound     = this.SelectSoundXML(x2[n].getElementsByTagName("sounds"));
				
	            itemsFletxes[num] 		= new PFItemFletxes(	"",
																"child",
																x[i].attributes.getNamedItem("id").nodeValue,
																srcSound,
																folder,
																x2[n].attributes.getNamedItem("id").nodeValue,
																"right",
																false,
																0,
																textItem,
																x2[n].attributes.getNamedItem("rgb").nodeValue);
	            
	            num++;
				if(x[i].attributes.getNamedItem("id").nodeValue != "123456789"){
					numRelations++;
				}
	           	
			}
			if(x[i].attributes.getNamedItem("id").nodeValue != "123456789"){
				PFItemFletxes.prototype	= new PFItem(			x[i].attributes.getNamedItem("src").nodeValue,
																x[i].attributes.getNamedItem("x").nodeValue,
																x[i].attributes.getNamedItem("y").nodeValue,
																x[i].attributes.getNamedItem("scale").nodeValue,
																x[i].attributes.getNamedItem("rotation").nodeValue,
																folder);

                var textItem = this.getText2(x[i].getElementsByTagName("texts"));
                srcSound     = this.SelectSoundXML(x[i].getElementsByTagName("sounds"));
															
				itemsFletxes[num] 		= new PFItemFletxes(	relations,
																"parent",
																x[i].attributes.getNamedItem("id").nodeValue,
																srcSound,
																folder,
																x[i].attributes.getNamedItem("id").nodeValue,
																"left",
																false,
																0,
																textItem,
																x[i].attributes.getNamedItem("rgb").nodeValue);
				
				num++;
			}
		}
		
		for(i=0;i<num;i++){
			itemsFletxes[i].setNumRelations(numRelations);	
		}
		return itemsFletxes;
	}	
	
	//=====================================================
	// LOAD CUSTOM
	//=====================================================					
	PFXMLArrows.prototype.loadCustom = function(xmlDoc, folder){ }

	//=====================================================
	// HAS END GAME
	//=====================================================		
	PFXMLArrows.prototype.hasEndGame = function(){ return true; }

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/xml/PFXMLDifferences.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************
// File: PFXMLDifferences.js 
// PFXMLDifferences: Read Differences XML
//*****************************************************/

var PFXMLDifferences = PFXMLParser.extend(function(){
   	this.superc.call(this);	
   	this.orientation = null;
	this.wrongSound = null;
});

	//=====================================================
	// LOAD ITEMS
	//=====================================================				
	PFXMLDifferences.prototype.loadItems = function(xmlDoc,folder){			
		var itemsDifferences = new Array();
		this.orientation	= xmlDoc.getElementsByTagName("orientation")[0].attributes.getNamedItem("value").nodeValue;
		var x				= xmlDoc.getElementsByTagName("image");
		
		for  (i = 1; i < x.length+1; i++){				
			PFBackgroundDifferences.prototype	= new PFItem(x[i-1].attributes.getNamedItem("src").nodeValue,"","","","",folder);				
			itemsDifferences[i] 	= new PFBackgroundDifferences(	x[i-1].attributes.getNamedItem("id").nodeValue,
																	"",
																	"",
																	x[i-1].attributes.getNamedItem("scale").nodeValue,
																	x[i-1].attributes.getNamedItem("rgb").nodeValue);
		}
		x = xmlDoc.getElementsByTagName("item");
		
		

		for  (i = 3; i < x.length+3; i++){
			var srcSound = this.SelectSoundXML(x[i-3].getElementsByTagName("sounds"));
		
			PFItemExplore.prototype = new PFItem(	x[i-3].attributes.getNamedItem("src").nodeValue,
													x[i-3].attributes.getNamedItem("x").nodeValue,
													x[i-3].attributes.getNamedItem("y").nodeValue,
													x[i-3].attributes.getNamedItem("scale").nodeValue,
													x[i-3].attributes.getNamedItem("rotation").nodeValue,
													folder);
												
			itemsDifferences.push	( new PFItemExplore (	"",
															"",
															"", 
															srcSound,
															folder,
															"",
															""));
		}
		
		
		
		x					= this.SelectSoundXML(xmlDoc.getElementsByTagName("wrongSounds"));
		this.wrongSound		= "./"+GAME_FOLDER+"/"+folder+"/sounds/"+x;		
		
		return itemsDifferences;
	}	
	
	//=====================================================
	// LOAD CUSTOM
	//=====================================================					
	PFXMLDifferences.prototype.loadCustom = function(xmlDoc, folder){ }

	//=====================================================
	// HAS END GAME
	//=====================================================		
	PFXMLDifferences.prototype.hasEndGame = function(){ return true; }

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/xml/PFXMLDrag.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************
// File: PFXMLDrag.js 
// PFXMLDrag: Read Drag XML
//*****************************************************/

var PFXMLDrag = PFXMLParser.extend(function(){
   	this.superc.call(this);	
});

	//=====================================================
	// LOAD ITEMS
	//=====================================================				
	PFXMLDrag.prototype.loadItems = function(xmlDoc,folder){		
		x = xmlDoc.getElementsByTagName("item");	
		var itemsDrag = new Array();
		for  (i = 0; i < x.length; i++){
			var srcSound = this.SelectSoundXML(x[i].getElementsByTagName("sounds"));
				
			PFItemDrag.prototype = new PFItem(	x[i].attributes.getNamedItem("src").nodeValue,
												x[i].attributes.getNamedItem("x").nodeValue,
												x[i].attributes.getNamedItem("y").nodeValue,
												x[i].attributes.getNamedItem("scale").nodeValue,
												x[i].attributes.getNamedItem("rotation").nodeValue,folder);
			
			//var textItem = this.SelectTextXML(x[i].getElementsByTagName("texts"));    //OLD TEXT SYSTEM
            var textItem = this.getText2(x[i].getElementsByTagName("texts"));

			itemsDrag.push (new PFItemDrag(		x[i].attributes.getNamedItem("scaleActive").nodeValue,
												x[i].attributes.getNamedItem("action").nodeValue,
												x[i].attributes.getNamedItem("actionLoops").nodeValue,
												x[i].attributes.getNamedItem("run").nodeValue,srcSound,folder,
												textItem,
												x[i].attributes.getNamedItem("rgb").nodeValue));
		}			
		return itemsDrag;
	}	
	
	//=====================================================
	// OTHERS
	//=====================================================					
	PFXMLDrag.prototype.loadCustom = function(xmlDoc, folder){ }
	PFXMLDrag.prototype.hasEndGame = function(){ return false; }

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/xml/PFXMLDragContainers.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************
// File: PFXMLDragContainers.js 
// PFXMLDragContainers: Read Drag Containers XML
//*****************************************************/

var PFXMLDragContainers = PFXMLParser.extend(function(){
   	this.superc.call(this);	
	//=====================================================
	// VARIABLES
	//=====================================================	
	this.itemsPare = null;   	
	this.itemsDiscard = 0;
	this.disappear = true;
});

	//=====================================================
	// LOAD ITEMS
	//=====================================================				
	PFXMLDragContainers.prototype.loadItems = function(xmlDoc,folder){		
		x = xmlDoc.getElementsByTagName("item");	
		var itemsDrag = new Array();
		for  (i = 0; i < x.length; i++){
			var srcSound = this.SelectSoundXML(x[i].getElementsByTagName("sounds"));
				
			PFItemFastDrag.prototype = new PFItem(	x[i].attributes.getNamedItem("src").nodeValue,
													x[i].attributes.getNamedItem("x").nodeValue,
													x[i].attributes.getNamedItem("y").nodeValue,
													x[i].attributes.getNamedItem("scale").nodeValue,
													x[i].attributes.getNamedItem("rotation").nodeValue,folder);

			//var textItem    = this.SelectTextXML(x[i].getElementsByTagName("texts"));     //OLD TEXT SYSTEM
            var textItem = this.getText2(x[i].getElementsByTagName("texts"));

            var soundItem   = this.SelectSoundXML(x[i].getElementsByTagName("sounds"));

			itemsDrag.push( new PFItemFastDrag(x[i].attributes.getNamedItem("parent").nodeValue,soundItem,folder,
												textItem,
												x[i].attributes.getNamedItem("rgb").nodeValue,
												x[i].attributes.getNamedItem("kind").nodeValue));	
		}			
		
		x = xmlDoc.getElementsByTagName("parent");
		this.itemsPare = new Array();			
		for  (i = 0; i < x.length; i++){
			PFItemFastDragParent.prototype = new PFItem(x[i].attributes.getNamedItem("src").nodeValue,
														x[i].attributes.getNamedItem("x").nodeValue,
														x[i].attributes.getNamedItem("y").nodeValue,
														x[i].attributes.getNamedItem("scale").nodeValue,
														x[i].attributes.getNamedItem("rotation").nodeValue,folder);
			
			//var textItem    = this.SelectTextXML(x[i].getElementsByTagName("texts"));     //OLD TEXT SYSTEM
            var textItem    = this.SelectTextXML(x[i].getElementsByTagName("texts"));       //NEW TEXT SYSTEM
            var soundItem   = this.SelectSoundXML(x[i].getElementsByTagName("sounds"));
			
			this.itemsPare.push(new PFItemFastDragParent(x[i].attributes.getNamedItem("id").nodeValue,soundItem,folder,
															textItem,
															x[i].attributes.getNamedItem("rgb").nodeValue,
															x[i].attributes.getNamedItem("kind").nodeValue));	
			if(x[i].attributes.getNamedItem("id").nodeValue == "123456789"){
				var thisChildren = x[i].getElementsByTagName("item");
				this.itemsDiscard = thisChildren.length;
			}
		}			
					
		return itemsDrag;
	}	
	
	//=====================================================
	// OTHERS
	//=====================================================					
	PFXMLDragContainers.prototype.loadCustom = function(xmlDoc, folder){

		var value = true;

		if (xmlDoc.getElementsByTagName("disappear").length > 0)
			value = xmlDoc.getElementsByTagName("disappear")[0].attributes.getNamedItem("active").nodeValue;

		this.disappear = (value == "true") ? true : false;
	}

	PFXMLDragContainers.prototype.hasEnd	 = function(){ return true; }

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/xml/PFXMLFindMe.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************
// File: PFXMLFindMe.js 
// PFXMLFindMe: Read FindeMe XML
//*****************************************************/

var PFXMLFindMe = PFXMLParser.extend(function(){
   	this.superc.call(this);	
	//=====================================================
	// VARIABLES
	//=====================================================	
	this.level 			= null;
	this.numLostItems 	= null;
});

	//=====================================================
	// LOAD ITEMS
	//=====================================================				
	PFXMLFindMe.prototype.loadItems = function(xmlDoc,folder){			
		x = xmlDoc.getElementsByTagName("item");
		itemFindMe = new Array();		
		
		for  (var i = 0; i < x.length; i++){
			var srcSound = this.SelectSoundXML(x[i].getElementsByTagName("sounds"));
			//var textItem = this.SelectTextXML(x[i].getElementsByTagName("texts"));    //OLD TEXT SYSTEM
            var textItem = this.getText2(x[i].getElementsByTagName("texts"));
			PFItemFindMe.prototype = new PFItem(x[i].attributes.getNamedItem("src").nodeValue,"","",450,"",folder);	//Constructor amb els atributs del XML (1 element)
			itemFindMe. push(new PFItemFindMe("","","","",folder,x[i].attributes.getNamedItem("id").nodeValue,1,0,0,
													textItem,
													x[i].attributes.getNamedItem("rgb").nodeValue));
		
		}				
		return itemFindMe;
	}	
	
	//=====================================================
	// LOAD CUSTOM
	//=====================================================		
	PFXMLFindMe.prototype.loadCustom = function(xmlIni,folder){  				
		var lev = xmlIni.getElementsByTagName("level");
		this.level = lev[0].attributes.getNamedItem('id').nodeValue;
		
		var x2 = xmlIni.getElementsByTagName("counter");
		this.numLostItems = x2[0].attributes.getNamedItem('n').nodeValue;
		
		if (this.numLostItems == "0")
			this.numLostItems = "1";		
	}
	
	//=====================================================
	// OTHER
	//=====================================================		
	PFXMLFindMe.prototype.hasEndGame = function()				{ return true; }

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/xml/PFXMLInteractiveImages.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************
// File: PFXMLInteractiveImages.js 
// PFXMLInteractiveImages: Read Interactive XML
//*****************************************************/

var PFXMLInteractiveImages = PFXMLParser.extend(function(){
   	this.superc.call(this);	
});

	//=====================================================
	// LOAD ITEMS
	//=====================================================				
	PFXMLInteractiveImages.prototype.loadItems = function(xmlDoc,folder){		
		var itemsInteractiveImages = new Array();
		var num	= 0;
		var x2;
		x 		= xmlDoc.getElementsByTagName("parent");			
		for  (i = 0; i < x.length; i++){				
			PFItemInteractiveImages.prototype = new PFItem(x[i].attributes.getNamedItem("src").nodeValue,
																	x[i].attributes.getNamedItem("x").nodeValue,
																	x[i].attributes.getNamedItem("y").nodeValue,
																	x[i].attributes.getNamedItem("scale").nodeValue,
																	x[i].attributes.getNamedItem("rotation").nodeValue,
																	folder);
			var srcText="";	
			var srcSound = "";				
			if(typeof(x[i].getElementsByTagName("item")) != 'undefined'){
				x2 = x[i].getElementsByTagName("item");
					
				var relations = new Array(x[i].getElementsByTagName("item").length);
					
				for(n=0;n<relations.length;n++){						
					var srcSound	= this.SelectSoundXML(x2[n].getElementsByTagName("sounds"));
                    var srcText     = this.getText2(x2[n].getElementsByTagName("texts"));
					var srcDetail	= "";
					if(typeof(x2[n].attributes.getNamedItem("src")) != 'undefined'){						
						srcDetail = x2[n].attributes.getNamedItem("src").nodeValue;								
					}					
				}								
			}
			itemsInteractiveImages[i] = new PFItemInteractiveImages (srcText,srcDetail,srcSound,folder);
		}			
		return itemsInteractiveImages;
	}	
		
	//=====================================================
	// LOAD CUSTOM
	//=====================================================					
	PFXMLInteractiveImages.prototype.loadCustom = function(xmlDoc, folder){ }

	//=====================================================
	// HAS END GAME
	//=====================================================		
	PFXMLInteractiveImages.prototype.hasEndGame = function(){ return false; }

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/xml/PFXMLListenDrag.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************
// File: PFXMLListenDrag.js 
// PFXMLListenDrag: Read ListenDrag XML
//*****************************************************/

var PFXMLListenDrag = PFXMLParser.extend(function(){
   	this.superc.call(this);	
});

	//=====================================================
	// LOAD ITEMS
	//=====================================================				
	PFXMLListenDrag.prototype.loadItems = function(xmlDoc,folder){		
		x 				= xmlDoc.getElementsByTagName("item");	
		var itemsDrag 	= new Array();
		
		for  (i = 0; i < x.length; i++){
			var srcSound = this.SelectSoundXML(x[i].getElementsByTagName("sounds"));
				
			PFItemListenDrag.prototype = new PFItem(x[i].attributes.getNamedItem("src").nodeValue,
													x[i].attributes.getNamedItem("x").nodeValue,
													x[i].attributes.getNamedItem("y").nodeValue,
													x[i].attributes.getNamedItem("scale").nodeValue,
													x[i].attributes.getNamedItem("rotation").nodeValue,folder);
			
			//var textItem = this.SelectTextXML(x[i].getElementsByTagName("texts"));    //OLD TEXT SYSTEM
            var textItem = this.getText2(x[i].getElementsByTagName("texts"));

			itemsDrag.push(new PFItemListenDrag(	x[i].attributes.getNamedItem("scaleActive").nodeValue,
													x[i].attributes.getNamedItem("action").nodeValue,
													x[i].attributes.getNamedItem("actionLoops").nodeValue,
													x[i].attributes.getNamedItem("run").nodeValue,srcSound,folder,0,
													textItem,
													x[i].attributes.getNamedItem("rgb").nodeValue));	
		}			
		return itemsDrag;
	}	
	
	//=====================================================
	// OTHERS
	//=====================================================
	PFXMLListenDrag.prototype.loadCustom = function(xmlDoc, folder){ }
	PFXMLListenDrag.prototype.hasEndGame = function(){ return true; }


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/xml/PFXMLListenTouch.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************
// File: PFXMLListenTouch.js 
// PFXMLListenTouch: Read ListenTouch XML
//*****************************************************/

var PFXMLListenTouch = PFXMLParser.extend(function(){
   	this.superc.call(this);	
});

	//=====================================================
	// LOAD ITEMS
	//=====================================================				
	PFXMLListenTouch.prototype.loadItems = function(xmlDoc,folder){		
		x = xmlDoc.getElementsByTagName("item");	
		var itemsExplore = new Array();
		for  (i = 0; i < x.length; i++){
			var srcSound = this.SelectSoundXML(x[i].getElementsByTagName("sounds"));
				
			PFItemTouchListen.prototype = new PFItem(	x[i].attributes.getNamedItem("src").nodeValue,
														x[i].attributes.getNamedItem("x").nodeValue,
														x[i].attributes.getNamedItem("y").nodeValue,
														x[i].attributes.getNamedItem("scale").nodeValue,
														x[i].attributes.getNamedItem("rotation").nodeValue,folder);
														
			//var textItem = this.SelectTextXML(x[i].getElementsByTagName("texts"));    //OLD TEXT SYSTEM
            var textItem = this.getText2(x[i].getElementsByTagName("texts"));

			itemsExplore.push (new PFItemTouchListen (	x[i].attributes.getNamedItem("action").nodeValue,
														x[i].attributes.getNamedItem("actionLoops").nodeValue,
														x[i].attributes.getNamedItem("run").nodeValue, srcSound, folder,
														textItem,
														x[i].attributes.getNamedItem("rgb").nodeValue));	
		}
		return itemsExplore;
	}	
		

	//=====================================================
	// LOAD CUSTOM
	//=====================================================					
	PFXMLListenTouch.prototype.loadCustom = function(xmlDoc, folder){ }

	//=====================================================
	// HAS END GAME
	//=====================================================		
	PFXMLListenTouch.prototype.hasEndGame = function(){ return true; }

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/xml/PFXMLTouch2.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************
// File: PFXMLTouch2.js 
// PFXMLTouch2: Read Touch2 XML
//*****************************************************/

var PFXMLTouch2 = PFXMLParser.extend(function(){
   	this.superc.call(this);	
	this.wrongSound = null;
	this.tryAgainSound = null;
	this.wrongMethod = null;
});

	//=====================================================
	// LOAD ITEMS
	//=====================================================				
	PFXMLTouch2.prototype.loadItems = function(xmlDoc,folder){		
		x = xmlDoc.getElementsByTagName("item");	
		var itemsExplore = new Array();
		for  (i = 0; i < x.length; i++){
			var srcSound = this.SelectSoundXML(x[i].getElementsByTagName("sounds"));
				
			PFItemTouchListen.prototype = new PFItem(	x[i].attributes.getNamedItem("src").nodeValue,
														x[i].attributes.getNamedItem("x").nodeValue,
														x[i].attributes.getNamedItem("y").nodeValue,
														x[i].attributes.getNamedItem("scale").nodeValue,
														x[i].attributes.getNamedItem("rotation").nodeValue,folder);
														
			//var textItem = this.SelectTextXML(x[i].getElementsByTagName("texts"));    //OLD TEXT SYSTEM
            var textItem = this.getText2(x[i].getElementsByTagName("texts"));

			itemsExplore.push (new PFItemTouchListen (	x[i].attributes.getNamedItem("action").nodeValue,
														x[i].attributes.getNamedItem("actionLoops").nodeValue,
														x[i].attributes.getNamedItem("run").nodeValue, srcSound, folder,
														textItem,
														x[i].attributes.getNamedItem("rgb").nodeValue));	
		}
		
		x						= this.SelectSoundXML(xmlDoc.getElementsByTagName("wrongSounds"));
		this.wrongSound			= "./"+GAME_FOLDER+"/"+folder+"/sounds/"+x;
		
		x						= this.SelectSoundXML(xmlDoc.getElementsByTagName("tryAgainSounds"));
		this.tryAgainSound		= "./"+GAME_FOLDER+"/"+folder+"/sounds/"+x;
		
		this.wrongMethod		= xmlDoc.getElementsByTagName("wrongMethod")[0].attributes.getNamedItem("id").nodeValue;
		
		return itemsExplore;
	}	
		

	//=====================================================
	// LOAD CUSTOM
	//=====================================================					
	PFXMLTouch2.prototype.loadCustom = function(xmlDoc, folder){ }

	//=====================================================
	// HAS END GAME
	//=====================================================		
	PFXMLTouch2.prototype.hasEndGame = function(){ return true; }

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/xml/PFXMLPaint.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************
// File: PFXMLPaint.js 
// PFXMLPaint: Read Paint XML
//*****************************************************/

var PFXMLPaint = PFXMLParser.extend(function(){
   	this.superc.call(this);	
	//=====================================================
	// VARIABLES
	//=====================================================	
	this.foreground = null;
	this.fScaleType = "noscale";
});

	//=====================================================
	// LOAD ITEMS
	//=====================================================				
	PFXMLPaint.prototype.loadItems = function(xmlDoc,folder){			
		return null;
	}	
	
	//=====================================================
	// LOAD CUSTOM
	//=====================================================					
	PFXMLPaint.prototype.loadCustom = function(xmlIni, folder){
		xmlDoc = xmlIni.getElementsByTagName("page")[0];
	
		x = xmlDoc.getElementsByTagName("foreground");
		if(typeof(x[0]) != 'undefined' && x[0] != null && x[0] != ''){			this.foreground = x[0].attributes.getNamedItem("src").nodeValue;		
			this.fScaleType = x[0].attributes.getNamedItem("scale").nodeValue;
		}else{
			this.foreground = "null";
			this.fScaleType = "noscale";
		}
	}
	
	//=====================================================
	// HAS END GAME
	//=====================================================		
	PFXMLPaint.prototype.hasEndGame = function(){ return false; }

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/xml/PFXMLPaint2.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************
// File: PFXMLTouch2.js 
// PFXMLTouch2: Read Touch2 XML
//*****************************************************/

var PFXMLPaint2 = PFXMLParser.extend(function(){
   	this.superc.call(this);	
	this.wrongSound = null;
	this.tryAgainSound = null;
	this.wrongMethod = null;
});

	//=====================================================
	// LOAD ITEMS
	//=====================================================				
	PFXMLPaint2.prototype.loadItems = function(xmlDoc,folder){		
		x = xmlDoc.getElementsByTagName("item");	
		var itemsExplore = new Array();
		for  (i = 0; i < x.length; i++){
			var srcSound = this.SelectSoundXML(x[i].getElementsByTagName("sounds"));
			var srcWrongColorSound = this.SelectSoundXML(x[i].getElementsByTagName("soundsWrongColor"));
				
			PFItemPaint2.prototype = new PFItem(		x[i].attributes.getNamedItem("src").nodeValue,
														x[i].attributes.getNamedItem("x").nodeValue,
														x[i].attributes.getNamedItem("y").nodeValue,
														x[i].attributes.getNamedItem("scale").nodeValue,
														x[i].attributes.getNamedItem("rotation").nodeValue,folder);
														
			//var textItem = this.SelectTextXML(x[i].getElementsByTagName("texts"));    //OLD TEXT SYSTEM
            var textItem = this.getText2(x[i].getElementsByTagName("texts"));

			itemsExplore.push (new PFItemPaint2 (	x[i].attributes.getNamedItem("action").nodeValue,
														x[i].attributes.getNamedItem("actionLoops").nodeValue,
														x[i].attributes.getNamedItem("run").nodeValue, srcSound, folder,
														textItem,
														x[i].attributes.getNamedItem("rgb").nodeValue,srcWrongColorSound));	
		}
		
		x						= this.SelectSoundXML(xmlDoc.getElementsByTagName("wrongSounds"));
		this.wrongSound			= "./"+GAME_FOLDER+"/"+folder+"/sounds/"+x;
		
		return itemsExplore;
	}	
		

	//=====================================================
	// LOAD CUSTOM
	//=====================================================					
	PFXMLPaint2.prototype.loadCustom = function(xmlDoc, folder){ }

	//=====================================================
	// HAS END GAME
	//=====================================================		
	PFXMLPaint2.prototype.hasEndGame = function(){ return true; }

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/xml/PFXMLPuzzle.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************
// File: PFXMLPuzzle.js 
// PFXMLPuzzle: Read Puzzle XML
//*****************************************************/

var PFXMLPuzzle = PFXMLParser.extend(function(){
   	this.superc.call(this);	
});

	//=====================================================
	// LOAD ITEMS
	//=====================================================				
	PFXMLPuzzle.prototype.loadItems = function(xmlDoc,folder){			
		x = xmlDoc.getElementsByTagName("item");
		itemsPuzzle = new Array();		
		
		for  (var i = 0; i < x.length; i++){
			var srcSound = this.SelectSoundXML(x[i].getElementsByTagName("sounds"));

            var active = "true";
            if(x[i].attributes.getNamedItem("active") != null)
                active = x[i].attributes.getNamedItem("active").nodeValue;

				PFItemPuzzle.prototype = new PFItem(x[i].attributes.getNamedItem("src").nodeValue,
													x[i].attributes.getNamedItem("x").nodeValue,
													x[i].attributes.getNamedItem("y").nodeValue,
													x[i].attributes.getNamedItem("scale").nodeValue,
													x[i].attributes.getNamedItem("rotation").nodeValue,folder);


                		//var textItem = this.SelectTextXML(x[i].getElementsByTagName("texts"));    //OLD TEXT SYSTEM
                var textItem = this.getText2(x[i].getElementsByTagName("texts"));

                itemsPuzzle.push( new PFItemPuzzle(	x[i].attributes.getNamedItem("scaleActive").nodeValue,
													x[i].attributes.getNamedItem("action").nodeValue,
													x[i].attributes.getNamedItem("actionLoops").nodeValue,
													x[i].attributes.getNamedItem("run").nodeValue,
													x[i].attributes.getNamedItem("sound").nodeValue,
													x[i].attributes.getNamedItem("finalX").nodeValue,
													x[i].attributes.getNamedItem("finalY").nodeValue,folder,
													textItem,
													x[i].attributes.getNamedItem("rgb").nodeValue,
                                                    active));
		}				
		return itemsPuzzle;
	}	
					
	//=====================================================
	// OTHER FUNCTIONS
	//=====================================================					
	PFXMLPuzzle.prototype.loadCustom = function(xmlDoc, folder){	}	
	PFXMLPuzzle.prototype.hasEndGame = function(){ return true; }

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/xml/PFXMLQuiz.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************
// File: PFXMLQuiz.js 
// PFXMLQuiz: Read Quizz XML
//*****************************************************/

var PFXMLQuiz = PFXMLParser.extend(function(){
   	this.superc.call(this);	
});

	//=====================================================
	// LOAD ITEMS
	//=====================================================				
	PFXMLQuiz.prototype.loadItems = function(xmlDoc,folder){		
		x = xmlDoc.getElementsByTagName("parent");	
		var itemsQuiz = new Array();
		for  (i = 0; i < x.length; i++){

			var img = x[i].attributes.getNamedItem("src").nodeValue;				
			var rgb = x[i].attributes.getNamedItem("rgb").nodeValue;				
			
			//var question = this.SelectTextXML(x[i].getElementsByTagName("texts"));	//OLD TEXT SYSTEM
            var question = this.getText2(x[i].getElementsByTagName("texts"));

			var sound 	 = this.SelectSoundXML(x[i].getElementsByTagName("sounds"));

			var tagAnswer = x[i].getElementsByTagName("item");				
			var answers = new Array(tagAnswer.length);				
			for (j=0; j<tagAnswer.length;j++){		
				//var answer = this.SelectTextXML(tagAnswer[j].getElementsByTagName("texts"));
                var answer = this.getText2(tagAnswer[j].getElementsByTagName("texts"));
				answers[j] = new PFItemQuizAnswer (answer,
					tagAnswer[j].getElementsByTagName("isCorrect")[0].childNodes[0].nodeValue,
					tagAnswer[j].attributes.getNamedItem("src").nodeValue
				);					
			}					
			itemsQuiz.push (new PFItemQuizQuestion(question, img, sound, answers,rgb) );
		}				
		return itemsQuiz;
	}	

	
	//=====================================================
	// LOAD CUSTOM
	//=====================================================					
	PFXMLQuiz.prototype.loadCustom = function(xmlDoc, folder){ }

	//=====================================================
	// HAS END GAME
	//=====================================================		
	PFXMLQuiz.prototype.hasEndGame = function(){ return true; }

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Merging js: games/xml/PFXMLQuizText.js begins */
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


//*****************************************************
// File: PFXMLQuizText.js 
// PFXMLQuizText: Read QuizzText XML
//*****************************************************/

var PFXMLQuizText = PFXMLParser.extend(function(){
   	this.superc.call(this);

	this.answerPositionX = null;
	this.answerPositionY = null;

});

	//=====================================================
	// LOAD ITEMS
	//=====================================================				
	PFXMLQuizText.prototype.loadItems = function(xmlDoc,folder){

		PFDebug("QUIZ TEXT LOADING")

		x = xmlDoc.getElementsByTagName("parent");			
		var itemsQuizText = new Array();
		for  (i = 0; i < x.length; i++){					
			var states = new Array(3);
			//---------------
			// IMAGE
			//---------------
			states[0] = new PFItemQuizGapsQuestionState(	"image",
															x[i].attributes.getNamedItem("src").nodeValue,
															x[i].attributes.getNamedItem("x").nodeValue,
															x[i].attributes.getNamedItem("y").nodeValue);			
			//---------------
			// SOUNDº
			//---------------
			var soundState 	 = this.SelectSoundXML(x[i].getElementsByTagName("sounds"));
			states[1] = new PFItemQuizGapsQuestionState(	"sound",
															soundState,
															x[i].attributes.getNamedItem("x").nodeValue,
															x[i].attributes.getNamedItem("y").nodeValue);
			//---------------
			// TEXT
			//---------------
			//var textState = this.SelectTextXML(x[i].getElementsByTagName("texts"));   //OLD TEXT SYSTEM
            var textItem = this.getText2(x[i].getElementsByTagName("texts"));
			states[2] = new PFItemQuizGapsQuestionState(	"text",
                                                            textItem,
															x[i].attributes.getNamedItem("x").nodeValue,
															x[i].attributes.getNamedItem("y").nodeValue);
															
			var rgb = x[i].attributes.getNamedItem("rgb").nodeValue;	
							
			itemsQuizText.push(new PFItemQuizGapsQuestion (states, x[i].getElementsByTagName("item"),rgb));
		}				
		return itemsQuizText;
	}	
		
	//=====================================================
	// LOAD CUSTOM
	//=====================================================					
	PFXMLQuizText.prototype.loadCustom = function(xmlDoc, folder){

		xmlDoc = xmlIni.getElementsByTagName("page")[0];

		var answerXML = xmlDoc.getElementsByTagName("answer");

		if (answerXML.length > 0)
		{
			this.answerPositionX = answerXML[0].attributes.getNamedItem("x").nodeValue;
			this.answerPositionY = answerXML[0].attributes.getNamedItem("y").nodeValue;
		}
	}

	//=====================================================
	// HAS END GAME
	//=====================================================		
	PFXMLQuizText.prototype.hasEndGame = function(){ return true; }