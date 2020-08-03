var isPalindrome = function (s) {
  if (s.length === 0) {
    return true;
  }
  s = s.replace(/[^a-zA-Z0-9]/g, '');
  let reversed = '';
  let regular = '';

  for (let i = 0; i < s.length; i++) {
    regular += s[i].trim();
  }
  for (let i = s.length - 1; i >= 0; i--) {
    reversed += s[i].trim();
  }

  return reversed.toLowerCase() === regular.toLowerCase();
};

//Alternate with 1 loop
var isPalindrome = function (s) {
  if (s.length === 0) {
    return true;
  }
  s = s.replace(/[^a-zA-Z0-9]/g, '');
  let p1 = 0;
  let p2 = s.length - 1;

  while (p1 <= p2) {
    if (s[p1].toLowerCase() === s[p2].toLowerCase()) {
      p1++;
      p2--;
    } else {
      return false;
    }
  }
  return true;
};

//Alternate with Char Code instead of regex
var isPalindrome = function (s) {
  if (s.length === 0) {
    return true;
  }
  //make string alphanumeric
  let ans = s
    .toLowerCase()
    .split('')
    .filter((letter) => {
      let code = letter.charCodeAt(0);
      return (97 <= code && code <= 122) || (48 <= code && code <= 57);
    });

  return ans.join('') === ans.reverse().join('');
};
