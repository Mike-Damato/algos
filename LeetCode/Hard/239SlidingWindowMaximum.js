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
