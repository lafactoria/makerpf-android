package com.planetfactory.makerpf.GameTypes.Differences;

import java.util.ArrayList;

import org.andengine.entity.modifier.AlphaModifier;
import org.andengine.entity.text.Text;
import org.andengine.input.touch.TouchEvent;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.GameTypes.BaseGame;
import com.planetfactory.makerpf.GameTypes.Image;
import com.planetfactory.makerpf.GameTypes.Item;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Resources.SoundManager;
import com.planetfactory.makerpf.Utils.MPFSprite;
import com.planetfactory.makerpf.Utils.XMLParser;

public class Differences extends BaseGame{

	private static final String T_ORIENTATION = "orientation";
	private static final String A_VALUE = "value";
	
	
	private ArrayList<MPFSprite> mDifferences = new ArrayList<MPFSprite>();
	
	private String mOrientationValue;
	
	private int mDifferencesFoundCount = 0;
	
	public Differences(ResourceManager pResourceManager) {
		super(pResourceManager);
	}

	@Override
	public void onLoadResources() {
		super.onLoadResources();

		// Get orientation value
		NodeList list = XMLParser.parseDocument(T_ORIENTATION, mGameDocument);
		Element e = (Element) list.item(0);
		mOrientationValue = e.getAttribute(A_VALUE);
	}

	@Override
	public void onUnloadResources() {
		mDifferencesFoundCount = 0;
		mDifferences.clear();
	}

	@Override
	public void onPopulate() {
		super.onPopulate();
		
		for(int i = 0; i < mImages.size(); i++){
			final Image image = mImages.get(i);
			
			float x = 0;
			float y = 0;
			
			float itemX = 0;
			float itemY = 0;
			
			if(this.mOrientationValue.equals("horizontal")){
			    x = MainActivity.WIDTH * 0.5f;
			    y = (384 * i) + (image.getTextureRegion().getHeight() * 0.5f);
			    
			    itemX = 0;
			    itemY = 384 * i + 140;
			}

			if(this.mOrientationValue.equals("vertical")){
			    x = (512 * i) + (image.getTextureRegion().getWidth() * 0.5f);
			    y = MainActivity.HEIGHT * 0.5f;
			    
			    itemX = 512 * i;
			    itemY = 0;
			} 
			
			final MPFSprite sprite = new MPFSprite(x + 120, y, image.getTextureRegion(), mResourceManager.getEngine().getVertexBufferObjectManager());
			this.attachChild(sprite);
			
			for(int j = 0; j < mItems.size(); j++){
				final Item item = mItems.get(j);
				
				final MPFSprite itemSprite = new MPFSprite(item, mResourceManager){

					@Override
					public boolean onAreaTouched(TouchEvent pSceneTouchEvent,
							float pTouchAreaLocalX, float pTouchAreaLocalY) {

						if(pSceneTouchEvent.isActionDown() && this.getAlpha() == 0){
							for(int i = 0; i < mDifferences.size(); i++){
								final MPFSprite sprite = mDifferences.get(i);
								
								if(sprite.getTag() == this.getTag()){
									sprite.registerEntityModifier(new AlphaModifier(0.4f, 0, 1));
								}
							}
							
							mResourceManager.getSoundManager().playFX(SoundManager.BOTO);
							mDifferencesFoundCount++;
							
							if(mDifferencesFoundCount >= mItems.size()){
								endGame();
							}
							
							return true;
						}
						
						return false;
					}					
				};
				itemSprite.setTag(j);
				itemSprite.setPosition(item.getX() + itemX , item.getY() + itemY);
				itemSprite.setAlpha(0);				
				this.attachChild(itemSprite);
				mResourceManager.getScene().registerTouchArea(itemSprite);
				
				if(item.getKind() > 1){
					final Text text = new Text(itemSprite.getWidth() * 0.5f, itemSprite.getHeight() * 0.5f, mResourceManager.mFont, item.getText(), mResourceManager.getEngine().getVertexBufferObjectManager());
					text.setColor(item.getColor());
					itemSprite.attachChild(text);
					itemSprite.setAlpha(0);
				}
				
				itemSprite.setPosition(itemSprite.getX() /*+ MainActivity.MARGIN_X*/, itemSprite.getY());
				
				mDifferences.add(itemSprite);
			}
		}
		
		super.onPopulateFinal();
	}

	@Override
	protected void onStartGame() {
		// TODO Auto-generated method stub
		
	}
	
	
}
