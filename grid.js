// the width of user's device (window/HTML)
const deviceWidth  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// the height of user's device (window/HTML)
const deviceHeight = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

// to store the information about the simulation which can then be exported to report
var reportGenerations = [];
var reportAliveCounts = [];

// initialize the grid with default size (small)
setGridSize('default');

// sets the grid to a selected size (small, medium, large or very large)
function setGridSize(size) {
    switch (size) {
        case 'small':
            boxSize = 20;
            tableHeight = 0.6 * deviceHeight;
            ROWS = parseInt((deviceHeight * 0.6) / boxSize);
            COLS = parseInt(deviceWidth / boxSize);
            break;
        case 'large':
            boxSize = 5;
            tableHeight = 0.4 * deviceHeight;
            ROWS = parseInt(tableHeight / boxSize);
            COLS = parseInt(deviceWidth / boxSize);
            break;
        case 'very large':
            boxSize = 2;
            tableHeight = 0.1 * deviceHeight;
            ROWS = parseInt((deviceHeight * 0.3) / boxSize);
            COLS = parseInt((deviceWidth * 0.4) / boxSize);
            break;
        default:
            boxSize = 10;
            ROWS = parseInt((deviceHeight * 0.5) / boxSize);
            COLS = parseInt(deviceWidth / boxSize);
    }
    grid = Array(ROWS).fill().map(() => Array(COLS).fill(0));
    console.log('Displaying current information regarding window and grid size:')
    console.log(`Window resolution: ${deviceWidth}:${deviceHeight}`);
    console.log(`Grid size: ${ROWS} X ${COLS}`);
    console.log(`Number of cells: ${ROWS*COLS}`);
    console.log();
    createUITable();
    reportGenerations.length = 0;
    reportAliveCounts.length = 0;
}

// Represent the game of life as a table (grid)
function createUITable() {
    const table = document.getElementById('grid-table');
    $('#grid-table tr').remove();
    // Add ROWS * COLS elements  to the table
    for (let i = 0; i < ROWS; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < COLS; j++) {
            const td = document.createElement('td');
            // To each table element (cell) add handler to
            // allow users to change the state of each cell on click
            td.addEventListener('click', handleCellClick);
            const sizeString = boxSize.toString() + 'px';
            td.style.width = sizeString;
            td.style.height = sizeString;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

// utility function to check whether the row & col index are within grid boundary
function isWithinGridBoundary(row, col) {
    if (row >= 0 && row < grid.length && col >= 0 && col < grid[0].length) {
      return true;
    }
    return false;
  }

// checks if board has any living cells, which can be used prior 
// to starting the game to advise users to initialize living cells on the grid
function containsLivingCells() {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
          if (grid[row][col] == 1) return true;
      }
    }
    return false;
  }

function updateValues (row, col) {
    let cell = document.getElementById("grid-table").rows[row].cells[col];

    let prevValue = grid[row][col];
    if (prevValue == 0) {
        grid[row][col] = 1; // change the grid value
        cell.style.backgroundColor = 'black'; // render the new state 
    } else {
        grid[row][col] = 0;
        cell.style.backgroundColor = 'white'
    }
}

var generationCount = 0;
var aliveCount = 0;
// Render the current state of the grid on the screen
function renderGrid() {
    aliveCount = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            // obtain the corresponding element in the document
            const td = document.getElementById('grid-table').rows[row].cells[col];
            // color based on state
            if (grid[row][col] == 1) { 
                aliveCount += 1;
                td.style.backgroundColor = 'black'
            } 
            else {
                td.style.backgroundColor = 'white'
            }
        }
    }
    generationCount += 1;

    // render the title by coloring/changing the text depending on state of the game:
    const title = document.getElementById('title');
    if (displayDefaultTitle) {
        title.innerHTML = 'Game of Life';
        setTitleYellow();
    } else {
        // add the respective values for report generation
        reportGenerations.push(generationCount);
        reportAliveCounts.push(aliveCount);
    
        if (aliveCount == 0) {
            title.innerHTML = `Game over! The cells lived for ${generationCount} generations.`;
            setTitleRed();
            flag = false;
        } 
        else {
            title.innerHTML = `Generation ${generationCount}, Total Living Cells: ${aliveCount}`;
        }
        if (aliveCount > 0 && aliveCount < 50) {
            setTitleYellow();
        }
        else if (aliveCount > 50 && aliveCount < 100) {
            setTitleOrange();
        } else if (aliveCount >= 100) {
            setTitleGreen();
        }
 }
}
