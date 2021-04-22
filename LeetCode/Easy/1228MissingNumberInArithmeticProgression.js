var missingNumber = function (arr) {
  if (arr[0] > arr[arr.length - 1]) {
    arr = arr.reverse();
  }

  const allSame = arr.every((num) => num === arr[0]);
  if (allSame) return arr[0];

  let maxDiff = 0;
  let minDiff = Infinity;
  let idx = 0;
  for (let i = 1; i < arr.length; i++) {
    let currentDiff = arr[i] - arr[i - 1];
    minDiff = Math.min(minDiff, currentDiff);
    if (currentDiff > maxDiff) {
      maxDiff = currentDiff;
      idx = i;
    }
  }

  return arr[idx - 1] + minDiff;
};
