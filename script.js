import Grid from "./Grid.js"
import Tile from "./Tile.js"

// Declaring values
const gameBoard = document.getElementById("gameboard");
const score = document.getElementById("score");

const grid = new Grid(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);
setupInput();
console.log(grid.cellsByColumn)

function setupInput() {
    window.addEventListener("keydown", handleInput, {once: true});
}

function handleInput(e) {
    console.log(e.key)
    switch (e.key) {
        case "ArrowUp":
            moveUp();
            break;
        case "ArrowDown":
            moveDown();
            break;
        case "ArrowLeft":
            moveLeft();
            break;
        case "ArrowRight":
            moveRight();
            break;
        default:
            setupInput();
            break;
    }

    // Additional code

    setupInput();
}

function moveUp() {
    return slideTiles(grid.cellsByColumn);
}

function moveDown() {
    
}

function moveLeft() {

}

function moveRight() {
    
}

function slideTiles(cells) {
    // Loop through each cell by column, then row
    cells.forEach(group => {
        for (let i = 1; i < group.length; i++) {
            const cell = group[i];
            if (cell.tile == null) continue;
            let lastValidCell;
            for (let j = i-1; j >= 0; j--) {
                const moveToCell = group[j];
                if (!moveToCell.canAccept(cell.tile)) break;
                lastValidCell = moveToCell;
            }
            
            if (lastValidCell != null) {
                if (lastValidCell.tile != null) {
                    lastValidCell.mergeTile = cell.tile;
                } else { // If the movement doesn't merge a number just slide it over
                    lastValidCell.tile = cell.tile;
                }
                cell.tile = null;
            }
        }
    })
}