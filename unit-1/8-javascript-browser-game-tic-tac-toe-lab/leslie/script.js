const board = [];
const squareEls = [];
let turn, winner, tie;
const boardContainer = document.querySelector("#board");
const resetBtnEl = document.querySelector("#reset");
const playerClasses = { x: "player-x", o: "player-o" };
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
const boardSquareClass = "board-square";
const playerX = "X";
const playerO = "O";

const updateBoard = () => {
  for (const square of squareEls) {
    const [, , idx] = square.id.split("-");
    const value = board[idx];
    square.textContent = value;
    if (value === "") {
      square.classList.remove(playerClasses.x, playerClasses.y);
    } else {
      square.classList.add(playerClasses[value.toLowerCase()]);
    }
  }
};

const updateMessage = () => {
  const messageContainer = document.querySelector("#message");
  let message = "";
  if (winner) {
    messageContainer.className = playerClasses[turn.toLowerCase()];
    message = `The winner is ${turn}`;
  } else if (tie) {
    messageContainer.className = "";
    message = `The game is tied.`;
  } else {
    messageContainer.className = playerClasses[turn.toLowerCase()];
    message = `Player ${turn}, your move.`;
  }
  messageContainer.textContent = message;
};

const render = () => {
  updateBoard();
  updateMessage();
};

const placePiece = (targetSquare) => {
  const [, , idx] = targetSquare.id.split("-");
  if (board[idx] === "") {
    board[idx] = turn;
    return true;
  }
  return false;
};

const checkForWinner = () => {
  for (const winningCombo of winningCombos) {
    winner =
      board[winningCombo[0]] +
        board[winningCombo[1]] +
        board[winningCombo[2]] ===
      turn + turn + turn;
    if (winner) {
      break;
    }
  }
};

const checkForTie = () => {
  tie = !board.includes("");
};

const switchPlayerTurn = () => {
  turn = turn === playerX ? playerO : playerX;
};

const handleClick = (e) => {
  if (!winner && !tie && e.target.className === boardSquareClass) {
    if (placePiece(e.target)) {
      checkForWinner();
      if (!winner) {
        checkForTie();
        if (!tie) {
          switchPlayerTurn();
        }
      }
    }
  }

  render();
};

const init = () => {
  // reset board to an array of 9 empty strings
  board.length = 0;
  boardContainer.innerHTML = "";

  for (let i = 0; i < 9; i++) {
    board.push("");
    const square = document.createElement("div");
    square.id = `board-square-${i}`;
    square.className = boardSquareClass;
    square.textContent = "";
    squareEls.push(boardContainer.appendChild(square));
  }

  turn = playerX;
  winner = false;
  tie = false;

  render();
};

boardContainer.addEventListener("click", handleClick);
resetBtnEl.addEventListener("click", init);
init();
