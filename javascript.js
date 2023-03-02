//function to resize all the divs to fit the grid
function resizeBoxes(num) {

    const boxes = document.querySelectorAll("#box");

    const height = (512 - num) / num;

    const width = (512 - num) / num;

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.height = height + "px";
        boxes[i].style.width = width + "px";
    }
}

//function to create all the divs in the grid
function setGrid(num) {
    
    //loop through the number inputted by the user and create x number of boxes
    for (let i = 0; i < (num * num); i++) {
        //create a new div element called box
        const box = document.createElement("div");
        //set the id of the div to box
        box.setAttribute("id", "box");
        //add the box to the grid
        grid.appendChild(box);

        resizeBoxes(num);   
    }
}

//listen to grid button and begin grid layout function when clicked
const gridButton = document.getElementById("grid-button");
//remove 16 when done
gridButton.addEventListener("click", setGrid(16));


