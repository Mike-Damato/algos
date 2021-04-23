function largestRectangleUnderSkyline(buildings) {
  const stack = [];
  let max = 0;
  const arr = [...buildings, [0]];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    while (stack.length && arr[stack[stack.length - 1]] >= current) {
      const currentHeight = arr[stack.pop()];
      const width = !stack.length ? i : i - stack[stack.length - 1] - 1;
      max = Math.max(max, width * currentHeight);
    }
    stack.push(i);
  }
  return max;
}
