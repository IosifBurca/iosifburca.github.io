const navbar = document.getElementById('navbar');
let navbarOffset = navbar.offsetTop;
window.onscroll = function() {myFunction()};

function myFunction() {
    if (window.pageYOffset >= navbarOffset) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }