var halvesAreAlike = function (s) {
  let mid = s.length / 2;
  const firstHalf = s.slice(0, mid);
  let count = 0;
  const secondHalf = s.slice(mid);

  for (const char of firstHalf) {
    if (isVowel(char)) {
      count += 1;
    }
  }

  for (const char of secondHalf) {
    if (isVowel(char)) {
      count -= 1;
    }
  }

  return count === 0;
};

const isVowel = (char) => {
  char = char.toLowerCase();
  return (
    char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'
  );
};
