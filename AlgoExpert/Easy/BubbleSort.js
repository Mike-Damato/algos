function bubbleSort(array) {
  // Write your code here.
  let temp;
  let shifted = false;
  while (!shifted) {
    shifted = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        shifted = false;
      }
    }
  }
  return array;
}
