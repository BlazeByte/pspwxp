function showHideLayer(layerName,showHide){
	frames[layerName].style.visibility=showHide;
}

function ApplyLoadSettings(){

	// Apply Desktop Backgorund
	// ========================

	returnLoadStatus("Applying GUI settings...",2);

	var blnBGImage = icookies.document.getElementById('chkbg').value;	// Retrieve cookies
	var strBGImage = icookies.document.getElementById('bg').value;

	if(blnBGImage=='true'){

		document.getElementById('lyDesktop').style.backgroundImage=strBGImage;		// set bg to what the user selected

	}else if(blnBGImage=='false'){

		document.getElementById('lyDesktop').style.visibility="hidden";	// no bg

	}

}

function createShortcuts(){
	var intY = 0;
	var intX = 0;
	var intRows = strItems.length-1;
	var intMaxRows = 3;
	var intCols1 = intRows/intMaxRows;
	var intCols = Math.ceil(intCols1);
	var intLastColRows = (intCols1 - Math.floor(intCols1))*intMaxRows;

	var i=1;

	for(var intCol=1;intCol<=intCols;intCol++){
		intX=(intCol-1)*80;

		if((intCol == intCols)&&(intLastColRows>0)){
			intMaxRows = intLastColRows;			// fix last column
		}

		for(var intRow=1 ; intRow<=intMaxRows ; intRow++){
			intY=(intRow-1)*82;
			
			document.write("<div style='left:" + intX + "px;top:" + (parseInt(intY) + 10) + "px;background-image:url(../theme"+strThemeDir+"/" + strItemIconPath[i] + ")' class='shortcutItem'><div class='shortcutTextShadow'>"+strItems[i]+"</div><div class='shortcutText'>"+strItems[i]+"</div></div>");

			i++;

		}
	}

}
