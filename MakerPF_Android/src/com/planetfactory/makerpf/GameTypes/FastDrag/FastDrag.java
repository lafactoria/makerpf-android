package com.planetfactory.makerpf.GameTypes.FastDrag;

import java.util.ArrayList;

import org.andengine.entity.modifier.DelayModifier;
import org.andengine.entity.modifier.MoveModifier;
import org.andengine.entity.modifier.SequenceEntityModifier;
import org.andengine.entity.text.Text;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.GameTypes.BaseGame;
import com.planetfactory.makerpf.GameTypes.Item;
import com.planetfactory.makerpf.GameTypes.Parent;
import com.planetfactory.makerpf.GameTypes.DragToContainers.DragContainerPiece;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Resources.SoundManager;
import com.planetfactory.makerpf.Utils.IDraggableItemListener;
import com.planetfactory.makerpf.Utils.MPFSprite;

public class FastDrag extends BaseGame implements IDraggableItemListener{
	
	private int mItemsPlacedInContainer = 0;
	
	private int mTotalItemCount;
	
	private ArrayList<Integer> mSpawnSequence = new ArrayList<Integer>();
	private int mCurrentSpawnValue = 0;
	
	public FastDrag(ResourceManager pResourceManager) {
		super(pResourceManager);
	}

	@Override
	public void onLoadResources() {
		super.onLoadResources();
		
		for(int i = 0; i < mParents.size(); i++){
			mTotalItemCount += mParents.get(i).getItems().size();
			
			for(int j = 0; j < mTotalItemCount; j++){
				mSpawnSequence.add(mCurrentSpawnValue);
				
				mCurrentSpawnValue += 2;
			}
		}
	}

	@Override
	public void onUnloadResources() {
		mItemsPlacedInContainer = 0;
	}

	@Override
	public void onPopulate() {
		super.onPopulate();
	
		// Attach parents
		for(int i = 0; i < mParents.size(); i++){
			final Parent parent = mParents.get(i);
			
			final MPFSprite parentSprite = new MPFSprite(parent, mResourceManager);
			this.attachChild(parentSprite);
			
			if(parent.getKind() > 1){
				final Text text = new Text(parentSprite.getWidth() * 0.5f, parentSprite.getHeight() * 0.5f, mResourceManager.mFont, parent.getText(), mResourceManager.getEngine().getVertexBufferObjectManager());
				text.setColor(parent.getColor());
				parentSprite.attachChild(text);
				parentSprite.setAlpha(0);
			}
			parentSprite.setPosition(parentSprite.getX() + MainActivity.MARGIN_X, parentSprite.getY());
			
			// Attach items belonging to each parent
			for(int j = 0; j < parent.getItems().size(); j++){
				final Item item = parent.getItems().get(j);
				
				final DragContainerPiece itemSprite = new DragContainerPiece(item, mResourceManager, this);
				itemSprite.setPosition(0, -1000);
				this.attachChild(itemSprite);
				
				itemSprite.setUserData(parentSprite);
				mResourceManager.getScene().registerTouchArea(itemSprite);
	
				final float randomX = (float) Math.floor((1024) * Math.random());
				final float randomY = (float) Math.floor((384) * Math.random() - 384);
				
				final int randomValue = mSpawnSequence.remove((int) (Math.random() * mSpawnSequence.size()));
				
				itemSprite.registerEntityModifier(new SequenceEntityModifier(new DelayModifier(randomValue), new MoveModifier(0.3f, randomX, randomY, item.getX() + MainActivity.MARGIN_X, item.getY())));
		
				if(item.getKind() > 1){
					final Text text = new Text(itemSprite.getWidth() * 0.5f, itemSprite.getHeight() * 0.5f, mResourceManager.mFont, item.getText(), mResourceManager.getEngine().getVertexBufferObjectManager());
					text.setColor(item.getColor());
					itemSprite.attachChild(text);
					itemSprite.setAlpha(0);
				}
			}
		}
		
		super.onPopulateFinal();
	}

	@Override
	public void foundPosition() {
		mResourceManager.getSoundManager().playFX(SoundManager.BOTO);
		
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


