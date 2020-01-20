// Rover Object Goes Here

let Rover = {
  direction: "N",
  x: 5,
  y: 0,
  travelLog: [] //travelLog starts with Rover.x and Rover.y
};

// ============BOARD with OBSTACLES==========

//'-' represents an obstacle

let board = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '-', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
];



// ======================
function turnLeft(rover){
 console.log("turnLeft was called!");
  switch (rover.direction) {
    case "W": 
      rover.direction = "S";
      break;
    case "N":
      rover.direction = "W";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  console.log(`The rover is now facing ${rover.direction}`);
}

function turnRight(rover){
  console.log("turnRight was called!");
    switch (rover.direction) {
    case "W": 
      rover.direction = "N";
      break;
    case "N":
      rover.direction = "E";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S";
      break;
  }
  console.log(`The rover is now facing ${rover.direction}`);
}

function moveForward(rover){
  if (rover.x == 0 && rover.direction == "N" || rover.y > 9) {
    console.log("You can't place the rover outside of the safe area!");
  } else if (rover.y == 9 && rover.direction == "S") {
    console.log("You can't place the rover outside of the safe area!");
  } else if (rover.x == 9 && rover.direction == "E") {
    console.log("You can't place the rover outside of the safe area!");
  } else if (rover.x == 0 && rover.direction == "W" || rover.x > 9) {
    console.log("You can't place the rover outside of the safe area!");
  } else {
    console.log("moveForward was called");   
      switch (rover.direction) {
    case "W": 
      rover.x -= 1;
      console.log(`Command center the rover has position: x=${rover.x}, y=${rover.y}`);
      break;
    case "N":
      rover.y -= 1;
      console.log(`Command center the rover has position: x=${rover.x}, y=${rover.y}`);
      break;
    case "S":
      rover.y += 1;
      console.log(`Command center the rover has position: x=${rover.x}, y=${rover.y}`);
      break;
    case "E":
      rover.x += 1;
      console.log(`Command center the rover has position: x=${rover.x}, y=${rover.y}`); 
      break;
      }
    let newPosition = {x: rover.x, y: rover.y};

    rover.travelLog.push(newPosition);
  }
}

function moveBackward(rover){
  if (rover.y == 0 && rover.direction == "S" || rover.y > 9) {
    console.log("You can't place the rover outside of the safe area!");
  } else if (rover.y == 9 && rover.direction == "N") {
    console.log("You can't place the rover outside of the safe area!");
  } else if (rover.x == 9 && rover.direction == "W") {
    console.log("You can't place the rover outside of the safe area!");
  } else if (rover.x == 0 && rover.direction == "E" || rover.x > 9) {
    console.log("You can't place the rover outside of the safe area!");
  } else {
    console.log("moveBackwars was called");   
      switch (rover.direction) {
    case "W": 
      rover.x += 1;
      console.log(`Command center the rover has position: x=${rover.x}, y=${rover.y}`);
      break;
    case "N":
      rover.y += 1;
      console.log(`Command center the rover has position: x=${rover.x}, y=${rover.y}`);
      break;
    case "S":
      rover.y -= 1;
      console.log(`Command center the rover has position: x=${rover.x}, y=${rover.y}`);
      break;
    case "E":
      rover.x -= 1;
      console.log(`Command center the rover has position: x=${rover.x}, y=${rover.y}`); 
      break;
      }
    let newPosition = {x: rover.x, y: rover.y};

    rover.travelLog.push(newPosition);
  }
}

function commands(rover, command) {
    let starterPosition = {x: rover.x, y: rover.y};

    rover.travelLog.push(starterPosition);
  for (let i = 0; i < command.length; i++) {
    let order = command[i];
    switch(order) {
      case "f":
        moveForward(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "b":
        moveBackward(rover);
        break;
      default:
        console.log(`Wrong command.`);
        break;
    }
  }
  console.log(rover.travelLog);
}

//commands(Rover, "rffrfflfrffbb");