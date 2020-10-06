function caesarCipherEncryptor(string, key) {
  const newLetters = [];
  const newKey = key % 26;
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (const letter of string) {
    newLetters.push(getNewLetter(letter, newKey, alpha));
  }
  return newLetters.join('');
}

const getNewLetter = (letter, key, alpha) => {
  const newLetterCode = alpha.indexOf(letter) + key;
  return alpha[newLetterCode % 26];
};
