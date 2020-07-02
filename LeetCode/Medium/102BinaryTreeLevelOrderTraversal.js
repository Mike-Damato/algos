var levelOrder = function (root) {
  if (root === null) {
    return [];
  }
  let q = [root];
  let ans = [];
  while (q.length) {
    let level = [];
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let curr = q.shift();
      level.push(curr.val);
      if (curr.left) {
        q.push(curr.left);
      }
      if (curr.right) {
        q.push(curr.right);
      }
    }
    ans.push(level);
  }
  return ans;
};
