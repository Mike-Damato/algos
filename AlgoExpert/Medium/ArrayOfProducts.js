function arrayOfProducts(array) {
  // Write your code here.
  const ans = new Array(array.length).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < array.length; i++) {
    ans[i] = leftProduct;
    leftProduct *= array[i];
  }

  let rightProduct = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    ans[i] *= rightProduct;
    rightProduct *= array[i];
  }
  return ans;
}
