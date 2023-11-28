/*********************************************************
 * js functions for Black Mirror website
 * author: Antonio Cordero Molina
 * version: 1.0
 * date november 2023
 * comment: functions for BlackMirror website
 * *******************************************************/

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  