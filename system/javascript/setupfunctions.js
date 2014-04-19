var intCurrent=0;

var screens = new Array("intro","terms","user","security","sound","finish");
var intScreen=screens.length;

function nav(intNav){
	document.getElementById(screens[intCurrent]).style.visibility="hidden";
	intCurrent=intCurrent+intNav;
	document.getElementById(screens[intCurrent]).style.visibility="visible";
	document.getElementById("next").disabled = (intCurrent == intScreen-1) ? true : false;
	document.getElementById("fin").disabled = (intCurrent == intScreen-1) ? false : true;
	document.getElementById("prev").disabled = (intCurrent == 0) ? true : false;
	
	switch(intCurrent){
		case 1:
			document.getElementById("next").disabled = (document.getElementById("chkLicense").checked==false) ? true : false;
			break;
			
		case 2:
			document.getElementById("next").disabled = ((document.getElementById("username").text.length<2)||(document.getElementById("username").text=="Click here to set.")) ? true : false;
			break;
		
		case 3:
			checkPass();
			break;
		case 4:
			if(document.getElementById("passwordtrue").checked) if(!confirmPass()) nav(-1);
			break;
			
	}
}

function exit(){
	if(confirm("Are you sure you wish to exit? Setup will begin again next time you start Encore.")) location="blank.htm";
}

function checkPass(){
	if(document.getElementById("passwordtrue").checked) {
		document.getElementById("next").disabled = (document.getElementById("txtPassword1").text.length<2) ? true : false;
	}else document.getElementById("next").disabled = false;
}

function confirmPass(){
	if(document.getElementById("txtPassword1").text!==document.getElementById("txtPassword2").text){
		alert("The Passwords do not match.");
		return false;
	}else{
		if ((document.getElementById("txtPassword1").text=="Click here to set.")||(document.getElementById("txtPassword1").text=="")) {
			alert("Please enter a password or select 'No'.");
			return false
		} else return true;
	}
}

function doFinish(){
	writeSettings();
	setTimeout("window.top.location='../index.htm'",500);
}

function licenseAgree(agree){
	document.getElementById("next").disabled = (agree == true) ? false : true ;
}

function bbMember(member) {
	document.getElementById("bbusername").disabled = (member == true) ? false : true;
	document.getElementById("bbpassword").disabled = (member == true) ? false : true;
}

function writeSettings(){
	top.showLoadingScreen("Encore is preparing for boot.","Please wait");
	
	saveSetting("main","beta","true");
	saveSetting("main","username",document.getElementById("username").text);
	saveSetting("main","blazebyteuser",document.getElementById("bbpassword").text);
	saveSetting("main","blazebytepass",document.getElementById("bbpassword").text);
	saveSetting("main","«password",(document.getElementById("passwordtrue").checked)?document.getElementById("txtPassword1").text:"");
	saveSetting("main","sounds",document.getElementById("soundstrue").checked);
	saveSetting("main","theme","default");
	saveSetting("main","bgimage","default");
	saveSetting("main","bgcolor","#000000");
	saveSetting("main","usebgimage","true");
	saveSetting("main","desktopicons","true");
	saveSetting("main","usescreensaver","true");
	saveSetting("main","screensaver","default");
	saveSetting("main","screensavertimeout","120");
	saveSetting("main","screensaverlogout","true");
	saveSetting("main","loginscreen",(document.getElementById("txtPassword1").text == "") ? "false" : "true");
	saveSetting("main","memorysafe","true");
	saveSetting("main","autoclock","true");
	
	// make menu items
	saveMenu("Games","MenuGames","/icons/mainmenu/games.png");
	saveMenuItem("Games","Game 1", "../apps/games/games.htm","images/icons/menu/games/8queens.png",1);
	saveMenuItem("Games","Game 2","../apps/games/games.htm","images/icons/menu/games/8queens.png",1);
	saveMenuItem("Games","Game 3","../apps/games/games.htm","images/icons/menu/games/8queens.png",1);
	saveMenuItem("Games","Game 4","../apps/games/games.htm","images/icons/menu/games/8queens.png",1);
	saveMenuItem("Games","Game 5","../apps/games/games.htm","images/icons/menu/games/8queens.png",1);
	saveMenuItem("Games","Game 6","../apps/games/games.htm","images/icons/menu/games/8queens.png",1);
	
	saveMenu("Graphics","MenuGraphics","/icons/mainmenu/graphics.png");
	saveMenuItem("Graphics","Image Viewer and Organiser","../apps/graphics/imageviewer/index.htm","images/icons/menu/apps/imageviewer.png",0);
	saveMenuItem("Graphics","Painter","../apps/graphics/paint.swf","images/icons/menu/apps/painter.png",0);
	saveMenuItem("Graphics","PDF Viewer","../apps/graphics/pspdf/index.html","images/icons/menu/apps/pdf.png",0);

	saveMenu("Internet","MenuInternet","/icons/mainmenu/internet.png");
	saveMenuItem("Internet","Instant Messenger","../apps/internet/messenger.htm","images/icons/menu/apps/im.png",0);
	saveMenuItem("Internet","Mozilla Firefox","../apps/internet/firefox/index.htm","images/icons/menu/apps/firefox.png",0);
	saveMenuItem("Internet","BlazeByte OpenShare","../apps/internet/openshare.htm","images/icons/menu/apps/firefox.png",0);
	saveMenuItem("Internet","RSS Reader","../apps/internet/rssreader.htm","images/icons/menu/apps/rss.png",0);
	
	saveMenu("Multimedia","MenuMultimedia","/icons/mainmenu/multimedia.png");
	saveMenuItem("Multimedia","Jukebox","../apps/psptunes/index.htm","images/icons/menu/apps/jukebox.png",0);
	saveMenuItem("Multimedia","Phone Dialer","../apps/psphone.htm","images/icons/menu/apps/jukebox.png",0);
	saveMenuItem("Multimedia","Video Player","../apps/psphone.htm","images/icons/menu/apps/videoplayer.png",0);
	
	saveMenu("Office","MenuOffice","/icons/mainmenu/office.png");
	saveMenuItem("Office","Slideshow","../apps/texteditor/textedit.htm","images/icons/menu/apps/slideshow.png",0);
	saveMenuItem("Office","Spreadsheet","../apps/texteditor/textedit.htm","images/icons/menu/apps/spreadsheet.png",0);
	saveMenuItem("Office","Writer","../apps/office/writer/index.htm","images/icons/menu/apps/writer.png",0);
	
	saveMenu("System","MenuSystem","/icons/mainmenu/system.png");
	saveMenuItem("System","About Encore","../apps/about.htm","images/icons/menu/apps/aboutencore.png",0);
	saveMenuItem("System","About Theme","../apps/about.htm","images/icons/menu/apps/abouttheme.png",0);
	saveMenuItem("System","Console","../apps/controlpanel/system.htm","images/icons/menu/apps/console.png",0);
	saveMenuItem("System","PSP Browser Information","../apps/browserinfo.htm","images/icons/menu/apps/aboutpsp.png",0);
	saveMenuItem("System","PSP Pixel Repair","../apps/controlpanel/fixpix.htm","images/icons/menu/apps/aboutpsp.png",0);
	saveMenuItem("System","Update","../apps/system/update.html","images/icons/menu/apps/update.png",0);
	saveMenuItem("System","Setting Editor","../apps/system/settings.html","images/icons/menu/apps/update.png",0);
	saveMenuItem("System","File Explorer","../apps/system/files.html","images/icons/menu/apps/update.png",0);
	saveMenuItem("System","SETTINGS: Theme","../apps/system/theme.html","images/icons/menu/apps/update.png",0);
	saveMenuItem("System","SETTINGS: Desktop","../apps/settings/desktop.html","images/icons/menu/apps/update.png",0);
	saveMenuItem("System","SETTINGS: Sound","../apps/system/theme.html","images/icons/menu/apps/update.png",0);
	saveMenuItem("System","SETTINGS: Wi-Fi","../apps/settings/desktop.html","images/icons/menu/apps/update.png",0);
	saveMenuItem("System","SETTINGS: Login","../apps/system/theme.html","images/icons/menu/apps/update.png",0);
	saveMenuItem("System","SETTINGS: Screensaver","../apps/settings/desktop.html","images/icons/menu/apps/update.png",0);
	saveMenuItem("System","SETTINGS: Check for Updates","../apps/system/theme.html","images/icons/menu/apps/update.png",0);
	saveMenuItem("System","SETTINGS: Desktop","../apps/settings/desktop.html","images/icons/menu/apps/update.png",0);
	
	saveMenu("Utilities","MenuUtilities","/icons/mainmenu/utilities.png");
	saveMenuItem("Utilities","Calculator","../apps/calc.htm","images/icons/menu/apps/calc.png",0);
	saveMenuItem("Utilities","Dictionary","../apps/cal.swf","images/icons/menu/apps/dictionary.png",0);
	saveMenuItem("Utilities","Alarm Clock","../apps/clock.html","images/icons/menu/apps/alarm.png",0);
	saveMenuItem("Utilities","Text Editor","../apps/convcalc/index.htm","images/icons/menu/apps/textedit.png",0);
	saveMenuItem("Utilities","File Viewer","../apps/dayorganizer/index.html","images/icons/menu/apps/file_viewer.png",0);
	saveMenuItem("Utilities","Encryption Tool","../apps/cl_dig.swf","images/icons/menu/apps/file_viewer.png",0);
	saveMenuItem("Utilities","Random Number","../apps/distancecalc.htm","images/icons/menu/apps/file_viewer.png",0);
	saveMenuItem("Utilities","Notes","../apps/console.htm","images/icons/menu/apps/notes.png",0);
	saveMenuItem("Utilities","Console","../apps/filebrowse/index.htm","images/icons/menu/apps/console.png",0);
	saveMenuItem("Utilities","Date and Time","../apps/notelist/list.html","images/icons/menu/apps/datetime.png",0);
	saveMenuItem("Utilities","Address Book","../apps/periodictable.htm","images/icons/menu/apps/address.png",0);
	saveMenuItem("Utilities","Stop Watch","../apps/stopwatch.htm","images/icons/menu/apps/stopwatch.png",0);
	saveMenuItem("Utilities","Conversion Calculator","../apps/stopwatch.htm","images/icons/menu/apps/conversion.png",0);
	saveMenuItem("Utilities","Day Planner","../apps/stopwatch.htm","images/icons/menu/apps/day.png",0);
	saveMenuItem("Utilities","Periodic Table","../apps/stopwatch.htm","images/icons/menu/apps/periodictable.png",0);
	saveMenuItem("Utilities","Update","../apps/system/update.html","images/icons/menu/apps/update.png",0);
	
	// make file extensions
	//saveFileExt("Writer", "Document", "../apps/office/writer/index.htm", "images/icons/menu/apps/writer.png", "doc");
	
	storeSettings();
}