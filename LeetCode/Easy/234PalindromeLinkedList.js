/**
Put values of first half of list in a stack
O(N) time & O(N) space
 */
var isPalindrome = function (head) {
  if (!head || head.next === null) {
    return true;
  }

  let stack = [];
  let slow = head;
  let fast = head;

  //Handle both even and odd length lists
  while (fast !== null && fast.next !== null) {
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }
  //if list length is odd we can ignore the middle node, otherwise
  if (fast !== null) {
    slow = slow.next;
  }
  while (slow) {
    //compare 2nd half of list with what is in our stack
    if (stack.pop() !== slow.val) {
      return false;
    }
    slow = slow.next;
  }
  return true;
};

//Alternate
//O(N) time O(1) space
const isPalindrome = (head) => {
  if (!head || !head.next) {
    return true;
  }

  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let last = slow.next;
  while (last.next) {
    let temp = last.next;
    last.next = temp.next;
    temp.next = slow.next;
    slow.next = temp;
  }
  let ptr = head;
  while (slow.next) {
    slow = slow.next;
    if (ptr.val !== slow.val) {
      return false;
    }
    ptr = ptr.next;
  }
  return true;
};
