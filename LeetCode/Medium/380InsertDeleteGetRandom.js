class RandomizedSet {
  constructor() {
    this.data = new Set();
  }
  insert(val) {
    if (!this.data.has(val)) {
      this.data.add(val);
      return true;
    } else {
      return false;
    }
  }
  remove(val) {
    if (!this.data.has(val)) {
      return false;
    } else {
      this.data.delete(val);
      return true;
    }
  }
  getRandom() {
    return [...this.data][Math.floor(Math.random() * this.data.size)];
  }
}

//Alternate using hash and array
class RandomizedSet {
  constructor() {
    this.map = {};
    this.values = [];
  }

  insert(val) {
    if (this.map[val] !== undefined) return false;
    this.map[val] = this.values.length;
    this.values.push(val);
    return true;
  }
  remove(val) {
    if (this.map[val] === undefined) return false;
    const idx = this.map[val];
    delete this.map[val];
    const last = this.values.pop();
    if (this.values.length === idx) return true;
    this.map[last] = idx;
    this.values[idx] = last;
    return true;
  }
  getRandom() {
    if (this.values.length === 0) return null;
    return this.values[Math.floor(Math.random() * this.values.length)];
  }
}
