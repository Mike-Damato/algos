var majorityElement = function (nums) {
  let freq = Math.floor(nums.length / 3);
  let map = new Map();
  let ans = new Set();
  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
    if (map.get(num) > freq) ans.add(num);
  }
  return [...ans];
};

//Optimized to constant space using Moore Voting Algorithm
const majorityElement = (nums) => {
  let num1 = 0;
  let num2 = 0;
  let count1 = 0;
  let count2 = 0;
  let freq = Math.floor(nums.length / 3);

  for (const num of nums) {
    if (num === num1) {
      count1++;
    } else if (num === num2) {
      count2++;
    } else if (count1 === 0) {
      num1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      num2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }
  let ans = [];
  count1 = 0;
  count2 = 0;

  for (const num of nums) {
    if (num === num1) {
      count1++;
    } else if (num === num2) {
      count2++;
    }
  }

  if (count1 > freq) {
    ans.push(num1);
  }
  if (count2 > freq) {
    ans.push(num2);
  }

  return ans;
};
