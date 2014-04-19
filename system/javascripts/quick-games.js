var intlight = 0;
var strlight;
var strFunction;
var intColumn;

if(strquickGames.length>12){
	if(strquickGames.length>24){
		intColumn=Math.ceil(strquickGames.length/3);
	}else{
		intColumn=Math.ceil(strquickGames.length/2);
	}
}else{
	intColumn=strquickGames.length;
}

frames['mquick'].style.height=(intColumn)*19;

document.write("<table width='115' cellpadding='0.4' cellspacing='0' >");

for (i=0;i<strquickGames.length;i++){
	if(i==intColumn||i==intColumn*2){
		document.write("</table></td><td valign='top'><table width='115' cellpadding='0.4' cellspacing='0' >");
		intlight=0;
	}

	if(intlight==1){
		intlight=0;
		strlight="istart_light";
	}else{
		intlight=1;
		strlight= "istart_dark";
	}

	strFunction='setTitle("' + intquickGamesMinMax[i] + '","' + strquickGames[i] + '","' + intquickGamesPath[i] + '","' + strquickGamesIconPath[i] + '",' + '"' + intStartMax[i] + '"' + ')';
	document.write("<tr class='");
	document.write(strlight);
	document.write("' onClick='");
	document.write(strFunction);
	document.write("')><td width='22'><img src='");
	document.write(strquickGamesIconPath[i]);
	document.write("' width='20' height='20'></td><td><a href='#a' class='a"+strlight+"'>");
	document.write(strquickGames[i]);
	document.write("</a></td><td></td></tr>");
}
document.write("</table>");
