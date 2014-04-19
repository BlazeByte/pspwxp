var intCurrWindow = 0;				// Used to store the number of the Window currently open
var intWindowOpen = new Array;		// Array for each window. 1 if the window is open, 0 if not.
var strWindowSrc = new Array;

var strWindowTitle = new Array;
var imgWindowIcon = new Array;

for (var i = 0 ; i <= intMaxWindows ; i++) {
	intWindowOpen[i]=0;
	strWindowTitle[i] = "";
	imgWindowIcon[i] = new Image;
}

returnLoadStatus("Preparing application framework...",3);


// ------------------------- Begin Functions ------------------------------ \\


function loadApp(strAppTitle,strAppURL,strAppIcon,strAppMax){

	hideMenu();																		// hide the main menu and all sub menus

	//find an open slot and set it as intCurrWindow
	intCurrWindow=0;
	for (var i = 1;i<=intMaxWindows;i++){
		if(document.getElementById('Tab'+i).style.visibility!="visible"){
			intCurrWindow = i;
			break;
		}
	}

	if(intCurrWindow==0){															// If all the windows are in use
		alert("All windows are open");												//TODO: make a window overwrite dialog
		return;
	}
	
	try {
		frames["iWindow"+intCurrWindow].location=strAppURL;							// Set the iFrame URL
		strWindowSrc[intCurrWindow]=strAppURL;										// Set the Window URL string for future use
	}
	
	catch(e) {
		msgBox ("An error occured in loading the application. File " + strAppURL + " does not exist.", "Error", 1);
		return;
	}

	showHideLayer('WindowContainer','visible');
	intWindowOpen[intCurrWindow] = 1;
	strWindowTitle[intCurrWindow] = strAppTitle;									// set title to variable {for switching between windows)
	imgWindowIcon[intCurrWindow].src = "../theme"+strThemeDir+"/"+strAppIcon;		// set icon to image object (image is cached to increase speed when switching windows)

	showWindowDetails(intCurrWindow);												// show icon and title in Window Container

	minWindow("all",0);																// minimize all windows

	document.getElementById('Tab'+intCurrWindow).style.left=(intWindowCount*100)+"px";

	showHideLayer("Tab"+intCurrWindow,"visible");									// show tab
	document.getElementById("TabTitle"+intCurrWindow).innerHTML=strAppTitle.slice(0,9)+"...";
	document.getElementById("imgTabIcon"+intCurrWindow).src="../theme"+strThemeDir+"/"+strAppIcon;

	document.getElementById('Tab'+intCurrWindow).className="TabDown";
	
	document.getElementById('iWindow'+intCurrWindow).style.visibility='visible';	// show iframe
	document.getElementById('iWindow'+intCurrWindow).style.display='inline';		// structure iframe
	
	intWindowCount++;

}



function minWindow(intWindow,intContainer){
	if(intWindow=="all"){
		if (intContainer !== 0) showHideLayer('WindowContainer','hidden');
		
		for(var i=1;i<=intMaxWindows;i++){
			document.getElementById('iWindow'+i).style.visibility='hidden';
			document.getElementById('Tab'+i).className="Tab";		//TODO: find alternetive - class cannot be changed on psp
			if (intContainer !== 0) intWindowOpen[i] = 0;
		}
		
	}else{
		showHideLayer('iWindow'+intWindow,'hidden');
		intWindowOpen[intWindow] = 0;
		closeWindowContainer(intWindow);
		document.getElementById('Tab'+intWindow).className="Tab";	
	}
}



function maxWindow(intWindow){
	window.open(strWindowSrc[intWindow]);
}



function closeWindow(intWindow){
	closeWindowContainer(intWindow);		
	
	document.getElementById('iWindow'+intWindow).style.visibility='hidden';
	document.getElementById("iWindow"+intWindow).location="blank.htm";
	document.getElementById('Tab'+intWindow).style.visibility="hidden";
	document.getElementById('Tab'+intWindow).className="Tab";
	
	intWindowOpen[intWindow] = 0;
	
	intWindowCount--;	
	
	for(var i=1;i<=intMaxWindows;i++){
		var intLeft = document.getElementById("Tab"+i).style.left;
		var intX = intLeft.slice(0,intLeft.length-2);
		if(document.getElementById("Tab"+intWindow).style.left.slice(0,document.getElementById("Tab"+intWindow).style.left.length-2)>intX) document.getElementById("Tab"+i).style.left=(intX-100)+"px";
	}
}



function closeWindowContainer(intWindow){
	for (var i = 1 ; i <= intMaxWindows ; i++ ) {
		if ( (intWindowOpen[i] == 1) && (i !== intWindow) ){ 	// check if any other windows are open
			
			restoreWindow(i);												// Show the target window details (title + icon)
			
			return;
		}
	}
	
	showHideLayer('WindowContainer','hidden');
}



function restoreWindow(intWindow){
	minWindow("all",0);												// Minimise all the windows except the container
	showHideLayer('WindowContainer','visible');
	showWindowDetails(intWindow);									// Show the target window details (title + icon)
	document.getElementById('iWindow'+intWindow).style.visibility='visible';	// show the iframe
	document.getElementById('Tab'+intWindow).className="TabDown";				// change the tab appearence
	intCurrWindow = intWindow;
	intWindowOpen[intWindow] = 1;								// Set this window to open
}



function showWindowDetails(intWindow){
	document.getElementById("WindowTitle").innerHTML = strWindowTitle[intWindow];
	document.getElementById("imgWindowIcon").src = imgWindowIcon[intWindow].src;
}

function getTheme() { //applications will use this to set the bgcolor to the theme bgcolor.  to use in app, put onload="parent.getTheme();" in body tag.
	var strWrite;
	
	
	
	strWrite = '<link href="../theme'+strThemeDir+'/css/app.css" rel="stylesheet" type="text/css">';
	
	return strWrite;
}