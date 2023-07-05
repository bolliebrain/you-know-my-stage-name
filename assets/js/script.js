//Variables
//Start quiz button
const begin = document.getElementById("start")
//Questions/stage name
const stageName = document.getElementById("stage-name");
//Answers to choose from
const answerButtons = document.getElementById("answer-container");
//Go Home Function
const goHome = document.getElementById("go-home");

//const stageFace = document.getElementById("picture-container");
//const questionProgress = document.getElementById("progress");
//const quizScore = document.getElementById("score");

//Variables for the question index and score
let currentQuestion = 0;
let correctAnswers = 0;

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

    //questions + index number will take you to question asked
    let currentQuestion = questions[currentQuestion];
    // as index starts with 0 - for progress, question will start at 1
    let questionProgress = currentQuestion + 1;
    // using current question and adding into HTML
    questionElement.innerHTML = questionProgress + ". " + currentQuestion.question;

    //to display answers on HTML based on question number
    //this will locate the answer set
    currentQuestion.answers.forEach(answer => {
        //display the answer set in the play buttons
        //creating a button element to put answers into HTML
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("play-button");
        answerButtons.appendChild(button);
    });

}

startGame();

//questionSets();

//loop for questions

//for(i = 0; i < quiz.length; i++){}



//function
// function checkAnswer () }





//     // loop for questions
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