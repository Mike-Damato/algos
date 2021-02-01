class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
  let current = linkedList;
  while (current) {
    let nextNewNode = current.next;
    while (nextNewNode && nextNewNode.value === current.value) {
      nextNewNode = nextNewNode.next;
    }
    current.next = nextNewNode;
    current = nextNewNode;
  }
  return linkedList;
}
