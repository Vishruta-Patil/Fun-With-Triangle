var quizBtn = document.querySelector(".quiz-btn");
var quizResult = document.querySelector(".quiz-result");
var form = document.querySelector(".form");
var quizBox = document.querySelectorAll(".quiz-container");

var correctAnswers = ["45°", "right", "An angle that measures less than 90°", "5cm", "Isosceles", "30°", "35 sq cm", "Yes", "62.35", "3 cm"];


function colorIndicator() {
    var index = 0, countor = 0;
    var formResult = new FormData(form);
    for (let value of formResult.values()) {
        if (value !== correctAnswers[index]) {
            quizBox[index].classList.add("red-alert");
            countor++;
        }
        index = index + 1;
    }
}


function checkCounter() {
    var index = 0, countor = 0;
    var formResults = new FormData(form);

    for (value of formResults.values()) {
        if (correctAnswers[index] === value)
            countor++;
        index++;
    }

    var wrongAnswers = 10 - countor;
    var rightAnswers = countor;

    return quizResult.innerText = "Correct Answers: " + rightAnswers + "\n" + "Wrong Answers: " + wrongAnswers;
}


function quizResultHandler() {
    let score = 0, index = 0;
    var formResult = new FormData(form);
    for (let value of formResult.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }

    colorIndicator();

    // quizResult.classList.remove("hide");
    // quizResult.classList.add("display");
    quizResult.innerText = checkCounter() + "\n" +  "Your score is " + score; 
}


quizBtn.addEventListener("click", quizResultHandler);
