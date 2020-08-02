//Use a stack for each linked list in order to add values from right to left
const addTwoNumbers = (l1, l2) => {
  let ans = new ListNode(0);
  let dummy = ans;
  let stack1 = [];
  let stack2 = [];
  let stack3 = [];

  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  let sum = 0;
  let carry = 0;
  let head = new ListNode(0);
  let newNode = null;

  while (stack1.length || stack2.length) {
    let l1Val = stack1.length ? stack1.pop() : 0;
    let l2Val = stack2.length ? stack2.pop() : 0;
    sum = l1Val + l2Val + carry;

    carry = Math.floor(sum / 10);
    stack3.push(sum % 10);
  }

  if (carry) {
    stack3.push(carry);
  }

  while (stack3.length) {
    ans.next = new ListNode(stack3.pop());
    ans = ans.next;
  }
  return dummy.next;
};
