const minSubArrayLen = (arr, target) => {
  if (arr.length === 0) {
    return null;
  }
  let sum = 0;
  let min = Infinity;
  let start = 0;
  let end = 0;
  while (end <= arr.length && start <= arr.length) {
    if (sum < target) {
      sum += arr[end];
      end++;
    } else if (sum >= target) {
      min = Math.min(min, end - start);
      sum -= arr[start];
      start++;
    }
  }
  // console.log(arr[start], arr[end])
  return min === Infinity ? 0 : min;
};
