var intVersion = "3.00"
var TaskbarHide ;
var tabopen='false';
var tab2open='false';
var tab3open='false';
var activewindow="";
var openedLink;
var blnStartMax="false";
var mProgramLocation;

function winMessage(MessageTitle,MessageIcon,MessageHTML){
	showHideLayer('tabWarn','visible');
	document.getElementById('AT').innerHTML=MessageTitle;
	AlIcon.src=MessageIcon;
//	document.getElementById('AM').innerHTML=MessageHTML;
}

function openTab(windowNo){
	 showHideLayer('menu','hidden'); showHideLayer('mapps','hidden'); showHideLayer('progwin'+windowNo,'visible'); showHideLayer('winexit'+windowNo,'visible'); showHideLayer('programs'+windowNo,'visible'); showHideLayer('winmax'+windowNo,'visible'); showHideLayer('winmin'+windowNo,'visible');
	document.getElementById('imgTab'+windowNo).src='images/window/tab_down.gif';
	if(!(windowNo=="")){windowMin("")};
	if(!(windowNo==2)){windowMin(2)};
	if(!(windowNo==3)){windowMin(3)};
}

function windowExit(windowNo){
	hideMenu(); 
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
	showHideLayer('progwin'+windowNo,'hidden');showHideLayer('winmin'+windowNo,'hidden');showHideLayer('winmax'+windowNo,'hidden'); showHideLayer('winexit'+windowNo,'hidden'); showHideLayer('programs'+windowNo,'hidden'); showHideLayer('tab'+windowNo,'hidden'); showHideLayer('tabinfo'+windowNo,'hidden'); 
	if(windowNo==''){var intLeft='84px'}
	if(windowNo==2){var intLeft='197px'}
	if(windowNo==3){var intLeft='310px'}
	frames['tab'+windowNo].style.left=intLeft;
}

function windowMax(windowNo){
	setTimeout("iprogMax.location.href=frames['progman'+windowNo].location.href",2500);
	showHideLayer('progMax','visible');
	windowMin(windowNo);
	activewindow=windowNo;
	var frameAddress=frames['progman'+windowNo].location.href
	if(frameAddress.slice(-18)=="internet/index.htm"){		
		alert(frames['progman'+windowNo].document.frames['Content'].location.href);
	}
}

function windowMin(windowNo){
	 showHideLayer('progwin'+windowNo,'hidden'); showHideLayer('winexit'+windowNo,'hidden'); showHideLayer('programs'+windowNo,'hidden'); showHideLayer('winmax'+windowNo,'hidden'); showHideLayer('winmin'+windowNo,'hidden');
	 document.getElementById('imgTab'+windowNo).src='images/window/tab.gif'
}

function TaskbarShow(){
	 showHideLayer('Taskbar','visible'); showHideLayer('startoff','visible'); showHideLayer('lDetect','hidden');
	if(tabopen=="true"){
		 showHideLayer('tab','visible'); showHideLayer('tabinfo','visible')
	}
}

function hidetaskbar(){
	if(TaskbarHide=="true"){
		if(menu.style.visibility=="hidden"){
			 showHideLayer('Taskbar','hidden'); showHideLayer('startoff','hidden'); showHideLayer('tab','hidden'); showHideLayer('tabinfo','hidden'); showHideLayer('lDetect','visible');
		}		
	}
}

function hideMenu(){showHideLayer('menu','hidden'); showHideLayer('mlinks','hidden'); showHideLayer('mpspwxp','hidden'); showHideLayer('mgames','hidden'); showHideLayer('mapps','hidden'); showHideLayer('startoff','visible');}

function setTitle(blncontrol,ProgramTitle,ProgramLocation,ProgramIcon,StartMax){
	hideMenu();
	showHideLayer('loading','visible');
	document.getElementById('lT').innerHTML=ProgramTitle;
	document.getElementById('lTA').innerHTML=ProgramLocation;
	if(StartMax==0||StartMax==null){
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
							winMessage("No more windows","images/icons/alert.png","");
							var mProgramLocation=ProgramLocation;
							var mProgramIcon=ProgramIcon;
							var mblncontrol=blncontrol;
							var mProgramTitle=ProgramTitle;
							var mStartMax=StartMax;
							showHideLayer('lyShutdown','visible');
							shutdownFade();
							document.getElementById('mT').innerHTML=document.getElementById('tT').innerHTML;
							document.getElementById('mT2').innerHTML=document.getElementById('tT2').innerHTML;
							document.getElementById('mT2').innerHTML=document.getElementById('tT3').innerHTML;
							mI.src=tI.src;
							mI2.src=tI2.src;
							mI3.src=tI3.src;
						}
					}
				}
				frames['tab'+emptytab].style.left='310px';
			}
		}
	}
	showWindow(emptytab,ProgramLocation,ProgramIcon,blncontrol,ProgramTitle,StartMax);
}

function showWindow(windowNo,ProgramLocation,ProgramIcon,blncontrol,ProgramTitle,StartMax){
	if(StartMax==0||StartMax==null){
		frames['progman'+windowNo].location.href=ProgramLocation;
		document.getElementById('aT'+windowNo).innerHTML=ProgramTitle;
		document.getElementById('tT'+windowNo).innerHTML=ProgramTitle.slice(0,14);
		document['windowsicon'+windowNo].src=ProgramIcon;
		document['tI'+windowNo].src=ProgramIcon;
		document['imgTab'+windowNo].src='images/window/tab_down.gif';
		activewindow=windowNo
		if(!(windowNo=="")){windowMin("")};
		if(!(windowNo==2)){windowMin(2)};
		if(!(windowNo==3)){windowMin(3)};
		if(blncontrol>0) {
			 showHideLayer('winmax'+windowNo,'visible'); showHideLayer('winmin'+windowNo,'visible');
		}
		showHideLayer('tab'+windowNo,'visible'); showHideLayer('tabinfo'+windowNo,'visible'); showHideLayer('progwin'+windowNo,'visible'); showHideLayer('winexit'+windowNo,'visible'); showHideLayer('programs'+windowNo,'visible'); 
		blnStartMax="false";
		if(TaskbarHide=="true"){
			 showHideLayer('tab'+windowNo,'hidden'); showHideLayer('tabinfo'+windowNo,'hidden'); showHideLayer('startoff','hidden')
		}
	}else{
		if(StartMax==1){
			if(SkipMaxMsg==0){
				mProgramLocation=ProgramLocation;
				setTimeout("iprogMax.location.href=mProgramLocation",2500);
			}else{
				iprogMax.location.href=mProgramLocation
			}
		}else{
			if(StartMax==11){
				iprogMax.location.href=ProgramLocation
			}
		}
		showHideLayer('progMax','visible');
		blnStartMax="true";
	}
	showHideLayer('loading','hidden');
	document.getElementById('lT').innerHTML="";
	document.getElementById('lTA').innerHTML="";
}

function showHideLayer(layerName,showHide){
	if (!(frames[layerName].style.visibility==showHide)){
		frames[layerName].style.visibility=showHide
	}
}

function theClock() {var theDate = new Date
				strHours = theDate.getHours();
				strMins = theDate.getMinutes();
				if(strHours<10){strHours="0"+strHours};
				if(strMins<10){strMins="0"+strMins};
				document.getElementById('tP').innerHTML=strHours+":"+strMins;
			}
			
function shutdownFade() {
	setTimeout("imgFade.src='images/shade1.png'",500);
	setTimeout("imgFade.src='images/shade2.png'",1000);
	setTimeout("imgFade.src='images/shade3.png'",1500);
}

function restoreWindow() {
	if(blnStartMax=="false"){
		openTab(activewindow);
	}
	showHideLayer('progMax','hidden');
	iprogMax.location.href="apps/appsmax.htm"
}

function openInBrowser(Iurl){
	openedLink=Iurl;
	setTitle("1","Internet","apps/internet/index.htm","images/icons/menu/apps/ie.png",0);
}

function sendSearchForm(){
	setTitle("1","Internet","apps/internet/index.htm","images/icons/menu/apps/ie.png",0);
	var searchWindow="progman"+activewindow;
	searchForm.target=searchWindow
	searchForm.submit();
}