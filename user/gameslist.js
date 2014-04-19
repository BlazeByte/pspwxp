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
Game("8 Queens",1,"../games/8queens/index.htm","../images/icons/menu/games/8queens.png",1);
Game("A-Blast",1,"../games/ablast.swf","../images/icons/menu/games/ablast.png",1);
Game("Air-Hockey",1,"../games/airhockey.swf","../images/icons/menu/games/airhockey.png",1);
Game("Animals",1,"../games/animals.swf","../images/icons/menu/games/animal.png",1);
Game("Ants",1,"../games/ants.swf","../images/icons/menu/games/ants.png",1);
Game("Battlepong",1,"../games/battlepong.swf","../images/icons/menu/games/bpong.png",1);
Game("Blast Billards",1,"../games/blastbillard.swf","../images/icons/menu/games/billards.png",1);
Game("Car Madness",1,"../games/carmadness.swf","../images/icons/menu/games/carmadness.gif",1);
Game("Checkers",1,"../games/checkers.swf","../images/icons/menu/games/checkers.png",1);
Game("Chess",1,"../games/chess.swf","../images/icons/menu/games/chess.gif",1);
Game("Cosmopilot",1,"../games/cosmopilot.swf","../images/icons/menu/games/cosmopilot.gif",1);
Game("Country Guess",1,"../games/countryguess/index.htm","../images/icons/menu/games/country.png",1);
Game("Dog VS Cat",1,"../games/dogvscat.swf","../images/icons/menu/games/dogvscat.gif",1);
Game("Gun Kill",1,"../games/gunkill.swf","../images/icons/menu/games/gun.gif",1);
Game("Gold Miner",1,"../games/goldminer.swf","../images/icons/menu/games/goldminer.gif",1);
Game("Gimp Roulette",1,"../games/gimproulette.swf","../images/icons/menu/games/gun.gif",1);
Game("Hangman",1,"../games/hangman.swf","../images/icons/menu/games/hangman.png",1);
Game("Hexxagon",1,"../games/hexxagon.swf","../images/icons/menu/games/hexxagon.gif",1);
Game("Memory",1,"../games/memory.swf","../images/icons/menu/games/memory.png",1);
Game("Mind Reader",1,"../games/mindreader/index.htm","../images/icons/menu/games/mind.PNG",1);
Game("Mini Putt 2",1,"../games/miniputt2.swf","../images/icons/menu/games/golfball.gif",1);
Game("Package",1,"../games/package.swf","../images/icons/menu/games/package.png",1);
Game("Parking Zone",1,"../games/parkingzone.swf","../images/icons/menu/games/parkingzone.gif",1);
Game("Portaball",1,"../games/portaball.swf","../images/icons/menu/games/breakout.png",1);
Game("Prachka",1,"../games/prachka.swf","../images/icons/menu/games/prachka.gif",1);
Game("Question?",1,"../games/mindread/index.htm","../images/icons/menu/games/mind2.PNG",1);
Game("Reflex Test",1,"../games/reflex/index.htm","../images/icons/menu/games/reflex.png",1);
Game("Reversi",1,"../games/reversi.swf","../images/icons/menu/games/reversi.png",1);
Game("Snake",1,"../games/snake.swf","../images/icons/menu/games/snake.png",1);
Game("Squares",1,"../games/squares.swf","../images/icons/menu/games/squares.png",1);
Game("Sudoku",1,"../games/sudoku.swf","../images/icons/menu/games/sudoku.png",1);
Game("Telescope",1,"../games/telescope.swf","../images/icons/menu/games/telescope.png",1);
Game("Tetris",1,"../games/tetris.swf","../images/icons/menu/games/tetris.png",1);
Game("Tic Tac Toe",1,"../games/tictactoe.swf","../images/icons/menu/games/tictactoe.png",1);
Game("Tokkun2",1,"../games/tokkun2.swf","../images/icons/menu/games/tokkun2.gif",1);
Game("Windows RG",1,"../games/Windows RG.swf","../images/icons/menu/games/windowslogo.gif",1);
//END LIST (add new games above here)
