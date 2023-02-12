// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 750px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}