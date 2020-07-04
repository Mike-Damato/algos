const factors = [2, 3, 5];

var nthUglyNumber = function (n) {
  const output = [1, 2, 3, 4];
  const p = [0, 0, 0];
  for (let i = 1; i < n; i++) {
    const [min, indexes] = findMinIndex(output, p);
    output[i] = min;
    indexes.forEach((index) => {
      p[index] += 1;
    });
  }
  return output[n - 1];
};

function findMinIndex(output, p) {
  let min = Infinity;
  let indexes;
  for (let i = 0; i < p.length; i++) {
    const value = output[p[i]] * factors[i];
    if (value < min) {
      indexes = [];
      min = output[p[i]] * factors[i];
      indexes.push(i);
    } else if (value === min) {
      indexes.push(i);
    }
  }
  return [min, indexes];
}
