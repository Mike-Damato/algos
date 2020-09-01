var longestConsecutive = function (nums) {
  let longest = 0;
  let set = new Set(nums);

  for (const num of nums) {
    if (!set.has(num - 1)) {
      let next = num + 1;
      while (set.has(next)) {
        next += 1;
      }
      longest = Math.max(longest, next - num);
    }
  }
  return longest;
};
