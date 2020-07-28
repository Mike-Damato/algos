//Using hash
var containsDuplicate = function (nums) {
  let hash = {};
  for (const num of nums) {
    if (hash.hasOwnProperty(num)) {
      return true;
    } else {
      hash[num] = 1;
    }
  }
  return false;
};

//Using a map
var containsDuplicate = function (nums) {
  let map = new Map();
  for (const num of nums) {
    if (map.has(num)) {
      return true;
    } else {
      map.set(num, 1);
    }
  }
  return false;
};

//Using a set
var containsDuplicate = function (nums) {
  let set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      return true;
    } else {
      set.add(num);
    }
  }
  return false;
};
