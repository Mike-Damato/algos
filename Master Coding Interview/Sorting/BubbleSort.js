const numbers = [99, 44, 6, 2, 1, 1, 5, 63, -40, 87, 283, 4, 0];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

bubbleSort(numbers);
console.log(numbers);

//alternate

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        //ES6 Array destructuring alternate:
        //[arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
};
