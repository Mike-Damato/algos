function threeNumberSort(array, order) {
  const map = new Map();
  const ans = [];
  for (const num of array) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (const num of order) {
    while (map.get(num) > 0) {
      ans.push(num);
      map.set(num, map.get(num) - 1);
    }
  }
  return ans;
}

//Optimized
