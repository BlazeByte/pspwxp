var blnCursorShow = true;
var intPauses = 0;
var password = false;
var strPassword = "";
var onChange = "";
var blnCaps = false;
var blnShift = false;

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
				document.getElementById('inputbox').innerHTML = strText.slice(0,intCurrX) + '	 ' + strText.slice(intCurrX,strText.length);
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
	parent.currentText.innerHTML = strText;
	if(onChange.length>0) parent.eval(onChange);
}

function doExit(){
	parent.hideEditor();
}

function capslock(){
	if (blnCaps == false){
		for (var i = 0 ; i < document.keyboard.elements.length ; i++ ){
			if (document.keyboard.elements[i].value.length==1)
				document.keyboard.elements[i].value = document.keyboard.elements[i].value.toUpperCase();
		}
		blnCaps=true;	
	}else {
		for (var i = 0 ; i < document.keyboard.elements.length ; i++ ){
			if (document.keyboard.elements[i].value.length==1)
				document.keyboard.elements[i].value = document.keyboard.elements[i].value.toLowerCase();
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