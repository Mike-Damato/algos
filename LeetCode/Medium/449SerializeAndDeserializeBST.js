var serialize = function (root) {
  if (!root) return '';
  let arr = [];
  const dfs = (node, arr) => {
    if (!node) return;

    arr.push(node.val);
    dfs(node.left, arr);
    dfs(node.right, arr);
  };

  dfs(root, arr);
  return arr.join(',');
};

var deserialize = function (data) {
  if (!data) return null;
  let arr = data.split(',');

  const helper = (arr, min, max) => {
    if (!arr.length) return null;
    let val = +arr[0];
    if (val < min || val > max) return null;
    arr.shift();
    let node = new TreeNode(val);
    node.left = helper(arr, min, val);
    node.right = helper(arr, val, max);
    return node;
  };
  return helper(arr, -Infinity, Infinity);
};
