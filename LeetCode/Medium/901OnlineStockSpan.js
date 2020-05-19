var StockSpanner = function () {
  this.prices = [];
};

StockSpanner.prototype.next = function (price) {
  let count = 1;
  while (
    this.prices.length > 0 &&
    this.prices[this.prices.length - 1][0] <= price
  ) {
    count += this.prices.pop()[1];
  }
  this.prices.push([price, count]);
  return count;
};
