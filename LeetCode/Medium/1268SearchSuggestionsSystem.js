var suggestedProducts = function (products, searchWord) {
  let ans = [];
  let searchIdx = 0;

  while (searchIdx < searchWord.length) {
    let chars = searchWord.slice(0, searchIdx + 1);
    let row = [];

    for (let i = 0; i < products.length; i++) {
      if (products[i].startsWith(chars)) {
        row.push(products[i]);
      }
    }
    ans.push(row.sort().slice(0, 3));
    searchIdx++;
  }
  return ans;
};
