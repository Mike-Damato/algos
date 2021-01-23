var diagonalSort = function (mat) {
  const map = new Map();

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      let key = i - j;
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(mat[i][j]);
    }
  }

  for (const [key, val] of map) {
    val.sort((a, b) => b - a);
  }

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      let key = i - j;
      let num = map.get(key).pop();
      mat[i][j] = num;
    }
  }
  return mat;
};
