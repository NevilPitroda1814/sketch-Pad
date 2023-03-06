// All grid script....
    const container = document.getElementById("container");
function gridSize() {
    let x = prompt("Enter gird(24X24) number");

    function makeRows(row, col) {
        container.style.setProperty('--grid-rows', row);
        container.style.setProperty('--grid-cols', col);
        for (c = 0; c < (row * col); c++) {
            let cell = document.createElement("div");
            container.appendChild(cell).className = "grid-item";
        };
    };
    makeRows(x,x);
}