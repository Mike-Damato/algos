class RecentCounter {
  constructor() {
    this.reqs = [];
  }
  ping(t) {
    this.reqs.push(t);
    let lastReq = this.reqs[this.reqs.length - 1];
    let count = 0;
    for (let i = 0; i < this.reqs.length; i++) {
      if (lastReq - this.reqs[i] <= 3000) {
        count++;
      }
    }
    return count;
  }
}

//Optimized
class RecentCounter {
  constructor() {
    this.reqs = [];
  }
  ping(t) {
    this.reqs.push(t);
    while (this.reqs.length && t - this.reqs[0] > 3000) {
      this.reqs.shift();
    }
    return this.reqs.length;
  }
}
