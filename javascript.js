//function to decide grid layout

function setGrid() {
    //document.getElementById("grid").innerHTML = "Hello World";

    for (let i = 0; i < (16 * 16); i++) {
        document.getElementById("grid").innerHTML += "<div></div>"
    }

    //const grid = document.querySelector("#grid");

    //const div = document.createElement("div");
    
    //for (let i = 0; i < 16; i++) {
    //    grid.appendChild(div);
    //}
    

    //grid.innerHTML = <div></div>;
}


//listen to grid button and begin grid layout function when clicked
const gridButton = document.getElementById("grid-button");

//remove 16 when done
gridButton.addEventListener("click", setGrid(16));


