var printLinkedListInReverse = function (head) {
  if (!head) return null;
  printLinkedListInReverse(head.getNext());
  return head.printValue();
};
