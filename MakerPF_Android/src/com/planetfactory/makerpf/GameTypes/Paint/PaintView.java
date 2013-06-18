package com.planetfactory.makerpf.GameTypes.Paint;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.PorterDuff.Mode;
import android.graphics.RectF;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;

class PaintView extends View {
	
	public static final int DRAW_RADIUS_SMALL = 8;
	public static final int DRAW_RADIUS_MEDIUM = 16;
	public static final int DRAW_RADIUS_BIG = 30;
	
	private Bitmap mBitmap;
	private Canvas mCanvas;
	private final Paint mPaint;
	
	private int mRadius = 40;
	private int mColor = Color.GREEN;
	
	public PaintView(Context c) {
		super(c);
	    setFocusable(true);

	    mPaint = new Paint();
	    mPaint.setAntiAlias(true);
	}
	
	public PaintView(Context context, AttributeSet attrs) {
		super(context, attrs);

	    setFocusable(true);

	    mPaint = new Paint();
	    mPaint.setAntiAlias(true);
	}
	
	public PaintView(Context context, AttributeSet attrs, int defStyle) {
		super(context, attrs, defStyle);

	    setFocusable(true);

	    mPaint = new Paint();
	    mPaint.setAntiAlias(true);
	}
	
	public void clear(final int pClearColor) {
		if (mCanvas != null) {
	        mPaint.setColor(pClearColor);
	        mCanvas.drawColor(pClearColor, Mode.CLEAR);
	        invalidate();
	    }
	}

	public void setDrawRadius(final int pRadius){
		mRadius = pRadius;
	}
	
	public void setColor(final int pColor){
		mColor = pColor;
	}
	
	@Override
	protected void onSizeChanged(int w, int h, int oldw, int oldh) {
	    int curW = mBitmap != null ? mBitmap.getWidth() : 0;
	    int curH = mBitmap != null ? mBitmap.getHeight() : 0;
	    if (curW >= w && curH >= h) {
	        return;
	    }
	
	    if (curW < w) curW = w;
	    if (curH < h) curH = h;
	
	    Bitmap newBitmap = Bitmap.createBitmap(curW, curH, Bitmap.Config.ARGB_8888);
	    Canvas newCanvas = new Canvas();
	    newCanvas.setBitmap(newBitmap);
	    if (mBitmap != null) {
	        newCanvas.drawBitmap(mBitmap, 0, 0, null);
	    }
	    mBitmap = newBitmap;
	    mCanvas = newCanvas;
	}
	
	@Override
	protected void onDraw(Canvas canvas) {
	    if (mBitmap != null) {
	        canvas.drawBitmap(mBitmap, 0, 0, null);
	    }
	}

	@Override
	public boolean onTouchEvent(MotionEvent event) {
		final int action = event.getActionMasked();
		
		if(action == MotionEvent.ACTION_DOWN || action == MotionEvent.ACTION_MOVE){
			paint(event.getX(), event.getY(), mRadius, mColor);
			
			/*
			 * If no performance hit is visible, this should be enabled in order to 
			 * draw completely smooth lines
			 */
			final int historySize = event.getHistorySize();
			for(int i = 0; i < historySize; i++){
				paint(event.getHistoricalX(i), event.getHistoricalY(i), mRadius, mColor);
			}
			
			return true;
		}
		return false;   
	}
	
	private void paint(float pX, float pY, int pRadius, int pColor) {
		if(mBitmap != null){
			mPaint.setColor(pColor);
			mPaint.setAlpha(255);
			
			drawCircle(mCanvas, pX, pY, pRadius, mPaint);
		}
		
		invalidate();
    }     

    /**
     * Draw a circle.
     */
    private final RectF mReusableCircleRect = new RectF();
    private void drawCircle(Canvas pCanvas, float pX, float pY, float pRadius, Paint pPaint) {
        pCanvas.save(Canvas.MATRIX_SAVE_FLAG);
        mReusableCircleRect.left = pX - pRadius;
        mReusableCircleRect.right = pX + pRadius;
        mReusableCircleRect.top = pY - pRadius;
        mReusableCircleRect.bottom = pY + pRadius;
        pCanvas.drawOval(mReusableCircleRect, pPaint);
        pCanvas.restore();
    }    
}
