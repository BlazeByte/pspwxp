var intItem = 0;
var strThemeDir = "";
var i = 0;
var intCookiesLoaded = 0;

function sendCookiesReady(){
	// The cookie page has loaded
	intCookiesLoaded=1;
	
	ApplyBootSettings();
	ApplyLoadSettings();
		
}

function returnLoadStatus(strText,intBootStage){
	document.getElementById("loadingStatus").innerHTML=strText;
	if(intBootStage>0) showHideLayer("lyLoadIcon"+intBootStage,'visible');
}

returnLoadStatus("Loading Settings...");

// Boot delay to allow cookies page to load.
// This is generally very bad practice as it causes the internet browser to hang, but because of limitations of the PSP, this code is required so the cookies page gets time to load, or otherwise the code refers to a page which has not loaded yet.
//while(i>intCookies==0){
//	i++;
//}

returnLoadStatus("Loading Javascript Files...");

function ApplyBootSettings(){
	
	// Apply Theme
	// ===========
	//
	// This should come first as this requires the most loading which takes more time
	
	returnLoadStatus("Applying 1st Stage settings...",1);
	
	strThemeDir = icookies.document.getElementById('theme').value;	// Get the theme cookie
	
	if(!(strThemeDir.slice(0,1)=="/")){
		strThemeDir="/default";
	}

	//document.write('<link rel="stylesheet" type"text/css" href="../theme/' + strThemeDir + '/css/desktop.css" />');
	
}