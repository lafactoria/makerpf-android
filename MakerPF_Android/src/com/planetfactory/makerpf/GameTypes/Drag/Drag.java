package com.planetfactory.makerpf.GameTypes.Drag;

import org.andengine.entity.modifier.MoveModifier;
import org.andengine.entity.modifier.ParallelEntityModifier;
import org.andengine.entity.modifier.ScaleModifier;
import org.andengine.entity.text.Text;
import org.andengine.input.touch.TouchEvent;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.GameTypes.BaseGame;
import com.planetfactory.makerpf.GameTypes.Item;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Utils.MPFSprite;

public class Drag extends BaseGame{
	
	public Drag(ResourceManager pResourceManager) {
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

		/*
		 * TODO: Temporary test for items
		 */
		for(int i = 0; i < mItems.size(); i++){
			final Item item = mItems.get(i);
			
			final MPFSprite sprite = new MPFSprite(item, mResourceManager){

				@Override
				public boolean onAreaTouched(TouchEvent pSceneTouchEvent,
						float pTouchAreaLocalX, float pTouchAreaLocalY) {

					if(pSceneTouchEvent.isActionDown()){
						if(this.getBaseItem().getSound(ResourceManager.getLanguage()) != null){
							this.getBaseItem().getSound(ResourceManager.getLanguage()).play();
						}
		
						return true;
					}
					
					if(pSceneTouchEvent.isActionMove()){
						this.setPosition(pSceneTouchEvent.getX(), MainActivity.HEIGHT - pSceneTouchEvent.getY());
						
						if(this.getY() < 620 && this.getScaleX() == this.getBaseItem().getScale() / 1000){
							final ScaleModifier scaleModifier = new ScaleModifier(0.3f, this.getScaleX(), this.getBaseItem().getScaleActive() / 1000);
							this.registerEntityModifier(scaleModifier);
						}
						
						return true;
					}
					
					if(pSceneTouchEvent.isActionUp()){
						if(this.getY() > 600){
							final MoveModifier moveModifier = new MoveModifier(0.2f, this.getX(), this.getY(), this.getBaseItem().getX(), this.getBaseItem().getY());

							final ParallelEntityModifier parallelModifier;

							
							if(this.getScaleX() != this.getBaseItem().getScale()  / 1000){
								final ScaleModifier scaleModifier = new ScaleModifier(0.3f, this.getScaleX(), this.getBaseItem().getScale() / 1000);
								parallelModifier = new ParallelEntityModifier(moveModifier, scaleModifier);
							} else {
								parallelModifier = new ParallelEntityModifier(moveModifier);
							}

							this.registerEntityModifier(parallelModifier);
						}

						return true;
					}
					
					return false;
				}
				
			};
			mResourceManager.getScene().registerTouchArea(sprite);
			this.attachChild(sprite);
			
			if(item.getKind() > 1){
				final Text text = new Text(sprite.getWidth() * 0.5f, sprite.getHeight() * 0.5f, mResourceManager.mFont, item.getText(), mResourceManager.getEngine().getVertexBufferObjectManager());
				text.setColor(item.getColor());
				sprite.attachChild(text);
				sprite.setAlpha(0);
			}
			sprite.setPosition(sprite.getX() + MainActivity.MARGIN_X, sprite.getY());
		}
		
		super.onPopulateFinal();
	}

	@Override
	protected void onStartGame() {
		// TODO Auto-generated method stub
		
	}

}
