const singleNumber = (nums) => {
  let seen = new Set();
  for (const num of nums) {
    if (!seen.has(num)) {
      seen.add(num);
    } else {
      seen.delete(num);
    }
  }
  return [...seen];
};

var singleNumber = function (nums) {
  let hash = {};
  let ans = [];
  for (const num of nums) {
    if (hash.hasOwnProperty(num)) {
      hash[num] += 1;
    } else {
      hash[num] = 1;
    }
  }

  for (const key in hash) {
    if (hash[key] === 1) {
      ans.push(key);
    }
  }
  return ans;
};
