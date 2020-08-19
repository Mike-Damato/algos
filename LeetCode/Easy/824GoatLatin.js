var toGoatLatin = function (S) {
  let vowelArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let set = new Set(vowelArr);

  let arr = S.split(' ');
  let ans = '';

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (set.has(word[0])) {
      word = word + 'ma' + 'a'.repeat(i + 1);
    } else {
      let firstLetter = word[0];
      word = word.slice(1) + firstLetter + 'ma' + 'a'.repeat(i + 1);
    }
    ans += word + ' ';
  }
  return ans.trim();
};
