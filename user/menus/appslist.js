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
App("About PspWxp",1,"../apps/about.htm","../images/icons/menu/apps/about.png",0);
App("Alarm Clock",1,"../apps/alarm_clock.swf","../images/icons/menu/apps/alarmclock.png",0);
App("Analog Clock",1,"../apps/analog_clock.swf","../images/icons/menu/apps/analogclock.png",0);
App("AntiVirus",1,"../apps/antivirus/index.html","../images/icons/menu/apps/antivirus.png",0);
App("Basic Calc",1,"../apps/basiccalculator.htm","../images/icons/menu/apps/bcalculator.png",0);
App("Browser Info",1,"../apps/browserinfo.htm","../images/icons/menu/apps/browsinfo.png",0);
App("Calender",1,"../apps/calender.htm","../images/icons/menu/apps/calendar.png",0);
App("Clock",1,"../apps/clock.htm","../images/icons/menu/apps/clock.gif",0);
App("Coin Flip",1,"../apps/coinflip/index.htm","../images/icons/menu/apps/coinflip.png",0);
App("Conversion Calc",1,"../apps/convcalc/index.htm","../images/icons/menu/apps/conversioncalc.png",0);
App("Country Info",1,"../apps/countryinfo.htm","../images/icons/menu/apps/countryinfo.png",0);
App("Day of birth",1,"../apps/dayofbirth.htm","../images/icons/menu/apps/dayofbirth.png",0);
App("Day Organizer",1,"../apps/dayorganizer/index.html","../images/icons/menu/apps/dayorganizer.png",0);
App("Dice Roll",1,"../apps/dice.htm","../images/icons/menu/apps/dice.gif",0);
App("Distance Calc",1,"../apps/distancecalc.htm","../images/icons/menu/apps/distancecalc.png",0);
App("Internet",1,"../apps/internet/index.htm","../images/icons/menu/apps/ie.png",0);
App("MSN Messenger",1,"../apps/msn/index.htm","../images/icons/menu/apps/msnmessenger.png",0);
App("Note List",1,"../apps/notelist/list.html","../images/icons/menu/apps/notelist.png",0);
App("Percentage Calc",1,"../apps/percentagecalc.htm","../images/icons/menu/apps/percentagecalc.png",0);
App("Periodic Table",1,"../apps/periodictable.htm","../images/icons/menu/apps/periodictable.png",0);
App("PhoneNum Conv",1,"../apps/phonenumconv.htm","../images/icons/menu/apps/phonenumconv.png",0);
App("Pixel Fixer",1,"../controlpanel/fixpix.htm","../images/icons/menu/apps/pixelfixer.png",0);
App("PSPaint",1,"../apps/paint.swf","../images/icons/menu/apps/paint.png",1);
App("PSPDF Viewer",1,"../apps/pspdf/index.html","../images/icons/menu/apps/pspdfviewer.png",0);
App("PSPhone",1,"../apps/psphone.htm","../images/icons/menu/apps/psphone.gif",0);
App("RomanNum Conv",1,"../apps/romannumconv.htm","../images/icons/menu/apps/romannumconv.gif",0);
App("Schedule",1,"../apps/schedule.htm","../images/icons/menu/apps/schedule.png",0);
App("Scientific Calc",1,"../apps/scientificcalculator.htm","../images/icons/menu/apps/scalculator.png",0);
App("State Info",1,"../apps/stateinfo.htm","../images/icons/menu/apps/stateinfo.png",0);
App("Stop Watch",1,"../apps/stopwatch.htm","../images/icons/menu/apps/stopwatch.png",0);
App("System Info",1,"../controlpanel/system.htm","../images/icons/menu/apps/systeminfo.gif",0);
App("Text Editor",1,"../apps/texteditor/textedit.htm","../images/icons/menu/apps/texteditor.png",0);
App("Timeline",1,"../apps/timeline.swf","../images/icons/menu/apps/timeline.png",0);
App("Update",1,"../controlpanel/updates.htm","../images/icons/menu/apps/updates.png",0);
//END LIST (add new apps above here)
