var numJewelsInStones = function (J, S) {
  let count = 0;
  let jewelsArr = J.split('');
  //iterate thru S and check each index of to see if it is in jewelsArr
  //If it is in jewelsArr increase count
  for (let i = 0; i < S.length; i++) {
    if (jewelsArr.includes(S[i])) {
      count++;
    }
  }
  return count;
};
