function sortStack(stack) {
  if (!stack.length) return stack;

  let top = stack.pop();

  sortStack(stack);

  insertInSortedOrder(stack, top);

  return stack;
}

const insertInSortedOrder = (stack, val) => {
  if (!stack.length || stack[stack.length - 1] <= val) {
    stack.push(val);
    return;
  }

  let top = stack.pop();
  insertInSortedOrder(stack, val);
  stack.push(top);
};
