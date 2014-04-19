var intlight = 0;
var strlight;
var strFunction;
var intColumn;

if(strGames.length>12){
	if(strGames.length>24){
		intColumn=Math.ceil(strGames.length/3);
	}else{
		intColumn=Math.ceil(strGames.length/2);
	}
}else{
	intColumn=strGames.length;
}

frames['mgames'].style.height=(intColumn)*19;

document.write("<table width='120' cellpadding='0.4' cellspacing='0' >");
document.write('<tr class="istart_dark" onClick="' + "showHideLayer('mboard','visible');showHideLayer('mquick','hidden');showHideLayer('mpuzzle','hidden');showHideLayer('mshooting','hidden');showHideLayer('mother','hidden');" + '"> <td width="20"><img src="../images/icons/menu/games/board.png" width="20" height="20" border="0"></td><td>&nbsp;<a href="#" class="aistart_dark">Board Games</a></td><td><img src="../theme_vista/arrow.gif" width="10" height="18"></td></tr>');
document.write('<tr class="istart_light" onClick="' + "showHideLayer('mquick','visible');showHideLayer('mboard','hidden');showHideLayer('mpuzzle','hidden');showHideLayer('mshooters','hidden');showHideLayer('mother','hidden');" + '"> <td width="20"><img src="../images/icons/menu/games/quick.png" width="20" height="20" border="0"></td><td>&nbsp;<a href="#" class="aistart_dark">Quick Games</a></td><td><img src="../theme_vista/arrow.gif" width="10" height="18"></td></tr>');
document.write('<tr class="istart_dark" onClick="' + "showHideLayer('mpuzzle','visible');showHideLayer('mboard','hidden');showHideLayer('mquick','hidden');showHideLayer('mshooting','hidden');showHideLayer('mother','hidden');" + '"> <td width="20"><img src="../images/icons/menu/games/puzzle.png" width="20" height="20" border="0"></td><td>&nbsp;<a href="#" class="aistart_dark">Puzzle Games</a></td><td><img src="../theme_vista/arrow.gif" width="10" height="18"></td></tr>');
document.write('<tr class="istart_light" onClick="' + "showHideLayer('mshooting','visible');showHideLayer('mboard','hidden');showHideLayer('mquick','hidden');showHideLayer('mpuzzle','hidden');showHideLayer('mother','hidden');" + '"> <td width="20"><img src="../images/icons/menu/games/shooting.png" width="20" height="20" border="0"></td><td>&nbsp;<a href="#" class="aistart_dark">Shooting Games</a></td><td><img src="../theme_vista/arrow.gif" width="10" height="18"></td></tr>');
document.write('<tr class="istart_dark" onClick="' + "showHideLayer('mother','visible');showHideLayer('mboard','hidden');showHideLayer('mquick','hidden');showHideLayer('mpuzzle','hidden');showHideLayer('mshooting','hidden');" + '"> <td width="20"><img src="../images/icons/menu/games/other.png" width="20" height="20" border="0"></td><td>&nbsp;<a href="#" class="aistart_dark">Other Games</a></td><td><img src="../theme_vista/arrow.gif" width="10" height="18"></td></tr>');

for (i=0;i<strGames.length;i++){
	if(i==intColumn||i==intColumn*2){
		document.write("</table></td><td valign='top'><table width='120' cellpadding='0.4' cellspacing='0' >");
		intlight=0;
	}

	if(intlight==1){
		intlight=0;
		strlight="istart_light";
	}else{
		intlight=1;
		strlight= "istart_dark";
	}

	strFunction='setTitle("' + intGamesMinMax[i] + '","' + strGames[i] + '","' + intGamesPath[i] + '","' + strGamesIconPath[i] + '",' + '"' + intStartMax[i] + '"' + ')';
	document.write("<tr class='");
	document.write(strlight);
	document.write("' onClick='");
	document.write(strFunction);
	document.write("')><td width='22'><img src='");
	document.write(strGamesIconPath[i]);
	document.write("' width='20' height='20'></td><td><a href='#a' class='a"+strlight+"'>");
	document.write(strGames[i]);
	document.write("</a></td><td></td></tr>");
}
document.write("</table>");
