// controls the loop of execution of the game of life:
// start button sets to true, pause button sets to false  
var flag = false;

var delayInSeconds = 0.5 // the delay between each generation in the game of life
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
  const title = document.getElementById('title');
  if (!containsLivingCells()) {
    title.innerHTML = "Initialize living cells on grid before starting :)";
    return;
  }
  displayDefaultTitle = false;
  flag = true;
  loopGame();
}

function pauseGame() {
  flag = false;
}

function stepGame() {
  const title = document.getElementById('title');
  if (!containsLivingCells()) {
    title.innerHTML = "Initialize living cells on grid before starting :)";
    return;
  } else {
    displayDefaultTitle = false;
    applyRules();
    renderGrid();
  }
}

var displayDefaultTitle = false;

// clears the grid and resets the state of the game to the baseline
function clearGame() {
  flag = false;
  const title = document.getElementById('title');
  title.innerHTML = "Game of Life";
  setTitleYellow();
  grid = Array(ROWS).fill().map(() => Array(COLS).fill(0));
  displayDefaultTitle = true;
  renderGrid();
  generationCount = 0;
}