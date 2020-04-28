var copyRandomList = function (head) {
  if (head === null) {
    return null;
  }

  let deepCopy = new Map();
  let newHead = new Node(head.val);

  let currentPointer = head.next;
  let newCurrentPointer = newHead;

  deepCopy.set(head, newHead);
  while (currentPointer) {
    newCurrentPointer.next = new Node(currentPointer.val);
    newCurrentPointer = newCurrentPointer.next;
    deepCopy.set(currentPointer, newCurrentPointer);
    currentPointer = currentPointer.next;
  }

  currentPointer = head;
  newCurrentPointer = newHead;

  while (currentPointer) {
    if (currentPointer.random) {
      newCurrentPointer.random = deepCopy.get(currentPointer.random);
    } else {
      newCurrentPointer.random = null;
    }
    currentPointer = currentPointer.next;
    newCurrentPointer = newCurrentPointer.next;
  }

  return newHead;
};
