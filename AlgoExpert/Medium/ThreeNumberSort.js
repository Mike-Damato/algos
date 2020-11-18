function threeNumberSort(array, order) {
  const map = new Map();
  const ans = [];
  for (const num of array) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (const num of order) {
    while (map.get(num) > 0) {
      ans.push(num);
      map.set(num, map.get(num) - 1);
    }
  }
  return ans;
}

//Optimized
function threeNumberSort(array, order) {
  const firstVal = order[0];
  const secondVal = order[1];

  let p1 = 0;
  let p2 = 0;
  let p3 = array.length - 1;

  while (p2 <= p3) {
    const val = array[p2];

    if (val === firstVal) {
      swap(array, p1, p2);
      p1++;
      p2++;
    } else if (val === secondVal) {
      p2++;
    } else {
      swap(array, p2, p3);
      p3--;
    }
  }
  return array;
}

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
};
