returnLoadStatus("Preparing portal functions...",6);

var strHours;
var strMins;
var intJustOpened;

function showAppMenu(){

	if(document.getElementById('menu').style.visibility=="hidden"){
		showHideLayer('menu',"visible");
		intJustOpened=1;
		setTimeout("blnJustOpened=0;",1000);
	}else{
		hideMenu();
	}
}

function hideMenu(blnKeepMenu){
	if(intJustOpened==0){
		for( var i=0 ; i < strMenuID.length ; i++ ) {
			showHideLayer('ly' + strMenuID[i] , "hidden");	// Hide all submenus
		}

		if(!(blnKeepMenu == 1)){		// If the user wants the entire menu to be closed, then blnKeepMenu will not be set to 1
			showHideLayer('menu',"hidden");		// hide Main Menu
		}
	}
	intJustOpened=0;
}

function minMaxTaskbar() {
	if(document.getElementById("lyTaskbar").style.visibility=="visible"){
		document.getElementById("lyTaskbar").style.visibility="hidden";
		hideMenu();
		document.getElementById("ClockContainer").style.visibility="hidden";
		document.getElementById("taskbarMinMaxImg").style.backgroundImage="url(../theme"+strThemeDir+"/images/icons/back-arrow.gif)" ;
	}else{
		document.getElementById("lyTaskbar").style.visibility="visible";
		document.getElementById("taskbarMinMaxImg").style.backgroundImage="url(../theme"+strThemeDir+"/images/icons/sub-menu-arrow.gif)";
		document.getElementById("ClockContainer").style.visibility="visible";
	}
}

function callSound(strPath){
	iSound.location.href="../theme"+strThemeDir+strPath;
}

function theClock() {
	var theDate = new Date;
	strHours = theDate.getHours();
	strMins = theDate.getMinutes();
	if(strHours<10){strHours="0"+strHours;}
	if(strMins<10){strMins="0"+strMins;}
	document.getElementById('tP').innerHTML=strHours+":"+strMins;
}

function autoClock(){
	setTimeout('theClock();',30000);
}

function msgBox(strMsg,strTitle,intError){
	document.getElementById('msgDlgTitle').innerHTML=strTitle;
	document.getElementById('msgDlgMsg').innerHTML=strMsg;
	document.getElementById("msgDlg").style.top=136-(document.getElementById("msgDlg").offsetHeight/2);
	showHideLayer('msgDlg','visible');
	if(intError==1){
		callSound("/sounds/error.swf");
	}else callSound("/sounds/blip.swf");
}

callSound("/sounds/start.swf");

// load the clock
returnLoadStatus("Loading clock...");

theClock();
//if(!(top.document.icookies.document.getElementById('noAutoTime').value=="true")){
	autoClock();
//}

function hideBoot(){
	
	for(var i = 1;i<7;i++){
		showHideLayer("lyLoadIcon"+i,'hidden');
	}

	showHideLayer("lyBoot",'hidden');	//get rid of the boot screen, all the functions have now loaded	
}

setTimeout("hideBoot();",8000);

setTimeout("msgBox('This is a Beta! That means it is very buggy. Thank you for trying it out! Click OK to continue.','Encore Beta',1)",15000);