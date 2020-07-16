function waterArea(heights) {
  let rightMaxesArr = [];
  let rightMax = 0;

  for (let i = heights.length - 1; i >= 0; i--) {
    rightMax = Math.max(rightMax, heights[i]);
    rightMaxesArr[i] = rightMax;
  }

  let water = 0;
  let leftMax = 0;
  for (let i = 0; i < heights.length; i++) {
    leftMax = Math.max(leftMax, heights[i]);
    let rightMax = rightMaxesArr[i];
    water += Math.min(leftMax, rightMax) - heights[i];
  }
  return water;
}
