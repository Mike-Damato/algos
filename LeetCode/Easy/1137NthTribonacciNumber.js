var tribonacci = function (n) {
  const arr = [0, 1, 1];
  if (n <= 2) {
    return arr[n];
  }
  for (let i = 3; i <= n; i++) {
    arr.push(arr[i - 3] + arr[i - 2] + arr[i - 1]);
  }
  return arr.pop();
};
