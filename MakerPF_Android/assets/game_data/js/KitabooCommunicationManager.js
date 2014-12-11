'Version 1.0'

function KitabooCommunicationManager(){
}
	
//This is a simple function which sends activity data to the eBook
KitabooCommunicationManager.sendActivityData = function(result, student_response, totalNumberOfQuestion)
{
	//variable holds the value of activity result and student response that will be sent to the book, which in turn will send it to the LMS
	//define an object with 2 properties - result and student_response
	var objSend = {result:'', student_response:''};
	//calculate score of the activity in percentage i.e. (score/no. of questions)*100
	objSend.result = (result/totalNumberOfQuestion)*100;
	//If needed, the student's response can be saved in student_response property. 
	//If more than one response then it should be separated by '%' character
	//E.g. If user has solved 2 questions then student_response can be - 'chk1_cb%chk3_cb', where chk1_cb & chk1_cb can be instance name of the checkboxes 
	objSend.student_response = student_response !== undefined && student_response !== '' ? student_response : '';
	KitabooCommunicationManager.getFlexApp().activityJSCallBack(objSend);
	/*SCORM:END*/
}

// This function returns the appropriate reference,
// depending on the browser.
KitabooCommunicationManager.getFlexApp = function()
{
	//Get the reference so activeX or Plugin. flexApp is id/name of OBJECT/EMBED tags
	var appName  = 'HurixEbook';

	try
	{
		if(navigator.appName == 'Microsoft Internet Explorer')
		{
			if(window.top.window.document !== null && window.top.window.document[appName] != null)
			{
				return window.top.window.document[appName];
			}
			else if(window.parent.window.opener !== null && window.parent.window.document.getElementById(appName) != null)
			{
				return window.parent.window.document.getElementById(appName);
			}
			else if(window.top.window !== null)
			{
				return window.top.window; // Used when activity is interacting with HTML
			}

		}
		else
		{
			if(window.top.window.document !== null && window.top.window.document[appName] != null){
				return window.top.window.document[appName];
			}else if(window.parent.window.opener !== null && window.parent.window.opener.document[appName] != null){
				return window.parent.window.document.getElementById(appName);
			}
			else if(window.top.window.opener !== null){
				//console.log('window.top.window.opener.window');
				return window.top.window.opener.window; // Used when activity is interacting with HTML
			}else{
				//console.log('window.top.window');
				return window.top.window; // Used when activity is interacting with HTML
			}
		}
	}
	catch (e)
	{
		return null;
	}
}

/** 
  * This is a simple function which sends final activity data to the server 
  * call this function before closing the browser (onbeforeunload)
 **/
KitabooCommunicationManager.closeActivityJSCallBack = function()
{
	//Get the reference so activeX or Plugin. flexApp is id/name of OBJECT/EMBED tags
	if (KitabooCommunicationManager.getFlexApp() != null)
  	    KitabooCommunicationManager.getFlexApp().closeActivityJSCallBack();
}
