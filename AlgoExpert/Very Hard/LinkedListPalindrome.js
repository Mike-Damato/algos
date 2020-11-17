class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function linkedListPalindrome(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHead = reverse(slow);
  let firstHead = head;

  while (secondHead) {
    if (secondHead.value !== firstHead.value) {
      return false;
    }
    secondHead = secondHead.next;
    firstHead = firstHead.next;
  }
  return true;
}

const reverse = (head) => {
  if (!head) return null;
  let p1 = null;
  let p2 = head;
  let p3 = null;
  while (p2) {
    p3 = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = p3;
  }
  return p1;
};
