const connect = (root) => {
  if (root == null) return root;
  let queue = [root];
  let level = [];

  while (queue.length) {
    const node = queue.shift();
    node.next = queue[0] || null;
    if (node.left != null) {
      level.push(node.left);
    }
    if (node.right != null) {
      level.push(node.right);
    }

    if (queue.length == 0) {
      queue = level;
      level = [];
    }
  }
  return root;
};
