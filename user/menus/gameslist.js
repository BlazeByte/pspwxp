//Games List - Do not delete any lines beginning with //
//to add a game to the list: on a new line in the list section, add Game("Game name",1,"Game URL",Icon URL,1);
//for more detailed instructions, visit http://pspwxp.co.nr/

var strGames = new Array;
var intGamesMinMax = new Array;
var intGamesPath = new Array;
var strGamesIconPath = new Array;
var intStartMax = new Array;
var intGame = 0;

function Game(GameName,MinMax,GamePath,IconPath,StartMax){
	strGames[intGame]=GameName;
	intGamesMinMax[intGame]=MinMax;
	intGamesPath[intGame]=GamePath;
	strGamesIconPath[intGame]=IconPath;
	intStartMax[intGame]=StartMax;
	intGame=intGame+1;
}

//BEGIN LIST (add new games below here)

//END LIST (add new games above here)