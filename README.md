#MakerPF - Android
![MakerPF icon](https://dl.dropboxusercontent.com/u/18446966/MAKERPF_MANUAL_IMAGES/makerPFicon.png)

[MakerPF]: http://wwww.planetfactory.com "MakerPF"
[LaFactoria]: http://wwww.lafactoria.eu "La Factoria"


### Prerequisites
- Have eclipse with android plugin and sdk <https://developer.android.com/sdk/index.html>
- Download android versions 8 and 17 (or the last one)
 
### STEP 1: Download base project
We provide you a base MakerPF native project to easily create the native APK.


1. Download the base project from github <https://github.com/lafactoria/makerpf-android>      
![Download Project](https://dl.dropboxusercontent.com/u/18446966/MAKERPF_MANUAL_IMAGES/makerPF-download.png)   
2. Import project to library to eclipse   
![Import Library](https://dl.dropboxusercontent.com/u/18446966/MAKERPF_MANUAL_IMAGES/android/import.png)   
![Import Library](https://dl.dropboxusercontent.com/u/18446966/MAKERPF_MANUAL_IMAGES/android/import2.png)   
![Import Library](https://dl.dropboxusercontent.com/u/18446966/MAKERPF_MANUAL_IMAGES/android/import3.png)   
3. Import MakerPF_Android project to eclipse     
![Import Library4](https://dl.dropboxusercontent.com/u/18446966/MAKERPF_MANUAL_IMAGES/android/import4.png)



### STEP 2: Copy MakerPF Content
Since MakerPF published project comes with the HTML5 one by default, we have to copy the abstract content to the native Android project.   

- Copye the content of the folder game into the assets folder of the MakerPF_Android project (Copy only the content of the folder not the folder itself)

![MakerPF Content](https://dl.dropboxusercontent.com/u/18446966/MAKERPF_MANUAL_IMAGES/android/content.png)


### STEP 3: Set project properties
Each android project needs to have a unique ID   

1. Change the project id throught android. Right click over **src/com.planetfactory.makerpf** and press **Refactor/Rename…**
![Change Package id](https://dl.dropboxusercontent.com/u/18446966/MAKERPF_MANUAL_IMAGES/android/rename.png)
2. Change the project id in the AndroidManifest.xml 
![Change Package id Manifest](https://dl.dropboxusercontent.com/u/18446966/MAKERPF_MANUAL_IMAGES/android/packageId.png)
3. (Optional) change the project icon. Replace the image **ic_launcher.png** in the folders res/drawable-hdpi, res/drawable-mdpi, res/drawable/ldpi, res/drawable/xhdpi with the right icon size.   
[More Info about icons](http://developer.android.com/design/style/iconography.html)



### STEP 4: Test
It is very important to test the project before publishing to make sure it all works as expected.

- Plug in a real device to test
- Click the play button in eclipse to run the project in that device   
![Android test](https://dl.dropboxusercontent.com/u/18446966/MAKERPF_MANUAL_IMAGES/android/test.png)

### STEP 5: Publish
To publish an app to google play, you need a keystore, this keystore needs to be saved for further updates of the application.   
A same keystore can be used for more than one application

- In AndroidManifest.xml file, click **Export Project**   
![Publish](https://dl.dropboxusercontent.com/u/18446966/MAKERPF_MANUAL_IMAGES/android/export.png)
- It asks your for a keystore or to create a new one
- Save the APK File. This is the file that will be uploaded to the Google Play Store

