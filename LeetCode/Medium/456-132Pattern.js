var find132pattern = function (nums) {
  if (!nums.length || nums.length < 3) return false;
  let min = Infinity;
  for (let j = 0; j < nums.length - 1; j++) {
    min = Math.min(min, nums[j]);
    for (let k = j + 1; k < nums.length; k++) {
      if (nums[k] < nums[j] && min < nums[k]) {
        return true;
      }
    }
  }
  return false;
};

//Optimized to O(N) using a stack
const find132pattern = (nums) => {
  if (!nums.length || nums.length < 3) return false;
  let [stack, k] = [[], -Infinity];
  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] < k) {
      return true;
    }
    while (stack[stack.length - 1] < nums[i]) {
      k = stack.pop();
    }
    stack.push(nums[i]);
  }
  return false;
};
