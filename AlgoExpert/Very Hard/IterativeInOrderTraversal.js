function iterativeInOrderTraversal(tree, callback) {
  let prev = null;
  let current = tree;
  let next;
  while (current) {
    if (!prev || prev === current.parent) {
      if (current.left) {
        next = current.left;
      } else {
        callback(current);
        next = current.right ? current.right : current.parent;
      }
    } else if (prev === current.left) {
      callback(current);
      next = current.right ? current.right : current.parent;
    } else {
      next = current.parent;
    }
    prev = current;
    current = next;
  }
}
