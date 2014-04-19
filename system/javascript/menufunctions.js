var intMaxRows = 12;	// the maximum amount of rows that can fit into a submenu
var intHeight = 0;		// the Height for the menu layers
var intRowHeight = 19;	// define the height of thw menu item rows

var intMainMenuItemCount = 0;
var strClass;

var strMenu = new Array;
var strMenuID = new Array;
var strMenuIconURL = new Array;

var strItem = new Array;
var strItemMenu = new Array;
var strItemURL = new Array;
var strItemIconURL = new Array;
var intItemMax = new Array;



function createMenus(){
	returnLoadStatus("Initiating menu lists...",4);
	
	getMenus();			// Get the list of menus
	makeMainMenu();		// Make the main menu
	
	getMenuItems()
	makeMenus()
}




function getMenus() {  // Get menus from settings
	var strSettings;
	
	if (parent!==self){
		if (notPSP){
			var cookiedata = unescape(window.document.cookie);
			var cookiecontents = cookiedata.split("=");
			if(cookiecontents[0] == "cookiedata") {
				strSettings = cookiecontents[1].split("»");
			}else strSettings = "";
		}else
			strSettings = window.top.isettings.document.getElementById("settingList").value.split("»");	// Split up the settings
	}
	
	for ( var i = 0 ; i < strSettings.length ; i++ ) {
		var strApps = strSettings[i].split("¿");
		if(strApps[0]=='mainmenu'){
			var strSettingParts = strApps[1].split("º");
			var strMenuParts = strSettingParts[1].split("^");
			
			strMenuID[strMenu.length] = strMenuParts[0];
			strMenuIconURL[strMenu.length] = strMenuParts[1];
			strMenu[strMenu.length] = strSettingParts[0];
		}
	}		
}




function getMenuItems() {  // Get menus from settings
	var strSettings;
	
	if (parent!==self){
		if (notPSP){
			var cookiedata = unescape(window.document.cookie);
			var cookiecontents = cookiedata.split("=");
			if(cookiecontents[0] == "cookiedata") {
				strSettings = cookiecontents[1].split("»");
			}else strSettings = "";
		}else
			strSettings = window.top.isettings.document.getElementById("settingList").value.split("»");	// Split up the settings
	}
	
	for ( var i = 0 ; i < strSettings.length ; i++ ) {
		var strApps = strSettings[i].split("¿");
		if(strApps[0]=='mainmenuitems'){
			var strSettingParts = strApps[1].split("º");
			var strMenuParts = strSettingParts[1].split("^");
			
			strItemMenu[strItem.length] = strMenuParts[0];
			strItemURL[strItem.length] =  strMenuParts[1];
			strItemIconURL[strItem.length] =  strMenuParts[2];
			intItemMax[strItem.length] =  strMenuParts[3];
			strItem[strItem.length] = strSettingParts[0];
		}
	}		
}




function makeMainMenu(){ // Make the main 'start' menu
	returnLoadStatus("Creating main menu...");

	var strClickCommand ;
	var strID;

	document.write("<table cellpadding='0' cellspacing='0' class='mainMenuCols'><tr><td class='mainMenuRibbon'></td><td>");

	makeMainMenuHeader("All Applications");

	for( var i = 0 ; i < strMenu.length ; i++ ){	// create each sub menu item
		strID = "lyMM"+strMenuID[i];
		strClickCommand = "hideMenu(1);alignSubMenu("+i+");showHideLayer(" + '"ly' + strMenuID[i] + '"' +","+'"visible"' +");";	// make the onclick command
		makeMainMenuItem(strMenu[i],'../theme/'+strThemeDir+strMenuIconURL[i],strID,strClickCommand,1);
	}

	makeMainMenuHeader("Actions");
	makeMainMenuItem('Settings','../theme/'+strThemeDir+'/images/icons/mainmenu/settings.png','lyMMSettings','msgBox("The Settings are still in development","Settings");');
	makeMainMenuItem('Run Command...','../theme/'+strThemeDir+'/images/icons/mainmenu/run.png','lyMMRun','msgBox("The Run command is still in development","Run Command");');
	makeMainMenuItem('Log Out...','../theme/'+strThemeDir+'/images/icons/mainmenu/logout.png','lyMMLogout','showHideLogin("visible");');
	document.write("</tr></table>");
	element('menu').style.height=(intMainMenuItemCount*20);

}



function makeMenus(){
	var intMenuItemCount = new Array;
	
	// count how many items there are in each menu
	for( var i = 0 ; i < strMenu.length ; i++ ){
		for( var i2 = 0 ; i2 < strItem.length ; i2++ ){
			if ( strItemMenu[i2] == strMenu[i] ) {
				intMenuItemCount[i]++
			}
		}
	}
	
				
	for( var i = 0 ; i < strMenu.length ; i++ ){
		startMenu(strMenu[i],strMenuID[i])
		
		var intSubMenuItem = 0;
		
		
		for( var i2 = 0 ; i2 < strItem.length ; i2++ ){
			if ( strItemMenu[i2] == strMenu[i] ) {
				
				intSubMenuItem ++;
				
				if ((intSubMenuItem!=0)&&(intSubMenuItem!=intMenuItemCount[i])&&( intSubMenuItem % intMaxRows ==0 )) {
					document.write("</table></td><td valign='top'><table>");
				}
				
				writeMenuItem(strItem[i2], strItemURL[i2], strItemIconURL[i2], intItemMax[i2]);
			}

		}
		finishMenu()
	}
}



function startMenu(strTitle,strID){
	returnLoadStatus("Creating "+ strTitle + " menu...",5);
	document.write('<div id="ly' + strID + '" class="subMenu"><table class="subMenuCol" cellpadding="0" cellspacing="0"><tr><td><table>');	// create the layer for the menu with the ID supplied. Add ly at the beginning to give the layer a sensible name (ie, lyGamesMenu instead of just GamesMenu. This also creates the table which will contain the items.
}



function writeMenuItem(strItem, strItemPath, strItemIconPath, intItemMax ) {
	strClickCommand='loadApp("' + strItem + '","' + strItemPath + '","' + strItemIconPath + '",' + '"' + intItemMax + '"' + ');';		// create the onclick command
	document.write("<tr><td><a onclick='" + strClickCommand + "' href='javascript:;' class='mainMenuRow'><img src='../theme/"+strThemeDir+"/" + strItemIconPath + "' class='mainMenuIcon'>" + strItem + "</a></td></tr>");		// create the item for that row
}



function finishMenu(){
	document.write("</table></td></tr></table></div>");	// finish the table
}



function makeMainMenuItem(strMenuTitle,strMenuIcon,strID,strCmd,blnSubMenu){
	var strHTML = "<a class='mainMenuRow' href='javascript:;' onclick='"+strCmd+"' id='"+strID+"'><img src='"+strMenuIcon+"' class='mainMenuIcon'>"+strMenuTitle;

	if(blnSubMenu==1) strHTML += "<div class='mainMenuExpand'></div>";	// if it's a submenu then put an arrow at the end

	strHTML+="</a>";		// make the item so the onclick opens the correct submenu
	document.write(strHTML);

	intMainMenuItemCount++;
}





function makeMainMenuHeader(strHeader){
	document.write("<div class='MainMenuHeader'>"+strHeader+"</div>");

	intMainMenuItemCount++;
}





function setSubMenusX(){
	for(var i = 0;i<strMenu.length;i++){	// for each sub menu item
		var objLyMenu = 'element("ly' + strMenuID[i] + '")';	// set the submenu layer ID, ready for use
		var intX = element('menu').offsetLeft + element('menu').offsetWidth;	// define the left value for the submenu

		eval(objLyMenu + ".style.left=intX;");	//set left property for each sub menu. This must come now, where the main menu layer has already been loaded.
		alignSubMenu(i);	// align Y
	}
	
	// get main menu out of way
	element('menu').style.top="0px";	// then make it appear above the panel
	
}



function alignSubMenu(intSubMenu){
	var intSubMenuY = 0;

	intSubMenuY = element("lyMM"+strMenuID[intSubMenu]).offsetTop+element("menu").offsetTop;
	if(intSubMenuY+element("ly"+strMenuID[intSubMenu]).offsetHeight>272){
		element("ly"+strMenuID[intSubMenu]).style.top=(272-element("ly"+strMenuID[intSubMenu]).offsetHeight)+"px";
	}else{
		element("ly"+strMenuID[intSubMenu]).style.top=intSubMenuY;
	}
}

