function pancakeSort(arr) {
  // your code goes here
  if (!arr.length) return arr;

  for (let i = arr.length - 1; i >= 0; i--) {
    let section = arr.slice(0, i + 1);
    let max = Math.max(...section);
    let idxOfMax = arr.indexOf(max);

    flip(arr, idxOfMax);
    flip(arr, i);
  }
  return arr;
}

const flip = (arr, k) => {
  let left = 0;
  let right = k;
  while (left <= right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
};
