var intlight = 0;
var strlight;
var strFunction;
var intColumn;

if(strotherGames.length>12){
	if(strotherGames.length>24){
		intColumn=Math.ceil(strotherGames.length/3);
	}else{
		intColumn=Math.ceil(strotherGames.length/2);
	}
}else{
	intColumn=strotherGames.length;
}

frames['mother'].style.height=(intColumn)*19;

document.write("<table width='115' cellpadding='0.4' cellspacing='0' >");

for (i=0;i<strotherGames.length;i++){
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

	strFunction='setTitle("' + intotherGamesMinMax[i] + '","' + strotherGames[i] + '","' + intotherGamesPath[i] + '","' + strotherGamesIconPath[i] + '",' + '"' + intStartMax[i] + '"' + ')';
	document.write("<tr class='");
	document.write(strlight);
	document.write("' onClick='");
	document.write(strFunction);
	document.write("')><td width='22'><img src='");
	document.write(strotherGamesIconPath[i]);
	document.write("' width='20' height='20'></td><td><a href='#a' class='a"+strlight+"'>");
	document.write(strotherGames[i]);
	document.write("</a></td><td></td></tr>");
}
document.write("</table>");
