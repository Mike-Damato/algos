var getDecimalValue = function (head) {
  let arr = [];
  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  return parseInt(arr.join('').toString(2), 2);
};
