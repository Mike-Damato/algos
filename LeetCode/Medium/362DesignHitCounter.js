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
      console.log(this.hits, timestamp - 299);
    }
    return this.hits.length;
  }
}
