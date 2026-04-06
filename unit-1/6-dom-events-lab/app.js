/*-------------------------------- Constants --------------------------------*/
// 1. As a user, I want to be able to select numbers so that I can perform operations with them.
const buttons = document.querySelectorAll(".button");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const clearButton = document.querySelector("#clear");
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    console.log(event.target.innerText);
    // Future logic to capture the button's value would go here...
  });
});

// As a user, I want to be able to add two numbers together.
addButton.addEventListener("click", (button1, button2) => {
    
})


/*-------------------------------- Functions --------------------------------*/


As a user, I want to be able to subtract one number from another.
As a user, I want to be able to multiply two numbers together.
As a user, I want to be able to divide one number by another.
As a user, I want to be able to see the output of the mathematical operation.
As a user, I want to be able to clear all operations and start from 0.