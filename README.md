#MakerPF - Android
![MakerPF icon](http://www.planetfactory.com/images/pf/makerpf.png)

[MakerPF]: http://wwww.planetfactory.com "MakerPF"
[LaFactoria]: http://wwww.lafactoria.eu "La Factoria"

### Prerequisites
- Have eclipse with android plugin and sdk <http://developer.android.comsdk/index.html#download>
- Download android versions 8 and 17 (or the last one)
 
### Download base project
We provide you a base MakerPF native project to easily create the native APK. 


- Download the base project from github <https://github.com/lafactoria/makerpf-android>
- Download Andengine library <https://github.com/nicolasgramlich/AndEngine>
- Import andengine library to eclipse
- Import MakerPF_Android project to eclipse
- Link Andengine library to MakerPF_Android project


### Copy MakerPF Content
Since MakerPF published project comes with the HTML5 one by default, we have to copy the abstract content to the native Android project.   

- Copye the content of the folder game into the assets folder of the MakerPF_Android project (Copy only the content of the folder not the folder itself)

### Set project properties
Each android project needs to have a unique ID   

- Change the project id throught android 
- Change the project id in the AndroidManifest.xml 
- (Optional) change the project icon

### Test
It is very important to test the project before publishing to make sure it all works as expected.

- Plug in a real device to test
- Click the play button in eclipse to run the project in that device

### Publish
To publish an app to google play, you need a keystore, this keystore needs to be saved for further updates of the application.   
A same keystore can be used for more than one application

- In AndroidManifest.xml file, click **Export Project**
- It asks your for a keystore or to create a new one
- Save the APK File. This is the file that will be uploaded to the Google Play Store