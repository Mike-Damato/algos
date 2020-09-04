var isSymmetric = function (root) {
  const isMirror = (node1, node2) => {
    if (!node1 && !node2) {
      return true;
    }
    if (!node1 || !node2 || node1.val !== node2.val) {
      return false;
    }
    return (
      isMirror(node1.right, node2.left) && isMirror(node1.left, node2.right)
    );
  };
  return isMirror(root, root);
};

//Iterative
const isSymmetric = (root) => {
  if (!root) {
    return true;
  }

  let queue = [root, root];
  let node1, node2;
  while (queue.length) {
    node1 = queue.shift();
    node2 = queue.shift();
    if (!node1 && !node2) {
      continue;
    }
    if (!node1 || !node2) {
      return false;
    }
    if (node1.val !== node2.val) {
      return false;
    }
    queue.push(node1.left);
    queue.push(node2.right);
    queue.push(node1.right);
    queue.push(node2.left);
  }
  return true;
};
