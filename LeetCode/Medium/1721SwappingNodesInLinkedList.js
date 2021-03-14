var swapNodes = function (head, k) {
  if (!head) return null;
  let current = head;
  const arr = [];
  while (current) {
    arr.push(current.val);
    current = current.next;
  }

  let frontK = k - 1;
  let endK = arr.length - k;

  swap(arr, frontK, endK);

  let newList = new ListNode(0);
  let dummy = newList;
  for (let i = 0; i < arr.length; i++) {
    const newNode = new ListNode(arr[i]);
    dummy.next = newNode;
    dummy = dummy.next;
  }

  return newList.next;
};

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
};

//Refactored
const swapNodes = (head, k) => {
  const arr = [];
  let current = head;
  while (current) {
    arr.push(current);
    current = current.next;
  }

  let frontK = k - 1;
  let endK = arr.length - k;

  [arr[frontK].val, arr[endK].val] = [arr[endK].val, arr[frontK].val];
  return head;
};

//With constant space optimization
const swapNodes = (head, k) => {
  let newList = new ListNode(0, head);
  let p1 = newList;
  let p2 = newList;
  let p3 = newList;
  let length = 0;

  //Get total length to use for calculating K
  while (p1) {
    p1 = p1.next;
    length++;
  }

  //Front node
  for (let i = 0; i < k - 1; i++) {
    p2 = p2.next;
  }

  //End Node
  for (let i = 0; i < length - k - 1; i++) {
    p3 = p3.next;
  }

  let temp1 = p3.next.val;
  let temp2 = p2.next.val;

  p2.next.val = temp1;
  p3.next.val = temp2;

  return head;
};
