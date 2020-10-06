class BSTIterator {
  constructor(root) {
    this.root = root;
    this.tree = this.dfs(this.root, []);
  }
  next() {
    while (this.tree.length) {
      return this.tree.shift();
    }
  }
  hasNext() {
    if (!this.tree || !this.tree.length) {
      return false;
    } else {
      return true;
    }
  }
  dfs(root, arr) {
    if (!root) return null;

    if (root.left) {
      this.dfs(root.left, arr);
    }
    arr.push(root.val);
    if (root.right) {
      this.dfs(root.right, arr);
    }
    return arr;
  }
}
