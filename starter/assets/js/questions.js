
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

var questionChoice = {
  Q1:  ["JavaScript", "Terminal/Bash", "For Loops", "Console Log"],
  Q2:  ["Strings", "Booleans", "Alerts", "Numbers"],
  Q3:  ["Quotes", "Curley Brackets", "Parenthesis", "Square Brackets"],
  Q4:  ["Numbers & Strings", "Booleans", "Other Arrays", "All of the above"],
  Q5:  ["Commas", "Curly Brackets", "Quotes", "Parenthesis"]
}

var choices = Object.values(questionChoice)

console.log(questions)
console.log(questionChoice)
console.log(Object.keys(questionChoice));
console.log(Object.entries(questionChoice));

