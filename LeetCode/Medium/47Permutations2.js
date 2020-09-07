var permuteUnique = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let ans = [];
  let seen = new Set();

  const backtrack = (perms) => {
    //we have reached the end of a perm push in a snapshot and return
    if (perms.length === nums.length) {
      ans.push([...perms]);
      return;
    } else {
      for (let i = 0; i < nums.length; i++) {
        //Avoid Dupes with this check
        if (
          seen.has(i) ||
          (i > 0 && nums[i] === nums[i - 1] && !seen.has(i - 1))
        ) {
          continue;
        }
        //add the index to seen - using indexes because indexes are guaranteed to be uniqure
        seen.add(i);
        //add the number to the permutation
        perms.push(nums[i]);
        //call function to see if we reached desired length or add the next number
        backtrack(perms);
        //remove the index to add to other perms in a different order
        seen.delete(i);
        //remove the last item of the perm to add another item and create a new perm
        perms.pop();
      }
    }
  };
  backtrack([]);
  return ans;
};
