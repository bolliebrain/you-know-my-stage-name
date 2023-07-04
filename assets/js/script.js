//Variables
const begin = document.getElementById("start")
const stageName = document.getElementById("stage-name");
const stageFace = document.getElementById("picture-container");

const answerButtons = document.getElementById("answer-container");

const questionProgress = document.getElementById("progress");
const quizScore = document.getElementById("score");

//Storing the score
let currentQuestion = 0;
let correctAnswers = 0;

/* Two different event listeners
Wait for DOM to finish loading before running the Quiz and
when user clicks button */

document.addEventListener("DOMContentLoaded", function() {

    //Open to welcome page with rules and hiding others
    let welcome = document.getElementById("welcome-page");

    document.getElementById("game-page").style.display = "none";
    document.getElementById("final_page").style.display = "none";
    
})

function playGame() {
    document.getElementById("start").addEventListener("click", runQuiz);
}

// /* Functions */



// function runQuiz () {

//     //hiding welcome and final page
//     document.getElementById("welcome-page").style.display = "none";
//     document.getElementById("final-page").style.display = "none";

//     // loop for questions
//     for (var i=0; i < quiz.length; i++){
//         var response = window.prompt(quiz[i].prompt)
//         if(response == quiz[i].answer){
//             score++;
//             alert("Correct!");
//         } else {
//             alert("Wrong!");
//         }
//     }
// }
// alert("you got" + score + "/" + quiz.length);

// function checkAnswer () {

// }

// function provideAnswer () {

// }

// function provideScore () {

// }

// function provideProgress () {

// }

// function scoreReaction () {

// }

// function goHome () {

// }