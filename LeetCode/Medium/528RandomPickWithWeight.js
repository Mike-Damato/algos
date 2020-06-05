var Solution = function (w) {
  this.ans = [];
  let total = 0;
  for (let i = 0; i < w.length; i++) {
    total += w[i];
    this.ans.push(total);
  }
  this.total = total;
};

Solution.prototype.pickIndex = function () {
  let target = Math.floor(Math.random() * this.total);
  let left = 0;
  let right = this.ans.length - 1;
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (this.ans[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
