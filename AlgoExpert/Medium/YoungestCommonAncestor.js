//O(D) Time where D is depth of deepest node
//O(1) Space
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  // Write your code here.
  let depthOne = getDepth(descendantOne, topAncestor);
  let depthTwo = getDepth(descendantTwo, topAncestor);
  if (depthOne > depthTwo) {
    return backtrackAncestorTree(
      descendantOne,
      descendantTwo,
      depthOne - depthTwo
    );
  } else {
    return backtrackAncestorTree(
      descendantTwo,
      descendantOne,
      depthTwo - depthOne
    );
  }
}

const getDepth = (descendant, topAncestor) => {
  let depth = 0;
  while (descendant !== topAncestor) {
    depth += 1;
    descendant = descendant.ancestor;
  }
  return depth;
};

const backtrackAncestorTree = (lowerDescendant, higherDescendant, diff) => {
  while (diff > 0) {
    lowerDescendant = lowerDescendant.ancestor;
    diff -= 1;
  }

  while (lowerDescendant !== higherDescendant) {
    lowerDescendant = lowerDescendant.ancestor;
    higherDescendant = higherDescendant.ancestor;
  }
  return lowerDescendant;
};
