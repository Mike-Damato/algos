var orangesRotting = function (grid) {
  let queue = [];
  let fresh = 0;
  let minutes = 0;
  // Push rotten oranges to the queue and count fresh oranges
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
      if (grid[i][j] === 1) {
        fresh += 1;
      }
    }
  }

  while (queue.length && fresh) {
    let newQ = [];
    while (queue.length) {
      let badOrange = queue.shift();
      let newRottens = search(grid, badOrange[0], badOrange[1], newQ);
      fresh -= newRottens;
    }

    minutes++;
    queue = newQ;
  }
  if (fresh !== 0) {
    return -1;
  }
  return minutes;
};

const search = (grid, i, j, queue) => {
  let bad = 0;
  if (i > 0 && grid[i - 1][j] === 1) {
    grid[i - 1][j]++;
    bad++;
    queue.push([i - 1, j]);
  }
  if (j > 0 && grid[i][j - 1] === 1) {
    grid[i][j - 1]++;
    bad++;
    queue.push([i, j - 1]);
  }
  if (i < grid.length - 1 && grid[i + 1][j] === 1) {
    grid[i + 1][j]++;
    bad++;
    queue.push([i + 1, j]);
  }
  if (j < grid[i].length - 1 && grid[i][j + 1] === 1) {
    grid[i][j + 1]++;
    bad++;
    queue.push([i, j + 1]);
  }
  return bad;
};
