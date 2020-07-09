var widthOfBinaryTree = function (root) {
  if (!root) return 0;
  let maxWidth = 1;
  let queue = [root];

  while (queue.length) {
    let level = [];

    for (let node of queue) {
      if (!node) {
        level.push(null);
        level.push(null);
      } else {
        level.push(node.left);
        level.push(node.right);
      }
    }

    let firstNotNull = level.findIndex((x) => x !== null);
    if (firstNotNull === -1) return maxWidth;
    // trim the start
    level = level.slice(firstNotNull).reverse();
    firstNotNull = level.findIndex((x) => x !== null);
    // trim the end
    level = level.slice(firstNotNull).reverse();
    maxWidth = Math.max(level.length, maxWidth);
    queue = level;
  }
};
