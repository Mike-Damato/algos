const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
  // const swap = (array, i, j) => {
  //   let temp = array[i];
  //   array[i] = array[j];
  //   array[j] = temp;
  // };
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
      // swap(arr, swapIdx, i);
    }
  }
  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
  // swap(arr, start, swapIdx);
  return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivotHelper(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
};
