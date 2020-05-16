var checkIfExist = function (arr) {
  if (arr === null || arr.length === 0) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      console.log('I', arr[i], 'K', arr[k]);
      console.log(arr[i] === arr[k] * 2);
      if (arr[i] === arr[k] * 2 || arr[i] === arr[k] / 2) {
        return true;
      }
    }
  }
  return false;
};
