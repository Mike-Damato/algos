var numOfSubarrays = function (arr) {
  let mod = 1e9 + 7;
  let sum = 0;
  let odds = 0;
  let evens = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    odds += sum % 2 !== 0;
    evens += sum % 2 === 0;
  }
  return (odds * evens + odds) % mod;
};

//Using reduce in a fun way
var numOfSubarrays = function (arr) {
  let mod = 1e9 + 7;
  let sum = 0;
  //evens idx 0 and odds idx 1
  let initialValue = [0, 0];

  arr.reduce((acc, currentNum) => {
    sum += currentNum;
    initialValue[0] += sum % 2 === 0;
    initialValue[1] += sum % 2 !== 0;
  }, initialValue);

  return (initialValue[1] * initialValue[0] + initialValue[1]) % mod;
};
