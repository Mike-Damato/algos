//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIterative(str) {
  let ans = ''
  for (let i = str.length; i > -1; i--) {
    ans += str[i]
  }
  return ans;
}

reverseStringIterative('yoyo mastery')
should return: 'yretsam oyoy'

const reverseStringRecursive = (str) => {
  if (str === '') {
    return ''
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0)
  }
}

reverseStringRecursive('yoyo mastery')
