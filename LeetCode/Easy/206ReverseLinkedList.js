const reverseList = (head) => {
  let current = head;
  let prevNode = null;
  let nextNode = null;
  while (current) {
    nextNode = current.next;
    current.next = prevNode;
    prevNode = current;
    current = nextNode;
  }
  return prevNode;
};
