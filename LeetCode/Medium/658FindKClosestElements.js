var findClosestElements = function (arr, k, x) {
  let left = 0;
  let right = arr.length - k;
  let mid;

  while (left < right) {
    mid = left + Math.floor((right - left) / 2);

    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return arr.slice(left, left + k);
};
