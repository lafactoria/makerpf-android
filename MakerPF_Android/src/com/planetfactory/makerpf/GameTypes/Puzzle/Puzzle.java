package com.planetfactory.makerpf.GameTypes.Puzzle;

import org.andengine.audio.sound.Sound;

import com.planetfactory.makerpf.GameTypes.BaseGame;
import com.planetfactory.makerpf.GameTypes.Item;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Utils.IDraggableItemListener;

public class Puzzle extends BaseGame implements IDraggableItemListener{

	private static final String CORRECT_PIECE = "pieza_correcta.mp3";
	
	private static int mPiecesFound = 0;
	
	private Sound mCorrectPieceSound;
	
	public Puzzle(ResourceManager pResourceManager) {
		super(pResourceManager);
	}

	@Override
	public void onLoadResources() {
		super.onLoadResources();
	
		/*
		 * Load Correct Puzzle Sound
		 */
		final String soundPath = mResourceManager.getAssetPath() + BaseGame.SOUNDS_FOLDER + CORRECT_PIECE;
		mCorrectPieceSound = mResourceManager.getSoundManager().loadSound(soundPath);
	}

	@Override
	public void onUnloadResources() {
		mPiecesFound = 0;
	}

	@Override
	public void onPopulate() {
		super.onPopulate();
	
		/*
		 * TODO: Temporary test for items - seems to place puzzle pieces perfectly according to the MakerPF web version
		 */
		for(int i = 0; i < mItems.size(); i++){
			final Item item = mItems.get(i);
			
			final PuzzlePiece sprite = new PuzzlePiece(item, mResourceManager, this);
				
			this.attachChild(sprite);
			mResourceManager.getScene().registerTouchArea(sprite);	
		}
		
		super.onPopulateFinal();
	}

	@Override
	public void foundPosition() {
		mCorrectPieceSound.play();
		
		mPiecesFound++;
		
		if(mPiecesFound >= mItems.size()){
			endGame();
		}
	}

	@Override
	protected void onStartGame() {
		// TODO Auto-generated method stub
		
	}

}


