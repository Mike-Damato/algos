//Recursive
const helper = (tree, target, closest) => {
  if (tree === null) {
    return closest;
  }
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return helper(tree.left, target, closest);
  }
  if (target > tree.value) {
    return helper(tree.right, target, closest);
  }
  return closest;
};

function findClosestValueInBst(tree, target) {
  // Write your code here.
  return helper(tree, target, tree.value);
}

//Iterative
const helper = (tree, target, closest) => {
  let current = tree;
  while (current !== null) {
    if (Math.abs(target - closest) > Math.abs(target - current.value)) {
      closest = current.value;
    }
    if (target < current.value) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return closest;
};

function findClosestValueInBst(tree, target) {
  // Write your code here.
  return helper(tree, target, tree.value);
}
