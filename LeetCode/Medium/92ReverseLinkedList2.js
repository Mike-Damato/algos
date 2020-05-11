var reverseBetween = function (head, m, n) {
  if (head === null) return null;
  //if(head.next === null) return head
  let prev = null;
  let current = head;
  if (m === n) {
    return head;
  }

  while (m > 1) {
    //traverse to m
    prev = current;
    current = current.next;
    m--;
    n--;
  }
  let reconnect = prev; //connect the reversed part
  let endOfReversed = current;

  while (n > 0) {
    //traverse to n while reversing
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
    n--;
  }

  if (reconnect !== null) {
    reconnect.next = prev;
  } else {
    head = prev;
  }

  endOfReversed.next = current;

  return head;
};
