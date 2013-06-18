package com.planetfactory.makerpf.GameTypes;

import java.util.Vector;

import org.andengine.audio.music.Music;
import org.andengine.audio.sound.Sound;
import org.andengine.entity.IEntity;
import org.andengine.entity.modifier.AlphaModifier;
import org.andengine.entity.modifier.IEntityModifier;
import org.andengine.entity.primitive.Rectangle;
import org.andengine.entity.text.AutoWrap;
import org.andengine.entity.text.Text;
import org.andengine.entity.text.TextOptions;
import org.andengine.input.touch.TouchEvent;
import org.andengine.opengl.texture.atlas.bitmap.BitmapTextureAtlas;
import org.andengine.opengl.texture.atlas.bitmap.BitmapTextureAtlasTextureRegionFactory;
import org.andengine.opengl.texture.region.ITextureRegion;
import org.andengine.util.modifier.IModifier;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import android.util.SparseArray;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Utils.MPFSprite;

public class InstructionBox extends Rectangle{
	
	private static final int BUTTON_DIMENSIONS = 60;
	
	private static final String SOUND_BUTTON_FILENAME = "instruction_sound.png";
	private static final String NEXT_BUTTON_FILENAME = "instruction_arrow.png";
	private static final String POPUP_BG_FILENAME = "bg_popup.png";
	
	private final ResourceManager mResourceManager;
	private final Vector<BitmapTextureAtlas> mTextures;
	private final Element mElement;
	
	private ITextureRegion mSoundButtonTextureRegion;
	private ITextureRegion mNextButtonTextureRegion;
	private ITextureRegion mPopupBgTextureRegion;
	private ITextureRegion mImageTextureRegion;
	
	private MPFSprite mSoundButtonSprite;
	private MPFSprite mNextButtonSprite;
	private MPFSprite mPopupBgSprite;
	private MPFSprite mImage;
	
	private Text mText;
	
	private SparseArray<String> mTexts = new SparseArray<String>();
	private SparseArray<Music> mLongSounds = new SparseArray<Music>();
	
	private boolean mTextEnabled = false;
	private boolean mSoundEnabled = false;
	private boolean mImageEnabled = false;
	
	private IInstructionBoxListener mInstructionBoxListener;
	
	private final AlphaModifier mAlphaModifier = new AlphaModifier(1, 0.5f, 0, new IEntityModifier.IEntityModifierListener() {
		
		@Override
		public void onModifierStarted(IModifier<IEntity> pModifier, IEntity pItem) {
			
		}
		
		@Override
		public void onModifierFinished(IModifier<IEntity> pModifier, IEntity pItem) {
			mResourceManager.getScene().unregisterTouchArea(InstructionBox.this);
			
			if(mSoundButtonSprite != null)
				mSoundButtonSprite.detachSelf();
				
			if(mNextButtonSprite != null)
				mNextButtonSprite.detachSelf();
				
			if(mPopupBgSprite != null)
				mPopupBgSprite.detachSelf();
				
			if(mImage != null)
				mImage.detachSelf();
				
			if(mText != null)
				mText.detachSelf();
			
			mInstructionBoxListener.onInstructionsDismissed();
		}
	});
	
	public InstructionBox(Element pElement, ResourceManager pResourceManager, Vector<BitmapTextureAtlas> pTextures, IInstructionBoxListener pInstructionBoxListener){
		super(MainActivity.WIDTH * 0.5f, MainActivity.HEIGHT * 0.5f, MainActivity.WIDTH, MainActivity.HEIGHT, pResourceManager.getEngine().getVertexBufferObjectManager());
		this.mResourceManager = pResourceManager;
		this.mTextures = pTextures;
		this.mElement = pElement;
		this.mInstructionBoxListener = pInstructionBoxListener;
		this.setZIndex(25);
	}
	
	public void createResources(){
		
		// Temporary list/element
		NodeList list = null;
		Element e = null;
		
		mTextures.add(mResourceManager.createSizedTexture(BaseGame.IMAGES_FOLDER + NEXT_BUTTON_FILENAME));
		mNextButtonTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), BaseGame.IMAGES_FOLDER + NEXT_BUTTON_FILENAME, 0, 0);

		mTextures.add(mResourceManager.createSizedTexture(BaseGame.IMAGES_FOLDER + POPUP_BG_FILENAME));
		mPopupBgTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), BaseGame.IMAGES_FOLDER + POPUP_BG_FILENAME, 0, 0);
		
		/*
		 * Create Instructional Image
		 */
		list = mElement.getElementsByTagName(BaseGame.T_IMAGE);
		
		if(list != null && list.getLength() > 0){
			mImageEnabled = true;
			
			e = (Element) list.item(0);
			
			String texturePath = ResourceManager.getAssetPath() + BaseGame.IMAGES_FOLDER + e.getAttribute(BaseGame.A_SRC);
			mTextures.add(mResourceManager.createSizedTexture(texturePath));
			mImageTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);
			
			list = null;
		}
	
		/*
		 * Iterate through the Texts, adding them to the instruction box
		 */
		list = mElement.getElementsByTagName(BaseGame.T_TEXTS);
		
		if(list != null && list.getLength() > 0){
			mTextEnabled = true;
			
			e = (Element) list.item(0);
			list = e.getElementsByTagName(BaseGame.T_TEXT);
			
			for(int i = 0; i < list.getLength(); i++){
				final Element textElement = (Element) list.item(i);
				
				final int language = Integer.valueOf(textElement.getAttribute(BaseGame.A_LANGUAGE));
				final String text = textElement.getAttribute(BaseGame.A_TEXT);
	
				mTexts.put(language, text);
			}
			
			list = null;
		}
		
		/*
		 * Iterate through the Sounds, adding them to the instruction box
		 */
		list = mElement.getElementsByTagName(BaseGame.T_SOUNDS);
		
		if(list != null && list.getLength() > 0){
			mSoundEnabled = true;
			
			e = (Element) list.item(0);
			list = e.getElementsByTagName(BaseGame.T_SOUND);
			
			for(int i = 0; i < list.getLength(); i++){
				final Element soundElement = (Element) list.item(i);
				
				final int language = Integer.valueOf(soundElement.getAttribute(BaseGame.A_LANGUAGE));
				final String source = soundElement.getAttribute(BaseGame.A_SRC);
				
				final String soundPath = ResourceManager.getAssetPath() + BaseGame.SOUNDS_FOLDER + language + "/" + source;
				mLongSounds.put(language, mResourceManager.getSoundManager().loadLongSound(soundPath));
			}
			
			mTextures.add(mResourceManager.createSizedTexture(BaseGame.IMAGES_FOLDER + SOUND_BUTTON_FILENAME));
			mSoundButtonTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), BaseGame.IMAGES_FOLDER + SOUND_BUTTON_FILENAME, 0, 0);
			
			list = null;
		}
	}
	
	public void initialize(){
		this.setColor(0, 0, 0);
		this.setAlpha(0.5f);
		this.mResourceManager.getScene().registerTouchArea(this);
		
		/*
		 * Create White Background Popup
		 */
		mPopupBgSprite = new MPFSprite(MainActivity.WIDTH * 0.5f, 220, mPopupBgTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager());
		this.attachChild(mPopupBgSprite);
		
		/*
		 * Create Next Button
		 */
		mNextButtonSprite = new MPFSprite(mPopupBgSprite.getWidth() - BUTTON_DIMENSIONS - 16, BUTTON_DIMENSIONS + 8, BUTTON_DIMENSIONS, BUTTON_DIMENSIONS, false, mNextButtonTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager()){

			@Override
			public boolean onAreaTouched(TouchEvent pSceneTouchEvent,
					float pTouchAreaLocalX, float pTouchAreaLocalY) {
				if(pSceneTouchEvent.isActionDown() && InstructionBox.this.getAlpha() == 0.5f){
					mAlphaModifier.reset(1, 0.5f, 0);
					InstructionBox.this.registerEntityModifier(mAlphaModifier);

					if(mLongSounds.get(ResourceManager.getLanguage()) != null){
						mLongSounds.get(ResourceManager.getLanguage()).pause();
					}

					return true;
				}

				return false;
			}
			
		};
		mResourceManager.getScene().registerTouchArea(mNextButtonSprite);
		mPopupBgSprite.attachChild(mNextButtonSprite);
		
		if(mSoundEnabled){
			initializeSound();
		}
		
		if(mTextEnabled){
			initializeText();
		}
		
		if(mImageEnabled){
			initializeImage();
		}
	}
	
	/**
	 * Create and attach all sound related objects to the instruction box
	 */
	private void initializeSound(){
		/*
		 * Create Sound Button
		 */
		
		if(mLongSounds.get(ResourceManager.getLanguage()) != null){
			mSoundButtonSprite = new MPFSprite(BUTTON_DIMENSIONS + 16, BUTTON_DIMENSIONS + 8, BUTTON_DIMENSIONS, BUTTON_DIMENSIONS, false, mSoundButtonTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager()){

				@Override
				public boolean onAreaTouched(TouchEvent pSceneTouchEvent,
						float pTouchAreaLocalX, float pTouchAreaLocalY) {

					if(pSceneTouchEvent.isActionDown() && InstructionBox.this.getAlpha() == 0.5f){
						mLongSounds.get(ResourceManager.getLanguage()).seekTo(0);
						mLongSounds.get(ResourceManager.getLanguage()).play();
						return true;
					}

				return false;
			}

			};
			mResourceManager.getScene().registerTouchArea(mSoundButtonSprite);
			mPopupBgSprite.attachChild(mSoundButtonSprite);
		}
	}

	public void playSound(){
		if(mLongSounds.get(ResourceManager.getLanguage()) != null){
			mLongSounds.get(ResourceManager.getLanguage()).seekTo(0);
			mLongSounds.get(ResourceManager.getLanguage()).play();
		}
	}

	public void stopSound(){
		if(mLongSounds.get(ResourceManager.getLanguage()) != null){
			mLongSounds.get(ResourceManager.getLanguage()).seekTo(0);
			mLongSounds.get(ResourceManager.getLanguage()).pause();
		}
	}
	/**
	 * Create and attach all text related objects to the instruction box
	 */
	private void initializeText(){
		if(mTexts.size() > 0){
			/*
			 * Create Text
			 */
			final TextOptions textOptions = new TextOptions();
			textOptions.setAutoWrap(AutoWrap.WORDS);

			final float x;
			final float y = mPopupBgSprite.getHeight() - 35;

			if(mImageEnabled){
				textOptions.setAutoWrapWidth(mPopupBgSprite.getWidth() * 0.5f - 20);

				x = mPopupBgSprite.getWidth() * 0.5f;

			} else {
				textOptions.setAutoWrapWidth(mPopupBgSprite.getWidth() - 40);

				x = 50;
			}


			mText = new Text(0, 0, ResourceManager.mFont, mTexts.get(ResourceManager.getLanguage()), mTexts.get(ResourceManager.getLanguage()).length(), textOptions, mResourceManager.getEngine().getVertexBufferObjectManager());
			mText.setAnchorCenter(0, 1);
			mText.setPosition(x, y);
			mText.setColor(0, 0, 0);
			mPopupBgSprite.attachChild(mText);
		}
	}
	
	/**
	 * Create and attach all image related objects to the instruction box
	 */
	private void initializeImage(){
		/*
		 * Create image sprite and scale it to fit the box
		 */
		mImage = new MPFSprite(mImageTextureRegion.getWidth() * 0.5f, mPopupBgSprite.getHeight() * 0.5f, false, mImageTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager());
		mPopupBgSprite.attachChild(mImage);

		final float widthDiff = (mPopupBgSprite.getWidth() * 0.5f) - mImage.getWidth();
		final float heightDiff = (mPopupBgSprite.getHeight() - 50) - mImage.getHeight();
		
		if(widthDiff < 0 && widthDiff < heightDiff){
			mImage.setScale(((mPopupBgSprite.getWidth() * 0.5f) / mImage.getWidth()) * 1000);

		} else if(heightDiff < 0 && heightDiff < widthDiff){
			mImage.setScale(((mPopupBgSprite.getHeight() - 50) / mImage.getHeight()) * 1000);
		}
		
		
		mImage.setX(mPopupBgSprite.getWidth() * 0.5f);
	}
	
	@Override
	public boolean onAreaTouched(TouchEvent pSceneTouchEvent,
			float pTouchAreaLocalX, float pTouchAreaLocalY) {

		return true;
	}

	@Override
	protected void onManagedUpdate(float pSecondsElapsed) {

		if(mSoundButtonSprite != null)
		mSoundButtonSprite.setAlpha(this.getAlpha() * 2);
		
		if(mNextButtonSprite != null)
		mNextButtonSprite.setAlpha(this.getAlpha() * 2);
		
		if(mPopupBgSprite != null)
		mPopupBgSprite.setAlpha(this.getAlpha() * 2);
		
		if(mImage != null)
		mImage.setAlpha(this.getAlpha() * 2);
		
		if(mText != null)
		mText.setAlpha(this.getAlpha() * 2);
		
		super.onManagedUpdate(pSecondsElapsed);
	}
}
