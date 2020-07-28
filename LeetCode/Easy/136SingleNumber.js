var singleNumber = function (nums) {
  let hash = {};
  for (const num of nums) {
    if (hash[num]) {
      hash[num] += 1;
    } else {
      hash[num] = 1;
    }
  }
  for (const num in hash) {
    if (hash[num] === 1) {
      return num;
    }
  }
};

//Using a map
var singleNumber = function (nums) {
  let map = new Map();
  for (const num of nums) {
    if (map.has(num)) {
      map.delete(num);
    } else {
      map.set(num, 1);
    }
  }
  return map.keys().next().value;
};

//Using a set
var singleNumber = function (nums) {
  let set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }
  return set.values().next().value;
};
