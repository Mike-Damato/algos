const threeNumberSum = (array, targetSum) => {
  array.sort((a, b) => a - b);
  let ans = [];

  for (let i = 0; i < array.length - 2; i++) {
    let currentNum = array[i];
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      let currentSum = currentNum + array[left] + array[right];
      if (currentSum === targetSum) {
        ans.push([currentNum, array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return ans;
};
