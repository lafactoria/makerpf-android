package com.planetfactory.makerpf.GameTypes.Arrows;

import java.util.ArrayList;

import org.andengine.entity.scene.IOnAreaTouchListener;
import org.andengine.entity.scene.IOnSceneTouchListener;
import org.andengine.entity.scene.ITouchArea;
import org.andengine.entity.scene.Scene;
import org.andengine.input.touch.TouchEvent;
import org.andengine.opengl.texture.atlas.bitmap.BitmapTextureAtlasTextureRegionFactory;
import org.andengine.opengl.texture.region.ITextureRegion;

import android.util.Log;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.GameTypes.BaseGame;
import com.planetfactory.makerpf.GameTypes.Item;
import com.planetfactory.makerpf.GameTypes.Parent;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Resources.SoundManager;
import com.planetfactory.makerpf.Utils.MPFSprite;

public class Arrows extends BaseGame implements IOnSceneTouchListener, IOnAreaTouchListener{
	
	private static final String ARROW_TIP_PATH = "half_circle.png";
	
	private static final int PARENT = 0;
	private static final int CHILD = 1;
	
	private static final int UNMATCHED = 0;
	private static final int MATCHED = 1;

	private ITextureRegion mArrowTipTextureRegion;
	
	private ArrowItem mCurrentArrow;
	
	private int mCurrentMatchedCount = 0;
	private int mTotalMatchCount = 0;
	
	private MPFSprite mTouchedEntity;
	private MPFSprite mReleasedEntity;
	
	private ArrayList<ArrowItem> mArrows;
	
	public Arrows(ResourceManager pResourceManager) {
		super(pResourceManager);
	}

	@Override
	public void onLoadResources() {
		super.onLoadResources();
	
		String texturePath = IMAGES_FOLDER + ARROW_TIP_PATH;
		this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
		mArrowTipTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);	
	
	}

	@Override
	public void onUnloadResources() {
		// TODO Auto-generated method stub
		mResourceManager.getScene().setOnSceneTouchListener(null);
		mResourceManager.getScene().setOnAreaTouchListener(null);
		mResourceManager.getScene().setTouchAreaBindingOnActionDownEnabled(true);

		
		mCurrentMatchedCount = 0;
		mTotalMatchCount = 0;
	}

	@Override
	public void onPopulate() {
		super.onPopulate();

		mArrows = new ArrayList<ArrowItem>();
		
		mResourceManager.getScene().setOnSceneTouchListener(this);
		mResourceManager.getScene().setOnAreaTouchListener(this);
		mResourceManager.getScene().setTouchAreaBindingOnActionDownEnabled(false);
		
		// Attach parents
		for(int i = 0; i < mParents.size(); i++){
			final Parent parent = mParents.get(i);
			
			final MPFSprite parentSprite = new MPFSprite(parent, mResourceManager);
			mResourceManager.getScene().registerTouchArea(parentSprite);
			parentSprite.setUserData(PARENT);
			parentSprite.setTag(UNMATCHED);
			this.attachChild(parentSprite);
			
			mTotalMatchCount += parent.getItems().size();
			
			// Attach items belonging to each parent
			for(int j = 0; j < parent.getItems().size(); j++){
				final Item item = parent.getItems().get(j);
				
				final MPFSprite itemSprite = new MPFSprite(item, mResourceManager);
				mResourceManager.getScene().registerTouchArea(itemSprite);
				itemSprite.setUserData(CHILD);
				itemSprite.setTag(UNMATCHED);
				this.attachChild(itemSprite);
			}
		}
		
		super.onPopulateFinal();
	}

	@Override
	public boolean onSceneTouchEvent(Scene pScene, TouchEvent pSceneTouchEvent) {
		
		if(mCurrentArrow != null){
		
			if(pSceneTouchEvent.isActionMove()){
				mCurrentArrow.updateLine(pSceneTouchEvent.getX(), pSceneTouchEvent.getY());
				return true;
			}
			
			if(pSceneTouchEvent.isActionUp() && mCurrentArrow != null){
				mResourceManager.getSoundManager().playFX(SoundManager.BOTO);
				mCurrentArrow.dispose();
				mCurrentArrow.detachSelf();
				mCurrentArrow = null;
				return true;
			}
		}
		
		return false;
	}

	@Override
	public boolean onAreaTouched(TouchEvent pSceneTouchEvent,
			ITouchArea pTouchArea, float pTouchAreaLocalX,
			float pTouchAreaLocalY) {

		final MPFSprite sprite = (MPFSprite) pTouchArea;
		
		if(sprite != null && sprite.getBaseItem() != null){
			
			if(pSceneTouchEvent.isActionDown()){
				this.mTouchedEntity = sprite;
				
				mCurrentArrow = new ArrowItem(pSceneTouchEvent.getX(), pSceneTouchEvent.getY(), mArrowTipTextureRegion, mResourceManager);
				this.attachChild(mCurrentArrow);
				
				if(sprite.getBaseItem().getSound(ResourceManager.getLanguage()) != null){
					sprite.getBaseItem().getSound(ResourceManager.getLanguage()).play();
				}
				
				return true;
			}
			
			if(pSceneTouchEvent.isActionUp() && this.mTouchedEntity != null){
				this.mReleasedEntity = sprite;
				
				boolean isMatched = false;
				
				if(this.mTouchedEntity != this.mReleasedEntity && this.mTouchedEntity.getTag() != MATCHED && this.mReleasedEntity.getTag() != MATCHED){
					if(this.mTouchedEntity.getUserData().equals(PARENT) && this.mReleasedEntity.getUserData().equals(CHILD) ||
					   this.mTouchedEntity.getUserData().equals(CHILD) && this.mReleasedEntity.getUserData().equals(PARENT)){
						if(this.mTouchedEntity.getBaseItem().getId() == this.mReleasedEntity.getBaseItem().getParent() ||
								this.mTouchedEntity.getBaseItem().getParent() == this.mReleasedEntity.getBaseItem().getId()){							
							this.mTouchedEntity.setTag(MATCHED);
							this.mReleasedEntity.setTag(MATCHED);
							
							checkGameOver();
							
							isMatched = true;
							
							if(sprite.getBaseItem().getSound(ResourceManager.getLanguage()) != null){
								sprite.getBaseItem().getSound(ResourceManager.getLanguage()).play();
							}
							
							mArrows.add(mCurrentArrow);
						} 
					}
				}
				
				if(!isMatched && mCurrentArrow != null){
					mResourceManager.getSoundManager().playFX(SoundManager.BOTO);
					mCurrentArrow.dispose();
					mCurrentArrow.detachSelf();
					mCurrentArrow = null;
				}
				
				this.mTouchedEntity = null;
				this.mReleasedEntity = null;
				
				return true;
			}	
		}
		
		return false;
	}

	public void checkGameOver() {
		mCurrentMatchedCount++;
		
		if(mCurrentMatchedCount >= mTotalMatchCount){
			endGame();
		}
	}

	@Override
	protected void onStartGame() {
		// TODO Auto-generated method stub
		
	}
	
}
