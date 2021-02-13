var shortestPathBinaryMatrix = function (grid) {
  const m = grid.length || 0;
  const n = (m && grid[0].length) || 0;

  //Data Validation
  if (m === 0 || n === 0 || grid[0][0] !== 0) return -1;

  let path = 1;
  const queue = [[0, 0]];
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [-1, 1],
    [-1, -1],
    [1, -1],
  ];

  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const [row, col] = queue.shift();
      //If we reached the end we are done...
      if (row === m - 1 && col === n - 1) return path;

      //Otherwise check every neighbor
      for (const [x, y] of dirs) {
        const newRow = row + x;
        const newCol = col + y;
        //If we are in bounds and cell can be traveled to (cell can be traveled to if it is a 0)
        if (isInBounds(grid, newRow, newCol) && grid[newRow][newCol] === 0) {
          //Mark cell as visited
          grid[newRow][newCol] = 1;
          queue.push([newRow, newCol]);
        }
      }
    }
    path++;
  }
  return -1;
};

const isInBounds = (grid, i, j) => {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length) {
    return false;
  } else {
    return true;
  }
};
