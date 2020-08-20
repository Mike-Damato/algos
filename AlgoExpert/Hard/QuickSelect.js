function quickselect(array, k) {
  // Write your code here.
  let position = k - 1;
  return helper(array, 0, array.length - 1, position);
}

const helper = (arr, start, end, position) => {
  let pivot, left, right;
  while (true) {
    if (start > end) {
      throw new Error('Error');
    }
    pivot = start;
    left = start + 1;
    right = end;
    while (left <= right) {
      if (arr[left] > arr[pivot] && arr[right] < arr[pivot]) {
        swap(arr, left, right);
      } else if (arr[right] >= arr[pivot]) {
        right--;
      } else if (arr[left] <= arr[pivot]) {
        left++;
      }
    }
    swap(arr, pivot, right);
    if (right === position) {
      return arr[right];
    } else if (right < position) {
      start = right + 1;
    } else {
      end = right - 1;
    }
  }
};

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
};
