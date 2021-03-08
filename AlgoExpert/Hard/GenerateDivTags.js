function generateDivTags(numberOfTags) {
  const ans = [];
  divTagHelper(numberOfTags, numberOfTags, '', ans);
  return ans;
}

const divTagHelper = (opening, closing, prefix, arr) => {
  if (opening > 0) {
    const newPrefix = `${prefix}<div>`;
    divTagHelper(opening - 1, closing, newPrefix, arr);
  }

  if (opening < closing) {
    const newPrefix = `${prefix}</div>`;
    divTagHelper(opening, closing - 1, newPrefix, arr);
  }
  if (closing === 0) {
    arr.push(prefix);
  }
};
