function firstNonRepeatingCharacter(string) {
  // Write your code here.
  const map = new Map();

  for (const char of string) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const idx in string) {
    const char = string[idx];
    if (map.get(char) === 1) return Number(idx);
  }
  return -1;
}
