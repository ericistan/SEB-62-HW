/*-------------------------------- Constants --------------------------------*/
const cachedActions = [];

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const display = document.querySelector(".display");

/*----------------------------- Event Listeners -----------------------------*/
// EventListener to listen for clicks within #calculator parent
document.querySelector("#calculator").addEventListener("click", function (e) {
  // console.log(e.target.innerHTML);
  // Check if the target's class has the prefix of "button"
  if (e.target.classList.contains("button")) {
    switch (e.target.innerText) {
      case "C":
        cachedActions.length = 0;
        break;
      case "=":
        resolveActions();
        break;
      default:
        // add new action object
        cachedActions.push({
          isNum: e.target.className === "button number",
          value: e.target.innerText,
        });
        console.log(cachedActions);
        break;
    }

    updateDisplay();
  }
});

/*-------------------------------- Functions --------------------------------*/
function updateDisplay() {
  const valueArr = cachedActions.map(({ value }) => value);
  // console.log(valueArr);
  display.innerHTML = valueArr.join("");
}

function resolveActions() {
  const formattedActions = ["0"];
  let lastActionIsNumber = true;
  for (const actionObj of cachedActions) {
    if (actionObj.isNum) {
      if (lastActionIsNumber) {
        formattedActions[formattedActions.length - 1] += actionObj.value;
      }
    }
  }
  console.log(formattedActions);
}
