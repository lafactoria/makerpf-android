package com.planetfactory.makerpf.Utils;

import org.andengine.input.touch.TouchEvent;

import android.util.Log;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.GameTypes.BaseItem;
import com.planetfactory.makerpf.Resources.ResourceManager;

public abstract class DraggableItem extends MPFSprite{

	//========================================================
	// CONSTANTS
	//========================================================
	protected static final int NOT_POSITIONED = 0;
	protected static final int POSITIONED = 1;
	
	//========================================================
	// VARIABLES
	//========================================================
	protected ResourceManager mResourceManager;
	
	protected float mLocalTouchX;
	protected float mLocalTouchY;
	
	protected boolean mIsSelected = false;
	
	protected IDraggableItemListener mDraggableItemListener;
	
	//========================================================
	// ABSTRACT FUNCTIONS
	//========================================================	
	protected abstract void onPressed(final TouchEvent pSceneTouchEvent, final float pTouchAreaLocalX, final float pTouchAreaLocalY);
	protected abstract void onMoved(final TouchEvent pSceneTouchEvent, final float pTouchAreaLocalX, final float pTouchAreaLocalY);
	protected abstract void onReleased(final TouchEvent pSceneTouchEvent, final float pTouchAreaLocalX, final float pTouchAreaLocalY);
	
	//========================================================
	// CONSTRUCTOR
	//========================================================
	public DraggableItem(BaseItem pBaseItem, ResourceManager pResourceManager, final IDraggableItemListener pDraggableItemListener) {
		super(pBaseItem, pResourceManager);
		this.mResourceManager = pResourceManager;
		this.mDraggableItemListener = pDraggableItemListener;
		this.setTag(NOT_POSITIONED);
	}

	//========================================================
	// ON AREA TOUCHED
	//========================================================
	@Override
	public boolean onAreaTouched(TouchEvent pSceneTouchEvent,	float pTouchAreaLocalX, float pTouchAreaLocalY) {
				
		if(this.getTag() == NOT_POSITIONED){
			if(pSceneTouchEvent.isActionDown()){
				this.setZIndex(2);
				this.getParent().sortChildren();
				this.mIsSelected = true;
				
				onPressed(pSceneTouchEvent, pTouchAreaLocalX, pTouchAreaLocalY);
				return true;
			}
			
			if(mIsSelected && pSceneTouchEvent.isActionMove()){
				onMoved(pSceneTouchEvent, pTouchAreaLocalY, pTouchAreaLocalY);
				return true;
			}
			
			if(mIsSelected && pSceneTouchEvent.isActionUp()){
				this.setZIndex(0);
				
				if(this.hasParent())
				this.getParent().sortChildren();
				
				this.mIsSelected = false;
				
				onReleased(pSceneTouchEvent, pTouchAreaLocalX, pTouchAreaLocalY);
				return true;
			}
		}
		return false;
	}
	
}
