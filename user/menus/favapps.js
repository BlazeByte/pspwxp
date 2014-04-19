var strFavApps = new Array;
var intFavAppsMinMax = new Array;
var intFavAppsPath = new Array;
var strFavAppsIconPath = new Array;
var intStartMax = new Array;
var intFavApp = 0;

function FavApp(FavAppName,MinMax,FavAppPath,IconPath,StartMax){
	strFavApps[intFavApp]=FavAppName;
	intFavAppsMinMax[intFavApp]=MinMax;
	intFavAppsPath[intFavApp]=FavAppPath;
	strFavAppsIconPath[intFavApp]=IconPath;
	intStartMax[intFavApp]=StartMax;
	intFavApp=intFavApp+1;
}

//BEGIN LIST (add new Fav App below here)
FavApp("None",1,"None.swf","../images/icons/menu/games/None.png",1);
//END LIST (add new Fav App above here)