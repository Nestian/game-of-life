# Game of Life

## How to start:
Open 'ui.html' in a web browser. 

## Rules of game of life:
* Any live cell with fewer than two live neighbors dies (under-population).
* Any live cell with two or three live neighbors lives on to the next generation.
* Any live cell with more than three live neighbors dies (overpopulation).
* Any dead cell with exactly three live neighbors becomes a live cell (reproduction).

## How to play:
There is a grid of cells displayed on your screen. The color fill of the cell
indicates whether the cell is alive (black) or dead (white). By clicking on
a particular cell you can change its current state. Once you are happy with 
the grid state you established, you can start the game by clicking the button
'Start' which will loop the game (apply the rules of game of life periodically) OR
alternatively you can play the game one step at a time by clicking on the 'Step' button.
If you have chosen to loop the game, you can pause at any given time by clicking the
respective button. You can clean the state of the grid and simulation logs by clicking 
on the 'Clear' button. 

## Additional features:

* At any point you can generate a pdf report of the current simulation's generation 
and living cell counts by clicking on the 'Gen Report' button.
* You can select the size of the game in the respective dropdown menu. By default, 
the game is medium size (10px per cell spanning across the window height and width).
* You can select the speed of the game (generation calculation) in the respective 
dropdown menu. The speed is set to fast (0.25second delay) by default.
* You can select the pattern to spawn when clicking on a given cell on the grid by
selecting the corresponding item in the pattern dropdown menu.

## Patterns:

By default, cells are made 'alive' by clicking on them one at a time. This is rather
cumbersome, however, as such it is recommended to use one of the patterns below. 
After a pattern is chosen in the dropdown, you can click on a cell to initiate it. 
The selected cell will be the top-most left corner of the pattern - thus be careful 
when initiating at the edges of the grid. The following types of patterns are available:

# Still lifes

* Block
* Bee-hive
* Loaf
* Boat
* Tub

# Oscillators

* Blinker
* Toad
* Beacon
* Pulsar
* Penta-decathlon

# Spaceships

* Glider
* Light-weight Spaceship
* Medium-weight Spaceship
* Heavy-weight Spaceship

# Producers

* Gosper glider gun




