package com.planetfactory.makerpf.GameTypes.Paint;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

import com.planetfactory.makerpf.R;

import android.app.Activity;
import android.content.res.Resources.Theme;
import android.content.res.TypedArray;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Point;
import android.graphics.drawable.Drawable;
import android.os.Environment;
import android.util.Log;
import android.view.Display;
import android.view.View;

public class ScreenCapture {

	private static final String SCREENSHOT_LOCATION = Environment.getExternalStorageDirectory().toString() + "/Pictures/MakerPF/";

	public static void capture(final Activity pActivity){
		
		// Get device dimmensions
		Display display = pActivity.getWindowManager().getDefaultDisplay();
		Point size = new Point();
		
		size.x = display.getWidth();
		size.y = display.getHeight();

		// Get root view
		View view = pActivity.findViewById(R.id.paint_layout);
		
		// Create the bitmap to use to draw the screenshot
		final Bitmap bitmap = Bitmap.createBitmap(size.x, size.y, Bitmap.Config.ARGB_4444);
		final Canvas canvas = new Canvas(bitmap);

		// Get current theme to know which background to use
		final Theme theme = pActivity.getTheme();
		final TypedArray ta = theme.obtainStyledAttributes(new int[] { android.R.attr.windowBackground });
		final int res = ta.getResourceId(0, 0);
		final Drawable background = pActivity.getResources().getDrawable(res);

		// Draw background
		background.draw(canvas);

		// Draw views
		view.draw(canvas);

		// Save the screenshot to the file system
		FileOutputStream fos = null;
		try {
		    final File sddir = new File(SCREENSHOT_LOCATION);
		    if (!sddir.exists()) {
		        sddir.mkdirs();
		    }
		    fos = new FileOutputStream(SCREENSHOT_LOCATION
		            + System.currentTimeMillis() + ".jpg");
		    if (fos != null) {
		        if (!bitmap.compress(Bitmap.CompressFormat.JPEG, 90, fos)) {
		            Log.d("MAKERPF", "Compress/Write failed");
		        }
		        fos.flush();
		        fos.close();
		    }

		} catch (FileNotFoundException e) {
		    // TODO Auto-generated catch block
		    e.printStackTrace();
		} catch (IOException e) {
		    // TODO Auto-generated catch block
		    e.printStackTrace();
		}
	}
	

}
