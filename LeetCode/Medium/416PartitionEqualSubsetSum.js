var canPartition = function (nums) {
  //Quick check, if total is odd we can never return true
  let total = nums.reduce((a, b) => a + b, 0);
  if (total % 2 !== 0) return false;

  //Recursive function to handle all other partitions
  const partitionHelper = (nums, idx, sum, total, memo) => {
    //Store the index and sum as a key in our memo to avoid duplicate calculations
    let key = `${idx}-${sum}`;

    if (memo.hasOwnProperty(key)) return memo[key];
    //We have found a point where our sum can be doubled and satisfy this prompt
    if (sum * 2 === total) return true;

    //Sum is too big or weve reached the end of our input array
    if (sum > Math.floor(total / 2) || idx >= nums.length) return false;

    //Check at next index by adding the current number and leaving it out.
    let foundPartition =
      partitionHelper(nums, idx + 1, sum, total, memo) ||
      partitionHelper(nums, idx + 1, sum + nums[idx], total, memo);

    //Store the result in our memo
    memo[key] = foundPartition;

    return foundPartition;
  };

  return partitionHelper(nums, 0, 0, total, {});
};

//Alternate Solution
var canPartition = function (nums) {
  if (!nums) return false;
  let total = nums.reduce((a, b) => a + b, 0);

  if (total % 2 !== 0) return false;

  let target = total / 2;
  let dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (let num of nums) {
    for (let i = target; i >= 0; i--) {
      let diff = i - num;

      if (!dp[i] && dp[diff]) {
        dp[i] = true;
      }
      if (dp[target] == true) return true;
    }
  }

  return false;
};
