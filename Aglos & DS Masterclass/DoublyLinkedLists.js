class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
      return this;
    }
  }
  pop() {
    if (!this.head) {
      return null;
    }
    const removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }
  shift() {
    if (!this.head) {
      return null;
    }
    const removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    let current;
    let count;
    if (idx <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== idx) {
        current = current.next;
        count++;
      }
    } else {
      current = this.length - 1;
      while (count !== idx) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(idx, val) {
    const foundNode = this.get(idx);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    } else {
      return false;
    }
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) {
      return false;
    }
    if (idx === 0) {
      return !!this.unshift(val);
    }
    if (idx === this.length - 1) {
      return !!this.push(val);
    }
    const newNode = new Node(val);
    const prevNode = this.get(idx - 1);
    const afterNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }
  remove(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    if (idx === 0) {
      return this.shift();
    }
    if (idx === this.length - 1) {
      return this.pop();
    }
    const removedNode = this.get(idx);
    const prevNode = removedNode.prev;
    const afterNode = removedNode.next;
    prevNode.next = afterNode;
    afterNode.prev = prevNode;
    // removedNode.prev.next = removedNode.next;
    // removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}
