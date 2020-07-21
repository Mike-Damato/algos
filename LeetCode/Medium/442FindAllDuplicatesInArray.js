var findDuplicates = function (nums) {
  let hash = {};
  let ans = [];
  for (const num of nums) {
    if (hash.hasOwnProperty(num)) {
      hash[num] += 1;
    } else {
      hash[num] = 1;
    }
  }

  let hashArr = Object.entries(hash);
  for (let i = 0; i < hashArr.length; i++) {
    if (hashArr[i][1] > 1) {
      ans.push(hashArr[i][0]);
    }
  }
  return ans;
};
