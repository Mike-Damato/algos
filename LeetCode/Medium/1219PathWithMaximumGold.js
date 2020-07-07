var getMaximumGold = function (grid) {
  let maxGold = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] !== 0) {
        maxGold = Math.max(maxGold, dfs(grid, i, j));
      }
    }
  }
  return maxGold;
};

const dfs = (grid, i, j, gold = 0) => {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] === 0
  ) {
    return gold;
  }
  //add to gold
  gold += grid[i][j];
  //mark cell as visited and store value in a temp
  let temp = grid[i][j];
  grid[i][j] = 0;

  let top = dfs(grid, i - 1, j, gold);
  let bottom = dfs(grid, i + 1, j, gold);
  let left = dfs(grid, i, j - 1, gold);
  let right = dfs(grid, i, j + 1, gold);

  //put the val back into the cell
  grid[i][j] = temp;

  return Math.max(top, bottom, left, right);
};
