//User List - Do not delete any lines beginning with //
//to add an application to the list: on a new line in the list section, add User("User name",1,"User URL",Icon URL);
//for more detailed instructions, visit http://pspwxp.co.nr/

var strUser = new Array;
var intUserMinMax = new Array;
var intUserPath = new Array;
var strUserIconPath = new Array;
var intUser = 0;

function User(UserName,MinMax,UserPath,IconPath,StartMax){
	strUser[intUser]=UserName;
	intUserMinMax[intUser]=MinMax;
	intUserPath[intUser]=UserPath;
	strUserIconPath[intUser]=IconPath;
	intUser=intUser+1;
}

//BEGIN LIST (add new apps below here)
User("Instructions",1,"user/instructions.txt","images/icons/menu/user/instructions.png");
User("My Addition",1,"user/addition.html","images/icons/menu/user/user.png");
User("My Addition",1,"user/addition.html","images/icons/menu/user/user.png");
User("My Addition",1,"user/addition.html","images/icons/menu/user/user.png");
User("My Addition",1,"user/addition.html","images/icons/menu/user/user.png");
User("My Addition",1,"user/addition.html","images/icons/menu/user/user.png");
User("My Addition",1,"user/addition.html","images/icons/menu/user/user.png");
User("My Addition",1,"user/addition.html","images/icons/menu/user/user.png");
User("My Addition",1,"user/addition.html","images/icons/menu/user/user.png");
User("My Addition",1,"user/addition.html","images/icons/menu/user/user.png");
User("My Addition",1,"user/addition.html","images/icons/menu/user/user.png");
User("My Addition",1,"user/addition.html","images/icons/menu/user/user.png");
//END LIST (add new apps above here)
