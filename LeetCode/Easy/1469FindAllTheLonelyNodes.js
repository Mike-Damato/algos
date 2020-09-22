var getLonelyNodes = function (root) {
  let ans = [];
  if (!root) {
    return ans;
  }
  let queue = [root];
  let size, current;
  while (queue.length) {
    size = queue.length;
    for (let i = 0; i < size; i++) {
      current = queue.shift();
      if (current.left) {
        if (!current.right) {
          ans.push(current.left.val);
        }
        queue.push(current.left);
      }
      if (current.right) {
        if (!current.left) {
          ans.push(current.right.val);
        }
        queue.push(current.right);
      }
    }
  }
  return ans;
};

const getLonelyNodes = (root) => {
  let ans = [];
  if (!root) return ans;
  const dfs = (node) => {
    if (!node) return;
    if (node.left) {
      if (!node.right) {
        ans.push(node.left.val);
      }
      dfs(node.left);
    }
    if (node.right) {
      if (!node.left) {
        ans.push(node.right.val);
      }
      dfs(node.right);
    }
  };
  dfs(root);
  return ans;
};

const getLonelyNodes = (root) => {
  let ans = [];
  if (!root) return ans;
  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    dfs(node.right);
    if (node.left && node.right) return;

    if (node.left) ans.push(node.left.val);
    if (node.right) ans.push(node.right.val);
  };
  dfs(root);
  return ans;
};
