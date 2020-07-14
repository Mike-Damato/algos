var angleClock = function (hour, minutes) {
  let hourAngle = (hour + minutes / 60) * 30; //360 / 12 = 30
  let minuteAngle = (360 / 60) * minutes;
  let diff = Math.abs(minuteAngle - hourAngle);

  return Math.min(diff, 360 - diff);
};
