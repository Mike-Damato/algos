/*
Insertion - O(log n)
Removal - O(log N)
Search - O(n)
*/

class MaxBinaryHeap {
  constructor() {
    this.vals = [];
  }
  insert(elem) {
    this.vals.push(elem);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.vals.length - 1;
    const elem = this.vals[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.vals[parentIdx];
      if (elem <= parent) {
        break;
      } else {
        this.vals[parentIdx] = elem;
        this.vals[idx] = parent;
        idx = parentIdx;
      }
    }
  }
  extractMax() {
    const max = this.vals[0];
    const end = this.vals.pop();
    if (this.vals.length > 0) {
      this.vals[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.vals.length;
    const elem = this.vals[idx];
    while (true) {
      let lChildIdx = 2 * idx + 1;
      let rChildIdx = 2 * idx + 2;
      let lChild;
      let rChild;
      let swap = null;

      if (lChildIdx < length) {
        lChild = this.vals[lChildIdx];
        if (lChild > elem) {
          swap = lChildIdx;
        }
      }
      if (rChildIdx < length) {
        rChild = this.vals[rChildIdx];
        if (
          (swap === null && rChild > elem) ||
          (swap !== null && rChild > lChild)
        ) {
          swap = rChildIdx;
        }
      }
      if (swap === null) {
        break;
      }
      this.vals[idx] = this.vals[swap];
      this.vals[swap] = elem;
      idx = swap;
    }
  }
}
//p = priority
class Node {
  constructor(val, p) {
    this.val = val;
    this.p = p;
  }
}

class minBinaryHeap {
  constructor() {
    this.vals = [];
  }

  enqueue(val, p) {
    let newNode = new Node(val, p);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.vals.length - 1;
    const elem = this.val[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.vals[parentIdx];
      if (elem.p >= parent.p) {
        break;
      }
      this.vals[parentIdx] = elem;
      this.vals[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.vals[0];
    const end = this.vals.pop();
    if (this.vals.length > 0) {
      this.vals[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.vals.length;
    const elem = this.vals[idx];
    while (true) {
      let lChildIdx = 2 * idx + 1;
      let rChildIdx = 2 * idx + 2;
      let lChild;
      let rChild;
      let swap = null;

      if (lChildIdx < length) {
        lChild = this.vals[lChildIdx];
        if (lChild.p > elem.p) {
          swap = lChildIdx;
        }
      }
      if (rChildIdx < length) {
        rChild = this.vals[rChildIdx];
        if (
          (swap === null && rChild.p < elem.p) ||
          (swap !== null && rChild.p < lChild.p)
        ) {
          swap = rChildIdx;
        }
      }
      if (swap === null) {
        break;
      }
      this.vals[idx] = this.vals[swap];
      this.vals[swap] = elem;
      idx = swap;
    }
  }
}
