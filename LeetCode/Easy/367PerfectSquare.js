//Brute force

var isPerfectSquare = function (num) {
  for (let i = 1; i <= num; i++) {
    if (i * i === num) {
      return true;
    }
  }
  return false;
};

//Binary Search
var isPerfectSquare = function (num) {
  let left = 1;
  let right = num;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let possibleMatch = mid * mid;
    if (possibleMatch === num) {
      return true;
    } else if (possibleMatch > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};
