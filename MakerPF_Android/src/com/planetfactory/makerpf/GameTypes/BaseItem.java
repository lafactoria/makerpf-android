package com.planetfactory.makerpf.GameTypes;

import java.util.ArrayList;
import java.util.Vector;

import org.andengine.audio.sound.Sound;
import org.andengine.opengl.texture.atlas.bitmap.BitmapTextureAtlas;
import org.andengine.opengl.texture.atlas.bitmap.BitmapTextureAtlasTextureRegionFactory;
import org.andengine.opengl.texture.region.ITextureRegion;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import android.util.SparseArray;

import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Utils.MPFSprite;
import com.planetfactory.makerpf.Utils.XMLParser;
import com.planetfactory.makerpf.Utils.Actions.ActionWrapper;

public class BaseItem {

	//============================================================
	// CONSTANTS
	//============================================================
	private static final String T_IS_CORRECT = "isCorrect";

	public static final String A_ID = "id";
	public static final String A_PARENT = "parent";
	public static final String A_X = "x";
	public static final String A_Y = "y";
	public static final String A_SCALE = "scale";
	public static final String A_ROTATION = "rotation";
	public static final String A_SRC = "src";
	public static final String A_ACTION = "action";
	public static final String A_ACTION_LOOPS = "actionLoops";
	public static final String A_RUN = "run";
	public static final String A_SCALE_ACTIVE = "scaleActive";
	public static final String A_SOUND = "sound";
	public static final String A_FINAL_X = "finalX";
	public static final String A_FINAL_Y = "finalY";
	public static final String A_ANSWER = "answer";
	public static final String A_TIMESTAMP = "timestamp";
	public static final String A_RGB = "rgb";
	public static final String A_KIND = "kind";

	//============================================================
	// VARIABLES
	//============================================================
	protected ResourceManager mResourceManager;
	protected Element mElement;

	protected int mId = -1;
	protected int mParent = -1;
	protected int mActionLoops = 0;
	protected int mTimestamp = 0;
	protected int mColor;
	protected int mKind;

	protected float mX = -1000;
	protected float mY = -1000;
	protected float mFinalX = -1000;
	protected float mFinalY = -1000;
	protected float mScale = 1000;
	protected float mRotation = 0;
	protected float mScaleActive = 1000;

	protected String mStringId = null;
	protected String mSource;
	protected String mSoundPath;
	protected String mAnswer;

	protected boolean mRun = false;

	protected boolean mIsCorrect = false;

	protected MPFSprite mSprite;
	protected ITextureRegion mTextureRegion;

	protected String mActionSource;

	protected ArrayList<ActionWrapper> mActionWrappers = new ArrayList<ActionWrapper>();

	private SparseArray<Sound> mSounds = new SparseArray<Sound>();
	private SparseArray<String> mTexts = new SparseArray<String>();

	protected Vector<BitmapTextureAtlas> mTextures = new Vector<BitmapTextureAtlas>();

	
	//============================================================
	// CONSTRUCTOR
	//============================================================
	public BaseItem (Element pElement, Vector<BitmapTextureAtlas> pTextures, ResourceManager pResourceManager){
		this.mTextures = pTextures;
		this.mResourceManager = pResourceManager;
		this.mElement = pElement;

		// There are few cases where the id is a string, so we 
		// get the ID based on its data type
		if(!pElement.getAttribute(Item.A_ID).equals("")){
			try{
				mId = Integer.valueOf(pElement.getAttribute(Item.A_ID));
			} catch(NumberFormatException p){
				mStringId = pElement.getAttribute(Item.A_ID);
			}
		}

		if(!pElement.getAttribute(Item.A_PARENT).equals(""))
			mParent = Integer.valueOf(pElement.getAttribute(Item.A_PARENT));

		if(!pElement.getAttribute(Item.A_SRC).equals(""))
			mSource = pElement.getAttribute(Item.A_SRC);

		if(!pElement.getAttribute(Item.A_X).equals(""))
			mX = Float.valueOf(pElement.getAttribute(Item.A_X));

		if(!pElement.getAttribute(Item.A_Y).equals(""))
			mY = Float.valueOf(pElement.getAttribute(Item.A_Y));

		if(!pElement.getAttribute(Item.A_FINAL_X).equals(""))
			mFinalX = Float.valueOf(pElement.getAttribute(Item.A_FINAL_X));

		if(!pElement.getAttribute(Item.A_FINAL_Y).equals(""))
			mFinalY = Float.valueOf(pElement.getAttribute(Item.A_FINAL_Y));

		if(!pElement.getAttribute(Item.A_ROTATION).equals(""))
			mRotation = Float.valueOf(pElement.getAttribute(Item.A_ROTATION));

		if(!pElement.getAttribute(Item.A_SCALE).equals("") && !pElement.getAttribute(Item.A_SCALE).equals("noscale"))
			mScale = Float.valueOf(pElement.getAttribute(Item.A_SCALE));

		if(!pElement.getAttribute(Item.A_SCALE_ACTIVE).equals(""))
			mScaleActive = Integer.valueOf(pElement.getAttribute(Item.A_SCALE_ACTIVE));

		if(!pElement.getAttribute(Item.A_ACTION).equals(""))
			mActionSource = pElement.getAttribute(Item.A_ACTION) + ".xml";

		if(!pElement.getAttribute(Item.A_ACTION_LOOPS).equals(""))
			mActionLoops = Integer.valueOf(pElement.getAttribute(Item.A_ACTION_LOOPS));

		if(!pElement.getAttribute(Item.A_RUN).equals(""))
			mRun = Boolean.valueOf(pElement.getAttribute(Item.A_RUN));

		if(!pElement.getAttribute(Item.A_SOUND).equals(""))
			mSoundPath = pElement.getAttribute(Item.A_SOUND);

		if(!pElement.getAttribute(A_ANSWER).equals(""))
			mAnswer = pElement.getAttribute(A_ANSWER);

		if(pElement.getAttribute(A_TIMESTAMP) != null && !pElement.getAttribute(A_TIMESTAMP).equals(""))
			mTimestamp = Integer.valueOf(pElement.getAttribute(A_TIMESTAMP));

		if(pElement.getAttribute(A_KIND) != null && !pElement.getAttribute(A_KIND).equals(""))
			mKind = Integer.valueOf(pElement.getAttribute(A_KIND));

		if(pElement.getAttribute(A_RGB) != null && !pElement.getAttribute(A_RGB).equals("")){

			String colors[] = pElement.getAttribute(A_RGB).split("-");

			final float r = Integer.valueOf(colors[0]);
			final float g = Integer.valueOf(colors[1]);
			final float b = Integer.valueOf(colors[2]);

			this.mColor = org.andengine.util.adt.color.ColorUtils.convertRGBAToABGRPackedInt(r / 255, g / 255, b / 255, 1);
		} else {
			this.mColor = -1;
		}
	}
	
	public Element getElement(){
		return this.mElement;
	}

	public int getKind(){
		return this.mKind;
	}
	
	public int getColor(){
		return this.mColor;
	}

	public int getTimestamp(){
		return this.mTimestamp;
	}

	public String getAnswer(){
		return this.mAnswer;
	}

	public boolean isCorrect(){
		return this.mIsCorrect;
	}

	public String getStringId(){
		return this.mStringId;
	}

	public int getId(){
		return this.mId;
	}

	public int getParent(){
		return this.mParent;
	}

	public int getActionLoops(){
		return this.mActionLoops;
	}

	public float getX(){
		return this.mX;
	}

	public float getY(){
		return this.mY;
	}

	public float getFinalX(){
		return this.mFinalX;
	}

	public float getFinalY(){
		return this.mFinalY;
	}

	public float getScale(){
		return this.mScale;
	}

	public float getRotation(){
		return this.mRotation;
	}

	public float getScaleActive(){
		return this.mScaleActive;
	}

	public String getSource(){
		return this.mSource;
	}

	public String getSoundPath(){
		return this.mSoundPath;
	}

	public boolean getRun(){
		return this.mRun;
	}

	public String getActionSource(){
		return this.mActionSource;
	}

	public ArrayList<ActionWrapper> getActionWrappers(){
		return this.mActionWrappers;
	}

	public void setActionWrappers(final ArrayList<ActionWrapper> pActionWrappers){
		this.mActionWrappers = pActionWrappers;
	}

	public ITextureRegion getTextureRegion(){
		return this.mTextureRegion;
	}

	public MPFSprite getSprite(){
		return this.mSprite;
	}

	public void setSprite(final MPFSprite pSprite){
		this.mSprite = pSprite;
	}


	public void setTextureRegion(final ITextureRegion pTextureRegion){
		this.mTextureRegion = pTextureRegion;
	}

	public void addText(final int pLanguage, final String pText){
		mTexts.put(pLanguage, pText);
	}

	public String getText(){
		return mTexts.get(ResourceManager.getLanguage());
	}

	public void addSound(final int pLanguage, final Sound pSound){
		mSounds.put(pLanguage, pSound);
	}

	public Sound getSound(final int pLanguage){
		return mSounds.get(pLanguage);
	}

	//============================================================
	// INITIALIZE
	//============================================================
	public void initialize(){

		/*
		 * Create Item Textures
		 */
		if(this.getSource() != null && !this.getSource().equals("")){
			String texturePath = mResourceManager.getAssetPath() + BaseGame.IMAGES_FOLDER + this.getSource();
			this.mTextures.add(mResourceManager.createSizedTexture(texturePath));
			final ITextureRegion textureRegion = BitmapTextureAtlasTextureRegionFactory.createFromAsset(this.mTextures.get(mTextures.size() - 1), mResourceManager.getActivity(), texturePath, 0, 0);
			this.setTextureRegion(textureRegion);
		}

		/*
		 * Create Item Sound (if the sound path is defined as an attribute)
		 */
		if(this.getSoundPath() != null && !this.getSoundPath().equals("")){

			final String soundPath = mResourceManager.getAssetPath() + BaseGame.SOUNDS_FOLDER + this.getSoundPath();

			mSounds.put(ResourceManager.LANG_1, mResourceManager.getSoundManager().loadSound(soundPath));
			mSounds.put(ResourceManager.LANG_2, mResourceManager.getSoundManager().loadSound(soundPath));
			mSounds.put(ResourceManager.LANG_6, mResourceManager.getSoundManager().loadSound(soundPath));
		}

		/*
		 * Iterate through the Item sounds if a list exists, adding them to the item
		 */
		NodeList list = mElement.getElementsByTagName(BaseGame.T_SOUNDS);
		Element e = (Element) list.item(0);

		if(e != null){
			list = e.getElementsByTagName(BaseGame.T_SOUND);

			for(int i = 0; i < list.getLength(); i++){
				final Element soundElement = (Element) list.item(i);

				final int language = Integer.valueOf(soundElement.getAttribute(BaseGame.A_LANGUAGE));
				final String source = soundElement.getAttribute(BaseGame.A_SRC);

				final String soundPath = mResourceManager.getAssetPath() + BaseGame.SOUNDS_FOLDER + language + "/" + source;
				mSounds.put(language, mResourceManager.getSoundManager().loadSound(soundPath));
			}
		}

		/*
		 * Iterate through the Item text, adding them to the item
		 */
		list = mElement.getElementsByTagName(BaseGame.T_TEXTS);
		e = (Element) list.item(0);

		if(e != null){
			list = e.getElementsByTagName(BaseGame.T_TEXT);

			for(int i = 0; i < list.getLength(); i++){
				final Element element = (Element) list.item(i);

				final int language = Integer.valueOf(element.getAttribute(BaseGame.A_LANGUAGE));
				final String text = element.getAttribute(BaseGame.A_TEXT);

				this.addText(language, text);
			}
		}

		/*
		 * If the item has an isCorrect tag, we pull the value from it.
		 */
		list = mElement.getElementsByTagName(T_IS_CORRECT);

		if(list != null){
			e = (Element) list.item(0);
			if(e != null){
				if(e.getTextContent().equals("true")){
					this.mIsCorrect = true;
				} else {
					this.mIsCorrect = false;
				}
			}
		}
		/*
		 * Create Item Actions
		 */
		if(this.getActionSource() != null && !this.getActionSource().equals("")){
			final Document document = XMLParser.parseXMLFile(mResourceManager.getActivity(), mResourceManager.getAssetPath() + BaseGame.ACTIONS_FOLDER + this.getActionSource());

			final Element docElement = document.getDocumentElement();
			Node node = docElement.getFirstChild();

			final ArrayList<ActionWrapper> actionWrappers = new ArrayList<ActionWrapper>();

			while(node.getNextSibling() != null){

				node = node.getNextSibling();

				if(node.getNodeType() == Element.ELEMENT_NODE){

					final Element el = (Element) node;

					ActionWrapper wrapper = null;

					if(el.getAttributes().getLength() == 2){
						wrapper = new ActionWrapper(el.getNodeName(), // Modifier type
								Float.valueOf(el.getAttributes().item(0).getNodeValue()), // Modifier duration
								Float.valueOf(el.getAttributes().item(1).getNodeValue())); // Modifier value one						
					}

					if(el.getAttributes().getLength() == 3){
						wrapper = new ActionWrapper(el.getNodeName(), // Modifier type
								Float.valueOf(el.getAttributes().item(0).getNodeValue()), // Modifier duration
								Float.valueOf(el.getAttributes().item(1).getNodeValue()), // Modifier value one
								Float.valueOf(el.getAttributes().item(2).getNodeValue())); // Modifier value two
					}

					actionWrappers.add(wrapper);
				}
			}

			this.setActionWrappers(actionWrappers);	
		}
	}
}
