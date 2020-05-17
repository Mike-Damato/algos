var thirdMax = function (nums) {
  if (nums.length < 2) {
    return Math.max(...nums);
  }
  let mySet = new Set(nums);
  if (mySet.size < 3) {
    return Math.max(...mySet);
  }
  for (let i = 0; i < 2; i++) {
    mySet.delete(Math.max(...mySet));
  }
  return Math.max(...mySet);
};
