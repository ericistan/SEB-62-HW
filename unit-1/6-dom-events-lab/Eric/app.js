/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
/*-------------------------------- Variables --------------------------------*/
let currentInput = "";
let operator = "";
let previousInput = "";

/*------------------------ Cached Element References ------------------------*/
//not sure what this means.
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const value = event.target.innerText; // As a user, I want to be able to select numbers so that I can perform operations with them.
    if (event.target.classList.contains("number")) {
      currentInput += value;
      display.innerText = currentInput;
    } else if (event.target.classList.contains("operator")) {
      previousInput = currentInput;
      operator = value;
      currentInput = "";
      display.innerText = operator;
    } else if (event.target.classList.contains("equals")) {
      const firstNum = Number(previousInput);
      const secondNum = Number(currentInput);
      let result = "";

      if (operator === "+") {
        result = firstNum + secondNum; // As a user, I want to be able to add two numbers together.
      } else if (operator === "-") {
        result = firstNum - secondNum; // As a user, I want to be able to subtract one number from another.
      } else if (operator === "*") {
        result = firstNum * secondNum; // As a user, I want to be able to multiply two numbers together.
      } else if (operator === "/") {
        result = firstNum / secondNum; // As a user, I want to be able to divide one number by another.
      }
      display.innerText = result;
      currentInput = String(result); // As a user, I want to be able to see the output of the mathematical operation.
    } else if (event.target.classList.contains("clear")) {
      currentInput = "";
      operator = "";
      previousInput = "";
      display.innerText = "0"; // As a user, I want to be able to clear all operations and start from 0.
      //not able to figure out how to change 'C' to 0 when I press the button.
    }
  });
});
/*-------------------------------- Functions --------------------------------*/
