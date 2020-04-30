//Iterative (naive) O(n^2)
var containsDuplicate = function (nums) {
  if (nums.length < 2) {
    return false;
  }
  let left = 0;
  let right = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

//With pointers O(n * log n)
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  let first = 0;
  let second = 1;
  while (second < nums.length) {
    if (nums[first] === nums[second]) {
      return true;
    } else {
      first += 1;
      second += 1;
    }
  }
  return false;
};

//With hashmap O(n)
var containsDuplicate = function (nums) {
  let hash = {};
  for (let i = nums.length - 1; i >= 0; i--) {
    if (hash[nums[i]]) {
      return true;
    } else {
      hash[nums[i]] = 1;
    }
  }
  return false;
};
