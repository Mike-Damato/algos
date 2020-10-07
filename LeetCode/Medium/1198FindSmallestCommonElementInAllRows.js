var smallestCommonElement = function (mat) {
  let map = new Map();
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      let num = mat[i][j];
      map.set(num, (map.get(num) || 0) + 1);
    }
  }
  for (const [num, val] of map) {
    if (val === mat.length) return num;
  }
  return -1;
};
