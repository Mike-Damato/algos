var findDisappearedNumbers = function (nums) {
  const numMap = {};
  const resultArray = [];
  for (let num of nums) {
    if (!numMap[num]) numMap[num] = true;
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!numMap[i]) resultArray.push(i);
  }

  return resultArray;
};
