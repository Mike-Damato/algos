class MyCircularQueue {
  constructor(k) {
    this.queue = [];
    this.length = k;
  }
  enQueue(val) {
    if (this.queue.length === this.length) {
      return false;
    }
    this.queue.push(val);
    return true;
  }
  deQueue() {
    if (!this.queue.length) {
      return false;
    }
    this.queue.shift();
    return true;
  }
  Front() {
    return this.queue.length > 0 ? this.queue[0] : -1;
  }
  Rear() {
    return this.queue.length > 0 ? this.queue[this.queue.length - 1] : -1;
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  isFull() {
    return this.queue.length === this.length;
  }
}
