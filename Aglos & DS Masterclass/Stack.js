class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
/*
Big O
Insertion - O(1)
Removal - O(1)
Searching - O(N) - not important for stacks
Access - O(N) - not important for stacks
*/
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
    }
    this.size++;
    return this.size;
  }
  pop() {
    if (!this.first) {
      return null;
    } else {
      let temp = this.first;
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.val;
    }
  }
}
