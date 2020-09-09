var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let map = new Map();

  for (const num of nums2) {
    while (stack.length && num > stack[stack.length - 1]) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }

  while (stack.length) {
    map.set(stack.pop(), -1);
  }

  return nums1.map((num) => map.get(num));
};
