var mostCompetitive = function (nums, k) {
  const stack = [];
  let numToRemove = nums.length - k;

  for (const num of nums) {
    while (num < stack[stack.length - 1] && numToRemove) {
      numToRemove--;
      stack.pop();
    }
    stack.push(num);
  }

  while (stack.length > k) {
    stack.pop();
  }
  return stack;
};
