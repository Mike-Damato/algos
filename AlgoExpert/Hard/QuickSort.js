function quickSort(array, left = 0, right = array.length - 1) {
  // Write your code here.
  if (left < right) {
    let pivotIdx = pivotHelper(array, left, right);
    quickSort(array, left, pivotIdx - 1);
    quickSort(array, pivotIdx + 1, right);
  }
  return array;
}

const pivotHelper = (array, start = 0, end = array.length - 1) => {
  let pivot = array[start];
  let swapIdx = start;
  for (let i = start + 1; i < array.length; i++) {
    if (pivot > array[i]) {
      swapIdx++;
      [array[i], array[swapIdx]] = [array[swapIdx], array[i]];
    }
  }
  [array[start], array[swapIdx]] = [array[swapIdx], array[start]];
  return swapIdx;
};
