var intro = document.querySelector("#start-screen");
var exam = document.querySelector("#questions");
var start = document.querySelector("#start");
var choices = document.querySelector("choiceList")
var counter = document.querySelector("#time");

var secondsLeft = 100;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    counter.textContent = secondsLeft;

    if(secondsLeft === 1) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    
    }

  }, 1000);
}

start.addEventListener("click", function(event) {
    var start = event.target;

  if (start.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var status = intro.getAttribute("class");

  } if (status === "start") {

    intro.setAttribute("class", "hide");
    // If the card is clicked while the state is "hidden", we set .textContent to the number 
    exam.setAttribute("class", "start");
    // Using the dataset property, we change the state to visible because the user can now see the number
    
    renderOptions();
    setTime()
    // renderExam();

    examTop.textContent = quest1
    choices.textContent = renderExam(quiz1)
     
      } else {
       alert = "Please click the button to start"
    }
});
  
