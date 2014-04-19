function showHideLayer(layerName,showHide){
	// frames[layerName].style.visibility=showHide;
	document.getElementById(layerName).style.visibility=showHide;
}

function ApplyLoadSettings(){

	// Apply Desktop Backgorund
	// ========================

	returnLoadStatus("Applying GUI settings...",2);
	
	var blnBGImage;
	var strBGImage;
	var intFirstUse;
	
	document.write('<script language="javascript" type="text/javascript" src="../theme' + strThemeDir + '/themeinfo.js" /></'+'script>');
	
	if (parent==self) { // if desktop doesn't have parent cookies (ie. on computer), load defaults
		blnShortcuts=true;
		blnLogin=true;
		strPassword="";
		return;
	}
	
	blnBGImage = window.top.icookies.document.getElementById('chkbg').value;	// Retrieve cookies
	strBGImage = window.top.icookies.document.getElementById('bg').value;
	intFirstUse = window.top.icookies.document.getElementById('firstuse').value;
	blnShortcuts = window.top.icookies.document.getElementById('desktopicons').value;
	blnLogin = window.top.icookies.document.getElementById('loginshow').value;
	strPassword = window.top.icookies.document.getElementById('thepassword').value;
	
	if (blnBGImage=='false'){
		document.getElementById('lyDesktop').style.visibility="hidden";	// no bg
	} else if(strBGImage!=="") {
	//	alert("file:"+strBGImage);
		document.getElementById('lyDesktop').style.backgroundImage="url(file:"+strBGImage+")";		// set bg to what the user selected
	}
	
	if (blnShortcuts!="0") blnShortcuts = true;
	
	if (blnLogin!="0") blnLogin = true;
	
	if (intFirstUse!="0") blnFirstUse = true;

	if (window.top.icookies.document.getElementById('chkPlaySounds').value=="0") intSound=0;
	
}

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
			
			document.write("<div onclick="+strClickCommand+" style='left:" + intX + "px;top:" + (parseInt(intY) + 10) + "px;background-image:url(../theme"+strThemeDir+"/" + strItemIconPath[i] + ")' class='shortcutItem'><div class='shortcutTextShadow'>"+strItems[i]+"</div><div class='shortcutText'>"+strItems[i]+"</div></div>");

			i++;

		}
	}
	
	// delete previous sub menu arrays, or the menu will display items from it
	strItemPath.splice(0,strItemPath.length);
	strItems.splice(0,strItems.length);
	strItemIconPath.splice(0,strItemIconPath.length);
	intItemMax.splice(0,intItemMax.length);

}

function callSound(strPath){
	if(intSound==1) iSound.location.href="../theme"+strThemeDir+strPath;
}


function makeWindows(){
	for(var i=1;i<=intMaxWindows;i++){
		document.write('<iframe src="blank.htm" id="iWindow'+i+'" name="iWindow'+i+'" frameborder="0" class="iWindow"></iframe>');
	}
}