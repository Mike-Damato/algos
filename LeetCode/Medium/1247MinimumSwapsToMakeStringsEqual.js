const minimumSwap = (s1, s2) => {
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let temp = [];
  let step = 0;
  if (arr1.length !== arr2.length) {
    return -1;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      arr1[i] === 'x' ? temp.unshift(arr1[i]) : temp.push(arr1[i]);
    }
  }

  if (temp.length % 2 !== 0) {
    return -1;
  }

  for (let i = 0; i < temp.length; i = i + 2) {
    temp[i] === temp[i + 1] ? (step = step + 1) : (step = step + 2);
  }
  return step;
};
