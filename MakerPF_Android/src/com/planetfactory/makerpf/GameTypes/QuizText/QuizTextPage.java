package com.planetfactory.makerpf.GameTypes.QuizText;

import org.andengine.entity.Entity;
import org.andengine.entity.sprite.Sprite;
import org.andengine.entity.text.Text;

import android.util.Log;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.GameTypes.Parent;
import com.planetfactory.makerpf.Resources.ResourceManager;

public class QuizTextPage extends Entity{

	private final ResourceManager mResourceManager;
	
	private final Parent mParent;

	private Sprite mPageImage;
	private Text mPageText;
	
	private String mAnswer;
	
	public QuizTextPage(final Parent parent, final ResourceManager pResourceManager){
		this.mResourceManager = pResourceManager;
		this.mParent = parent;
		
		this.mAnswer = this.mParent.getItems().get(0).getAnswer();
	}
	
	public String getAnswer(){
		return this.mAnswer;
	}
	
	public Parent getItemParent(){
		return this.mParent;
	}
	
	public void initialize(){
		
		mPageImage = new Sprite(65, 480, mParent.getTextureRegion(), mResourceManager.getEngine().getVertexBufferObjectManager());
		
		if(mPageImage.getHeight() > mPageImage.getWidth()){
			if(mPageImage.getHeight() > 200){
				mPageImage.setScale(200 / mPageImage.getHeight());
			}
		} else {
			if(mPageImage.getWidth() > 400){
				mPageImage.setScale(400 / mPageImage.getWidth());
			}
		}
		mPageImage.setX(mPageImage.getWidth() * mPageImage.getScaleX() * 0.5f + 20);
		mPageImage.setY(mPageImage.getY() + 20);
		this.attachChild(mPageImage);
		
		mPageText = new Text(0, 0, ResourceManager.mFont, mParent.getText(ResourceManager.getLanguage()), mResourceManager.getEngine().getVertexBufferObjectManager());
		mPageText.setScale(1.3f);
		mPageText.setColor(0, 0, 0);
		mPageText.setPosition(mPageImage.getX() + mPageImage.getWidth() * mPageImage.getScaleX() * 0.5f + mPageText.getWidth(), mPageImage.getY() + mPageImage.getHeight() * mPageImage.getScaleX() * 0.5f - mPageText.getHeight());
		this.attachChild(mPageText);
		
	}
	
}
