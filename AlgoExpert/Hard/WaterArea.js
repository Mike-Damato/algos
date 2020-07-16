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

//Alternate Solution
function waterArea(heights) {
  // Write your code here.
  let leftMaxesArr = [];
  let leftMax = 0;
  for (let i = 0; i < heights.length; i++) {
    leftMax = Math.max(leftMax, heights[i]);
    leftMaxesArr.push(leftMax);
  }

  let rightMaxesArr = [];
  let rightMax = [];
  for (let i = heights.length - 1; i >= 0; i--) {
    rightMax = Math.max(rightMax, heights[i]);
    rightMaxesArr.push(rightMax);
  }
  rightMaxesArr.reverse();

  let minHeights = [];
  let minHeight;
  for (let i = 0; i < heights.length; i++) {
    minHeight = Math.min(leftMaxesArr[i], rightMaxesArr[i]);
    minHeights.push(minHeight);
  }

  let water = 0;
  for (let i = 0; i < minHeights.length; i++) {
    if (heights[i] < minHeights[i]) {
      water += minHeights[i] - heights[i];
    }
  }
  return water;
}

//Alternate
function waterArea(heights) {
  // Write your code here.
  let water = 0;
  let maxes = new Array(heights.length).fill(0);
  let leftMax = 0;

  for (let i = 0; i < heights.length; i++) {
    let currentHeight = heights[i];
    maxes[i] = leftMax;
    leftMax = Math.max(leftMax, currentHeight);
  }

  let rightMax = 0;
  for (let i = heights.length - 1; i >= 0; i--) {
    let currentHeight = heights[i];
    let minHeight = Math.min(rightMax, maxes[i]);
    if (currentHeight < minHeight) {
      maxes[i] = minHeight - currentHeight;
    } else {
      maxes[i] = 0;
    }
    rightMax = Math.max(currentHeight, rightMax);
  }

  return maxes.reduce((a, b) => a + b, 0);
}
