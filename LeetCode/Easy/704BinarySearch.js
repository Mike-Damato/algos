var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

//Recursive
var search = function (nums, target) {
  return binarySearch(0, nums.length - 1, nums, target);
};

const binarySearch = (left, right, arr, target) => {
  if (left > right) return -1;
  let mid = getMid(left, right);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearch(left, mid - 1, arr, target);
  } else {
    return binarySearch(mid + 1, right, arr, target);
  }
};

const getMid = (left, right) => {
  return left + Math.floor((right - left) / 2);
};

//Even more functional
const search = (nums, target) => {
  return binarySearch(0, nums.length - 1, nums, target);
};

const binarySearch = (left, right, arr, target) => {
  while (left <= right) {
    let mid = getMid(left, right);
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

const getMid = (left, right) => {
  return left + Math.floor((right - left) / 2);
};
