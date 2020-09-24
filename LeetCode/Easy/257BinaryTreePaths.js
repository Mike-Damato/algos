var binaryTreePaths = function (root) {
  let paths = [];
  const dfs = (node, path) => {
    if (!node) return null;
    path += node.val.toString();
    if (!node.left && !node.right) {
      paths.push(path);
    } else {
      path += '->';
      dfs(node.left, path);
      dfs(node.right, path);
    }
  };
  dfs(root, '');
  return paths;
};
