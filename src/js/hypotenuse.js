const side1 = document.querySelector(".side-1");
const side2 = document.querySelector(".side-2");
const hypotenuseBtn = document.querySelector(".is-hypotenuse");
const hypotenuseResult = document.querySelector(".is-hypotenuse-Result");

function hypotenuseHandler() {
    if (side1.value === "" || side2.value === "") {
        isTriangleResult.innerText = "Please fill all the credentials";
    }
    else {
        var a = Number(side1.value), b = Number(side2.value)
        var hypotenuseFormula = Math.sqrt((Math.pow(a,2)) + (Math.pow(b,2)))
        hypotenuseResult.innerText = "The length of Hypotenuse is " + hypotenuseFormula + " cm";
    }
}

hypotenuseBtn.addEventListener("click", hypotenuseHandler);
