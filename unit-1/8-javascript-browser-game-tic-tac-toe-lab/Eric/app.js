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
let board = [" "];
let turn = "X";
let winner = false;
let tie = false;
const squareEls = document.querySelectorAll(".square");

//2) Store cached element references.
const messageEl = document.getElementById("message");

//3) Upon loading, the game state should be initialized, and a function should
//   be called to render this game state.
function init() {
  board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  let turn = "X";
  let winner = false;
  let tie = false;
  render();
  updateBoard();

  console.log("init ran");
}

//4) The state of the game should be rendered to the user.
function render() {}
function updateBoard() {
  board.forEach((square) => {
    console.log(square);
  });
}

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality. */

init();
