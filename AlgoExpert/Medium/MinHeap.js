class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    // Write your code here.
    let firstParent = Math.floor((array.length - 2) / 2);
    for (let i = firstParent; i >= 0; i--) {
      this.siftDown(i, array.length - 1, array);
    }
    return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    // Write your code here.
    let child1 = currentIdx * 2 + 1;
    let child2, idxToSwap;
    while (child1 <= endIdx) {
      child2 = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      if (child2 !== -1 && heap[child2] < heap[child1]) {
        idxToSwap = child2;
      } else {
        idxToSwap = child1;
      }
      if (heap[idxToSwap] < heap[currentIdx]) {
        this.swap(heap, currentIdx, idxToSwap);
        currentIdx = idxToSwap;
        child1 = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currentIdx, heap) {
    // Write your code here.
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      this.swap(heap, currentIdx, parentIdx);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  peek() {
    // Write your code here.
    return this.heap[0];
  }

  remove() {
    // Write your code here.
    this.swap(this.heap, 0, this.heap.length - 1);
    let valToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valToRemove;
  }

  insert(value) {
    // Write your code here.
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }
  swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

/*
current node = i
child1 = 2i + 1
child2 = 2i + 2
parent = Math.floor((i-1)/2)
*/
