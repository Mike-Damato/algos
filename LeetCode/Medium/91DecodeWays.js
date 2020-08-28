function numDecodings(s) {
  let memo = new Map();

  const helper = (idx) => {
    if (idx === s.length) {
      return 1;
    }

    if (idx > s.length) {
      return 0;
    }

    if (memo.has(idx)) {
      return memo.get(idx);
    }
    let combos = 0;
    //assign variable  for 1digit 2digit
    let oneDigit = s.slice(idx, idx + 1);
    let twoDigit = s.slice(idx, idx + 2);

    if (oneDigit !== '0') {
      combos += helper(idx + 1);
    }

    if (twoDigit[0] !== '0' && Number(twoDigit) <= 26) {
      combos += helper(idx + 2);
    }
    //{idx: Num of combo}
    memo.set(idx, combos);

    return combos;
  };

  return helper(0);
}
