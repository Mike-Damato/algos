var validWordSquare = function (words) {
  for (let i = 0; i < words.length; i++) {
    let current = words[i];
    for (let j = 0; j < current.length; j++) {
      if (
        j >= words.length ||
        i > words[j].length ||
        words[i].charAt(j) !== words[j].charAt(i)
      ) {
        return false;
      }
    }
  }
  return true;
};

const validWordSquare = (words) => {
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      let charI = words[i][j];
      if (j >= words.length || i >= words[j].length) {
        return false;
      }
      //We confirmed we are now inbounds
      let charJ = words[j][i];
      if (charI !== charJ) {
        return false;
      }
    }
  }
  return true;
};
