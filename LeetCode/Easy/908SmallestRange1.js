var smallestRangeI = function (A, K) {
  let min = A[0];
  let max = A[0];
  for (const num of A) {
    min = Math.min(num, min);
    max = Math.max(num, max);
  }
  return Math.max(0, max - min - 2 * K);
};
