package com.planetfactory.makerpf.GameTypes.Explore;

import org.andengine.input.touch.TouchEvent;

import android.util.Log;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.GameTypes.BaseGame;
import com.planetfactory.makerpf.GameTypes.Item;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Utils.MPFSprite;
import com.planetfactory.makerpf.Utils.Actions.ActionFactory;

public class Explore extends BaseGame{

	public Explore(ResourceManager pResourceManager) {
		super(pResourceManager);
	}

	@Override
	public void onLoadResources() {
		super.onLoadResources();

	}

	@Override
	public void onUnloadResources() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void onPopulate() {
		super.onPopulate();

		for(int i = 0; i < mItems.size(); i++){
			final Item item = mItems.get(i);
			
			final MPFSprite sprite = new MPFSprite(item, mResourceManager){

				@Override
				public boolean onAreaTouched(TouchEvent pSceneTouchEvent,
						float pTouchAreaLocalX, float pTouchAreaLocalY) {

					if(pSceneTouchEvent.isActionDown()){
						
						if(this.getBaseItem().getActionSource() != null){
							this.registerEntityModifier(ActionFactory.createAction(this, item.getActionWrappers()));
						}
						
						if(this.getBaseItem().getSound(ResourceManager.getLanguage()) != null){
							this.getBaseItem().getSound(ResourceManager.getLanguage()).play();
						}
						
						return true;
					}
					
					return false;
				}
				
			};
			mResourceManager.getScene().registerTouchArea(sprite);
			this.attachChild(sprite);
		}
		
		super.onPopulateFinal();
	}

	@Override
	protected void onStartGame() {
		// TODO Auto-generated method stub
		
	}

}
