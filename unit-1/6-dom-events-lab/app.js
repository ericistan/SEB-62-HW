/*-------------------------------- Constants --------------------------------*/

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button.number");
const operators = document.querySelectorAll(".button.operator");
const equal = document.querySelector(".button.equals");

const calculator = document.querySelector("#calculator");

/*-------------------------------- Variables --------------------------------*/

let storedNumber = "";
let storedNumber2 = "";
let storedOperator = "";
let computed = "";

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

// Note all below console.log are optional, just for checking purposes
// This version only takes in single digit for computing
calculator.addEventListener("click", (event) => {
  const value = event.target.innerText;
  console.log(`calculator key ${value} was pressed`);

  // Example
  if (event.target.classList.contains("number")) {
    // This if condition stored 2 number with a nested if for checking
    if (storedNumber === "") {
      display.innerHTML = value;
      storedNumber = event.target.innerText;
      console.log(`First ${storedNumber} is successfully stored`);
    } else if (storedNumber !== "" && storedNumber2 === "") {
      display.innerHTML = value;
      storedNumber2 = event.target.innerText;
      console.log(`Second ${storedNumber2} is successfully stored`);
    }
  }

  // Example
  if (event.target.classList.contains("operator")) {
    // This if condition store operator or initialize variables
    if (event.target.innerText !== "C" && storedOperator === "") {
      display.innerHTML = value;
      storedOperator = event.target.innerText;
      console.log(`${storedOperator} is successfully stored`);
    } else if (event.target.innerText === "C") {
      display.innerHTML = value;
      // If C is clicked, initialize all let variables to string
      storedNumber = "";
      storedNumber2 = "";
      storedOperator = "";
      computed = "";
    }
  }

  if (event.target.classList.contains("equals")) {
    // This if condition will handle all computing
    if (storedNumber !== " " && storedOperator === "+") {
      computed = parseInt(storedNumber) + parseInt(storedNumber2);
      display.innerHTML = computed;
      console.log(
        `Check if ${storedNumber} ${storedOperator} ${storedNumber2} is equal to ${computed}`,
      );
    } else if (storedNumber !== " " && storedOperator === "-") {
      computed = parseInt(storedNumber) - parseInt(storedNumber2);
      display.innerHTML = computed;
      console.log(
        `Check if ${storedNumber} ${storedOperator} ${storedNumber2} is equal to ${computed}`,
      );
    } else if (storedNumber !== " " && storedOperator === "*") {
      computed = parseInt(storedNumber) * parseInt(storedNumber2);
      display.innerHTML = computed;
      console.log(
        `Check if ${storedNumber} ${storedOperator} ${storedNumber2} is equal to ${computed}`,
      );
    } else if (storedNumber !== " " && storedOperator === "/") {
      // must use parseInt to convert string to number for computing
      computed = parseInt(storedNumber) / parseInt(storedNumber2);
      display.innerHTML = computed;
      console.log(
        `Check if ${storedNumber} ${storedOperator} ${storedNumber2} is equal to ${computed}`,
      );
    }
  }
});
