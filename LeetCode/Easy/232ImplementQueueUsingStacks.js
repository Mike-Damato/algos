class MyQueue {
  constructor() {
    this.front = [];
    this.back = [];
  }
  push(x) {
    this.back.push(x);
  }
  pop() {
    if (!this.front.length) {
      while (this.back.length) {
        this.front.push(this.back.pop());
      }
    }
    return this.front.pop();
  }
  peek() {
    if (!this.front.length) {
      while (this.back.length) {
        this.front.push(this.back.pop());
      }
    }
    return this.front[this.front.length - 1];
  }
  empty() {
    return !this.front.length && !this.back.length;
  }
}
