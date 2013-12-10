package com.planetfactory.makerpf;

import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;

import org.andengine.engine.Engine;
import org.andengine.engine.camera.Camera;
import org.andengine.engine.options.EngineOptions;
import org.andengine.engine.options.ScreenOrientation;
import org.andengine.engine.options.WakeLockOptions;
import org.andengine.engine.options.resolutionpolicy.FillResolutionPolicy;
import org.andengine.entity.scene.Scene;
import org.andengine.ui.activity.LayoutGameActivity;

import android.util.SparseArray;

import com.flurry.android.FlurryAgent;
import com.planetfactory.makerpf.GameTypes.BaseGame;
import com.planetfactory.makerpf.GameTypes.GameSelector;
import com.planetfactory.makerpf.Layers.Main.Main;
import com.planetfactory.makerpf.Layers.Menu.Menu;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Utils.MPFSprite;

public class MainActivity extends LayoutGameActivity {

	// ===========================================================
	// CONSTANTS
	// ===========================================================
	public static final String	TAG 		= "MAKERPF"; 
	//public static final int		WIDTH = 1024;
	public static final int 	WIDTH 		= 1280;
	public static final int		HEIGHT 		= 768;
	public static final int		MARGIN_X	= (WIDTH - 1024)/2;
	 
	public static final boolean	FLURRY_ENABLED 	= true; 
	public static final String 	FLURRY_KEY 		= "JDB4S39QMG2XZDVHMCJ9";
 	
	// =========================================================== 
	// FIELDS
	// ===========================================================
	private Scene				mScene = new Scene();
	private Camera				mCamera;
	private ResourceManager		mResourceManager;
	
	public static MPFSprite		mLoadingSprite;
	
	/*
	 * Menu Layers
	 */
	public static Main			mMain;
	public static Menu			mMenu;
	
	/*
	 * Game Layers
	 */
	public static SparseArray<BaseGame> mGames = new SparseArray<BaseGame>();
	 
	public static boolean mIsCoverActive = true;
	public static boolean mIsMenuActive = true;

	// ===========================================================
	// ON CREATE ENGINE OPTIONS
	// ===========================================================
	@Override
	public EngineOptions onCreateEngineOptions() {
		mCamera = new Camera(0, 0, WIDTH, HEIGHT);
		
		//EngineOptions engineOptions = new EngineOptions(true,ScreenOrientation.LANDSCAPE_FIXED, new RatioResolutionPolicy(WIDTH, HEIGHT), mCamera);
		EngineOptions engineOptions = new EngineOptions(true,ScreenOrientation.LANDSCAPE_FIXED, new FillResolutionPolicy(), mCamera);

		engineOptions.getAudioOptions().setNeedsMusic(true);
		engineOptions.getAudioOptions().setNeedsSound(true);

		engineOptions.getTouchOptions().setNeedsMultiTouch(true);
		engineOptions.getTouchOptions().setTouchEventIntervalMilliseconds(10);
		
		/*
		 * TODO: Multisampling makes the jagged edges look nicer. This should be
		 * added to the options for improving performance
		 */
		engineOptions.getRenderOptions().getConfigChooserOptions().setRequestedMultiSampling(true);
		engineOptions.getRenderOptions().setDithering(true);
		
		engineOptions.setWakeLockOptions(WakeLockOptions.SCREEN_ON);
		return engineOptions;
	}
	
	// ==========================================================================
	// == ON CREATE ENGINE
	// ==========================================================================
	@Override
	public Engine onCreateEngine(EngineOptions pEngineOptions) {
		FixedStepMaxFPSEngine engine = new FixedStepMaxFPSEngine(pEngineOptions, 25);
		return engine;
	}

	// ===========================================================
	// ON CREATE RESOURCES
	// ===========================================================
	@Override public void onCreateResources( OnCreateResourcesCallback pOnCreateResourcesCallback)	throws IOException {
		mResourceManager 	= new ResourceManager(mEngine,this,mScene);
		mResourceManager.loadSounds();
		mResourceManager.loadFonts();
		mResourceManager.loadTextures();
		pOnCreateResourcesCallback.onCreateResourcesFinished(); 		
	} 

	// ===========================================================
	// ON CREATE SCENE  
	// ===========================================================
	@Override
	public void onCreateScene(OnCreateSceneCallback pOnCreateSceneCallback)	throws IOException {
		mLoadingSprite = new MPFSprite(WIDTH * 0.5f, HEIGHT * 0.5f, WIDTH, HEIGHT, mResourceManager.mLoadingTextureRegion, mEngine.getVertexBufferObjectManager());
		mLoadingSprite.setVisible(false);
		mLoadingSprite.setZIndex(100);
		mScene.attachChild(mLoadingSprite);
		
		mMain = new Main(mResourceManager);
		mMenu = new Menu(mResourceManager);

		mScene.setTouchAreaBindingOnActionDownEnabled(true);
		mScene.setOnAreaTouchTraversalFrontToBack();

		pOnCreateSceneCallback.onCreateSceneFinished(mScene);
	}

	// ===========================================================
	// ON POPULATE SCENE
	// ===========================================================
	@Override
	public void onPopulateScene(Scene pScene, OnPopulateSceneCallback pOnPopulateSceneCallback)	throws IOException {
		GameSelector.loadGame(GameSelector.MAIN_ID);		
		pOnPopulateSceneCallback.onPopulateSceneFinished();		
	}	
	
	
	@Override
	public void onBackPressed() {
		if(GameSelector.mCurrentID == GameSelector.MAIN_ID || GameSelector.mCurrentID == GameSelector.MENU_ID && !mIsCoverActive){
			super.onBackPressed();
			
		} else if(GameSelector.mCurrentID == GameSelector.MENU_ID && mIsCoverActive){
			GameSelector.mCurrentLayer.unloadResources();
			GameSelector.loadGame(GameSelector.MAIN_ID);
			
			
		} else if(mGames.indexOfKey(GameSelector.mCurrentID) >= 0 && mIsMenuActive){
			GameSelector.mCurrentLayer.unloadResources();
			GameSelector.loadGame(GameSelector.MENU_ID);
			
		} else if(mGames.indexOfKey(GameSelector.mCurrentID) >= 0 && !mIsMenuActive && mIsCoverActive){
			GameSelector.mCurrentLayer.unloadResources();
			GameSelector.loadGame(GameSelector.MAIN_ID);
			
		} else {
			super.onBackPressed();
		}
	}

	// ==========================================================================
	// == SHOW EXIT CONFIRM DIALOG
	// ==========================================================================
	public void showExitConfirmDialog() {
		/*runOnUiThread(new Runnable() {
			@Override
			public void run() {
				AlertDialog alertDialog = new AlertDialog.Builder(MWActivity.this).create();
				alertDialog.setTitle(getString(R.string.quitGame));
				alertDialog.setMessage(getString(R.string.areYouSure));
				alertDialog.setButton(AlertDialog.BUTTON_POSITIVE, getString(R.string.quit),
						new DialogInterface.OnClickListener() {
							@Override
							public void onClick(DialogInterface dialog,	int which) {
								STEActivity.this.finish();
							}
						});
				alertDialog.setButton(AlertDialog.BUTTON_NEGATIVE,getString(R.string.cancel),
						new DialogInterface.OnClickListener() {
							@Override
							public void onClick(DialogInterface dialog,int which) {
							}
						});

				alertDialog.setIcon(R.drawable.ic_launcher);
				alertDialog.show();
			}
		});*/
	}
	
	// ========================================================================== //
	// == IS INTERNET CONNECTION ACTIVE
	// ========================================================================== //
	public static boolean isOnline() {
        try {
            InetAddress.getByName("google.ca").isReachable(3);
            return true;
        } catch (UnknownHostException e){
            return false;
        } catch (IOException e){
            return false;
        }
    }

	@Override	protected int getLayoutID() 			{ return R.layout.activity_main;					}
	@Override	protected int getRenderSurfaceViewID() 	{ return R.id.gameRendersurfaceview;	}

	
	// ========================================================================== //
	// == FLURRY
	// ========================================================================== //
	@Override
	protected void onStart() {
		super.onStart();
		if(FLURRY_ENABLED)
			FlurryAgent.onStartSession(this, FLURRY_KEY);
	}
	
	@Override
	protected void onStop() {
		super.onStop();
		if(FLURRY_ENABLED)
			FlurryAgent.onEndSession(this);
	}
    
}
