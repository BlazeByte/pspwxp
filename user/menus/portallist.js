//Portals List - Do not delete any lines beginning with //
//These portals appear on the Portals list on the Login screen and in the apps menu
//to add a portal to the list: on a new line in the list section, add Portal("Portal name","Portal URL");
//for more detailed instructions, visit http://pspwxp.co.nr/

var portalName = new Array;
var portalURL = new Array;
var intPortal = 0;

function Portal(strPortalName,strPortalURL){
	portalName[intPortal]=strPortalName;
	portalURL[intPortal]=strPortalURL;
	intPortal++;
}

//BEGIN LIST
Portal("Browse...","../apps/runsearch.htm");
Portal("Portal A","file:/portala.htm");
Portal("Portal B","file:/portalb.htm");
Portal("Portal C","file:/portalc.htm");
Portal("Portal D","file:/portald.htm");
Portal("Portal E","file:/portale.htm");
Portal("Portal F","file:/portalf.htm");
//END LIST

for (i=0;i<portalName.length;i++){
	document.write("<option value="+portalURL[i]+">"+portalName[i]+"</option>");
}