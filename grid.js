// the width of user's device (window/HTML)
const deviceWidth  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// the height of user's device (window/HTML)
const deviceHeight = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

const tableHeight = 0.6 * deviceHeight;

const boxSize = 20; // pixel size of each square box side in the grid-table
const ROWS = parseInt(tableHeight / boxSize); // number of rows in the grid
const COLS = parseInt(deviceWidth / boxSize); // number of cols in the grid

// Initialize the grid with all cells dead, e.g. value 0
let grid = Array(ROWS).fill().map(() => Array(COLS).fill(0));

// Represent the game of life as a table (grid)
function createUITable() {
    const table = document.getElementById('grid-table');
    // Add ROWS * COLS elements  to the table
    for (let i = 0; i < ROWS; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < COLS; j++) {
            const td = document.createElement('td');
            // To each table element (cell) add handler to
            // allow users to change the state of each cell on click
            td.addEventListener('click', handleCellClick);
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

// Render the current state of the grid on the screen
function renderGrid() {
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            // obtain the corresponding element in the document
            const td = document.getElementById('grid-table').rows[row].cells[col];
            // color based on state
            if (grid[row][col] == 1) { 
                td.style.backgroundColor = 'black'
            } 
            else {
                td.style.backgroundColor = 'white'
            }
        }
    }
}
