// Changes the state of the cell on click:
// dead (white) -> alive (black) OR
// alive (black) -> dead (white) 
function handleCellClick(event) {
    const cell = event.target;
    const row = cell.parentNode;
    const rowIndex = row.rowIndex;
    const columnIndex = cell.cellIndex;
    switch (selectedMode) {
        case 'box': {blockPattern(rowIndex, columnIndex); break;}
        case 'beeHive': {beeHivePattern(rowIndex, columnIndex); break;}
        case 'loaf': {loafPattern(rowIndex, columnIndex); break;}
        case 'tub': {tubPattern(rowIndex, columnIndex); break;}
        case 'boat': {boatPattern(rowIndex, columnIndex); break;}
        case 'blinker': {blinkerPattern(rowIndex, columnIndex); break;}
        case 'toad': {toadPattern(rowIndex, columnIndex); break;}
        case 'beacon': {beaconPattern(rowIndex, columnIndex); break;}
        case 'pulsar': {pulsarPattern(rowIndex, columnIndex); break;}
        case 'penta': {pentaDecathlonPattern(rowIndex, columnIndex); break;}
        case 'glider': {gliderPattern(rowIndex, columnIndex); break;}
        case 'lightShip': {lightWeightSpaceshipPattern(rowIndex, columnIndex); break;}
        case 'mediumShip': {mediumWeightSpaceshipPattern(rowIndex, columnIndex); break;}
        case 'heavyShip': {heavyWeightSpaceshipPattern(rowIndex, columnIndex); break;}
        default: {updateValues(rowIndex, columnIndex); break;}
    }
}

var selectedMode = 'default'

function setPattern(name) {
    selectedMode = name;
}

// Still lifes below
function blockPattern(row, col) {
    rowIndeces = [row, row+1, row, row+1]
    colIndeces = [col, col, col+1, col+1]
    for (let i=0; i < rowIndeces.length; i++) {
        if (isWithinGridBoundary(rowIndeces[i], colIndeces[i])) {
            updateValues(rowIndeces[i], colIndeces[i]);
        }
    }
}

function beeHivePattern(row, col) {
    rowIndeces = [row, row, row+1, row+1, row+2, row+2]
    colIndeces = [col, col+1, col-1, col+2, col, col+1]
    for (let i=0; i < rowIndeces.length; i++) {
        if (isWithinGridBoundary(rowIndeces[i], colIndeces[i])) {
            updateValues(rowIndeces[i], colIndeces[i]);
        }
    }
}

function loafPattern(row,col) {
    rowIndeces = [row, row, row+1, row+1, row+2, row+2, row+3]
    colIndeces = [col, col+1, col-1, col+2, col, col+2, col+1]
    for (let i=0; i < rowIndeces.length; i++) {
        if (isWithinGridBoundary(rowIndeces[i], colIndeces[i])) {
            updateValues(rowIndeces[i], colIndeces[i]);
        }
    }
}

function boatPattern(row,col) {
    rowIndeces = [row, row, row+1, row+1, row+2]
    colIndeces = [col, col+1, col, col+2, col+1]
    for (let i=0; i < rowIndeces.length; i++) {
        if (isWithinGridBoundary(rowIndeces[i], colIndeces[i])) {
            updateValues(rowIndeces[i], colIndeces[i]);
        }
    }
}

function tubPattern(row,col) {
    rowIndeces = [row,row+1,row+1,row+2]
    colIndeces = [col,col-1,col+1,col]
    for (let i=0; i < rowIndeces.length; i++) {
        if (isWithinGridBoundary(rowIndeces[i], colIndeces[i])) {
            updateValues(rowIndeces[i], colIndeces[i]);
        }
    }
}

// Oscilators Below
function blinkerPattern(row, col) {
    rowIndeces = [row,row,row]
    colIndeces = [col,col+1,col+2]
    for (let i=0; i < rowIndeces.length; i++) {
        if (isWithinGridBoundary(rowIndeces[i], colIndeces[i])) {
            updateValues(rowIndeces[i], colIndeces[i]);
        }
    }
}

function toadPattern(row, col) {
    rowIndeces = [row,row,row,row+1,row+1,row+1]
    colIndeces = [col,col+1,col+2,col-1,col,col+1]
    for (let i=0; i < rowIndeces.length; i++) {
        if (isWithinGridBoundary(rowIndeces[i], colIndeces[i])) {
            updateValues(rowIndeces[i], colIndeces[i]);
        }
    }
}

function beaconPattern(row, col) {
    rowIndeces = [row,row,row+1,row+1,row+2,row+2,row+3,row+3]
    colIndeces = [col,col+1,col,col+1,col+2,col+3,col+2,col+3]
    for (let i=0; i < rowIndeces.length; i++) {
        if (isWithinGridBoundary(rowIndeces[i], colIndeces[i])) {
            updateValues(rowIndeces[i], colIndeces[i]);
        }
    }
}

function pulsarPattern(row, col) {
    rowIndeces = [
        row,row,row,row,row,row,
        row+5,row+5,row+5,row+5,row+5,row+5,
        row+7,row+7,row+7,row+7,row+7,row+7,
        row+12,row+12,row+12,row+12,row+12,row+12,
        row+2,row+2,row+2,row+2,
        row+3,row+3,row+3,row+3,
        row+4,row+4,row+4,row+4,
        row+8,row+8,row+8,row+8,
        row+9,row+9,row+9,row+9,
        row+10,row+10,row+10,row+10,

        ]
    colIndeces = [
        col,col+1,col+2,col+6,col+7,col+8,
        col,col+1,col+2,col+6,col+7,col+8,
        col,col+1,col+2,col+6,col+7,col+8,
        col,col+1,col+2,col+6,col+7,col+8,
        col-2,col+3,col+5,col+10,
        col-2,col+3,col+5,col+10,
        col-2,col+3,col+5,col+10,
        col-2,col+3,col+5,col+10,
        col-2,col+3,col+5,col+10,
        col-2,col+3,col+5,col+10,
    ]
    for (let i=0; i < rowIndeces.length; i++) {
        if (isWithinGridBoundary(rowIndeces[i], colIndeces[i])) {
            updateValues(rowIndeces[i], colIndeces[i]);
        }
    }
}

function pentaDecathlonPattern(row, col) {
    rowIndeces = [
        row,row,row,
        row+2,row+2,row+2,
        row+3,row+3,row+3,
        row+4,row+4,row+4,
        row+5,row+5,row+5,
        row+7,row+7,row+7,
        row+1,row+1,
        row+6,row+6
    ]
    colIndeces = [
        col,col+1,col+2,
        col,col+1,col+2,
        col,col+1,col+2,
        col,col+1,col+2,
        col,col+1,col+2,
        col,col+1,col+2,
        col,col+2,
        col,col+2
    ]
    for (let i=0; i < rowIndeces.length; i++) {
        if (isWithinGridBoundary(rowIndeces[i], colIndeces[i])) {
            updateValues(rowIndeces[i], colIndeces[i]);
        }
    }
}

// Spaceships below
function gliderPattern(row, col) {
    rowIndeces = [row,row+1,row+2,row+2,row+2]
    colIndeces = [col,col+1,col-1,col,col+1]
    for (let i=0; i < rowIndeces.length; i++) {
        if (isWithinGridBoundary(rowIndeces[i], colIndeces[i])) {
            updateValues(rowIndeces[i], colIndeces[i]);
        }
    }
}

function lightWeightSpaceshipPattern(row, col) {
    rowIndeces = [
        row, row,
        row+1,
        row+2, row+2,
        row+3, row+3, row+3, row+3
    ]
    colIndeces = [
        col, col+3,
        col+4,
        col, col+4,
        col+1, col+2, col+3, col+4
    ]
    for (let i=0; i < rowIndeces.length; i++) {
        if (isWithinGridBoundary(rowIndeces[i], colIndeces[i])) {
            updateValues(rowIndeces[i], colIndeces[i]);
        }
    }
}

function mediumWeightSpaceshipPattern(row, col) {
    rowIndeces = [
        row, row, row, row, row,
        row+1, row+1,
        row+2,
        row+3, row+3,
        row+4
    ]
    colIndeces = [
        col, col+1, col+2, col+3, col+4,
        col-1, col+4,
        col+4,
        col-1, col+3,
        col+1
    ]
    for (let i=0; i < rowIndeces.length; i++) {
        if (isWithinGridBoundary(rowIndeces[i], colIndeces[i])) {
            updateValues(rowIndeces[i], colIndeces[i]);
        }
    }
}

function heavyWeightSpaceshipPattern(row, col) {
    rowIndeces = [
        row, row,
        row+1, row+1,
        row+2,
        row+3, row+3,
        row+4, row+4, row+4, row+4, row+4, row+4
    ]
    colIndeces = [
        col, col+1,
        col-2, col+3,
        col+4,
        col-2, col+4,
        col-1, col, col+1, col+2, col+3, col+4
    ]
    for (let i=0; i < rowIndeces.length; i++) {
        if (isWithinGridBoundary(rowIndeces[i], colIndeces[i])) {
            updateValues(rowIndeces[i], colIndeces[i]);
        }
    }
}
