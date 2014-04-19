// example: saveFile("mediaplayer","Sound",1);
// example: var strSound = getFile("mediaplayer","Sound");
var notPSP = (navigator.userAgent.indexOf('PlayStation Portable') != -1) ? false : true;
var expiry = new Date();
expiry.setTime(expiry.getTime() + (7*24*60*60*1000));

function getFileList(){
	if (notPSP){
		var cookiedata = unescape(window.document.cookie);
		var cookiecontents = cookiedata.split("=");
		if(cookiecontents[0] == "cookiedata") {
			return cookiecontents[1];
		}else return "";
	}else
		return window.top.ifiles.document.getElementById("fileList").value;	// Split up the files
}

function clearFiles(){
	if( confirm ("Are you sure you wish to clear all files?")) {
		if (notPSP){
		window.document.cookie = "cookiedata=" + "" + ";" + "expires=" + expiry.toGMTString() + ";" ;
		}else{
			window.top.ifiles.document.files.fileList.value = "";
			if (intSave==true) setTimeout("storeFiles();",100);  // put in timeout to allow use before saving
		}
	}
}

function fileExists(strFolder, strFile){
	var strFile = strFolder+"¿"+strFile;
	if (parent!==self){
		var strFiles = getFileList().split("»");	// Split up the files
		
		for (var i = 0 ; i < strFiles.length ; i++ ) {
			var strFileParts = strFiles[i].split("º");			// Split key from value
			if ( strFileParts[0] == strFile ) {
				return true;
				break;
			}
		}
	}
	return false;
}

function saveFile(strFolder, strFile, strData, intSave){
	var strPath = strFolder+"¿"+strFile;
	var strFinalFiles = "";

	if (!fileExists(strFolder, strFile) ) 
		createFile(strFolder, strFile ,0);		//the zero tells it not to save, as it would take time. 

	var strFiles = getFileList().split("»");

	for (var i = 0 ; i < strFiles.length ; i++ ) {
		var strFileParts = strFiles[i].split("º");			// Split key from value
		if ( strFileParts[0] == strPath ) {
			strFinalFiles += strFileParts[0] + "º" + strData + "»";
		} else 
			strFinalFiles += strFiles[i]+"»";
	}

	if (notPSP){
		window.document.cookie = "cookiedata=" + escape(strFinalFiles) + ";" + "expires=" + expiry.toGMTString() + ";" ;
	}else{
		window.top.ifiles.document.files.fileList.value = strFinalFiles;
		if (intSave==true) setTimeout("storeFiles();",100);  // put in timeout to allow use before saving
	}
}

function storeFiles() {
	if (!notPSP)
		window.top.ifiles.document.files.submit();
	alert("saved files");
}

function getFile(strFolder, strFile, strDefault){
	if (parent==self) return strDefault;
	
	var strData;
	var strPath = strFolder+"¿"+strFile;
	var strFiles = getFileList().split("»");	// Split up the files

	if (!fileExists(strFolder, strFile)) 
		return strDefault;

	for (var i = 0 ; i < strFiles.length ; i++ ) {
		var strFileParts = strFiles[i].split("º");			// Split key from value
		if ( strFileParts[0] == strPath ) return strFileParts[1];
	}

	return strDefault;
}


function createFile(strFolder, strFile, intSave){
	var strFile = strFolder+"¿"+strFile;
	
	if (notPSP){
		var strFinalFiles = getFileList() + strFile+"º»";
		window.document.cookie = "cookiedata=" + escape(strFinalFiles) + ";" + "expires=" + expiry.toGMTString() + ";" ;
	}else{
		window.top.ifiles.document.files.fileList.value+=strFile+"º»";
		if (intSave==true) setTimeout("storeFiles();",100);  // put in timeout to allow use before saving
	}
	
}