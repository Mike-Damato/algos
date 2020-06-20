var getPermutation = function (n, k) {
  const getPerms = (arr, allPerms) => {
    if (allPerms.length === n) {
      count++;
      if (count === k) {
        ans = allPerms.join('');
        return ans;
      }
    }
    for (let i = 0; i < arr.length; i++) {
      allPerms.push(arr[i]);
      getPerms(
        arr.filter((elem) => elem !== arr[i]),
        allPerms
      );
      allPerms.pop();
    }
  };
  let arr = [];
  let count = 0;
  let ans;
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  getPerms(arr, []);
  return ans;
};
