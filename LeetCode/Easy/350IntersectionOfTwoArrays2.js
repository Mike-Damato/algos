var intersect = (arr1, arr2) => {
  let smallest;
  let largest;
  let hash = {};
  let ans = [];
  if (arr1.length >= arr2.length) {
    smallest = arr2;
    largest = arr1;
  } else {
    smallest = arr1;
    largest = arr2;
  }
  for (let elem of smallest) {
    if (hash[elem]) {
      hash[elem] += 1;
    } else {
      hash[elem] = 1;
    }
  }

  for (let elem of largest) {
    if (hash[elem] >= 1) {
      ans.push(elem);
      hash[elem] -= 1;
    }
  }

  return ans;
};
