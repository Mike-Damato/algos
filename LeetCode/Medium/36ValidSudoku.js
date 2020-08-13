var isValidSudoku = function (board) {
  let seen = new Set();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let val = board[i][j];
      if (board[i][j] !== '.') {
        let rowCell = `row: ${i} ${val}`;
        let colCell = `col: ${j} ${val}`;
        let boxCell = `box: ${Math.floor(i / 3)}-${Math.floor(j / 3)} ${val}`;

        if (!seen.has(rowCell) && !seen.has(colCell) && !seen.has(boxCell)) {
          seen.add(rowCell);
          seen.add(colCell);
          seen.add(boxCell);
        } else {
          return false;
        }
      }
    }
  }
  return true;
};
