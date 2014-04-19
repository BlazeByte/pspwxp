var blnCursorShow = true;
var intPauses = 0;
var password = false;
var strPassword = "";
var onChange = "";
var blnCaps = false;
var blnShift = false;
var mode = 0;
var blnSettingup = true;
var currentText;
var currentOrigin;

function kbMode(){
	mode = (mode==2) ? 0 : mode+1 ;
	switch (mode) {
		case 0: //normal
			break;
		case 1: //address
			break;
		case 2: //numeric
			break;
	}
}

function kbCursorBlink(){
	var strText = document.getElementById('inputbox').innerHTML;
	if(blnCursorShow==true){
		document.getElementById('inputbox').innerHTML = strText.replace(/\|/g, ".");
		blnCursorShow=false;
	}else{
		document.getElementById('inputbox').innerHTML = strText.slice(0,intCurrX) + '|' + strText.slice(intCurrX+1,strText.length);
		blnCursorShow=true;
	}
}

function pauseKbCursorBlink(){
	if(intPauses == 5) {
		kbCursorBlink();
		intPauses = 0;
	}
	intPauses++;
	setTimeout("pauseKbCursorBlink();",100);
}


function moveCursor(intX){
	var strText = document.getElementById('inputbox').innerHTML;
	if((intX<0)||(intX>strText.length-1)) return;
	intPauses=2;
	blnCursorShow=true;
	strText = strText.slice(0,intCurrX) + strText.slice(intCurrX+1,strText.length);

	document.getElementById('inputbox').innerHTML = strText.slice(0,intX) + '|' + strText.slice(intX,strText.length);
	intCurrX = intX;
}


function kbType(strChar, strCmd){
	var strText = (password) ? strPassword : document.getElementById('inputbox').innerHTML;
	intPauses=2;
	blnCursorShow=true;
	
	if (!password) strText = strText.slice(0,intCurrX) + "|" + strText.slice(intCurrX+1,strText.length);
	
	if (strChar==0) {
		switch(strCmd) {
			case "bkspace":
				if(intCurrX==0) return;
				if (password) {
					strPassword = strText.slice(0,intCurrX-1) + strText.slice(intCurrX,strText.length);
					var strText = document.getElementById('inputbox').innerHTML;
					document.getElementById('inputbox').innerHTML = strText.slice(0,intCurrX-1) + strText.slice(intCurrX,strText.length);
				}else{
					document.getElementById('inputbox').innerHTML = strText.slice(0,intCurrX-1) + strText.slice(intCurrX,strText.length);
				}
				intCurrX--;
				break;
			
			case "clear":
				if(confirm("Are you sure want to clear the text box?")){
					document.getElementById('inputbox').innerHTML = "";
					intCurrX=0;
				}
				break;
				
		}
	} else {
		
		if (password) {
			strPassword = strText.slice(0,intCurrX) + strChar + strText.slice(intCurrX,strText.length);
			var strText = document.getElementById('inputbox').innerHTML;
			document.getElementById('inputbox').innerHTML = strText.slice(0,intCurrX) + "*" + strText.slice(intCurrX,strText.length);
		} else {
			if (strChar=="space") {
				document.getElementById('inputbox').innerHTML = strText.slice(0,intCurrX) + ' ' + strText.slice(intCurrX,strText.length);
			}else document.getElementById('inputbox').innerHTML = strText.slice(0,intCurrX) + strChar + strText.slice(intCurrX,strText.length);
		}
		intCurrX+=document.getElementById('inputbox').innerHTML.length-strText.length;
	}
	if (blnShift==true) {doShift();}
}

function doOk(){
	doExit();
	
	var strText = document.getElementById('inputbox').innerHTML;
	strText = strText.slice(0,intCurrX) + strText.slice(intCurrX+1,strText.length);
	currentText.innerHTML = strText;
	currentOrigin.kbOnChange(); 
}

function doExit(){
	top.document.getElementById('keyboard').style.visibility = 'hidden';
}

function capslock(){
	var kbKeys = document.getElementsByName("key");
	if (blnCaps == false){
		for (var i = 0 ; i < kbKeys.length ; i++ ){
			if (kbKeys[i].innerHTML.length==1)
				kbKeys[i].innerHTML = kbKeys[i].innerHTML.toUpperCase();
		}
		blnCaps=true;	
	}else {
		for (var i = 0 ; i < kbKeys.length ; i++ ){
			if (kbKeys[i].innerHTML.length==1)
				kbKeys[i].innerHTML = kbKeys[i].innerHTML.toLowerCase();
		}
		blnCaps=false;
	}
}

function doShift(){
	capslock();
	blnShift=(blnShift==false)?true:false;
	changeShiftStyle();
}

function changeShiftStyle(){
	var a = document.getElementsByName("shift")
	
	for (var i = 0 ; i < a.length ; i++ ){
		a[i].style.color=(blnShift==true)?"#ff0000":"#000000";
	}
}