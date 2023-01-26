
// Create target variables.
var intro = document.querySelector("#start-screen");
var testPage = document.querySelector("#questions");
var counter = document.querySelector("#time");
var status = document.querySelectorAll(".start");

var secondsLeft = 100;

// Create timer to control the session,
function setTime() {
  // Set interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    counter.textContent = secondsLeft;

    if(secondsLeft === 1) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    
    }

  }, 1000);
}

// Add event listener to the start button,
start.addEventListener("click", function(event) {
    var start = event.target;

  if (start.matches("button") === true) {
    // Get its data-index value to to apply clauses below

    intro.setAttribute("class", "hide");
    // If the button is clicked while the class is "start", we set the class to "hide"
    testPage.setAttribute("class", "start");
    // If the button is clicked while the class is "hide", we set the class to "start"
    
 
    setTime();
     
      } else {
       alert = "Please click the button to start";
    }
});
  
