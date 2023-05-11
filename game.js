// controls the loop of execution of the game of life:
// start button sets to true, pause button sets to false  
var flag = false;

// loops the game of life until the game is paused (stopped) by a button
function loopGame() {
  if (!flag) return;
  // the delay between each generation in the game of life (0.5 seconds by default)
  var delayDropdown = document.getElementById('simSpeed');
  var delayInSeconds = parseFloat(delayDropdown.value);
  // converts the delay in milliseconds to be compatible with setTimeout of JS
  var delay = delayInSeconds * 1000;
  applyRules(); // apply the rules at each generation

  if (delay > 0.002) { // don't render the grid if set to highest speed (0 delay)
    renderGrid(); // render the changes to the state
  } 
  // wait for N milliseconds before calculating the next generation;
    // gives the user enough time to visualize the changes on screen;
    // NOTE: if resolution gets higher (more cells) this might not be neccessary.
  setTimeout(loopGame, delay);
}

function startGame() {
  const title = document.getElementById('title');
  if (!containsLivingCells()) {
    title.innerHTML = "Initialize living cells on grid before starting :)";
    title.style.color = '#faed00';
    return;
  }
  if (generationCount == 0) {
    reportGenerations.length = 0;
    reportAliveCounts.length = 0;
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

// generates a pdf report containing data about the generation and living cell counts.
function generateReport() {
  var doc = new jsPDF()
  var text = []
  for (let i=0; i < reportGenerations.length; i++) {
    text.push(`Generation: ${reportGenerations[i]}, Alive cells: ${reportAliveCounts[i]}`);
    if (i != 0 && i != reportGenerations.length-1 && i%40==0) { // page contains up to 40 lines
      doc.text(text,20,20);
      doc.addPage();
      text.length = 0;
    } else if (i == reportGenerations.length-1) { // write the remaining content at the end of the document
      doc.text(text,20,20);
      text = [];
    }
  }
  doc.save('report.pdf');
}

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
  reportGenerations.length = 0;
  reportAliveCounts.length = 0;
}
