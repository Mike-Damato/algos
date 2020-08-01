var mySqrt = function (x) {
  let start = 0;
  let end = x;
  let mid;
  while (start < end) {
    mid = start + Math.floor((end - start) / 2);
    if (mid * mid === x) {
      return mid;
    }
    if (x < mid * mid) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return x < end * end ? end - 1 : end;
};
