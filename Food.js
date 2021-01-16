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



jQuery(document).ready(function( $ ){

  var thehours = new Date().getHours();
    var themessage;
    var morning = ('Good morning');
    var afternoon = ('Good afternoon');
    var evening = ('Good evening');
  
    if (thehours >= 0 && thehours < 12) {
      themessage = morning;
      $("#greeting").addClass("morning");
  
    } else if (thehours >= 12 && thehours < 17) {
      themessage = afternoon;
      $("#greeting").addClass("afternoon");
  
    } else if (thehours >= 17 && thehours < 24) {
      themessage = evening;
      $("#greeting").addClass("evening");
    }
  
    $('#greeting').append(themessage);
    
  });



  function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Username must be filled out");
      return false;
    }
  }