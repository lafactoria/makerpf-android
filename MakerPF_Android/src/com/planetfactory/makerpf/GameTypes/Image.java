package com.planetfactory.makerpf.GameTypes;

import java.util.Vector;

import org.andengine.opengl.texture.atlas.bitmap.BitmapTextureAtlas;
import org.w3c.dom.Element;

import com.planetfactory.makerpf.Resources.ResourceManager;

public class Image extends BaseItem {
	
	protected String mId;
	
	protected String mSource;
	
	public Image(Element pElement, Vector<BitmapTextureAtlas> pTextures, ResourceManager pResourceManager) {
		super(pElement, pTextures, pResourceManager);
	
		if(!pElement.getAttribute(Item.A_ID).equals(""))
		mId = pElement.getAttribute(A_ID);
		
		if(!pElement.getAttribute(Item.A_SRC).equals(""))
		mSource = pElement.getAttribute(Item.A_SRC);
	}
	
	public String getImageId(){
		return this.mId;
	}

	public String getSource(){
		return this.mSource;
	}
}
