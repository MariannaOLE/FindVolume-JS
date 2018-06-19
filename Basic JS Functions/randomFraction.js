function randomFraction() {

  // Only change code below this line.

  return Math.random();

  // Only change code above this line.
}


var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.floor(Math.random() * 10);
}



// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin +1)) + myMin; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);




function convertToInteger(str) {
 return parseInt(str) 
}

convertToInteger("56");