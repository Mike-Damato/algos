var findShortestSubArray = function (nums) {
  const map = new Map();
  let minSubArr = nums.length;
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let max = Math.max(...[...map.values()]);
  let entries = [...map.entries()].sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < entries.length; i++) {
    if (entries[i][1] !== max) break;

    let currentSubArr =
      nums.lastIndexOf(entries[i][0]) - nums.indexOf(entries[i][0]) + 1;

    if (currentSubArr < minSubArr) {
      minSubArr = currentSubArr;
    }
  }
  return minSubArr;
};
