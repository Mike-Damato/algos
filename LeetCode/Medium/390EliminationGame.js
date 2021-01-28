//O(log N)
var lastRemaining = function (n) {
  let left = 1;
  let right = n;
  let direction = true;
  let step = 1;
  let remainder = n;

  while (left < right) {
    if (direction) {
      left += step;
      if (remainder % 2 !== 0) {
        right -= step;
      }
    } else {
      right -= step;
      if (remainder % 2 !== 0) {
        left += step;
      }
    }
    direction = !direction;
    step *= 2;
    remainder = Math.floor(remainder / 2);
  }
  return left;
};

//Alternate - O(N)
const lastRemaining = (n) => {
  let start = 1;
  let diff = 1;
  let direction = false;

  while (n > 1) {
    if (n % 2 !== 0 || direction === false) {
      start += diff;
    }
    n = Math.floor(n / 2);
    diff *= 2;
    direction = !direction;
  }
  return start;
};
