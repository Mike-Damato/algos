/*
Write a function called productOfArray that takes in an array of numbers and returns the product of them all
*/
const productOfArray = (arr) => {
  let product = arr[0];
  if (arr.length === 1) {
    return product;
  } else {
    return (product *= productOfArray(arr.slice(1)));
  }
};
