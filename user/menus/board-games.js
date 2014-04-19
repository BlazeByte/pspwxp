var strboardGames = new Array;
var intboardGamesMinMax = new Array;
var intboardGamesPath = new Array;
var strboardGamesIconPath = new Array;
var intStartMax = new Array;
var intboardGame = 0;

function boardGame(boardGameName,MinMax,boardGamePath,IconPath,StartMax){
	strboardGames[intboardGame]=boardGameName;
	intboardGamesMinMax[intboardGame]=MinMax;
	intboardGamesPath[intboardGame]=boardGamePath;
	strboardGamesIconPath[intboardGame]=IconPath;
	intStartMax[intboardGame]=StartMax;
	intboardGame=intboardGame+1;
}

//BEGIN LIST (add new board games below here)
boardGame("Air Hockey",1,"../games/board/airhockey.swf","../images/icons/menu/games/board/airhockey.png",1);
boardGame("Battle Pong",1,"../games/board/battlepong.swf","../images/icons/menu/games/board/battlepong.png",1);
boardGame("Blast Billiard",1,"../games/board/blastbilliard.swf","../images/icons/menu/games/board/blastbilliard.png",1);
boardGame("Checkers",1,"../games/board/checkers.swf","../images/icons/menu/games/board/checkers.png",1);
boardGame("Connect 4",1,"../games/board/connect4.swf","../images/icons/menu/games/board/connect4.png",1);
boardGame("Memory",1,"../games/board/memory.swf","../images/icons/menu/games/board/memory.png",1);
boardGame("Ping Pong",1,"../games/board/pingpong.swf","../images/icons/menu/games/board/pingpong.png",1);
boardGame("Paper-Stone",1,"../games/board/scissorspaperstone.swf","../images/icons/menu/games/board/scissorspaperstone.png",1);
boardGame("Sudoku",1,"../games/board/sudoku.swf","../images/icons/menu/games/board/sudoku.png",1);
boardGame("Tic Tac Toe",1,"../games/board/tictactoe.swf","../images/icons/menu/games/board/tictactoe.png",1);
boardGame("Hexxagon",1,"../games/board/hexxagon.swf","../images/icons/menu/games/board/hexxagon.png",1);
boardGame("Portaball",1,"../games/board/portaball.swf","../images/icons/menu/games/board/portaball.png",1);
boardGame("Reversi",1,"../games/board/reversi.swf","../images/icons/menu/games/board/reversi.png",1);
boardGame("Breakout 2",1,"../games/board/breakout2.swf","../images/icons/menu/games/board/breakout2.png",1);
boardGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
boardGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
boardGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
boardGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
boardGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
boardGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
boardGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
boardGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
boardGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
boardGame("None",1,"None.swf","../images/icons/menu/games/None.png",1);
//END LIST (add new board games above here)