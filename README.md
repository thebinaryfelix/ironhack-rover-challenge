# Ironhack challenge
## Mars Rover
We are sending a rover to Mars and we need to program its movements so that we can send it commands from Earth. At Ironhack, we’ve been tasked with developing the code for doing so, and we figured this would be a job for the junior developers.

![Mars Rover][logo]

[logo]: http://beatty-robotics.com/wp-content/uploads/Front-cropped.jpg "Logo Title Text 2"

## Basic Information
Our Mars Rover is kind of dumb. By that, we mean it can’t move and turn at the same time. This means that if the rover wants to move to the left, it’s first move must be a turn. Its next move will then be a step forward.

In addition, our rover is on a test mission. NASA has placed the rover on a 10x10 grid to make sure all is well before we ship it off to mars.

At a high level, what we will do in the exercise is the following:
- Create a function to turn the rover.
- Create a function to move the rover forwards or backwards based on its direction.
- Create a function to receive a list of commands and move based off of those commands.

## Iteration 1 | The Rover Object

Create an object to represent the rover. This object will have only one property for now: the direction.
The direction property can contain one of four values: "N", "S", "E", or "W". The rover’s default direction will be "N" (north).

## Iteration 2 | Turning the Rover
The rover has a direction attribute. We’ve already provided functions called turnLeft and turnRight that receive a rover object as an argument. Your job is to turn the rover in the appropriate direction based off of its current direction.

Examples:
Rover is facing North and turns left => Rover is now facing West
Rover is facing West and turns left => Rover is now facing South
Rover is facing North and turns right => Rover is now facing East

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
We want to know where our rover has been. Create a property on the rover object that contains the coordinates of the places it has been. Call this property travelLog.

After each move, push the coordinates of the previous space to the travelLog array. After the rover has finished its moves, print out all of the spaces the rover has traveled over

## Bonus
If you found the first few iterations of the exercise easy, try implementing the following features:
- Obstacles - Create obstacles for the rover. If the rover’s next move would run it into an obstacle, stop it from moving forward and report the obstacle as found with console.log.
- Other Rovers - Add additional rovers to the map. Have them take turns moving. If one rover is going to run into the other, you should stop the rover and console.log a message saying so.
- Make sure your rover doesn’t accidentally roam off the map!
