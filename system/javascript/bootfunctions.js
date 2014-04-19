var intItem = 0;
var strThemeDir = "";
var intWindowCount = 0;
var i = 0;

// portal settings
var intMaxWindows = 3;

// user psp settings (defined in loadfunctions.js)
var intSound = 1;
var blnShortcuts;
var blnFirstUse;
var strPassword;

function returnLoadStatus(strText,intBootStage){
	document.getElementById("loadingStatus").innerHTML=strText;		// set the dynamic loading info div
	if(intBootStage>0) showHideLayer("lyLoadIcon"+intBootStage,'visible');	// make the icon visible (if set)
}

returnLoadStatus("Loading Javascript Files...");

function ApplyBootSettings(){
	
	// Apply Theme
	// ===========
	//
	// This should come first as this requires the most loading which takes more time
	
	returnLoadStatus("Applying 1st Stage settings...",1);
	
	if (parent!==self) strThemeDir = window.top.icookies.document.getElementById('theme').value;	// Get the theme cookie
	
	if(!(strThemeDir.slice(0,1)=="/")){
		strThemeDir="/default";
	}

	//document.write('<link rel="stylesheet" type"text/css" href="../theme/' + strThemeDir + '/css/desktop.css" />');
}