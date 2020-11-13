var connect = function (root) {
  if (!root) {
    return root;
  }
  let queue = [root];
  let current;
  let level;
  while (queue.length) {
    level = [...queue];
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      current = queue.shift();
      current.next = level[i + 1];
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

//Alternate
var connect = function (root) {
  if (!root) return null;

  let queue = [root];
  let current, size;
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
