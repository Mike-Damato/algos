/*
RULES:
Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
*/
var gameOfLife = function (board) {
  markBoard(board);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === -1) {
        board[i][j] = 1;
      } else if (board[i][j] === 2) {
        board[i][j] = 0;
      }
    }
  }
  return board;
};

const markBoard = (board) => {
  // Go over the board and mark each element as:
  // -1 if it is dead and will become alive;
  // 0 - dead, remains dead;
  // 1 - alive, remains alive; and
  // 2 - alive, becomes dead.
  // Using these numbers enables us to count neighbors simply by a greater than evaluation.

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let neighbors = getNeighbors(board, i, j);
      if (board[i][j] === 1 && (neighbors < 2 || neighbors > 3)) {
        board[i][j] = 2;
      } else if (board[i][j] === 0 && neighbors === 3) {
        board[i][j] = -1;
      }
    }
  }
};

const getNeighbors = (board, i, j) => {
  let count = 0;
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (const direction of directions) {
    let x = i + direction[0];
    let y = j + direction[1];
    //Confirm cell is in bounds
    if (x >= 0 && x < board.length && y >= 0 && y < board[0].length) {
      //Now check if cell is marked as alive, if it is we add to our living neighbors
      if (board[x][y] > 0) {
        count++;
      }
    }
  }
  return count;
};
