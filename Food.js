function myFunction() {
    var x = document.getElementById("bmyTopnav");
    if (x.className === "btopnav") {
      x.className += " bresponsive";
    } else {
      x.className = "btopnav";
    }
  } 



        // Get the modal
        var modal = document.getElementById('login-id01');
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
  



// Get the modal
var modal = document.getElementById('signup-id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onscroll = function() {myFunction()};

var header = document.getElementById("bmyTopnav");
var sticky = header.offsetTop;

function myFunction() {
if (window.pageYOffset > sticky) {
  header.classList.add("sticky");
} else {
  header.classList.remove("sticky");
}
}




