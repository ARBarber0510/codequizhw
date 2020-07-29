var restartBtn = document.querySelector("button.restartBtn");
var clearBtn = document.querySelector("button.clearBtn");

highScores = JSON.parse(localStorage.getItem("highScores") || "[]"),
scoreList = document.getElementById("score-list");


clearBtn.addEventListener("click", function() {
    localStorage.clear();
    history.back()
});

restartBtn.addEventListener("click", function() {
    history.back();
})