const takeout = [1, 3, 5];
const dinein = [2, 4, 6];
const served = [1, 2, 3, 4, 5, 6];
//O(n^2) time | O(n) space
const merge = (takeout, dinein) => {
  let ans = [];
  while (takeout.length && dinein.length) {
    if (takeout[0] < dinein[0]) {
      ans.push(takeout.shift());
    } else {
      ans.push(dinein.shift());
    }
  }

  ans = ans.concat(dinein).concat(takeout);

  for (let i = 0; i < ans.length; i++) {
    if (ans[i] !== served[i]) {
      return false;
    }
  }
  return true;
};

console.log('Answer:', merge(takeout, dinein));
