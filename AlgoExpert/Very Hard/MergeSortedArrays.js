function mergeSortedArrays(arrays) {
  // Write your code here.
  if (!arrays.length) {
    return [];
  }
  const merge = (arr1, arr2) => {
    if (!arr1 || !arr2) {
      return arr1 || arr2;
    }
    let newArr = [];
    let ptr1 = 0;
    let ptr2 = 0;
    while (ptr1 < arr1.length && ptr2 < arr2.length) {
      if (arr1[ptr1] <= arr2[ptr2]) {
        newArr.push(arr1[ptr1]);
        ptr1++;
      } else {
        newArr.push(arr2[ptr2]);
        ptr2++;
      }
    }
    while (ptr1 < arr1.length) {
      newArr.push(arr1[ptr1]);
      ptr1++;
    }

    while (ptr2 < arr2.length) {
      newArr.push(arr2[ptr2]);
      ptr2++;
    }

    return newArr;
  };

  let ans = arrays[0];
  for (let i = 1; i < arrays.length; i++) {
    ans = merge(ans, arrays[i]);
  }
  return ans;
}
