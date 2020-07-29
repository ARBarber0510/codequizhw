var startBtn = document.querySelector("#startBtn");
let questions = [
    {
        question: "In what HTML element do you put JavaScript?",
        choices: ["<javascript>", "<js>", "<script>", "<java>"],


        answer: "<script>"
    },
    {
        question: "What is the correct syntax for referring to an external script?",
        choices: ["<script href=''>", "<script src=''>", "<script name=''>", "<script file=''>"],

        answer: "<script src=''>"
    },
    {
        question: "What is the definition of an array?",
        choices: ["Variable that can hold more than one value at a time",
            "Zero or more characters written inside quotes",
            "Any integer with no quotation marks",
            "None of the above"],

        answer: "Variable that can hold more than one value at a time"
    },
    {
        question: "Which of the following is not a function?",
        choices: ["Grow",
            "Alert",
            "Prompt",
            "Confirm"]
        ,
        answer: "Grow"
    },
    {
        question: "Which of the following is a type of loop?",
        choices: ["for",
        "while",
        "for/of",
        "All of the above"],

        answer: "All of the above"
    },
    {
        question: "What does API stand for?",
        choices: ["Application Program Integration",
        "Application Programing Interface",
        "Apply Programs Inside",
        "Apple Programs Integrator"],

        answer: "Application Programing Interface"
    },
    {
        question: "Which of the following is not one of the fundamental programming languages?",
        choices: ["HTML",
         "CSS",
        "Python",
         "JavaScript"],

        answer: "Python"
    },
    {
        question: "How do you write 'Hello!' in an alert box?",
        choices: ["msgBox('Hello!')",
         "msg('Hello!')",
         "alertBox('Hello!')",
         "alert('Hello!')"],

        answer: "alert('Hello!')"
    }

]
var secondsDisplay = document.querySelector("#seconds");
var timerEl = document.querySelector(".timer");
var addScoreEl = document.querySelector("#add-score");
var userScoreEL = document.getElementById("user-score");
var userNameInput;
var questionHeader = document.getElementById("questions");
var answerChoices = document.getElementById("answers");
var submitBtn = document.getElementById("submitBtn");
var restartBtn = document.querySelector("button.restartBtn");
var clearBtn = document.querySelector("button.clearBtn");

var secondsLeft = 60;
var answer;

var questionNumber = 0;



function setTimer() {
    var countdown = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0 || questionNumber === questions.length) {
        clearInterval(countdown);
        setTimeout(displayScore, 500);
        }
    }, 1000);
}

function startTimer() {
    document.getElementById("home").classList.add("d-none");
    document.getElementById("quiz").classList.remove("d-none");

    setTimer();
    
    makeQuestions();
}

function makeQuestions() {
    //Issue here.
    answer = questions[questionNumber].answer

    questionHeader.textContent = questions[questionNumber].question;
    answerChoices.innerHTML = "";

    var choices = questions[questionNumber].choices;

    for (var i = 0; i < choices.length; i++) {
        var nextChoice = document.createElement("button");

        nextChoice.textContent = choices[i]
        answerBtn =  answerChoices.appendChild(nextChoice).setAttribute("class", "btn btn-info btn-sm startBtn");
    }
}

function displayScore() {
    document.getElementById("quiz").classList.add("d-none");
    document.getElementById("submitBtn").classList.remove("d-none");
    userScoreEL.textContent = "SCORE: " + secondsLeft + ".";
}

startBtn.addEventListener("click", startTimer);
submitBtn.addEventListener("click", function (event) {
    if (seconds === 0) {
        window.location.href = "highscores.html"
    }
    event.stopPropagation();
    addScoreEl();
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
    pElement.style.display = "none"
}

function showFeedback() {
    var pElement = document.getElementsByClassName("feedback")[0]
    pElement.removeAttribute("style");
}

answerChoices.addEventListener("click", function (event) {
    var answer = questions[questionNumber].answer
    var pElement = document.getElementsByClassName("feedback")[0]
    console.log(answer);

    if (answer === event.target.textContent) {
        pElement.innerHTML = "Correct!";
        setTimeout(hideFeedback, 1225);
    }
    else {
        pElement.innerHTML = "Incorrect.";
        setTimeout(hideFeedback, 1225);
        secondsLeft = secondsLeft - 20;
        showFeedback();
    }
    questionNumber++;
    makeQuestions();
});
