class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(idx) {
    return this.data[idx];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(idx) {
    const item = this.data[idx];
    this.shiftItems(idx);
    return item;
  }
  shiftItems(idx) {
    for (let i = idx; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
