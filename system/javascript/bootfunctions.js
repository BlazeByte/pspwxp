function element(strID){
	return document.getElementById(strID);
}

function showHideLayer(layerName,showHide){
	element(layerName).style.visibility=showHide;
}


function returnLoadStatus(strText,intBootStage){
	element("loadingStatus").innerHTML=strText;		// set the dynamic loading info div
	if(intBootStage>0) showHideLayer("lyLoadIcon"+intBootStage,'visible');	// make the icon visible (if set)
}