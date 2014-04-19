// example: saveSetting("mediaplayer","Sound",1);
// example: var strSound = getSetting("mediaplayer","Sound");
var notPSP = (navigator.userAgent.indexOf('PlayStation Portable') != -1) ? false : true;
var expiry = new Date();
expiry.setTime(expiry.getTime() + (7*24*60*60*1000));

function getSettingList(){
	if (notPSP){
		var cookiedata = unescape(window.document.cookie);
		var cookiecontents = cookiedata.split("=");
		if(cookiecontents[0] == "cookiedata") {
			return cookiecontents[1];
		}else return "";
	}else
		return window.top.isettings.document.getElementById("settingList").value;	// Split up the settings
}

function clearSettings(){
	if( confirm ("Are you sure you wish to clear all settings?")) {
		if (notPSP){
		window.document.cookie = "cookiedata=" + "" + ";" + "expires=" + expiry.toGMTString() + ";" ;
		}else{
			window.top.isettings.document.settings.settingList.value = "";
			if (intSave==true) setTimeout("storeSettings();",100);  // put in timeout to allow use before saving
		}
	}
}

function settingExists(strApp, strKey){
	var strSetting = strApp+"¿"+strKey;
	if (parent!==self){
		var strSettings = getSettingList().split("»");	// Split up the settings
		
		for (var i = 0 ; i < strSettings.length ; i++ ) {
			var strSettingParts = strSettings[i].split("º");			// Split key from value
			if ( strSettingParts[0] == strSetting ) {
				return true;
				break;
			}
		}
	}
	return false;
}

function saveSetting(strApp, strKey, strValue, intSave){
	var strSetting = strApp+"¿"+strKey;
	var strFinalSettings = "";

	if (!settingExists(strApp, strKey) ) 
		createSetting(strApp, strKey ,0);		//the zero tells it not to save, as it would take time. 

	var strSettings = getSettingList().split("»");

	for (var i = 0 ; i < strSettings.length ; i++ ) {
		var strSettingParts = strSettings[i].split("º");			// Split key from value
		if ( strSettingParts[0] == strSetting ) {
			strFinalSettings += strSettingParts[0] + "º" + strValue + "»";
		} else 
			strFinalSettings += strSettings[i]+"»";
	}

	if (notPSP){
		window.document.cookie = "cookiedata=" + escape(strFinalSettings) + ";" + "expires=" + expiry.toGMTString() + ";" ;
	}else{
		window.top.isettings.document.settings.settingList.value = strFinalSettings;
		if (intSave==true) setTimeout("storeSettings();",100);  // put in timeout to allow use before saving
	}
}

function storeSettings() {
	if (!notPSP){
		window.top.isettings.document.settings.submit();
	alert("saved");}
}

function getSetting(strApp, strKey, strDefault){
	if (parent==self) return strDefault;
	
	var strValue;
	var strSetting = strApp+"¿"+strKey;
	var strSettings = getSettingList().split("»");	// Split up the settings

	if (!settingExists(strApp, strKey)) 
		return strDefault;

	for (var i = 0 ; i < strSettings.length ; i++ ) {
		var strSettingParts = strSettings[i].split("º");			// Split key from value
		if ( strSettingParts[0] == strSetting ) return correctVarType(strSettingParts[1]);
	}

	return strDefault;
}


function createSetting(strApp, strKey, intSave){
	var strSetting = strApp+"¿"+strKey;
	
	if (notPSP){
		var strFinalSettings = getSettingList() + strSetting+"º»";
		window.document.cookie = "cookiedata=" + escape(strFinalSettings) + ";" + "expires=" + expiry.toGMTString() + ";" ;
	}else{
		window.top.isettings.document.settings.settingList.value+=strSetting+"º»";
		if (intSave==true) setTimeout("storeSettings();",100);  // put in timeout to allow use before saving
	}
	
}


function correctVarType(strVar) {
	switch (strVar) {
		case 'true':
			return true;
			break;
			
		case 'false':
			return false;
			break;
		
		case "":
			return "";
			break;
		
		default:
			if( IsNumeric(strVar) ) return parseFloat(strVar);
			
			return strVar;
			break;
	}
	return strVar;
}

function IsNumeric(sText) {
   var ValidChars = "0123456789.";
   var IsNumber=true;
   var Char;

 
   for (i = 0; i < sText.length && IsNumber == true; i++) { 
      Char = sText.charAt(i); 
      if (ValidChars.indexOf(Char) == -1) IsNumber = false;
      }
   return IsNumber;
   
}