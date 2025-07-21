//Robert M.

//Simple Etch-a-Sketch project


const gridSize = 16 * 16;
//get reference to the container for grid
const containerRef = document.querySelector("#container");

//for loop, creating 32 squares to  make up the grid
for(let i = 0; i < gridSize; i++){
    const divElement = document.createElement("div");
    divElement.classList.add("square");
    containerRef.appendChild(divElement);
}


//next step, for every 16 squares, start a new row



