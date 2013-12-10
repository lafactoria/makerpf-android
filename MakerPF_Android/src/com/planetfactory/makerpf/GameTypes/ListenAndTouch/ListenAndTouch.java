package com.planetfactory.makerpf.GameTypes.ListenAndTouch;

import java.util.ArrayList;

import org.andengine.entity.text.Text;
import org.andengine.input.touch.TouchEvent;
import org.andengine.opengl.texture.atlas.bitmap.BitmapTextureAtlasTextureRegionFactory;
import org.andengine.opengl.texture.region.ITextureRegion;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.GameTypes.BaseGame;
import com.planetfactory.makerpf.GameTypes.Item;
import com.planetfactory.makerpf.Layers.Main.Main;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Utils.MPFSprite;
import com.planetfactory.makerpf.Utils.Actions.ActionFactory;

public class ListenAndTouch extends BaseGame{
	
	//============================================================
	// CONSTANTS
	//============================================================
	private static final String SOUND_BUTTON_STRING = "bt_so_default.png";
	
	//============================================================
	// VARIABLES
	//============================================================
	private ITextureRegion mSoundButtonTextureRegion;
	private MPFSprite mSoundButtonSprite;
	
	private ArrayList<MPFSprite> mItemsCorrectlyGuessed = new ArrayList<MPFSprite>();
	private ArrayList<MPFSprite> mItemsToGuess = new ArrayList<MPFSprite>();
	
	private MPFSprite mItemToGuess;
	
	private int mItemCount = 0;
	
	//============================================================
	// CONSTRUCTOR
	//============================================================
	public ListenAndTouch(ResourceManager pResourceManager) {
		super(pResourceManager);
	}

	//============================================================
	// ON LOAD RESOURCES
	//============================================================
	@Override
	public void onLoadResources() {
		super.onLoadResources();
		
		String texturePath = IMAGES_FOLDER + SOUND_BUTTON_STRING;
		this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
		mSoundButtonTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);
	}

	//============================================================
	// UNLOAD RESOURCES
	//============================================================
	@Override
	public void onUnloadResources() {
		// TODO Auto-generated method stub
		mItemsCorrectlyGuessed.clear();
		mItemsToGuess.clear();
		mItemToGuess = null;
		mItemCount = 0;
	}

	//============================================================
	// ON POPULATE
	//============================================================
	@Override
	public void onPopulate() {
		super.onPopulate();
		
		mItemCount = mItems.size();
		
		this.mSoundButtonSprite = new MPFSprite(mBackButtonSprite.getX() + mSoundButtonTextureRegion.getWidth() + 5, mBackButtonSprite.getY(), mSoundButtonTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager()){

			@Override
			public boolean onAreaTouched(TouchEvent pSceneTouchEvent, float pTouchAreaLocalX, float pTouchAreaLocalY) {
				if(pSceneTouchEvent.isActionDown()){
					
					if(mItemToGuess != null){
						mItemToGuess.getBaseItem().getSound(ResourceManager.getLanguage()).play();
					}
					
					return true;
				}
				return false;
			}
			
		};
		mResourceManager.getScene().registerTouchArea(mSoundButtonSprite);
		this.mSoundButtonSprite.setZIndex(10);
		this.attachChild(this.mSoundButtonSprite);
		
		for(int i = 0; i < mItems.size(); i++){
			final Item item = mItems.get(i);
			
			final MPFSprite sprite = new MPFSprite(item, mResourceManager){

				@Override
				public boolean onAreaTouched(TouchEvent pSceneTouchEvent, float pTouchAreaLocalX, float pTouchAreaLocalY) {

					if(pSceneTouchEvent.isActionDown() && mItemToGuess == this){
						mItemsCorrectlyGuessed.add(this);
						
						if(this.getBaseItem().getActionWrappers() != null && !this.getBaseItem().getActionWrappers().isEmpty())
							this.registerEntityModifier(ActionFactory.createAction(this, this.getBaseItem().getActionWrappers()));
						
						if(mItemsCorrectlyGuessed.size() >= mItemCount){
							endGame();
						} else {
							getNextItem();
						}						
						return true;
					}					
					return false;
				}				
			};
			sprite.setPosition(sprite.getX() + MainActivity.MARGIN_X, sprite.getY());
			mResourceManager.getScene().registerTouchArea(sprite);
			this.attachChild(sprite);
			
			if(item.getKind() > 1){
				final Text text = new Text(sprite.getWidth() * 0.5f, sprite.getHeight() * 0.5f, mResourceManager.mFont, item.getText(), mResourceManager.getEngine().getVertexBufferObjectManager());
				text.setColor(item.getColor());
				sprite.attachChild(text);
				sprite.setAlpha(0);
			}
			
			mItemsToGuess.add(sprite);
		}
		
		getNextItem();
		
		super.onPopulateFinal();
	}

	//============================================================
	// GET NEXT ITEM
	//============================================================
	private MPFSprite getNextItem(){
		final int random = (int) (Math.random() * mItemsToGuess.size());
		mItemToGuess = mItemsToGuess.remove(random);
		
		mItemToGuess.getBaseItem().getSound(ResourceManager.getLanguage()).play();
		
		return mItemToGuess;
	}

	//============================================================
	// ON START GAME
	//============================================================
	@Override
	protected void onStartGame() {
		// TODO Auto-generated method stub
		
	}
	
}

