var largestTimeFromDigits = function (A) {
  let maxTime = -1;
  let visited = new Set();
  let ans = [];

  const isValid = (perm) => {
    if (
      (perm[0] === 2 && perm[1] < 4 && perm[2] <= 5) ||
      (perm[0] <= 1 && perm[2] <= 5)
    ) {
      return true;
    }
    // if (perm[0] <= 1 && perm[2] <= 5){
    //    return true;
    // }
    return false;
  };

  const backtrack = (perm) => {
    if (perm.length === 4 && isValid(perm)) {
      let time = perm.join('') * 1;
      if (maxTime < time) {
        maxTime = time;
        ans = [...perm];
        ans.splice(2, 0, ':');
      }
      return;
    }
    for (let i = 0; i < A.length; i++) {
      if (visited.has(i)) {
        continue;
      }
      visited.add(i);
      perm.push(A[i]);
      backtrack(perm);
      visited.delete(i);
      perm.pop();
    }
  };
  backtrack([]);
  return ans.join('');
};
