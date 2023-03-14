
// Create target variables.
var intro = document.querySelector("#start-screen");
var testPage = document.querySelector("#questions");
var feedBack = document.querySelector("#feedback");
var roundUp = document.querySelector("#end-screen");
var counter = document.querySelector("#time");
var status = document.querySelectorAll(".start");
var questionEL= document.querySelector("#question-title");
var finalScore=document.querySelector("#final-score")
var choicesEL=document.querySelector("#choices");
var submitBtn = document.querySelector("#submit");
var audioYes = new Audio("./assets/sfx/correct.wav")
var audioNo = new Audio("./assets/sfx/incorrect.wav")
var index = 0;
var score = 0
var clickCounter = 0
var secondsLeft = 50;

// Create timer to control the session,
function setTime() {
  // Set interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    counter.textContent = secondsLeft;

    if(secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      scores();
    
    }

  }, 1000);
}

// Setup function to create buttons and call the porperties from the questionair object
function renderOptions() {

  if (index > 4) {
    index = 0;
    scores();
  }
 
  questionEL.textContent=questionsArr[index].question;
  
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");
  
    button1.setAttribute("class", "choiceList");
    button2.setAttribute("class", "choiceList");
    button3.setAttribute("class", "choiceList");
    button4.setAttribute("class", "choiceList");
    
    button1.textContent = questionsArr[index].choice1;
    button2.textContent = questionsArr[index].choice2;
    button3.textContent = questionsArr[index].choice3;
    button4.textContent = questionsArr[index].choice4;

    choicesEL.append(button1, button2, button3, button4);
  }

// This verifies if the answer is correct and clears the page for the next question.
function checkAnswer(answer){
  console.log(answer, "");
  if(answer === questionsArr[index].correct){
    index++;
    score += 1;
    choicesEL.innerHTML = "";
    questionEL.innerHTML = "";
    feedBack.innerHTML = "Correct";
    audioYes.play();
    
    renderOptions();

  } else {
    index++;
    score -= 1;
    choicesEL.innerHTML = "";
    questionEL.innerHTML = "";
    feedBack.innerHTML = "Wrong - Ten seconds is taken of your time";
    secondsLeft = secondsLeft - 10;
    audioNo.play();
    
    renderOptions();
  }
}

function scores () {
  testPage.setAttribute("class", "hide");
  // If the button is clicked while the class is "hide", we set the class to "start"
  roundUp.setAttribute("class", "start");
  // If the button is clicked while the class is "hide", we set the class to "start"
  feedBack.innerHTML = "Register your score";
  finalScore.innerHTML = score;
}

// Restars the quiz.
function restart () {

  window.location.href = './index.html';

  choicesEL.innerHTML = "";

  intro.setAttribute("class", "start");
  // If the button is clicked while the class is "hide", we set the class to "start"
  roundUp.setAttribute("class", "hide");
  // If the button is clicked while the class is "hide", we set the class to "start"

}

// Add event listener to the start button,
intro.addEventListener("click", function(event) {
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

    renderOptions();
     
      } else {
       alert("Please click the button to start");
    }
});

  
// Set event listener to index click options of the user.
choicesEL.addEventListener("click",()=> {
  var clicked = this.event.target.textContent;
  console.log(clicked);
  checkAnswer(clicked);
  clickCounter += 1;
  console.log(clickCounter);

  // if (clickCounter >= 5) {
  //   scores();
  // } else if (secondsLeft <= 0) {
  //   feedBack.innerHTML = "You are out of time";
  //   scores();
  // }
})

submitBtn.addEventListener("click", ()=> {
  var clicked = this.event.target.textContent;
 
  restart(clicked);

  var initials = document.querySelector("#initials").value;
  // var finalTally = document.querySelector("#final-score").innerText;
  
  if (initials === " ") {

    feedBack.innerHTML = "Please enter your initials";
  
  } else {
    
    localStorage.setItem("initials", initials);
    localStorage.setItem("finalTally", score);

    restart();

  }

});

