# Etch-a-sketch

As part of my progress through The Odin Project Foundations course I have created an Etch-a-sketch. You are able to 
- Pick a colour and draw with it
- Select a randomised colour that will change on each pixel
- Use an eraser which will remove the contents of a pixel
- Clear the board
- Toggle dimensions of the grid

Working through this project I have learnt to do the following:
- Work with and format webkits
- How to manipulate the DOM so that it is responsive to user input
- How to use random numbers to generate random colours
- Various different event listeners

I would still like to improve this project. Three key areas I am keen to explore are: 
- How do I make the code faster? At high numbers for dimensions, the grid takes a long time to load. I suspect this is because of all the looping it is doing, so I would like to revisit this code to make it faster.
- How do I keep the buttons selected? Once a user clicks in the grid, the button they have selected de-selects itself making it unclear which mode the user is on.
- How do I stop painting on mouse up? When a user un-clicks their mouse I would like the mouse to stop painting on the grid. I have tried many iterations here using variations of event listeners and mouseup events, but nothing has worked so far.