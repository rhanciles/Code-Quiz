var highScores = document.querySelector("#highscores");
var clearScores = document.querySelector("#clear");


function renderScores() {

    let li = document.createElement("li");
    highScores.appendChild(li);
    li.setAttribute("id", "details");
    
    var initials = localStorage.getItem("initials");
    var finalTally = localStorage.getItem("finalTally");

    var details = document.querySelector("#details");
    details.textContent = "Player: " + initials + " | " + "Score: " + finalTally;
  }
  
  renderScores();

  clearScores.addEventListener("click", function() {
    details.textContent = " ";

  });