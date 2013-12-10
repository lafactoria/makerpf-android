package com.planetfactory.makerpf.GameTypes.Puzzle;

import org.andengine.entity.modifier.MoveModifier;
import org.andengine.input.touch.TouchEvent;

import android.view.ViewGroup.MarginLayoutParams;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.GameTypes.BaseItem;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Utils.DraggableItem;
import com.planetfactory.makerpf.Utils.IDraggableItemListener;

public class PuzzlePiece extends DraggableItem{

	public PuzzlePiece(BaseItem pBaseItem, ResourceManager pResourceManager, final IDraggableItemListener pDraggableItemListener) {
		super(pBaseItem, pResourceManager, pDraggableItemListener);
	}

	@Override
	protected void onPressed(TouchEvent pSceneTouchEvent,
			float pTouchAreaLocalX, float pTouchAreaLocalY) {
		
		this.getBaseItem().getSound(mResourceManager.getLanguage()).play();
	}

	@Override
	protected void onMoved(TouchEvent pSceneTouchEvent, float pTouchAreaLocalX,	float pTouchAreaLocalY) {
		this.setPosition(pSceneTouchEvent.getX(), MainActivity.HEIGHT - pSceneTouchEvent.getY());
	}

	@Override
	protected void onReleased(TouchEvent pSceneTouchEvent,	float pTouchAreaLocalX, float pTouchAreaLocalY) {
		final float currentX = this.getX();
		final float currentY = this.getY();
		
		final float finalX = this.getBaseItem().getFinalX() + MainActivity.MARGIN_X;
		final float finalY = this.getBaseItem().getFinalY();
		
		if( Math.abs(currentX - finalX) < 80 && Math.abs(currentY - finalY) < 80){
			this.setTag(POSITIONED);
			this.mDraggableItemListener.foundPosition();
			this.registerEntityModifier(new MoveModifier(0.1f, currentX, currentY, finalX, finalY));
		}
	}
	
}


