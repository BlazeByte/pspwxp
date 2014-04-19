var currentText;
var ikeyboard = top.frames['ikeyboard'];
var useKB = true;
var kbOnChangeCode = "";

function drawInput(strType, strID, strValue, onChange, strCSS) {
	if (!strValue) var strValue = "";
	if (!strCSS) var strCSS = ""
	if (!onChange) var onChange = "";
	
	onChange = onChange.replace(/\"/g,'\\\'');
	onChange = onChange.replace(/\'/g,'\\\'');
	
	if(strValue=='') strValue = "Click here to set.";
	
	switch (strType){
		case "text":
			if(!useKB){
				document.write('<input type="text" name="textbox" id="'+strID+'" style="'+strCSS+'" onchange="document.getElementById(\''+strID+'\').text=document.getElementById(\''+strID+'\').value;" value="'+strValue+'" />');
				document.getElementById(strID).text=document.getElementById(strID).value;
			}else{
				onChange="document.getElementById(\\'"+strID+"\\').text=document.getElementById(\\'"+strID+"\\').innerHTML;"+onChange;
				document.write('<a href="javascript:;" name="inputbox"> ' 
								   + '<div class="textbox" name="textbox" id="'+strID+'" style="'+strCSS+'" ' 
								   +  'onclick="kbOnChangeCode = \''+onChange+'\' ;showEditor(this.id);">' 
								   +  strValue 
								   + '</div>' 
							   + '</a>');
				document.getElementById(strID).text=document.getElementById(strID).innerHTML;
			}
			
			break;
		
		case "password":
			if(!useKB){
				document.write('<input type="password" name="textbox" id="'+strID+'" style="'+strCSS+'" onchange="document.getElementById(\''+strID+'\').text=ikeyboard.strPassword;" value="'+strValue+'" />');
				document.getElementById(strID).text=strValue;
			}else{
				onChange="document.getElementById(\\'"+strID+"\\').text=ikeyboard.strPassword;"+onChange;
				var strPassValue = "";
				for (var intChar = 0 ; intChar < strValue.length ; intChar++) {
					strPassValue+="*";
				}
				
				document.write('<a href="javascript:;" name="inputbox"> ' 
								   + '<div class="textbox" name="textbox" id="'+strID+'" style="'+strCSS+'" ' 
								   +  'onclick="kbOnChangeCode = \''+onChange+'\' ;showEditor(this.id,true);">' 
								   +  strPassValue 
								   + '</div>' 
							   + '</a>');
				document.getElementById(strID).text=strValue;
			}
			
			break;
			
		case "button":
			break;
			
	}
	
	
}

function kbOnChange(){
	eval(kbOnChangeCode);
}


function showEditor(strID, blnPass){
	ikeyboard.currentOrigin = self;
	ikeyboard.currentText = self.document.getElementById(strID);
		
	if (!blnPass){
		ikeyboard.password = false;
		ikeyboard.document.getElementById("inputbox").innerHTML = (document.getElementById(strID).innerHTML!="Click here to set.") ? document.getElementById(strID).innerHTML : ikeyboard.document.getElementById("inputbox").innerHTML = "";
	} else { 
		ikeyboard.password = true;
		ikeyboard.strPassword = "";
		ikeyboard.document.getElementById("inputbox").innerHTML = "";
			
	}
	
	ikeyboard.intCurrX = ikeyboard.document.getElementById("inputbox").innerHTML.length;
	top.document.getElementById('keyboard').style.visibility='visible';
}
