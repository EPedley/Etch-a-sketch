# Etch-a-sketch

As part of my progress through The Odin Project Foundations course I have created an Etch-a-sketch using HTML, CSS and Javascript. 

The etch-a-sketch:
- Selects the colour of the paint according to the user's selection. If the user selects rainbow, each pixel is painted a random colour
- Has an eraser button which wipes the contents of the pixel of the user's choice
- Has a clear button which wipes the board
- Has a toggle which enables the user to change the dimensions of the grid at will

Working through this project I have learnt to do the following:
- Use arrays and built-in array methods
- Use loops
- How to target nodes with "selectors"
- How to use a range of event listeners to make my interfaces responsive
- Work with and format webkits
- How to manipulate the DOM so that it is responsive to user input

I would still like to improve this project. Three key areas I am keen to explore are: 
- How do I make the code faster? At high numbers for dimensions, the grid takes a long time to load. I suspect this is because of all the looping it is doing, so I would like to revisit this code to make it faster.
- How do I keep the buttons selected? Once a user clicks in the grid, the button they have selected de-selects itself making it unclear which mode the user is on.
- How do I stop painting on mouse up? When a user un-clicks their mouse I would like the mouse to stop painting on the grid. I have tried many iterations here using variations of event listeners and mouseup events, but nothing has worked so far.