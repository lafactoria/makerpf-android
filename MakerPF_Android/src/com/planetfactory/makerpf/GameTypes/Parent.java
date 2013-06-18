package com.planetfactory.makerpf.GameTypes;

import java.util.ArrayList;
import java.util.Vector;

import org.andengine.opengl.texture.atlas.bitmap.BitmapTextureAtlas;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import com.planetfactory.makerpf.Resources.ResourceManager;

public class Parent extends BaseItem{
	
	private ArrayList<Item> mItems = new ArrayList<Item>();
	
	public Parent(Element pElement, Vector<BitmapTextureAtlas> pTextures, ResourceManager pResourceManager) {
		super(pElement, pTextures, pResourceManager);
	}

	public ArrayList<Item> getItems(){
		return this.mItems;
	}

	@Override
	public void initialize() {
		super.initialize();
		
		NodeList list = mElement.getElementsByTagName(BaseGame.T_ITEM);
		
		/*
		 * Iterate through the parent, loading all items belonging to the parent
		 */
		for(int j = 0; j < list.getLength(); j++){
			final Element itemElement = (Element) list.item(j);
			
			final Item item = new Item(itemElement, mTextures, mResourceManager);
			item.initialize();
			
			mItems.add(item);
		}
	}
	
	
}
