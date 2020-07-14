var reverseWords = function (s) {
  let split = s.split(' ');
  let left = 0;
  let right = split.length - 1;
  while (left < right) {
    [split[left], split[right]] = [split[right], split[left]];
    left++;
    right--;
  }
  return split.filter((elem) => elem.length >= 1).join(' ');
};
