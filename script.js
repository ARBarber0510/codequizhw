var startBtn = document.querySelector("#startBtn");
let questions = [
    {
    question: "In what HTML element do you put JavaScript?",
    choice1: "<javascript>",
    choice2: ",js>",
    choice3: "<script",
    choice4: "<java>",

    answer: 3
    },
    {
    question: "What is the correct syntax for referring to an external script?",
    choice1: "<script href=''>",
    choice2: "<script src=''>",
    choice3: "<script name=''>",
    choice4: "<script file=''>",

    answer: 2
    },
    {
    question: "What is the definition of an array?",
    choice1: "Variable that can hold more than one value at a time",
    choice2: "Zero or more characters written inside quotes",
    choice3: "Any integer with no quotation marks",
    choice4: "None of the above",

    answer: 1
    },
    {
    question: "Which of the following is not a function?",
    choice1: "Grow",
    choice2: "Alert",
    choice3: "Prompt",
    choice4: "Confirm",
    
    answer: 1
    },
    {
    question: "Which of the following is a type of loop?",
    choice1: "for",
    choice2: "while",
    choice3: "for/of",
    choice4: "All of the above",

    answer: 4
    },
    {
    question: "What does API stand for?",
    choice1: "Application Program Integration",
    choice2: "Application Programing Interface",
    choice3: "Apply Programs Inside",
    choice4: "Apple Programs Integrator",

    answer: 2
    },
    {
    question: "Which of the following is not one of the fundamental programming languages?",
    choice1: "HTML",
    choice2: "CSS",
    choice3: "Python",
    choice4: "JavaScript",

    answer: 3
    },
    {
    question: "How do you write 'Hello!' in an alert box?",
    choice1: "msgBox('Hello!')",
    choice2: "msg('Hello!')",
    choice3: "alertBox('Hello!')",
    choice4: "aler('Hello!')",

    answer: 4
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

var secondsLeft = 60;
var secondsElapsed = 0;
var interval;

var questionNumber = -1;
var answer;


// getTimePreferences ();

function getFormattedSeconds() {
    var secondsLeft = (totalSeconds - secondsElapsed) % 60;
  
    var formattedSeconds;
  
    if (secondsLeft < 10) {
      formattedSeconds = "0" + secondsLeft;
    } else {
      formattedSeconds = secondsLeft;
    }
  
    return formattedSeconds;
  }

  function setTime () {
    var countdown = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0 ||questionNumber === 0 ) {
            clearInterval(countdown);
            setTimeout(displayScore, 500);
        }
    }, 1000);
}

function startTimer () {
    document.getElementById("home");
    document.getElementById("quiz");

    setTime ();
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

