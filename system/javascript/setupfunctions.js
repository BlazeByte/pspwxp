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
			document.getElementById("next").disabled = ((document.getElementById("username").text.length<2)||(document.getElementById("username").text=="Click here to set.")) ? true : false;
			break;
		
		case 3:
			checkPass();
			break;
		case 4:
			if(document.getElementById("passwordtrue").checked) if(!confirmPass()) nav(-1);
			break;
			
	}
}

function exit(){
	if(confirm("Are you sure you wish to exit? Setup will begin again next time you start Encore.")) location="blank.htm";
}

function checkPass(){
	if(document.getElementById("passwordtrue").checked) {
		document.getElementById("next").disabled = (document.getElementById("txtPassword1").text.length<2) ? true : false;
	}else document.getElementById("next").disabled = false;
}

function confirmPass(){
	if(document.getElementById("txtPassword1").text!==document.getElementById("txtPassword2").text){
		alert("The Passwords do not match.");
		return false;
	}else{
		if ((document.getElementById("txtPassword1").text=="Click here to set.")||(document.getElementById("txtPassword1").text=="")) {
			alert("Please enter a password or select 'No'.");
			return false
		} else return true;
	}
}

function doFinish(){
	writeSettings();
	setTimeout("window.top.location='../index.htm'",500);
}

function licenseAgree(agree){
	document.getElementById("next").disabled = (agree == true) ? false : true ;
}

function bbMember(member) {
	document.getElementById("bbusername").disabled = (member == true) ? false : true;
	document.getElementById("bbpassword").disabled = (member == true) ? false : true;
}

function writeSettings(){
	saveSetting("main","beta","true");
	saveSetting("main","username",document.getElementById("username").text);
	saveSetting("main","blazebyteuser",document.getElementById("bbpassword").text);
	saveSetting("main","blazebytepass",document.getElementById("bbpassword").text);
	saveSetting("main","«password",(document.getElementById("passwordtrue").checked)?document.getElementById("txtPassword1").text:"");
	saveSetting("main","sounds",document.getElementById("soundstrue").checked);
	saveSetting("main","theme","default");
	saveSetting("main","bgimage","default");
	saveSetting("main","bgcolor","#000000");
	saveSetting("main","usebgimage","true");
	saveSetting("main","desktopicons","true");
	saveSetting("main","usescreensaver","true");
	saveSetting("main","screensaver","default");
	saveSetting("main","screensavertimeout","120");
	saveSetting("main","screensaverlogout","true");
	saveSetting("main","loginscreen",(document.getElementById("txtPassword1").text == "") ? "false" : "true");
	saveSetting("main","memorysafe","true");
	saveSetting("main","autoclock","true");
	storeSettings();
}