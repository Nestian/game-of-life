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
          if (row >= 0 && row < grid.length && col >= 0 && col < grid[0].length) {
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
    renderGrid()
}

// controls the loop of execution of the game of life:
// start button sets to true, pause button sets to false  
var flag = false;

var delayInSeconds = 0.25 // the delay between each generation in the game of life
// converts the delay in milliseconds to be compatible with setTimeout of JS
var delay = delayInSeconds * 1000 

// loops the game of life until the game is paused (stopped) by a button
function loopGame() {
  if (!flag) return;
  applyRules(); // apply the rules at each generation
  renderGrid(); // render the changes to the state
  // wait for N milliseconds before calculating the next generation;
  // gives the user enough time to visualize the changes on screen;
  // NOTE: if resolution gets higher (more cells) this might not be neccessary.
  setTimeout(loopGame, delay); 
}

function startGame() {
  flag = true;
  loopGame();
}

function pauseGame() {
  flag = false;
}

