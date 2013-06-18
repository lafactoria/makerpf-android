package com.planetfactory.makerpf.GameTypes.FindMe;

import org.andengine.entity.IEntity;
import org.andengine.entity.modifier.IEntityModifier;
import org.andengine.entity.modifier.ParallelEntityModifier;
import org.andengine.entity.modifier.RotationModifier;
import org.andengine.entity.modifier.ScaleModifier;
import org.andengine.entity.modifier.SequenceEntityModifier;
import org.andengine.input.touch.TouchEvent;
import org.andengine.util.modifier.IModifier;

import android.graphics.Point;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.GameTypes.BaseGame;
import com.planetfactory.makerpf.GameTypes.Item;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Resources.SoundManager;
import com.planetfactory.makerpf.Utils.MPFSprite;

public class FindMe extends BaseGame{
	
	private static final int ROWS = 6;
	private static final int COLUMNS = 10;
	
	private int mItemToFind;
	private Point mCellToFind;
	
	public FindMe(ResourceManager pResourceManager) {
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

		mItemToFind = (int) (Math.random() * mItems.size());
		
		mCellToFind = new Point((int)(Math.random() * COLUMNS) + 1, (int)(Math.random() * ROWS) + 1);
		
		final int width = (MainActivity.WIDTH - 45) / COLUMNS;
		final int height =(MainActivity.HEIGHT - 190) / ROWS;
		
		float x = (MainActivity.WIDTH - 30) / COLUMNS;
		float y = (MainActivity.HEIGHT - 135) / ROWS;
		
		for(int i = 0; i < ROWS; i++){
			
			
			for(int j = 0; j < COLUMNS; j++){
				
				final Item item;
				
				if(mCellToFind.x == j + 1 && mCellToFind.y == i + 1){
					item = mItems.get(mItemToFind);
					
					final MPFSprite sprite = new MPFSprite(item, mResourceManager){

						@Override
						public boolean onAreaTouched( TouchEvent pSceneTouchEvent,
								float pTouchAreaLocalX, float pTouchAreaLocalY) {
							
							if(pSceneTouchEvent.isActionDown() && !mIsGameOver){
								mResourceManager.getSoundManager().playFX(SoundManager.BOTO);
								
								final SequenceEntityModifier scaleSequenceModifier = new SequenceEntityModifier(new ScaleModifier(0.2f, 1, 1.5f), new ScaleModifier(0.2f, 1.5f, 1));
								final RotationModifier rotationModifier = new RotationModifier(0.4f, 0, 360);
								
								final ParallelEntityModifier animationModifier = new ParallelEntityModifier(scaleSequenceModifier, rotationModifier);
								
								animationModifier.addModifierListener(new IEntityModifier.IEntityModifierListener(){

									@Override
									public void onModifierStarted(
											IModifier<IEntity> pModifier,
											IEntity pItem) {
									}

									@Override
									public void onModifierFinished(
											IModifier<IEntity> pModifier,
											IEntity pItem) {
										endGame();
									}
									
								});
								
								this.registerEntityModifier(animationModifier);
								
								
								
								return true;
							}
							
							return false;
						}
						
					};
					sprite.setSize(width - 15, height - 15);
					sprite.setPosition(width * j + width * 0.5f + 30, height * i + height * 0.5f + 10);
					this.attachChild(sprite);
					mResourceManager.getScene().registerTouchArea(sprite);
					
				} else {
					
					int itemIndex = -1;
					
					while(itemIndex == mItemToFind || itemIndex == -1){
						itemIndex = (int) (Math.random() * mItems.size());
					}
					
					item = mItems.get(itemIndex);
					
					final MPFSprite sprite = new MPFSprite(item, mResourceManager);
					sprite.setSize(width - 15, height - 15);
					sprite.setPosition(width * j + width * 0.5f + 30, height * i + height * 0.5f + 10);
					this.attachChild(sprite);
				}
			}
		}
		
		
		final Item item = mItems.get(mItemToFind);
		
		final MPFSprite sprite = new MPFSprite(item, mResourceManager);
		this.attachChild(sprite);
		
		super.onPopulateFinal();
	}

	@Override
	protected void onStartGame() {
		// TODO Auto-generated method stub
		
	}

}
