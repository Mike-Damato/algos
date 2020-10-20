var countServers = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1 && dfs(grid, i, j)) {
        count++;
      }
    }
  }
  return count;
};

const dfs = (grid, row, col) => {
  for (let i = 0; i < grid.length; i++) {
    if (grid[i][col] === 1 && i !== row) {
      return true;
    }
  }

  for (let i = 0; i < grid[row].length; i++) {
    if (grid[row][i] === 1 && i !== col) {
      return true;
    }
  }

  return false;
};
