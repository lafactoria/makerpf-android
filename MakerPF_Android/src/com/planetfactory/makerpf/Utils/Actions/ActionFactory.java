package com.planetfactory.makerpf.Utils.Actions;

import java.util.ArrayList;

import org.andengine.entity.IEntity;
import org.andengine.entity.modifier.IEntityModifier;
import org.andengine.entity.modifier.LoopEntityModifier;
import org.andengine.entity.modifier.MoveByModifier;
import org.andengine.entity.modifier.RotationModifier;
import org.andengine.entity.modifier.ScaleModifier;
import org.andengine.entity.modifier.SequenceEntityModifier;
import org.andengine.util.modifier.IModifier;

import android.util.Log;

import com.planetfactory.makerpf.MainActivity;
import com.planetfactory.makerpf.Utils.MPFSprite;

public class ActionFactory extends SequenceEntityModifier{

	//============================================================
	// CREATE ACTION
	//============================================================
	public static SequenceEntityModifier createAction(final MPFSprite pSprite, final ArrayList<ActionWrapper> pActionWrappers){
		
		final int size = pActionWrappers.size();
		
		final IEntityModifier[] modifiers = new IEntityModifier[size];
		
		for(int i = 0; i < size; i++){
			final ActionWrapper wrapper = pActionWrappers.get(i);
			
			final float x;
			final float y;
			final float rotation;
			final float scale;
			
			// If we're at the first modifier in the sequence, we use the sprite's values
			// Otherwise we use the previous modifier's final value as our 'from' value
			if(i == 0){
				x = pSprite.getX();
				y = pSprite.getY();
				rotation = pSprite.getRotation();
				scale 	 = pSprite.getScaleX();
			} else {
				x = pActionWrappers.get(i - 1).getValueOne();
				y = pActionWrappers.get(i - 1).getValueTwo();
				rotation = pActionWrappers.get(i - 1).getValueOne();
				scale = (pSprite.getBaseItem().getScale()  / 1000) * pActionWrappers.get(i - 1).getValueOne();
			}
			 
			// Create 'move' modifier
			if(wrapper.getType().equals("move")){
				Log.v(MainActivity.TAG, "Modifier move");
				modifiers[i] = createMoveModifier(wrapper.getDuration(), x, y, wrapper.getValueOne(), wrapper.getValueTwo());
			}
			
			// Create 'rotation' modifier
			if(wrapper.getType().equals("rotate")){
				Log.v(MainActivity.TAG, "Modifier rotate");
				modifiers[i] = createRotationModifier(wrapper.getDuration(), rotation, wrapper.getValueOne());
			}
			
			// Create 'scale' modifier
			if(wrapper.getType().equals("scale")){
				Log.v(MainActivity.TAG, "Modifier scale");
				modifiers[i] = createScaleModifier(wrapper.getDuration(), scale, (pSprite.getBaseItem().getScale()  / 1000) * wrapper.getValueOne() );
			}
			
			if(wrapper.getType().equals("jump")){
				modifiers[i] = new LoopEntityModifier(new SequenceEntityModifier(new MoveByModifier(0.2f, 0, -20),
																				 new MoveByModifier(0.2f, 0, 20)),3); 
			}
		}
		
		final SequenceEntityModifier sequenceEntityModifier = new SequenceEntityModifier(modifiers);
		
		// It appears that most items require their rotation to be reset after any change
		// such as after a 'roll' action. We reset the rotation to 0 after the animation
		sequenceEntityModifier.addModifierListener(new IEntityModifier.IEntityModifierListener() {
			
			@Override
			public void onModifierStarted(IModifier<IEntity> pModifier, IEntity pItem) {
			}
			
			@Override
			public void onModifierFinished(IModifier<IEntity> pModifier, IEntity pItem) {
				pSprite.setRotation(pSprite.getBaseItem().getRotation());
			}
		});
		
		return sequenceEntityModifier;
	}
	
	/**
	 * Extract a MoveModifier from the specified parameters
	 */
	private static MoveByModifier createMoveModifier(final float pDuration, final float pFromX, final float pFromY, final float pToX, final float pToY){
		//return new MoveModifier(pDuration / 1000, pFromX, pFromY, pToX, pToY);
		return new MoveByModifier(pDuration / 1000,pToX,pToY);
	}
	
	/**
	 * Extract a RotationModifier from the specified parameters
	 */
	private static RotationModifier createRotationModifier(final float pDuration, final float pFromRotation, final float pToRotation){
		return new RotationModifier(pDuration / 1000, pFromRotation, pToRotation);
	}
	
	/**
	 * Extract a ScaleModifier from the specified parameters
	 */
	private static ScaleModifier createScaleModifier(final float pDuration, final float pFromScale, final float pToScale){
		return new ScaleModifier(pDuration / 1000, pFromScale, pToScale);
	}
	
}
