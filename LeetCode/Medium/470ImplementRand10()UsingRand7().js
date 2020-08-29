var result = 0;
var rand10 = function () {
  result = (result + rand7()) % 10;
  return result + 1;
};

function ordered_shopping(products, shopping_list) {
  // Your code here.
  //   console.log('products', products, 'List:', shopping_list)
  if (
    shopping_list.length === 0 ||
    shopping_list === null ||
    products.length === 0
  ) {
    return 0;
  }

  let foodMap = new Map();

  for (const [food, department] of products) {
    foodMap.set(food, department);
  }

  let visit = new Set();

  visit.add(foodMap.get(shopping_list[0]));

  let inOrderTime = 1;
  for (let i = 1; i < shopping_list.length; i++) {
    if (foodMap.get(shopping_list[i]) !== foodMap.get(shopping_list[i - 1])) {
      inOrderTime++;
    }
    visit.add(foodMap.get(shopping_list[i]));
  }

  return inOrderTime - visit.size;
}
