package com.planetfactory.makerpf.Utils;

import java.io.IOException;
import java.io.InputStream;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import android.content.Context;
import android.util.Log;

import com.planetfactory.makerpf.MainActivity;


public class XMLParser{

	public static Document parseXMLFile(final Context pContext, final String pXML){
		Document doc = null;
		
		DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
		
		try {
			DocumentBuilder db = dbf.newDocumentBuilder();
			
			InputStream is = pContext.getAssets().open(pXML);
			
			doc = db.parse(is);
			
		} catch (ParserConfigurationException e) {
			Log.e(MainActivity.TAG, e.getMessage());
			e.printStackTrace();
		} catch (SAXException e) {
			Log.e(MainActivity.TAG, e.getMessage());
			e.printStackTrace();
		} catch (IOException e) {
			Log.e(MainActivity.TAG, e.getMessage());
			e.printStackTrace();
		}
		
		return doc;
	}
	
	public static NodeList parseDocument(final String pTag, final Document pDocument){
		Element docElement = pDocument.getDocumentElement();
		
		NodeList nl = docElement.getElementsByTagName(pTag);
		
		return nl;
	}

}
