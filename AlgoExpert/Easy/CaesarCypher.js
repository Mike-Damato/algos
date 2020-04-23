function caesarCipherEncryptor(string, key) {
  // Write your code here.
  const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
  key = key % 26;
  const index = alphabet.indexOf(string[0]) + key;
  return alphabet.slice(index, index + string.length);
}
