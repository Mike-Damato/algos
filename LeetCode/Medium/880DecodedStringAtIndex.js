var decodeAtIndex = function (S, K) {
  const arr = [isNum(S[0]) ? 0 : 1];
  for (let i = 1; i < S.length; i++) {
    let char = S[i];
    if (isNum(char)) {
      arr.push(arr[i - 1] * char);
    } else {
      arr.push(arr[i - 1] + 1);
    }
  }
  for (let i = S.length - 1; i >= 0; i--) {
    K %= arr[i];
    if (K === 0 && !isNum(S[i])) return S[i];
  }
};

const isNum = (char) => {
  return char >= 0 && char <= 9;
};
