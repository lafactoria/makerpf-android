package com.planetfactory.makerpf.Layers.Main;

import org.andengine.entity.sprite.Sprite;
import org.andengine.input.touch.TouchEvent;
import org.andengine.opengl.texture.atlas.bitmap.BitmapTextureAtlas;
import org.andengine.opengl.texture.atlas.bitmap.BitmapTextureAtlasTextureRegionFactory;
import org.andengine.opengl.texture.region.ITextureRegion;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.GameTypes.BaseGame;
import com.planetfactory.makerpf.GameTypes.GameSelector;
import com.planetfactory.makerpf.GameTypes.Item;
import com.planetfactory.makerpf.Layers.BaseLayer;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Utils.MPFSprite;
import com.planetfactory.makerpf.Utils.XMLParser;

public class Main extends BaseLayer{

	private static final String XML_PATH = "cover.xml";
	private static final String XML_OPTIONS_PATH = "options.xml";
	
	private static final String T_PLAY = "play";
	private static final String T_COVER = "cover";
	private static final String T_MENU = "menu";
	
	private static final String A_ACTIVE = "active";
	
	private Document mDocument;
	private Document mOptionsDoc;
	
	private ITextureRegion mBackgroundTextureRegion;
	private ITextureRegion mPlayTextureRegion;
	
	private Sprite mBackgroundSprite;
	private Sprite mPlaySprite;
	
	private boolean mIsCoverActive;
	private boolean mIsMenuActive;
	
	public Main(ResourceManager pResourceManager) {
		super(pResourceManager);
		
		mDocument = XMLParser.parseXMLFile(mResourceManager.getActivity(), XML_PATH);
		mOptionsDoc = XMLParser.parseXMLFile(mResourceManager.getActivity(), XML_OPTIONS_PATH);
	}

	@Override
	public void onLoadResources() {
		
		String texturePath = "images/" + ((Element)mDocument.getElementsByTagName(BaseGame.T_BACKGROUND).item(0)).getAttribute(BaseGame.A_SRC);
		
		BitmapTextureAtlas bta = mResourceManager.createSizedTexture(texturePath);
		if(bta != null){
			this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
			mBackgroundTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);
		}
	
		
		texturePath = "images/" + ((Element)mDocument.getElementsByTagName(T_PLAY).item(0)).getAttribute(BaseGame.A_SRC);
		
		this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
		mPlayTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);
	
		if(mOptionsDoc.getElementsByTagName(T_COVER).getLength() > 0){
			final Element coverElement = (Element) mOptionsDoc.getElementsByTagName(T_COVER).item(0);
			mIsCoverActive = Boolean.valueOf(coverElement.getAttribute(A_ACTIVE));
			MainActivity.mIsCoverActive = mIsCoverActive;
		}

		if(mOptionsDoc.getElementsByTagName(T_MENU).getLength() > 0){
			final Element menuElement = (Element) mOptionsDoc.getElementsByTagName(T_MENU).item(0);
			mIsMenuActive = Boolean.valueOf(menuElement.getAttribute(A_ACTIVE));
			MainActivity.mIsMenuActive = mIsMenuActive;
		}
	}

	@Override
	public void onUnloadResources() {
	}
	
	@Override
	public void onPopulate() {
		
		if(mIsCoverActive){
		
			if(mBackgroundTextureRegion!= null){
				this.mBackgroundSprite = new MPFSprite(MainActivity.WIDTH * 0.5f, MainActivity.HEIGHT * 0.5f, MainActivity.WIDTH, MainActivity.HEIGHT, mBackgroundTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager());
				this.attachChild(this.mBackgroundSprite);
			}

			final float x = Float.valueOf(((Element)mDocument.getElementsByTagName(T_PLAY).item(0)).getAttribute(Item.A_X));
			final float y = Float.valueOf(((Element)mDocument.getElementsByTagName(T_PLAY).item(0)).getAttribute(Item.A_Y));

			this.mPlaySprite = new MPFSprite(x, y, mPlayTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager()){

				@Override
				public boolean onAreaTouched(TouchEvent pSceneTouchEvent,
						float pTouchAreaLocalX, float pTouchAreaLocalY) {

					if(pSceneTouchEvent.isActionDown()){
						Main.this.unloadResources();

						GameSelector.loadGame(GameSelector.MENU_ID);
						return true;
					}
					return false;
				}
			};
			this.mPlaySprite.setPosition(mPlaySprite.getX() + MainActivity.MARGIN_X, mPlaySprite.getY());
			mResourceManager.getScene().registerTouchArea(this.mPlaySprite);
			this.attachChild(this.mPlaySprite);
		} else {
			Main.this.unloadResources();
			GameSelector.loadGame(GameSelector.MENU_ID);
		}
	}
	
}
