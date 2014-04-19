/*------------------------------------------------------------------------------*\
 * Memory game                                                                  *
 * Programmed by Markus Eichenberger  http://mypage.bluewin.ch/katzenseite      *
 * This is a simple implementation of the memory game in JavaScript 1.2         *
 *                                                                              *
 * Version 1.0.0 25.06.2002 First Release                                       *
 * Version 1.0.1 02.08.2002 Date Y2K compatible                                 *
 * Version 1.0.2 26.05.2003 Set IMG_OFFSET automatic                            *
 * Version 1.0.3 27.07.2003 Match of two different pictures possible that have  *
 *                          similar characteristics like shoes + Al Bundy       *
 * Version 1.0.4 27.02.2004 Better support of m*n picture matrix                *
 * Version 1.1.0 01.05.2004 Highscore with PHP (text file on webserver)         *
\*------------------------------------------------------------------------------*/ 

 // Game settings, check out memory.html (line 8)
 // <body bgcolor="#FFFF99" onload="loadImages(8, 0, 0);">
 //                                            |  |  |
 //                                            |  |  |-- highscore mode (js/php)
 //                                            |  |----- game mode, see above
 //                                            |-------- count of image pairs
 // 
 // game mode 0 : match of two identical pictures,
 //               filenames pic1.jpg, pic2.jpg ...
 // game mode 1 : match of two similar pictures,
 //               filenames pic1a.jpg, pic1b.jpg, pic2a.jpg, pic2b.jpg ... 
 //
 // highscore mode 0 : highscore local saved with javascript (cookies)
 // highscore mode 1 : highscore remote saved with PHP (text file)
 
 var IMG_PATH   = "images/";                    // Path of the pictures
 
 var arrHighScore    = new Array();             // Array of highscore objects 
 var imgBackside     = new Image();             // The backside of a card
 var imgArrStartStop = new Array(4);            // Start and stop button
 var imgArrPlusMinus = new Array(4);            // Plus and minus button
 var imgArrNumber    = new Array(11);           // Ciphers 0 to 9
 var bRunning        = false;                   // State of the game   
 var nLevel          =  4;                      // Speed level
 var nSeconds        =  0;                      // Duration of the game in seconds
 var nAttempts       =  0;                      // Number of attempts
 var nHit            =  0;                      // Number of hits
 var nSelected1      = -1;                      // First selected picture
 var nSelected2      = -1;                      // Second selected picture
 var bShowCard       = false;                   // State of the card (uncovered or not)
 var strPlayerName   = "xxx";                   // Name of player for highscore
 var strDate         = "";                      // Date for highscore
 var nPoints         = 0;                       // Points for highscore
 var bCookies        = false;                   // Are cookies enabled
 var nHighscoreMode  = 0;                       // 0=Cookies 1=PHP

 var IMG_START, IMG_STOP, IMG_PLUS, IMG_MINUS;
 var IMG_LEVEL, IMG_SEC, IMG_ATTEMPTS, IMG_HIT;
 var IMG_OFFSET, IMG_MODE, imgArrField, nImages, nSumImages;
   
/*
 *  Preload of images
 */
 function loadImages(nPairs, nImageMode, nScoreMode)
 {
   nHighscoreMode = nScoreMode;
   IMG_MODE = nImageMode;
   nImages = nPairs;
   imgArrField = new Array(nImages * 2);
   nSumImages  = nImages * 2 + 4 + 4 + 11;

   IMG_START = 2 + nImages * 2;
   IMG_STOP  = 4 + nImages * 2;
   IMG_PLUS  = 12 + nImages * 2;
   IMG_MINUS = 8 + nImages * 2;
   IMG_LEVEL = 10 + nImages * 2;
   IMG_SEC   = 17 + nImages * 2;
   IMG_ATTEMPTS = 25 + nImages * 2;
   IMG_HIT   = 33 + nImages * 2;

   if(document.images)
   {
     imgBackside.src  = IMG_PATH + "card.jpg";
     
     // Load start and stop button
     for(var i = 0; i < 4; i++)
     {
       imgArrStartStop[i] = new Image();
       imgArrStartStop[i].src = IMG_PATH + "startstop" + (i + 1) + ".gif";
     }

     // Load plus and minus button
     for(var i = 0; i < 4; i++)
     {
       imgArrPlusMinus[i] = new Image();
       imgArrPlusMinus[i].src = IMG_PATH + "plusminus" + (i + 1) + ".gif";
     }
     
     // Load ciphers
     for(var i = 0; i < 11; i++)
     {
       imgArrNumber[i] = new Image();
       imgArrNumber[i].src = IMG_PATH + i + ".gif";
     }

     // Load cat pictures
     for(var i = 0; i < nImages; i++)
     {
       if(IMG_MODE == 1)
       {
         imgArrField[i * 2] = new Image();
         imgArrField[i * 2].src = IMG_PATH + "pic" + (i + 1) + "a.jpg";
         imgArrField[i * 2 + 1] = new Image();
         imgArrField[i * 2 + 1].src = IMG_PATH + "pic" + (i + 1) + "b.jpg";
       }
       else
       {
         IMG_MODE = 0;
         imgArrField[i * 2] = new Image();
         imgArrField[i * 2].src = IMG_PATH + "pic" + (i + 1) + ".jpg";
         imgArrField[i * 2 + 1] = new Image();
         imgArrField[i * 2 + 1].src = IMG_PATH + "pic" + (i + 1) + ".jpg";
       }
     }
          
     loadHighScore();
     nLevel = 4;
     nSeconds  =  0;
     nAttempts =  0;
     nHit      =  0;
     searchFirstImage();
     clearField();
     updateAll();
     setTimeout("checkLoading()", 1000)
   }   
 }
 
/*
 *  Shuffle all cat pictures
 */
 function shuffle()
 {
   if(document.images)
   {
     // Swap two pictures (random index)
     var j = Math.floor(new Date().getSeconds() * Math.random() + 60);
     for(var i = 0; i < j; i++)
     {
       n1 = Math.round(Math.random() * (nImages * 2 - 1));
       n2 = Math.round(Math.random() * (nImages * 2 - 1));
       img = imgArrField[n1];
       imgArrField[n1] = imgArrField[n2];
       imgArrField[n2] = img;
     } 
   }
 }
  
/*
 *  Start new game
 */
 function startGame()
 {
   if(document.images)
   {
     if(!bRunning)
     {
       shuffle();
       clearField();
       nSeconds = 0;
       nSelected1 = -1;
       nSelected2 = -1;    
       nAttempts  =  0;
       nHit       =  0;
       id = setInterval("countSeconds()", 1000)
       bRunning = true;
       bShowCard = false;
       updateAll();
     }
   }
 }
  
/*
 *  Stop game
 */
 function stopGame()
 {
   if(document.images)
   {
     if(bRunning)
     {
       clearInterval(id);
       bRunning = false;
       updateAll();
     }
   }
   return;
 }
 
/*
 *  Count seconds
 */
 function countSeconds()
 {
   nSeconds++;
   showNumber(nSeconds, IMG_SEC + IMG_OFFSET, 5);
 }
 
/*
 *  Show numbers
 */
 function showNumber(nNumber, nPosition, nCount)
 {
   if(document.images)
   {
     nNumber += "";
     while(nNumber.length < nCount) nNumber = " " + nNumber;
     for(var i = 0; i < nCount; i++)
     {
       var n = nNumber.charAt(i);
       if(n == " ")
       {
         document.images[nPosition + i].src = imgArrNumber[10].src;
       }
       else
       {
         document.images[nPosition + i].src = imgArrNumber[n].src;
       }
     }
   }
 }
 
/*
 *  Set the backside of all cards
 */
 function clearField()
 {
   if(document.images)
   {
     for(var i = 0; i < nImages * 2; i++)
     {
       document.images[i + IMG_OFFSET].src = imgBackside.src;
     }
   }
 }   

/*
 *  Show card
 */
 function showCard(nImage)
 {
   if(document.images)
   {
     if(bRunning && !bShowCard)
     {
       // Uncover a card, if not allready two are selected
       if(nSelected1 == -1 || nSelected2 == -1)
       {
         // Is the clicked not uncovered ?
         if(document.images[nImage + IMG_OFFSET].src == imgBackside.src)
         {
           // Uncover selected card
           document.images[nImage + IMG_OFFSET].src = imgArrField[nImage].src;
           if(nSelected1 == -1)
           {
             nSelected1 = nImage;
           }
           else
           {
             nSelected2 = nImage;
           }
         }
       }
       
       // There are two cards uncovered
       if(nSelected1 != -1 && nSelected2 != -1)
       {
         showNumber(++nAttempts, IMG_ATTEMPTS + IMG_OFFSET, 5);
                
         // Are the cards equal ?
         var pic1 = document.images[nSelected1 + IMG_OFFSET].src;
         var len1 = pic1.length;
         var pic2 = document.images[nSelected2 + IMG_OFFSET].src;
         var len2 = pic2.length;
         if(pic1.substr(0, len1 - IMG_MODE - 4) == pic2.substr(0, len2 - IMG_MODE - 4))
         {
           // If there are equal, incement the counter
           showNumber(++nHit, IMG_HIT + IMG_OFFSET, 5);
           nSelected1 = -1;
           nSelected2 = -1;
     
           // Are all pictures uncovered ?
           if(nHit == nImages)
           {
             stopGame();
             nPoints = Math.round(100000 * (nLevel + 1) / nSeconds / nAttempts);
//             strMsg = "Your score is " + nPoints + " points.\nPlease enter your name for the highscore:";
             strMsg = "Your score is " + nPoints + " points.";
             alert(strMsg);
            
//             strName = prompt(strMsg, strPlayerName);
//             if(strName != null && strName != "")
//             {
//               strPlayerName = strName.substr(0, 20);
//               strDate = getY2kDate();
//               arrHighScore.push(new objHighScore());
//               if(nHighscoreMode == 1)
//               {
//                  strURL = "save_score.php" + "?p=" + nPoints + "&n=" + escape(strPlayerName) + "&d=" + escape(strDate) + "&l=" + nLevel + "&t=" + nSeconds + "&a=" + nAttempts;
//                  window.open(strURL, "Highscore", "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=300");
//               }
//             }
           }
         }
         else
         {
           // The two cards are not identical, start now the timer for hide the cards
           bShowCard = true;
           setTimeout("clearCard()", 2000 - nLevel * 200);
         }
       }
     }
     else
     {
       if(!bRunning)
       {
         alert("Please press the start button !");
       }
     }
   }
 }
 
/*
 *  Turn the uncovered cards
 */
 function clearCard()
 {
   document.images[nSelected1 + IMG_OFFSET].src = imgBackside.src;
   document.images[nSelected2 + IMG_OFFSET].src = imgBackside.src;
   nSelected1 = -1;
   nSelected2 = -1;
   bShowCard = false;
  }
  
/*
 *  Set the level
 */
 function setLevel(nValue)
 {
   if(document.images && !bRunning)
   {
     nLevel += nValue;
     if(nLevel < 0) nLevel = 0;
     if(nLevel > 9) nLevel = 9;
     showNumber(nLevel, IMG_LEVEL + IMG_OFFSET, 1);
   }
 }

  
/*
 *  Update all counter
 */
 function updateAll()
 {
   if(document.images)
   {
     showNumber(nLevel, IMG_LEVEL + IMG_OFFSET, 1);
     showNumber(nSeconds, IMG_SEC + IMG_OFFSET, 5);
     showNumber(nAttempts, IMG_ATTEMPTS + IMG_OFFSET, 5);
     showNumber(nHit, IMG_HIT + IMG_OFFSET, 5);

     if(bRunning)
     { 
       document.images[IMG_START + IMG_OFFSET].src = imgArrStartStop[1].src;
       document.images[IMG_STOP + IMG_OFFSET].src  = imgArrStartStop[2].src;
       document.images[IMG_PLUS + IMG_OFFSET].src  = imgArrPlusMinus[1].src;
       document.images[IMG_MINUS + IMG_OFFSET].src = imgArrPlusMinus[3].src;
     }
     else
     {  
       document.images[IMG_START + IMG_OFFSET].src = imgArrStartStop[0].src;
       document.images[IMG_STOP + IMG_OFFSET].src  = imgArrStartStop[3].src;
       document.images[IMG_PLUS + IMG_OFFSET].src  = imgArrPlusMinus[0].src;
       document.images[IMG_MINUS + IMG_OFFSET].src = imgArrPlusMinus[2].src;
     }
   }
 }
  
/*
 *  Show the highscore window
 */
 function showHighScore()
 {
   sortHighScore();
   saveHighScore();
   strURL = "highscore.html";
   if(nHighscoreMode == 1)
   {
     strURL = "show_score.php"
   }
   window.open(strURL, "Highscore", "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=300");
 }
 
/*
 *  The highscore object (class)
 */
 function objHighScore()
 {
   this.nPoints   = nPoints;
   this.strName   = strPlayerName;
   this.strDate   = strDate;
   this.nLevel    = nLevel;
   this.nSeconds  = nSeconds;
   this.nAttempts = nAttempts;
 }

/*
 *  Sort the highscore, ascend by points (implementation of bubblesort)
 */
 function sortHighScore()
 {
   var l = arrHighScore.length;
   if(l > 1)
   {
     for(var n = 0; n < l - 1; n++)
     {
       for(var m = 0; m < l - 1; m++)
       {
         if((arrHighScore[m].nPoints - arrHighScore[m + 1].nPoints) > 0)
         {   
           var tmp = arrHighScore[m];
           arrHighScore[m] = arrHighScore[m + 1];
           arrHighScore[m + 1] = tmp;
         }
       }
     }
   }
 }


/*
 *  Read the highscore form cookies
 */
 function loadHighScore()
 {
   if(document.cookie != "")
   {
     bCookies = true;

     // Only the top five
     for(var i = 1; i < 6; i++)
     {
       var strCookieValue = getMemoryCookie("MemoryScore" + i);
       if(strCookieValue != "")
       {
         var arrValues = unescape(strCookieValue).split(";");
         nPoints       = arrValues[0];
         strPlayerName = arrValues[1];
         strDate       = arrValues[2];
         nLevel        = arrValues[3];
         nSeconds      = arrValues[4];
         nAttempts     = arrValues[5];
         arrHighScore.push(new objHighScore());
       }
     }
    
     strPlayerName = getMemoryCookie("MemoryPlayerName");   
   }
   else
   {
     // There is no cookies, try to create one
     setMemoryCookie("MemoryPlayerName", strPlayerName);
     if(document.cookie == "")
     {
       // Can't create the cookie (e.g. disabled by user)
       bCookies = false;
     }
     else
     {
       bCookies = true;
     }
   }
 }

 
/*
 *  Save highsore as cookie
 */
 function saveHighScore()
 {
   if(bCookies)
   {
     setMemoryCookie("MemoryPlayerName", strPlayerName);
   
     // The top five
     if(arrHighScore.length != null)
     {
       var n = arrHighScore.length - 1;
       var j = 0;
       for(var i = n; i > n - 5; i--)
       {
         if(i >= 0)
         {
           var strCookieValue = "";
           strCookieValue += arrHighScore[i].nPoints + ";";
           strCookieValue += arrHighScore[i].strName + ";";
           strCookieValue += arrHighScore[i].strDate + ";";
           strCookieValue += arrHighScore[i].nLevel + ";";
           strCookieValue += arrHighScore[i].nSeconds + ";";
           strCookieValue += arrHighScore[i].nAttempts;
           setMemoryCookie("MemoryScore" + ++j, strCookieValue);
         }
       }
     }
   }
 }
  
/*
 *  Read cookie
 */
 function getMemoryCookie(strId)
 {
   var strReturn = "";

   if(document.cookie != "")
   {
     var arrCookies = document.cookie.split(";");
     for(var i = 0; i < arrCookies.length; i++)
     {
       var arrCookie = arrCookies[i].split("=");
       if(arrCookie.length == 2)
       {
         if(strTrim(arrCookie[0]) == strTrim(strId))
         {
           strReturn = unescape(arrCookie[1]);
         }
       }
     }
   }

   return strReturn;
 }
  
 /*
 *  Set cookie
 */
 function setMemoryCookie(strId, strValue)
 {
   document.cookie = strId + "=" + escape(strValue) + ";expires=" + new Date(2036, 12, 31).toGMTString();
 }
  
/*
 *  Remove all white spaces
 */
 function strTrim(str)
 {
   var strReturn = "";
   
   for(var i = 0; i < str.length; i++)
   {
     if(str.charAt(i) != " ")
     {
       strReturn += str.charAt(i);
     }
   }

   return strReturn;
 }
 
/*
 *  Y2K compatibe date
 */
 function getY2kDate()
 {
   var strReturn = "";
   var d = new Date();
   
   var strDate = addLeadingZero(d.getDate(), 2) + "." + addLeadingZero(d.getMonth() + 1, 2) + "." + getY2kYear(d);
   var strTime = addLeadingZero(d.getHours(), 2) + ":" + addLeadingZero(d.getMinutes(), 2);
   strReturn = strDate + " " + strTime;
   
   return strReturn;
 }
    
/*
 *  Y2K compatible year
 */
 function getY2kYear(d)
 {
   var y = d.getYear();
   if(y < 1970)
   {
     return y + 1900;
   }
   else
   {
     return y;
   }
 }
 
/*
 *  Add leading zero
 */
 function addLeadingZero(value, nTotalLength)
 {
   value += "";
   while(value.length < nTotalLength) value = "0" + value;
   return value;
 }
 
 
/*
 *  Search for index of first image
 */
 function searchFirstImage()
 {
   for(var i = 0; i < document.images.length; i++)
   {
     if(document.images[i].name == "memory_id")
     {
       IMG_OFFSET = i + 1;
       break;
     }
   }
 }


/*
 *  Count of preloaded images
 */
 function countLoadedImages()
 {
   var nCompleted = 0;
   for(var i = 0; i < 2 * nImages; i++)
   {
     if(imgArrField[i].complete)
     {
       nCompleted++;
     } //else alert(imgArrField[i].src);
   }

   for(var i = 0; i < 4; i++)
   {
     if(imgArrStartStop[i].complete)
     {
       nCompleted++;
     } //else alert(imgArrStartStop[i].src);
   }

   for(var i = 0; i < 4; i++)
   {
     if(imgArrPlusMinus[i].complete)
     {
       nCompleted++;
     } //else alert(imgArrPlusMinus[i].src);
   }

   for(var i = 0; i < 11; i++)
   {
     if(imgArrNumber[i].complete)
     {
       nCompleted++;
     } //else alert(imgArrNumber[i].src);
   }
   return nCompleted;
 }


/*
 *  Progressbar (state of preloading images)
 */
function checkLoading()
{
  var nLoaded = countLoadedImages();
  if(nLoaded < nSumImages)
  {
    document.images[IMG_OFFSET - 1].width = 456 - (456 / nSumImages * nLoaded);
    window.status = "" + nLoaded + " of " + nSumImages + " pictures loaded";
    setTimeout("checkLoading()", 250);
  }
  else
  {
    document.images[IMG_OFFSET - 1].src = IMG_PATH + "blank.gif"; 
    document.images[IMG_OFFSET - 1].width = 5;
    window.status = "";
    updateAll();
  }
}