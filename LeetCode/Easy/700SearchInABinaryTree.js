var searchBST = function (root, val) {
  //once we hit a null OR a root that === the target val just immediately return that root
  if (root === null || root.val === val) {
    return root;
  } else if (val < root.val) {
    //we check left
    return searchBST(root.left, val);
  } else {
    //check right
    return searchBST(root.right, val);
  }
};
