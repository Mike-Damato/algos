var countCornerRectangles = function (grid) {
  let ans = 0;
  for (let i = 0; i < grid.length - 1; i++) {
    for (let j = i + 1; j < grid.length; j++) {
      let count = 0;
      for (let k = 0; k < grid[0].length; k++) {
        if (grid[i][k] === 1 && grid[j][k] === 1) {
          count++;
        }
      }
      ans += (count * (count - 1)) / 2;
    }
  }
  return ans;
};
