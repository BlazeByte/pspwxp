//callSound("/sounds/start.swf");		// call the start up sound so it gets time to load.

returnLoadStatus("Preparing portal functions...",6);

var strHours;	// used for clock
var strMins;	//used for clock
var intJustOpened;	// used to stop the menu from suddenly closing

function showAppMenu(strPanelID){	// called when the application menu (start menu) button is clicked on a panel.
	if(document.getElementById('menu').style.visibility=="hidden"){	// if the menu is hidden

		intJustOpened=1;	// make sure the menu doesn't suddenly close

		if(document.getElementById(strPanelID).offsetTop+document.getElementById('menu').offsetHeight+document.getElementById(strPanelID).offsetHeight>272){	// if it appears off the screen when below the panel

			document.getElementById('menu').style.top=272-(document.getElementById('menu').offsetHeight+document.getElementById(strPanelID).offsetHeight);	// then make it appear above the panel

		}else{	// else
			document.getElementById('menu').style.top=document.getElementById(strPanelID).offsetHeight+document.getElementById(strPanelID).offsetTop;	// then make it appear below the panel
		}

		showHideLayer('menu',"visible");	// show the menu
		minWindow("all");

		setTimeout("blnJustOpened=0;",1000);	// allow menu to be closed after 1 second
	}else{
		hideMenu();		// hide the menu and sub menus
	}
}

function hideMenu(blnKeepMenu){
	if(intJustOpened==0){	// if the menu hasn't just been opened
		for( var i=0 ; i < strMenuID.length ; i++ ) {	// for each sub menu
			showHideLayer('ly' + strMenuID[i] , "hidden");	// hide the sub menu
		}

		if(!(blnKeepMenu == 1)){		// If the user wants the entire menu to be closed, then blnKeepMenu will not be set to 1 (as opposed to just wanting the submenus closed)
			showHideLayer('menu',"hidden");		// hide Main Menu
		}
	}
	intJustOpened=0;	// not neccissary, but further code expansions may require this
}

function minMaxPanel(PanelID) {
	if(!(document.getElementById(PanelID).style.visibility=="hidden")){	// if the panel is visible
		document.getElementById(PanelID).style.visibility="hidden";		// then hide is
		hideMenu();		// and hide the menu
//		document.getElementById("ClockContainer").style.visibility="hidden";
		document.getElementById(PanelID+"MinMaxImg").style.backgroundImage="url(../theme"+strThemeDir+"/images/icons/back-arrow.gif)" ;	// switch the min max icon
	}else{	// else
		document.getElementById(PanelID).style.visibility="visible"; //make the panel visible
		document.getElementById(PanelID+"MinMaxImg").style.backgroundImage="url(../theme"+strThemeDir+"/images/icons/sub-menu-arrow.gif)";	//switch the min max icons
//		document.getElementById("ClockContainer").style.visibility="visible";
	}
}

function theClock() {
	var theDate = new Date;
	strHours = theDate.getHours();
	strMins = theDate.getMinutes();
	if(strHours<10){strHours="0"+strHours;}
	if(strMins<10){strMins="0"+strMins;}
	document.getElementById('clock').innerHTML=strHours+":"+strMins;
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

// load the clock
returnLoadStatus("Loading clock...");

theClock();
//if(!(top.document.icookies.document.getElementById('noAutoTime').value=="true")){
	autoClock();
//}

returnLoadStatus("Preparing more functions...");

function muteSound() {
	if(intSound==0){
		intSound=1;
		document.getElementById("soundApplet").src="../theme"+strThemeDir+"/images/icons/panel/soundon.png";
	}else{
		intSound=0;
		document.getElementById("soundApplet").src="../theme"+strThemeDir+"/images/icons/panel/soundoff.png";
	}
	window.top.icookies.document.settings.chkPlaySounds.value=intSound;
	window.top.icookies.document.settings.submit();
}



function hideBoot(){

	for(var i = 1;i<7;i++){	// for each boot icon
		showHideLayer("lyLoadIcon"+i,'hidden');	// hide the icon
	}

	showHideLayer("lyBoot",'hidden');	//get rid of the boot screen, all the functions have now loaded
}

function getNetComm(){ // connects to blazebyte communication network to give user updates
	frames['iNetComm'].location.href="http://blazebyte.byethost18.com/netcomm.htm";
}

// if(blnFirstUse) setTimeout("msgBox('Welcome to Encore Beta! Encore is a free product released under the BlazeByte License. Click OK to begin!','Encore Beta',1)",10000);
