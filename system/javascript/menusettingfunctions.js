function saveMenuItem(strMenu,strItem,strURL,strIconURL,intMax){
	saveSetting("mainmenuitems",strItem,strMenu+"^"+strURL+"^"+strIconURL+"^"+intMax);
}

function saveMenu(strMenu,strID,strIconURL){
	saveSetting("mainmenu",strMenu,strID+"^"+strIconURL);
}