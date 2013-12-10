package com.planetfactory.makerpf.Utils.Actions;

import com.planetfactory.makerpf.MainActivity;

import android.util.Log;


public class ActionWrapper{

	//============================================================
	// VARIABLES
	//============================================================
	private String mType;
	private float mDuration;
	private float mValueOne;
	private float mValueTwo;
	
	//============================================================
	// CONSTRUCTORS
	//============================================================
	public ActionWrapper(final String pType, final float pDuration, final float pValueOne, final float pValueTwo){
		
		Log.v(MainActivity.TAG,"Creating action wrapper with values:" + pType + ":" + pDuration + ":" + pValueOne + ":" + pValueTwo);
		
		this.mType = pType;
		this.mDuration = pDuration;
		this.mValueOne = pValueOne;
		this.mValueTwo = pValueTwo;
	}
	
	public ActionWrapper(final String pType, final float pDuration, final float pValueOne){
		Log.v(MainActivity.TAG,"Creating action wrapper with values:" + pType + ":" + pDuration + ":" + pValueOne);
		this.mType = pType;
		this.mDuration = pDuration;
		this.mValueOne = pValueOne;
	}
	
	
	//============================================================
	// GETs
	//============================================================
	public String getType(){
		return this.mType;
	}
	
	public float getDuration(){
		return this.mDuration;
	}
	
	public float getValueOne(){
		return this.mValueOne;
	}
	
	public float getValueTwo(){
		return this.mValueTwo;
	}
}
