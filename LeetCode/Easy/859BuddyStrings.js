var buddyStrings = function (A, B) {
  if (A.length !== B.length) return false;
  if (A === B) {
    let set = new Set([...A]);
    return set.size < A.length;
  }

  let arr = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      arr.push(i);
    }
  }

  if (arr.length !== 2) return false;

  return A[arr[0]] === B[arr[1]] && A[arr[1]] === B[arr[0]];
};
