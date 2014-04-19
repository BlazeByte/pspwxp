var intAppletX = "0px";
var strAppletParts;
var strAppletFunction;
var strAppletWidth="10px";

// Make Panel function
function makePanel(PanelID,Applets){
	var strApplet = Applets.split("|");		// Get the Applets for the Panel. strApplet is an Array

	document.write('<div id="'+PanelID+'" onClick="hideMenu();">');		// Make the main menu hidden when panel is clicked
	var strCSS;
	
	for(var i=0;i<strApplet.length;i++){	// for each applet
		strAppletParts=strApplet[i].split("?");		// get properties
		strAppletFunction=strAppletParts[0];		// |- get the function
		
		if(strAppletParts.length>1) {			// if CSS is specified (length will = 2 if CSS is added)
			strCSS=strAppletParts[1];			// get the css
		}else strCSS = "";						// if not, then declare as nothing
		
		eval("make"+strAppletFunction+"Applet('"+PanelID+"','"+strCSS+"')");	// make the applet
	}

	document.write('</div>');  // finish the panel
}


// Applet functions
function makeClockApplet(strPanelID,strCSS){
	document.write('<div id="clock" style="'+strCSS+'">00:00</div>');
}

function makeMenuApplet(strPanelID,strCSS){
	document.write('<img src="../theme/'+strThemeDir+'/images/menu.gif" onClick="showAppMenu('+"'"+strPanelID+"'"+');" id="mainMenuIcon" style="'+strCSS+'">');
}

function makeTaskListApplet(strPanelID,strCSS){
	document.write('<div id="tasklistContainer" style="'+strCSS+'">');

	for(var i = 1;i<=intMaxWindows;i++){
		document.write('<div id="Tab'+i+'" class="Tab" onclick="restoreWindow('+i+');"><img id="imgTabIcon'+i+'" class="imgTabIcon" /><div id="TabTitle'+i+'" class="TabTitle">Tab1</div></div>');
	}

	document.write('</div>');
}

function makeMinMaxApplet(strPanelID,strCSS){
	document.write('<div class="PanelMinMax" onClick="minMaxPanel('+"'"+strPanelID+"'"+');" style="'+strCSS+'"><div id="'+strPanelID+'MinMaxImg" class="PanelMinMaxImg"></div></div>');
}

function makeSoundApplet(strPanelID,strCSS){
	document.write('<img src="../theme/'+strThemeDir+'/images/icons/panel/'+((blnSounds==false) ? "soundoff.png" : strSoundImg="soundon.png" )+'" id="soundApplet" onClick="muteSound()" style="'+strCSS+'">');
}

function makeSpacerApplet(strPanelID,strCSS){
	document.write('<div id="spacerApplet" style="'+strCSS+'"></div>');
}
