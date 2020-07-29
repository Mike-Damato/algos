//Using a hash
const containsNearbyDuplicate = (nums, k) => {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (hash[num] >= 0 && i - hash[num] <= k) {
      return true;
    }
    hash[num] = i;
  }
  return false;
};

//Using a map
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (map.get(num) >= 0 && i - map.get(num) <= k) {
      return true;
    }
    map.set(num, i);
  }
  return false;
};
