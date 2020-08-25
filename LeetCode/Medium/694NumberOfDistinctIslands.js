var numDistinctIslands = function (grid) {
  let set = new Set();
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        set.add(dfs(grid, i, j, 'start'));
      }
    }
  }
  return set.size;
};

const dfs = (grid, i, j, dir) => {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] === 0
  ) {
    return '';
  }

  //now we know we are in bounds and found a 1...

  //mark as visited
  grid[i][j] = 0;

  //store in our set
  let key =
    dir +
    dfs(grid, i - 1, j, 'u') +
    dfs(grid, i + 1, j, 'd') +
    dfs(grid, i, j - 1, 'l') +
    dfs(grid, i, j + 1, 'r') +
    'end';
  return key;
};
