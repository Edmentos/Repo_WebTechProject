function setRandomBackground() 
{
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  var randomColor = "rgb(" + r + "," + g + "," + b + ")";

  document.body.style.background = randomColor;
}