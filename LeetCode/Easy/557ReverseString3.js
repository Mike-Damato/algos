var reverseWords = function (s) {
  let answer = '';
  let split = s.split(' ');
  for (let i = 0; i < split.length; i++) {
    let word = split[i].split('').reverse().join('');
    answer += word + ' ';
  }
  return answer.trim();
};

//Alternate
var reverseWords = function (s) {
  let reversed = '';
  for (let i = s.length - 1; i >= 0; i--) {
    reversed += s[i];
  }
  return reverseIt(reversed.split(' ')).join(' ');
};

const reverseIt = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
};
