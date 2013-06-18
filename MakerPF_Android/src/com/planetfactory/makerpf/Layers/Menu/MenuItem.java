package com.planetfactory.makerpf.Layers.Menu;

import org.andengine.opengl.texture.region.ITextureRegion;
import org.w3c.dom.Element;

public class MenuItem {
	
	public static final String A_ID = "id";
	public static final String A_X = "x";
	public static final String A_Y = "y";
	public static final String A_SCALE = "scale";
	public static final String A_ROTATION = "rotation";
	public static final String A_SRC = "src";
	public static final String A_GAME = "game";
	public static final String A_TYPE = "type";
	
	private int mId;
	
	private String mSource;
	private String mGame;
	private String mType;
	
	private float mX;
	private float mY;
	private float mScale;
	private float mRotation;

	private ITextureRegion mTextureRegion;
	
	public MenuItem(final Element pElement){
		mSource = pElement.getAttribute(MenuItem.A_SRC);
		mGame = pElement.getAttribute(MenuItem.A_GAME);
		mType = pElement.getAttribute(MenuItem.A_TYPE);
		mId = Integer.valueOf(pElement.getAttribute(MenuItem.A_ID));
		mX = Float.valueOf(pElement.getAttribute(MenuItem.A_X));
		mY = Float.valueOf(pElement.getAttribute(MenuItem.A_Y));
		mScale = Float.valueOf(pElement.getAttribute(MenuItem.A_SCALE));
		mRotation = Float.valueOf(pElement.getAttribute(MenuItem.A_ROTATION));
	}
	
	public int getId(){
		return this.mId;
	}
	
	public String getSource(){
		return this.mSource;
	}
	
	public String getGame(){
		return this.mGame;
	}
	
	public String getType(){
		return this.mType;
	}
	
	public float getX(){
		return this.mX;
	}
	
	public float getY(){
		return this.mY;
	}
	
	public float getScale(){
		return this.mScale;
	}
	
	public float getRotation(){
		return this.mRotation;
	}
	
	public ITextureRegion getTextureRegion(){
		return this.mTextureRegion;
	}
	
	public void setTextureRegion(final ITextureRegion pTextureRegion){
		this.mTextureRegion = pTextureRegion;
	}
}
