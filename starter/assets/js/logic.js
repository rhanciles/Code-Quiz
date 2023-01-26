
// Create target variables.
var intro = document.querySelector("#start-screen");
var testPage = document.querySelector("#questions");
var feedBack = document.querySelector("#feedback");
var counter = document.querySelector("#time");
var status = document.querySelectorAll(".start");
var questionEL= document.querySelector("#question-title")
var choicesEL=document.querySelector("#choices")
var index=0
var secondsLeft = 50;

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

// Setup function to create buttons and call the porperties from the questionarr object
function renderOptions() {
 
  questionEL.textContent=questionsArr[index].question
  
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");
  
    button1.setAttribute("class", "choiceList");
    button2.setAttribute("class", "choiceList");
    button3.setAttribute("class", "choiceList");
    button4.setAttribute("class", "choiceList");
    
    button1.textContent = questionsArr[index].choice1
    button2.textContent = questionsArr[index].choice2
    button3.textContent = questionsArr[index].choice3
    button4.textContent = questionsArr[index].choice4

    choicesEL.append(button1, button2, button3, button4)
  }

// This verifies if the answer is correct and clears the page
function checkAnswer(answer){
  console.log(answer, "")
  if(answer === questionsArr[index].correct){
    index++
    choicesEL.innerHTML = ""
    feedBack.innerHTML = "Correct"
    renderOptions()
  }else{
    index++
    choicesEL.innerHTML = ""
    feedBack.innerHTML = "Wrong"
    renderOptions()
  }
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
    feedBack.setAttribute("class", "start");
    // If the button is clicked while the class is "hide", we set the class to "start"
 
    setTime();

    renderOptions()
     
      } else {
       alert = "Please click the button to start";
    }
});
  
// Set event listener to index click options of the user.
choicesEL.addEventListener("click",()=>{
  var clicked = this.event.target.textContent
  console.log(clicked);
  checkAnswer(clicked)
})