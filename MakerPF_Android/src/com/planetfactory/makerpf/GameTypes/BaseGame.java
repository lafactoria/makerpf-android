package com.planetfactory.makerpf.GameTypes;


import java.util.ArrayList;

import org.andengine.engine.handler.timer.ITimerCallback;
import org.andengine.engine.handler.timer.TimerHandler;
import org.andengine.entity.IEntity;
import org.andengine.entity.modifier.AlphaModifier;
import org.andengine.entity.modifier.DelayModifier;
import org.andengine.entity.modifier.IEntityModifier;
import org.andengine.entity.modifier.SequenceEntityModifier;
import org.andengine.input.touch.TouchEvent;
import org.andengine.opengl.texture.atlas.bitmap.BitmapTextureAtlasTextureRegionFactory;
import org.andengine.opengl.texture.region.ITextureRegion;
import org.andengine.util.modifier.IModifier;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import android.util.Log;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.Layers.BaseLayer;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Resources.SoundManager;
import com.planetfactory.makerpf.Utils.MPFSprite;
import com.planetfactory.makerpf.Utils.XMLParser;

public abstract class BaseGame extends BaseLayer implements IInstructionBoxListener{

	//========================================================
	// CONSTANTS
	//========================================================
	public static final String IMAGES_FOLDER = "images/";
	public static final String SOUNDS_FOLDER = "sounds/";
	public static final String ACTIONS_FOLDER = "actions/";
	
	private static final String MENU_BUTTON_FILENAME = "bt_menu.png";
	private static final String NEXT_BUTTON_FILENAME = "bt_adelante.png";
	private static final String PREVIOUS_BUTTON_FILENAME = "bt_enrera.png";

	public static final String XML_GAME = "game.xml";
	public static final String XML_END_GAME = "end_game.xml";
	
	public static final String T_ID = "id";
	public static final String T_TYPE = "type";
	public static final String T_AVATAR = "avatar";
	public static final String T_DESC = "desc";
	public static final String T_COUNTER = "counter";
	public static final String T_ITEM = "item";
	public static final String T_PARENT = "parent";
	public static final String T_TEXTS	= "texts";
	public static final String T_TEXT	= "text";
	public static final String T_SOUNDS	= "sounds";
	public static final String T_SOUND	= "sound";
	public static final String T_PAGE = "page";
	public static final String T_BACKGROUND = "background";
	public static final String T_FOREGROUND = "foreground";
	public static final String T_IMAGE = "image";
	public static final String T_INSTRUCTION = "instruction";
	
	public static final String A_ID = "val";
	public static final String A_TYPE = "type";
	public static final String A_AVATAR = "active";
	public static final String A_DESC = "text";
	public static final String A_COUNTER = "n";
	public static final String A_SRC = "src";
	public static final String A_LANGUAGE = "lang";
	public static final String A_TEXT = "text";
	public static final String A_RGB = "rgb";
	
	// ===========================================================
	// VARIABLES
	// ===========================================================
	protected Document mGameDocument;
	protected Document mEndGameDocument;
	
	protected String mId;
	protected String mType;
	protected String mDescription;
	protected String mGamePath;
	protected boolean mAvatar;
	protected int mCounter;
	
	protected boolean mIsGameOver = false;
	
	private InstructionBox mInstructionBox;
	
	private ITextureRegion mBackgroundTextureRegion;
	protected MPFSprite mBackgroundSprite;
	
	private ITextureRegion mEndGameTextureRegion;
	protected MPFSprite mEndGameSprite;
	
	private ITextureRegion mBackButtonTextureRegion;
	protected MPFSprite mBackButtonSprite;
	
	private ITextureRegion mNextGameTextureRegion;
	private MPFSprite mNextGameSprite;
	
	private ITextureRegion mPreviousGameTextureRegion;
	private MPFSprite mPreviousGameSprite;
	
	protected ArrayList<Parent> mParents = new ArrayList<Parent>();
	protected ArrayList<Item> mItems = new ArrayList<Item>();
	protected ArrayList<Image> mImages = new ArrayList<Image>();
	
	private int mPositionId;
	private int mCurrentID = 0;
	
	private int mBackgroundScale = 0;
	
	private int mColor;

	protected abstract void onStartGame();
	
	//========================================================
	// CONSTRUCTOR
	//========================================================
	public BaseGame(final ResourceManager pResourceManager){
		super(pResourceManager);
	}

	public String getId(){
		return this.mId;
	}
	
	public String getType(){
		return this.mType;
	}
	
	public String getDescription(){
		return this.mDescription;
	}
	
	public boolean getAvatar(){
		return this.mAvatar;
	}
	
	public int getCounter(){
		return this.mCounter;
	}
	
	public String getGamePath(){
		return this.mGamePath;
	}
	
	public void setGamePath(final String pGamePath){
		this.mGamePath = pGamePath;
	}
	
	public void setId(final int pId){
		this.mCurrentID = pId;
	}
	
	//========================================================
	// ON LOAD RESOURCES
	//========================================================
	@Override
	public void onLoadResources() {
		mGameDocument = XMLParser.parseXMLFile(mResourceManager.getActivity(), ResourceManager.getAssetPath()  + XML_GAME);
		mEndGameDocument = XMLParser.parseXMLFile(mResourceManager.getActivity(), ResourceManager.getAssetPath()  + XML_END_GAME);
		
		/*
		 * Read XML Game Data
		 */
		this.mId = ((Element)XMLParser.parseDocument(T_ID, mGameDocument).item(0)).getAttribute(A_ID);
		this.mType = ((Element)XMLParser.parseDocument(T_TYPE, mGameDocument).item(0)).getAttribute(A_TYPE);
		this.mDescription = ((Element)XMLParser.parseDocument(T_DESC, mGameDocument).item(0)).getAttribute(A_DESC);
		this.mAvatar = Boolean.valueOf(((Element)XMLParser.parseDocument(T_AVATAR, mGameDocument).item(0)).getAttribute(A_AVATAR));
		
		Log.d(MainActivity.TAG, "ID = " + this.mId);
		Log.d(MainActivity.TAG, "Type = " + this.mType);
		Log.d(MainActivity.TAG, "Description = " + this.mDescription);
		Log.d(MainActivity.TAG, "Avatar = " + this.mAvatar +"");
		 
		/*
		 * Create Background Texture
		 */	
		NodeList list = XMLParser.parseDocument(T_PAGE, mGameDocument);
		Element e = (Element) list.item(0);
		NodeList list2 = e.getElementsByTagName(T_BACKGROUND);
		Element e2 = (Element) list2.item(0);	
		
		String suffix = "";
		String texturePath;
		 
		if(e2 != null){
			if(!e2.getAttribute(A_SRC).endsWith("png") && !e2.getAttribute(A_SRC).endsWith("jpg")){
				suffix = "_" + ResourceManager.getLanguage() + ".jpg";
			}
			
			if(e2.getAttribute(BaseItem.A_SCALE) != null && !e2.getAttribute(BaseItem.A_SCALE).equals("noscale")){
				this.mBackgroundScale = Integer.valueOf(e2.getAttribute(BaseItem.A_SCALE));
			}
			
			if(e2.getAttribute(A_RGB) != null && !e2.getAttribute(A_RGB).equals("")){
				
				String colors[] = e2.getAttribute(A_RGB).split("-");
				
				final float r = Integer.valueOf(colors[2]);
				final float g = Integer.valueOf(colors[1]);
				final float b = Integer.valueOf(colors[0]);
				
				this.mColor = org.andengine.util.adt.color.ColorUtils.convertRGBAToABGRPackedInt(r / 255, g / 255, b / 255, 1);
			} else {
				this.mColor = -1;
			}
			
				
			texturePath = ResourceManager.getAssetPath() + IMAGES_FOLDER + e2.getAttribute(A_SRC) + suffix;
			
			this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
			mBackgroundTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);
		}
		
		/*
		 * Create End Game Texture
		 */
		if(mEndGameDocument != null){
			list = XMLParser.parseDocument(T_IMAGE, mEndGameDocument);
			e = (Element) list.item(0);
			texturePath = ResourceManager.getAssetPath() + IMAGES_FOLDER + e.getAttribute(A_SRC);

			this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
			mEndGameTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);
		}
		
		/*
		 * Create Parents
		 */
		list = XMLParser.parseDocument(T_PAGE, mGameDocument);
		e = (Element) list.item(0);
		list2 = e.getElementsByTagName(T_PARENT);
		
		/*
		 * Iterate through the page, loading all Parents
		 */
		for(int i = 0; i < list2.getLength(); i++){
			final Element parentElement = (Element) list2.item(i);
			final Parent parent = new Parent(parentElement, mTextures, mResourceManager);
			parent.initialize();
			
			this.mParents.add(parent);	
		}
		
		/*
		 * Create Items
		 */
		list = XMLParser.parseDocument(T_PAGE, mGameDocument);
		e = (Element) list.item(0);
		list2 = e.getElementsByTagName(T_ITEM);
		
		for(int i = 0; i < list2.getLength(); i++){
			final Element element = (Element) list2.item(i);
			final Item item = new Item(element, mTextures, mResourceManager);
			item.initialize();

			mItems.add(item);
		}
		
		/*
		 * Create Images
		 */
		list = XMLParser.parseDocument(T_PAGE, mGameDocument);
		e = (Element) list.item(0);
		list2 = e.getElementsByTagName(T_IMAGE);
		
		for(int i = 0; i < list2.getLength(); i++){
			final Element element = (Element) list2.item(i);
			
			final Image image = new Image(element, mTextures, mResourceManager);
			image.initialize();
			
			mImages.add(image);
		}
		
		/*
		 * Create Instruction Box
		 */
		list = XMLParser.parseDocument(T_INSTRUCTION, mGameDocument);
		e = (Element) list.item(0);
		
		if(e != null){
			mInstructionBox = new InstructionBox(e, mResourceManager, mTextures, this);
		}
		
		/*
		 * Create Back Button Texture
		 */
		texturePath = IMAGES_FOLDER + MENU_BUTTON_FILENAME;
		
		this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
		mBackButtonTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);
	
		/*
		 * Create Next/Previous Arrow Textures If The Menu Is Disabled
		 */
		if(!MainActivity.mIsMenuActive){
			/*
			 * Create Back Button Texture
			 */
			texturePath = IMAGES_FOLDER + NEXT_BUTTON_FILENAME;
			
			this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
			mNextGameTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);
			
			/*
			 * Create Back Button Texture
			 */
			texturePath = IMAGES_FOLDER + PREVIOUS_BUTTON_FILENAME;
			
			this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
			mPreviousGameTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);
		}
	}
	
	//========================================================
	// ON UNLOAD RESOURCES
	//========================================================
	@Override
	public void onUnloadResources() {
		if(mInstructionBox != null){
			mInstructionBox.stopSound();
		}
	}

	//========================================================
	// ON POPULATE
	//========================================================
	@Override
	public void onPopulate() {
		mIsGameOver = false;

		mPositionId = mCurrentID;

		if(mBackgroundTextureRegion != null){
			this.mBackgroundSprite = new MPFSprite(MainActivity.WIDTH * 0.5f, MainActivity.HEIGHT * 0.5f, MainActivity.WIDTH, MainActivity.HEIGHT, mBackgroundTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager());
			
			if(mBackgroundScale != 0)
				this.mBackgroundSprite.setScale(mBackgroundScale);
				
				if(this.mColor != -1)
				this.mBackgroundSprite.setColor(this.mColor);
				this.attachChild(this.mBackgroundSprite);
		}
				

		
		this.mBackButtonSprite = new MPFSprite(mBackButtonTextureRegion.getWidth() * 0.5f + 5, mBackButtonTextureRegion.getHeight() * 0.5f + 5, mBackButtonTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager()){

			@Override
			public boolean onAreaTouched(TouchEvent pSceneTouchEvent,
					float pTouchAreaLocalX, float pTouchAreaLocalY) {
				if(pSceneTouchEvent.isActionDown()){
					BaseGame.this.unloadResources();

					GameSelector.loadGame(GameSelector.MENU_ID);
					return true;
				}
				return false;
			}

		};
		this.mBackButtonSprite.setVisible(false);
		this.attachChild(this.mBackButtonSprite);
		
		if(MainActivity.mIsMenuActive){
			
			this.mBackButtonSprite.setVisible(true);
			mResourceManager.getScene().registerTouchArea(mBackButtonSprite);
			this.mBackButtonSprite.setZIndex(10);
			
		} else {

			this.mNextGameSprite = new MPFSprite(MainActivity.WIDTH - mNextGameTextureRegion.getWidth(), mNextGameTextureRegion.getHeight() * 0.5f + 5, mNextGameTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager()){

				@Override
				public boolean onAreaTouched(TouchEvent pSceneTouchEvent,
						float pTouchAreaLocalX, float pTouchAreaLocalY) {
					if(pSceneTouchEvent.isActionDown()){
						loadNextGame();
						return true;
					}
					return false;
				}

			};
			mResourceManager.getScene().registerTouchArea(mNextGameSprite);
			this.mNextGameSprite.setZIndex(10);
			this.attachChild(this.mNextGameSprite);

			this.mPreviousGameSprite = new MPFSprite(mNextGameSprite.getX() - mPreviousGameTextureRegion.getWidth(), mPreviousGameTextureRegion.getHeight() * 0.5f + 5, mPreviousGameTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager()){

				@Override
				public boolean onAreaTouched(TouchEvent pSceneTouchEvent,
						float pTouchAreaLocalX, float pTouchAreaLocalY) {
					if(pSceneTouchEvent.isActionDown()){
						loadPreviousGame();
						return true;
					}
					return false;
				}

			};
			mResourceManager.getScene().registerTouchArea(mPreviousGameSprite);
			this.mPreviousGameSprite.setZIndex(10);
			this.attachChild(this.mPreviousGameSprite);
		}
		
		
		if(this.mEndGameTextureRegion != null){
			this.mEndGameSprite = new MPFSprite(MainActivity.WIDTH * 0.5f, MainActivity.HEIGHT * 0.5f, MainActivity.WIDTH, MainActivity.HEIGHT, mEndGameTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager()){

				@Override
				public boolean onAreaTouched(TouchEvent pSceneTouchEvent, float pTouchAreaLocalX, float pTouchAreaLocalY) {
					if(pSceneTouchEvent.isActionDown() && mIsGameOver){
						if(MainActivity.mIsMenuActive){
							BaseGame.this.unloadResources();
		                    GameSelector.loadGame(GameSelector.MENU_ID);
						}
						else{
							loadNextGame();
						}
						return true;
					}
					
					return false;
				}
				
			};
			this.mEndGameSprite.setVisible(false);
			this.mEndGameSprite.setAlpha(0);
			this.mEndGameSprite.setZIndex(100);
		}
	}
	
	//========================================================
	// ON POPULATE FINAL
	//========================================================
	protected void onPopulateFinal(){
		if(mInstructionBox != null){
			mInstructionBox.createResources();
			mInstructionBox.initialize();
			this.attachChild(mInstructionBox);
			
			mResourceManager.getEngine().registerUpdateHandler(new TimerHandler(1, new ITimerCallback(){

				@Override
				public void onTimePassed(TimerHandler pTimerHandler) {
					mInstructionBox.playSound();
				}
				
			}));
		}		
		this.sortChildren();
	}
	
	//========================================================
	// END GAME
	//========================================================
	protected void endGame(){
		
		this.mIsGameOver = true;
		
		this.mEndGameSprite.setVisible(true);
		this.attachChild(this.mEndGameSprite);
		mResourceManager.getScene().registerTouchArea(this.mEndGameSprite);
		
		if(MainActivity.mIsMenuActive){
			this.mEndGameSprite.registerEntityModifier(new SequenceEntityModifier(new DelayModifier(1.2f), new AlphaModifier(1, 0, 1), new DelayModifier(2), new AlphaModifier(1, 1, 0, new IEntityModifier.IEntityModifierListener(){

				@Override
				public void onModifierStarted(IModifier<IEntity> pModifier,	IEntity pItem) {
				}

				@Override
				public void onModifierFinished(IModifier<IEntity> pModifier,IEntity pItem) {
	                    BaseGame.this.unloadResources();
	                    GameSelector.loadGame(GameSelector.MENU_ID);
				}				
			})));
		} else {
			this.mEndGameSprite.registerEntityModifier(new SequenceEntityModifier(new DelayModifier(1.2f), new AlphaModifier(1, 0, 1)));
		}		
		mResourceManager.getSoundManager().playFX(SoundManager.OK);
	}

	//========================================================
	// ON INSTRUCTION DISMISSED
	//========================================================
	@Override
	public void onInstructionsDismissed() {
		onStartGame();
	}
	
	//========================================================
	// LOAD NEXT GAME
	//========================================================
	public void loadNextGame(){
		MainActivity.mLoadingSprite.setVisible(true);
		
		if(mCurrentID == MainActivity.mGames.size() ){
			mPositionId = 1;
		} else { 
			mPositionId = mCurrentID + 1;
		}
		 
		loadGame(mPositionId);
	}
	
	//========================================================
	// LOAD PREVIOUS GAME
	//========================================================
	public void loadPreviousGame(){
		MainActivity.mLoadingSprite.setVisible(true);

		if(mCurrentID == 1){
			mPositionId = MainActivity.mGames.size();
		} else {
			mPositionId = mCurrentID - 1;
		}
		loadGame(mPositionId);
	}
	
	//========================================================
	// LOAD GAME
	//========================================================
	public void loadGame(final int positionId){
		Log.d(MainActivity.TAG, "Game # " + mPositionId + " out of " + (MainActivity.mGames.size()));

		mResourceManager.getEngine().registerUpdateHandler(new TimerHandler(0.1f, new ITimerCallback(){

			@Override
			public void onTimePassed(TimerHandler pTimerHandler) {
				unloadResources();
				GameSelector.loadGame(mPositionId);
			}
		}));
		mResourceManager.getScene().sortChildren();
		
	}
}
