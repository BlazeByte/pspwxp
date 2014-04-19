returnLoadStatus("Preparing Login functions...");

function confirmLogin(strPass){
	if(strPass==strPassword){
		showHideLogin('hidden');
		callSound("/sounds/start.swf");
	}else{
		alert("Incorrect Password");
	}
}



function showHideLogin(strStatus) {
	hideMenu();
	showHideLayer('lyLogin',strStatus);
	//showHideLayer('txtPassword','hidden');
	//showHideLayer('portalmenu','hidden');
}

function createLoginScreen () {
	
	document.write( 			   
		'<div id="lyLogin">'+
          '<table width="480" height="272" border="0" cellpadding="0" cellspacing="0">'+
            '<tr>'+
              '<td height="50" colspan="3" class="loginTitle">Encore Login</td>'+
            '</tr>'+
            '<tr>'+
              '<td height="172" colspan="3" align="center"><p><img alt="" width="70" height="70" id="imgUserlogin"></p>'+
                 '<table border="0" cellpadding="0" cellspacing="2">'+
				   '<tr>'+
				      '<td><div align="center" class="loginMed">Password:</div></td>'+
                   	  '<td><input name="txtPassword" type="password" id="txtPassword" style="height:18"></td><td><a href="#a"><img src="../theme/default/images/icons/go.png" alt="" name="btnG" width="20" height="20" border="0" onClick="confirmLogin(document.getElementById('+"'txtPassword'"+').value);"></a></td>'+
				   '</tr>'+
				 '</table>'+
                 '<br>'+
                '<table border="0" cellpadding="0" cellspacing="2">'+
					'<tr>'+
						'<td><img alt="" src="../theme/default/images/icons/mainmenu/internet.png" width="20" height="20" border="0"></td><td><a href="../apps/internet/firefox/index.htm" class="loginLink">Browse the internet</a></td>'+
					'</tr>'+
				'</table>'+
              '</td>'+
            '</tr>'+
            '<tr>'+
              '<td width="30%" height="50"><table border="0" cellpadding="0" cellspacing="2">'+
				'<tr>'+
					'<td>'+
						'<img src="../theme/default/images/icons/mainmenu/logout.png" width="20" height="20" border="0">'+
					'</td>'+
					'<td><span class="loginSmall"><a href="#a" onClick="'+"showHideLayer('txtPassword','hidden');showHideLayer('portalmenu','hidden');showHideLayer('lyShutdown','visible');showHideLayer('lyShutdowndlg','visible');shutdownFade();"+'">Shut Down</a></span></td></tr></table></td>'+
              '<td width="39%"></td>'+
              '<td width="58%"><table border="0" align="right" cellpadding="0" cellspacing="2">'+
					'<tr><td><span class="loginSmall"> Portal</span></td>'+
                    '<td><select name="portalmenu">'+
                    '<option selected>Select ---&gt;</option>'+
                    '<script language="javascript" type="text/javascript" src="../user/portallist.js"></script>'+
                  '</select></td>'+
              '<td><a href="#a"><img alt="" src="../theme/default/images/icons/go.png" width="20" height="20" name="cmdPassGo" border="0" onClick="document.location.href=portalmenu.value;"></a></td></tr></table> </td>'+
            '</tr>'+
      '</table>'+
	'</div>'
   );	// stop writing
	
}

createLoginScreen();