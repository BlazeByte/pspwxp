function showHideLayer(layerName,showHide){
	frames[layerName].style.visibility=showHide;
}

function ChangeDisplayPicture(){
	icookies.document.settings.iDisplayPicture.value=document.getElementById('FileDisplayPicture').value;
	icookies.document.settings.submit();
}

function CheckimgDisplayPicture40(){
	if(icookies.document.settings.iDisplayPicture.value==''){
		imgDisplayPicture40.src='Files/Images/Display_Pictures/Default.png';
	}else{
		imgDisplayPicture40.src=icookies.document.settings.iDisplayPicture.value;
	}
}

function CheckimgDisplayPicture80(){
	if(icookies.document.settings.iDisplayPicture.value==''){
		imgDisplayPicture80.src='Files/Images/Display_Pictures/Default.png';
	}else{
		imgDisplayPicture80.src=icookies.document.settings.iDisplayPicture.value;
	}
}

function CheckFileDisplayPicture(){
	if(icookies.document.settings.iDisplayPicture.value==''){
		FileDisplayPicture.value='Files/Images/Display_Pictures/Default.png';
	}else{
		FileDisplayPicture.value=icookies.document.getElementById('iDisplayPicture').value;
	}
}

function ChangeThemeDefault(){
	icookies.document.settings.iTheme.value='Default';
	icookies.document.settings.submit();
}

function ChangeThemeBlack(){
	icookies.document.settings.iTheme.value='Black';
	icookies.document.settings.submit();
}

function ChangeThemePink(){
	icookies.document.settings.iTheme.value='Pink';
	icookies.document.settings.submit();
}

function ChangeThemeSkyBlue(){
	icookies.document.settings.iTheme.value='SkyBlue';
	icookies.document.settings.submit();
}

function ChangeThemeLightPurple(){
	icookies.document.settings.iTheme.value='LightPurple';
	icookies.document.settings.submit();
}

function CheckTheme(){
	if(icookies.document.settings.iTheme.value==''){
		imgMenuBackground.src='Files/Images/Themes/Default/Menu_Background.png';
	}else{
		imgMenuBackground.src="Files/Images/Themes/"+icookies.document.getElementById('iTheme').value+"/Menu_Background.png";
	}
}

function CheckUserName(){
	if(icookies.document.settings.iUserName.value==''){
		UserNameFrame.document.write('<div style="position:absolute; left:0; top:0; width:115px; height:20px;">User!</div>');
	}else{
		UserNameFrame.document.write('<div style="position:absolute; left:0; top:0; width:115px; height:20px;">'+document.getElementById('FileUserName').value+'</div>');
	}
}

function CheckFileUserName(){
	if(icookies.document.settings.iUserName.value==''){
		FileUserName.value='User!';
	}else{
		FileUserName.value=icookies.document.getElementById('iUserName').value;
	}
}

function CheckimgUserName(){
	if(icookies.document.settings.iTheme.value==''){
		UserNameFrame.document.write('<div style="position:absolute; left:0; top:0; width:115px; height:20px;"><img width="115" height="20" src="Files/Images/Themes/Default/UserNameBG.png" border="0"></div>');
	}else{
		UserNameFrame.document.write('<div style="position:absolute; left:0; top:0; width:115px; height:20px;"><img width="115" height="20" src="Files/Images/Themes/'+icookies.document.getElementById('iTheme').value+'/UserNameBG.png" border="0"></div>');
	}
}

function ChangeUserName(){
	icookies.document.settings.iUserName.value=document.getElementById('FileUserName').value;
	icookies.document.settings.submit();
	UserNameFrame.location='Files/UserName.htm';
	setTimeout("CheckUserName();",1000);
	setTimeout("CheckimgUserName();",1000);
}