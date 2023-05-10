// utility function to count the number of alive neighbours
// of a cell at given position. Diagonal elements are also
// considered.
function countAliveNeighbours(cellRow, cellCol) {
    let nAlive = 0;

    for (let row = cellRow - 1; row <= cellRow + 1; row++) {
        for (let col = cellCol - 1; col <= cellCol + 1; col++) {
          
          // Skip the current cell, i.e. don't count the cell itself as neighbour
          if (row === cellRow && col === cellCol) {
            continue;
          }
          // Check if the neighboring cell is within the bounds of the grid
          if (isWithinGridBoundary(row,col)) {
            if  (grid[row][col] == 1) {
                nAlive += 1;
            }
          }
        }
    }

    return nAlive;
}

// The rules to apply at each generation
function applyRules() {
     // rules are considered for grid values at previous state
    let tempGrid = Array(ROWS).fill().map(() => Array(COLS).fill(0));
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
          const nAlive = countAliveNeighbours(row, col);
          // underpopulation or overpopulation = the cell dies
          if ( (nAlive < 2) || (nAlive > 3) ) { 
            tempGrid[row][col] = 0; 
          }
          // reproduction
          else if (nAlive == 3) { 
            tempGrid[row][col] = 1; 
          } // no changes otherwise (either the cell lives on or remains dead)
          else {
            tempGrid[row][col] = grid[row][col];
          }
        }
    }
    grid = tempGrid; // apply changes
}