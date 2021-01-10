var createSortedArray = function (instructions) {
  const nums = [];
  let length = 0;
  let cost = 0;
  const mod = Math.pow(10, 9) + 7;

  for (const instruction of instructions) {
    let left = getLeft(nums, instruction);
    let right = getRight(nums, instruction, left);
    cost += Math.min(left, length - right);
    cost %= mod;

    nums.splice(left, 0, instruction);
    length++;
  }
  return cost;
};

const getLeft = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

const getRight = (arr, target, startIdx) => {
  let left = startIdx || 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
