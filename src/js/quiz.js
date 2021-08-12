var quizBtn = document.querySelector(".quiz-btn");
var quizResult = document.querySelector(".quiz-result");
var form = document.querySelector(".form");

var correctAnswers = ["45°", "right", "An angle that measures less than 90°", "5cm", "Isosceles", "30°", "35 sq cm", "Yes", "62.35", "3 cm"];

function quizResultHandler() {
    let score = 0, index = 0;
    var formResult = new FormData(form);
    for (let value of formResult.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    quizResult.classList.remove("hide");
    quizResult.classList.add("display");
    quizResult.innerText = "Your score is " + score;
}

quizBtn.addEventListener("click", quizResultHandler);