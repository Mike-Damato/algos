class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
/*
Big O
Insertion - O(log n)
Searching - O(log n)
*/
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.val) {
          return null;
        }
        //returning will break out of while loop
        //check if val is less or greater than
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(val) {
    if (this.root === null) {
      return false;
    }
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (Value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) {
      return null;
    }
    return current;
  }
  BFS() {
    let result = [];
    let queue = [];
    let current;
    queue.push(this.root);
    while (queue.length) {
      current = queue.shift();
      result.push(current);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return result;
  }
  DFSPreOrder(node) {
    const data = [];
    const traverse = (node) => {
      data.push(node);
      if (node.right) {
        traverse(node.right);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return data;
  }
}

const myTree = new BinarySearchTree();
