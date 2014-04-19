var notPSP = (navigator.userAgent.indexOf('PlayStation Portable') != -1) ? false : true;

function ApplyLoadSettings(){

	// Apply Desktop Backgorund
	// ========================

	returnLoadStatus("Applying GUI settings...",2);
	
	document.write('<script language="javascript" type="text/javascript" src="../theme/' + strThemeDir + '/themeinfo.js" /></'+'script>');
	
	var blnBGImage = getSetting('main','usebgimage',true);	// Retrieve cookies
	var strBGImage = getSetting('main','bgimage','default');
	blnShortcuts = getSetting('main','desktopicons',true);
	blnLogin = getSetting('main','loginscreen',false);
	strPassword = getSetting('main','password','');
	
	
	if (blnBGImage==false){
		element('lyDesktop').style.visibility="hidden";	// no bg
	} else if((strBGImage!=="")&&(strBGImage!=='default')) {
		element('lyDesktop').style.backgroundImage="url("+((strBGImage.charAt(4)==":")?"":"file:")+strBGImage+")";		// set bg to what the user selected
	}
	
	// load sounds
	top.frames['isound'].document.open();
	top.frames['isound'].document.write('<embed name="beep" id="beep" FlashVars="strURL=file:/encore/theme/default/sounds/beep.mp3" src="system/sound.swf" quality="high"></embed><embed name="error" id="error" FlashVars="strURL=file:/encore/theme/default/sounds/beep.mp3" src="system/sound.swf" quality="high"></embed><embed name="startup" id="startup" FlashVars="strURL=file:/encore/theme/default/sounds/beep.mp3" src="system/sound.swf" quality="high"></embed>');
	top.frames['isound'].document.close();
}

/*
function createShortcuts(){
	var intY = 0;
	var intX = 0;
	var intRows = strItems.length-1;
	var intMaxRows = 3;
	var intCols1 = intRows/intMaxRows;
	var intCols = Math.ceil(intCols1);
	var intLastColRows = Math.ceil((intCols1 - Math.floor(intCols1))*intMaxRows);

	var i=1;

	for(var intCol=1;intCol<=intCols;intCol++){
		intX=(intCol-1)*80;

		if((intCol == intCols)&&(intLastColRows>0)){
			intMaxRows = intLastColRows;			// fix last column
		}

		for(var intRow=1 ; intRow<=intMaxRows ; intRow++){
			intY=(intRow-1)*82;
			
			strClickCommand='loadApp("' + strItems[i] + '","' + strItemPath[i] + '","' + strItemIconPath[i] + '",' + '"' + intItemMax[i] + '"' + ');';		// create the onclick command

			document.write("<div onclick="+strClickCommand+" style='left:" + intX + "px;top:" + (parseInt(intY) + 10) + "px;background-image:url(../theme/"+strThemeDir+"/" + strItemIconPath[i] + ")' class='shortcutItem'><div class='shortcutTextShadow'>"+strItems[i]+"</div><div class='shortcutText'>"+strItems[i]+"</div></div>");

			i++;

		}
	}
	
	// delete previous sub menu arrays, or the menu will display items from it
	strItemPath.splice(0,strItemPath.length);
	strItems.splice(0,strItems.length);
	strItemIconPath.splice(0,strItemIconPath.length);
	intItemMax.splice(0,intItemMax.length);

}
*/

function makeWindows(){
	for(var intWin=1;intWin<=intMaxWindows;intWin++){
		document.write('<iframe src="blank.htm" id="iWindow'+intWin+'" name="iWindow'+intWin+'" frameborder="0" width="476" height="226" style="position:absolute;width:476px;height:226px;visibility:hidden;"></iframe>');
	}
}