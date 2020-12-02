class Solution {
  constructor(head) {
    this.head = head;
  }
  getRandom() {
    const length = this.getSize();
    const randomNode = Math.floor(Math.random() * length);
    let current = this.head;
    let i = 0;
    while (current) {
      if (i === randomNode) {
        return current.val;
      }
      i++;
      current = current.next;
    }
  }
  getSize() {
    let size = 0;
    let current = this.head;
    while (current) {
      size++;
      current = current.next;
    }
    return size;
  }
}
