var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let min = Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    let diff = arr[i + 1] - arr[i];
    min = Math.min(min, diff);
  }
  let ans = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let diff = arr[i + 1] - arr[i];
    if (diff === min) {
      ans.push([arr[i], arr[i + 1]]);
    }
  }
  return ans;
};
