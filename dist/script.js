// Rover Object Goes Here

let pRover = {
  direction: "E",
  x: 5,
  y: 4,
  travelLog: [] //travelLog starts with Rover.x and Rover.y
};

let sRover = {
  direction: "E",
  x: 6,
  y: 0,
  travelLog: [] //travelLog starts with Rover.x and Rover.y
};

function randomPos(rover) {
  let positionX, positionY;
  
  positionX = Math.round(Math.random()*10);
  positionY = Math.round(Math.random()*10);
  
  if (positionX>10 || positionY > 10) {
    positionX = Math.round(Math.random()*10);
    positionY = Math.round(Math.random()*10);
  } else { 
  rover.x= positionX;
  rover.y= positionY;
  }
  
  rover.x= positionX;
  rover.y= positionY;
}

function randomDirection(rover) {
  let h;
  
  h = Math.random();
  
  if (h < 0.24) {
    rover.direction = "W";
  } else if ( h >=0.24 && h < 0.5) {
    rover.direction = "S";
  } else if ( h >=0.5 && h < 0.75) {
    rover.direction = "E";
  } else {
    rover.direction = "N";
  }
}

// ============BOARD with OBSTACLES==========

//'1' or 1 represents an obstacle
let tamanho=10;

let mapa=[];

function createBoard (size, board) {
  for (let y=0; y<size; y++) {
    board.push([]);
    for ( let x=0; x<size; x++){
      let randomN;
      randomN = Math.round(Math.random());
      board[y].push(randomN);
    }
  }
}

let map = [
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '1', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '1', '0'],
  ['0', '0', '0', '0', '1', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '1', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '1', '0', '0', '0', '1', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '1', '0'],
];

//console.log(`You will crash into an obstacle by doing this.`);

// ======================
function checkRoverF(rover1, rover2) {
  if (rover1.direction === 'E' && rover2.x === rover1.x+1 && rover1.y===rover2.y) {
    return true;
  } else if (rover1.direction === 'W' && rover2.x === rover1.x-1 && rover1.y===rover2.y) {
    return true;
  } else if (rover1.direction === 'N' && rover2.y === rover1.y-1 && rover1.x===rover2.x) {
    return true;
  } else if (rover1.direction === 'S' && rover2.y === rover1.y+1 && rover1.x===rover2.x) {
    return true;
  } else {
    return false;
  }
}

function checkRoverB(rover1, rover2) {
  if (rover1.direction === 'E' && rover2.x === rover1.x-1 && rover1.y===rover2.y) {
    return true;
  } else if (rover1.direction === 'W' && rover2.x === rover1.x+1 && rover1.y===rover2.y) {
    return true;
  } else if (rover1.direction === 'N' && rover2.y === rover1.y+1 && rover1.x===rover2.x) {
    return true;
  } else if (rover1.direction === 'S' && rover2.y === rover1.y-1 && rover1.x===rover2.x) {
    return true;
  } else {
    return false;
  }
}

function checkPositionF (rover, board) {
  if ('1' === board[rover.x+1][rover.y] || 1 === board[rover.x+1][rover.y] && rover.direction == "E") {
    return true;
  } else if ('1' === board[rover.x-1][rover.y] || 1 === board[rover.x-1][rover.y] && rover.direction == "W") {
    return true;
  } else if ('1' === board[rover.x][rover.y+1] || 1 === board[rover.x][rover.y+1] && rover.direction == "S") {
    return true;
  } else if ('1' === board[rover.x][rover.y-1] || 1 === board[rover.x][rover.y-1] && rover.direction == "N") {
    return true;
  } else {
    return false;
  }
}

function checkPositionB (rover, board) {
  if ('1' === board[rover.x-1][rover.y] || 1 === board[rover.x-1][rover.y] && rover.direction == "E") {
    return true;
  } else if ('1' === board[rover.x+1][rover.y] || 1 === board[rover.x+1][rover.y] && rover.direction == "W") {
    return true;
  } else if ('1' === board[rover.x][rover.y-1] || 1 === board[rover.x][rover.y-1] && rover.direction == "S") {
    return true;
  } else if ('1' === board[rover.x][rover.y+1] || 1 === board[rover.x][rover.y+1] && rover.direction == "N") {
    return true;
  } else {
    return false;
  }
}

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

function moveForward(rover1, board, rover2){
  if (checkPositionF(rover1,board)) {
    console.log(`You will crash into an obstacle by doing this.`);
  } else if (checkRoverF(rover1, rover2)) {
    console.log(`You will crash into another rover.`);
  } else if (rover1.y == 0 && rover1.direction == "N" ) {
    console.log("You can't place the rover outside of the safe area!");
  } else if (rover1.y == 9 && rover1.direction == "S") {
    console.log("You can't place the rover outside of the safe area!");
  } else if (rover1.x == 9 && rover1.direction == "E") {
    console.log("You can't place the rover outside of the safe area!");
  } else if (rover1.x == 0 && rover1.direction == "W") {
    console.log("You can't place the rover outside of the safe area!");
  } else if (rover1.x > 9 || rover1.x < 0 || rover1.y > 9 || rover1.x < 0) {
    console.log("You can't place the rover outside of the safe area!")
  } else {
    console.log("moveForward was called");   
    switch (rover1.direction) {
    case "W": 
      rover1.x -= 1;
      console.log(`Command center the rover has position: x=${rover1.x}, y=${rover1.y}`);
      break;
    case "N":
      rover1.y -= 1;
      console.log(`Command center the rover has position: x=${rover1.x}, y=${rover1.y}`);
      break;
    case "S":
      rover1.y += 1;
      console.log(`Command center the rover has position: x=${rover1.x}, y=${rover1.y}`);
      break;
    case "E":
      rover1.x += 1;
      console.log(`Command center the rover has position: x=${rover1.x}, y=${rover1.y}`); 
      break;
      }
    let newPosition = {x: rover1.x, y: rover1.y};
    rover1.travelLog.push(newPosition);
  }
}

function moveBackward(rover1, board, rover2){
  if (checkPositionB(rover1, board)) {
    console.log(`You will crash into an obstacle by doing this.`);
  } else if (checkRoverB(rover1, rover2)) {
    console.log(`You will crash into another rover.`);
  } else if (rover1.y == 0 && rover1.direction == "S") {
    console.log("You can't place the rover outside of the safe area!");
  } else if (rover1.y == 9 && rover1.direction == "N") {
    console.log("You can't place the rover outside of the safe area!");
  } else if (rover1.x == 9 && rover1.direction == "W") {
    console.log("You can't place the rover outside of the safe area!");
  } else if (rover1.x == 0 && rover1.direction == "E") {
    console.log("You can't place the rover outside of the safe area!");
  } else {
    console.log("moveBackward was called");   
      switch (rover1.direction) {
    case "W": 
      rover1.x += 1;
      console.log(`Command center the rover has position: x=${rover1.x}, y=${rover1.y}`);
      break;
    case "N":
      rover1.y += 1;
      console.log(`Command center the rover has position: x=${rover1.x}, y=${rover1.y}`);
      break;
    case "S":
      rover1.y -= 1;
      console.log(`Command center the rover has position: x=${rover1.x}, y=${rover1.y}`);
      break;
    case "E":
      rover1.x -= 1;
      console.log(`Command center the rover has position: x=${rover1.x}, y=${rover1.y}`); 
      break;
      }
    let newPosition = {x: rover1.x, y: rover1.y};

    rover1.travelLog.push(newPosition);
  }
}

//moveForward (Rover1, map, Rover2);

//moveBackward (Rover1, map, Rover2);

function commands(rover1, rover2, command, board, size) {
    let starterPosition = {x: rover1.x, y: rover1.y};
  
  createBoard(size,board);
  
  console.log(board);
  
  randomPos(rover1);
  randomPos(rover2);
  randomDirection(rover1);
  randomDirection(rover2);
  
  rover1.travelLog.push(starterPosition);
  
  console.log(rover1);
  console.log(rover2);
  
  for (let i = 0; i < command.length; i++) {
    let order = command[i];
    switch(order) {
      case "f":
        moveForward(rover1, board, rover2);
        break;
      case "l":
        turnLeft(rover1);
        break;
      case "r":
        turnRight(rover1);
        break;
      case "b":
        moveBackward(rover1, board, rover2);
        break;
      default:
        console.log(`Wrong command.`);
        break;
    }
  }
  console.log(rover1.travelLog);
}

//commands(pRover, sRover, "rffrfflfrffbb", map);

//commands(pRover, sRover, "rffrfflfrffbb", mapa, tamanho);