const map = {
  0: 'Zero',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen',
  20: 'Twenty',
  30: 'Thirty',
  40: 'Forty',
  50: 'Fifty',
  60: 'Sixty',
  70: 'Seventy',
  80: 'Eighty',
  90: 'Ninety',
};

var numberToWords = function (num) {
  if (num === 0) return map[num];

  const groups = ['', 'Thousand', 'Million', 'Billion'];
  let groupsIdx = 0;
  let ans = '';

  while (num > 0) {
    let currentGroup = num % 1000;

    if (currentGroup !== 0) {
      if (ans.length > 0) {
        ans = parseHundreds(currentGroup) + ' ' + groups[groupsIdx] + ' ' + ans;
      } else {
        ans = parseHundreds(currentGroup) + ' ' + groups[groupsIdx];
      }
    }

    num = parseInt(num / 1000);
    groupsIdx++;
  }
  return ans.trim();
};

const parseHundreds = (group) => {
  const hundred = 'Hundred';
  const tensNum = group % 100;
  const tensStr = parseTens(tensNum);

  const hundredPlace = parseInt(group / 100);

  if (hundredPlace === 0) {
    return tensStr;
  }

  let ans = map[hundredPlace] + ' ' + hundred;
  if (tensStr) {
    ans += ' ' + tensStr;
  }
  return ans;
};

const parseTens = (val) => {
  if (val === 0) return '';

  if (val < 20) {
    return map[val];
  }
  const tensPlace = parseInt(val / 10) * 10;
  const onesPlace = val % 10;
  if (onesPlace === 0) {
    return map[tensPlace];
  }
  return map[tensPlace] + ' ' + map[onesPlace];
};
