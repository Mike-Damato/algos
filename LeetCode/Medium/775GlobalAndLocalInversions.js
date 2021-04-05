var isIdealPermutation = function (A) {
  let min = A.length;
  for (let i = A.length - 1; i >= 2; i--) {
    min = Math.min(min, A[i]);
    if (A[i - 2] > min) return false;
  }
  return true;
};
