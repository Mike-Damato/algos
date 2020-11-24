var shortestPath = function (grid, k) {
  const set = new Set();
  const queue = [{ x: 0, y: 0, s: 0, o: 0 }];
  let current, coord;
  while (queue.length) {
    current = queue.shift();
    coord = `${current.x} ${current.y} ${current.o}`;
    if (
      current.x < 0 ||
      current.x >= grid.length ||
      current.y < 0 ||
      current.y >= grid[0].length ||
      set.has(coord) ||
      current.o > k
    )
      continue;

    if (grid[current.x][current.y] === 1) {
      current.o++;
    }

    if (current.x === grid.length - 1 && current.y === grid[0].length - 1) {
      return current.s;
    }

    set.add(coord);

    queue.push({
      x: current.x - 1,
      y: current.y,
      s: current.s + 1,
      o: current.o,
    });
    queue.push({
      x: current.x + 1,
      y: current.y,
      s: current.s + 1,
      o: current.o,
    });
    queue.push({
      x: current.x,
      y: current.y - 1,
      s: current.s + 1,
      o: current.o,
    });
    queue.push({
      x: current.x,
      y: current.y + 1,
      s: current.s + 1,
      o: current.o,
    });
  }
  return -1;
};
