class MyHashMap {
  constructor() {
    this.data = {};
  }
  put(key, value) {
    this.data[key] = value;
    return this.data[key];
  }
  get(key) {
    if (!this.data.hasOwnProperty(key)) {
      return -1;
    } else {
      return this.data[key];
    }
  }
  remove(key) {
    if (!this.data.hasOwnProperty(key)) {
      return -1;
    } else {
      delete this.data[key];
    }
  }
}
