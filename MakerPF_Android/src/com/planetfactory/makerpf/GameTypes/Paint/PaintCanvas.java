package com.planetfactory.makerpf.GameTypes.Paint;

import java.io.IOException;
import java.io.InputStream;

import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import android.app.Activity;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.animation.AlphaAnimation;
import android.view.animation.Animation;
import android.view.animation.Animation.AnimationListener;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.planetfactory.makerpf.R;
import com.planetfactory.makerpf.GameTypes.BaseGame;
import com.planetfactory.makerpf.Resources.ResourceManager;
import com.planetfactory.makerpf.Utils.XMLParser;

public class PaintCanvas extends Activity {

	/** Colors to cycle through. */
	static final int[] COLORS = new int[] { Color.WHITE, Color.RED,
			Color.YELLOW, Color.GREEN, Color.CYAN, Color.BLUE, Color.MAGENTA, };

	/** Background color. */
	static final int BACKGROUND_COLOR = Color.TRANSPARENT;

	/** The view responsible for drawing the window. */	
	private PaintView mPaintView;
	
	private ImageView mBackgroundImageView;
	private ImageView mForegroundImageView;
	
	private ImageView mHomeButton;
	private ImageView mGarbageButton;
	private ImageView mCameraButton;
	
	private LinearLayout mBrushSizeFrame;
	private LinearLayout mBrushColorFrame;
	
	private ImageView mSizeBigView;
	private ImageView mSizeMediumView;
	private ImageView mSizeSmallView;
	private ImageView mSizeSelectedView;
	
	private RelativeLayout mInstructionBackgroundLayout;
	private RelativeLayout mInstructionPopupLayout;
	private ImageView mInstructionArrowImageView;
	private ImageView mInstructionImageView;
	private TextView mInstructionTextView;
	
	/** The index of the current color to use. */
	int mColorIndex;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		
		setContentView(R.layout.paint_layout);
		
		RelativeLayout layout = (RelativeLayout)findViewById(R.id.paint_layout);
		layout.setBackgroundColor(Color.LTGRAY);
		
		mPaintView = (PaintView) findViewById(R.id.paint_view);
		mPaintView.setBackgroundColor(BACKGROUND_COLOR);
	}

	/**
	 * Pull the background image from the paint gametype's folder and 
	 * apply it to the application in the form of an ImageView.
	 */
	private void createBackground(){
		mBackgroundImageView = (ImageView) findViewById(R.id.background_image);

		InputStream is = null;
		try {
			is = getAssets().open(ResourceManager.getAssetPath() + "images/background_paint.jpg");
		} catch (IOException e) {
			e.printStackTrace();
		}

		if (is != null) {
			Drawable d = Drawable.createFromStream(is, null);
			mBackgroundImageView.setImageDrawable(d);
		}
	}
	
	/**
	 * Pull the foreground image from the paint gametype's folder and 
	 * apply it to the application in the form of an ImageView.
	 */
	private void createForeground(){
		mForegroundImageView = (ImageView) findViewById(R.id.foreground_image);

		InputStream is = null;
		try {
			is = getAssets().open(ResourceManager.getAssetPath() + "images/paint_messi.png");
		} catch (IOException e) {
			e.printStackTrace();
		}

		if (is != null) {
			Drawable d = Drawable.createFromStream(is, null);
			mForegroundImageView.setImageDrawable(d);
		}
	}
	
	/**
	 * Create the main HUD items, including the camera button, garbage (erase)
	 * button, menu/home button, and the left & bottom size and color bars.
	 */
	private void createHUD(){
		mHomeButton = (ImageView) findViewById(R.id.home_button);
		mHomeButton.setClickable(true);
		mHomeButton.setOnClickListener(new OnClickListener(){

			@Override
			public void onClick(View arg0) {
				PaintCanvas.this.finish();
			}
			
		});
		
		mGarbageButton = (ImageView) findViewById(R.id.garbage_button);
		mGarbageButton.setClickable(true);
		mGarbageButton.setOnClickListener(new OnClickListener(){

			@Override
			public void onClick(View v) {
				mPaintView.clear(BACKGROUND_COLOR);
			}
			
		});	
		
		mCameraButton = (ImageView) findViewById(R.id.camera_button);
		mCameraButton.setClickable(true);
		mCameraButton.setOnClickListener(new OnClickListener(){

			@Override
			public void onClick(View v) {
				hideHUD();
				ScreenCapture.capture(PaintCanvas.this);
				showHUD();
			}
			
		});
		
		InputStream is = null;
		try {
			is = getAssets().open("images/bt_menu.png");
			if (is != null) {
				Drawable d = Drawable.createFromStream(is, null);
				mHomeButton.setImageDrawable(d);
			}
			
			is = getAssets().open("images/paint-bin.png");
			if (is != null) {
				Drawable d = Drawable.createFromStream(is, null);
				mGarbageButton.setImageDrawable(d);
			}
			
			is = getAssets().open("images/camera.png");
			if (is != null) {
				Drawable d = Drawable.createFromStream(is, null);
				mCameraButton.setImageDrawable(d);
			}
			
		} catch (IOException e) {
			e.printStackTrace();
		}

		mBrushSizeFrame = (LinearLayout) findViewById(R.id.brush_size_layout);
		mBrushColorFrame = (LinearLayout) findViewById(R.id.brush_color_layout);
	}
	
	/**
	 * Load all of the color PNG's in from the 'assets/images/colors' folder,
	 * adding a View to the bottom color palette for each file found in the folder.
	 */
	private void addColorPalette(){
		InputStream is = null;
		String[] list = null;
		
		try {
			list = getAssets().list("images/colors");
		} catch (IOException e1) {
			e1.printStackTrace();
		}
		
		for(int i = 0; i < list.length; i++){
			final ImageView view = new ImageView(this);

			try {
				is = getAssets().open("images/colors/" + list[i]);
			} catch (IOException e) {
				e.printStackTrace();
			}
			
			if(is != null){
				Drawable d = Drawable.createFromStream(is, null);
				view.setImageDrawable(d);

				mBrushColorFrame.addView(view);
								
				int width = (int)((808 / list.length - 8));
				
				LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(width, width);
				lp.rightMargin = 3;
				
				view.setLayoutParams(lp);
				
				view.setClickable(true);
				
				final String colorName = list[i];
				
				/*
				 * TODO: The colors for this current implementation are hardcoded into the app.
				 * The idea is NOT to follow this same path, but replace these hardcoded color
				 * selection values when themes are created for MakerPF in the future.
				 */
				view.setOnClickListener(new OnClickListener(){

					@Override
					public void onClick(View v) {

						int color = Color.argb(255, 49, 182, 234);
						
						if(colorName.equals("paint-c1.png")){
							color = Color.rgb(49, 182, 234);
						} else if(colorName.equals("paint-c2.png")){
							color = Color.rgb(30, 78, 170);
						} else if(colorName.equals("paint-c3.png")){
							color = Color.rgb(141, 70, 162);
						} else if(colorName.equals("paint-c4.png")){
							color = Color.rgb(255, 70, 162);
						} else if(colorName.equals("paint-c5.png")){
							color = Color.rgb(255, 0, 0);
						} else if(colorName.equals("paint-c6.png")){
							color = Color.rgb(255, 111, 0);
						} else if(colorName.equals("paint-c7.png")){
							color = Color.rgb(255, 169, 0);
						} else if(colorName.equals("paint-c8.png")){
							color = Color.rgb(255, 255, 0);
						} else if(colorName.equals("paint-c9.png")){
							color = Color.rgb(159, 202, 82);
						} else if(colorName.equals("paint-c10.png")){
							color = Color.rgb(28, 159, 83);
						} else if(colorName.equals("paint-c11.png")){
							color = Color.rgb(88, 88, 88);
						}
						
						mPaintView.setColor(color);
					}
					
				});
			}
		}
	}
	
	/**
	 * Load the paint size selection images into the application as ImageViews. 
	 */
	private void addSizeSelection(){
		
		mSizeBigView = (ImageView)findViewById(R.id.size_big_view);
		mSizeBigView.setClickable(true);
		mSizeBigView.setOnClickListener(new OnClickListener(){

			@Override
			public void onClick(View v) {
				mPaintView.setDrawRadius(PaintView.DRAW_RADIUS_BIG);
				
				InputStream is = null;
				try {
					is = getAssets().open("images/paint-big.png");
				} catch (IOException e) {
					e.printStackTrace();
				}
				if (is != null) {
					Drawable d = Drawable.createFromStream(is, null);
					mSizeSelectedView.setImageDrawable(d);
					
					LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(mSizeBigView.getWidth(), mSizeBigView.getHeight());
					lp.setMargins(0, (int) (mBrushSizeFrame.getHeight() * 0.0815f), 1, 0);
					mSizeSelectedView.setLayoutParams(lp);
				}
			}
			
		});
		
		LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(mSizeBigView.getDrawable().getBounds().width(), mSizeBigView.getDrawable().getBounds().height());
		lp.setMargins(0, (int) (mBrushSizeFrame.getHeight() * 0.293f), 2, 0);
		mSizeBigView.setLayoutParams(lp);
		
		mSizeMediumView = (ImageView)findViewById(R.id.size_medium_view);
		mSizeMediumView.setClickable(true);
		mSizeMediumView.setOnClickListener(new OnClickListener(){

			@Override
			public void onClick(View v) {
				mPaintView.setDrawRadius(PaintView.DRAW_RADIUS_MEDIUM);
				
				InputStream is = null;
				try {
					is = getAssets().open("images/paint-medium.png");
				} catch (IOException e) {
					e.printStackTrace();
				}
				if (is != null) {
					Drawable d = Drawable.createFromStream(is, null);
					mSizeSelectedView.setImageDrawable(d);
					
					LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(mSizeMediumView.getWidth(), mSizeMediumView.getHeight());
					lp.setMargins(0, (int) (mBrushSizeFrame.getHeight() * 0.099f), 1, 0);
					mSizeSelectedView.setLayoutParams(lp);
				}
			}
			
		});

		lp = new LinearLayout.LayoutParams(mSizeMediumView.getDrawable().getBounds().width(), mSizeMediumView.getDrawable().getBounds().height());
		lp.setMargins(0, (int) (mBrushSizeFrame.getHeight() * 0.037f), 2, 0);
		mSizeMediumView.setLayoutParams(lp);
		
		mSizeSmallView = (ImageView)findViewById(R.id.size_small_view);
		mSizeSmallView.setClickable(true);
		mSizeSmallView.setOnClickListener(new OnClickListener(){

			@Override
			public void onClick(View v) {
				mPaintView.setDrawRadius(PaintView.DRAW_RADIUS_SMALL);
				
				InputStream is = null;
				try {
					is = getAssets().open("images/paint-small.png");
				} catch (IOException e) {
					e.printStackTrace();
				}
				if (is != null) {
					Drawable d = Drawable.createFromStream(is, null);
					mSizeSelectedView.setImageDrawable(d);
					
					LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(mSizeSmallView.getWidth(), mSizeSmallView.getHeight());
					lp.setMargins(0, (int) (mBrushSizeFrame.getHeight() * 0.1223f), 1, 0);
					mSizeSelectedView.setLayoutParams(lp);
				}
			}
			
		});
		
		lp = new LinearLayout.LayoutParams(mSizeSmallView.getDrawable().getBounds().width(), mSizeSmallView.getDrawable().getBounds().height());
		lp.setMargins(0, (int) (mBrushSizeFrame.getHeight() * 0.039f), 4, 0);
		mSizeSmallView.setLayoutParams(lp);
		
		mSizeSelectedView = (ImageView)findViewById(R.id.size_selected_view);
		
		InputStream is = null;
		try {
			is = getAssets().open("images/paint-big.png");
			if (is != null) {
				Drawable d = Drawable.createFromStream(is, null);
				mSizeBigView.setImageDrawable(d);
			}
			
			is = getAssets().open("images/paint-medium.png");
			if (is != null) {
				Drawable d = Drawable.createFromStream(is, null);
				mSizeMediumView.setImageDrawable(d);
			}
			
			is = getAssets().open("images/paint-small.png");
			if (is != null) {
				Drawable d = Drawable.createFromStream(is, null);
				mSizeSmallView.setImageDrawable(d);
			}
			
			is = getAssets().open("images/paint-big.png");
			if (is != null) {
				Drawable d = Drawable.createFromStream(is, null);
				mSizeSelectedView.setImageDrawable(d);
			}
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		lp = new LinearLayout.LayoutParams(mSizeBigView.getWidth(), mSizeBigView.getHeight());
		lp.setMargins(0, (int) (mBrushSizeFrame.getHeight() * 0.0815f), 1, 0);
		mSizeSelectedView.setLayoutParams(lp);
	}
	
	private void createInstructionBox(){
		
		mInstructionPopupLayout = (RelativeLayout) findViewById(R.id.bg_popup);

		/*
		 * Setup the instruction backdrop (black background 0.5 alpha)
		 */
		mInstructionBackgroundLayout = (RelativeLayout) findViewById(R.id.instruction_backdrop);
		mInstructionBackgroundLayout.setClickable(true);
		mInstructionBackgroundLayout.getBackground().setAlpha((int) (255 * 0.5f));
		
		final Animation backgroundFade = new AlphaAnimation(0.5f, 0);
		backgroundFade.setDuration(1000);
		
		final AnimationListener animationListener = new AnimationListener(){

			@Override
			public void onAnimationEnd(Animation animation) {
				mInstructionPopupLayout.setVisibility(View.GONE);
				mInstructionBackgroundLayout.setVisibility(View.GONE);
			}

			@Override
			public void onAnimationRepeat(Animation animation) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void onAnimationStart(Animation animation) {
				// TODO Auto-generated method stub
				
			}
			
		};
		
		backgroundFade.setAnimationListener(animationListener);
		
		/*
		 * Setup the instruction arrow button to close the box via alpha fade
		 */
		mInstructionArrowImageView = (ImageView) findViewById(R.id.instruction_arrow);
		mInstructionArrowImageView.setClickable(true);
		mInstructionArrowImageView.setOnClickListener(new OnClickListener(){
			@Override
			public void onClick(View v) {
				mInstructionBackgroundLayout.setAnimation(backgroundFade);
				
				v.invalidate();
			}
		});
		
		/*
		 * Create Instruction text
		 */
		NodeList list = XMLParser.parseDocument(BaseGame.T_INSTRUCTION, ResourceManager.mPaintDocument);
		Element e = (Element) list.item(0);
		
		list = e.getElementsByTagName(BaseGame.T_TEXTS);
		
		String text = "";
		
		if(list != null && list.getLength() > 0){
			
			e = (Element) list.item(0);
			list = e.getElementsByTagName(BaseGame.T_TEXT);
			
			for(int i = 0; i < list.getLength(); i++){
				final Element textElement = (Element) list.item(i);
				
				if(Integer.valueOf(textElement.getAttribute(BaseGame.A_LANGUAGE)) == ResourceManager.getLanguage()){
					text = textElement.getAttribute(BaseGame.A_TEXT);
				} 
			}
			
			list = null;
		}
		
		mInstructionTextView = (TextView) findViewById(R.id.text_view);
		mInstructionTextView.setText(text);
		
		/*
		 * Create instruction image
		 */
		final ImageView instructionImage = (ImageView) findViewById(R.id.avatar);
		
		list = XMLParser.parseDocument(BaseGame.T_INSTRUCTION, ResourceManager.mPaintDocument);
		e = (Element) list.item(0);
		
		list = e.getElementsByTagName(BaseGame.T_IMAGE);
		
		if(list != null && list.getLength() > 0){
			
			e = (Element) list.item(0);
			final String texturePath = e.getAttribute(BaseGame.A_SRC);
			
			InputStream is = null;
			try {
				is = getAssets().open(ResourceManager.getAssetPath() + "images/" + texturePath);
			} catch (IOException err) {
				err.printStackTrace();
			}

			if (is != null) {
				Drawable d = Drawable.createFromStream(is, null);
				instructionImage.setImageDrawable(d);
			}
			
			list = null;
		}
		
		
		//mInstructionImageView;
	}
	
	private void hideHUD(){
		mBrushSizeFrame.setVisibility(View.INVISIBLE);
		mBrushColorFrame.setVisibility(View.INVISIBLE);
		mGarbageButton.setVisibility(View.INVISIBLE);
		mHomeButton.setVisibility(View.INVISIBLE);
		mCameraButton.setVisibility(View.INVISIBLE);
	}
	
	private void showHUD(){
		mBrushSizeFrame.setVisibility(View.VISIBLE);
		mBrushColorFrame.setVisibility(View.VISIBLE);
		mGarbageButton.setVisibility(View.VISIBLE);
		mHomeButton.setVisibility(View.VISIBLE);
		mCameraButton.setVisibility(View.VISIBLE);
	}

	@Override
	public void onBackPressed() {
		this.finish();
		super.onBackPressed();
	}

	@Override
	public void onWindowFocusChanged(boolean hasFocus) {
		createBackground();
		createForeground();
		createHUD();
		addColorPalette();
		addSizeSelection();
		createInstructionBox();
		super.onWindowFocusChanged(hasFocus);
	}
}