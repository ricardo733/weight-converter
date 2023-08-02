const inputEl = document.querySelector(".input");
const errorEl = document.querySelector(".error");
const resultEl = document.getElementById("result");

let errorTime;
let resultTime;
inputEl.addEventListener("input", () => {
  if (inputEl.value <= 0 || isNaN(inputEl.value)) {
    errorEl.innerText = "Please enter a valid number!";
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      errorEl.innerText = "";
      inputEl.value = "";
    }, 2000);
    resultEl.innerText = "";
  } else {
    resultEl.innerText = (+inputEl.value / 2.20462).toFixed(3);
    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
      resultEl.innerText = "";
      inputEl.value = "";
    }, 10000);
  }
});
