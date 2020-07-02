var levelOrderBottom = function (root) {
  if (!root) {
    return [];
  }

  let queue = [root];
  let ans = [];
  while (queue.length) {
    let level = [];
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let current = queue.shift();
      level.push(current.val);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    ans.push(level);
  }
  return ans.reverse();
};
