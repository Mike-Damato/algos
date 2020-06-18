var hIndex = function (citations) {
  let length = citations.length;
  let left = 0;
  let right = length - 1;
  let mid;

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (mid + 1 <= citations[length - mid - 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
