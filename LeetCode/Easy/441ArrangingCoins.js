var arrangeCoins = function (n) {
  let left = 0;
  let right = n;
  let mid;
  let currentStep;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    currentStep = (mid * (mid + 1)) / 2;
    if (currentStep === n) {
      return mid;
    } else if (currentStep > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
};

//Naive
var arrangeCoins = function (n) {
  if (n < 1) {
    return n;
  }
  let currStep = 0;
  let count = 1;
  let i = 1;
  while (currStep < n) {
    currStep += i + 1;
    count = i;
    i++;
  }
  return count;
};
