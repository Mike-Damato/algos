//Solution 1
function twoNumberSum(array, targetSum) {
  // Write your code here.
  for (let i = 0; i < array.length - 1; i++) {
    let currentNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let secondNum = array[j];
      if (currentNum + secondNum === targetSum) {
        return [currentNum, secondNum];
      }
    }
  }
  return [];
}

//Solution 2
function twoNumberSum(array, targetSum) {
  // Write your code here.
  let nums = {};
  for (const num of array) {
    const match = targetSum - num;
    if (match in nums) {
      return [match, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}
