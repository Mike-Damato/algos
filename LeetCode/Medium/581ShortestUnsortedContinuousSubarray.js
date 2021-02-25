var findUnsortedSubarray = function (nums) {
  const copy = [...nums];
  copy.sort((a, b) => a - b);
  let start = copy.length;
  let end = 0;

  for (let i = 0; i < copy.length; i++) {
    if (copy[i] !== nums[i]) {
      start = Math.min(start, i);
      end = Math.max(end, i);
    }
  }
  return end - start >= 0 ? end - start + 1 : 0;
};
