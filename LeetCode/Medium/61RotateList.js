var rotateRight = function (head, k) {
  if (!head) {
    return null;
  }
  let length = 1;
  let origTail = head;
  while (origTail.next) {
    origTail = origTail.next;
    length += 1;
  }

  let newK = Math.abs(k) % length;
  if (newK === 0) {
    return head;
  }
  let newTailPos = length - newK;
  let newTail = head;

  for (let i = 1; i < newTailPos; i++) {
    newTail = newTail.next;
  }

  let newHead = newTail.next;
  newTail.next = null;
  origTail.next = head;
  return newHead;
};
