//Desktop Shortcuts List - Do not delete any lines beginning with //
//to change the shortcuts, edit the list in between the BEGIN and END tags
//for more detailed instructions, visit http://pspwxp.co.nr/

var strShortcuts = new Array;
var intShortcutsMinMax = new Array;
var intShortcutsPath = new Array;
var strShortcutsIconPath = new Array;
var intStartMax = new Array;
var si = new Array;
var intList=0;

function Shortcut(ShortcutName,MinMax,ShortcutURL,IconPath,StartMax){
  strShortcuts[intList]=ShortcutName;
  intShortcutsMinMax[intList]=MinMax;
  intShortcutsPath[intList]=ShortcutURL;
  strShortcutsIconPath[intList]=IconPath;
  intStartMax[intList]=StartMax;
  intList =intList+1;
}

//BEGIN LIST - Edit desktop shortcuts below. DO NOT add more than 6.
Shortcut("My PSP","1","../apps/filebrowse/index.htm","../images/icons/mypsp.png",0);
Shortcut("Internet","1","../apps/internet/index.htm","../images/icons/internet.png",0);
Shortcut("Text Editor","1","../apps/texteditor/textedit.htm","../images/icons/txtedit.png",0);
Shortcut("Calculator","1","../apps/calc.htm","../images/icons/calc.png",0);
Shortcut("Games List","1","../apps/gameslist.htm","../images/icons/games.png",0);
if(icookies.settings.chkPSPTunesTab.value=="false"){
	Shortcut("PSPTunes","1","../apps/psptunes/index.htm","../images/icons/psptunes.png",0);
}else{
	Shortcut("PSPTunes","10","../apps/psptunes/index.htm","../images/icons/psptunes.png"),10;
}
//END LIST

var i =0;

for (i=0;i<strShortcuts.length;i++){
	if(i==0||i==1){intSSTop=59;}else{if(i==2||i==3){intSSTop=135;}else{intSSTop=211;}}
	if(i==0||i==2||i==4){intSSLeft=-1;}else{intSSLeft=79;}
	si[i]='<td width="50%"><a href="#"><img src="'+strShortcutsIconPath[i]+'" width="48" height="48" border="0" onClick="setTitle('+intShortcutsMinMax[i]+','+"'"+strShortcuts[i]+"'"+','+"'"+intShortcutsPath[i]+"'"+','+"'"+strShortcutsIconPath[i]+"'"+')"></a><font color="#FFFFFF"  size="1"><strong><div id="s'+i+'s" style="position:absolute; left:'+intSSLeft+'; top:'+intSSTop+'; width:80; z-index:2; visibility: visible;">'+strShortcuts[i]+'</div></strong></font></td>';
}

document.write('<table border="0" cellpadding="4" cellspacing="0" style="border-collapse: collapse" bordercolor="#111111" width="100%"><tr align="center"> ');
document.write(si[0]+si[1]);
document.write('</tr><tr align="center" valign="top"><td width="50%"><strong><font face="Verdana" size="1">'+strShortcuts[0]+'</font></strong></td><td width="50%"><strong><font face="Verdana" size="1">'+strShortcuts[1]+'</font></strong></td></tr><tr align="center">');
document.write(si[2]+si[3]);
document.write('</tr><tr align="center" valign="top"> <td width="50%"><strong><font face="Verdana" size="1">'+strShortcuts[2]+'</font></strong></td><td width="50%"><strong><font face="Verdana" size="1">'+strShortcuts[3]+'</font></strong></td></tr><tr align="center">');
document.write(si[4]+si[5]);
document.write('</tr><tr align="center" valign="top"> <td width="50%"><strong><font size="1" face="Verdana">'+strShortcuts[4]+'</font></strong></td><td width="50%"><strong><font face="Verdana" size="1">'+strShortcuts[5]+'</font></strong></td></tr></table>');
