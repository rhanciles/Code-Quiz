
var examTop = document.querySelector("#question-title");
var examBtm = document.querySelector("#choices");
var results = document.querySelector("#end-screen");
var feedback = document.querySelector("#feedback");
var skip = document.querySelector("#next-question");

var questions = ["A very useful tool used during development and debugging for printing content to the debugger is?", 
                "Commonly used data types do not include?", 
                "The condition in an if / else statement is enclosed with ________________?", 
                "Arrays in JavaScript can be used to store ________________?", 
                "Strings values must be enclosed within __________________ when being assigned to variables?"];

var questionChoice = [
    ["JavaScript", "Terminal/Bash", "For Loops", "Console Log"],
    ["Strings", "Booleans", "Alerts", "Numbers"],
    ["Quotes", "Curley Brackets", "Parenthesis", "Square Brackets"],
    ["Numbers & Strings", "Booleans", "Other Arrays", "All of the above"],
    ["Commas", "Curly Brackets", "Quotes", "Parenthesis"]
];

var choices = Object.values(questionChoice)

console.log(questions)
console.log(questionChoice)
console.log(Object.keys(questionChoice));
console.log(Object.entries(questionChoice));


function renderExam() {

  // Render a new li for each question
  for (var i = 0; i < questions.length; i++) {
    var examTxt = questions[i];
    examTop.textContent = examTxt
  } 

    var ol = document.createElement("ol")
    examBtm.appendChild(ol)
    ol.setAttribute("id", "choiceList")

    var button = document.createElement("button");
    var li = document.createElement("li");

    for (var j = 0; j < choices.length; j++) {
      var examOpt = choices[j];
      choiceList.appendChild(li);
      li.appendChild(button);
    button.textContent = examOpt;
  }
}

