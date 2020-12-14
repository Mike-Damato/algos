class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return -1;

    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current.val;
  }
  addAtHead(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return;
  }
  addAtTail(val) {
    if (this.length === 0) {
      this.addAtHead(val);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(val);
    }
    this.length++;
    return;
  }
  addAtIndex(idx, val) {
    if (idx < 0 || idx > this.length) return;

    if (idx === this.length) {
      this.addAtTail(val);
      return;
    }
    if (idx === 0) {
      this.addAtHead(val);
      return;
    }

    let newNode = new Node(val);
    let current = this.head;
    for (let i = 0; i < idx - 1; i++) {
      current = current.next;
    }
    let next = current.next;
    current.next = newNode;
    newNode.next = next;
    this.length++;
    return;
  }
  deleteAtIndex(idx) {
    if (idx < 0 || idx >= this.length) return;

    if (idx === this.length) {
      let current = this.head;
      let newTail = current;
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = this.head;
      }
      return;
    }
    if (idx === 0) {
      let current = this.head;
      this.head = current.next;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = this.head;
      }
      return;
    }

    let prev = this.head;
    for (let i = 0; i < idx - 1; i++) {
      prev = prev.next;
    }
    let nodeToRemove = prev.next;
    prev.next = nodeToRemove.next;
    nodeToRemove.next = null;
    this.length--;
    return;
  }
}
