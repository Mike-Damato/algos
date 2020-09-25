function heapSort(array) {
  // Write your code here.
  buildMaxHeap(array);
  for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
    swap(array, 0, endIdx);
    siftDown(0, endIdx - 1, array);
  }
  return array;
}

const buildMaxHeap = (arr) => {
  const firstParentIdx = Math.floor((arr.length - 2) / 2);
  for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
    siftDown(currentIdx, arr.length - 1, arr);
  }
};

const siftDown = (currentIdx, endIdx, heap) => {
  let child1 = currentIdx * 2 + 1;
  while (child1 <= endIdx) {
    let child2 = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
    let swapIdx;
    if (child2 !== -1 && heap[child2] > heap[child1]) {
      swapIdx = child2;
    } else {
      swapIdx = child1;
    }

    if (heap[swapIdx] > heap[currentIdx]) {
      swap(heap, currentIdx, swapIdx);
      currentIdx = swapIdx;
      child1 = currentIdx * 2 + 1;
    } else {
      return;
    }
  }
};

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
};
