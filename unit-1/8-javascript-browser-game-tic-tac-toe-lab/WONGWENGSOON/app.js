// State variable - what is happening in the game right now
let board;
let turn;
let winner;
let tie;

// Cached Elements
const squareEls = document.querySelectorAll(".square");
const messageEl = document.querySelector("#message");
const resetBtnEl = document.querySelector("#reset");
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

function init() {
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X";
  winner = false;
  tie = false;

  render();
}
// this is like recipe or instruction
// console.log(squareEls);
// console.log(squareEls.length);
// console.log(messageEl);
// console.log(resetBtnEl);
init(); // this is to run it.
console.log();

function render() {
  updateBoard();
  updateMessage();
}
function updateBoard() {
  board.forEach(function (cell, index) {
    squareEls[index].textContent = cell;
  });
}
function updateMessage() {
  if (!winner && !tie) {
    messageEl.textContent = turn + "'s turn";
  } else if (winner) {
    messageEl.textContent = turn + " wins!";
  } else {
    messageEl.textContent = "It's a tie!";
  }
}

function handleClick(event) {
  const squareIndex = Number(event.target.id);

  if (board[squareIndex] !== "" || winner || tie) {
    return;
  }

  board[squareIndex] = turn;
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
  //console.log(event.target.id);
}
squareEls.forEach(function (square) {
  square.addEventListener("click", handleClick);
});

function switchPlayerTurn() {
  if (winner) {
    return;
  }
  if (turn === "X") {
    turn = "O";
  } else {
    turn = "X";
  }
}

function checkForWinner() {
  winningCombos.forEach(function (combo) {
    const a = combo[0];
    const b = combo[1];
    const c = combo[2];

    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      winner = true;
    }
  });
}

function checkForTie() {
  if (winner) {
    return;
  }
  if (!board.includes("")) {
    tie = true;
  }
}

resetBtnEl.addEventListener("click", init);
