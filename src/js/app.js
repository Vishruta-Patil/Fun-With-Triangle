const angle1 = document.querySelector(".angle-1")
const angle2 = document.querySelector(".angle-2")
const angle3 = document.querySelector(".angle-3")
const isTriangleBtn = document.querySelector(".is-Triangle-Btn")
const isTriangleResult = document.querySelector(".is-Triangle-Result")

function isTriangleHandler() {
   if (angle1.value === "" || angle2.value === "" || angle3.value === "") {
    isTriangleResult.innerText = "Please fill all the credentials";
}
else {
    if ((Number(angle1.value) + Number(angle2.value) + Number(angle3.value)) === 180 ) {
        isTriangleResult.innerText = "Woah!!! The angles form Triangle";
    }
    else {
        isTriangleResult.innerText = "Oh oh, The angles do not form triangle"
      }
    }
}


 isTriangleBtn.addEventListener("click", isTriangleHandler)





