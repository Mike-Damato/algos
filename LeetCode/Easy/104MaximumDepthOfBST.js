var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }
  let lHeight = 1;
  let rHeight = 1;
  if (root.right) {
    rHeight += maxDepth(root.right);
  }
  if (root.left) {
    lHeight += maxDepth(root.left);
  }
  return Math.max(lHeight, rHeight);
};

//Alternate
var maxDepth = function (root) {
  if (!root) return 0;
  let max = 0;

  const dfs = (node, depth) => {
    if (!node.left && !node.right) {
      max = Math.max(max, depth);
      return max;
    }
    if (node.left) {
      dfs(node.left, depth + 1);
    }
    if (node.right) {
      dfs(node.right, depth + 1);
    }
  };

  dfs(root, 1);
  return max;
};

//Using BFS
const maxDepth = (root) => {
  if (!root) return 0;
  let max = 0;
  let size;
  const queue = [[root, 1]];

  while (queue.length) {
    size = queue.length;
    for (let i = 0; i < size; i++) {
      let [current, depth] = queue.shift();
      if (!current.left && !current.right) {
        max = Math.max(max, depth);
      }
      if (current.left) {
        queue.push([current.left, depth + 1]);
      }
      if (current.right) {
        queue.push([current.right, depth + 1]);
      }
    }
  }
  return max;
};
