
var PFCommunicationLayer = function(){
    var numOk = 0;
    var numNG = 0;
    var numberOfQuestions = 0;
    var areWeOnAActivity = false;

    var currentActivityType;
    var currentActivityName;
    var debugMode   = false;
	this.useKitaboo  = false;
}

    PFCommunicationLayer.prototype.onActivityStarted = function(activityType,activityName)
    {
        this.areWeOnAActivity = true;
        this.numOk = 0;
        this.numNG = 0;
        this.numberOfQuestions = 0;

        this.currentActivityType = activityType;
        this.currentActivityName = activityName;

        PFDebug("Activity started:" + activityType + "-" + activityName);

    };

    PFCommunicationLayer.prototype.setNumberOfQuestions = function(nOfquestions){
        if(this.areWeOnAActivity){
            this.numberOfQuestions = nOfquestions;
            PFDebug("Setting number of questions:" + nOfquestions);
        }
        else{
            PFDebug("WARNING: We're are not in an activity");
        }
    }

    PFCommunicationLayer.prototype.onActivityEnded = function(isCompleted)
    {
        if(this.areWeOnAActivity){
            this.areWeOnAActivity = false;
            PFDebug("Activity Ended:" + isCompleted);
            if(this.useKitaboo){
                KitabooCommunicationManager.sendActivityData(this.numOk, 0, this.numberOfQuestions);
            }
        }
        else{
            PFDebug("WARNING: We're are not in an activity");
        }
    };

    PFCommunicationLayer.prototype.onCorrect = function(userResponse)
    {
        if(this.areWeOnAActivity){
            this.numOk = this.numOk + 1;
            PFDebug("Activity On Correct: " + userResponse);
        }
        else{
            PFDebug("WARNING: We're are not in an activity");
        }
    };

    PFCommunicationLayer.prototype.onIncorrect  = function(userResponse)
    {
        if(this.areWeOnAActivity){
            this.numNG = this.numNG + 1;
            PFDebug("Activity On Incorrect: " + userResponse);
            /*if(this.useKitaboo){
                KitabooCommunicationManager.sendActivityData(0, userResponse, this.numberOfQuestions);
            }*/
        }
        else{
            PFDebug("WARNING: We're are not in an activity");
        }
    };

    PFCommunicationLayer.prototype.onMakerPFStarted = function()
    {
        PFDebug("MakerPF started");

	    var kitabooFlexApp = KitabooCommunicationManager.getFlexApp();

	    if (kitabooFlexApp != null)
			this.useKitaboo  = kitabooFlexApp.isHurix;
    };

    PFCommunicationLayer.prototype.onMakerPFClosed = function()
    {
        PFDebug("MakerPF closed");
        if(this.useKitaboo){
            KitabooCommunicationManager.closeActivityJSCallBack();
        }
    };





