const drawLine = (x1, y1, x2, y2) => {
  const drawTree = (x, y, length, depth) => {
    if (depth === 0) return;

    let x1 = x - length / 2;
    let x2 = x + length / 2;
    let y1 = y - length / 2;
    let y2 = y + length / 2;

    //Left
    drawLine(x1, y1, x2, y2);
    //Right
    drawLine(x2, y1, x2, y2);
    //Middle
    drawLine(x1, y, x2, y);

    let newLength = length / Math.sqrt(2);

    drawTree(x1, y1, newLength, depth--);
    drawTree(x1, y2, newLength, depth--);
    drawTree(x2, y1, newLength, depth--);
    drawTree(x2, y2, newLength, depth--);
  };
};
