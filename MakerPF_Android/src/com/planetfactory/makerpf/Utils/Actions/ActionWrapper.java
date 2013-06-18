package com.planetfactory.makerpf.Utils.Actions;


public class ActionWrapper{

	private String mType;
	private float mDuration;
	private float mValueOne;
	private float mValueTwo;
	
	public ActionWrapper(final String pType, final float pDuration, final float pValueOne, final float pValueTwo){
		this.mType = pType;
		this.mDuration = pDuration;
		this.mValueOne = pValueOne;
		this.mValueTwo = pValueTwo;
	}
	
	public ActionWrapper(final String pType, final float pDuration, final float pValueOne){
		this.mType = pType;
		this.mDuration = pDuration;
		this.mValueOne = pValueOne;
	}
	
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
