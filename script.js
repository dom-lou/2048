import Grid from "./Grid.js"

// Declaring values
const gameBoard = document.getElementById("gameboard");
const score = document.getElementById("score");

const grid = new Grid(gameBoard);
console.log(grid.randomEmptyCell());
grid.randomEmptyCell().tile = new Tile(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);