var rob = function (nums) {
  let curr = 0;
  let oneAgo = 0;
  let twoAgo = 0;
  for (let i = 0; i < nums.length; i++) {
    curr = Math.max(oneAgo, twoAgo + nums[i]);
    twoAgo = oneAgo;
    oneAgo = curr;
  }
  return curr;
};
