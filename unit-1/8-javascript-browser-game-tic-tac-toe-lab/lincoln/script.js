console.log("Test Message 3, 2, 1");

let board = [];
let turn = "X";
let winner = false;
let tie = false;

const squareEls = document.querySelectorAll(".box");
const messageEl = document.querySelector(".results");
const resetBtnEl = document.querySelector(".reset");

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const init = () => {
  board = ["", "", "", "", "", "", "", "", ""];
  console.log(`Initializing Number Array [${board}]`);
  turn = "X";
  console.log(`Initializing X, if is ${turn}'s turn`);
  winner = false;
  console.log(`Initializing false, Winner: ${winner}`);
  tie = false;
  console.log(`Initializing false, Tie: ${tie}`);
  render();
};

const render = () => {
  updateBoard();
  updateMessage();
};

const updateBoard = () => {
  board.forEach((index, num) => {
    squareEls[num].innerHTML = index;
  });
};

const updateMessage = () => {
  if (winner === false && tie === false) {
    messageEl.innerText = `It is ${turn}'s turn.`;
  } else if (winner === false && tie === true) {
    messageEl.innerText = "It's a tie!";
    console.log(`Game End, It is a ${tie} for tie!`);
  } else {
    messageEl.innerText = `${turn} wins!`;
    console.log(`Game End, ${turn} wins!`);
  }
};

const handleClick = (event) => {
  // As usual check for winner before continue
  if (winner === true || board[event]) {
    return;
  }
  // Insert O and X depending on player turn and check win or tie
  board[event] = turn;
  checkForWinner();
  checkForTie();
  // game would continue and switch turn
  if (winner === false && tie === false) {
    switchPlayerTurn();
  }
  // As usual, update board and message
  render();
};

// // Not using this lab example, purpose insert into handleClick
// const placePiece = (index) => {};

const checkForWinner = () => {
  //some method return boolean true if any array is found
  winner = winCombos.some((check) => {
    const [a, b, c] = check;
    // follow lab example check string and if a=b=c
    if (board[a] != "" && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  });
};

const checkForTie = () => {
  if (winner === true) {
    return;
  } else if (board.includes("") === false) {
    tie = true;
  }
};

const switchPlayerTurn = () => {
  if (winner === true) {
    console.log("Game End");
    return;
  } else if (winner === false && turn === "X") {
    turn = "O";
    console.log(`Player switch from X to ${turn}`);
  } else if (winner === false && turn === "O") {
    turn = "X";
    console.log(`Player switch from O to ${turn}`);
  }
};

// squareEls.addEventListener("click", handleClick);
squareEls.forEach((eachSq, event) => {
  eachSq.addEventListener("click", () => {
    handleClick(event);
  });
});

// Added reset function
resetBtnEl.addEventListener("click", () => {
  init();
  console.log("reset button is pressed.");
});

init();
