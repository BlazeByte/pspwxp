returnLoadStatus("Preparing application functions...",3);

function loadApp(strAppTitle,strAppURL,strAppIcon,strAppMax){
	
	hideMenu();

	document.getElementById("WindowTitle1").innerHTML=strAppTitle;
	document.getElementById("imgWindowIcon1").src="../theme"+strThemeDir+strAppIcon;
	
	showHideLayer('Window1','visible');

	try{
		frames["iWindow1"].location.href=strAppURL;
	}catch(e){
		showHideLayer('Window1','hidden');
		msgBox("This application could not be loaded. Are you sure the location '" + strAppURL + "' is correct?");
	}
	
}

function minApp(intWindow){
	alert("boo");
	showHideLayer('Window'+intWindow,'hidden');
}

function maxApp(intWindow){
	showHideLayer('Window'+intWindow,'hidden');
}

function closeApp(intWindow){
	showHideLayer('Window'+intWindow,'hidden');
	frames["iWindow"+intWindow].location.href="blank.htm";
}