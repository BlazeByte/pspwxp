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
		if(element('Tab'+i).style.visibility!="visible"){
			intCurrWindow = i;
			break;
		}
	}

	if(intCurrWindow==0){															// If all the windows are in use
		alert("All windows are open");												//TODO: make a window overwrite dialog
		return;
	}
	
	try {
		frames["iWindow"+intCurrWindow].location.href=strAppURL;							// Set the iFrame URL
		strWindowSrc[intCurrWindow]=strAppURL;										// Set the Window URL string for future use
	}
	
	catch(e) {
		msgBox ("An error occured in loading the application. File " + strAppURL + " does not exist.", "Error", 1);
		return;
	}

	showHideLayer('WindowContainer','visible');
	intWindowOpen[intCurrWindow] = 1;
	strWindowTitle[intCurrWindow] = strAppTitle;									// set title to variable {for switching between windows)
	imgWindowIcon[intCurrWindow].src = "../theme/"+strThemeDir+"/"+strAppIcon;		// set icon to image object (image is cached to increase speed when switching windows)

	showWindowDetails(intCurrWindow);												// show icon and title in Window Container

	minWindow("all",0);																// minimize all windows

	element('Tab'+intCurrWindow).style.left=(intWindowCount*100)+"px";

	showHideLayer("Tab"+intCurrWindow,"visible");									// show tab
	element("TabTitle"+intCurrWindow).innerHTML=strAppTitle.slice(0,9)+"...";
	element("imgTabIcon"+intCurrWindow).src="../theme/"+strThemeDir+"/"+strAppIcon;
	
	element('iWindow'+intCurrWindow).style.visibility='visible';	// show iframe
		
	intWindowCount++;

}



function minWindow(intWindow,intContainer){
	if(intWindow=="all"){
		if (intContainer !== 0) showHideLayer('WindowContainer','hidden');
		
		for(var i=1;i<=intMaxWindows;i++){
			element('iWindow'+i).style.visibility='hidden';
			if (intContainer !== 0) intWindowOpen[i] = 0;
		}
		
	}else{
		showHideLayer('iWindow'+intWindow,'hidden');
		intWindowOpen[intWindow] = 0;
		closeWindowContainer(intWindow);	
	}
}



function maxWindow(intWindow){
	window.open(strWindowSrc[intWindow]);
}


function killApp(intWindow) {
	if(!intWindow) var intWindow = intCurrWindow;
	
	closeWindowContainer(intWindow);		
	
	element('iWindow'+intWindow).style.visibility='hidden';
	element("iWindow"+intWindow).location="blank.htm";
	element('Tab'+intWindow).style.visibility="hidden";
	
	intWindowOpen[intWindow] = 0;
	
	intWindowCount--;	
	
	for(var i=1;i<=intMaxWindows;i++){
		var intLeft = element("Tab"+i).style.left;
		var intX = intLeft.slice(0,intLeft.length-2);
		if(element("Tab"+intWindow).style.left.slice(0,element("Tab"+intWindow).style.left.length-2)>intX) element("Tab"+i).style.left=(intX-100)+"px";
	}
	
	frames['iWindow'+intWindow].location = "blank.htm";
}


function closeWindow(intWindow){
	if(!frames['iWindow'+intWindow].unload) {
		killApp(intWindow);
	}else frames['iWindow'+intWindow].unload();
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
	element('iWindow'+intWindow).style.visibility='visible';	// show the iframe

	intCurrWindow = intWindow;
	intWindowOpen[intWindow] = 1;								// Set this window to open
}



function showWindowDetails(intWindow){
	element("WindowTitle").innerHTML = strWindowTitle[intWindow];
	element("imgWindowIcon").src = imgWindowIcon[intWindow].src;
}

function setAppProperties() { 
	var strWrite;
	
	strWrite = '<link href="'+top.encoreUrl+'theme/'+strThemeDir+'/css/app.css" rel="stylesheet" type="text/css">';
	strWrite += '<link href="'+top.encoreUrl+'theme/'+strThemeDir+'/css/encore/textbox.css" rel="stylesheet" type="text/css">';
	
	strWrite += '<script src="'+top.encoreUrl+'system/javascript/inputfunctions.js"><'+'/script>';
	
	return "document.write('"+strWrite+"');";
	
}