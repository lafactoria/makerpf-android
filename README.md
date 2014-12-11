#MakerPF - Android
![MakerPF icon](https://dl.dropboxusercontent.com/u/18446966/MAKERPF_MANUAL_IMAGES/makerPFicon.png)

[MakerPF]: http://wwww.planetfactory.com "MakerPF"
[LaFactoria]: http://wwww.lafactoria.eu "La Factoria"

MakerPF projects can be exported to Android using an HTML5 web runtime or by using native code.


### Prerequisites
- Download and install Eclipse
- Click "Download Eclipse ADT with the Android SDK for Windows"   
     https://developer.android.com/sdk/index.html?hl=i   
     
- Unpack the ZIP file (named adt-bundle-<os_platform>.zip) and save it to an appropriate location, such as a "Development" directory in your home directory.
- Open the adt-bundle-<os_platform>/eclipse/ directory and launch Eclipse.
- Choose where you want to place the workspace folder   

       
![Download Project](https://dl.dropboxusercontent.com/u/18446966/MAKERPF_MANUAL_IMAGES/android/1-workspace.JPG)
   
   
- Download the base project from github <https://github.com/lafactoria/makerpf-android>      
![Download Project](https://dl.dropboxusercontent.com/u/18446966/MAKERPF_MANUAL_IMAGES/makerPF-download.png) 


### STEP 1: Import
1.1 Copy the downloaded files to the folder "Workspace".
![Download Project](https://dl.dropboxusercontent.com/u/18446966/MAKERPF_MANUAL_IMAGES/android/2-copiar_a_workspace.jpg)

1.2 Click on "Import" on the left menu; and then click on "Existing Projects into Workspace".
![Download Project](https://dl.dropboxusercontent.com/u/18446966/MAKERPF_MANUAL_IMAGES/android/3-importar.jpg)   
![Download Project](https://dl.dropboxusercontent.com/u/18446966/MAKERPF_MANUAL_IMAGES/android/4-existing.jpg)

1.3 Select the folder where you copied the "crosswalk" and the "MakerPF_android" and import both files to Eclipse.
![Download Project](https://dl.dropboxusercontent.com/u/18446966/MAKERPF_MANUAL_IMAGES/android/5-select_workspace.JPG)

1.4 Click "properties" of the crosswalk and link it with the project.
![Download Project](https://dl.dropboxusercontent.com/u/18446966/MAKERPF_MANUAL_IMAGES/android/6-fix_properties.JPG)
![Download Project](https://dl.dropboxusercontent.com/u/18446966/MAKERPF_MANUAL_IMAGES/android/7-fix_properties_android.JPG)

1.5 Link MakerPF with the base project by clicking again "properties".
![Download Project](https://dl.dropboxusercontent.com/u/18446966/MAKERPF_MANUAL_IMAGES/android/8-link_with_base_project.JPG)


### STEP 2: Copy MakerPF Content

- Copy the Maker Project to www_data project. Delete the other folders and add the unpacked ZIP file.


### STEP 3: Set project properties
Each android project needs to have a unique ID.

1. Change the project ID throught android. Right click over **src/com.planetfactory.makerpf** and press **Refactor/Rename…**
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