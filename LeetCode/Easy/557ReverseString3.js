var reverseWords = function (s) {
  let answer = '';
  let split = s.split(' ');
  for (let i = 0; i < split.length; i++) {
    let word = split[i].split('').reverse().join('');
    answer += word + ' ';
  }
  return answer.trim();
};
