console.log("Hi! Welcome to My Portfolio Site")

const hamburgerBtn = document.getElementById("js-hamburger");
const topLine = document.getElementById("js-top-line");
const centerLine = document.getElementById("js-center-line");
const bottomLine = document.getElementById("js-bottom-line");
const nav = document.getElementById("js-nav");

hamburgerBtn.addEventListener("click", () => {
  topLine.classList.toggle("active");
  centerLine.classList.toggle("active");
  bottomLine.classList.toggle("active");
  nav.classList.toggle("show");
});

// Toggle the hamburger menu as visible or not

var viewportWidth = $(window).width();

function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle" && viewportWidth < 640) {
    x.className += " responsive"; //add class name with space "_" to seperate addition
  } else {
    x.className = "navtoggle";
  }
}

// Hide or show header on scrolling - animation duration set in header CSS

var prev = 0;
var $window = $(window);
var nav = $("header");

$window.on("scroll", function () {
  var scrollTop = $window.scrollTop();
  if (scrollTop === 0) {
  } else if (scrollTop > 11) {
    nav.toggleClass("hidden", scrollTop > prev);
    prev = scrollTop;
  }
});