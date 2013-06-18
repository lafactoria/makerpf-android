package com.planetfactory.makerpf.GameTypes.Memory;

import java.util.ArrayList;

import org.andengine.audio.sound.Sound;
import org.andengine.input.touch.TouchEvent;
import org.andengine.opengl.texture.atlas.bitmap.BitmapTextureAtlasTextureRegionFactory;
import org.andengine.opengl.texture.region.ITextureRegion;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import android.graphics.Point;

import com.planetfactory.makerpf.GameTypes.BaseGame;
import com.planetfactory.makerpf.GameTypes.Item;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Utils.MPFSprite;
import com.planetfactory.makerpf.Utils.XMLParser;
import com.planetfactory.makerpf.Utils.Actions.ActionFactory;

public class Memory extends BaseGame{
	
	private static final int CARD_HIDDEN = 0;
	private static final int CARD_SELECTED = 1;
	private static final int CARD_MATCHED = 2;
	
	private static final int HIDE_CARD_DURATION = 1;
	
	private static final String CARD_SHOW_PATH = "card_show.mp3";
	
	private static final String UNDER_CARD_PATH = "under_card.png";
	
	private static final String T_POSITION = "position";
	private static final String T_CARD = "card";

	private ArrayList<Point> mPositions = new ArrayList<Point>();
	private ArrayList<Point> mRemainingPoints = new ArrayList<Point>();
	
	private MPFSprite[] mSelectedCards = new MPFSprite[2];
	
	private ITextureRegion mCardTextureRegion;
	private ITextureRegion mUnderCardTextureRegion;
	
	private int mMatchedCardCount = 0;
	private int mEndGameCount = 0;
	
	private boolean mAreTwoCardsSelected = false;
	private boolean mCanSelectCards = true;
	
	private float mWaitTimer = 0;
	
	private Sound mCardShowSound;
	
	public Memory(ResourceManager pResourceManager) {
		super(pResourceManager);
	}

	@Override
	public void onLoadResources() {
		super.onLoadResources();

		/*
		 * Create Positions
		 */
		NodeList list = XMLParser.parseDocument(T_PAGE, mGameDocument);
		Element e = (Element) list.item(0);
		list = e.getElementsByTagName(T_POSITION);
		
		for(int i = 0; i < list.getLength(); i++){
			final Element element = (Element) list.item(i);
			
			final int x = Integer.valueOf(element.getAttribute(Item.A_X));
			final int y = Integer.valueOf(element.getAttribute(Item.A_Y));
			
			final Point point = new Point(x, y);
			
			mPositions.add(point);
		}
		
		/*
		 * Create Card/Under Card textures
		 */
		list = e.getElementsByTagName(T_CARD);
		String texturePath = mResourceManager.getAssetPath() + IMAGES_FOLDER + ((Element)list.item(0)).getAttribute(A_SRC);
		this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
		mCardTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);
		
		texturePath = mResourceManager.getAssetPath() + IMAGES_FOLDER + UNDER_CARD_PATH;
		this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
		mUnderCardTextureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);
	
		/*
		 * Load Card Sounds
		 */
		final String soundPath = mResourceManager.getAssetPath() + BaseGame.SOUNDS_FOLDER + CARD_SHOW_PATH;
		mCardShowSound = mResourceManager.getSoundManager().loadSound(soundPath);
	}

	@Override
	public void onUnloadResources() {
		mSelectedCards[0] = null;
		mSelectedCards[1] = null;
		
		mMatchedCardCount = 0;
		mWaitTimer = 0;
		mEndGameCount = 0;
		
		mCanSelectCards = true;
		mAreTwoCardsSelected = false;
	}

	@Override
	public void onPopulate() {
		super.onPopulate();

		// Repopulate the mRemainingPoints with the points from XML
		mRemainingPoints = mPositions;
		
		final int itemCount = mPositions.size();
		mEndGameCount = itemCount;
		
		for(int i = 0; i < itemCount; i++){
			final Item item = mItems.get(i);

			// get random position from XML
			final Point position = getRandomPosition();
			
			// MainActivity.HEIGHT - position.y + 20;
			
			// Attach the 'under card' sprite
			final MPFSprite underCardSprite = new MPFSprite(position.x, position.y, mUnderCardTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager());
			underCardSprite.setScale(item.getScale());
			this.attachChild(underCardSprite);

			// Attach the item sprite
			final MPFSprite sprite = new MPFSprite(item, mResourceManager);
			sprite.setPosition(position.x, position.y);
			this.attachChild(sprite);
			
			// Attach the card sprite
			final MPFSprite cardSprite = new MPFSprite(position.x, position.y, mCardTextureRegion, mResourceManager.getEngine().getVertexBufferObjectManager()){

				@Override
				public boolean onAreaTouched(TouchEvent pSceneTouchEvent,
						float pTouchAreaLocalX, float pTouchAreaLocalY) {

					if(pSceneTouchEvent.isActionDown() && this.getTag() == CARD_HIDDEN && mSelectedCards[1] == null && mCanSelectCards){
						
						mCardShowSound.play();
						
						sprite.registerEntityModifier(ActionFactory.createAction(sprite, item.getActionWrappers()));
						
						this.setTag(CARD_SELECTED);
						this.setVisible(false);
						
						if(mSelectedCards[0] == null){
							mSelectedCards[0] = this;
						} else {
							mSelectedCards[1] = this;
							
							mAreTwoCardsSelected = true;
						}
						
						return true;
					}
					
					return false;
				}
				
			};
			cardSprite.setTag(CARD_HIDDEN);
			cardSprite.setBaseItem(item);
			cardSprite.setScale(item.getScale());
			this.attachChild(cardSprite);
			
			mResourceManager.getScene().registerTouchArea(cardSprite);
			
		}
		
		super.onPopulateFinal();
	}

	/**
	 * Get a random position (x,y) from the list of remaining item positions
	 * and remove it from the list
	 * @return A random x/y position from the list
	 */
	private Point getRandomPosition(){
		final int size = mRemainingPoints.size();
		final int randomIndex = (int) (Math.random() * size);
		final Point point = mRemainingPoints.remove(randomIndex);
		
		mRemainingPoints.trimToSize();
		
		return point;
	}
	
	/**
	 * This method checks to see if the two selected cards have matching ID's
	 * @return True if the selected card sprites have matching ID's, false otherwise
	 */
	private boolean areCardsMatching(){
		return mSelectedCards[0].getBaseItem().getId() == mSelectedCards[1].getBaseItem().getId();
	}

	@Override
	protected void onManagedUpdate(float pSecondsElapsed) {

		// If two cards have been selected
		if(mAreTwoCardsSelected){
			
			// Check if two cards are matching - if so, set cards tag to 'Matched'
			// and check if all cards have been matched before ending the game
			if(areCardsMatching()){
				mAreTwoCardsSelected = false;

				mSelectedCards[0].setTag(CARD_MATCHED);
				mSelectedCards[1].setTag(CARD_MATCHED);
												
				mSelectedCards[0] = null;
				mSelectedCards[1] = null;
				
				mMatchedCardCount++;
				
				if(mMatchedCardCount >= mEndGameCount / 2){
					endGame();
				}
			} else {
				
				// Set cards to non-selectable until the revealed cards have been
				// re-hidden (card visibility is set to 1 second)
				if(mCanSelectCards){
					mCanSelectCards = false;
				} else {
					mWaitTimer += pSecondsElapsed;
					
					if(mWaitTimer >= HIDE_CARD_DURATION){
						mCanSelectCards = true;
						mAreTwoCardsSelected = false;
						mWaitTimer = 0;
						
						mSelectedCards[0].setTag(CARD_HIDDEN);
						mSelectedCards[1].setTag(CARD_HIDDEN);
						
						mSelectedCards[0].setVisible(true);
						mSelectedCards[1].setVisible(true);
						
						mSelectedCards[0] = null;
						mSelectedCards[1] = null;
					}
				}
			}
		}
		
		super.onManagedUpdate(pSecondsElapsed);
	}

	@Override
	protected void onStartGame() {
		// TODO Auto-generated method stub
		
	}
	
}