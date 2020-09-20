function searchForRange(array, target) {
  let range = [-1, -1];
  let left = 0;
  let right = array.length - 1;
  binarySearch(array, target, left, right, true, range);
  binarySearch(array, target, left, right, false, range);
  return range;
}

const binarySearch = (array, target, left, right, goLeft, range) => {
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (array[mid] < target) {
      left = mid + 1;
    } else if (array[mid] > target) {
      right = mid - 1;
    } else {
      if (goLeft) {
        //we have found the left side of our window
        if (mid === 0 || array[mid - 1] !== target) {
          range[0] = mid;
          return;
        } else {
          right = mid - 1;
        }
      } else {
        //we have found the right side of our window
        if (mid === array.length - 1 || array[mid + 1] !== target) {
          range[1] = mid;
          return;
        } else {
          left = mid + 1;
        }
      }
    }
  }
};
