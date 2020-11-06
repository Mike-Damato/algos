class MyStack {
  constructor() {
    this.front = [];
    this.back = [];
  }
  push(x) {
    this.front.push(x);
  }
  pop() {
    while (this.front.length > 1) {
      this.back.push(this.front.shift());
    }
    let item = this.front.shift();
    this.front = this.back;
    this.back = [];
    return item;
  }
  top() {
    return this.front[this.front.length - 1];
  }
  empty() {
    return !this.front.length && !this.back.length;
  }
}
