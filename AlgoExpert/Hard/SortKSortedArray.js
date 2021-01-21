function sortKSortedArray(array, k) {
  const minHeap = new MinHeap(array.slice(0, Math.min(k + 1, array.length)));

  let nextIdxToInsert = 0;
  for (let i = k + 1; i < array.length; i++) {
    const minElement = minHeap.remove();
    array[nextIdxToInsert] = minElement;
    nextIdxToInsert++;

    const currentNum = array[i];
    minHeap.insert(currentNum);
  }

  while (!minHeap.isEmpty()) {
    const minElement = minHeap.remove();
    array[nextIdxToInsert] = minElement;
    nextIdxToInsert++;
  }
  return array;
}

class MinHeap {
  constructor(arr) {
    this.heap = this.buildHeap(arr);
  }
  isEmpty() {
    return this.heap.length === 0;
  }
  buildHeap(arr) {
    const firstParentIdx = Math.floor((arr.length - 2) / 2);
    for (let i = firstParentIdx; i >= 0; i--) {
      this.siftDown(i, arr.length - 1, arr);
    }
    return arr;
  }

  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }

      if (heap[idxToSwap] < heap[currentIdx]) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const valToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valToRemove;
  }

  insert(val) {
    this.heap.push(val);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  swap(i, j, heap) {
    [heap[i], heap[j]] = [heap[j], heap[i]];
    return heap;
  }
}
