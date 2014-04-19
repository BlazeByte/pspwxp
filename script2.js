function playSound(strURL){
	if(!(playSounds=='false')){
		frames['iSound'].location.href=strURL;
	}
}

function CheckPass(){
	if(txtPassword.value==icookies.document.getElementById('thepassword').value){
		showHideLayer('login','hidden');
		if(loaded==1){
			playSound('startsound.htm');
		}else{
			showHideLayer('boot','hidden');
		}
	}else{
		alert("Incorrect Password");
	}
}

function ApplySettings(){
	if(icookies.document.getElementById('scrtime').value==""){
		screensaverTime="10";
	}else{
		screensaverTime=icookies.document.getElementById('scrtime').value*2;
	}
	if(icookies.document.getElementById('screensaver').value==""){
		screensaver="none";
	}else{
		screensaver=icookies.document.getElementById('screensaver').value;
	}
	if(icookies.document.getElementById('desktopicons').value=="true"){
		for (i=0;i<strShortcuts.length;i++){
			showHideLayer('s'+i+'s','hidden');
		}
		showHideLayer('lIcons','hidden');
	}else{
		for (i=0;i<strShortcuts.length;i++){
			showHideLayer('s'+i+'s','visible');
		}
		showHideLayer('lIcons','visible');
	}
	document.body.style.background=icookies.document.getElementById('bgcolor').value;
	if(icookies.document.getElementById('chkbg').value=='true'){
		document.getElementById('imgDesktop').src=icookies.document.getElementById('bg').value;
	}else{
		if(icookies.document.getElementById('chkbg').value=='false'){
			document.getElementById('imgDesktop').src="images/space.gif";
		}else{
			if(icookies.document.getElementById('chkbg').value==''){
				document.getElementById('imgDesktop').src="images/desktop.jpg";
			}
		}
	}
	playSounds=icookies.document.getElementById('chkPlaySounds').value;
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
	document.getElementById('ATer').innerHTML=MessageTitle;
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

