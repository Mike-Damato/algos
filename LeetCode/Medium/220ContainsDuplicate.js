//Naive O(N^2) Time Approach
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
};

//Using Bucket Sort O(N) Time
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  if (k < 1 || t < 0) {
    return false;
  }
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let bucket = Math.floor(nums[i] / (t + 1));
    if (map.has(bucket)) {
      return true;
    }
    if (map.has(bucket - 1) && Math.abs(nums[i] - map.get(bucket - 1)) <= t) {
      return true;
    }
    if (map.has(bucket + 1) && Math.abs(map.get(bucket + 1) - nums[i]) <= t) {
      return true;
    }
    if (map.size >= k) {
      let outOfRange = Math.floor(nums[i - k] / (t + 1));
      map.delete(outOfRange);
    }

    map.set(bucket, nums[i]);
    //console.log(map)
  }
  return false;
};
