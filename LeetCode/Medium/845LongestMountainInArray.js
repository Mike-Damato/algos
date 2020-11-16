var longestMountain = function (A) {
  let max = 0;
  let current = 0;
  while (current < A.length) {
    let end = current;
    if (end + 1 < A.length && A[end] < A[end + 1]) {
      while (end + 1 < A.length && A[end] < A[end + 1]) {
        end++;
      }

      if (end + 1 < A.length && A[end] > A[end + 1]) {
        while (end + 1 < A.length && A[end] > A[end + 1]) {
          end++;
        }
        max = Math.max(max, end - current + 1);
      }
    }
    current = Math.max(end, current + 1);
  }
  return max;
};
