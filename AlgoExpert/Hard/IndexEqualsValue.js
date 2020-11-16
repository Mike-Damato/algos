function indexEqualsValue(array) {
  let left = 0;
  let right = array.length - 1;
  return binarySearch(left, right, array);
}

const binarySearch = (left, right, array) => {
  let mid, target;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    target = array[mid];
    if (target < mid) {
      left = mid + 1;
    } else if (target === mid && mid === 0) {
      return mid;
    } else if (target === mid && array[mid - 1] < mid - 1) {
      return mid;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
