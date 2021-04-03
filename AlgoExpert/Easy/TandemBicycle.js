function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
  let red = redShirtSpeeds.sort((a, b) => a - b);
  let blue = blueShirtSpeeds.sort((a, b) => a - b);

  const pairs = [];
  let sum = 0;

  if (!fastest) red = red.reverse();

  for (let i = 0; i < red.length; i++) {
    const redVal = red[i];
    const blueVal = blue[red.length - 1 - i];
    sum += Math.max(redVal, blueVal);
  }

  return sum;
}
