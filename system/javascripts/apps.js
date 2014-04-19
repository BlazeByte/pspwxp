var intlight = 0;
var strlight;
var strFunction;
var intColumn;
var intColumnNo;
var SkipMaxMsg=0;
var AppsLen = strApps.length+1;
intApps++;

if(AppsLen>11){
	if(AppsLen>24){
		intColumnNo=3;
		intColumn=Math.ceil(strApps.length/3);
	}else{
		intColumnNo=2;
		intColumn=Math.ceil(strApps.length/2);
	}
}else{
	inColumnNo=1;
	intColumn=strApps.length;
}

frames['mapps'].style.top="0px";
frames['mapps'].style.height="0px";

document.write("<table width='115' cellpadding='0' cellspacing='0' >");
document.write('<tr class="istart_dark" onClick="' + "showHideLayer('mportals','visible');showHideLayer('mfavapps','hidden');" + '"> <td width="20"><img src="../images/icons/menu/links/pspwxp.png" width="20" height="20" border="0"></td><td><a href="#" class="aistart_light">My Portals</a></td><td><img src="../theme_vista/arrow.gif" width="10" height="18"></td></tr>');
document.write('<tr class="istart_light" onClick="' + "showHideLayer('mfavapps','visible');showHideLayer('mportals','hidden');" + '"> <td width="20"><img src="../images/icons/menu/apps.png" width="20" height="20" border="0"></td><td><a href="#" class="aistart_dark">Favorite Apps</a></td><td><img src="../theme_vista/arrow.gif" width="10" height="18"></td></tr>');

for (i=-2;i<intApps-1;i++){
	if((intColumnNo>1)&&(i==intColumn-2||i==(intColumn*2)-2)){
		document.write("</table></td><td valign='top'><table width='115' cellpadding='0' cellspacing='0' >");
		intlight=0;
	}

	if(i>-1){
		if(intlight==1){
			intlight=0;
			strlight="istart_light";
		}else{
			intlight=1;
			strlight="istart_dark";
		}

		strFunction='setTitle("' + intAppsMinMax[i] + '","' + strApps[i] + '","' + intAppsPath[i] + '","' + strAppsIconPath[i] + '",0)';
		document.write("<tr class='");
		document.write(strlight);
		document.write("' onClick='");
		document.write(strFunction);
		document.write("')><td width='22'><img src='");
		document.write(strAppsIconPath[i]);
		document.write("' width='20' height='20'></td><td colspan='2'><a href='#a' class='a"+strlight+"'>");
		document.write(strApps[i]);
		document.write("</a></td></tr>");
	}
}

document.write("</table>");
