var intMaxRows = 12;	// the maximum amount of rows that can fit into a submenu
var intHeight = 0;		// the Height for the menu layers
var intRowHeight = 19;	// define the height of thw menu item rows
var strMenu = new Array;
var strMenuID = new Array;
var strIconURL = new Array;
var strItems = new Array;
var strItemPath = new Array;
var strItemIconPath = new Array;
var intItemMax = new Array;
var intMainMenuItemCount = 0;
var strClass;

function initiateMenu(strListURL){

	returnLoadStatus("Initiating menu lists...",4);

	// First, load the list for the menu:
	document.write("<script language='javascript' type='text/javascript' src='../user/menus" + strListURL + "'></script>");	// load the list script for the menu

	// The menu list will than define all the items and call the MenuItem function for each
	// then call the createMenu function, with it's desired Title and ID
}



function MenuItem(itemName,itemPath,itemIconPath,itemMax){   // Function for adding games. This is used by /user/games.js to make a list of the games.
	intItem++;	// keep a count of the menu items
	
	// arrays for each item
	strItems[intItem]=itemName;
	strItemPath[intItem]=itemPath;
	strItemIconPath[intItem]=itemIconPath;
	intItemMax[intItem]=itemMax;
}



function createMenu(strTitle,strID,strIcon){

	returnLoadStatus("Creating "+ strTitle + " menu...",5);

	// Draw the table with items
	var intRows = strItems.length-1;		// The amount of items in the submenu
	var intCols1 = intRows/intMaxRows;		// work out how many columns will be required
	var intCols = Math.ceil(intCols1);		// round this value up (eg, there cannot be 3.2 cols, so it is rounded to 4)
	var intLastColRows = Math.ceil((intCols1 - Math.floor(intCols1))*intMaxRows);		// work out the amount of rows in the final column
	var strClickCommand = "";		// define the variable that will store the command used by the item
	var i = 1;		// i is used within the for loop

	intItem = 0;	//reset the Item counter

	strMenu[strMenu.length]=strTitle;		// store the menu title in memory as the strMenu array (strMenu.length makes it a new array)
	strMenuID[strMenuID.length]=strID;		// as above except with the menu ID... add ly at the beginning of the string for the layer etc
	
	strIconURL[strIconURL.length]="../theme"+strThemeDir+"/images"+strIcon;		// as above except with the icons url. it also adds ../images for easier reference at later use.

	document.write('<div id="ly' + strID + '" class="subMenu"><table class="subMenuCol"><tr>');	// create the layer for the menu with the ID supplied. Add ly at the beginning to give the layer a sensible name (ie, lyGamesMenu instead of just GamesMenu. This also creates the table which will contain the items.

	var intNewMaxRows = intMaxRows;

	for(var intCol=1;intCol<=intCols;intCol++){		// go through each item and create it on the menu

		if((intCol == intCols)&&(intLastColRows>0)){	// If this is the final column
			intNewMaxRows = intLastColRows;			// make sure it has the correct amount of rows
			strClass="";
		}else{
			strClass=' class="subMenuColContainer"';
		}
		
		document.write('<td' + strClass + ' valign="top">');	// create a new column

		for(var intRow=1 ; intRow<=intNewMaxRows ; intRow++){	// for each item on the row

			strClickCommand='loadApp("' + strItems[i] + '","' + strItemPath[i] + '","' + strItemIconPath[i] + '",' + '"' + intItemMax[i] + '"' + ');';		// create the onclick command

			document.write("<div onclick='" + strClickCommand + "' class='subMenuRow'><table cellpadding='0' cellspacing='0'><tr><td class='itemIconContainer'><img src='../theme"+strThemeDir+"/" + strItemIconPath[i] + "' class='itemIcon'></td><td class='itemTitleContainer'><a href='javascript:;'>" + strItems[i] + "</a></td></tr></table></div>");		// create the item for that row
			
			i++;

		}		// loop again until end of column

		document.write("</td>");	// finish that row and table
	}		// loop again until end of list

	document.write("</tr></table></div>");	// finish the table

	// delete previous sub menu arrays, or the menu will display items from it
	strItemPath.splice(0,strItemPath.length);
	strItems.splice(0,strItems.length);
	strItemIconPath.splice(0,strItemIconPath.length);
	intItemMax.splice(0,intItemMax.length);

	if(intCols==1){		// if there is only 1 row
		intHeight = intRowHeight * intLastColRows;	// then the height will be the amount of rows * row height
	}else{				// if there is more than 1 column
		intHeight = intRowHeight * intMaxRows;		// then the height will be the maximum amount of rows * row height
	}

	var objLyMenu = 'element("ly' + strID + '")';	// define as the menu layer

	eval(objLyMenu + ".style.height=intHeight;");		// set the height of the layer

}

function makeMainMenu(){ // Make the main 'start' menu

	returnLoadStatus("Creating main menu...");

	var strClickCommand ;
	var strID;

	document.write("<table cellpadding='0' cellspacing='0' class='mainMenuCols'><tr><td class='mainMenuRibbon'></td><td>");

	makeMainMenuHeader("All Applications");

	for(var i = 0;i<strMenu.length;i++){	// create each sub menu item

		strID = "lyMM"+strMenuID[i];

		strClickCommand = "hideMenu(1);alignSubMenu("+i+");showHideLayer(" + '"ly' + strMenuID[i] + '"' +","+'"visible"' +");";	// make the onclick command
		
		makeMainMenuItem(strMenu[i],strIconURL[i],strID,strClickCommand,1);


	}	// loop for next menu item

	makeMainMenuHeader("Actions");
	makeMainMenuItem('Settings','../theme'+strThemeDir+'/images/icons/mainmenu/settings.png','lyMMSettings','msgBox("The Settings are still in development","Settings");');
	makeMainMenuItem('Run Command...','../theme'+strThemeDir+'/images/icons/mainmenu/run.png','lyMMRun','msgBox("The Run command is still in development","Run Command");');
	makeMainMenuItem('Log Out...','../theme'+strThemeDir+'/images/icons/mainmenu/logout.png','lyMMLogout','showHideLogin("visible");');
	document.write("</tr></table>");
	element('menu').style.height=(intMainMenuItemCount*20);

}

function makeMainMenuItem(strMenuTitle,strMenuIcon,strID,strCmd,blnSubMenu){
	document.write("<div class='mainMenuRow' onclick='"+strCmd+"' id='"+strID+"'><table border='0' cellpadding='0' cellspacing='0'><tr><td><img src='"+strMenuIcon+"' class='mainMenuIcon'></td><td><a href='javascript:;'>"+strMenuTitle+"</a>");

	if(blnSubMenu==1) document.write("<div class='mainMenuExpand'></div>");	// if it's a submenu then put an arrow at the end

	document.write("</td></tr></table></div>");		// make the item so the onclick opens the correct submenu

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