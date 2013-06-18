package com.planetfactory.makerpf.GameTypes.Quiz;

import java.util.ArrayList;

import org.andengine.entity.sprite.Sprite;
import org.andengine.entity.text.Text;
import org.andengine.input.touch.TouchEvent;
import org.andengine.opengl.texture.region.ITextureRegion;

import com.planetfactory.makerpf.GameTypes.BaseItem;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Utils.MPFSprite;

public class QuizItemBox extends MPFSprite{

	final ResourceManager mResourceManager;
	final BaseItem mBaseItem;
	
	private ITextureRegion mQuizBoxTextureRegion;
	private ITextureRegion mCheckBoxTextureRegion;
	private ITextureRegion mTickTextureRegion;
	
	private Sprite mCheckBoxSprite;
	private Sprite mTickSprite;
	private Sprite mImageSprite;
	private Text mText;
	
	private boolean mIsSelected;
	
	public QuizItemBox(final float pX, final float pY, final BaseItem pBaseItem, final ITextureRegion pQuizBoxTextureRegion, final ITextureRegion pCheckBoxTextureRegion, final ITextureRegion pTickTextureRegion, final ResourceManager pResourceManager){
		super(pX, pY, pQuizBoxTextureRegion, pResourceManager.getEngine().getVertexBufferObjectManager());
		
		this.mResourceManager = pResourceManager;
		this.mBaseItem = pBaseItem;
		this.mQuizBoxTextureRegion = pQuizBoxTextureRegion;
		this.mCheckBoxTextureRegion = pCheckBoxTextureRegion;
		this.mTickTextureRegion = pTickTextureRegion;
	}
	
	public boolean isSelected(){
		return this.mIsSelected;
	}
	
	public boolean isCorrect(){
		return this.mBaseItem.isCorrect();
	}
	
	/**
	 * Creates the quiz item box, placing the image, checkbox, and
	 * text on the sprite
	 */
	public void initializeBox(final ArrayList<QuizItemBox> pSelectedQuizBoxes){
		
		mIsSelected = false;
		
		mCheckBoxSprite = new Sprite(26, this.getHeight() - mCheckBoxTextureRegion.getHeight() * 0.5f - 15, mCheckBoxTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager()){

			@Override
			public boolean onAreaTouched(TouchEvent pSceneTouchEvent,
					float pTouchAreaLocalX, float pTouchAreaLocalY) {
				if(pSceneTouchEvent.isActionDown()){
					
					selectBox((mIsSelected) ? false : true);
					
					if(mIsSelected){
						pSelectedQuizBoxes.add(QuizItemBox.this);
					} else {
						pSelectedQuizBoxes.remove(QuizItemBox.this);
					}
					
					return true;
				}
				
				return false;
			}
			
		};
		mResourceManager.getScene().registerTouchArea(mCheckBoxSprite);
		this.attachChild(mCheckBoxSprite);
		
		mTickSprite = new Sprite(mCheckBoxSprite.getWidth() * 0.5f, mCheckBoxSprite.getHeight() * 0.5f, mTickTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager());
		mTickSprite.setVisible(false);
		mCheckBoxSprite.attachChild(mTickSprite);
		
		mImageSprite = new Sprite(0, this.getHeight() * 0.5f, mBaseItem.getTextureRegion(), mResourceManager.getEngine().getVertexBufferObjectManager());
		mImageSprite.setScale((this.getHeight() - 23) / mImageSprite.getHeight());
		mImageSprite.setX(mCheckBoxSprite.getX() + mCheckBoxSprite.getWidth() + mImageSprite.getWidth() * mImageSprite.getScaleX() * 0.5f + 5);
		this.attachChild(mImageSprite);
		
		mText = new Text(0, 0, ResourceManager.mFont, mBaseItem.getText(ResourceManager.getLanguage()), mBaseItem.getText(ResourceManager.getLanguage()).length(), mResourceManager.getEngine().getVertexBufferObjectManager());
		mText.setPosition(mImageSprite.getX() + mImageSprite.getWidth() * 0.5f + mText.getWidth() * 0.5f + 5, this.getHeight() * 0.5f + ResourceManager.mFont.getLineHeight());
		mText.setColor(0, 0, 0);
		this.attachChild(mText);
	}
	
	private void selectBox(final boolean pSelect){
		this.mTickSprite.setVisible(pSelect);
		this.mIsSelected = pSelect;
	}
}
