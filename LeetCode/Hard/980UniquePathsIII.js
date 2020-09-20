var uniquePathsIII = function (grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  let start = [];
  let left = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        start.push(i);
        start.push(j);
      } else if (grid[i][j] === 0) {
        left++;
      }
    }
  }
  return dfs(grid, start[0], start[1], left + 1);
};

const dfs = (grid, i, j, left) => {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] === -1 ||
    grid[i][j] === -3
  ) {
    return 0;
  }

  if (grid[i][j] === 2) {
    if (left === 0) {
      return 1;
    }
    return 0;
  }

  let temp = grid[i][j];
  //Mark visited
  grid[i][j] = -1;

  let t = dfs(grid, i - 1, j, left - 1);
  let b = dfs(grid, i + 1, j, left - 1);
  let l = dfs(grid, i, j - 1, left - 1);
  let r = dfs(grid, i, j + 1, left - 1);

  grid[i][j] = temp;

  return t + b + l + r;
};
