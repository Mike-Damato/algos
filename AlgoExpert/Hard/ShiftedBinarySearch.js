function shiftedBinarySearch(array, target) {
  // Write your code here.
  let left = 0;
  let right = array.length - 1;
  let mid;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (target === array[mid]) {
      return mid;
    } else if (array[left] <= array[mid]) {
      if (target < array[mid] && target >= array[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > array[mid] && target <= array[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}
