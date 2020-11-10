var findLeastNumOfUniqueInts = function (arr, k) {
  const map = new Map();
  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  const keys = [...map.keys()];
  keys.sort((a, b) => map.get(a) - map.get(b));

  let idx = 0;

  while (k) {
    k -= map.get(keys[idx]);
    if (k < 0) break;
    idx++;
  }

  return keys.length - idx;
};
