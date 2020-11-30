var getSkyline = function (buildings) {
  if (!buildings.length) return [];
  //Use a set to store all X positions
  const set = new Set();

  for (const [left, right, height] of buildings) {
    set.add(left);
    set.add(right);
  }

  let copy = [...set];
  copy.sort((a, b) => a - b);
  //Find the height for every X position and give answer a dummy set of coords to start
  const ans = [[-1, 0]];
  for (const coord of copy) {
    let i = 0;
    let height = 0;
    while (i < buildings.length && buildings[i][0] <= coord) {
      if (buildings[i][1] > coord) {
        height = Math.max(height, buildings[i][2]);
      }
      i++;
    }
    if (ans[ans.length - 1][1] === height) continue;
    ans.push([coord, height]);
  }
  return ans.slice(1);
};
