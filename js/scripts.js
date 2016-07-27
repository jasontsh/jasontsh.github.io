/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function show(id) {
    document.getElementById(id).style.visibility = "visible";
 }
  
 function hide(id) {
    document.getElementById(id).style.visibility = "hidden";
}

//Easter egg

var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
var index = 0;

document.onkeydown = function(e){
  if (e.keyCode == code[index]) {
    index++;
} else {
    index = 0;
  }
  document.getElementById("easteregg").style.visibility = "visible";
};