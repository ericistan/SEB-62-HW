/*-------------------------------- Constants --------------------------------*/

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button.number");
const operators = document.querySelectorAll(".button.operator");
const equal = document.querySelector(".button.equals");

const calculator = document.querySelector("#calculator");

/*-------------------------------- Variables --------------------------------*/

let storedNumber = [];
let storedNumberPrevious = [];
let storedOperator = "";
let computed = "";

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

// Desmond's comment
// Nice work but you should modularise you codes
// and put the codes in your callback function
// into other functions, this would make it
// easier to read and maintain.
// And also, remove or comment console.log, when
// you are done. It is not good to leave them
// around.

// Note all below console.log are optional, just for checking purposes
calculator.addEventListener("click", (event) => {
  const value = event.target.innerText;
  console.log(`calculator key ${value} was pressed`);

  // Example
  if (event.target.classList.contains("number")) {
    if (computed !== "") {
      //to initialize if there was previous computing
      storedNumber = [];
      storedNumberPrevious = [];
      storedOperator = "";
      computed = "";
    }

    storedNumber.push(event.target.innerText);
    console.log(`First ${storedNumber} is successfully stored`);
    display.innerHTML = storedNumber.join("");
  }

  // Example
  if (event.target.classList.contains("operator")) {
    // This if condition store operator or initialize variables
    if (event.target.innerText !== "C" && storedOperator === "") {
      // this if condition only takes in the 1st Operator pressed
      storedNumberPrevious = storedNumber;
      console.log(`Previous ${storedNumberPrevious} is successfully stored`);
      storedOperator = event.target.innerText;
      console.log(`Operator ${storedOperator} is successfully stored`);
      display.innerHTML = event.target.innerText;
      storedNumber = [];
      console.log(`StoredNumber ${storedNumber} is successfully cleared`);
    } else if (event.target.innerText === "C") {
      display.innerHTML = value;
      // If C is clicked, initialize all let variables to string
      storedNumber = [];
      storedNumberPrevious = [];
      storedOperator = "";
      computed = "";
    }
  }

  if (event.target.classList.contains("equals")) {
    // This if condition will handle all computing
    if (storedNumber !== " " && storedOperator === "+") {
      computed =
        parseInt(storedNumberPrevious.join("")) +
        parseInt(storedNumber.join(""));
      display.innerHTML = computed;
      console.log(
        `Check if ${storedNumberPrevious} ${storedOperator} ${storedNumber} is equal to ${computed}`,
      );
    } else if (storedNumber !== " " && storedOperator === "-") {
      computed =
        parseInt(storedNumberPrevious.join("")) -
        parseInt(storedNumber.join(""));
      display.innerHTML = computed;
      console.log(
        `Check if ${storedNumberPrevious} ${storedOperator} ${storedNumber} is equal to ${computed}`,
      );
    } else if (storedNumber !== " " && storedOperator === "*") {
      computed =
        parseInt(storedNumberPrevious.join("")) *
        parseInt(storedNumber.join(""));
      display.innerHTML = computed;
      console.log(
        `Check if ${storedNumberPrevious} ${storedOperator} ${storedNumber} is equal to ${computed}`,
      );
    } else if (storedNumber !== " " && storedOperator === "/") {
      // must use parseInt to convert string to number for computing
      computed =
        parseInt(storedNumberPrevious.join("")) /
        parseInt(storedNumber.join(""));
      display.innerHTML = computed;
      console.log(
        `Check if ${storedNumberPrevious} ${storedOperator} ${storedNumber} is equal to ${computed}`,
      );
    }
  }
});
