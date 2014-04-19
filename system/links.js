var intlight = 1;
var strlight;
var strFunction;
var intColumn;
var openedLink;
var linksTop;

if(strLinks.length>12){
	intColumn=Math.ceil((strLinks.length)/2);
}else{
	intColumn=strLinks.length;
}

frames['mlinks'].style.height=(intColumn)*19;

document.write("<table width='115' cellpadding='0' cellspacing='0' >");
document.write('<tr class="istart_dark" onClick="' + "showHideLayer('mpspwxp','visible')" + '"> <td width="20"><img src="../images/icons/menu/links/pspwxp.png" width="20" height="20" border="0"></td><td><a href="#" class="aistart_dark">pspWxp</a></td><td><img src="../images/arrow.gif" width="10" height="18"></td></tr>');

for (i=0;i<strLinks.length;i++){
	if(i==intColumn){
		document.write("</table></td><td valign='top'><table width='115' cellpadding='0' cellspacing='0' >");
		intlight=0;
	}

	if(intlight==1){
		intlight=0;
		strlight="istart_light";
	}else{
		intlight=1;
		strlight="istart_dark";
	}
	document.write("<tr class=");
	document.write(strlight);

	if (strLinkNewWindow[i]==1){
		document.write(" onClick='");
		document.write('window.open("'+intLinksPath[i]+'");hideMenu();'+"'");
	}else{
		document.write(" onClick='openInBrowser(" +'"' +intLinksPath[i]+'");'+"'");
	}
	document.write("><td width='22'><img src='../");
	document.write(strLinksIconPath[i]);
	document.write("' width='20' height='20'></td><td><a href='#a' class='a"+strlight+"'>");
	document.write(strLinks[i]);
	document.write("</a></td><td></td></tr>");
}

document.write("</table>");
