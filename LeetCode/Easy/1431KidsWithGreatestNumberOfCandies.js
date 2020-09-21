var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  let ans = candies.map((_) => false);
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      ans[i] = true;
    }
  }
  return ans;
};
