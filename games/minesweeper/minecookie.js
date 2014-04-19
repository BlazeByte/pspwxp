// This is a general cookie reader/writer written for the minesweeper demo.

// Reads the one cookie.
// (This function taken from Netscape JavaScript1.1 documentation)
function getCookie(Name) {
   var search = Name + "="
   if (0 < document.cookie.length) { // if there are any cookies
      offset = document.cookie.indexOf(search) 
      if (offset != -1) { // if cookie exists 
         offset += search.length 
         // set index of beginning of value
         end = document.cookie.indexOf(";", offset) 
         // set index of end of cookie value
         if (end == -1) 
            end = document.cookie.length
         return unescape(document.cookie.substring(offset, end)) } } }  

                    
// Sets cookie values.
// Core taken from Netscape JavaScript1.1 documentation.
function setCookie(name, value) {
          document.cookie = name + "=" + escape(value) + "; expires=Fri,31 Dec 2010 23:59:00 GMT" }

