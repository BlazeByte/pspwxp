var strShortcuts = new Array;
var intShortcutsMinMax = new Array;
var intShortcutsPath = new Array;
var strShortcutsIconPath = new Array;
var intStartMax = new Array;
var si = new Array;
var intShortcut = -1

intShortcut=intShortcut+1
strShortcuts[intShortcut]="My PSP";
intShortcutsMinMax[intShortcut]="1";
intShortcutsPath[intShortcut]="apps/filebrowse/index.htm"
strShortcutsIconPath[intShortcut]="images/icons/mypsp.png" 
intStartMax[intShortcut]=0

intShortcut=intShortcut+1
strShortcuts[intShortcut]="Internet";
intShortcutsMinMax[intShortcut]="1";
intShortcutsPath[intShortcut]="apps/internet/index.htm"
strShortcutsIconPath[intShortcut]="images/icons/internet.png" 
intStartMax[intShortcut]=0

intShortcut=intShortcut+1
strShortcuts[intShortcut]="Text Editor";
intShortcutsMinMax[intShortcut]="1";
intShortcutsPath[intShortcut]="apps/textedit.htm"
strShortcutsIconPath[intShortcut]="images/icons/txtedit.png" 
intStartMax[intShortcut]=0

intShortcut=intShortcut+1
strShortcuts[intShortcut]="Calculator";
intShortcutsMinMax[intShortcut]="1";
intShortcutsPath[intShortcut]="apps/calc.htm"
strShortcutsIconPath[intShortcut]="images/icons/calc.png" 
intStartMax[intShortcut]=0

intShortcut=intShortcut+1
strShortcuts[intShortcut]="Games List";
intShortcutsMinMax[intShortcut]="1";
intShortcutsPath[intShortcut]="apps/gameslist.htm"
strShortcutsIconPath[intShortcut]="images/icons/games.png" 
intStartMax[intShortcut]=0

intShortcut=intShortcut+1
strShortcuts[intShortcut]="PSPTunes";
intShortcutsMinMax[intShortcut]="1";
intShortcutsPath[intShortcut]="apps/psptunes.htm"
strShortcutsIconPath[intShortcut]="images/icons/psptunes.png" 
intStartMax[intShortcut]=0

var i =0

for (i=0;i<strShortcuts.length;i++){
	if(i==0||i==1){intSSTop=59}else{if(i==2||i==3){intSSTop=135}else{intSSTop=211}}
	if(i==0||i==2||i==4){intSSLeft=-1}else{intSSLeft=79}
	si[i]='<td width="50%"><img src="'+strShortcutsIconPath[i]+'" width="48" height="48" onClick="setTitle('+intShortcutsMinMax[i]+','+"'"+strShortcuts[i]+"'"+','+"'"+intShortcutsPath[i]+"'"+','+"'"+strShortcutsIconPath[i]+"'"+')"><font color="#FFFFFF"  size="1"><strong><div id="s'+i+'s" style="position:absolute; left:'+intSSLeft+'; top:'+intSSTop+'; width:80; z-index:2; visibility: visible;">'+strShortcuts[i]+'</div></strong></font></td>'
}

document.write('<table border="0" cellpadding="4" cellspacing="0" style="border-collapse: collapse" bordercolor="#111111" width="100%"><tr align="center"> ');
document.write(si[0]+si[1]);
document.write('</tr><tr align="center" valign="top"><td width="50%"><strong><font face="Verdana" size="1">'+strShortcuts[0]+'</font></strong></td><td width="50%"><strong><font face="Verdana" size="1">'+strShortcuts[1]+'</font></strong></td></tr><tr align="center">'); 
document.write(si[2]+si[3]);
document.write('</tr><tr align="center" valign="top"> <td width="50%"><strong><font face="Verdana" size="1">'+strShortcuts[2]+'</font></strong></td><td width="50%"><strong><font face="Verdana" size="1">'+strShortcuts[3]+'</font></strong></td></tr><tr align="center">');
document.write(si[4]+si[5]);
document.write('</tr><tr align="center" valign="top"> <td width="50%"><strong><font size="1" face="Verdana">'+strShortcuts[4]+'</font></strong></td><td width="50%"><strong><font face="Verdana" size="1">'+strShortcuts[5]+'</font></strong></td></tr></table>');