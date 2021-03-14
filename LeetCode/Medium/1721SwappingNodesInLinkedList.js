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
