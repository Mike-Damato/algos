var peakIndexInMountainArray = function (A) {
  for (let i = 1; i < A.length; i++) {
    let left = A[i - 1];
    let right = A[i + 1];
    if (A[i] > left && A[i] > right) {
      return i;
    }
  }
  return 0;
};

//Binary Search

const peakIndexInMountainArray = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while (left < right) {
    mid = left + Math.floor((right - left) / 2);
    //check if peak
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    } else if (arr[mid] > arr[mid - 1]) {
      //explore right
      left = mid;
    } else {
      //explore left
      right = mid;
    }
  }
  return 0;
};
