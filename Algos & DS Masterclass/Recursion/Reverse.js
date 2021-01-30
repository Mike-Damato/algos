/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse
 */
const reverse = (str) => {
  if (!str.length) {
    return '';
  } else {
    return reverse(str.slice(1)) + str.charAt(0);
  }
};
