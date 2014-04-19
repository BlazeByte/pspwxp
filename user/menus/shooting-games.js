var strshootingGames = new Array;
var intshootingGamesMinMax = new Array;
var intshootingGamesPath = new Array;
var strshootingGamesIconPath = new Array;
var intStartMax = new Array;
var intshootingGame = 0;

function shootingGame(shootingGameName,MinMax,shootingGamePath,IconPath,StartMax){
	strshootingGames[intshootingGame]=shootingGameName;
	intshootingGamesMinMax[intshootingGame]=MinMax;
	intshootingGamesPath[intshootingGame]=shootingGamePath;
	strshootingGamesIconPath[intshootingGame]=IconPath;
	intStartMax[intshootingGame]=StartMax;
	intshootingGame=intshootingGame+1;
}

//BEGIN LIST (add new shooting games below here)
shootingGame("Cannon Comm.",1,"../games/shooting/cannon_commander.swf","../images/icons/menu/games/shooting/cannon_commander.png",1);
shootingGame("Bossmonster",1,"../games/shooting/bossmonster.swf","../images/icons/menu/games/shooting/bossmonster.png",1);
shootingGame("Arnok",1,"../games/shooting/arnok.swf","../images/icons/menu/games/shooting/arnok.png",1);
shootingGame("Alcohol Ammo",1,"../games/shooting/alcohol_ammo.swf","../images/icons/menu/games/shooting/alcohol_ammo.png",1);
shootingGame("Agent M69",1,"../games/shooting/agent_m69.swf","../images/icons/menu/games/shooting/agent_m69.png",1);
shootingGame("A-blast",1,"../games/shooting/ablast.swf","../images/icons/menu/games/shooting/ablast.png",1);
shootingGame("Escape",1,"../games/shooting/escape.swf","../images/icons/menu/games/shooting/escape.png",1);
shootingGame("Shoot The Gatso",1,"../games/shooting/shootthegatso.swf","../images/icons/menu/games/shooting/shootthegatso.png",1);
shootingGame("Bustershaw",1,"../games/shooting/bustershawquickdraw.swf","../images/icons/menu/games/shooting/bustershawquickdraw.png",1);
shootingGame("Duck Hunt",1,"../games/shooting/Duck_Hunt.swf","../images/icons/menu/games/shooting/Duck_Hunt.png",1);
shootingGame("Launch Fighters",1,"../games/shooting/Launch_Fighters.swf","../images/icons/menu/games/shooting/Launch_Fighters.png",1);
shootingGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
shootingGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
shootingGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
shootingGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
shootingGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
shootingGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
shootingGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
shootingGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
shootingGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
shootingGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
shootingGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
shootingGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
shootingGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
//END LIST (add new shooting games above here)