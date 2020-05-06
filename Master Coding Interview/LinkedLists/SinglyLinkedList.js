class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leaderNode = this.traverseToIndex(index - 1);
    const holdingPointer = leaderNode.next;
    leaderNode.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    const leaderNode = this.traverseToIndex(index - 1);
    const nodeToDelete = leaderNode.next;
    leaderNode.next = nodeToDelete.next;
    this.length--;
    return this.printList();
  }
  reverse() {
    //If only 1 element just return head (nothing to reverse)
    if (!this.head.next) {
      return this.head;
    }
    let current = this.head;
    this.tail = this.head;
    let second = current.next;
    while (second !== null) {
      const temp = second.next;
      second.next = current;
      current = second;
      second = temp;
    }
    this.head.next = null;
    this.head = current;
    return this;
  }
}
