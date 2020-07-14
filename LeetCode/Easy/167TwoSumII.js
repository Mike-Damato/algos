var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  let currentSum;
  while (left < right) {
    currentSum = numbers[left] + numbers[right];
    if (currentSum === target) {
      return [left + 1, right + 1];
    } else if (currentSum > target) {
      right--;
    } else {
      left++;
    }
  }
};
