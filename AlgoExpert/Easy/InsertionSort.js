//Solution 1

//example input array = [8,5,2,9,5,6,3]
//expected output = [2,3,5,5,6,8,9]

const insertionSort = (array) => {
  // Write your code here.
  //only use 1 reference of element at 1 time to compare previous elements
  //reference 0th index -> 8 check if every single element before is sorted

  //starting at index 1 because we know there are no numbers before number at index 0
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
