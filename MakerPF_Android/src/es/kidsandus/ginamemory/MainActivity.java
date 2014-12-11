package es.kidsandus.ginamemory;

import org.xwalk.core.XWalkView;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends Activity {

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		
		View decorView = getWindow().getDecorView();
		int uiOptions = View.SYSTEM_UI_FLAG_LOW_PROFILE;
		decorView.setSystemUiVisibility(uiOptions);
		
		XWalkView webView = new XWalkView(this, this);
		webView.load("file:///android_asset/game_data/index.html", null);
		
		setContentView(webView);
	}

}
