function validAnagram(s1, s2) {
  // add whatever parameters you deem necessary - good luck!
  if (s1.length !== s2.length) {
    return false;
  }
  let hash1 = {};
  let hash2 = {};
  for (const char of s1) {
    hash1[char] ? (hash1[char] += 1) : (hash1[char] = 1);
  }
  for (const char of s2) {
    hash2[char] ? (hash2[char] += 1) : (hash2[char] = 1);
  }
  for (const char in hash1) {
    if (hash1[char] !== hash2[char]) {
      return false;
    }
  }
  return true;
}

//Alternate using less space
function validAnagram(s1, s2) {
  // add whatever parameters you deem necessary - good luck!
  if (s1.length !== s2.length) {
    return false;
  }
  let hash = {};
  for (const char of s1) {
    hash[char] ? (hash[char] += 1) : (hash[char] = 1);
  }
  for (const char of s2) {
    hash[char] ? (hash[char] -= 1) : false;
  }
  return true;
}
