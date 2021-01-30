var minimumDeviation = function (nums) {
  let min = Infinity;
  let minDiv = Infinity;
  const heap = new MaxHeap();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      nums[i] *= 2;
    }
    heap.insert(nums[i]);
    min = Math.min(min, nums[i]);
  }

  while (heap.size) {
    let top = heap.remove();
    minDiv = Math.min(minDiv, top - min);

    if (top % 2 === 0) {
      top /= 2;
      min = Math.min(min, top);
      heap.insert(top);
    } else {
      break;
    }
  }
  return minDiv;
};

class MaxHeap {
  constructor() {
    this.size = 0;
    this.heap = [0];
  }
  insert(val) {
    this.heap.push(val);
    this.size++;
    this.siftUp(this.size);
  }
  top() {
    return this.heap[1];
  }
  remove() {
    let maxVal = this.heap[1];
    this.heap[1] = this.heap[this.size];
    this.heap.pop();
    this.size -= 1;
    this.siftDown(1);
    return maxVal;
  }
  siftUp(idx) {
    while (Math.floor(idx / 2) > 0) {
      const parentOneIdx = Math.floor(idx / 2);
      if (this.heap[parentOneIdx] < this.heap[idx]) {
        this.swap(this.heap, idx, parentOneIdx);
      }
      idx = parentOneIdx;
    }
  }
  siftDown(idx) {
    while (idx * 2 <= this.size) {
      const maxChildIdx = this.getMaxChild(idx);
      if (this.heap[idx] < this.heap[maxChildIdx]) {
        this.swap(this.heap, idx, maxChildIdx);
      }
      idx = maxChildIdx;
    }
  }
  getMaxChild(idx) {
    const leftChild = idx * 2;
    const rightChild = idx * 2 + 1 || null;

    if (!rightChild) return leftChild;

    if (this.heap[rightChild] > this.heap[leftChild]) {
      return rightChild;
    } else {
      return leftChild;
    }
  }
  swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr;
  }
}
