var maxSlidingWindow = function (nums, k) {
  const ans = [];
  for (let i = 0; i < nums.length - k + 1; i++) {
    let max = -Infinity;
    for (let j = i; j < i + k; j++) {
      max = Math.max(max, nums[j]);
    }
    ans.push(max);
  }
  return ans;
};

//Optimized - Note using an array to represent a queue...
var maxSlidingWindow = function (nums, k) {
  const ans = [];
  let queue = nums.slice(0, k);
  let right = k - 1;
  let max;
  while (right < nums.length) {
    max = Math.max(...queue);
    ans.push(max);
    right++;
    queue.push(nums[right]);
    queue.shift();
  }
  return ans;
};
