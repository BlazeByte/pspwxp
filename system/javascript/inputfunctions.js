var textboxes = document.getElementsByName("textbox");

for (var i = 0 ; i<textboxes.length ; i++ ) {
	textboxes[i].onclick=showEditor;
}

var textboxes = document.getElementsByName("passbox");

for (var i = 0 ; i<textboxes.length ; i++ ) {
	textboxes[i].onclick=showPasswordEditor;
}

var currentText;

function doOnChange(strID){
	if (strID == Array("username"))
		eval(strID+"_onChange();");
}

function showPasswordEditor() {
	currentText = this;
	
	ikeyboard.onChange = "doOnChange('"+this.id+"')";
	
	ikeyboard.password = true;
	ikeyboard.document.getElementById("inputbox").innerHTML = "";
	ikeyboard.intCurrX = 0;
		
	document.getElementById('keyboard').style.visibility='visible';
	document.getElementById('body').style.visibility='hidden';
}

function showEditor(){
	currentText = this;
	
	ikeyboard.onChange = "doOnChange('"+this.id+"')";
	
	ikeyboard.password = false;
	
	if(currentText.innerHTML!=" ") {
		ikeyboard.document.getElementById("inputbox").innerHTML = currentText.innerHTML;
		ikeyboard.intCurrX = currentText.innerHTML.length;
	} else {
		ikeyboard.document.getElementById("inputbox").innerHTML = "";
		ikeyboard.intCurrX = 0;
	}
	document.getElementById('keyboard').style.visibility='visible';
	document.getElementById('body').style.visibility='hidden';
}

function hideEditor(){
	document.getElementById('body').style.visibility='visible';
	document.getElementById('keyboard').style.visibility='hidden';
}