//Solution 1
const insertionSort = (array) => {
  // Write your code here.
  //only use 1 reference of element at 1 time to compare previous elements
  //reference 0th index -> 8 check if every single element before is sorted
  for (let i = 1; i < array.length; i++) {
    let pointer = i;
    while (pointer > 0 && array[pointer] < array[pointer - 1]) {
      swap(pointer, pointer - 1, array);
      pointer--;
    }
  }
  return array;
};

const swap = (i, pointer, array) => {
  const temp = array[pointer];
  array[pointer] = array[i];
  array[i] = temp;
};
