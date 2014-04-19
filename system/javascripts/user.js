var intlight = 0;
var strlight;
var strFunction;
var intColumn;
var SkipMaxMsg=0;
var intUser = strUser.length;

intUser++;

if(strUser.length>12){
	if(strUser.length>24){
		intColumn=Math.ceil(strUser.length/3);
	}else{
		intColumn=Math.ceil(strUser.length/2);
	}
}else{
	intColumn=strUser.length;
}

frames['muser'].style.height=(intColumn)*19;

document.write("<table width='115' cellpadding='0' cellspacing='0' >");
for (i=-1;i<intUser-1;i++){
	if(i+0==intColumn||i+0==intColumn*2){
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

		strFunction='setTitle("' + intUserMinMax[i] + '","' + strUser[i] + '","' + intUserPath[i] + '","' + strUserIconPath[i] + '",0)';
		document.write("<tr class='");
		document.write(strlight);
		document.write("' onClick='");
		document.write(strFunction);
		document.write("')><td width='22'><img src='");
		document.write(strUserIconPath[i]);
		document.write("' width='20' height='20'></td><td colspan='2'><a href='#a' class='a"+strlight+"'>");
		document.write(strUser[i]);
		document.write("</a></td></tr>");
	}
}

document.write("</table>");
