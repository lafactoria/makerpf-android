package com.planetfactory.makerpf.GameTypes.Drag;

import org.andengine.entity.Entity;
import org.andengine.entity.modifier.MoveModifier;
import org.andengine.input.touch.TouchEvent;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.GameTypes.BaseItem;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Utils.DraggableItem;
import com.planetfactory.makerpf.Utils.IDraggableItemListener;

public class DragPiece extends DraggableItem{

	final MoveModifier mFalseMoveModifier = new MoveModifier(0, 0, 0, 0, 0);
	final MoveModifier mCorrectMoveModifier = new MoveModifier(0, 0, 0, 0, 0);
	
	public DragPiece(BaseItem pBaseItem, ResourceManager pResourceManager, final IDraggableItemListener pDraggableItemListener) {
		super(pBaseItem, pResourceManager, pDraggableItemListener);
	}

	@Override
	protected void onPressed(TouchEvent pSceneTouchEvent,
			float pTouchAreaLocalX, float pTouchAreaLocalY) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected void onMoved(TouchEvent pSceneTouchEvent, float pTouchAreaLocalX,
			float pTouchAreaLocalY) {
		this.setPosition(pSceneTouchEvent.getX(), MainActivity.HEIGHT - pSceneTouchEvent.getY());
	}

	@Override
	protected void onReleased(TouchEvent pSceneTouchEvent,
			float pTouchAreaLocalX, float pTouchAreaLocalY) {
		final float currentX = this.getX();
		final float currentY = this.getY();
		
		final Entity parent = (Entity) this.getUserData();
		
		final float parentLeft = parent.getX() - parent.getWidth() * 0.5f;
		final float parentRight = parent.getX() + parent.getWidth() * 0.5f;
		final float parentBottom = parent.getY() - parent.getHeight() * 0.5f;
		final float parentTop = parent.getY() + parent.getHeight() * 0.5f;
		
		if(currentX >= parentLeft && currentX <= parentRight && currentY <= parentTop && currentY >= parentBottom){
			this.setTag(POSITIONED);
			
			mCorrectMoveModifier.reset(0.1f, this.getX(), parent.getX(), this.getY(), parent.getY());
			this.registerEntityModifier(mCorrectMoveModifier);
			this.mDraggableItemListener.foundPosition();
			
		} else {
			mFalseMoveModifier.reset(0.1f, this.getX(), this.getBaseItem().getX(), this.getY(), this.getBaseItem().getY());
			this.registerEntityModifier(mFalseMoveModifier);
		}
	}
	
}


