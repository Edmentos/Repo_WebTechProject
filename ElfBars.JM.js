
  function setRandomBackground() 
  {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
  
    var randomColor = "rgb(" + r + "," + g + "," + b + ")";
  
    document.body.style.background = randomColor;
  }

  function showAgeConfirmation() 
  {
    var popup = document.getElementById("ageConfirmationPopup");
    popup.style.display = "block";
  }

  function confirmAge() 
  {
    var ageInput = document.getElementById("ageInput");
    var age = ageInput.value;
    if (age >= 18) 
    {
      document.getElementById("ageConfirmationPopup").style.display = "none";
    } 
    else
    {

      alert("You must be 18 or older to enter this website.");
    }
  }

  
