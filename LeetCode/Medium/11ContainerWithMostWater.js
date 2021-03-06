var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    let width = right - left;
    if (height[left] > height[right]) {
      maxArea = Math.max(maxArea, width * height[right]);
      right--;
    } else {
      maxArea = Math.max(maxArea, width * height[left]);
      left++;
    }
  }
  return maxArea;
};
