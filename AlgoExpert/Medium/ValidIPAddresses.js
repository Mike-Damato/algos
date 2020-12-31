const isValidNum = (str) => {
  const num = Number(str);
  if (num > 255) return false;

  return str.length === num.toString().length;
};

const validIPAddresses = (str) => {
  const ans = [];

  for (let i = 0; i < Math.min(str.length, 4); i++) {
    const sections = ['', '', '', ''];

    sections[0] = str.slice(0, i);

    if (!isValidPart(sections[0])) continue;

    for (let j = i + 1; j < i + Math.min(str.length - i, 4); j++) {
      sections[1] = str.slice(i, j);
      if (!isValidPart(sections[1])) continue;

      for (let k = j + 1; k < j + Math.min(str.length - j, 4); k++) {
        sections[2] = str.slice(j, k);
        sections[3] = str.slice(k);

        if (isValidPart(secions[2]) && isValidPart(sections[3])) {
          ans.push(sections.join('.'));
        }
      }
    }
  }
  return ans;
};
