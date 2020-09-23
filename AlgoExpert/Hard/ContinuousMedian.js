class ContinuousMedianHandler {
  constructor() {
    this.lowers = new Heap(maxHeap, []);
    this.greaters = new Heap(minHeap, []);
    this.median = null;
  }

  insert(number) {
    if (!this.lowers.length || number < this.lowers.peek()) {
      this.lowers.insert(number);
    } else {
      this.greaters.insert(number);
    }
    this.rebalanceHeaps();
    this.updateMedian();
  }

  rebalanceHeaps() {
    if (this.lowers.length - this.greaters === 2) {
      this.greaters.insert(this.lowers.remove());
    } else if (this.greaters.length - this.lowers.length === 2) {
      this.lowers.insert(this.greaters.remove());
    }
  }

  updateMedian() {
    if (this.lowers.length === this.greaters.length) {
      this.median = (this.lowers.peek() + this.greaters.peek()) / 2;
    } else if (this.lowers.length > this.greaters.length) {
      this.median = this.lowers.peek();
    } else {
      this.median = this.greaters.peek();
    }
  }

  getMedian() {
    return this.median;
  }
}

class Heap {
  constructor(comparison, arr) {
    this.comparison = comparison;
    this.heap = this.buildHeap(arr);
    this.length = this.heap.length;
  }
  buildHeap(arr) {
    const firstParentIdx = Math.floor((arr.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, arr.length - 1, arr);
    }
    return arr;
  }

  siftDown(currentIdx, endIdx, heap) {
    let child1 = currentIdx * 2 + 1;
    while (child1 <= endIdx) {
      const child2 = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let swapIdx;
      if (child2 !== -1) {
        if (this.comparison(heap[child2], heap[child1])) {
          swapIdx = child2;
        } else {
          swapIdx = child1;
        }
      } else {
        swapIdx = child1;
      }
      if (this.comparison(heap[swapIdx], heap[currentIdx])) {
        this.swap(currentIdx, swapIdx, heap);
        currentIdx = swapIdx;
        child1 = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0) {
      if (this.comparison(heap[currentIdx], heap[parentIdx])) {
        this.swap(currentIdx, parentIdx, heap);
        currentIdx = parentIdx;
        parentIdx = Math.floor((currentIdx - 1) / 2);
      } else {
        return;
      }
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(0, this.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.length--;
    this.siftDown(0, this.length - 1, this.heap);
    return valueToRemove;
  }

  insert(value) {
    this.heap.push(value);
    this.length++;
    this.siftUp(this.length - 1, this.heap);
  }

  swap(i, j, heap) {
    [heap[i], heap[j]] = [heap[j], heap[i]];
    return heap;
  }
}

const maxHeap = (a, b) => {
  return a > b;
};

const minHeap = (a, b) => {
  return a < b;
};
