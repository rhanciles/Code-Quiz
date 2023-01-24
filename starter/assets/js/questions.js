
var examTop = document.querySelector("#question-title");
var examBtm = document.querySelector("#choices");
var results = document.querySelector("#end-screen");
var feedback = document.querySelector("#feedback");
var skip = document.querySelector("#next-question");

var quest1 = ["A very useful tool used during development and debugging for printing content to the debugger is?"]; 
var quest2 = ["Commonly used data types do not include?"]; 
var quest3 = ["The condition in an if / else statement is enclosed with ________________?"];
var quest4 = ["Arrays in JavaScript can be used to store ________________?"]; 
var quest5 = ["Strings values must be enclosed within __________________ when being assigned to variables?"];

var quiz1 = ["JavaScript", "Terminal/Bash", "For Loops", "Console Log"];
var quiz2 = ["Strings", "Booleans", "Alerts", "Numbers"];
var quiz3 = ["Quotes", "Curley Brackets", "Parenthesis", "Square Brackets"];
var quiz4 = ["Numbers & Strings", "Booleans", "Other Arrays", "All of the above"];
var quiz5 = ["Commas", "Curly Brackets", "Quotes", "Parenthesis"];

// var choices = {quest1: quiz1, quest2: quiz2, quest3: quiz3, quest4: quiz4, quest5: quiz5 }


function renderExam(arr) {

  for (var i = 0; i < arr.length; i++) {

    console.log(arr[i]);
    return arr[i];
    
    // let examOpt = arr[j];
    // button.textContent = arr[j];
    
  }
  console.log("---------");   
}

function renderOptions() {
  let ol = document.createElement("ol")
    let li = document.createElement("li");
    let button = document.createElement("button");
    examBtm.appendChild(ol)
    ol.setAttribute("id", "choiceList")
    ol.appendChild(li);
    li.appendChild(button);
}


// renderExam(quest1)
// renderExam(quest2)
// renderExam(quest3)
// renderExam(quest4)
// renderExam(quest5)

// renderExam(quiz1)
// renderExam(quiz2)
// renderExam(quiz3)
// renderExam(quiz4)
// renderExam(quiz5)