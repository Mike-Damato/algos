const reverse = (str) => {
  //Check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'No string entered';
  }
  return str.split('').reverse().join('');
};

const reverse2 = (str) => {
  //Check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'No string entered';
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join('');
};

const reverse3 = (str) => [...str].reverse().join('');
