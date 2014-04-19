var intlight = 1;
var strlight;
var strFunction;
var intColumn;
var SkipMaxMsg=0;
var intApps = strApps.length

intApps++

if(strApps.length>13){
	if(strApps.length>26){
		intColumn=Math.ceil(strApps.length/3);
	}else{
		intColumn=Math.ceil(strApps.length/2);
	}
}else{
	intColumn=strApps.length;
}

frames['mapps'].style.height=(intColumn)*19;

document.write("<table width='115' cellpadding='0' cellspacing='0' >");
document.write('<tr class="istart_dark" onClick="' + "showHideLayer('mportals','visible')" + '"> <td width="20"><img src="images/icons/menu/links/pspwxp.png" width="20" height="20" border="0"></td><td><a href="#" class="aistart_dark">My Portals</a></td><td><img src="images/arrow.gif" width="10" height="18"></td></tr>');

for (i=-1;i<intApps-1;i++){
	if(i+1==intColumn||i+1==intColumn*2){
		document.write("</table></td><td valign='top'><table width='115' cellpadding='0' cellspacing='0' >");
		intlight=0;
	}

	if(i>-1){
		if(intlight==1){
			intlight=0;
			strlight="istart_light";
		}else{
			intlight=1;
			strlight= "istart_dark";
		}
	
		strFunction='setTitle("' + intAppsMinMax[i] + '","' + strApps[i] + '","' + intAppsPath[i] + '","' + strAppsIconPath[i] + '",0)';
		document.write("<tr class='");
		document.write(strlight);
		document.write("' onClick='");
		document.write(strFunction);
		document.write("')><td width='22'><img src='");
		document.write(strAppsIconPath[i]);
		document.write("' width='20' height='20'></td><td colspan='2'><a href='#' class='a"+strlight+"'>");
		document.write(strApps[i]);
		document.write("</a></td></tr>");
	}
}

document.write("</table>");
