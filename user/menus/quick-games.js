var strquickGames = new Array;
var intquickGamesMinMax = new Array;
var intquickGamesPath = new Array;
var strquickGamesIconPath = new Array;
var intStartMax = new Array;
var intquickGame = 0;

function quickGame(quickGameName,MinMax,quickGamePath,IconPath,StartMax){
	strquickGames[intquickGame]=quickGameName;
	intquickGamesMinMax[intquickGame]=MinMax;
	intquickGamesPath[intquickGame]=quickGamePath;
	strquickGamesIconPath[intquickGame]=IconPath;
	intStartMax[intquickGame]=StartMax;
	intquickGame=intquickGame+1;
}

//BEGIN LIST (add new quick games below here)
quickGame("Kill The Popups",1,"../games/quick/killthepopups.swf","../images/icons/menu/games/quick/killthepopups.png",1);
quickGame("Arm Wrestling",1,"../games/quick/arm_wrestling.swf","../images/icons/menu/games/quick/arm_wrestling.png",1);
quickGame("Reflex",1,"../games/quick/reflex/index.htm","../images/icons/menu/games/quick/reflex.png",1);
quickGame("Avoider",1,"../games/quick/avoider.swf","../images/icons/menu/games/quick/avoider.png",1);
quickGame("Catch Thirty Three",1,"../games/quick/catchthirtythree.swf","../images/icons/menu/games/quick/catchthirtythree.png",1);
quickGame("Random Gravity",1,"../games/quick/randomgravity.swf","../images/icons/menu/games/quick/randomgravity.png",1);
quickGame("Soap Bubble",1,"../games/quick/soapbubble.swf","../images/icons/menu/games/quick/soapbubble.png",1);
quickGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
quickGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
quickGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
quickGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
quickGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
quickGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
quickGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
quickGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
quickGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
quickGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
quickGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
quickGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
quickGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
quickGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
quickGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
quickGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
quickGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
//END LIST (add new quick games above here)