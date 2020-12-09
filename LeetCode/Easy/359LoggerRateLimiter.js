class Logger {
  constructor() {
    this.map = new Map();
  }
  shouldPrintMessage(timestamp, message) {
    if (!this.map.has(message)) {
      this.map.set(message, timestamp);
      return true;
    } else {
      let time = this.map.get(message);
      if (timestamp - time >= 10) {
        this.map.set(message, timestamp);
        return true;
      } else {
        return false;
      }
    }
  }
}
