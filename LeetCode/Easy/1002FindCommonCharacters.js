const commonChars = (A) => {
  return A.reduce(getCommon, A[0].split(''));
};

const getCommon = (prev, current) => {
  current = current.split('');
  return prev.filter((char) => {
    let i = current.indexOf(char);
    if (i !== -1) {
      current.splice(i, 1);
      return true;
    }
    return false;
  });
};
