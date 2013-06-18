package com.planetfactory.makerpf.Utils;

import org.andengine.entity.sprite.Sprite;
import org.andengine.opengl.texture.region.ITextureRegion;
import org.andengine.opengl.vbo.VertexBufferObjectManager;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.GameTypes.BaseItem;
import com.planetfactory.makerpf.Resources.ResourceManager;

public class MPFSprite extends Sprite{

	private BaseItem mBaseItem;
	
	public MPFSprite(BaseItem pBaseItem, ResourceManager pResourceManager){
		super(pBaseItem.getX(), MainActivity.HEIGHT - pBaseItem.getY(), pBaseItem.getTextureRegion(), pResourceManager.getEngine().getVertexBufferObjectManager());
		this.mBaseItem = pBaseItem;
		this.setScale(pBaseItem.getScale());
		this.setRotation(pBaseItem.getRotation());
	}
	
	public MPFSprite(float pX, float pY, float pWidth, float pHeight,
			ITextureRegion pTextureRegion,
			VertexBufferObjectManager pVertexBufferObjectManager) {
		super(pX, MainActivity.HEIGHT - pY, pWidth, pHeight, pTextureRegion, pVertexBufferObjectManager);

	}
	
	public MPFSprite(float pX, float pY, ITextureRegion pTextureRegion,
			VertexBufferObjectManager pVertexBufferObjectManager) {
		super(pX, MainActivity.HEIGHT - pY, pTextureRegion, pVertexBufferObjectManager);

	}
	
	public MPFSprite(float pX, float pY, float pWidth, float pHeight, boolean pInvertY, ITextureRegion pTextureRegion,
			VertexBufferObjectManager pVertexBufferObjectManager) {
		super(pX, (pInvertY)? (MainActivity.HEIGHT - pY) : pY, pWidth, pHeight, pTextureRegion, pVertexBufferObjectManager);

	}
	
	public MPFSprite(float pX, float pY, boolean pInvertY, ITextureRegion pTextureRegion,
			VertexBufferObjectManager pVertexBufferObjectManager) {
		super(pX, (pInvertY)? (MainActivity.HEIGHT - pY) : pY, pTextureRegion, pVertexBufferObjectManager);

	}

	public void setBaseItem(final BaseItem pBaseItem){
		this.mBaseItem = pBaseItem;
	}
	
	public BaseItem getBaseItem(){
		return this.mBaseItem;
	}
	
	@Override
	public float getY(){
		return MainActivity.HEIGHT - super.getY();
	}
	
	@Override
	public void setY(float pY) {
		super.setY(MainActivity.HEIGHT - pY);
	}

	@Override
	public void setPosition(float pX, float pY) {
		super.setPosition(pX, MainActivity.HEIGHT - pY);
	}

	@Override
	public void setScale(float pScale) {
		super.setScale(pScale / 1000);
	}

	
}
