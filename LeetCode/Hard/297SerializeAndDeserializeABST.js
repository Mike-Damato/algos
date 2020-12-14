var serialize = function (root) {
  const stack = [root];
  const ans = [];
  while (stack.length) {
    let current = stack.pop();
    if (current) {
      ans.push(current.val);
      stack.push(current.right);
      stack.push(current.left);
    } else {
      ans.push(null);
    }
  }
  return ans;
};

var deserialize = function (data) {
  if (!data.length) return null;

  const deserailizeHelper = (arr) => {
    if (!arr.length) return null;
    let nodeVal = arr.shift();
    if (nodeVal === null) {
      return null;
    } else {
      let rootNode = new TreeNode(nodeVal);
      rootNode.left = deserailizeHelper(arr);
      rootNode.right = deserailizeHelper(arr);
      return rootNode;
    }
  };
  return deserailizeHelper(data);
};
