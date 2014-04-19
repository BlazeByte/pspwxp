function saveFileExt(strApp,strType,strURL,strIconURL, strExt){
	saveSetting('fileExt',strExt,strApp+"^"+strType+"^"+strURL+"^"+strIconURL);
}