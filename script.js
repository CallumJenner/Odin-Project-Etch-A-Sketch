let numOfRows = 30;
let numOfColumns = 100;

const grid = document.getElementById("grid");

for (let i = 0; i < numOfRows; i++) {
    const box = document.createElement("div");
    box.id = `row-${i + 1}`;
    box.classList.add("row-container");
    grid.append(box);
}

for (let i = 0; i < numOfRows; i++) {
    let columnBox = document.getElementById(`row-${i + 1}`)
    for (let j = 0; j < numOfColumns; j++) {
        const colBox = document.createElement("div");
        colBox.id = `column-${j + 1}`;
        colBox.classList.add("column-box");
        colBox.style.width = `${100 / numOfColumns}%`;
        columnBox.appendChild(colBox);
    }
}

grid.addEventListener("mouseover", function(e) {
    e.target.style.backgroundColor = "red";
})

const reset = document.getElementById("reset-button");

reset.addEventListener("click", function(e) {
    alert("reset");
})