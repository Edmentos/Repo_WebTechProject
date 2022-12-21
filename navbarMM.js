function setRandomBackground() 
{
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  var randomColor = "rgb(" + r + "," + g + "," + b + ")";

  document.body.style.background = randomColor;
}
var age = prompt("Please enter your age:");

if (age >= 18) {
} else {
  alert("Sorry, you must be 18 or older to access this page.");
  window.location.href = "notoldenough.html";
}