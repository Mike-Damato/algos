var maxSubarraySumCircular = function (A) {
  let maxAtIdx = A[0];
  let maxSoFar = A[0];
  let sum = A[0];
  let currentMin = Infinity;
  let minOfArr = Infinity;
  for (let i = 1; i < A.length; i++) {
    sum += A[i];
    maxAtIdx = Math.max(A[i], maxAtIdx + A[i]);
    maxSoFar = Math.max(maxSoFar, maxAtIdx);
    if (i === A.length - 1) {
      break;
    }
    currentMin = Math.min(A[i], currentMin + A[i]);
    minOfArr = Math.min(minOfArr, currentMin);
  }
  return Math.max(sum - minOfArr, maxSoFar);
};
