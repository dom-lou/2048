import Grid from "./Grid.js"
import Tile from "./Tile.js"

// Declaring values
const gameBoard = document.getElementById("gameboard");
const score = document.getElementById("score");

const grid = new Grid(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);