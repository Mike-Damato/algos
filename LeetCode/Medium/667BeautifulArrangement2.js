var constructArray = function (n, k) {
  const ans = new Array(n).fill(null);
  let count = 0;
  for (let i = 1; i < n - k; i++) {
    ans[count] = i;
    count++;
  }

  for (let i = 0; i <= k; i++) {
    ans[count] = i % 2 === 0 ? n - k + i / 2 : n - i / 2;
    count++;
  }
  return ans;
};
