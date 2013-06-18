package com.planetfactory.makerpf.GameTypes.InteractiveImages;

import org.andengine.entity.IEntity;
import org.andengine.entity.modifier.AlphaModifier;
import org.andengine.entity.modifier.DelayModifier;
import org.andengine.entity.modifier.IEntityModifier.IEntityModifierListener;
import org.andengine.entity.modifier.MoveXModifier;
import org.andengine.entity.modifier.SequenceEntityModifier;
import org.andengine.entity.primitive.Rectangle;
import org.andengine.entity.sprite.Sprite;
import org.andengine.entity.text.AutoWrap;
import org.andengine.entity.text.Text;
import org.andengine.entity.text.TextOptions;
import org.andengine.input.touch.TouchEvent;
import org.andengine.opengl.texture.region.ITextureRegion;
import org.andengine.util.modifier.IModifier;

import android.util.Log;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.GameTypes.Item;
import com.planetfactory.makerpf.GameTypes.Parent;
import com.planetfactory.makerpf.Resources.ResourceManager;

public class InteractivePopup extends Sprite{

	private ResourceManager mResourceManager;
	
	private ITextureRegion mPopupExitTextureRegion;
	private Sprite mPopupExitSprite;
	
	private ITextureRegion mPopupNextArrowTextureRegion;
	private Sprite mPopupNextArrowSprite;
	
	private ITextureRegion mPopupPreviousArrowTextureRegion;
	private Sprite mPopupPreviousArrowSprite;
	
	private Parent mParent;
	private Item mItem;
	
	private Rectangle mBackground;
	
	private Sprite mPopupImage;
	private Text mPopupText;
	
	private boolean mIsShown = false;
	
	private IPopupListener mListener;
	
	private boolean mIsSoundOnly = false;
	
	public InteractivePopup(Parent pParent, ITextureRegion pPopupTextureRegion, ITextureRegion pPopupNextArrowTextureRegion, ITextureRegion pPopupPreviousArrowTextureRegion, ITextureRegion pPopupExitTextureRegion, ResourceManager pResourceManager, IPopupListener pListener) {
		super(MainActivity.WIDTH * 0.5f, MainActivity.HEIGHT * 0.5f, pPopupTextureRegion, pResourceManager.getEngine().getVertexBufferObjectManager());
		this.mResourceManager = pResourceManager;
		this.mPopupNextArrowTextureRegion = pPopupNextArrowTextureRegion;
		this.mPopupPreviousArrowTextureRegion = pPopupPreviousArrowTextureRegion;
		this.mPopupExitTextureRegion = pPopupExitTextureRegion;
		this.mParent = pParent;
		this.mItem = mParent.getItems().get(0);
		this.mListener = pListener;
		
		this.setWidth(MainActivity.WIDTH * 0.9f);
		this.setHeight(MainActivity.HEIGHT * 0.625f);
		this.setAlpha(0);
	}

	public boolean isSoundOnly(){
		return this.mIsSoundOnly;
	}
	
	public void initialize(){

		if(mItem.getTextureRegion() != null){

			mBackground = new Rectangle(this.getWidth() * 0.5f, this.getHeight() * 0.5f, MainActivity.WIDTH, MainActivity.HEIGHT, mResourceManager.getEngine().getVertexBufferObjectManager()){

				@Override
				public boolean onAreaTouched(TouchEvent pSceneTouchEvent,
						float pTouchAreaLocalX, float pTouchAreaLocalY) {
					return true;
				}

			};
			mBackground.setVisible(false);
			mBackground.setZIndex(-1);
			this.attachChild(mBackground);

			if(mItem.getTextureRegion() != null){
				mPopupImage = new Sprite(this.getWidth() * 0.25f, this.getHeight() * 0.5f, mItem.getTextureRegion(), mResourceManager.getEngine().getVertexBufferObjectManager()){
					@Override
					protected void onManagedUpdate(float pSecondsElapsed) {
						if(this.getAlpha() != this.getParent().getAlpha()){
							this.setAlpha(this.getParent().getAlpha());
						}
						super.onManagedUpdate(pSecondsElapsed);
					}
				};

				if(mPopupImage.getHeight() > mPopupImage.getWidth()){
					if(mPopupImage.getHeight() > this.getHeight() * 0.8f){
						mPopupImage.setScale(this.getHeight() * 0.8f / mPopupImage.getHeight());
					}
				} else {
					if(mPopupImage.getWidth() > this.getWidth() * 0.4f){
						mPopupImage.setScale(this.getWidth() * 0.4f / mPopupImage.getWidth());
					}
				}

				this.attachChild(mPopupImage);
			}

			if(mItem.getText(ResourceManager.getLanguage()) != null && !mItem.getText(ResourceManager.getLanguage()).equals("")){
				final TextOptions textOptions = new TextOptions();
				textOptions.setAutoWrap(AutoWrap.WORDS);
				textOptions.setAutoWrapWidth(this.getWidth() * 0.5f * 0.75f);

				mPopupText = new Text(0, 0, ResourceManager.mFont, mItem.getText(ResourceManager.getLanguage()), textOptions, mResourceManager.getEngine().getVertexBufferObjectManager()){
					@Override
					protected void onManagedUpdate(float pSecondsElapsed) {
						if(this.getAlpha() != this.getParent().getAlpha()){
							this.setAlpha(this.getParent().getAlpha());
						}
						super.onManagedUpdate(pSecondsElapsed);
					}
				};
				mPopupText.setAnchorCenter(0, 1);
				mPopupText.setColor(0, 0, 0);
				mPopupText.setPosition(this.getWidth() * 0.5f, this.getHeight() - ResourceManager.mFont.getLineHeight());
				this.attachChild(mPopupText);
			} else {

				this.setWidth(MainActivity.WIDTH * 0.5f);
				this.setHeight(MainActivity.HEIGHT * 0.625f);

				mPopupImage.setPosition(this.getWidth() * 0.5f, this.getHeight() * 0.5f);
				mPopupImage.setSize(this.getWidth() - 100, this.getHeight() - 100);

			}

			mPopupExitSprite = new Sprite(this.getWidth() - mPopupExitTextureRegion.getWidth() - 5, this.getHeight() - mPopupExitTextureRegion.getHeight() - 5, mPopupExitTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager()){

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
						Log.d(MainActivity.TAG, "Hide popup touch event");
						showPopup(false);
						return true;
					}
					return false;
				}

			};
			this.attachChild(mPopupExitSprite);

			mPopupNextArrowSprite = new Sprite(this.getWidth() - mPopupNextArrowTextureRegion.getWidth() - 5, mPopupNextArrowTextureRegion.getHeight() + 5, mPopupNextArrowTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager()){

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
						InteractivePopup.this.clearEntityModifiers();
						mListener.onNextArrowTouched();
						return true;
					}
					return false;
				}

			};
			this.attachChild(mPopupNextArrowSprite);

			mPopupPreviousArrowSprite = new Sprite(mPopupPreviousArrowTextureRegion.getWidth() + 5, mPopupPreviousArrowTextureRegion.getHeight() + 5, mPopupPreviousArrowTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager()){

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
						InteractivePopup.this.clearEntityModifiers();
						mListener.onPreviousArrowTouched();
						return true;
					}
					return false;
				}

			};
			this.attachChild(mPopupPreviousArrowSprite);

			this.sortChildren();
		} else {
			mIsSoundOnly = true;
		}
	}
	
	public void showPopup(final boolean pShow){

		if(mItem.getTextureRegion() == null){

			this.mItem.getSound(ResourceManager.getLanguage()).stop();
			this.mItem.getSound(ResourceManager.getLanguage()).play();

		} else if(pShow){
			
			Log.d(MainActivity.TAG, "Show popup");
			this.registerEntityModifier(new AlphaModifier(1, 0, 1));
			this.setX(MainActivity.WIDTH * 0.5f);
			mResourceManager.getScene().registerTouchArea(this.mBackground);
			mResourceManager.getScene().registerTouchArea(this.mPopupPreviousArrowSprite);
			mResourceManager.getScene().registerTouchArea(this.mPopupNextArrowSprite);
			mResourceManager.getScene().registerTouchArea(this.mPopupExitSprite);

			if(mItem.getSound(ResourceManager.getLanguage()) != null){
				mItem.getSound(mResourceManager.getLanguage()).play();
			}
			
		} else {
			
			Log.d(MainActivity.TAG, "Hide popup");
			this.registerEntityModifier(new AlphaModifier(1, 1, 0));
			mResourceManager.getScene().unregisterTouchArea(this.mBackground);
			mResourceManager.getScene().unregisterTouchArea(this.mPopupPreviousArrowSprite);
			mResourceManager.getScene().unregisterTouchArea(this.mPopupNextArrowSprite);
			mResourceManager.getScene().unregisterTouchArea(this.mPopupExitSprite);
			
			this.mItem.getSound(ResourceManager.getLanguage()).stop();
		}

		mIsShown = pShow;

		this.sortChildren();
	}

	public void swapTo(final boolean pFromRight){
		this.setX(10000);
		
		mResourceManager.getEngine().runOnUpdateThread(new Runnable(){

			@Override
			public void run() {
				InteractivePopup.this.clearEntityModifiers();

				final IEntityModifierListener listener = new IEntityModifierListener(){

					@Override
					public void onModifierStarted(IModifier<IEntity> pModifier,
							IEntity pItem) {
					}

					@Override
					public void onModifierFinished(
							IModifier<IEntity> pModifier, IEntity pItem) {
						if(mItem.getSound(ResourceManager.getLanguage()) != null){
							mItem.getSound(mResourceManager.getLanguage()).play();
						}
					}
					
				};
				
				if(pFromRight){
					InteractivePopup.this.registerEntityModifier(new SequenceEntityModifier(new DelayModifier(1), new MoveXModifier(1, MainActivity.WIDTH + InteractivePopup.this.getWidth() * 0.5f, MainActivity.WIDTH * 0.5f, listener)));
				} else {
					InteractivePopup.this.registerEntityModifier(new SequenceEntityModifier(new DelayModifier(1), new MoveXModifier(1, -InteractivePopup.this.getWidth() * 0.5f, MainActivity.WIDTH * 0.5f, listener)));
				}

				InteractivePopup.this.setAlpha(1);
				mResourceManager.getScene().registerTouchArea(InteractivePopup.this.mBackground);
				mResourceManager.getScene().registerTouchArea(InteractivePopup.this.mPopupPreviousArrowSprite);
				mResourceManager.getScene().registerTouchArea(InteractivePopup.this.mPopupNextArrowSprite);
				mResourceManager.getScene().registerTouchArea(InteractivePopup.this.mPopupExitSprite);

				mIsShown = true;
			}

		});
	}

	public void swapFrom(final boolean pToRight){
		this.mItem.getSound(ResourceManager.getLanguage()).stop();
		
		mResourceManager.getEngine().runOnUpdateThread(new Runnable(){

			@Override
			public void run() {
				InteractivePopup.this.clearEntityModifiers();
				
				if(pToRight){
					InteractivePopup.this.registerEntityModifier(new MoveXModifier(1, MainActivity.WIDTH * 0.5f , MainActivity.WIDTH + InteractivePopup.this.getWidth() * 0.5f){

						@Override
						protected void onModifierFinished(IEntity pItem) {
							mIsShown = false;
							InteractivePopup.this.setAlpha(0);
							mResourceManager.getScene().unregisterTouchArea(InteractivePopup.this.mBackground);
							mResourceManager.getScene().unregisterTouchArea(InteractivePopup.this.mPopupPreviousArrowSprite);
							mResourceManager.getScene().unregisterTouchArea(InteractivePopup.this.mPopupNextArrowSprite);
							mResourceManager.getScene().unregisterTouchArea(InteractivePopup.this.mPopupExitSprite);
							super.onModifierFinished(pItem);
						}
						
					});
				} else {
					InteractivePopup.this.registerEntityModifier(new MoveXModifier(1, MainActivity.WIDTH * 0.5f , -InteractivePopup.this.getWidth() * 0.5f){

						@Override
						protected void onModifierFinished(IEntity pItem) {
							mIsShown = false;
							InteractivePopup.this.setAlpha(0);
							mResourceManager.getScene().unregisterTouchArea(InteractivePopup.this.mBackground);
							mResourceManager.getScene().unregisterTouchArea(InteractivePopup.this.mPopupPreviousArrowSprite);
							mResourceManager.getScene().unregisterTouchArea(InteractivePopup.this.mPopupNextArrowSprite);
							mResourceManager.getScene().unregisterTouchArea(InteractivePopup.this.mPopupExitSprite);
							super.onModifierFinished(pItem);
						}
					});
					
				}
			}
		});
		
	}
}
