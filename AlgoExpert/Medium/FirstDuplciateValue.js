//O(N) Time | O(N) space
function firstDuplicateValue(array) {
  const set = new Set();
  for (const num of array) {
    if (set.has(num)) {
      return num;
    } else {
      set.add(num);
    }
  }
  return -1;
}

//O(N) Time \ O(1) space
function firstDuplicateValue(array) {
  // Write your code here.
  for (const num of array) {
    let abs = Math.abs(num);
    if (array[abs - 1] < 0) {
      return abs;
    }
    array[abs - 1] *= -1;
  }
  return -1;
}
