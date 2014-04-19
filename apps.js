var intlight = 1;
var strlight;
var strFunction;
var intColumn;
var SkipMaxMsg=0;

if(strApps.length>13){
	if(strApps.length>26){
		intColumn=Math.ceil(strApps.length/3);
	}else{
		intColumn=Math.ceil(strApps.length/2);
	}
}else{
	intColumn=strApps.length;
}

if (intColumn > 6){
	frames['mapps'].style.top=145-((intColumn-6)*20);
}

document.write("<table width='115' cellpadding='0' cellspacing='0' >");

for (i=0;i<strApps.length;i++){
	if(i==intColumn||i==intColumn*2){
		document.write("</table></td><td valign='top'><table width='115' cellpadding='0' cellspacing='0' >");
		intlight=1;
	}

	if(intlight==1){
		intlight=0;
		strlight="'istart_light'";
	}else{
		intlight=1;
		strlight= "'istart_dark'";
	}

	strFunction='setTitle("' + intAppsMinMax[i] + '","' + strApps[i] + '","' + intAppsPath[i] + '","' + strAppsIconPath[i] + '",0)';
	document.write("<tr class=");
	document.write(strlight);
	document.write("' onClick='");
	document.write(strFunction);
	document.write("')><td width='22'><img src='");
	document.write(strAppsIconPath[i]);
	document.write("' width='20' height='20'></td><td><font size='2'>");
	document.write(strApps[i]);
	document.write("</font></td></tr>");
}

document.write("</table>");
