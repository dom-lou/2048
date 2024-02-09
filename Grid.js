const gridSize = 4;
const cellSize = 16;
const cellGap = 1;

export default class Grid {
    #cells
    
    constructor(gridElement) {
        gridElement.style.setProperty("--grid-size", gridSize)
        gridElement.style.setProperty("--cell-size", `${cellSize}vh`)
        gridElement.style.setProperty("--cell-gap", `${cellGap}vh`)
        this.#cells = createCellElements(gridElement).map((cellElement, index) => {
            return new Cell(cellElement, index % gridSize, Math.floor(index / gridSize))
        })
        console.log(this.cells)
    }
}

class Cell {
    constructor(cellElement, x, y) {
        this.cellElement = cellElement
        this.x = x
        this.y = y
    }
}

function createCellElements(gridElement) {
    const cells = []
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement("div")
        cell.classList.add("cell")
        cells.push(cell)
        gridElement.append(cell)
    }
    return cells
}