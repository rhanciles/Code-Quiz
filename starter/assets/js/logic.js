var intro = document.querySelector("#start-screen");
var exam = document.querySelector("#questions");
var start = document.querySelector("#start");


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
        renderExam();
     
      } else {
       alert = "Please click the button to start"
    }
});
  