var findKthPositive = function (arr, k) {
  if (k <= arr[0] - 1) {
    return k;
  }

  k -= arr[0] - 1;

  for (let i = 0; i < arr.length - 1; i++) {
    let missing = arr[i + 1] - arr[i] - 1;

    if (k <= missing) {
      return arr[i] + k;
    }

    k -= missing;
  }
  return arr[arr.length - 1] + k;
};

//Binary Search
const findKthPositive = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] - mid - 1 < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left + k;
};
