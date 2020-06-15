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

//Iterative
const searchBST = (root, val) => {
  if (root === null) {
    return root;
  }
  while (root !== null && root.val !== val) {
    if (root.val === val) {
      return root;
    } else if (root.val < val) {
      root = root.right;
    } else {
      root = root.left;
    }
  }
  return root;
};
