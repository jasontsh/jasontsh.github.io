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