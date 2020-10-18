class ParkingSystem {
  constructor(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
  }
  addCar(carType) {
    if (carType === 1 && this.big > 0) {
      this.big--;
      return true;
    } else if (carType === 2 && this.medium > 0) {
      this.medium--;
      return true;
    } else if (carType === 3 && this.small > 0) {
      this.small--;
      return true;
    } else {
      return false;
    }
  }
}

//Alternate
class ParkingSystem {
  constructor(big, medium, small) {
    this.car = [big, medium, small];
  }
  addCar(carType) {
    return this.car[carType - 1]-- > 0;
  }
}
