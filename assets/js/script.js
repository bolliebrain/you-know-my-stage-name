//Variables
//Start quiz button
const begin = document.getElementById("start");
// Go home button
const goHome = document.getElementById("go-home");
//Questions/stage name
const stageName = document.getElementById("stage-name");
//Answers to choose from
const answerButtons = document.getElementById("answer-container");

//Variables for the question index and score
let currentQuestion = 0;
let correctAnswers = 0;

//const stageFace = document.getElementById("picture-container");
//const questionProgress = document.getElementById("progress");
//const quizScore = document.getElementById("score");



/* Two different event listeners
Wait for DOM to finish loading before running the Quiz and
when user clicks button */

document.addEventListener("DOMContentLoaded", function () {

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
        //display image from question set
        let face = document.getElementById("person");
        face.src = currentQuestionObject.face;
        //display the answer set in the element play buttons
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("click-button");
        answerButtons.appendChild(button);
        //if the answer is correct rule
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        //to provide the choose answer function
        button.addEventListener("click", checkAnswer);
    });
}

// function that checks answer and provides response
// for correct and incorrect

function checkAnswer(check) {
    const chosenAnswer = check.target;
    const rightAnswer = chosenAnswer.dataset.correct === "true";
    if (rightAnswer) {
        chosenAnswer.classList.add("correct");
        correctAnswers++;
    } else {
        chosenAnswer.classList.add("incorrect");
    }
    // Disable functionality to click multiple buttons
    // The correct answer button will change to green
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    setTimeout(checkAnswer(check), 2000);

    nextQuestion();
}



// loop the next questions
function nextQuestion(){
    currentQuestion++;
    if(currentQuestion < questions.length){
        questionSets();
    }else{
       scoreReaction();
    };
}

//function which provides the score
function scoreReaction(){
    //clearPage();

    //Open to finalpage hiding others
    let final = document.getElementById("final-page").style.display = "";

    document.getElementById("welcome-page").style.display = "none";
    document.getElementById("game-page").style.display = "none";

    //stageNameElement.innerHTML = 'You scored ${correctAnswers} 
    //out of ${questions.length}!';
}

// remove previous answers in play-buttons
function clearPage() {

    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// function provideProgress () {
// }

//function goHome () {}
document.getElementById("go-home").addEventListener("click", Home);



//(
//Open to welcome page with rules and hiding others
//let welcome = document.getElementById("welcome-page");
//document.getElementById("game-page").style.display = "none";
//document.getElementById("final-page").style.display = "none";
