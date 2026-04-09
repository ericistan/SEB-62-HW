// WONG WENG SOON

// Desmond's comments
// Good job but try to modularise your codes, it
// would make it easier to read and maintain

let num1;
let num2;
let operator;
let result;

const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");
calculator.addEventListener("click", function (event) {
  if (event.target.innerText === "C") {
    display.innerText = "";
    num1 = null;
    num2 = null;
    operator = null;
    result = null;
  }

  // Desmond's comment
  // for these 3 if statments, you should be
  // able to use if...else if, because if a
  // classList contains number, it cannot
  // contain operator at the same time.

  if (event.target.classList.contains("number")) {
    display.innerText = display.innerText + event.target.innerText;
    console.log(event.target.innerText);
  }
  if (
    event.target.classList.contains("operator") &&
    event.target.innerText !== "C"
  ) {
    num1 = Number(display.innerText);
    operator = event.target.innerText;
    display.innerText = "";
    // console.log(event.target.innerText);
    // console.log(num1, operator);
  }
  if (event.target.classList.contains("equals")) {
    num2 = Number(display.innerText);
    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "*") {
      result = num1 * num2;
    } else if (operator === "/") {
      result = num1 / num2;
    }
    display.innerText = result;
    console.log(num2);
  }
});

// WONG WENG SOON
