class TwoSum {
  constructor() {
    this.map = new Map();
  }
  add(num) {
    this.map.set(num, (this.map.get(num) || 0) + 1);
  }
  find(val) {
    let diff;
    for (const [key, count] of [...this.map.entries()]) {
      diff = val - key;
      if (this.map.has(diff) && (diff !== key || 1 < count)) {
        return true;
      }
    }
    return false;
  }
}
