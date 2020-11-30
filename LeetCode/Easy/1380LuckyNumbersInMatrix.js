var luckyNumbers = function (matrix) {
  const map = new Map();
  for (let i = 0; i < matrix.length; i++) {
    let num = Math.min(...matrix[i]);
    map.set(num, matrix[i].indexOf(num));
  }

  let max = Math.max(...map.keys());
  let maxIdx = map.get(max);

  for (let i = 0; i < matrix.length; i++) {
    let num = matrix[i][maxIdx];
    if (max < num) {
      return [];
    }
  }
  return [max];
};
