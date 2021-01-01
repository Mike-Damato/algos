var canFormArray = function (arr, pieces) {
  const ans = [];

  for (let i = 0; i < arr.length; i++) {
    for (const array of pieces) {
      if (array[0] === arr[i]) {
        ans.push(...array);
        i += array.length - 1;
        break;
      }
    }
  }
  const validate = (arr, ans) => {
    if (arr.length !== ans.length) return false;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== ans[i]) return false;
    }
    return true;
  };

  return validate(arr, ans);
};
