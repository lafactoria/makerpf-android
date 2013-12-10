package com.planetfactory.makerpf.GameTypes.DragToContainers;

import org.andengine.entity.Entity;
import org.andengine.entity.modifier.MoveModifier;
import org.andengine.entity.modifier.ParallelEntityModifier;
import org.andengine.entity.modifier.ScaleModifier;
import org.andengine.input.touch.TouchEvent;

import android.util.Log;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.GameTypes.BaseItem;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Utils.DraggableItem;
import com.planetfactory.makerpf.Utils.IDraggableItemListener;

public class DragContainerPiece extends DraggableItem{

	//========================================================
	// VARIABLES
	//========================================================
	final MoveModifier mFalseMoveModifier 		= new MoveModifier(0, 0, 0, 0, 0);
	final MoveModifier mCorrectMoveModifier 	= new MoveModifier(0, 0, 0, 0, 0);
	final ScaleModifier mScaleModifier 			= new ScaleModifier(0, 0, 0);
	
	//========================================================
	// CONSTRUCTOR
	//========================================================
	public DragContainerPiece(BaseItem pBaseItem, ResourceManager pResourceManager, final IDraggableItemListener pDraggableItemListener) {
		super(pBaseItem, pResourceManager, pDraggableItemListener);
	}

	//========================================================
	// ON PRESSED
	//========================================================
	@Override
	protected void onPressed(TouchEvent pSceneTouchEvent,float pTouchAreaLocalX, float pTouchAreaLocalY) {
		mLocalTouchX = pTouchAreaLocalX * this.mScaleX;
		mLocalTouchY = pTouchAreaLocalY * this.mScaleX;
		
		if(getBaseItem().getSound(ResourceManager.getLanguage()) != null){
			getBaseItem().getSound(ResourceManager.getLanguage()).play();
		}
	}

	//========================================================
	// ON MOVED
	//========================================================
	@Override
	protected void onMoved(TouchEvent pSceneTouchEvent, float pTouchAreaLocalX,	float pTouchAreaLocalY) {
		this.setPosition(pSceneTouchEvent.getX(), MainActivity.HEIGHT - pSceneTouchEvent.getY());
	}

	//========================================================
	// ON RELEASE
	//========================================================
	@Override
	protected void onReleased(TouchEvent pSceneTouchEvent,	float pTouchAreaLocalX, float pTouchAreaLocalY) {
		final float currentX = this.getX();
		final float currentY = this.getY();

		if(this.getUserData() != null){
			final Entity parent = (Entity) this.getUserData();

			final float parentLeft = parent.getX() - parent.getWidth() * 0.5f;
			final float parentRight = parent.getX() + parent.getWidth() * 0.5f;
			final float parentBottom = parent.getY() - parent.getHeight() * 0.5f;
			final float parentTop = parent.getY() + parent.getHeight() * 0.5f;

			if(currentX >= parentLeft && currentX <= parentRight && currentY <= parentTop && currentY >= parentBottom){
				this.setTag(POSITIONED);

				mCorrectMoveModifier.reset(0.1f, this.getX(), parent.getX(), this.getY(), parent.getY());
				mScaleModifier.reset(0.5f, this.getScaleX(), 0, this.getScaleY(), 0);

				this.registerEntityModifier(new ParallelEntityModifier(mScaleModifier, mCorrectMoveModifier));
				this.mDraggableItemListener.foundPosition();

				if(getBaseItem().getSound(ResourceManager.getLanguage()) != null){
					getBaseItem().getSound(ResourceManager.getLanguage()).play();
				}

			} else {
				mFalseMoveModifier.reset(0.1f, this.getX(), this.getBaseItem().getX()+MainActivity.MARGIN_X, this.getY(), this.getBaseItem().getY());
				this.registerEntityModifier(mFalseMoveModifier);
			}
		} else {
			mFalseMoveModifier.reset(0.1f, this.getX(), this.getBaseItem().getX()+MainActivity.MARGIN_X, this.getY(), this.getBaseItem().getY());
			this.registerEntityModifier(mFalseMoveModifier);
		}
	}
	
}


