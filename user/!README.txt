The user Folder
===============

The user folder contains various files that you can modify to customize Encore. 

Explaination of files:
	- games.js - This file contains a list of every game that appears on the Games menu
	- apps.js - A list of Apps on the Applications menu
	- links.js - The links that appear on the Links menu
	- shortcuts.js - This file has a list of all the desktop shortcuts
	

How to add games or applications:
---------------------------------
This shows how to add a game to the Games menu. The same steps can be taken for adding to the Apps menu, except edit
the apps.js instead of the games.js. You will 

	- Open games.js in a text editor such as Notepad
	- Create new line in the list section
	- Type the following, replacing the letters with details of the game
		MenuItem("A","Game URL","Icon URL",1);
		
		What do I change the letters to?
		A is the Game name. This can be anything you wish and can include spaces.
				 
		B is the Game URL, this tells the Portal where to find the game. This should be something along the lines of 
			"../pong/index.htm"
			
		C is the Icon URL. This should be something similar to "images/icons/menu/games/pong.png". You will need to 
			create an icon or use an icon supplied with Encore if the game didn't come with one.
		
		D is the Window state. Usually you want to keep this as 1 (maximized) for games and 0 (normal) for applications.
			Window state modes:
			0 = open normally.
			1 = open maximized (full screen).
			10 = open in new tab on the PSP. This saves memory.
			11 = open maximized, but without the maximize message. This is usually just used on screensavers, since 
				 the maximize message can be turned off in the control panel
				 
	- In the end, it should look similar to this:
		MenuItem("Pong!",1,"../games/pong/index.htm","images/icons/menu/games/pong.png",0);