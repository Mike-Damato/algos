var decompressRLElist = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i += 2) {
    let num = nums[i + 1];
    while (nums[i] > 0) {
      ans.push(num);
      nums[i] -= 1;
    }
  }
  return ans;
};

var decompressRLElist = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i += 2) {
    let freq = nums[i];
    let val = nums[i + 1];
    for (let j = 0; j < freq; j++) {
      ans.push(val);
    }
  }
  return ans;
};
