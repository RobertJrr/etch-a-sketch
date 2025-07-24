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
function createGrid(gridSize){
    for(let i = 0; i < gridSize; i++){
        const divElement = document.createElement("div");
        divElement.classList.add("square");
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

//creating initial grid 16x16 
createGrid(initialGridSize);
attachHoverEffect();

//reference to button
const resetButton = document.querySelector("button");

//adding event listener to button to reset
resetButton.addEventListener("click",function(){
    let newSize = Number(prompt("Enter new size"));


    //if user enters size that exceeds max size
    while (newSize > maxSize){
        alert("Max grid size exceeded! Try Again!");
        newSize = Number(prompt("Enter new size"));
    }
    
    //clear the grid entirely
    containerRef.innerHTML = "";

    //set new width and new height of grid container 
    // Note: 32 is the pixel size height and width, 8 for extra so it fits perfectly
    containerRef.style.height = (newSize * 32 + 8).toString() + "px";
    containerRef.style.width = (newSize * 32 + 8).toString() + "px";

    let newGridSize = Math.pow(newSize,2);

    //then create new one
    createGrid(newGridSize);

    //reeattach mouseenter listeners to new squares created
    attachHoverEffect();
});











