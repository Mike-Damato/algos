const map = {
  1: ['1'],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
  0: ['0'],
};

function phoneNumberMnemonics(phoneNumber) {
  const ans = [];
  const currentNum = new Array(phoneNumber.length).fill('0');

  helper(0, phoneNumber, currentNum, ans);
  return ans;
}

const helper = (idx, phoneNumber, currentNum, ans) => {
  if (idx === phoneNumber.length) {
    ans.push(currentNum.join(''));
  } else {
    const digit = phoneNumber[idx];
    const letters = map[digit];
    for (const letter of letters) {
      currentNum[idx] = letter;
      helper(idx + 1, phoneNumber, currentNum, ans);
    }
  }
};
