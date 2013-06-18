package com.planetfactory.makerpf.Resources;

import java.io.IOException;
import java.util.HashMap;

import org.andengine.audio.music.Music;
import org.andengine.audio.music.MusicFactory;
import org.andengine.audio.sound.Sound;
import org.andengine.audio.sound.SoundFactory;
import org.andengine.engine.Engine;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.util.Log;

import com.planetfactory.makerpf.MainActivity;


@SuppressLint("UseSparseArrays")
public class SoundManager {

	// ===========================================================
	// CONSTANTS
	// ===========================================================
	public static final String BOTO = "sounds/boto.mp3";
	public static final String OK = "sounds/ok.mp3";
	public static final String PLAY = "sounds/play.mp3";
	
	// ===========================================================
	// FIELDS
	// ===========================================================
	private Activity mActivity;
	private Engine mEngine;
	
	private HashMap<String, Sound> mSounds;
	private HashMap<String, Music> mLongSounds;
	
	private boolean mAreSoundsFXEnabled = true;
		
	// ===========================================================
	// CONSTRUCTOR
	// ===========================================================
	public SoundManager(final Activity pActivity, final Engine pEngine){
		this.mActivity = pActivity;
		this.mEngine = pEngine;
		
		mSounds = new HashMap<String, Sound>();	
		mLongSounds = new HashMap<String, Music>();
	}
	
	// ===========================================================
	// LOAD DEFAULT SOUNDS
	// ===========================================================
	public void loadDefaultSounds(){
		Log.v(MainActivity.TAG,"LOADING DEFAULT SOUNDS");
		try {
				mSounds.put(BOTO, SoundFactory.createSoundFromAsset(mEngine.getSoundManager(), mActivity, BOTO));
				mSounds.put(OK, SoundFactory.createSoundFromAsset(mEngine.getSoundManager(), mActivity, OK));
				mSounds.put(PLAY, SoundFactory.createSoundFromAsset(mEngine.getSoundManager(), mActivity, PLAY));
		} catch (IllegalStateException e) {
			Log.e(MainActivity.TAG, e.getMessage());
			e.printStackTrace();
		} catch (IOException e) {
			Log.e(MainActivity.TAG, e.getMessage());
			e.printStackTrace();
		}
		
	}
	
	// ===========================================================
	// LOAD SOUND
	// ===========================================================
	public Sound loadSound(final String pAssetPath){
		Log.v(MainActivity.TAG,"LOADING SOUND");
		try {
			if(!mSounds.containsKey(pAssetPath)){
				mSounds.put(pAssetPath, SoundFactory.createSoundFromAsset(mEngine.getSoundManager(), mActivity, pAssetPath));
			}
		} catch (IllegalStateException e) {
			Log.e(MainActivity.TAG, e.getMessage());
			e.printStackTrace();
		} catch (IOException e) {
			Log.e(MainActivity.TAG, e.getMessage());
			e.printStackTrace();
		}
		
		return mSounds.get(pAssetPath);
	}
	
 	// ===========================================================
	// LOAD LONG SOUND
	// ===========================================================
	public Music loadLongSound(final String pAssetPath){
		Log.v(MainActivity.TAG,"LOADING SOUND");
		try {
			if(!mLongSounds.containsKey(pAssetPath)){
				mLongSounds.put(pAssetPath, MusicFactory.createMusicFromAsset(mEngine.getMusicManager(), mActivity, pAssetPath));
			}
		} catch (IllegalStateException e) {
			Log.e(MainActivity.TAG, e.getMessage());
			e.printStackTrace();
		} catch (IOException e) {
			Log.e(MainActivity.TAG, e.getMessage());
			e.printStackTrace();
		}
		
		return mLongSounds.get(pAssetPath);
	}
	
	// ===========================================================
	// SET SOUNDS ENABLED
	// ===========================================================
	public void setsoundsFXEnabled(boolean pEnabled)	{
		mAreSoundsFXEnabled = pEnabled;
	}
	
	// ===========================================================
	// GET SOUND FX
	// ===========================================================	
	public Sound getFX(final String pAssetPath){
		return mSounds.get(pAssetPath);
	}
	
	// ===========================================================
	// PLAY FX
	// ===========================================================	
	public void playFX(final String pAssetPath){
		if(mAreSoundsFXEnabled){
			mSounds.get(pAssetPath).play();
		}
	}
	
	// ===========================================================
	// PLAY FX
	// ===========================================================	
	public void playFX(final String pAssetPath, final float pVolumeLevel){
		if(mAreSoundsFXEnabled){
			mSounds.get(pAssetPath).setVolume(pVolumeLevel);
			mSounds.get(pAssetPath).play();
		}
	}
	
	// ===========================================================
	// PLAY FX
	// ===========================================================	
	public void playFX(final String pAssetPath, final float pVolumeLevel, final boolean pShouldLoop){
		if(mAreSoundsFXEnabled){
			mSounds.get(pAssetPath).setLoopCount(-1);
			mSounds.get(pAssetPath).setLooping(pShouldLoop);
			mSounds.get(pAssetPath).setVolume(pVolumeLevel);
			mSounds.get(pAssetPath).play();
		}
	}
	
	// ===========================================================
	// STOP FX
	// ===========================================================	
	public void stopFX(final String pAssetPath){
		if(mAreSoundsFXEnabled)
			mSounds.get(pAssetPath).stop();
	}
}