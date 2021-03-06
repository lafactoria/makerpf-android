package com.planetfactory.makerpf.GameTypes.Quiz;

import java.util.ArrayList;

import org.andengine.entity.Entity;
import org.andengine.entity.sprite.Sprite;
import org.andengine.entity.text.AutoWrap;
import org.andengine.entity.text.Text;
import org.andengine.entity.text.TextOptions;
import org.andengine.opengl.texture.region.ITextureRegion;
import org.andengine.util.adt.align.HorizontalAlign;

import android.util.Log;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.GameTypes.Item;
import com.planetfactory.makerpf.GameTypes.Parent;
import com.planetfactory.makerpf.Resources.ResourceManager;

public class QuizPage extends Entity{

	private final ResourceManager mResourceManager;
	
	private final Parent mParent;

	private Sprite mPageImage;
	private Text mPageText;
	
	private ArrayList<QuizItemBox> mQuizBoxes = new ArrayList<QuizItemBox>();

	private ArrayList<QuizItemBox> mSelectedQuizBoxes = new ArrayList<QuizItemBox>();
	private ArrayList<QuizItemBox> mCorrectQuizBoxes = new ArrayList<QuizItemBox>();
	
	public QuizPage(final Parent parent, final ResourceManager pResourceManager){
		this.mResourceManager = pResourceManager;
		this.mParent = parent;
	}
	
	public Parent getItemParent(){
		return this.mParent;
	}
	
	public ArrayList<QuizItemBox> getQuizBoxes(){
		return this.mQuizBoxes;
	}
	
	public ArrayList<QuizItemBox> getSelectedQuizBoxes(){
		return this.mSelectedQuizBoxes;
	}
	
	public ArrayList<QuizItemBox> getCorrectQuizBoxes(){
		return this.mCorrectQuizBoxes;
	}
	
	public void initialize(final ITextureRegion pQuizBoxTextureRegion, final ITextureRegion pCheckBoxTextureRegion, final ITextureRegion pTickTextureRegion){
		
		mPageImage = new Sprite(MainActivity.WIDTH - mParent.getTextureRegion().getWidth(), MainActivity.HEIGHT - mParent.getTextureRegion().getHeight(), mParent.getTextureRegion(), mResourceManager.getEngine().getVertexBufferObjectManager());
		this.attachChild(mPageImage);
		
		TextOptions to = new TextOptions(HorizontalAlign.LEFT);
		to.setAutoWrap(AutoWrap.WORDS);
		to.setAutoWrapWidth(550);
		mPageText = new Text(0, 0, ResourceManager.mFont, mParent.getText(), mParent.getText().length(),to, mResourceManager.getEngine().getVertexBufferObjectManager());
		mPageText.setColor(0, 0, 0);
		mPageText.setScale(1.3f);
		mPageText.setAnchorCenterX(0);
		mPageText.setPosition(60 + MainActivity.MARGIN_X, MainActivity.HEIGHT - 135);
		
		this.attachChild(mPageText);
		
		final float leftX 	= MainActivity.WIDTH / 2 		- pQuizBoxTextureRegion.getWidth() * 0.5f - 10;
		final float rightX 	= MainActivity.WIDTH / 2 		+ pQuizBoxTextureRegion.getWidth() * 0.5f + 10;
		float y 			= MainActivity.HEIGHT * 0.5f 	- pQuizBoxTextureRegion.getHeight() * 0.5f;
		
		Log.v(MainActivity.TAG,"Answers:" + mParent.getItems().size());
		for(int i = 0; i < mParent.getItems().size(); i++){
			final Item item = mParent.getItems().get(i);
			
			if(i % 2 == 0){
				y += pQuizBoxTextureRegion.getHeight();
			}
			
			
			final float boxX;
			final float boxY = y;;
			
			if(i % 2 == 0){
				boxX = leftX;
			} else {
				boxX = rightX;
			}
			
			Log.v(MainActivity.TAG,"Item Position:" +boxX + "x" + boxY);
			final QuizItemBox quizBox = new QuizItemBox(boxX, boxY, item, pQuizBoxTextureRegion, pCheckBoxTextureRegion, pTickTextureRegion, mResourceManager);
			quizBox.initializeBox(mSelectedQuizBoxes);
			this.attachChild(quizBox);
			
			if(quizBox.isCorrect()){
				this.mCorrectQuizBoxes.add(quizBox);
			}
			
			mQuizBoxes.add(quizBox);
		}
	}
	
}
