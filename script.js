function createGrid(rows, columns) {
    for (let i = 0; i < rows; i++) {
        const box = document.createElement("div");
        box.id = `row-${i + 1}`;
        box.classList.add("row-container");
        grid.append(box);
    }

    for (let i = 0; i < rows; i++) {
        let columnBox = document.getElementById(`row-${i + 1}`)
        for (let j = 0; j < columns; j++) {
            const colBox = document.createElement("div");
            colBox.id = `column-${j + 1}`;
            colBox.classList.add("column-box");
            colBox.style.width = `${100 / columns}%`;
            columnBox.appendChild(colBox);
        }
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const grid = document.getElementById("grid");
const reset = document.getElementById("reset-button");

createGrid(16, 16) // For the initial grid when the page is loaded

grid.addEventListener("mouseover", function(e) {
    let randomRed = randomInt(1, 255);
    let randomGreen = randomInt(1, 255);
    let randomBlue = randomInt(1, 255);
    e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
})

reset.addEventListener("click", function(e) {
    let numOfRows = prompt("Number of Rows: ");
    let numOfColumns = prompt("Number of Columns: ");
    grid.innerHTML = "";
    createGrid(numOfRows, numOfColumns);
})