var strLinks = new Array;
var intLinksPath = new Array;
var strLinksIconPath = new Array;
var strLinkNewWindow = new Array;
var intLink=0;

function Link(LinkName,LinkURL,IconPath,NewWindow){
	strLinks[intLink]=LinkName;
	intLinksPath[intLink]=LinkURL;
	strLinksIconPath[intLink]=IconPath;
	strLinkNewWindow[intLink]=NewWindow;
	intLink=intLink+1;
}

Link("Google","http://www.google.com/","../images/icons/menu/links/google.png",0);
Link("Web Messenger","http://mob.e-messenger.net/mobile/","../images/icons/menu/links/msnmessenger.png",0);
Link("WebAim","http://www.webaim.net","../images/icons/menu/links/aolmessenger.png",0);
Link("PSPAIM","http://www.pspaim.com","../images/icons/menu/links/aolmessenger.png",0);
Link("PSPMSN","http://www.pspmsn.com","../images/icons/menu/links/msn.png",0);
Link("Yahoo msgr","http://www.pspyim.com","../images/icons/menu/links/yahoomessenger.png",0);
Link("IRC Messenger","http://www.pspirc.com","../images/icons/menu/links/irc.png",0);
Link("GMail","http://www.gmail.com/","../images/icons/menu/links/gmail.png",1);
Link("Hotmail","http://www.hotmail.com","../images/icons/menu/links/hotmail.gif",1);
Link("YourPSP","http://yourpsp.com","../images/icons/menu/links/playstation.png",0);
Link("Pixles Mag","http://www.mypsphomepage.com/gb/chriswinter","../images/icons/menu/links/playstation.png",0);
Link("Music","http://www.pspdd.com/index.php?subcat=1","../images/icons/menu/psptunes.png",0);
Link("Videos","http://www.pspdd.com/index.php?subcat=2","../images/icons/menu/vid.png",0);
Link("Free Texting","http://www.cbfsms.com/","../images/icons/menu/links/sms.png",0);
Link("PSPTunes","http://pspwxp.jetpage.biz/itunes/","../images/icons/menu/psptunes.png",0);
Link("PSP Portals","http://www.pspportals.uni.cc/","../images/icons/menu/links/playstation.png",0);
Link("PSP EasyURL","http://pspwxp.jetpage.biz/psp/","../images/icons/menu/links/pspwxp.png",0);