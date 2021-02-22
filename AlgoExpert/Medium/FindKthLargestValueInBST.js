class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//O(N) Time | O(N) Space
function findKthLargestValueInBst(tree, k) {
  // Write your code here.
  const arr = [];

  const dfs = (node) => {
    if (!node) return arr;

    if (node.right) {
      dfs(node.right);
    }
    arr.push(node.value);

    if (node.left) {
      dfs(node.left);
    }
  };

  dfs(tree);
  return arr[k - 1];
}

//O(H+K) Time | O(H) Space where H is height of the tree
class TreeInfo {
  constructor(numberOfNodesVisited, latestVisitedNodeValue) {
    this.numberOfNodesVisited = numberOfNodesVisited;
    this.latestVisitedNodeValue = latestVisitedNodeValue;
  }
}
function findKthLargestValueInBst(tree, k) {
  const newTree = new TreeInfo(0, -1);
  dfs(tree, k, newTree);
  return newTree.latestVisitedNodeValue;
}

const dfs = (node, k, tree) => {
  if (!node || tree.numberOfNodesVisited >= k) return;

  if (node.right) {
    dfs(node.right, k, tree);
  }
  if (tree.numberOfNodesVisited < k) {
    tree.numberOfNodesVisited++;
    tree.latestVisitedNodeValue = node.value;
    dfs(node.left, k, tree);
  }
};
