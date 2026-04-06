/*-------------------------------- Constants --------------------------------*/
const cachedActions = [];

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const display = document.querySelector(".display");
const multipicativeStr = "*/";

/*----------------------------- Event Listeners -----------------------------*/
// EventListener to listen for clicks within #calculator parent
document.querySelector("#calculator").addEventListener("click", function (e) {
  // console.log(e.target.innerHTML);

  // Check if the target's class has the prefix of "button"
  if (e.target.classList.contains("button")) {
    const splitedClassName = e.target.className.split(" ");

    if (splitedClassName.length > 1) {
      const buttonType = splitedClassName[1];
      const buttonValue = e.target.innerText;
      // console.log(buttonType, buttonValue);

      switch (buttonType) {
        case "operator":
          if (buttonValue === "C") {
            // clear cached actions
            clearActions();
          } else {
            // check last action in cache
            const lastCachedAction = cachedActions.at(-1);
            // console.log(lastCachedAction);

            if (lastCachedAction.type === "operator") {
              if (lastCachedAction.value !== buttonValue) {
                if (buttonValue === "-") {
                  // if last action was a multiplicative operation treat the - (minus)
                  // as a negative sign
                  if (multipicativeStr.includes(lastCachedAction.value)) {
                    addAction("number", buttonValue);
                  } else {
                    lastCachedAction.value = buttonValue;
                  }
                } else {
                  lastCachedAction.value = buttonValue;
                }
              }
            } else {
              // if last action type was a number, check if the value is a negative sign
              if (lastCachedAction.value === "-") {
                // remove the negative sign and the operator
                // before it before adding new operator
                cachedActions.splice(-2, 2);
              }
              addAction(buttonType, buttonValue);
            }
          }
          break;
        case "number":
          if (cachedActions.length === 1 && cachedActions[0].value === "0") {
            cachedActions[0].value = buttonValue;
          } else {
            addAction(buttonType, buttonValue);
          }
          break;
        case "equals":
          break;
        default:
          break;
      }

      updateDisplay();
    }
  }
});

/*-------------------------------- Functions --------------------------------*/
function updateDisplay() {
  const valueArr = cachedActions.map(({ value }) => value);
  // console.log(valueArr);
  display.innerHTML = valueArr.join("");
}

function addAction(type, value) {
  cachedActions.push({
    type: type,
    value: value,
  });
  console.log(cachedActions);
}

function clearActions() {
  cachedActions.length = 0;
  addAction("number", "0");
}

// function resolveActions() {
//   const formattedActions = ["0"];
//   let lastActionIsNumber = true;

//   for (const actionObj of cachedActions) {
//     if (lastActionIsNumber) {
//       if (actionObj.isNum) {
//         // concat actionObj.value to the value of the last action
//         formattedActions[formattedActions.length - 1] += actionObj.value;
//       } else {
//         formattedActions.push(actionObj.value);
//         lastActionIsNumber = false;
//       }
//     } else {
//       // last action is an operator
//       if (actionObj.isNum) {
//         formattedActions.push(actionObj.value);
//         lastActionIsNumber = true;
//       } else {
//         //
//       }
//     }
//   }
//   console.log(formattedActions);
// }

clearActions();
updateDisplay();
