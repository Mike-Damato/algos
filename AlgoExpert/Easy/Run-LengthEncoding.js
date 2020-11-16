function runLengthEncoding(string) {
  // Write your code here.
  const ans = [];
  let currentLength = 1;

  for (let i = 1; i < string.length; i++) {
    let prev = string[i - 1];
    let current = string[i];
    if (current !== prev || currentLength === 9) {
      ans.push(currentLength.toString());
      ans.push(prev);
      currentLength = 0;
    }
    currentLength++;
  }

  ans.push(currentLength.toString());
  ans.push(string[string.length - 1]);
  return ans.join('');
}
