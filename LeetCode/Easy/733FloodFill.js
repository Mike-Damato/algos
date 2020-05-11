/*find given node
DFS on all adjacent nodes
if adjacent node !== newColor && !== 0, change the color
*/

/*
[
[1,1,1],
[1,1,0],
[1,0,1]
]

1
1
2
*/

const dfs = (image, i, j, ogColor, newColor) => {
  //ogColor = image @ [i][j]
  //check bounds
  if (
    i < 0 ||
    i >= image.length ||
    j < 0 ||
    j >= image[i].length ||
    image[i][j] !== ogColor
  ) {
    return;
  }

  image[i][j] = newColor;
  dfs(image, i + 1, j, ogColor, newColor);
  dfs(image, i - 1, j, ogColor, newColor);
  dfs(image, i, j + 1, ogColor, newColor);
  dfs(image, i, j - 1, ogColor, newColor);
};

var floodFill = function (image, sr, sc, newColor) {
  if (image[sr][sc] === newColor) {
    return image;
  }
  let ogColor = image[sr][sc];
  dfs(image, sr, sc, ogColor, newColor);

  return image;
};
