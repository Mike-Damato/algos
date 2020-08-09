/*
 Loop left - right through the string. set up a variable to store number of opens
 every time we see and open paren increment open
 everytime we see a closing decrement open
    -BUT if open is 0 skip the iteration and go to next character, we will adress later...
    This basically handles the cases where we have closings before openings like "))(("

Now we loop backwards
if we have unbalanced (more opens then closing... open > 0)
we decrement open and skip that iteration
then we construct our answer, but since we are looping backwards our answer will be reversed
so at the end we have to reverse our answer to get it going the proper direction


O(N) Time
O(N) Space
 */

var minRemoveToMakeValid = function (s) {
  let newStr = '';
  let open = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      open++;
    } else if (s[i] === ')') {
      //we havent seen any opening yet, do not append the closing parentheses
      if (open === 0) {
        continue;
      }
      open--;
    }
    newStr += s[i];
  }

  //if too many opens
  let ans = '';
  for (let i = newStr.length - 1; i >= 0; i--) {
    if (newStr[i] === '(' && open > 0) {
      open -= 1;
      continue;
    }
    ans += newStr[i];
  }
  //since we iterated backwards we constructed ans in reverse so now we just flip it back
  return ans.split('').reverse().join('');
};
