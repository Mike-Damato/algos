var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }
  let bool = false;
  let queue = [root];
  let current;
  let ans = [];

  while (queue.length) {
    let size = queue.length;
    let level = [];
    bool = !bool;
    for (let i = 0; i < size; i++) {
      current = queue.shift();
      level.push(current.val);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    if (bool) {
      ans.push(level);
    } else {
      ans.push(level.reverse());
    }
  }
  return ans;
};
