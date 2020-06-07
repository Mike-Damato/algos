class BrowserHistory {
  constructor(homepage) {
    this.history = [homepage];
    this.currentStep = 0;
  }

  visit(url) {
    this.history.splice(this.currentStep + 1, 0, url);
    this.currentStep += 1;
    this.history = this.history.slice(0, this.currentStep + 1);
  }
  back(steps) {
    this.currentStep = this.currentStep - steps;
    if (this.currentStep < 0) {
      this.currentStep = 0;
      return this.history[this.currentStep];
    } else {
      return this.history[this.currentStep];
    }
  }
  forward(steps) {
    this.currentStep = this.currentStep + steps;
    if (this.currentStep > this.history.length - 1) {
      this.currentStep = this.history.length - 1;
      return this.history[this.currentStep];
    } else {
      return this.history[this.currentStep];
    }
  }
}
