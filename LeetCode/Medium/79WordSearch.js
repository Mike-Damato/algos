var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(board, i, j, 0, word)) {
          return true;
        }
      }
    }
  }
  return false;
};

const dfs = (board, i, j, pos, word) => {
  if (pos === word.length) {
    return true;
  }
  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[i].length ||
    board[i][j] !== word[pos]
  ) {
    return;
  }

  let temp = board[i][j];
  board[i][j] = '#';

  let top = dfs(board, i - 1, j, pos + 1, word);
  let bottom = dfs(board, i + 1, j, pos + 1, word);
  let left = dfs(board, i, j - 1, pos + 1, word);
  let right = dfs(board, i, j + 1, pos + 1, word);

  if (top || bottom || left || right) {
    return true;
  }

  board[i][j] = temp;
};
