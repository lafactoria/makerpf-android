package com.planetfactory.makerpf.Resources;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import org.andengine.engine.Engine;
import org.andengine.entity.scene.Scene;
import org.andengine.opengl.font.Font;
import org.andengine.opengl.font.FontFactory;
import org.andengine.opengl.texture.PixelFormat;
import org.andengine.opengl.texture.TextureOptions;
import org.andengine.opengl.texture.atlas.bitmap.BitmapTextureAtlas;
import org.andengine.opengl.texture.atlas.bitmap.BitmapTextureAtlasTextureRegionFactory;
import org.andengine.opengl.texture.region.ITextureRegion;
import org.andengine.util.adt.color.Color;
import org.w3c.dom.Document;

import android.app.Activity;
import android.content.Context;
import android.content.res.AssetManager;
import android.graphics.BitmapFactory;
import android.graphics.Typeface;
import android.util.Log;

import com.planetfactory.makerpf.MainActivity;

public class ResourceManager {
	
	// ===========================================================
	// FIELDS
	// ===========================================================
	public static final int LANG_1 = 1;
	public static final int LANG_2 = 2;
	public static final int LANG_6 = 6;
	
	
	// ===========================================================
	// FIELDS
	// ===========================================================
	Engine 			mEngine;
	Activity 		mActivity;
	Scene			mScene;
	SoundManager 	mSoundManager;
	
	public static Font mFont;
	public static Font mLargeFont;
	
	public ITextureRegion mLoadingTextureRegion;
	
	private static String 	mAssetPath;
	private static int 	mLanguage = LANG_2;
	
	private BitmapFactory.Options mBitmapOptions = new BitmapFactory.Options();
	private InputStream mInputStream;
	
	public static Document mPaintDocument;
	
	// ===========================================================
	// CONSTRUCTOR
	// ===========================================================
	public ResourceManager(final Engine pEngine, final Activity pActivity,Scene pScene){
		mEngine 		= pEngine;
		mActivity 		= pActivity;
		mScene			= pScene;
		mSoundManager 	= new SoundManager(pActivity, pEngine);
		
		mBitmapOptions.inJustDecodeBounds = true;
	}
	
	// ===========================================================
	// LOAD SOUNDS
	// ===========================================================
	public void loadSounds(){
		mSoundManager.loadDefaultSounds();
	}
	
	// ===========================================================
	// GET 
	// ===========================================================
	public Activity getActivity() 			{ return mActivity; 	}
	public Scene	getScene()				{ return mScene;		}
	public SoundManager getSoundManager() 	{ return mSoundManager;	}
	public Engine	getEngine()				{ return mEngine;		}
	public static String	getAssetPath()			{ return mAssetPath;	}
	public static int		getLanguage()			{ return mLanguage;		}
	
	public void setLanguage(final int pLanguage){
		this.mLanguage = pLanguage;
	}
	
	public void setAssetPath(final String pAssetPath){
		this.mAssetPath = pAssetPath;
	}
	
	// ===========================================================
	// GET STRING FROM ASSET
	// ===========================================================
	public static String getStringFromAsset(Context ctx,String filename){
		try{
			AssetManager manager 	= ctx.getAssets();
			InputStream input		= manager.open(filename);
			InputStreamReader in 	= new InputStreamReader(input, "utf-8");
			StringBuffer xml 		= new StringBuffer();
			int c =0;
			while( (c = in.read()) != -1){
				xml.append((char)c);
			}
			in.close();
			return xml.toString();
		}catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}
	
	public void loadTextures(){
		final String texturePath = "images/loading.jpg";
		
		final BitmapTextureAtlas loadingTexture = createSizedTexture(texturePath);
		this.mLoadingTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(loadingTexture, mActivity, texturePath, 0, 0);	
	}
	
	public void loadFonts(){
		mFont = FontFactory.create(mEngine.getFontManager(), mEngine.getTextureManager(), 256, 256, PixelFormat.RGBA_8888, TextureOptions.BILINEAR, Typeface.SANS_SERIF, 28, true, Color.WHITE_ABGR_PACKED_INT);
		mFont.load();
		
		mLargeFont = FontFactory.create(mEngine.getFontManager(), mEngine.getTextureManager(), 400, 400, PixelFormat.RGBA_8888, TextureOptions.BILINEAR, Typeface.SANS_SERIF, 42, true, Color.WHITE_ABGR_PACKED_INT);
		mLargeFont.load();
	}
	
	// ===========================================================
	// CEATE SIZED TEXTURE
	// ===========================================================
	/**
	 * The createSizedTexture method pre-determines the size of the asset to be loaded
	 * and uses that size to create a texture in memory. This allows for loading of an
	 * undetermined number of varying sized textures without wasting memory.
	 * @param pAssetPath Defines the path to an image from the Android assets folder
	 * @return The texture created for the specified asset
	 */
	public BitmapTextureAtlas createSizedTexture(final String pAssetPath){
		try {
			this.mInputStream = this.mActivity.getAssets().open(pAssetPath);
			BitmapFactory.decodeStream(mInputStream, null, mBitmapOptions);
		} catch (IOException e) {
			Log.e(MainActivity.TAG, e.getMessage());
			e.printStackTrace();
		}
		
		final BitmapTextureAtlas texture = new BitmapTextureAtlas(getEngine().getTextureManager(), mBitmapOptions.outWidth, mBitmapOptions.outHeight, TextureOptions.BILINEAR);
		texture.load();
		
		return texture;
	}
	
	public BitmapTextureAtlas createSizedTexture(final String pAssetPath, final TextureOptions pTextureOptions){
		try {
			this.mInputStream = this.mActivity.getAssets().open(pAssetPath);
			BitmapFactory.decodeStream(mInputStream, null, mBitmapOptions);
		} catch (IOException e) {
			Log.e(MainActivity.TAG, e.getMessage());
			e.printStackTrace();
		}
		
		final BitmapTextureAtlas texture = new BitmapTextureAtlas(getEngine().getTextureManager(), mBitmapOptions.outWidth, mBitmapOptions.outHeight, pTextureOptions);
		texture.load();
		
		return texture;
	}
}
