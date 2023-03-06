let DEFAULTCOLOUR = "#43E8FF";
let DEFAULTGRID = "32";
let DEFAULTSETTING = "colour";

let num = DEFAULTGRID;
let paintColour = DEFAULTCOLOUR;
let paintSetting = DEFAULTSETTING;

//function to resize all the divs to fit the grid
function resizeBoxes(num) {

    const boxes = document.querySelectorAll(".box");

    const height = (512 - num) / num;

    const width = (512 - num) / num;

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.height = height + "px";
        boxes[i].style.width = width + "px";
    }
}

//function to create all the divs in the grid
function setGrid(num) {
    
    //clear the grid
    grid.innerHTML = "";

    //loop through the number inputted by the user and create x number of boxes
    for (let i = 0; i < (num * num); i++) {
        //create a new div element called box
        const box = document.createElement("div");
        //set the id of the div to box
        box.setAttribute("class", "box");
        //add the box to the grid
        grid.appendChild(box);

        resizeBoxes(num);   
    }
}

function paint(paintSetting, paintColour) {

    //if mouse moves into a box change its colour
    const boxes = document.querySelectorAll(".box");

    if (paintSetting === "colour" || paintSetting === "eraser") {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].addEventListener("mouseenter", function() {
                boxes[i].style.backgroundColor = paintColour;
            });
        }
    }

    else {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].addEventListener("mouseenter", function() {
                //create a random colour
                let red = Math.floor((Math.random() * 255) + 1);
                let green = Math.floor((Math.random() * 255) + 1);
                let blue = Math.floor((Math.random() * 255) + 1);
                let randomColour = `rgb(${red},${green},${blue})`;
                boxes[i].style.backgroundColor = randomColour;
            });
        }       
    }
}

//clear function
function clear () {
    const boxes = document.querySelectorAll(".box");

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "white";
    }
}

const grid = document.querySelector(".grid");
const sizeToggle = document.querySelector(".size-toggle");
const sizeText = document.querySelector("#size-text");

//create the default grid
setGrid(num);

//reset the grid if button is clicked
sizeToggle.addEventListener("change", (e) => {
    num = e.target.value;
    setGrid(num);
    sizeText.innerHTML = `${num} x ${num}`;
})

document.getElementById("colour-picker").addEventListener("change", (e) => {
    paintColour = e.target.value;
})

//set the paint colour when a button is clicked
const rainbowModeClicked = document.querySelector(".rainbow-mode");
rainbowModeClicked.addEventListener("click", function() {
    paintSetting = "rainbow";
});

const colourModeClicked = document.querySelector(".colour-mode");
colourModeClicked.addEventListener("click", function() {
    paintSetting = "colour";
});

const eraserModeClicked = document.querySelector(".eraser-mode");
eraserModeClicked.addEventListener("click", function() {
    paintSetting = "eraser";
    paintColour = "white";
});
//end of colour choosing

//once the user clicks in the grid they should start painting
grid.addEventListener("mousedown", function() {
    paint(paintSetting, paintColour);
});

//clear the grid if button is clicked
const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", function() {
    clear();
});


//TODO
//Make it so the buttons stay down

//Make it so that the pen stops on mouse up