var singleNonDuplicate = function (nums) {
  let hash = {};
  for (let elem of nums) {
    if (hash[elem]) {
      hash[elem] += 1;
    } else {
      hash[elem] = 1;
    }
  }
  let arr = Object.entries(hash);
  for (let j = 0; j < arr.length; j++) {
    if (arr[j][1] === 1) {
      return arr[j][0];
    }
  }
  return undefined;
};

//
var singleNonDuplicate = function (nums) {
  let hash = {};
  if (nums.length === 0 || nums === null) return -1;
  for (let i = 0; i < nums.length; i++) {
    if (hash.hasOwnProperty(nums[i])) {
      hash[nums[i]]++;
    } else {
      hash[nums[i]] = 1;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === 1) return nums[i];
  }
  return -1;
};

//Binary Search
var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (mid % 2 === 1) mid--;
    if (nums[mid] === nums[mid + 1]) left = mid + 2;
    else right = mid;
  }
  return nums[left];
};

//[1,1,2,3,3,4,4,8,8]
//left       = 0 , 0 , 0   , 2
//right      = 8 , 4 , 2   , 2
//mid        = 4 , 2 , 1(0)
//num[mid]   = 3 , 2 , 1
//num[mid+1] = 4 , 3 , 1

//[3,3,7,7,10,11,11]
//left       = 0   , 4   , 4
//right      = 6   , 6   , 4
//mid        = 3(2), 5(4),
//num[mid]   = 7   , 10  ,
//num[mid+1] = 7   , 11  ,
