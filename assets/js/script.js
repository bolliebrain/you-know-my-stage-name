//Variables
//Start quiz button
const begin = document.getElementById("start")
// Go home button
//const goHome = document.getElementById("go-home");
//Questions/stage name
const stageName = document.getElementById("stage-name");
//Answers to choose from
const answerButtons = document.getElementById("answer-container");
//Go Home Function
const goHome = document.getElementById("go-home");
//Variables for the question index and score
let currentQuestion = 0;
let correctAnswers = 0;

//const stageFace = document.getElementById("picture-container");
//const questionProgress = document.getElementById("progress");
//const quizScore = document.getElementById("score");



/* Two different event listeners
Wait for DOM to finish loading before running the Quiz and
when user clicks button */

document.addEventListener("DOMContentLoaded", function() {

    //Open to welcome page with rules and hiding others
    let welcome = document.getElementById("welcome-page");

    document.getElementById("game-page").style.display = "none";
    document.getElementById("final-page").style.display = "none";
     
})

document.getElementById("start").addEventListener("click", startGame);

function startGame(){    
    let gamePage = document.getElementById("game-page").style.display = "";

    document.getElementById("welcome-page").style.display = "none";
    document.getElementById("final-page").style.display = "none";

    //question progress and score starts at 0
    currentQuestion = 0;
    correctAnswers = 0;
    
    questionSets();
}

// this function will pull out the question and answers in data.js,
// display on HTML and add to current Question progress
//

function questionSets(){
    clearPage();
    //questions + index number will take you to question asked
    let currentQuestionObject = questions[currentQuestion];
    // as index starts with 0 - Question will start at 1
    let questionProgress = currentQuestion + 1;
    // using current question and adding into HTML
    stageName.innerHTML = questionProgress + ". " + currentQuestionObject.question;

    //to display answers on HTML based on question number
    //this will locate the answer set
    currentQuestionObject.answers.forEach(answer => {
    //display the answer set in the play buttons
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("click-button");
    answerButtons.appendChild(button);
    });

}

function clearPage() {

    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

//(
//document.getElementById("go-home").addEventListener("click", Home);
//function Home(){
//Open to welcome page with rules and hiding others
//let welcome = document.getElementById("welcome-page");
//document.getElementById("game-page").style.display = "none";
//document.getElementById("final-page").style.display = "none";







//loop for questions

//for(i = 0; i < quiz.length; i++){}



//function
// function checkAnswer () }






 

// function provideAnswer () {
//     for {
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
// }

// function provideScore () {

// }

// function provideProgress () {

// }

// function scoreReaction () {

// }

// function goHome () {

// }