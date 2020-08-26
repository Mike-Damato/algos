var candyCrush = function (board) {
  mark(board);
  while (!isStable(board)) {
    crush(board);
    mark(board);
  }
  return board;
};

/*
We want to check surrounding cells - vertically & horizontally to see if they are === to the current cell.

So first we check if that cell exists, then check to see if absolute value of that cell === our current cell.

If it does we want to mark it as checked, so we just convert the number to the opposite sign (positive -> negative OR negative -> positive)
*/
const mark = (board) => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      let fixed = Math.abs(board[row][col]);

      if (
        board[row + 1] &&
        Math.abs(board[row + 1][col]) === fixed &&
        board[row - 1] &&
        Math.abs(board[row - 1][col]) === fixed
      ) {
        board[row - 1][col] = -Math.abs(board[row - 1][col]);
        board[row][col] = -Math.abs(board[row][col]);
        board[row + 1][col] = -Math.abs(board[row + 1][col]);
      }

      if (
        Math.abs(board[row][col + 1]) === fixed &&
        Math.abs(board[row][col - 1]) === fixed
      ) {
        board[row][col + 1] = -Math.abs(board[row][col + 1]);
        board[row][col] = -Math.abs(board[row][col]);
        board[row][col - 1] = -Math.abs(board[row][col - 1]);
      }
    }
  }
};

/*
Check to see if there are more cells to explore after crushing
We know there are more to explore if there are any negatives remaining
*/
const isStable = (board) => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] < 0) {
        return false;
      }
    }
  }
  return true;
};

/*
For each column, make a stack, check to see if the cell is positive.
if it is push into our stack to crush
We also need to have our candies drop to the bottom, so we declare bottomBound
while theres stuff in our stack populate our bottom row with it
move bottom row up until we run out of stuff in our stack

lastly while the bottom is bigger than 0 we need to make empty spaces
*/
const crush = (board) => {
  for (let col = 0; col < board[0].length; col++) {
    let stack = [];
    for (let row = 0; row < board.length; row++) {
      if (board[row][col] > 0) {
        stack.push(board[row][col]);
      }
    }
    let bottomBound = board.length - 1;
    while (stack.length) {
      board[bottomBound][col] = stack.pop();
      bottomBound--;
    }
    while (bottomBound >= 0) {
      board[bottomBound][col] = 0;
      bottomBound--;
    }
  }
};
