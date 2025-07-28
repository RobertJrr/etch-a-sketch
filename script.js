//Robert M.
//Simple Etch-a-Sketch project
//Testing on branch - we are on branch
//------------------------------------------------------


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

//function to erase colors
function eraser(){
    return "white";
}

// clear the entire grid
function clear(totalSquares){
    gridContainer.innerHTML = "";
    createGrid(totalSquares);

}

//new grid function to prompt user for new grid size and create new grid
function newGridFunction(){
    // prompt user for new size
    let newSize = Number(prompt("Enter new size"));

    //if user enters size that exceeds max size
    while (newSize > maxSquares || newSize < 1){
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

//function to create grid
//formula for each square size = 600px / numberOfSquares = Xpx size;
function createGrid(totalSquares){
    //get size of each square cell (length and height)
    let squareLength = gridLength / Math.sqrt(totalSquares);

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

//hover function to change color of squares on grid
function activate(currentMode){
    const squares = document.querySelectorAll(".square");
    squares.forEach((square)=>{
        square.addEventListener("mouseenter",(e)=>{
            // if mouse isnt down, do nothing
            if(!mouseDown){
                return;
            }else if(currentMode === "rainbowBtn" && mouseDown){
                square.style.backgroundColor = getRandomColor();
            }else if(currentMode === "eraserBtn" && mouseDown){
                square.style.backgroundColor = eraser();
            }
        });
    });
}

//-----------------------Variables---------------------------
//grid container size (length and width, same size)
const gridLength = 600;
//max grid size (num squares per row and column)
const maxSquares = 100;
//initial grid size (16^2 = 256 squares)
let totalSquares = Math.pow(16,2);
//get reference to the container for grid
const gridContainer = document.querySelector("#gridContainer");
//reference to new Grid Button
const newGridBtn = document.querySelector("#newgridBtn");
// reference to clear button
const clearbtn = document.querySelector("#clearBtn");
//list of some buttons 
const allButtons = document.querySelectorAll("#colorBtn,#rainbowBtn,#eraserBtn");
//for current mode
let currentMode = "";
//mousedown variable
let mouseDown = false;
//event listeners to set truth value of mouseDown
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;


//-----------------------Start---------------------------

//creating initial grid 16x16 
createGrid(totalSquares);
activate();

//adding event listener for each button besides new Grid Button
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











