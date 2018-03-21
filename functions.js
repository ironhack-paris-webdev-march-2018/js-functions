// var name = ...
// var times = ..
// "name" and "times" are function "parameters"
// (variables sent to the function)
function hello (name, times) {
  if (times === undefined) {
    times = 1;
  }

  for (var x = 1; x <= times; x++) {
    console.log("Hello, " + name + "!");
  }
}

// the values sent to the function are "arguments"
// (they are connected to the "parameters" by their positions)
hello("Vivian");
hello("Arthur", 5);

// -----------------------------------

function doStuff (number) {
  return number ** 2;
}

// these examples work because "doStuff()" returns its result
var result = doStuff(5);
console.log( result );

console.log( 7 - doStuff(2) );
// console.log( 7 - 4 );
// console.log( 3 );

// -----------------------------------

// if has a clear result that it calculates, it should RETURN that result.
// returns, you can reuse functions over and over again.

function randomNumber (max) {
  return Math.floor(Math.random() * (max + 1));
}

function coinFlip () {
  if (randomNumber(1) === 1) {
    return 'face';
  }
  else {
    return 'pile';
  }
}

console.log( coinFlip() );
console.log( coinFlip() );
console.log( coinFlip() );
