var maxAncestorDiff = function (root) {
  if (!root) return 0;

  const dfs = (node, max, min) => {
    if (!node) return max - min;

    max = Math.max(max, node.val);
    min = Math.min(min, node.val);

    let left = dfs(node.left, max, min);
    let right = dfs(node.right, max, min);

    return Math.max(left, right);
  };
  return dfs(root, root.val, root.val);
};

//Alternate
var maxAncestorDiff = function (root) {
  if (!root) return 0;

  let ans = 0;

  const dfs = (node, min, max) => {
    if (!node) return;
    ans = Math.max(ans, abs(min, node.val), abs(max, node.val));
    max = Math.max(max, node.val);
    min = Math.min(min, node.val);
    if (node.left) {
      dfs(node.left, min, max);
    }
    if (node.right) {
      dfs(node.right, min, max);
    }
  };

  dfs(root, root.val, root.val);
  return ans;
};

const abs = (a, b) => Math.abs(a - b);
