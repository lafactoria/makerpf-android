package com.planetfactory.makerpf.GameTypes.Quiz;

import java.util.ArrayList;

import org.andengine.entity.sprite.Sprite;
import org.andengine.entity.text.Text;
import org.andengine.input.touch.TouchEvent;
import org.andengine.opengl.texture.atlas.bitmap.BitmapTextureAtlasTextureRegionFactory;
import org.andengine.opengl.texture.region.ITextureRegion;
import org.andengine.util.adt.color.Color;

import android.util.Log;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.GameTypes.BaseGame;
import com.planetfactory.makerpf.GameTypes.GameSelector;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Utils.MPFSprite;

public class Quiz extends BaseGame{

	private static final String SOUND_BUTTON_STRING = "bt_so.png";
	private static final String POPUP_GREEN_STRING = "bg_popup_green.png";
	private static final String POPUP_RED_STRING = "bg_popup_red.png";
	private static final String POPUP_ARROW_STRING = "popup_arrow.png";
	private static final String QUIZ_BOX_PATH = "answer.png";
	private static final String CHECK_BOX_PATH = "checkbox.png";
	private static final String NEXT_QUESTION_PATH = "nextQuestion.png";
	private static final String TICK_PATH = "tick.png";
	
	private ITextureRegion mSoundButtonTextureRegion;
	private MPFSprite mSoundButtonSprite;
	
	private ITextureRegion mPopupGreenTextureRegion;
	private Popup mCorrectPopup;
	
	private ITextureRegion mPopupRedTextureRegion;
	private Popup mIncorrectPopup;
	
	private Popup mFinalPopup;
	
	private ITextureRegion mPopupArrowTextureRegion;
	
	private ITextureRegion mQuizBoxTextureRegion;
	private ITextureRegion mCheckBoxTextureRegion;
	private ITextureRegion mNextQuestionTextureRegion;
	private ITextureRegion mTickTextureRegion;
	
	private ArrayList<QuizPage> mPages = new ArrayList<QuizPage>();
	
	private QuizPage mCurrentPage;
	
	private int mCorrectQuestions;
	private int mTotalQuestions;
	
	private boolean mQuitGame = false;
	
	public Quiz(ResourceManager pResourceManager) {
		super(pResourceManager);
	}

	@Override
	public void onLoadResources() {
		super.onLoadResources();
		
		String texturePath = IMAGES_FOLDER + SOUND_BUTTON_STRING;
		this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
		mSoundButtonTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);
		
		texturePath = IMAGES_FOLDER + POPUP_GREEN_STRING;
		this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
		mPopupGreenTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);
		
		texturePath = IMAGES_FOLDER + POPUP_RED_STRING;
		this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
		mPopupRedTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);
		
		texturePath = IMAGES_FOLDER + POPUP_ARROW_STRING;
		this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
		mPopupArrowTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);
		
		texturePath = IMAGES_FOLDER + QUIZ_BOX_PATH;
		this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
		mQuizBoxTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);	
		
		texturePath = IMAGES_FOLDER + CHECK_BOX_PATH;
		this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
		mCheckBoxTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);	

		texturePath = IMAGES_FOLDER + NEXT_QUESTION_PATH;
		this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
		mNextQuestionTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);	
		
		texturePath = IMAGES_FOLDER + TICK_PATH;
		this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
		mTickTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);	
	}

	@Override
	public void onUnloadResources() {
		mPages.clear();
		mCorrectQuestions = 0;
		mTotalQuestions = 0;
		mQuitGame = false;
	}

	@Override
	public void onPopulate() {
		super.onPopulate();

		this.mSoundButtonSprite = new MPFSprite(mBackButtonSprite.getX() + mSoundButtonTextureRegion.getWidth() + 5, mBackButtonSprite.getY(), mSoundButtonTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager()){

			@Override
			public boolean onAreaTouched(TouchEvent pSceneTouchEvent,float pTouchAreaLocalX, float pTouchAreaLocalY) {
				if(pSceneTouchEvent.isActionDown()){
					
					if(mCurrentPage != null){
						mCurrentPage.getItemParent().getSound(ResourceManager.getLanguage()).play();
					}
					
					return true;
				}
				return false;
			}
			
		};
		mResourceManager.getScene().registerTouchArea(mSoundButtonSprite);
		this.mSoundButtonSprite.setZIndex(10);
		this.attachChild(this.mSoundButtonSprite);
		
		for(int i = 0; i < this.mParents.size(); i++){
			final QuizPage page = new QuizPage(this.mParents.get(i), mResourceManager);
			this.mPages.add(page);
		}
		
		mTotalQuestions = mParents.size();
		Log.v(MainActivity.TAG,"Total Questions:"+ mTotalQuestions);
		
		// Once pages are created, we select and attach a single one
		getNextPage();
		
		final Sprite nextQuestionSprite = new Sprite(MainActivity.WIDTH * 0.5f, mNextQuestionTextureRegion.getHeight() * 0.5f, mNextQuestionTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager()){

			@Override
			public boolean onAreaTouched(TouchEvent pSceneTouchEvent,
					float pTouchAreaLocalX, float pTouchAreaLocalY) {
				if(pSceneTouchEvent.isActionDown()){
					if(!mQuitGame){
						areSelectionsCorrect();
					}
					return true;
				}
				
				return false;
			}
			
		};
		mResourceManager.getScene().registerTouchArea(nextQuestionSprite);
		this.attachChild(nextQuestionSprite);
		
		attachPopups();
		
		super.onPopulateFinal();
	}
	
	/**
	 * Create and attach the quiz game popups
	 */
	private void attachPopups(){
		
		// Create the 'correct' popup, which is displayed if the user makes a correct answer
		this.mCorrectPopup = new Popup(mPopupGreenTextureRegion, mPopupArrowTextureRegion, mResourceManager){

			@Override
			protected void onActionDown() {

				if(mPages.size() <= 0){
					showPopup(false);
					endGame();
				} else {
					showPopup(false);
					mCurrentPage.setVisible(false);
					getNextPage();
				}
			}
		};
		this.mCorrectPopup.initializPopup(true);
		this.attachChild(this.mCorrectPopup);
		
		// Create the 'incorrect' popup, which is displayed if the user makes a false guess
		this.mIncorrectPopup = new Popup(mPopupRedTextureRegion, mPopupArrowTextureRegion, mResourceManager){

			@Override
			protected void onActionDown() {

				if(mPages.size() <= 0){
					showPopup(false);
					endGame();
				} else {
					showPopup(false);
					mCurrentPage.setVisible(false);
					getNextPage();
				}
			}
		};
		this.mIncorrectPopup.initializPopup(true);
		this.attachChild(this.mIncorrectPopup);
		
		// Create the final popup which handles displaying the final score to the player
		// TODO: Replace with the new texture that has been drawn for this popup
		this.mFinalPopup = new Popup(mPopupGreenTextureRegion, mPopupArrowTextureRegion, mResourceManager){

			@Override
			protected void onActionDown() {
				if(mQuitGame){
					returnToMenu();
				} 
			}
		};
		this.mFinalPopup.initializPopup(false);
		this.attachChild(this.mFinalPopup);
	}
	
	/**
	 * Determines whether or not the number of selected items for the quiz are correct.
	 * @return false if the balance between selected boxes vs. total correct answers is unequal
	 * or if a selected box is not found within the correct answer list. Otherwise returns true.
	 */
	private boolean areSelectionsCorrect(){
		
		if(mCurrentPage.getSelectedQuizBoxes().size() != mCurrentPage.getCorrectQuizBoxes().size()){
			return false;
		}
		
		for(int i = 0; i < mCurrentPage.getSelectedQuizBoxes().size(); i++){
			final QuizItemBox selectedBox = mCurrentPage.getSelectedQuizBoxes().get(i);
			
			boolean isCorrect = false;
			
			for(int j = 0; j < mCurrentPage.getCorrectQuizBoxes().size(); j++){
				final QuizItemBox correctBox = mCurrentPage.getCorrectQuizBoxes().get(j);
				
				if(selectedBox == correctBox){
					isCorrect = true;
					break;
				}
			}
			
			if(!isCorrect){
				mIncorrectPopup.showPopup(true);
				
				return false;
			}
		}
		
		mCorrectPopup.showPopup(true);
		
		this.mCorrectQuestions++;
		
		return true;
	}
	
	/**
	 * Select a random page from the list of pages read in from XML
	 */
	private void getNextPage(){
		final int random = (int) (Math.random() * mPages.size());
		
		mCurrentPage = mPages.remove(random);
		mCurrentPage.initialize(mQuizBoxTextureRegion, mCheckBoxTextureRegion, mTickTextureRegion);
		this.attachChild(mCurrentPage);
		
		this.sortChildren();
	}

	/**
	 * This overridden endGame() method, rather than quiting to the main menu,
	 * is used to display the popup which shows the final score.
	 */
	@Override
	protected void endGame() {
		this.mQuitGame = true;
		
		final String correctCountString = mCorrectQuestions + "/" + mTotalQuestions;
		
		final Text correctCountText = new Text(mFinalPopup.getArrowSprite().getX(), mFinalPopup.getArrowSprite().getY() + mFinalPopup.getArrowSprite().getHeight() + ResourceManager.mLargeFont.getLineHeight() - 15, ResourceManager.mLargeFont, correctCountString, mResourceManager.getEngine().getVertexBufferObjectManager()){
			@Override
			protected void onManagedUpdate(float pSecondsElapsed) {
				if(this.getAlpha() != this.getParent().getAlpha()){
					this.setAlpha(this.getParent().getAlpha());
				}
				super.onManagedUpdate(pSecondsElapsed);
			}
		};
		correctCountText.setColor(Color.BLACK);
		mFinalPopup.attachChild(correctCountText);
		
		this.mFinalPopup.showPopup(true);
	}
	
	/**
	 * Return the user to the menu
	 */
	private void returnToMenu(){
		this.mIsGameOver = true;
	
		this.unloadResources();
		GameSelector.loadGame(GameSelector.MENU_ID);
	}

	@Override
	protected void onStartGame() {
		// TODO Auto-generated method stub
		
	}
	
}
