function getPermutations(array) {
  // Write your code here.
  const perms = [];
  helper(0, array, perms);
  return perms;
}

const helper = (i, arr, perms) => {
  if (i === arr.length - 1) {
    perms.push([...arr]);
  } else {
    for (let j = i; j < arr.length; j++) {
      swap(arr, i, j);
      helper(i + 1, arr, perms);
      swap(arr, i, j);
    }
  }
};

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
};

function getPermutations(array) {
  // Write your code here.
  const perms = [];
  helper(array, [], perms);
  return perms;
}

const helper = (arr, currentPerm, perms) => {
  if (arr.length === 0 && currentPerm.length >= 1) {
    perms.push(currentPerm);
  } else {
    for (let i = 0; i < arr.length; i++) {
      let newArray = arr.slice(0, i).concat(arr.slice(i + 1));
      let newPerm = currentPerm.concat([arr[i]]);
      helper(newArray, newPerm, perms);
    }
  }
};
