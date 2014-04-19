var strpuzzleGames = new Array;
var intpuzzleGamesMinMax = new Array;
var intpuzzleGamesPath = new Array;
var strpuzzleGamesIconPath = new Array;
var intStartMax = new Array;
var intpuzzleGame = 0;

function puzzleGame(puzzleGameName,MinMax,puzzleGamePath,IconPath,StartMax){
	strpuzzleGames[intpuzzleGame]=puzzleGameName;
	intpuzzleGamesMinMax[intpuzzleGame]=MinMax;
	intpuzzleGamesPath[intpuzzleGame]=puzzleGamePath;
	strpuzzleGamesIconPath[intpuzzleGame]=IconPath;
	intStartMax[intpuzzleGame]=StartMax;
	intpuzzleGame=intpuzzleGame+1;
}

//BEGIN LIST (add new puzzle games below here)
puzzleGame("8 Queens",1,"../games/puzzle/8queens/index.htm","../images/icons/menu/games/puzzle/8queens.png",1);
puzzleGame("Agent Greenny",1,"../games/puzzle/agentgreenny.swf","../images/icons/menu/games/puzzle/agentgreenny.png",1);
puzzleGame("Animals 1",1,"../games/puzzle/animals_1.swf","../images/icons/menu/games/puzzle/animals_1.png",1);
puzzleGame("Animals 2",1,"../games/puzzle/animals_2.swf","../images/icons/menu/games/puzzle/animals_2.png",1);
puzzleGame("Animals 3",1,"../games/puzzle/animals_3.swf","../images/icons/menu/games/puzzle/animals_3.png",1);
puzzleGame("Cat O Mania",1,"../games/puzzle/catomania.swf","../images/icons/menu/games/puzzle/catomania.png",1);
puzzleGame("Crazy Maze",1,"../games/puzzle/crazymaze.swf","../images/icons/menu/games/puzzle/crazymaze.png",1);
puzzleGame("Hangman",1,"../games/puzzle/hangman.swf","../images/icons/menu/games/puzzle/hangman.png",1);
puzzleGame("Master Mind",1,"../games/puzzle/mastermind.swf","../images/icons/menu/games/puzzle/mastermind.png",1);
puzzleGame("Package",1,"../games/puzzle/package.swf","../images/icons/menu/games/puzzle/package.png",1);
puzzleGame("Parking Zone",1,"../games/puzzle/parkingzone.swf","../images/icons/menu/games/puzzle/parkingzone.gif",1);
puzzleGame("Photo Spot",1,"../games/puzzle/photospot.swf","../images/icons/menu/games/puzzle/photospot.png",1);
puzzleGame("Telescope",1,"../games/puzzle/telescope.swf","../images/icons/menu/games/puzzle/telescope.png",1);
puzzleGame("Tetris",1,"../games/puzzle/tetris.swf","../images/icons/menu/games/puzzle/tetris.png",1);
puzzleGame("Where To Go",1,"../games/puzzle/wheretogo.swf","../images/icons/menu/games/puzzle/wheretogo.png",1);
puzzleGame("Find Differents",1,"../games/puzzle/find_differents.swf","../images/icons/menu/games/puzzle/find_differents.png",1);
puzzleGame("Prachka",1,"../games/puzzle/prachka.swf","../images/icons/menu/games/puzzle/prachka.gif",1);
puzzleGame("Click Puzzle",1,"../games/puzzle/clickpuzzle.swf","../images/icons/menu/games/puzzle/clickpuzzle.png",1);
puzzleGame("Critter Crossing",1,"../games/puzzle/Critter_Crossing.swf","../images/icons/menu/games/puzzle/Critter_Crossing.png",1);
puzzleGame("Go Marching In",1,"../games/puzzle/gomarchingin.swf","../images/icons/menu/games/puzzle/gomarchingin.png",1);
puzzleGame("Mahjong Connect",1,"../games/puzzle/Mahjong-Connect.swf","../images/icons/menu/games/puzzle/Mahjong-Connect.png",1);
puzzleGame("Quick Stack",1,"../games/puzzle/Quick-Stack.swf","../images/icons/menu/games/puzzle/Quick-Stack.png",1);
puzzleGame("Rotation",1,"../games/puzzle/rotation.swf","../images/icons/menu/games/puzzle/rotation.png",1);
puzzleGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
//END LIST (add new puzzle games above here)