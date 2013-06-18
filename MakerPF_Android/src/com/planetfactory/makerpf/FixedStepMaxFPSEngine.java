package com.planetfactory.makerpf;

import org.andengine.engine.Engine;
import org.andengine.engine.handler.IUpdateHandler;
import org.andengine.engine.handler.UpdateHandlerList;
import org.andengine.engine.options.EngineOptions;
import org.andengine.util.time.TimeConstants;

import android.R.integer;

public class FixedStepMaxFPSEngine extends Engine {

	// ===========================================================
	// Constants
	// ===========================================================

	// ===========================================================
	// Fields
	// ===========================================================

	private final long mStepLength;
	private long mSecondsElapsedAccumulator;
	private final UpdateHandlerList mConstantUpdateHandlers = new UpdateHandlerList(8);

	// ===========================================================
	// Constructors
	// ===========================================================

	/**
	 * Create a new Fixed Step Max FPS engine.
	 * @param pEngineOptions {@link EngineOptions} Engine options to use.
	 * @param pStepsPerSecond {@link integer} How many updates a second?
	 */
	public FixedStepMaxFPSEngine(EngineOptions pEngineOptions, final int pStepsPerSecond) {
		super(pEngineOptions);
		this.mStepLength = TimeConstants.NANOSECONDS_PER_SECOND / pStepsPerSecond;
	}

	// ===========================================================
	// Getter & Setter
	// ===========================================================

	// ===========================================================
	// Methods for/from SuperClass/Interfaces
	// ===========================================================

	@Override
	public void onUpdate(final long pNanosecondsElapsed) throws InterruptedException {
		this.mSecondsElapsedAccumulator += pNanosecondsElapsed;
		final long stepLength = this.mStepLength;
		while(this.mSecondsElapsedAccumulator >= stepLength) {
			final float pSecondsElapsed = stepLength * TimeConstants.SECONDS_PER_NANOSECOND;
			this.onConstantUpdateUpdateHandlers(pSecondsElapsed);
			this.mSecondsElapsedAccumulator -= stepLength;
		}
		super.onUpdate(pNanosecondsElapsed);
	}

	protected void onConstantUpdateUpdateHandlers(final float pSecondsElapsed) {
		this.mConstantUpdateHandlers.onUpdate(pSecondsElapsed);
	}

	/**
	 * Register an {@link IUpdateHandler} to be updated using our constant game speed.
	 * @param pUpdateHandler {@link IUpdateHandler} to update.
	 * @see FixedStepMaxFPSEngine
	 */
	public void registerConstantUpdateHandler(final IUpdateHandler pUpdateHandler) {
		this.mConstantUpdateHandlers.add(pUpdateHandler);
	}

	/**
	 * Unregister a {@link IUpdateHandler} from being updated using our constant game speed.
	 * @param pUpdateHandler {@link IUpdateHandler} to unregister.
	 */
	public void unregisterConstantUpdateHandler(final IUpdateHandler pUpdateHandler) {
		this.mConstantUpdateHandlers.remove(pUpdateHandler);
	}

	/**
	 * Clear all {@link IUpdateHandler} registered for constant game speed updates.
	 */
	public void clearConstantUpdateHandlers() {
		this.mConstantUpdateHandlers.clear();
	}

	// ===========================================================
	// Methods
	// ===========================================================

	// ===========================================================
	// Inner and Anonymous Classes
	// ===========================================================
}