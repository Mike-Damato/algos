const countSubtree = (currentSum, num1, map) => {
  const num2 = currentSum / num1;
  if (map.has(num2)) {
    const subtree = map.get(currentSum) + map.get(num1) * map.get(num2);
    map.set(currentSum, subtree);
  }
};

var numFactoredBinaryTrees = function (arr) {
  const mod = 10 ** 9 + 7;
  arr.sort((a, b) => a - b);
  let ans = 0;
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], 1);
    for (let j = 0; j < i; j++) {
      if (arr[i] % arr[i] === 0) {
        countSubtree(arr[i], arr[j], map);
      }
    }
    ans += map.get(arr[i]);
    ans %= mod;
  }
  return ans;
};
