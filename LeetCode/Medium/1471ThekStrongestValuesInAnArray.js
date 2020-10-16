var getStrongest = function (arr, k) {
  arr.sort((a, b) => a - b);
  let medianIdx = Math.floor((arr.length - 1) / 2);
  let median = arr[medianIdx];

  return arr
    .sort((a, b) => Math.abs(a - median) - Math.abs(b - median))
    .reverse()
    .slice(0, k);
};
