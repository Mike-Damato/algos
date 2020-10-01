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

//Optimized further using binary search
class RecentCounter {
  constructor() {
    this.reqs = [];
    this.time = 3000;
  }
  ping(t) {
    this.reqs.push(t);
    return this.reqs.length - this.binarySearch(t);
  }

  binarySearch(t) {
    let left = 0;
    let right = this.reqs.length - 1;
    let target = t - this.time;
    let mid;
    while (left <= right) {
      mid = left + Math.floor((right - left) / 2);
      if (this.reqs[mid] >= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }
}
