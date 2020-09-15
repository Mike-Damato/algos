function largestRange(array) {
  let range = [];
  let longest = 0;
  let map = new Map();
  for (const num of array) {
    map.set(num, true);
  }

  for (const num of array) {
    if (!map.has(num)) {
      continue;
    }
    map.set(num, false);
    let length = 1;
    let left = num - 1;
    let right = num + 1;

    while (map.has(left)) {
      map.set(left, false);
      length++;
      left--;
    }

    while (map.has(right)) {
      map.set(right, false);
      length++;
      right++;
    }

    if (length > longest) {
      longest = length;
      range = [left + 1, right - 1];
    }
  }
  return range;
}
