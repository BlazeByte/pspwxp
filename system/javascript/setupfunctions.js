var intCurrent=0;

var screens = new Array("intro","terms","user","security","sound","finish");
var intScreen=screens.length;

function nav(intNav){
	document.getElementById(screens[intCurrent]).style.visibility="hidden";
	intCurrent=intCurrent+intNav;
	document.getElementById(screens[intCurrent]).style.visibility="visible";
	document.getElementById("next").disabled = (intCurrent == intScreen-1) ? true : false;
	document.getElementById("fin").disabled = (intCurrent == intScreen-1) ? false : true;
	document.getElementById("prev").disabled = (intCurrent == 0) ? true : false;
	
	switch(intCurrent){
		case 1:
			document.getElementById("next").disabled = (document.getElementById("chkLicense").checked==false) ? true : false;
			break;
		case 2:
			document.getElementById("next").disabled = (document.getElementById("username").innerHTML.length<2) ? true : false;
			break;
		case 3:
			break;
	}
}

function exit(){
	if(confirm("Are you sure you wish to exit? Setup will begin again next time you start Encore.")) location="blank.htm";
}

function doFinish(){
	writeSettings();
	setTimeout("window.top.location='../index.htm'",500);
}

function licenseAgree(agree){
	document.getElementById("next").disabled = (agree == true) ? false : true ;
}

function username_onChange() {
	document.getElementById("next").disabled = (document.getElementById("username").innerHTML.length<2) ? true : false;
}

function bbMember(member) {
	document.getElementById("bbusername").disabled = (member == true) ? false : true;
	document.getElementById("bbpassword").disabled = (member == true) ? false : true;
}

function writeSettings(){
	saveSetting("main","username",document.getElementById("username").value);
	saveSetting("main","blazebyteuser",document.getElementById("bbpassword").value);
	saveSetting("main","blazebytepass",document.getElementById("bbpassword").value);
	saveSetting("main","password",document.getElementById("txtPassword1").value);
	saveSetting("main","sounds",document.getElementById("sounds").value);
	saveSetting("main","theme","default");
	saveSetting("main","bgimage","default");
	saveSetting("main","bgcolor","#000000");
	saveSetting("main","usebgimage","true");
	saveSetting("main","desktopicons","true");
	saveSetting("main","usecreensaver","true");
	saveSetting("main","screensaver","default");
	saveSetting("main","screensavertimeout","120");
	saveSetting("main","screensaverlogout","true");
	saveSetting("main","loginscreen",(document.getElementById("txtPassword1").value == "") ? "false" : "true");
	saveSetting("main","memorysafe","true");
	saveSetting("main","autoclock","true");
	storeSettings();
}