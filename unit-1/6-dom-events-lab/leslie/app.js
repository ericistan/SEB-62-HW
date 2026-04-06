/*-------------------------------- Constants --------------------------------*/
const cachedActions = [];

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const display = document.querySelector(".display");
const multipicativeStr = "*/";
const additiveStr = "+-";

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

      // last action in cache
      const lastCachedAction = cachedActions.at(-1);
      // console.log(lastCachedAction);

      switch (buttonType) {
        case "operator":
          if (buttonValue === "C") {
            // clear cached actions
            clearActions();
          } else {
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
              // treat the equal action as a new default number in cache
              if (lastCachedAction.type === "equals") {
                lastCachedAction.type = "number";
              }
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
          if (
            lastCachedAction.type === "equals" ||
            (lastCachedAction.isFirst && lastCachedAction.value === "0")
          ) {
            cachedActions.pop();
          }
          addAction(
            buttonType,
            buttonValue,
            lastCachedAction.type === "operator" || cachedActions.length === 0,
          );
          break;
        case "equals":
          resolveActions();
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

function addAction(type, value, isFirst = false) {
  cachedActions.push({
    type: type,
    value: value,
    isFirst: isFirst,
  });
  console.log(cachedActions);
}

function clearActions(defaultValue = "0") {
  cachedActions.length = 0;
  addAction("equals", defaultValue, true);
}

function resolveActions() {
  const formattedActions = [];
  let lastButtonType = "";
  const multiplicativeOpArr = [];
  let multipicativeObj = undefined;

  for (const actionObj of cachedActions) {
    if (formattedActions.length === 0) {
      // add first value; first value is always a number
      formattedActions.push(actionObj.value);
    } else {
      // check if the last formatted type and current type are the same
      if (lastButtonType === actionObj.type) {
        formattedActions[formattedActions.length - 1] += actionObj.value;
      } else {
        if (multipicativeStr.includes(actionObj.value) && !multipicativeObj) {
          multipicativeObj = { startIdx: formattedActions.length - 1 };
        } else if (additiveStr.includes(actionObj.value) && multipicativeObj) {
          multipicativeObj.endIdx = formattedActions.length - 1;
          multiplicativeOpArr.push(multipicativeObj);
          multipicativeObj = undefined;
        }
        formattedActions.push(actionObj.value);
      }
    }
    lastButtonType = actionObj.type;
  }

  if (multipicativeObj) {
    multipicativeObj.endIdx = formattedActions.length - 1;
    multiplicativeOpArr.push(multipicativeObj);
  }
  // console.log(formattedActions);

  // remove last action if it is an operator
  if (lastButtonType === "operator") {
    formattedActions.pop();
  }

  // evaluate the formatted actions
  // solve all multiplicative operations first
  for (const mObj of multiplicativeOpArr.reverse()) {
    mObj.value = formattedActions[mObj.startIdx];

    for (let i = mObj.startIdx + 2; i <= mObj.endIdx; i += 2) {
      let currentOperator = formattedActions[i - 1];
      let currentValue = formattedActions[i];

      if (currentOperator === "*") {
        mObj.value *= currentValue;
      } else if (currentOperator === "/") {
        mObj.value /= currentValue;
      }
    }

    formattedActions.splice(
      mObj.startIdx,
      mObj.endIdx + 1 - mObj.startIdx,
      mObj.value,
    );
  }
  // console.log(multiplicativeOpArr);
  // console.log(formattedActions);

  let evaluatedResult = formattedActions[0];

  if (formattedActions.length >= 3) {
    for (let i = 2; i < formattedActions.length; i += 2) {
      let currentOperator = formattedActions[i - 1];
      let currentValue = formattedActions[i];

      if (currentOperator === "+") {
        evaluatedResult += currentValue;
      } else if (currentOperator === "-") {
        evaluatedResult -= currentValue;
      }
    }
  }

  cachedActions.length = 0;
  addAction("equals", evaluatedResult);
}

clearActions();
updateDisplay();
