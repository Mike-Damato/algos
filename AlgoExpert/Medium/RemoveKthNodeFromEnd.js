class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  // Write your code here.
  let first = head;
  let second = head;
  let count = 0;
  //first iterataion
  while (count < k) {
    second = second.next;
    count++;
  }

  //edge case if node we want to remove is head
  if (second === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }

  while (second.next !== null) {
    first = first.next;
    second = second.next;
  }
  first.next = first.next.next;
}
