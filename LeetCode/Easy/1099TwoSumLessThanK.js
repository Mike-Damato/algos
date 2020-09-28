var twoSumLessThanK = function (A, K) {
  let arr = A.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  let max = -1;

  while (left < right) {
    if (arr[left] + arr[right] >= K) {
      right--;
    } else {
      max = Math.max(arr[left] + arr[right], max);
      left++;
    }
  }
  return max;
};
