const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (arr1, arr2) => {
  let ans = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) {
      ans.push(arr1[p1]);
      p1++;
    } else {
      ans.push(arr2[p2]);
      p2++;
    }
  }

  while (p1 < arr1.length) {
    ans.push(arr1[p1]);
    p1++;
  }
  while (p2 < arr2.length) {
    ans.push(arr2[p2]);
    p2++;
  }

  return ans;
};
