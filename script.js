var startBtn = document.getElementsById("startBtn");
var submitBtn = document.getElementsById("submitBtn");
var secondsLeft = (questions.length * 120 + 1);
var timerEl = document.getElementById("timer");
var addScoreEl = document.querySelector("#add-score");
var userScoreEL = document.getElementById("user-score");
var userNameInput;
var questionHeader = document.getElementById("questions");
var answerChoices = document.getElementById("answers");

var questionNumber = -1;
var answer;


function startTimer () {
    document.getElementById("home");
    document.getElementById("quiz");

    setTimer();

    makeQuestions();
}
function setTimer () {
    var countdown = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0 ||questionNumber === 0 ) {
            clearInterval(countdown);
            setTimeout(displayScore, 500);
        }
    }, 1000);
}

function makeQuestions() {
    questionNumber++;
    answer = questions[questionNumber].answer

    questionHeader.textContent = questions[questionNumber].title;
    answerChoices.innerHTML = "";

    var choices = questions[questionsNumber].choices;

    for (var i = 0; i < choices.length; i++) {
        var nextChoice = document.createElement("button");

        nextChoice.textContent = choices[i]
        answerBtn = answerChoices.appendChild(nextChoice).setAttribute("class", );
    }
}

function displayScore() {
    document.getElementById("quiz");
    document.getElementById("submitBtn");
    userScoreEL.textContent = "FINAL SCORE: " + secondsLeft + ".";
}

startBtn.addEventListener("click", startTimer);
submitBtn.addEventListener("click", function(event) {
    event.stopPropagation();
    addScoreEl();

    window.location.href = "highscores.html"
});

function addScore() {
    userNameInput = document.getElementById("userInitials").value

    var newScore = {
        name: userNameInput,
        score: secondsLeft
    };

    var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
    highScores.push(newScore)
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

function hideFeedback() {
    var pElement = document.getElementsByClassName("feedback")[0]
    pElement.style.display="none"
}

function showFeedback() {
    var pElement = document.getElementsByClassName("feedback")[0]
    pElement.removeAttribute("style");
}

answerChoices.addEventListener("click", function (event) {
    var pElement = document.getElementsByClassName("feedback")[0]

    if (answer === event.target.textContent) {
        pElement.innerHTML = "Correct!";
        setTimeout(hideFeedback,1225);
        showFeedback();
    }
    else {
        pElement.innerHTML = "Incorrect.";
        setTimeout(hideFeedback,1225);
        secondsLeft = secondsLeft - 20;
        showFeedback();
        }
        makeQuestions();
});

