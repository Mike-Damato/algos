class Solution {
  constructor(rects) {
    this.map = new Map(); //  {cumulative area : [[xLo,xHi], [yLo,yHi]]}
    this.area = 0;
    this.getRange(rects);
  }
  pick() {
    // O(log N) for binary search through N rectangles for random key
    let random = Math.ceil(this.area * Math.random());
    let randomRectKey = this.getKey(random);
    let [xRange, yRange] = this.map.get(randomRectKey);
    let xLength = xRange[1] - xRange[0] + 1;
    let yLength = yRange[1] - yRange[0] + 1;
    let xRandom = Math.floor(Math.random() * xLength) + xRange[0];
    let yRandom = Math.floor(Math.random() * yLength) + yRange[0];
    return [xRandom, yRandom];
  }
  getRange(rects) {
    // O(N) for N rectangles, construction of this.map
    for (const rect of rects) {
      let x = rect[2] - rect[0] + 1;
      let y = rect[3] - rect[1] + 1;
      this.area += x * y;
      this.map.set(this.area, []);
      this.map.get(this.area).push([rect[0], rect[2]]);
      this.map.get(this.area).push([rect[1], rect[3]]);
    }
    // console.log(this.map)
  }
  getKey(num) {
    // binary search for arr[left] just greater than num
    // O(log N) for N rectangles
    let arr = [...this.map.keys()];
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (arr[mid] === num) return arr[mid];
      if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return arr[left];
  }
}
