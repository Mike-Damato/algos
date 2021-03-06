var trap = function (height) {
  const rightMaxes = [];
  let rightMax = 0;

  for (let i = height.length - 1; i >= 0; i--) {
    rightMax = Math.max(rightMax, height[i]);
    rightMaxes[i] = rightMax;
  }

  let water = 0;
  let leftMax = 0;
  for (let i = 0; i < height.length; i++) {
    leftMax = Math.max(leftMax, height[i]);
    let rightMax = rightMaxes[i];
    water += Math.min(leftMax, rightMax) - height[i];
  }
  return water;
};
