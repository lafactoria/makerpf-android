package com.planetfactory.makerpf.GameTypes.QuizText;

import java.util.ArrayList;

import org.andengine.entity.sprite.Sprite;
import org.andengine.entity.text.Text;
import org.andengine.input.touch.TouchEvent;
import org.andengine.opengl.texture.atlas.bitmap.BitmapTextureAtlasTextureRegionFactory;
import org.andengine.opengl.texture.region.ITextureRegion;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.text.Editable;
import android.widget.EditText;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.GameTypes.BaseGame;
import com.planetfactory.makerpf.GameTypes.GameSelector;
import com.planetfactory.makerpf.GameTypes.Quiz.Popup;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Utils.MPFSprite;

public class QuizText extends BaseGame{

	private static final String SOUND_BUTTON_STRING = "bt_so.png";
	private static final String POPUP_GREEN_STRING = "bg_popup_green.png";
	private static final String POPUP_RED_STRING = "bg_popup_red.png";
	private static final String POPUP_ARROW_STRING = "popup_arrow.png";
	private static final String INPUT_STRING = "input.png";
	private static final String NEXT_QUESTION_PATH = "nextQuestion.png";
	
	private static final String DEFAULT_INPUT_TEXT = "Click to type";
	
	private ITextureRegion mInputTextureRegion;
	private Sprite mInputSprite;
	
	private ITextureRegion mSoundButtonTextureRegion;
	private MPFSprite mSoundButtonSprite;
	
	private ITextureRegion mPopupGreenTextureRegion;
	private Popup mCorrectPopup;
	
	private ITextureRegion mPopupRedTextureRegion;
	private Popup mIncorrectPopup;
	
	private Popup mFinalPopup;
	
	private ITextureRegion mPopupArrowTextureRegion;
	private ITextureRegion mNextQuestionTextureRegion;
	
	private ArrayList<QuizTextPage> mPages = new ArrayList<QuizTextPage>();
	private QuizTextPage mCurrentPage;
	
	private int mCorrectQuestions;
	private int mTotalQuestions;
	
	private boolean mQuitGame = false;
	
	private Text mInputText;
	private String mAnswer;
	
	public QuizText(ResourceManager pResourceManager) {
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
	
		texturePath = IMAGES_FOLDER + NEXT_QUESTION_PATH;
		this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
		mNextQuestionTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);	
		
		texturePath = IMAGES_FOLDER + INPUT_STRING;
		this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
		mInputTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);	
		
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
			public boolean onAreaTouched(TouchEvent pSceneTouchEvent,
					float pTouchAreaLocalX, float pTouchAreaLocalY) {
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
			final QuizTextPage page = new QuizTextPage(this.mParents.get(i), mResourceManager);
			this.mPages.add(page);
		}
		
		mTotalQuestions = mParents.size();
		
		// Once pages are created, we select and attach a single one
		getNextPage();
		
		final Sprite nextQuestionSprite = new Sprite(MainActivity.WIDTH * 0.5f, mNextQuestionTextureRegion.getHeight() * 0.5f, mNextQuestionTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager()){

			@Override
			public boolean onAreaTouched(TouchEvent pSceneTouchEvent,
					float pTouchAreaLocalX, float pTouchAreaLocalY) {
				if(pSceneTouchEvent.isActionDown() && !mInputText.getText().equals(DEFAULT_INPUT_TEXT)){
					if(!mQuitGame){
						isAnswerCorrect();
					}
					return true;
				}
				
				return false;
			}
			
		};
		mResourceManager.getScene().registerTouchArea(nextQuestionSprite);
		this.attachChild(nextQuestionSprite);
		
		mInputSprite = new Sprite(MainActivity.WIDTH * 0.5f, nextQuestionSprite.getY() + nextQuestionSprite.getHeight() + mInputTextureRegion.getHeight() * 0.5f, mInputTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager()){

			@Override
			public boolean onAreaTouched(TouchEvent pSceneTouchEvent,
					float pTouchAreaLocalX, float pTouchAreaLocalY) {

				if(pSceneTouchEvent.isActionDown()){
					
					showDialog(mResourceManager.getActivity());
					
					return true;
				}
				
				return false;
			}
			
		};
		mResourceManager.getScene().registerTouchArea(mInputSprite);
		this.attachChild(mInputSprite);
		
		mInputText = new Text(0, mInputSprite.getHeight() * 0.5f, ResourceManager.mFont, DEFAULT_INPUT_TEXT, DEFAULT_INPUT_TEXT.length(), mResourceManager.getEngine().getVertexBufferObjectManager() );		
		mInputText.setAnchorCenterX(0);
		mInputText.setX(10);
		mInputText.setColor(0, 0, 0);
		mInputSprite.attachChild(mInputText);
		
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
	
	private boolean isAnswerCorrect(){
		if(this.mCurrentPage.getAnswer().equals(mAnswer)){
			this.mCorrectQuestions++;
			
			this.mCorrectPopup.showPopup(true);
			return true;
		}
		
		this.mIncorrectPopup.showPopup(true);
		
		return false;
	}
	
	/**
	 * Select a random page from the list of pages read in from XML
	 */
	private void getNextPage(){
		if(mInputText != null)
		mInputText.setText(DEFAULT_INPUT_TEXT);
		
		final int random = (int) (Math.random() * mPages.size());
		
		mCurrentPage = mPages.remove(random);
		mCurrentPage.initialize();
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
		
		final Text correctCountText = new Text(mFinalPopup.getArrowSprite().getX(), mFinalPopup.getArrowSprite().getY() + mFinalPopup.getArrowSprite().getHeight() + ResourceManager.mLargeFont.getLineHeight(), ResourceManager.mLargeFont, correctCountString, mResourceManager.getEngine().getVertexBufferObjectManager()){
			@Override
			protected void onManagedUpdate(float pSecondsElapsed) {
				if(this.getAlpha() != this.getParent().getAlpha()){
					this.setAlpha(this.getParent().getAlpha());
				}
				super.onManagedUpdate(pSecondsElapsed);
			}
		};
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
	
	public void showDialog(final Activity pActivity){
		pActivity.runOnUiThread(new Runnable() {
			@Override
			public void run() {
				AlertDialog.Builder alert = new AlertDialog.Builder(pActivity);
		
				alert.setTitle("Quiz");
				alert.setMessage("Enter Answer");
		
				// Set an EditText view to get user input 
				final EditText input = new EditText(pActivity);
				alert.setView(input);
		
				alert.setPositiveButton("Ok", new DialogInterface.OnClickListener() {
				public void onClick(DialogInterface dialog, int whichButton) {
					Editable value = input.getText();
					if(value.toString().length() < DEFAULT_INPUT_TEXT.length()){
						mAnswer = value.toString();
						mInputText.setText(mAnswer);
					}
				  }
				});
				alert.show();
			}
		});
	}

	@Override
	protected void onStartGame() {
		// TODO Auto-generated method stub
		
	}
}
