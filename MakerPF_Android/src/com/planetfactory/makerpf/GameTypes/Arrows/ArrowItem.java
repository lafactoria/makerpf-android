package com.planetfactory.makerpf.GameTypes.Arrows;

import org.andengine.entity.primitive.Rectangle;
import org.andengine.entity.sprite.Sprite;
import org.andengine.opengl.texture.region.ITextureRegion;
import org.andengine.util.math.MathUtils;

import com.planetfactory.makerpf.Resources.ResourceManager;

public class ArrowItem extends Rectangle{

	private static final int LINE_WIDTH = 13;
	
	final ResourceManager mResourceManager;
	final ITextureRegion mArrowTipTextureRegion;
	
	final Sprite mTipOne;
	final Sprite mTipTwo;
	
	public ArrowItem(final float pX, final float pY, final ITextureRegion pTextureRegion, final ResourceManager pResourceManager) {
		super(pX, pY, 1, LINE_WIDTH, pResourceManager.getEngine().getVertexBufferObjectManager());

		this.mResourceManager = pResourceManager;
		this.mArrowTipTextureRegion = pTextureRegion;
		
		mTipOne = new Sprite(pX, pY, 12, 13, pTextureRegion, pResourceManager.getEngine().getVertexBufferObjectManager());
		mTipTwo = new Sprite(pX, pY, 12, 13, pTextureRegion, pResourceManager.getEngine().getVertexBufferObjectManager());
		
		final float red = (float) Math.random();
		final float green = (float) Math.random();
		final float blue = (float) Math.random();
		
		this.setRotationCenter(0, 0.5f);
		this.setScaleCenter(0, 0.5f);
		
		this.setColor(red, green, blue);
		mTipOne.setColor(red, green, blue);
		mTipTwo.setColor(red, green, blue);
	}
	
	public void updateLine(final float pX, final float pY){
		mTipTwo.setPosition(pX, pY);
		
		final float dX = pX - this.mX;
		final float dY = pY - this.mY;
		
		final float angle = (float) Math.atan2(-dY, dX);
		
		final float rotation = MathUtils.radToDeg(angle);
		
		mTipOne.setRotation(rotation);
		mTipTwo.setRotation(rotation - 180);
		
		this.setRotation(rotation);
		
		
		final float length = (dX * dX) + (dY * dY);
		
		this.setScaleX((float) Math.sqrt(length));
	}

	@Override
	public void onAttached() {
		super.onAttached();
		
		this.getParent().attachChild(mTipOne);
		this.getParent().attachChild(mTipTwo);
	}

	@Override
	public void onDetached() {
		super.onDetached();
		
		mTipOne.detachSelf();
		mTipTwo.detachSelf();
	}
	
}
