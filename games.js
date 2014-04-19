var intlight = 1;
var strlight;
var strFunction;
var intColumn;

if(strGames.length>13){
	if(strGames.length>26){
		intColumn=Math.ceil(strGames.length/3);
	}else{
		intColumn=Math.ceil(strGames.length/2);
	}
}else{
	intColumn=strGames.length;
}

frames['mgames'].style.height=(intColumn)*19;

document.write("<table width='115' cellpadding='0.4' cellspacing='0' >");

for (i=0;i<strGames.length;i++){
	if(i==intColumn||i==intColumn*2){
		document.write("</table></td><td valign='top'><table width='115' cellpadding='0.4' cellspacing='0' >");
		intlight=1;
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
	document.write("' width='20' height='20'></td><td><a href='#' class='a"+strlight+"'>");
	document.write(strGames[i]);
	document.write("</a></td></tr>");
}

document.write("</table>");
