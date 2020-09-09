const wallsAndGates = (rooms) => {
  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[i].length; j++) {
      if (rooms[i][j] === 0) {
        dfs(rooms, i, j, 0);
      }
    }
  }
  return rooms;
};

const dfs = (grid, i, j, count) => {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    count > grid[i][j]
  ) {
    return;
  }

  //count is initially 0
  //so we "fill" a 0 with a 0 (no - op)
  grid[i][j] = count;

  //then we check neighbors adding 1 to our count accordingly.
  dfs(grid, i - 1, j, count + 1);
  dfs(grid, i + 1, j, count + 1);
  dfs(grid, i, j - 1, count + 1);
  dfs(grid, i, j + 1, count + 1);
};
