var solve = function (board) {
  if (!board.length) {
    return;
  }

  //Change every square on left & right from O -> M
  for (let i = 0; i < board.length; i++) {
    dfs(board, i, 0);
    dfs(board, i, board[0].length - 1);
  }

  //Change every square on top & bottom from O -> M
  for (let i = 0; i < board[0].length - 1; i++) {
    dfs(board, 0, i);
    dfs(board, board.length - 1, i);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      //Change any remaining O -> X
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
      //Change all temp M -> X
      if (board[i][j] === 'M') {
        board[i][j] = 'O';
      }
    }
  }
};

const dfs = (board, i, j) => {
  //Mark all boarders of the board to a temp letter (M) if it is an O
  if (i < 0 || i > board.length - 1 || j < 0 || j > board[0].length - 1) {
    return;
  }
  if (board[i][j] !== 'O') {
    return;
  }

  board[i][j] = 'M';

  dfs(board, i - 1, j);
  dfs(board, i + 1, j);
  dfs(board, i, j - 1);
  dfs(board, i, j + 1);
};


//BFS
function bfs(board, i,j) {
    let directions = [[-1,0],[1,0],[0,-1],[0,1]]
    // console.log(i,j)
    // change connected and safe Os to #s
    if (board[i][j] === 'O') {
        board[i][j] = '#'
        let queue = [[i,j]]

        while (queue.length){
            let [x,y] = queue.shift()

            for (const [dx,dy] of directions){
                let row = x + dx
                let col = y + dy
                 // IN bounds and a 'O'
                if (row >= 0 && row < board.length && col >= 0 && col < board[i].length && board[row][col] === 'O'){
                    board[row][col] = '#'
                    queue.push([row,col])
                }
            }
        }
    }
