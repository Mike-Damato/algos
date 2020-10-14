var rob = function (nums) {
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  let odd = [nums[0]];
  let even = [0, nums[1]];

  for (let i = 1; i < nums.length - 1; i++) {
    odd[i] = Math.max(nums[i] + (odd[i - 2] || 0), odd[i - 1]);
  }

  for (let i = 2; i < nums.length; i++) {
    even[i] = Math.max(nums[i] + even[i - 2], even[i - 1]);
  }
  return Math.max(odd[odd.length - 1], even[even.length - 1]);
};

//Alternate
const rob = (nums) => {
    if(!nums.length) return 0
    if(nums.length === 1) return nums[0];
    const getRobbed = (start, end) => {
    let n = end - start + 1;
    let dp = [0, 0];

    for(let i = 0, j = 2; i < n; i++, j++){
        let num = nums[start + i];
        dp[j] = Math.max(num + dp[j-2], dp[j-1])
    }
    return dp[dp.length-1]
}

    return Math.max(getRobbed(1, nums.length-1), getRobbed(0, nums.length-2))
}

