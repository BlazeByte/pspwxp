function CheckPass(){
	if(txtPassword.value==icookies.document.getElementById('thepassword').value){
		login.style.visibility='hidden';
		if(document.getElementById('login').style.visibility=='hidden'){
			frames['istartSound'].location.href='startsound.htm';
		}
	}else{
		alert("Incorrect Password");
	}
}

function ApplySettings(){
	if(icookies.document.getElementById('scrtime').value==""){
		var screensaverTime="10";
	}else{
		var screensaverTime=icookies.document.getElementById('scrtime').value;
	}
	if(icookies.document.getElementById('screensaver').value==""){
		var screensaver="none";
	}else{
		var screensaver=icookies.document.getElementById('screensaver').value;
	}
	if(icookies.document.getElementById('desktopicons').value=="false"){
		for (i=0;i<strShortcuts.length;i++){
			showHideLayer('s'+i+'s','hidden');
		}
		showHideLayer('lIcons','hidden');
	}
	document.bgcolor=icookies.document.getElementById('bgcolor').value;
	if(icookies.document.getElementById('chkbg').value=='true'){
		document.getElementById('imgDesktop').src=icookies.document.getElementById('bg').value;
	}else{
		if(icookies.document.getElementById('chkbg').value=='false'){
			document.getElementById('imgDesktop').src="images/space.gif";
		}
	}
}

function windowMaxNow(MaxURL){
	if(!(frames['iprogMax'].location.href==MaxURL)){
		frames['iprogMax'].location.href=MaxURL;
		if(frameAddress.slice(-18)=="internet/index.htm"){
			document.getElementById('iprogMax').document.frames['Content'].location.href=frames['progman'+activewindow].document.frames['Content'].location.href;
		}
	}
}

function winMessage(MessageTitle,MessageIcon,MessageHTML){
	showHideLayer('tabWarn','visible');
	document.getElementById('AT').innerHTML=MessageTitle;
	document.getElementById('AlIcon').src=MessageIcon;
	showHideLayer('lyShutdown','visible');
	shutdownFade();
}

function openInBrowser(Iurl){
	openedLink=Iurl;
	setTitle("1","Internet","apps/internet/index.htm","images/icons/menu/apps/ie.png",0);
}

function sendSearchForm(){
	setTitle("1","Internet","apps/internet/index.htm","images/icons/menu/apps/ie.png",0);
	var searchWindow="progman"+activewindow;
	document.getElementById('searchForm').target=searchWindow;
	document.getElementById('searchForm').submit();
}

