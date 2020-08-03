function shiftLinkedList(head, k) {
  // Write your code here.
  let length = 1;
  let listTail = head;
  while (listTail.next) {
    listTail = listTail.next;
    length += 1;
  }

  let newK = Math.abs(k) % length;
  if (newK === 0) {
    return head;
  }
  let newTailPosition = k > 0 ? length - newK : newK;
  let newTail = head;

  for (let i = 1; i < newTailPosition; i++) {
    newTail = newTail.next;
  }

  let newHead = newTail.next;
  newTail.next = null;
  listTail.next = head;
  return newHead;
}

// This is the class of the input linked list.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
