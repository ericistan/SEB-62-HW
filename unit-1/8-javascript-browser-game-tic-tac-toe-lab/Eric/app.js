// Minimum requirements
// Display an empty tic-tac-toe board when the page is initially displayed.
// A player can click on the nine cells to make a move.
// Every click will alternate between marking an X and O.
// Display whose turn it is (X or O).
// The cell cannot be played again once occupied with an X or O.
// Provide win logic and display a winning message.
// Provide logic for a cat's game (tie), also displaying a message.
// Provide a Reset Game button that will clear the contents of the board. */

//1) Define the required variables used to track the state of the game.
let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let turn = "X";
let winner = false;
let tie = false;
const squareEls = document.querySelectorAll(".square");
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

//2) Store cached element references.
const messageEl = document.getElementById("message");
const resetBtnEl = document.getElementById("reset");

//3) Upon loading, the game state should be initialized, and a function should
//   be called to render this game state.
function init() {
  board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  turn = "X";
  winner = false;
  tie = false;
  render();
  updateBoard();

  console.log("init ran");
}

//4) The state of the game should be rendered to the user.
function render() {
  updateBoard();
  updateMessage();
}

function updateBoard() {
  board.forEach((item, index) => {
    squareEls[index].innerText = item;
  });
}

function updateMessage() {
  if (winner === false && tie === false) {
    messageEl.textContent = `It's ${turn} turn!`;
  } else if (winner === false && tie === true) {
    messageEl.textContent = `It's a tie!`;
  } else {
    messageEl.textContent = `Player ${turn} wins!`;
  }
}

//6) Handle a player clicking a square with a `handleClick` function.
function handleClick(event) {
  const squareIndex = Number(event.target.id);

  console.log("handleClick ran", squareIndex);

  if (board[squareIndex] === "X" || board[squareIndex] === "O") {
    console.log("That square is already taken!");
    return;
  } else if (winner === true || tie === true) {
    console.log("The game is already over!");
    return;
  }
  placePiece(squareIndex);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
}

squareEls.forEach((square) => {
  square.addEventListener("click", handleClick);
});

function placePiece(index) {
  board[index] = turn;
  console.log(board);
}

function checkForWinner() {
  if (board[0] !== " " && board[0] === board[1] && board[1] === board[2]) {
    winner = true;
  }
  if (board[3] !== " " && board[3] === board[4] && board[4] === board[5]) {
    winner = true;
  }
  if (board[6] !== " " && board[6] === board[7] && board[7] === board[8]) {
    winner = true;
  }
  if (board[0] !== " " && board[0] === board[3] && board[3] === board[6]) {
    winner = true;
  }
  if (board[1] !== " " && board[1] === board[4] && board[4] === board[7]) {
    winner = true;
  }
  if (board[2] !== " " && board[2] === board[5] && board[5] === board[8]) {
    winner = true;
  }
  if (board[0] !== " " && board[0] === board[4] && board[4] === board[8]) {
    winner = true;
  }
  if (board[2] !== " " && board[2] === board[4] && board[4] === board[6]) {
    winner = true;
  }
  console.log("winner:", winner);
}

checkForTie = () => {
  if (winner === true || board.includes(" ") === true) {
    return;
  } else {
    tie = true;
  }
};

switchPlayerTurn = () => {
  if (winner === true || tie === true) {
    return;
  } else if (turn === "X") {
    turn = "O";
  } else {
    turn = "X";
  }
  console.log("turn is now:", turn);
};
//7) Create Reset functionality. */
init();
resetBtnEl.addEventListener("click", init);
