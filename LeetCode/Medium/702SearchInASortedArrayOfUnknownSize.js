var search = function (reader, target) {
  let i = 0;
  while (reader.get(i) !== 2147483647) {
    i += 1;
  }
  let right = i - 1;

  return binarySearch(0, right, reader, target);
};

const binarySearch = (left, right, arr, target) => {
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
