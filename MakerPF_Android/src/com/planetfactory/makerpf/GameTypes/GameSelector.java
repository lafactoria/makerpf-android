package com.planetfactory.makerpf.GameTypes;

import android.content.Intent;
import android.util.Log;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.GameTypes.Arrows.Arrows;
import com.planetfactory.makerpf.GameTypes.Differences.Differences;
import com.planetfactory.makerpf.GameTypes.Drag.Drag;
import com.planetfactory.makerpf.GameTypes.DragToContainers.DragToContainers;
import com.planetfactory.makerpf.GameTypes.Explore.Explore;
import com.planetfactory.makerpf.GameTypes.FastDrag.FastDrag;
import com.planetfactory.makerpf.GameTypes.FindMe.FindMe;
import com.planetfactory.makerpf.GameTypes.InteractiveImages.InteractiveImages;
import com.planetfactory.makerpf.GameTypes.ListenAndDrag.ListenAndDrag;
import com.planetfactory.makerpf.GameTypes.ListenAndTouch.ListenAndTouch;
import com.planetfactory.makerpf.GameTypes.Memory.Memory;
import com.planetfactory.makerpf.GameTypes.Paint.DumbPaint;
import com.planetfactory.makerpf.GameTypes.Paint.PaintCanvas;
import com.planetfactory.makerpf.GameTypes.Puzzle.Puzzle;
import com.planetfactory.makerpf.GameTypes.Quiz.Quiz;
import com.planetfactory.makerpf.GameTypes.QuizText.QuizText;
import com.planetfactory.makerpf.Layers.BaseLayer;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Utils.XMLParser;

public class GameSelector {
	
	//========================================================
	// CONSTANTS
	//========================================================
	public static final int MAIN_ID = 12353266;
	public static final int MENU_ID = 22535124;
	
	//========================================================
	// VARIABLES
	//========================================================
	public static BaseLayer mCurrentLayer;
	public static int mCurrentID = MAIN_ID;
	
	private static ResourceManager mResourceManager;
	
	//========================================================
	// LOAD GAME
	//========================================================
	public static void loadGame(final int pId){
		if(pId == MAIN_ID){
			mCurrentLayer = MainActivity.mMain.loadResources();
			mCurrentID = MAIN_ID; 
						
		} else if(pId == MENU_ID){
			mCurrentLayer = MainActivity.mMenu.loadResources();
			mCurrentID = MENU_ID;
			
		} else if(MainActivity.mGames.indexOfKey(pId) >= 0){
			mResourceManager.setAssetPath(MainActivity.mGames.get(pId).getGamePath());
			
			Log.v(MainActivity.TAG,"Game ID:" + pId);
			Log.v(MainActivity.TAG,"Game type:" + MainActivity.mGames.get(pId).getType());
			
			boolean isPaint = false;
			if(MainActivity.mGames.get(pId).getType() != null && MainActivity.mGames.get(pId).getType().equals("paint")){
				isPaint = true;
			}
						
			if(MainActivity.mGames.get(pId) == null || isPaint){
				ResourceManager.mPaintDocument = XMLParser.parseXMLFile(mResourceManager.getActivity(), mResourceManager.getAssetPath()  + BaseGame.XML_GAME);
				mResourceManager.getActivity().startActivity(new Intent(mResourceManager.getActivity(), PaintCanvas.class));
			} else {
				mCurrentLayer = MainActivity.mGames.get(pId).loadResources();
				mCurrentID = pId;
			}
		}
	}
	
	public static BaseGame createGame(final String pGameType, final ResourceManager pResourceManager){
		
		mResourceManager = pResourceManager;
		BaseGame baseGame = null;
		
		if(pGameType.equals("quiztext")){
			baseGame = new QuizText(pResourceManager);
		} else if(pGameType.equals("arrows")){
			baseGame = new Arrows(pResourceManager);
		} else if(pGameType.equals("interactiveimages")){
			baseGame = new InteractiveImages(pResourceManager);
		} else if(pGameType.equals("fillthegaps")){
			baseGame = new Puzzle(pResourceManager);
		} else if(pGameType.equals("logica")){
			baseGame = new Puzzle(pResourceManager);
		} else if(pGameType.equals("dragtocontainers")){
			baseGame = new DragToContainers(pResourceManager);
		} else if(pGameType.equals("paint")){
			baseGame = new DumbPaint(pResourceManager);
		} else if(pGameType.equals("findme")){
			baseGame = new FindMe(pResourceManager);
		} else if(pGameType.equals("puzzle")){
			baseGame = new Puzzle(pResourceManager);
		} else if(pGameType.equals("explore")){
			baseGame = new Explore(pResourceManager);
		} else if(pGameType.equals("memory")){
			baseGame = new Memory(pResourceManager);
		} else if(pGameType.equals("drag")){
			baseGame = new Drag(pResourceManager);
		} else if(pGameType.equals("listenandtouch")){
			baseGame = new ListenAndTouch(pResourceManager);
		} else if(pGameType.equals("differences")){
			baseGame = new Differences(pResourceManager);
		} else if(pGameType.equals("listenanddrag")){
			baseGame = new ListenAndDrag(pResourceManager);
		} else if(pGameType.equals("fastdrag")){
			baseGame = new FastDrag(pResourceManager);
		} else if(pGameType.equals("quiz")){
			baseGame = new Quiz(pResourceManager);
		}
		
		return baseGame;
	}
}
