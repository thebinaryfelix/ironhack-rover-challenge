# Ironhack challenge
## Mars Rover
We are sending a rover to Mars and we need to program its movements so that we can send it commands from Earth. At Ironhack, we’ve been tasked with developing the code for doing so, and we figured this would be a job for the junior developers.

![Mars Rover][logo]

[logo]: http://beatty-robotics.com/wp-content/uploads/Front-cropped.jpg "Logo Title Text 2"

## Basic Information
Our Mars Rover is kind of dumb. By that, we mean it can’t move and turn at the same time. This means that if the rover wants to move to the left, it’s first move must be a turn. Its next move will then be a step forward.

At a high level, what we will do in the challenge is the following:
- Create a function to turn the rover.
- Create a function to move the rover forwards or backwards based on its direction.

## Where will you work?
We have provided some starter files for you to work on!
- Download this repository or fork it.
- Open the file inside JS > movement > rover.js

There, you already have some instructions to follow ;)

## Iteration 1 | The Rover Object

The direction property can contain one of four values: "N", "S", "E", or "W". The rover’s default direction will be "N" (north).

## Iteration 2 | Turning the Rover
The rover has a direction attribute. We’ve already provided methods called turnLeft and turnRight. Your job is to turn the rover in the appropriate direction based off of its current direction.

Examples:
Rover is facing North (N) and turns left => Rover is now facing West (W)
Rover is facing West (W) and turns left => Rover is now facing South (S)
Rover is facing North (N) and turns right => Rover is now facing East (E)

![Mars Rover][logo2]

[logo2]: https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_831b479d70c0865ef6afd6b8042cbb99.gif "Logo Title Text 2"

## Iteration 3 | Moving the Rover
In order to move the rover around, we have to keep track of the rover’s position.
Positions can be represented as a pair of coordinates, x and y. Add two properties to your rover called x and y. Their default values will both be 0.

![Mars Rover][logo3]

[logo3]: https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_91a247c191d18c2d91f03261bf18611f.png "Logo Title Text 2"

## Moving Forward
Once the rover has a position, it’s time to move it.
![Mars Rover][logo4]

[logo4]: https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_596bde4c6f92c60447ea2e1644da168e.gif "Logo Title Text 2"

## Iteration 4 | Tracking
We want to know where our rover has been. Create a property on the rover object that contains the coordinates of the places it has been. Call this property travelLog and it will be an Array.

After each move, push the coordinates of the previous space to the travelLog array.

## Classificatory
Finally, let's implement the final functionalities to the rover!

- Make sure your rover doesn’t accidentally roam off the map! Create a function to verify if the rover has reached the limits of the canvas.
- After that, make the rover stop moving if it's already on the limit of the board.
- Lastly, calling our functions on the console is so boring... Let's call our functions (turnLeft, turnRight, moveForward and moveBackwards) when pressing the arrows on the keyboard!