/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector("#calculator");
const displayScreen = document.querySelector(".display");

/*-------------------------------- Variables --------------------------------*/
let num1 = "";
let num2 = "";
let operator = "";
let result = "";

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener("click", (event) => {
  const btnValue = event.target.innerText;
  const btnClass = event.target.classList;

  // Handle numbers//
  if (btnClass.contains("number")) {
    if (operator === "") {
      num1 += btnValue;
      displayScreen.innerText = num1;
    } else {
      num2 += btnValue;
      displayScreen.innerText = num2;
    }
  }

  // Handle operators//
  if (btnClass.contains("operator")) {
    if (btnValue === "C") {
      clearCalculator();
      return;
    }
    operator = btnValue;
    displayScreen.innerText = "";
  }

  // Handle equals//
  if (btnClass.contains("equals")) {
    if (num1 && num2 && operator) {
      result = calculate();
      displayScreen.innerText = result;

      // prepare for next calculation
      num1 = result.toString();
      num2 = "";
      operator = "";
    }
  }
});

/*-------------------------------- Functions --------------------------------*/
function clearCalculator() {
  num1 = "";
  num2 = "";
  operator = "";
  result = "";
  displayScreen.innerText = "";
}

function calculate() {
  const n1 = Number(num1);
  const n2 = Number(num2);

  switch (operator) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      return n2 !== 0 ? n1 / n2 : "Error";
    default:
      return n1;
  }
}
