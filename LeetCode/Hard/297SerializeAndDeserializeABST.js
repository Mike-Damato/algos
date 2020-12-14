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

//Alternate
var serialize = function (root) {
  const tree = [];

  const dfs = (node) => {
    if (!node) {
      //Use # to signify null
      tree.push('#');
    } else {
      tree.push(node.val);
      dfs(node.left);
      dfs(node.right);
    }
  };
  dfs(root);
  return tree.join(' ');
};

var deserialize = function (data) {
  if (!data) return null;
  let arr = data.split(' ');

  const makeTree = () => {
    let val = arr.shift();
    if (val === '#') {
      return null;
    } else {
      let node = new TreeNode(Number(val));
      node.left = makeTree();
      node.right = makeTree();
      return node;
    }
  };
  return makeTree();
};

//One liner
const [serialize, deserialize] = [JSON.stringify, JSON.parse];
