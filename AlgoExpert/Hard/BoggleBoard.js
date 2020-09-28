//O(ws + nm * 8 ^s) time | O(ws + nm) space
function boggleBoard(board, words) {
  let trie = new Trie();
  for (const word of words) {
    trie.add(word);
  }
  let finalWords = {};
  const visited = board.map((row) => row.map((letter) => false));

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      explore(i, j, board, trie.root, visited, finalWords);
    }
  }
  return Object.keys(finalWords);
}

const explore = (i, j, board, node, visited, finalWords) => {
  if (visited[i][j]) return;
  let letter = board[i][j];
  if (!node.hasOwnProperty(letter)) return;
  visited[i][j] = true;
  node = node[letter];
  if (node.hasOwnProperty('*')) {
    finalWords[node['*']] = true;
  }
  let neighbors = getNeighbors(i, j, board);

  for (const neighbor of neighbors) {
    explore(neighbor[0], neighbor[1], board, node, visited, finalWords);
  }
  visited[i][j] = false;
};

const getNeighbors = (i, j, board) => {
  const neighbors = [];
  if (i > 0 && j > 0) {
    neighbors.push([i - 1, j - 1]);
  }
  if (i > 0 && j < board[0].length - 1) {
    neighbors.push([i - 1, j + 1]);
  }
  if (i < board.length - 1 && j < board[0].length - 1) {
    neighbors.push([i + 1, j + 1]);
  }
  if (i < board.length - 1 && j > 0) {
    neighbors.push([i + 1, j - 1]);
  }
  if (i > 0) {
    neighbors.push([i - 1, j]);
  }
  if (i < board.length - 1) {
    neighbors.push([i + 1, j]);
  }
  if (j > 0) {
    neighbors.push([i, j - 1]);
  }
  if (j < board[0].length - 1) {
    neighbors.push([i, j + 1]);
  }
  return neighbors;
};

class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = '*';
  }
  add(word) {
    let current = this.root;
    for (const letter of word) {
      if (!current.hasOwnProperty(letter)) {
        current[letter] = {};
      }
      current = current[letter];
    }
    current[this.endSymbol] = word;
  }
}
