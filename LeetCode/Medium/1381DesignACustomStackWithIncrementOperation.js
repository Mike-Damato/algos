class CustomStack {
  constructor(maxSize) {
    this.stack = [];
    this.maxSize = maxSize;
    this.currentSize = 0;
  }
  push(x) {
    if (this.currentSize < this.maxSize) {
      this.stack.push(x);
      this.currentSize++;
    }
  }
  pop() {
    if (this.stack.length) {
      let num = this.stack.pop();
      this.currentSize--;
      return num;
    } else {
      return -1;
    }
  }
  increment(k, val) {
    let end = this.stack.length < k ? this.stack.length : k;
    for (let i = 0; i < end; i++) {
      this.stack[i] += val;
    }
    return this.stack;
  }
}
