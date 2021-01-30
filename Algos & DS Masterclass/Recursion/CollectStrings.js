/*
Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
*/

const collectStrings = (obj) => {
  const ans = [];

  const collectionHelper = (obj) => {
    for (const key in obj) {
      if (typeof obj[key] === 'string') {
        ans.push(obj[key]);
      } else if (typeof obj[key] === 'object') {
        return collectionHelper(obj[key]);
      }
    }
  };

  collectionHelper(obj);
  return ans;
};
