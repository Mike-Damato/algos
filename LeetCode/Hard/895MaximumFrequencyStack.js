class FreqStack {
  constructor() {
    this.stack = Array.from({ length: 10001 }, (x) => []);
    this.top = 0;
    this.map = {};
  }
  push(x) {
    if (!this.map.hasOwnProperty(x)) {
      this.map[x] = 1;
    } else {
      this.map[x] += 1;
    }
    if (this.map[x] > this.top) {
      this.top = this.map[x];
    }
    this.stack[this.map[x]].push(x);
  }
  pop() {
    let ans = this.stack[this.top].pop();
    if (!this.stack[this.top].length) {
      this.top--;
    }
    this.map[ans]--;
    return ans;
  }
}
