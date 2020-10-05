var deepestLeavesSum = function (root) {
  let sum = 0;
  let maxDepth = 0;
  let queue = [[root, 0]];

  while (queue.length) {
    let [node, depth] = queue.shift();
    if (!node.left && !node.right) {
      if (maxDepth < depth) {
        sum = node.val;
        maxDepth = depth;
      } else if (maxDepth === depth) {
        sum += node.val;
      }
    } else {
      if (node.left) {
        queue.push([node.left, depth + 1]);
      }
      if (node.right) {
        queue.push([node.right, depth + 1]);
      }
    }
  }
  return sum;
};
