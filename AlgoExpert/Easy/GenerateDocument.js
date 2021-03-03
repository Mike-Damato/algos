function generateDocument(characters, document) {
  const map = new Map();
  for (const char of characters) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const char of document) {
    if (!map.has(char) || map.get(char) === 0) {
      return false;
    }
    map.set(char, map.get(char) - 1);
  }
  return true;
}
