const reverseOnlyLetters = (S) => {
  let string = S.split('');
  let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let hash = {};
  for (i = 0; i < letters.length; i++) {
    let letter = letters[i];
    hash[letter] = true;
  }
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (hash[string[left]] && hash[string[right]]) {
      [string[left], string[right]] = [string[right], string[left]];
    }
    if (!hash[string[left]]) left++;
    else if (!hash[string[right]]) right--;
    else {
      left++;
      right--;
    }
  }
  return string.join('');
};
