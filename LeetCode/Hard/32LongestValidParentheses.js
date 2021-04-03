/*
Use a stack & a set
3 Iterations
First iteration:
If we see open push index into stack
If we see close and theres stuff in our stack just pop out
Otherwise we have an unbalanced open so add index to our set

Second iteration:
While theres stuff in our stack, meaning we are unbalanced add to our set

Third iteration:
Store a currentCount and maxCount
as long as i < s.length & we dont have i in our set we are "valid" so increase count

otherwise reset count and calc maxCount

O(N) Time | O(N) Space
*/
const longestValidParentheses = (str) => {
  if (!s || !s.length) return 0;

  const stack = [];
  const set = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === '(') {
      stack.push(i);
    } else {
      if (stack.length) {
        stack.pop();
      } else {
        set.add(i);
      }
    }
  }

  while (stack.length) {
    set.add(stack.pop());
  }

  let count = 0;
  let max = 0;
  for (let i = 0; i <= str.length; i++) {
    if (i < str.length && !set.has(i)) {
      count++;
    } else {
      max = Math.max(count, max);
      count = 0;
    }
  }
  return max;
};
