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

//As an example to do the above "in place"
const updateString = (str) => {
  str = str.split('');
  let j = 0;
  let whiteSpaceCount = false;
  let lastLetterIdx = -1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      if (!whiteSpaceCount) {
        j += 1;
      } else {
        continue;
      }
      whiteSpaceCount = true;
    } else {
      swap(str, i, j);
      whiteSpaceCount = false;
      j += 1;
      lastLetterIdx = j;
    }
  }
  return str.slice(0, lastLetterIdx).join('');
};

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
};
