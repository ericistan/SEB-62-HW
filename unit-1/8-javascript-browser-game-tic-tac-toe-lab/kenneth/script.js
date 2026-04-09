let board = ["", "", "", "", "", "", "", "", ""];
let turn = "X";
let winner = false;
let tie = false;
let isRunning = false;

const squareEls = document.querySelectorAll(".cell");
const messageEl = document.querySelector("#message-el");
const resetGame = document.querySelector("#reset-game");

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
init();
function init() {
  isRunning = true;

  squareEls.forEach((cell) => {
    cell.innerText = "";
  });

  updateMessage();
}

resetGame.addEventListener("click", init);

squareEls.forEach((cell, idx) => {
  cell.addEventListener("click", () => handleClick(cell, idx));
});

function handleClick(cell, idx) {
  if (!isRunning || cell.innerText !== "") return;

  updateBoard(cell, idx);

  if (!checkForWinner() && !checkForTie()) {
    changePlayer();
    updateMessage();
  }
}

function updateBoard(cell, idx) {
  cell.innerText = turn;
  board[idx] = turn;
}

function changePlayer() {
  turn = turn === "X" ? "O" : "X";
}

function checkForWinner() {
  for (const [a, b, c] of winningCombos) {
    if (board[a] === turn && board[b] === turn && board[c] === turn) {
      winner = true;
      isRunning = false;
      updateMessage();
      return true;
    }
  }

  return false;
}

function checkForTie() {
  if (board.every((cell) => cell !== "")) {
    tie = true;
    isRunning = false;
    updateMessage();
    return true;
  }

  return false;
}

function updateMessage() {
  let message = "";
  if (!winner && !tie) {
    message = `${turn}'s turn`;
  } else if (winner) {
    message = `${turn} wins!`;
  } else {
    message = `Its a tie!`;
  }

  messageEl.innerText = message;
}
