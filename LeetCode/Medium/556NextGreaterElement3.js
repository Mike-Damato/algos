const nextGreaterElement = (n) => {
  let nums = n
    .toString()
    .split('')
    .map((num) => Number(num));
  let max = -Infinity;
  let idx = -1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < max) {
      idx = i;
      break;
    }
    max = Math.max(nums[i], max);
  }

  if (idx === -1) return -1;

  let secondHalf = nums.splice(idx + 1).sort((a, b) => a - b);

  for (let i = 0; i < secondHalf.length; i++) {
    if (secondHalf[i] > nums[idx]) {
      [nums[idx], secondHalf[i]] = [secondHalf[i], nums[idx]];
      break;
    }
  }
  let ans = Number(nums.concat(secondHalf).join(''));
  let maxNum = Math.pow(2, 31);
  return ans > maxNum ? -1 : ans;
};
