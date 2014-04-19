// example: saveSetting("mediaplayer","Sound",1);
// example: var strSound = getSetting("mediaplayer","Sound");

function settingExists(strApp, strKey){
	var strSetting = strApp+"¿"+strKey;
	if (parent!==self){
		var strSettings = window.top.icookies.document.getElementById("settingList").value.split("»");	// Split up the settings
		
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

	var strSettings = window.top.icookies.document.getElementById("settingList").value.split("»");	// Split up the settings

	for (var i = 0 ; i < strSettings.length ; i++ ) {
		var strSettingParts = strSettings[i].split("º");			// Split key from value
		if ( strSettingParts[0] == strSetting ) {
			strFinalSettings += strSettingParts[0] + "º" + strValue + "»";
		} else 
			strFinalSettings += strSettings[i]+"»";
	}

	
	window.top.icookies.document.settings.settingList.value = strFinalSettings;
	if (intSave==true) setTimeout("storeSettings();",100);  // put in timeout to allow use before saving
}

function storeSettings() {
	window.top.icookies.document.settings.submit();
	alert("saved");
}

function getSetting(strApp, strKey, strDefault){
	if (parent==self) return strDefault;
	
	var strValue;
	var strSetting = strApp+"¿"+strSetting;
	var strSettings = window.top.icookies.document.getElementById("settingList").value.split("»");	// Split up the settings

	if (!settingExists(strSetting)) 
		return strDefault;

	for (var i = 0 ; i < strSettings.length ; i++ ) {
		var strSettingParts = strSettings[i].split("º");			// Split key from value
		if ( strSettingParts[0] == strSetting ) return correctVarType(strSettingParts[1]);
	}

	return strDefault;
}


function createSetting(strApp, strKey, intSave){
	var strSetting = strApp+"¿"+strKey;
	
	window.top.icookies.document.settings.settingList.value+=strSetting+"º»";
	if (intSave==true) window.top.icookies.document.settings.submit();
}


function correctVarType(strVar) {
	switch (strVar) {
		case 'true':
			return true;
			break;
			
		case 'false':
			return false;
			break;
			
		default:
			if( parseFloat(strVar) != "NaN" ) return parseFloat(strVar);
			
			return strVar;
			break;
	}
	return strVar;
}