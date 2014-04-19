Themes
======

The '/theme' folder contains the themes for Encore.

To add a theme:
	1. Download or create the theme. 
	2. Copy the theme folder into the '/theme' folder. 
	3. Open 'themes.js' in notepad. At the bottom, add a new line.
	4. Type the following, replacing the letter for what the theme you have installed:
		addTheme("A");
		
		What do I put instead of A?
		A is in the place of the Theme Directory. For example, if you installed the theme '/gnome', you would replace A for /gnome
		
		So if you were installing the Gnome theme, you would end up with
		addTheme("/gnome");
		
	Notes:
		- Always remember to put the directory in quotes! or otherwise Encore may cuase to work altogether!
		- The semicolon at the end is also very important. Don't forget it!
		- Avoid spaces where possible. The directories are much better without spaces. 
			For example, use "/windows_xp" instead of "windows xp"
		- To remove a theme, just remove the one line that the theme is on
		- DO NOT edit any other part of the file unless you know what you are doing!