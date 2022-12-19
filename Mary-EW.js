document.getElementById("name").value

function ageChecker(){
    var username=document.getElementById("name1").value;
    var agecheck=document.getElementById("age").value;

    if (agecheck>21){
        alert("Hi " + username + ", work away!");
    }

    else if (agecheck<21){
        alert(username + ", you are not allowed on this website");
    }

}

function askForAge() {
    var age = prompt("Please enter your age:");
    if (age < 18) {
      alert("Sorry, you must be 18 or older to try our vape juice.");
    } else {
      alert("Great, welcome to Lost Mary Vapes! Enjoy your watermelon vape juice.");
    }
  }