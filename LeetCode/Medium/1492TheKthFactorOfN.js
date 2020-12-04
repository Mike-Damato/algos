var kthFactor = function (n, k) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return k <= arr.length ? arr[k - 1] : -1;
};
