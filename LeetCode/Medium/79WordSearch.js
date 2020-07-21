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

//Another go at it, with more detailed notes.
/**
 double for loop until we hit first letter of word
 then dfs on that letter to see if neighboring letters are the next letter.
IN DFS:
 if at any point we dont make it to the end of the word we can return false, so we might need position number storing how far thru the word we are.
 if we reach end of word return true
 */
var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        //check if DFS is truthy, if so return true, otherwise break out and keep iterating
        if (dfs(board, i, j, 0, word)) {
          return true;
        }
      }
    }
  }
  //we have not found a letter to be used.
  return false;
};

const dfs = (board, i, j, charCount, word) => {
  //we have reached the end of our word, building up letters so we can return true
  if (charCount === word.length) {
    return true;
  }

  //check bounds & letter is usable
  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[i].length ||
    board[i][j] !== word[charCount]
  ) {
    return;
  }

  //we have to mark each cell as visited per the prompt we can only use it once. but we want to put it back so storing in a temp variable helps this
  let temp = board[i][j];
  //now we mark as visited using something that isnt a letter for this case
  board[i][j] = '#';
  //check all neighboring letters and increase charCount on each function call recursively.
  let top = dfs(board, i - 1, j, charCount + 1, word);
  let bottom = dfs(board, i + 1, j, charCount + 1, word);
  let left = dfs(board, i, j - 1, charCount + 1, word);
  let right = dfs(board, i, j + 1, charCount + 1, word);
  //check to see if functions defined above resolve to true.
  //if they do we can return true as we have found a letter that allows us to move onto the next letter of the word. We just need 1 to return true
  if (top || bottom || left || right) {
    return true;
  }
  //put letter back
  board[i][j] = temp;
};
