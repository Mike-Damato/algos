var averageOfLevels = function (root) {
  if (!root) return null;

  let queue = [root];
  let avgs = [];
  while (queue.length) {
    let sum = 0;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let current = queue.shift();
      sum += current.val;
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    avgs.push(sum / size);
  }
  return avgs;
};
