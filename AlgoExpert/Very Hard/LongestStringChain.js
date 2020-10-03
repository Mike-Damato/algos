//O(n * m^2 + n log(n)) Time | O(nm) Space
function longestStringChain(strings) {
  const stringChains = {};
  for (const string of strings) {
    stringChains[string] = { nextString: '', maxChainLength: 1 };
  }
  const sortedStrings = strings.sort((a, b) => a.length - b.length);
  for (const string of sortedStrings) {
    findLongestStringChain(string, stringChains);
  }
  return buildLongestStringChain(strings, stringChains);
}

const findLongestStringChain = (string, stringChains) => {
  for (let i = 0; i < string.length; i++) {
    const smallerString = getSmallerString(string, i);
    if (!stringChains.hasOwnProperty(smallerString)) continue;
    tryUpdateLongestStringChain(string, smallerString, stringChains);
  }
};

const getSmallerString = (string, index) => {
  return string.slice(0, index) + string.slice(index + 1);
};

const tryUpdateLongestStringChain = (
  currentString,
  smallerString,
  stringChains
) => {
  const smallerStringChainLength =
    stringChains[smallerString]['maxChainLength'];
  const currentStringChainLength =
    stringChains[currentString]['maxChainLength'];

  if (smallerStringChainLength + 1 > currentStringChainLength) {
    stringChains[currentString]['maxChainLength'] =
      smallerStringChainLength + 1;
    stringChains[currentString]['nextString'] = smallerString;
  }
};

const buildLongestStringChain = (strings, stringChains) => {
  let maxChainLength = 0;
  let chainStart = '';
  for (const string of strings) {
    if (stringChains[string]['maxChainLength'] > maxChainLength) {
      maxChainLength = stringChains[string]['maxChainLength'];
      chainStart = string;
    }
  }
  const longestChain = [];
  let currentString = chainStart;
  while (currentString !== '') {
    longestChain.push(currentString);
    currentString = stringChains[currentString]['nextString'];
  }
  return longestChain.length === 1 ? [] : longestChain;
};
