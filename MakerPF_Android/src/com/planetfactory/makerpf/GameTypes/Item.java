package com.planetfactory.makerpf.GameTypes;

import java.util.Vector;

import org.andengine.opengl.texture.atlas.bitmap.BitmapTextureAtlas;
import org.w3c.dom.Element;

import com.planetfactory.makerpf.Resources.ResourceManager;

public class Item extends BaseItem{

	public Item(Element pElement, Vector<BitmapTextureAtlas> pTextures, ResourceManager pResourceManager) {
		super(pElement, pTextures, pResourceManager);
	}
	
}
