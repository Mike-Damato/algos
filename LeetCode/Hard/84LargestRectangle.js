var largestRectangleArea = function (heights) {
  let currentArea;
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    let minHeight = Infinity;
    for (let j = i; j < heights.length; j++) {
      minHeight = Math.min(minHeight, heights[j]);
      currentArea = minHeight * (j - i + 1);
      maxArea = Math.max(maxArea, currentArea);
    }
  }
  return maxArea;
};
