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
Searching - O(n) - Not important for Queues
Access - O(n) - Not important for Queues
*/
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this.size;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}
