/*
given a string 'abc    def  ghi' return 'abc def ghi'
*/

// O(N) Time length of str | O(N) space length of new string
const updateString = (str) => {
  let newStr = '';
  let endingSpace = false;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === ' ') {
      if (!endingSpace) {
        newStr += ' ';
        endingSpace = true;
      }
    } else {
      newStr += char;
      endingSpace = false;
    }
  }
  return newStr;
};
