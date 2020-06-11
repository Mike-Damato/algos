class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/*
Big O:
Insertion - O(1)
Removal - If head its O(1), anything else its O(n)
Searching - O(n)
Access - O(n)
*/

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    //this.length++
    this.length += 1;
    return this;
  }
  traverse() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
  }
  pop() {
    if (!this.head) {
      return undefined;
    } else {
      let current = this.head;
      let newTail = current;
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length -= 1;
      //if there was only 1 item and we removed it
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      //return the node that was removed
      return current;
    }
  }
  shift() {
    if (!this.head) {
      return undefined;
    } else {
      let oldHead = this.head;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length === 0) {
        this.tail = null;
      }
      return oldHead;
    }
  }
  unshift(val) {
    const newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length += 1;
    return this;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    let current = this.head;
    let count = 0;
    while (count !== idx) {
      current = current.next;
      count++;
    }
    return current;
  }
  set(val, idx) {
    const foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) {
      return false;
    }
    if (idx === 0) {
      // the !! forces return to be a boolean opposed to the entire list
      return !!this.unshift(val);
      // this.unshift(val);
      // return true;
    }
    if (idx === this.length) {
      return !!this.push(val);
      // this.push(val);
      // return true;
    }
    const previousNode = this.get(idx - 1);
    const newNode = new Node(val);
    const temp = previousNode.next;
    previousNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
    // newNode.next = previousNode.next;
    // previousNode.next = newNode;
  }
  remove(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    if (idx === this.length - 1) {
      return this.pop();
    }
    if (idx === 0) {
      return this.shift();
    }
    const previousNode = this.get(idx - 1);
    const removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    this.length -= 1;
    return removedNode;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let prev = null;
    while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let myList = new SinglyLinkedList();
