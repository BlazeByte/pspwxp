var strotherGames = new Array;
var intotherGamesMinMax = new Array;
var intotherGamesPath = new Array;
var strotherGamesIconPath = new Array;
var intStartMax = new Array;
var intotherGame = 0;

function otherGame(otherGameName,MinMax,otherGamePath,IconPath,StartMax){
	strotherGames[intotherGame]=otherGameName;
	intotherGamesMinMax[intotherGame]=MinMax;
	intotherGamesPath[intotherGame]=otherGamePath;
	strotherGamesIconPath[intotherGame]=IconPath;
	intStartMax[intotherGame]=StartMax;
	intotherGame=intotherGame+1;
}

//BEGIN LIST (add new other games below here)
otherGame("Country Guess",1,"../games/other/countryguess/index.htm","../images/icons/menu/games/other/countryguess.png",1);
otherGame("Mind Read",1,"../games/other/mindread/index.htm","../images/icons/menu/games/other/mindread.png",1);
otherGame("Mind Reader",1,"../games/other/mindreader/index.htm","../images/icons/menu/games/other/mindreader.png",1);
otherGame("Ants",1,"../games/other/ants.swf","../images/icons/menu/games/other/ants.png",1);
otherGame("Ballistic Biscuit",1,"../games/other/ballistic_biscuit.swf","../images/icons/menu/games/other/ballistic_biscuit.png",1);
otherGame("Car Madness",1,"../games/other/carmadness.swf","../images/icons/menu/games/other/carmadness.gif",1);
otherGame("Cosmopilot",1,"../games/other/cosmopilot.swf","../images/icons/menu/games/other/cosmopilot.png",1);
otherGame("Crabball",1,"../games/other/crabball.swf","../images/icons/menu/games/other/crabball.png",1);
otherGame("Frog & Flies",1,"../games/other/frog&flies.swf","../images/icons/menu/games/other/frog&flies.png",1);
otherGame("Gold Miner",1,"../games/other/goldminer.swf","../images/icons/menu/games/other/goldminer.png",1);
otherGame("Snake",1,"../games/other/snake.swf","../images/icons/menu/games/other/snake.png",1);
otherGame("Squares",1,"../games/other/squares.swf","../images/icons/menu/games/other/squares.png",1);
otherGame("Tokkun2",1,"../games/other/tokkun2.swf","../images/icons/menu/games/other/tokkun2.png",1);
otherGame("Kaboom",1,"../games/other/kaboom.swf","../images/icons/menu/games/other/kaboom.png",1);
otherGame("Little Man",1,"../games/other/littleman.swf","../images/icons/menu/games/other/littleman.png",1);
otherGame("My Head",1,"../games/other/myhead.swf","../images/icons/menu/games/other/myhead.png",1);
otherGame("Street Skating",1,"../games/other/street_skating.swf","../images/icons/menu/games/other/street_skating.png",1);
otherGame("Excuse Generator",1,"../games/other/excusegenerator.swf","../images/icons/menu/games/other/excusegenerator.png",1);
otherGame("Aquan",1,"../games/other/aquan.swf","../images/icons/menu/games/other/aquan.png",1);
otherGame("Baseball",1,"../games/other/baseball.swf","../images/icons/menu/games/other/baseball.png",1);
otherGame("Bounce Frog 2",1,"../games/other/bouncefrog2.swf","../images/icons/menu/games/other/bouncefrog2.png",1);
otherGame("Reverse",1,"../games/other/reverse.swf","../images/icons/menu/games/other/reverse.png",1);
otherGame("Sonar",1,"../games/other/sonar.swf","../images/icons/menu/games/other/sonar.png",1);
otherGame("The Box",1,"../games/other/thebox.swf","../images/icons/menu/games/other/thebox.png",1);
//END LIST (add new other games above here)