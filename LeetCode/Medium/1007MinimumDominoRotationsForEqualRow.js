var minDominoRotations = function (A, B) {
  let aCount = Math.min(countSwaps(A[0], A, B), countSwaps(A[0], B, A));
  let bCount = Math.min(countSwaps(B[0], A, B), countSwaps(B[0], B, A));
  let ans = Math.min(aCount, bCount);
  return ans === Infinity ? -1 : ans;
};

const countSwaps = (num, A, B) => {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (num !== A[i]) {
      if (num === B[i]) {
        count++;
      } else {
        return Infinity;
      }
    }
  }
  return count;
};
