function solveSudoku(board) {
  // Write your code here.
  solvePartialBoard(0, 0, board);
  return board;
}

const solvePartialBoard = (row, col, board) => {
  let currentRow = row;
  let currentCol = col;

  if (currentCol === board[currentRow].length) {
    currentRow++;
    currentCol = 0;
    if (currentRow === board.length) {
      return true;
    }
  }

  if (board[currentRow][currentCol] === 0) {
    return testDigits(currentRow, currentCol, board);
  }
  return solvePartialBoard(currentRow, currentCol + 1, board);
};

const testDigits = (row, col, board) => {
  for (let digit = 1; digit <= 9; digit++) {
    if (isValid(digit, row, col, board)) {
      board[row][col] = digit;
      if (solvePartialBoard(row, col + 1, board)) {
        return true;
      }
    }
  }
  board[row][col] = 0;
  return false;
};

const isValid = (value, row, col, board) => {
  const rowIsValid = !board[row].includes(value);
  const colIsValid = !board.map((row) => row[col]).includes(value);

  if (!rowIsValid || !colIsValid) return false;

  const subRow = Math.floor(row / 3) * 3;
  const subCol = Math.floor(col / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const rowToCheck = subRow + i;
      const colToCheck = subCol + j;
      const currentVal = board[rowToCheck][colToCheck];

      if (currentVal === value) return false;
    }
  }
  return true;
};
