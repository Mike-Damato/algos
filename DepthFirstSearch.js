class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
    array.push(this.name);
    let childArr = this.children;
    for (let i = 0; i < childArr.length; i++) {
      childArr[i].depthFirstSearch(array);
    }
    return array;
  }
}
