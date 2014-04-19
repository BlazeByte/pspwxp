var themeName = new Array;
var themeURL = new Array;
var intTheme = 0;

function Theme(strThemeName,strThemeURL){
	themeName[intTheme]=strThemeName;
	themeURL[intTheme]=strThemeURL;
	intTheme++;
}

//BEGIN LIST
Theme("Vista (Default)","theme_vista");
Theme("XP Luna","theme_luna");
Theme("Vista Clear","theme_vistaclear");
Theme("Xbox 360","theme_xbox360");
Theme("MAC OS X","theme_MAC");
Theme("SuSE linux Gnome","theme_SuSE");
Theme("Tech Theme","theme_techno");
Theme("chrisw92 matrix","theme_chrisw92matrix");
Theme("Crystal","theme_crystal");
Theme("DS","theme_DS");
Theme("Ferrari","theme_Ferrari");
Theme("KDE","theme_linuxkde");
Theme("Tech/vista MIX","theme_MIX");
Theme("Netscape","theme_netscape");
Theme("P!nk","theme_P!nk");
Theme("Playstation","theme_playstation");
Theme("Wii","theme_wii");
Theme("Windows 98","theme_win98");
Theme("XP silver","theme_xpsilver");
Theme("Chaos X blood Vista","theme_ChaosXbloodvista");
Theme("Snookemx Darkstar","theme_snookemxDarkstar");
Theme("Snookemx Invader","theme_snookemxInvader");
Theme("Snookemx Xeno Morph","theme_snookemxXenoMorph");
//END LIST

for (i=0;i<themeName.length;i++){
	document.write("<option value="+themeURL[i]+">"+themeName[i]+"</option>");
}