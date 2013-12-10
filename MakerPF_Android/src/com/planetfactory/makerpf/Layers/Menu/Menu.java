package com.planetfactory.makerpf.Layers.Menu;

import java.util.ArrayList;
import java.util.Vector;

import org.andengine.input.touch.TouchEvent;
import org.andengine.opengl.texture.atlas.bitmap.BitmapTextureAtlas;
import org.andengine.opengl.texture.atlas.bitmap.BitmapTextureAtlasTextureRegionFactory;
import org.andengine.opengl.texture.region.ITextureRegion;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import android.util.Log;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.GameTypes.BaseGame;
import com.planetfactory.makerpf.GameTypes.GameSelector;
import com.planetfactory.makerpf.Layers.BaseLayer;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Utils.MPFSprite;
import com.planetfactory.makerpf.Utils.XMLParser;

public class Menu extends BaseLayer{

	//============================================================
	// CONSTANTS
	//============================================================
	public static final String BACK_BUTTON_FILENAME = "bt_enrera.png";
	
	public static final String XML_PATH = "menu.xml";
	public static final String T_ITEM = "menuItem";
	
	//============================================================
	// VARIABLES
	//============================================================
	private Document mDocument;
	
	private ArrayList<MenuItem> mMenuItems = new ArrayList<MenuItem>();
	
	private ITextureRegion mBackgroundTextureRegion;
	private MPFSprite mBackgroundSprite;
	
	private ITextureRegion mBackButtonTextureRegion;
	private MPFSprite mBackButtonSprite;
	
	private Vector<MPFSprite> mMenuSprites = new Vector<MPFSprite>(5);
	
	//============================================================
	// CONSTRUCTOR
	//============================================================
	public Menu(ResourceManager pResourceManager) {
		super(pResourceManager);
		this.mDocument = XMLParser.parseXMLFile(mResourceManager.getActivity(), XML_PATH);
	}

	//============================================================
	// ON LOAD RESOURCES
	//============================================================
	@Override
	public void onLoadResources() {
		
		/*
		 * Create Background Texture
		 */
		String texturePath = BaseGame.IMAGES_FOLDER + ((Element)mDocument.getElementsByTagName(BaseGame.T_BACKGROUND).item(0)).getAttribute(BaseGame.A_SRC);
		BitmapTextureAtlas bta = mResourceManager.createSizedTexture(texturePath);
		if(bta!=null){
			this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
			mBackgroundTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);
		}
		/*
		 * Create Back Button Texture
		 */
		texturePath = BaseGame.IMAGES_FOLDER + BACK_BUTTON_FILENAME;

		this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
		mBackButtonTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);
	
		/*
		 * Create Menu Items (Games Buttons)
		 */
		final NodeList nodeList = XMLParser.parseDocument(T_ITEM, mDocument);
		
		if(nodeList != null && nodeList.getLength() > 0){
			for(int i = 0; i < nodeList.getLength(); i++){
				Element element = (Element) nodeList.item(i);
				
				MenuItem menuItem = new MenuItem(element);
				
				texturePath = BaseGame.IMAGES_FOLDER + menuItem.getSource();
				
				this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
				final ITextureRegion textureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);
			
				menuItem.setTextureRegion(textureRegion);
				
				this.mMenuItems.add(menuItem);
			}
		}
	}

	//============================================================
	// ON UNLOAD
	//============================================================
	@Override
	public void onUnloadResources() {
	}
	
	//============================================================
	// CREATE ACTION
	//============================================================
	@Override
	public void onPopulate() {
		
		if(MainActivity.mIsMenuActive){ 
			if(mBackButtonTextureRegion!=null){
				this.mBackgroundSprite = new MPFSprite(MainActivity.WIDTH * 0.5f, MainActivity.HEIGHT * 0.5f, MainActivity.WIDTH, MainActivity.HEIGHT, mBackgroundTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager());
				this.attachChild(this.mBackgroundSprite);
			}

			this.mBackButtonSprite = new MPFSprite(mBackButtonTextureRegion.getWidth() * 0.5f + 5, mBackButtonTextureRegion.getHeight() * 0.5f + 5, mBackButtonTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager()){

				@Override
				public boolean onAreaTouched(TouchEvent pSceneTouchEvent, float pTouchAreaLocalX, float pTouchAreaLocalY) {
					if(pSceneTouchEvent.isActionDown()){
						Menu.this.unloadResources();
						GameSelector.loadGame(GameSelector.MAIN_ID);
						return true;
					}
					return false;
				}
			};
			mResourceManager.getScene().registerTouchArea(mBackButtonSprite);
			this.attachChild(this.mBackButtonSprite);
		}
		
		for(int i = 0; i < this.mMenuItems.size(); i++){
			final MenuItem item = this.mMenuItems.get(i);

			Log.v(MainActivity.TAG,"Create menu item:" + item.getType() + "--" + item.getGame());
			
			final BaseGame game = GameSelector.createGame(item.getType(), mResourceManager);
			game.setGamePath(item.getGame() + "/");
			game.setId(item.getId());

			MainActivity.mGames.put(item.getId(), game);
			
			if(MainActivity.mIsMenuActive){
				MPFSprite sprite = new MPFSprite(item.getX(), item.getY(), item.getTextureRegion(), mResourceManager.getEngine().getVertexBufferObjectManager()){

					@Override
					public boolean onAreaTouched(TouchEvent pSceneTouchEvent, float pTouchAreaLocalX, float pTouchAreaLocalY) {
						
						if(pSceneTouchEvent.isActionDown()){
							if(!item.getType().equals("paint")){
								
								Menu.this.unloadResources();
							}
							GameSelector.loadGame(item.getId());
							//disableMenu();
							return true;
						}
						return false;
					}
				}; 
				sprite.setPosition(sprite.getX() + MainActivity.MARGIN_X, sprite.getY());
				sprite.setScale(item.getScale());
				this.attachChild(sprite);
				mMenuSprites.add(sprite);
			} 
		}				
		enableMenu();
		
		if(!MainActivity.mIsMenuActive){
			this.unloadResources();
			GameSelector.loadGame(1);
		}
	}
	
	//============================================================
	// ENABLE MENU
	//============================================================
	public void enableMenu(){
		for(MPFSprite s : mMenuSprites){
			mResourceManager.getScene().registerTouchArea(s);
		}
	}
	
	//============================================================
	// DISABLE MENU
	//============================================================
	public void disableMenu(){
		for(MPFSprite s : mMenuSprites){
			mResourceManager.getScene().unregisterTouchArea(s);
		}
	}
}
