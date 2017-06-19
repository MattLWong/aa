"use strict";

function soundMaker(sound, times) {

  //closure
  function makeSound() {
    console.log(`${sound}`);
  }

  for(let i = 0; i < times; i++){
    makeSound();
  }
}

// soundMaker("woof", 4);

function summation(arr) {
  let sum = 1;

  function summer() {
    for(let i = 0; i < arr.length; i++) {
      sum *= arr[i];
    }
  }

  //this closure method modifies the variable sum
  summer();

  return sum;
}

// console.log(summation([1,2,3,4,5]));

let callback = function() {
  console.log("It has been 5 seconds");
}

let timeToWait = 5000;

// global.setTimeout(callback, timeToWait);


// passing anonymous function
/*global.setTimeout(function(){
  console.log("It has been 2 seconds!")
}, 2000);
*/

//ES6 (preferred syntax)
global.setTimeout(() => {
  console.log("It has been 2 seconds in ES6")
}, 2000);
