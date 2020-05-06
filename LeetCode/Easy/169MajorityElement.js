var majorityElement = function (nums) {
  let hash = {};
  for (let number of nums) {
    if (hash[number]) {
      hash[number]++;
    } else {
      hash[number] = 1;
    }
    if (hash[number] > nums.length / 2) {
      return number;
    }
  }
};
