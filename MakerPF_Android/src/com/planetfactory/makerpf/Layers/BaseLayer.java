package com.planetfactory.makerpf.Layers;

import java.util.Vector;

import org.andengine.entity.Entity;
import org.andengine.entity.IEntity;
import org.andengine.entity.IEntityParameterCallable;
import org.andengine.entity.scene.ITouchArea;
import org.andengine.opengl.texture.atlas.bitmap.BitmapTextureAtlas;
import org.andengine.util.adt.pool.RunnablePoolItem;

import android.util.Log;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Resources.ResourcesListener;

public abstract class BaseLayer extends Entity{

	//===========================================================
	// FIELDS
	//===========================================================
	private static final int LOADING_SOFT_TIMER = 1;
	
	//===========================================================
	// FIELDS
	//===========================================================
	// TODO: The BaseLayer class should implement the ResourcesListener instead (?)
	protected ResourcesListener mResourcesListener;
	protected ResourceManager	mResourceManager;
	
	protected Vector<BitmapTextureAtlas> mTextures = new Vector<BitmapTextureAtlas>();
	
	private boolean mIsLoading = false;
	private float mLoadingTimer = 0;
	
	private ITouchAreaMatcher mTouchAreaMatcher = new ITouchAreaMatcher(){
		@Override
		public boolean matches(ITouchArea pObject) {
			boolean isAttachedToLayer = false;
			
			Entity entity = (Entity) pObject;
			Entity parent = null;
			
			if(entity.hasParent()){
				parent = (Entity) entity.getParent();
			
				/* Loop through the entity's parent nodes. If the entity belongs to
				 * this layer then we unregister the touch area - otherwise it means
				 * the entity belongs to the incoming layer */
				while(parent.hasParent()){
					if(parent == BaseLayer.this){
						isAttachedToLayer = true;
						break;
					} else {
						// Increment to the next parent for hierarchy checking
						parent = (Entity) parent.getParent();
					}
					
				}
			}
			return isAttachedToLayer;
		}
	};
	
	private IEntityParameterCallable mEntityParameterCallable = new IEntityParameterCallable(){
		@Override
		public void call(IEntity pEntity) {
			if(!pEntity.isDisposed()){
				pEntity.dispose();
			}
			
			if(pEntity.hasParent()){
				pEntity.detachSelf();
			}
		}
	};
	
	//===========================================================
	// LOAD RUNNABLE - Called when a layer is prompted to load resources
	//===========================================================
	private RunnablePoolItem mLoadRunnable = new RunnablePoolItem(){
		@Override
		public void run() {
			
			// We load new resources only if they haven't already been loaded
			// Otherwise we reload the old textures
			if(mTextures.isEmpty()){
				onLoadResources();
			} else {
				for(int i = 0; i < mTextures.size(); i++){
					mTextures.get(i).load();
				}
			}
			//mResourcesListener.onResourcesLoaded();
			
			if(!BaseLayer.this.hasParent()){
				mResourceManager.getScene().attachChild(BaseLayer.this);
				Log.d(MainActivity.TAG, "Populating new game");
			}

			mIsLoading = true;
		}
	};
	
	//===========================================================
	// UNLOAD RUNNABLE - Called when a layer is prompted to unload resources
	//===========================================================
	private RunnablePoolItem mUnloadRunnable = new RunnablePoolItem(){
		@Override
		public void run() {
			/* Remove all touch areas associated with the current layer on unloading */ 
			mResourceManager.getScene().unregisterTouchAreas(mTouchAreaMatcher);
			
			/* Detach and dispose of all children */
			BaseLayer.this.callOnChildren(mEntityParameterCallable);
			
			/* Detach and dispose of the layer itself */
			if(!BaseLayer.this.isDisposed())
			BaseLayer.this.dispose();
			detachChildren();
			detachSelf();
			
			/* Perform any additional layer-specific unloading */
			onUnloadResources();
			//mResourcesListener.onResourcesLoaded();
		}
	};
	
	//===========================================================
	// ABSTRACT
	//===========================================================
	public abstract void onLoadResources();
	public abstract void onUnloadResources();
	public abstract void onPopulate();
	
	//===========================================================
	// CONSTRUCTOR
	//===========================================================
	public BaseLayer(final ResourceManager pResourceManager) {
		mResourceManager = pResourceManager;
	}
	//===========================================================
	// LOAD RESOURCES
	//===========================================================
	public BaseLayer loadResources(){
		MainActivity.mLoadingSprite.setVisible(true);
		
		if(!mLoadRunnable.isRecycled()){
			mLoadRunnable.recycle();
		}
		
		mResourceManager.getEngine().runOnUpdateThread(mLoadRunnable);
		
		return this;
	}
	
	//===========================================================
	// UNLOAD RESOURCES
	//===========================================================	
	public void unloadResources(){
		/* Iterate all textures contained within this layer, unloading them on the next draw cycle */
		for(int i = 0; i < mTextures.size(); i++){
			mTextures.get(i).unload();
		}
		
		mResourceManager.getEngine().runOnUpdateThread(mUnloadRunnable);
		
		if(!mUnloadRunnable.isRecycled()){
			mUnloadRunnable.recycle();
		}
	}
	
	@Override
	protected void onManagedUpdate(float pSecondsElapsed) {

		/* Call onPopulate automatically after resources have loaded */
		if(mIsLoading){
			
			boolean texturesLoaded = true;
			
			/* Check if all textures have been loaded to hardward */
			final int size = mTextures.size();
			for(int i = 0; i < size; i++){
				if(!mTextures.get(i).isLoadedToHardware()){
					texturesLoaded = false;
				}
			}
			
			/* If all textures are loaded, then we give the device a short break
			 * before executing the onPopulate() method.
			 */
			if(texturesLoaded){
				mLoadingTimer += pSecondsElapsed;
				if(mLoadingTimer >= LOADING_SOFT_TIMER){
					onPopulate();
					mLoadingTimer = 0;
					mIsLoading = false;
					
					MainActivity.mLoadingSprite.setVisible(false);
				}
			}
		}
		super.onManagedUpdate(pSecondsElapsed);
	}
}