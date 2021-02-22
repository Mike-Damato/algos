var solution = function (knows) {
  return function (n) {
    let celeb = 0;

    for (let person = 0; person < n; person++) {
      if (celeb !== person && knows(celeb, person)) {
        celeb = person;
      }
    }

    for (let person = 0; person < n; person++) {
      if ((celeb !== person && knows(celeb, person)) || !knows(person, celeb)) {
        return -1;
      }
    }
    return celeb;
  };
};
