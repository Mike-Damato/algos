function reverseWordsInString(string) {
  // Write your code here.
  string = string.split('');
  swap(string, 0, string.length - 1);
  let currentStart = 0;
  for (let i = 0; i <= string.length; i++) {
    if (i === string.length || string[i] === ' ') {
      swap(string, currentStart, i - 1);
      currentStart = i + 1;
    }
  }
  return string.join('');
}

const swap = (arr, left, right) => {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
};

//With no split allowed
function reverseWordsInString(string) {
  // Write your code here.
  const arr = [];
  for (const char of string) {
    arr.push(char);
  }
  swap(arr, 0, arr.length - 1);

  let currentStart = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (i === arr.length || arr[i] === ' ') {
      swap(arr, currentStart, i - 1);
      currentStart = i + 1;
    }
  }
  return arr.join('');

  //if no join is allowed
  // let ans = '';
  // for(const char of arr){
  // 	ans += char
  // }
  // return ans;
}

//No array usage at all - much slower and memory consuming...
function reverseWordsInString(string) {
  let reversed = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  let currentStart = 0;
  let ans = '';
  for (let i = 0; i <= reversed.length; i++) {
    if (i === reversed.length || reversed[i] === ' ') {
      ans += swap(reversed, currentStart, i - 1);
      ans += ' ';
      currentStart = i + 1;
    }
  }

  return ans.slice(0, ans.length - 1);
}

const swap = (str, left, right) => {
  let reversedStr = '';
  for (let i = right; i >= left; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
};
