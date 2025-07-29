//Robert M.
//Simple Etch-a-Sketch project

//User will be able to specify size of grid
//Will include functionalities for new grid, rainbow, color, eraser 
//and clear options

//-----------------------Functions---------------------------

//function get random rgb color
function getRandomColor(){
    let letters = "abcdef0123456789";
    let color = "#";
    for(let i = 1; i <= 6; i++){
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

//function to get a specific color
function getAColor(){
    let color = document.getElementById("colorpicker").value;
    return color;
}

//function to erase colors
function eraser(){
    return "white";
}

//clear the entire grid
function clear(totalSquares){
    gridContainer.innerHTML = "";
    createGrid(totalSquares);
}

//new grid function to create new grid
function newGridFunction(){
    // prompt user for new size
    let newSize = Number(prompt("Enter new size"));

    //if user enters size that exceeds max size
    while (newSize > MAX_SQUARES || newSize < 1){
        alert("Invalid Size! Try Again!");
        newSize = Number(prompt("Enter new size"));
    }
    //clear the grid entirely
    gridContainer.innerHTML = "";
    totalSquares = Math.pow(newSize,2);

    //then create new one
    createGrid(totalSquares);
    //reeattach mouseenter listeners to new squares created
    activate();
}

//function to create actual grid (helper)
//formula for each square size = 600px / sqrt(totalSquares) = Xpx per square;
function createGrid(totalSquares){
    //get size of each square cell (length and height)
    let squareLength = GRID_LENGTH / Math.sqrt(totalSquares);

    //add square div to grid container parent
    for(let i = 0; i < totalSquares; i++){
        const divElement = document.createElement("div");
        divElement.classList.add("square");
        // set the size and color here for each square we create
        divElement.style.width = (squareLength).toString() + "px";
        divElement.style.height = (squareLength).toString() + "px";
        divElement.backgroundColor = "white";
        gridContainer.appendChild(divElement);
    }
}

//activate function, activates based on last button clicked
function activate(currentMode){
    const squares = document.querySelectorAll(".square");
    squares.forEach((square)=>{
        square.addEventListener("mouseenter",()=>{
            // if mouse isnt down, do nothing
            if(!mouseDown){
                return;
            }else if(currentMode === "rainbowBtn" && mouseDown){
                square.style.backgroundColor = getRandomColor();
            }else if(currentMode === "eraserBtn" && mouseDown){
                square.style.backgroundColor = eraser();
            }else if(currentMode === "colorBtn" && mouseDown){
                square.style.backgroundColor = getAColor();
            }
        });
    });
}

//-----------------------Variables---------------------------


//max grid size allowed (num squares per row and column)
const MAX_SQUARES = 100;
//total squares (16^2 = 256 squares(initial))
let totalSquares = Math.pow(16,2);
//get reference to the container for grid
const gridContainer = document.querySelector("#gridContainer");
//reference to new Grid Button
const newGridBtn = document.querySelector("#newgridBtn");
//reference to clear button
const clearbtn = document.querySelector("#clearBtn");
//reference to rest of buttons 
const allButtons = document.querySelectorAll("#colorBtn,#rainbowBtn,#eraserBtn");
//grid container size (length and width, same size)
const GRID_LENGTH = gridContainer.offsetWidth;

//mousedown variable
let mouseDown = false;
//event listeners to set truth value of mouseDown
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;


//for current mode
let currentMode = "";
//-----------------------Start---------------------------

//creating initial grid 16x16 
createGrid(totalSquares);
activate();

//adding event listener for each button besides new Grid Button and clear button
allButtons.forEach(button =>{
    button.addEventListener("click",() =>{
        currentMode = button.id;
        activate(currentMode);
    });
});


//events to create new grid and clear grid
newGridBtn.addEventListener("click",newGridFunction);
clearbtn.addEventListener("click",()=>{
    clear(totalSquares);
});












