var mergeTrees = function (t1, t2) {
  //DFS

  //Check 2 nodes exist at that level
  //if only 1 node exists just return that node to your merged tree
  if (t1 === null) {
    return t2;
  }
  if (t2 === null) {
    return t1;
  }

  //add 2 node vals together
  let newNode = new TreeNode(t1.val + t2.val);
  //check left
  newNode.left = mergeTrees(t1.left, t2.left);
  //checck right
  newNode.right = mergeTrees(t1.right, t2.right);

  return newNode;
};
