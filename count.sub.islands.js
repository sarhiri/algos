// You are given two m x n binary matrices grid1 and grid2 containing only 0's (representing water) and 1's (representing land). An island is a group of 1's connected 4-directionally (horizontal or vertical). Any cells outside of the grid are considered water cells.

// An island in grid2 is considered a sub-island if there is an island in grid1 that contains all the cells that make up this island in grid2.

// Return the number of islands in grid2 that are considered sub-islands.

 

// Example 1:


// Input: grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
// Output: 3
// Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
// The 1s colored red in grid2 are those considered to be part of a sub-island. There are three sub-islands.
// Example 2:


// Input: grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]], grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]
// Output: 2 
// Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
// The 1s colored red in grid2 are those considered to be part of a sub-island. There are two sub-islands.
 

/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
  let x = grid2.length;
  let y = grid2[0].length;

  function DFS(i, j) {
      if (i < 0 || j < 0 || i >= x || j >= y || grid2[i][j] !== 1) return 0;
      grid2[i][j] = 2;
      return (grid1[i][j] === 1 ? 0 : 1) +
          DFS(i - 1, j) +
          DFS(i, j - 1) +
          DFS(i + 1, j) +
          DFS(i, j + 1);
  }
  let res = 0;
  for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
          if (grid2[i][j] === 1) {
              if (DFS(i, j) === 0) {
                  res++;
              }
          }
      }
  }
  return res;
};