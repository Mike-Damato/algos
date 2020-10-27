var findMinFibonacciNumbers = function (k) {
  let count = 0;
  let arr = [0, 1, 1];
  while (arr[arr.length - 1] < k) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  while (k > 0) {
    for (let i = arr.length - 1; i >= 2; i--) {
      if (arr[i] <= k) {
        count += 1;
        k -= arr[i];
        break;
      }
    }
  }
  return count;
};
