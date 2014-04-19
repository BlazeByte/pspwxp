var TaskbarHide ;
var tabopen='false';
var tab2open='false';
var tab3open='false';
var activewindow="";

function openTab(windowNo){
	MM_showHideLayers('menu','','hide','mapps','','hide','progwin'+windowNo,'','show','winexit'+windowNo,'','show','programs'+windowNo,'','show','winmax'+windowNo,'','show','winmin'+windowNo,'','show');
	MM_swapImage('imgTab'+windowNo,'','images/window/tab_down.gif',1);
	if(!(windowNo=="")){windowMin("")};
	if(!(windowNo==2)){windowMin(2)};
	if(!(windowNo==3)){windowMin(3)};
}

function windowExit(windowNo){
	MM_showHideLayers('Change','','hide','menu','','hide','mlinks','','hide','mlaim','','hide','mpspwxp','','hide','mlmsn','','hide','mlyahoo','','hide','mlirc','','hide','mgames','','hide','mapps','','hide','startoff','','show','winmax'+windowNo,'','hide');
	if(windowNo==''){
		closeWindow('');
		tabopen='false';
		if(tab2open=='true'){
			if(tab3open=='true'){
				copyWindow(3,2);
			}
			copyWindow(2,'');
		}else{
			if(tab3open=='true' && frames['tab3'].style.left=='197px'){
				frames['tab3'].style.left='84px';
			}
		}
	}
	
	if(windowNo==2){
		closeWindow(2);
		tab2open='false';
		if(tab3open=='true'){
			copyWindow(3,2);
		}
	}
	
	if(windowNo==3){
		closeWindow(3);
		tab3open='false';
	}
}

function copyWindow(Source,Destination){
	var sourceTab='tab'+Source;
	var destinationTab='tab'+Destination;
	frames[sourceTab].style.left=frames[destinationTab].style.left;
}

function closeWindow(windowNo){
	frames['progman'+windowNo].location.href='blank.htm';
	MM_showHideLayers('tab'+windowNo,'','hide','tabinfo'+windowNo,'','hide','progwin'+windowNo,'','hide','winexit'+windowNo,'','hide','programs'+windowNo,'','hide','winmin'+windowNo,'','hide');
	if(windowNo==''){var intLeft='84px'}
	if(windowNo==2){var intLeft='197px'}
	if(windowNo==3){var intLeft='310px'}
	frames['tab'+windowNo].style.left=intLeft;
}

function windowMax(windowNo){
	location.href=frames['progman'+windowNo].location.href;
}

function windowMin(windowNo){
	MM_showHideLayers('bgChange','','hide','menu','','hide','mlinks','','hide','mlaim','','hide','mpspwxp','','hide','mlmsn','','hide','mlyahoo','','hide','mlirc','','hide','mgames','','hide','mapps','','hide','progwin'+windowNo,'','hide','winexit'+windowNo,'','hide','programs'+windowNo,'','hide','startoff','','show','winmax'+windowNo,'','hide','winmin'+windowNo,'','hide');MM_swapImage('imgTab'+windowNo,'','images/window/tab.gif',1)
}

function TaskbarShow(){
	MM_showHideLayers('Taskbar','','show','startoff','','show','lDetect','','hide');
	if(tabopen=="true"){
		MM_showHideLayers('tab','','show','tabinfo','','show')
	}
}

function hidetaskbar(){
	if(TaskbarHide=="true"){
		if(menu.style.visibility=="hidden"){
			MM_showHideLayers('Taskbar','','hide','startoff','','hide','tab','','hide','tabinfo','','hide','lDetect','','show');
		}		
	}
}

function setTitle(blncontrol,ProgramTitle, ProgramLocation, ProgramIcon){
	MM_showHideLayers('menu','','hide','mlinks','','hide','mlaim','','hide','mpspwxp','','hide','mlmsn','','hide','mlyahoo','','hide','mlirc','','hide','mgames','','hide','mapps','','hide','startoff','','show');
	var tabspace1='true';
	if(tabopen=='true' && frames['tab'].style.left=='84px'){
		tabspace1='false';
	}else{
		if(tab2open=='true' && frames['tab2'].style.left=='84px'){
			tabspace1='false';
		}else{
			if(tab3open=='true' && frames['tab3'].style.left=='84px'){
				tabspace1='false';
			}
		}
	}
	
	var tabspace2='true';
	if(tabopen=='true' && frames['tab'].style.left=='197px'){
		tabspace2='false';
	}else{
		if(tab2open=='true' && frames['tab2'].style.left=='197px'){
			tabspace2='false';
		}else{
			if(tab3open=='true' && frames['tab3'].style.left=='197px'){
			tabspace2='false';
			}
		}
	}
	
	var tabspace3='true';
	if(tabopen=='true' && frames['tab'].style.left=='310px'){
		tabspace3='false';
	}else{
		if(tab2open=='true' && frames['tab2'].style.left=='310px'){
			tabspace3='false';
		}else{
			if(tab3open=='true' && frames['tab3'].style.left=='310px'){
			tabspace3='false';
			}
		}
	}
	
	var emptytab = "";
	if(tabspace1=='true'){
		emptytab="";
		tabopen='true';
	}else{
		if(tabspace2=='true'){
			if(tabopen=='false'){
				tabopen='true';
				emptytab="";
			}else{
				if(tab2open=='false'){
					tab2open='true';
					emptytab=2;
				}else{
					tab3open='true';
					emptytab=3;
				}
			}
			frames['tab'+emptytab].style.left='197px';
		}else{
			if(tabopen=='false'){
				tabopen='true';
				emptytab="";
			}else{
				if(tab2open=='false'){
					tab2open='true';
					emptytab=2;
				}else{
					if(tab3open=='false'){
						tab3open='true';
						emptytab=3;
					}else{
						//warn user window 3 will be overwritten
					}
				}
			}
			frames['tab'+emptytab].style.left='310px';
		}
	}
	showWindow(emptytab,ProgramLocation,ProgramIcon,blncontrol,ProgramTitle);
}

function showWindow(windowNo,ProgramLocation,ProgramIcon,blncontrol,ProgramTitle){
	document.getElementById('aT'+windowNo).innerHTML=ProgramTitle;
	document.getElementById('tT'+windowNo).innerHTML=ProgramTitle.slice(0,14);
	frames['progman'+windowNo].location.href=ProgramLocation;
	MM_swapImage('windowsicon'+windowNo,'',ProgramIcon,1);
	MM_swapImage('tI'+windowNo,'',ProgramIcon,1);
	MM_swapImage('imgTab'+windowNo,'','images/window/tab_down.gif',1);
	activewindow=windowNo
	if(!(windowNo=="")){windowMin("")};
	if(!(windowNo==2)){windowMin(2)};
	if(!(windowNo==3)){windowMin(3)};
	if(TaskbarHide=="true"){
		MM_showHideLayers('tab'+windowNo,'','hide','tabinfo'+windowNo,'','hide','startoff','','hide')
	}
	if(blncontrol>0) {
		MM_showHideLayers('winmax'+windowNo,'','show','winmin'+windowNo,'','show','Change','','hide');
	}
	MM_showHideLayers('tab'+windowNo,'','show','tabinfo'+windowNo,'','show','progwin'+windowNo,'','show','winexit'+windowNo,'','show','programs'+windowNo,'','show');
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_goToURL() { //v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}

function MM_preloadImages() { //v3.0
  var d=document; 
  if(d.images){ 
  	if(!d.MM_p) 
		d.MM_p=new Array();
	    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    	if (a[i].indexOf("#")!=0){	
			d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];
		}
	}
}