package com.planetfactory.makerpf.GameTypes.DragToContainers;

import org.andengine.entity.modifier.MoveModifier;

import com.planetfactory.makerpf.GameTypes.BaseGame;
import com.planetfactory.makerpf.GameTypes.Item;
import com.planetfactory.makerpf.GameTypes.Parent;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Utils.IDraggableItemListener;
import com.planetfactory.makerpf.Utils.MPFSprite;

public class DragToContainers extends BaseGame implements IDraggableItemListener{

	private int mItemsPlacedInContainer = 0;
	
	private int mTotalItemCount;
	
	public DragToContainers(ResourceManager pResourceManager) {
		super(pResourceManager);
	}

	@Override
	public void onLoadResources() {
		super.onLoadResources();
		
		for(int i = 0; i < mParents.size(); i++){
			if(mParents.get(i).getTextureRegion() != null)
			mTotalItemCount += mParents.get(i).getItems().size();
		}
	}

	@Override
	public void onUnloadResources() {
		mItemsPlacedInContainer = 0;
	}

	@Override
	public void onPopulate() {
		super.onPopulate();
	
		/*
		 * TODO: Temporary test for parents/items
		 */
		// Attach parents
		for(int i = 0; i < mParents.size(); i++){
			final Parent parent = mParents.get(i);
			
			MPFSprite parentSprite = null;
			
			if(parent.getTextureRegion() != null){
				parentSprite = new MPFSprite(parent, mResourceManager);
				this.attachChild(parentSprite);
			}
			
			// Attach items belonging to each parent
			for(int j = 0; j < parent.getItems().size(); j++){
				final Item item = parent.getItems().get(j);
				
				final DragContainerPiece itemSprite = new DragContainerPiece(item, mResourceManager, this);
				this.attachChild(itemSprite);
				
				itemSprite.setUserData(parentSprite);
				mResourceManager.getScene().registerTouchArea(itemSprite);
	
				final float randomX = (float) Math.floor((1024) * Math.random());
				final float randomY = (float) Math.floor((384) * Math.random() - 384);
				
				itemSprite.registerEntityModifier(new MoveModifier(0.3f, randomX, randomY, item.getX(), item.getY()));
			}
		}
		
		super.onPopulateFinal();
	}

	@Override
	public void foundPosition() {
		mItemsPlacedInContainer++;
		
		if(mItemsPlacedInContainer >= mTotalItemCount){
			endGame();
		}
	}

	@Override
	protected void onStartGame() {
		// TODO Auto-generated method stub
	}
}


