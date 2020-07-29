var restartBtn = document.querySelector("button.restartBtn");
var clearBtn = document.querySelector("button.clearBtn");

highScores = JSON.parse(localStorage.getItem("highScores") || "[]"),
scoreList = document.getElementById("score-list");

highScores.sort(function (a, b) {
    return b.score - a.score
})

for (var h = 0; h < highScores.length; h++) {
    var newLi = document.createElement("li")
    newLi. textContent = highScores[h].name + " - " + highScores[h].score
    scoreList.appendChild(newLi)
}

clearBtn.addEventListener("click", function() {
    localStorage.clear();
    history.back()
});

restartBtn.addEventListener("click", function() {
    history.back();
})