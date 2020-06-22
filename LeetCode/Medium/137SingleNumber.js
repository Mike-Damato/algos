var singleNumber = function (nums) {
  const map = new Map();
  for (const num of nums) {
    if (map.hasOwnProperty(num)) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  }

  for (const num in map) {
    if (map[num] === 1) {
      return num;
    }
  }
  return -1;
};
