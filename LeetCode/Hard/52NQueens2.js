var totalNQueens = function (n) {
  let queens = 0;
  //make 2d array to mimic board all filled with .'s
  let board = new Array(n).fill('.').map((elem) => new Array(n).fill('.'));

  const isValidQueen = (row, col) => {
    //check col, top left, top right

    //check col
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') {
        return false;
      }
    }

    for (let j = row - 1, k = col - 1; j >= 0 && k >= 0; j--, k--) {
      if (board[j][k] === 'Q') {
        return false;
      }
    }

    for (let l = row - 1, m = col + 1; l >= 0 && m < n; l--, m++) {
      if (board[l][m] === 'Q') {
        return false;
      }
    }
    return true;
  };

  //backtrack below
  const backtrack = (row) => {
    //check if the current cell can have a valid queen
    //dfs until the nth row.
    //at each row we go through each column
    //if we reach the end of the board we can increase queens
    if (row === n) {
      queens += 1;
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValidQueen(row, col)) {
        board[row][col] = 'Q';
        backtrack(row + 1, col);
        board[row][col] = '.';
      }

      //helper
    }
  };

  backtrack(0);

  return queens;
};
