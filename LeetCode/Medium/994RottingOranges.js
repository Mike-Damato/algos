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

//Alternate
var orangesRotting = function (grid) {
  /*
    first locate the rotten oranges
    it will be a queue of rotten oranges
    each element would be an array of cell and num of minutes that passes   [cell(row,col), min]
    each iteration is at min
    1. locate rotten oranges and add them to queue in format of [row, col, step]
    2. have a count of fresh oranges
    3. have a variable for maxTime
    4. start bfs via while loop if queue.length > 0
    5. create helper inBounds func
    6. traverse thru 4 neighbors of current cell and check if newCell is in bounds
    7. if cell inBounds, add to queue and increment step
    8. check fresh count and maxTime
    */
  // add rotten oranges into queue
  let freshCount = 0;
  let queue = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      } else if (grid[i][j] === 1) {
        freshCount += 1;
      }
    }
  }
  function inBounds(row, col) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
      return false;
    } else {
      return true;
    }
  }
  // bfs
  let maxTime = 0;
  let dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  while (queue.length) {
    // check 4 sides for fresh oranges, once its added its rotten
    const currentOrange = queue.shift();
    const [row, col, step] = currentOrange;
    maxTime = step;
    for (let dir of dirs) {
      const [x, y] = dir;
      const newRow = x + row;
      const newCol = y + col;
      //Check if we are in bounds and if any neighboring oranges are fresh, if they are they now become rotten so decrement freshcount
      if (inBounds(newRow, newCol) && grid[newRow][newCol] === 1) {
        queue.push([newRow, newCol, step + 1]);
        grid[newRow][newCol] = 2;
        freshCount -= 1;
      }
    }
    // console.log(queue)
  }
  return freshCount === 0 ? maxTime : -1;
};
