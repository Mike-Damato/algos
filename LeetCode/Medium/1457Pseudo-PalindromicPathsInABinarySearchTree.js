var pseudoPalindromicPaths = function (root) {
  let paths = 0;
  if (!root) return paths;
  const arr = [];

  const dfs = (node, arr) => {
    if (!node) return;

    if (!node.left && !node.right) {
      const finalPath = [...arr, node.val];
      if (isPalindromeTree(finalPath)) {
        paths++;
      }
      return;
    }

    if (node.left) {
      dfs(node.left, [...arr, node.val]);
    }

    if (node.right) {
      dfs(node.right, [...arr, node.val]);
    }
  };

  dfs(root, arr);
  return paths;
};

const isPalindromeTree = (arr) => {
  const map = new Map();
  for (const node of arr) {
    map.set(node, (map.get(node) || 0) + 1);
  }

  return [...map.values()].filter((item) => item % 2 !== 0).length <= 1;
};
