const base = document.querySelector(".base");
const height = document.querySelector(".height");
const areaBtn = document.querySelector(".area-btn");
const areaResult = document.querySelector(".area-result");

function areaHandler() {
    if (base.value === "" || height.value === "") {
        areaResult.innerText = "Please fill all the credentials";
    }
    else {
        var a = Number(base.value), b = Number(height.value)
        var areaFormula = (0.5 * (a*b));
        areaResult.innerText = "The area of triangle is " + areaFormula + " sq cm";
    }
}

areaBtn.addEventListener("click",areaHandler);