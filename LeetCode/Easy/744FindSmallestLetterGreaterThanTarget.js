var nextGreatestLetter = function (letters, target) {
  for (const char of letters) {
    console.log(char);
    if (char > target) {
      return char;
    }
  }
  return letters[0];
};

const nextGreatestLetter = (letters, target) => {
  let left = 0;
  let right = letters.length - 1;
  let mid;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return letters[left % letters.length];
};
