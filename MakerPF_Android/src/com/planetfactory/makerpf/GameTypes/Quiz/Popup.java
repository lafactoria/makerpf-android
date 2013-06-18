package com.planetfactory.makerpf.GameTypes.Quiz;

import org.andengine.entity.modifier.AlphaModifier;
import org.andengine.entity.primitive.Rectangle;
import org.andengine.entity.sprite.Sprite;
import org.andengine.input.touch.TouchEvent;
import org.andengine.opengl.texture.region.ITextureRegion;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.Resources.ResourceManager;

public class Popup extends Sprite{

	private ResourceManager mResourceManager;
	
	private ITextureRegion mArrowTextureRegion;
	private Sprite mArrowSprite;
	
	private Rectangle mBackground;
	
	private boolean mIsShown = false;
	
	public Popup(ITextureRegion pBackgroundTextureRegion, ITextureRegion pArrowTextureRegion, ResourceManager pResourceManager) {
		super(MainActivity.WIDTH * 0.5f, MainActivity.HEIGHT * 0.5f, pBackgroundTextureRegion, pResourceManager.getEngine().getVertexBufferObjectManager());
		this.mResourceManager = pResourceManager;
		this.mArrowTextureRegion = pArrowTextureRegion;
		
		this.setAlpha(0);
		this.setZIndex(10);
	}

	/**
	 * This method is populated as an overriden method during popup instantiation
	 * in order to allow the arrow sprite to end the game from the Quiz.class
	 */
	protected void onActionDown(){
	}
	
	public Sprite getArrowSprite(){
		return this.mArrowSprite;
	}
	
	public void initializPopup(final boolean pShowBackground){
		
		final float[] coords = this.convertSceneCoordinatesToLocalCoordinates(this.getX(), this.getY());
		
		mBackground = new Rectangle(coords[0], coords[1], MainActivity.WIDTH, MainActivity.HEIGHT, mResourceManager.getEngine().getVertexBufferObjectManager()){

			@Override
			protected void onManagedUpdate(float pSecondsElapsed) {
				if(this.getAlpha() * 2 != this.getParent().getAlpha()){
					this.setAlpha(this.getParent().getAlpha() * 0.5f);
				}
				super.onManagedUpdate(pSecondsElapsed);
			}
			
			@Override
			public boolean onAreaTouched(TouchEvent pSceneTouchEvent,
					float pTouchAreaLocalX, float pTouchAreaLocalY) {
				return true;
			}
			
		};
		mBackground.setColor(0, 0, 0);
		mBackground.setAlpha(0);
		mBackground.setZIndex(-1);
		
		if(!pShowBackground){
			mBackground.setVisible(false);
		}
		
		this.attachChild(mBackground);
		
		mArrowSprite = new Sprite(this.getWidth() * 0.5f, mArrowTextureRegion.getHeight(), mArrowTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager()){

			@Override
			protected void onManagedUpdate(float pSecondsElapsed) {
				if(this.getAlpha() != this.getParent().getAlpha()){
					this.setAlpha(this.getParent().getAlpha());
				}
				super.onManagedUpdate(pSecondsElapsed);
			}
			
			@Override
			public boolean onAreaTouched(TouchEvent pSceneTouchEvent,
					float pTouchAreaLocalX, float pTouchAreaLocalY) {
				if(pSceneTouchEvent.isActionDown()){
					
					onActionDown();
					
					return true;
				}
				return false;
			}
			
		};
		this.attachChild(mArrowSprite);
		
		this.sortChildren();
	}
	
	public void showPopup(final boolean pShow){
		
		if(pShow != mIsShown){
			if(pShow){
				this.registerEntityModifier(new AlphaModifier(1, 0, 1));
				mResourceManager.getScene().registerTouchArea(this.mBackground);
				mResourceManager.getScene().registerTouchArea(this.mArrowSprite);
			} else {
				this.registerEntityModifier(new AlphaModifier(1, 1, 0));
				mResourceManager.getScene().unregisterTouchArea(this.mBackground);
				mResourceManager.getScene().unregisterTouchArea(this.mArrowSprite);
			}
			
			mIsShown = pShow;
			
			this.sortChildren();
		}
	}
}
