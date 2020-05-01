var findLucky = function (arr) {
  //loop through the arr and keep track of the frequency of numbers
  let frequency = {};
  let largestLuckyNum = -1;

  arr.forEach((num) => {
    if (!frequency[num]) {
      frequency[num] = 1;
    } else {
      frequency[num]++;
    }
  });

  //check if the key/value === to itself, we can do loop through Obj keys

  for (key in frequency) {
    let check = Number(key);
    if (check === frequency[key] && check > largestLuckyNum) {
      largestLuckyNum = check;
    }
  }

  //return largest val or -1 if there are no lucky #s
  return largestLuckyNum;
};
