//Apps List - Do not delete any lines beginning with //
//to add an application to the list: on a new line in the list section, add App("App name",1,"App URL",Icon URL);
//for more detailed instructions, visit http://pspwxp.co.nr/

// Set the following to 1 to remove the maximize instructions. This applies to both apps, games and user additions.

var SkipMaxMsg = 0;

var strApps = new Array;
var intAppsMinMax = new Array;
var intAppsPath = new Array;
var strAppsIconPath = new Array;
var intApps = 0;

function App(AppName,MinMax,AppPath,IconPath,StartMax){
	strApps[intApps]=AppName;
	intAppsMinMax[intApps]=MinMax;
	intAppsPath[intApps]=AppPath;
	strAppsIconPath[intApps]=IconPath;
	intApps=intApps+1;
}

//BEGIN LIST (add new apps below here)
App("About pspWxp",1,"../apps/about.htm","images/icons/menu/apps/about.png");
App("Analog Clock",1,"../apps/cl_an.swf","images/icons/menu/apps/stopwatch.png");
App("Browser Info",1,"../apps/browserinfo.htm","images/icons/menu/apps/browsinfo.png");
App("Calculator",1,"../apps/calc.htm","images/icons/menu/apps/calc.png");
App("Calendar",1,"../apps/cal.swf","images/icons/menu/apps/calendar.png");
App("Clock",1,"../apps/clock.html","images/icons/menu/apps/stopwatch.png");
App("Coin Flip",1,"../apps/coinflip/index.htm","images/icons/menu/games/mind.PNG");
App("Conversion Calc",1,"../apps/convcalc/index.htm","images/icons/menu/apps/conversioncalc.png");
App("Country Info",1,"../apps/countryinfo.htm","images/icons/menu/apps/country.png");
App("Day Born",1,"../apps/dayborn.htm","images/icons/menu/apps/calendar.png");
App("Day Organizer",1,"../apps/dayorganizer/index.html","images/icons/menu/apps/run.png");
App("Dice Roll",1,"../apps/dice.htm","images/icons/menu/games/yahtzee.png");
App("Digital Clock",1,"../apps/cl_dig.swf","images/icons/menu/apps/stopwatch.png");
App("Distance Calc",1,"../apps/distancecalc.htm","images/icons/menu/apps/distance.png");
App("Etch-A-Sketch",1,"../apps/sketch.swf","images/icons/menu/apps/paint.png");
App("Flash Calculator",1,"../apps/calc.swf","images/icons/menu/apps/calc.png");
App("Internet",1,"../apps/internet/index.htm","images/icons/menu/apps/ie.png");
App("JConsole",1,"../apps/console.htm","images/icons/menu/apps/run.png");
App("MSN Messenger",1,"../apps/msn/index.html","images/icons/menu/links/msnmessenger.png");
App("My PSP",1,"../apps/filebrowse/index.htm","images/icons/menu/cpanel.png");
App("Note List",1,"../apps/notelist/list.html","images/icons/menu/apps/texteditor.png");
App("Periodic Table",1,"../apps/periodictable.htm","images/icons/menu/apps/peri.png");
App("PhoneNo Conv.",1,"../apps/phoneno.htm","images/icons/menu/links/sms.png");
App("Pixel Fixer",1,"../apps/controlpanel/fixpix.htm","images/icons/menu/apps/pixfix.png");
App("PSPaint",1,"../apps/paint.swf","images/icons/menu/apps/paint.png");
App("PSPDF Viewer",1,"../apps/pspdf/index.html","images/icons/menu/apps/view.png");
App("PSPhone",1,"../apps/psphone.htm","images/icons/menu/links/sms.png");
App("PSPTunes",1,"../apps/psptunes/index.htm","images/icons/menu/psptunes.png");
App("Romen Num",1,"../apps/romnum.htm","images/icons/menu/apps/view.png");
App("State Info",1,"../apps/stateinfo.htm","images/icons/menu/apps/states.png");
App("Stop Watch",1,"../apps/stopwatch.htm","images/icons/menu/apps/stopwatch.png");
App("System Info",1,"../apps/controlpanel/system.htm","images/icons/menu/cpanel.png");
App("Text Editor",1,"../apps/texteditor/textedit.htm","images/icons/menu/apps/texteditor.png");
App("Update",1,"http://pspwxp.atspace.com/updates/"+intVersion+".htm","images/icons/menu/apps/update.png");
//END LIST (add new apps above here)
