//Bucket Sort
var topKFrequent = function (nums, k) {
  let hash = {};
  let bucket = new Array(nums.length + 1);
  let ans = [];

  for (const num of nums) {
    if (hash.hasOwnProperty(num)) {
      hash[num] += 1;
    } else {
      hash[num] = 1;
    }
  }

  let entriesArr = Objec.entries(hash);

  for (let [key, val] of entriesArr) {
    if (bucket[val] === undefined) {
      bucket[val] = [];
    }
    bucket[val].push(key);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (ans.length === k) {
      break;
    }
    if (bucket[i] !== undefined) {
      ans = ans.concat(bucket[i]);
    }
  }
  return ans;
};

//Naive N Log N solution
var topKFrequent = function (nums, k) {
  let hash = {};
  let ans = [];

  for (const num of nums) {
    if (hash.hasOwnProperty(num)) {
      hash[num] += 1;
    } else {
      hash[num] = 1;
    }
  }

  let entriesArr = Object.entries(hash);
  entriesArr.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    ans.push(entriesArr[i][0]);
  }

  return ans;
};
