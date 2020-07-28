//Using a hash
var intersection = function (arr1, arr2) {
  let hash = {};
  let ans = [];
  for (let elem of arr1) {
    if (hash[elem]) {
      hash[elem] += 1;
    } else {
      hash[elem] = 1;
    }
  }

  for (let elem of arr2) {
    if (hash[elem] >= 1) {
      ans.push(elem);
      hash[elem] = 0;
    }
  }
  return ans;
};

var intersection = function (arr1, arr2) {
  let hash = {};
  let ans = [];
  for (let elem of arr1) {
    if (!hash[elem]) {
      hash[elem] = true;
    }
  }

  for (let elem of arr2) {
    if (hash[elem] === true) {
      ans.push(elem);
      hash[elem] = false;
    }
  }

  return ans;
};

//Using a set
var intersection = function (arr1, arr2) {
  let set = new Set();
  let ans = [];

  for (const num of arr1) {
    set.add(num);
  }

  for (const num of arr2) {
    if (set.has(num)) {
      ans.push(num);
      set.delete(num);
    }
  }
  return ans;
};

// var isAlienSorted = function (words, order) {
//   let dict = {};
//   for (let i = 0; i < order.length; i++) {
//     dict[order.charAt(i)] = i;
//   }
//   for (let i = 0; i < words.length - 1; i++) {
//     let word1 = words[i];
//     let word2 = words[i + 1];
//     let j = 0;
//     while (j < Math.min(word1.length, word2.length)) {
//       if (word1.charAt(j) !== word2.charAt(j)) {
//         if (dict[word1[j]] > dict[word2[j]]) {
//           return false;
//         } else break;
//       }
//       j++;
//     }
//     if (j === word2.length && j < word1.length) return false;
//   }
//   return true;
// };
