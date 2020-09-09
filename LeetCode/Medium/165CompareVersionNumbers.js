var compareVersion = function (version1, version2) {
  let split1 = version1.split('.');
  let split2 = version2.split('.');
  let v1 = split1.length;
  let v2 = split2.length;
  let maxLength = Math.max(v1, v2);

  let p1, p2;
  for (let i = 0; i < maxLength; i++) {
    if (i < v1) {
      p1 = parseInt(split1[i]);
    } else {
      p1 = 0;
    }
    if (i < v2) {
      p2 = parseInt(split2[i]);
    } else {
      p2 = 0;
    }
    if (p1 > p2) {
      return 1;
    } else if (p1 < p2) {
      return -1;
    }
  }
  return 0;
};
