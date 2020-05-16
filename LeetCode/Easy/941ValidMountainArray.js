var validMountainArray = function (A) {
  if (A === null || A.length < 3) {
    return false;
  }
  let start = 0;
  let end = A.length;
  while (start + 1 < end && A[start] < A[start + 1]) {
    start++;
  }
  if (start === 0 || start === end - 1) {
    return false;
  }
  while (start + 1 < end && A[start] > A[start + 1]) {
    start++;
  }
  return start === end - 1;
};
