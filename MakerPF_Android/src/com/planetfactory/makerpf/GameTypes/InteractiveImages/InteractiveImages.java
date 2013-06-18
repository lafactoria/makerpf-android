package com.planetfactory.makerpf.GameTypes.InteractiveImages;

import java.util.ArrayList;

import org.andengine.entity.primitive.Rectangle;
import org.andengine.input.touch.TouchEvent;
import org.andengine.opengl.texture.atlas.bitmap.BitmapTextureAtlasTextureRegionFactory;
import org.andengine.opengl.texture.region.ITextureRegion;

import android.util.Log;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.GameTypes.BaseGame;
import com.planetfactory.makerpf.GameTypes.Parent;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Utils.MPFSprite;

public class InteractiveImages extends BaseGame implements IPopupListener{
	
	private static final String POPUP_STRING = "bg_popup.png";
	private static final String POPUP_NEXT_ARROW = "bt_adelante.png";
	private static final String POPUP_PREVIOUS_ARROW = "bt_enrera.png";
	private static final String POPUP_EXIT = "bt_creditos_exit.png";
	
	private ITextureRegion mPopupTextureRegion;
	private ITextureRegion mPopupNextArrowTextureRegion;
	private ITextureRegion mPopupPreviousArrowTextureRegion;
	private ITextureRegion mPopupExitTextureRegion;
	
	private ArrayList<InteractivePopup> mPopups = new ArrayList<InteractivePopup>();
	
	private int mCurrentPopup;
	
	private Rectangle mBackground;
	
	public InteractiveImages(ResourceManager pResourceManager) {
		super(pResourceManager);
	}

	@Override
	public void onLoadResources() {
		super.onLoadResources();
	
		String texturePath = IMAGES_FOLDER + POPUP_STRING;
		this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
		mPopupTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);
		
		texturePath = IMAGES_FOLDER + POPUP_NEXT_ARROW;
		this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
		mPopupNextArrowTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);
		
		texturePath = IMAGES_FOLDER + POPUP_PREVIOUS_ARROW;
		this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
		mPopupPreviousArrowTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);
		
		texturePath = IMAGES_FOLDER + POPUP_EXIT;
		this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
		mPopupExitTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);
		
	}

	@Override
	public void onUnloadResources() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void onPopulate() {
		super.onPopulate();

		mBackground = new Rectangle(MainActivity.WIDTH * 0.5f, MainActivity.HEIGHT * 0.5f, MainActivity.WIDTH, MainActivity.HEIGHT, mResourceManager.getEngine().getVertexBufferObjectManager()){

			@Override
			protected void onManagedUpdate(float pSecondsElapsed) {
				if(mPopups != null && mPopups.size() > mCurrentPopup){
					final InteractivePopup popup = mPopups.get(mCurrentPopup);
					
					if(this.getAlpha() * 2 != popup.getAlpha()){
						this.setAlpha(popup.getAlpha() * 0.5f);
					}
				}
				
				super.onManagedUpdate(pSecondsElapsed);
			}
		};
		mBackground.setColor(0, 0, 0);
		mBackground.setAlpha(0);
		mBackground.setZIndex(2);
		this.attachChild(mBackground);
		
		int index = 0;
		
		// Attach parents
		for(int i = 0; i < mParents.size(); i++){
			final Parent parent = mParents.get(i);
			
			final InteractivePopup popup = new InteractivePopup(parent, mPopupTextureRegion, mPopupNextArrowTextureRegion, mPopupPreviousArrowTextureRegion, mPopupExitTextureRegion, mResourceManager, this);
			popup.setTag(index);
			popup.setZIndex(10);
			popup.initialize();
			
			final MPFSprite parentSprite = new MPFSprite(parent, mResourceManager){

				@Override
				public boolean onAreaTouched(TouchEvent pSceneTouchEvent,
						float pTouchAreaLocalX, float pTouchAreaLocalY) {
					if(pSceneTouchEvent.isActionDown()){
						popup.showPopup(true);
						mCurrentPopup = popup.getTag();
						return true;
					}
					
					return false;
				}
				
			};
			mResourceManager.getScene().registerTouchArea(parentSprite);
			parentSprite.setZIndex(1);
			parentSprite.setUserData(popup);
			this.attachChild(parentSprite);
			
			this.attachChild(popup);
			
			if(!popup.isSoundOnly()){
				index++;
				mPopups.add(popup);
			}
		}
		
		super.onPopulateFinal();
	}

	@Override
	protected void onStartGame() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void onNextArrowTouched() {
		if(mCurrentPopup == 0){
			mPopups.get(mCurrentPopup).swapFrom(false);
			mPopups.get(mPopups.size() - 1).swapTo(true);
			mCurrentPopup = mPopups.size() - 1;
		} else {
			mPopups.get(mCurrentPopup).swapFrom(false);
			mPopups.get(mCurrentPopup - 1).swapTo(true);
			mCurrentPopup--;
		}
		
		Log.d(MainActivity.TAG, "Popup # " + mCurrentPopup + " out of " + mPopups.size());
	}

	@Override
	public void onPreviousArrowTouched() {
		if(mCurrentPopup == mPopups.size() - 1){
			mPopups.get(mCurrentPopup).swapFrom(true);
			mPopups.get(0).swapTo(false);
			mCurrentPopup = 0;
		} else {
			mPopups.get(mCurrentPopup).swapFrom(true);
			mPopups.get(mCurrentPopup + 1).swapTo(false);
			mCurrentPopup++;
		}	
		
		Log.d(MainActivity.TAG, "Popup # " + mCurrentPopup + " out of " + mPopups.size());
	}

}
