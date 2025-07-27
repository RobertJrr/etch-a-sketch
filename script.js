//Robert M.

//Simple Etch-a-Sketch project

// testing on branch - we are on branch
//------------------------------------------------------

//function get random rgb color
function getRandomColor(){
    let letters = "abcdef0123456789";
    let color = "#";
    for(let i = 1; i <= 6; i++){
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

//function to create grid
// formula for each square size = 600px / numberOfSquares = Xpx size;
function createGrid(gridSize){
    //get size of each square cell (length and height)
    let squareLength = 600 / Math.sqrt(gridSize);

    for(let i = 0; i < gridSize; i++){
        const divElement = document.createElement("div");
        divElement.classList.add("square");
        // set the size here for each square we create
        divElement.style.width = (squareLength).toString() + "px";
        divElement.style.height = (squareLength).toString() + "px";
        containerRef.appendChild(divElement);
    }
}

//hover function to change color of squares on grid
function attachHoverEffect(){
    const squares = document.querySelectorAll(".square");
    squares.forEach((square)=>{
        square.addEventListener("mouseenter",()=>{
            square.style.backgroundColor = getRandomColor();
        })
    })
}

//max grid size
const maxSize = 100;
//initial grid size
const initialGridSize = Math.pow(16,2);
//get reference to the container for grid
const containerRef = document.querySelector("#container");
//reference to button
const resetButton = document.querySelector("#newgridBtn");


//creating initial grid 16x16 
createGrid(initialGridSize);
attachHoverEffect();

//adding event listener to button to reset
resetButton.addEventListener("click",function(){
    // prompt user for new size
    let newSize = Number(prompt("Enter new size"));

    //if user enters size that exceeds max size
    while (newSize > maxSize || newSize < 1){
        alert("Invalid Size! Try Again!");
        newSize = Number(prompt("Enter new size"));
    }
    
    //clear the grid entirely
    containerRef.innerHTML = "";

    let newGridSize = Math.pow(newSize,2);

    //then create new one
    createGrid(newGridSize);

    //reeattach mouseenter listeners to new squares created
    attachHoverEffect();
});











