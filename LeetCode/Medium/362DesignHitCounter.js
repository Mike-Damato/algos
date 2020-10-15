class HitCounter {
  constructor() {
    this.hits = [];
  }
  hit(timestamp) {
    this.hits.push(timestamp);
  }
  getHits(timestamp) {
    let idx = 0;
    while (this.hits[idx] < timestamp - 299) {
      this.hits.shift();
    }
    return this.hits.length;
  }
}

//Binary Search
class HitCounter {
  constructor() {
    this.hits = [];
  }
  hit(timestamp) {
    this.hits.push(timestamp);
  }
  getHits(timestamp) {
    let [left, right] = this.binarySearch(
      0,
      this.hits.length - 1,
      this.hits,
      timestamp - 300
    );
    let target = timestamp - 300;
    if (this.hits[left] > target) {
      return this.hits.length - left;
    } else if (this.hits[right] > target) {
      return this.hits.length - right;
    }

    return 0;
  }
  binarySearch(left, right, arr, target) {
    while (left + 1 < right) {
      let mid = left + Math.floor((right - left) / 2);
      let val = arr[mid];
      if (val > target) {
        right = mid;
      } else {
        left = mid;
      }
    }
    return [left, right];
  }
}
