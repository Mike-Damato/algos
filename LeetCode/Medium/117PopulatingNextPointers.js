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

//Alternate
const connect = (root) => {
  if (!root) {
    return null;
  }

  let queue = [root];
  let size, current;
  while (queue.length) {
    size = queue.length;
    for (let i = 0; i < size; i++) {
      current = queue.shift();

      if (i < size - 1) {
        current.next = queue[0];
      }
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
  return root;
};
