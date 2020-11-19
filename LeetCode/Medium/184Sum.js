const fourSum = (arr, target) => {
  if (!arr.length) return [];
  arr = arr.sort((a, b) => a - b);
  const ans = [];

  for (let i = 0; i < arr.length - 3; i++) {
    //avoid duplicates
    if (i > 0 && arr[i - 1] === arr[i]) continue;
    for (let j = i + 1; j < arr.length - 2; j++) {
      //avoid duplicates
      if (j > i + 1 && arr[j - 1] === arr[j]) continue;

      let left = j + 1;
      let right = arr.length - 1;

      while (left < right) {
        let sum = arr[i] + arr[j] + arr[left] + arr[right];
        if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else {
          ans.push([arr[i], arr[j], arr[left], arr[right]]);

          while (left < right && arr[left] === arr[left + 1]) {
            left++;
          }
          while (left < right && arr[right] === arr[right - 1]) {
            right--;
          }
          left++;
          right--;
        }
      }
    }
  }
  return ans;
};
