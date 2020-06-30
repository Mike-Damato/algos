class TrieNode {
  constructor() {
    this.word = null;
    this.key = '';
  }
}

const makeTrie = (words) => {
  let root = new TrieNode();
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let node = root;
    for (let j = 0; j < word.length; j++) {
      let char = word[j];
      if (!node[char]) {
        node[char] = new TrieNode();
      }
      node = node[char];
    }
    node.word = word;
  }
  return root;
};

var findWords = function (board, words) {
  let root = makeTrie(words);
  let result = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(result, root, board, i, j);
    }
  }
  return result;
};

const dfs = (result, root, board, i, j) => {
  if (!root) {
    return;
  }
  if (root.word) {
    result.push(root.word);
    root.word = null;
  }

  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[0].length ||
    board[i][j] === '#'
  ) {
    return;
  }

  let current = board[i][j];
  board[i][j] = '#';
  root = root[current];
  dfs(result, root, board, i + 1, j);
  dfs(result, root, board, i - 1, j);
  dfs(result, root, board, i, j + 1);
  dfs(result, root, board, i, j - 1);
  board[i][j] = current;
};
